const package = require('./../../../package.json'),
			print = console.log,
			chalk = require('chalk');

module.exports = function(commands,options) {
	print('runinng default function');
	// function help() {
	// 	print(chalk.blue('Usage:') + ' gulpify init' + chalk.bold(' <projectname> [options]'));
	// 	print('');
	// 	print('  ' + chalk.bold('--help') + "         " + chalk.gray("Create a new instance of `gulpify`"));
	// 	print(chalk.black('  -h,-H') + chalk.gray('          Run `gulpify init --help` for options'));
	// 	print('');
	// 	print('  ' + chalk.bold('--version') + "      " + chalk.gray("Create a new instance of `gulpify`"));
	// 	print(chalk.black('  -v,-V') + chalk.gray('          Run `gulpify init --help` for options'));
	// 	print('');
	// 	print('  ' + chalk.bold('--version') + "      " + chalk.gray("Create a new instance of `gulpify`"));
	// 	print(chalk.black('  -v,-V') + chalk.gray('          Run `gulpify init --help` for options'));
	// };
	//
	// if(projectName) {
	// 	return print(projectName);
	// }
	// else {
	// 	return help();
	// }
};
