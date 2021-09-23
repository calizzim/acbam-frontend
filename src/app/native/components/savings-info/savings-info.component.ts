import { CurrencyLettersPipe } from '../../../reusable/pipes/currency-letters.pipe';
import { BackendRequestService } from '../../../reusable/services/backend-request.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'savings-info',
  templateUrl: './savings-info.component.html',
  styleUrls: ['./savings-info.component.css']
})

export class SavingsInfoComponent {
  constructor(
    private http:BackendRequestService,
    public currencyLetters: CurrencyLettersPipe) { }
  @Output() formSubmitted:EventEmitter<any> = new EventEmitter()

  submitForm(data) {
    this.formSubmitted.emit()
  }
}

