const print = console.log,
			chalk = require('chalk');

module.exports = function() {
	function help() {
		print(chalk.blue('Usage:') + ' gulpify init <projectname>' + chalk.bold(' [options]'));
		print('');
		print('  ' + chalk.bold('--help') + "         " + chalk.gray("Create a new instance of `gulpify`"));
		print(chalk.black('  -h,-H') + chalk.gray('          Run `gulpify init --help` for options'));
		print('');
		print('  ' + chalk.bold('--version') + "      " + chalk.gray("Create a new instance of `gulpify`"));
		print(chalk.black('  -v,-V') + chalk.gray('          Run `gulpify init --help` for options'));
		print('');
		print('  ' + chalk.bold('--version') + "      " + chalk.gray("Create a new instance of `gulpify`"));
		print(chalk.black('  -v,-V') + chalk.gray('          Run `gulpify init --help` for options'));
	};
	return help();
};
