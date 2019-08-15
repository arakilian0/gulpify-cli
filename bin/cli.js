#!/usr/bin/env node

const { print,commands,options,tasks,config } = require('./../lib/imports');
let commandFound;

if(!commands[0]) {
	tasks.default(options);
}
else {
	commands.forEach((cmd) => {
		config.commands.forEach((e) => {
			if(cmd === e) {
				commandFound = true;
				require('./../cmd/'+cmd+'/'+cmd)(options);
			};
		});
	});
	if(!commandFound) {
		tasks.default(options)
	};
};
