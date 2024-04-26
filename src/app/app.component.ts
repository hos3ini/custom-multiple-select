import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'm-select';

  cities = [
    { name: 'New York', category: 'East Coast' },
    { name: 'San Francisco', category: 'West Coast' },
  ];

  selectedCities: any[] = [];

  ngOnInit() {
    this.selectedCities = this.cities
  }

  myFilter(event: any) {
    let query = event.query.toLowerCase();
    this.cities = this.cities.filter(city => {
      return city.name.toLowerCase().indexOf(query) > -1 || city.category.toLowerCase().indexOf(query) > -1;
    });
  }
}
