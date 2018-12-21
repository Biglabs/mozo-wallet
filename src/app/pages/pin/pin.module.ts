import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PinPage } from './pin.page';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PinPage }])
  ],
  declarations: [PinPage]
})
export class PinPageModule {}
