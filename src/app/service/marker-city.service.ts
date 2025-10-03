import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, take } from 'rxjs';
import { City } from '../city';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class MarkerCityService {
  public api: string = "./assets/data/communes-france-2025.json";
  //"http://localhost:5000/city";
  constructor(private http: HttpClient) { }
  getCity(): Observable<City[]> {

    this.http.get<City[]>(this.api)
      /*  .pipe(
          map(cities => cities.slice(0, 150))
        )*/
      .subscribe((val) => console.log(val)

      );
    return this.http.get<City[]>(this.api);
  }
}
