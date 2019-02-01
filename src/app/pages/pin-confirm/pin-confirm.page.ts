import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpResponse } from "@angular/common/http";
// import { HttpResponse } from "@angular/common/http";
// import { KeycloakService } from 'keycloak-angular';
import { AppGlobals } from '../../app.globals'
import { MozoService } from '../../services/mozo.service'
import { AppService } from '../../app.service'
import Utils from '../../utils'

@Component({
  selector: 'app-pin-confirm',
  templateUrl: 'pin-confirm.page.html',
  styleUrls: ['pin-confirm.page.scss']
})
export class PinConfirmPage {

  public loading: boolean = false
  public pinError: boolean = false
  public isPinConfirm: boolean = true
  private pin: string = ""

  constructor(
    private appGlobals: AppGlobals,
    private nav: NavController,
    private mozoService: MozoService,
    private appService: AppService,
  ) {
    if (this.appGlobals.encryptSeedWord) {
      this.isPinConfirm = false
    }
  }

  onChange(pin: string) {
    this.pinError = false
    this.pin = pin
  }

  continue() {
    let mnemonic = this.appGlobals.seedWord
    if (this.appGlobals.encryptSeedWord) {
      mnemonic = Utils.encryption.decrypt(this.appGlobals.encryptSeedWord, this.pin)
    }


    if (mnemonic) {
      this.loading = true
      let wallet = Utils.wallet.generateWallets(mnemonic)

      let address = Utils.wallet.generateAddressAtIndex(wallet, 0)


      if (address) {
        address['privkey'] = Utils.encryption.encrypt(address['privkey'], this.pin)

        console.log("address", address)

        let saveAddress = () => {
          this.appGlobals.address = address.address
          this.appService.addSetting({
            "Address": address
          }).then((data) => {
            console.log(data)
          }, (error) => {
            console.log(error)
          })
        }

        if (this.appGlobals.seedWord) {
          let repData = {
            encryptSeedPhrase: Utils.encryption.encrypt(mnemonic, this.pin),
            offchainAddress: address.address
          };
          this.mozoService.updateWalletInfo(repData).subscribe((res: HttpResponse<any>) => {
            const data = res.body.data;

            console.log("user", data)
            saveAddress()
            this.nav.navigateRoot('/app/tabs/(my-wallet:my-wallet)')

          }, (error) => {
            console.log("error", error)
          })
        } else {
          saveAddress()
          this.nav.navigateRoot('/app/tabs/(my-wallet:my-wallet)')
        }
      }
    } else {
      this.pinError = true
    }
  }
}
