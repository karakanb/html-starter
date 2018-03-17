'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _opn = require('opn');

var _opn2 = _interopRequireDefault(_opn);

var _fileOperations = require('./file-operations');

var _fileOperations2 = _interopRequireDefault(_fileOperations);

var _outputter = require('./outputter');

var _outputter2 = _interopRequireDefault(_outputter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(directory) {
    _classCallCheck(this, _class);

    this.directory = directory;
  }

  /**
   * Build the template by simply copying the whole template directory.
   */


  _createClass(_class, [{
    key: 'build',
    value: function build() {
      _outputter2.default.info('');
      _outputter2.default.success('****************************************');
      _outputter2.default.info('');

      // Copy the template files.
      _outputter2.default.warning('Generating the template...');
      _fileOperations2.default.makeDir(this.directory);
      _fileOperations2.default.copy(__dirname + '/templates', this.directory);
      _outputter2.default.success('HTML skeleton has been placed to ' + this.directory + '.');

      // Open the copied file in Google Chrome.
      (0, _opn2.default)(this.directory + '/index.html', { wait: false });

      _outputter2.default.info('');
      _outputter2.default.success('****************************************');
      _outputter2.default.info('');
    }
  }]);

  return _class;
}();

exports.default = _class;