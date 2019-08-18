const chalk = require('chalk'),
			print = console.log,
			child_process = require('child_process');

module.exports = function(commands,options,projectName) {
	if(!options[0]) {
		child_process.exec('curl -L https://github.com/arakilian0/gulpify/tarball/master | tar xz && mv arakilian0-gulpify-* ' + projectName + ' && cd ' + projectName + ' && npm install && ./run/install.js', {},
			function(error, stdout, stderr) {
				process.stdout.write(stdout + '\n');
				process.stderr.write(stderr + '\n');
				if (error !== null) {
					print(error);
					return print(chalk.red.bold('\n  ERROR OCCURED WHILE INSTALLING GULPIFY\n') + chalk.gray.bold('  (read error logs above)\n'));
				}
				else {
					return print(chalk.green.bold('       SUCCESFULLY INSTALLED GULPIFY ') + chalk.bold('('+projectName+')') + '\n' + chalk.gray.bold('  restart your terminal/IDE to propagate changes\n'));
				}
		});
	}
	else {
		return print('\n  gulpify-cli: ' + chalk.gray.bold('init options coming soon') + '\n');
	}
};
