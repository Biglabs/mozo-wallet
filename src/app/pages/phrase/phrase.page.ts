import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-phrase',
  templateUrl: 'phrase.page.html',
  styleUrls: ['phrase.page.scss']
})
export class PhrasePage {
  constructor(
    private nav: NavController
  ) {

  }

  isConfirmed: boolean = false;

  confirmStoredPhrase() {
    this.isConfirmed = !this.isConfirmed
  }

  continue() {
    this.nav.navigateForward("/pin")
  }
}
