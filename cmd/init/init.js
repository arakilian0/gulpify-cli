let print = console.log,
		chalk = require('chalk'),
	  help = require('./../../msg/msg'),
		child_process = require('child_process'),
		commandToCall = "curl -L https://github.com/arakilian0/gulpify/tarball/master | tar xz && mv arakilian0-gulpify-* ",
		postCommandToCall = " && npm install",
		customInstallerCall = " && rm LICENSE.md CONTRIBUTING.md README.md";

module.exports = function(argsArray) {
	let projectName = argsArray[0];
	if(argsArray[0]) {
		switch(argsArray[0]) {
			case "-h":
		  case "--help":
				help.init();
		    break;

		  case "-v":
		  case "--version":
				help.version();
		    break;

		  default:
				argsArray.shift();
				if(argsArray[0]) {
					switch(argsArray[0]) {
						case "-h":
						case "--help":
							help.init();
							break;

						case "-v":
						case "--version":
							help.version();
							break;

						default:
							help.init();
					}
				}
				else {
					print(chalk.bold.green('\n  Please wait a moment while gulpify downloads.\n'));
					child_process.exec(commandToCall + projectName, {},
						function(error, stdout, stderr) {
							process.stdout.write(stdout + '\n');
							process.stderr.write(stderr + '\n');
							if (error !== null) {
								print(error);
								return print(chalk.red.bold('\n  ERROR OCCURED WHILE INSTALLING gulpify\n') + chalk.gray.bold('  (read error logs above)\n'));
							}
							else {
								print(chalk.bold.green('\n  installing devDependencies\n'));
								child_process.exec('cd ' + projectName + postCommandToCall, {},
									function(error, stdout, stderr) {
										process.stdout.write(stdout + '\n');
										process.stderr.write(stderr + '\n');
										if (error !== null) {
											print(error);
											return print(chalk.red.bold('\n  ERROR OCCURED WHILE INSTALLING gulpify\n') + chalk.gray.bold('  (read error logs above)\n'));
										}
										else {
											child_process.exec('cd ' + projectName + customInstallerCall, {},
												function(error, stdout, stderr) {
													process.stdout.write(stdout + '\n');
													process.stderr.write(stderr + '\n');
													if (error !== null) {
														print(error);
														return print(chalk.red.bold('\n  ERROR OCCURED WHILE INSTALLING gulpify\n') + chalk.gray.bold('  (read error logs above)\n'));
													}
													else {
														return print(chalk.green.bold('  SUCCESFULLY INSTALLED gulpify ') + chalk.bold('('+projectName+')') + '\n' + chalk.gray.bold(`  run 'cd ${projectName} && gulp'\n`));
													};
											});
										};
								});
							};
					});
				}
		}
	}
	else { return help.generic() };
};
