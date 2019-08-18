const print = console.log,
			chalk = require('chalk');

module.exports = function() {
	function help() {
		print(chalk.blue('Usage:') + ' gulpify ' + chalk.bold('<command> [options]'));
		print('');
		print('To see help text, you can run:');
		print('');
		print('  gulpify --help');
		print('  gulpify <command> --help');
	};

	help();
};
