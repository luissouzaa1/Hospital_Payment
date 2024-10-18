import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { CommonModule } from '@angular/common';  // <-- Import CommonModule

@Component({
  standalone: true,
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css'],
  imports: [CommonModule]
  
   
})
export class PaymentHistoryComponent implements OnInit {
  payments: any[] = [];

  constructor(private paymentService: PaymentService) {}
  ngOnInit() {
    // Fetch the payment history from the server
    this.paymentService.getPaymentHistory().subscribe((data: any[]) => {
      this.payments = data;
    }, error => {
      console.error('Error fetching payment history:', error);
    });
  }
}