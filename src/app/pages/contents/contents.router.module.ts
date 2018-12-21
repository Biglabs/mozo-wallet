import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentsPage } from './contents.page';
import { PinPage } from '../pin/pin.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';

const routes: Routes = [
  {
    path: 'contents',
    component: ContentsPage,
    children: [
      {
        path: 'pin',
        outlet: 'pin',
        component: PinPage
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
export class ContentsPageRoutingModule {}
