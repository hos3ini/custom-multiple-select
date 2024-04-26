import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-austin',
  styleUrl: './austin.component.scss',
  template: `
    <p-multiSelect [options]="filteredCities" [(ngModel)]="selectedCities" optionLabel="name" [filter]="true" (onFilter)="filterCities($event)">
      <ng-template let-city pTemplate="item">
        <div>{{ city.name }} - {{ city.category }}</div>
      </ng-template>
    </p-multiSelect>
  `
})
export class AustinComponent implements OnInit {
  cities = [
    { name: 'New York', category: 'East Coast' },
    { name: 'San Francisco', category: 'West Coast' },
    { name: 'Chicago', category: 'Midwest' },
    // more cities
  ];

  filteredCities: any[] = [];

  selectedCities: any[] = [];

  ngOnInit() {
    this.filteredCities = this.cities;
    console.log(this.cities)
  }

  filterCities(event: any) {
    const query = event.filter.toLowerCase();
    console.log(query)
    return this.filteredCities = this.cities.filter(city =>
      city.name.toLowerCase().includes(query) || city.category.toLowerCase().includes(query)
    );
  }
}
