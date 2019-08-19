const print = console.log,
			chalk = require('chalk');

module.exports = function() {
	function help() {
		print(chalk.blue('Usage:') + ' gulpify init' + chalk.bold(' <projectname> [options]'));
		print('');
		print('  ' + chalk.bold('<projectname>') + "    " + chalk.gray("Give your new project a name"));
		print(chalk.gray('                   Run `gulpify init my-project`'));
		print('');
		print('  No options at this time.');
		print('');
	};
	return help();
};
