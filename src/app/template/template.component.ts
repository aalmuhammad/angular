import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  islogin : boolean = false
  constructor(private router: Router, private apiService: ApiService) {}

  // Metode ini akan memeriksa apakah sidebar harus ditampilkan
  isShowSidebar(): boolean {
    return this.router.url !== '/login';
  }

  // Metode ini akan memeriksa apakah header harus ditampilkan
  isShowHeader(): boolean {
    return this.router.url !== '/login';
  }

  ngOnInit(): void{
    this.islogin = this.apiService.isLoggedIn()
    if (!this.islogin){
      this.router.navigate(['/auth/login']); 
    }
  }
}
