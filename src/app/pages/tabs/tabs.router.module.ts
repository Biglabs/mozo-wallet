import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { MyWalletPage } from '../my-wallet/my-wallet.page';
import { AddressBookPage } from '../address-book/address-book.page';
import { TransactionPage } from '../transaction/transaction.page';
import { SettingPage } from '../setting/setting.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'my-wallet',
        outlet: 'my-wallet',
        component: MyWalletPage
      },
      {
        path: 'address-book',
        outlet: 'address-book',
        component: AddressBookPage
      },
      {
        path: 'transaction',
        outlet: 'transaction',
        component: TransactionPage
      },
      {
        path: 'setting',
        outlet: 'setting',
        component: SettingPage
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
