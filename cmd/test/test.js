const ProgressBar = require('progress');
const chalk = require('chalk');

module.exports = function(argsArray) {
	var bar = new ProgressBar('[:bar] :percent/:total :etas', { total: 100, width: 40 });
	var timer = setInterval(function () {
	  bar.tick();
	  if(bar.complete) {
			console.log(chalk.green.bold('\n  SUCCESFULLY INSTALLED gulpify in ') + chalk.bold('/projectname') + '\n' + chalk.gray.bold('  restart your terminal/IDE to propagate changes\n'));
	    clearInterval(timer);
	  }
		else if(bar.curr === 1) {
	  	bar.interrupt(chalk.bold('\nPlease wait a moment while all dependencies get installed.\n'));
	  }
	}, 100);
};
