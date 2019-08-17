const package = require('./../package.json'),
			print = console.log;

module.exports = function(commands,options) {
	return print("CLI version: " + package.version);
};
