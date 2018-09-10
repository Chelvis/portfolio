import { Injectable } from '@angular/core';
import { Contact } from '../../models/contact';
import { Observable } from 'rxjs';
import { endPoint } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiDir = `${endPoint}/contact`;

  constructor(
    private http: HttpClient
  ) { }

  post(data: Contact): Observable<any> {
    return this.http.post<any>(this.apiDir, data, { headers: { 'Content-type': 'application/json; charset=UTF-8' } });
  }
}
