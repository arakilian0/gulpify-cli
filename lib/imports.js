module.exports = {
	print: console.log,
	yargs: require('yargs').version(false).help(false).argv,
	chalk: require('chalk'),
	commands: require('./commands')(),
	options: require('./options')(),
	config: require('./../config.json'),
	tasks: {
		default: require('./../cmd/default/default')
	}
};
