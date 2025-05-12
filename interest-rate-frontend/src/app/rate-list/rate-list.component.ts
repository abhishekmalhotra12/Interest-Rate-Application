import { Component } from '@angular/core';
import { RateService, InterestRate } from '../rate.service';

@Component({
  selector: 'app-rate-list',
  templateUrl: './rate-list.component.html'
})
export class RateListComponent {
  selectedDate = '';
  rates: InterestRate[] = [];
  displayedColumns: string[] = ['businessDate', 'term', 'rateType', 'value'];
  loading = false;

  constructor(private rateService: RateService) {}

  loadRates() {
    if (!this.selectedDate) return;

    this.loading = true;
    this.rateService.getRatesByDate(this.selectedDate).subscribe({
      next: (data) => {
        this.rates = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
