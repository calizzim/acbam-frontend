import { McalizziNavComponent } from './../../../reusable/components/mcalizzi-nav/mcalizzi-nav.component';
import { BackendRequestService } from '../../../reusable/services/backend-request.service';
import { Component, OnInit, ViewChild, AfterContentInit, ContentChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'budget-tool',
  templateUrl: './budget-tool.component.html',
  styleUrls: ['./budget-tool.component.css']
})

export class BudgetToolComponent implements OnInit {
  constructor(private http:BackendRequestService) {}
  @ViewChild(McalizziNavComponent) nav:McalizziNavComponent
  disabled
  loaded = false

  async updateDisabled() {
    let c = await this.http.getReadyForms()
    for(let k in c) { c[k] = !c[k] }
    this.disabled = c 
  }

  async ngOnInit() {
    await this.updateDisabled()
    this.loaded = true
  }
}
