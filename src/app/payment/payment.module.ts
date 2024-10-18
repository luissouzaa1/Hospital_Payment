import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { PaymentReceiptComponent } from './payment-receipt/payment-receipt.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaymentFormComponent,      // Import standalone components
    PaymentHistoryComponent,   // Import standalone components
    PaymentReceiptComponent    // Import standalone components
  ]
})
export class PaymentModule { }