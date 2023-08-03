import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'; 

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities: any
  datacity : any
  displayedColumns = ['city_id', 'city', 'last_update']

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllcities();
  }

  getAllcities() {
    this.apiService.getAllCity().subscribe(
      (data) => {
        this.cities = data;
        this.datacity=this.cities.data
        console.log(data)
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
