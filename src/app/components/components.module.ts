import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LogoComponent } from './logo/logo.component';
import { PinCodeComponent } from './pin-code/pin-code.component';
import { LoadingComponent } from './loading/loading.component';
import { ScrollContentDirective } from './scroll-container/scroll-container.directive';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  imports: [
    CommonModule, 
    IonicModule
  ],
  declarations: [
    LogoComponent,
    PinCodeComponent,
    LoadingComponent,
    ScrollContentDirective
  ],
  exports: [
    CommonModule, 
    IonicModule,
    LogoComponent,
    PinCodeComponent,
    LoadingComponent,
    ScrollContentDirective,
    QRCodeModule
  ]
})
export class ComponentsModule {}
