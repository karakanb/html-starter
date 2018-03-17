'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, null, [{
    key: 'success',

    /**
     *
     * @param {string} message
     */
    value: function success(message) {
      console.log(_chalk2.default.green(message));
    }

    /**
     *
     * @param {string} message
     */

  }, {
    key: 'warning',
    value: function warning(message) {
      console.log(_chalk2.default.yellow(message));
    }

    /**
     *
     * @param {string} message
     */

  }, {
    key: 'error',
    value: function error(message) {
      console.error(_chalk2.default.bgRed(message));
    }

    /**
     *
     * @param {string} message
     */

  }, {
    key: 'info',
    value: function info(message) {
      console.log(_chalk2.default.cyan(message));
    }
  }]);

  return _class;
}();

exports.default = _class;
;