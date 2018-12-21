import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { HttpResponse } from "@angular/common/http";
// import { KeycloakService } from 'keycloak-angular';
// import { AppService } from '../../app.service'
import { NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-pin',
  templateUrl: 'pin.page.html',
  styleUrls: ['pin.page.scss']
})
export class PinPage {
  constructor(
    private nav: NavController
  ) {

  }

  public pin: string = ""

  onChange(pin: string) {
    this.pin = pin
  }

  continue() {
    this.nav.navigateForward("pin-confirm")
  }
}
