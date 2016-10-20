describe('Angular 2 + Protractor Demo', function() {
	it('When I fill out the form and submit it', function() {
		browser.get('http://localhost:8080/');

		element(by.id('name')).sendKeys('Andrew');
		element(by.id('favColor')).sendKeys('blue');
		element(by.id('formButton')).click();
	});
	it('Then I should receive a message back about myself', function() {
		element(by.id('formResponse')).getText().then(function (text) {
			expect(text).toEqual('My name is Andrew and my favorite color is blue')
		})
	});
	it('And the form should clear any text', function() {
		element(by.id('name')).getAttribute('value').then(function(text) {
			expect(text).toEqual('');
		});
		element(by.id('favColor')).getAttribute('value').then(function(text) {
			expect(text).toEqual('');
		})
	})
})