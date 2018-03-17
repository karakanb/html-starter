#!/usr/bin/env node

import program from 'commander';
import Builder from './builder';
import output from './outputter';

program
  .version('0.1.0')
  .description('A simple CLI tool to create simple HTML project skeleton.')
  .arguments('<output_path>')
  .parse(process.argv);

// Check if the argument is given.
const directory = program.args[0];
if (typeof directory === 'undefined') {
  output.error('Output path should be given as a string.');
  process.exit(1);
}

// Build the skeleton output.
const builder = new Builder(directory);
builder.build();
