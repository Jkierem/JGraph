"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prop = exports.isDefined = exports.keysOf = exports.abstractMethodError = void 0;

var abstractMethodError = function abstractMethodError(methodName) {
  throw Error("Abstract method ".concat(methodName, " not implemented."));
};

exports.abstractMethodError = abstractMethodError;

var keysOf = function keysOf(obj) {
  return obj ? Object.keys(obj) : [];
};

exports.keysOf = keysOf;

var isDefined = function isDefined(obj) {
  return obj !== undefined && obj !== null;
};

exports.isDefined = isDefined;

var prop = function prop(name) {
  return function (obj) {
    return obj === null || obj === void 0 ? void 0 : obj[name];
  };
};

exports.prop = prop;