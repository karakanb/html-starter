#!/usr/bin/env node

import program from 'commander';
import Builder from './builder';

program
  .version('0.1.0')
  .description('A simple CLI tool to create simple HTML site structure.')
  .parse(process.argv);

const directory = program.args[0];
const builder = new Builder(directory);
builder.build();
