import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpResponse } from "@angular/common/http";
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { ModalController } from '@ionic/angular';
import { SendConfirmPage } from './pages/send-confirm/send-confirm.page';

// import { Plugins, AppState } from '@capacitor/core';

// const { App } = Plugins;

import { MozoService, DataReponse } from './services/mozo.service'
import { AppService } from './app.service'
import { AppGlobals } from './app.globals'

import Utils from './utils'
import { AlertService } from './services/alert/alert.service';

// import encryption from './helpers/EncryptionUtils';
// import bip39 from 'bip39'
// import Bitcoin from 'bitcoinjs-lib'
//import ethUtil from 'ethereumjs-util';

declare let electron: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private keycloakService: KeycloakService,
    private mozoService: MozoService,
    private appService: AppService,
    private appGlobals: AppGlobals,
    private router: Router,
    public modalController: ModalController,
    private alertService: AlertService,
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    //console.log('resumed', this.platform.platforms());


    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.platform.resume.subscribe((res) => {
      //   console.log('resumed', res);
      // });
      // App.addListener('appStateChange', (state: AppState) => {
      //   // state.isActive contains the active state
      //   console.log('App state changed. Is active?', state.isActive);
      // });
      this.keycloakService.isLoggedIn().then(async (result) => {
        console.log("result", result)
        if (!result) {
          this.onLogin()
        } else {
          if (this.keycloakService["_instance"]) {
            await this.appService.addSetting({
              token: this.keycloakService["_instance"]["token"],
              refreshToken: this.keycloakService["_instance"]["refreshToken"]
            }).then((data) => {
              console.log(data)
            }, (error) => {
              console.log(error)
            })
          }


          try {
            console.log("ipcRenderer", electron.ipcRenderer)
            electron.ipcRenderer.on("send-transaction", async (event, arg) => {
              arg.type = "ex" //call from external
              arg.from = this.appGlobals.address

              this.appGlobals.txData = arg;
              const modal = await this.modalController.create({
                component: SendConfirmPage,
                componentProps: { value: 123 }
              });

              return await modal.present();
            })

            electron.ipcRenderer.on("send-transaction-airdrop", (event, arg) => {

              let airdropData = arg
              // arg.type = "ex" //call from external
              // arg.txType = "airdrop"
              airdropData.address = this.appGlobals.address
              airdropData.active = true;
              airdropData.mozoAirdropPerCustomerVisit *= 100;
              airdropData.totalNumMozoOffchain *= 100;

              const sendCreateAirdrop = () => {
                this.mozoService.createAirDropEvent(airdropData).subscribe(async (res: HttpResponse<any>) => {
                  const data = res.body.data.items;
                  if (data) {
                    let txData = {
                      type: "ex",
                      txType: "airdrop",
                      to: "SOLO",
                      value: arg.totalNumMozoOffchain,
                      action: "SIGN",
                      params: data,
                    };

                    this.appGlobals.txData = txData;
                    const modal = await this.modalController.create({
                      component: SendConfirmPage,
                      componentProps: { value: 123 }
                    });

                    return await modal.present();
                  }


                }, (error) => {

                })
              }

              if (!arg.beaconInfoId) {
                this.mozoService.getBeacon().subscribe((res: HttpResponse<any>) => {
                  const data = res.body.data.items;
                  arg.beaconInfoId = data[0].id;
                  sendCreateAirdrop()

                }, (error) => {

                })
              } else {
                sendCreateAirdrop()
              }
            })

            electron.ipcRenderer.on("get-balance", async (event, arg) => {
              this.mozoService.getBalance(this.appGlobals.address).subscribe((res: HttpResponse<any>) => {

                const data = res.body.data;
                electron.ipcRenderer.send("get-balance-callback", JSON.stringify(data))
                console.log("get-balance ", data)

              }, (error) => {

              })
            })

            electron.ipcRenderer.on("get-addressbook", async (event, arg) => {
              this.mozoService.getAddressBook().subscribe((data: DataReponse) => {
                electron.ipcRenderer.send("get-addressbook-callback", JSON.stringify(data))
                console.log("get-addressbook ", data)

              }, (error) => {

              })
            })

            electron.ipcRenderer.on("get-transaction-status", async (event, arg) => {
              this.mozoService.getTransactionStatus(arg.txhash).subscribe((res: DataReponse) => {
                if(!res.success) {
                  console.log('Can not get hash status')
                  console.log('arg', arg)
                  console.log('res', res)
                }
                const data = res.data;
                electron.ipcRenderer.send("get-transaction-status-callback", JSON.stringify(data))
                console.log("get-transaction-status ", data)

              }, (error) => {

              })
            })

            electron.ipcRenderer.on("get-transaction-history", async (event, arg) => {
              this.mozoService.getTransactions(this.appGlobals.address, { page: arg.page, size: arg.size }).subscribe((res: HttpResponse<any>) => {
                const data = res.body.data ? res.body.data.items : [];

                let txhistory = [];
                data.map(x => {
                  if (x.decimal) {
                    x.amount /= Math.pow(10, x.decimal);
                  }
                  x.exchange_rates = [null]

                  x.address_book_name = null;

                  txhistory.push(x)

                });

                electron.ipcRenderer.send("get-transaction-history-callback", JSON.stringify(txhistory))
                console.log("get-transaction-history ", txhistory)

              }, (error) => {

              })
            })
          } catch (error) {
            console.log("This is not a electron app")
          }


          this.mozoService.getUserProfile().subscribe((res: HttpResponse<any>) => {
            const data = res.body.data;

            if (data["walletInfo"]) {
              this.appGlobals.saveEncryptSeedWord(data.walletInfo.encryptSeedPhrase);

              console.log("user", data)

              this.appService.getSetting(['Address']).then((data) => {
                console.log("data", data)

                if (data["Address"]) {
                  this.appGlobals.address = data["Address"]["address"]
                  this.router.navigateByUrl("/app/tabs/(my-wallet:my-wallet)")

                } else {
                  this.router.navigateByUrl("/pin-confirm")
                }
              }, (error) => {
                this.router.navigateByUrl("/pin-confirm")
              })

            } else {
              this.router.navigateByUrl("/phrase")
            }

          }, (error) => {
            console.log("error", error)
            this.onLogout()
          })
        }
      })
    });
  }

  onLogin(): void {
    this.keycloakService.login({
      redirectUri: window.location.origin
    });
  }

  onLogout(): void {
    this.appService.deleteSetting(['token', 'refreshToken', 'Address']).then((data) => {
      console.log(data)
      this.keycloakService.logout(window.location.origin);
    }, (error) => {
      console.log(error)
      this.keycloakService.logout(window.location.origin);
    })
  }
}
