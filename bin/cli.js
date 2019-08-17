#!/usr/bin/env node

const { commands,options,tasks,config,print } = require('./../lib/imports');

let commandFound;
if(!commands[0]) { tasks.default(commands,options) }
else {
	commands.forEach((cmd) => {
		config.commands.forEach((e) => {
			e.alias.forEach((alias) => {
				if(cmd === e.name || cmd === alias) {
					commandFound = true;
					require('./../cmd/' + e.name + '/' + e.name)(commands,options);
				};
			});
		});
	});
	if(!commandFound) { tasks.default(commands,options) };
};
