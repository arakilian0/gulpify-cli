const print = console.log,
	    chalk = require('chalk'),
	    yargs = require('yargs').argv,
	    config = require('./../../config.json'),
	    help = require('./../../msg/__msg__'),
			update = require('./../../lib/update');

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

	if(options[0] && !optionFound) { return help.generic() };
	if(options[0] && optionFound) { return optionFound(commands,options) };
	if(!optionFound) { return update() };
};
