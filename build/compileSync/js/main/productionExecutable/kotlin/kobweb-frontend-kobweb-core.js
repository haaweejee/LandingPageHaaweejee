(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-common-client-server-internal.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-common-client-server-internal.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['kobweb-common-client-server-internal'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-common-client-server-internal' was not found. Please, check whether 'kobweb-common-client-server-internal' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    globalThis['kobweb-frontend-kobweb-core'] = factory(typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['html-html-core'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kobweb-common-client-server-internal']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_client_server_internal) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var VOID = kotlin_kotlin.$_$.e;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var layer = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g1;
  var protoOf = kotlin_kotlin.$_$.x6;
  var initMetadataForObject = kotlin_kotlin.$_$.l6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var toString = kotlin_kotlin.$_$.z6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var substringAfterLast = kotlin_kotlin.$_$.l8;
  var plus = kotlin_kotlin.$_$.c4;
  var equals = kotlin_kotlin.$_$.z5;
  var getStringHashCode = kotlin_kotlin.$_$.e6;
  var hashCode = kotlin_kotlin.$_$.f6;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.u9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.h6;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var A = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var ensureNotNull = kotlin_kotlin.$_$.n9;
  var isBlank = kotlin_kotlin.$_$.z7;
  var startsWith = kotlin_kotlin.$_$.k8;
  var endsWith = kotlin_kotlin.$_$.w7;
  var startsWith_0 = kotlin_kotlin.$_$.j8;
  var dropLast = kotlin_kotlin.$_$.u7;
  var charSequenceLength = kotlin_kotlin.$_$.w5;
  var removePrefix = kotlin_kotlin.$_$.e8;
  var Enum = kotlin_kotlin.$_$.y8;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.p9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var joinToString = kotlin_kotlin.$_$.n3;
  var objectCreate = kotlin_kotlin.$_$.w6;
  var drop = kotlin_kotlin.$_$.v7;
  var first = kotlin_kotlin.$_$.y7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var charArrayOf = kotlin_kotlin.$_$.u5;
  var split = kotlin_kotlin.$_$.i8;
  var getOrNull = kotlin_kotlin.$_$.k3;
  var Exception = kotlin_kotlin.$_$.a9;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.b1;
  var captureStack = kotlin_kotlin.$_$.t5;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var replace = kotlin_kotlin.$_$.h8;
  var emptyMap = kotlin_kotlin.$_$.e3;
  var last = kotlin_kotlin.$_$.s3;
  var DynamicNode = kotlin_com_varabyte_kobweb_client_server_internal.$_$.a;
  var toRouteString = kotlin_com_varabyte_kobweb_client_server_internal.$_$.c;
  var substringBefore = kotlin_kotlin.$_$.n8;
  var to = kotlin_kotlin.$_$.w9;
  var substringAfter = kotlin_kotlin.$_$.m8;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var RouteTree = kotlin_com_varabyte_kobweb_client_server_internal.$_$.b;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var contains = kotlin_kotlin.$_$.s7;
  var charSequenceGet = kotlin_kotlin.$_$.v5;
  var removeSuffix = kotlin_kotlin.$_$.f8;
  var contains_0 = kotlin_kotlin.$_$.t7;
  var toMutableMap = kotlin_kotlin.$_$.t4;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.b4;
  var KMutableProperty1 = kotlin_kotlin.$_$.h7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d6;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(DefaultStyleSheet, 'DefaultStyleSheet', VOID, StyleSheet);
  initMetadataForObject(AppGlobals, 'AppGlobals');
  initMetadataForClass(RouteInfo, 'RouteInfo');
  initMetadataForCompanion(Companion);
  initMetadataForClass(PageContext, 'PageContext');
  initMetadataForClass(InitKobwebContext, 'InitKobwebContext');
  initMetadataForClass(MutableKobwebConfig, 'MutableKobwebConfig', MutableKobwebConfig);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(MutableOpenLinkStrategies, 'MutableOpenLinkStrategies', MutableOpenLinkStrategies);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(BasePathImpl, 'BasePathImpl');
  initMetadataForClass(OpenLinkStrategy, 'OpenLinkStrategy', VOID, Enum);
  initMetadataForClass(PageData, 'PageData');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Route, 'Route');
  initMetadataForClass(RouteException, 'RouteException', VOID, Exception);
  initMetadataForClass(Router, 'Router', Router);
  initMetadataForClass(RouteInterceptorScope, 'RouteInterceptorScope');
  initMetadataForObject(ComposableSingletons$RouterKt, 'ComposableSingletons$RouterKt');
  initMetadataForClass(UpdateHistoryMode, 'UpdateHistoryMode', VOID, Enum);
  //endregion
  var com_varabyte_kobweb_core_DefaultStyleSheet$stable;
  function KobwebApp(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1293008755);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      var tmp0 = DefaultStyleSheet_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var $composer_1 = $composer_0;
      $composer_1.t1d(-1196466140);
      Style(null, tmp0.w2k(), $composer_1, 0, 1);
      $composer_1.u1d();
      content($composer_0, 14 & $dirty);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(KobwebApp$lambda(content, $changed));
    }
  }
  function DefaultStyleSheet$lambda($this$layer) {
    $this$layer.b2l('html, body', DefaultStyleSheet$lambda$lambda);
    $this$layer.b2l('*', DefaultStyleSheet$lambda$lambda_0);
    return Unit_instance;
  }
  function DefaultStyleSheet$lambda$lambda($this$style) {
    padding($this$style, [get_px(0)]);
    margin($this$style, [get_px(0)]);
    return Unit_instance;
  }
  function DefaultStyleSheet$lambda$lambda_0($this$style) {
    boxSizing($this$style, 'border-box');
    return Unit_instance;
  }
  function DefaultStyleSheet() {
    DefaultStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    layer(this, 'reset', DefaultStyleSheet$lambda);
  }
  protoOf(DefaultStyleSheet).a2l = function (selector, cssRule) {
    return this.z2k(selector, cssRule);
  };
  var DefaultStyleSheet_instance;
  function DefaultStyleSheet_getInstance() {
    if (DefaultStyleSheet_instance == null)
      new DefaultStyleSheet();
    return DefaultStyleSheet_instance;
  }
  function KobwebApp$lambda($content, $$changed) {
    return function ($composer, $force) {
      KobwebApp($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_core_AppGlobals$stable;
  function AppGlobals() {
  }
  protoOf(AppGlobals).z2w = function (values) {
    // Inline function 'kotlin.check' call
    if (!!!(this.y2w_1 == null)) {
      // Inline function 'com.varabyte.kobweb.core.AppGlobals.initialize.<anonymous>' call
      var message = 'Cannot initialize AppGlobals more than once';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.y2w_1 = values;
  };
  var AppGlobals_instance;
  function AppGlobals_getInstance() {
    return AppGlobals_instance;
  }
  function get_PageContextLocal() {
    _init_properties_PageContext_kt__u2hiem();
    return PageContextLocal;
  }
  var PageContextLocal;
  var com_varabyte_kobweb_core_PageContext_RouteInfo$stable;
  var com_varabyte_kobweb_core_PageContext$stable;
  function RouteInfo(route, dynamicParams) {
    this.a2x_1 = route;
    this.b2x_1 = dynamicParams;
    this.c2x_1 = substringAfterLast(this.a2x_1.i2x_1, _Char___init__impl__6a9atx(47));
    this.d2x_1 = this.a2x_1.i2x_1;
    this.e2x_1 = plus(this.a2x_1.j2x_1, this.b2x_1);
    this.f2x_1 = this.a2x_1.j2x_1;
    this.g2x_1 = this.a2x_1.k2x_1;
  }
  protoOf(RouteInfo).l2x = function () {
    return this.a2x_1.toString();
  };
  protoOf(RouteInfo).toString = function () {
    return this.l2x();
  };
  protoOf(RouteInfo).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof RouteInfo) {
      tmp_1 = other.d2x_1 === this.d2x_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.e2x_1, this.e2x_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.g2x_1 == this.g2x_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RouteInfo).hashCode = function () {
    var result = getStringHashCode(this.d2x_1);
    result = imul(31, result) + hashCode(this.e2x_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.g2x_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RouteInfo).m2x = function (path, queryParams, fragment, dynamicParams) {
    return new RouteInfo(Route_init_$Create$(path, queryParams, fragment), dynamicParams);
  };
  protoOf(RouteInfo).n2x = function (path, queryParams, fragment, dynamicParams, $super) {
    path = path === VOID ? this.a2x_1.i2x_1 : path;
    queryParams = queryParams === VOID ? this.a2x_1.j2x_1 : queryParams;
    fragment = fragment === VOID ? this.a2x_1.k2x_1 : fragment;
    dynamicParams = dynamicParams === VOID ? this.b2x_1 : dynamicParams;
    return $super === VOID ? this.m2x(path, queryParams, fragment, dynamicParams) : $super.m2x.call(this, path, queryParams, fragment, dynamicParams);
  };
  function Companion() {
  }
  protoOf(Companion).p2x = function () {
    var tmp = this.o2x_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('instance');
    }
  };
  protoOf(Companion).q2x = function (router) {
    this.o2x_1 = new PageContext(router);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function PageContext(router) {
    this.r2x_1 = router;
    this.s2x_1 = mutableStateOf(null);
  }
  protoOf(PageContext).t2x = function (value) {
    this.s2x_1.is(value);
  };
  protoOf(PageContext).u2x = function () {
    var tmp0_elvis_lhs = this.s2x_1.e2();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'PageContext route info is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function rememberPageContext($composer, $changed) {
    _init_properties_PageContext_kt__u2hiem();
    var $composer_0 = $composer;
    $composer_0.v1d(979146567);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_PageContextLocal();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.t1f(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp;
    if (tmp0 == null) {
      var message = 'PageContext is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    $composer_0.x1d();
    return tmp0_0;
  }
  function PageContextLocal$lambda() {
    _init_properties_PageContext_kt__u2hiem();
    return null;
  }
  var properties_initialized_PageContext_kt_8ruj8w;
  function _init_properties_PageContext_kt__u2hiem() {
    if (!properties_initialized_PageContext_kt_8ruj8w) {
      properties_initialized_PageContext_kt_8ruj8w = true;
      PageContextLocal = staticCompositionLocalOf(PageContextLocal$lambda);
      com_varabyte_kobweb_core_PageContext_RouteInfo$stable = 8;
      com_varabyte_kobweb_core_PageContext$stable = 8;
    }
  }
  var com_varabyte_kobweb_core_init_InitKobwebContext$stable;
  function initKobweb(router, init) {
    var config = new MutableKobwebConfig();
    init(new InitKobwebContext(config, router));
    set_MutableKobwebConfigInstance(config);
  }
  function InitKobwebContext(config, router) {
    this.v2x_1 = config;
    this.w2x_1 = router;
  }
  function set_MutableKobwebConfigInstance(_set____db54di) {
    _init_properties_KobwebConfig_kt__rz30d4();
    MutableKobwebConfigInstance = _set____db54di;
  }
  function get_MutableKobwebConfigInstance() {
    _init_properties_KobwebConfig_kt__rz30d4();
    return MutableKobwebConfigInstance;
  }
  var MutableKobwebConfigInstance;
  var com_varabyte_kobweb_core_init_MutableOpenLinkStrategies$stable;
  var com_varabyte_kobweb_core_init_MutableKobwebConfig$stable;
  function MutableKobwebConfig() {
    this.x2x_1 = new MutableOpenLinkStrategies();
  }
  protoOf(MutableKobwebConfig).y2x = function () {
    return this.x2x_1;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).z2x = function () {
    return get_MutableKobwebConfigInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function MutableOpenLinkStrategies(internal, external) {
    internal = internal === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : internal;
    external = external === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : external;
    this.a2y_1 = internal;
    this.b2y_1 = external;
  }
  protoOf(MutableOpenLinkStrategies).c2y = function () {
    return this.a2y_1;
  };
  protoOf(MutableOpenLinkStrategies).d2y = function () {
    return this.b2y_1;
  };
  var properties_initialized_KobwebConfig_kt_yaxikm;
  function _init_properties_KobwebConfig_kt__rz30d4() {
    if (!properties_initialized_KobwebConfig_kt_yaxikm) {
      properties_initialized_KobwebConfig_kt_yaxikm = true;
      MutableKobwebConfigInstance = new MutableKobwebConfig();
      com_varabyte_kobweb_core_init_MutableOpenLinkStrategies$stable = 8;
      com_varabyte_kobweb_core_init_MutableKobwebConfig$stable = 8;
    }
  }
  function Anchor(href, attrs, openInternalLinksStrategy, openExternalLinksStrategy, updateHistoryMode, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var updateHistoryMode_0 = {_v: updateHistoryMode};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1682374411);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f15(href) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s1e(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f15(openInternalLinksStrategy_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f15(openExternalLinksStrategy_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.f15(updateHistoryMode_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.s1e(content_0._v) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.o1d()) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        updateHistoryMode_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        content_0._v = null;
      }
      var ctx = rememberPageContext($composer_0, 0);
      var tmp = Companion_instance_1.e2y(href);
      $composer_0.v1d(-901903562);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!(!!(!!(($dirty & 112) === 32 | ($dirty & 896) === 256) | ($dirty & 7168) === 2048) | $composer_0.s1e(ctx)) | ($dirty & 14) === 4) | ($dirty & 57344) === 16384);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.f1f();
      var tmp_0;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'com.varabyte.kobweb.navigation.Anchor.<anonymous>' call
        var value = Anchor$lambda(attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, ctx, href, updateHistoryMode_0);
        tmp0.q1f(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.x1d();
      A(tmp, tmp0_group, content_0._v, $composer_0, 896 & $dirty >> 9, 0);
    } else {
      $composer_0.e18();
    }
    var tmp1_safe_receiver = $composer_0.y1f();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l1l(Anchor$lambda_0(href, attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, updateHistoryMode_0, content_0, $changed, $default));
    }
  }
  function Anchor$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode) {
    return function (evt) {
      var tmp0_elvis_lhs = $openInternalLinksStrategy._v;
      var openInternalLinksStrategy = tmp0_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_instance_0.z2x().y2x().c2y()) : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = $openExternalLinksStrategy._v;
      var openExternalLinksStrategy = tmp1_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_instance_0.z2x().y2x().d2y()) : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = $updateHistoryMode._v;
      $ctx.r2x_1.j2y($href, tmp2_elvis_lhs == null ? UpdateHistoryMode_PUSH_getInstance() : tmp2_elvis_lhs, openInternalLinksStrategy, openExternalLinksStrategy);
      evt.b2n();
      evt.c2n();
      return Unit_instance;
    };
  }
  function Anchor$lambda($attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode) {
    return function ($this$A) {
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$A);
      }
      $this$A.a2d(Anchor$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode));
      return Unit_instance;
    };
  }
  function Anchor$lambda_0($href, $attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $updateHistoryMode, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Anchor($href, $attrs._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $updateHistoryMode._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_navigation_BasePathImpl$stable;
  function Companion_1() {
  }
  protoOf(Companion_1).k2y = function (value) {
    Companion_instance_2.m2y(new BasePathImpl(value));
  };
  protoOf(Companion_1).e2 = function () {
    return Companion_instance_2.o2y().n2y_1;
  };
  protoOf(Companion_1).e2y = function (path) {
    return Companion_instance_2.o2y().e2y(path);
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Companion_2() {
    this.l2y_1 = null;
  }
  protoOf(Companion_2).m2y = function (value) {
    // Inline function 'kotlin.check' call
    if (!(this.l2y_1 == null)) {
      // Inline function 'com.varabyte.kobweb.navigation.Companion.<set-_instance>.<anonymous>' call
      var message = 'Cannot overwrite base path once set';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.l2y_1 = value;
  };
  protoOf(Companion_2).p2y = function () {
    if (this.l2y_1 == null) {
      this.l2y_1 = new BasePathImpl('');
    }
    return this.l2y_1;
  };
  protoOf(Companion_2).o2y = function () {
    return ensureNotNull(this.p2y());
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function BasePathImpl(value) {
    var tmp = this;
    // Inline function 'kotlin.takeIf' call
    var tmp_0;
    // Inline function 'com.varabyte.kobweb.navigation.BasePathImpl.value.<anonymous>' call
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(value)) {
      tmp_0 = value;
    } else {
      tmp_0 = null;
    }
    var tmp0_safe_receiver = tmp_0;
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.navigation.BasePathImpl.value.<anonymous>' call
      tmp_1 = startsWith(tmp0_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp0_safe_receiver : '/' + tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp_1;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.navigation.BasePathImpl.value.<anonymous>' call
      tmp_2 = endsWith(tmp1_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp1_safe_receiver : tmp1_safe_receiver + '/';
    }
    var tmp2_elvis_lhs = tmp_2;
    tmp.n2y_1 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  protoOf(BasePathImpl).e2y = function (path) {
    if (isBlank(this.n2y_1))
      return path;
    if (!startsWith_0(path, '/'))
      return path;
    return dropLast(this.n2y_1, 1) + path;
  };
  protoOf(BasePathImpl).toString = function () {
    return this.n2y_1;
  };
  function remove(_this__u8e3s4, path) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.e2();
    if (charSequenceLength(this_0) > 0) {
      tmp = removePrefix(path, dropLast(_this__u8e3s4.e2(), 1));
    } else {
      tmp = path;
    }
    return tmp;
  }
  function prependIf(_this__u8e3s4, condition, path) {
    return condition ? _this__u8e3s4.e2y(path) : path;
  }
  var OpenLinkStrategy_IN_PLACE_instance;
  var OpenLinkStrategy_IN_NEW_TAB_instance;
  var OpenLinkStrategy_entriesInitialized;
  function OpenLinkStrategy_initEntries() {
    if (OpenLinkStrategy_entriesInitialized)
      return Unit_instance;
    OpenLinkStrategy_entriesInitialized = true;
    OpenLinkStrategy_IN_PLACE_instance = new OpenLinkStrategy('IN_PLACE', 0);
    OpenLinkStrategy_IN_NEW_TAB_instance = new OpenLinkStrategy('IN_NEW_TAB', 1);
  }
  function OpenLinkStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function open(_this__u8e3s4, href, strategy) {
    switch (strategy.m2_1) {
      case 0:
        _this__u8e3s4.open(href, '_self');
        break;
      case 1:
        _this__u8e3s4.open(href, '_blank');
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
  }
  function toOpenLinkStrategy(_this__u8e3s4, default_0) {
    default_0 = default_0 === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : default_0;
    return _this__u8e3s4.l2p_1 || _this__u8e3s4.x2p_1 ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : default_0;
  }
  function OpenLinkStrategy_IN_PLACE_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_PLACE_instance;
  }
  function OpenLinkStrategy_IN_NEW_TAB_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_NEW_TAB_instance;
  }
  var com_varabyte_kobweb_navigation_PageData$stable;
  function PageData(pageMethod, routeInfo) {
    this.q2y_1 = pageMethod;
    this.r2y_1 = routeInfo;
  }
  var com_varabyte_kobweb_navigation_RouteException$stable;
  var com_varabyte_kobweb_navigation_Route$stable;
  function Route_init_$Init$(path, queryParams, fragment, $this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>' call
    this_0.d8(path);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!queryParams.q()) {
      this_0.e8(_Char___init__impl__6a9atx(63));
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(queryParams.m());
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = queryParams.k2().j();
      while (_iterator__ex2g4s.k()) {
        var item = _iterator__ex2g4s.l();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var key = item.d2();
        // Inline function 'kotlin.collections.component2' call
        var value = item.e2();
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>.<anonymous>' call
        this_1.d8(key);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(value) > 0) {
          this_1.e8(_Char___init__impl__6a9atx(61));
          this_1.d8(value);
        }
        var tmp$ret$7 = this_1.toString();
        destination.h(tmp$ret$7);
      }
      this_0.d8(joinToString(destination, '&'));
    }
    if (!(fragment == null)) {
      this_0.e8(_Char___init__impl__6a9atx(35));
      this_0.d8(fragment);
    }
    var tmp$ret$11 = this_0.toString();
    Route.call($this, tmp$ret$11);
    return $this;
  }
  function Route_init_$Create$(path, queryParams, fragment) {
    return Route_init_$Init$(path, queryParams, fragment, objectCreate(protoOf(Route)));
  }
  function Companion_3() {
  }
  protoOf(Companion_3).s2y = function (path) {
    return !(this.t2y(path) == null);
  };
  protoOf(Companion_3).t2y = function (path) {
    var tmp;
    try {
      tmp = new Route(path);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof RouteException) {
        var ex = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_3).u2y = function (url) {
    var tmp0_elvis_lhs = this.t2y(removePrefix(url.href, url.origin));
    return tmp0_elvis_lhs == null ? new Route('') : tmp0_elvis_lhs;
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Route(pathQueryAndFragment) {
    var tmp;
    try {
      new URL(pathQueryAndFragment);
      tmp = false;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        tmp_0 = true;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var isValidRoute = tmp;
    if (!isValidRoute) {
      throw new RouteException(pathQueryAndFragment);
    }
    this.h2x_1 = new URL(pathQueryAndFragment, 'http://unused.com');
    var isAbsolute = startsWith_0(pathQueryAndFragment, '/');
    var tmp_1 = this;
    var tmp_2;
    if (isAbsolute) {
      tmp_2 = this.h2x_1.pathname;
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = drop(this.h2x_1.pathname, 1);
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.check' call
      if (!(first(this.h2x_1.pathname) === _Char___init__impl__6a9atx(47))) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      tmp_2 = this_0;
    }
    tmp_1.i2x_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.apply' call
    var this_1 = LinkedHashMap_init_$Create$();
    $l$block: {
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.text.isEmpty' call
      var this_2 = this.h2x_1.search;
      if (charSequenceLength(this_2) === 0) {
        break $l$block;
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = split(removePrefix(this.h2x_1.search, '?'), charArrayOf([_Char___init__impl__6a9atx(38)])).j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>.<anonymous>' call
        var keyValue = split(element, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
        var key = keyValue.p(0);
        // Inline function 'kotlin.collections.elementAtOrNull' call
        var tmp0_elvis_lhs = getOrNull(keyValue, 1);
        // Inline function 'kotlin.collections.set' call
        var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        this_1.y4(key, value);
      }
    }
    tmp_3.j2x_1 = this_1;
    var tmp_4 = this;
    // Inline function 'kotlin.takeIf' call
    var this_3 = this.h2x_1.hash;
    var tmp_5;
    // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
    if (startsWith_0(this_3, '#')) {
      tmp_5 = this_3;
    } else {
      tmp_5 = null;
    }
    var tmp0_safe_receiver = tmp_5;
    tmp_4.k2x_1 = tmp0_safe_receiver == null ? null : removePrefix(tmp0_safe_receiver, '#');
  }
  protoOf(Route).toString = function () {
    return this.i2x_1 + this.h2x_1.search + this.h2x_1.hash;
  };
  function RouteException(value) {
    Exception_init_$Init$('Failed to create a route. Routes should be valid URLs without a leading domain. Got: ' + value, this);
    captureStack(this, RouteException);
  }
  function createPageData(_this__u8e3s4, route, errorPageContent) {
    var errorPageMethod = ComposableLambda$invoke$ref(composableLambdaInstance(-882376264, true, createPageData$lambda(errorPageContent)));
    var self_0 = _this__u8e3s4;
    var tmp0_elvis_lhs = self_0.q2w(route.i2x_1, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.takeIf' call
      var this_0 = route.i2x_1;
      var tmp_0;
      // Inline function 'com.varabyte.kobweb.navigation.createPageData.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_1 = Companion_instance_1.e2();
      if (charSequenceLength(this_1) > 0) {
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      var tmp_1;
      if (tmp_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.run' call
        // Inline function 'com.varabyte.kobweb.navigation.createPageData.<anonymous>' call
        var duplicatedRoutePrefix = dropLast(Companion_instance_1.e2(), 1) + Companion_instance_1.e2();
        var tmp_2;
        if (startsWith_0(route.i2x_1, duplicatedRoutePrefix)) {
          // Inline function 'kotlin.also' call
          var this_2 = self_0.q2w(replace(route.i2x_1, duplicatedRoutePrefix, Companion_instance_1.e2()), true);
          // Inline function 'com.varabyte.kobweb.navigation.createPageData.<anonymous>.<anonymous>' call
          if (!(this_2 == null)) {
            console.warn("Please report to the site owner: detected a case where the site's base path was prepended an extra time (`" + route.i2x_1 + '`). `navigateTo` and `tryRoutingTo` now auto-prepend a prefix themselves, so the site owner should search their code for `BasePath.prepend` or `RoutePrefix.prepend` and remove any that have become unnecessary.');
          }
          tmp_2 = this_2;
        } else {
          tmp_2 = null;
        }
        tmp_1 = tmp_2;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_3;
    if (tmp2_elvis_lhs == null) {
      return new PageData(errorPageMethod, new RouteInfo(route, emptyMap()));
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    var resolved = tmp_3;
    var tmp3_elvis_lhs = last(resolved).j2w_1.y2v_1;
    var pageMethod = tmp3_elvis_lhs == null ? errorPageMethod : tmp3_elvis_lhs;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var dynamicParams = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = resolved.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'com.varabyte.kobweb.navigation.createPageData.<anonymous>' call
      var tmp_4 = element.j2w_1;
      if (tmp_4 instanceof DynamicNode) {
        var tmp1 = element.j2w_1.x2v_1;
        // Inline function 'kotlin.collections.set' call
        var value = element.k2w_1;
        dynamicParams.y4(tmp1, value);
      }
    }
    return new PageData(pageMethod, new RouteInfo(Route_init_$Create$(toRouteString(resolved), route.j2x_1, route.k2x_1), dynamicParams));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function createPageData$lambda($errorPageContent) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
        tmp = $errorPageContent(404, $composer_0, 6);
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_navigation_RouteInterceptorScope$stable;
  var com_varabyte_kobweb_navigation_Router_RouteEntry$stable;
  var com_varabyte_kobweb_navigation_Router$stable;
  function _set_activePageMethod__f6z3vj($this, _set____db54di) {
    var tmp0 = $this.f2y_1;
    activePageMethod$factory();
    tmp0.is(_set____db54di);
    return Unit_instance;
  }
  function _get_activePageMethod__dw5579($this) {
    var tmp0 = $this.f2y_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    activePageMethod$factory_0();
    return tmp0.e2();
  }
  function updatePageContext(_this__u8e3s4, $this, pathQueryAndFragment) {
    if (startsWith_0(pathQueryAndFragment, '#')) {
      var tmp0_safe_receiver = _this__u8e3s4.s2x_1.e2();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        _this__u8e3s4.s2x_1.is(tmp0_safe_receiver.n2x(VOID, VOID, removePrefix(pathQueryAndFragment, '#')));
        return true;
      }
      if (tmp == null) {
        // Inline function 'kotlin.run' call
        return false;
      }
    }
    var route = Companion_instance_3.t2y(pathQueryAndFragment);
    var tmp_0;
    if (!(route == null)) {
      var data = createPageData($this.g2y_1, route, $this.i2y_1);
      _set_activePageMethod__f6z3vj($this, data.q2y_1);
      _this__u8e3s4.t2x(data.r2y_1);
      tmp_0 = true;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  }
  function normalize(_this__u8e3s4, $this) {
    // Inline function 'kotlin.check' call
    if (!Companion_instance_3.s2y(_this__u8e3s4)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    var hrefResolved = Companion_instance_3.u2y(new URL(_this__u8e3s4, window.location.href)).toString();
    // Inline function 'kotlin.takeIf' call
    var this_0 = remove(Companion_instance_1, hrefResolved);
    var tmp;
    // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var withoutPrefix = tmp0_elvis_lhs == null ? '/' : tmp0_elvis_lhs;
    var hadPrefix = !(withoutPrefix === hrefResolved);
    var tmp_0 = Companion_instance_1;
    var tmp3 = $this.h2y_1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = (new Route(withoutPrefix)).toString();
    var _iterator__ex2g4s = tmp3.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
      var acc = accumulator;
      var interceptor = new RouteInterceptorScope(acc);
      element(interceptor);
      accumulator = interceptor.l2x();
    }
    var tmp$ret$4 = accumulator;
    return prependIf(tmp_0, hadPrefix, tmp$ret$4);
  }
  function partitionPath(_this__u8e3s4, $this) {
    var pathPart = substringBefore(substringBefore(_this__u8e3s4, _Char___init__impl__6a9atx(63)), _Char___init__impl__6a9atx(35));
    return to(pathPart, removePrefix(_this__u8e3s4, pathPart));
  }
  function tryRoutingTo$_anonymous_$scrollElementIntoView_htwmo1($url) {
    var tmp0_safe_receiver = document.getElementById(substringAfter($url, _Char___init__impl__6a9atx(35)));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp0_safe_receiver.scrollIntoView();
      tmp = Unit_instance;
    }
    return tmp;
  }
  function Router$lambda(this$0) {
    return function (it) {
      var tmp = Companion_instance.p2x();
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.navigation.Router.<anonymous>.<anonymous>' call
      var it_0 = ensureNotNull(document.location);
      var tmp$ret$1 = removePrefix(it_0.href, it_0.origin);
      return updatePageContext(tmp, this$0, tmp$ret$1);
    };
  }
  function Router$renderActivePage$lambda$lambda($pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
        tmp = $pageMethod($composer_0, 0);
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function Router$renderActivePage$lambda($pageWrapper, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
        var tmp_0 = $pageWrapper._v;
        // Inline function 'kotlin.run' call
        // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1343210329, true, Router$renderActivePage$lambda$lambda($pageMethod), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.f15(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.f1f();
        var tmp_1;
        if (invalid || it === Companion_getInstance().n18_1) {
          // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
          $composer_1.q1f(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        tmp = tmp_0(tmp0, $composer_0, 6);
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function Router$renderActivePage$lambda_0($tmp0_rcvr, $pageWrapper, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.z2y($pageWrapper._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Router$tryRoutingTo$lambda($fileExistsOnServer, $xhr) {
    return function (it) {
      $fileExistsOnServer._v = $xhr.status === 200;
      return Unit_instance;
    };
  }
  function Router$tryRoutingTo$lambda_0(it) {
    return Unit_instance;
  }
  function Router$tryRoutingTo$lambda_1(it) {
    return Unit_instance;
  }
  function Router$tryRoutingTo$lambda_2($url) {
    return function (mutations, observer) {
      var inductionVariable = 0;
      var last = mutations.length;
      while (inductionVariable < last) {
        var element = mutations[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.varabyte.kobweb.navigation.Router.tryRoutingTo.<anonymous>.<anonymous>.<anonymous>' call
        if (element.type === 'childList') {
          tryRoutingTo$_anonymous_$scrollElementIntoView_htwmo1($url);
          observer.disconnect();
        }
      }
      return Unit_instance;
    };
  }
  function Router() {
    this.f2y_1 = mutableStateOf(null);
    this.g2y_1 = new RouteTree();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.h2y_1 = ArrayList_init_$Create$_0();
    Companion_instance.q2x(this);
    var tmp_0 = window;
    tmp_0.onpopstate = Router$lambda(this);
    this.i2y_1 = ComposableSingletons$RouterKt_getInstance().b2z_1;
  }
  protoOf(Router).z2y = function (pageWrapper, $composer, $changed, $default) {
    var pageWrapper_0 = {_v: pageWrapper};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(137063404);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(pageWrapper_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s1e(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        pageWrapper_0._v = ComposableSingletons$RouterKt_getInstance().a2z_1;
      }
      var tmp0_elvis_lhs = _get_activePageMethod__dw5579(this);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var message = "Call 'navigateTo' at least once before calling 'renderActivePage'";
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var pageMethod = tmp;
      var tmp_0 = get_PageContextLocal().g1l(Companion_instance.p2x());
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(248233772, true, Router$renderActivePage$lambda(pageWrapper_0, pageMethod), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1f();
      var tmp_1;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.q1f(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      CompositionLocalProvider(tmp_0, tmp0, $composer_0, 56);
    } else {
      $composer_0.e18();
    }
    var tmp1_safe_receiver = $composer_0.y1f();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l1l(Router$renderActivePage$lambda_0(this, pageWrapper_0, $changed, $default));
    }
  };
  protoOf(Router).c2z = function (route, pageMethod) {
    // Inline function 'kotlin.require' call
    if (!(Companion_instance_3.s2y(route) && startsWith(route, _Char___init__impl__6a9atx(47)))) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.register.<anonymous>' call
      var message = 'Registration only allowed for internal, rooted routes, e.g. /example/path. Got: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!this.g2y_1.s2w(Companion_instance_1.e2y(route), pageMethod)) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.register.<anonymous>' call
      var message_0 = 'Registration failure. Path is already registered: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  };
  protoOf(Router).d2z = function (interceptor) {
    this.h2y_1.h(interceptor);
  };
  protoOf(Router).e2z = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy) {
    if (contains(pathQueryAndFragment, '://'))
      return false;
    var pathQueryAndFragment_0 = Companion_instance_1.e2y(pathQueryAndFragment);
    if (Companion_instance_3.s2y(pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = normalize(pathQueryAndFragment_0, this);
      var tmp0 = pathQueryAndFragment_0;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.navigation.Router.tryRoutingTo.<anonymous>' call
          if (!(!(element === _Char___init__impl__6a9atx(35)) && !(element === _Char___init__impl__6a9atx(63)))) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
        tmp$ret$1 = true;
      }
      if (tmp$ret$1) {
        if (!(pathQueryAndFragment_0 === '/')) {
          var originalRoute = pathQueryAndFragment_0;
          if (!this.g2y_1.r2w(originalRoute)) {
            if (endsWith(originalRoute, _Char___init__impl__6a9atx(47))) {
              var withoutSlash = removeSuffix(originalRoute, '/');
              if (this.g2y_1.r2w(withoutSlash)) {
                pathQueryAndFragment_0 = withoutSlash;
              }
            } else {
              var withSlash = originalRoute + '/';
              if (this.g2y_1.r2w(withSlash)) {
                pathQueryAndFragment_0 = withSlash;
              }
            }
          }
          if (!this.g2y_1.r2w(pathQueryAndFragment_0)) {
            var xhr = new XMLHttpRequest();
            var fileExistsOnServer = {_v: false};
            xhr.open('HEAD', pathQueryAndFragment_0, false);
            xhr.onload = Router$tryRoutingTo$lambda(fileExistsOnServer, xhr);
            xhr.onerror = Router$tryRoutingTo$lambda_0;
            xhr.onabort = Router$tryRoutingTo$lambda_1;
            xhr.send(null);
            if (fileExistsOnServer._v) {
              window.open(pathQueryAndFragment_0);
              return true;
            }
          }
        }
      }
    }
    if (!openLinkStrategy.equals(OpenLinkStrategy_IN_PLACE_getInstance())) {
      open(window, pathQueryAndFragment_0, openLinkStrategy);
      return true;
    }
    var tmp;
    if (updatePageContext(Companion_instance.p2x(), this, pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = Companion_instance.p2x().u2x().d2x_1 + partitionPath(pathQueryAndFragment_0, this).pe_1;
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.navigation.Router.tryRoutingTo.<anonymous>' call
      var url = window.location.origin + pathQueryAndFragment_0;
      var onNewPage = !(window.location.pathname === Companion_instance_3.u2y(new URL(url)).i2x_1);
      if (!(window.location.href === url)) {
        switch (updateHistoryMode.m2_1) {
          case 0:
            window.history.pushState(window.history.state, '', url);
            break;
          case 1:
            window.history.replaceState(window.history.state, '', url);
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        if (onNewPage) {
          var tmp1_safe_receiver = document.documentElement;
          if (tmp1_safe_receiver == null)
            null;
          else {
            tmp1_safe_receiver.scrollTop = 0.0;
          }
        }
      }
      if (contains_0(url, _Char___init__impl__6a9atx(35))) {
        if (onNewPage) {
          var tmp_0 = new MutationObserver(Router$tryRoutingTo$lambda_2(url));
          var tmp_1 = ensureNotNull(document.body);
          // Inline function 'org.w3c.dom.MutationObserverInit' call
          var attributes = undefined;
          var characterData = undefined;
          var attributeOldValue = undefined;
          var characterDataOldValue = undefined;
          var attributeFilter = undefined;
          var o = {};
          o['childList'] = true;
          o['attributes'] = attributes;
          o['characterData'] = characterData;
          o['subtree'] = true;
          o['attributeOldValue'] = attributeOldValue;
          o['characterDataOldValue'] = characterDataOldValue;
          o['attributeFilter'] = attributeFilter;
          tmp_0.observe(tmp_1, o);
        } else {
          tryRoutingTo$_anonymous_$scrollElementIntoView_htwmo1(url);
        }
      }
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Router).f2z = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openLinkStrategy = openLinkStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openLinkStrategy;
    return $super === VOID ? this.e2z(pathQueryAndFragment, updateHistoryMode, openLinkStrategy) : $super.e2z.call(this, pathQueryAndFragment, updateHistoryMode, openLinkStrategy);
  };
  protoOf(Router).j2y = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy) {
    if (!this.e2z(removePrefix(pathQueryAndFragment, window.origin), updateHistoryMode, openInternalLinksStrategy)) {
      open(window, pathQueryAndFragment, openExternalLinksStrategy);
    }
  };
  function RouteInterceptorScope(pathQueryAndFragment) {
    this.v2y_1 = new Route(pathQueryAndFragment);
    this.w2y_1 = this.v2y_1.i2x_1;
    this.x2y_1 = toMutableMap(this.v2y_1.j2x_1);
    this.y2y_1 = this.v2y_1.k2x_1;
  }
  protoOf(RouteInterceptorScope).g2z = function (value) {
    this.w2y_1 = startsWith(value, _Char___init__impl__6a9atx(47)) ? value : '/' + value;
  };
  protoOf(RouteInterceptorScope).l2x = function () {
    return Route_init_$Create$(this.w2y_1, this.x2y_1, this.y2y_1).toString();
  };
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(it) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
      it($composer_0, 14 & $dirty);
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda_2$lambda_g6ph30(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v1e(errorCode) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
      DefaultErrorPage(errorCode, $composer_0, 14 & $dirty);
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RouterKt() {
    ComposableSingletons$RouterKt_instance = this;
    var tmp = this;
    tmp.a2z_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-149473399, false, ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7));
    var tmp_0 = this;
    tmp_0.b2z_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(231942886, false, ComposableSingletons$RouterKt$lambda_2$lambda_g6ph30));
  }
  var ComposableSingletons$RouterKt_instance;
  function ComposableSingletons$RouterKt_getInstance() {
    if (ComposableSingletons$RouterKt_instance == null)
      new ComposableSingletons$RouterKt();
    return ComposableSingletons$RouterKt_instance;
  }
  var UpdateHistoryMode_PUSH_instance;
  var UpdateHistoryMode_REPLACE_instance;
  var UpdateHistoryMode_entriesInitialized;
  function UpdateHistoryMode_initEntries() {
    if (UpdateHistoryMode_entriesInitialized)
      return Unit_instance;
    UpdateHistoryMode_entriesInitialized = true;
    UpdateHistoryMode_PUSH_instance = new UpdateHistoryMode('PUSH', 0);
    UpdateHistoryMode_REPLACE_instance = new UpdateHistoryMode('REPLACE', 1);
  }
  function UpdateHistoryMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DefaultErrorPage(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1095076849);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.v1e(errorCode) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.navigation.DefaultErrorPage.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(128753264, true, DefaultErrorPage$lambda(errorCode), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1f();
      var tmp;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'com.varabyte.kobweb.navigation.DefaultErrorPage.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_1.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(null, tmp0, $composer_0, 48, 1);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(DefaultErrorPage$lambda_0(errorCode, $changed));
    }
  }
  function DefaultErrorPage$lambda($errorCode) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      Text('Error code: ' + $errorCode, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function DefaultErrorPage$lambda_0($errorCode, $$changed) {
    return function ($composer, $force) {
      DefaultErrorPage($errorCode, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function UpdateHistoryMode_PUSH_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_PUSH_instance;
  }
  function UpdateHistoryMode_REPLACE_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_REPLACE_instance;
  }
  function activePageMethod$factory() {
    return getPropertyCallableRef('activePageMethod', 1, KMutableProperty1, function (receiver) {
      return _get_activePageMethod__dw5579(receiver);
    }, function (receiver, value) {
      return _set_activePageMethod__f6z3vj(receiver, value);
    });
  }
  function activePageMethod$factory_0() {
    return getPropertyCallableRef('activePageMethod', 1, KMutableProperty1, function (receiver) {
      return _get_activePageMethod__dw5579(receiver);
    }, function (receiver, value) {
      return _set_activePageMethod__f6z3vj(receiver, value);
    });
  }
  var com_varabyte_kobweb_streams_ApiStreamListener_ConnectedContext$stable;
  var com_varabyte_kobweb_streams_ApiStreamListener_TextReceivedContext$stable;
  var com_varabyte_kobweb_streams_ApiStreamListener_DisconnectedContext$stable;
  var com_varabyte_kobweb_streams_ApiStream_WebSocketChannel$stable;
  var com_varabyte_kobweb_streams_ApiStream$stable;
  //region block: init
  com_varabyte_kobweb_core_DefaultStyleSheet$stable = 0;
  com_varabyte_kobweb_core_AppGlobals$stable = 8;
  AppGlobals_instance = new AppGlobals();
  Companion_instance = new Companion();
  com_varabyte_kobweb_core_init_InitKobwebContext$stable = 8;
  Companion_instance_0 = new Companion_0();
  com_varabyte_kobweb_navigation_BasePathImpl$stable = 0;
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  com_varabyte_kobweb_navigation_PageData$stable = 8;
  com_varabyte_kobweb_navigation_RouteException$stable = 0;
  com_varabyte_kobweb_navigation_Route$stable = 8;
  Companion_instance_3 = new Companion_3();
  com_varabyte_kobweb_navigation_RouteInterceptorScope$stable = 8;
  com_varabyte_kobweb_navigation_Router_RouteEntry$stable = 0;
  com_varabyte_kobweb_navigation_Router$stable = 8;
  com_varabyte_kobweb_streams_ApiStreamListener_ConnectedContext$stable = 8;
  com_varabyte_kobweb_streams_ApiStreamListener_TextReceivedContext$stable = 8;
  com_varabyte_kobweb_streams_ApiStreamListener_DisconnectedContext$stable = 8;
  com_varabyte_kobweb_streams_ApiStream_WebSocketChannel$stable = 8;
  com_varabyte_kobweb_streams_ApiStream$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = initKobweb;
  _.$_$.b = KobwebApp;
  _.$_$.c = Anchor;
  _.$_$.d = Router;
  _.$_$.e = remove;
  _.$_$.f = OpenLinkStrategy_IN_NEW_TAB_getInstance;
  _.$_$.g = OpenLinkStrategy_IN_PLACE_getInstance;
  _.$_$.h = UpdateHistoryMode_REPLACE_getInstance;
  _.$_$.i = AppGlobals_instance;
  _.$_$.j = Companion_instance_1;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-core.js.map
