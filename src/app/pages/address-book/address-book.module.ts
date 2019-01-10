import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddressBookPage } from './address-book.page';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AddressBookPage }])
  ],
  declarations: [AddressBookPage]
})
export class AddressBookPageModule {}
