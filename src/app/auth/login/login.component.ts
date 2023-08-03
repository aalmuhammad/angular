import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nik: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router, private snackBar: MatSnackBar) {}

  onLogin() {
    this.apiService.login(this.nik, this.password).subscribe(
      (response: any) => {
        this.apiService.saveToken(response.token);
        console.log(response.token)
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Login failed:', error);
        this.showSnackBar('Login Failed');
      }
    );
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
