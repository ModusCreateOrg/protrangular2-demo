
// Import array of names and colors
var values = require('./values');

// Define variables that will represent a random name and color each time
// the test is run.
var randName = values.names[Math.floor(Math.random() * values.names.length)];
var randColor = values.colors[Math.floor(Math.random() * values.colors.length)];

describe('Angular 2 + Protractor Demo', function() {
	// Fills out the form and submits it
	it('When I fill out the form and submit it', function() {
		browser.get('http://localhost:8080/');

		element(by.id('name')).sendKeys(randName);
		element(by.id('favColor')).sendKeys(randColor);
		element(by.id('formButton')).click();
	});
	// Checks to see that the HTML message returns the proper
	// string with input values
	it('Then I should receive a message back about myself', function() {
		element(by.id('formResponse')).getText().then(function (text) {
			expect(text).toEqual(
				'My name is ' + randName + ' and my favorite color is '+ randColor
			);
			console.log(text);
		})
	});
	// Checks to see that the form clears after each submit
	it('And the form should clear any text', function() {
		element(by.id('name')).getAttribute('value').then(function(text) {
			expect(text).toEqual('');
		});
		element(by.id('favColor')).getAttribute('value').then(function(text) {
			expect(text).toEqual('');
		})
	})
})