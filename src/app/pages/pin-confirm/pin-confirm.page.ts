import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { HttpResponse } from "@angular/common/http";
// import { KeycloakService } from 'keycloak-angular';
import { AppGlobals } from '../../app.globals'
import Utils from '../../utils'

@Component({
  selector: 'app-pin-confirm',
  templateUrl: 'pin-confirm.page.html',
  styleUrls: ['pin-confirm.page.scss']
})
export class PinConfirmPage {

  public loading: boolean = false
  public isPinConfirm: boolean = true
  private pin: string = ""

  constructor(
    private appGlobals: AppGlobals,
    private nav: NavController
  ) {
    if (this.appGlobals.encryptSeedWord) {
      this.isPinConfirm = false
    }
  }

  onChange(pin: string) {
    console.log("code", pin)
    this.pin = pin
  }

  continue() {
    this.loading = true
    if (this.appGlobals.encryptSeedWord && this.pin.length > 0) {
      let mnemonic = Utils.encryption.decrypt(this.appGlobals.encryptSeedWord, this.pin)
      console.log(mnemonic)

      let priKey = Utils.wallet.generateWallets(mnemonic)

      let address = Utils.wallet.generateAddressAtIndex(priKey, 0)

      if(address) {
        this.nav.navigateRoot('/app/tabs/(my-wallet:my-wallet)')
      }
    }

  }

}
