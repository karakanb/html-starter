'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fileOperations = require('./file-operations');

var _fileOperations2 = _interopRequireDefault(_fileOperations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(directory) {
    _classCallCheck(this, _class);

    this.directory = directory;
  }

  _createClass(_class, [{
    key: 'build',
    value: function build() {
      _fileOperations2.default.makeDir(this.directory);
      _fileOperations2.default.copy(__dirname + '/templates', this.directory);
      console.log('copied');
    }
  }]);

  return _class;
}();

exports.default = _class;