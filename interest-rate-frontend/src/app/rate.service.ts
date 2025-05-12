import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InterestRate {
  businessDate: string;
  term: string;
  rateType: string;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class RateService {
  // Use relative path so Angular proxy forwards to .NET backend
  private apiUrl = 'http://localhost:5251/api/interestrates';

  constructor(private http: HttpClient) {}

  // POST /api/rates
  addRate(rate: InterestRate): Observable<any> {
    return this.http.post(this.apiUrl, rate);
  }

  // GET /api/rates/{date}
  getRatesByDate(date: string): Observable<InterestRate[]> {
    return this.http.get<InterestRate[]>(`${this.apiUrl}/by-date/${date}`);
  }
}
