const print = console.log,
			chalk = require('chalk'),
			yargs = require('yargs').argv,
			config = require('./../../config.json');
let optionFound;

module.exports = function(options) {
	function help() {
		print(chalk.blue('Usage:') + ' gulpify ' + chalk.bold('<command> [options]'));
		print('');
		print('To see help text, you can run:');
		print('');
		print('  gulpify --help');
		print('  gulpify <command> --help');
	};

	options.forEach((option) => {
		config.options.forEach((configOption) => {
			configOption.alias.forEach((alias) => {
				if(option === configOption.name || option === alias) {
					optionFound = require('./options/' + configOption.name);
				};
			});
		});
	});

	if(!optionFound) { return help() }
	else { optionFound() };
};
