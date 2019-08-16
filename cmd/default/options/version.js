const package = require('./../../../package.json'),
			print = console.log;

module.exports = function() {
	let output = "CLI version: " + package.version;
	return print(output);
};
