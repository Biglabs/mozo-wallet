import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LogoComponent } from './logo/logo.component';
import { PinCodeComponent } from './pin-code/pin-code.component';
import { LoadingComponent } from './loading/loading.component';
import { ScrollContentDirective } from './scroll-container/scroll-container.directive';
import { QRCodeModule } from 'angularx-qrcode';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AutoSizeInputModule} from 'ngx-autosize-input';

@NgModule({
  imports: [
    CommonModule, 
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    AutoSizeInputModule,
  ],
  declarations: [
    LogoComponent,
    PinCodeComponent,
    LoadingComponent,
    ScrollContentDirective,
    AddressDetailsComponent
  ],
  exports: [
    CommonModule, 
    IonicModule,
    LogoComponent,
    PinCodeComponent,
    LoadingComponent,
    ScrollContentDirective,
    AddressDetailsComponent,
    QRCodeModule
  ],
  entryComponents: [
    AddressDetailsComponent,
  ]
})
export class ComponentsModule {}
