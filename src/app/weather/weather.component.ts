import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
//import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: [ './weather.component.css' ]
})
export class WeatherComponent implements OnInit {
	location = { cityName: 'eskisehir', countryCode: 'tr' }; //Inıt'de gelen sehir
	weather = null;

	constructor(private weatherService: WeatherService) {}

	ngOnInit() {
		this.getWeather(this.location.cityName, this.location.countryCode);
	}
	getUrl() {
		return "url('http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg')";
	}

	//typescript'de değisken veri tipi girilebiliyor.
	getWeather(cityName: string, countryCode: string) {
		this.weatherService.getWeather(cityName, countryCode).subscribe(
			(res) => {
				console.log(res); //servisten gelen data console'a da basılıyor.
				this.weather = res;
			},
			(err) => {
				//console.log(err);
				alert('Bilgileri Kontrol Edin!');
			}
		);
	}

	//iki alanın da doldur
	submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
		if (cityName.value && countryCode.value) {
			this.getWeather(cityName.value, countryCode.value);

			cityName.value = '';
			countryCode.value = '';
		} else {
			alert('Gerekli alanları doldurun');
		}
		cityName.focus(); // ekran açıldıgında imleç şehir adı alanınında olur
		return false;
	}
}
