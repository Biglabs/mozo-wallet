import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PinConfirmPage } from './pin-confirm.page';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PinConfirmPage }])
  ],
  declarations: [PinConfirmPage]
})
export class PinConfirmPageModule {}
