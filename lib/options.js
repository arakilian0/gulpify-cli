const yargs = require('yargs').argv;

module.exports = function() {
	let yargsArray = [];
	let ignoreOptions = [];
	let extractOptions = [];

	for(let yarg in yargs) {
		if(yarg === '_' || yarg === '$0') { continue }
		else {
			yargsArray.push(yarg);
		}
	}

	yargsArray.forEach((option) => {
		if(option.includes('-')) {
			ignoreOptions.push(option.split('-'));
		};
	});

	if(ignoreOptions[0]) {
		let tmpExtract = [];
		ignoreOptions.forEach((option) => {
			let localExtract = [];
			for(let i = 0; i < option.length; i++) {
				localExtract.push(option[i].charAt(0).toUpperCase() + option[i].slice(1));
			}
			tmpExtract.push(localExtract);
		});
		tmpExtract.forEach((option) => {
			option[0] = option[0].toLowerCase();
			extractOptions.push(option.join(''));
		});
		for(let i = 0; i < yargsArray.length; i++) {
			for(let e = 0; e < extractOptions.length; e++) {
				if(extractOptions[e] === yargsArray[i]) {
					yargsArray[i] = '!remove!';
				}
			}
		}
		let finalOptionExport = [];
		yargsArray.forEach((yarg) => {
			if(yarg !== '!remove!') {
				finalOptionExport.push(yarg);
			}
		});
		return finalOptionExport;
	}
	else { return yargsArray }

};
