import { Component } from '@angular/core';
import { RateService, InterestRate } from '../rate.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-rate-form',
  templateUrl: './rate-form.component.html'
})
export class RateFormComponent {
  rate: InterestRate = {
    businessDate: '', 
    term: '',
    rateType: '',
    value: 0
  };

  isSubmitting = false;

  constructor(private rateService: RateService, private snackBar: MatSnackBar) {}

  submitRate() {
    this.isSubmitting = true;  // ✅ Starts loading indicator

    this.rateService.addRate(this.rate).subscribe(  // ✅ Corrected use of subscribe()
      () => {  // ✅ Success callback block added properly
        this.snackBar.open('Rate saved successfully!', 'Close', {
          duration: 3000
        });

        this.isSubmitting = false;

        // ✅ Resetting form after submission
        this.rate = {
          businessDate: '',
          term: '',
          rateType: '',
          value: 0
        };
      },
      (error) => {  // ✅ Error callback block added properly
        this.snackBar.open('Failed to save rate. Please try again.', 'Close', {
          duration: 3000
        });

        this.isSubmitting = false;
        console.error('Error saving rate:', error);  // ✅ Log error for debugging
      }
    );
  }
}
