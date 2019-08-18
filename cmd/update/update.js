const print = console.log,
	  chalk = require('chalk'),
	  yargs = require('yargs').argv,
	  config = require('./../../config.json'),
	  help = require('./../../msg/__msg__');

module.exports = function(commands,options,projectName) {
	let optionFound;
	options.forEach((option) => {
		config.options.forEach((configOption) => {
			configOption.alias.forEach((alias) => {
				if(option === configOption.name || option === alias) {
					optionFound = require('./options/' + configOption.name);
				};
			});
		});
	});

	if(!optionFound) {
		print(options);
	}
	else {
		print(options);
	};
};
