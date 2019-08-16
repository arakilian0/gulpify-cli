const print = console.log,
			chalk = require('chalk');

module.exports = function() {
	function help() {
		print(chalk.blue('Usage:') + ' gulpify ' + chalk.bold('<command>') + ' [options]');
		print('');
		print('  ' + chalk.bold('init') + "      " + chalk.gray("Create a new instance of `gulpify`"));
		print(chalk.gray('            Run `gulpify init --help` for options'));
	};
	return help();
};
