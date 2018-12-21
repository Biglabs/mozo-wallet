import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url : string;
  constructor(private http: HttpClient) {
    this.url = window.location.origin + '/app';
  }

  public getSetting(params: any = []): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.url}/setting`, { params: params, observe: 'response' });
  }

  public deleteSetting(params: any = []): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.url}/setting`, { params: params, observe: 'response' });
  }

  public addSetting(data): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.url}/setting`, data , { observe: 'response' });
  }
}
