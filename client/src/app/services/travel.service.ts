import { Injectable } from '@angular/core';
import { Travel } from '../models/travel.model';
import { TRAVELS } from '../mocks/travels.mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  apiBaseUrl = 'api/travels';

  constructor(private http: HttpClient) {}

  getTravels() {
    return this.http.get<Travel[]>(`${this.apiBaseUrl}/`)
  }

  getTravel(id: string): Observable<Travel> {
    // const travel = TRAVELS.find(viaggio => viaggio._id === id);
    // return of (travel);

    return this.http.get<Travel>(`${this.apiBaseUrl}/${id}`)
  }

  addTravel(travel: any): Observable<Travel> {
    return this.http.post<any>(`${this.apiBaseUrl}/`, travel)
  }
}
