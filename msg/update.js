const print = console.log,
			chalk = require('chalk');

module.exports = function() {
	function help() {
		print(chalk.blue('Usage:') + ' gulpify update' + chalk.bold(' [options]'));
		print('');
		print('  No options at this time.');
		print('');
	};
	return help();
};
