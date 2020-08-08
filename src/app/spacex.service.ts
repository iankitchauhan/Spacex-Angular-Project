import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http: HttpClient) { }

  getMissionData(apiUrl, data) {
    let params = new HttpParams();
    if (data) {
      for (const paramKeys in data) {
        params = params.append(paramKeys, data[paramKeys]);
      }
    }
    return  this.http.get(apiUrl, {params});
  }
}
