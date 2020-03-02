import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRequestComponent } from './payment-request.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [PaymentRequestComponent],
  imports: [
    // CommonModule,
    ComponentsModule,
    // FormsModule,
    // MatSelectModule,
    // MatAutocompleteModule,
    // ReactiveFormsModule,
    // MatInputModule,
    // MatFormFieldModule,
    RouterModule.forChild([{ path: '', component: PaymentRequestComponent }])
  ],
})
export class PaymentRequestModule { }
