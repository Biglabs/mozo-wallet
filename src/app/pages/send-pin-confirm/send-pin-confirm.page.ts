import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AppGlobals } from '../../app.globals'
import Utils from '../../utils'

@Component({
  selector: 'send-pin-confirm',
  templateUrl: 'send-pin-confirm.page.html',
  styleUrls: ['send-pin-confirm.page.scss']
})
export class SendPinConfirmPage {

  private loading: boolean = false
  public isSending: boolean = false
  private pin: string = ""
  private status: string = 'pending'

  constructor(
    private appGlobals: AppGlobals,
    private nav: NavController,
    public modalCtrl: ModalController
  ) {
    // if (this.appGlobals.encryptSeedWord) {
    //   this.isSending = false
    // }
  }

  onChange(pin: string) {
    console.log("code", pin)
    this.pin = pin
    if(pin.length >=6){
      this.isSending = true

      setTimeout(() => {
        this.status = 'success'
        setTimeout(() => {
          this.status = 'fail'
        }, 3000)
      }, 3000)
    }
  }

  dismiss(data?: any) {
    
    this.modalCtrl.dismiss(data);
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
