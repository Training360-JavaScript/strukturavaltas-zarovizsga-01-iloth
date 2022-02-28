import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Construction } from '../model/construction';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {
  constructor(
    private http: HttpClient
  ) { }

  url: string = environment.apiUrl + 'constructions';

  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(this.url);
  }

  get(id: number): Observable<Construction> {
    return this.http.get<Construction>(this.url + '/' + id);
  }

  create(construction: Construction): Observable<Construction> {
    construction.id = 0;
    return this.http.post<Construction>(this.url, construction);
  }

  update(construction: Construction): Observable<Construction> {
    return this.http.put<Construction>(this.url + '/' + construction.id, construction);
  }

  delete(id: number): Observable<Construction> {
    return this.http.delete<Construction>(this.url + '/' + id);
  }

}
