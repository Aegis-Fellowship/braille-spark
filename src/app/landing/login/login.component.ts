import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  // Switch to register panel
  @Output('changeLandingPage')
  changeLandingPage: EventEmitter<{ page: string }> = new EventEmitter();
  openRegisterPage() {
    this.changeLandingPage.emit({page: 'register'});
  }

  // Show Error Message
  showErrorMessage = false
  toggleErrorMessage() {
    this.showErrorMessage = !this.showErrorMessage
  }

  // Submit form
  formData = {
    "username": "",
    "password": ""
  }

  constructor(private http: HttpClient, private router: Router) {}
  endpoint = 'http://ec2-3-140-203-213.us-east-2.compute.amazonaws.com:8080/aegis-backend/login'
  onSubmit() {
    this.http.post(this.endpoint, this.formData)
      .subscribe((response) => {
        window.location.href = "dashboard"
      }, (error) => {
        this.toggleErrorMessage()
      });
  }
}
