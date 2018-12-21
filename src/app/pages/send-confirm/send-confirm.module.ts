import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SendConfirmPage } from './send-confirm.page';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SendConfirmPage }])
  ],
  declarations: [
    SendConfirmPage
  ]
})
export class SendConfirmPageModule {}
