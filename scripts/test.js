const shell = require("shelljs");
shell.config.fatal = true;
shell.config.verbose = true;

shell.exec('npx jest  test/ --color')
