import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  queryData: any;

  chartOptions: any = {
    series: [],
    chart: {
      type: 'bar',
      height: 400
    },
    xaxis: {
      categories: [], // Add more labels here...
    }
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getQueryData();
  }

  getQueryData() {
    this.apiService.getCountByRating().subscribe(
      (data) => {
        this.queryData = data;

        // Process data for ApexCharts
        this.chartOptions.series = [{
          name: 'Query Result',
          data: this.queryData[0].map((x: any) => x.movie_count)
        }];
        this.chartOptions.xaxis.categories = this.queryData[0].map((x: any) => x.rating);
      },
      (error) => {
        console.error('Error fetching query data:', error);
      }
    );
  }
}
