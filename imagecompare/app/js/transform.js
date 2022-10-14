(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(function () {
      return (root.transform = factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else if (typeof window === 'object') {
    // Browser globals
    root.transform = factory();
  } else if (typeof importScripts === 'function') {
    // Web worker
    root.transform = factory;
  } else {
    // Other shells, e.g. d8
    root.transform = factory();
  }
}(this, function () {
  
var transform = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(transform) {
  transform = transform || {};



  return transform.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = transform;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return transform; });
else if (typeof exports === 'object')
  exports["transform"] = transform;

  if (typeof Module === 'undefined')
    Module = {};
  return transform(Module);
}));
        