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
      this.keycloakService.isLoggedIn().then((result) => {
        if (!result) {
          this.onLogin()
        } else {
          if (this.keycloakService["_instance"]) {
            this.appService.addSetting({
              token: this.keycloakService["_instance"]["token"],
              refreshToken: this.keycloakService["_instance"]["refreshToken"]
            }).subscribe((res: HttpResponse<any>) => {
              const data = res.body;
              console.log(res)
            })

          }

          this.mozoService.getUserProfile().subscribe((res: HttpResponse<any>) => {
            const data = res.body;
            console.log("electron", res.body.walletInfo.encryptSeedPhrase)
            console.log("ios", this.platform.platforms())


            // let generateAddressAtIndex = (wallet, addressIndex) => {
            //   try {
            //     let userWallet = wallet.derive(addressIndex);
            //     var address = "";
            //     var privkey = "";
            //     var keyPair = userWallet.keyPair;

            //     var privKeyBuffer = keyPair.d.toBuffer(32);
            //     privkey = privKeyBuffer.toString('hex');
            //     var addressBuffer = ethUtil.privateToAddress(privKeyBuffer);
            //     var hexAddress = addressBuffer.toString('hex');
            //     var checksumAddress = ethUtil.toChecksumAddress(hexAddress);
            //     address = ethUtil.addHexPrefix(checksumAddress);
            //     privkey = ethUtil.addHexPrefix(privkey);

            //     return { address: address, addressIndex: addressIndex, privkey: privkey };
                
            //   } catch (error) {
            //     console.error(error);
            //   }
            //   return null;
            // }


            // let generateWallets = (mnemonic) => {
            //   let seed = bip39.mnemonicToSeedHex(mnemonic);
            //   let rootKey = Bitcoin.HDNode.fromSeedHex(seed);
            //   let path = "m/44'/60'/0'/0";
            //   let wallet = rootKey.derivePath(path);
            //   return wallet
            // }
            if (data["walletInfo"]) {
              this.appGlobals.saveEncryptSeedWord(data.walletInfo.encryptSeedPhrase)
              //this.router.navigateByUrl("/pin-confirm")
              this.router.navigateByUrl("/app/tabs/(my-wallet:my-wallet)")
            } else {
              //this.router.navigateByUrl("/phrase")
              this.router.navigateByUrl("/app/tabs/(my-wallet:my-wallet)")
            }

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
    this.appService.deleteSetting(['token', 'refreshToken']).subscribe((res: HttpResponse<any>) => {
      console.log(res)
      this.keycloakService.logout(window.location.origin);
    }, (error) => {
      console.log(error)
      this.keycloakService.logout(window.location.origin);
    })
  }
}
