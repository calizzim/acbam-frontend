import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BackendRequestService } from './../../services/backend-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private http:BackendRequestService) { 
  }
  
  ngOnInit(): void {
  }

  async signup(data) {
    await this.http.uploadForm(data,'user')
    await this.http.login({email: data.email, password: data.password})
  }
}
