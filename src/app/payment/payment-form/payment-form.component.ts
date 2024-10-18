import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../payment.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css'],
  standalone: true,
  imports: [FormsModule] 
})
export class PaymentFormComponent {
  patientId: string = '';
  amount: number = 0;
  cardNumber: string = '';
  expirationDate: string = '';
  cvv: string = '';

  constructor(private paymentService: PaymentService, private router: Router) {}

 validateExpirationDate(expDate: string) {
  const today = new Date();
  const [year, month] = expDate.split('-').map(Number); 
  
  const selectedDate = new Date(year, month);

   if (selectedDate <= today) {
    return { invalidDate: true };
  }
  return null;
}
  submitPayment(paymentForm: any) {
    if (paymentForm.valid) {
      const paymentData = {
        patientId: this.patientId,
        amount: this.amount,
        cardNumber: this.cardNumber,
        expirationDate: this.expirationDate,
        cvv: this.cvv
      };

      
      this.paymentService.savePayment(paymentData).subscribe(response => {
        console.log('Payment saved', response);

        
        this.router.navigate(['/payment-history']);
      });
    } else {
      // Show popup with validation errors
      let errorMessage = 'Please correct the following errors:\n';
      
      if (!this.patientId) {
        errorMessage += '- Patient ID is required\n';
      }
      if (!this.amount || this.amount <= 0) {
        errorMessage += '- Amount must be a positive number\n';
      }
      if (!this.cardNumber || this.cardNumber.length !== 16) {
        errorMessage += '- Card Number must be 16 digits long\n';
      }
      if (!this.expirationDate || this.validateExpirationDate(this.expirationDate)) {
        errorMessage += '- Expiration Date must be after today\n';
      }
      if (!this.cvv || this.cvv.length !== 3) {
        errorMessage += '- CVV must be 3 digits long\n';
      }
      alert(errorMessage); 
    }
  }
}