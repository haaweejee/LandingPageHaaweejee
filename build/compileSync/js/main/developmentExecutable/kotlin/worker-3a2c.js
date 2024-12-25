(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['worker-3a2c'] = factory(typeof globalThis['worker-3a2c'] === 'undefined' ? {} : globalThis['worker-3a2c']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=worker-3a2c.js.map
