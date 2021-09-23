import { CurrencyLettersPipe } from '../../../reusable/pipes/currency-letters.pipe';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {
  @Output() formSubmitted:EventEmitter<any> = new EventEmitter()
  constructor(public currencyLetters:CurrencyLettersPipe) { }

  ngOnInit(): void {
  }

  submitForm(data) {
    this.formSubmitted.emit()
  }
}
