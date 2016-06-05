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
    program.string = string.replace(/\s+/g, '');
  });

program.parse(process.argv);

// only allow numerical expressions
const regex = /[^\d\+\-\*\/\%\(\)]/;

if (program.string.match(regex) !== null) {
  console.log("Invalid characters detected!");
} else {
  // evaluate expression
  console.log(eval(program.string));
}
