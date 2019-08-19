let print = console.log,
		chalk = require('chalk'),
		help = require('./../../msg/msg'),
		child_process = require('child_process');

module.exports = function(argsArray) {
	if(argsArray[0]) {
		switch(argsArray[0]) {
			case "-h":
		  case "--help":
				help.update();
		    break;

		  case "-v":
		  case "--version":
				help.version();
		    break;

		  default:
		    help.generic();
		}
	}
	else {
		print(chalk.bold('\n  Please wait a moment while gulpify-cli updates.\n'));
		child_process.exec('npm update -g gulpify-cli', {},
			function(error, stdout, stderr) {
				process.stdout.write(stdout + '\n');
				process.stderr.write(stderr + '\n');
				if (error !== null) {
					print(error);
					return print(chalk.red.bold('\n  ERROR OCCURED WHILE UPDATING gulpify-cli\n') + chalk.gray.bold('  (read error logs above)\n'));
				}
				else {
					return print(chalk.green.bold('  SUCCESFULLY UPDATED gulpify-cli ') + '\n' + chalk.gray.bold('  run gulpify --version\n'));
				};
		});
	};
};
