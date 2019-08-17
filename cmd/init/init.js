const print = console.log,
			chalk = require('chalk'),
			yargs = require('yargs').argv,
			config = require('./../../config.json'),
			help = require('./../../msg/__msg__'),
			init = require('./../../lib/init');

module.exports = function(commands,options) {
	let optionFound;
	let projectName = commands[1];

	options.forEach((option) => {
		config.options.forEach((configOption) => {
			configOption.alias.forEach((alias) => {
				if(option === configOption.name || option === alias) {
					optionFound = require('./options/' + configOption.name);
				};
			});
		});
	});

	if(projectName) { init(commands,options,projectName) }
	else {
		if(optionFound) { optionFound(commands,options) }
		else { help.generic() }
	}
};
