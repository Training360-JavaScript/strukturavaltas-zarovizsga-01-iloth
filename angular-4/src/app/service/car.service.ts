import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(
    private http: HttpClient
  ) { }

  url: string = environment.apiUrl + 'cars';

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(this.url + '/' + id);
  }

  create(Car: Car): Observable<Car> {
    Car.id = 0;
    return this.http.post<Car>(this.url, Car);
  }

  update(Car: Car): Observable<Car> {
    return this.http.put<Car>(this.url + '/' + Car.id, Car);
  }

  delete(id: number): Observable<Car> {
    return this.http.delete<Car>(this.url + '/' + id);
  }

}
