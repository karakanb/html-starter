#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _builder = require('./builder');

var _builder2 = _interopRequireDefault(_builder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('0.1.0').description('A simple CLI tool to create simple HTML site structure.').parse(process.argv);

var directory = _commander2.default.args[0];
var builder = new _builder2.default(directory);
builder.pp();