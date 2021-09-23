import { BackendRequestService } from '../../../reusable/services/backend-request.service';
import { CurrencyLettersPipe } from '../../../reusable/pipes/currency-letters.pipe';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  constructor(
    public currencyLetters: CurrencyLettersPipe,
    private http: BackendRequestService
  ) {}

  loaded=false;
  c = null;

  async ngOnInit() {
    this.c = (await this.http.uploadForm({},'summary')).computed;
    this.loaded=true
  }
}
