import { Component, OnInit } from '@angular/core';
import { Poi } from 'src/Poi';
import { Router } from '@angular/router';
import { PoisService } from 'src/app/services/pois.service';

export interface marker {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent implements OnInit {
  pois: Poi[] = [];
  categories: string[] = [];
  markers!: marker[];

  center = { lat: 38.726558175381314, lng: -9.154615919242033 };
  zoom: number = 12;

  ngOnInit(): void {
    this.poisService.getPois().subscribe((pois) => (this.pois = pois));
    this.categories = this.getCategories(this.pois);
  }

  constructor(private poisService: PoisService, private router: Router) {}

  getCategories(pois: Poi[]): string[] {
    let categories: string[] = [];
    if (pois)
      for (let entry of pois) {
        if (!categories.includes(entry.category))
          categories.push(entry.category);
      }
    return categories;
  }

  filterPois(pois: Poi[], selectedCategory: string): Poi[] {
    return pois.filter((poi) => poi.category == selectedCategory);
  }

  selectCategory(category: string): void {
    let filteredPois = this.filterPois(this.pois, category);
    this.markers = [];

    for (let poi of filteredPois) {
      this.markers.push({
        lat: poi.lat,
        lng: poi.lng,
      });
    }
  }

  openForm(marker: marker): void {
    this.router.navigate(['/form'], { state: { data: marker } });
  }
}
