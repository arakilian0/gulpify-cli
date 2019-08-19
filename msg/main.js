const print = console.log,
			chalk = require('chalk');

module.exports = function() {
	function help() {
		print(chalk.blue('Usage:') + ' gulpify ' + chalk.bold('<command>') + ' [options]');
		print('');
		print('  ' + chalk.bold('init') + "           " + chalk.gray("Create a new instance of ") + chalk.gray.underline("gulpify"));
		print('  i' + chalk.gray('              Run `gulpify init --help` for options'));
		print('');
		print('  ' + chalk.bold('update') + "         " + chalk.gray("Update your version of ") + chalk.gray.underline("gulpify-cli"));
		print('  u' + chalk.gray('              Run \'gulpify update\' to get latest \n                 release'));
		print('');
		print('  --help' + "         " + chalk.gray("Print help text for given command"));
		print(chalk.black('  -h') + chalk.gray('             Run `gulpify <command> --help`'));
		print('');
		print('  --version' + "      " + chalk.gray("Print currently installed CLI version"));
		print(chalk.black('  -v') + chalk.gray('             Run `gulpify --version`'));
		print('');
	};
	return help();
};
