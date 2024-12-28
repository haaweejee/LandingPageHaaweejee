(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-common-client-server-internal'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-common-client-server-internal'.");
    }
    globalThis['kobweb-common-client-server-internal'] = factory(typeof globalThis['kobweb-common-client-server-internal'] === 'undefined' ? {} : globalThis['kobweb-common-client-server-internal'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.e;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var protoOf = kotlin_kotlin.$_$.x6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var startsWith = kotlin_kotlin.$_$.k8;
  var endsWith = kotlin_kotlin.$_$.w7;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  var charArrayOf = kotlin_kotlin.$_$.u5;
  var split = kotlin_kotlin.$_$.i8;
  var toString = kotlin_kotlin.$_$.z6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var last = kotlin_kotlin.$_$.s3;
  var get_lastIndex = kotlin_kotlin.$_$.q3;
  var joinToString = kotlin_kotlin.$_$.n3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Node, 'Node');
  initMetadataForClass(RootNode, 'RootNode', RootNode, Node);
  initMetadataForClass(ChildNode, 'ChildNode', VOID, Node);
  initMetadataForClass(StaticNode, 'StaticNode', VOID, ChildNode);
  initMetadataForClass(DynamicNode, 'DynamicNode', VOID, ChildNode);
  initMetadataForClass(ResolvedEntry, 'ResolvedEntry');
  initMetadataForClass(RouteTree, 'RouteTree', RouteTree);
  //endregion
  function Node(parent, name, data) {
    parent = parent === VOID ? null : parent;
    this.w2v_1 = parent;
    this.x2v_1 = name;
    this.y2v_1 = data;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z2v_1 = ArrayList_init_$Create$();
    this.a2w_1 = this.z2v_1;
  }
  protoOf(Node).b2w = function (name) {
    return this.x2v_1 === name;
  };
  protoOf(Node).c2w = function (routePart, data) {
    var tmp;
    if (startsWith(routePart, _Char___init__impl__6a9atx(123)) && endsWith(routePart, _Char___init__impl__6a9atx(125))) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = routePart.length - 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = routePart.substring(1, endIndex);
      tmp = new DynamicNode(this, tmp$ret$1, data);
    } else {
      tmp = new StaticNode(this, routePart, data);
    }
    var node = tmp;
    this.z2v_1.h(node);
    return node;
  };
  protoOf(Node).d2w = function (routePart) {
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.z2v_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'com.varabyte.kobweb.navigation.Node.findChild.<anonymous>' call
        if (element.b2w(routePart)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  function RootNode() {
    Node.call(this, null, '', null);
  }
  function ChildNode(parent, name, data) {
    Node.call(this, parent, name, data);
  }
  function StaticNode(parent, name, data) {
    ChildNode.call(this, parent, name, data);
  }
  function DynamicNode(parent, name, data) {
    ChildNode.call(this, parent, name, data);
  }
  protoOf(DynamicNode).b2w = function (name) {
    return true;
  };
  function ResolvedEntry(node, capturedRoutePart) {
    this.j2w_1 = node;
    this.k2w_1 = capturedRoutePart;
  }
  function resolveWithoutRedirects($this, route) {
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    // Inline function 'kotlin.collections.mutableListOf' call
    var resolved = ArrayList_init_$Create$();
    var currNode = $this.l2w_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(routeParts.p(0) === $this.l2w_1.x2v_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last_0 = routeParts.m();
    if (inductionVariable < last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.p(i);
        var tmp0_elvis_lhs = currNode.d2w(routePart);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        currNode = tmp;
        resolved.h(new ResolvedEntry(currNode, routePart));
      }
       while (inductionVariable < last_0);
    // Inline function 'kotlin.takeIf' call
    var tmp_0;
    // Inline function 'com.varabyte.kobweb.navigation.RouteTree.resolveWithoutRedirects.<anonymous>' call
    if (resolved.q() || !(last(resolved).j2w_1.y2v_1 == null)) {
      tmp_0 = resolved;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function resolveAllowingRedirects($this, route) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = route;
    var _iterator__ex2g4s = $this.m2w_1.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.resolveAllowingRedirects.<anonymous>' call
      var route_0 = accumulator;
      var tmp0_elvis_lhs = element.p2w(route_0);
      accumulator = tmp0_elvis_lhs == null ? route_0 : tmp0_elvis_lhs;
    }
    var redirectedRoute = accumulator;
    return resolveWithoutRedirects($this, redirectedRoute);
  }
  function checkRoute($this, route) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!$this.l2w_1.a2w_1.q()) {
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.checkRoute.<anonymous>' call
      var message = "No routes were ever registered. This is unexpected and probably means no `@Page` was defined (or pages were defined in the wrong place where Kobweb couldn't discover them).";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!startsWith(route, _Char___init__impl__6a9atx(47))) {
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.checkRoute.<anonymous>' call
      var message_0 = 'When checking a route, it must begin with a slash. Got: "' + route + '"';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp0_elvis_lhs = resolveAllowingRedirects($this, route);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolvedNodes = tmp;
    return toRouteString(resolvedNodes);
  }
  function RouteTree() {
    this.l2w_1 = new RootNode();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m2w_1 = ArrayList_init_$Create$();
  }
  protoOf(RouteTree).q2w = function (route, allowRedirects) {
    return allowRedirects ? resolveAllowingRedirects(this, route) : resolveWithoutRedirects(this, route);
  };
  protoOf(RouteTree).r2w = function (route) {
    return !(checkRoute(this, route) == null);
  };
  protoOf(RouteTree).s2w = function (route, data) {
    if (!(resolveWithoutRedirects(this, route) == null))
      return false;
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var currNode = this.l2w_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(routeParts.p(0) === this.l2w_1.x2v_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.m();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.p(i);
        var tmp0_elvis_lhs = currNode.d2w(routePart);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0 = currNode;
          // Inline function 'kotlin.takeIf' call
          var tmp_1;
          // Inline function 'com.varabyte.kobweb.navigation.RouteTree.register.<anonymous>' call
          if (i === get_lastIndex(routeParts)) {
            tmp_1 = data;
          } else {
            tmp_1 = null;
          }
          var tmp$ret$2 = tmp_1;
          tmp = tmp_0.c2w(routePart, tmp$ret$2);
        } else {
          tmp = tmp0_elvis_lhs;
        }
        currNode = tmp;
      }
       while (inductionVariable < last);
    return true;
  };
  function toRouteString(_this__u8e3s4) {
    return '/' + joinToString(_this__u8e3s4, '/', VOID, VOID, VOID, VOID, toRouteString$lambda);
  }
  function toRouteString$lambda(it) {
    return it.k2w_1;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DynamicNode;
  _.$_$.b = RouteTree;
  _.$_$.c = toRouteString;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-common-client-server-internal.js.map
