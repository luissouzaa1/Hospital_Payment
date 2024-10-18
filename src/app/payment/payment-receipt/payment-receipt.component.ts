import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../payment.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-payment-receipt',
  templateUrl: './payment-receipt.component.html',
  styleUrls: ['./payment-receipt.component.css'],
  imports: [CommonModule] 
})
export class PaymentReceiptComponent implements OnInit {
  payment: any;

  constructor(private route: ActivatedRoute, private paymentService: PaymentService) {}

  ngOnInit(): void {
    const paymentId = this.route.snapshot.paramMap.get('id');
    this.paymentService.getPaymentHistory().subscribe(payments => {
      this.payment = payments.find(p => p.id === paymentId);
    });
  }
}