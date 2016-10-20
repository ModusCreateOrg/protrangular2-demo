const page = require('./pages/formPage');

describe('Angular 2 + Protractor Demo (with Page Objects)', function() {
	it('When I fill out the form and submit it', function() {
		browser.get('http://localhost:8080/');

		page.form.name.sendKeys('Andrew');
		page.form.favoriteColor.sendKeys('blue');
		page.form.submitButton.click();
	});
	it('Then I should receive a message back about myself', function() {
		page.form.response.getText().then(function (text) {
			expect(text).toEqual('My name is Andrew and my favorite color is blue')
		})
	});
	it('And the form should clear any text', function() {
		page.form.name.getAttribute('value').then(function(text) {
			expect(text).toEqual('');
		});
		page.form.favoriteColor.getAttribute('value').then(function(text) {
			expect(text).toEqual('');
		})
	})
})