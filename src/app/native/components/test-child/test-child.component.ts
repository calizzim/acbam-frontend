import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {
  computed:string = 'hello'
  constructor() { }
  ngOnInit(): void {
  }
}
