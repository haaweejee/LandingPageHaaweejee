(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-kobweb-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-silk-icons-fa.js', './kotlinx-coroutines-core.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-kobweb-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-silk-icons-fa.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-icons-fa'] === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'kobweb-frontend-silk-icons-fa' was not found. Please, check whether 'kobweb-frontend-silk-icons-fa' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    globalThis['id.haaweejee.landingpage:site'] = factory(typeof globalThis['id.haaweejee.landingpage:site'] === 'undefined' ? {} : globalThis['id.haaweejee.landingpage:site'], globalThis['kobweb-frontend-kobweb-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-silk-foundation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-internal-html-core-runtime'], globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kobweb-frontend-kobweb-silk'], globalThis['html-html-core'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kobweb-frontend-silk-icons-fa'], globalThis['kotlinx-coroutines-core'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(function (_, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobwebx_silk_icons_fa, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var AppGlobals_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var to = kotlin_kotlin.$_$.ng;
  var mapOf = kotlin_kotlin.$_$.x7;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var removePrefix = kotlin_kotlin.$_$.xd;
  var remove = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var ensureNotNull = kotlin_kotlin.$_$.cg;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var THROW_CCE = kotlin_kotlin.$_$.jf;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var DeferringHost = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var protoOf = kotlin_kotlin.$_$.gc;
  var initMetadataForObject = kotlin_kotlin.$_$.ib;
  var removeSuffix = kotlin_kotlin.$_$.yd;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.e;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.t5;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e4;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.i6;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.i5;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h3;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.d6;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.g5;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var VOID = kotlin_kotlin.$_$.f;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var rememberBreakpoint = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var Bottom_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var End_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a4;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w3;
  var IconSize_LG_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.j;
  var FaArrowUp = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.c;
  var KMutableProperty0 = kotlin_kotlin.$_$.tc;
  var THROW_ISE = kotlin_kotlin.$_$.lf;
  var getLocalDelegateReference = kotlin_kotlin.$_$.ya;
  var CoroutineImpl = kotlin_kotlin.$_$.ea;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var isInterface = kotlin_kotlin.$_$.sb;
  var initMetadataForLambda = kotlin_kotlin.$_$.hb;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u3;
  var visibility = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f3;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z3;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var SuspendFunction1 = kotlin_kotlin.$_$.fa;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.x5;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var Label = kotlin_org_jetbrains_compose_html_html_core.$_$.c6;
  var Text_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var attrsModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var Input = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var TextArea = kotlin_org_jetbrains_compose_html_html_core.$_$.h6;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var numColumns = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var SimpleGrid = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var Image_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q3;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.c5;
  var times = kotlin_org_jetbrains_compose_html_html_core.$_$.o5;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var SpaceBetween_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var End_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var copyToArray = kotlin_kotlin.$_$.w6;
  var take = kotlin_kotlin.$_$.z8;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p3;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var IconSize_XL_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.k;
  var FaBars = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.d;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.v3;
  var Long = kotlin_kotlin.$_$.df;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o9;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var FaXmark = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.i;
  var OpenLinkStrategy_IN_PLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var Companion_getInstance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m3;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var Companion_getInstance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n3;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var OpenLinkStrategy_IN_NEW_TAB_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var Link_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.d;
  var Companion_getInstance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l3;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var Companion_getInstance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w3;
  var width_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var Start_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b4;
  var equals = kotlin_kotlin.$_$.va;
  var Companion_getInstance_14 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o3;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var borderRadius_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var times_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.p5;
  var maxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var FaLinkedin = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.f;
  var FaGithub = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.e;
  var FaUpwork = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.h;
  var FaMedium = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.g;
  var THROW_IAE = kotlin_kotlin.$_$.kf;
  var enumEntries = kotlin_kotlin.$_$.ia;
  var Enum = kotlin_kotlin.$_$.ye;
  var initMetadataForClass = kotlin_kotlin.$_$.db;
  var rgb = kotlin_org_jetbrains_compose_html_html_core.$_$.k5;
  var Top_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var padding_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var TopCenter_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c4;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Companion_getInstance_15 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g3;
  var fontStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var numberToInt = kotlin_kotlin.$_$.ec;
  var get_deg = kotlin_org_jetbrains_compose_html_html_core.$_$.z3;
  var transform = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var take_0 = kotlin_kotlin.$_$.a9;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var FaArrowLeft = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.a;
  var FaArrowRight = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.b;
  var listOf = kotlin_kotlin.$_$.v7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.fg;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var rotate = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var Companion_getInstance_16 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r3;
  var grayscale = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var filter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e1;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var get_focus = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var rgba = kotlin_org_jetbrains_compose_html_html_core.$_$.j5;
  var filter_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.c4;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var numberRangeToNumber = kotlin_kotlin.$_$.bc;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.fb;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForObject(ComposableSingletons$BackToTopButtonKt, 'ComposableSingletons$BackToTopButtonKt');
  initMetadataForLambda(BackToTopButton$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$ContactFormKt, 'ComposableSingletons$ContactFormKt');
  initMetadataForObject(ComposableSingletons$HeaderKt, 'ComposableSingletons$HeaderKt');
  initMetadataForLambda(OverflowMenu$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(OverflowMenu$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(OverflowMenu$lambda$lambda$lambda$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(OverflowMenu$lambda$lambda$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$PortfolioCardKt, 'ComposableSingletons$PortfolioCardKt');
  initMetadataForObject(ComposableSingletons$RatingBarKt, 'ComposableSingletons$RatingBarKt');
  initMetadataForLambda(SectionTitle$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$SocialBarKt, 'ComposableSingletons$SocialBarKt');
  initMetadataForClass(Achievement, 'Achievement', VOID, Enum);
  initMetadataForClass(Experience, 'Experience', VOID, Enum);
  initMetadataForClass(Portfolio, 'Portfolio', VOID, Enum);
  initMetadataForClass(Section, 'Section', VOID, Enum);
  initMetadataForClass(Service, 'Service', VOID, Enum);
  initMetadataForClass(Skill, 'Skill', VOID, Enum);
  initMetadataForClass(ProgrammingLanguage, 'ProgrammingLanguage', VOID, Enum);
  initMetadataForClass(Testimonial, 'Testimonial', VOID, Enum);
  initMetadataForClass(Theme, 'Theme', VOID, Enum);
  initMetadataForObject(ComposableSingletons$AboutSectionKt, 'ComposableSingletons$AboutSectionKt');
  initMetadataForLambda(AboutMe$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(AchievementContent$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$ContactSectionKt, 'ComposableSingletons$ContactSectionKt');
  initMetadataForLambda(ContactContent$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$ExperienceSectionKt, 'ComposableSingletons$ExperienceSectionKt');
  initMetadataForObject(ComposableSingletons$FooterSectionKt, 'ComposableSingletons$FooterSectionKt');
  initMetadataForObject(ComposableSingletons$MainSectionKt, 'ComposableSingletons$MainSectionKt');
  initMetadataForObject(ComposableSingletons$PortfolioSectionKt, 'ComposableSingletons$PortfolioSectionKt');
  initMetadataForObject(ComposableSingletons$ServiceSectionKt, 'ComposableSingletons$ServiceSectionKt');
  initMetadataForObject(ComposableSingletons$TestimonialSectionKt, 'ComposableSingletons$TestimonialSectionKt');
  initMetadataForLambda(ObserveViewPortEntered$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($animateNumbersCOROUTINE$0, CoroutineImpl);
  //endregion
  function main() {
    AppGlobals_getInstance().initialize_8ufbf0_k$(mapOf(to('title', 'Landing Page')));
    Companion_getInstance().set_wjk6wo_k$('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.addRouteInterceptor_kgq7h7_k$(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.tryRoutingTo$default_gm9buu_k$(remove(Companion_getInstance(), removePrefix(window.location.href, window.origin)), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable('root', ComposableLambda$invoke$ref_2(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(188215112, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:16)');
      }
      HomePage($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(854823496, $dirty, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:61)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-440954647, true, ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75(it), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it_0;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      DeferringHost(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-440954647, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous> (main.kt:61)');
        }
        $it($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(188215112, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(854823496, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_kgubpq_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_2_ib40yb_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda(ctx) {
    ctx.get_router_j3zccy_k$().register_vkebx7_k$('/', ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.set_path_tgrnnc_k$(removeSuffix(removeSuffix($this$addRouteInterceptor.get_path_wos8ry_k$(), '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('about-image', get_AboutImageStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('about-text', get_AboutTextStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('programming-card', get_ProgrammingCardStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('back-to-top-button', get_BackToTopButtonStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('input', get_InputStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('navigation-item', get_NavigationItemStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('logo', get_LogoStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('social-link', get_SocialLinkStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('github-link', get_GithubLinkStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('upwork-link', get_UpworkLinkStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('main-button', get_MainButtonStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('main-button-cv', get_MainButtonCVStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('main-image', get_MainImageStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('portfolio-section', get_PortfolioSectionStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('portfolio-arrow-icon', get_PortfolioArrowIconStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('service-card', get_ServiceCardStyle());
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1190994075, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:61)');
        }
        $router.renderActivePage_fc13h0_k$(ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 6, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:60)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'main.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1190994075, true, main$lambda$lambda($router), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AppEntry(tmp0, $composer_0, 6);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function mainWrapper() {
    main();
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1674047329);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1674047329, $dirty, -1, 'id.haaweejee.landingpage.AppEntry (AppEntry.kt:13)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.AppEntry.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-701369728, true, AppEntry$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.AppEntry.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SilkApp(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppEntry$lambda_0(content, $changed));
    }
  }
  function AppEntry$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1819595110, $changed, -1, 'id.haaweejee.landingpage.AppEntry.<anonymous>.<anonymous> (AppEntry.kt:16)');
        }
        $content($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-701369728, $changed, -1, 'id.haaweejee.landingpage.AppEntry.<anonymous> (AppEntry.kt:15)');
        }
        var tmp_0 = minHeight(toModifier(get_SmoothColorStyle(), $composer_0, 0), get_vh(100));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.AppEntry.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1819595110, true, AppEntry$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.AppEntry.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Surface(tmp_0, null, null, null, null, tmp0, $composer_0, 196608, 30);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AchievementCard(modifier, number, achievement, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-578779001);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(number) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(achievement) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (isTraceInProgress()) {
        traceEventStart(-578779001, $dirty, -1, 'id.haaweejee.landingpage.components.AchievementCard (AchievementCard.kt:32)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.AchievementCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1336281014, true, AchievementCard$lambda(achievement, number), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.AchievementCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_9(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Row(tmp, null, tmp_0, null, tmp0, $composer_0, 24576 | 14 & $dirty, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AchievementCard$lambda_0(modifier_0, number, achievement, $changed, $default));
    }
  }
  function AchievementCard$lambda$lambda$lambda($achievement, $number) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1265010783, $changed, -1, 'id.haaweejee.landingpage.components.AchievementCard.<anonymous>.<anonymous>.<anonymous> (AchievementCard.kt:55)');
      }
      Text($achievement.equals(Achievement_Completed_getInstance()) ? '' + $number + '+' : '' + $number, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AchievementCard$lambda$lambda$lambda_0($achievement) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(198610646, $changed, -1, 'id.haaweejee.landingpage.components.AchievementCard.<anonymous>.<anonymous>.<anonymous> (AchievementCard.kt:71)');
      }
      Text($achievement.get_description_emjre5_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AchievementCard$lambda$lambda($achievement, $number) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1840180287, $changed, -1, 'id.haaweejee.landingpage.components.AchievementCard.<anonymous>.<anonymous> (AchievementCard.kt:45)');
        }
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_getInstance_1()), get_px(0)), ['Roboto']), get_px(30)), Companion_getInstance_2().get_Bolder_3mclb9_k$()), Theme_Primary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.AchievementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1265010783, true, AchievementCard$lambda$lambda$lambda($achievement, $number), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.AchievementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_3 = toAttrs(opacity(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_getInstance_1()), get_px(0)), ['Roboto']), get_px(16)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), get_percent(50)));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.AchievementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(198610646, true, AchievementCard$lambda$lambda$lambda_0($achievement), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.AchievementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_7(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        P(tmp_3, tmp0_0, $composer_0, 48, 0);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AchievementCard$lambda($achievement, $number) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1336281014, $changed, -1, 'id.haaweejee.landingpage.components.AchievementCard.<anonymous> (AchievementCard.kt:37)');
        }
        var tmp0_modifier = margin_0(size(Companion_getInstance_1(), get_px(70)), VOID, get_px(20));
        var tmp1_src = $achievement.get_icon_wont8i_k$();
        Image(tmp1_src, '', tmp0_modifier, null, null, null, null, $composer_0, 48, 120);
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.AchievementCard.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1840180287, true, AchievementCard$lambda$lambda($achievement, $number), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.AchievementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_8(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(null, null, null, null, tmp0, $composer_0, 24576, 15);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AchievementCard$lambda_0($modifier, $number, $achievement, $$changed, $$default) {
    return function ($composer, $force) {
      AchievementCard($modifier._v, $number, $achievement, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function BackToTopButton($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(224640804);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(224640804, $changed, -1, 'id.haaweejee.landingpage.components.BackToTopButton (BackToTopButton.kt:42)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-176384132);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.BackToTopButton.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var scroll$delegate = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(-176382066);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.BackToTopButton.<anonymous>' call
        var value_0 = BackToTopButton$slambda_0(scroll$delegate, null);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(Unit_getInstance(), tmp1_group, $composer_0, 6);
      var tmp_3 = fillMaxSize(Companion_getInstance_1());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_3();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_4 = zIndex(position(tmp_3, 'fixed'), 1);
      $composer_0.startReplaceGroup_5hh8aj_k$(-176371404);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.BackToTopButton.<anonymous>' call
        var value_1 = BackToTopButton$lambda_1;
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_1;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_7 = styleModifier(tmp_4, tmp2_group);
      var tmp_8 = Bottom_getInstance();
      var tmp_9 = End_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.BackToTopButton.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1749567525, true, BackToTopButton$lambda_2(breakpoint, scroll$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_10;
      if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.BackToTopButton.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_2);
        tmp_10 = value_2;
      } else {
        tmp_10 = it_2;
      }
      var tmp_11 = tmp_10;
      var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp_7, tmp_8, tmp_9, null, tmp0, $composer_0, 24576, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(BackToTopButton$lambda_3($changed));
    }
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$BackToTopButtonKt$lambda_1$lambda_8gu7iz($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1893605919, $changed, -1, 'id.haaweejee.landingpage.components.ComposableSingletons$BackToTopButtonKt.lambda-1.<anonymous> (BackToTopButton.kt:86)');
      }
      FaArrowUp(color(Companion_getInstance_1(), Colors_getInstance().get_White_ij46ow_k$()), IconSize_LG_getInstance(), $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$BackToTopButtonKt() {
    ComposableSingletons$BackToTopButtonKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-1893605919, false, ComposableSingletons$BackToTopButtonKt$lambda_1$lambda_8gu7iz));
  }
  protoOf(ComposableSingletons$BackToTopButtonKt).get_lambda_1_kgubpq_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$BackToTopButtonKt_instance;
  function ComposableSingletons$BackToTopButtonKt_getInstance() {
    if (ComposableSingletons$BackToTopButtonKt_instance == null)
      new ComposableSingletons$BackToTopButtonKt();
    return ComposableSingletons$BackToTopButtonKt_instance;
  }
  function BackToTopButton$lambda($scroll$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('scroll', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $scroll$delegate.get_value_j01efc_k$();
  }
  function BackToTopButton$lambda_0($scroll$delegate, _set____db54di) {
    getLocalDelegateReference('scroll', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $scroll$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function BackToTopButton$slambda$lambda($scroll$delegate) {
    return function (it) {
      var tmp0_safe_receiver = document.documentElement;
      BackToTopButton$lambda_0($scroll$delegate, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.scrollTop);
      return Unit_getInstance();
    };
  }
  function BackToTopButton$slambda($scroll$delegate, resultContinuation) {
    this.$scroll$delegate_1 = $scroll$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BackToTopButton$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BackToTopButton$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BackToTopButton$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0 = window;
          tmp_0.addEventListener('scroll', BackToTopButton$slambda$lambda(this.$scroll$delegate_1));
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BackToTopButton$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new BackToTopButton$slambda(this.$scroll$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(BackToTopButton$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BackToTopButton$slambda_0($scroll$delegate, resultContinuation) {
    var i = new BackToTopButton$slambda($scroll$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BackToTopButton$lambda_1($this$styleModifier) {
    $this$styleModifier.property_wcrait_k$('pointer-events', 'none');
    return Unit_getInstance();
  }
  function BackToTopButton$lambda$lambda(it) {
    var tmp0_safe_receiver = document.documentElement;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.scroll(0.0, 0.0);
    }
    return Unit_getInstance();
  }
  function BackToTopButton$lambda$lambda_0($this$styleModifier) {
    $this$styleModifier.property_wcrait_k$('pointer-events', 'auto');
    return Unit_getInstance();
  }
  function BackToTopButton$lambda_2($breakpoint, $scroll$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1749567525, $changed, -1, 'id.haaweejee.landingpage.components.BackToTopButton.<anonymous> (BackToTopButton.kt:66)');
        }
        var tmp_0 = cursor(backgroundColor(margin_0(borderRadius(visibility(size(toModifier(get_BackToTopButtonStyle(), $composer_0, 6), get_px(50)), !(BackToTopButton$lambda($scroll$delegate) == null) && ensureNotNull(BackToTopButton$lambda($scroll$delegate)) > 400.0 ? Companion_getInstance_4().get_Visible_yikvpz_k$() : Companion_getInstance_4().get_Hidden_viqel_k$()), get_percent(20)), VOID, $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) <= 0 ? get_px(30) : get_px(40), $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) <= 0 ? get_px(30) : get_px(40)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Companion_getInstance_5().get_Pointer_m64vg4_k$());
        $composer_0.startReplaceGroup_5hh8aj_k$(-499700012);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.BackToTopButton.<anonymous>.<anonymous>.<anonymous>' call
          var value = BackToTopButton$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_3 = onClick(tmp_0, tmp0_group);
        $composer_0.startReplaceGroup_5hh8aj_k$(-499696645);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.BackToTopButton.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = BackToTopButton$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_6 = styleModifier(tmp_3, tmp1_group);
        var tmp_7 = Center_getInstance();
        Box(tmp_6, tmp_7, null, ComposableSingletons$BackToTopButtonKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3072, 4);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_getInstance();
        }
        tmp = tmp_8;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function BackToTopButton$lambda_3($$changed) {
    return function ($composer, $force) {
      BackToTopButton($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ContactForm(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1533034899);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1533034899, $dirty, -1, 'id.haaweejee.landingpage.components.ContactForm (ContactForm.kt:45)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-834813799);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>' call
        var value = mutableStateOf('');
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var inputName$delegate = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(-834812007);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>' call
        var value_0 = mutableStateOf('');
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var inputMessage$delegate = tmp1_group;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1600591734, true, ContactForm$lambda_3(breakpoint, inputName$delegate, inputMessage$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_16(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(null, null, null, null, tmp0, $composer_0, 24576, 15);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(ContactForm$lambda_4(breakpoint, $changed));
    }
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_1$lambda_27lvxi($this$Label, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1817916299, $changed, -1, 'id.haaweejee.landingpage.components.ComposableSingletons$ContactFormKt.lambda-1.<anonymous> (ContactForm.kt:57)');
    }
    Text('Name', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_2$lambda_qm0l4p($this$Label, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2134243522, $changed, -1, 'id.haaweejee.landingpage.components.ComposableSingletons$ContactFormKt.lambda-2.<anonymous> (ContactForm.kt:85)');
    }
    Text('Message', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_3$lambda_flgzs8($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1496547478, $changed, -1, 'id.haaweejee.landingpage.components.ComposableSingletons$ContactFormKt.lambda-3.<anonymous> (ContactForm.kt:122)');
    }
    Text('Submit', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ContactFormKt() {
    ComposableSingletons$ContactFormKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(1817916299, false, ComposableSingletons$ContactFormKt$lambda_1$lambda_27lvxi));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(2134243522, false, ComposableSingletons$ContactFormKt$lambda_2$lambda_qm0l4p));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(1496547478, false, ComposableSingletons$ContactFormKt$lambda_3$lambda_flgzs8));
  }
  protoOf(ComposableSingletons$ContactFormKt).get_lambda_1_kgubpq_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$ContactFormKt).get_lambda_2_ib40yb_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$ContactFormKt).get_lambda_3_dy1ocs_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$ContactFormKt_instance;
  function ComposableSingletons$ContactFormKt_getInstance() {
    if (ComposableSingletons$ContactFormKt_instance == null)
      new ComposableSingletons$ContactFormKt();
    return ComposableSingletons$ContactFormKt_instance;
  }
  function ContactForm$lambda($inputName$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('inputName', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $inputName$delegate.get_value_j01efc_k$();
  }
  function ContactForm$lambda_0($inputName$delegate, _set____db54di) {
    getLocalDelegateReference('inputName', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $inputName$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ContactForm$lambda_1($inputMessage$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('inputMessage', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $inputMessage$delegate.get_value_j01efc_k$();
  }
  function ContactForm$lambda_2($inputMessage$delegate, _set____db54di) {
    getLocalDelegateReference('inputMessage', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $inputMessage$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ContactForm$lambda$lambda($this$attrsModifier) {
    $this$attrsModifier.attr_w68641_k$('placeholder', 'Full Name');
    $this$attrsModifier.attr_w68641_k$('name', 'name');
    $this$attrsModifier.attr_w68641_k$('required', 'true');
    return Unit_getInstance();
  }
  function ContactForm$lambda$lambda_0($inputName$delegate) {
    return function (it) {
      ContactForm$lambda_0($inputName$delegate, it);
      console.log(it);
      return Unit_getInstance();
    };
  }
  function ContactForm$lambda$lambda_1($this$attrsModifier) {
    $this$attrsModifier.attr_w68641_k$('placeholder', 'Your Message');
    $this$attrsModifier.attr_w68641_k$('name', 'message');
    $this$attrsModifier.attr_w68641_k$('required', 'true');
    return Unit_getInstance();
  }
  function ContactForm$lambda$lambda$lambda($inputMessage$delegate, $inputName$delegate) {
    return function (it) {
      var tmp = document.getElementById('inputMessage');
      var tmp0_safe_receiver = tmp instanceof HTMLTextAreaElement ? tmp : null;
      // Inline function 'kotlin.text.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.value;
      var tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      ContactForm$lambda_2($inputMessage$delegate, tmp$ret$0);
      console.log('TextArea Value: ' + ContactForm$lambda_1($inputMessage$delegate));
      window.open('https://api.whatsapp.com/send/?phone=6281387258259&text=Saya ' + ContactForm$lambda($inputName$delegate) + ', ' + ContactForm$lambda_1($inputMessage$delegate) + '&type=phone_number&app_absent=0', '');
      return Unit_getInstance();
    };
  }
  function ContactForm$lambda$lambda_2($inputMessage$delegate, $inputName$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1712432400, $changed, -1, 'id.haaweejee.landingpage.components.ContactForm.<anonymous>.<anonymous> (ContactForm.kt:107)');
        }
        var tmp_0 = cursor(color(backgroundColor(borderRadius(border(height(toModifier(get_MainButtonStyle(), $composer_0, 6), get_px(40)), get_px(0)), get_px(5)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Colors_getInstance().get_White_ij46ow_k$()), Companion_getInstance_5().get_Pointer_m64vg4_k$());
        $composer_0.startReplaceGroup_5hh8aj_k$(1511020911);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ContactForm$lambda$lambda$lambda($inputMessage$delegate, $inputName$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        Button(toAttrs(onClick(tmp_0, tmp0_group)), ComposableSingletons$ContactFormKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 48, 0);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ContactForm$lambda_3($breakpoint, $inputName$delegate, $inputMessage$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1600591734, $changed, -1, 'id.haaweejee.landingpage.components.ContactForm.<anonymous> (ContactForm.kt:51)');
        }
        var tmp0_attrs = toAttrs(classNames(Companion_getInstance_1(), ['form-label']));
        Label('inputName', tmp0_attrs, ComposableSingletons$ContactFormKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 390, 0);
        var tmp1_type = Text_getInstance();
        var tmp_0 = boxShadow(backgroundColor(width(margin_1(classNames(id(toModifier(get_InputStyle(), $composer_0, 6), 'inputName'), ['form-control']), VOID, VOID, get_px(10)), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(500) : get_px(250)), Theme_LighterGray_getInstance().get_rgb_18ix0c_k$()), get_px(0), get_px(0), get_px(0), get_px(0), null);
        $composer_0.startReplaceGroup_5hh8aj_k$(-1663526857);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>.<anonymous>.<anonymous>' call
          var value = ContactForm$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp2_modifier = attrsModifier(tmp_0, tmp0_group);
        var tmp3_value = ContactForm$lambda($inputName$delegate);
        $composer_0.startReplaceGroup_5hh8aj_k$(-1663520921);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ContactForm$lambda$lambda_0($inputName$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        Input(tmp1_type, tmp3_value, tmp1_group, tmp2_modifier, null, null, null, false, false, false, false, false, null, null, null, null, null, null, $composer_0, 384, 0, 262128);
        var tmp4_attrs = toAttrs(classNames(Companion_getInstance_1(), ['form-label']));
        Label('inputMessage', tmp4_attrs, ComposableSingletons$ContactFormKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 390, 0);
        var tmp_5 = boxShadow(backgroundColor(width(margin_1(height(classNames(id(toModifier(get_InputStyle(), $composer_0, 6), 'inputMessage'), ['form-control']), get_px(150)), VOID, VOID, get_px(20)), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(500) : get_px(250)), Theme_LighterGray_getInstance().get_rgb_18ix0c_k$()), get_px(0), get_px(0), get_px(0), get_px(0), null);
        $composer_0.startReplaceGroup_5hh8aj_k$(-1663496707);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ContactForm$lambda$lambda_1;
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = it_1;
        }
        var tmp_7 = tmp_6;
        var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        TextArea(null, toAttrs(attrsModifier(tmp_5, tmp2_group)), $composer_0, 0, 1);
        var tmp_8 = fillMaxWidth(Companion_getInstance_1());
        var tmp_9 = Center_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1712432400, true, ContactForm$lambda$lambda_2($inputMessage$delegate, $inputName$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_10;
        if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_15(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_2);
          tmp_10 = value_2;
        } else {
          tmp_10 = it_2;
        }
        var tmp_11 = tmp_10;
        var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Box(tmp_8, tmp_9, null, tmp0, $composer_0, 3072, 4);
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_getInstance();
        }
        tmp = tmp_12;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ContactForm$lambda_4($breakpoint, $$changed) {
    return function ($composer, $force) {
      ContactForm($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ExperienceCard(breakpoint, active, experience, animatedMargin, $composer, $changed, $default) {
    var active_0 = {_v: active};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(557020202);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(active_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(experience) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(animatedMargin) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        active_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(557020202, $dirty, -1, 'id.haaweejee.landingpage.components.ExperienceCard (ExperienceCard.kt:53)');
      }
      var tmp0_modifier = maxWidth(fillMaxWidth(Companion_getInstance_1()), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(60) : get_percent(90));
      var tmp1_numColumns = numColumns(1, VOID, 2);
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.ExperienceCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(185328275, true, ExperienceCard$lambda(active_0, experience, breakpoint, animatedMargin), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.ExperienceCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_17(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SimpleGrid(tmp1_numColumns, tmp0_modifier, null, null, tmp0, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ExperienceCard$lambda_0(breakpoint, active_0, experience, animatedMargin, $changed, $default));
    }
  }
  function ExperienceDescription(active, description, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1257452269);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(active) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(description) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1257452269, $dirty, -1, 'id.haaweejee.landingpage.components.ExperienceDescription (ExperienceCard.kt:77)');
      }
      var tmp = backgroundColor(padding(margin(fillMaxWidth(Companion_getInstance_1()), get_px(14)), get_px(14)), active ? Theme_Primary_getInstance().get_rgb_18ix0c_k$() : Theme_LighterGray_getInstance().get_rgb_18ix0c_k$());
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.ExperienceDescription.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-848939443, true, ExperienceDescription$lambda(active, description), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.ExperienceDescription.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_19(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp, null, null, tmp0, $composer_0, 3072, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ExperienceDescription$lambda_0(active, description, $changed));
    }
  }
  function ExperienceDetails(breakpoint, active, experience, animatedMargin, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-989077208);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(active) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(experience) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(animatedMargin) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-989077208, $dirty, -1, 'id.haaweejee.landingpage.components.ExperienceDetails (ExperienceCard.kt:107)');
      }
      var tmp = margin_0(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, VOID, breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_px(14) : get_px(0));
      var tmp_0 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(97279109, true, ExperienceDetails$lambda(breakpoint, active, experience, animatedMargin), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_25(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Row(tmp, null, tmp_0, null, tmp0, $composer_0, 24576, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ExperienceDetails$lambda_0(breakpoint, active, experience, animatedMargin, $changed));
    }
  }
  function ExperienceNumber(active, experience, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-252476529);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(active) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(experience) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-252476529, $dirty, -1, 'id.haaweejee.landingpage.components.ExperienceNumber (ExperienceCard.kt:188)');
      }
      var tmp = fillMaxHeight(margin_0(Companion_getInstance_1(), VOID, get_px(14)));
      var tmp_0 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(730532629, true, ExperienceNumber$lambda(active, experience), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_28(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp, tmp_0, null, tmp0, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ExperienceNumber$lambda_0(active, experience, $changed));
    }
  }
  function ExperienceCard$lambda($active, $experience, $breakpoint, $animatedMargin) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(185328275, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceCard.<anonymous> (ExperienceCard.kt:60)');
        }
        ExperienceDescription($active._v, $experience.get_description_emjre5_k$(), $composer_0, 0);
        ExperienceDetails($breakpoint, $active._v, $experience, $animatedMargin, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ExperienceCard$lambda_0($breakpoint, $active, $experience, $animatedMargin, $$changed, $$default) {
    return function ($composer, $force) {
      ExperienceCard($breakpoint, $active._v, $experience, $animatedMargin, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function ExperienceDescription$lambda$lambda($description) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(2042495983, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceDescription.<anonymous>.<anonymous> (ExperienceCard.kt:96)');
      }
      Text($description, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceDescription$lambda($active, $description) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-848939443, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceDescription.<anonymous> (ExperienceCard.kt:85)');
        }
        var tmp_0 = toAttrs(color(fontWeight(lineHeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_getInstance_1()), get_px(0)), ['Roboto']), get_px(14)), 1.6), Companion_getInstance_2().get_Normal_22avww_k$()), $active ? Theme_White_getInstance().get_rgb_18ix0c_k$() : Theme_Secondary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ExperienceDescription.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(2042495983, true, ExperienceDescription$lambda$lambda($description), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ExperienceDescription.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_18(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceDescription$lambda_0($active, $description, $$changed) {
    return function ($composer, $force) {
      ExperienceDescription($active, $description, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ExperienceDetails$lambda$lambda$lambda($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1608752560, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous> (ExperienceCard.kt:143)');
      }
      Text($experience.get_jobPosition_k6sg9v_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceDetails$lambda$lambda$lambda_0($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(552419961, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous> (ExperienceCard.kt:155)');
      }
      Text($experience.get_from_wom7eb_k$() + ' - ' + $experience.get_to_kntnng_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceDetails$lambda$lambda$lambda$lambda($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1302220281, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ExperienceCard.kt:170)');
      }
      Text($experience.get_company_gzg49g_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceDetails$lambda$lambda$lambda_1($experience) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(205693015, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous> (ExperienceCard.kt:160)');
        }
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_getInstance_1()), get_px(0)), ['Roboto']), get_px(14)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1302220281, true, ExperienceDetails$lambda$lambda$lambda$lambda($experience), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_22(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_3 = $experience.get_image_it3i2a_k$();
        var tmp_4 = margin_1(height(Companion_getInstance_1(), get_px(16)), get_px(6));
        Image_0(tmp_3, tmp_4, null, null, null, null, null, $composer_0, 0, 124);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceDetails$lambda$lambda($experience) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(407635886, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous> (ExperienceCard.kt:133)');
        }
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_getInstance_1()), get_px(0)), ['Roboto']), get_px(20)), Companion_getInstance_2().get_Bold_wnz5ke_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1608752560, true, ExperienceDetails$lambda$lambda$lambda($experience), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_20(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_3 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_getInstance_1()), get_px(0)), ['Roboto']), get_px(14)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(552419961, true, ExperienceDetails$lambda$lambda$lambda_0($experience), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_21(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        P(tmp_3, tmp0_0, $composer_0, 48, 0);
        var tmp_6 = margin_1(Companion_getInstance_1(), get_px(8));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_1 = rememberComposableLambda(205693015, true, ExperienceDetails$lambda$lambda$lambda_1($experience), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_23(dispatchReceiver_1);
          $composer_3.updateRememberedValue_l1wh71_k$(value_1);
          tmp_7 = value_1;
        } else {
          tmp_7 = it_1;
        }
        var tmp_8 = tmp_7;
        var tmp0_1 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        sourceInformationMarkerEnd($composer_3);
        Column(tmp_6, null, null, null, tmp0_1, $composer_0, 24576, 14);
        var tmp_9;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_9 = Unit_getInstance();
        }
        tmp = tmp_9;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceDetails$lambda($breakpoint, $active, $experience, $animatedMargin) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(97279109, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous> (ExperienceCard.kt:114)');
        }
        $composer_0.startReplaceGroup_5hh8aj_k$(305041454);
        if ($breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0) {
          ExperienceNumber($active, $experience, $composer_0, 0);
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_0 = transition(margin_0(fillMaxSize(Companion_getInstance_1()), VOID, VOID, VOID, $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) <= 0 ? get_px(0) : $animatedMargin), [Companion_getInstance_6().of$default_tua0if_k$('margin', get_ms(500), VOID, times($experience.get_ordinal_ip24qg_k$(), get_ms(100)))]);
        var tmp_1 = Center_getInstance_0();
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(407635886, true, ExperienceDetails$lambda$lambda($experience), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_24(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, tmp_1, null, null, tmp0, $composer_0, 24576, 12);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceDetails$lambda_0($breakpoint, $active, $experience, $animatedMargin, $$changed) {
    return function ($composer, $force) {
      ExperienceDetails($breakpoint, $active, $experience, $animatedMargin, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ExperienceNumber$lambda$lambda$lambda($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1939502736, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous>.<anonymous>.<anonymous> (ExperienceCard.kt:222)');
      }
      Text($experience.get_number_hay53m_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceNumber$lambda$lambda($active, $experience) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-540899502, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous>.<anonymous> (ExperienceCard.kt:213)');
        }
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_getInstance_1(), get_px(0)), ['Roboto']), get_px(16)), Companion_getInstance_2().get_Bold_wnz5ke_k$()), $active ? Theme_White_getInstance().get_rgb_18ix0c_k$() : Theme_Primary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1939502736, true, ExperienceNumber$lambda$lambda$lambda($experience), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_26(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceNumber$lambda($active, $experience) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(730532629, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous> (ExperienceCard.kt:195)');
        }
        var tmp_0 = backgroundColor(width(fillMaxHeight(Companion_getInstance_1()), get_px(3)), Theme_Primary_getInstance().get_rgb_18ix0c_k$());
        Box(tmp_0, null, null, null, $composer_0, 0, 14);
        var tmp_1 = size(Companion_getInstance_1(), get_px(40));
        var tmp_2 = get_px(3);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
        Companion_getInstance_7();
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = borderRadius(backgroundColor(border(tmp_1, tmp_2, 'solid', Theme_Primary_getInstance().get_rgb_18ix0c_k$()), $active ? Theme_Primary_getInstance().get_rgb_18ix0c_k$() : Theme_White_getInstance().get_rgb_18ix0c_k$()), get_percent(50));
        var tmp_4 = Center_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-540899502, true, ExperienceNumber$lambda$lambda($active, $experience), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_27(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_5 = value;
        } else {
          tmp_5 = it;
        }
        var tmp_6 = tmp_5;
        var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Box(tmp_3, tmp_4, null, tmp0, $composer_0, 3072, 4);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceNumber$lambda_0($active, $experience, $$changed) {
    return function ($composer, $force) {
      ExperienceNumber($active, $experience, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Header(onMenuClicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2012147602);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMenuClicked) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2012147602, $dirty, -1, 'id.haaweejee.landingpage.components.Header (Header.kt:28)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = margin(fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_percent(80) : get_percent(90)), get_px(32));
      var tmp_0 = SpaceBetween_getInstance();
      var tmp_1 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.Header.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1771417455, true, Header$lambda(breakpoint, onMenuClicked), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.Header.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_30(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Row(tmp, tmp_0, tmp_1, null, tmp0, $composer_0, 24576, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Header$lambda_0(onMenuClicked, $changed));
    }
  }
  function LeftSide(breakpoint, onMenuClicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(218696160);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMenuClicked) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(218696160, $dirty, -1, 'id.haaweejee.landingpage.components.LeftSide (Header.kt:51)');
      }
      var tmp = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.LeftSide.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-284706525, true, LeftSide$lambda(breakpoint, onMenuClicked), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.LeftSide.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_31(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Row(null, null, tmp, null, tmp0, $composer_0, 24576, 11);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(LeftSide$lambda_0(breakpoint, onMenuClicked, $changed));
    }
  }
  function RightSide($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(551418026);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(551418026, $changed, -1, 'id.haaweejee.landingpage.components.RightSide (Header.kt:74)');
      }
      var tmp = padding(backgroundColor(borderRadius(fillMaxWidth(Companion_getInstance_1()), get_px(50)), Theme_White_getInstance().get_rgb_18ix0c_k$()), get_px(20));
      var tmp_0 = End_getInstance_0();
      Row(tmp, tmp_0, null, null, ComposableSingletons$HeaderKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(RightSide$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$HeaderKt$lambda_1$lambda_fev17j($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2028658105, $changed, -1, 'id.haaweejee.landingpage.components.ComposableSingletons$HeaderKt.lambda-1.<anonymous> (Header.kt:83)');
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = get_entries_2();
      var tmp$ret$0 = copyToArray(this_0);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = take(tmp$ret$0, 6).iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'id.haaweejee.landingpage.components.ComposableSingletons$HeaderKt.lambda-1.<anonymous>.<anonymous>' call
        var tmp0_modifier = textDecorationLine(fontSize(fontFamily(padding_0(toModifier(get_NavigationItemStyle(), $composer_0, 6), VOID, get_px(30)), ['Roboto']), get_px(18)), Companion_getInstance_8().get_None_wo6tgh_k$());
        var tmp1_path = element.get_path_wos8ry_k$();
        var tmp2_text = element.get_title_iz32un_k$();
        Link(tmp1_path, tmp2_text, tmp0_modifier, null, null, null, null, null, $composer_0, 0, 248);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HeaderKt() {
    ComposableSingletons$HeaderKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(-2028658105, false, ComposableSingletons$HeaderKt$lambda_1$lambda_fev17j));
  }
  protoOf(ComposableSingletons$HeaderKt).get_lambda_1_kgubpq_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$HeaderKt_instance;
  function ComposableSingletons$HeaderKt_getInstance() {
    if (ComposableSingletons$HeaderKt_instance == null)
      new ComposableSingletons$HeaderKt();
    return ComposableSingletons$HeaderKt_instance;
  }
  function Header$lambda($breakpoint, $onMenuClicked) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1771417455, $changed, -1, 'id.haaweejee.landingpage.components.Header.<anonymous> (Header.kt:37)');
        }
        LeftSide($breakpoint, $onMenuClicked, $composer_0, 0);
        if ($breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0) {
          RightSide($composer_0, 0);
        }
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Header$lambda_0($onMenuClicked, $$changed) {
    return function ($composer, $force) {
      Header($onMenuClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function LeftSide$lambda$lambda($onMenuClicked) {
    return function (it) {
      $onMenuClicked();
      return Unit_getInstance();
    };
  }
  function LeftSide$lambda($breakpoint, $onMenuClicked) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-284706525, $changed, -1, 'id.haaweejee.landingpage.components.LeftSide.<anonymous> (Header.kt:55)');
        }
        $composer_0.startReplaceGroup_5hh8aj_k$(-1615183739);
        if ($breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) <= 0) {
          var tmp_0 = margin_0(Companion_getInstance_1(), VOID, get_px(15));
          $composer_0.startReplaceGroup_5hh8aj_k$(-1615178746);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_0.changed_ga7h3f_k$($onMenuClicked);
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_1;
          if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'id.haaweejee.landingpage.components.LeftSide.<anonymous>.<anonymous>.<anonymous>' call
            var value = LeftSide$lambda$lambda($onMenuClicked);
            $composer_0.updateRememberedValue_l1wh71_k$(value);
            tmp_1 = value;
          } else {
            tmp_1 = it;
          }
          var tmp_2 = tmp_1;
          var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          FaBars(onClick(tmp_0, tmp0_group), IconSize_XL_getInstance(), $composer_0, 48, 0);
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp0_modifier = toModifier(get_LogoStyle(), $composer_0, 6);
        var tmp1_src = 'logo.svg';
        Image_0(tmp1_src, tmp0_modifier, null, null, null, null, null, $composer_0, 6, 124);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function LeftSide$lambda_0($breakpoint, $onMenuClicked, $$changed) {
    return function ($composer, $force) {
      LeftSide($breakpoint, $onMenuClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function RightSide$lambda($$changed) {
    return function ($composer, $force) {
      RightSide($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function OverflowMenu(onMenuClosed, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1854163822);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMenuClosed) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1854163822, $dirty, -1, 'id.haaweejee.landingpage.components.OverflowMenu (OverflowMenu.kt:64)');
      }
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = OverflowMenu$lambda_3;
      }
      var composer = $composer_1;
      sourceInformationMarkerStart($composer_1, -954370320, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var wrapper = tmp1_group;
      var tmp0 = wrapper.get_coroutineScope_5k7h45_k$();
      sourceInformationMarkerEnd($composer_1);
      var scope = tmp0;
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-2146020170);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>' call
        var value_0 = mutableStateOf(get_percent(-100));
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var translateX$delegate = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(-2146018157);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>' call
        var value_1 = mutableStateOf(get_percent(0));
        this_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var opacity$delegate = tmp1_group_0;
      $composer_0.startReplaceGroup_5hh8aj_k$(-2146015562);
      var tmp8 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.changed_ga7h3f_k$(breakpoint) | $composer_0.changedInstance_s1wkiy_k$(scope)) | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = tmp8.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>' call
        var value_2 = OverflowMenu$slambda_0(breakpoint, scope, translateX$delegate, opacity$delegate, onMenuClosed, null);
        tmp8.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(breakpoint, tmp2_group, $composer_0, 0);
      var tmp_7 = height(fillMaxWidth(Companion_getInstance_1()), get_vh(100));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_3();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_8 = transition(backgroundColor(opacity(zIndex(position(tmp_7, 'fixed'), 2), OverflowMenu$lambda_1(opacity$delegate)), Companion_getInstance_9().argb_eb1cjw_k$(0.5, 0.0, 0.0, 0.0)), [Companion_getInstance_6().of$default_tua0if_k$('opacity', get_ms(500))]);
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-212341637, true, OverflowMenu$lambda_4(breakpoint, translateX$delegate, scope, onMenuClosed, opacity$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_0 || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_34(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_3);
        tmp_9 = value_3;
      } else {
        tmp_9 = it_3;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Column(tmp_8, null, null, null, tmp0_0, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(OverflowMenu$lambda_5(onMenuClosed, $changed));
    }
  }
  function OverflowMenu$lambda($translateX$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('translateX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $translateX$delegate.get_value_j01efc_k$();
  }
  function OverflowMenu$lambda_0($translateX$delegate, _set____db54di) {
    getLocalDelegateReference('translateX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $translateX$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function OverflowMenu$lambda_1($opacity$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('opacity', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $opacity$delegate.get_value_j01efc_k$();
  }
  function OverflowMenu$lambda_2($opacity$delegate, _set____db54di) {
    getLocalDelegateReference('opacity', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $opacity$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function OverflowMenu$lambda_3() {
    return EmptyCoroutineContext_getInstance();
  }
  function OverflowMenu$slambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.$onMenuClosed_1 = $onMenuClosed;
    this.$translateX$delegate_1 = $translateX$delegate;
    this.$opacity$delegate_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverflowMenu$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(OverflowMenu$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverflowMenu$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            OverflowMenu$lambda_0(this.$translateX$delegate_1, get_percent(-100));
            OverflowMenu$lambda_2(this.$opacity$delegate_1, get_percent(0));
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.$onMenuClosed_1();
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(OverflowMenu$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new OverflowMenu$slambda$slambda(this.$onMenuClosed_1, this.$translateX$delegate_1, this.$opacity$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(OverflowMenu$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function OverflowMenu$slambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new OverflowMenu$slambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OverflowMenu$slambda($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation) {
    this.$breakpoint_1 = $breakpoint;
    this.$scope_1 = $scope;
    this.$translateX$delegate_1 = $translateX$delegate;
    this.$opacity$delegate_1 = $opacity$delegate;
    this.$onMenuClosed_1 = $onMenuClosed;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverflowMenu$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(OverflowMenu$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverflowMenu$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          OverflowMenu$lambda_0(this.$translateX$delegate_1, get_percent(0));
          OverflowMenu$lambda_2(this.$opacity$delegate_1, get_percent(100));
          if (this.$breakpoint_1.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0) {
            launch(this.$scope_1, VOID, VOID, OverflowMenu$slambda$slambda_0(this.$onMenuClosed_1, this.$translateX$delegate_1, this.$opacity$delegate_1, null));
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(OverflowMenu$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new OverflowMenu$slambda(this.$breakpoint_1, this.$scope_1, this.$translateX$delegate_1, this.$opacity$delegate_1, this.$onMenuClosed_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(OverflowMenu$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function OverflowMenu$slambda_0($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation) {
    var i = new OverflowMenu$slambda($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OverflowMenu$lambda$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.$onMenuClosed_1 = $onMenuClosed;
    this.$translateX$delegate_1 = $translateX$delegate;
    this.$opacity$delegate_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverflowMenu$lambda$lambda$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(OverflowMenu$lambda$lambda$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverflowMenu$lambda$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            OverflowMenu$lambda_0(this.$translateX$delegate_1, get_percent(-100));
            OverflowMenu$lambda_2(this.$opacity$delegate_1, get_percent(0));
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.$onMenuClosed_1();
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(OverflowMenu$lambda$lambda$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new OverflowMenu$lambda$lambda$lambda$lambda$slambda(this.$onMenuClosed_1, this.$translateX$delegate_1, this.$opacity$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(OverflowMenu$lambda$lambda$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function OverflowMenu$lambda$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new OverflowMenu$lambda$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OverflowMenu$lambda$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function (it) {
      launch($scope, VOID, VOID, OverflowMenu$lambda$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, null));
      return Unit_getInstance();
    };
  }
  function OverflowMenu$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(62473537, $changed, -1, 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>.<anonymous> (OverflowMenu.kt:108)');
        }
        var tmp_0 = margin_0(cursor(Companion_getInstance_1(), Companion_getInstance_5().get_Pointer_m64vg4_k$()), VOID, get_px(20), get_px(3));
        $composer_0.startReplaceGroup_5hh8aj_k$(-1977020874);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.changedInstance_s1wkiy_k$($scope) | $composer_0.changed_ga7h3f_k$($onMenuClosed));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = OverflowMenu$lambda$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        FaXmark(onClick(tmp_0, tmp0_group), IconSize_LG_getInstance(), $composer_0, 48, 0);
        var tmp0_modifier = size(Companion_getInstance_1(), get_px(80));
        Image_0('logo.svg', tmp0_modifier, null, null, null, null, null, $composer_0, 6, 124);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function OverflowMenu$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.$onMenuClosed_1 = $onMenuClosed;
    this.$translateX$delegate_1 = $translateX$delegate;
    this.$opacity$delegate_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverflowMenu$lambda$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(OverflowMenu$lambda$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverflowMenu$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            OverflowMenu$lambda_0(this.$translateX$delegate_1, get_percent(-100));
            OverflowMenu$lambda_2(this.$opacity$delegate_1, get_percent(0));
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.$onMenuClosed_1();
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(OverflowMenu$lambda$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new OverflowMenu$lambda$lambda$lambda$slambda(this.$onMenuClosed_1, this.$translateX$delegate_1, this.$opacity$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(OverflowMenu$lambda$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function OverflowMenu$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new OverflowMenu$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OverflowMenu$lambda$lambda$lambda_0($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function (it) {
      launch($scope, VOID, VOID, OverflowMenu$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, null));
      return Unit_getInstance();
    };
  }
  function OverflowMenu$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-2050870812, $changed, -1, 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous> (OverflowMenu.kt:104)');
        }
        var tmp_0 = margin_1(Companion_getInstance_1(), VOID, VOID, get_px(25));
        var tmp_1 = CenterVertically_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(62473537, true, OverflowMenu$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_32(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_0, null, tmp_1, null, tmp0, $composer_0, 24576, 10);
        // Inline function 'kotlin.collections.toTypedArray' call
        var this_0 = get_entries_2();
        var tmp$ret$7 = copyToArray(this_0);
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = take(tmp$ret$7, 6).iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_4 = textDecorationLine(fontWeight(fontSize(fontFamily(margin_1(toModifier(get_NavigationItemStyle(), $composer_0, 6), VOID, VOID, get_px(10)), ['Roboto']), get_px(16)), Companion_getInstance_2().get_Normal_22avww_k$()), Companion_getInstance_8().get_None_wo6tgh_k$());
          $composer_0.startReplaceGroup_5hh8aj_k$(-1976990186);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = !!($composer_0.changedInstance_s1wkiy_k$($scope) | $composer_0.changed_ga7h3f_k$($onMenuClosed));
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_5;
          if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = OverflowMenu$lambda$lambda$lambda_0($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate);
            $composer_0.updateRememberedValue_l1wh71_k$(value_0);
            tmp_5 = value_0;
          } else {
            tmp_5 = it_0;
          }
          var tmp_6 = tmp_5;
          var tmp0_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          var tmp0_modifier = onClick(tmp_4, tmp0_group);
          var tmp1_path = element.get_path_wos8ry_k$();
          var tmp2_openInternalLinksStrategy = OpenLinkStrategy_IN_PLACE_getInstance();
          var tmp3_text = element.get_title_iz32un_k$();
          Link(tmp1_path, tmp3_text, tmp0_modifier, null, tmp2_openInternalLinksStrategy, null, null, null, $composer_0, 24576, 232);
        }
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function OverflowMenu$lambda_4($breakpoint, $translateX$delegate, $scope, $onMenuClosed, $opacity$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-212341637, $changed, -1, 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous> (OverflowMenu.kt:93)');
        }
        var tmp_0 = transition(translateX(backgroundColor(scrollBehavior(overflow(width(padding(fillMaxHeight(Companion_getInstance_1()), get_px(25)), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) < 0 ? get_percent(50) : get_percent(25)), Companion_getInstance_10().get_Auto_wnyn88_k$()), Companion_getInstance_11().get_Smooth_4edjo7_k$()), Colors_getInstance().get_White_ij46ow_k$()), OverflowMenu$lambda($translateX$delegate)), [Companion_getInstance_6().of$default_tua0if_k$('translate', get_ms(500))]);
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-2050870812, true, OverflowMenu$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_33(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function OverflowMenu$lambda_5($onMenuClosed, $$changed) {
    return function ($composer, $force) {
      OverflowMenu($onMenuClosed, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PortfolioCard(modifier, portfolio, link, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var link_0 = {_v: link};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1801431114);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(portfolio) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(link_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (!(($default & 4) === 0)) {
        link_0._v = '';
      }
      if (isTraceInProgress()) {
        traceEventStart(-1801431114, $dirty, -1, 'id.haaweejee.landingpage.components.PortfolioCard (PortfolioCard.kt:46)');
      }
      var tmp0_modifier = textDecorationLine(toModifier(get_PortfolioSectionStyle(), $composer_0, 6), Companion_getInstance_8().get_None_wo6tgh_k$());
      var tmp1_openExternalLinksStrategy = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      var tmp = link_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(316525864, true, PortfolioCard$lambda(modifier_0, portfolio), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_40(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Link_0(tmp, tmp0_modifier, null, null, tmp1_openExternalLinksStrategy, null, null, tmp0, $composer_0, 12607488 | 14 & $dirty >> 6, 108);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(PortfolioCard$lambda_0(modifier_0, portfolio, link_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioCardKt$lambda_1$lambda_d17v02($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1317593851, $changed, -1, 'id.haaweejee.landingpage.components.ComposableSingletons$PortfolioCardKt.lambda-1.<anonymous> (PortfolioCard.kt:79)');
      }
      var tmp0_modifier = size(id(Companion_getInstance_1(), 'linkIcon'), get_px(32));
      Image_0('link_icon.svg', tmp0_modifier, null, null, null, null, null, $composer_0, 6, 124);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$PortfolioCardKt() {
    ComposableSingletons$PortfolioCardKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(-1317593851, false, ComposableSingletons$PortfolioCardKt$lambda_1$lambda_d17v02));
  }
  protoOf(ComposableSingletons$PortfolioCardKt).get_lambda_1_kgubpq_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$PortfolioCardKt_instance;
  function ComposableSingletons$PortfolioCardKt_getInstance() {
    if (ComposableSingletons$PortfolioCardKt_instance == null)
      new ComposableSingletons$PortfolioCardKt();
    return ComposableSingletons$PortfolioCardKt_instance;
  }
  function PortfolioCard$lambda$lambda$lambda($portfolio) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-989719477, $changed, -1, 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous> (PortfolioCard.kt:65)');
        }
        var tmp0_modifier = objectFit(size(Companion_getInstance_1(), get_px(300)), Companion_getInstance_12().get_Cover_i8910u_k$());
        var tmp1_src = $portfolio.get_image_it3i2a_k$();
        Image(tmp1_src, '', tmp0_modifier, null, null, null, null, $composer_0, 48, 120);
        var tmp_0 = backgroundColor(fillMaxHeight(id(Companion_getInstance_1(), 'greenOverlay')), Companion_getInstance_9().argb_g07r6c_k$(0.5, 50, 141, 215));
        var tmp_1 = Center_getInstance();
        Box(tmp_0, tmp_1, null, ComposableSingletons$PortfolioCardKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3072, 4);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PortfolioCard$lambda$lambda$lambda_0($portfolio) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(107640883, $changed, -1, 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous> (PortfolioCard.kt:97)');
      }
      Text($portfolio.get_title_iz32un_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PortfolioCard$lambda$lambda$lambda_1($portfolio) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(970839580, $changed, -1, 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous> (PortfolioCard.kt:111)');
      }
      Text($portfolio.get_description_emjre5_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PortfolioCard$lambda$lambda($portfolio) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(845493777, $changed, -1, 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous> (PortfolioCard.kt:58)');
        }
        var tmp_0 = margin_1(maxWidth(fillMaxWidth(id(Companion_getInstance_1(), 'boxParent')), get_px(300)), VOID, VOID, get_px(20));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-989719477, true, PortfolioCard$lambda$lambda$lambda($portfolio), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_36(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Box(tmp_0, null, null, tmp0, $composer_0, 3072, 6);
        var tmp_3 = toAttrs(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(id(Companion_getInstance_1(), 'portfolioTitle')), get_px(0)), ['Roboto']), get_px(18)), Companion_getInstance_2().get_Bold_wnz5ke_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(107640883, true, PortfolioCard$lambda$lambda$lambda_0($portfolio), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_37(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        P(tmp_3, tmp0_0, $composer_0, 48, 0);
        var tmp_6 = toAttrs(opacity(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(id(Companion_getInstance_1(), 'portfolioDesc')), get_px(0)), ['Roboto']), get_px(14)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), get_percent(50)));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_1 = rememberComposableLambda(970839580, true, PortfolioCard$lambda$lambda$lambda_1($portfolio), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_38(dispatchReceiver_1);
          $composer_3.updateRememberedValue_l1wh71_k$(value_1);
          tmp_7 = value_1;
        } else {
          tmp_7 = it_1;
        }
        var tmp_8 = tmp_7;
        var tmp0_1 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        sourceInformationMarkerEnd($composer_3);
        P(tmp_6, tmp0_1, $composer_0, 48, 0);
        var tmp_9;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_9 = Unit_getInstance();
        }
        tmp = tmp_9;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PortfolioCard$lambda($modifier, $portfolio) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(316525864, $changed, -1, 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous> (PortfolioCard.kt:53)');
        }
        var tmp_0 = width_0(id($modifier._v, 'columnParent'), Companion_getInstance_13().get_MaxContent_n32482_k$());
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(845493777, true, PortfolioCard$lambda$lambda($portfolio), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_39(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function PortfolioCard$lambda_0($modifier, $portfolio, $link, $$changed, $$default) {
    return function ($composer, $force) {
      PortfolioCard($modifier._v, $portfolio, $link._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function RatingBar(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1195397459);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (isTraceInProgress()) {
        traceEventStart(-1195397459, $dirty, -1, 'id.haaweejee.landingpage.components.RatingBar (RatingBar.kt:11)');
      }
      var tmp = modifier_0._v;
      Row(tmp, null, null, null, ComposableSingletons$RatingBarKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576 | 14 & $dirty, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(RatingBar$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RatingBarKt$lambda_1$lambda_q5uqrw($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1167544560, $changed, -1, 'id.haaweejee.landingpage.components.ComposableSingletons$RatingBarKt.lambda-1.<anonymous> (RatingBar.kt:15)');
      }
      // Inline function 'kotlin.repeat' call
      var inductionVariable = 0;
      if (inductionVariable < 5)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'id.haaweejee.landingpage.components.ComposableSingletons$RatingBarKt.lambda-1.<anonymous>.<anonymous>' call
          var tmp0_modifier = size(margin_0(Companion_getInstance_1(), VOID, !(index === 4) ? get_px(2) : get_px(0)), get_px(16));
          Image_0('star_icon.svg', tmp0_modifier, null, null, null, null, null, $composer_0, 6, 124);
        }
         while (inductionVariable < 5);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RatingBarKt() {
    ComposableSingletons$RatingBarKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_41(composableLambdaInstance(1167544560, false, ComposableSingletons$RatingBarKt$lambda_1$lambda_q5uqrw));
  }
  protoOf(ComposableSingletons$RatingBarKt).get_lambda_1_kgubpq_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$RatingBarKt_instance;
  function ComposableSingletons$RatingBarKt_getInstance() {
    if (ComposableSingletons$RatingBarKt_instance == null)
      new ComposableSingletons$RatingBarKt();
    return ComposableSingletons$RatingBarKt_instance;
  }
  function RatingBar$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      RatingBar($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SectionTitle(modifier, section, alignment, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var alignment_0 = {_v: alignment};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1836771014);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(section) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.changedInstance_s1wkiy_k$(alignment_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance_1();
        }
        if (!(($default & 4) === 0)) {
          alignment_0._v = Start_getInstance();
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1836771014, $dirty, -1, 'id.haaweejee.landingpage.components.SectionTitle (SectionTitle.kt:33)');
      }
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = SectionTitle$lambda_3;
      }
      var composer = $composer_1;
      sourceInformationMarkerStart($composer_1, -954370320, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var wrapper = tmp1_group;
      var tmp0 = wrapper.get_coroutineScope_5k7h45_k$();
      sourceInformationMarkerEnd($composer_1);
      var scope = tmp0;
      $composer_0.startReplaceGroup_5hh8aj_k$(1915192011);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>' call
        var value_0 = mutableStateOf(get_px(50));
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var titleMargin$delegate = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1915194347);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>' call
        var value_1 = mutableStateOf(get_px(50));
        this_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var subTitleMargin$delegate = tmp1_group_0;
      var tmp_5 = section.get_id_kntnx8_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(1915199967);
      var tmp8 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.changedInstance_s1wkiy_k$(scope) | $composer_0.changedInstance_s1wkiy_k$(alignment_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = tmp8.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>' call
        var value_2 = SectionTitle$lambda_4(scope, alignment_0, subTitleMargin$delegate, titleMargin$delegate);
        tmp8.updateRememberedValue_l1wh71_k$(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      ObserveViewPortEntered(tmp_5, 1200.0, tmp2_group, $composer_0, 48);
      var tmp_8 = modifier_0._v;
      var tmp_9 = alignment_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-2139846429, true, SectionTitle$lambda_5(alignment_0, titleMargin$delegate, section, subTitleMargin$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_10;
      if (invalid_0 || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_44(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_3);
        tmp_10 = value_3;
      } else {
        tmp_10 = it_3;
      }
      var tmp_11 = tmp_10;
      var tmp0_0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Column(tmp_8, null, tmp_9, null, tmp0_0, $composer_0, 24576 | 14 & $dirty | 896 & $dirty, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(SectionTitle$lambda_6(modifier_0, section, alignment_0, $changed, $default));
    }
  }
  function SectionTitle$lambda($titleMargin$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('titleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $titleMargin$delegate.get_value_j01efc_k$();
  }
  function SectionTitle$lambda_0($titleMargin$delegate, _set____db54di) {
    getLocalDelegateReference('titleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $titleMargin$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function SectionTitle$lambda_1($subTitleMargin$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('subTitleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $subTitleMargin$delegate.get_value_j01efc_k$();
  }
  function SectionTitle$lambda_2($subTitleMargin$delegate, _set____db54di) {
    getLocalDelegateReference('subTitleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $subTitleMargin$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function SectionTitle$lambda_3() {
    return EmptyCoroutineContext_getInstance();
  }
  function SectionTitle$lambda$slambda($alignment, $subTitleMargin$delegate, $titleMargin$delegate, resultContinuation) {
    this.$alignment_1 = $alignment;
    this.$subTitleMargin$delegate_1 = $subTitleMargin$delegate;
    this.$titleMargin$delegate_1 = $titleMargin$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SectionTitle$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SectionTitle$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SectionTitle$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            SectionTitle$lambda_2(this.$subTitleMargin$delegate_1, get_px(0));
            if (equals(this.$alignment_1._v, Start_getInstance())) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = delay(new Long(100, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            SectionTitle$lambda_0(this.$titleMargin$delegate_1, get_px(0));
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(SectionTitle$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new SectionTitle$lambda$slambda(this.$alignment_1, this.$subTitleMargin$delegate_1, this.$titleMargin$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(SectionTitle$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SectionTitle$lambda$slambda_0($alignment, $subTitleMargin$delegate, $titleMargin$delegate, resultContinuation) {
    var i = new SectionTitle$lambda$slambda($alignment, $subTitleMargin$delegate, $titleMargin$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SectionTitle$lambda_4($scope, $alignment, $subTitleMargin$delegate, $titleMargin$delegate) {
    return function () {
      launch($scope, VOID, VOID, SectionTitle$lambda$slambda_0($alignment, $subTitleMargin$delegate, $titleMargin$delegate, null));
      return Unit_getInstance();
    };
  }
  function SectionTitle$lambda$lambda($section) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-2046978939, $changed, -1, 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>.<anonymous> (SectionTitle.kt:82)');
      }
      Text($section.get_title_iz32un_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SectionTitle$lambda$lambda_0($section) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1253525202, $changed, -1, 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>.<anonymous> (SectionTitle.kt:107)');
      }
      Text($section.get_subtitle_55eoyp_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SectionTitle$lambda_5($alignment, $titleMargin$delegate, $section, $subTitleMargin$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-2139846429, $changed, -1, 'id.haaweejee.landingpage.components.SectionTitle.<anonymous> (SectionTitle.kt:60)');
        }
        var tmp_0 = fillMaxWidth(Companion_getInstance_1());
        var tmp_1;
        if (equals($alignment._v, CenterHorizontally_getInstance())) {
          tmp_1 = Companion_getInstance_14().get_Center_3arb0i_k$();
        } else {
          tmp_1 = Companion_getInstance_14().get_Start_ih4i6x_k$();
        }
        var tmp0_$receiver = textAlign(tmp_0, tmp_1);
        var tmp1_left = SectionTitle$lambda($titleMargin$delegate);
        var tmp2_top = get_px(0);
        var tmp3_bottom = get_px(0);
        var tmp_2 = toAttrs(transition(color(fontWeight(fontSize(fontFamily(margin_0(tmp0_$receiver, tmp2_top, VOID, tmp3_bottom, tmp1_left), ['Roboto']), get_px(25)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), [Companion_getInstance_6().of$default_tua0if_k$('margin', get_ms(300))]));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-2046978939, true, SectionTitle$lambda$lambda($section), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_42(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        P(tmp_2, tmp0, $composer_0, 48, 0);
        var tmp_5 = fillMaxWidth(Companion_getInstance_1());
        var tmp_6;
        if (equals($alignment._v, CenterHorizontally_getInstance())) {
          tmp_6 = Companion_getInstance_14().get_Center_3arb0i_k$();
        } else {
          tmp_6 = Companion_getInstance_14().get_Start_ih4i6x_k$();
        }
        var tmp4_$receiver = textAlign(tmp_5, tmp_6);
        var tmp5_left = equals($alignment._v, Start_getInstance()) ? SectionTitle$lambda_1($subTitleMargin$delegate) : get_px(0);
        var tmp6_right = equals($alignment._v, CenterHorizontally_getInstance()) ? SectionTitle$lambda_1($subTitleMargin$delegate) : get_px(0);
        var tmp7_bottom = get_px(10);
        var tmp8_top = get_px(0);
        var tmp_7 = toAttrs(transition(color(fontWeight(fontSize(fontFamily(margin_0(tmp4_$receiver, tmp8_top, tmp6_right, tmp7_bottom, tmp5_left), ['Roboto']), get_px(40)), Companion_getInstance_2().get_Bold_wnz5ke_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), [Companion_getInstance_6().of$default_tua0if_k$('margin', get_ms(300))]));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(-1253525202, true, SectionTitle$lambda$lambda_0($section), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_43(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = it_0;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        P(tmp_7, tmp0_0, $composer_0, 48, 0);
        var tmp_10 = borderRadius(backgroundColor(width(height(Companion_getInstance_1(), get_px(2)), get_px(80)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), get_px(50));
        Box(tmp_10, null, null, null, $composer_0, 0, 14);
        var tmp_11;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_11 = Unit_getInstance();
        }
        tmp = tmp_11;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SectionTitle$lambda_6($modifier, $section, $alignment, $$changed, $$default) {
    return function ($composer, $force) {
      SectionTitle($modifier._v, $section, $alignment._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function ServiceCard(service, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(120276017);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(service) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(120276017, $dirty, -1, 'id.haaweejee.landingpage.components.ServiceCard (ServiceCard.kt:32)');
      }
      var tmp = padding(margin_2(maxWidth(toModifier(get_ServiceCardStyle(), $composer_0, 6), get_px(300)), get_px(20)), get_px(20));
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(749328538, true, ServiceCard$lambda(service), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_48(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp, null, null, null, tmp0, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ServiceCard$lambda_0(service, $changed));
    }
  }
  function ServiceCard$lambda$lambda($service) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1610622508, $changed, -1, 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous> (ServiceCard.kt:52)');
        }
        var tmp0_modifier = size(Companion_getInstance_1(), get_px(40));
        var tmp1_src = $service.get_icon_wont8i_k$();
        Image_0(tmp1_src, tmp0_modifier, null, null, null, null, null, $composer_0, 0, 124);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ServiceCard$lambda$lambda_0($service) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(716655036, $changed, -1, 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous> (ServiceCard.kt:66)');
      }
      Text($service.get_title_iz32un_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ServiceCard$lambda$lambda_1($service) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(2034717477, $changed, -1, 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous> (ServiceCard.kt:77)');
      }
      Text($service.get_description_emjre5_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ServiceCard$lambda($service) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(749328538, $changed, -1, 'id.haaweejee.landingpage.components.ServiceCard.<anonymous> (ServiceCard.kt:39)');
        }
        var tmp_0 = margin_2(padding(id(Companion_getInstance_1(), 'iconBox'), get_px(10)), get_px(20));
        var tmp_1 = get_px(2);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
        Companion_getInstance_7();
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_$receiver = border(tmp_0, tmp_1, 'solid', Theme_Primary_getInstance().get_rgb_18ix0c_k$());
        var tmp1_topRight = get_px(20);
        var tmp2_topLeft = get_px(20);
        var tmp3_bottomLeft = get_px(20);
        var tmp4_bottomRight = get_px(0);
        var tmp_2 = borderRadius_0(tmp0_$receiver, tmp2_topLeft, tmp1_topRight, tmp4_bottomRight, tmp3_bottomLeft);
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1610622508, true, ServiceCard$lambda$lambda($service), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_45(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Box(tmp_2, null, null, tmp0, $composer_0, 3072, 6);
        var tmp_5 = toAttrs(fontWeight(fontSize(fontFamily(margin_1(fillMaxWidth(Companion_getInstance_1()), get_px(0), VOID, get_px(10)), ['Roboto']), get_px(18)), Companion_getInstance_2().get_Bold_wnz5ke_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(716655036, true, ServiceCard$lambda$lambda_0($service), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_46(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        P(tmp_5, tmp0_0, $composer_0, 48, 0);
        var tmp_8 = toAttrs(fontWeight(fontSize(fontFamily(margin_1(fillMaxWidth(Companion_getInstance_1()), get_px(0), VOID, get_px(0)), ['Roboto']), get_px(14)), Companion_getInstance_2().get_Normal_22avww_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_1 = rememberComposableLambda(2034717477, true, ServiceCard$lambda$lambda_1($service), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_9;
        if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_47(dispatchReceiver_1);
          $composer_3.updateRememberedValue_l1wh71_k$(value_1);
          tmp_9 = value_1;
        } else {
          tmp_9 = it_1;
        }
        var tmp_10 = tmp_9;
        var tmp0_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
        sourceInformationMarkerEnd($composer_3);
        P(tmp_8, tmp0_1, $composer_0, 48, 0);
        var tmp_11;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_11 = Unit_getInstance();
        }
        tmp = tmp_11;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ServiceCard$lambda_0($service, $$changed) {
    return function ($composer, $force) {
      ServiceCard($service, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SkillBar(name, index, progressBarHeight, percentage, animatePercentage, $composer, $changed, $default) {
    var progressBarHeight_0 = {_v: progressBarHeight};
    var percentage_0 = {_v: percentage};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1057152769);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(index) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.changedInstance_s1wkiy_k$(progressBarHeight_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.changedInstance_s1wkiy_k$(percentage_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(animatePercentage) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 4) === 0)) {
          progressBarHeight_0._v = get_px(5);
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          percentage_0._v = get_percent(50);
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(1057152769, $dirty, -1, 'id.haaweejee.landingpage.components.SkillBar (SkillBar.kt:35)');
      }
      var tmp = padding_1(maxWidth(margin_1(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(10)), get_px(500)), get_px(5));
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.SkillBar.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(952357112, true, SkillBar$lambda(name, animatePercentage, progressBarHeight_0, percentage_0, index), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.SkillBar.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_53(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp, null, null, null, tmp0, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SkillBar$lambda_0(name, index, progressBarHeight_0, percentage_0, animatePercentage, $changed, $default));
    }
  }
  function ProgrammingCard(name, image, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(761647793);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(image) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(761647793, $dirty, -1, 'id.haaweejee.landingpage.components.ProgrammingCard (SkillBar.kt:98)');
      }
      var tmp = padding(margin_2(fillMaxSize(toModifier(get_ProgrammingCardStyle(), $composer_0, 6)), get_px(10)), get_px(10));
      var tmp_0 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-375917769, true, ProgrammingCard$lambda(image, name), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_56(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp, tmp_0, null, tmp0, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ProgrammingCard$lambda_0(name, image, $changed));
    }
  }
  function SkillBar$lambda$lambda$lambda($name) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1533299303, $changed, -1, 'id.haaweejee.landingpage.components.SkillBar.<anonymous>.<anonymous>.<anonymous> (SkillBar.kt:56)');
      }
      Text($name, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SkillBar$lambda$lambda$lambda_0($animatePercentage) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(153352784, $changed, -1, 'id.haaweejee.landingpage.components.SkillBar.<anonymous>.<anonymous>.<anonymous> (SkillBar.kt:67)');
      }
      Text('' + $animatePercentage + '%', $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SkillBar$lambda$lambda($name, $animatePercentage) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-619646853, $changed, -1, 'id.haaweejee.landingpage.components.SkillBar.<anonymous>.<anonymous> (SkillBar.kt:47)');
        }
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_getInstance_1(), get_px(0)), ['Roboto']), get_px(18)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.SkillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1533299303, true, SkillBar$lambda$lambda$lambda($name), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.SkillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_49(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_3 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_getInstance_1(), get_px(0)), ['Roboto']), get_px(18)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.SkillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(153352784, true, SkillBar$lambda$lambda$lambda_0($animatePercentage), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.SkillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_50(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        P(tmp_3, tmp0_0, $composer_0, 48, 0);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SkillBar$lambda$lambda_0($progressBarHeight, $percentage, $index) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1072637058, $changed, -1, 'id.haaweejee.landingpage.components.SkillBar.<anonymous>.<anonymous> (SkillBar.kt:71)');
        }
        var tmp_0 = backgroundColor(height(fillMaxWidth(Companion_getInstance_1()), $progressBarHeight._v), Theme_LighterGray_getInstance().get_rgb_18ix0c_k$());
        Box(tmp_0, null, null, null, $composer_0, 0, 14);
        var tmp_1 = transition(backgroundColor(height(fillMaxWidth(Companion_getInstance_1(), $percentage._v), $progressBarHeight._v), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), [Companion_getInstance_6().of$default_tua0if_k$('width', get_ms(1000), VOID, times_0(get_ms(100), $index))]);
        Box(tmp_1, null, null, null, $composer_0, 0, 14);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SkillBar$lambda($name, $animatePercentage, $progressBarHeight, $percentage, $index) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(952357112, $changed, -1, 'id.haaweejee.landingpage.components.SkillBar.<anonymous> (SkillBar.kt:43)');
        }
        var tmp_0 = margin_1(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(5));
        var tmp_1 = SpaceBetween_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.SkillBar.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-619646853, true, SkillBar$lambda$lambda($name, $animatePercentage), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.SkillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_51(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_0, tmp_1, null, null, tmp0, $composer_0, 24576, 12);
        var tmp_4 = fillMaxWidth(Companion_getInstance_1());
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.SkillBar.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(-1072637058, true, SkillBar$lambda$lambda_0($progressBarHeight, $percentage, $index), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.SkillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_52(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Box(tmp_4, null, null, tmp0_0, $composer_0, 3072, 6);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SkillBar$lambda_0($name, $index, $progressBarHeight, $percentage, $animatePercentage, $$changed, $$default) {
    return function ($composer, $force) {
      SkillBar($name, $index, $progressBarHeight._v, $percentage._v, $animatePercentage, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function ProgrammingCard$lambda$lambda$lambda($name) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1678586228, $changed, -1, 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous>.<anonymous>.<anonymous> (SkillBar.kt:125)');
      }
      Text($name, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ProgrammingCard$lambda$lambda($image, $name) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-782971282, $changed, -1, 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous>.<anonymous> (SkillBar.kt:110)');
        }
        var tmp0_modifier = size(Companion_getInstance_1(), get_px(32));
        Image($image, '', tmp0_modifier, null, null, null, null, $composer_0, 48, 120);
        var tmp_0 = toAttrs(fontWeight(fontSize(fontFamily(maxWidth(margin(Companion_getInstance_1(), get_px(10)), get_px(100)), ['Roboto']), get_px(18)), Companion_getInstance_2().get_SemiBold_aid1c4_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1678586228, true, ProgrammingCard$lambda$lambda$lambda($name), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_54(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ProgrammingCard$lambda($image, $name) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-375917769, $changed, -1, 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous> (SkillBar.kt:106)');
        }
        var tmp0_horizontalAlignment = CenterHorizontally_getInstance();
        var tmp1_modifier = fillMaxWidth(maxHeight(Companion_getInstance_1(), get_px(250)));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-782971282, true, ProgrammingCard$lambda$lambda($image, $name), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_55(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp1_modifier, null, tmp0_horizontalAlignment, null, tmp0, $composer_0, 24576, 10);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ProgrammingCard$lambda_0($name, $image, $$changed) {
    return function ($composer, $force) {
      ProgrammingCard($name, $image, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SocialBar(row, $composer, $changed, $default) {
    var row_0 = {_v: row};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1200281380);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(row_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        row_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1200281380, $dirty, -1, 'id.haaweejee.landingpage.components.SocialBar (SocialBar.kt:20)');
      }
      if (row_0._v) {
        $composer_0.startReplaceGroup_5hh8aj_k$(876302190);
        var tmp0_modifier = backgroundColor(borderRadius(minHeight(padding_1(margin_1(Companion_getInstance_1(), get_px(25)), VOID, get_px(25)), get_px(40)), get_px(20)), Theme_LighterGray_getInstance().get_rgb_18ix0c_k$());
        var tmp1_verticalAlignment = CenterVertically_getInstance();
        var tmp2_horizontalArrangement = Center_getInstance_0();
        Row(tmp0_modifier, tmp2_horizontalArrangement, tmp1_verticalAlignment, null, ComposableSingletons$SocialBarKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576, 8);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(876744250);
        var tmp = backgroundColor(borderRadius(minWidth(padding_1(margin_0(Companion_getInstance_1(), VOID, get_px(25)), get_px(25)), get_px(40)), get_px(20)), Theme_White_getInstance().get_rgb_18ix0c_k$());
        var tmp_0 = Center_getInstance_0();
        var tmp_1 = CenterHorizontally_getInstance();
        Column(tmp, tmp_0, tmp_1, null, ComposableSingletons$SocialBarKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24576, 8);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SocialBar$lambda(row_0, $changed, $default));
    }
  }
  function SocialLinks(row, $composer, $changed, $default) {
    var row_0 = {_v: row};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-278877258);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(row_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        row_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(-278877258, $dirty, -1, 'id.haaweejee.landingpage.components.SocialLinks (SocialBar.kt:51)');
      }
      var tmp = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.SocialLinks.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(388814632, true, SocialLinks$lambda(row_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.SocialLinks.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_60(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Link_0('https://github.com/haaweejee', null, null, null, tmp, null, null, tmp0, $composer_0, 12607494, 110);
      var tmp_2 = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.SocialLinks.<anonymous>' call
      var dispatchReceiver_0 = rememberComposableLambda(1986053457, true, SocialLinks$lambda_0(row_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.SocialLinks.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_61(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Link_0('https://www.upwork.com/freelancers/~011c5a681c55900f1e?viewMode=1', null, null, null, tmp_2, null, null, tmp0_0, $composer_0, 12607494, 110);
      var tmp_5 = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.SocialLinks.<anonymous>' call
      var dispatchReceiver_1 = rememberComposableLambda(-658777040, true, SocialLinks$lambda_1(row_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_3.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.SocialLinks.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_62(dispatchReceiver_1);
        $composer_3.updateRememberedValue_l1wh71_k$(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp0_1 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Link_0('https://medium.com/@hendrawanwib', null, null, null, tmp_5, null, null, tmp0_1, $composer_0, 12607494, 110);
      var tmp_8 = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      Link_0('https://www.linkedin.com/in/haaweejee/', null, null, null, tmp_8, null, null, ComposableSingletons$SocialBarKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 12607494, 110);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SocialLinks$lambda_2(row_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SocialBarKt$lambda_1$lambda_fzk4p0($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-332980674, $changed, -1, 'id.haaweejee.landingpage.components.ComposableSingletons$SocialBarKt.lambda-1.<anonymous> (SocialBar.kt:32)');
      }
      SocialLinks(true, $composer_0, 6, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SocialBarKt$lambda_2$lambda_cu2cd7($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1451538337, $changed, -1, 'id.haaweejee.landingpage.components.ComposableSingletons$SocialBarKt.lambda-2.<anonymous> (SocialBar.kt:45)');
      }
      SocialLinks(false, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_59($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$SocialBarKt$lambda_3$lambda_tdf8jq($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(991359759, $changed, -1, 'id.haaweejee.landingpage.components.ComposableSingletons$SocialBarKt.lambda-3.<anonymous> (SocialBar.kt:95)');
      }
      FaLinkedin(toModifier(get_SocialLinkStyle(), $composer_0, 6), IconSize_LG_getInstance(), $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$SocialBarKt() {
    ComposableSingletons$SocialBarKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(-332980674, false, ComposableSingletons$SocialBarKt$lambda_1$lambda_fzk4p0));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(1451538337, false, ComposableSingletons$SocialBarKt$lambda_2$lambda_cu2cd7));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_59(composableLambdaInstance(991359759, false, ComposableSingletons$SocialBarKt$lambda_3$lambda_tdf8jq));
  }
  protoOf(ComposableSingletons$SocialBarKt).get_lambda_1_kgubpq_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$SocialBarKt).get_lambda_2_ib40yb_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$SocialBarKt).get_lambda_3_dy1ocs_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$SocialBarKt_instance;
  function ComposableSingletons$SocialBarKt_getInstance() {
    if (ComposableSingletons$SocialBarKt_instance == null)
      new ComposableSingletons$SocialBarKt();
    return ComposableSingletons$SocialBarKt_instance;
  }
  function SocialBar$lambda($row, $$changed, $$default) {
    return function ($composer, $force) {
      SocialBar($row._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SocialLinks$lambda($row) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(388814632, $changed, -1, 'id.haaweejee.landingpage.components.SocialLinks.<anonymous> (SocialBar.kt:56)');
        }
        var tmp0_$receiver = toModifier(get_GithubLinkStyle(), $composer_0, 6);
        var tmp1_bottom = $row._v ? get_px(0) : get_px(40);
        var tmp2_right = $row._v ? get_px(40) : get_px(0);
        FaGithub(margin_0(tmp0_$receiver, VOID, tmp2_right, tmp1_bottom), IconSize_LG_getInstance(), $composer_0, 48, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_60($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function SocialLinks$lambda_0($row) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1986053457, $changed, -1, 'id.haaweejee.landingpage.components.SocialLinks.<anonymous> (SocialBar.kt:69)');
        }
        var tmp0_$receiver = toModifier(get_UpworkLinkStyle(), $composer_0, 6);
        var tmp1_bottom = $row._v ? get_px(0) : get_px(40);
        var tmp2_right = $row._v ? get_px(40) : get_px(0);
        FaUpwork(margin_0(tmp0_$receiver, VOID, tmp2_right, tmp1_bottom), IconSize_LG_getInstance(), $composer_0, 48, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_61($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function SocialLinks$lambda_1($row) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-658777040, $changed, -1, 'id.haaweejee.landingpage.components.SocialLinks.<anonymous> (SocialBar.kt:82)');
        }
        var tmp0_$receiver = toModifier(get_GithubLinkStyle(), $composer_0, 6);
        var tmp1_bottom = $row._v ? get_px(0) : get_px(40);
        var tmp2_right = $row._v ? get_px(40) : get_px(0);
        FaMedium(margin_0(tmp0_$receiver, VOID, tmp2_right, tmp1_bottom), IconSize_LG_getInstance(), $composer_0, 48, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_62($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function SocialLinks$lambda_2($row, $$changed, $$default) {
    return function ($composer, $force) {
      SocialLinks($row._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function TestimonialCard(modifier, testimonial, breakpoint, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1217361281);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(testimonial) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (isTraceInProgress()) {
        traceEventStart(-1217361281, $dirty, -1, 'id.haaweejee.landingpage.components.TestimonialCard (TestimonialCard.kt:31)');
      }
      var tmp = maxWidth(modifier_0._v, get_px(500));
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1903257948, true, TestimonialCard$lambda(breakpoint, testimonial), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_69(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Row(tmp, null, null, null, tmp0, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(TestimonialCard$lambda_0(modifier_0, testimonial, breakpoint, $changed, $default));
    }
  }
  function TestimonialCard$lambda$lambda$lambda$lambda$lambda($testimonial) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-924959443, $changed, -1, 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (TestimonialCard.kt:61)');
      }
      Text($testimonial.get_fullName_9skygt_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_63($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function TestimonialCard$lambda$lambda$lambda$lambda$lambda_0($testimonial) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(812179606, $changed, -1, 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (TestimonialCard.kt:75)');
      }
      Text($testimonial.get_profession_uuavt1_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_64($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function TestimonialCard$lambda$lambda$lambda$lambda($testimonial) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(260339723, $changed, -1, 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous> (TestimonialCard.kt:51)');
        }
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_getInstance_1()), get_px(0)), ['Roboto']), get_px(18)), Companion_getInstance_2().get_Bold_wnz5ke_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-924959443, true, TestimonialCard$lambda$lambda$lambda$lambda$lambda($testimonial), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_63(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_3 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_getInstance_1()), get_px(0)), ['Roboto']), get_px(12)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(812179606, true, TestimonialCard$lambda$lambda$lambda$lambda$lambda_0($testimonial), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_64(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        P(tmp_3, tmp0_0, $composer_0, 48, 0);
        RatingBar(margin_1(Companion_getInstance_1(), get_px(5)), $composer_0, 0, 0);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_65($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function TestimonialCard$lambda$lambda$lambda($testimonial) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(35473826, $changed, -1, 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous> (TestimonialCard.kt:50)');
        }
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(260339723, true, TestimonialCard$lambda$lambda$lambda$lambda($testimonial), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_65(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(null, null, null, null, tmp0, $composer_0, 24576, 15);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_66($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function TestimonialCard$lambda$lambda$lambda_0($testimonial) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1080326233, $changed, -1, 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous> (TestimonialCard.kt:92)');
      }
      Text($testimonial.get_review_iyht9d_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_67($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function TestimonialCard$lambda$lambda($testimonial) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-989738491, $changed, -1, 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous> (TestimonialCard.kt:47)');
        }
        var tmp_0 = margin_1(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(10));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(35473826, true, TestimonialCard$lambda$lambda$lambda($testimonial), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_66(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        var tmp_3 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_getInstance_1()), get_px(0)), ['Roboto']), get_px(12)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(-1080326233, true, TestimonialCard$lambda$lambda$lambda_0($testimonial), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_67(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        P(tmp_3, tmp0_0, $composer_0, 48, 0);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_68($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function TestimonialCard$lambda($breakpoint, $testimonial) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1903257948, $changed, -1, 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous> (TestimonialCard.kt:33)');
        }
        var tmp0_$receiver = maxWidth(margin_0(Companion_getInstance_1(), VOID, get_px(20)), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_px(160) : get_px(80));
        var tmp1_topLeft = get_px(60);
        var tmp2_topRight = get_px(60);
        var tmp3_bottomLeft = get_px(60);
        var tmp4_bottomRight = get_px(0);
        var tmp5_modifier = borderRadius_0(tmp0_$receiver, tmp1_topLeft, tmp2_topRight, tmp4_bottomRight, tmp3_bottomLeft);
        var tmp6_src = $testimonial.get_image_it3i2a_k$();
        Image(tmp6_src, '', tmp5_modifier, null, null, null, null, $composer_0, 48, 120);
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-989738491, true, TestimonialCard$lambda$lambda($testimonial), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.components.TestimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_68(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(null, null, null, null, tmp0, $composer_0, 24576, 15);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_69($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function TestimonialCard$lambda_0($modifier, $testimonial, $breakpoint, $$changed, $$default) {
    return function ($composer, $force) {
      TestimonialCard($modifier._v, $testimonial, $breakpoint, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var Achievement_Completed_instance;
  var Achievement_Active_instance;
  var Achievement_Satisfied_instance;
  var Achievement_Team_instance;
  function values() {
    return [Achievement_Completed_getInstance(), Achievement_Active_getInstance(), Achievement_Satisfied_getInstance(), Achievement_Team_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Completed':
        return Achievement_Completed_getInstance();
      case 'Active':
        return Achievement_Active_getInstance();
      case 'Satisfied':
        return Achievement_Satisfied_getInstance();
      case 'Team':
        return Achievement_Team_getInstance();
      default:
        Achievement_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Achievement_entriesInitialized;
  function Achievement_initEntries() {
    if (Achievement_entriesInitialized)
      return Unit_getInstance();
    Achievement_entriesInitialized = true;
    Achievement_Completed_instance = new Achievement('Completed', 0, 'checkmark_icon.svg', 120, 'Completed Projects');
    Achievement_Active_instance = new Achievement('Active', 1, 'shield_icon.svg', 12, 'Active Projects');
    Achievement_Satisfied_instance = new Achievement('Satisfied', 2, 'happy_icon.svg', 42, 'Satisfied Clients');
    Achievement_Team_instance = new Achievement('Team', 3, 'user_icon.svg', 10, 'Team Members');
  }
  var $ENTRIES;
  function Achievement(name, ordinal, icon, number, description) {
    Enum.call(this, name, ordinal);
    this.icon_1 = icon;
    this.number_1 = number;
    this.description_1 = description;
  }
  protoOf(Achievement).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  protoOf(Achievement).get_number_hay53m_k$ = function () {
    return this.number_1;
  };
  protoOf(Achievement).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  function Achievement_Completed_getInstance() {
    Achievement_initEntries();
    return Achievement_Completed_instance;
  }
  function Achievement_Active_getInstance() {
    Achievement_initEntries();
    return Achievement_Active_instance;
  }
  function Achievement_Satisfied_getInstance() {
    Achievement_initEntries();
    return Achievement_Satisfied_instance;
  }
  function Achievement_Team_getInstance() {
    Achievement_initEntries();
    return Achievement_Team_instance;
  }
  var Experience_First_instance;
  var Experience_Second_instance;
  var Experience_Third_instance;
  function values_0() {
    return [Experience_First_getInstance(), Experience_Second_getInstance(), Experience_Third_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'First':
        return Experience_First_getInstance();
      case 'Second':
        return Experience_Second_getInstance();
      case 'Third':
        return Experience_Third_getInstance();
      default:
        Experience_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Experience_entriesInitialized;
  function Experience_initEntries() {
    if (Experience_entriesInitialized)
      return Unit_getInstance();
    Experience_entriesInitialized = true;
    var tmp0_description = '1. Contribute with the team to develop the Dunia Games Android application based on a request from Telkomsel as the Product Owner.\n2. Carrying out the Application Deployment Process that has gone through several stages of Testing to Playstore.\n3. Refactoring Code Base like App Architecture from MVP (Model-View-Presenter) to MVVM (Model-View-ViewModel), View Base from XML to Jetpack Compose, and Java Code to Kotlin Code Base.\n';
    Experience_First_instance = new Experience('First', 0, '01', 'Android Developer', tmp0_description, 'PT. Ako Media Asia (SALT Indonesia)', 'salt-logo.svg', 'April 2024', 'Present');
    var tmp1_description = '1. Implementation of Unit Testing in the android application to ensure the functions that have been made run well.\n2. Conduct research to create new features or technologies that will be implemented in the Kompas.id application.\n3. Plan, Implement, and Create Documentation for Clean Architecture on the Kompas.id Android Application to make the Application easy to maintain.\n';
    Experience_Second_instance = new Experience('Second', 1, '02', 'Android Developer', tmp1_description, 'PT. Kompas Media Nusantara (Harian Kompas)', 'kompas-logo.png', 'Maret 2022', 'April 2024');
    var tmp2_description = '1. Contribute with the team to develop the Dunia Games Android application based on a request from Telkomsel as the Product Owner.\\n" +\n                "2. Carrying out the Application Deployment Process that has gone through several stages of Testing to Playstore.\\n" +\n                "3. Refactoring Code Base like App Architecture from MVP (Model-View-Presenter) to MVVM (Model-View-ViewModel), View Base from XML to Jetpack Compose, and Java Code to Kotlin Code Base.\\n"';
    Experience_Third_instance = new Experience('Third', 2, '03', 'Android Developer Fasilitator', tmp2_description, 'Bangkit', 'bangkit-logo.png', 'Februari 2022', 'Juli 2022');
  }
  var $ENTRIES_0;
  function Experience(name, ordinal, number, jobPosition, description, company, image, from, to) {
    Enum.call(this, name, ordinal);
    this.number_1 = number;
    this.jobPosition_1 = jobPosition;
    this.description_1 = description;
    this.company_1 = company;
    this.image_1 = image;
    this.from_1 = from;
    this.to_1 = to;
  }
  protoOf(Experience).get_number_hay53m_k$ = function () {
    return this.number_1;
  };
  protoOf(Experience).get_jobPosition_k6sg9v_k$ = function () {
    return this.jobPosition_1;
  };
  protoOf(Experience).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(Experience).get_company_gzg49g_k$ = function () {
    return this.company_1;
  };
  protoOf(Experience).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(Experience).get_from_wom7eb_k$ = function () {
    return this.from_1;
  };
  protoOf(Experience).get_to_kntnng_k$ = function () {
    return this.to_1;
  };
  function Experience_First_getInstance() {
    Experience_initEntries();
    return Experience_First_instance;
  }
  function Experience_Second_getInstance() {
    Experience_initEntries();
    return Experience_Second_instance;
  }
  function Experience_Third_getInstance() {
    Experience_initEntries();
    return Experience_Third_instance;
  }
  var Portfolio_One_instance;
  var Portfolio_Two_instance;
  function values_1() {
    return [Portfolio_One_getInstance(), Portfolio_Two_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'One':
        return Portfolio_One_getInstance();
      case 'Two':
        return Portfolio_Two_getInstance();
      default:
        Portfolio_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Portfolio_entriesInitialized;
  function Portfolio_initEntries() {
    if (Portfolio_entriesInitialized)
      return Unit_getInstance();
    Portfolio_entriesInitialized = true;
    Portfolio_One_instance = new Portfolio('One', 0, 'portfolio1.jpg', 'Uber: Urunan Bersama', 'Android App');
    Portfolio_Two_instance = new Portfolio('Two', 1, 'portfolio2.jpg', 'Image Converter JPG/WEB/PNG', 'Android App');
  }
  var $ENTRIES_1;
  function Portfolio(name, ordinal, image, title, description) {
    Enum.call(this, name, ordinal);
    this.image_1 = image;
    this.title_1 = title;
    this.description_1 = description;
  }
  protoOf(Portfolio).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(Portfolio).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(Portfolio).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  function Portfolio_One_getInstance() {
    Portfolio_initEntries();
    return Portfolio_One_instance;
  }
  function Portfolio_Two_getInstance() {
    Portfolio_initEntries();
    return Portfolio_Two_instance;
  }
  var Section_Home_instance;
  var Section_About_instance;
  var Section_Experience_instance;
  var Section_Service_instance;
  var Section_Portfolio_instance;
  var Section_Contact_instance;
  var Section_Testimonial_instance;
  var Section_Achievements_instance;
  function values_2() {
    return [Section_Home_getInstance(), Section_About_getInstance(), Section_Experience_getInstance(), Section_Service_getInstance(), Section_Portfolio_getInstance(), Section_Contact_getInstance(), Section_Testimonial_getInstance(), Section_Achievements_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'Home':
        return Section_Home_getInstance();
      case 'About':
        return Section_About_getInstance();
      case 'Experience':
        return Section_Experience_getInstance();
      case 'Service':
        return Section_Service_getInstance();
      case 'Portfolio':
        return Section_Portfolio_getInstance();
      case 'Contact':
        return Section_Contact_getInstance();
      case 'Testimonial':
        return Section_Testimonial_getInstance();
      case 'Achievements':
        return Section_Achievements_getInstance();
      default:
        Section_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var Section_entriesInitialized;
  function Section_initEntries() {
    if (Section_entriesInitialized)
      return Unit_getInstance();
    Section_entriesInitialized = true;
    Section_Home_instance = new Section('Home', 0, 'home', 'Home', '', '#home');
    Section_About_instance = new Section('About', 1, 'about', 'About Me', 'Why Hire Me?', '#about');
    Section_Experience_instance = new Section('Experience', 2, 'experience', 'Experience', 'Work Experience', '#experience');
    Section_Service_instance = new Section('Service', 3, 'service', 'Service', "I'm Good at", '#service');
    Section_Portfolio_instance = new Section('Portfolio', 4, 'portfolio', 'Portfolio', 'My Work', '#portfolio');
    Section_Contact_instance = new Section('Contact', 5, 'contact', 'Contact Me', 'Get in Touch', '#contact');
    Section_Testimonial_instance = new Section('Testimonial', 6, 'testimonial', 'Testimonial', 'Happy Customers', '#testimonial');
    Section_Achievements_instance = new Section('Achievements', 7, 'achievements', 'Achievements', 'Personal Achievements', '#achievements');
  }
  var $ENTRIES_2;
  function Section(name, ordinal, id, title, subtitle, path) {
    Enum.call(this, name, ordinal);
    this.id_1 = id;
    this.title_1 = title;
    this.subtitle_1 = subtitle;
    this.path_1 = path;
  }
  protoOf(Section).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Section).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(Section).get_subtitle_55eoyp_k$ = function () {
    return this.subtitle_1;
  };
  protoOf(Section).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  function Section_Home_getInstance() {
    Section_initEntries();
    return Section_Home_instance;
  }
  function Section_About_getInstance() {
    Section_initEntries();
    return Section_About_instance;
  }
  function Section_Experience_getInstance() {
    Section_initEntries();
    return Section_Experience_instance;
  }
  function Section_Service_getInstance() {
    Section_initEntries();
    return Section_Service_instance;
  }
  function Section_Portfolio_getInstance() {
    Section_initEntries();
    return Section_Portfolio_instance;
  }
  function Section_Contact_getInstance() {
    Section_initEntries();
    return Section_Contact_instance;
  }
  function Section_Testimonial_getInstance() {
    Section_initEntries();
    return Section_Testimonial_instance;
  }
  function Section_Achievements_getInstance() {
    Section_initEntries();
    return Section_Achievements_instance;
  }
  var Service_Android_instance;
  var Service_IOS_instance;
  var Service_Website_instance;
  var Service_Design_instance;
  var Service_Business_instance;
  var Service_SEO_instance;
  function values_3() {
    return [Service_Android_getInstance(), Service_IOS_getInstance(), Service_Website_getInstance(), Service_Design_getInstance(), Service_Business_getInstance(), Service_SEO_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'Android':
        return Service_Android_getInstance();
      case 'IOS':
        return Service_IOS_getInstance();
      case 'Website':
        return Service_Website_getInstance();
      case 'Design':
        return Service_Design_getInstance();
      case 'Business':
        return Service_Business_getInstance();
      case 'SEO':
        return Service_SEO_getInstance();
      default:
        Service_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var Service_entriesInitialized;
  function Service_initEntries() {
    if (Service_entriesInitialized)
      return Unit_getInstance();
    Service_entriesInitialized = true;
    Service_Android_instance = new Service('Android', 0, 'android_icon.svg', 'Android Development', 'I have Experience More than 3 Years in Android Development in Media and IT Industryso that i can is assurance for i can make good quality Apps and with good Timeline.');
    Service_IOS_instance = new Service('IOS', 1, 'apple_icon.svg', 'IOS Development', "You can also request IOS App too, if you needed, With Flutter you can create Both Androidand Apple Apps in same time so don't worry to request it if you need.");
    Service_Website_instance = new Service('Website', 2, 'web_icon.svg', 'Website Development', 'You worry if you not success develop Apps? just use Website as MVP and you can create yourproduct to check is your product is fit on market or not.');
    Service_Design_instance = new Service('Design', 3, 'design_icon.svg', 'UI/UX Design', 'I have knowledge to Design Mobile Apps With Figma, if you need discuss just discuss it.');
    Service_Business_instance = new Service('Business', 4, 'business_icon.svg', 'Business Analysis', 'I have Experience More than 3 Years in Android Development in Media and IT Industryso that i can is assurance for i can make good quality Apps and with good Timeline');
    Service_SEO_instance = new Service('SEO', 5, 'seo_icon.svg', 'SEO Marketing', 'I have Experience More than 3 Years in Android Development in Media and IT Industryso that i can is assurance for i can make good quality Apps and with good Timeline');
  }
  var $ENTRIES_3;
  function Service(name, ordinal, icon, title, description) {
    Enum.call(this, name, ordinal);
    this.icon_1 = icon;
    this.title_1 = title;
    this.description_1 = description;
  }
  protoOf(Service).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  protoOf(Service).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(Service).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  function Service_Android_getInstance() {
    Service_initEntries();
    return Service_Android_instance;
  }
  function Service_IOS_getInstance() {
    Service_initEntries();
    return Service_IOS_instance;
  }
  function Service_Website_getInstance() {
    Service_initEntries();
    return Service_Website_instance;
  }
  function Service_Design_getInstance() {
    Service_initEntries();
    return Service_Design_instance;
  }
  function Service_Business_getInstance() {
    Service_initEntries();
    return Service_Business_instance;
  }
  function Service_SEO_getInstance() {
    Service_initEntries();
    return Service_SEO_instance;
  }
  var Skill_Creative_instance;
  var Skill_Accountable_instance;
  var Skill_HardWorking_instance;
  var Skill_Value_instance;
  var Skill_Delivery_instance;
  function values_4() {
    return [Skill_Creative_getInstance(), Skill_Accountable_getInstance(), Skill_HardWorking_getInstance(), Skill_Value_getInstance(), Skill_Delivery_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'Creative':
        return Skill_Creative_getInstance();
      case 'Accountable':
        return Skill_Accountable_getInstance();
      case 'HardWorking':
        return Skill_HardWorking_getInstance();
      case 'Value':
        return Skill_Value_getInstance();
      case 'Delivery':
        return Skill_Delivery_getInstance();
      default:
        Skill_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_4());
    return $ENTRIES_4;
  }
  var Skill_entriesInitialized;
  function Skill_initEntries() {
    if (Skill_entriesInitialized)
      return Unit_getInstance();
    Skill_entriesInitialized = true;
    Skill_Creative_instance = new Skill('Creative', 0, 'Creative', get_percent(90));
    Skill_Accountable_instance = new Skill('Accountable', 1, 'Accountable', get_percent(90));
    Skill_HardWorking_instance = new Skill('HardWorking', 2, 'Hard Working', get_percent(80));
    Skill_Value_instance = new Skill('Value', 3, 'Value for Money', get_percent(85));
    Skill_Delivery_instance = new Skill('Delivery', 4, 'On-Time Delivery', get_percent(75));
  }
  var $ENTRIES_4;
  function Skill(name, ordinal, title, percentage) {
    Enum.call(this, name, ordinal);
    this.title_1 = title;
    this.percentage_1 = percentage;
  }
  protoOf(Skill).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(Skill).get_percentage_zf35ct_k$ = function () {
    return this.percentage_1;
  };
  var ProgrammingLanguage_Kotlin_instance;
  var ProgrammingLanguage_Flutter_instance;
  var ProgrammingLanguage_Firebase_instance;
  var ProgrammingLanguage_Go_instance;
  var ProgrammingLanguage_Github_instance;
  var ProgrammingLanguage_Jira_instance;
  function values_5() {
    return [ProgrammingLanguage_Kotlin_getInstance(), ProgrammingLanguage_Flutter_getInstance(), ProgrammingLanguage_Firebase_getInstance(), ProgrammingLanguage_Go_getInstance(), ProgrammingLanguage_Github_getInstance(), ProgrammingLanguage_Jira_getInstance()];
  }
  function valueOf_5(value) {
    switch (value) {
      case 'Kotlin':
        return ProgrammingLanguage_Kotlin_getInstance();
      case 'Flutter':
        return ProgrammingLanguage_Flutter_getInstance();
      case 'Firebase':
        return ProgrammingLanguage_Firebase_getInstance();
      case 'Go':
        return ProgrammingLanguage_Go_getInstance();
      case 'Github':
        return ProgrammingLanguage_Github_getInstance();
      case 'Jira':
        return ProgrammingLanguage_Jira_getInstance();
      default:
        ProgrammingLanguage_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_5() {
    if ($ENTRIES_5 == null)
      $ENTRIES_5 = enumEntries(values_5());
    return $ENTRIES_5;
  }
  var ProgrammingLanguage_entriesInitialized;
  function ProgrammingLanguage_initEntries() {
    if (ProgrammingLanguage_entriesInitialized)
      return Unit_getInstance();
    ProgrammingLanguage_entriesInitialized = true;
    ProgrammingLanguage_Kotlin_instance = new ProgrammingLanguage('Kotlin', 0, 'Kotlin', 'kotlin.svg');
    ProgrammingLanguage_Flutter_instance = new ProgrammingLanguage('Flutter', 1, 'Flutter', 'flutter.svg');
    ProgrammingLanguage_Firebase_instance = new ProgrammingLanguage('Firebase', 2, 'Firebase', 'firebase.svg');
    ProgrammingLanguage_Go_instance = new ProgrammingLanguage('Go', 3, 'Golang', 'go.svg');
    ProgrammingLanguage_Github_instance = new ProgrammingLanguage('Github', 4, 'Github', 'github.svg');
    ProgrammingLanguage_Jira_instance = new ProgrammingLanguage('Jira', 5, 'Jira', 'jira.svg');
  }
  var $ENTRIES_5;
  function ProgrammingLanguage(name, ordinal, title, image) {
    Enum.call(this, name, ordinal);
    this.title_1 = title;
    this.image_1 = image;
  }
  protoOf(ProgrammingLanguage).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(ProgrammingLanguage).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  function Skill_Creative_getInstance() {
    Skill_initEntries();
    return Skill_Creative_instance;
  }
  function Skill_Accountable_getInstance() {
    Skill_initEntries();
    return Skill_Accountable_instance;
  }
  function Skill_HardWorking_getInstance() {
    Skill_initEntries();
    return Skill_HardWorking_instance;
  }
  function Skill_Value_getInstance() {
    Skill_initEntries();
    return Skill_Value_instance;
  }
  function Skill_Delivery_getInstance() {
    Skill_initEntries();
    return Skill_Delivery_instance;
  }
  function ProgrammingLanguage_Kotlin_getInstance() {
    ProgrammingLanguage_initEntries();
    return ProgrammingLanguage_Kotlin_instance;
  }
  function ProgrammingLanguage_Flutter_getInstance() {
    ProgrammingLanguage_initEntries();
    return ProgrammingLanguage_Flutter_instance;
  }
  function ProgrammingLanguage_Firebase_getInstance() {
    ProgrammingLanguage_initEntries();
    return ProgrammingLanguage_Firebase_instance;
  }
  function ProgrammingLanguage_Go_getInstance() {
    ProgrammingLanguage_initEntries();
    return ProgrammingLanguage_Go_instance;
  }
  function ProgrammingLanguage_Github_getInstance() {
    ProgrammingLanguage_initEntries();
    return ProgrammingLanguage_Github_instance;
  }
  function ProgrammingLanguage_Jira_getInstance() {
    ProgrammingLanguage_initEntries();
    return ProgrammingLanguage_Jira_instance;
  }
  var Testimonial_First_instance;
  var Testimonial_Second_instance;
  var Testimonial_Third_instance;
  var Testimonial_Four_instance;
  var Testimonial_Five_instance;
  var Testimonial_Six_instance;
  function values_6() {
    return [Testimonial_First_getInstance(), Testimonial_Second_getInstance(), Testimonial_Third_getInstance(), Testimonial_Four_getInstance(), Testimonial_Five_getInstance(), Testimonial_Six_getInstance()];
  }
  function valueOf_6(value) {
    switch (value) {
      case 'First':
        return Testimonial_First_getInstance();
      case 'Second':
        return Testimonial_Second_getInstance();
      case 'Third':
        return Testimonial_Third_getInstance();
      case 'Four':
        return Testimonial_Four_getInstance();
      case 'Five':
        return Testimonial_Five_getInstance();
      case 'Six':
        return Testimonial_Six_getInstance();
      default:
        Testimonial_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_6() {
    if ($ENTRIES_6 == null)
      $ENTRIES_6 = enumEntries(values_6());
    return $ENTRIES_6;
  }
  var Testimonial_entriesInitialized;
  function Testimonial_initEntries() {
    if (Testimonial_entriesInitialized)
      return Unit_getInstance();
    Testimonial_entriesInitialized = true;
    Testimonial_First_instance = new Testimonial('First', 0, 'avatar1.png', 'Milica Ilic', 'Web Designer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
    Testimonial_Second_instance = new Testimonial('Second', 1, 'avatar2.png', 'Stefan Jovanovic', 'Android Developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
    Testimonial_Third_instance = new Testimonial('Third', 2, 'avatar3.png', 'Ana Milic', 'Business Analyst', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
    Testimonial_Four_instance = new Testimonial('Four', 3, 'avatar4.png', 'Darko Pesic', 'Top Manager', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
    Testimonial_Five_instance = new Testimonial('Five', 4, 'avatar5.png', 'Milena Nesovic', 'HR Recruiter', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
    Testimonial_Six_instance = new Testimonial('Six', 5, 'avatar6.png', 'Aca Rodic', 'Cyber Security Analyst', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  }
  var $ENTRIES_6;
  function Testimonial(name, ordinal, image, fullName, profession, review) {
    Enum.call(this, name, ordinal);
    this.image_1 = image;
    this.fullName_1 = fullName;
    this.profession_1 = profession;
    this.review_1 = review;
  }
  protoOf(Testimonial).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(Testimonial).get_fullName_9skygt_k$ = function () {
    return this.fullName_1;
  };
  protoOf(Testimonial).get_profession_uuavt1_k$ = function () {
    return this.profession_1;
  };
  protoOf(Testimonial).get_review_iyht9d_k$ = function () {
    return this.review_1;
  };
  function Testimonial_First_getInstance() {
    Testimonial_initEntries();
    return Testimonial_First_instance;
  }
  function Testimonial_Second_getInstance() {
    Testimonial_initEntries();
    return Testimonial_Second_instance;
  }
  function Testimonial_Third_getInstance() {
    Testimonial_initEntries();
    return Testimonial_Third_instance;
  }
  function Testimonial_Four_getInstance() {
    Testimonial_initEntries();
    return Testimonial_Four_instance;
  }
  function Testimonial_Five_getInstance() {
    Testimonial_initEntries();
    return Testimonial_Five_instance;
  }
  function Testimonial_Six_getInstance() {
    Testimonial_initEntries();
    return Testimonial_Six_instance;
  }
  var Theme_Primary_instance;
  var Theme_Secondary_instance;
  var Theme_Gray_instance;
  var Theme_LightGray_instance;
  var Theme_LighterGray_instance;
  var Theme_White_instance;
  function values_7() {
    return [Theme_Primary_getInstance(), Theme_Secondary_getInstance(), Theme_Gray_getInstance(), Theme_LightGray_getInstance(), Theme_LighterGray_getInstance(), Theme_White_getInstance()];
  }
  function valueOf_7(value) {
    switch (value) {
      case 'Primary':
        return Theme_Primary_getInstance();
      case 'Secondary':
        return Theme_Secondary_getInstance();
      case 'Gray':
        return Theme_Gray_getInstance();
      case 'LightGray':
        return Theme_LightGray_getInstance();
      case 'LighterGray':
        return Theme_LighterGray_getInstance();
      case 'White':
        return Theme_White_getInstance();
      default:
        Theme_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_7() {
    if ($ENTRIES_7 == null)
      $ENTRIES_7 = enumEntries(values_7());
    return $ENTRIES_7;
  }
  var Theme_entriesInitialized;
  function Theme_initEntries() {
    if (Theme_entriesInitialized)
      return Unit_getInstance();
    Theme_entriesInitialized = true;
    Theme_Primary_instance = new Theme('Primary', 0, '#328DD7', rgb(50, 141, 215));
    Theme_Secondary_instance = new Theme('Secondary', 1, '#222222', rgb(30, 30, 30));
    Theme_Gray_instance = new Theme('Gray', 2, '#CFCFCF', rgb(207, 207, 207));
    Theme_LightGray_instance = new Theme('LightGray', 3, '#EDEDED', rgb(237, 237, 237));
    Theme_LighterGray_instance = new Theme('LighterGray', 4, '#F9F9F9', rgb(249, 249, 249));
    Theme_White_instance = new Theme('White', 5, '#FFFFFF', rgb(255, 255, 255));
  }
  var $ENTRIES_7;
  function Theme(name, ordinal, hex, rgb) {
    Enum.call(this, name, ordinal);
    this.hex_1 = hex;
    this.rgb_1 = rgb;
  }
  protoOf(Theme).get_hex_18j4ge_k$ = function () {
    return this.hex_1;
  };
  protoOf(Theme).get_rgb_18ix0c_k$ = function () {
    return this.rgb_1;
  };
  function Theme_Primary_getInstance() {
    Theme_initEntries();
    return Theme_Primary_instance;
  }
  function Theme_Secondary_getInstance() {
    Theme_initEntries();
    return Theme_Secondary_instance;
  }
  function Theme_Gray_getInstance() {
    Theme_initEntries();
    return Theme_Gray_instance;
  }
  function Theme_LightGray_getInstance() {
    Theme_initEntries();
    return Theme_LightGray_instance;
  }
  function Theme_LighterGray_getInstance() {
    Theme_initEntries();
    return Theme_LighterGray_instance;
  }
  function Theme_White_getInstance() {
    Theme_initEntries();
    return Theme_White_instance;
  }
  function HomePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2083743828);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2083743828, $changed, -1, 'id.haaweejee.landingpage.pages.HomePage (Index.kt:28)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-2097057304);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.pages.HomePage.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var menuOpened$delegate = tmp0_group;
      var tmp_1 = fillMaxSize(Companion_getInstance_1());
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.pages.HomePage.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1279877838, true, HomePage$lambda_1(menuOpened$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.pages.HomePage.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_71(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_1, null, null, tmp0, $composer_0, 3072, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(HomePage$lambda_2($changed));
    }
  }
  function HomePage$lambda($menuOpened$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('menuOpened', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $menuOpened$delegate.get_value_j01efc_k$();
  }
  function HomePage$lambda_0($menuOpened$delegate, _set____db54di) {
    getLocalDelegateReference('menuOpened', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $menuOpened$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function HomePage$lambda$lambda$lambda($menuOpened$delegate) {
    return function () {
      HomePage$lambda_0($menuOpened$delegate, true);
      return Unit_getInstance();
    };
  }
  function HomePage$lambda$lambda($menuOpened$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(2116657385, $changed, -1, 'id.haaweejee.landingpage.pages.HomePage.<anonymous>.<anonymous> (Index.kt:38)');
        }
        $composer_0.startReplaceGroup_5hh8aj_k$(2105714685);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.pages.HomePage.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = HomePage$lambda$lambda$lambda($menuOpened$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        MainSection(tmp0_group, $composer_0, 6);
        AboutSection($composer_0, 0);
        ExperienceSection($composer_0, 0);
        ServiceSection($composer_0, 0);
        PortfolioSection($composer_0, 0);
        ContactSection($composer_0, 0);
        FooterSection($composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_70($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function HomePage$lambda$lambda_0($menuOpened$delegate) {
    return function () {
      HomePage$lambda_0($menuOpened$delegate, false);
      return Unit_getInstance();
    };
  }
  function HomePage$lambda_1($menuOpened$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1279877838, $changed, -1, 'id.haaweejee.landingpage.pages.HomePage.<anonymous> (Index.kt:33)');
        }
        var tmp_0 = fillMaxSize(Companion_getInstance_1());
        var tmp_1 = Top_getInstance();
        var tmp_2 = CenterHorizontally_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.pages.HomePage.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(2116657385, true, HomePage$lambda$lambda($menuOpened$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.pages.HomePage.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_70(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, tmp_1, tmp_2, null, tmp0, $composer_0, 24576, 8);
        BackToTopButton($composer_0, 0);
        if (HomePage$lambda($menuOpened$delegate)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-831088585);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_5;
          if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'id.haaweejee.landingpage.pages.HomePage.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = HomePage$lambda$lambda_0($menuOpened$delegate);
            $composer_0.updateRememberedValue_l1wh71_k$(value_0);
            tmp_5 = value_0;
          } else {
            tmp_5 = it_0;
          }
          var tmp_6 = tmp_5;
          var tmp0_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          OverflowMenu(tmp0_group, $composer_0, 6);
        }
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_71($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function HomePage$lambda_2($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AboutSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-516203226);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-516203226, $changed, -1, 'id.haaweejee.landingpage.sections.AboutSection (AboutSection.kt:43)');
      }
      var tmp = padding_2(maxWidth(id(Companion_getInstance_1(), Section_About_getInstance().get_id_kntnx8_k$()), get_px(2880)), get_px(30));
      var tmp_0 = TopCenter_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$AboutSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AboutSection$lambda($changed));
    }
  }
  function AboutContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1032649234);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1032649234, $changed, -1, 'id.haaweejee.landingpage.sections.AboutContent (AboutSection.kt:56)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = maxWidth(fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90)), get_px(1200));
      var tmp_0 = CenterHorizontally_getInstance();
      Column(tmp, null, tmp_0, null, ComposableSingletons$AboutSectionKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24576, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AboutContent$lambda($changed));
    }
  }
  function AboutImage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-492645072);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-492645072, $changed, -1, 'id.haaweejee.landingpage.sections.AboutImage (AboutSection.kt:69)');
      }
      var tmp = fillMaxWidth(Companion_getInstance_1());
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$AboutSectionKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AboutImage$lambda($changed));
    }
  }
  function AboutMe($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(988189685);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(988189685, $changed, -1, 'id.haaweejee.landingpage.sections.AboutMe (AboutSection.kt:83)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-1676111979);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.AboutMe.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var viewportEntered$delegate = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(-1676109923);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.AboutMe.<anonymous>' call
        var value_0 = mutableStateListOf([0, 0, 0, 0, 0]);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var animatedPercentage = tmp1_group;
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = AboutMe$lambda_1;
      }
      var composer = $composer_1;
      sourceInformationMarkerStart($composer_1, -954370320, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value_1 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var wrapper = tmp1_group_0;
      var tmp0 = wrapper.get_coroutineScope_5k7h45_k$();
      sourceInformationMarkerEnd($composer_1);
      var coroutineScope = tmp0;
      var tmp_5 = Section_About_getInstance().get_id_kntnx8_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(-1676102477);
      var tmp8 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$(coroutineScope);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = tmp8.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.AboutMe.<anonymous>' call
        var value_2 = AboutMe$lambda_2(coroutineScope, viewportEntered$delegate, animatedPercentage);
        tmp8.updateRememberedValue_l1wh71_k$(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      ObserveViewPortEntered(tmp_5, 700.0, tmp2_group, $composer_0, 54);
      var tmp_8 = fillMaxWidth(Companion_getInstance_1());
      var tmp_9 = Center_getInstance_0();
      Column(tmp_8, tmp_9, null, null, ComposableSingletons$AboutSectionKt_getInstance().lambda_7_r8sbbj_1, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(AboutMe$lambda_3($changed));
    }
  }
  function ComposableLambda$invoke$ref_72($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_1$lambda_zx8t0($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1100103724, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-1.<anonymous> (AboutSection.kt:51)');
      }
      AboutContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_73($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_2$lambda_rtp897($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1325098551, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-2.<anonymous> (AboutSection.kt:64)');
      }
      AboutMe($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_74($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_3$lambda_edscnq($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-347946570, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-3.<anonymous> (AboutSection.kt:74)');
      }
      var tmp0_modifier = fillMaxWidth(toModifier(get_AboutImageStyle(), $composer_0, 6), get_percent(80));
      Image('about_image.png', '', tmp0_modifier, null, null, null, null, $composer_0, 54, 120);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_75($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_4$lambda_efu4eh($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1971432960, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-4.<anonymous> (AboutSection.kt:122)');
    }
    Text('Mobile Developer with 3+ years of experience in mobile app development. with Experience in Media Industry and Technology Company, so that we can discuss about best solution or your business. Open to Discuss if you have any consultation about tech and product', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_76($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_5$lambda_rrngig($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-620072727, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-5.<anonymous> (AboutSection.kt:137)');
    }
    Text('My Ability:', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_77($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_6$lambda_11z0jr($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(221601365, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-6.<anonymous> (AboutSection.kt:145)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = get_entries_5().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'id.haaweejee.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-6.<anonymous>.<anonymous>' call
        ProgrammingCard(element.get_title_iz32un_k$(), element.get_image_it3i2a_k$(), $composer_0, 0);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_78($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_7$lambda_tvlhly($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1013334562, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-7.<anonymous> (AboutSection.kt:110)');
      }
      var tmp = Section_About_getInstance();
      SectionTitle(null, tmp, null, $composer_0, 48, 5);
      P(toAttrs(color(fontStyle(fontWeight(fontSize(fontFamily(maxWidth(margin_1(toModifier(get_AboutTextStyle(), $composer_0, 6), get_px(25), VOID, get_px(10)), get_px(500)), ['Roboto']), get_px(18)), Companion_getInstance_2().get_Normal_22avww_k$()), Companion_getInstance_15().get_Italic_8h4fb_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$())), ComposableSingletons$AboutSectionKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 48, 0);
      P(toAttrs(color(fontWeight(fontSize(fontFamily(maxWidth(margin_1(toModifier(get_AboutTextStyle(), $composer_0, 6), get_px(0)), get_px(500)), ['Roboto']), get_px(18)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$())), ComposableSingletons$AboutSectionKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 48, 0);
      var tmp0_modifier = margin_1(fillMaxWidth(Companion_getInstance_1()), get_px(15));
      var tmp1_numColumns = numColumns(2, VOID, 3);
      SimpleGrid(tmp1_numColumns, tmp0_modifier, null, null, ComposableSingletons$AboutSectionKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutSectionKt() {
    ComposableSingletons$AboutSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_72(composableLambdaInstance(1100103724, false, ComposableSingletons$AboutSectionKt$lambda_1$lambda_zx8t0));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_73(composableLambdaInstance(-1325098551, false, ComposableSingletons$AboutSectionKt$lambda_2$lambda_rtp897));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_74(composableLambdaInstance(-347946570, false, ComposableSingletons$AboutSectionKt$lambda_3$lambda_edscnq));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_75(composableLambdaInstance(-1971432960, false, ComposableSingletons$AboutSectionKt$lambda_4$lambda_efu4eh));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_76(composableLambdaInstance(-620072727, false, ComposableSingletons$AboutSectionKt$lambda_5$lambda_rrngig));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_77(composableLambdaInstance(221601365, false, ComposableSingletons$AboutSectionKt$lambda_6$lambda_11z0jr));
    var tmp_5 = this;
    tmp_5.lambda_7_r8sbbj_1 = ComposableLambda$invoke$ref_78(composableLambdaInstance(-1013334562, false, ComposableSingletons$AboutSectionKt$lambda_7$lambda_tvlhly));
  }
  protoOf(ComposableSingletons$AboutSectionKt).get_lambda_1_kgubpq_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$AboutSectionKt).get_lambda_2_ib40yb_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$AboutSectionKt).get_lambda_3_dy1ocs_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$AboutSectionKt).get_lambda_4_otwob9_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$AboutSectionKt).get_lambda_5_7f90zu_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$AboutSectionKt).get_lambda_6_vcpbo7_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  protoOf(ComposableSingletons$AboutSectionKt).get_lambda_7_wgdmw_k$ = function () {
    return this.lambda_7_r8sbbj_1;
  };
  var ComposableSingletons$AboutSectionKt_instance;
  function ComposableSingletons$AboutSectionKt_getInstance() {
    if (ComposableSingletons$AboutSectionKt_instance == null)
      new ComposableSingletons$AboutSectionKt();
    return ComposableSingletons$AboutSectionKt_instance;
  }
  function AboutMe$lambda($viewportEntered$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $viewportEntered$delegate.get_value_j01efc_k$();
  }
  function AboutMe$lambda_0($viewportEntered$delegate, _set____db54di) {
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $viewportEntered$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AboutSection$lambda($$changed) {
    return function ($composer, $force) {
      AboutSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AboutContent$lambda($$changed) {
    return function ($composer, $force) {
      AboutContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AboutImage$lambda($$changed) {
    return function ($composer, $force) {
      AboutImage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AboutMe$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function AboutMe$lambda$slambda$lambda($animatedPercentage, $skill) {
    return function (it) {
      $animatedPercentage.set_9t5s9l_k$($skill.get_ordinal_ip24qg_k$(), it);
      return Unit_getInstance();
    };
  }
  function AboutMe$lambda$slambda($skill, $animatedPercentage, resultContinuation) {
    this.$skill_1 = $skill;
    this.$animatedPercentage_1 = $animatedPercentage;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AboutMe$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AboutMe$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AboutMe$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = numberToInt(this.$skill_1.get_percentage_zf35ct_k$().value);
            suspendResult = animateNumbers(tmp_0, VOID, AboutMe$lambda$slambda$lambda(this.$animatedPercentage_1, this.$skill_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(AboutMe$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new AboutMe$lambda$slambda(this.$skill_1, this.$animatedPercentage_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(AboutMe$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AboutMe$lambda$slambda_0($skill, $animatedPercentage, resultContinuation) {
    var i = new AboutMe$lambda$slambda($skill, $animatedPercentage, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AboutMe$lambda_2($coroutineScope, $viewportEntered$delegate, $animatedPercentage) {
    return function () {
      AboutMe$lambda_0($viewportEntered$delegate, true);
      var _iterator__ex2g4s = get_entries_4().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'id.haaweejee.landingpage.sections.AboutMe.<anonymous>.<anonymous>.<anonymous>' call
        launch($coroutineScope, VOID, VOID, AboutMe$lambda$slambda_0(element, $animatedPercentage, null));
      }
      return Unit_getInstance();
    };
  }
  function AboutMe$lambda_3($$changed) {
    return function ($composer, $force) {
      AboutMe($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AchievementsSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-86091460);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-86091460, $changed, -1, 'id.haaweejee.landingpage.sections.AchievementsSection (AchievementsSection.kt:30)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = padding_1(maxWidth(id(Companion_getInstance_1(), Section_Achievements_getInstance().get_id_kntnx8_k$()), get_px(2880)), get_px(100));
      var tmp_0 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.AchievementsSection.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1223657022, true, AchievementsSection$lambda(breakpoint), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.AchievementsSection.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_79(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp, tmp_0, null, tmp0, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AchievementsSection$lambda_0($changed));
    }
  }
  function AchievementContent(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-882045232);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-882045232, $dirty, -1, 'id.haaweejee.landingpage.sections.AchievementContent (AchievementsSection.kt:44)');
      }
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = AchievementContent$lambda_1;
      }
      var composer = $composer_1;
      sourceInformationMarkerStart($composer_1, -954370320, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var wrapper = tmp1_group;
      var tmp0 = wrapper.get_coroutineScope_5k7h45_k$();
      sourceInformationMarkerEnd($composer_1);
      var scope = tmp0;
      $composer_0.startReplaceGroup_5hh8aj_k$(-798109474);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.AchievementContent.<anonymous>' call
        var value_0 = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var viewportEntered$delegate = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(-798107513);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.AchievementContent.<anonymous>' call
        var value_1 = mutableStateListOf([0, 0, 0, 0]);
        this_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var animatedNumbers = tmp1_group_0;
      var tmp_5 = Section_Achievements_getInstance().get_id_kntnx8_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(-798101381);
      var tmp8 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$(scope);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = tmp8.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.AchievementContent.<anonymous>' call
        var value_2 = AchievementContent$lambda_2(scope, viewportEntered$delegate, animatedNumbers);
        tmp8.updateRememberedValue_l1wh71_k$(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      ObserveViewPortEntered(tmp_5, 700.0, tmp2_group, $composer_0, 54);
      var tmp_8 = numColumns(1, VOID, 2, 4);
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.AchievementContent.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-729553849, true, AchievementContent$lambda_3(breakpoint, animatedNumbers, viewportEntered$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_0 || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.AchievementContent.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_80(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_3);
        tmp_9 = value_3;
      } else {
        tmp_9 = it_3;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      SimpleGrid(tmp_8, null, null, null, tmp0_0, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(AchievementContent$lambda_4(breakpoint, $changed));
    }
  }
  function AchievementContent$lambda($viewportEntered$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $viewportEntered$delegate.get_value_j01efc_k$();
  }
  function AchievementContent$lambda_0($viewportEntered$delegate, _set____db54di) {
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $viewportEntered$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AchievementsSection$lambda($breakpoint) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1223657022, $changed, -1, 'id.haaweejee.landingpage.sections.AchievementsSection.<anonymous> (AchievementsSection.kt:39)');
        }
        AchievementContent($breakpoint, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_79($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AchievementsSection$lambda_0($$changed) {
    return function ($composer, $force) {
      AchievementsSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AchievementContent$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function AchievementContent$lambda$slambda$lambda($animatedNumbers, $achievement) {
    return function (it) {
      $animatedNumbers.set_9t5s9l_k$($achievement.get_ordinal_ip24qg_k$(), it);
      return Unit_getInstance();
    };
  }
  function AchievementContent$lambda$slambda($achievement, $animatedNumbers, resultContinuation) {
    this.$achievement_1 = $achievement;
    this.$animatedNumbers_1 = $animatedNumbers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AchievementContent$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AchievementContent$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AchievementContent$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = this.$achievement_1.get_number_hay53m_k$();
            var tmp_1 = new Long(20, 0);
            suspendResult = animateNumbers(tmp_0, tmp_1, AchievementContent$lambda$slambda$lambda(this.$animatedNumbers_1, this.$achievement_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(AchievementContent$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new AchievementContent$lambda$slambda(this.$achievement_1, this.$animatedNumbers_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(AchievementContent$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AchievementContent$lambda$slambda_0($achievement, $animatedNumbers, resultContinuation) {
    var i = new AchievementContent$lambda$slambda($achievement, $animatedNumbers, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AchievementContent$lambda_2($scope, $viewportEntered$delegate, $animatedNumbers) {
    return function () {
      AchievementContent$lambda_0($viewportEntered$delegate, true);
      var _iterator__ex2g4s = get_entries().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'id.haaweejee.landingpage.sections.AchievementContent.<anonymous>.<anonymous>.<anonymous>' call
        launch($scope, VOID, VOID, AchievementContent$lambda$slambda_0(element, $animatedNumbers, null));
      }
      return Unit_getInstance();
    };
  }
  function AchievementContent$lambda_3($breakpoint, $animatedNumbers, $viewportEntered$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-729553849, $changed, -1, 'id.haaweejee.landingpage.sections.AchievementContent.<anonymous> (AchievementsSection.kt:74)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = get_entries().iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'id.haaweejee.landingpage.sections.AchievementContent.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = Companion_getInstance_1();
          var tmp_1;
          if (element.equals(Achievement_Team_getInstance())) {
            tmp_1 = get_px(0);
          } else {
            tmp_1 = $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) > 0 ? get_px(40) : get_px(0);
          }
          var tmp0_modifier = margin_0(tmp_0, VOID, tmp_1, $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(0) : get_px(40));
          var tmp1_number = AchievementContent$lambda($viewportEntered$delegate) ? $animatedNumbers.get_c1px32_k$(element.get_ordinal_ip24qg_k$()) : 0;
          AchievementCard(tmp0_modifier, tmp1_number, element, $composer_0, 0, 0);
        }
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_80($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function AchievementContent$lambda_4($breakpoint, $$changed) {
    return function ($composer, $force) {
      AchievementContent($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ContactSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1679137652);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1679137652, $changed, -1, 'id.haaweejee.landingpage.sections.ContactSection (ContactSection.kt:35)');
      }
      var tmp = padding_1(maxWidth(id(Companion_getInstance_1(), Section_Contact_getInstance().get_id_kntnx8_k$()), get_px(2880)), get_px(100));
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$ContactSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ContactSection$lambda($changed));
    }
  }
  function ContactContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(709391992);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(709391992, $changed, -1, 'id.haaweejee.landingpage.sections.ContactContent (ContactSection.kt:48)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = ContactContent$lambda_1;
      }
      var composer = $composer_1;
      sourceInformationMarkerStart($composer_1, -954370320, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var wrapper = tmp1_group;
      var tmp0 = wrapper.get_coroutineScope_5k7h45_k$();
      sourceInformationMarkerEnd($composer_1);
      var scope = tmp0;
      $composer_0.startReplaceGroup_5hh8aj_k$(-332785234);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.ContactContent.<anonymous>' call
        var value_0 = mutableStateOf(get_deg(0));
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var animatedRotation$delegate = tmp0_group;
      var tmp_3 = Section_Contact_getInstance().get_id_kntnx8_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(-332779799);
      var tmp6 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$(scope);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = tmp6.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.ContactContent.<anonymous>' call
        var value_1 = ContactContent$lambda_2(scope, animatedRotation$delegate);
        tmp6.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp1_group_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      ObserveViewPortEntered(tmp_3, 500.0, tmp1_group_0, $composer_0, 54);
      var tmp_6 = fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_7 = CenterHorizontally_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.ContactContent.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-722771281, true, ContactContent$lambda_3(breakpoint, animatedRotation$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (invalid_0 || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.ContactContent.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_82(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = it_2;
      }
      var tmp_9 = tmp_8;
      var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Column(tmp_6, null, tmp_7, null, tmp0_0, $composer_0, 24576, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(ContactContent$lambda_4($changed));
    }
  }
  function ComposableLambda$invoke$ref_81($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactSectionKt$lambda_1$lambda_3nkjr($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1617712274, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$ContactSectionKt.lambda-1.<anonymous> (ContactSection.kt:43)');
      }
      ContactContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ContactSectionKt() {
    ComposableSingletons$ContactSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_81(composableLambdaInstance(1617712274, false, ComposableSingletons$ContactSectionKt$lambda_1$lambda_3nkjr));
  }
  protoOf(ComposableSingletons$ContactSectionKt).get_lambda_1_kgubpq_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$ContactSectionKt_instance;
  function ComposableSingletons$ContactSectionKt_getInstance() {
    if (ComposableSingletons$ContactSectionKt_instance == null)
      new ComposableSingletons$ContactSectionKt();
    return ComposableSingletons$ContactSectionKt_instance;
  }
  function ContactContent$lambda($animatedRotation$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animatedRotation', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $animatedRotation$delegate.get_value_j01efc_k$();
  }
  function ContactContent$lambda_0($animatedRotation$delegate, _set____db54di) {
    getLocalDelegateReference('animatedRotation', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $animatedRotation$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ContactSection$lambda($$changed) {
    return function ($composer, $force) {
      ContactSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ContactContent$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function ContactContent$lambda$slambda($animatedRotation$delegate, resultContinuation) {
    this.$animatedRotation$delegate_1 = $animatedRotation$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContactContent$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ContactContent$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ContactContent$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ContactContent$lambda_0(this.$animatedRotation$delegate_1, get_deg(0));
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(ContactContent$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new ContactContent$lambda$slambda(this.$animatedRotation$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(ContactContent$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ContactContent$lambda$slambda_0($animatedRotation$delegate, resultContinuation) {
    var i = new ContactContent$lambda$slambda($animatedRotation$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ContactContent$lambda_2($scope, $animatedRotation$delegate) {
    return function () {
      ContactContent$lambda_0($animatedRotation$delegate, get_deg(10));
      launch($scope, VOID, VOID, ContactContent$lambda$slambda_0($animatedRotation$delegate, null));
      return Unit_getInstance();
    };
  }
  function ContactContent$lambda$lambda($animatedRotation$delegate) {
    return function ($this$transform) {
      $this$transform.rotate_utl8m_k$(ContactContent$lambda($animatedRotation$delegate));
      return Unit_getInstance();
    };
  }
  function ContactContent$lambda_3($breakpoint, $animatedRotation$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-722771281, $changed, -1, 'id.haaweejee.landingpage.sections.ContactContent.<anonymous> (ContactSection.kt:71)');
        }
        var tmp_0 = margin_1(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(25));
        $composer_0.startReplaceGroup_5hh8aj_k$(-1550800537);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.sections.ContactContent.<anonymous>.<anonymous>.<anonymous>' call
          var value = ContactContent$lambda$lambda($animatedRotation$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        SectionTitle(transition(transform(tmp_0, tmp0_group), [Companion_getInstance_6().of$default_tua0if_k$('transform', get_ms(500))]), Section_Contact_getInstance(), CenterHorizontally_getInstance(), $composer_0, 48, 0);
        ContactForm($breakpoint, $composer_0, 0);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_82($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ContactContent$lambda_4($$changed) {
    return function ($composer, $force) {
      ContactContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ExperienceSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(591243644);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(591243644, $changed, -1, 'id.haaweejee.landingpage.sections.ExperienceSection (ExperienceSection.kt:28)');
      }
      var tmp = padding_1(maxWidth(id(Companion_getInstance_1(), Section_Experience_getInstance().get_id_kntnx8_k$()), get_px(2880)), get_px(100));
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$ExperienceSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ExperienceSection$lambda($changed));
    }
  }
  function ExperienceContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1740292080);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1740292080, $changed, -1, 'id.haaweejee.landingpage.sections.ExperienceContent (ExperienceSection.kt:41)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-391067328);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.ExperienceContent.<anonymous>' call
        var value = mutableStateOf(get_px(200));
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var animatedMargin$delegate = tmp0_group;
      var tmp_1 = Section_Experience_getInstance().get_id_kntnx8_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(-391061845);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.ExperienceContent.<anonymous>' call
        var value_0 = ExperienceContent$lambda_1(animatedMargin$delegate);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      ObserveViewPortEntered(tmp_1, 1200.0, tmp1_group, $composer_0, 438);
      var tmp_4 = fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_5 = CenterHorizontally_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.ExperienceContent.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-578951417, true, ExperienceContent$lambda_2(breakpoint, animatedMargin$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.ExperienceContent.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_84(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp_4, null, tmp_5, null, tmp0, $composer_0, 24576, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(ExperienceContent$lambda_3($changed));
    }
  }
  function ComposableLambda$invoke$ref_83($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ExperienceSectionKt$lambda_1$lambda_jj9ub5($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-672072446, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$ExperienceSectionKt.lambda-1.<anonymous> (ExperienceSection.kt:36)');
      }
      ExperienceContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ExperienceSectionKt() {
    ComposableSingletons$ExperienceSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_83(composableLambdaInstance(-672072446, false, ComposableSingletons$ExperienceSectionKt$lambda_1$lambda_jj9ub5));
  }
  protoOf(ComposableSingletons$ExperienceSectionKt).get_lambda_1_kgubpq_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$ExperienceSectionKt_instance;
  function ComposableSingletons$ExperienceSectionKt_getInstance() {
    if (ComposableSingletons$ExperienceSectionKt_instance == null)
      new ComposableSingletons$ExperienceSectionKt();
    return ComposableSingletons$ExperienceSectionKt_instance;
  }
  function ExperienceContent$lambda($animatedMargin$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animatedMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $animatedMargin$delegate.get_value_j01efc_k$();
  }
  function ExperienceContent$lambda_0($animatedMargin$delegate, _set____db54di) {
    getLocalDelegateReference('animatedMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $animatedMargin$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ExperienceSection$lambda($$changed) {
    return function ($composer, $force) {
      ExperienceSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ExperienceContent$lambda_1($animatedMargin$delegate) {
    return function () {
      ExperienceContent$lambda_0($animatedMargin$delegate, get_px(50));
      return Unit_getInstance();
    };
  }
  function ExperienceContent$lambda_2($breakpoint, $animatedMargin$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-578951417, $changed, -1, 'id.haaweejee.landingpage.sections.ExperienceContent.<anonymous> (ExperienceSection.kt:60)');
        }
        var tmp_0 = margin_1(fillMaxWidth(Companion_getInstance_1(), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(60) : get_percent(90)), VOID, VOID, get_px(25));
        var tmp_1 = Section_Experience_getInstance();
        SectionTitle(tmp_0, tmp_1, null, $composer_0, 48, 4);
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = get_entries_0().iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'id.haaweejee.landingpage.sections.ExperienceContent.<anonymous>.<anonymous>.<anonymous>' call
          ExperienceCard($breakpoint, element.equals(Experience_First_getInstance()), element, ExperienceContent$lambda($animatedMargin$delegate), $composer_0, 0, 0);
        }
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_84($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceContent$lambda_3($$changed) {
    return function ($composer, $force) {
      ExperienceContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function FooterSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1161222236);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1161222236, $changed, -1, 'id.haaweejee.landingpage.sections.FooterSection (FooterSection.kt:37)');
      }
      var tmp = backgroundColor(padding(maxWidth(fillMaxWidth(Companion_getInstance_1()), get_px(2880)), get_px(100)), Theme_LighterGray_getInstance().get_rgb_18ix0c_k$());
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$FooterSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FooterSection$lambda($changed));
    }
  }
  function FooterContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1931008240);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1931008240, $changed, -1, 'id.haaweejee.landingpage.sections.FooterContent (FooterSection.kt:51)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_0 = CenterHorizontally_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.FooterContent.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-416848153, true, FooterContent$lambda(breakpoint), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.FooterContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_88(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp, null, tmp_0, null, tmp0, $composer_0, 24576, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FooterContent$lambda_0($changed));
    }
  }
  function FooterMenu(row, $composer, $changed, $default) {
    var row_0 = {_v: row};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1769390336);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(row_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        row_0._v = true;
      }
      if (isTraceInProgress()) {
        traceEventStart(1769390336, $dirty, -1, 'id.haaweejee.landingpage.sections.FooterMenu (FooterSection.kt:83)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = take_0(get_entries_2(), 6).iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'id.haaweejee.landingpage.sections.FooterMenu.<anonymous>' call
        var tmp0_modifier = textDecorationLine(fontWeight(fontSize(padding_0(fontFamily(toModifier(get_NavigationItemStyle(), $composer_0, 6), ['Roboto']), VOID, row_0._v ? get_px(20) : get_px(0), row_0._v ? get_px(0) : get_px(20)), get_px(12)), Companion_getInstance_2().get_Normal_22avww_k$()), Companion_getInstance_8().get_None_wo6tgh_k$());
        var tmp1_path = element.get_path_wos8ry_k$();
        var tmp2_text = element.get_title_iz32un_k$();
        Link(tmp1_path, tmp2_text, tmp0_modifier, null, null, null, null, null, $composer_0, 0, 248);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FooterMenu$lambda(row_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_85($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterSectionKt$lambda_1$lambda_vzniu8($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-345959966, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$FooterSectionKt.lambda-1.<anonymous> (FooterSection.kt:46)');
      }
      FooterContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_86($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterSectionKt$lambda_2$lambda_a7u22p($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1753115205, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$FooterSectionKt.lambda-2.<anonymous> (FooterSection.kt:68)');
      }
      FooterMenu(false, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_87($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterSectionKt$lambda_3$lambda_ilsezi($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(34071554, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$FooterSectionKt.lambda-3.<anonymous> (FooterSection.kt:75)');
      }
      FooterMenu(false, $composer_0, 6, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$FooterSectionKt() {
    ComposableSingletons$FooterSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_85(composableLambdaInstance(-345959966, false, ComposableSingletons$FooterSectionKt$lambda_1$lambda_vzniu8));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_86(composableLambdaInstance(1753115205, false, ComposableSingletons$FooterSectionKt$lambda_2$lambda_a7u22p));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_87(composableLambdaInstance(34071554, false, ComposableSingletons$FooterSectionKt$lambda_3$lambda_ilsezi));
  }
  protoOf(ComposableSingletons$FooterSectionKt).get_lambda_1_kgubpq_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$FooterSectionKt).get_lambda_2_ib40yb_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$FooterSectionKt).get_lambda_3_dy1ocs_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$FooterSectionKt_instance;
  function ComposableSingletons$FooterSectionKt_getInstance() {
    if (ComposableSingletons$FooterSectionKt_instance == null)
      new ComposableSingletons$FooterSectionKt();
    return ComposableSingletons$FooterSectionKt_instance;
  }
  function FooterSection$lambda($$changed) {
    return function ($composer, $force) {
      FooterSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function FooterContent$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-416848153, $changed, -1, 'id.haaweejee.landingpage.sections.FooterContent.<anonymous> (FooterSection.kt:59)');
        }
        var tmp0_modifier = size(Companion_getInstance_1(), get_px(100));
        Image_0('logo.svg', tmp0_modifier, null, null, null, null, null, $composer_0, 6, 124);
        if ($breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) > 0) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-356492943);
          var tmp_0 = fillMaxWidth(Companion_getInstance_1());
          var tmp_1 = Center_getInstance_0();
          Row(tmp_0, tmp_1, null, null, ComposableSingletons$FooterSectionKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24576, 12);
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-356289893);
          var tmp_2 = fillMaxWidth(Companion_getInstance_1());
          var tmp_3 = CenterHorizontally_getInstance();
          Column(tmp_2, null, tmp_3, null, ComposableSingletons$FooterSectionKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 24576, 10);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
        SocialBar(true, $composer_0, 6, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_88($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function FooterContent$lambda_0($$changed) {
    return function ($composer, $force) {
      FooterContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function FooterMenu$lambda($row, $$changed, $$default) {
    return function ($composer, $force) {
      FooterMenu($row._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function MainSection(onMenuClicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(992829240);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMenuClicked) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(992829240, $dirty, -1, 'id.haaweejee.landingpage.sections.MainSection (MainSection.kt:38)');
      }
      var tmp = maxWidth(id(Companion_getInstance_1(), Section_Home_getInstance().get_id_kntnx8_k$()), get_px(2880));
      var tmp_0 = TopCenter_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.MainSection.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(136849778, true, MainSection$lambda(onMenuClicked), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.MainSection.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_100(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp, tmp_0, null, tmp0, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MainSection$lambda_0(onMenuClicked, $changed));
    }
  }
  function MainBackground($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1178913747);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1178913747, $changed, -1, 'id.haaweejee.landingpage.sections.MainBackground (MainSection.kt:51)');
      }
      var tmp0_modifier = objectFit(fillMaxSize(Companion_getInstance_1()), Companion_getInstance_12().get_Cover_i8910u_k$());
      var tmp1_src = 'background.svg';
      Image(tmp1_src, 'Background Image', tmp0_modifier, null, null, null, null, $composer_0, 54, 120);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MainBackground$lambda($changed));
    }
  }
  function MainContent(onMenuClicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(423186468);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMenuClicked) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(423186468, $dirty, -1, 'id.haaweejee.landingpage.sections.MainContent (MainSection.kt:62)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp0_modifier = fillMaxSize(Companion_getInstance_1());
      var tmp1_horizontalAlignment = CenterHorizontally_getInstance();
      var tmp2_verticalArrangement = SpaceBetween_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.MainContent.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1052238989, true, MainContent$lambda(onMenuClicked, breakpoint), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.MainContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_102(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp0_modifier, tmp2_verticalArrangement, tmp1_horizontalAlignment, null, tmp0, $composer_0, 24576, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MainContent$lambda_0(onMenuClicked, $changed));
    }
  }
  function MainText(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(650880993);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(650880993, $dirty, -1, 'id.haaweejee.landingpage.sections.MainText (MainSection.kt:82)');
      }
      var tmp = Center_getInstance_0();
      var tmp_0 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.MainText.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(887639550, true, MainText$lambda(breakpoint), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.MainText.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_104(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Row(null, tmp, tmp_0, null, tmp0, $composer_0, 24576, 9);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MainText$lambda_0(breakpoint, $changed));
    }
  }
  function MainImage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1921003026);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1921003026, $changed, -1, 'id.haaweejee.landingpage.sections.MainImage (MainSection.kt:230)');
      }
      var tmp = fillMaxHeight(fillMaxSize(toModifier(get_MainImageStyle(), $composer_0, 6), get_percent(80)));
      var tmp_0 = Bottom_getInstance();
      Column(tmp, tmp_0, null, null, ComposableSingletons$MainSectionKt_getInstance().lambda_11_7sywo6__1, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MainImage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_89($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_1$lambda_21924i($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1334472457, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-1.<anonymous> (MainSection.kt:104)');
    }
    Text("Hello, I'm", $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_90($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_2$lambda_uuvj6p($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(417382130, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-2.<anonymous> (MainSection.kt:115)');
    }
    Text('Hendrawan Wibowo', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_91($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_3$lambda_bcm1q8($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1854085615, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-3.<anonymous> (MainSection.kt:126)');
    }
    Text('Mobile Developer', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_92($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_4$lambda_hh0fbz($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(169413936, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-4.<anonymous> (MainSection.kt:138)');
    }
    Text('Mobile Developer with 3+ years of experience in mobile app development. I can help you to bring your idea to reality with quality.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_93($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_5$lambda_oqh5ky($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1946130191, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-5.<anonymous> (MainSection.kt:157)');
    }
    var tmp0_modifier = textDecorationLine(color(Companion_getInstance_1(), Theme_White_getInstance().get_rgb_18ix0c_k$()), Companion_getInstance_8().get_None_wo6tgh_k$());
    var tmp1_path = Section_Contact_getInstance().get_path_wos8ry_k$();
    Link(tmp1_path, 'Hire Me', tmp0_modifier, null, null, null, null, null, $composer_0, 54, 248);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_94($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_6$lambda_435bh9($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(401948472, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-6.<anonymous> (MainSection.kt:175)');
    }
    var tmp0_modifier = textDecorationLine(color(Companion_getInstance_1(), Theme_White_getInstance().get_rgb_18ix0c_k$()), Companion_getInstance_8().get_None_wo6tgh_k$());
    Link('https://drive.google.com/file/d/1yoyqlOOevWgEvm77tRyThD_PynL3zxxS/view?usp=sharing', 'Download My CV', tmp0_modifier, null, null, null, null, null, $composer_0, 54, 248);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_95($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_7$lambda_wwrsjg($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1964963797, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-7.<anonymous> (MainSection.kt:146)');
      }
      Button(toAttrs(cursor(color(backgroundColor(margin_1(borderRadius(border(height(toModifier(get_MainButtonCVStyle(), $composer_0, 6), get_px(40)), get_px(0)), get_px(5)), VOID, VOID, get_px(10)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Theme_White_getInstance().get_rgb_18ix0c_k$()), Companion_getInstance_5().get_Pointer_m64vg4_k$())), ComposableSingletons$MainSectionKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 48, 0);
      Button(toAttrs(cursor(color(backgroundColor(borderRadius(border(height(toModifier(get_MainButtonCVStyle(), $composer_0, 6), get_px(40)), get_px(0)), get_px(5)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Theme_White_getInstance().get_rgb_18ix0c_k$()), Companion_getInstance_5().get_Pointer_m64vg4_k$())), ComposableSingletons$MainSectionKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_96($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_8$lambda_9apsdh($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-502291238, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-8.<anonymous> (MainSection.kt:197)');
    }
    var tmp0_modifier = textDecorationLine(color(Companion_getInstance_1(), Theme_White_getInstance().get_rgb_18ix0c_k$()), Companion_getInstance_8().get_None_wo6tgh_k$());
    var tmp1_path = Section_Contact_getInstance().get_path_wos8ry_k$();
    Link(tmp1_path, 'Hire Me', tmp0_modifier, null, null, null, null, null, $composer_0, 54, 248);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_97($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_9$lambda_jiwooq($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(293635587, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-9.<anonymous> (MainSection.kt:215)');
    }
    var tmp0_modifier = textDecorationLine(color(Companion_getInstance_1(), Theme_White_getInstance().get_rgb_18ix0c_k$()), Companion_getInstance_8().get_None_wo6tgh_k$());
    Link('https://drive.google.com/file/d/1yoyqlOOevWgEvm77tRyThD_PynL3zxxS/view?usp=sharing', 'Download My CV', tmp0_modifier, null, null, null, null, null, $composer_0, 54, 248);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_98($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_10$lambda_3j64xo($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1797729184, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-10.<anonymous> (MainSection.kt:186)');
      }
      Button(toAttrs(cursor(color(backgroundColor(margin_0(borderRadius(border(height(toModifier(get_MainButtonStyle(), $composer_0, 6), get_px(40)), get_px(0)), get_px(5)), VOID, get_px(10)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Theme_White_getInstance().get_rgb_18ix0c_k$()), Companion_getInstance_5().get_Pointer_m64vg4_k$())), ComposableSingletons$MainSectionKt_getInstance().lambda_8_r8sbbi_1, $composer_0, 48, 0);
      Button(toAttrs(cursor(color(backgroundColor(borderRadius(border(height(toModifier(get_MainButtonCVStyle(), $composer_0, 6), get_px(40)), get_px(0)), get_px(5)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Theme_White_getInstance().get_rgb_18ix0c_k$()), Companion_getInstance_5().get_Pointer_m64vg4_k$())), ComposableSingletons$MainSectionKt_getInstance().lambda_9_r8sbbh_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_99($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_11$lambda_pagc4j($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(3293513, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-11.<anonymous> (MainSection.kt:235)');
      }
      var tmp0_modifier = fillMaxWidth(Companion_getInstance_1());
      var tmp1_src = 'main_image.png';
      Image(tmp1_src, '', tmp0_modifier, null, null, null, null, $composer_0, 54, 120);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainSectionKt() {
    ComposableSingletons$MainSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_89(composableLambdaInstance(1334472457, false, ComposableSingletons$MainSectionKt$lambda_1$lambda_21924i));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_90(composableLambdaInstance(417382130, false, ComposableSingletons$MainSectionKt$lambda_2$lambda_uuvj6p));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_91(composableLambdaInstance(-1854085615, false, ComposableSingletons$MainSectionKt$lambda_3$lambda_bcm1q8));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_92(composableLambdaInstance(169413936, false, ComposableSingletons$MainSectionKt$lambda_4$lambda_hh0fbz));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_93(composableLambdaInstance(1946130191, false, ComposableSingletons$MainSectionKt$lambda_5$lambda_oqh5ky));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_94(composableLambdaInstance(401948472, false, ComposableSingletons$MainSectionKt$lambda_6$lambda_435bh9));
    var tmp_5 = this;
    tmp_5.lambda_7_r8sbbj_1 = ComposableLambda$invoke$ref_95(composableLambdaInstance(1964963797, false, ComposableSingletons$MainSectionKt$lambda_7$lambda_wwrsjg));
    var tmp_6 = this;
    tmp_6.lambda_8_r8sbbi_1 = ComposableLambda$invoke$ref_96(composableLambdaInstance(-502291238, false, ComposableSingletons$MainSectionKt$lambda_8$lambda_9apsdh));
    var tmp_7 = this;
    tmp_7.lambda_9_r8sbbh_1 = ComposableLambda$invoke$ref_97(composableLambdaInstance(293635587, false, ComposableSingletons$MainSectionKt$lambda_9$lambda_jiwooq));
    var tmp_8 = this;
    tmp_8.lambda_10_7sywo5__1 = ComposableLambda$invoke$ref_98(composableLambdaInstance(1797729184, false, ComposableSingletons$MainSectionKt$lambda_10$lambda_3j64xo));
    var tmp_9 = this;
    tmp_9.lambda_11_7sywo6__1 = ComposableLambda$invoke$ref_99(composableLambdaInstance(3293513, false, ComposableSingletons$MainSectionKt$lambda_11$lambda_pagc4j));
  }
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_1_kgubpq_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_2_ib40yb_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_3_dy1ocs_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_4_otwob9_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_5_7f90zu_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_6_vcpbo7_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_7_wgdmw_k$ = function () {
    return this.lambda_7_r8sbbj_1;
  };
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_8_x5m2xz_k$ = function () {
    return this.lambda_8_r8sbbi_1;
  };
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_9_5mc9q2_k$ = function () {
    return this.lambda_9_r8sbbh_1;
  };
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_10_usfim2_k$ = function () {
    return this.lambda_10_7sywo5__1;
  };
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_11_1gq6p1_k$ = function () {
    return this.lambda_11_7sywo6__1;
  };
  var ComposableSingletons$MainSectionKt_instance;
  function ComposableSingletons$MainSectionKt_getInstance() {
    if (ComposableSingletons$MainSectionKt_instance == null)
      new ComposableSingletons$MainSectionKt();
    return ComposableSingletons$MainSectionKt_instance;
  }
  function MainSection$lambda($onMenuClicked) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(136849778, $changed, -1, 'id.haaweejee.landingpage.sections.MainSection.<anonymous> (MainSection.kt:45)');
        }
        MainBackground($composer_0, 0);
        MainContent($onMenuClicked, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_100($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MainSection$lambda_0($onMenuClicked, $$changed) {
    return function ($composer, $force) {
      MainSection($onMenuClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MainBackground$lambda($$changed) {
    return function ($composer, $force) {
      MainBackground($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MainContent$lambda$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(484918902, $changed, -1, 'id.haaweejee.landingpage.sections.MainContent.<anonymous>.<anonymous> (MainSection.kt:76)');
        }
        MainText($breakpoint, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_101($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MainContent$lambda($onMenuClicked, $breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1052238989, $changed, -1, 'id.haaweejee.landingpage.sections.MainContent.<anonymous> (MainSection.kt:70)');
        }
        Header($onMenuClicked, $composer_0, 0);
        var tmp_0 = fillMaxSize(Companion_getInstance_1());
        var tmp_1 = Center_getInstance_0();
        var tmp_2 = CenterHorizontally_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.sections.MainContent.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(484918902, true, MainContent$lambda$lambda($breakpoint), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.sections.MainContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_101(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, tmp_1, tmp_2, null, tmp0, $composer_0, 24576, 8);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_102($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MainContent$lambda_0($onMenuClicked, $$changed) {
    return function ($composer, $force) {
      MainContent($onMenuClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MainText$lambda$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-238507801, $changed, -1, 'id.haaweejee.landingpage.sections.MainText.<anonymous>.<anonymous> (MainSection.kt:95)');
        }
        P(toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_getInstance_1(), get_px(0)), ['Roboto']), $breakpoint.compareTo_30rs7w_k$(Breakpoint_LG_getInstance()) >= 0 ? get_px(30) : get_px(20)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Primary_getInstance().get_rgb_18ix0c_k$())), ComposableSingletons$MainSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
        P(toAttrs(color(fontWeight(fontSize(fontFamily(margin_1(Companion_getInstance_1(), get_px(0), VOID, get_px(0)), ['Roboto']), $breakpoint.compareTo_30rs7w_k$(Breakpoint_LG_getInstance()) >= 0 ? get_px(40) : get_px(40)), Companion_getInstance_2().get_Bolder_3mclb9_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$())), ComposableSingletons$MainSectionKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 0);
        P(toAttrs(color(fontWeight(fontSize(fontFamily(margin_1(Companion_getInstance_1(), get_px(10), VOID, get_px(5)), ['Roboto']), get_px(20)), Companion_getInstance_2().get_Bold_wnz5ke_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$())), ComposableSingletons$MainSectionKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 48, 0);
        P(toAttrs(color(fontWeight(fontSize(fontFamily(maxWidth(margin_1(Companion_getInstance_1(), VOID, VOID, get_px(25)), get_px(400)), ['Roboto']), get_px(15)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$())), ComposableSingletons$MainSectionKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 48, 0);
        if ($breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) < 0) {
          $composer_0.startReplaceGroup_5hh8aj_k$(97870893);
          var tmp_0 = fillMaxWidth(Companion_getInstance_1());
          var tmp_1 = Center_getInstance_0();
          var tmp_2 = CenterHorizontally_getInstance();
          Column(tmp_0, tmp_1, tmp_2, null, ComposableSingletons$MainSectionKt_getInstance().lambda_7_r8sbbj_1, $composer_0, 24576, 8);
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(99900835);
          Row(null, null, null, null, ComposableSingletons$MainSectionKt_getInstance().lambda_10_7sywo5__1, $composer_0, 24576, 15);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_103($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MainText$lambda($breakpoint) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(887639550, $changed, -1, 'id.haaweejee.landingpage.sections.MainText.<anonymous> (MainSection.kt:87)');
        }
        $composer_0.startReplaceGroup_5hh8aj_k$(1481383706);
        if ($breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0) {
          SocialBar(false, $composer_0, 0, 1);
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_0 = margin(Companion_getInstance_1(), VOID, $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) < 0 ? get_px(20) : get_px(0));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.sections.MainText.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-238507801, true, MainText$lambda$lambda($breakpoint), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.sections.MainText.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_103(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_104($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MainText$lambda_0($breakpoint, $$changed) {
    return function ($composer, $force) {
      MainText($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MainImage$lambda($$changed) {
    return function ($composer, $force) {
      MainImage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PortfolioSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-624372260);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-624372260, $changed, -1, 'id.haaweejee.landingpage.sections.PortfolioSection (PortfolioSection.kt:38)');
      }
      var tmp = padding_2(maxWidth(id(Companion_getInstance_1(), Section_Portfolio_getInstance().get_id_kntnx8_k$()), get_px(2880)), get_px(120));
      var tmp_0 = TopCenter_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$PortfolioSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(PortfolioSection$lambda($changed));
    }
  }
  function PortfolioContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1240079560);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1240079560, $changed, -1, 'id.haaweejee.landingpage.sections.PortfolioContent (PortfolioSection.kt:51)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_0 = CenterHorizontally_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.PortfolioContent.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-734128769, true, PortfolioContent$lambda(breakpoint), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.PortfolioContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_108(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp, null, tmp_0, null, tmp0, $composer_0, 24576, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(PortfolioContent$lambda_0($changed));
    }
  }
  function PortfolioCards(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-879902865);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-879902865, $dirty, -1, 'id.haaweejee.landingpage.sections.PortfolioCards (PortfolioSection.kt:69)');
      }
      var tmp = scrollBehavior(overflow(margin_1(maxWidth(padding_2(fillMaxWidth(id(Companion_getInstance_1(), 'scrollableContainer')), VOID, VOID, get_px(25)), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(950) : breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) > 0 ? get_px(625) : get_px(300)), VOID, VOID, get_px(25)), Companion_getInstance_10().get_Hidden_viqel_k$()), Companion_getInstance_11().get_Smooth_4edjo7_k$());
      Row(tmp, null, null, null, ComposableSingletons$PortfolioSectionKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(PortfolioCards$lambda(breakpoint, $changed));
    }
  }
  function PortfolioNavigation($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(170417881);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(170417881, $changed, -1, 'id.haaweejee.landingpage.sections.PortfolioNavigation (PortfolioSection.kt:95)');
      }
      var tmp = fillMaxWidth(Companion_getInstance_1());
      var tmp_0 = Center_getInstance_0();
      Row(tmp, tmp_0, null, null, ComposableSingletons$PortfolioSectionKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(PortfolioNavigation$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_105($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_1$lambda_ozf5($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1389931806, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-1.<anonymous> (PortfolioSection.kt:46)');
      }
      PortfolioContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_106($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_2$lambda_subghc($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(609031474, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-2.<anonymous> (PortfolioSection.kt:84)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = get_entries_1().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'id.haaweejee.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-2.<anonymous>.<anonymous>' call
        var tmp = margin_0(Companion_getInstance_1(), VOID, !element.equals(Portfolio_Two_getInstance()) ? get_px(25) : get_px(0));
        PortfolioCard(tmp, element, null, $composer_0, 0, 4);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_107($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_3$lambda_dd64fl($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1539652406, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-3.<anonymous> (PortfolioSection.kt:100)');
      }
      var tmp = cursor(margin_0(toModifier(get_PortfolioArrowIconStyle(), $composer_0, 6), VOID, get_px(40)), Companion_getInstance_5().get_Pointer_m64vg4_k$());
      $composer_0.startReplaceGroup_5hh8aj_k$(1069009920);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-3.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      FaArrowLeft(onClick(tmp, tmp0_group), IconSize_LG_getInstance(), $composer_0, 48, 0);
      var tmp_2 = cursor(toModifier(get_PortfolioArrowIconStyle(), $composer_0, 6), Companion_getInstance_5().get_Pointer_m64vg4_k$());
      $composer_0.startReplaceGroup_5hh8aj_k$(1069021405);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-3.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      FaArrowRight(onClick(tmp_2, tmp1_group), IconSize_LG_getInstance(), $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk(it) {
    var tmp0_safe_receiver = document.getElementById('scrollableContainer');
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.scrollBy(-325.0, 0.0);
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk_0(it) {
    var tmp0_safe_receiver = document.getElementById('scrollableContainer');
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.scrollBy(325.0, 0.0);
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$PortfolioSectionKt() {
    ComposableSingletons$PortfolioSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_105(composableLambdaInstance(-1389931806, false, ComposableSingletons$PortfolioSectionKt$lambda_1$lambda_ozf5));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_106(composableLambdaInstance(609031474, false, ComposableSingletons$PortfolioSectionKt$lambda_2$lambda_subghc));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_107(composableLambdaInstance(1539652406, false, ComposableSingletons$PortfolioSectionKt$lambda_3$lambda_dd64fl));
  }
  protoOf(ComposableSingletons$PortfolioSectionKt).get_lambda_1_kgubpq_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$PortfolioSectionKt).get_lambda_2_ib40yb_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$PortfolioSectionKt).get_lambda_3_dy1ocs_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$PortfolioSectionKt_instance;
  function ComposableSingletons$PortfolioSectionKt_getInstance() {
    if (ComposableSingletons$PortfolioSectionKt_instance == null)
      new ComposableSingletons$PortfolioSectionKt();
    return ComposableSingletons$PortfolioSectionKt_instance;
  }
  function PortfolioSection$lambda($$changed) {
    return function ($composer, $force) {
      PortfolioSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PortfolioContent$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-734128769, $changed, -1, 'id.haaweejee.landingpage.sections.PortfolioContent.<anonymous> (PortfolioSection.kt:58)');
        }
        var tmp_0 = margin_1(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(25));
        var tmp_1 = Section_Portfolio_getInstance();
        SectionTitle(tmp_0, tmp_1, null, $composer_0, 48, 4);
        PortfolioCards($breakpoint, $composer_0, 0);
        PortfolioNavigation($composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_108($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PortfolioContent$lambda_0($$changed) {
    return function ($composer, $force) {
      PortfolioContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PortfolioCards$lambda($breakpoint, $$changed) {
    return function ($composer, $force) {
      PortfolioCards($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PortfolioNavigation$lambda($$changed) {
    return function ($composer, $force) {
      PortfolioNavigation($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ServiceSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1722389814);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1722389814, $changed, -1, 'id.haaweejee.landingpage.sections.ServiceSection (ServiceSection.kt:25)');
      }
      var tmp = padding_2(maxWidth(id(Companion_getInstance_1(), Section_Service_getInstance().get_id_kntnx8_k$()), get_px(2880)), get_px(50));
      var tmp_0 = TopCenter_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$ServiceSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ServiceSection$lambda($changed));
    }
  }
  function ServiceContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-184047838);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-184047838, $changed, -1, 'id.haaweejee.landingpage.sections.ServiceContent (ServiceSection.kt:38)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_0 = CenterHorizontally_getInstance();
      Column(tmp, null, tmp_0, null, ComposableSingletons$ServiceSectionKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 24576, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ServiceContent$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_109($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ServiceSectionKt$lambda_1$lambda_vjhl50($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(724272444, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$ServiceSectionKt.lambda-1.<anonymous> (ServiceSection.kt:33)');
      }
      ServiceContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_110($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$ServiceSectionKt$lambda_2$lambda_anzzrx($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1766230210, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$ServiceSectionKt.lambda-2.<anonymous> (ServiceSection.kt:53)');
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = get_entries_3();
      var tmp$ret$0 = copyToArray(this_0);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = take(tmp$ret$0, 3).iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'id.haaweejee.landingpage.sections.ComposableSingletons$ServiceSectionKt.lambda-2.<anonymous>.<anonymous>' call
        ServiceCard(element, $composer_0, 0);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_111($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ServiceSectionKt$lambda_3$lambda_i5mhaa($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1616211111, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$ServiceSectionKt.lambda-3.<anonymous> (ServiceSection.kt:45)');
      }
      SectionTitle(margin_1(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(20)), Section_Service_getInstance(), CenterHorizontally_getInstance(), $composer_0, 48, 0);
      var tmp = numColumns(1, 2, 3);
      SimpleGrid(tmp, null, null, null, ComposableSingletons$ServiceSectionKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ServiceSectionKt() {
    ComposableSingletons$ServiceSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_109(composableLambdaInstance(724272444, false, ComposableSingletons$ServiceSectionKt$lambda_1$lambda_vjhl50));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_110(composableLambdaInstance(1766230210, false, ComposableSingletons$ServiceSectionKt$lambda_2$lambda_anzzrx));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_111(composableLambdaInstance(-1616211111, false, ComposableSingletons$ServiceSectionKt$lambda_3$lambda_i5mhaa));
  }
  protoOf(ComposableSingletons$ServiceSectionKt).get_lambda_1_kgubpq_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$ServiceSectionKt).get_lambda_2_ib40yb_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$ServiceSectionKt).get_lambda_3_dy1ocs_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$ServiceSectionKt_instance;
  function ComposableSingletons$ServiceSectionKt_getInstance() {
    if (ComposableSingletons$ServiceSectionKt_instance == null)
      new ComposableSingletons$ServiceSectionKt();
    return ComposableSingletons$ServiceSectionKt_instance;
  }
  function ServiceSection$lambda($$changed) {
    return function ($composer, $force) {
      ServiceSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ServiceContent$lambda($$changed) {
    return function ($composer, $force) {
      ServiceContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function TestimonialSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-250492278);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-250492278, $changed, -1, 'id.haaweejee.landingpage.sections.TestimonialSection (TestimonialSection.kt:47)');
      }
      var tmp = padding_1(maxWidth(id(Companion_getInstance_1(), Section_Testimonial_getInstance().get_id_kntnx8_k$()), get_px(2880)), get_px(100));
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$TestimonialSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(TestimonialSection$lambda($changed));
    }
  }
  function TestimonialContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(486344310);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(486344310, $changed, -1, 'id.haaweejee.landingpage.sections.TestimonialContent (TestimonialSection.kt:60)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-1846360758);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.TestimonialContent.<anonymous>' call
        var value = mutableStateOf(0);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var selectedPage$delegate = tmp0_group;
      var tmp_1 = fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_2 = CenterHorizontally_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.TestimonialContent.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-156775507, true, TestimonialContent$lambda_1(breakpoint, selectedPage$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.TestimonialContent.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_113(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp_1, null, tmp_2, null, tmp0, $composer_0, 24576, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(TestimonialContent$lambda_2($changed));
    }
  }
  function TestimonialCards(breakpoint, selectedPage, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(31382208);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(selectedPage) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(31382208, $dirty, -1, 'id.haaweejee.landingpage.sections.TestimonialCards (TestimonialSection.kt:89)');
      }
      var testimonial1 = listOf([Testimonial_First_getInstance(), Testimonial_Third_getInstance(), Testimonial_Five_getInstance()]);
      var testimonial2 = listOf([Testimonial_Second_getInstance(), Testimonial_Four_getInstance(), Testimonial_Six_getInstance()]);
      var tmp0_modifier = margin_1(fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(90) : get_percent(100)), VOID, VOID, get_px(40));
      var tmp1_numColumns = numColumns(1, VOID, 2);
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.TestimonialCards.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(463647785, true, TestimonialCards$lambda(testimonial1, breakpoint, selectedPage, testimonial2), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.TestimonialCards.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_116(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SimpleGrid(tmp1_numColumns, tmp0_modifier, null, null, tmp0, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(TestimonialCards$lambda_0(breakpoint, selectedPage, $changed));
    }
  }
  function TestimonialNavigation(selectedPage, onNavigate, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1854911377);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(selectedPage) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onNavigate) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1854911377, $dirty, -1, 'id.haaweejee.landingpage.sections.TestimonialNavigation (TestimonialSection.kt:181)');
      }
      var tmp = fillMaxWidth(Companion_getInstance_1());
      var tmp_0 = Center_getInstance_0();
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.TestimonialNavigation.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-223996494, true, TestimonialNavigation$lambda(selectedPage, onNavigate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.sections.TestimonialNavigation.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_117(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Row(tmp, tmp_0, null, null, tmp0, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(TestimonialNavigation$lambda_0(selectedPage, onNavigate, $changed));
    }
  }
  function setVisibility(selectedPage, testimonial) {
    var tmp;
    switch (testimonial.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = selectedPage === 0 ? Companion_getInstance_4().get_Visible_yikvpz_k$() : Companion_getInstance_4().get_Hidden_viqel_k$();
        break;
      case 1:
        tmp = selectedPage === 0 ? Companion_getInstance_4().get_Visible_yikvpz_k$() : Companion_getInstance_4().get_Hidden_viqel_k$();
        break;
      case 2:
        tmp = selectedPage === 1 ? Companion_getInstance_4().get_Visible_yikvpz_k$() : Companion_getInstance_4().get_Hidden_viqel_k$();
        break;
      case 3:
        tmp = selectedPage === 1 ? Companion_getInstance_4().get_Visible_yikvpz_k$() : Companion_getInstance_4().get_Hidden_viqel_k$();
        break;
      case 4:
        tmp = selectedPage === 2 ? Companion_getInstance_4().get_Visible_yikvpz_k$() : Companion_getInstance_4().get_Hidden_viqel_k$();
        break;
      case 5:
        tmp = selectedPage === 2 ? Companion_getInstance_4().get_Visible_yikvpz_k$() : Companion_getInstance_4().get_Hidden_viqel_k$();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function setOpacity(selectedPage, testimonial) {
    var tmp;
    switch (testimonial.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = selectedPage === 0 ? get_percent(100) : get_percent(0);
        break;
      case 1:
        tmp = selectedPage === 0 ? get_percent(100) : get_percent(0);
        break;
      case 2:
        tmp = selectedPage === 1 ? get_percent(100) : get_percent(0);
        break;
      case 3:
        tmp = selectedPage === 1 ? get_percent(100) : get_percent(0);
        break;
      case 4:
        tmp = selectedPage === 2 ? get_percent(100) : get_percent(0);
        break;
      case 5:
        tmp = selectedPage === 2 ? get_percent(100) : get_percent(0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ComposableLambda$invoke$ref_112($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$TestimonialSectionKt$lambda_1$lambda_dqfz6u($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1178490000, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$TestimonialSectionKt.lambda-1.<anonymous> (TestimonialSection.kt:55)');
      }
      TestimonialContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$TestimonialSectionKt() {
    ComposableSingletons$TestimonialSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_112(composableLambdaInstance(1178490000, false, ComposableSingletons$TestimonialSectionKt$lambda_1$lambda_dqfz6u));
  }
  protoOf(ComposableSingletons$TestimonialSectionKt).get_lambda_1_kgubpq_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$TestimonialSectionKt_instance;
  function ComposableSingletons$TestimonialSectionKt_getInstance() {
    if (ComposableSingletons$TestimonialSectionKt_instance == null)
      new ComposableSingletons$TestimonialSectionKt();
    return ComposableSingletons$TestimonialSectionKt_instance;
  }
  function TestimonialContent$lambda($selectedPage$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedPage', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectedPage$delegate.get_value_j01efc_k$();
  }
  function TestimonialContent$lambda_0($selectedPage$delegate, _set____db54di) {
    getLocalDelegateReference('selectedPage', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $selectedPage$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function TestimonialSection$lambda($$changed) {
    return function ($composer, $force) {
      TestimonialSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function TestimonialContent$lambda$lambda($selectedPage$delegate) {
    return function (index) {
      TestimonialContent$lambda_0($selectedPage$delegate, index);
      return Unit_getInstance();
    };
  }
  function TestimonialContent$lambda_1($breakpoint, $selectedPage$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-156775507, $changed, -1, 'id.haaweejee.landingpage.sections.TestimonialContent.<anonymous> (TestimonialSection.kt:69)');
        }
        SectionTitle(margin_1(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(25)), Section_Testimonial_getInstance(), CenterHorizontally_getInstance(), $composer_0, 48, 0);
        TestimonialCards($breakpoint, TestimonialContent$lambda($selectedPage$delegate), $composer_0, 0);
        var tmp_0 = TestimonialContent$lambda($selectedPage$delegate);
        $composer_0.startReplaceGroup_5hh8aj_k$(-1104722944);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.sections.TestimonialContent.<anonymous>.<anonymous>.<anonymous>' call
          var value = TestimonialContent$lambda$lambda($selectedPage$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        TestimonialNavigation(tmp_0, tmp0_group, $composer_0, 48);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_113($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function TestimonialContent$lambda_2($$changed) {
    return function ($composer, $force) {
      TestimonialContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function TestimonialCards$lambda$lambda($testimonial1, $breakpoint, $selectedPage) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1423870929, $changed, -1, 'id.haaweejee.landingpage.sections.TestimonialCards.<anonymous>.<anonymous> (TestimonialSection.kt:99)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = $testimonial1.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'id.haaweejee.landingpage.sections.TestimonialCards.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          TestimonialCard(transition_0(transition_0(opacity(visibility(margin_0(Companion_getInstance_1(), VOID, $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) > 0 ? get_px(40) : get_px(0), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(0) : get_px(40)), setVisibility($selectedPage, element)), setOpacity($selectedPage, element)), Companion_getInstance_6().of$default_tua0if_k$('visibility', get_ms(300))), Companion_getInstance_6().of$default_tua0if_k$('opacity', get_ms(300))), element, $breakpoint, $composer_0, 0, 0);
        }
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_114($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function TestimonialCards$lambda$lambda_0($testimonial2, $breakpoint, $selectedPage) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-422324506, $changed, -1, 'id.haaweejee.landingpage.sections.TestimonialCards.<anonymous>.<anonymous> (TestimonialSection.kt:136)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = $testimonial2.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'id.haaweejee.landingpage.sections.TestimonialCards.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          TestimonialCard(transition_0(transition_0(opacity(visibility(margin_0(Companion_getInstance_1(), VOID, $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) > 0 ? get_px(40) : get_px(0), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(0) : get_px(40)), setVisibility($selectedPage, element)), setOpacity($selectedPage, element)), Companion_getInstance_6().of$default_tua0if_k$('visibility', get_ms(300))), Companion_getInstance_6().of$default_tua0if_k$('opacity', get_ms(300))), element, $breakpoint, $composer_0, 0, 0);
        }
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_115($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function TestimonialCards$lambda($testimonial1, $breakpoint, $selectedPage, $testimonial2) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(463647785, $changed, -1, 'id.haaweejee.landingpage.sections.TestimonialCards.<anonymous> (TestimonialSection.kt:98)');
        }
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.sections.TestimonialCards.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1423870929, true, TestimonialCards$lambda$lambda($testimonial1, $breakpoint, $selectedPage), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.sections.TestimonialCards.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_114(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Box(null, null, null, tmp0, $composer_0, 3072, 7);
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.sections.TestimonialCards.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(-422324506, true, TestimonialCards$lambda$lambda_0($testimonial2, $breakpoint, $selectedPage), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'id.haaweejee.landingpage.sections.TestimonialCards.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_115(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Box(null, null, null, tmp0_0, $composer_0, 3072, 7);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_116($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function TestimonialCards$lambda_0($breakpoint, $selectedPage, $$changed) {
    return function ($composer, $force) {
      TestimonialCards($breakpoint, $selectedPage, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function TestimonialNavigation$lambda$lambda($onNavigate, $index) {
    return function (it) {
      $onNavigate($index);
      return Unit_getInstance();
    };
  }
  function TestimonialNavigation$lambda($selectedPage, $onNavigate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-223996494, $changed, -1, 'id.haaweejee.landingpage.sections.TestimonialNavigation.<anonymous> (TestimonialSection.kt:186)');
        }
        // Inline function 'kotlin.repeat' call
        var inductionVariable = 0;
        if (inductionVariable < 3)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'id.haaweejee.landingpage.sections.TestimonialNavigation.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_0 = backgroundColor(borderRadius(size(cursor(margin_0(Companion_getInstance_1(), VOID, get_px(10)), Companion_getInstance_5().get_Pointer_m64vg4_k$()), get_px(12)), get_px(50)), $selectedPage === index ? Theme_Primary_getInstance().get_rgb_18ix0c_k$() : Theme_LightGray_getInstance().get_rgb_18ix0c_k$());
            $composer_0.startReplaceGroup_5hh8aj_k$(1067849108);
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid = !!($composer_0.changed_ga7h3f_k$($onNavigate) | $composer_0.changed_kpusro_k$(index));
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it = $composer_0.rememberedValue_4dg93v_k$();
            var tmp_1;
            if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
              // Inline function 'id.haaweejee.landingpage.sections.TestimonialNavigation.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value = TestimonialNavigation$lambda$lambda($onNavigate, index);
              $composer_0.updateRememberedValue_l1wh71_k$(value);
              tmp_1 = value;
            } else {
              tmp_1 = it;
            }
            var tmp_2 = tmp_1;
            var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
            $composer_0.endReplaceGroup_ek144q_k$();
            var tmp_3 = onClick(tmp_0, tmp0_group);
            Box(tmp_3, null, null, null, $composer_0, 0, 14);
          }
           while (inductionVariable < 3);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_117($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function TestimonialNavigation$lambda_0($selectedPage, $onNavigate, $$changed) {
    return function ($composer, $force) {
      TestimonialNavigation($selectedPage, $onNavigate, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_AboutImageStyle() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    return AboutImageStyle;
  }
  var AboutImageStyle;
  function get_AboutTextStyle() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    return AboutTextStyle;
  }
  var AboutTextStyle;
  function get_ProgrammingCardStyle() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    return ProgrammingCardStyle;
  }
  var ProgrammingCardStyle;
  function AboutImageStyle$lambda($this$CssStyle) {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    $this$CssStyle.base_y8uu8g_k$(AboutImageStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(AboutImageStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function AboutImageStyle$lambda$lambda() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    var tmp = Companion_getInstance_1();
    return transition(rotate(borderRadius(styleModifier(tmp, AboutImageStyle$lambda$lambda$lambda), get_px(0)), get_deg(0)), [Companion_getInstance_6().of$default_ntndlf_k$(Companion_getInstance_16().get_All_18jx7s_k$(), get_ms(200))]);
  }
  function AboutImageStyle$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    filter($this$styleModifier, [grayscale(get_percent(100))]);
    return Unit_getInstance();
  }
  function AboutImageStyle$lambda$lambda_0() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    var tmp = Companion_getInstance_1();
    return rotate(borderRadius(styleModifier(tmp, AboutImageStyle$lambda$lambda$lambda_0), get_px(100)), get_deg(10));
  }
  function AboutImageStyle$lambda$lambda$lambda_0($this$styleModifier) {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    filter($this$styleModifier, [grayscale(get_percent(0))]);
    return Unit_getInstance();
  }
  function AboutTextStyle$lambda($this$CssStyle) {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    $this$CssStyle.base_y8uu8g_k$(AboutTextStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(AboutTextStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function AboutTextStyle$lambda$lambda() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    return opacity(Companion_getInstance_1(), get_percent(50));
  }
  function AboutTextStyle$lambda$lambda_0() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    return opacity(Companion_getInstance_1(), get_percent(100));
  }
  function ProgrammingCardStyle$lambda($this$CssStyle) {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    $this$CssStyle.base_y8uu8g_k$(ProgrammingCardStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(ProgrammingCardStyle$lambda$lambda_0);
    $this$CssStyle.cssRule_fe6cwq_k$(' > #iconBox', ProgrammingCardStyle$lambda$lambda_1);
    $this$CssStyle.cssRule_fe6cwq_k$(':hover > #iconBox', ProgrammingCardStyle$lambda$lambda_2);
    return Unit_getInstance();
  }
  function ProgrammingCardStyle$lambda$lambda() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_7();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(transition_0(transition_0(color(backgroundColor(border(tmp, tmp_0, 'solid', Theme_LighterGray_getInstance().get_rgb_18ix0c_k$()), Theme_White_getInstance().get_rgb_18ix0c_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), Companion_getInstance_6().of$default_tua0if_k$('border', get_ms(200))), Companion_getInstance_6().of$default_tua0if_k$('background', get_ms(200))), Companion_getInstance_6().of$default_tua0if_k$('color', get_ms(200)));
  }
  function ProgrammingCardStyle$lambda$lambda_0() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_7();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return color(backgroundColor(border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Theme_White_getInstance().get_rgb_18ix0c_k$());
  }
  function ProgrammingCardStyle$lambda$lambda_1() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    return transition_0(backgroundColor(Companion_getInstance_1(), Colors_getInstance().get_Transparent_cxh4g9_k$()), Companion_getInstance_6().of$default_tua0if_k$('background', get_ms(200)));
  }
  function ProgrammingCardStyle$lambda$lambda_2() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    return backgroundColor(Companion_getInstance_1(), Colors_getInstance().get_White_ij46ow_k$());
  }
  var properties_initialized_AboutSectionStyle_kt_yveo53;
  function _init_properties_AboutSectionStyle_kt__9u1h15() {
    if (!properties_initialized_AboutSectionStyle_kt_yveo53) {
      properties_initialized_AboutSectionStyle_kt_yveo53 = true;
      AboutImageStyle = CssStyle(VOID, AboutImageStyle$lambda);
      AboutTextStyle = CssStyle(VOID, AboutTextStyle$lambda);
      ProgrammingCardStyle = CssStyle(VOID, ProgrammingCardStyle$lambda);
    }
  }
  function get_BackToTopButtonStyle() {
    _init_properties_BackToTopButtonStyle_kt__9iyayc();
    return BackToTopButtonStyle;
  }
  var BackToTopButtonStyle;
  function BackToTopButtonStyle$lambda($this$CssStyle) {
    _init_properties_BackToTopButtonStyle_kt__9iyayc();
    $this$CssStyle.base_y8uu8g_k$(BackToTopButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(BackToTopButtonStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function BackToTopButtonStyle$lambda$lambda() {
    _init_properties_BackToTopButtonStyle_kt__9iyayc();
    return transition(rotate(Companion_getInstance_1(), get_deg(180)), [Companion_getInstance_6().of$default_tua0if_k$('rotate', get_ms(300))]);
  }
  function BackToTopButtonStyle$lambda$lambda_0() {
    _init_properties_BackToTopButtonStyle_kt__9iyayc();
    return rotate(Companion_getInstance_1(), get_deg(0));
  }
  var properties_initialized_BackToTopButtonStyle_kt_t0ipg2;
  function _init_properties_BackToTopButtonStyle_kt__9iyayc() {
    if (!properties_initialized_BackToTopButtonStyle_kt_t0ipg2) {
      properties_initialized_BackToTopButtonStyle_kt_t0ipg2 = true;
      BackToTopButtonStyle = CssStyle(VOID, BackToTopButtonStyle$lambda);
    }
  }
  function get_InputStyle() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    return InputStyle;
  }
  var InputStyle;
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    $this$CssStyle.base_y8uu8g_k$(InputStyle$lambda$lambda);
    var tmp = get_focus($this$CssStyle);
    tmp.invoke_ts7809_k$(InputStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle);
    tmp_0.invoke_ts7809_k$(InputStyle$lambda$lambda_1);
    return Unit_getInstance();
  }
  function InputStyle$lambda$lambda() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_7();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp, tmp_0, 'solid', Theme_LightGray_getInstance().get_rgb_18ix0c_k$()), [Companion_getInstance_6().of$default_tua0if_k$('border', get_ms(200))]);
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_7();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().get_rgb_18ix0c_k$());
  }
  function InputStyle$lambda$lambda_1() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_7();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().get_rgb_18ix0c_k$());
  }
  var properties_initialized_ContactSectionStyle_kt_8orhq4;
  function _init_properties_ContactSectionStyle_kt__ofhc2i() {
    if (!properties_initialized_ContactSectionStyle_kt_8orhq4) {
      properties_initialized_ContactSectionStyle_kt_8orhq4 = true;
      InputStyle = CssStyle(VOID, InputStyle$lambda);
    }
  }
  function get_NavigationItemStyle() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return NavigationItemStyle;
  }
  var NavigationItemStyle;
  function get_LogoStyle() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return LogoStyle;
  }
  var LogoStyle;
  function get_SocialLinkStyle() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return SocialLinkStyle;
  }
  var SocialLinkStyle;
  function get_GithubLinkStyle() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return GithubLinkStyle;
  }
  var GithubLinkStyle;
  function get_UpworkLinkStyle() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return UpworkLinkStyle;
  }
  var UpworkLinkStyle;
  function get_MainButtonStyle() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return MainButtonStyle;
  }
  var MainButtonStyle;
  function get_MainButtonCVStyle() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return MainButtonCVStyle;
  }
  var MainButtonCVStyle;
  function get_MainImageStyle() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return MainImageStyle;
  }
  var MainImageStyle;
  function NavigationItemStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.base_y8uu8g_k$(NavigationItemStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(NavigationItemStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function NavigationItemStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    var tmp = Companion_getInstance_1();
    return transition(color(styleModifier(tmp, NavigationItemStyle$lambda$lambda$lambda), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), [Companion_getInstance_6().of$default_tua0if_k$('color', get_ms(200))]);
  }
  function NavigationItemStyle$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$styleModifier.property_npxg1h_k$('--bs-link-color', Theme_Secondary_getInstance().get_rgb_18ix0c_k$());
    return Unit_getInstance();
  }
  function NavigationItemStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    var tmp = Companion_getInstance_1();
    return color(styleModifier(tmp, NavigationItemStyle$lambda$lambda$lambda_0), Theme_Primary_getInstance().get_rgb_18ix0c_k$());
  }
  function NavigationItemStyle$lambda$lambda$lambda_0($this$styleModifier) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$styleModifier.property_npxg1h_k$('--bs-link-hover-color', Theme_Primary_getInstance().get_rgb_18ix0c_k$());
    return Unit_getInstance();
  }
  function LogoStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.base_y8uu8g_k$(LogoStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(LogoStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function LogoStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    var tmp = Companion_getInstance_1();
    return transition(transform(tmp, LogoStyle$lambda$lambda$lambda), [Companion_getInstance_6().of$default_tua0if_k$('transform', get_ms(200))]);
  }
  function LogoStyle$lambda$lambda$lambda($this$transform) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$transform.rotate_utl8m_k$(get_deg(0));
    return Unit_getInstance();
  }
  function LogoStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    var tmp = Companion_getInstance_1();
    return transform(tmp, LogoStyle$lambda$lambda$lambda_0);
  }
  function LogoStyle$lambda$lambda$lambda_0($this$transform) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$transform.rotate_utl8m_k$(get_deg(-10));
    return Unit_getInstance();
  }
  function SocialLinkStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.base_y8uu8g_k$(SocialLinkStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(SocialLinkStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SocialLinkStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return transition(color(Companion_getInstance_1(), Theme_Gray_getInstance().get_rgb_18ix0c_k$()), [Companion_getInstance_6().of$default_tua0if_k$('color', get_ms(200))]);
  }
  function SocialLinkStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return color(Companion_getInstance_1(), Theme_Primary_getInstance().get_rgb_18ix0c_k$());
  }
  function GithubLinkStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.base_y8uu8g_k$(GithubLinkStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(GithubLinkStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function GithubLinkStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return transition(color(Companion_getInstance_1(), Theme_Gray_getInstance().get_rgb_18ix0c_k$()), [Companion_getInstance_6().of$default_tua0if_k$('color', get_ms(200))]);
  }
  function GithubLinkStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return color(Companion_getInstance_1(), Colors_getInstance().get_Black_i7mvue_k$());
  }
  function UpworkLinkStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.base_y8uu8g_k$(UpworkLinkStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(UpworkLinkStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function UpworkLinkStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return transition(color(Companion_getInstance_1(), Theme_Gray_getInstance().get_rgb_18ix0c_k$()), [Companion_getInstance_6().of$default_tua0if_k$('color', get_ms(200))]);
  }
  function UpworkLinkStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return color(Companion_getInstance_1(), rgba(21, 168, 0, 1.0));
  }
  function MainButtonStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.base_y8uu8g_k$(MainButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(MainButtonStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function MainButtonStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return transition(width(Companion_getInstance_1(), get_px(100)), [Companion_getInstance_6().of$default_tua0if_k$('width', get_ms(200))]);
  }
  function MainButtonStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return width(Companion_getInstance_1(), get_px(120));
  }
  function MainButtonCVStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.base_y8uu8g_k$(MainButtonCVStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(MainButtonCVStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function MainButtonCVStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return transition(width(Companion_getInstance_1(), get_px(150)), [Companion_getInstance_6().of$default_tua0if_k$('width', get_ms(200))]);
  }
  function MainButtonCVStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return width(Companion_getInstance_1(), get_px(180));
  }
  function MainImageStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.base_y8uu8g_k$(MainImageStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function MainImageStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    var tmp = Companion_getInstance_1();
    return styleModifier(tmp, MainImageStyle$lambda$lambda$lambda);
  }
  function MainImageStyle$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_MainSectionStyle_kt__i45i63();
    filter_0($this$styleModifier, MainImageStyle$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function MainImageStyle$lambda$lambda$lambda$lambda($this$filter) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$filter.grayscale_jgyvp1_k$(get_percent(100));
    return Unit_getInstance();
  }
  var properties_initialized_MainSectionStyle_kt_msr6ux;
  function _init_properties_MainSectionStyle_kt__i45i63() {
    if (!properties_initialized_MainSectionStyle_kt_msr6ux) {
      properties_initialized_MainSectionStyle_kt_msr6ux = true;
      NavigationItemStyle = CssStyle(VOID, NavigationItemStyle$lambda);
      LogoStyle = CssStyle(VOID, LogoStyle$lambda);
      SocialLinkStyle = CssStyle(VOID, SocialLinkStyle$lambda);
      GithubLinkStyle = CssStyle(VOID, GithubLinkStyle$lambda);
      UpworkLinkStyle = CssStyle(VOID, UpworkLinkStyle$lambda);
      MainButtonStyle = CssStyle(VOID, MainButtonStyle$lambda);
      MainButtonCVStyle = CssStyle(VOID, MainButtonCVStyle$lambda);
      MainImageStyle = CssStyle(VOID, MainImageStyle$lambda);
    }
  }
  function get_PortfolioSectionStyle() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return PortfolioSectionStyle;
  }
  var PortfolioSectionStyle;
  function get_PortfolioArrowIconStyle() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return PortfolioArrowIconStyle;
  }
  var PortfolioArrowIconStyle;
  function PortfolioSectionStyle$lambda($this$CssStyle) {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    $this$CssStyle.cssRule_fe6cwq_k$(' > #columnParent > #boxParent > #greenOverlay', PortfolioSectionStyle$lambda$lambda);
    $this$CssStyle.cssRule_fe6cwq_k$(':hover > #columnParent > #boxParent > #greenOverlay', PortfolioSectionStyle$lambda$lambda_0);
    $this$CssStyle.cssRule_fe6cwq_k$(' > #columnParent > #boxParent > #greenOverlay > #linkIcon', PortfolioSectionStyle$lambda$lambda_1);
    $this$CssStyle.cssRule_fe6cwq_k$(':hover > #columnParent > #boxParent > #greenOverlay > #linkIcon', PortfolioSectionStyle$lambda$lambda_2);
    $this$CssStyle.cssRule_fe6cwq_k$(' > #columnParent > #portfolioTitle', PortfolioSectionStyle$lambda$lambda_3);
    $this$CssStyle.cssRule_fe6cwq_k$(':hover > #columnParent > #portfolioTitle', PortfolioSectionStyle$lambda$lambda_4);
    $this$CssStyle.cssRule_fe6cwq_k$(' > #columnParent > #portfolioDesc', PortfolioSectionStyle$lambda$lambda_5);
    $this$CssStyle.cssRule_fe6cwq_k$(':hover > #columnParent > #portfolioDesc', PortfolioSectionStyle$lambda$lambda_6);
    return Unit_getInstance();
  }
  function PortfolioSectionStyle$lambda$lambda() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return transition(width(Companion_getInstance_1(), get_px(0)), [Companion_getInstance_6().of$default_tua0if_k$('width', get_ms(500))]);
  }
  function PortfolioSectionStyle$lambda$lambda_0() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return width(Companion_getInstance_1(), get_px(300));
  }
  function PortfolioSectionStyle$lambda$lambda_1() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return visibility(Companion_getInstance_1(), Companion_getInstance_4().get_Hidden_viqel_k$());
  }
  function PortfolioSectionStyle$lambda$lambda_2() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return visibility(Companion_getInstance_1(), Companion_getInstance_4().get_Visible_yikvpz_k$());
  }
  function PortfolioSectionStyle$lambda$lambda_3() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return transition(transition(translateX(color(Companion_getInstance_1(), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), get_percent(0)), [Companion_getInstance_6().of$default_tua0if_k$('color', get_ms(200))]), [Companion_getInstance_6().of$default_tua0if_k$('translate', get_ms(200))]);
  }
  function PortfolioSectionStyle$lambda$lambda_4() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return translateX(color(Companion_getInstance_1(), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), get_percent(5));
  }
  function PortfolioSectionStyle$lambda$lambda_5() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return transition(translateX(Companion_getInstance_1(), get_percent(0)), [Companion_getInstance_6().of$default_tua0if_k$('translate', get_ms(200))]);
  }
  function PortfolioSectionStyle$lambda$lambda_6() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return translateX(Companion_getInstance_1(), get_percent(5));
  }
  function PortfolioArrowIconStyle$lambda($this$CssStyle) {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    $this$CssStyle.base_y8uu8g_k$(PortfolioArrowIconStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(PortfolioArrowIconStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function PortfolioArrowIconStyle$lambda$lambda() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return transition_0(color(Companion_getInstance_1(), Theme_Gray_getInstance().get_rgb_18ix0c_k$()), Companion_getInstance_6().of$default_tua0if_k$('color', get_ms(200)));
  }
  function PortfolioArrowIconStyle$lambda$lambda_0() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return color(Companion_getInstance_1(), Theme_Primary_getInstance().get_rgb_18ix0c_k$());
  }
  var properties_initialized_PortofolioSectionStyle_kt_ysjnl5;
  function _init_properties_PortofolioSectionStyle_kt__10rcx3() {
    if (!properties_initialized_PortofolioSectionStyle_kt_ysjnl5) {
      properties_initialized_PortofolioSectionStyle_kt_ysjnl5 = true;
      PortfolioSectionStyle = CssStyle(VOID, PortfolioSectionStyle$lambda);
      PortfolioArrowIconStyle = CssStyle(VOID, PortfolioArrowIconStyle$lambda);
    }
  }
  function get_ServiceCardStyle() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return ServiceCardStyle;
  }
  var ServiceCardStyle;
  function ServiceCardStyle$lambda($this$CssStyle) {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    $this$CssStyle.base_y8uu8g_k$(ServiceCardStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(ServiceCardStyle$lambda$lambda_0);
    $this$CssStyle.cssRule_fe6cwq_k$(' > #iconBox', ServiceCardStyle$lambda$lambda_1);
    $this$CssStyle.cssRule_fe6cwq_k$(':hover > #iconBox', ServiceCardStyle$lambda$lambda_2);
    $this$CssStyle.cssRule_fe6cwq_k$(' > p', ServiceCardStyle$lambda$lambda_3);
    $this$CssStyle.cssRule_fe6cwq_k$(':hover > p', ServiceCardStyle$lambda$lambda_4);
    return Unit_getInstance();
  }
  function ServiceCardStyle$lambda$lambda() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_7();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(transition_0(backgroundColor(border(tmp, tmp_0, 'solid', Theme_LighterGray_getInstance().get_rgb_18ix0c_k$()), Theme_White_getInstance().get_rgb_18ix0c_k$()), Companion_getInstance_6().of$default_tua0if_k$('border', get_ms(200))), Companion_getInstance_6().of$default_tua0if_k$('background', get_ms(200)));
  }
  function ServiceCardStyle$lambda$lambda_0() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_7();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return backgroundColor(border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Theme_Primary_getInstance().get_rgb_18ix0c_k$());
  }
  function ServiceCardStyle$lambda$lambda_1() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return transition_0(backgroundColor(Companion_getInstance_1(), Colors_getInstance().get_Transparent_cxh4g9_k$()), Companion_getInstance_6().of$default_tua0if_k$('background', get_ms(200)));
  }
  function ServiceCardStyle$lambda$lambda_2() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return backgroundColor(Companion_getInstance_1(), Colors_getInstance().get_White_ij46ow_k$());
  }
  function ServiceCardStyle$lambda$lambda_3() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return transition_0(color(Companion_getInstance_1(), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), Companion_getInstance_6().of$default_tua0if_k$('color', get_ms(200)));
  }
  function ServiceCardStyle$lambda$lambda_4() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return color(Companion_getInstance_1(), Colors_getInstance().get_White_ij46ow_k$());
  }
  var properties_initialized_ServiceSectionStyle_kt_3weqi9;
  function _init_properties_ServiceSectionStyle_kt__us8nvz() {
    if (!properties_initialized_ServiceSectionStyle_kt_3weqi9) {
      properties_initialized_ServiceSectionStyle_kt_3weqi9 = true;
      ServiceCardStyle = CssStyle(VOID, ServiceCardStyle$lambda);
    }
  }
  function get_SECTION_WIDTH() {
    return SECTION_WIDTH;
  }
  var SECTION_WIDTH;
  function get_BACKGROUND_IMAGE() {
    return BACKGROUND_IMAGE;
  }
  var BACKGROUND_IMAGE;
  function get_LOGO_IMAGE() {
    return LOGO_IMAGE;
  }
  var LOGO_IMAGE;
  function get_MAIN_IMAGE() {
    return MAIN_IMAGE;
  }
  var MAIN_IMAGE;
  function get_FONT_FAMILY() {
    return FONT_FAMILY;
  }
  var FONT_FAMILY;
  function ObserveViewPortEntered(sectionId, distanceFromTop, onViewPortEntered, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1241413219);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(sectionId) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_qyxff6_k$(distanceFromTop) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onViewPortEntered) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1241413219, $dirty, -1, 'id.haaweejee.landingpage.util.ObserveViewPortEntered (Function.kt:18)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(202158165);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.util.ObserveViewPortEntered.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var viewportEntered$delegate = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(202160137);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.util.ObserveViewPortEntered.<anonymous>' call
        var value_0 = EventListener(ObserveViewPortEntered$lambda_1(sectionId, distanceFromTop, viewportEntered$delegate));
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var listener = tmp1_group;
      var tmp_3 = ObserveViewPortEntered$lambda(viewportEntered$delegate);
      $composer_0.startReplaceGroup_5hh8aj_k$(202169259);
      var tmp4 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 896) === 256 | $composer_0.changedInstance_s1wkiy_k$(listener));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = tmp4.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'id.haaweejee.landingpage.util.ObserveViewPortEntered.<anonymous>' call
        var value_1 = ObserveViewPortEntered$slambda_0(onViewPortEntered, listener, viewportEntered$delegate, null);
        tmp4.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(tmp_3, tmp2_group, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(ObserveViewPortEntered$lambda_2(sectionId, distanceFromTop, onViewPortEntered, $changed));
    }
  }
  function animateNumbers(number, delay, onUpdate, $completion) {
    delay = delay === VOID ? new Long(10, 0) : delay;
    var tmp = new $animateNumbersCOROUTINE$0(number, delay, onUpdate, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function ObserveViewPortEntered$lambda($viewportEntered$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $viewportEntered$delegate.get_value_j01efc_k$();
  }
  function ObserveViewPortEntered$lambda_0($viewportEntered$delegate, _set____db54di) {
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $viewportEntered$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ObserveViewPortEntered$lambda_1($sectionId, $distanceFromTop, $viewportEntered$delegate) {
    return function (it) {
      var tmp0_safe_receiver = document.getElementById($sectionId);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getBoundingClientRect();
      var top = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.top;
      var tmp;
      if (!(top == null) && top < $distanceFromTop) {
        ObserveViewPortEntered$lambda_0($viewportEntered$delegate, true);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ObserveViewPortEntered$slambda($onViewPortEntered, $listener, $viewportEntered$delegate, resultContinuation) {
    this.$onViewPortEntered_1 = $onViewPortEntered;
    this.$listener_1 = $listener;
    this.$viewportEntered$delegate_1 = $viewportEntered$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ObserveViewPortEntered$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ObserveViewPortEntered$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ObserveViewPortEntered$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          if (ObserveViewPortEntered$lambda(this.$viewportEntered$delegate_1)) {
            this.$onViewPortEntered_1();
            window.removeEventListener('scroll', this.$listener_1);
          } else {
            window.addEventListener('scroll', this.$listener_1);
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(ObserveViewPortEntered$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new ObserveViewPortEntered$slambda(this.$onViewPortEntered_1, this.$listener_1, this.$viewportEntered$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(ObserveViewPortEntered$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ObserveViewPortEntered$slambda_0($onViewPortEntered, $listener, $viewportEntered$delegate, resultContinuation) {
    var i = new ObserveViewPortEntered$slambda($onViewPortEntered, $listener, $viewportEntered$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ObserveViewPortEntered$lambda_2($sectionId, $distanceFromTop, $onViewPortEntered, $$changed) {
    return function ($composer, $force) {
      ObserveViewPortEntered($sectionId, $distanceFromTop, $onViewPortEntered, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function $animateNumbersCOROUTINE$0(number, delay, onUpdate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.number_1 = number;
    this.delay_1 = delay;
    this.onUpdate_1 = onUpdate;
  }
  protoOf($animateNumbersCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_0 = this;
            tmp_0.tmp00__1 = numberRangeToNumber(0, this.number_1);
            this.this1__1 = this.tmp00__1;
            this._iterator_2_yqohr2__1 = this.this1__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this._iterator_2_yqohr2__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.element3__1 = this._iterator_2_yqohr2__1.next_20eer_k$();
            var tmp_1 = this;
            tmp_1.tmp14__1 = this.element3__1;
            this.it5__1 = this.tmp14__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = delay(this.delay_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.onUpdate_1(this.it5__1);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  //region block: init
  SECTION_WIDTH = 2880;
  BACKGROUND_IMAGE = 'background.svg';
  LOGO_IMAGE = 'logo.svg';
  MAIN_IMAGE = 'main_image.png';
  FONT_FAMILY = 'Roboto';
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=landingpage.js.map
