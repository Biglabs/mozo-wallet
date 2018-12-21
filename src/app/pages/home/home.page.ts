import { Component } from '@angular/core';
import { Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppGlobals } from '../../app.globals'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(
    private appGlobals: AppGlobals,
    public events: Events,
    private router: Router,
  ) {
    this.events.subscribe('user:update', data => {
      console.log("Change", data)
      this.router.navigateByUrl("/phrase")
      //this.router.navigateByUrl("/app/tabs/(my-wallet:my-wallet)")
    });
  }
  ionViewWillUnload() {
    this.events.unsubscribe('user:update', () => {
      console.log('Unsubscribed!');
    });
  }
}
