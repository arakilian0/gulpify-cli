const print = console.log,
			chalk = require('chalk');

module.exports = function() {
	function help() {
		print(chalk.blue('Usage:') + ' gulpify ' + chalk.bold('<command>') + ' [options]');
		print('');
		print('  ' + chalk.bold('init') + "      " + chalk.gray("Create a new instance of `gulpify`"));
		print('  i,I' + chalk.gray('       Run `gulpify init --help` for options'));
		print('');
		print('  ' + chalk.bold('update') + "    " + chalk.gray("Create a new instance of `gulpify`"));
		print('  u,U' + chalk.gray('       Run `gulpify init --help` for options'));
	};
	return help();
};
