const chalk = require('chalk'),
			print = console.log,
			child_process = require('child_process');

module.exports = function(commands,options) {
	print(chalk.bold('\n  Please wait a moment while gulpify-cli updates.\n'));
	child_process.exec('npm update -g gulpify-cli', {},
		function(error, stdout, stderr) {
			process.stdout.write(stdout + '\n');
			process.stderr.write(stderr + '\n');
			if (error !== null) {
				print(error);
				return print(chalk.red.bold('\n  ERROR OCCURED WHILE UPDATING GULPIFY-CLI\n') + chalk.gray.bold('  (read error logs above)\n'));
			}
			else {
				return print(chalk.green.bold('  SUCCESFULLY UPDATED GULPIFY-CLI ') + '\n' + chalk.gray.bold('  run gulpify --version\n'));
			}
	});
};
