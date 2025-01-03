(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'.");
    }
    globalThis.kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat = factory(typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var toSet = kotlin_kotlin.$_$.v4;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var isCharSequence = kotlin_kotlin.$_$.o6;
  var trim = kotlin_kotlin.$_$.t8;
  var toString = kotlin_kotlin.$_$.z6;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.w;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var joinToString = kotlin_kotlin.$_$.n3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var charSequenceLength = kotlin_kotlin.$_$.w5;
  var joinTo = kotlin_kotlin.$_$.p3;
  var protoOf = kotlin_kotlin.$_$.x6;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(EventListenerHandler, 'EventListenerHandler');
  //endregion
  function removeClass(_this__u8e3s4, cssClasses) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.any' call
      var inductionVariable = 0;
      var last = cssClasses.length;
      while (inductionVariable < last) {
        var element = cssClasses[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.dom.removeClass.<anonymous>' call
        if (hasClass(_this__u8e3s4, element)) {
          tmp$ret$1 = true;
          break $l$block;
        }
      }
      tmp$ret$1 = false;
    }
    if (tmp$ret$1) {
      var toBeRemoved = toSet(cssClasses);
      // Inline function 'kotlin.text.trim' call
      var this_0 = _this__u8e3s4.className;
      var tmp4 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.text.toRegex' call
      // Inline function 'kotlin.text.split' call
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = Regex_init_$Create$('\\s+').fc(tmp4, 0);
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element_0 = _iterator__ex2g4s.l();
        // Inline function 'kotlinx.dom.removeClass.<anonymous>' call
        if (!toBeRemoved.o(element_0)) {
          destination.h(element_0);
        }
      }
      _this__u8e3s4.className = joinToString(destination, ' ');
      return true;
    }
    return false;
  }
  function addClass(_this__u8e3s4, cssClasses) {
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = cssClasses.length;
    while (inductionVariable < last) {
      var element = cssClasses[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.dom.addClass.<anonymous>' call
      if (!hasClass(_this__u8e3s4, element)) {
        destination.h(element);
      }
    }
    var missingClasses = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!missingClasses.q()) {
      // Inline function 'kotlin.text.trim' call
      var this_0 = _this__u8e3s4.className;
      var presentClasses = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlinx.dom.addClass.<anonymous>' call
      this_1.d8(presentClasses);
      // Inline function 'kotlin.text.isEmpty' call
      if (!(charSequenceLength(presentClasses) === 0)) {
        this_1.d8(' ');
      }
      joinTo(missingClasses, this_1, ' ');
      _this__u8e3s4.className = this_1.toString();
      return true;
    }
    return false;
  }
  function hasClass(_this__u8e3s4, cssClass) {
    var tmp1 = _this__u8e3s4.className;
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = '(^|.*\\s+)' + cssClass + '($|\\s+.*)';
    // Inline function 'kotlin.text.matches' call
    return Regex_init_$Create$(this_0).bc(tmp1);
  }
  function EventListener(handler) {
    return new EventListenerHandler(handler);
  }
  function EventListenerHandler(handler) {
    this.uh_1 = handler;
  }
  protoOf(EventListenerHandler).vh = function (event) {
    this.uh_1(event);
  };
  protoOf(EventListenerHandler).handleEvent = function (event) {
    return this.vh(event);
  };
  protoOf(EventListenerHandler).toString = function () {
    return 'EventListenerHandler(' + toString(this.uh_1) + ')';
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = addClass;
  _.$_$.b = removeClass;
  _.$_$.c = EventListener;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js.map
