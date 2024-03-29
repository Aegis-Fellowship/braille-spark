import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-change-username',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './change-username.component.html',
  styleUrl: './change-username.component.sass'
})
export class ChangeUsernameComponent {
  // Submit form
  formData = {
    "oldUsername": "",
    "newUsername": ""
  }

  constructor(private http: HttpClient, private router: Router) {}
  endpoint = 'http://localhost:8080/aegis-backend/---'
  onSubmit() {
    this.http.post(this.endpoint, this.formData)
      .subscribe((response) => {
        window.location.href = "dashboard"
        alert("Username Changed")
      }, (error) => {
        console.log(error.Message)
        alert("Failed to change username")
      });
  }
}
