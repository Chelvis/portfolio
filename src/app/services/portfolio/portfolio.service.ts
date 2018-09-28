import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../../models/job';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  apiDir = `${environment.endPoint}portfolio`;

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiDir, { headers: { 'Content-type': 'application/json; charset=UTF-8' } });
  }

}
