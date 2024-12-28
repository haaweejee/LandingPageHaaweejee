(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kobweb-frontend-kobweb-worker'] = factory(typeof globalThis['kobweb-frontend-kobweb-worker'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-worker']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-worker.js.map
