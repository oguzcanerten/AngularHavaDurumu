import { TestBed, async } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';

describe('AWeatherComponent', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ WeatherComponent ]
			}).compileComponents();
		})
	);

	it('should create the app', () => {
		const fixture = TestBed.createComponent(WeatherComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'angular-weather-app'`, () => {
		const fixture = TestBed.createComponent(WeatherComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('pitonProje');
	});

	it('should render title in a h1 tag', () => {
		const fixture = TestBed.createComponent(WeatherComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-weather-app!');
	});
});
