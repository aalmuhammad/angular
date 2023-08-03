import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private router: Router, private apiService: ApiService) {}


}
