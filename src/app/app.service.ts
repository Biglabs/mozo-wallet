import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = window.location.origin + '/app';
  }

  public async getSetting(params: any = []): Promise<any> {
    return new Promise(async (resolve, reject) => {
      this.http.get<any>(`${this.url}/setting`, { params: params, observe: 'response' })
          .subscribe((res: HttpResponse<any>) => {
            let data = res.body["data"] || null
            resolve(data);

          }, (error) => {
            reject(error);
          })
    });

  }

  public async deleteSetting(params: any = []): Promise<any> {
    return new Promise(async (resolve, reject) => {
      this.http.delete<any>(`${this.url}/setting`, { params: params, observe: 'response' })
          .subscribe((res: HttpResponse<any>) => {
            let data = res.body["data"] || null
            resolve(data);

          }, (error) => {
            reject(error);
          })
    });
  }

  public async addSetting(data): Promise<any> {
    return new Promise(async (resolve, reject) => {
        this.http.post<any>(`${this.url}/setting`, data, { observe: 'response' })
            .subscribe((res: HttpResponse<any>) => {
              let data = res.body["data"] || null
              resolve(data);

            }, (error) => {
              reject(error);
            })
      });
  }

  
}
