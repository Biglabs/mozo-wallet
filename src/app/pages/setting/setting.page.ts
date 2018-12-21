import { Component } from '@angular/core';
import { HttpResponse } from "@angular/common/http";
import { KeycloakService } from 'keycloak-angular';
import { AppService } from '../../app.service'

@Component({
  selector: 'app-setting',
  templateUrl: 'setting.page.html',
  styleUrls: ['setting.page.scss']
})
export class SettingPage {
  constructor(
    private keycloakService: KeycloakService,
    private appService: AppService
  ) {
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
