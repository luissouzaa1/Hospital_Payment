import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private payments: any[] = []; 

  constructor() {}

  savePayment(paymentData: any): Observable<any> {
    // Simulate saving payment data
    this.payments.push(paymentData);
    return of({ success: true });
  }

  getPaymentHistory(): Observable<any[]> {
    // Return the saved payments as the history
    return of(this.payments);
  }
}