// project started at 1330

/*
 * calc
 * https://github.com/jeffminnear/node-calc
 *
 * Copyright (c) 2016 Jeff Minnear
 * Licensed under the MIT license.
 */

'use strict';

const program = require('commander');

program
  .version('0.1.0')
  .arguments('<string>')
  .action( (string) => {
    program.string = string;
  });

program.parse(process.argv);


// log input for debugging
console.log("Your input was '" + program.string + "'");
