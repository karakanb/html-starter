#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _builder = require('./builder');

var _builder2 = _interopRequireDefault(_builder);

var _outputter = require('./outputter');

var _outputter2 = _interopRequireDefault(_outputter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('0.1.0').description('A simple CLI tool to create simple HTML project skeleton.').arguments('<output_path>').parse(process.argv);

// Check if the argument is given.
var directory = _commander2.default.args[0];
if (typeof directory === 'undefined') {
  _outputter2.default.error('Output path should be given as a string.');
  process.exit(1);
}

// Build the skeleton output.
var builder = new _builder2.default(directory);
builder.build();