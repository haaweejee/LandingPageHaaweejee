(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-kobweb-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-silk-icons-fa.js', './kotlinx-coroutines-core.js', './kobweb-frontend-compose-html-ext.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-kobweb-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-silk-icons-fa.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
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
    if (typeof globalThis['kobweb-frontend-silk-icons-fa'] === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'kobweb-frontend-silk-icons-fa' was not found. Please, check whether 'kobweb-frontend-silk-icons-fa' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'id.haaweejee.landingpage:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'id.haaweejee.landingpage:site'.");
    }
    globalThis['id.haaweejee.landingpage:site'] = factory(typeof globalThis['id.haaweejee.landingpage:site'] === 'undefined' ? {} : globalThis['id.haaweejee.landingpage:site'], globalThis['kobweb-frontend-kobweb-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-silk-foundation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-internal-html-core-runtime'], globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kobweb-frontend-kobweb-silk'], globalThis['html-html-core'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-silk-icons-fa'], globalThis['kotlinx-coroutines-core'], globalThis['kobweb-frontend-compose-html-ext'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(function (_, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobwebx_silk_icons_fa, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var AppGlobals_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var to = kotlin_kotlin.$_$.w9;
  var mapOf = kotlin_kotlin.$_$.x3;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var removePrefix = kotlin_kotlin.$_$.e8;
  var remove = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var ensureNotNull = kotlin_kotlin.$_$.n9;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var DeferringHost = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var initMetadataForObject = kotlin_kotlin.$_$.l6;
  var removeSuffix = kotlin_kotlin.$_$.f8;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.e;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var rememberBreakpoint = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d4;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var Bottom_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var End_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z3;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var IconSize_LG_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.j;
  var FaArrowUp = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.c;
  var KMutableProperty0 = kotlin_kotlin.$_$.g7;
  var THROW_ISE = kotlin_kotlin.$_$.g9;
  var getLocalDelegateReference = kotlin_kotlin.$_$.b6;
  var CoroutineImpl = kotlin_kotlin.$_$.m5;
  var protoOf = kotlin_kotlin.$_$.x6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var isInterface = kotlin_kotlin.$_$.p6;
  var initMetadataForLambda = kotlin_kotlin.$_$.k6;
  var VOID = kotlin_kotlin.$_$.e;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k3;
  var visibility = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.b4;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var Label = kotlin_org_jetbrains_compose_html_html_core.$_$.v3;
  var Text_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var attrsModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var Input = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var TextArea = kotlin_org_jetbrains_compose_html_html_core.$_$.a4;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var numColumns = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var SimpleGrid = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g3;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var times = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var Center_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var Companion_instance_6 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var SpaceBetween_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var End_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var copyToArray = kotlin_kotlin.$_$.b3;
  var take = kotlin_kotlin.$_$.n4;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f3;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var IconSize_XL_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.k;
  var FaBars = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.d;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.z1;
  var Long = kotlin_kotlin.$_$.c9;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x4;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var FaXmark = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.i;
  var OpenLinkStrategy_IN_PLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var Companion_instance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c3;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var Companion_instance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var OpenLinkStrategy_IN_NEW_TAB_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var Link_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.d;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b3;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var Image_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m3;
  var width_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var Start_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a4;
  var equals = kotlin_kotlin.$_$.z5;
  var Companion_instance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var CenterHorizontally_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var borderRadius_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var maxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var FaLinkedin = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.f;
  var FaGithub = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.e;
  var FaUpwork = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.h;
  var FaMedium = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.g;
  var enumEntries = kotlin_kotlin.$_$.o5;
  var Enum = kotlin_kotlin.$_$.y8;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  var rgb = kotlin_org_jetbrains_compose_html_html_core.$_$.e3;
  var Top_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var padding_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var TopCenter_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b4;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_instance_14 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w2;
  var fontStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var numberToInt = kotlin_kotlin.$_$.v6;
  var get_deg = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var transform = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var take_0 = kotlin_kotlin.$_$.o4;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var FaArrowLeft = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.a;
  var FaArrowRight = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.b;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var rotate = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var Companion_instance_15 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h3;
  var grayscale = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var filter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var get_focus = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var rgba = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var filter_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var numberRangeToNumber = kotlin_kotlin.$_$.t6;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.i6;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForObject(ComposableSingletons$BackToTopButtonKt, 'ComposableSingletons$BackToTopButtonKt');
  initMetadataForLambda(BackToTopButton$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$ContactFormKt, 'ComposableSingletons$ContactFormKt');
  initMetadataForObject(ComposableSingletons$HeaderKt, 'ComposableSingletons$HeaderKt');
  initMetadataForLambda(OverflowMenu$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(OverflowMenu$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(OverflowMenu$lambda$lambda$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(OverflowMenu$lambda$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$PortfolioCardKt, 'ComposableSingletons$PortfolioCardKt');
  initMetadataForLambda(SectionTitle$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$SocialBarKt, 'ComposableSingletons$SocialBarKt');
  initMetadataForClass(Experience, 'Experience', VOID, Enum);
  initMetadataForClass(Portfolio, 'Portfolio', VOID, Enum);
  initMetadataForClass(Section, 'Section', VOID, Enum);
  initMetadataForClass(Service, 'Service', VOID, Enum);
  initMetadataForClass(Skill, 'Skill', VOID, Enum);
  initMetadataForClass(ProgrammingLanguage, 'ProgrammingLanguage', VOID, Enum);
  initMetadataForClass(Theme, 'Theme', VOID, Enum);
  initMetadataForObject(ComposableSingletons$AboutSectionKt, 'ComposableSingletons$AboutSectionKt');
  initMetadataForLambda(AboutMe$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$ContactSectionKt, 'ComposableSingletons$ContactSectionKt');
  initMetadataForLambda(ContactContent$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$ExperienceSectionKt, 'ComposableSingletons$ExperienceSectionKt');
  initMetadataForObject(ComposableSingletons$FooterSectionKt, 'ComposableSingletons$FooterSectionKt');
  initMetadataForObject(ComposableSingletons$MainSectionKt, 'ComposableSingletons$MainSectionKt');
  initMetadataForObject(ComposableSingletons$PortfolioSectionKt, 'ComposableSingletons$PortfolioSectionKt');
  initMetadataForObject(ComposableSingletons$ServiceSectionKt, 'ComposableSingletons$ServiceSectionKt');
  initMetadataForLambda(ObserveViewPortEntered$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($animateNumbersCOROUTINE$0, CoroutineImpl);
  //endregion
  function main() {
    AppGlobals_instance.z2w(mapOf(to('title', 'Landing Page')));
    Companion_instance.k2y('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.d2z(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.f2z(remove(Companion_instance, removePrefix(window.location.href, window.origin)), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable('root', ComposableLambda$invoke$ref_2(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(188215112, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:16)');
      }
      HomePage($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(it) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
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
      var invalid = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.f1f();
      var tmp;
      if (invalid || it_0 === Companion_getInstance().n18_1) {
        // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.q1f(value);
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
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-440954647, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous> (main.kt:61)');
        }
        $it($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
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
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.e3n_1 = ComposableLambda$invoke$ref(composableLambdaInstance(188215112, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.f3n_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(854823496, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda(ctx) {
    ctx.w2x_1.c2z('/', ComposableSingletons$MainKt_getInstance().e3n_1);
    return Unit_instance;
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.g2z(removeSuffix(removeSuffix($this$addRouteInterceptor.w2y_1, '.html'), '.htm'));
    return Unit_instance;
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.u32_1.b38('about-image', get_AboutImageStyle());
    ctx.u32_1.b38('about-text', get_AboutTextStyle());
    ctx.u32_1.b38('programming-card', get_ProgrammingCardStyle());
    ctx.u32_1.b38('back-to-top-button', get_BackToTopButtonStyle());
    ctx.u32_1.b38('input', get_InputStyle());
    ctx.u32_1.b38('navigation-item', get_NavigationItemStyle());
    ctx.u32_1.b38('logo', get_LogoStyle());
    ctx.u32_1.b38('social-link', get_SocialLinkStyle());
    ctx.u32_1.b38('github-link', get_GithubLinkStyle());
    ctx.u32_1.b38('upwork-link', get_UpworkLinkStyle());
    ctx.u32_1.b38('main-button', get_MainButtonStyle());
    ctx.u32_1.b38('main-button-cv', get_MainButtonCVStyle());
    ctx.u32_1.b38('main-image', get_MainImageStyle());
    ctx.u32_1.b38('portfolio-section', get_PortfolioSectionStyle());
    ctx.u32_1.b38('portfolio-arrow-icon', get_PortfolioArrowIconStyle());
    ctx.u32_1.b38('service-card', get_ServiceCardStyle());
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-1190994075, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:61)');
        }
        $router.z2y(ComposableSingletons$MainKt_getInstance().f3n_1, $composer_0, 6, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
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
      var invalid = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1f();
      var tmp;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.q1f(value);
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
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function mainWrapper() {
    main();
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1674047329);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
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
      var invalid = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1f();
      var tmp;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.AppEntry.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.q1f(value);
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
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(AppEntry$lambda_0(content, $changed));
    }
  }
  function AppEntry$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-1819595110, $changed, -1, 'id.haaweejee.landingpage.AppEntry.<anonymous>.<anonymous> (AppEntry.kt:16)');
        }
        $content($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
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
        var invalid = $composer_1.f15(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.f1f();
        var tmp_1;
        if (invalid || it === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.AppEntry.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.q1f(value);
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
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function BackToTopButton($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(224640804);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(224640804, $changed, -1, 'id.haaweejee.landingpage.components.BackToTopButton (BackToTopButton.kt:42)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.v1d(-176384132);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1f();
      var tmp;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.BackToTopButton.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.x1d();
      var scroll$delegate = tmp0_group;
      $composer_0.v1d(-176382066);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.f1f();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.BackToTopButton.<anonymous>' call
        var value_0 = BackToTopButton$slambda_0(scroll$delegate, null);
        this_1.q1f(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.x1d();
      LaunchedEffect(Unit_instance, tmp1_group, $composer_0, 6);
      var tmp_3 = fillMaxSize(Companion_instance_0);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_4 = zIndex(position(tmp_3, 'fixed'), 1);
      $composer_0.v1d(-176371404);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.f1f();
      var tmp_5;
      if (false || it_1 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.BackToTopButton.<anonymous>' call
        var value_1 = BackToTopButton$lambda_1;
        this_2.q1f(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_1;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.x1d();
      var tmp_7 = styleModifier(tmp_4, tmp2_group);
      var tmp_8 = Bottom_instance;
      var tmp_9 = End_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.BackToTopButton.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1749567525, true, BackToTopButton$lambda_2(breakpoint, scroll$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_1.f1f();
      var tmp_10;
      if (invalid || it_2 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.BackToTopButton.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.q1f(value_2);
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
      $composer_0.e18();
    }
    var tmp3_safe_receiver = $composer_0.y1f();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.l1l(BackToTopButton$lambda_3($changed));
    }
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$BackToTopButtonKt$lambda_1$lambda_8gu7iz($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-1893605919, $changed, -1, 'id.haaweejee.landingpage.components.ComposableSingletons$BackToTopButtonKt.lambda-1.<anonymous> (BackToTopButton.kt:86)');
      }
      FaArrowUp(color(Companion_instance_0, Colors_instance.u31()), IconSize_LG_getInstance(), $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$BackToTopButtonKt() {
    ComposableSingletons$BackToTopButtonKt_instance = this;
    var tmp = this;
    tmp.g3n_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-1893605919, false, ComposableSingletons$BackToTopButtonKt$lambda_1$lambda_8gu7iz));
  }
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
    return $scroll$delegate.e2();
  }
  function BackToTopButton$lambda_0($scroll$delegate, _set____db54di) {
    getLocalDelegateReference('scroll', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $scroll$delegate.is(_set____db54di);
    return Unit_instance;
  }
  function BackToTopButton$slambda$lambda($scroll$delegate) {
    return function (it) {
      var tmp0_safe_receiver = document.documentElement;
      BackToTopButton$lambda_0($scroll$delegate, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.scrollTop);
      return Unit_instance;
    };
  }
  function BackToTopButton$slambda($scroll$delegate, resultContinuation) {
    this.p3n_1 = $scroll$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BackToTopButton$slambda).b1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.c1n($this$LaunchedEffect, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(BackToTopButton$slambda).q9 = function (p1, $completion) {
    return this.b1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BackToTopButton$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        if (tmp === 0) {
          this.x8_1 = 1;
          var tmp_0 = window;
          tmp_0.addEventListener('scroll', BackToTopButton$slambda$lambda(this.p3n_1));
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BackToTopButton$slambda).c1n = function ($this$LaunchedEffect, completion) {
    var i = new BackToTopButton$slambda(this.p3n_1, completion);
    i.q3n_1 = $this$LaunchedEffect;
    return i;
  };
  function BackToTopButton$slambda_0($scroll$delegate, resultContinuation) {
    var i = new BackToTopButton$slambda($scroll$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.b1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BackToTopButton$lambda_1($this$styleModifier) {
    $this$styleModifier.s2j('pointer-events', 'none');
    return Unit_instance;
  }
  function BackToTopButton$lambda$lambda(it) {
    var tmp0_safe_receiver = document.documentElement;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.scroll(0.0, 0.0);
    }
    return Unit_instance;
  }
  function BackToTopButton$lambda$lambda_0($this$styleModifier) {
    $this$styleModifier.s2j('pointer-events', 'auto');
    return Unit_instance;
  }
  function BackToTopButton$lambda_2($breakpoint, $scroll$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-1749567525, $changed, -1, 'id.haaweejee.landingpage.components.BackToTopButton.<anonymous> (BackToTopButton.kt:66)');
        }
        var tmp_0 = cursor(backgroundColor(margin(borderRadius(visibility(size(toModifier(get_BackToTopButtonStyle(), $composer_0, 6), get_px(50)), !(BackToTopButton$lambda($scroll$delegate) == null) && ensureNotNull(BackToTopButton$lambda($scroll$delegate)) > 400.0 ? Companion_instance_2.d2u() : Companion_instance_2.q2s()), get_percent(20)), VOID, $breakpoint.n2(Breakpoint_SM_getInstance()) <= 0 ? get_px(30) : get_px(40), $breakpoint.n2(Breakpoint_SM_getInstance()) <= 0 ? get_px(30) : get_px(40)), Theme_Primary_getInstance().u3n_1), Companion_instance_3.t2q());
        $composer_0.v1d(-499700012);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.f1f();
        var tmp_1;
        if (false || it === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.BackToTopButton.<anonymous>.<anonymous>.<anonymous>' call
          var value = BackToTopButton$lambda$lambda;
          $composer_0.q1f(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.x1d();
        var tmp_3 = onClick(tmp_0, tmp0_group);
        $composer_0.v1d(-499696645);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.f1f();
        var tmp_4;
        if (false || it_0 === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.BackToTopButton.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = BackToTopButton$lambda$lambda_0;
          $composer_0.q1f(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.x1d();
        var tmp_6 = styleModifier(tmp_3, tmp1_group);
        var tmp_7 = Center_instance;
        Box(tmp_6, tmp_7, null, ComposableSingletons$BackToTopButtonKt_getInstance().g3n_1, $composer_0, 3072, 4);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_instance;
        }
        tmp = tmp_8;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function BackToTopButton$lambda_3($$changed) {
    return function ($composer, $force) {
      BackToTopButton($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ContactForm(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1533034899);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f15(breakpoint) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1533034899, $dirty, -1, 'id.haaweejee.landingpage.components.ContactForm (ContactForm.kt:45)');
      }
      $composer_0.v1d(-834813799);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1f();
      var tmp;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>' call
        var value = mutableStateOf('');
        this_0.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.x1d();
      var inputName$delegate = tmp0_group;
      $composer_0.v1d(-834812007);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.f1f();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>' call
        var value_0 = mutableStateOf('');
        this_1.q1f(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.x1d();
      var inputMessage$delegate = tmp1_group;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1600591734, true, ContactForm$lambda_3(breakpoint, inputName$delegate, inputMessage$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.f1f();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_12(dispatchReceiver);
        $composer_1.q1f(value_1);
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
      $composer_0.e18();
    }
    var tmp2_safe_receiver = $composer_0.y1f();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.l1l(ContactForm$lambda_4(breakpoint, $changed));
    }
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableSingletons$ContactFormKt() {
    ComposableSingletons$ContactFormKt_instance = this;
    var tmp = this;
    tmp.v3n_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(1817916299, false, ComposableSingletons$ContactFormKt$lambda_1$lambda_27lvxi));
    var tmp_0 = this;
    tmp_0.w3n_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(2134243522, false, ComposableSingletons$ContactFormKt$lambda_2$lambda_qm0l4p));
    var tmp_1 = this;
    tmp_1.x3n_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(1496547478, false, ComposableSingletons$ContactFormKt$lambda_3$lambda_flgzs8));
  }
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
    return $inputName$delegate.e2();
  }
  function ContactForm$lambda_0($inputName$delegate, _set____db54di) {
    getLocalDelegateReference('inputName', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $inputName$delegate.is(_set____db54di);
    return Unit_instance;
  }
  function ContactForm$lambda_1($inputMessage$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('inputMessage', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $inputMessage$delegate.e2();
  }
  function ContactForm$lambda_2($inputMessage$delegate, _set____db54di) {
    getLocalDelegateReference('inputMessage', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $inputMessage$delegate.is(_set____db54di);
    return Unit_instance;
  }
  function ContactForm$lambda$lambda($this$attrsModifier) {
    $this$attrsModifier.p2c('placeholder', 'Full Name');
    $this$attrsModifier.p2c('name', 'name');
    $this$attrsModifier.p2c('required', 'true');
    return Unit_instance;
  }
  function ContactForm$lambda$lambda_0($inputName$delegate) {
    return function (it) {
      ContactForm$lambda_0($inputName$delegate, it);
      console.log(it);
      return Unit_instance;
    };
  }
  function ContactForm$lambda$lambda_1($this$attrsModifier) {
    $this$attrsModifier.p2c('placeholder', 'Your Message');
    $this$attrsModifier.p2c('name', 'message');
    $this$attrsModifier.p2c('required', 'true');
    return Unit_instance;
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
      return Unit_instance;
    };
  }
  function ContactForm$lambda$lambda_2($inputMessage$delegate, $inputName$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(1712432400, $changed, -1, 'id.haaweejee.landingpage.components.ContactForm.<anonymous>.<anonymous> (ContactForm.kt:107)');
        }
        var tmp_0 = cursor(color(backgroundColor(borderRadius(border(height(toModifier(get_MainButtonStyle(), $composer_0, 6), get_px(40)), get_px(0)), get_px(5)), Theme_Primary_getInstance().u3n_1), Colors_instance.u31()), Companion_instance_3.t2q());
        $composer_0.v1d(1511020911);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.f1f();
        var tmp_1;
        if (false || it === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ContactForm$lambda$lambda$lambda($inputMessage$delegate, $inputName$delegate);
          $composer_0.q1f(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.x1d();
        Button(toAttrs(onClick(tmp_0, tmp0_group)), ComposableSingletons$ContactFormKt_getInstance().x3n_1, $composer_0, 48, 0);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ContactForm$lambda_3($breakpoint, $inputName$delegate, $inputMessage$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-1600591734, $changed, -1, 'id.haaweejee.landingpage.components.ContactForm.<anonymous> (ContactForm.kt:51)');
        }
        var tmp0_attrs = toAttrs(classNames(Companion_instance_0, ['form-label']));
        Label('inputName', tmp0_attrs, ComposableSingletons$ContactFormKt_getInstance().v3n_1, $composer_0, 390, 0);
        var tmp1_type = Text_getInstance();
        var tmp_0 = boxShadow(backgroundColor(width(margin_0(classNames(id(toModifier(get_InputStyle(), $composer_0, 6), 'inputName'), ['form-control']), VOID, VOID, get_px(10)), $breakpoint.n2(Breakpoint_MD_getInstance()) > 0 ? get_px(500) : get_px(250)), Theme_LighterGray_getInstance().u3n_1), get_px(0), get_px(0), get_px(0), get_px(0), null);
        $composer_0.v1d(-1663526857);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.f1f();
        var tmp_1;
        if (false || it === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>.<anonymous>.<anonymous>' call
          var value = ContactForm$lambda$lambda;
          $composer_0.q1f(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.x1d();
        var tmp2_modifier = attrsModifier(tmp_0, tmp0_group);
        var tmp3_value = ContactForm$lambda($inputName$delegate);
        $composer_0.v1d(-1663520921);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.f1f();
        var tmp_3;
        if (false || it_0 === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ContactForm$lambda$lambda_0($inputName$delegate);
          $composer_0.q1f(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.x1d();
        Input(tmp1_type, tmp3_value, tmp1_group, tmp2_modifier, null, null, null, false, false, false, false, false, null, null, null, null, null, null, $composer_0, 384, 0, 262128);
        var tmp4_attrs = toAttrs(classNames(Companion_instance_0, ['form-label']));
        Label('inputMessage', tmp4_attrs, ComposableSingletons$ContactFormKt_getInstance().w3n_1, $composer_0, 390, 0);
        var tmp_5 = boxShadow(backgroundColor(width(margin_0(height(classNames(id(toModifier(get_InputStyle(), $composer_0, 6), 'inputMessage'), ['form-control']), get_px(150)), VOID, VOID, get_px(20)), $breakpoint.n2(Breakpoint_MD_getInstance()) > 0 ? get_px(500) : get_px(250)), Theme_LighterGray_getInstance().u3n_1), get_px(0), get_px(0), get_px(0), get_px(0), null);
        $composer_0.v1d(-1663496707);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.f1f();
        var tmp_6;
        if (false || it_1 === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ContactForm$lambda$lambda_1;
          $composer_0.q1f(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = it_1;
        }
        var tmp_7 = tmp_6;
        var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_0.x1d();
        TextArea(null, toAttrs(attrsModifier(tmp_5, tmp2_group)), $composer_0, 0, 1);
        var tmp_8 = fillMaxWidth(Companion_instance_0);
        var tmp_9 = Center_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1712432400, true, ContactForm$lambda$lambda_2($inputMessage$delegate, $inputName$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.f15(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_1.f1f();
        var tmp_10;
        if (invalid || it_2 === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.ContactForm.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_11(dispatchReceiver);
          $composer_1.q1f(value_2);
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
          tmp_12 = Unit_instance;
        }
        tmp = tmp_12;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ContactForm$lambda_4($breakpoint, $$changed) {
    return function ($composer, $force) {
      ContactForm($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ExperienceCard(breakpoint, active, experience, animatedMargin, $composer, $changed, $default) {
    var active_0 = {_v: active};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(557020202);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f15(breakpoint) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.t1e(active_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f15(experience) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.s1e(animatedMargin) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.o1d()) {
      if (!(($default & 2) === 0)) {
        active_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(557020202, $dirty, -1, 'id.haaweejee.landingpage.components.ExperienceCard (ExperienceCard.kt:53)');
      }
      var tmp0_modifier = maxWidth(fillMaxWidth(Companion_instance_0), breakpoint.n2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(60) : get_percent(90));
      var tmp1_numColumns = numColumns(1, VOID, 2);
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.ExperienceCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(185328275, true, ExperienceCard$lambda(active_0, experience, breakpoint, animatedMargin), $composer_0, 54);
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
        // Inline function 'id.haaweejee.landingpage.components.ExperienceCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_13(dispatchReceiver);
        $composer_1.q1f(value);
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
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(ExperienceCard$lambda_0(breakpoint, active_0, experience, animatedMargin, $changed, $default));
    }
  }
  function ExperienceDescription(active, description, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1257452269);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.t1e(active) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f15(description) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-1257452269, $dirty, -1, 'id.haaweejee.landingpage.components.ExperienceDescription (ExperienceCard.kt:77)');
      }
      var tmp = backgroundColor(padding(margin_1(fillMaxWidth(Companion_instance_0), get_px(14)), get_px(14)), active ? Theme_Primary_getInstance().u3n_1 : Theme_LighterGray_getInstance().u3n_1);
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.ExperienceDescription.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-848939443, true, ExperienceDescription$lambda(active, description), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1f();
      var tmp_0;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.ExperienceDescription.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_15(dispatchReceiver);
        $composer_1.q1f(value);
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
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(ExperienceDescription$lambda_0(active, description, $changed));
    }
  }
  function ExperienceDetails(breakpoint, active, experience, animatedMargin, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-989077208);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f15(breakpoint) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.t1e(active) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f15(experience) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.s1e(animatedMargin) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-989077208, $dirty, -1, 'id.haaweejee.landingpage.components.ExperienceDetails (ExperienceCard.kt:107)');
      }
      var tmp = margin(fillMaxWidth(Companion_instance_0), VOID, VOID, VOID, breakpoint.n2(Breakpoint_MD_getInstance()) >= 0 ? get_px(14) : get_px(0));
      var tmp_0 = CenterVertically_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(97279109, true, ExperienceDetails$lambda(breakpoint, active, experience, animatedMargin), $composer_0, 54);
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
        // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_21(dispatchReceiver);
        $composer_1.q1f(value);
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
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(ExperienceDetails$lambda_0(breakpoint, active, experience, animatedMargin, $changed));
    }
  }
  function ExperienceNumber(active, experience, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-252476529);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.t1e(active) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f15(experience) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-252476529, $dirty, -1, 'id.haaweejee.landingpage.components.ExperienceNumber (ExperienceCard.kt:188)');
      }
      var tmp = fillMaxHeight(margin(Companion_instance_0, VOID, get_px(14)));
      var tmp_0 = Center_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(730532629, true, ExperienceNumber$lambda(active, experience), $composer_0, 54);
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
        // Inline function 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_24(dispatchReceiver);
        $composer_1.q1f(value);
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
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(ExperienceNumber$lambda_0(active, experience, $changed));
    }
  }
  function ExperienceCard$lambda($active, $experience, $breakpoint, $animatedMargin) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(185328275, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceCard.<anonymous> (ExperienceCard.kt:60)');
        }
        ExperienceDescription($active._v, $experience.c3o_1, $composer_0, 0);
        ExperienceDetails($breakpoint, $active._v, $experience, $animatedMargin, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function ExperienceCard$lambda_0($breakpoint, $active, $experience, $animatedMargin, $$changed, $$default) {
    return function ($composer, $force) {
      ExperienceCard($breakpoint, $active._v, $experience, $animatedMargin, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
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
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ExperienceDescription$lambda($active, $description) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-848939443, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceDescription.<anonymous> (ExperienceCard.kt:85)');
        }
        var tmp_0 = toAttrs(color(fontWeight(lineHeight(fontSize(fontFamily(margin_1(fillMaxWidth(Companion_instance_0), get_px(0)), ['Roboto']), get_px(14)), 1.6), Companion_instance_4.a2r()), $active ? Theme_White_getInstance().u3n_1 : Theme_Secondary_getInstance().u3n_1));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ExperienceDescription.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(2042495983, true, ExperienceDescription$lambda$lambda($description), $composer_0, 54);
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
          // Inline function 'id.haaweejee.landingpage.components.ExperienceDescription.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_14(dispatchReceiver);
          $composer_1.q1f(value);
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
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ExperienceDescription$lambda_0($active, $description, $$changed) {
    return function ($composer, $force) {
      ExperienceDescription($active, $description, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ExperienceDetails$lambda$lambda$lambda($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1608752560, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous> (ExperienceCard.kt:143)');
      }
      Text($experience.b3o_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ExperienceDetails$lambda$lambda$lambda_0($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(552419961, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous> (ExperienceCard.kt:155)');
      }
      Text($experience.f3o_1 + ' - ' + $experience.g3o_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ExperienceDetails$lambda$lambda$lambda$lambda($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1302220281, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ExperienceCard.kt:170)');
      }
      Text($experience.d3o_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ExperienceDetails$lambda$lambda$lambda_1($experience) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(205693015, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous> (ExperienceCard.kt:160)');
        }
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin_1(fillMaxWidth(Companion_instance_0), get_px(0)), ['Roboto']), get_px(14)), Companion_instance_4.a2r()), Theme_Secondary_getInstance().u3n_1));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1302220281, true, ExperienceDetails$lambda$lambda$lambda$lambda($experience), $composer_0, 54);
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
          // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_18(dispatchReceiver);
          $composer_1.q1f(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_3 = margin_0(height(Companion_instance_0, get_px(16)), get_px(6));
        Image($experience.e3o_1, tmp_3, null, null, null, null, null, $composer_0, 0, 124);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ExperienceDetails$lambda$lambda($experience) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(407635886, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous> (ExperienceCard.kt:133)');
        }
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin_1(fillMaxWidth(Companion_instance_0), get_px(0)), ['Roboto']), get_px(20)), Companion_instance_4.b2r()), Theme_Secondary_getInstance().u3n_1));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1608752560, true, ExperienceDetails$lambda$lambda$lambda($experience), $composer_0, 54);
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
          // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_16(dispatchReceiver);
          $composer_1.q1f(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_3 = toAttrs(color(fontWeight(fontSize(fontFamily(margin_1(fillMaxWidth(Companion_instance_0), get_px(0)), ['Roboto']), get_px(14)), Companion_instance_4.a2r()), Theme_Secondary_getInstance().u3n_1));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(552419961, true, ExperienceDetails$lambda$lambda$lambda_0($experience), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.f15(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.f1f();
        var tmp_4;
        if (invalid_0 || it_0 === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_17(dispatchReceiver_0);
          $composer_2.q1f(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        P(tmp_3, tmp0_0, $composer_0, 48, 0);
        var tmp_6 = margin_0(Companion_instance_0, get_px(8));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_1 = rememberComposableLambda(205693015, true, ExperienceDetails$lambda$lambda$lambda_1($experience), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.f15(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.f1f();
        var tmp_7;
        if (invalid_1 || it_1 === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_19(dispatchReceiver_1);
          $composer_3.q1f(value_1);
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
          tmp_9 = Unit_instance;
        }
        tmp = tmp_9;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ExperienceDetails$lambda($breakpoint, $active, $experience, $animatedMargin) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(97279109, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous> (ExperienceCard.kt:114)');
        }
        $composer_0.v1d(305041454);
        if ($breakpoint.n2(Breakpoint_MD_getInstance()) >= 0) {
          ExperienceNumber($active, $experience, $composer_0, 0);
        }
        $composer_0.x1d();
        var tmp_0 = transition(margin(fillMaxSize(Companion_instance_0), VOID, VOID, VOID, $breakpoint.n2(Breakpoint_SM_getInstance()) <= 0 ? get_px(0) : $animatedMargin), [Companion_instance_5.x2t('margin', get_ms(500), VOID, times($experience.m2_1, get_ms(100)))]);
        var tmp_1 = Center_instance_0;
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(407635886, true, ExperienceDetails$lambda$lambda($experience), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.f15(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.f1f();
        var tmp_2;
        if (invalid || it === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.ExperienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_20(dispatchReceiver);
          $composer_1.q1f(value);
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
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ExperienceDetails$lambda_0($breakpoint, $active, $experience, $animatedMargin, $$changed) {
    return function ($composer, $force) {
      ExperienceDetails($breakpoint, $active, $experience, $animatedMargin, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ExperienceNumber$lambda$lambda$lambda($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1939502736, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous>.<anonymous>.<anonymous> (ExperienceCard.kt:222)');
      }
      Text($experience.a3o_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ExperienceNumber$lambda$lambda($active, $experience) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-540899502, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous>.<anonymous> (ExperienceCard.kt:213)');
        }
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin_1(Companion_instance_0, get_px(0)), ['Roboto']), get_px(16)), Companion_instance_4.b2r()), $active ? Theme_White_getInstance().u3n_1 : Theme_Primary_getInstance().u3n_1));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1939502736, true, ExperienceNumber$lambda$lambda$lambda($experience), $composer_0, 54);
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
          // Inline function 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_22(dispatchReceiver);
          $composer_1.q1f(value);
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
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ExperienceNumber$lambda($active, $experience) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(730532629, $changed, -1, 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous> (ExperienceCard.kt:195)');
        }
        var tmp_0 = backgroundColor(width(fillMaxHeight(Companion_instance_0), get_px(3)), Theme_Primary_getInstance().u3n_1);
        Box(tmp_0, null, null, null, $composer_0, 0, 14);
        var tmp_1 = size(Companion_instance_0, get_px(40));
        var tmp_2 = get_px(3);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = borderRadius(backgroundColor(border(tmp_1, tmp_2, 'solid', Theme_Primary_getInstance().u3n_1), $active ? Theme_Primary_getInstance().u3n_1 : Theme_White_getInstance().u3n_1), get_percent(50));
        var tmp_4 = Center_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-540899502, true, ExperienceNumber$lambda$lambda($active, $experience), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.f15(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.f1f();
        var tmp_5;
        if (invalid || it === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.ExperienceNumber.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_23(dispatchReceiver);
          $composer_1.q1f(value);
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
          tmp_7 = Unit_instance;
        }
        tmp = tmp_7;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ExperienceNumber$lambda_0($active, $experience, $$changed) {
    return function ($composer, $force) {
      ExperienceNumber($active, $experience, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Header(onMenuClicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(2012147602);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(onMenuClicked) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(2012147602, $dirty, -1, 'id.haaweejee.landingpage.components.Header (Header.kt:28)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = margin_1(fillMaxWidth(Companion_instance_0, breakpoint.n2(Breakpoint_MD_getInstance()) > 0 ? get_percent(80) : get_percent(90)), get_px(32));
      var tmp_0 = SpaceBetween_instance;
      var tmp_1 = CenterVertically_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.Header.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1771417455, true, Header$lambda(breakpoint, onMenuClicked), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1f();
      var tmp_2;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.Header.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_26(dispatchReceiver);
        $composer_1.q1f(value);
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
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(Header$lambda_0(onMenuClicked, $changed));
    }
  }
  function LeftSide(breakpoint, onMenuClicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(218696160);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f15(breakpoint) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s1e(onMenuClicked) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(218696160, $dirty, -1, 'id.haaweejee.landingpage.components.LeftSide (Header.kt:51)');
      }
      var tmp = CenterVertically_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.LeftSide.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-284706525, true, LeftSide$lambda(breakpoint, onMenuClicked), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1f();
      var tmp_0;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.LeftSide.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_27(dispatchReceiver);
        $composer_1.q1f(value);
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
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(LeftSide$lambda_0(breakpoint, onMenuClicked, $changed));
    }
  }
  function RightSide($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(551418026);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(551418026, $changed, -1, 'id.haaweejee.landingpage.components.RightSide (Header.kt:74)');
      }
      var tmp = padding(backgroundColor(borderRadius(fillMaxWidth(Companion_instance_0), get_px(50)), Theme_White_getInstance().u3n_1), get_px(20));
      var tmp_0 = End_instance_0;
      Row(tmp, tmp_0, null, null, ComposableSingletons$HeaderKt_getInstance().h3o_1, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(RightSide$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$HeaderKt$lambda_1$lambda_fev17j($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-2028658105, $changed, -1, 'id.haaweejee.landingpage.components.ComposableSingletons$HeaderKt.lambda-1.<anonymous> (Header.kt:83)');
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = get_entries_1();
      var tmp$ret$0 = copyToArray(this_0);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = take(tmp$ret$0, 6).j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'id.haaweejee.landingpage.components.ComposableSingletons$HeaderKt.lambda-1.<anonymous>.<anonymous>' call
        var tmp0_modifier = textDecorationLine(fontSize(fontFamily(padding_0(toModifier(get_NavigationItemStyle(), $composer_0, 6), VOID, get_px(30)), ['Roboto']), get_px(18)), Companion_instance_7.w2q());
        var tmp1_path = element.n3o_1;
        var tmp2_text = element.l3o_1;
        Link(tmp1_path, tmp2_text, tmp0_modifier, null, null, null, null, null, $composer_0, 0, 248);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$HeaderKt() {
    ComposableSingletons$HeaderKt_instance = this;
    var tmp = this;
    tmp.h3o_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(-2028658105, false, ComposableSingletons$HeaderKt$lambda_1$lambda_fev17j));
  }
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
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(1771417455, $changed, -1, 'id.haaweejee.landingpage.components.Header.<anonymous> (Header.kt:37)');
        }
        LeftSide($breakpoint, $onMenuClicked, $composer_0, 0);
        if ($breakpoint.n2(Breakpoint_MD_getInstance()) > 0) {
          RightSide($composer_0, 0);
        }
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function Header$lambda_0($onMenuClicked, $$changed) {
    return function ($composer, $force) {
      Header($onMenuClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function LeftSide$lambda$lambda($onMenuClicked) {
    return function (it) {
      $onMenuClicked();
      return Unit_instance;
    };
  }
  function LeftSide$lambda($breakpoint, $onMenuClicked) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-284706525, $changed, -1, 'id.haaweejee.landingpage.components.LeftSide.<anonymous> (Header.kt:55)');
        }
        $composer_0.v1d(-1615183739);
        if ($breakpoint.n2(Breakpoint_MD_getInstance()) <= 0) {
          var tmp_0 = margin(Companion_instance_0, VOID, get_px(15));
          $composer_0.v1d(-1615178746);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_0.f15($onMenuClicked);
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.f1f();
          var tmp_1;
          if (invalid || it === Companion_getInstance().n18_1) {
            // Inline function 'id.haaweejee.landingpage.components.LeftSide.<anonymous>.<anonymous>.<anonymous>' call
            var value = LeftSide$lambda$lambda($onMenuClicked);
            $composer_0.q1f(value);
            tmp_1 = value;
          } else {
            tmp_1 = it;
          }
          var tmp_2 = tmp_1;
          var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          $composer_0.x1d();
          FaBars(onClick(tmp_0, tmp0_group), IconSize_XL_getInstance(), $composer_0, 48, 0);
        }
        $composer_0.x1d();
        var tmp0_modifier = toModifier(get_LogoStyle(), $composer_0, 6);
        var tmp1_src = 'logo.svg';
        Image(tmp1_src, tmp0_modifier, null, null, null, null, null, $composer_0, 6, 124);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function LeftSide$lambda_0($breakpoint, $onMenuClicked, $$changed) {
    return function ($composer, $force) {
      LeftSide($breakpoint, $onMenuClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function RightSide$lambda($$changed) {
    return function ($composer, $force) {
      RightSide($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function OverflowMenu(onMenuClosed, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1854163822);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(onMenuClosed) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
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
      var it = $composer_1.f1f();
      var tmp;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var wrapper = tmp1_group;
      var tmp0 = wrapper.w1l_1;
      sourceInformationMarkerEnd($composer_1);
      var scope = tmp0;
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.v1d(-2146020170);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.f1f();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>' call
        var value_0 = mutableStateOf(get_percent(-100));
        this_0.q1f(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.x1d();
      var translateX$delegate = tmp0_group;
      $composer_0.v1d(-2146018157);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.f1f();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>' call
        var value_1 = mutableStateOf(get_percent(0));
        this_1.q1f(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.x1d();
      var opacity$delegate = tmp1_group_0;
      $composer_0.v1d(-2146015562);
      var tmp8 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.f15(breakpoint) | $composer_0.s1e(scope)) | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = tmp8.f1f();
      var tmp_5;
      if (invalid || it_2 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>' call
        var value_2 = OverflowMenu$slambda_0(breakpoint, scope, translateX$delegate, opacity$delegate, onMenuClosed, null);
        tmp8.q1f(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.x1d();
      LaunchedEffect(breakpoint, tmp2_group, $composer_0, 0);
      var tmp_7 = height(fillMaxWidth(Companion_instance_0), get_vh(100));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_8 = transition(backgroundColor(opacity(zIndex(position(tmp_7, 'fixed'), 2), OverflowMenu$lambda_1(opacity$delegate)), Companion_instance_8.w30(0.5, 0.0, 0.0, 0.0)), [Companion_instance_5.x2t('opacity', get_ms(500))]);
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-212341637, true, OverflowMenu$lambda_4(breakpoint, translateX$delegate, scope, onMenuClosed, opacity$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_2.f1f();
      var tmp_9;
      if (invalid_0 || it_3 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_30(dispatchReceiver);
        $composer_2.q1f(value_3);
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
      $composer_0.e18();
    }
    var tmp3_safe_receiver = $composer_0.y1f();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.l1l(OverflowMenu$lambda_5(onMenuClosed, $changed));
    }
  }
  function OverflowMenu$lambda($translateX$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('translateX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $translateX$delegate.e2();
  }
  function OverflowMenu$lambda_0($translateX$delegate, _set____db54di) {
    getLocalDelegateReference('translateX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $translateX$delegate.is(_set____db54di);
    return Unit_instance;
  }
  function OverflowMenu$lambda_1($opacity$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('opacity', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $opacity$delegate.e2();
  }
  function OverflowMenu$lambda_2($opacity$delegate, _set____db54di) {
    getLocalDelegateReference('opacity', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $opacity$delegate.is(_set____db54di);
    return Unit_instance;
  }
  function OverflowMenu$lambda_3() {
    return EmptyCoroutineContext_getInstance();
  }
  function OverflowMenu$slambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.w3o_1 = $onMenuClosed;
    this.x3o_1 = $translateX$delegate;
    this.y3o_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverflowMenu$slambda$slambda).b1n = function ($this$launch, $completion) {
    var tmp = this.c1n($this$launch, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(OverflowMenu$slambda$slambda).q9 = function (p1, $completion) {
    return this.b1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverflowMenu$slambda$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 2;
            OverflowMenu$lambda_0(this.x3o_1, get_percent(-100));
            OverflowMenu$lambda_2(this.y3o_1, get_percent(0));
            this.w8_1 = 1;
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w3o_1();
            return Unit_instance;
          case 2:
            throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x8_1 === 2) {
          throw e;
        } else {
          this.w8_1 = this.x8_1;
          this.z8_1 = e;
        }
      }
     while (true);
  };
  protoOf(OverflowMenu$slambda$slambda).c1n = function ($this$launch, completion) {
    var i = new OverflowMenu$slambda$slambda(this.w3o_1, this.x3o_1, this.y3o_1, completion);
    i.z3o_1 = $this$launch;
    return i;
  };
  function OverflowMenu$slambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new OverflowMenu$slambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OverflowMenu$slambda($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation) {
    this.i3p_1 = $breakpoint;
    this.j3p_1 = $scope;
    this.k3p_1 = $translateX$delegate;
    this.l3p_1 = $opacity$delegate;
    this.m3p_1 = $onMenuClosed;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverflowMenu$slambda).b1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.c1n($this$LaunchedEffect, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(OverflowMenu$slambda).q9 = function (p1, $completion) {
    return this.b1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverflowMenu$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        if (tmp === 0) {
          this.x8_1 = 1;
          OverflowMenu$lambda_0(this.k3p_1, get_percent(0));
          OverflowMenu$lambda_2(this.l3p_1, get_percent(100));
          if (this.i3p_1.n2(Breakpoint_MD_getInstance()) > 0) {
            launch(this.j3p_1, VOID, VOID, OverflowMenu$slambda$slambda_0(this.m3p_1, this.k3p_1, this.l3p_1, null));
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(OverflowMenu$slambda).c1n = function ($this$LaunchedEffect, completion) {
    var i = new OverflowMenu$slambda(this.i3p_1, this.j3p_1, this.k3p_1, this.l3p_1, this.m3p_1, completion);
    i.n3p_1 = $this$LaunchedEffect;
    return i;
  };
  function OverflowMenu$slambda_0($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation) {
    var i = new OverflowMenu$slambda($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.b1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OverflowMenu$lambda$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.w3p_1 = $onMenuClosed;
    this.x3p_1 = $translateX$delegate;
    this.y3p_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverflowMenu$lambda$lambda$lambda$lambda$slambda).b1n = function ($this$launch, $completion) {
    var tmp = this.c1n($this$launch, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(OverflowMenu$lambda$lambda$lambda$lambda$slambda).q9 = function (p1, $completion) {
    return this.b1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverflowMenu$lambda$lambda$lambda$lambda$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 2;
            OverflowMenu$lambda_0(this.x3p_1, get_percent(-100));
            OverflowMenu$lambda_2(this.y3p_1, get_percent(0));
            this.w8_1 = 1;
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w3p_1();
            return Unit_instance;
          case 2:
            throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x8_1 === 2) {
          throw e;
        } else {
          this.w8_1 = this.x8_1;
          this.z8_1 = e;
        }
      }
     while (true);
  };
  protoOf(OverflowMenu$lambda$lambda$lambda$lambda$slambda).c1n = function ($this$launch, completion) {
    var i = new OverflowMenu$lambda$lambda$lambda$lambda$slambda(this.w3p_1, this.x3p_1, this.y3p_1, completion);
    i.z3p_1 = $this$launch;
    return i;
  };
  function OverflowMenu$lambda$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new OverflowMenu$lambda$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OverflowMenu$lambda$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function (it) {
      launch($scope, VOID, VOID, OverflowMenu$lambda$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, null));
      return Unit_instance;
    };
  }
  function OverflowMenu$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(62473537, $changed, -1, 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>.<anonymous> (OverflowMenu.kt:108)');
        }
        var tmp_0 = margin(cursor(Companion_instance_0, Companion_instance_3.t2q()), VOID, get_px(20), get_px(3));
        $composer_0.v1d(-1977020874);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.s1e($scope) | $composer_0.f15($onMenuClosed));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.f1f();
        var tmp_1;
        if (invalid || it === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = OverflowMenu$lambda$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate);
          $composer_0.q1f(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.x1d();
        FaXmark(onClick(tmp_0, tmp0_group), IconSize_LG_getInstance(), $composer_0, 48, 0);
        var tmp0_modifier = size(Companion_instance_0, get_px(80));
        Image('logo.svg', tmp0_modifier, null, null, null, null, null, $composer_0, 6, 124);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function OverflowMenu$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.i3q_1 = $onMenuClosed;
    this.j3q_1 = $translateX$delegate;
    this.k3q_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverflowMenu$lambda$lambda$lambda$slambda).b1n = function ($this$launch, $completion) {
    var tmp = this.c1n($this$launch, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(OverflowMenu$lambda$lambda$lambda$slambda).q9 = function (p1, $completion) {
    return this.b1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverflowMenu$lambda$lambda$lambda$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 2;
            OverflowMenu$lambda_0(this.j3q_1, get_percent(-100));
            OverflowMenu$lambda_2(this.k3q_1, get_percent(0));
            this.w8_1 = 1;
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i3q_1();
            return Unit_instance;
          case 2:
            throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x8_1 === 2) {
          throw e;
        } else {
          this.w8_1 = this.x8_1;
          this.z8_1 = e;
        }
      }
     while (true);
  };
  protoOf(OverflowMenu$lambda$lambda$lambda$slambda).c1n = function ($this$launch, completion) {
    var i = new OverflowMenu$lambda$lambda$lambda$slambda(this.i3q_1, this.j3q_1, this.k3q_1, completion);
    i.l3q_1 = $this$launch;
    return i;
  };
  function OverflowMenu$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new OverflowMenu$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OverflowMenu$lambda$lambda$lambda_0($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function (it) {
      launch($scope, VOID, VOID, OverflowMenu$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, null));
      return Unit_instance;
    };
  }
  function OverflowMenu$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-2050870812, $changed, -1, 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous> (OverflowMenu.kt:104)');
        }
        var tmp_0 = margin_0(Companion_instance_0, VOID, VOID, get_px(25));
        var tmp_1 = CenterVertically_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(62473537, true, OverflowMenu$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.f15(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.f1f();
        var tmp_2;
        if (invalid || it === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_28(dispatchReceiver);
          $composer_1.q1f(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_0, null, tmp_1, null, tmp0, $composer_0, 24576, 10);
        // Inline function 'kotlin.collections.toTypedArray' call
        var this_0 = get_entries_1();
        var tmp$ret$7 = copyToArray(this_0);
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = take(tmp$ret$7, 6).j();
        while (_iterator__ex2g4s.k()) {
          var element = _iterator__ex2g4s.l();
          // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_4 = textDecorationLine(fontWeight(fontSize(fontFamily(margin_0(toModifier(get_NavigationItemStyle(), $composer_0, 6), VOID, VOID, get_px(10)), ['Roboto']), get_px(16)), Companion_instance_4.a2r()), Companion_instance_7.w2q());
          $composer_0.v1d(-1976990186);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = !!($composer_0.s1e($scope) | $composer_0.f15($onMenuClosed));
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_0.f1f();
          var tmp_5;
          if (invalid_0 || it_0 === Companion_getInstance().n18_1) {
            // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = OverflowMenu$lambda$lambda$lambda_0($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate);
            $composer_0.q1f(value_0);
            tmp_5 = value_0;
          } else {
            tmp_5 = it_0;
          }
          var tmp_6 = tmp_5;
          var tmp0_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
          $composer_0.x1d();
          var tmp0_modifier = onClick(tmp_4, tmp0_group);
          var tmp1_path = element.n3o_1;
          var tmp2_openInternalLinksStrategy = OpenLinkStrategy_IN_PLACE_getInstance();
          var tmp3_text = element.l3o_1;
          Link(tmp1_path, tmp3_text, tmp0_modifier, null, tmp2_openInternalLinksStrategy, null, null, null, $composer_0, 24576, 232);
        }
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_instance;
        }
        tmp = tmp_7;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function OverflowMenu$lambda_4($breakpoint, $translateX$delegate, $scope, $onMenuClosed, $opacity$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-212341637, $changed, -1, 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous> (OverflowMenu.kt:93)');
        }
        var tmp_0 = transition(translateX(backgroundColor(scrollBehavior(overflow(width(padding(fillMaxHeight(Companion_instance_0), get_px(25)), $breakpoint.n2(Breakpoint_MD_getInstance()) < 0 ? get_percent(50) : get_percent(25)), Companion_instance_9.r2s()), Companion_instance_10.t2s()), Colors_instance.u31()), OverflowMenu$lambda($translateX$delegate)), [Companion_instance_5.x2t('translate', get_ms(500))]);
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-2050870812, true, OverflowMenu$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate), $composer_0, 54);
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
          // Inline function 'id.haaweejee.landingpage.components.OverflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_29(dispatchReceiver);
          $composer_1.q1f(value);
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
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function OverflowMenu$lambda_5($onMenuClosed, $$changed) {
    return function ($composer, $force) {
      OverflowMenu($onMenuClosed, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PortfolioCard(modifier, portfolio, link, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var link_0 = {_v: link};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1801431114);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f15(portfolio) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f15(link_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_0;
      }
      if (!(($default & 4) === 0)) {
        link_0._v = '';
      }
      if (isTraceInProgress()) {
        traceEventStart(-1801431114, $dirty, -1, 'id.haaweejee.landingpage.components.PortfolioCard (PortfolioCard.kt:46)');
      }
      var tmp0_modifier = textDecorationLine(toModifier(get_PortfolioSectionStyle(), $composer_0, 6), Companion_instance_7.w2q());
      var tmp1_openExternalLinksStrategy = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      var tmp = link_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(316525864, true, PortfolioCard$lambda(modifier_0, portfolio), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1f();
      var tmp_0;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_36(dispatchReceiver);
        $composer_1.q1f(value);
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
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(PortfolioCard$lambda_0(modifier_0, portfolio, link_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioCardKt$lambda_1$lambda_d17v02($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-1317593851, $changed, -1, 'id.haaweejee.landingpage.components.ComposableSingletons$PortfolioCardKt.lambda-1.<anonymous> (PortfolioCard.kt:79)');
      }
      var tmp0_modifier = size(id(Companion_instance_0, 'linkIcon'), get_px(32));
      Image('link_icon.svg', tmp0_modifier, null, null, null, null, null, $composer_0, 6, 124);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$PortfolioCardKt() {
    ComposableSingletons$PortfolioCardKt_instance = this;
    var tmp = this;
    tmp.m3q_1 = ComposableLambda$invoke$ref_31(composableLambdaInstance(-1317593851, false, ComposableSingletons$PortfolioCardKt$lambda_1$lambda_d17v02));
  }
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
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-989719477, $changed, -1, 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous> (PortfolioCard.kt:65)');
        }
        var tmp0_modifier = objectFit(size(Companion_instance_0, get_px(300)), Companion_instance_11.k2s());
        var tmp1_src = $portfolio.p3q_1;
        Image_0(tmp1_src, '', tmp0_modifier, null, null, null, null, $composer_0, 48, 120);
        var tmp_0 = backgroundColor(fillMaxHeight(id(Companion_instance_0, 'greenOverlay')), Companion_instance_8.y30(0.5, 50, 141, 215));
        var tmp_1 = Center_instance;
        Box(tmp_0, tmp_1, null, ComposableSingletons$PortfolioCardKt_getInstance().m3q_1, $composer_0, 3072, 4);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function PortfolioCard$lambda$lambda$lambda_0($portfolio) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(107640883, $changed, -1, 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous> (PortfolioCard.kt:97)');
      }
      Text($portfolio.q3q_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function PortfolioCard$lambda$lambda$lambda_1($portfolio) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(970839580, $changed, -1, 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous> (PortfolioCard.kt:111)');
      }
      Text($portfolio.r3q_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function PortfolioCard$lambda$lambda($portfolio) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(845493777, $changed, -1, 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous> (PortfolioCard.kt:58)');
        }
        var tmp_0 = margin_0(maxWidth(fillMaxWidth(id(Companion_instance_0, 'boxParent')), get_px(300)), VOID, VOID, get_px(20));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-989719477, true, PortfolioCard$lambda$lambda$lambda($portfolio), $composer_0, 54);
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
          // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_32(dispatchReceiver);
          $composer_1.q1f(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Box(tmp_0, null, null, tmp0, $composer_0, 3072, 6);
        var tmp_3 = toAttrs(fontWeight(fontSize(fontFamily(margin_1(fillMaxWidth(id(Companion_instance_0, 'portfolioTitle')), get_px(0)), ['Roboto']), get_px(18)), Companion_instance_4.b2r()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(107640883, true, PortfolioCard$lambda$lambda$lambda_0($portfolio), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.f15(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.f1f();
        var tmp_4;
        if (invalid_0 || it_0 === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_33(dispatchReceiver_0);
          $composer_2.q1f(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        P(tmp_3, tmp0_0, $composer_0, 48, 0);
        var tmp_6 = toAttrs(opacity(color(fontWeight(fontSize(fontFamily(margin_1(fillMaxWidth(id(Companion_instance_0, 'portfolioDesc')), get_px(0)), ['Roboto']), get_px(14)), Companion_instance_4.a2r()), Theme_Secondary_getInstance().u3n_1), get_percent(50)));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_1 = rememberComposableLambda(970839580, true, PortfolioCard$lambda$lambda$lambda_1($portfolio), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.f15(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.f1f();
        var tmp_7;
        if (invalid_1 || it_1 === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_34(dispatchReceiver_1);
          $composer_3.q1f(value_1);
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
          tmp_9 = Unit_instance;
        }
        tmp = tmp_9;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function PortfolioCard$lambda($modifier, $portfolio) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(316525864, $changed, -1, 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous> (PortfolioCard.kt:53)');
        }
        var tmp_0 = width_0(id($modifier._v, 'columnParent'), Companion_instance_12.v2s());
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(845493777, true, PortfolioCard$lambda$lambda($portfolio), $composer_0, 54);
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
          // Inline function 'id.haaweejee.landingpage.components.PortfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_35(dispatchReceiver);
          $composer_1.q1f(value);
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
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function PortfolioCard$lambda_0($modifier, $portfolio, $link, $$changed, $$default) {
    return function ($composer, $force) {
      PortfolioCard($modifier._v, $portfolio, $link._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SectionTitle(modifier, section, alignment, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var alignment_0 = {_v: alignment};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1836771014);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f15(section) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.s1e(alignment_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.o1d()) {
      $composer_0.y1d();
      if (($changed & 1) === 0 || $composer_0.c1e()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance_0;
        }
        if (!(($default & 4) === 0)) {
          alignment_0._v = Start_instance;
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.e18();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.z1d();
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
      var it = $composer_1.f1f();
      var tmp;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var wrapper = tmp1_group;
      var tmp0 = wrapper.w1l_1;
      sourceInformationMarkerEnd($composer_1);
      var scope = tmp0;
      $composer_0.v1d(1915192011);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.f1f();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>' call
        var value_0 = mutableStateOf(get_px(50));
        this_0.q1f(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.x1d();
      var titleMargin$delegate = tmp0_group;
      $composer_0.v1d(1915194347);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.f1f();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>' call
        var value_1 = mutableStateOf(get_px(50));
        this_1.q1f(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.x1d();
      var subTitleMargin$delegate = tmp1_group_0;
      $composer_0.v1d(1915199967);
      var tmp8 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.s1e(scope) | $composer_0.s1e(alignment_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = tmp8.f1f();
      var tmp_5;
      if (invalid || it_2 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>' call
        var value_2 = SectionTitle$lambda_4(scope, alignment_0, subTitleMargin$delegate, titleMargin$delegate);
        tmp8.q1f(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.x1d();
      ObserveViewPortEntered(section.k3o_1, 1200.0, tmp2_group, $composer_0, 48);
      var tmp_7 = modifier_0._v;
      var tmp_8 = alignment_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-2139846429, true, SectionTitle$lambda_5(alignment_0, titleMargin$delegate, section, subTitleMargin$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_2.f1f();
      var tmp_9;
      if (invalid_0 || it_3 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_39(dispatchReceiver);
        $composer_2.q1f(value_3);
        tmp_9 = value_3;
      } else {
        tmp_9 = it_3;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Column(tmp_7, null, tmp_8, null, tmp0_0, $composer_0, 24576 | 14 & $dirty | 896 & $dirty, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp3_safe_receiver = $composer_0.y1f();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.l1l(SectionTitle$lambda_6(modifier_0, section, alignment_0, $changed, $default));
    }
  }
  function SectionTitle$lambda($titleMargin$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('titleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $titleMargin$delegate.e2();
  }
  function SectionTitle$lambda_0($titleMargin$delegate, _set____db54di) {
    getLocalDelegateReference('titleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $titleMargin$delegate.is(_set____db54di);
    return Unit_instance;
  }
  function SectionTitle$lambda_1($subTitleMargin$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('subTitleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $subTitleMargin$delegate.e2();
  }
  function SectionTitle$lambda_2($subTitleMargin$delegate, _set____db54di) {
    getLocalDelegateReference('subTitleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $subTitleMargin$delegate.is(_set____db54di);
    return Unit_instance;
  }
  function SectionTitle$lambda_3() {
    return EmptyCoroutineContext_getInstance();
  }
  function SectionTitle$lambda$slambda($alignment, $subTitleMargin$delegate, $titleMargin$delegate, resultContinuation) {
    this.a3r_1 = $alignment;
    this.b3r_1 = $subTitleMargin$delegate;
    this.c3r_1 = $titleMargin$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SectionTitle$lambda$slambda).b1n = function ($this$launch, $completion) {
    var tmp = this.c1n($this$launch, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(SectionTitle$lambda$slambda).q9 = function (p1, $completion) {
    return this.b1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SectionTitle$lambda$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 3;
            SectionTitle$lambda_2(this.b3r_1, get_px(0));
            if (equals(this.a3r_1._v, Start_instance)) {
              this.w8_1 = 1;
              suspendResult = delay(new Long(100, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.w8_1 = 2;
              continue $sm;
            }

          case 1:
            this.w8_1 = 2;
            continue $sm;
          case 2:
            SectionTitle$lambda_0(this.c3r_1, get_px(0));
            return Unit_instance;
          case 3:
            throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x8_1 === 3) {
          throw e;
        } else {
          this.w8_1 = this.x8_1;
          this.z8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SectionTitle$lambda$slambda).c1n = function ($this$launch, completion) {
    var i = new SectionTitle$lambda$slambda(this.a3r_1, this.b3r_1, this.c3r_1, completion);
    i.d3r_1 = $this$launch;
    return i;
  };
  function SectionTitle$lambda$slambda_0($alignment, $subTitleMargin$delegate, $titleMargin$delegate, resultContinuation) {
    var i = new SectionTitle$lambda$slambda($alignment, $subTitleMargin$delegate, $titleMargin$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SectionTitle$lambda_4($scope, $alignment, $subTitleMargin$delegate, $titleMargin$delegate) {
    return function () {
      launch($scope, VOID, VOID, SectionTitle$lambda$slambda_0($alignment, $subTitleMargin$delegate, $titleMargin$delegate, null));
      return Unit_instance;
    };
  }
  function SectionTitle$lambda$lambda($section) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-2046978939, $changed, -1, 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>.<anonymous> (SectionTitle.kt:82)');
      }
      Text($section.l3o_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function SectionTitle$lambda$lambda_0($section) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1253525202, $changed, -1, 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>.<anonymous> (SectionTitle.kt:107)');
      }
      Text($section.m3o_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function SectionTitle$lambda_5($alignment, $titleMargin$delegate, $section, $subTitleMargin$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-2139846429, $changed, -1, 'id.haaweejee.landingpage.components.SectionTitle.<anonymous> (SectionTitle.kt:60)');
        }
        var tmp_0 = fillMaxWidth(Companion_instance_0);
        var tmp_1;
        if (equals($alignment._v, CenterHorizontally_instance)) {
          tmp_1 = Companion_instance_13.g2q();
        } else {
          tmp_1 = Companion_instance_13.i2q();
        }
        var tmp0_$receiver = textAlign(tmp_0, tmp_1);
        var tmp1_left = SectionTitle$lambda($titleMargin$delegate);
        var tmp2_top = get_px(0);
        var tmp3_bottom = get_px(0);
        var tmp_2 = toAttrs(transition(color(fontWeight(fontSize(fontFamily(margin(tmp0_$receiver, tmp2_top, VOID, tmp3_bottom, tmp1_left), ['Roboto']), get_px(25)), Companion_instance_4.a2r()), Theme_Primary_getInstance().u3n_1), [Companion_instance_5.x2t('margin', get_ms(300))]));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-2046978939, true, SectionTitle$lambda$lambda($section), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.f15(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.f1f();
        var tmp_3;
        if (invalid || it === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_37(dispatchReceiver);
          $composer_1.q1f(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        P(tmp_2, tmp0, $composer_0, 48, 0);
        var tmp_5 = fillMaxWidth(Companion_instance_0);
        var tmp_6;
        if (equals($alignment._v, CenterHorizontally_instance)) {
          tmp_6 = Companion_instance_13.g2q();
        } else {
          tmp_6 = Companion_instance_13.i2q();
        }
        var tmp4_$receiver = textAlign(tmp_5, tmp_6);
        var tmp5_left = equals($alignment._v, Start_instance) ? SectionTitle$lambda_1($subTitleMargin$delegate) : get_px(0);
        var tmp6_right = equals($alignment._v, CenterHorizontally_instance) ? SectionTitle$lambda_1($subTitleMargin$delegate) : get_px(0);
        var tmp7_bottom = get_px(10);
        var tmp8_top = get_px(0);
        var tmp_7 = toAttrs(transition(color(fontWeight(fontSize(fontFamily(margin(tmp4_$receiver, tmp8_top, tmp6_right, tmp7_bottom, tmp5_left), ['Roboto']), get_px(40)), Companion_instance_4.b2r()), Theme_Secondary_getInstance().u3n_1), [Companion_instance_5.x2t('margin', get_ms(300))]));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(-1253525202, true, SectionTitle$lambda$lambda_0($section), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.f15(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.f1f();
        var tmp_8;
        if (invalid_0 || it_0 === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.SectionTitle.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_38(dispatchReceiver_0);
          $composer_2.q1f(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = it_0;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        P(tmp_7, tmp0_0, $composer_0, 48, 0);
        var tmp_10 = borderRadius(backgroundColor(width(height(Companion_instance_0, get_px(2)), get_px(80)), Theme_Primary_getInstance().u3n_1), get_px(50));
        Box(tmp_10, null, null, null, $composer_0, 0, 14);
        var tmp_11;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_11 = Unit_instance;
        }
        tmp = tmp_11;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function SectionTitle$lambda_6($modifier, $section, $alignment, $$changed, $$default) {
    return function ($composer, $force) {
      SectionTitle($modifier._v, $section, $alignment._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ServiceCard(service, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(120276017);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f15(service) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
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
      var invalid = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1f();
      var tmp_0;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_43(dispatchReceiver);
        $composer_1.q1f(value);
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
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(ServiceCard$lambda_0(service, $changed));
    }
  }
  function ServiceCard$lambda$lambda($service) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-1610622508, $changed, -1, 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous> (ServiceCard.kt:52)');
        }
        var tmp0_modifier = size(Companion_instance_0, get_px(40));
        var tmp1_src = $service.g3r_1;
        Image(tmp1_src, tmp0_modifier, null, null, null, null, null, $composer_0, 0, 124);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ServiceCard$lambda$lambda_0($service) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(716655036, $changed, -1, 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous> (ServiceCard.kt:66)');
      }
      Text($service.h3r_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ServiceCard$lambda$lambda_1($service) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(2034717477, $changed, -1, 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous> (ServiceCard.kt:77)');
      }
      Text($service.i3r_1, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ServiceCard$lambda($service) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(749328538, $changed, -1, 'id.haaweejee.landingpage.components.ServiceCard.<anonymous> (ServiceCard.kt:39)');
        }
        var tmp_0 = margin_2(padding(id(Companion_instance_0, 'iconBox'), get_px(10)), get_px(20));
        var tmp_1 = get_px(2);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_$receiver = border(tmp_0, tmp_1, 'solid', Theme_Primary_getInstance().u3n_1);
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
        var invalid = $composer_1.f15(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.f1f();
        var tmp_3;
        if (invalid || it === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_40(dispatchReceiver);
          $composer_1.q1f(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Box(tmp_2, null, null, tmp0, $composer_0, 3072, 6);
        var tmp_5 = toAttrs(fontWeight(fontSize(fontFamily(margin_0(fillMaxWidth(Companion_instance_0), get_px(0), VOID, get_px(10)), ['Roboto']), get_px(18)), Companion_instance_4.b2r()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_0 = rememberComposableLambda(716655036, true, ServiceCard$lambda$lambda_0($service), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.f15(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.f1f();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_41(dispatchReceiver_0);
          $composer_2.q1f(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        P(tmp_5, tmp0_0, $composer_0, 48, 0);
        var tmp_8 = toAttrs(fontWeight(fontSize(fontFamily(margin_0(fillMaxWidth(Companion_instance_0), get_px(0), VOID, get_px(0)), ['Roboto']), get_px(14)), Companion_instance_4.a2r()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver_1 = rememberComposableLambda(2034717477, true, ServiceCard$lambda$lambda_1($service), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.f15(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.f1f();
        var tmp_9;
        if (invalid_1 || it_1 === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.ServiceCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_42(dispatchReceiver_1);
          $composer_3.q1f(value_1);
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
          tmp_11 = Unit_instance;
        }
        tmp = tmp_11;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ServiceCard$lambda_0($service, $$changed) {
    return function ($composer, $force) {
      ServiceCard($service, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ProgrammingCard(name, image, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(761647793);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f15(name) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f15(image) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(761647793, $dirty, -1, 'id.haaweejee.landingpage.components.ProgrammingCard (SkillBar.kt:98)');
      }
      var tmp = padding(margin_2(fillMaxSize(toModifier(get_ProgrammingCardStyle(), $composer_0, 6)), get_px(10)), get_px(10));
      var tmp_0 = Center_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-375917769, true, ProgrammingCard$lambda(image, name), $composer_0, 54);
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
        // Inline function 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_46(dispatchReceiver);
        $composer_1.q1f(value);
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
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(ProgrammingCard$lambda_0(name, image, $changed));
    }
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
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ProgrammingCard$lambda$lambda($image, $name) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-782971282, $changed, -1, 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous>.<anonymous> (SkillBar.kt:110)');
        }
        var tmp0_modifier = size(Companion_instance_0, get_px(32));
        Image_0($image, '', tmp0_modifier, null, null, null, null, $composer_0, 48, 120);
        var tmp_0 = toAttrs(fontWeight(fontSize(fontFamily(maxWidth(margin_1(Companion_instance_0, get_px(10)), get_px(100)), ['Roboto']), get_px(18)), Companion_instance_4.z2q()));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1678586228, true, ProgrammingCard$lambda$lambda$lambda($name), $composer_0, 54);
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
          // Inline function 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_44(dispatchReceiver);
          $composer_1.q1f(value);
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
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ProgrammingCard$lambda($image, $name) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-375917769, $changed, -1, 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous> (SkillBar.kt:106)');
        }
        var tmp1_modifier = fillMaxWidth(maxHeight(Companion_instance_0, get_px(250)));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-782971282, true, ProgrammingCard$lambda$lambda($image, $name), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.f15(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.f1f();
        var tmp_0;
        if (invalid || it === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.components.ProgrammingCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_45(dispatchReceiver);
          $composer_1.q1f(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp1_modifier, null, CenterHorizontally_instance, null, tmp0, $composer_0, 24576, 10);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ProgrammingCard$lambda_0($name, $image, $$changed) {
    return function ($composer, $force) {
      ProgrammingCard($name, $image, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SocialBar(row, $composer, $changed, $default) {
    var row_0 = {_v: row};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1200281380);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.t1e(row_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        row_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1200281380, $dirty, -1, 'id.haaweejee.landingpage.components.SocialBar (SocialBar.kt:20)');
      }
      if (row_0._v) {
        $composer_0.v1d(876302190);
        var tmp0_modifier = backgroundColor(borderRadius(minHeight(padding_1(margin_0(Companion_instance_0, get_px(25)), VOID, get_px(25)), get_px(40)), get_px(20)), Theme_LighterGray_getInstance().u3n_1);
        Row(tmp0_modifier, Center_instance_0, CenterVertically_instance, null, ComposableSingletons$SocialBarKt_getInstance().j3r_1, $composer_0, 24576, 8);
        $composer_0.x1d();
      } else {
        $composer_0.v1d(876744250);
        var tmp = backgroundColor(borderRadius(minWidth(padding_1(margin(Companion_instance_0, VOID, get_px(25)), get_px(25)), get_px(40)), get_px(20)), Theme_White_getInstance().u3n_1);
        var tmp_0 = Center_instance_0;
        var tmp_1 = CenterHorizontally_instance;
        Column(tmp, tmp_0, tmp_1, null, ComposableSingletons$SocialBarKt_getInstance().k3r_1, $composer_0, 24576, 8);
        $composer_0.x1d();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(SocialBar$lambda(row_0, $changed, $default));
    }
  }
  function SocialLinks(row, $composer, $changed, $default) {
    var row_0 = {_v: row};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-278877258);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.t1e(row_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
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
      var invalid = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1f();
      var tmp_0;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.SocialLinks.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_50(dispatchReceiver);
        $composer_1.q1f(value);
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
      var invalid_0 = $composer_2.f15(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.f1f();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.SocialLinks.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_51(dispatchReceiver_0);
        $composer_2.q1f(value_0);
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
      var invalid_1 = $composer_3.f15(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_3.f1f();
      var tmp_6;
      if (invalid_1 || it_1 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.components.SocialLinks.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_52(dispatchReceiver_1);
        $composer_3.q1f(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp0_1 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Link_0('https://medium.com/@hendrawanwib', null, null, null, tmp_5, null, null, tmp0_1, $composer_0, 12607494, 110);
      var tmp_8 = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      Link_0('https://www.linkedin.com/in/haaweejee/', null, null, null, tmp_8, null, null, ComposableSingletons$SocialBarKt_getInstance().l3r_1, $composer_0, 12607494, 110);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(SocialLinks$lambda_2(row_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$SocialBarKt$lambda_1$lambda_fzk4p0($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-332980674, $changed, -1, 'id.haaweejee.landingpage.components.ComposableSingletons$SocialBarKt.lambda-1.<anonymous> (SocialBar.kt:32)');
      }
      SocialLinks(true, $composer_0, 6, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$SocialBarKt$lambda_2$lambda_cu2cd7($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1451538337, $changed, -1, 'id.haaweejee.landingpage.components.ComposableSingletons$SocialBarKt.lambda-2.<anonymous> (SocialBar.kt:45)');
      }
      SocialLinks(false, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function ComposableSingletons$SocialBarKt$lambda_3$lambda_tdf8jq($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(991359759, $changed, -1, 'id.haaweejee.landingpage.components.ComposableSingletons$SocialBarKt.lambda-3.<anonymous> (SocialBar.kt:95)');
      }
      FaLinkedin(toModifier(get_SocialLinkStyle(), $composer_0, 6), IconSize_LG_getInstance(), $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$SocialBarKt() {
    ComposableSingletons$SocialBarKt_instance = this;
    var tmp = this;
    tmp.j3r_1 = ComposableLambda$invoke$ref_47(composableLambdaInstance(-332980674, false, ComposableSingletons$SocialBarKt$lambda_1$lambda_fzk4p0));
    var tmp_0 = this;
    tmp_0.k3r_1 = ComposableLambda$invoke$ref_48(composableLambdaInstance(1451538337, false, ComposableSingletons$SocialBarKt$lambda_2$lambda_cu2cd7));
    var tmp_1 = this;
    tmp_1.l3r_1 = ComposableLambda$invoke$ref_49(composableLambdaInstance(991359759, false, ComposableSingletons$SocialBarKt$lambda_3$lambda_tdf8jq));
  }
  var ComposableSingletons$SocialBarKt_instance;
  function ComposableSingletons$SocialBarKt_getInstance() {
    if (ComposableSingletons$SocialBarKt_instance == null)
      new ComposableSingletons$SocialBarKt();
    return ComposableSingletons$SocialBarKt_instance;
  }
  function SocialBar$lambda($row, $$changed, $$default) {
    return function ($composer, $force) {
      SocialBar($row._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SocialLinks$lambda($row) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(388814632, $changed, -1, 'id.haaweejee.landingpage.components.SocialLinks.<anonymous> (SocialBar.kt:56)');
        }
        var tmp0_$receiver = toModifier(get_GithubLinkStyle(), $composer_0, 6);
        var tmp1_bottom = $row._v ? get_px(0) : get_px(40);
        var tmp2_right = $row._v ? get_px(40) : get_px(0);
        FaGithub(margin(tmp0_$receiver, VOID, tmp2_right, tmp1_bottom), IconSize_LG_getInstance(), $composer_0, 48, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function SocialLinks$lambda_0($row) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(1986053457, $changed, -1, 'id.haaweejee.landingpage.components.SocialLinks.<anonymous> (SocialBar.kt:69)');
        }
        var tmp0_$receiver = toModifier(get_UpworkLinkStyle(), $composer_0, 6);
        var tmp1_bottom = $row._v ? get_px(0) : get_px(40);
        var tmp2_right = $row._v ? get_px(40) : get_px(0);
        FaUpwork(margin(tmp0_$receiver, VOID, tmp2_right, tmp1_bottom), IconSize_LG_getInstance(), $composer_0, 48, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function SocialLinks$lambda_1($row) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-658777040, $changed, -1, 'id.haaweejee.landingpage.components.SocialLinks.<anonymous> (SocialBar.kt:82)');
        }
        var tmp0_$receiver = toModifier(get_GithubLinkStyle(), $composer_0, 6);
        var tmp1_bottom = $row._v ? get_px(0) : get_px(40);
        var tmp2_right = $row._v ? get_px(40) : get_px(0);
        FaMedium(margin(tmp0_$receiver, VOID, tmp2_right, tmp1_bottom), IconSize_LG_getInstance(), $composer_0, 48, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function SocialLinks$lambda_2($row, $$changed, $$default) {
    return function ($composer, $force) {
      SocialLinks($row._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var Experience_First_instance;
  var Experience_Second_instance;
  var Experience_Third_instance;
  function values() {
    return [Experience_First_getInstance(), Experience_Second_getInstance(), Experience_Third_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Experience_entriesInitialized;
  function Experience_initEntries() {
    if (Experience_entriesInitialized)
      return Unit_instance;
    Experience_entriesInitialized = true;
    var tmp0_description = '1. Contribute with the team to develop the Dunia Games Android application based on a request from Telkomsel as the Product Owner.\n2. Carrying out the Application Deployment Process that has gone through several stages of Testing to Playstore.\n3. Refactoring Code Base like App Architecture from MVP (Model-View-Presenter) to MVVM (Model-View-ViewModel), View Base from XML to Jetpack Compose, and Java Code to Kotlin Code Base.\n';
    Experience_First_instance = new Experience('First', 0, '01', 'Android Developer', tmp0_description, 'PT. Ako Media Asia (SALT Indonesia)', 'salt-logo.svg', 'April 2024', 'Present');
    var tmp1_description = '1. Implementation of Unit Testing in the android application to ensure the functions that have been made run well.\n2. Conduct research to create new features or technologies that will be implemented in the Kompas.id application.\n3. Plan, Implement, and Create Documentation for Clean Architecture on the Kompas.id Android Application to make the Application easy to maintain.\n';
    Experience_Second_instance = new Experience('Second', 1, '02', 'Android Developer', tmp1_description, 'PT. Kompas Media Nusantara (Harian Kompas)', 'kompas-logo.png', 'Maret 2022', 'April 2024');
    var tmp2_description = '1. Contribute with the team to develop the Dunia Games Android application based on a request from Telkomsel as the Product Owner.\\n" +\n                "2. Carrying out the Application Deployment Process that has gone through several stages of Testing to Playstore.\\n" +\n                "3. Refactoring Code Base like App Architecture from MVP (Model-View-Presenter) to MVVM (Model-View-ViewModel), View Base from XML to Jetpack Compose, and Java Code to Kotlin Code Base.\\n"';
    Experience_Third_instance = new Experience('Third', 2, '03', 'Android Developer Fasilitator', tmp2_description, 'Bangkit', 'bangkit-logo.png', 'Februari 2022', 'Juli 2022');
  }
  var $ENTRIES;
  function Experience(name, ordinal, number, jobPosition, description, company, image, from, to) {
    Enum.call(this, name, ordinal);
    this.a3o_1 = number;
    this.b3o_1 = jobPosition;
    this.c3o_1 = description;
    this.d3o_1 = company;
    this.e3o_1 = image;
    this.f3o_1 = from;
    this.g3o_1 = to;
  }
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
  function values_0() {
    return [Portfolio_One_getInstance(), Portfolio_Two_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Portfolio_entriesInitialized;
  function Portfolio_initEntries() {
    if (Portfolio_entriesInitialized)
      return Unit_instance;
    Portfolio_entriesInitialized = true;
    Portfolio_One_instance = new Portfolio('One', 0, 'portfolio1.jpg', 'Uber: Urunan Bersama', 'Android App');
    Portfolio_Two_instance = new Portfolio('Two', 1, 'portfolio2.jpg', 'Image Converter JPG/WEB/PNG', 'Android App');
  }
  var $ENTRIES_0;
  function Portfolio(name, ordinal, image, title, description) {
    Enum.call(this, name, ordinal);
    this.p3q_1 = image;
    this.q3q_1 = title;
    this.r3q_1 = description;
  }
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
  function values_1() {
    return [Section_Home_getInstance(), Section_About_getInstance(), Section_Experience_getInstance(), Section_Service_getInstance(), Section_Portfolio_getInstance(), Section_Contact_getInstance(), Section_Testimonial_getInstance(), Section_Achievements_getInstance()];
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Section_entriesInitialized;
  function Section_initEntries() {
    if (Section_entriesInitialized)
      return Unit_instance;
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
  var $ENTRIES_1;
  function Section(name, ordinal, id, title, subtitle, path) {
    Enum.call(this, name, ordinal);
    this.k3o_1 = id;
    this.l3o_1 = title;
    this.m3o_1 = subtitle;
    this.n3o_1 = path;
  }
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
  function values_2() {
    return [Service_Android_getInstance(), Service_IOS_getInstance(), Service_Website_getInstance(), Service_Design_getInstance(), Service_Business_getInstance(), Service_SEO_getInstance()];
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var Service_entriesInitialized;
  function Service_initEntries() {
    if (Service_entriesInitialized)
      return Unit_instance;
    Service_entriesInitialized = true;
    Service_Android_instance = new Service('Android', 0, 'android_icon.svg', 'Android Development', 'I have Experience More than 3 Years in Android Development in Media and IT Industryso that i can is assurance for i can make good quality Apps and with good Timeline.');
    Service_IOS_instance = new Service('IOS', 1, 'apple_icon.svg', 'IOS Development', "You can also request IOS App too, if you needed, With Flutter you can create Both Androidand Apple Apps in same time so don't worry to request it if you need.");
    Service_Website_instance = new Service('Website', 2, 'web_icon.svg', 'Website Development', 'You worry if you not success develop Apps? just use Website as MVP and you can create yourproduct to check is your product is fit on market or not.');
    Service_Design_instance = new Service('Design', 3, 'design_icon.svg', 'UI/UX Design', 'I have knowledge to Design Mobile Apps With Figma, if you need discuss just discuss it.');
    Service_Business_instance = new Service('Business', 4, 'business_icon.svg', 'Business Analysis', 'I have Experience More than 3 Years in Android Development in Media and IT Industryso that i can is assurance for i can make good quality Apps and with good Timeline');
    Service_SEO_instance = new Service('SEO', 5, 'seo_icon.svg', 'SEO Marketing', 'I have Experience More than 3 Years in Android Development in Media and IT Industryso that i can is assurance for i can make good quality Apps and with good Timeline');
  }
  var $ENTRIES_2;
  function Service(name, ordinal, icon, title, description) {
    Enum.call(this, name, ordinal);
    this.g3r_1 = icon;
    this.h3r_1 = title;
    this.i3r_1 = description;
  }
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
  function values_3() {
    return [Skill_Creative_getInstance(), Skill_Accountable_getInstance(), Skill_HardWorking_getInstance(), Skill_Value_getInstance(), Skill_Delivery_getInstance()];
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var Skill_entriesInitialized;
  function Skill_initEntries() {
    if (Skill_entriesInitialized)
      return Unit_instance;
    Skill_entriesInitialized = true;
    Skill_Creative_instance = new Skill('Creative', 0, 'Creative', get_percent(90));
    Skill_Accountable_instance = new Skill('Accountable', 1, 'Accountable', get_percent(90));
    Skill_HardWorking_instance = new Skill('HardWorking', 2, 'Hard Working', get_percent(80));
    Skill_Value_instance = new Skill('Value', 3, 'Value for Money', get_percent(85));
    Skill_Delivery_instance = new Skill('Delivery', 4, 'On-Time Delivery', get_percent(75));
  }
  var $ENTRIES_3;
  function Skill(name, ordinal, title, percentage) {
    Enum.call(this, name, ordinal);
    this.o3r_1 = title;
    this.p3r_1 = percentage;
  }
  var ProgrammingLanguage_Kotlin_instance;
  var ProgrammingLanguage_Flutter_instance;
  var ProgrammingLanguage_Firebase_instance;
  var ProgrammingLanguage_Go_instance;
  var ProgrammingLanguage_Github_instance;
  var ProgrammingLanguage_Jira_instance;
  function values_4() {
    return [ProgrammingLanguage_Kotlin_getInstance(), ProgrammingLanguage_Flutter_getInstance(), ProgrammingLanguage_Firebase_getInstance(), ProgrammingLanguage_Go_getInstance(), ProgrammingLanguage_Github_getInstance(), ProgrammingLanguage_Jira_getInstance()];
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_4());
    return $ENTRIES_4;
  }
  var ProgrammingLanguage_entriesInitialized;
  function ProgrammingLanguage_initEntries() {
    if (ProgrammingLanguage_entriesInitialized)
      return Unit_instance;
    ProgrammingLanguage_entriesInitialized = true;
    ProgrammingLanguage_Kotlin_instance = new ProgrammingLanguage('Kotlin', 0, 'Kotlin', 'kotlin.svg');
    ProgrammingLanguage_Flutter_instance = new ProgrammingLanguage('Flutter', 1, 'Flutter', 'flutter.svg');
    ProgrammingLanguage_Firebase_instance = new ProgrammingLanguage('Firebase', 2, 'Firebase', 'firebase.svg');
    ProgrammingLanguage_Go_instance = new ProgrammingLanguage('Go', 3, 'Golang', 'go.svg');
    ProgrammingLanguage_Github_instance = new ProgrammingLanguage('Github', 4, 'Github', 'github.svg');
    ProgrammingLanguage_Jira_instance = new ProgrammingLanguage('Jira', 5, 'Jira', 'jira.svg');
  }
  var $ENTRIES_4;
  function ProgrammingLanguage(name, ordinal, title, image) {
    Enum.call(this, name, ordinal);
    this.s3r_1 = title;
    this.t3r_1 = image;
  }
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
  var Theme_Primary_instance;
  var Theme_Secondary_instance;
  var Theme_Gray_instance;
  var Theme_LightGray_instance;
  var Theme_LighterGray_instance;
  var Theme_White_instance;
  var Theme_entriesInitialized;
  function Theme_initEntries() {
    if (Theme_entriesInitialized)
      return Unit_instance;
    Theme_entriesInitialized = true;
    Theme_Primary_instance = new Theme('Primary', 0, '#328DD7', rgb(50, 141, 215));
    Theme_Secondary_instance = new Theme('Secondary', 1, '#222222', rgb(30, 30, 30));
    Theme_Gray_instance = new Theme('Gray', 2, '#CFCFCF', rgb(207, 207, 207));
    Theme_LightGray_instance = new Theme('LightGray', 3, '#EDEDED', rgb(237, 237, 237));
    Theme_LighterGray_instance = new Theme('LighterGray', 4, '#F9F9F9', rgb(249, 249, 249));
    Theme_White_instance = new Theme('White', 5, '#FFFFFF', rgb(255, 255, 255));
  }
  function Theme(name, ordinal, hex, rgb) {
    Enum.call(this, name, ordinal);
    this.t3n_1 = hex;
    this.u3n_1 = rgb;
  }
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
    $composer_0 = $composer_0.x1f(-2083743828);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-2083743828, $changed, -1, 'id.haaweejee.landingpage.pages.HomePage (Index.kt:28)');
      }
      $composer_0.v1d(-2097057304);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1f();
      var tmp;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.pages.HomePage.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.x1d();
      var menuOpened$delegate = tmp0_group;
      var tmp_1 = fillMaxSize(Companion_instance_0);
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.pages.HomePage.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1279877838, true, HomePage$lambda_1(menuOpened$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.f1f();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.pages.HomePage.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_54(dispatchReceiver);
        $composer_1.q1f(value_0);
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
      $composer_0.e18();
    }
    var tmp1_safe_receiver = $composer_0.y1f();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l1l(HomePage$lambda_2($changed));
    }
  }
  function HomePage$lambda($menuOpened$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('menuOpened', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $menuOpened$delegate.e2();
  }
  function HomePage$lambda_0($menuOpened$delegate, _set____db54di) {
    getLocalDelegateReference('menuOpened', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $menuOpened$delegate.is(_set____db54di);
    return Unit_instance;
  }
  function HomePage$lambda$lambda$lambda($menuOpened$delegate) {
    return function () {
      HomePage$lambda_0($menuOpened$delegate, true);
      return Unit_instance;
    };
  }
  function HomePage$lambda$lambda($menuOpened$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(2116657385, $changed, -1, 'id.haaweejee.landingpage.pages.HomePage.<anonymous>.<anonymous> (Index.kt:38)');
        }
        $composer_0.v1d(2105714685);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.f1f();
        var tmp_0;
        if (false || it === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.pages.HomePage.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = HomePage$lambda$lambda$lambda($menuOpened$delegate);
          $composer_0.q1f(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.x1d();
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
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function HomePage$lambda$lambda_0($menuOpened$delegate) {
    return function () {
      HomePage$lambda_0($menuOpened$delegate, false);
      return Unit_instance;
    };
  }
  function HomePage$lambda_1($menuOpened$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-1279877838, $changed, -1, 'id.haaweejee.landingpage.pages.HomePage.<anonymous> (Index.kt:33)');
        }
        var tmp_0 = fillMaxSize(Companion_instance_0);
        var tmp_1 = Top_instance;
        var tmp_2 = CenterHorizontally_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.pages.HomePage.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(2116657385, true, HomePage$lambda$lambda($menuOpened$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.f15(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.f1f();
        var tmp_3;
        if (invalid || it === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.pages.HomePage.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_53(dispatchReceiver);
          $composer_1.q1f(value);
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
          $composer_0.v1d(-831088585);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_0.f1f();
          var tmp_5;
          if (false || it_0 === Companion_getInstance().n18_1) {
            // Inline function 'id.haaweejee.landingpage.pages.HomePage.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = HomePage$lambda$lambda_0($menuOpened$delegate);
            $composer_0.q1f(value_0);
            tmp_5 = value_0;
          } else {
            tmp_5 = it_0;
          }
          var tmp_6 = tmp_5;
          var tmp0_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
          $composer_0.x1d();
          OverflowMenu(tmp0_group, $composer_0, 6);
        }
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_instance;
        }
        tmp = tmp_7;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function HomePage$lambda_2($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function AboutSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-516203226);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-516203226, $changed, -1, 'id.haaweejee.landingpage.sections.AboutSection (AboutSection.kt:43)');
      }
      var tmp = padding_2(maxWidth(id(Companion_instance_0, Section_About_getInstance().k3o_1), get_px(2880)), get_px(30));
      var tmp_0 = TopCenter_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$AboutSectionKt_getInstance().u3r_1, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(AboutSection$lambda($changed));
    }
  }
  function AboutContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1032649234);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1032649234, $changed, -1, 'id.haaweejee.landingpage.sections.AboutContent (AboutSection.kt:56)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = maxWidth(fillMaxWidth(Companion_instance_0, breakpoint.n2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90)), get_px(1200));
      var tmp_0 = CenterHorizontally_instance;
      Column(tmp, null, tmp_0, null, ComposableSingletons$AboutSectionKt_getInstance().v3r_1, $composer_0, 24576, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(AboutContent$lambda($changed));
    }
  }
  function AboutMe($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(988189685);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(988189685, $changed, -1, 'id.haaweejee.landingpage.sections.AboutMe (AboutSection.kt:83)');
      }
      $composer_0.v1d(-1676111979);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1f();
      var tmp;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.sections.AboutMe.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.x1d();
      var viewportEntered$delegate = tmp0_group;
      $composer_0.v1d(-1676109923);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.f1f();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.sections.AboutMe.<anonymous>' call
        var value_0 = mutableStateListOf([0, 0, 0, 0, 0]);
        this_1.q1f(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.x1d();
      var animatedPercentage = tmp1_group;
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = AboutMe$lambda_0;
      }
      var composer = $composer_1;
      sourceInformationMarkerStart($composer_1, -954370320, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.f1f();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().n18_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value_1 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.q1f(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var wrapper = tmp1_group_0;
      var tmp0 = wrapper.w1l_1;
      sourceInformationMarkerEnd($composer_1);
      var coroutineScope = tmp0;
      var tmp_5 = Section_About_getInstance().k3o_1;
      $composer_0.v1d(-1676102477);
      var tmp8 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.s1e(coroutineScope);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = tmp8.f1f();
      var tmp_6;
      if (invalid || it_2 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.sections.AboutMe.<anonymous>' call
        var value_2 = AboutMe$lambda_1(coroutineScope, viewportEntered$delegate, animatedPercentage);
        tmp8.q1f(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_0.x1d();
      ObserveViewPortEntered(tmp_5, 700.0, tmp2_group, $composer_0, 54);
      var tmp_8 = fillMaxWidth(Companion_instance_0);
      var tmp_9 = Center_instance_0;
      Column(tmp_8, tmp_9, null, null, ComposableSingletons$AboutSectionKt_getInstance().a3s_1, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp3_safe_receiver = $composer_0.y1f();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.l1l(AboutMe$lambda_2($changed));
    }
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_1$lambda_zx8t0($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1100103724, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-1.<anonymous> (AboutSection.kt:51)');
      }
      AboutContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_2$lambda_rtp897($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-1325098551, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-2.<anonymous> (AboutSection.kt:64)');
      }
      AboutMe($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_3$lambda_edscnq($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-347946570, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-3.<anonymous> (AboutSection.kt:74)');
      }
      var tmp0_modifier = fillMaxWidth(toModifier(get_AboutImageStyle(), $composer_0, 6), get_percent(80));
      Image_0('about_image.png', '', tmp0_modifier, null, null, null, null, $composer_0, 54, 120);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_59($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_60($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_6$lambda_11z0jr($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(221601365, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-6.<anonymous> (AboutSection.kt:145)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = get_entries_4().j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'id.haaweejee.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-6.<anonymous>.<anonymous>' call
        ProgrammingCard(element.s3r_1, element.t3r_1, $composer_0, 0);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_61($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_7$lambda_tvlhly($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-1013334562, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$AboutSectionKt.lambda-7.<anonymous> (AboutSection.kt:110)');
      }
      var tmp = Section_About_getInstance();
      SectionTitle(null, tmp, null, $composer_0, 48, 5);
      P(toAttrs(color(fontStyle(fontWeight(fontSize(fontFamily(maxWidth(margin_0(toModifier(get_AboutTextStyle(), $composer_0, 6), get_px(25), VOID, get_px(10)), get_px(500)), ['Roboto']), get_px(18)), Companion_instance_4.a2r()), Companion_instance_14.e2r()), Theme_Secondary_getInstance().u3n_1)), ComposableSingletons$AboutSectionKt_getInstance().x3r_1, $composer_0, 48, 0);
      P(toAttrs(color(fontWeight(fontSize(fontFamily(maxWidth(margin_0(toModifier(get_AboutTextStyle(), $composer_0, 6), get_px(0)), get_px(500)), ['Roboto']), get_px(18)), Companion_instance_4.a2r()), Theme_Secondary_getInstance().u3n_1)), ComposableSingletons$AboutSectionKt_getInstance().y3r_1, $composer_0, 48, 0);
      var tmp0_modifier = margin_0(fillMaxWidth(Companion_instance_0), get_px(15));
      var tmp1_numColumns = numColumns(2, VOID, 3);
      SimpleGrid(tmp1_numColumns, tmp0_modifier, null, null, ComposableSingletons$AboutSectionKt_getInstance().z3r_1, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AboutSectionKt() {
    ComposableSingletons$AboutSectionKt_instance = this;
    var tmp = this;
    tmp.u3r_1 = ComposableLambda$invoke$ref_55(composableLambdaInstance(1100103724, false, ComposableSingletons$AboutSectionKt$lambda_1$lambda_zx8t0));
    var tmp_0 = this;
    tmp_0.v3r_1 = ComposableLambda$invoke$ref_56(composableLambdaInstance(-1325098551, false, ComposableSingletons$AboutSectionKt$lambda_2$lambda_rtp897));
    var tmp_1 = this;
    tmp_1.w3r_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(-347946570, false, ComposableSingletons$AboutSectionKt$lambda_3$lambda_edscnq));
    var tmp_2 = this;
    tmp_2.x3r_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(-1971432960, false, ComposableSingletons$AboutSectionKt$lambda_4$lambda_efu4eh));
    var tmp_3 = this;
    tmp_3.y3r_1 = ComposableLambda$invoke$ref_59(composableLambdaInstance(-620072727, false, ComposableSingletons$AboutSectionKt$lambda_5$lambda_rrngig));
    var tmp_4 = this;
    tmp_4.z3r_1 = ComposableLambda$invoke$ref_60(composableLambdaInstance(221601365, false, ComposableSingletons$AboutSectionKt$lambda_6$lambda_11z0jr));
    var tmp_5 = this;
    tmp_5.a3s_1 = ComposableLambda$invoke$ref_61(composableLambdaInstance(-1013334562, false, ComposableSingletons$AboutSectionKt$lambda_7$lambda_tvlhly));
  }
  var ComposableSingletons$AboutSectionKt_instance;
  function ComposableSingletons$AboutSectionKt_getInstance() {
    if (ComposableSingletons$AboutSectionKt_instance == null)
      new ComposableSingletons$AboutSectionKt();
    return ComposableSingletons$AboutSectionKt_instance;
  }
  function AboutMe$lambda($viewportEntered$delegate, _set____db54di) {
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $viewportEntered$delegate.is(_set____db54di);
    return Unit_instance;
  }
  function AboutSection$lambda($$changed) {
    return function ($composer, $force) {
      AboutSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function AboutContent$lambda($$changed) {
    return function ($composer, $force) {
      AboutContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function AboutMe$lambda_0() {
    return EmptyCoroutineContext_getInstance();
  }
  function AboutMe$lambda$slambda$lambda($animatedPercentage, $skill) {
    return function (it) {
      $animatedPercentage.t2a($skill.m2_1, it);
      return Unit_instance;
    };
  }
  function AboutMe$lambda$slambda($skill, $animatedPercentage, resultContinuation) {
    this.j3s_1 = $skill;
    this.k3s_1 = $animatedPercentage;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AboutMe$lambda$slambda).b1n = function ($this$launch, $completion) {
    var tmp = this.c1n($this$launch, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(AboutMe$lambda$slambda).q9 = function (p1, $completion) {
    return this.b1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AboutMe$lambda$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 2;
            this.w8_1 = 1;
            var tmp_0 = numberToInt(this.j3s_1.p3r_1.value);
            suspendResult = animateNumbers(tmp_0, VOID, AboutMe$lambda$slambda$lambda(this.k3s_1, this.j3s_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x8_1 === 2) {
          throw e;
        } else {
          this.w8_1 = this.x8_1;
          this.z8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AboutMe$lambda$slambda).c1n = function ($this$launch, completion) {
    var i = new AboutMe$lambda$slambda(this.j3s_1, this.k3s_1, completion);
    i.l3s_1 = $this$launch;
    return i;
  };
  function AboutMe$lambda$slambda_0($skill, $animatedPercentage, resultContinuation) {
    var i = new AboutMe$lambda$slambda($skill, $animatedPercentage, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AboutMe$lambda_1($coroutineScope, $viewportEntered$delegate, $animatedPercentage) {
    return function () {
      AboutMe$lambda($viewportEntered$delegate, true);
      var _iterator__ex2g4s = get_entries_3().j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'id.haaweejee.landingpage.sections.AboutMe.<anonymous>.<anonymous>.<anonymous>' call
        launch($coroutineScope, VOID, VOID, AboutMe$lambda$slambda_0(element, $animatedPercentage, null));
      }
      return Unit_instance;
    };
  }
  function AboutMe$lambda_2($$changed) {
    return function ($composer, $force) {
      AboutMe($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ContactSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1679137652);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-1679137652, $changed, -1, 'id.haaweejee.landingpage.sections.ContactSection (ContactSection.kt:35)');
      }
      var tmp = padding_1(maxWidth(id(Companion_instance_0, Section_Contact_getInstance().k3o_1), get_px(2880)), get_px(100));
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$ContactSectionKt_getInstance().m3s_1, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(ContactSection$lambda($changed));
    }
  }
  function ContactContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(709391992);
    if (!($changed === 0) || !$composer_0.o1d()) {
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
      var it = $composer_1.f1f();
      var tmp;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var wrapper = tmp1_group;
      var tmp0 = wrapper.w1l_1;
      sourceInformationMarkerEnd($composer_1);
      var scope = tmp0;
      $composer_0.v1d(-332785234);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.f1f();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.sections.ContactContent.<anonymous>' call
        var value_0 = mutableStateOf(get_deg(0));
        this_0.q1f(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.x1d();
      var animatedRotation$delegate = tmp0_group;
      var tmp_3 = Section_Contact_getInstance().k3o_1;
      $composer_0.v1d(-332779799);
      var tmp6 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.s1e(scope);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = tmp6.f1f();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.sections.ContactContent.<anonymous>' call
        var value_1 = ContactContent$lambda_2(scope, animatedRotation$delegate);
        tmp6.q1f(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp1_group_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.x1d();
      ObserveViewPortEntered(tmp_3, 500.0, tmp1_group_0, $composer_0, 54);
      var tmp_6 = fillMaxWidth(Companion_instance_0, breakpoint.n2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_7 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.ContactContent.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-722771281, true, ContactContent$lambda_3(breakpoint, animatedRotation$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.f1f();
      var tmp_8;
      if (invalid_0 || it_2 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.sections.ContactContent.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_63(dispatchReceiver);
        $composer_2.q1f(value_2);
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
      $composer_0.e18();
    }
    var tmp2_safe_receiver = $composer_0.y1f();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.l1l(ContactContent$lambda_4($changed));
    }
  }
  function ComposableLambda$invoke$ref_62($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactSectionKt$lambda_1$lambda_3nkjr($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1617712274, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$ContactSectionKt.lambda-1.<anonymous> (ContactSection.kt:43)');
      }
      ContactContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ContactSectionKt() {
    ComposableSingletons$ContactSectionKt_instance = this;
    var tmp = this;
    tmp.m3s_1 = ComposableLambda$invoke$ref_62(composableLambdaInstance(1617712274, false, ComposableSingletons$ContactSectionKt$lambda_1$lambda_3nkjr));
  }
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
    return $animatedRotation$delegate.e2();
  }
  function ContactContent$lambda_0($animatedRotation$delegate, _set____db54di) {
    getLocalDelegateReference('animatedRotation', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $animatedRotation$delegate.is(_set____db54di);
    return Unit_instance;
  }
  function ContactSection$lambda($$changed) {
    return function ($composer, $force) {
      ContactSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ContactContent$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function ContactContent$lambda$slambda($animatedRotation$delegate, resultContinuation) {
    this.v3s_1 = $animatedRotation$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContactContent$lambda$slambda).b1n = function ($this$launch, $completion) {
    var tmp = this.c1n($this$launch, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(ContactContent$lambda$slambda).q9 = function (p1, $completion) {
    return this.b1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ContactContent$lambda$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 2;
            this.w8_1 = 1;
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ContactContent$lambda_0(this.v3s_1, get_deg(0));
            return Unit_instance;
          case 2:
            throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x8_1 === 2) {
          throw e;
        } else {
          this.w8_1 = this.x8_1;
          this.z8_1 = e;
        }
      }
     while (true);
  };
  protoOf(ContactContent$lambda$slambda).c1n = function ($this$launch, completion) {
    var i = new ContactContent$lambda$slambda(this.v3s_1, completion);
    i.w3s_1 = $this$launch;
    return i;
  };
  function ContactContent$lambda$slambda_0($animatedRotation$delegate, resultContinuation) {
    var i = new ContactContent$lambda$slambda($animatedRotation$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ContactContent$lambda_2($scope, $animatedRotation$delegate) {
    return function () {
      ContactContent$lambda_0($animatedRotation$delegate, get_deg(10));
      launch($scope, VOID, VOID, ContactContent$lambda$slambda_0($animatedRotation$delegate, null));
      return Unit_instance;
    };
  }
  function ContactContent$lambda$lambda($animatedRotation$delegate) {
    return function ($this$transform) {
      $this$transform.u2l(ContactContent$lambda($animatedRotation$delegate));
      return Unit_instance;
    };
  }
  function ContactContent$lambda_3($breakpoint, $animatedRotation$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-722771281, $changed, -1, 'id.haaweejee.landingpage.sections.ContactContent.<anonymous> (ContactSection.kt:71)');
        }
        var tmp_0 = margin_0(fillMaxWidth(Companion_instance_0), VOID, VOID, get_px(25));
        $composer_0.v1d(-1550800537);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.f1f();
        var tmp_1;
        if (false || it === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.sections.ContactContent.<anonymous>.<anonymous>.<anonymous>' call
          var value = ContactContent$lambda$lambda($animatedRotation$delegate);
          $composer_0.q1f(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.x1d();
        SectionTitle(transition(transform(tmp_0, tmp0_group), [Companion_instance_5.x2t('transform', get_ms(500))]), Section_Contact_getInstance(), CenterHorizontally_instance, $composer_0, 48, 0);
        ContactForm($breakpoint, $composer_0, 0);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_63($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ContactContent$lambda_4($$changed) {
    return function ($composer, $force) {
      ContactContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ExperienceSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(591243644);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(591243644, $changed, -1, 'id.haaweejee.landingpage.sections.ExperienceSection (ExperienceSection.kt:28)');
      }
      var tmp = padding_1(maxWidth(id(Companion_instance_0, Section_Experience_getInstance().k3o_1), get_px(2880)), get_px(100));
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$ExperienceSectionKt_getInstance().x3s_1, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(ExperienceSection$lambda($changed));
    }
  }
  function ExperienceContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1740292080);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-1740292080, $changed, -1, 'id.haaweejee.landingpage.sections.ExperienceContent (ExperienceSection.kt:41)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.v1d(-391067328);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1f();
      var tmp;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.sections.ExperienceContent.<anonymous>' call
        var value = mutableStateOf(get_px(200));
        this_0.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.x1d();
      var animatedMargin$delegate = tmp0_group;
      var tmp_1 = Section_Experience_getInstance().k3o_1;
      $composer_0.v1d(-391061845);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.f1f();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.sections.ExperienceContent.<anonymous>' call
        var value_0 = ExperienceContent$lambda_1(animatedMargin$delegate);
        this_1.q1f(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.x1d();
      ObserveViewPortEntered(tmp_1, 1200.0, tmp1_group, $composer_0, 438);
      var tmp_4 = fillMaxWidth(Companion_instance_0, breakpoint.n2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_5 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.ExperienceContent.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-578951417, true, ExperienceContent$lambda_2(breakpoint, animatedMargin$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.f1f();
      var tmp_6;
      if (invalid || it_1 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.sections.ExperienceContent.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_65(dispatchReceiver);
        $composer_1.q1f(value_1);
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
      $composer_0.e18();
    }
    var tmp2_safe_receiver = $composer_0.y1f();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.l1l(ExperienceContent$lambda_3($changed));
    }
  }
  function ComposableLambda$invoke$ref_64($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$ExperienceSectionKt$lambda_1$lambda_jj9ub5($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-672072446, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$ExperienceSectionKt.lambda-1.<anonymous> (ExperienceSection.kt:36)');
      }
      ExperienceContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ExperienceSectionKt() {
    ComposableSingletons$ExperienceSectionKt_instance = this;
    var tmp = this;
    tmp.x3s_1 = ComposableLambda$invoke$ref_64(composableLambdaInstance(-672072446, false, ComposableSingletons$ExperienceSectionKt$lambda_1$lambda_jj9ub5));
  }
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
    return $animatedMargin$delegate.e2();
  }
  function ExperienceContent$lambda_0($animatedMargin$delegate, _set____db54di) {
    getLocalDelegateReference('animatedMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $animatedMargin$delegate.is(_set____db54di);
    return Unit_instance;
  }
  function ExperienceSection$lambda($$changed) {
    return function ($composer, $force) {
      ExperienceSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ExperienceContent$lambda_1($animatedMargin$delegate) {
    return function () {
      ExperienceContent$lambda_0($animatedMargin$delegate, get_px(50));
      return Unit_instance;
    };
  }
  function ExperienceContent$lambda_2($breakpoint, $animatedMargin$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-578951417, $changed, -1, 'id.haaweejee.landingpage.sections.ExperienceContent.<anonymous> (ExperienceSection.kt:60)');
        }
        var tmp_0 = margin_0(fillMaxWidth(Companion_instance_0, $breakpoint.n2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(60) : get_percent(90)), VOID, VOID, get_px(25));
        var tmp_1 = Section_Experience_getInstance();
        SectionTitle(tmp_0, tmp_1, null, $composer_0, 48, 4);
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = get_entries().j();
        while (_iterator__ex2g4s.k()) {
          var element = _iterator__ex2g4s.l();
          // Inline function 'id.haaweejee.landingpage.sections.ExperienceContent.<anonymous>.<anonymous>.<anonymous>' call
          ExperienceCard($breakpoint, element.equals(Experience_First_getInstance()), element, ExperienceContent$lambda($animatedMargin$delegate), $composer_0, 0, 0);
        }
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_65($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ExperienceContent$lambda_3($$changed) {
    return function ($composer, $force) {
      ExperienceContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function FooterSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1161222236);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1161222236, $changed, -1, 'id.haaweejee.landingpage.sections.FooterSection (FooterSection.kt:37)');
      }
      var tmp = backgroundColor(padding(maxWidth(fillMaxWidth(Companion_instance_0), get_px(2880)), get_px(100)), Theme_LighterGray_getInstance().u3n_1);
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$FooterSectionKt_getInstance().y3s_1, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(FooterSection$lambda($changed));
    }
  }
  function FooterContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1931008240);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1931008240, $changed, -1, 'id.haaweejee.landingpage.sections.FooterContent (FooterSection.kt:51)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxWidth(Companion_instance_0, breakpoint.n2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_0 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.FooterContent.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-416848153, true, FooterContent$lambda(breakpoint), $composer_0, 54);
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
        // Inline function 'id.haaweejee.landingpage.sections.FooterContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_69(dispatchReceiver);
        $composer_1.q1f(value);
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
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(FooterContent$lambda_0($changed));
    }
  }
  function FooterMenu(row, $composer, $changed, $default) {
    var row_0 = {_v: row};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1769390336);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.t1e(row_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        row_0._v = true;
      }
      if (isTraceInProgress()) {
        traceEventStart(1769390336, $dirty, -1, 'id.haaweejee.landingpage.sections.FooterMenu (FooterSection.kt:83)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = take_0(get_entries_1(), 6).j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'id.haaweejee.landingpage.sections.FooterMenu.<anonymous>' call
        var tmp0_modifier = textDecorationLine(fontWeight(fontSize(padding_0(fontFamily(toModifier(get_NavigationItemStyle(), $composer_0, 6), ['Roboto']), VOID, row_0._v ? get_px(20) : get_px(0), row_0._v ? get_px(0) : get_px(20)), get_px(12)), Companion_instance_4.a2r()), Companion_instance_7.w2q());
        var tmp1_path = element.n3o_1;
        var tmp2_text = element.l3o_1;
        Link(tmp1_path, tmp2_text, tmp0_modifier, null, null, null, null, null, $composer_0, 0, 248);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(FooterMenu$lambda(row_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_66($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterSectionKt$lambda_1$lambda_vzniu8($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-345959966, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$FooterSectionKt.lambda-1.<anonymous> (FooterSection.kt:46)');
      }
      FooterContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_67($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterSectionKt$lambda_2$lambda_a7u22p($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1753115205, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$FooterSectionKt.lambda-2.<anonymous> (FooterSection.kt:68)');
      }
      FooterMenu(false, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_68($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterSectionKt$lambda_3$lambda_ilsezi($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(34071554, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$FooterSectionKt.lambda-3.<anonymous> (FooterSection.kt:75)');
      }
      FooterMenu(false, $composer_0, 6, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$FooterSectionKt() {
    ComposableSingletons$FooterSectionKt_instance = this;
    var tmp = this;
    tmp.y3s_1 = ComposableLambda$invoke$ref_66(composableLambdaInstance(-345959966, false, ComposableSingletons$FooterSectionKt$lambda_1$lambda_vzniu8));
    var tmp_0 = this;
    tmp_0.z3s_1 = ComposableLambda$invoke$ref_67(composableLambdaInstance(1753115205, false, ComposableSingletons$FooterSectionKt$lambda_2$lambda_a7u22p));
    var tmp_1 = this;
    tmp_1.a3t_1 = ComposableLambda$invoke$ref_68(composableLambdaInstance(34071554, false, ComposableSingletons$FooterSectionKt$lambda_3$lambda_ilsezi));
  }
  var ComposableSingletons$FooterSectionKt_instance;
  function ComposableSingletons$FooterSectionKt_getInstance() {
    if (ComposableSingletons$FooterSectionKt_instance == null)
      new ComposableSingletons$FooterSectionKt();
    return ComposableSingletons$FooterSectionKt_instance;
  }
  function FooterSection$lambda($$changed) {
    return function ($composer, $force) {
      FooterSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function FooterContent$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-416848153, $changed, -1, 'id.haaweejee.landingpage.sections.FooterContent.<anonymous> (FooterSection.kt:59)');
        }
        var tmp0_modifier = size(Companion_instance_0, get_px(100));
        Image('logo.svg', tmp0_modifier, null, null, null, null, null, $composer_0, 6, 124);
        if ($breakpoint.n2(Breakpoint_SM_getInstance()) > 0) {
          $composer_0.v1d(-356492943);
          var tmp_0 = fillMaxWidth(Companion_instance_0);
          var tmp_1 = Center_instance_0;
          Row(tmp_0, tmp_1, null, null, ComposableSingletons$FooterSectionKt_getInstance().z3s_1, $composer_0, 24576, 12);
          $composer_0.x1d();
        } else {
          $composer_0.v1d(-356289893);
          var tmp_2 = fillMaxWidth(Companion_instance_0);
          var tmp_3 = CenterHorizontally_instance;
          Column(tmp_2, null, tmp_3, null, ComposableSingletons$FooterSectionKt_getInstance().a3t_1, $composer_0, 24576, 10);
          $composer_0.x1d();
        }
        SocialBar(true, $composer_0, 6, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_69($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function FooterContent$lambda_0($$changed) {
    return function ($composer, $force) {
      FooterContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function FooterMenu$lambda($row, $$changed, $$default) {
    return function ($composer, $force) {
      FooterMenu($row._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function MainSection(onMenuClicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(992829240);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(onMenuClicked) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(992829240, $dirty, -1, 'id.haaweejee.landingpage.sections.MainSection (MainSection.kt:38)');
      }
      var tmp = maxWidth(id(Companion_instance_0, Section_Home_getInstance().k3o_1), get_px(2880));
      var tmp_0 = TopCenter_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.MainSection.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(136849778, true, MainSection$lambda(onMenuClicked), $composer_0, 54);
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
        // Inline function 'id.haaweejee.landingpage.sections.MainSection.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_81(dispatchReceiver);
        $composer_1.q1f(value);
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
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(MainSection$lambda_0(onMenuClicked, $changed));
    }
  }
  function MainBackground($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1178913747);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1178913747, $changed, -1, 'id.haaweejee.landingpage.sections.MainBackground (MainSection.kt:51)');
      }
      var tmp0_modifier = objectFit(fillMaxSize(Companion_instance_0), Companion_instance_11.k2s());
      var tmp1_src = 'background.svg';
      Image_0(tmp1_src, 'Background Image', tmp0_modifier, null, null, null, null, $composer_0, 54, 120);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(MainBackground$lambda($changed));
    }
  }
  function MainContent(onMenuClicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(423186468);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(onMenuClicked) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(423186468, $dirty, -1, 'id.haaweejee.landingpage.sections.MainContent (MainSection.kt:62)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp0_modifier = fillMaxSize(Companion_instance_0);
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.MainContent.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1052238989, true, MainContent$lambda(onMenuClicked, breakpoint), $composer_0, 54);
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
        // Inline function 'id.haaweejee.landingpage.sections.MainContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_83(dispatchReceiver);
        $composer_1.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp0_modifier, SpaceBetween_instance, CenterHorizontally_instance, null, tmp0, $composer_0, 24576, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(MainContent$lambda_0(onMenuClicked, $changed));
    }
  }
  function MainText(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(650880993);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f15(breakpoint) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(650880993, $dirty, -1, 'id.haaweejee.landingpage.sections.MainText (MainSection.kt:82)');
      }
      var tmp = Center_instance_0;
      var tmp_0 = CenterVertically_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.MainText.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(887639550, true, MainText$lambda(breakpoint), $composer_0, 54);
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
        // Inline function 'id.haaweejee.landingpage.sections.MainText.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_85(dispatchReceiver);
        $composer_1.q1f(value);
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
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(MainText$lambda_0(breakpoint, $changed));
    }
  }
  function ComposableLambda$invoke$ref_70($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_71($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_72($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_73($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_74($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_5$lambda_oqh5ky($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1946130191, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-5.<anonymous> (MainSection.kt:157)');
    }
    var tmp0_modifier = textDecorationLine(color(Companion_instance_0, Theme_White_getInstance().u3n_1), Companion_instance_7.w2q());
    var tmp1_path = Section_Contact_getInstance().n3o_1;
    Link(tmp1_path, 'Hire Me', tmp0_modifier, null, null, null, null, null, $composer_0, 54, 248);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_75($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_6$lambda_435bh9($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(401948472, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-6.<anonymous> (MainSection.kt:175)');
    }
    var tmp0_modifier = textDecorationLine(color(Companion_instance_0, Theme_White_getInstance().u3n_1), Companion_instance_7.w2q());
    Link('https://drive.google.com/file/d/1yoyqlOOevWgEvm77tRyThD_PynL3zxxS/view?usp=sharing', 'Download My CV', tmp0_modifier, null, null, null, null, null, $composer_0, 54, 248);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_76($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_7$lambda_wwrsjg($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1964963797, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-7.<anonymous> (MainSection.kt:146)');
      }
      Button(toAttrs(cursor(color(backgroundColor(margin_0(borderRadius(border(height(toModifier(get_MainButtonCVStyle(), $composer_0, 6), get_px(40)), get_px(0)), get_px(5)), VOID, VOID, get_px(10)), Theme_Primary_getInstance().u3n_1), Theme_White_getInstance().u3n_1), Companion_instance_3.t2q())), ComposableSingletons$MainSectionKt_getInstance().f3t_1, $composer_0, 48, 0);
      Button(toAttrs(cursor(color(backgroundColor(borderRadius(border(height(toModifier(get_MainButtonCVStyle(), $composer_0, 6), get_px(40)), get_px(0)), get_px(5)), Theme_Primary_getInstance().u3n_1), Theme_White_getInstance().u3n_1), Companion_instance_3.t2q())), ComposableSingletons$MainSectionKt_getInstance().g3t_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_77($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_8$lambda_9apsdh($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-502291238, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-8.<anonymous> (MainSection.kt:197)');
    }
    var tmp0_modifier = textDecorationLine(color(Companion_instance_0, Theme_White_getInstance().u3n_1), Companion_instance_7.w2q());
    var tmp1_path = Section_Contact_getInstance().n3o_1;
    Link(tmp1_path, 'Hire Me', tmp0_modifier, null, null, null, null, null, $composer_0, 54, 248);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_78($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_9$lambda_jiwooq($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(293635587, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-9.<anonymous> (MainSection.kt:215)');
    }
    var tmp0_modifier = textDecorationLine(color(Companion_instance_0, Theme_White_getInstance().u3n_1), Companion_instance_7.w2q());
    Link('https://drive.google.com/file/d/1yoyqlOOevWgEvm77tRyThD_PynL3zxxS/view?usp=sharing', 'Download My CV', tmp0_modifier, null, null, null, null, null, $composer_0, 54, 248);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_79($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_10$lambda_3j64xo($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1797729184, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-10.<anonymous> (MainSection.kt:186)');
      }
      Button(toAttrs(cursor(color(backgroundColor(margin(borderRadius(border(height(toModifier(get_MainButtonStyle(), $composer_0, 6), get_px(40)), get_px(0)), get_px(5)), VOID, get_px(10)), Theme_Primary_getInstance().u3n_1), Theme_White_getInstance().u3n_1), Companion_instance_3.t2q())), ComposableSingletons$MainSectionKt_getInstance().i3t_1, $composer_0, 48, 0);
      Button(toAttrs(cursor(color(backgroundColor(borderRadius(border(height(toModifier(get_MainButtonCVStyle(), $composer_0, 6), get_px(40)), get_px(0)), get_px(5)), Theme_Primary_getInstance().u3n_1), Theme_White_getInstance().u3n_1), Companion_instance_3.t2q())), ComposableSingletons$MainSectionKt_getInstance().j3t_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_80($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_11$lambda_pagc4j($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(3293513, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$MainSectionKt.lambda-11.<anonymous> (MainSection.kt:235)');
      }
      var tmp0_modifier = fillMaxWidth(Companion_instance_0);
      var tmp1_src = 'main_image.png';
      Image_0(tmp1_src, '', tmp0_modifier, null, null, null, null, $composer_0, 54, 120);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainSectionKt() {
    ComposableSingletons$MainSectionKt_instance = this;
    var tmp = this;
    tmp.b3t_1 = ComposableLambda$invoke$ref_70(composableLambdaInstance(1334472457, false, ComposableSingletons$MainSectionKt$lambda_1$lambda_21924i));
    var tmp_0 = this;
    tmp_0.c3t_1 = ComposableLambda$invoke$ref_71(composableLambdaInstance(417382130, false, ComposableSingletons$MainSectionKt$lambda_2$lambda_uuvj6p));
    var tmp_1 = this;
    tmp_1.d3t_1 = ComposableLambda$invoke$ref_72(composableLambdaInstance(-1854085615, false, ComposableSingletons$MainSectionKt$lambda_3$lambda_bcm1q8));
    var tmp_2 = this;
    tmp_2.e3t_1 = ComposableLambda$invoke$ref_73(composableLambdaInstance(169413936, false, ComposableSingletons$MainSectionKt$lambda_4$lambda_hh0fbz));
    var tmp_3 = this;
    tmp_3.f3t_1 = ComposableLambda$invoke$ref_74(composableLambdaInstance(1946130191, false, ComposableSingletons$MainSectionKt$lambda_5$lambda_oqh5ky));
    var tmp_4 = this;
    tmp_4.g3t_1 = ComposableLambda$invoke$ref_75(composableLambdaInstance(401948472, false, ComposableSingletons$MainSectionKt$lambda_6$lambda_435bh9));
    var tmp_5 = this;
    tmp_5.h3t_1 = ComposableLambda$invoke$ref_76(composableLambdaInstance(1964963797, false, ComposableSingletons$MainSectionKt$lambda_7$lambda_wwrsjg));
    var tmp_6 = this;
    tmp_6.i3t_1 = ComposableLambda$invoke$ref_77(composableLambdaInstance(-502291238, false, ComposableSingletons$MainSectionKt$lambda_8$lambda_9apsdh));
    var tmp_7 = this;
    tmp_7.j3t_1 = ComposableLambda$invoke$ref_78(composableLambdaInstance(293635587, false, ComposableSingletons$MainSectionKt$lambda_9$lambda_jiwooq));
    var tmp_8 = this;
    tmp_8.k3t_1 = ComposableLambda$invoke$ref_79(composableLambdaInstance(1797729184, false, ComposableSingletons$MainSectionKt$lambda_10$lambda_3j64xo));
    var tmp_9 = this;
    tmp_9.l3t_1 = ComposableLambda$invoke$ref_80(composableLambdaInstance(3293513, false, ComposableSingletons$MainSectionKt$lambda_11$lambda_pagc4j));
  }
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
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(136849778, $changed, -1, 'id.haaweejee.landingpage.sections.MainSection.<anonymous> (MainSection.kt:45)');
        }
        MainBackground($composer_0, 0);
        MainContent($onMenuClicked, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_81($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function MainSection$lambda_0($onMenuClicked, $$changed) {
    return function ($composer, $force) {
      MainSection($onMenuClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function MainBackground$lambda($$changed) {
    return function ($composer, $force) {
      MainBackground($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function MainContent$lambda$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(484918902, $changed, -1, 'id.haaweejee.landingpage.sections.MainContent.<anonymous>.<anonymous> (MainSection.kt:76)');
        }
        MainText($breakpoint, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_82($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function MainContent$lambda($onMenuClicked, $breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(1052238989, $changed, -1, 'id.haaweejee.landingpage.sections.MainContent.<anonymous> (MainSection.kt:70)');
        }
        Header($onMenuClicked, $composer_0, 0);
        var tmp_0 = fillMaxSize(Companion_instance_0);
        var tmp_1 = Center_instance_0;
        var tmp_2 = CenterHorizontally_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.sections.MainContent.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(484918902, true, MainContent$lambda$lambda($breakpoint), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.f15(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.f1f();
        var tmp_3;
        if (invalid || it === Companion_getInstance().n18_1) {
          // Inline function 'id.haaweejee.landingpage.sections.MainContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_82(dispatchReceiver);
          $composer_1.q1f(value);
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
          tmp_5 = Unit_instance;
        }
        tmp = tmp_5;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_83($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function MainContent$lambda_0($onMenuClicked, $$changed) {
    return function ($composer, $force) {
      MainContent($onMenuClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function MainText$lambda$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-238507801, $changed, -1, 'id.haaweejee.landingpage.sections.MainText.<anonymous>.<anonymous> (MainSection.kt:95)');
        }
        P(toAttrs(color(fontWeight(fontSize(fontFamily(margin_1(Companion_instance_0, get_px(0)), ['Roboto']), $breakpoint.n2(Breakpoint_LG_getInstance()) >= 0 ? get_px(30) : get_px(20)), Companion_instance_4.a2r()), Theme_Primary_getInstance().u3n_1)), ComposableSingletons$MainSectionKt_getInstance().b3t_1, $composer_0, 48, 0);
        P(toAttrs(color(fontWeight(fontSize(fontFamily(margin_0(Companion_instance_0, get_px(0), VOID, get_px(0)), ['Roboto']), $breakpoint.n2(Breakpoint_LG_getInstance()) >= 0 ? get_px(40) : get_px(40)), Companion_instance_4.c2r()), Theme_Secondary_getInstance().u3n_1)), ComposableSingletons$MainSectionKt_getInstance().c3t_1, $composer_0, 48, 0);
        P(toAttrs(color(fontWeight(fontSize(fontFamily(margin_0(Companion_instance_0, get_px(10), VOID, get_px(5)), ['Roboto']), get_px(20)), Companion_instance_4.b2r()), Theme_Secondary_getInstance().u3n_1)), ComposableSingletons$MainSectionKt_getInstance().d3t_1, $composer_0, 48, 0);
        P(toAttrs(color(fontWeight(fontSize(fontFamily(maxWidth(margin_0(Companion_instance_0, VOID, VOID, get_px(25)), get_px(400)), ['Roboto']), get_px(15)), Companion_instance_4.a2r()), Theme_Secondary_getInstance().u3n_1)), ComposableSingletons$MainSectionKt_getInstance().e3t_1, $composer_0, 48, 0);
        if ($breakpoint.n2(Breakpoint_SM_getInstance()) < 0) {
          $composer_0.v1d(97870893);
          var tmp_0 = fillMaxWidth(Companion_instance_0);
          var tmp_1 = Center_instance_0;
          var tmp_2 = CenterHorizontally_instance;
          Column(tmp_0, tmp_1, tmp_2, null, ComposableSingletons$MainSectionKt_getInstance().h3t_1, $composer_0, 24576, 8);
          $composer_0.x1d();
        } else {
          $composer_0.v1d(99900835);
          Row(null, null, null, null, ComposableSingletons$MainSectionKt_getInstance().k3t_1, $composer_0, 24576, 15);
          $composer_0.x1d();
        }
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_84($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function MainText$lambda($breakpoint) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(887639550, $changed, -1, 'id.haaweejee.landingpage.sections.MainText.<anonymous> (MainSection.kt:87)');
        }
        $composer_0.v1d(1481383706);
        if ($breakpoint.n2(Breakpoint_MD_getInstance()) > 0) {
          SocialBar(false, $composer_0, 0, 1);
        }
        $composer_0.x1d();
        var tmp_0 = margin_1(Companion_instance_0, VOID, $breakpoint.n2(Breakpoint_SM_getInstance()) < 0 ? get_px(20) : get_px(0));
        // Inline function 'kotlin.run' call
        // Inline function 'id.haaweejee.landingpage.sections.MainText.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-238507801, true, MainText$lambda$lambda($breakpoint), $composer_0, 54);
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
          // Inline function 'id.haaweejee.landingpage.sections.MainText.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_84(dispatchReceiver);
          $composer_1.q1f(value);
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
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_85($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function MainText$lambda_0($breakpoint, $$changed) {
    return function ($composer, $force) {
      MainText($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PortfolioSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-624372260);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-624372260, $changed, -1, 'id.haaweejee.landingpage.sections.PortfolioSection (PortfolioSection.kt:38)');
      }
      var tmp = padding_2(maxWidth(id(Companion_instance_0, Section_Portfolio_getInstance().k3o_1), get_px(2880)), get_px(120));
      var tmp_0 = TopCenter_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$PortfolioSectionKt_getInstance().m3t_1, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(PortfolioSection$lambda($changed));
    }
  }
  function PortfolioContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1240079560);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1240079560, $changed, -1, 'id.haaweejee.landingpage.sections.PortfolioContent (PortfolioSection.kt:51)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxWidth(Companion_instance_0, breakpoint.n2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_0 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'id.haaweejee.landingpage.sections.PortfolioContent.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-734128769, true, PortfolioContent$lambda(breakpoint), $composer_0, 54);
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
        // Inline function 'id.haaweejee.landingpage.sections.PortfolioContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_89(dispatchReceiver);
        $composer_1.q1f(value);
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
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(PortfolioContent$lambda_0($changed));
    }
  }
  function PortfolioCards(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-879902865);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f15(breakpoint) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-879902865, $dirty, -1, 'id.haaweejee.landingpage.sections.PortfolioCards (PortfolioSection.kt:69)');
      }
      var tmp = scrollBehavior(overflow(margin_0(maxWidth(padding_2(fillMaxWidth(id(Companion_instance_0, 'scrollableContainer')), VOID, VOID, get_px(25)), breakpoint.n2(Breakpoint_MD_getInstance()) > 0 ? get_px(950) : breakpoint.n2(Breakpoint_SM_getInstance()) > 0 ? get_px(625) : get_px(300)), VOID, VOID, get_px(25)), Companion_instance_9.q2s()), Companion_instance_10.t2s());
      Row(tmp, null, null, null, ComposableSingletons$PortfolioSectionKt_getInstance().n3t_1, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(PortfolioCards$lambda(breakpoint, $changed));
    }
  }
  function PortfolioNavigation($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(170417881);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(170417881, $changed, -1, 'id.haaweejee.landingpage.sections.PortfolioNavigation (PortfolioSection.kt:95)');
      }
      var tmp = fillMaxWidth(Companion_instance_0);
      var tmp_0 = Center_instance_0;
      Row(tmp, tmp_0, null, null, ComposableSingletons$PortfolioSectionKt_getInstance().o3t_1, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(PortfolioNavigation$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_86($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_1$lambda_ozf5($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-1389931806, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-1.<anonymous> (PortfolioSection.kt:46)');
      }
      PortfolioContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_87($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_2$lambda_subghc($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(609031474, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-2.<anonymous> (PortfolioSection.kt:84)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = get_entries_0().j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'id.haaweejee.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-2.<anonymous>.<anonymous>' call
        var tmp = margin(Companion_instance_0, VOID, !element.equals(Portfolio_Two_getInstance()) ? get_px(25) : get_px(0));
        PortfolioCard(tmp, element, null, $composer_0, 0, 4);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_88($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_3$lambda_dd64fl($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1539652406, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-3.<anonymous> (PortfolioSection.kt:100)');
      }
      var tmp = cursor(margin(toModifier(get_PortfolioArrowIconStyle(), $composer_0, 6), VOID, get_px(40)), Companion_instance_3.t2q());
      $composer_0.v1d(1069009920);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.f1f();
      var tmp_0;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-3.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk;
        $composer_0.q1f(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.x1d();
      FaArrowLeft(onClick(tmp, tmp0_group), IconSize_LG_getInstance(), $composer_0, 48, 0);
      var tmp_2 = cursor(toModifier(get_PortfolioArrowIconStyle(), $composer_0, 6), Companion_instance_3.t2q());
      $composer_0.v1d(1069021405);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.f1f();
      var tmp_3;
      if (false || it_0 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.sections.ComposableSingletons$PortfolioSectionKt.lambda-3.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk_0;
        $composer_0.q1f(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.x1d();
      FaArrowRight(onClick(tmp_2, tmp1_group), IconSize_LG_getInstance(), $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk(it) {
    var tmp0_safe_receiver = document.getElementById('scrollableContainer');
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.scrollBy(-325.0, 0.0);
    }
    return Unit_instance;
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk_0(it) {
    var tmp0_safe_receiver = document.getElementById('scrollableContainer');
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.scrollBy(325.0, 0.0);
    }
    return Unit_instance;
  }
  function ComposableSingletons$PortfolioSectionKt() {
    ComposableSingletons$PortfolioSectionKt_instance = this;
    var tmp = this;
    tmp.m3t_1 = ComposableLambda$invoke$ref_86(composableLambdaInstance(-1389931806, false, ComposableSingletons$PortfolioSectionKt$lambda_1$lambda_ozf5));
    var tmp_0 = this;
    tmp_0.n3t_1 = ComposableLambda$invoke$ref_87(composableLambdaInstance(609031474, false, ComposableSingletons$PortfolioSectionKt$lambda_2$lambda_subghc));
    var tmp_1 = this;
    tmp_1.o3t_1 = ComposableLambda$invoke$ref_88(composableLambdaInstance(1539652406, false, ComposableSingletons$PortfolioSectionKt$lambda_3$lambda_dd64fl));
  }
  var ComposableSingletons$PortfolioSectionKt_instance;
  function ComposableSingletons$PortfolioSectionKt_getInstance() {
    if (ComposableSingletons$PortfolioSectionKt_instance == null)
      new ComposableSingletons$PortfolioSectionKt();
    return ComposableSingletons$PortfolioSectionKt_instance;
  }
  function PortfolioSection$lambda($$changed) {
    return function ($composer, $force) {
      PortfolioSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PortfolioContent$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-734128769, $changed, -1, 'id.haaweejee.landingpage.sections.PortfolioContent.<anonymous> (PortfolioSection.kt:58)');
        }
        var tmp_0 = margin_0(fillMaxWidth(Companion_instance_0), VOID, VOID, get_px(25));
        var tmp_1 = Section_Portfolio_getInstance();
        SectionTitle(tmp_0, tmp_1, null, $composer_0, 48, 4);
        PortfolioCards($breakpoint, $composer_0, 0);
        PortfolioNavigation($composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_89($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function PortfolioContent$lambda_0($$changed) {
    return function ($composer, $force) {
      PortfolioContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PortfolioCards$lambda($breakpoint, $$changed) {
    return function ($composer, $force) {
      PortfolioCards($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PortfolioNavigation$lambda($$changed) {
    return function ($composer, $force) {
      PortfolioNavigation($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ServiceSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1722389814);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1722389814, $changed, -1, 'id.haaweejee.landingpage.sections.ServiceSection (ServiceSection.kt:25)');
      }
      var tmp = padding_2(maxWidth(id(Companion_instance_0, Section_Service_getInstance().k3o_1), get_px(2880)), get_px(50));
      var tmp_0 = TopCenter_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$ServiceSectionKt_getInstance().p3t_1, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(ServiceSection$lambda($changed));
    }
  }
  function ServiceContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-184047838);
    if (!($changed === 0) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-184047838, $changed, -1, 'id.haaweejee.landingpage.sections.ServiceContent (ServiceSection.kt:38)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxWidth(Companion_instance_0, breakpoint.n2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_0 = CenterHorizontally_instance;
      Column(tmp, null, tmp_0, null, ComposableSingletons$ServiceSectionKt_getInstance().r3t_1, $composer_0, 24576, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(ServiceContent$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_90($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$ServiceSectionKt$lambda_1$lambda_vjhl50($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(724272444, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$ServiceSectionKt.lambda-1.<anonymous> (ServiceSection.kt:33)');
      }
      ServiceContent($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_91($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function ComposableSingletons$ServiceSectionKt$lambda_2$lambda_anzzrx($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1766230210, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$ServiceSectionKt.lambda-2.<anonymous> (ServiceSection.kt:53)');
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = get_entries_2();
      var tmp$ret$0 = copyToArray(this_0);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = take(tmp$ret$0, 3).j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'id.haaweejee.landingpage.sections.ComposableSingletons$ServiceSectionKt.lambda-2.<anonymous>.<anonymous>' call
        ServiceCard(element, $composer_0, 0);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_92($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$ServiceSectionKt$lambda_3$lambda_i5mhaa($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-1616211111, $changed, -1, 'id.haaweejee.landingpage.sections.ComposableSingletons$ServiceSectionKt.lambda-3.<anonymous> (ServiceSection.kt:45)');
      }
      SectionTitle(margin_0(fillMaxWidth(Companion_instance_0), VOID, VOID, get_px(20)), Section_Service_getInstance(), CenterHorizontally_instance, $composer_0, 48, 0);
      var tmp = numColumns(1, 2, 3);
      SimpleGrid(tmp, null, null, null, ComposableSingletons$ServiceSectionKt_getInstance().q3t_1, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ServiceSectionKt() {
    ComposableSingletons$ServiceSectionKt_instance = this;
    var tmp = this;
    tmp.p3t_1 = ComposableLambda$invoke$ref_90(composableLambdaInstance(724272444, false, ComposableSingletons$ServiceSectionKt$lambda_1$lambda_vjhl50));
    var tmp_0 = this;
    tmp_0.q3t_1 = ComposableLambda$invoke$ref_91(composableLambdaInstance(1766230210, false, ComposableSingletons$ServiceSectionKt$lambda_2$lambda_anzzrx));
    var tmp_1 = this;
    tmp_1.r3t_1 = ComposableLambda$invoke$ref_92(composableLambdaInstance(-1616211111, false, ComposableSingletons$ServiceSectionKt$lambda_3$lambda_i5mhaa));
  }
  var ComposableSingletons$ServiceSectionKt_instance;
  function ComposableSingletons$ServiceSectionKt_getInstance() {
    if (ComposableSingletons$ServiceSectionKt_instance == null)
      new ComposableSingletons$ServiceSectionKt();
    return ComposableSingletons$ServiceSectionKt_instance;
  }
  function ServiceSection$lambda($$changed) {
    return function ($composer, $force) {
      ServiceSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ServiceContent$lambda($$changed) {
    return function ($composer, $force) {
      ServiceContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
    $this$CssStyle.t35(AboutImageStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.y34(AboutImageStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function AboutImageStyle$lambda$lambda() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    var tmp = Companion_instance_0;
    return transition(rotate(borderRadius(styleModifier(tmp, AboutImageStyle$lambda$lambda$lambda), get_px(0)), get_deg(0)), [Companion_instance_5.u2t(Companion_instance_15.b2u(), get_ms(200))]);
  }
  function AboutImageStyle$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    filter($this$styleModifier, [grayscale(get_percent(100))]);
    return Unit_instance;
  }
  function AboutImageStyle$lambda$lambda_0() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    var tmp = Companion_instance_0;
    return rotate(borderRadius(styleModifier(tmp, AboutImageStyle$lambda$lambda$lambda_0), get_px(100)), get_deg(10));
  }
  function AboutImageStyle$lambda$lambda$lambda_0($this$styleModifier) {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    filter($this$styleModifier, [grayscale(get_percent(0))]);
    return Unit_instance;
  }
  function AboutTextStyle$lambda($this$CssStyle) {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    $this$CssStyle.t35(AboutTextStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.y34(AboutTextStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function AboutTextStyle$lambda$lambda() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    return opacity(Companion_instance_0, get_percent(50));
  }
  function AboutTextStyle$lambda$lambda_0() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    return opacity(Companion_instance_0, get_percent(100));
  }
  function ProgrammingCardStyle$lambda($this$CssStyle) {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    $this$CssStyle.t35(ProgrammingCardStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.y34(ProgrammingCardStyle$lambda$lambda_0);
    $this$CssStyle.h34(' > #iconBox', ProgrammingCardStyle$lambda$lambda_1);
    $this$CssStyle.h34(':hover > #iconBox', ProgrammingCardStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function ProgrammingCardStyle$lambda$lambda() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(transition_0(transition_0(color(backgroundColor(border(tmp, tmp_0, 'solid', Theme_LighterGray_getInstance().u3n_1), Theme_White_getInstance().u3n_1), Theme_Secondary_getInstance().u3n_1), Companion_instance_5.x2t('border', get_ms(200))), Companion_instance_5.x2t('background', get_ms(200))), Companion_instance_5.x2t('color', get_ms(200)));
  }
  function ProgrammingCardStyle$lambda$lambda_0() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return color(backgroundColor(border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().u3n_1), Theme_Primary_getInstance().u3n_1), Theme_White_getInstance().u3n_1);
  }
  function ProgrammingCardStyle$lambda$lambda_1() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    return transition_0(backgroundColor(Companion_instance_0, Colors_instance.z30()), Companion_instance_5.x2t('background', get_ms(200)));
  }
  function ProgrammingCardStyle$lambda$lambda_2() {
    _init_properties_AboutSectionStyle_kt__9u1h15();
    return backgroundColor(Companion_instance_0, Colors_instance.u31());
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
    $this$CssStyle.t35(BackToTopButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.y34(BackToTopButtonStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function BackToTopButtonStyle$lambda$lambda() {
    _init_properties_BackToTopButtonStyle_kt__9iyayc();
    return transition(rotate(Companion_instance_0, get_deg(180)), [Companion_instance_5.x2t('rotate', get_ms(300))]);
  }
  function BackToTopButtonStyle$lambda$lambda_0() {
    _init_properties_BackToTopButtonStyle_kt__9iyayc();
    return rotate(Companion_instance_0, get_deg(0));
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
    $this$CssStyle.t35(InputStyle$lambda$lambda);
    var tmp = get_focus($this$CssStyle);
    tmp.y34(InputStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle);
    tmp_0.y34(InputStyle$lambda$lambda_1);
    return Unit_instance;
  }
  function InputStyle$lambda$lambda() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp, tmp_0, 'solid', Theme_LightGray_getInstance().u3n_1), [Companion_instance_5.x2t('border', get_ms(200))]);
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().u3n_1);
  }
  function InputStyle$lambda$lambda_1() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().u3n_1);
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
    $this$CssStyle.t35(NavigationItemStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.y34(NavigationItemStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function NavigationItemStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    var tmp = Companion_instance_0;
    return transition(color(styleModifier(tmp, NavigationItemStyle$lambda$lambda$lambda), Theme_Secondary_getInstance().u3n_1), [Companion_instance_5.x2t('color', get_ms(200))]);
  }
  function NavigationItemStyle$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$styleModifier.x2j('--bs-link-color', Theme_Secondary_getInstance().u3n_1);
    return Unit_instance;
  }
  function NavigationItemStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    var tmp = Companion_instance_0;
    return color(styleModifier(tmp, NavigationItemStyle$lambda$lambda$lambda_0), Theme_Primary_getInstance().u3n_1);
  }
  function NavigationItemStyle$lambda$lambda$lambda_0($this$styleModifier) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$styleModifier.x2j('--bs-link-hover-color', Theme_Primary_getInstance().u3n_1);
    return Unit_instance;
  }
  function LogoStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.t35(LogoStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.y34(LogoStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function LogoStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    var tmp = Companion_instance_0;
    return transition(transform(tmp, LogoStyle$lambda$lambda$lambda), [Companion_instance_5.x2t('transform', get_ms(200))]);
  }
  function LogoStyle$lambda$lambda$lambda($this$transform) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$transform.u2l(get_deg(0));
    return Unit_instance;
  }
  function LogoStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    var tmp = Companion_instance_0;
    return transform(tmp, LogoStyle$lambda$lambda$lambda_0);
  }
  function LogoStyle$lambda$lambda$lambda_0($this$transform) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$transform.u2l(get_deg(-10));
    return Unit_instance;
  }
  function SocialLinkStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.t35(SocialLinkStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.y34(SocialLinkStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function SocialLinkStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return transition(color(Companion_instance_0, Theme_Gray_getInstance().u3n_1), [Companion_instance_5.x2t('color', get_ms(200))]);
  }
  function SocialLinkStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return color(Companion_instance_0, Theme_Primary_getInstance().u3n_1);
  }
  function GithubLinkStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.t35(GithubLinkStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.y34(GithubLinkStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function GithubLinkStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return transition(color(Companion_instance_0, Theme_Gray_getInstance().u3n_1), [Companion_instance_5.x2t('color', get_ms(200))]);
  }
  function GithubLinkStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return color(Companion_instance_0, Colors_instance.b31());
  }
  function UpworkLinkStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.t35(UpworkLinkStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.y34(UpworkLinkStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function UpworkLinkStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return transition(color(Companion_instance_0, Theme_Gray_getInstance().u3n_1), [Companion_instance_5.x2t('color', get_ms(200))]);
  }
  function UpworkLinkStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return color(Companion_instance_0, rgba(21, 168, 0, 1.0));
  }
  function MainButtonStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.t35(MainButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.y34(MainButtonStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function MainButtonStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return transition(width(Companion_instance_0, get_px(100)), [Companion_instance_5.x2t('width', get_ms(200))]);
  }
  function MainButtonStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return width(Companion_instance_0, get_px(120));
  }
  function MainButtonCVStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.t35(MainButtonCVStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.y34(MainButtonCVStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function MainButtonCVStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return transition(width(Companion_instance_0, get_px(150)), [Companion_instance_5.x2t('width', get_ms(200))]);
  }
  function MainButtonCVStyle$lambda$lambda_0() {
    _init_properties_MainSectionStyle_kt__i45i63();
    return width(Companion_instance_0, get_px(180));
  }
  function MainImageStyle$lambda($this$CssStyle) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$CssStyle.t35(MainImageStyle$lambda$lambda);
    return Unit_instance;
  }
  function MainImageStyle$lambda$lambda() {
    _init_properties_MainSectionStyle_kt__i45i63();
    var tmp = Companion_instance_0;
    return styleModifier(tmp, MainImageStyle$lambda$lambda$lambda);
  }
  function MainImageStyle$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_MainSectionStyle_kt__i45i63();
    filter_0($this$styleModifier, MainImageStyle$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function MainImageStyle$lambda$lambda$lambda$lambda($this$filter) {
    _init_properties_MainSectionStyle_kt__i45i63();
    $this$filter.r2l(get_percent(100));
    return Unit_instance;
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
    $this$CssStyle.h34(' > #columnParent > #boxParent > #greenOverlay', PortfolioSectionStyle$lambda$lambda);
    $this$CssStyle.h34(':hover > #columnParent > #boxParent > #greenOverlay', PortfolioSectionStyle$lambda$lambda_0);
    $this$CssStyle.h34(' > #columnParent > #boxParent > #greenOverlay > #linkIcon', PortfolioSectionStyle$lambda$lambda_1);
    $this$CssStyle.h34(':hover > #columnParent > #boxParent > #greenOverlay > #linkIcon', PortfolioSectionStyle$lambda$lambda_2);
    $this$CssStyle.h34(' > #columnParent > #portfolioTitle', PortfolioSectionStyle$lambda$lambda_3);
    $this$CssStyle.h34(':hover > #columnParent > #portfolioTitle', PortfolioSectionStyle$lambda$lambda_4);
    $this$CssStyle.h34(' > #columnParent > #portfolioDesc', PortfolioSectionStyle$lambda$lambda_5);
    $this$CssStyle.h34(':hover > #columnParent > #portfolioDesc', PortfolioSectionStyle$lambda$lambda_6);
    return Unit_instance;
  }
  function PortfolioSectionStyle$lambda$lambda() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return transition(width(Companion_instance_0, get_px(0)), [Companion_instance_5.x2t('width', get_ms(500))]);
  }
  function PortfolioSectionStyle$lambda$lambda_0() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return width(Companion_instance_0, get_px(300));
  }
  function PortfolioSectionStyle$lambda$lambda_1() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return visibility(Companion_instance_0, Companion_instance_2.q2s());
  }
  function PortfolioSectionStyle$lambda$lambda_2() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return visibility(Companion_instance_0, Companion_instance_2.d2u());
  }
  function PortfolioSectionStyle$lambda$lambda_3() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return transition(transition(translateX(color(Companion_instance_0, Theme_Secondary_getInstance().u3n_1), get_percent(0)), [Companion_instance_5.x2t('color', get_ms(200))]), [Companion_instance_5.x2t('translate', get_ms(200))]);
  }
  function PortfolioSectionStyle$lambda$lambda_4() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return translateX(color(Companion_instance_0, Theme_Primary_getInstance().u3n_1), get_percent(5));
  }
  function PortfolioSectionStyle$lambda$lambda_5() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return transition(translateX(Companion_instance_0, get_percent(0)), [Companion_instance_5.x2t('translate', get_ms(200))]);
  }
  function PortfolioSectionStyle$lambda$lambda_6() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return translateX(Companion_instance_0, get_percent(5));
  }
  function PortfolioArrowIconStyle$lambda($this$CssStyle) {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    $this$CssStyle.t35(PortfolioArrowIconStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.y34(PortfolioArrowIconStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function PortfolioArrowIconStyle$lambda$lambda() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return transition_0(color(Companion_instance_0, Theme_Gray_getInstance().u3n_1), Companion_instance_5.x2t('color', get_ms(200)));
  }
  function PortfolioArrowIconStyle$lambda$lambda_0() {
    _init_properties_PortofolioSectionStyle_kt__10rcx3();
    return color(Companion_instance_0, Theme_Primary_getInstance().u3n_1);
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
    $this$CssStyle.t35(ServiceCardStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.y34(ServiceCardStyle$lambda$lambda_0);
    $this$CssStyle.h34(' > #iconBox', ServiceCardStyle$lambda$lambda_1);
    $this$CssStyle.h34(':hover > #iconBox', ServiceCardStyle$lambda$lambda_2);
    $this$CssStyle.h34(' > p', ServiceCardStyle$lambda$lambda_3);
    $this$CssStyle.h34(':hover > p', ServiceCardStyle$lambda$lambda_4);
    return Unit_instance;
  }
  function ServiceCardStyle$lambda$lambda() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(transition_0(backgroundColor(border(tmp, tmp_0, 'solid', Theme_LighterGray_getInstance().u3n_1), Theme_White_getInstance().u3n_1), Companion_instance_5.x2t('border', get_ms(200))), Companion_instance_5.x2t('background', get_ms(200)));
  }
  function ServiceCardStyle$lambda$lambda_0() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return backgroundColor(border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().u3n_1), Theme_Primary_getInstance().u3n_1);
  }
  function ServiceCardStyle$lambda$lambda_1() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return transition_0(backgroundColor(Companion_instance_0, Colors_instance.z30()), Companion_instance_5.x2t('background', get_ms(200)));
  }
  function ServiceCardStyle$lambda$lambda_2() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return backgroundColor(Companion_instance_0, Colors_instance.u31());
  }
  function ServiceCardStyle$lambda$lambda_3() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return transition_0(color(Companion_instance_0, Theme_Secondary_getInstance().u3n_1), Companion_instance_5.x2t('color', get_ms(200)));
  }
  function ServiceCardStyle$lambda$lambda_4() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return color(Companion_instance_0, Colors_instance.u31());
  }
  var properties_initialized_ServiceSectionStyle_kt_3weqi9;
  function _init_properties_ServiceSectionStyle_kt__us8nvz() {
    if (!properties_initialized_ServiceSectionStyle_kt_3weqi9) {
      properties_initialized_ServiceSectionStyle_kt_3weqi9 = true;
      ServiceCardStyle = CssStyle(VOID, ServiceCardStyle$lambda);
    }
  }
  function ObserveViewPortEntered(sectionId, distanceFromTop, onViewPortEntered, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1241413219);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f15(sectionId) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1e(distanceFromTop) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.s1e(onViewPortEntered) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1241413219, $dirty, -1, 'id.haaweejee.landingpage.util.ObserveViewPortEntered (Function.kt:18)');
      }
      $composer_0.v1d(202158165);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1f();
      var tmp;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.util.ObserveViewPortEntered.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.x1d();
      var viewportEntered$delegate = tmp0_group;
      $composer_0.v1d(202160137);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.f1f();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.util.ObserveViewPortEntered.<anonymous>' call
        var value_0 = EventListener(ObserveViewPortEntered$lambda_1(sectionId, distanceFromTop, viewportEntered$delegate));
        this_1.q1f(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.x1d();
      var listener = tmp1_group;
      var tmp_3 = ObserveViewPortEntered$lambda(viewportEntered$delegate);
      $composer_0.v1d(202169259);
      var tmp4 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 896) === 256 | $composer_0.s1e(listener));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = tmp4.f1f();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().n18_1) {
        // Inline function 'id.haaweejee.landingpage.util.ObserveViewPortEntered.<anonymous>' call
        var value_1 = ObserveViewPortEntered$slambda_0(onViewPortEntered, listener, viewportEntered$delegate, null);
        tmp4.q1f(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.x1d();
      LaunchedEffect(tmp_3, tmp2_group, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    var tmp3_safe_receiver = $composer_0.y1f();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.l1l(ObserveViewPortEntered$lambda_2(sectionId, distanceFromTop, onViewPortEntered, $changed));
    }
  }
  function animateNumbers(number, delay, onUpdate, $completion) {
    delay = delay === VOID ? new Long(10, 0) : delay;
    var tmp = new $animateNumbersCOROUTINE$0(number, delay, onUpdate, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  }
  function ObserveViewPortEntered$lambda($viewportEntered$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $viewportEntered$delegate.e2();
  }
  function ObserveViewPortEntered$lambda_0($viewportEntered$delegate, _set____db54di) {
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $viewportEntered$delegate.is(_set____db54di);
    return Unit_instance;
  }
  function ObserveViewPortEntered$lambda_1($sectionId, $distanceFromTop, $viewportEntered$delegate) {
    return function (it) {
      var tmp0_safe_receiver = document.getElementById($sectionId);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getBoundingClientRect();
      var top = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.top;
      var tmp;
      if (!(top == null) && top < $distanceFromTop) {
        ObserveViewPortEntered$lambda_0($viewportEntered$delegate, true);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ObserveViewPortEntered$slambda($onViewPortEntered, $listener, $viewportEntered$delegate, resultContinuation) {
    this.r3u_1 = $onViewPortEntered;
    this.s3u_1 = $listener;
    this.t3u_1 = $viewportEntered$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ObserveViewPortEntered$slambda).b1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.c1n($this$LaunchedEffect, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(ObserveViewPortEntered$slambda).q9 = function (p1, $completion) {
    return this.b1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ObserveViewPortEntered$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        if (tmp === 0) {
          this.x8_1 = 1;
          if (ObserveViewPortEntered$lambda(this.t3u_1)) {
            this.r3u_1();
            window.removeEventListener('scroll', this.s3u_1);
          } else {
            window.addEventListener('scroll', this.s3u_1);
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(ObserveViewPortEntered$slambda).c1n = function ($this$LaunchedEffect, completion) {
    var i = new ObserveViewPortEntered$slambda(this.r3u_1, this.s3u_1, this.t3u_1, completion);
    i.u3u_1 = $this$LaunchedEffect;
    return i;
  };
  function ObserveViewPortEntered$slambda_0($onViewPortEntered, $listener, $viewportEntered$delegate, resultContinuation) {
    var i = new ObserveViewPortEntered$slambda($onViewPortEntered, $listener, $viewportEntered$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.b1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ObserveViewPortEntered$lambda_2($sectionId, $distanceFromTop, $onViewPortEntered, $$changed) {
    return function ($composer, $force) {
      ObserveViewPortEntered($sectionId, $distanceFromTop, $onViewPortEntered, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function $animateNumbersCOROUTINE$0(number, delay, onUpdate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a3u_1 = number;
    this.b3u_1 = delay;
    this.c3u_1 = onUpdate;
  }
  protoOf($animateNumbersCOROUTINE$0).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 4;
            var tmp_0 = this;
            tmp_0.d3u_1 = numberRangeToNumber(0, this.a3u_1);
            this.e3u_1 = this.d3u_1;
            this.f3u_1 = this.e3u_1.j();
            this.w8_1 = 1;
            continue $sm;
          case 1:
            if (!this.f3u_1.k()) {
              this.w8_1 = 3;
              continue $sm;
            }

            this.g3u_1 = this.f3u_1.l();
            var tmp_1 = this;
            tmp_1.h3u_1 = this.g3u_1;
            this.i3u_1 = this.h3u_1;
            this.w8_1 = 2;
            suspendResult = delay(this.b3u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.c3u_1(this.i3u_1);
            this.w8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x8_1 === 4) {
          throw e;
        } else {
          this.w8_1 = this.x8_1;
          this.z8_1 = e;
        }
      }
     while (true);
  };
  mainWrapper();
  return _;
}));

//# sourceMappingURL=landingpage.js.map
