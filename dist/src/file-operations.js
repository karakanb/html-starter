'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ncp = require('ncp');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, null, [{
    key: 'makeDir',
    value: function makeDir(directory) {
      if (!_fs2.default.existsSync(directory)) {
        _fs2.default.mkdirSync(directory);
      }
    }
  }, {
    key: 'copy',
    value: function copy(source, destination) {
      _ncp.ncp.limit = 16;
      (0, _ncp.ncp)(source, destination, function (err) {
        if (err) {
          return console.error(err);
        }
        return true;
      });

      return true;
    }
  }]);

  return _class;
}();

exports.default = _class;