import { BackendRequestService } from '../../../reusable/services/backend-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'budget-tool',
  templateUrl: './budget-tool.component.html',
  styleUrls: ['./budget-tool.component.css']
})

export class BudgetToolComponent implements OnInit{
  constructor(private http:BackendRequestService) {}
  disabled
  loaded = false

  async updateDisabled() {
    let c = await this.http.get('forms/ready')
    for(let k in c) { c[k] = !c[k] }
    this.disabled = c 
  }

  async ngOnInit() {
    await this.updateDisabled()
    this.loaded = true
  }
}
