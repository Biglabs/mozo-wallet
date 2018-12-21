import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LogoComponent } from './logo/logo.component';
import { PinCodeComponent } from './pin-code/pin-code.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    LogoComponent,
    PinCodeComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule, 
    IonicModule
  ],
  exports: [
    CommonModule, 
    IonicModule,
    LogoComponent,
    PinCodeComponent,
    LoadingComponent
  ]
})
export class ComponentsModule {}
