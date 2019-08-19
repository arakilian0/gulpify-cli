#!/usr/bin/env node

let print = console.log,
    argsArray = process.argv;argsArray.shift();argsArray.shift(),
    help = require('./../msg/msg');

switch(argsArray[0]) {
	// commands
	case "i":
  case "init":
		argsArray.shift();
    require('./../cmd/init/init')(argsArray);
    break;

  case "u":
  case "update":
		argsArray.shift();
		require('./../cmd/update/update')(argsArray);
    break;

	// options
  case "-h":
  case "--help":
		help.main();
    break;

  case "-v":
  case "--version":
		help.version();
    break;

  default:
    help.generic();
}
