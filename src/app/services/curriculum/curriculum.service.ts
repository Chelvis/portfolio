import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  apiDir = `${environment.endPoint}curriculum`;

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<any> {
    return this.http.get<any>(this.apiDir, { headers: { 'Content-type': 'application/json; charset=UTF-8' } });
  }

}
