import { AppPage } from './app.po';
import { browser, logging, By } from 'protractor';

describe('Piton Proje Test', () => {
	let page: AppPage;

	/*beforeEach(() => {
		page = new AppPage();
	});

	it('should display welcome message', () => {
		page.navigateTo();
		expect(page.getTitleText()).toEqual('Welcome to pitonProje!');
	});

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(
			jasmine.objectContaining({
				level: logging.Level.SEVERE
			} as logging.Entry)
		);
	});*/
	describe('-----Login Ekranı Testleri-----', function() {
		browser.get('http://localhost:4200/login');

		it('Login ekranınana gidildi mi?', function() {
			var currentUrl = browser.driver.getCurrentUrl();

			expect(currentUrl).toMatch('/login');
		});

		it('Giris yapıldı mı?', function() {
			var userNameField = browser.driver.findElement(By.name('email'));

			var userPassField = browser.driver.findElement(By.name('passowrd'));

			var loginForm = browser.driver.findElement(By.name('button'));

			console.log('E-mail giriliyor...');

			userNameField.sendKeys('oguzcanerten@gmail.com');

			console.log('Sifre giriliyor...');

			userPassField.sendKeys('abc');

			expect(userNameField.getAttribute('value')).toEqual('oguzcanerten@gmail.com');

			expect(userPassField.getAttribute('value')).toEqual('abc');

			console.log('Giriş butonuna tıklanıyor...');

			loginForm.submit();

			browser.get('http://localhost:4200/weather');
		});
		it('Hava durumu ekranınana gidildi mi?', function() {
			var currentUrl = browser.driver.getCurrentUrl();

			expect(currentUrl).toMatch('/weather');
		});

		browser.waitForAngular();
	});
	it('Hava durumu testi tamamlandı mı?', function() {
		var cityName = browser.driver.findElement(By.name('cityName'));

		var countryCode = browser.driver.findElement(By.name('countryCode'));

		var clickButton = browser.driver.findElement(By.name('button'));

		//var weatherName = browser.driver.findElement(By.name('weatherName'));
		console.log('------Hava Durumu Ekranı Testleri------');
		console.log('Şehir adı giriliyor...');

		cityName.sendKeys('ankara');

		console.log('Ülke kodu giriliyor...');

		countryCode.sendKeys('tr');

		clickButton.submit();

		console.log('Hava durumu testi tamamlandı.');
		browser.waitForAngular();
	});
});
