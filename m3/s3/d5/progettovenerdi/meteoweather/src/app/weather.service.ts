import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private apiKey = 'b1e8f7bfabmsh175458246db311fp151de7jsn2cbd08a65ee7';
  private apiUrl = 'https://the-weather-api.p.rapidapi.com/api/weather';

  constructor( private http: HttpClient) { }

  searchWeatherByCity(city : string): Observable<any> {
    const headers = new HttpHeaders()
    .set("X-RapidAPI-Key", this.apiKey)
    .set("X-RapidAPI-Host","the-weather-api.p.rapidapi.com");

    const options = { headers};
    return this.http.get(`${this.apiUrl}/${city}`, options)
}
}
