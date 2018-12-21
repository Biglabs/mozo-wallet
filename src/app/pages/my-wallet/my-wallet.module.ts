import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyWalletPage } from './my-wallet.page';
import { ComponentsModule } from '../../components/components.module'
//import { SendConfirmPage } from '../send-confirm/send-confirm.page';

@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MyWalletPage }])
  ],
  declarations: [
    MyWalletPage,
    //SendConfirmPage
  ],
  entryComponents: [
    //SendConfirmPage
  ]
})
export class MyWalletPageModule { }
