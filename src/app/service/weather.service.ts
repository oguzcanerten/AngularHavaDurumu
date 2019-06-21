import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	apiKey: string = 'a53854b3f3f74559cdaa3b365c115ca4';
	URI: string = '';

	constructor(private http: HttpClient) {
		this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
	}

	getWeather(cityName: string, countryCode: string) {
		return this.http.get(`${this.URI}${cityName},${countryCode}`);
	}
}
