import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContentsPageRoutingModule } from './contents.router.module';

import { ContentsPage } from './contents.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { PinPageModule } from '../pin/pin.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ContentsPageRoutingModule,
    PinPageModule,
    AboutPageModule,
    ContactPageModule
  ],
  declarations: [ContentsPage]
})
export class ContentsPageModule {}
