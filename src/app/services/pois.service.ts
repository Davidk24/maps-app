import { Injectable } from '@angular/core';
import { Poi } from 'src/Poi';
import { POIS } from 'src/app/mock-pois';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PoisService {
  constructor() {}

  getPois(): Observable<Poi[]> {
    const pois = of(POIS);
    return pois;
  }
}
