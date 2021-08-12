import { transition, style, state, trigger, animate } from '@angular/animations';
import { Component, ContentChild, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements AfterViewInit {
  ngAfterViewInit() {
  }

}
