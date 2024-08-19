import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://h2918194.stratoserver.net:8443/duckraceJesingen/rank';
  
  constructor(private http: HttpClient) { }
  
  sendDuckData(apiKey: string, duckNumber: number, duckRaceID: number): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': apiKey,
      'Content-Type': 'application/json'
    });
    
    const data = {
      duckNumber,
      duckRaceID
    };
    
    return this.http.post(this.apiUrl, data, { headers });
  }
}