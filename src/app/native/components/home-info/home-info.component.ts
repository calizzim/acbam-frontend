import { CurrencyLettersPipe } from '../../../reusable/pipes/currency-letters.pipe';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.css']
})
export class HomeInfoComponent implements OnInit {
  @Output() formSubmitted:EventEmitter<any> = new EventEmitter()
  constructor(public currencyLetters:CurrencyLettersPipe) { }

  ngOnInit(): void {
  }

  submitForm(data) {
    this.formSubmitted.emit()
  }

}
