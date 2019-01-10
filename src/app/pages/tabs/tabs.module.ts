import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { TransactionPageModule } from '../transaction/transaction.module';
import { AddressBookPageModule } from '../address-book/address-book.module';
import { MyWalletPageModule } from '../my-wallet/my-wallet.module';
import { SettingPageModule } from '../setting/setting.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    MyWalletPageModule,
    SettingPageModule,
    AddressBookPageModule,
    TransactionPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
