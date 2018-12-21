import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { MyWalletPage } from '../my-wallet/my-wallet.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
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
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
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
