import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  constructor(private router: Router, private apiService: ApiService) {} 

  onLogoutClick(): void {
    this.apiService.logout();
    this.router.navigate(['/auth/login']);
  }
}

