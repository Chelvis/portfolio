import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Depoiment } from 'src/app/models/depoiments';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  apiDir = {
    currulum: `${environment.endPoint}curriculum.json`,
    depoiments: `${environment.endPoint}depoimentos.json`,
  };

  constructor(
    private http: HttpClient
  ) { }

  getCurriculum(): Observable<any> {
    return this.http.get<any>(this.apiDir.currulum, { headers: { 'Content-type': 'application/json; charset=UTF-8' } });
  }

  getDepoiments(): Observable<Depoiment[]> {
    return this.http.get<Depoiment[]>(this.apiDir.depoiments, { headers: { 'Content-type': 'application/json; charset=UTF-8' } });
  }

}
