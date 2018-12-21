import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SendPage } from './send.page';
import { ComponentsModule } from '../../components/components.module'
//import { SendConfirmPage } from '../send-confirm/send-confirm.page';
import { SendPinConfirmPage } from '../send-pin-confirm/send-pin-confirm.page';
import {MatSelectModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule} from '@angular/material';

@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forChild([{ path: '', component: SendPage }])
  ],
  declarations: [
    SendPage,
    SendPinConfirmPage
  ],
  entryComponents: [
    SendPinConfirmPage
  ]
})
export class SendPageModule { }

