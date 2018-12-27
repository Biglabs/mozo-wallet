import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import Utils from '../../utils'
import { AppGlobals } from '../../app.globals'
 
@Component({
  selector: 'app-phrase',
  templateUrl: 'phrase.page.html',
  styleUrls: ['phrase.page.scss']
})
export class PhrasePage {
  public mnemonic: string = ''
  constructor(
    private nav: NavController,
    private appGlobals: AppGlobals
  ) {
    this.mnemonic = Utils.wallet.generateMnemonic()
    console.log("mnemonic", this.mnemonic)
  }

  isConfirmed: boolean = false;

  confirmStoredPhrase() {
    this.isConfirmed = !this.isConfirmed
  }

  continue() {
    this.appGlobals.seedWord = this.mnemonic
    this.appGlobals.encryptSeedWord = null
    this.nav.navigateForward("/pin")
  }
}
