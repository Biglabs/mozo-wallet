import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MozoService {

  constructor(private http: HttpClient) {
  }
  
  getUserProfile(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${environment.apis.solomon}/user-profile`, {observe: 'response'});
  }
  
}
