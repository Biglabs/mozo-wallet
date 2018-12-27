import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpResponse } from "@angular/common/http";
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

import { MozoService } from './services/mozo.service'
import { AppService } from './app.service'
import { AppGlobals } from './app.globals'

import Utils from './utils'

// import encryption from './helpers/EncryptionUtils';
// import bip39 from 'bip39'
// import Bitcoin from 'bitcoinjs-lib'
//import ethUtil from 'ethereumjs-util';

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
    private router: Router
  ) {
    this.initializeApp();
  }


  async initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.keycloakService.isLoggedIn().then( async (result) => {
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

          this.mozoService.getUserProfile().subscribe((res: HttpResponse<any>) => {
            const data = res.body;
            
            if (data["walletInfo"]) {
              this.appGlobals.saveEncryptSeedWord(data.walletInfo.encryptSeedPhrase);

              console.log("user", data)

              this.appService.getSetting(['Address']).then((data) => {
                console.log("data", data)
                if(data["Address"]) {
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
