exports.config = {
	directConnect: true,
	capabilities: {
		'browserName': 'chrome'
	},
	specs: [
		'demo-spec-1.js',
		'demo-spec-2.js'
	],
	rootElement: 'my-app',
	jasmineNodeOpts: {
		print: function() {}
	},

	onPrepare: function() {
		var SpecReporter = require('jasmine-spec-reporter');
		// add jasmine spec reporter
		jasmine.getEnv().addReporter(new SpecReporter({ 
			displayStacktrace: 'none',
			displayFailedSpec: false,
			displaySpecDuration: true
		}));
	}

};