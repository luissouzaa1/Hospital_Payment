import { Routes } from '@angular/router';
import { PaymentFormComponent } from './payment/payment-form/payment-form.component';
import { PaymentHistoryComponent } from './payment/payment-history/payment-history.component';
import { PaymentReceiptComponent } from './payment/payment-receipt/payment-receipt.component';

export const routes: Routes = [  // Export the routes constant
  { path: 'payment-form', component: PaymentFormComponent },
  { path: 'payment-history', component: PaymentHistoryComponent },
  { path: 'payment-receipt/:id', component: PaymentReceiptComponent },
  { path: '', redirectTo: '/payment-form', pathMatch: 'full' },
  { path: '**', redirectTo: '/payment-form' }
];