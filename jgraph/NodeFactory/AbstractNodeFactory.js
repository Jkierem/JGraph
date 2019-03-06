"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utils = require("../Utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AbstractNodeFactory =
/*#__PURE__*/
function () {
  function AbstractNodeFactory() {
    _classCallCheck(this, AbstractNodeFactory);
  }

  _createClass(AbstractNodeFactory, [{
    key: "create",
    value: function create() {
      (0, _Utils.abstractMethodError)("NodeFactory.create");
    }
  }, {
    key: "compare",
    value: function compare(a, b) {
      (0, _Utils.abstractMethodError)("NodeFactory.compare");
    }
  }, {
    key: "getKey",
    value: function getKey(node) {
      return node.key;
    }
  }]);

  return AbstractNodeFactory;
}();

var _default = AbstractNodeFactory;
exports.default = _default;