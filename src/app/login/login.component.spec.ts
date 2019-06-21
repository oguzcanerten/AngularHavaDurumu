import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ LoginComponent ]
			}).compileComponents();
		})
	);
	let app;

	beforeEach(() => {
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		app = fixture.debugElement.componentInstance;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it(
		"should have title as 'Angular7-unit-testing!'",
		async(() => {
			expect(app.title).toBe('pitonProje!');
		})
	);
});
