'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fs = require('fs');

var makeDir = function makeDir(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
};

exports.default = { makeDir: makeDir };