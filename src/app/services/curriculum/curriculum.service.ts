import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depoiment } from 'src/app/models/depoiments';
import { Experience } from 'src/app/models/experience';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  apiDir = {
    currulum: `${environment.endPoint}curriculum.json`,
    depoiments: `${environment.endPoint}depoimentos.json`,
    experience: `${environment.endPoint}experience.json`
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

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiDir.experience, { headers: { 'Content-type': 'application/json; charset=UTF-8' } });
  }

}
