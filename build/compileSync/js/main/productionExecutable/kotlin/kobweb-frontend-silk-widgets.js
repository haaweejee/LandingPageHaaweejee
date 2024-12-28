(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlinx-coroutines-core.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    globalThis['kobweb-frontend-silk-widgets'] = factory(typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['html-html-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-silk-foundation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(function (_, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var protoOf = kotlin_kotlin.$_$.x6;
  var initMetadataForObject = kotlin_kotlin.$_$.l6;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d4;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g3;
  var listOf = kotlin_kotlin.$_$.v3;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i3;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var VOID = kotlin_kotlin.$_$.e;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c3;
  var KProperty1 = kotlin_kotlin.$_$.j7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d6;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var CssStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var objectCreate = kotlin_kotlin.$_$.w6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.h6;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var Base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var marginBlock = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Companion_instance_7 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r2;
  var alignItems = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var Companion_instance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var Companion_instance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t2;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var descendants = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var marginBlock_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var Base_init_$Init$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j3;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var boxShadow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var Companion_instance_13 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x3;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var toModifier_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var ariaInvalid = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var ariaRequired = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var Input = kotlin_org_jetbrains_compose_html_html_core.$_$.u3;
  var setVariable_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var Companion_instance_14 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var toString = kotlin_kotlin.$_$.z6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var Unit = kotlin_kotlin.$_$.h9;
  var isNumber = kotlin_kotlin.$_$.q6;
  var placeholder = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var disabled = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x;
  var readOnly = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var required = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var autoComplete = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t1;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var Companion_instance_15 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var Companion_instance_16 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n3;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var Circle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var SVGStrokeLineCap_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n2;
  var Svg = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.p9;
  var SVGStrokeType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var SVGFillType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var SVGFillType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var SVGStrokeType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var ResponsiveValues = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var Breakpoint_ZERO_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var getValue = kotlin_kotlin.$_$.l3;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var Breakpoint_XL_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var registerRefScope_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w2;
  var mapCapacity = kotlin_kotlin.$_$.w3;
  var coerceAtLeast = kotlin_kotlin.$_$.a7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var TopStart_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c4;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var refScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.g7;
  var THROW_ISE = kotlin_kotlin.$_$.g9;
  var getLocalDelegateReference = kotlin_kotlin.$_$.b6;
  var CoroutineImpl = kotlin_kotlin.$_$.m5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var isInterface = kotlin_kotlin.$_$.p6;
  var initMetadataForLambda = kotlin_kotlin.$_$.k6;
  var Companion_instance_17 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w1;
  var Gray_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x1;
  var Red_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y1;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var get_name = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var KProperty0 = kotlin_kotlin.$_$.i7;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var KMutableProperty1 = kotlin_kotlin.$_$.h7;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(TabVars, 'TabVars');
  initMetadataForObject(CalloutVars, 'CalloutVars');
  initMetadataForCompanion(Companion);
  initMetadataForClass(CalloutType, 'CalloutType', VOID, Base);
  initMetadataForObject(ComposableSingletons$CalloutKt, 'ComposableSingletons$CalloutKt');
  initMetadataForObject(ButtonVars, 'ButtonVars');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ButtonSize, 'ButtonSize', VOID, Base);
  initMetadataForObject(CheckboxVars, 'CheckboxVars');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CheckboxSize, 'CheckboxSize', VOID, Base);
  initMetadataForObject(InputVars, 'InputVars');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(InputSize, 'InputSize', VOID, Base);
  initMetadataForObject(InputDefaults, 'InputDefaults');
  initMetadataForObject(SwitchVars, 'SwitchVars');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SwitchSize, 'SwitchSize', VOID, Base);
  initMetadataForObject(ComposableSingletons$ExclaimIconKt, 'ComposableSingletons$ExclaimIconKt');
  initMetadataForObject(ComposableSingletons$InfoIconKt, 'ComposableSingletons$InfoIconKt');
  initMetadataForObject(ComposableSingletons$LightbulbIconKt, 'ComposableSingletons$LightbulbIconKt');
  initMetadataForObject(ComposableSingletons$QuestionIconKt, 'ComposableSingletons$QuestionIconKt');
  initMetadataForObject(ComposableSingletons$QuoteIconKt, 'ComposableSingletons$QuoteIconKt');
  initMetadataForObject(ComposableSingletons$StopIconKt, 'ComposableSingletons$StopIconKt');
  initMetadataForObject(ComposableSingletons$WarningIconKt, 'ComposableSingletons$WarningIconKt');
  initMetadataForClass(Fill, 'Fill', Fill);
  initMetadataForClass(Stroke, 'Stroke', Stroke);
  initMetadataForObject(DividerVars, 'DividerVars');
  initMetadataForObject(SurfaceVars, 'SurfaceVars');
  initMetadataForLambda(Surface$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(OverlayVars, 'OverlayVars');
  initMetadataForObject(PopupVars, 'PopupVars');
  initMetadataForObject(TooltipVars, 'TooltipVars');
  initMetadataForObject(TransitionDurationVars, 'TransitionDurationVars');
  initMetadataForObject(FontSizeVars, 'FontSizeVars');
  initMetadataForObject(BorderRadiusVars, 'BorderRadiusVars');
  initMetadataForClass(MutableButton, 'MutableButton', VOID, ColorGroup);
  initMetadataForClass(MutableCallout, 'MutableCallout', VOID, ColorGroup);
  initMetadataForClass(MutableCheckbox, 'MutableCheckbox', VOID, ColorGroup);
  initMetadataForClass(MutableInput, 'MutableInput', VOID, ColorGroup);
  initMetadataForClass(MutableSwitch, 'MutableSwitch', VOID, ColorGroup);
  initMetadataForClass(MutableTab, 'MutableTab', VOID, ColorGroup);
  initMetadataForClass(MutableTooltip, 'MutableTooltip', VOID, ColorGroup);
  //endregion
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle;
  }
  var TabsStyle;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle;
  }
  var TabsTabRowStyle;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle;
  }
  var TabsTabStyle;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle;
  }
  var TabsPanelStyle;
  var com_varabyte_kobweb_silk_components_disclosure_TabVars$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_PanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable;
  function TabVars() {
    TabVars_instance = this;
    this.b3b_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().e2t();
    tmp.c3b_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.d3b_1 = StyleVariable('silk');
    this.e3b_1 = StyleVariable('silk');
    this.f3b_1 = StyleVariable('silk');
    this.g3b_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.h3b_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().a2r().e2t();
    tmp_1.i3b_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(TabVars).r3b = function () {
    return this.b3b_1.k2t(this, Color$factory());
  };
  protoOf(TabVars).s3b = function () {
    return this.c3b_1.k2t(this, BorderColor$factory());
  };
  protoOf(TabVars).t3b = function () {
    return this.d3b_1.k2t(this, BackgroundColor$factory());
  };
  protoOf(TabVars).u3b = function () {
    return this.e3b_1.k2t(this, DisabledBackgroundColor$factory());
  };
  protoOf(TabVars).v3b = function () {
    return this.f3b_1.k2t(this, HoverBackgroundColor$factory());
  };
  protoOf(TabVars).w3b = function () {
    return this.g3b_1.k2t(this, PressedBackgroundColor$factory());
  };
  protoOf(TabVars).x3b = function () {
    return this.h3b_1.k2t(this, BorderThickness$factory());
  };
  protoOf(TabVars).y3b = function () {
    return this.i3b_1.k2t(this, ColorTransitionDuration$factory());
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$lambda($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_instance;
  }
  function TabsTabRowStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_instance);
    var tmp_0 = TabVars_getInstance().x3b().e2t();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().s3b().e2t());
  }
  function TabsTabStyle$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.v1d(2044107546);
    var tmp0 = tabIndex(Companion_instance, 0);
    $composer_0.x1d();
    return tmp0;
  }
  function TabsTabStyle$lambda_0($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$CssStyle.t35(TabsTabStyle$lambda$lambda);
    var tmp = get_ariaDisabled($this$CssStyle);
    tmp.y34(TabsTabStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle).h35(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_0.y34(TabsTabStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).h35(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_1.y34(TabsTabStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function TabsTabStyle$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_instance, Companion_instance_1.t2q()), Companion_instance_2.z2t(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().y3b().e2t())), TabVars_getInstance().t3b().e2t()), TabVars_getInstance().r3b().e2t()), Companion_instance_3.w2q()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().x3b().e2t();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().s3b().e2t());
  }
  function TabsTabStyle$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.f2u(TabVars_getInstance().x3b().e2t());
  }
  function TabsTabStyle$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_instance, TabVars_getInstance().u3b().e2t()), Companion_instance_1.u2q());
  }
  function TabsTabStyle$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().v3b().e2t());
  }
  function TabsTabStyle$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().w3b().e2t());
  }
  function TabsPanelStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_instance, get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$lambda$lambda);
  }
  function TabsPanelStyle$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.b32(Companion_instance_4.r2s());
    return Unit_instance;
  }
  function Color$factory() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.r3b();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.s3b();
    }, null);
  }
  function BackgroundColor$factory() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.t3b();
    }, null);
  }
  function DisabledBackgroundColor$factory() {
    return getPropertyCallableRef('DisabledBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.u3b();
    }, null);
  }
  function HoverBackgroundColor$factory() {
    return getPropertyCallableRef('HoverBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.v3b();
    }, null);
  }
  function PressedBackgroundColor$factory() {
    return getPropertyCallableRef('PressedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.w3b();
    }, null);
  }
  function BorderThickness$factory() {
    return getPropertyCallableRef('BorderThickness', 1, KProperty1, function (receiver) {
      return receiver.x3b();
    }, null);
  }
  function ColorTransitionDuration$factory() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.y3b();
    }, null);
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle = CssStyle(VOID, TabsStyle$lambda);
      var tmp = Companion_instance_5;
      TabsTabRowStyle = base(tmp, VOID, TabsTabRowStyle$lambda);
      var tmp_0 = TabsTabStyle$lambda;
      TabsTabStyle = CssStyle_0(tmp_0, TabsTabStyle$lambda_0);
      var tmp_1 = Companion_instance_5;
      TabsPanelStyle = base(tmp_1, VOID, TabsPanelStyle$lambda);
      com_varabyte_kobweb_silk_components_disclosure_TabVars$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_PanelData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable = 8;
    }
  }
  function get_CalloutStyle() {
    _init_properties_Callout_kt__ksu682();
    return CalloutStyle;
  }
  var CalloutStyle;
  function get_LeftBorderedCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return LeftBorderedCalloutVariant;
  }
  var LeftBorderedCalloutVariant;
  function get_LeftBorderedFilledCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return LeftBorderedFilledCalloutVariant;
  }
  var LeftBorderedFilledCalloutVariant;
  function get_OutlinedCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return OutlinedCalloutVariant;
  }
  var OutlinedCalloutVariant;
  function get_MatchingLinkCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return MatchingLinkCalloutVariant;
  }
  var MatchingLinkCalloutVariant;
  var com_varabyte_kobweb_silk_components_display_CalloutVars$stable;
  var com_varabyte_kobweb_silk_components_display_CalloutType$stable;
  var com_varabyte_kobweb_silk_components_display_CalloutDefaults$stable;
  function CalloutVars() {
    CalloutVars_instance = this;
    this.z3b_1 = StyleVariable('silk');
    this.a3c_1 = StyleVariable('silk');
    this.b3c_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.5);
    tmp.c3c_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
  }
  protoOf(CalloutVars).r3b = function () {
    return this.z3b_1.k2t(this, Color$factory_0());
  };
  protoOf(CalloutVars).t3b = function () {
    return this.a3c_1.k2t(this, BackgroundColor$factory_0());
  };
  protoOf(CalloutVars).d3c = function () {
    return this.b3c_1.k2t(this, TitleFontSize$factory());
  };
  protoOf(CalloutVars).e3c = function () {
    return this.c3c_1.k2t(this, TitleGap$factory());
  };
  var CalloutVars_instance;
  function CalloutVars_getInstance() {
    if (CalloutVars_instance == null)
      new CalloutVars();
    return CalloutVars_instance;
  }
  function markdownParagraphHack(_this__u8e3s4) {
    _init_properties_Callout_kt__ksu682();
    _this__u8e3s4.h34(' >.callout-body>p:last-child', markdownParagraphHack$lambda);
  }
  function CalloutType$Companion$CAUTION$lambda(it) {
    return get_callout_0(toPalette(it)).f3c();
  }
  function CalloutType$Companion$IMPORTANT$lambda(it) {
    return get_callout_0(toPalette(it)).g3c();
  }
  function CalloutType$Companion$NOTE$lambda(it) {
    return get_callout_0(toPalette(it)).h3c();
  }
  function CalloutType$Companion$QUESTION$lambda(it) {
    return get_callout_0(toPalette(it)).i3c();
  }
  function CalloutType$Companion$QUOTE$lambda(it) {
    return get_callout_0(toPalette(it)).j3c();
  }
  function CalloutType$Companion$TIP$lambda(it) {
    return get_callout_0(toPalette(it)).k3c();
  }
  function CalloutType$Companion$WARNING$lambda(it) {
    return get_callout_0(toPalette(it)).l3c();
  }
  function CalloutType_init_$Init$(icon, label, provideColor, $this) {
    var tmp = CalloutType$_init_$lambda_4upqpt_0(provideColor);
    CalloutType.call($this, icon, label, tmp, CalloutType$_init_$lambda_4upqpt_1(provideColor));
    return $this;
  }
  function CalloutType_init_$Create$(icon, label, provideColor) {
    return CalloutType_init_$Init$(icon, label, provideColor, objectCreate(protoOf(CalloutType)));
  }
  function Companion() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = ComposableSingletons$CalloutKt_getInstance().m3c_1;
    tmp.t3c_1 = CalloutType_init_$Create$(tmp_0, 'Caution', CalloutType$Companion$CAUTION$lambda);
    var tmp_1 = this;
    var tmp_2 = ComposableSingletons$CalloutKt_getInstance().n3c_1;
    tmp_1.u3c_1 = CalloutType_init_$Create$(tmp_2, 'Important', CalloutType$Companion$IMPORTANT$lambda);
    var tmp_3 = this;
    var tmp_4 = ComposableSingletons$CalloutKt_getInstance().o3c_1;
    tmp_3.v3c_1 = CalloutType_init_$Create$(tmp_4, 'Note', CalloutType$Companion$NOTE$lambda);
    var tmp_5 = this;
    var tmp_6 = ComposableSingletons$CalloutKt_getInstance().p3c_1;
    tmp_5.w3c_1 = CalloutType_init_$Create$(tmp_6, 'Question', CalloutType$Companion$QUESTION$lambda);
    var tmp_7 = this;
    var tmp_8 = ComposableSingletons$CalloutKt_getInstance().q3c_1;
    tmp_7.x3c_1 = CalloutType_init_$Create$(tmp_8, 'Quote', CalloutType$Companion$QUOTE$lambda);
    var tmp_9 = this;
    var tmp_10 = ComposableSingletons$CalloutKt_getInstance().r3c_1;
    tmp_9.y3c_1 = CalloutType_init_$Create$(tmp_10, 'Tip', CalloutType$Companion$TIP$lambda);
    var tmp_11 = this;
    var tmp_12 = ComposableSingletons$CalloutKt_getInstance().s3c_1;
    tmp_11.z3c_1 = CalloutType_init_$Create$(tmp_12, 'Warning', CalloutType$Companion$WARNING$lambda);
  }
  var Companion_instance_18;
  function Companion_getInstance_0() {
    if (Companion_instance_18 == null)
      new Companion();
    return Companion_instance_18;
  }
  function CalloutType$_init_$lambda_4upqpt($provideColor, $provideBackgroundColor) {
    return function (_this__u8e3s4) {
      return setVariable(setVariable(Companion_instance, CalloutVars_getInstance().r3b(), $provideColor(_this__u8e3s4.n36_1)), CalloutVars_getInstance().t3b(), $provideBackgroundColor(_this__u8e3s4.n36_1));
    };
  }
  function CalloutType$_init_$lambda_4upqpt_0($provideColor) {
    return function (it) {
      return $provideColor(it);
    };
  }
  function CalloutType$_init_$lambda_4upqpt_1($provideColor) {
    return function (it) {
      return $provideColor(it).t30().s30(VOID, VOID, VOID, it.w38() ? 0.15 : 0.2);
    };
  }
  function CalloutType(icon, label, provideColor, provideBackgroundColor) {
    Companion_getInstance_0();
    Base.call(this, CalloutType$_init_$lambda_4upqpt(provideColor, provideBackgroundColor));
    this.c3d_1 = icon;
    this.d3d_1 = label;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_1$lambda_vor60q($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
      StopIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_2$lambda_2v4oyj($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
      ExclaimIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_3$lambda_pyhs3o($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
      InfoIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_4$lambda_g8zst9($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
      QuestionIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_5$lambda_ckmo8y($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
      QuoteIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_6$lambda_tmuwnz($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
      LightbulbIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_7$lambda_t8fls($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
      WarningIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CalloutKt() {
    ComposableSingletons$CalloutKt_instance = this;
    var tmp = this;
    tmp.m3c_1 = ComposableLambda$invoke$ref(composableLambdaInstance(1105541261, false, ComposableSingletons$CalloutKt$lambda_1$lambda_vor60q));
    var tmp_0 = this;
    tmp_0.n3c_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-700737724, false, ComposableSingletons$CalloutKt$lambda_2$lambda_2v4oyj));
    var tmp_1 = this;
    tmp_1.o3c_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1510536654, false, ComposableSingletons$CalloutKt$lambda_3$lambda_pyhs3o));
    var tmp_2 = this;
    tmp_2.p3c_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-2086387290, false, ComposableSingletons$CalloutKt$lambda_4$lambda_g8zst9));
    var tmp_3 = this;
    tmp_3.q3c_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(1974337438, false, ComposableSingletons$CalloutKt$lambda_5$lambda_ckmo8y));
    var tmp_4 = this;
    tmp_4.r3c_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-613517763, false, ComposableSingletons$CalloutKt$lambda_6$lambda_tmuwnz));
    var tmp_5 = this;
    tmp_5.s3c_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(2087814270, false, ComposableSingletons$CalloutKt$lambda_7$lambda_t8fls));
  }
  var ComposableSingletons$CalloutKt_instance;
  function ComposableSingletons$CalloutKt_getInstance() {
    if (ComposableSingletons$CalloutKt_instance == null)
      new ComposableSingletons$CalloutKt();
    return ComposableSingletons$CalloutKt_instance;
  }
  function CalloutStyle$lambda($this$CssStyle) {
    _init_properties_Callout_kt__ksu682();
    $this$CssStyle.t35(CalloutStyle$lambda$lambda);
    $this$CssStyle.h34(' >.callout-title', CalloutStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function CalloutStyle$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return marginBlock(textAlign(Companion_instance, Companion_instance_6.i2q()), get_em(1));
  }
  function CalloutStyle$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return gap(fontSize(fontWeight(alignItems(display(tmp, 'flex'), Companion_instance_8.g2q()), Companion_instance_9.y2q()), CalloutVars_getInstance().d3c().e2t()), CalloutVars_getInstance().e3c().e2t());
  }
  function LeftBorderedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.t35(LeftBorderedCalloutVariant$lambda$lambda);
    $this$addVariant.h34(' >.callout-title', LeftBorderedCalloutVariant$lambda$lambda_0);
    markdownParagraphHack($this$addVariant);
    return Unit_instance;
  }
  function LeftBorderedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding_0(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().r3b().e2t()), get_cssRem(0.5), get_cssRem(1));
  }
  function LeftBorderedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().r3b().e2t());
    return margin_0(tmp, LeftBorderedCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.d32(get_cssRem(1));
    return Unit_instance;
  }
  function LeftBorderedFilledCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.t35(LeftBorderedFilledCalloutVariant$lambda$lambda);
    $this$addVariant.h34(' >.callout-title', LeftBorderedFilledCalloutVariant$lambda$lambda_0);
    markdownParagraphHack($this$addVariant);
    return Unit_instance;
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(padding(borderRadius(backgroundColor(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().r3b().e2t()), CalloutVars_getInstance().t3b().e2t()), get_px(4)), get_cssRem(0.8)), [Companion_instance_10.n2q(get_px(0), get_px(1), get_px(2), VOID, Colors_instance.b31().s30(VOID, VOID, VOID, 0.12)), Companion_instance_10.n2q(get_px(0), get_px(3), get_px(10), VOID, Colors_instance.b31().s30(VOID, VOID, VOID, 0.08))]);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().r3b().e2t());
    return margin_0(tmp, LeftBorderedFilledCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.d32(get_cssRem(0.25));
    return Unit_instance;
  }
  function OutlinedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.t35(OutlinedCalloutVariant$lambda$lambda);
    $this$addVariant.h34(' >.callout-title', OutlinedCalloutVariant$lambda$lambda_0);
    $this$addVariant.h34(' .callout-icon', OutlinedCalloutVariant$lambda$lambda_1);
    $this$addVariant.h34(' >.callout-body', OutlinedCalloutVariant$lambda$lambda_2);
    markdownParagraphHack($this$addVariant);
    return Unit_instance;
  }
  function OutlinedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderRadius(border(tmp, tmp_0, 'solid', CalloutVars_getInstance().r3b().e2t()), get_cssRem(0.2));
  }
  function OutlinedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(backgroundColor(Companion_instance, CalloutVars_getInstance().t3b().e2t()), get_cssRem(0.5), get_cssRem(0.75));
  }
  function OutlinedCalloutVariant$lambda$lambda_1() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_instance, CalloutVars_getInstance().r3b().e2t());
  }
  function OutlinedCalloutVariant$lambda$lambda_2() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(Companion_instance, get_cssRem(0.5), get_cssRem(0.75));
  }
  function MatchingLinkCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    descendants($this$addVariant, [':any-link'], MatchingLinkCalloutVariant$lambda$lambda);
    return Unit_instance;
  }
  function MatchingLinkCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_instance, CalloutVars_getInstance().r3b().e2t());
  }
  function markdownParagraphHack$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    return marginBlock_0(tmp, markdownParagraphHack$lambda$lambda);
  }
  function markdownParagraphHack$lambda$lambda($this$marginBlock) {
    _init_properties_Callout_kt__ksu682();
    $this$marginBlock.f32(get_px(0));
    return Unit_instance;
  }
  function Color$factory_0() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.r3b();
    }, null);
  }
  function BackgroundColor$factory_0() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.t3b();
    }, null);
  }
  function TitleFontSize$factory() {
    return getPropertyCallableRef('TitleFontSize', 1, KProperty1, function (receiver) {
      return receiver.d3c();
    }, null);
  }
  function TitleGap$factory() {
    return getPropertyCallableRef('TitleGap', 1, KProperty1, function (receiver) {
      return receiver.e3c();
    }, null);
  }
  var properties_initialized_Callout_kt_nor0bk;
  function _init_properties_Callout_kt__ksu682() {
    if (!properties_initialized_Callout_kt_nor0bk) {
      properties_initialized_Callout_kt_nor0bk = true;
      CalloutStyle = CssStyle(VOID, CalloutStyle$lambda);
      var tmp = get_CalloutStyle();
      LeftBorderedCalloutVariant = addVariant(tmp, VOID, LeftBorderedCalloutVariant$lambda);
      var tmp_0 = get_CalloutStyle();
      LeftBorderedFilledCalloutVariant = addVariant(tmp_0, VOID, LeftBorderedFilledCalloutVariant$lambda);
      var tmp_1 = get_CalloutStyle();
      OutlinedCalloutVariant = addVariant(tmp_1, VOID, OutlinedCalloutVariant$lambda);
      var tmp_2 = get_CalloutStyle();
      MatchingLinkCalloutVariant = addVariant(tmp_2, VOID, MatchingLinkCalloutVariant$lambda);
      com_varabyte_kobweb_silk_components_display_CalloutVars$stable = 8;
      com_varabyte_kobweb_silk_components_display_CalloutType$stable = 0;
      com_varabyte_kobweb_silk_components_display_CalloutDefaults$stable = 0;
    }
  }
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle;
  }
  var ButtonStyle;
  var com_varabyte_kobweb_silk_components_forms_ButtonVars$stable;
  var com_varabyte_kobweb_silk_components_forms_ButtonSize$stable;
  function ButtonVars() {
    ButtonVars_instance = this;
    this.e3d_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().e2t();
    tmp.f3d_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.g3d_1 = StyleVariable('silk');
    this.h3d_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().e2t();
    tmp_0.i3d_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().a2r().e2t();
    tmp_1.j3d_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.k3d_1 = StyleVariable('silk');
    this.l3d_1 = StyleVariable('silk');
    this.m3d_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).n3d = function () {
    return this.e3d_1.k2t(this, BackgroundDefaultColor$factory());
  };
  protoOf(ButtonVars).o3d = function () {
    return this.f3d_1.k2t(this, BackgroundFocusColor$factory());
  };
  protoOf(ButtonVars).p3d = function () {
    return this.g3d_1.k2t(this, BackgroundHoverColor$factory());
  };
  protoOf(ButtonVars).q3d = function () {
    return this.h3d_1.k2t(this, BackgroundPressedColor$factory());
  };
  protoOf(ButtonVars).r3b = function () {
    return this.i3d_1.k2t(this, Color$factory_1());
  };
  protoOf(ButtonVars).y3b = function () {
    return this.j3d_1.k2t(this, ColorTransitionDuration$factory_0());
  };
  protoOf(ButtonVars).r3d = function () {
    return this.k3d_1.k2t(this, FontSize$factory());
  };
  protoOf(ButtonVars).s3d = function () {
    return this.l3d_1.k2t(this, Height$factory());
  };
  protoOf(ButtonVars).t3d = function () {
    return this.m3d_1.k2t(this, PaddingHorizontal$factory());
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function Companion_0() {
    Companion_instance_19 = this;
    this.u3d_1 = new ButtonSize(FontSizeVars_getInstance().c3e().e2t(), get_cssRem(1.5), get_cssRem(0.5));
    this.v3d_1 = new ButtonSize(FontSizeVars_getInstance().d3e().e2t(), get_cssRem(2), get_cssRem(0.75));
    this.w3d_1 = new ButtonSize(FontSizeVars_getInstance().e3e().e2t(), get_cssRem(2.5), get_cssRem(1));
    this.x3d_1 = new ButtonSize(FontSizeVars_getInstance().f3e().e2t(), get_cssRem(3), get_cssRem(1.5));
  }
  var Companion_instance_19;
  function Companion_getInstance_1() {
    if (Companion_instance_19 == null)
      new Companion_0();
    return Companion_instance_19;
  }
  function ButtonSize(fontSize, height, horizontalPadding) {
    Companion_getInstance_1();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().r3d(), fontSize), ButtonVars_getInstance().s3d(), height), ButtonVars_getInstance().t3d(), horizontalPadding), VOID, this);
  }
  function ButtonStyle$lambda($this$CssStyle) {
    _init_properties_Button_kt__2845m6();
    $this$CssStyle.t35(ButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).h35(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp.y34(ButtonStyle$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$CssStyle).h35(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_0.y34(ButtonStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).h35(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_1.y34(ButtonStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_instance, ButtonVars_getInstance().r3b().e2t()), ButtonVars_getInstance().n3d().e2t()), 1.2), ButtonVars_getInstance().s3d().e2t()), ButtonVars_getInstance().s3d().e2t()), ButtonVars_getInstance().r3d().e2t()), Companion_instance_9.z2q()), Companion_instance_11.p2t()), VOID, ButtonVars_getInstance().t3d().e2t()), Companion_instance_12.h2s()), get_cssRem(0.375));
    return transition_0(userSelect(border_0(tmp, ButtonStyle$lambda$lambda$lambda), Companion_instance_3.w2q()), [Companion_instance_2.x2t('background-color', ButtonVars_getInstance().y3b().e2t())]);
  }
  function ButtonStyle$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.z31(get_px(0));
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_instance, ButtonVars_getInstance().p3d().e2t()), Companion_instance_1.t2q());
  }
  function ButtonStyle$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_instance;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(outline(tmp, tmp_0, 'solid', Colors_instance.z30()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().o3d().e2t());
  }
  function ButtonStyle$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_instance, ButtonVars_getInstance().q3d().e2t());
  }
  function BackgroundDefaultColor$factory() {
    return getPropertyCallableRef('BackgroundDefaultColor', 1, KProperty1, function (receiver) {
      return receiver.n3d();
    }, null);
  }
  function BackgroundFocusColor$factory() {
    return getPropertyCallableRef('BackgroundFocusColor', 1, KProperty1, function (receiver) {
      return receiver.o3d();
    }, null);
  }
  function BackgroundHoverColor$factory() {
    return getPropertyCallableRef('BackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.p3d();
    }, null);
  }
  function BackgroundPressedColor$factory() {
    return getPropertyCallableRef('BackgroundPressedColor', 1, KProperty1, function (receiver) {
      return receiver.q3d();
    }, null);
  }
  function Color$factory_1() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.r3b();
    }, null);
  }
  function ColorTransitionDuration$factory_0() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.y3b();
    }, null);
  }
  function FontSize$factory() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.r3d();
    }, null);
  }
  function Height$factory() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.s3d();
    }, null);
  }
  function PaddingHorizontal$factory() {
    return getPropertyCallableRef('PaddingHorizontal', 1, KProperty1, function (receiver) {
      return receiver.t3d();
    }, null);
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (!properties_initialized_Button_kt_yov184) {
      properties_initialized_Button_kt_yov184 = true;
      ButtonStyle = CssStyle(VOID, ButtonStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_ButtonVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_ButtonSize$stable = 0;
    }
  }
  function get_CheckboxStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxStyle;
  }
  var CheckboxStyle;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim;
  }
  var CheckboxEnabledAnim;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle;
  }
  var CheckboxIconContainerStyle;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant;
  }
  var UncheckedCheckboxIconContainerVariant;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant;
  }
  var CheckedCheckboxIconContainerVariant;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle;
  }
  var CheckboxIconStyle;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant;
  }
  var CheckboxInputVariant;
  var com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable;
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().e2t();
    tmp.g3e_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.h3e_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.i3e_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    this.j3e_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.k3e_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    this.l3e_1 = StyleVariable('silk');
    this.m3e_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().e2t();
    tmp_3.n3e_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.o3e_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    this.p3e_1 = StyleVariable('silk');
    this.q3e_1 = StyleVariable('silk');
    this.r3e_1 = StyleVariable('silk');
    this.s3e_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().u3e().e2t();
    tmp_5.t3e_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(CheckboxVars).s3b = function () {
    return this.g3e_1.k2t(this, BorderColor$factory_0());
  };
  protoOf(CheckboxVars).v3e = function () {
    return this.h3e_1.k2t(this, BorderRadius$factory());
  };
  protoOf(CheckboxVars).w3e = function () {
    return this.i3e_1.k2t(this, BorderWidth$factory());
  };
  protoOf(CheckboxVars).x3e = function () {
    return this.j3e_1.k2t(this, Size$factory());
  };
  protoOf(CheckboxVars).y3e = function () {
    return this.k3e_1.k2t(this, Spacing$factory());
  };
  protoOf(CheckboxVars).r3d = function () {
    return this.l3e_1.k2t(this, FontSize$factory_0());
  };
  protoOf(CheckboxVars).z3e = function () {
    return this.m3e_1.k2t(this, IconSize$factory());
  };
  protoOf(CheckboxVars).a3f = function () {
    return this.n3e_1.k2t(this, FocusOutlineColor$factory());
  };
  protoOf(CheckboxVars).b3f = function () {
    return this.o3e_1.k2t(this, FocusOutlineSpread$factory());
  };
  protoOf(CheckboxVars).c3f = function () {
    return this.p3e_1.k2t(this, UncheckedBackgroundColor$factory());
  };
  protoOf(CheckboxVars).d3f = function () {
    return this.q3e_1.k2t(this, IconColor$factory());
  };
  protoOf(CheckboxVars).e3f = function () {
    return this.r3e_1.k2t(this, IconBackgroundColor$factory());
  };
  protoOf(CheckboxVars).f3f = function () {
    return this.s3e_1.k2t(this, IconBackgroundHoverColor$factory());
  };
  protoOf(CheckboxVars).g3f = function () {
    return this.t3e_1.k2t(this, TransitionDuration$factory());
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function Companion_1() {
    Companion_instance_20 = this;
    this.h3f_1 = new CheckboxSize(get_cssRem(0.875), get_cssRem(0.45), FontSizeVars_getInstance().d3e().e2t());
    this.i3f_1 = new CheckboxSize(get_cssRem(1), get_cssRem(0.625), FontSizeVars_getInstance().e3e().e2t());
    this.j3f_1 = new CheckboxSize(get_cssRem(1.25), get_cssRem(0.8), FontSizeVars_getInstance().f3e().e2t());
  }
  var Companion_instance_20;
  function Companion_getInstance_2() {
    if (Companion_instance_20 == null)
      new Companion_1();
    return Companion_instance_20;
  }
  function CheckboxSize(boxSize, iconSize, fontSize) {
    Companion_getInstance_2();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, CheckboxVars_getInstance().x3e(), boxSize), CheckboxVars_getInstance().z3e(), iconSize), CheckboxVars_getInstance().r3d(), fontSize), VOID, this);
  }
  function CheckboxStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.t35(CheckboxStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = cursor(fontSize(userSelect(gap(Companion_instance, CheckboxVars_getInstance().y3e().e2t()), Companion_instance_3.w2q()), CheckboxVars_getInstance().r3d().e2t()), Companion_instance_1.t2q());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function CheckboxEnabledAnim$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.b37(CheckboxEnabledAnim$lambda$lambda);
    $this$Keyframes.c37(CheckboxEnabledAnim$lambda$lambda_0);
    return Unit_instance;
  }
  function CheckboxEnabledAnim$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 0);
  }
  function CheckboxEnabledAnim$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 1);
  }
  function CheckboxIconContainerStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.t35(CheckboxIconContainerStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxIconContainerStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_instance, CheckboxVars_getInstance().z3e().e2t()), CheckboxVars_getInstance().x3e().e2t());
    var tmp_0 = CheckboxVars_getInstance().w3e().e2t();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(borderRadius(border(tmp, tmp_0, 'solid', CheckboxVars_getInstance().s3b().e2t()), CheckboxVars_getInstance().v3e().e2t()), Companion_instance_2.z2t(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().g3f().e2t()));
  }
  function UncheckedCheckboxIconContainerVariant$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_instance, CheckboxVars_getInstance().c3f().e2t());
  }
  function CheckedCheckboxIconContainerVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.t35(CheckedCheckboxIconContainerVariant$lambda$lambda);
    return Unit_instance;
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_instance, CheckboxVars_getInstance().e3f().e2t());
    return border_0(tmp, CheckedCheckboxIconContainerVariant$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.x31(CheckboxVars_getInstance().e3f().e2t());
    return Unit_instance;
  }
  function CheckboxIconStyle$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_instance, CheckboxVars_getInstance().x3e().e2t()), CheckboxVars_getInstance().d3f().e2t());
  }
  function CheckboxInputVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.t35(CheckboxInputVariant$lambda$lambda);
    $this$addVariant.h34(':focus-visible + *', CheckboxInputVariant$lambda$lambda_0);
    $this$addVariant.h34(':not([aria-disabled]):hover + *', CheckboxInputVariant$lambda$lambda_1);
    return Unit_instance;
  }
  function CheckboxInputVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow_0(Companion_instance, VOID, VOID, VOID, CheckboxVars_getInstance().b3f().e2t(), CheckboxVars_getInstance().a3f().e2t());
  }
  function CheckboxInputVariant$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_instance, CheckboxVars_getInstance().e3f(), CheckboxVars_getInstance().f3f().e2t());
  }
  function BorderColor$factory_0() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.s3b();
    }, null);
  }
  function BorderRadius$factory() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.v3e();
    }, null);
  }
  function BorderWidth$factory() {
    return getPropertyCallableRef('BorderWidth', 1, KProperty1, function (receiver) {
      return receiver.w3e();
    }, null);
  }
  function Size$factory() {
    return getPropertyCallableRef('Size', 1, KProperty1, function (receiver) {
      return receiver.x3e();
    }, null);
  }
  function Spacing$factory() {
    return getPropertyCallableRef('Spacing', 1, KProperty1, function (receiver) {
      return receiver.y3e();
    }, null);
  }
  function FontSize$factory_0() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.r3d();
    }, null);
  }
  function IconSize$factory() {
    return getPropertyCallableRef('IconSize', 1, KProperty1, function (receiver) {
      return receiver.z3e();
    }, null);
  }
  function FocusOutlineColor$factory() {
    return getPropertyCallableRef('FocusOutlineColor', 1, KProperty1, function (receiver) {
      return receiver.a3f();
    }, null);
  }
  function FocusOutlineSpread$factory() {
    return getPropertyCallableRef('FocusOutlineSpread', 1, KProperty1, function (receiver) {
      return receiver.b3f();
    }, null);
  }
  function UncheckedBackgroundColor$factory() {
    return getPropertyCallableRef('UncheckedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.c3f();
    }, null);
  }
  function IconColor$factory() {
    return getPropertyCallableRef('IconColor', 1, KProperty1, function (receiver) {
      return receiver.d3f();
    }, null);
  }
  function IconBackgroundColor$factory() {
    return getPropertyCallableRef('IconBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.e3f();
    }, null);
  }
  function IconBackgroundHoverColor$factory() {
    return getPropertyCallableRef('IconBackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.f3f();
    }, null);
  }
  function TransitionDuration$factory() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.g3f();
    }, null);
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp = rowClasses(Companion_instance, VOID, CenterVertically_instance);
      CheckboxStyle = CssStyle(tmp, CheckboxStyle$lambda);
      CheckboxEnabledAnim = new Keyframes(CheckboxEnabledAnim$lambda);
      CheckboxIconContainerStyle = CssStyle(VOID, CheckboxIconContainerStyle$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant = addVariantBase(tmp_0, VOID, UncheckedCheckboxIconContainerVariant$lambda);
      var tmp_1 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant = addVariant(tmp_1, VOID, CheckedCheckboxIconContainerVariant$lambda);
      var tmp_2 = Companion_instance_5;
      CheckboxIconStyle = base(tmp_2, VOID, CheckboxIconStyle$lambda);
      var tmp_3 = get_InputStyle();
      CheckboxInputVariant = addVariant(tmp_3, VOID, CheckboxInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable = 0;
      com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable = 0;
      com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable = 0;
    }
  }
  function get_HiddenInputModifier() {
    _init_properties_Input_kt__b04mg8();
    return HiddenInputModifier;
  }
  var HiddenInputModifier;
  function get_InputGroupStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputGroupStyle;
  }
  var InputGroupStyle;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle;
  }
  var InputStyle;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant;
  }
  var OutlinedInputVariant;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant;
  }
  var FilledInputVariant;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant;
  }
  var FlushedInputVariant;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant;
  }
  var UnstyledInputVariant;
  var com_varabyte_kobweb_silk_components_forms_InputDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_InputVars$stable;
  var com_varabyte_kobweb_silk_components_forms_InputParams$stable;
  var com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable;
  var com_varabyte_kobweb_silk_components_forms_InputSize$stable;
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().e2t();
    tmp.k3f_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.l3f_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().e2t();
    tmp_0.m3f_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.n3f_1 = StyleVariable('silk');
    this.o3f_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().a2r().e2t();
    tmp_1.p3f_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.q3f_1 = StyleVariable('silk');
    this.r3f_1 = StyleVariable('silk');
    this.s3f_1 = StyleVariable('silk');
    this.t3f_1 = StyleVariable('silk');
    this.u3f_1 = StyleVariable('silk');
    this.v3f_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().e2t();
    tmp_2.w3f_1 = StyleVariable_2(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().e2t();
    tmp_3.x3f_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.y3f_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.z3f_1 = StyleVariable_0(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(InputVars).s3b = function () {
    return this.k3f_1.k2t(this, BorderColor$factory_1());
  };
  protoOf(InputVars).v3e = function () {
    return this.l3f_1.k2t(this, BorderRadius$factory_0());
  };
  protoOf(InputVars).a3g = function () {
    return this.m3f_1.k2t(this, BorderFocusColor$factory());
  };
  protoOf(InputVars).b3g = function () {
    return this.n3f_1.k2t(this, BorderHoverColor$factory());
  };
  protoOf(InputVars).c3g = function () {
    return this.o3f_1.k2t(this, BorderInvalidColor$factory());
  };
  protoOf(InputVars).y3b = function () {
    return this.p3f_1.k2t(this, ColorTransitionDuration$factory_1());
  };
  protoOf(InputVars).d3g = function () {
    return this.q3f_1.k2t(this, FilledColor$factory());
  };
  protoOf(InputVars).e3g = function () {
    return this.r3f_1.k2t(this, FilledHoverColor$factory());
  };
  protoOf(InputVars).f3g = function () {
    return this.s3f_1.k2t(this, FilledFocusColor$factory());
  };
  protoOf(InputVars).r3d = function () {
    return this.t3f_1.k2t(this, FontSize$factory_1());
  };
  protoOf(InputVars).s3d = function () {
    return this.u3f_1.k2t(this, Height$factory_0());
  };
  protoOf(InputVars).g3g = function () {
    return this.v3f_1.k2t(this, Padding$factory());
  };
  protoOf(InputVars).h3g = function () {
    return this.w3f_1.k2t(this, PlaceholderOpacity$factory());
  };
  protoOf(InputVars).i3g = function () {
    return this.x3f_1.k2t(this, PlaceholderColor$factory());
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().g3g().e2t();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function Input_0(type, value, onValueChange, modifier, variant, placeholder, size, enabled, valid, required, readOnly, spellCheck, autoComplete, onCommit, placeholderColor, focusBorderColor, invalidBorderColor, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Input_kt__b04mg8();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var placeholder_0 = {_v: placeholder};
    var size_0 = {_v: size};
    var enabled_0 = {_v: enabled};
    var valid_0 = {_v: valid};
    var required_0 = {_v: required};
    var readOnly_0 = {_v: readOnly};
    var spellCheck_0 = {_v: spellCheck};
    var autoComplete_0 = {_v: autoComplete};
    var onCommit_0 = {_v: onCommit};
    var placeholderColor_0 = {_v: placeholderColor};
    var focusBorderColor_0 = {_v: focusBorderColor};
    var invalidBorderColor_0 = {_v: invalidBorderColor};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1251456891);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(type) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.f15(value) : $composer_0.s1e(value)) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.s1e(onValueChange) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.f15(variant_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.f15(placeholder_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.f15(size_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.t1e(enabled_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.t1e(valid_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.t1e(required_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.t1e(readOnly_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.t1e(spellCheck_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.s1e(autoComplete_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.s1e(onCommit_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 24576) === 0)
      $dirty1 = $dirty1 | ($composer_0.s1e(placeholderColor_0._v) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 196608) === 0)
      $dirty1 = $dirty1 | ($composer_0.s1e(focusBorderColor_0._v) ? 131072 : 65536);
    if (!(($default & 65536) === 0))
      $dirty1 = $dirty1 | 1572864;
    else if (($changed1 & 1572864) === 0)
      $dirty1 = $dirty1 | ($composer_0.s1e(invalidBorderColor_0._v) ? 1048576 : 524288);
    if (!(($default & 131072) === 0))
      $dirty1 = $dirty1 | 12582912;
    else if (($changed1 & 12582912) === 0)
      $dirty1 = $dirty1 | ((($changed1 & 16777216) === 0 ? $composer_0.f15(ref_0._v) : $composer_0.s1e(ref_0._v)) ? 8388608 : 4194304);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 4793491) === 4793490) || !$composer_0.o1d()) {
      if (!(($default & 8) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 16) === 0)) {
        variant_0._v = InputDefaults_getInstance().p3g_1;
      }
      if (!(($default & 32) === 0)) {
        placeholder_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        size_0._v = InputDefaults_getInstance().o3g_1;
      }
      if (!(($default & 128) === 0)) {
        enabled_0._v = true;
      }
      if (!(($default & 256) === 0)) {
        valid_0._v = true;
      }
      if (!(($default & 512) === 0)) {
        required_0._v = false;
      }
      if (!(($default & 1024) === 0)) {
        readOnly_0._v = false;
      }
      if (!(($default & 2048) === 0)) {
        spellCheck_0._v = false;
      }
      if (!(($default & 4096) === 0)) {
        autoComplete_0._v = null;
      }
      if (!(($default & 8192) === 0)) {
        $composer_0.v1d(-1585733483);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.f1f();
        var tmp;
        if (false || it === Companion_getInstance().n18_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.forms.Input.<anonymous>' call
          var value_0 = Input$lambda;
          this_0.q1f(value_0);
          tmp = value_0;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.x1d();
        onCommit_0._v = tmp0_group;
      }
      if (!(($default & 16384) === 0)) {
        placeholderColor_0._v = null;
      }
      if (!(($default & 32768) === 0)) {
        focusBorderColor_0._v = null;
      }
      if (!(($default & 65536) === 0)) {
        invalidBorderColor_0._v = null;
      }
      if (!(($default & 131072) === 0)) {
        ref_0._v = null;
      }
      _Input(type, value, onValueChange, toModifier(size_0._v, $composer_0, 14 & $dirty >> 18).m2z(modifier_0._v), variant_0._v, placeholder_0._v, enabled_0._v, valid_0._v, required_0._v, readOnly_0._v, spellCheck_0._v, autoComplete_0._v, onCommit_0._v, placeholderColor_0._v, focusBorderColor_0._v, invalidBorderColor_0._v, ref_0._v, $composer_0, 14 & $dirty | (8 & $dirty >> 3) << 3 | 112 & $dirty | 896 & $dirty | 57344 & $dirty | 458752 & $dirty | 3670016 & $dirty >> 3 | 29360128 & $dirty >> 3 | 234881024 & $dirty >> 3 | 1879048192 & $dirty1 << 27, 14 & $dirty1 >> 3 | 112 & $dirty1 >> 3 | 896 & $dirty1 >> 3 | 7168 & $dirty1 >> 3 | 57344 & $dirty1 >> 3 | 458752 & $dirty1 >> 3 | 3670016 & $dirty1 >> 3, 0);
    } else {
      $composer_0.e18();
    }
    var tmp1_safe_receiver = $composer_0.y1f();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l1l(Input$lambda_0(type, value, onValueChange, modifier_0, variant_0, placeholder_0, size_0, enabled_0, valid_0, required_0, readOnly_0, spellCheck_0, autoComplete_0, onCommit_0, placeholderColor_0, focusBorderColor_0, invalidBorderColor_0, ref_0, $changed, $changed1, $default));
    }
  }
  function Companion_2() {
    Companion_instance_21 = this;
    this.q3g_1 = new InputSize(FontSizeVars_getInstance().c3e().e2t(), get_cssRem(1.25), get_cssRem(0.375), BorderRadiusVars_getInstance().c3e().e2t());
    this.r3g_1 = new InputSize(FontSizeVars_getInstance().d3e().e2t(), get_cssRem(1.75), get_cssRem(0.5), BorderRadiusVars_getInstance().d3e().e2t());
    this.s3g_1 = new InputSize(FontSizeVars_getInstance().e3e().e2t(), get_cssRem(2.25), get_cssRem(0.625), BorderRadiusVars_getInstance().e3e().e2t());
    this.t3g_1 = new InputSize(FontSizeVars_getInstance().f3e().e2t(), get_cssRem(2.5), get_cssRem(0.75), BorderRadiusVars_getInstance().e3e().e2t());
  }
  var Companion_instance_21;
  function Companion_getInstance_3() {
    if (Companion_instance_21 == null)
      new Companion_2();
    return Companion_instance_21;
  }
  function InputSize(fontSize, height, padding, borderRadius) {
    Companion_getInstance_3();
    Base_init_$Init$(setVariable(setVariable(setVariable(setVariable(Companion_instance, InputVars_getInstance().r3d(), fontSize), InputVars_getInstance().s3d(), height), InputVars_getInstance().g3g(), padding), InputVars_getInstance().v3e(), borderRadius), VOID, this);
  }
  function InputDefaults() {
    InputDefaults_instance = this;
    this.j3g_1 = true;
    this.k3g_1 = true;
    this.l3g_1 = false;
    this.m3g_1 = false;
    this.n3g_1 = false;
    this.o3g_1 = Companion_getInstance_3().s3g_1;
    this.p3g_1 = get_OutlinedInputVariant();
  }
  var InputDefaults_instance;
  function InputDefaults_getInstance() {
    if (InputDefaults_instance == null)
      new InputDefaults();
    return InputDefaults_instance;
  }
  function _Input(type, value, onValueChange, modifier, variant, placeholder, enabled, valid, required, readOnly, spellCheck, autoComplete, onCommit, placeholderColor, focusBorderColor, invalidBorderColor, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Input_kt__b04mg8();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var placeholder_0 = {_v: placeholder};
    var enabled_0 = {_v: enabled};
    var valid_0 = {_v: valid};
    var required_0 = {_v: required};
    var readOnly_0 = {_v: readOnly};
    var spellCheck_0 = {_v: spellCheck};
    var autoComplete_0 = {_v: autoComplete};
    var onCommit_0 = {_v: onCommit};
    var placeholderColor_0 = {_v: placeholderColor};
    var focusBorderColor_0 = {_v: focusBorderColor};
    var invalidBorderColor_0 = {_v: invalidBorderColor};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-484912825);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(type) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.f15(value) : $composer_0.s1e(value)) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.s1e(onValueChange) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.f15(variant_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.f15(placeholder_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.t1e(enabled_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.t1e(valid_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.t1e(required_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.t1e(readOnly_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.t1e(spellCheck_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.s1e(autoComplete_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.s1e(onCommit_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.s1e(placeholderColor_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 24576) === 0)
      $dirty1 = $dirty1 | ($composer_0.s1e(focusBorderColor_0._v) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 196608) === 0)
      $dirty1 = $dirty1 | ($composer_0.s1e(invalidBorderColor_0._v) ? 131072 : 65536);
    if (!(($default & 65536) === 0))
      $dirty1 = $dirty1 | 1572864;
    else if (($changed1 & 1572864) === 0)
      $dirty1 = $dirty1 | ((($changed1 & 2097152) === 0 ? $composer_0.f15(ref_0._v) : $composer_0.s1e(ref_0._v)) ? 1048576 : 524288);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 599187) === 599186) || !$composer_0.o1d()) {
      if (!(($default & 8) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 16) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        placeholder_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        enabled_0._v = true;
      }
      if (!(($default & 128) === 0)) {
        valid_0._v = true;
      }
      if (!(($default & 256) === 0)) {
        required_0._v = false;
      }
      if (!(($default & 512) === 0)) {
        readOnly_0._v = false;
      }
      if (!(($default & 1024) === 0)) {
        spellCheck_0._v = false;
      }
      if (!(($default & 2048) === 0)) {
        autoComplete_0._v = null;
      }
      if (!(($default & 4096) === 0)) {
        $composer_0.v1d(-789462300);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.f1f();
        var tmp;
        if (false || it === Companion_getInstance().n18_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
          var value_0 = _Input$lambda;
          this_0.q1f(value_0);
          tmp = value_0;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.x1d();
        onCommit_0._v = tmp0_group;
      }
      if (!(($default & 8192) === 0)) {
        placeholderColor_0._v = null;
      }
      if (!(($default & 16384) === 0)) {
        focusBorderColor_0._v = null;
      }
      if (!(($default & 32768) === 0)) {
        invalidBorderColor_0._v = null;
      }
      if (!(($default & 65536) === 0)) {
        ref_0._v = null;
      }
      $composer_0.v1d(-789455606);
      if (!(ref_0._v == null)) {
        var tmp_1 = Companion_instance;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = toAttrs(display(tmp_1, 'none'));
        // Inline function 'kotlin.run' call
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-419770335, true, _Input$lambda_0(ref_0), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.f15(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.f1f();
        var tmp_3;
        if (invalid || it_0 === Companion_getInstance().n18_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_6(dispatchReceiver);
          $composer_1.q1f(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_2, tmp0, $composer_0, 48, 0);
      }
      $composer_0.x1d();
      var tmp_5 = toModifier_0(get_InputStyle(), [variant_0._v], $composer_0, 6);
      var tmp0_safe_receiver = placeholderColor_0._v;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toModifier_1(tmp0_safe_receiver);
      var tmp3 = setVariable(setVariable(tmp_5.m2z(tmp1_elvis_lhs == null ? Companion_instance : tmp1_elvis_lhs), InputVars_getInstance().a3g(), focusBorderColor_0._v), InputVars_getInstance().c3g(), invalidBorderColor_0._v);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_6;
      if (!valid_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
        tmp_6 = setVariable(ariaInvalid(Companion_instance), InputVars_getInstance().s3b(), InputVars_getInstance().c3g().e2t());
      } else {
        tmp_6 = Companion_instance;
      }
      var tmp5 = tmp3.m2z(tmp_6);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_7;
      if (!enabled_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
        tmp_7 = ariaDisabled(Companion_instance);
      } else {
        tmp_7 = Companion_instance;
      }
      var tmp7 = tmp5.m2z(tmp_7);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_8;
      if (required_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
        tmp_8 = ariaRequired(Companion_instance);
      } else {
        tmp_8 = Companion_instance;
      }
      var tmp_9 = tmp7.m2z(tmp_8).m2z(modifier_0._v);
      $composer_0.v1d(-789429692);
      var tmp9 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(!!(!!(!!(!!(!!(!!(!!(!!(!!((($dirty & 112) === 32 || (!(($dirty & 64) === 0) && $composer_0.s1e(value))) | ($dirty & 458752) === 131072) | ($dirty & 3670016) === 1048576) | ($dirty & 1879048192) === 536870912) | ($dirty & 234881024) === 67108864) | ($dirty1 & 14) === 4) | $composer_0.s1e(autoComplete_0._v)) | ($dirty & 896) === 256) | $composer_0.s1e(type)) | ($dirty & 29360128) === 8388608) | ($dirty1 & 896) === 256);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = tmp9.f1f();
      var tmp_10;
      if (invalid_0 || it_1 === Companion_getInstance().n18_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
        var value_2 = _Input$lambda_1(value, placeholder_0, enabled_0, readOnly_0, required_0, spellCheck_0, autoComplete_0, onValueChange, type, valid_0, onCommit_0);
        tmp9.q1f(value_2);
        tmp_10 = value_2;
      } else {
        tmp_10 = it_1;
      }
      var tmp_11 = tmp_10;
      var tmp1_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      $composer_0.x1d();
      Input(type, toAttrs(tmp_9, tmp1_group), $composer_0, 14 & $dirty);
    } else {
      $composer_0.e18();
    }
    var tmp2_safe_receiver = $composer_0.y1f();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.l1l(_Input$lambda_2(type, value, onValueChange, modifier_0, variant_0, placeholder_0, enabled_0, valid_0, required_0, readOnly_0, spellCheck_0, autoComplete_0, onCommit_0, placeholderColor_0, focusBorderColor_0, invalidBorderColor_0, ref_0, $changed, $changed1, $default));
    }
  }
  function toModifier_1(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    return setVariable_0(setVariable(Companion_instance, InputVars_getInstance().i3g(), _this__u8e3s4.y3g_1), InputVars_getInstance().h3g(), _this__u8e3s4.z3g_1);
  }
  function InputGroupStyle$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.z30());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border(tmp_1, tmp_2, 'solid', Colors_instance.z30()), InputVars_getInstance().v3e().e2t()), InputVars_getInstance().r3d().e2t());
  }
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$CssStyle.t35(InputStyle$lambda$lambda);
    var tmp = get_placeholder($this$CssStyle);
    tmp.y34(InputStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function InputStyle$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_instance, Companion_instance_14.w2q()), get_ColorVar().e2t()), InputVars_getInstance().s3d().e2t()), InputVars_getInstance().r3d().e2t()), Colors_instance.z30());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.z30());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp_1, tmp_2, 'solid', Colors_instance.z30()), Companion_instance_2.z2t(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().y3b().e2t()));
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_instance, InputVars_getInstance().h3g().e2t()), InputVars_getInstance().i3g().e2t());
  }
  function OutlinedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.t35(OutlinedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.y34(OutlinedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).h35(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.y34(OutlinedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).h35(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.y34(OutlinedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(border(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_instance), InputVars_getInstance().v3e().e2t());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', InputVars_getInstance().s3b().e2t());
  }
  function OutlinedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().c3g().e2t());
  }
  function OutlinedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border_0(tmp, OutlinedInputVariant$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.x31(InputVars_getInstance().b3g().e2t());
    return Unit_instance;
  }
  function OutlinedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().a3g().e2t());
  }
  function FilledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.t35(FilledInputVariant$lambda$lambda);
    var tmp = get_hover($this$addVariant).h35(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp.y34(FilledInputVariant$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    tmp_0.y34(FilledInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).h35(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.y34(FilledInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FilledInputVariant$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_instance), InputVars_getInstance().d3g().e2t()), InputVars_getInstance().v3e().e2t());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Colors_instance.z30());
  }
  function FilledInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_instance, InputVars_getInstance().e3g().e2t());
  }
  function FilledInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_instance, InputVars_getInstance().c3g().e2t());
  }
  function FilledInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_instance, InputVars_getInstance().f3g().e2t()), InputVars_getInstance().a3g().e2t());
  }
  function FilledInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.x31($color);
      return Unit_instance;
    };
  }
  function FlushedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.t35(FlushedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.y34(FlushedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).h35(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.y34(FlushedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).h35(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.y34(FlushedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FlushedInputVariant$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().s3b().e2t());
  }
  function FlushedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().c3g().e2t());
  }
  function FlushedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border_0(tmp, FlushedInputVariant$lambda$lambda$lambda);
  }
  function FlushedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.x31(InputVars_getInstance().b3g().e2t());
    return Unit_instance;
  }
  function FlushedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().a3g().e2t());
  }
  function FlushedInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.x31($color);
      return Unit_instance;
    };
  }
  function UnstyledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  function Input$lambda() {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  function Input$lambda_0($type, $value, $onValueChange, $modifier, $variant, $placeholder, $size, $enabled, $valid, $required, $readOnly, $spellCheck, $autoComplete, $onCommit, $placeholderColor, $focusBorderColor, $invalidBorderColor, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      Input_0($type, $value, $onValueChange, $modifier._v, $variant._v, $placeholder._v, $size._v, $enabled._v, $valid._v, $required._v, $readOnly._v, $spellCheck._v, $autoComplete._v, $onCommit._v, $placeholderColor._v, $focusBorderColor._v, $invalidBorderColor._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function _Input$lambda() {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  function _Input$lambda$lambda(it) {
    _init_properties_Input_kt__b04mg8();
    var tmp = it.nextSibling;
    return tmp instanceof HTMLInputElement ? tmp : THROW_CCE();
  }
  function _Input$lambda_0($ref) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = $ref._v;
      $composer_0.v1d(1429744071);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.f1f();
      var tmp_0;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>.<anonymous>.<anonymous>' call
        var value = _Input$lambda$lambda;
        $composer_0.q1f(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.x1d();
      registerRefScope($this$Div, tmp, tmp0_group, $composer_0, 384 | 14 & $changed);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function _Input$lambda$lambda_0($onValueChange, $type) {
    return function (evt) {
      $onValueChange($type.c2e(evt.p2m_1));
      return Unit_instance;
    };
  }
  function _Input$lambda$lambda_1($valid, $onCommit) {
    return function (evt) {
      var tmp;
      if ($valid._v && evt.j2o_1 === 'Enter') {
        evt.b2n();
        evt.c2n();
        tmp = $onCommit._v();
      }
      return Unit_instance;
    };
  }
  function _Input$lambda_1($value, $placeholder, $enabled, $readOnly, $required, $spellCheck, $autoComplete, $onValueChange, $type, $valid, $onCommit) {
    return function ($this$toAttrs) {
      var tmp;
      if (!($value == null)) {
        var tmp0_subject = $value;
        if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false)
          $this$toAttrs.c2i($value);
        else {
          if (isNumber(tmp0_subject))
            $this$toAttrs.d2i($value);
          else {
            if (!(tmp0_subject == null) ? typeof tmp0_subject === 'boolean' : false)
              $this$toAttrs.e2i($value);
            else {
              if (!(tmp0_subject instanceof Unit)) {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected `Input` value type: ' + toString(getKClassFromExpression($value));
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
        tmp = Unit_instance;
      }
      var tmp1_safe_receiver = $placeholder._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>.<anonymous>.<anonymous>' call
        placeholder($this$toAttrs, tmp1_safe_receiver);
      }
      var tmp_0;
      if (!$enabled._v) {
        disabled($this$toAttrs);
        tmp_0 = Unit_instance;
      }
      var tmp_1;
      if ($readOnly._v) {
        readOnly($this$toAttrs);
        tmp_1 = Unit_instance;
      }
      var tmp_2;
      if ($required._v) {
        required($this$toAttrs);
        tmp_2 = Unit_instance;
      }
      $this$toAttrs.x2c($spellCheck._v);
      var tmp2_safe_receiver = $autoComplete._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>.<anonymous>.<anonymous>' call
        autoComplete($this$toAttrs, tmp2_safe_receiver);
      }
      $this$toAttrs.f2i(_Input$lambda$lambda_0($onValueChange, $type));
      $this$toAttrs.b2d(_Input$lambda$lambda_1($valid, $onCommit));
      return Unit_instance;
    };
  }
  function _Input$lambda_2($type, $value, $onValueChange, $modifier, $variant, $placeholder, $enabled, $valid, $required, $readOnly, $spellCheck, $autoComplete, $onCommit, $placeholderColor, $focusBorderColor, $invalidBorderColor, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      _Input($type, $value, $onValueChange, $modifier._v, $variant._v, $placeholder._v, $enabled._v, $valid._v, $required._v, $readOnly._v, $spellCheck._v, $autoComplete._v, $onCommit._v, $placeholderColor._v, $focusBorderColor._v, $invalidBorderColor._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function BorderColor$factory_1() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.s3b();
    }, null);
  }
  function BorderRadius$factory_0() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.v3e();
    }, null);
  }
  function BorderFocusColor$factory() {
    return getPropertyCallableRef('BorderFocusColor', 1, KProperty1, function (receiver) {
      return receiver.a3g();
    }, null);
  }
  function BorderHoverColor$factory() {
    return getPropertyCallableRef('BorderHoverColor', 1, KProperty1, function (receiver) {
      return receiver.b3g();
    }, null);
  }
  function BorderInvalidColor$factory() {
    return getPropertyCallableRef('BorderInvalidColor', 1, KProperty1, function (receiver) {
      return receiver.c3g();
    }, null);
  }
  function ColorTransitionDuration$factory_1() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.y3b();
    }, null);
  }
  function FilledColor$factory() {
    return getPropertyCallableRef('FilledColor', 1, KProperty1, function (receiver) {
      return receiver.d3g();
    }, null);
  }
  function FilledHoverColor$factory() {
    return getPropertyCallableRef('FilledHoverColor', 1, KProperty1, function (receiver) {
      return receiver.e3g();
    }, null);
  }
  function FilledFocusColor$factory() {
    return getPropertyCallableRef('FilledFocusColor', 1, KProperty1, function (receiver) {
      return receiver.f3g();
    }, null);
  }
  function FontSize$factory_1() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.r3d();
    }, null);
  }
  function Height$factory_0() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.s3d();
    }, null);
  }
  function Padding$factory() {
    return getPropertyCallableRef('Padding', 1, KProperty1, function (receiver) {
      return receiver.g3g();
    }, null);
  }
  function PlaceholderOpacity$factory() {
    return getPropertyCallableRef('PlaceholderOpacity', 1, KProperty1, function (receiver) {
      return receiver.h3g();
    }, null);
  }
  function PlaceholderColor$factory() {
    return getPropertyCallableRef('PlaceholderColor', 1, KProperty1, function (receiver) {
      return receiver.i3g();
    }, null);
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_1(size(border(Companion_instance, get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_instance_4.q2s()), Companion_instance_11.p2t());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_instance_5;
      InputGroupStyle = base(tmp_0, VOID, InputGroupStyle$lambda);
      InputStyle = CssStyle(VOID, InputStyle$lambda);
      var tmp_1 = get_InputStyle();
      OutlinedInputVariant = addVariant(tmp_1, VOID, OutlinedInputVariant$lambda);
      var tmp_2 = get_InputStyle();
      FilledInputVariant = addVariant(tmp_2, VOID, FilledInputVariant$lambda);
      var tmp_3 = get_InputStyle();
      FlushedInputVariant = addVariant(tmp_3, VOID, FlushedInputVariant$lambda);
      var tmp_4 = get_InputStyle();
      UnstyledInputVariant = addVariant(tmp_4, VOID, UnstyledInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_InputDefaults$stable = 0;
      com_varabyte_kobweb_silk_components_forms_InputVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputParams$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputSize$stable = 0;
    }
  }
  function get_SwitchStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchStyle;
  }
  var SwitchStyle;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle;
  }
  var SwitchTrackStyle;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant;
  }
  var SwitchInputVariant;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle;
  }
  var SwitchThumbStyle;
  var com_varabyte_kobweb_silk_components_forms_SwitchVars$stable;
  var com_varabyte_kobweb_silk_components_forms_SwitchSize$stable;
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.a3h_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.b3h_1 = StyleVariable('silk');
    this.c3h_1 = StyleVariable('silk');
    this.d3h_1 = StyleVariable('silk');
    this.e3h_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().e2t();
    tmp_0.f3h_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.g3h_1 = StyleVariable('silk');
    this.h3h_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().j3h().e2t();
    tmp_1.i3h_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(SwitchVars).v3e = function () {
    return this.a3h_1.k2t(this, BorderRadius$factory_1());
  };
  protoOf(SwitchVars).k3h = function () {
    return this.b3h_1.k2t(this, TrackWidth$factory());
  };
  protoOf(SwitchVars).l3h = function () {
    return this.c3h_1.k2t(this, TrackHeight$factory());
  };
  protoOf(SwitchVars).m3h = function () {
    return this.d3h_1.k2t(this, TrackPadding$factory());
  };
  protoOf(SwitchVars).n3h = function () {
    return this.e3h_1.k2t(this, TrackBackgroundColor$factory());
  };
  protoOf(SwitchVars).o3h = function () {
    return this.f3h_1.k2t(this, FocusColor$factory());
  };
  protoOf(SwitchVars).p3h = function () {
    return this.g3h_1.k2t(this, ThumbOffset$factory());
  };
  protoOf(SwitchVars).q3h = function () {
    return this.h3h_1.k2t(this, ThumbColor$factory());
  };
  protoOf(SwitchVars).g3f = function () {
    return this.i3h_1.k2t(this, TransitionDuration$factory_0());
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function Companion_3() {
    Companion_instance_22 = this;
    this.r3h_1 = new SwitchSize(get_cssRem(1.375), get_cssRem(0.75));
    this.s3h_1 = new SwitchSize(get_cssRem(1.875), get_cssRem(1));
    this.t3h_1 = new SwitchSize(get_cssRem(2.875), get_cssRem(1.5));
  }
  var Companion_instance_22;
  function Companion_getInstance_4() {
    if (Companion_instance_22 == null)
      new Companion_3();
    return Companion_instance_22;
  }
  function SwitchSize(width, height, padding) {
    Companion_getInstance_4();
    padding = padding === VOID ? get_cssRem(0.188) : padding;
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, SwitchVars_getInstance().k3h(), width), SwitchVars_getInstance().l3h(), height), SwitchVars_getInstance().m3h(), padding), VOID, this);
  }
  function SwitchStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function SwitchTrackStyle$lambda($this$CssStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$CssStyle.t35(SwitchTrackStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).h35(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp.y34(SwitchTrackStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchTrackStyle$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition_0(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_instance, SwitchVars_getInstance().k3h().e2t()), SwitchVars_getInstance().k3h().e2t()), SwitchVars_getInstance().l3h().e2t()), SwitchVars_getInstance().l3h().e2t()), SwitchVars_getInstance().m3h().e2t()), SwitchVars_getInstance().v3e().e2t()), SwitchVars_getInstance().n3h().e2t()), [Companion_instance_2.x2t('background-color', SwitchVars_getInstance().g3f().e2t())]), Companion_instance_15.p2q());
  }
  function SwitchTrackStyle$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_instance, Companion_instance_1.t2q());
  }
  function SwitchInputVariant$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.t35(SwitchInputVariant$lambda$lambda);
    $this$addVariant.h34(':focus-visible + *', SwitchInputVariant$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchInputVariant$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow_0(Companion_instance, VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().o3h().e2t());
  }
  function SwitchThumbStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition_0(translateX(backgroundColor(borderRadius(size(Companion_instance, SwitchVars_getInstance().l3h().e2t()), SwitchVars_getInstance().v3e().e2t()), SwitchVars_getInstance().q3h().e2t()), SwitchVars_getInstance().p3h().e2t()), [Companion_instance_2.x2t('translate', SwitchVars_getInstance().g3f().e2t())]);
  }
  function BorderRadius$factory_1() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.v3e();
    }, null);
  }
  function TrackWidth$factory() {
    return getPropertyCallableRef('TrackWidth', 1, KProperty1, function (receiver) {
      return receiver.k3h();
    }, null);
  }
  function TrackHeight$factory() {
    return getPropertyCallableRef('TrackHeight', 1, KProperty1, function (receiver) {
      return receiver.l3h();
    }, null);
  }
  function TrackPadding$factory() {
    return getPropertyCallableRef('TrackPadding', 1, KProperty1, function (receiver) {
      return receiver.m3h();
    }, null);
  }
  function TrackBackgroundColor$factory() {
    return getPropertyCallableRef('TrackBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.n3h();
    }, null);
  }
  function FocusColor$factory() {
    return getPropertyCallableRef('FocusColor', 1, KProperty1, function (receiver) {
      return receiver.o3h();
    }, null);
  }
  function ThumbOffset$factory() {
    return getPropertyCallableRef('ThumbOffset', 1, KProperty1, function (receiver) {
      return receiver.p3h();
    }, null);
  }
  function ThumbColor$factory() {
    return getPropertyCallableRef('ThumbColor', 1, KProperty1, function (receiver) {
      return receiver.q3h();
    }, null);
  }
  function TransitionDuration$factory_0() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.g3f();
    }, null);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp = Companion_instance_5;
      SwitchStyle = base(tmp, VOID, SwitchStyle$lambda);
      var tmp_0 = ariaHidden(tabIndex(Companion_instance, -1));
      SwitchTrackStyle = CssStyle(tmp_0, SwitchTrackStyle$lambda);
      var tmp_1 = get_InputStyle();
      SwitchInputVariant = addVariant(tmp_1, VOID, SwitchInputVariant$lambda);
      var tmp_2 = Companion_instance_5;
      SwitchThumbStyle = base(tmp_2, VOID, SwitchThumbStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_SwitchVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_SwitchSize$stable = 0;
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle;
  }
  var CanvasStyle;
  var com_varabyte_kobweb_silk_components_graphics_RenderScope$stable;
  var com_varabyte_kobweb_silk_components_graphics_CanvasRepainter$stable;
  function CanvasStyle$lambda($this$CssStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_instance;
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (!properties_initialized_Canvas_kt_i28dei) {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle = CssStyle(VOID, CanvasStyle$lambda);
      com_varabyte_kobweb_silk_components_graphics_RenderScope$stable = 0;
      com_varabyte_kobweb_silk_components_graphics_CanvasRepainter$stable = 8;
    }
  }
  function ExclaimIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1482883947);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.a2v(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$ExclaimIconKt_getInstance().u3h_1, $composer_0, 24576, 2);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(ExclaimIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$ExclaimIconKt$lambda_1$lambda_dh78d4($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.v1d(-16435893);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1f();
    var tmp;
    if (false || it === Companion_getInstance().n18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$ExclaimIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$ExclaimIconKt$lambda_1$lambda$lambda_mq5g43;
      $composer_0.q1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.x1d();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$ExclaimIconKt$lambda_1$lambda$lambda_mq5g43($this$Path) {
    $this$Path.o2v('M 0 1.75 C 0 0.784 0.784 0 1.75 0 h 12.5 C 15.216 0 16 0.784 16 1.75 v 9.5 A 1.75 1.75 0 0 1 14.25 13 H 8.06 l -2.573 2.573 A 1.458 1.458 0 0 1 3 14.543 V 13 H 1.75 A 1.75 1.75 0 0 1 0 11.25 Z m 1.75 -0.25 a 0.25 0.25 0 0 0 -0.25 0.25 v 9.5 c 0 0.138 0.112 0.25 0.25 0.25 h 2 a 0.75 0.75 0 0 1 0.75 0.75 v 2.19 l 2.72 -2.72 a 0.749 0.749 0 0 1 0.53 -0.22 h 6.5 a 0.25 0.25 0 0 0 0.25 -0.25 v -9.5 a 0.25 0.25 0 0 0 -0.25 -0.25 Z m 7 2.25 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 9 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_instance;
  }
  function ComposableSingletons$ExclaimIconKt() {
    ComposableSingletons$ExclaimIconKt_instance = this;
    var tmp = this;
    tmp.u3h_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-675482057, false, ComposableSingletons$ExclaimIconKt$lambda_1$lambda_dh78d4));
  }
  var ComposableSingletons$ExclaimIconKt_instance;
  function ComposableSingletons$ExclaimIconKt_getInstance() {
    if (ComposableSingletons$ExclaimIconKt_instance == null)
      new ComposableSingletons$ExclaimIconKt();
    return ComposableSingletons$ExclaimIconKt_instance;
  }
  function ExclaimIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      ExclaimIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function InfoIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(197779673);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.a2v(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$InfoIconKt_getInstance().v3h_1, $composer_0, 24576, 2);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(InfoIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$InfoIconKt$lambda_1$lambda_7lqjxh($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.v1d(657486137);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1f();
    var tmp;
    if (false || it === Companion_getInstance().n18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$InfoIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$InfoIconKt$lambda_1$lambda$lambda_59q3v4;
      $composer_0.q1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.x1d();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$InfoIconKt$lambda_1$lambda$lambda_59q3v4($this$Path) {
    $this$Path.o2v('M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z');
    return Unit_instance;
  }
  function ComposableSingletons$InfoIconKt() {
    ComposableSingletons$InfoIconKt_instance = this;
    var tmp = this;
    tmp.v3h_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-954934107, false, ComposableSingletons$InfoIconKt$lambda_1$lambda_7lqjxh));
  }
  var ComposableSingletons$InfoIconKt_instance;
  function ComposableSingletons$InfoIconKt_getInstance() {
    if (ComposableSingletons$InfoIconKt_instance == null)
      new ComposableSingletons$InfoIconKt();
    return ComposableSingletons$InfoIconKt_instance;
  }
  function InfoIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      InfoIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function LightbulbIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1309236181);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.a2v(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$LightbulbIconKt_getInstance().w3h_1, $composer_0, 24576, 2);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(LightbulbIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$LightbulbIconKt$lambda_1$lambda_abne2a($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.v1d(1126884965);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1f();
    var tmp;
    if (false || it === Companion_getInstance().n18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$LightbulbIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$LightbulbIconKt$lambda_1$lambda$lambda_r2tn8j;
      $composer_0.q1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.x1d();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$LightbulbIconKt$lambda_1$lambda$lambda_r2tn8j($this$Path) {
    $this$Path.o2v('M 8 1.5 c -2.363 0 -4 1.69 -4 3.75 c 0 0.984 0.424 1.625 0.984 2.304 l 0.214 0.253 c 0.223 0.264 0.47 0.556 0.673 0.848 c 0.284 0.411 0.537 0.896 0.621 1.49 a 0.75 0.75 0 0 1 -1.484 0.211 c -0.04 -0.282 -0.163 -0.547 -0.37 -0.847 a 8.456 8.456 0 0 0 -0.542 -0.68 c -0.084 -0.1 -0.173 -0.205 -0.268 -0.32 C 3.201 7.75 2.5 6.766 2.5 5.25 C 2.5 2.31 4.863 0 8 0 s 5.5 2.31 5.5 5.25 c 0 1.516 -0.701 2.5 -1.328 3.259 c -0.095 0.115 -0.184 0.22 -0.268 0.319 c -0.207 0.245 -0.383 0.453 -0.541 0.681 c -0.208 0.3 -0.33 0.565 -0.37 0.847 a 0.751 0.751 0 0 1 -1.485 -0.212 c 0.084 -0.593 0.337 -1.078 0.621 -1.489 c 0.203 -0.292 0.45 -0.584 0.673 -0.848 c 0.075 -0.088 0.147 -0.173 0.213 -0.253 c 0.561 -0.679 0.985 -1.32 0.985 -2.304 c 0 -2.06 -1.637 -3.75 -4 -3.75 Z M 5.75 12 h 4.5 a 0.75 0.75 0 0 1 0 1.5 h -4.5 a 0.75 0.75 0 0 1 0 -1.5 Z M 6 15.25 a 0.75 0.75 0 0 1 0.75 -0.75 h 2.5 a 0.75 0.75 0 0 1 0 1.5 h -2.5 a 0.75 0.75 0 0 1 -0.75 -0.75 Z');
    return Unit_instance;
  }
  function ComposableSingletons$LightbulbIconKt() {
    ComposableSingletons$LightbulbIconKt_instance = this;
    var tmp = this;
    tmp.w3h_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(977424631, false, ComposableSingletons$LightbulbIconKt$lambda_1$lambda_abne2a));
  }
  var ComposableSingletons$LightbulbIconKt_instance;
  function ComposableSingletons$LightbulbIconKt_getInstance() {
    if (ComposableSingletons$LightbulbIconKt_instance == null)
      new ComposableSingletons$LightbulbIconKt();
    return ComposableSingletons$LightbulbIconKt_instance;
  }
  function LightbulbIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      LightbulbIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function QuestionIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1830362903);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      createIcon(null, null, new Stroke(2), toAttrs(modifier_0._v), ComposableSingletons$QuestionIconKt_getInstance().x3h_1, $composer_0, 24576, 3);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(QuestionIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$QuestionIconKt$lambda_1$lambda_if12nh($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.v1d(1001020366);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1f();
    var tmp;
    if (false || it === Companion_getInstance().n18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$QuestionIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs;
      $composer_0.q1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.x1d();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    $composer_0.v1d(1001024951);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.f1f();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().n18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$QuestionIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs_0;
      $composer_0.q1f(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.x1d();
    Path($this$createIcon, tmp1_group, $composer_0, 48 | 14 & $changed);
    $composer_0.v1d(1001029844);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.f1f();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().n18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$QuestionIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs_1;
      $composer_0.q1f(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.x1d();
    Circle($this$createIcon, tmp2_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs($this$Path) {
    $this$Path.p2v(SVGStrokeLineCap_Round_getInstance());
    $this$Path.o2v('M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25');
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs_0($this$Path) {
    $this$Path.p2v(SVGStrokeLineCap_Round_getInstance());
    $this$Path.o2v('M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0');
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs_1($this$Circle) {
    $this$Circle.t2v(10);
    $this$Circle.u2v(12);
    $this$Circle.v2v(12);
    $this$Circle.s2v(11.25);
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt() {
    ComposableSingletons$QuestionIconKt_instance = this;
    var tmp = this;
    tmp.x3h_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-1550888779, false, ComposableSingletons$QuestionIconKt$lambda_1$lambda_if12nh));
  }
  var ComposableSingletons$QuestionIconKt_instance;
  function ComposableSingletons$QuestionIconKt_getInstance() {
    if (ComposableSingletons$QuestionIconKt_instance == null)
      new ComposableSingletons$QuestionIconKt();
    return ComposableSingletons$QuestionIconKt_instance;
  }
  function QuestionIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuestionIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function QuoteIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1516926133);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.a2v(300);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$QuoteIconKt_getInstance().y3h_1, $composer_0, 24576, 2);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(QuoteIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$QuoteIconKt$lambda_1$lambda_h2zdpn($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.v1d(359856060);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1f();
    var tmp;
    if (false || it === Companion_getInstance().n18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$QuoteIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$QuoteIconKt$lambda_1$lambda$lambda_cdcof4;
      $composer_0.q1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.x1d();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$QuoteIconKt$lambda_1$lambda$lambda_cdcof4($this$Path) {
    $this$Path.o2v('m175.6 204.73 22.19 46.49C258.61 223.15 278 189.49 278 151.18V48.78H175.6v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55zm-153.6 0 22.19 46.49c60.83-28.07 80.21-61.73 80.21-100.04V48.78H22v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55z');
    return Unit_instance;
  }
  function ComposableSingletons$QuoteIconKt() {
    ComposableSingletons$QuoteIconKt_instance = this;
    var tmp = this;
    tmp.y3h_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(-1173306345, false, ComposableSingletons$QuoteIconKt$lambda_1$lambda_h2zdpn));
  }
  var ComposableSingletons$QuoteIconKt_instance;
  function ComposableSingletons$QuoteIconKt_getInstance() {
    if (ComposableSingletons$QuoteIconKt_instance == null)
      new ComposableSingletons$QuoteIconKt();
    return ComposableSingletons$QuoteIconKt_instance;
  }
  function QuoteIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuoteIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function StopIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(637478449);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.a2v(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$StopIconKt_getInstance().z3h_1, $composer_0, 24576, 2);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(StopIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$StopIconKt$lambda_1$lambda_f41c6n($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.v1d(-6619268);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1f();
    var tmp;
    if (false || it === Companion_getInstance().n18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$StopIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$StopIconKt$lambda_1$lambda$lambda_g94738;
      $composer_0.q1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.x1d();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$StopIconKt$lambda_1$lambda$lambda_g94738($this$Path) {
    $this$Path.o2v('M 4.47 0.22 A 0.749 0.749 0 0 1 5 0 h 6 c 0.199 0 0.389 0.079 0.53 0.22 l 4.25 4.25 c 0.141 0.14 0.22 0.331 0.22 0.53 v 6 a 0.749 0.749 0 0 1 -0.22 0.53 l -4.25 4.25 A 0.749 0.749 0 0 1 11 16 H 5 a 0.749 0.749 0 0 1 -0.53 -0.22 L 0.22 11.53 A 0.749 0.749 0 0 1 0 11 V 5 c 0 -0.199 0.079 -0.389 0.22 -0.53 Z m 0.84 1.28 L 1.5 5.31 v 5.38 l 3.81 3.81 h 5.38 l 3.81 -3.81 V 5.31 L 10.69 1.5 Z M 8 4 a 0.75 0.75 0 0 1 0.75 0.75 v 3.5 a 0.75 0.75 0 0 1 -1.5 0 v -3.5 A 0.75 0.75 0 0 1 8 4 Z m 0 8 a 1 1 0 1 1 0 -2 a 1 1 0 0 1 0 2 Z');
    return Unit_instance;
  }
  function ComposableSingletons$StopIconKt() {
    ComposableSingletons$StopIconKt_instance = this;
    var tmp = this;
    tmp.z3h_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-515235331, false, ComposableSingletons$StopIconKt$lambda_1$lambda_f41c6n));
  }
  var ComposableSingletons$StopIconKt_instance;
  function ComposableSingletons$StopIconKt_getInstance() {
    if (ComposableSingletons$StopIconKt_instance == null)
      new ComposableSingletons$StopIconKt();
    return ComposableSingletons$StopIconKt_instance;
  }
  function StopIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      StopIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function WarningIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1461404811);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.a2v(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$WarningIconKt_getInstance().a3i_1, $composer_0, 24576, 2);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(WarningIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$WarningIconKt$lambda_1$lambda_abye4r($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.v1d(613140820);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1f();
    var tmp;
    if (false || it === Companion_getInstance().n18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$WarningIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$WarningIconKt$lambda_1$lambda$lambda_x4zgqo;
      $composer_0.q1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.x1d();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$WarningIconKt$lambda_1$lambda$lambda_x4zgqo($this$Path) {
    $this$Path.o2v('M 6.457 1.047 c 0.659 -1.234 2.427 -1.234 3.086 0 l 6.082 11.378 A 1.75 1.75 0 0 1 14.082 15 H 1.918 a 1.75 1.75 0 0 1 -1.543 -2.575 Z m 1.763 0.707 a 0.25 0.25 0 0 0 -0.44 0 L 1.698 13.132 a 0.25 0.25 0 0 0 0.22 0.368 h 12.164 a 0.25 0.25 0 0 0 0.22 -0.368 Z m 0.53 3.996 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 11 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_instance;
  }
  function ComposableSingletons$WarningIconKt() {
    ComposableSingletons$WarningIconKt_instance = this;
    var tmp = this;
    tmp.a3i_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-696961193, false, ComposableSingletons$WarningIconKt$lambda_1$lambda_abye4r));
  }
  var ComposableSingletons$WarningIconKt_instance;
  function ComposableSingletons$WarningIconKt_getInstance() {
    if (ComposableSingletons$WarningIconKt_instance == null)
      new ComposableSingletons$WarningIconKt();
    return ComposableSingletons$WarningIconKt_instance;
  }
  function WarningIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      WarningIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable;
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable;
  function createIcon(viewBox, width, renderStyle, attrs, content, $composer, $changed, $default) {
    var viewBox_0 = {_v: viewBox};
    var width_0 = {_v: width};
    var renderStyle_0 = {_v: renderStyle};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1506534634);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && (($changed & 8) === 0 ? $composer_0.f15(viewBox_0._v) : $composer_0.s1e(viewBox_0._v)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.s1e(width_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && (($changed & 512) === 0 ? $composer_0.f15(renderStyle_0._v) : $composer_0.s1e(renderStyle_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.s1e(attrs_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.s1e(content) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.o1d()) {
      $composer_0.y1d();
      if (($changed & 1) === 0 || $composer_0.c1e()) {
        if (!(($default & 1) === 0)) {
          viewBox_0._v = Companion_instance_16.a2v(24);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          width_0._v = get_em(1);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          renderStyle_0._v = new Stroke();
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          attrs_0._v = null;
        }
      } else {
        $composer_0.e18();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.z1d();
      $composer_0.v1d(1471101172);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!($composer_0.s1e(width_0._v) | (($dirty & 14 ^ 6) > 4 && $composer_0.s1e(viewBox_0._v) || ($dirty & 6) === 4)) | (($dirty & 896 ^ 384) > 256 && $composer_0.s1e(renderStyle_0._v) || ($dirty & 384) === 256)) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.f1f();
      var tmp;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>' call
        var value = createIcon$lambda(width_0, viewBox_0, renderStyle_0, attrs_0);
        tmp0.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.x1d();
      Svg(tmp0_group, content, $composer_0, 112 & $dirty >> 9, 0);
    } else {
      $composer_0.e18();
    }
    var tmp1_safe_receiver = $composer_0.y1f();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l1l(createIcon$lambda_0(viewBox_0, width_0, renderStyle_0, attrs_0, content, $changed, $default));
    }
  }
  function Fill() {
  }
  function Stroke(strokeWidth) {
    strokeWidth = strokeWidth === VOID ? null : strokeWidth;
    this.b3i_1 = strokeWidth;
  }
  function createIcon$lambda($width, $viewBox, $renderStyle, $attrs) {
    return function ($this$Svg) {
      var tmp0_safe_receiver = $width._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>' call
        $this$Svg.k2v(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $viewBox._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>' call
        $this$Svg.l2v(tmp1_safe_receiver.b2v_1, tmp1_safe_receiver.c2v_1, tmp1_safe_receiver.d2v_1, tmp1_safe_receiver.e2v_1);
      }
      var tmp2_safe_receiver = $renderStyle._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>' call
        var tmp;
        if (tmp2_safe_receiver instanceof Fill) {
          $this$Svg.j2v(SVGFillType_CurrentColor_getInstance());
          tmp = $this$Svg.h2v(SVGStrokeType_None_getInstance());
        } else {
          if (tmp2_safe_receiver instanceof Stroke) {
            $this$Svg.h2v(SVGStrokeType_CurrentColor_getInstance());
            $this$Svg.j2v(SVGFillType_None_getInstance());
            var tmp1_safe_receiver_0 = tmp2_safe_receiver.b3i_1;
            var tmp_0;
            if (tmp1_safe_receiver_0 == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              tmp_0 = $this$Svg.i2v(tmp1_safe_receiver_0);
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var tmp3_safe_receiver = $attrs._v;
      if (tmp3_safe_receiver == null)
        null;
      else
        tmp3_safe_receiver($this$Svg);
      return Unit_instance;
    };
  }
  function createIcon$lambda_0($viewBox, $width, $renderStyle, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      createIcon($viewBox._v, $width._v, $renderStyle._v, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_HorizontalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return HorizontalDividerStyle;
  }
  var HorizontalDividerStyle;
  function get_VerticalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return VerticalDividerStyle;
  }
  var VerticalDividerStyle;
  var com_varabyte_kobweb_silk_components_layout_DividerVars$stable;
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().e2t();
    tmp.c3i_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_percent(90);
    tmp_0.d3i_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(DividerVars).r3b = function () {
    return this.c3i_1.k2t(this, Color$factory_2());
  };
  protoOf(DividerVars).e3i = function () {
    return this.d3i_1.k2t(this, Length$factory());
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function HorizontalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().r3b().e2t()), DividerVars_getInstance().e3i().e2t());
  }
  function VerticalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().r3b().e2t()), DividerVars_getInstance().e3i().e2t());
  }
  function Color$factory_2() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.r3b();
    }, null);
  }
  function Length$factory() {
    return getPropertyCallableRef('Length', 1, KProperty1, function (receiver) {
      return receiver.e3i();
    }, null);
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_instance_5;
      HorizontalDividerStyle = base(tmp, VOID, HorizontalDividerStyle$lambda);
      var tmp_0 = Companion_instance_5;
      VerticalDividerStyle = base(tmp_0, VOID, VerticalDividerStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_DividerVars$stable = 8;
    }
  }
  function get_columnVariables() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return columnVariables;
  }
  var columnVariables;
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle;
  }
  var SimpleGridStyle;
  function numColumns(base, sm, md, lg, xl) {
    sm = sm === VOID ? base : sm;
    md = md === VOID ? sm : md;
    lg = lg === VOID ? md : lg;
    xl = xl === VOID ? lg : xl;
    _init_properties_SimpleGrid_kt__tvipdk();
    return new ResponsiveValues(base, sm, md, lg, xl);
  }
  function SimpleGrid(numColumns, modifier, variant, ref, content, $composer, $changed, $default) {
    _init_properties_SimpleGrid_kt__tvipdk();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1950532178);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.f15(numColumns) : $composer_0.s1e(numColumns)) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f15(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.f15(ref_0._v) : $composer_0.s1e(ref_0._v)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.s1e(content) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.o1d()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      var tmp = toAttrs(setVariable_0(setVariable_0(setVariable_0(setVariable_0(setVariable_0(toModifier_0(get_SimpleGridStyle(), [variant_0._v], $composer_0, 6), getValue(get_columnVariables(), Breakpoint_ZERO_getInstance()), numColumns.p37_1), getValue(get_columnVariables(), Breakpoint_SM_getInstance()), numColumns.q37_1), getValue(get_columnVariables(), Breakpoint_MD_getInstance()), numColumns.r37_1), getValue(get_columnVariables(), Breakpoint_LG_getInstance()), numColumns.s37_1), getValue(get_columnVariables(), Breakpoint_XL_getInstance()), numColumns.t37_1).m2z(modifier_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGrid.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(656877393, true, SimpleGrid$lambda(ref_0, content), $composer_0, 54);
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
        // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGrid.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_14(dispatchReceiver);
        $composer_1.q1f(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(SimpleGrid$lambda_0(numColumns, modifier_0, variant_0, ref_0, content, $changed, $default));
    }
  }
  function SimpleGridStyle$lambda($this$CssStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$CssStyle.t35(SimpleGridStyle$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = get_columnVariables().k2().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridStyle.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.d2();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.e2();
      $this$CssStyle.m36(breakpoint, SimpleGridStyle$lambda$lambda_0(variable));
    }
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.l2r(get_fr(1));
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.e2t();
      $this$gridTemplateColumns.h2r(tmp, SimpleGridStyle$lambda$lambda$lambda$lambda);
      return Unit_instance;
    };
  }
  function SimpleGridStyle$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_instance;
      return gridTemplateColumns(tmp, SimpleGridStyle$lambda$lambda$lambda($variable));
    };
  }
  function SimpleGrid$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope_0($this$Div, $ref._v, $composer_0, 14 & $changed);
      $content($composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function SimpleGrid$lambda_0($numColumns, $modifier, $variant, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      SimpleGrid($numColumns, $modifier._v, $variant._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (!properties_initialized_SimpleGrid_kt_fum19i) {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      // Inline function 'kotlin.collections.associateWith' call
      var this_0 = get_entries();
      var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var _iterator__ex2g4s = this_0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'com.varabyte.kobweb.silk.components.layout.columnVariables.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.l2_1.toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.y4(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle = CssStyle(VOID, SimpleGridStyle$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle;
  }
  var SurfaceStyle;
  var com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable;
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().e2t();
    tmp.f3i_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().e2t();
    tmp_0.g3i_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(SurfaceVars).t3b = function () {
    return this.f3i_1.k2t(this, BackgroundColor$factory_1());
  };
  protoOf(SurfaceVars).r3b = function () {
    return this.g3i_1.k2t(this, Color$factory_3());
  };
  var SurfaceVars_instance;
  function SurfaceVars_getInstance() {
    if (SurfaceVars_instance == null)
      new SurfaceVars();
    return SurfaceVars_instance;
  }
  function Surface(modifier, variant, colorModeOverride, contentAlignment, ref, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var colorModeOverride_0 = {_v: colorModeOverride};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-2142125922);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f15(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f15(colorModeOverride_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.s1e(contentAlignment_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ((($changed & 32768) === 0 ? $composer_0.f15(ref_0._v) : $composer_0.s1e(ref_0._v)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.s1e(content) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.o1d()) {
      $composer_0.y1d();
      if (($changed & 1) === 0 || $composer_0.c1e()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          colorModeOverride_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          contentAlignment_0._v = TopStart_instance;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.e18();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.z1d();
      $composer_0.v1d(-1737049201);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1f();
      var tmp;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.x1d();
      var surfaceElement$delegate = tmp0_group;
      var tmp_1 = toModifier_0(get_SurfaceStyle(), [variant_0._v], $composer_0, 6).m2z(modifier_0._v);
      var tmp_2 = contentAlignment_0._v;
      $composer_0.v1d(-1737043383);
      var tmp2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 57344) === 16384 || (!(($dirty & 32768) === 0) && $composer_0.s1e(ref_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp2.f1f();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance().n18_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
        var value_0 = Surface$lambda_1(ref_0, surfaceElement$delegate);
        tmp2.q1f(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.x1d();
      var tmp_5 = refScope(tmp1_group);
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1615126744, true, Surface$lambda_2(colorModeOverride_0, content, surfaceElement$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.f1f();
      var tmp_6;
      if (invalid_0 || it_1 === Companion_getInstance().n18_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_16(dispatchReceiver);
        $composer_1.q1f(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_1, tmp_2, tmp_5, tmp0, $composer_0, 3072 | 112 & $dirty >> 6, 0);
    } else {
      $composer_0.e18();
    }
    var tmp2_safe_receiver = $composer_0.y1f();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.l1l(Surface$lambda_3(modifier_0, variant_0, colorModeOverride_0, contentAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Surface$lambda($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $surfaceElement$delegate.e2();
  }
  function Surface$lambda_0($surfaceElement$delegate, _set____db54di) {
    _init_properties_Surface_kt__8o7unv();
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $surfaceElement$delegate.is(_set____db54di);
    return Unit_instance;
  }
  function SurfaceStyle$lambda($this$CssStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$CssStyle.t35(SurfaceStyle$lambda$lambda);
    return Unit_instance;
  }
  function SurfaceStyle$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_instance, SurfaceVars_getInstance().t3b().e2t()), SurfaceVars_getInstance().r3b().e2t());
  }
  function Surface$lambda$lambda($surfaceElement$delegate) {
    return function (it) {
      Surface$lambda_0($surfaceElement$delegate, it);
      return Unit_instance;
    };
  }
  function Surface$lambda_1($ref, $surfaceElement$delegate) {
    return function ($this$refScope) {
      $this$refScope.n2u($ref._v);
      $this$refScope.m2u([], Surface$lambda$lambda($surfaceElement$delegate));
      return Unit_instance;
    };
  }
  function Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation) {
    this.p3i_1 = $surfaceElement;
    this.q3i_1 = $currColorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$lambda$slambda).b1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.c1n($this$LaunchedEffect, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(Surface$lambda$lambda$slambda).q9 = function (p1, $completion) {
    return this.b1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$lambda$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        if (tmp === 0) {
          this.x8_1 = 1;
          setSilkWidgetVariables(this.p3i_1, this.q3i_1);
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
  protoOf(Surface$lambda$lambda$slambda).c1n = function ($this$LaunchedEffect, completion) {
    var i = new Surface$lambda$lambda$slambda(this.p3i_1, this.q3i_1, completion);
    i.r3i_1 = $this$LaunchedEffect;
    return i;
  };
  function Surface$lambda$lambda$slambda_0($surfaceElement, $currColorMode, resultContinuation) {
    var i = new Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.b1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda$lambda_0($surfaceElement, $content, $this_Box) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
        var currColorMode = Companion_instance_17.r36($composer_0, 6);
        $composer_0.v1d(1829026742);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.s1e($surfaceElement) | $composer_0.f15(currColorMode));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.f1f();
        var tmp_0;
        if (invalid || it === Companion_getInstance().n18_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = Surface$lambda$lambda$slambda_0($surfaceElement, currColorMode, null);
          $composer_0.q1f(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.x1d();
        LaunchedEffect(currColorMode, tmp0_group, $composer_0, 0);
        tmp = $content($this_Box, $composer_0, 0);
      } else {
        $composer_0.e18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function Surface$lambda_2($colorModeOverride, $content, $surfaceElement$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.f15($this$Box) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
        if (!($colorModeOverride._v == null)) {
          $composer_0.v1d(-708350689);
          var tmp0_safe_receiver = Surface$lambda($surfaceElement$delegate);
          var tmp_1;
          if (tmp0_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_2 = $colorModeOverride._v.x38();
            // Inline function 'kotlin.run' call
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var dispatchReceiver = rememberComposableLambda(-346828591, true, Surface$lambda$lambda_0(tmp0_safe_receiver, $content, $this$Box), $composer_0, 54);
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
              // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value = ComposableLambda$invoke$ref_15(dispatchReceiver);
              $composer_1.q1f(value);
              tmp_3 = value;
            } else {
              tmp_3 = it;
            }
            var tmp_4 = tmp_3;
            var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
            sourceInformationMarkerEnd($composer_1);
            CompositionLocalProvider(tmp_2, tmp0, $composer_0, 56);
            tmp_1 = Unit_instance;
          }
          $composer_0.x1d();
        } else {
          $composer_0.v1d(-707941055);
          $content($this$Box, $composer_0, 14 & $dirty);
          $composer_0.x1d();
        }
        tmp_0 = Unit_instance;
      } else {
        $composer_0.e18();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function Surface$lambda_3($modifier, $variant, $colorModeOverride, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface($modifier._v, $variant._v, $colorModeOverride._v, $contentAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_1() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.t3b();
    }, null);
  }
  function Color$factory_3() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.r3b();
    }, null);
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle = CssStyle(VOID, SurfaceStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable;
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle;
  }
  var OverlayStyle;
  var com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable;
  function OverlayVars() {
    OverlayVars_instance = this;
    this.s3i_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).t3b = function () {
    return this.s3i_1.k2t(this, BackgroundColor$factory_2());
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function OverlayStyle$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_instance, OverlayVars_getInstance().t3b().e2t());
  }
  function BackgroundColor$factory_2() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.t3b();
    }, null);
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_instance_5;
      OverlayStyle = base(tmp, VOID, OverlayStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable;
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle;
  }
  var PopupStyle;
  var com_varabyte_kobweb_silk_components_overlay_PopupVars$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupScope$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable;
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().j3h().e2t();
    tmp.t3i_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
  }
  protoOf(PopupVars).g3f = function () {
    return this.t3i_1.k2t(this, TransitionDuration$factory_1());
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  function PopupStyle$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition_0(Companion_instance, [Companion_instance_2.x2t('opacity', PopupVars_getInstance().g3f().e2t())]);
  }
  function TransitionDuration$factory_1() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.g3f();
    }, null);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_instance_5;
      PopupStyle = base(tmp, VOID, PopupStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_PopupVars$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupScope$stable = 0;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable = 0;
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle;
  }
  var TooltipStyle;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle;
  }
  var TooltipArrowStyle;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant;
  }
  var TopLeftTooltipArrowVariant;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant;
  }
  var TopTooltipArrowVariant;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant;
  }
  var TopRightTooltipArrowVariant;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant;
  }
  var LeftTopTooltipArrowVariant;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant;
  }
  var LeftTooltipArrowVariant;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant;
  }
  var LeftBottomTooltipArrowVariant;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant;
  }
  var RightTopTooltipArrowVariant;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant;
  }
  var RightTooltipArrowVariant;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant;
  }
  var RightBottomTooltipArrowVariant;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant;
  }
  var BottomLeftTooltipArrowVariant;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant;
  }
  var BottomTooltipArrowVariant;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant;
  }
  var BottomRightTooltipArrowVariant;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  var com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable;
  function TooltipVars() {
    TooltipVars_instance = this;
    this.u3i_1 = StyleVariable('silk');
    this.v3i_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).t3b = function () {
    return this.u3i_1.k2t(this, BackgroundColor$factory_3());
  };
  protoOf(TooltipVars).r3b = function () {
    return this.v3i_1.k2t(this, Color$factory_4());
  };
  var TooltipVars_instance;
  function TooltipVars_getInstance() {
    if (TooltipVars_instance == null)
      new TooltipVars();
    return TooltipVars_instance;
  }
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleUp$lambda(color));
  }
  function TooltipStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().t3b().e2t()), TooltipVars_getInstance().r3b().e2t()), get_px(6));
  }
  function TooltipArrowStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border_0(tmp_0, TooltipArrowStyle$lambda$lambda);
  }
  function TooltipArrowStyle$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.z31(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.y31('solid');
    return Unit_instance;
  }
  function TopLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_2(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().t3b().e2t());
  }
  function TopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_2(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().t3b().e2t());
  }
  function TopRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_2(Companion_instance, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().t3b().e2t());
  }
  function LeftTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_instance, get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().t3b().e2t());
  }
  function LeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().t3b().e2t());
  }
  function LeftBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_2(Companion_instance, VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().t3b().e2t());
  }
  function RightTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_instance, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().t3b().e2t());
  }
  function RightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().t3b().e2t());
  }
  function RightBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_2(Companion_instance, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().t3b().e2t());
  }
  function BottomLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().t3b().e2t());
  }
  function BottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().t3b().e2t());
  }
  function BottomRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_2(Companion_instance, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().t3b().e2t());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_instance, get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.s2j('border-color', 'transparent transparent ' + toString($color) + ' transparent');
      return Unit_instance;
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.s2j('border-color', 'transparent ' + toString($color) + ' transparent transparent');
      return Unit_instance;
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.s2j('border-color', 'transparent transparent transparent ' + toString($color));
      return Unit_instance;
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.s2j('border-color', toString($color) + ' transparent transparent transparent');
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_3() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.t3b();
    }, null);
  }
  function Color$factory_4() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.r3b();
    }, null);
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_instance_5;
      TooltipStyle = base(tmp, VOID, TooltipStyle$lambda);
      var tmp_0 = Companion_instance_5;
      TooltipArrowStyle = base(tmp_0, VOID, TooltipArrowStyle$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant = addVariantBase(tmp_1, VOID, TopLeftTooltipArrowVariant$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant = addVariantBase(tmp_2, VOID, TopTooltipArrowVariant$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant = addVariantBase(tmp_3, VOID, TopRightTooltipArrowVariant$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant = addVariantBase(tmp_4, VOID, LeftTopTooltipArrowVariant$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant = addVariantBase(tmp_5, VOID, LeftTooltipArrowVariant$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant = addVariantBase(tmp_6, VOID, LeftBottomTooltipArrowVariant$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant = addVariantBase(tmp_7, VOID, RightTopTooltipArrowVariant$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant = addVariantBase(tmp_8, VOID, RightTooltipArrowVariant$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant = addVariantBase(tmp_9, VOID, RightBottomTooltipArrowVariant$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant = addVariantBase(tmp_10, VOID, BottomLeftTooltipArrowVariant$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant = addVariantBase(tmp_11, VOID, BottomTooltipArrowVariant$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant = addVariantBase(tmp_12, VOID, BottomRightTooltipArrowVariant$lambda);
      var tmp_13 = Companion_instance_5;
      TooltipTextContainerStyle = base(tmp_13, VOID, TooltipTextContainerStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable = 8;
    }
  }
  function get_SilkColorsStyle() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return SilkColorsStyle;
  }
  var SilkColorsStyle;
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.u32_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.u32_1.l33_1;
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>' call
    var focusOutline = Blue_getInstance().n39_1.t30().s30(VOID, VOID, VOID, 0.5);
    var placeholder = Gray_getInstance().x39_1;
    // Inline function 'kotlin.run' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>.<anonymous>' call
    var color = Colors_instance.b31();
    set_background(this_0.c3a_1, Colors_instance.u31());
    set_color(this_0.c3a_1, color);
    set_border(this_0.c3a_1, color.s30(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.c3a_1, focusOutline);
    set_overlay(this_0.c3a_1, color.s30(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.c3a_1, placeholder);
    var buttonBase = Colors_instance.u31().p30(0.2);
    get_button_0(this_0.c3a_1).c3j(buttonBase, buttonBase.p30(0.2), Colors_instance.d31(), buttonBase.p30(0.4));
    get_callout(this_0.c3a_1).m3j(Colors_instance.e31(), Colors_instance.i31(), Colors_instance.k31(), Colors_instance.s31(), Colors_instance.l31(), Colors_instance.o31(), Colors_instance.h31());
    get_checkbox_0(this_0.c3a_1).s3j(Blue_getInstance().n39_1, Blue_getInstance().o39_1, Colors_instance.u31());
    var inputFilled = Gray_getInstance().u39_1;
    var tmp0_$this = get_input_0(this_0.c3a_1);
    var tmp1_filledFocus = Colors_instance.z30();
    var tmp2_hoveredBorder = Gray_getInstance().x39_1;
    var tmp3_invalidBorder = Red_getInstance().h39_1;
    var tmp4_filledHover = inputFilled.p30(0.1);
    tmp0_$this.a3k(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = get_switch_0(this_0.c3a_1);
    var tmp6_thumb = Colors_instance.u31();
    var tmp7_backgroundOn = Colors_instance.k31();
    var tmp8_backgroundOff = Colors_instance.m31();
    tmp5_$this.s3j(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    get_tab_0(this_0.c3a_1).q3k(Colors_instance.b31(), Colors_instance.u31(), Colors_instance.d31(), VOID, VOID, Colors_instance.m31(), Colors_instance.v31(), Colors_instance.u31());
    get_tooltip_0(this_0.c3a_1).v3k(get_color_0(this_0.c3a_1), get_background_0(this_0.c3a_1));
    // Inline function 'kotlin.run' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>.<anonymous>' call
    var color_0 = Colors_instance.u31();
    set_background(this_0.d3a_1, Colors_instance.b31());
    set_color(this_0.d3a_1, color_0);
    set_border(this_0.d3a_1, color_0.s30(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.d3a_1, focusOutline);
    set_overlay(this_0.d3a_1, color_0.s30(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.d3a_1, placeholder);
    var buttonBase_0 = lightened(Colors_instance.b31(), 0.2);
    get_button_0(this_0.d3a_1).c3j(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_instance.n31(), lightened(buttonBase_0, 0.4));
    get_callout(this_0.d3a_1).m3j(Colors_instance.r31(), get_callout(this_0.c3a_1).g3c(), get_callout(this_0.c3a_1).h3c(), Colors_instance.a31(), get_callout(this_0.c3a_1).j3c(), get_callout(this_0.c3a_1).k3c(), Colors_instance.p31());
    get_checkbox_0(this_0.d3a_1).s3j(Blue_getInstance().k39_1, Blue_getInstance().l39_1, Colors_instance.b31());
    var inputFilled_0 = Gray_getInstance().b3a_1;
    var tmp0_$this_0 = get_input_0(this_0.d3a_1);
    var tmp1_filledFocus_0 = Colors_instance.z30();
    var tmp2_hoveredBorder_0 = Gray_getInstance().y39_1;
    var tmp3_invalidBorder_0 = Red_getInstance().b39_1;
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.a3k(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = get_switch_0(this_0.d3a_1);
    var tmp6_thumb_0 = Colors_instance.u31();
    var tmp7_backgroundOn_0 = Colors_instance.n31();
    var tmp8_backgroundOff_0 = Colors_instance.g31();
    tmp5_$this_0.s3j(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    get_tab_0(this_0.d3a_1).q3k(Colors_instance.u31(), Colors_instance.b31(), Colors_instance.n31(), VOID, VOID, Colors_instance.j31(), Colors_instance.g31(), Colors_instance.b31());
    get_tooltip_0(this_0.d3a_1).v3k(get_color_0(this_0.d3a_1), get_background_0(this_0.d3a_1));
    mutableTheme.b38('silk-colors', get_SilkColorsStyle());
    mutableTheme.n33('silk-input', get_InputStyle());
    mutableTheme.h38('-outlined', get_OutlinedInputVariant());
    mutableTheme.h38('-filled', get_FilledInputVariant());
    mutableTheme.h38('-flushed', get_FlushedInputVariant());
    mutableTheme.h38('-unstyled', get_UnstyledInputVariant());
    mutableTheme.n33('silk-input-group', get_InputGroupStyle());
    mutableTheme.b38('silk-disabled', get_DisabledStyle());
    mutableTheme.b38('silk-smooth-color', get_SmoothColorStyle());
    mutableTheme.n33('silk-button', get_ButtonStyle());
    mutableTheme.n33('silk-canvas', get_CanvasStyle());
    mutableTheme.n33('silk-callout', get_CalloutStyle());
    mutableTheme.h38('-left-bordered', get_LeftBorderedCalloutVariant());
    mutableTheme.h38('-left-bordered-filled', get_LeftBorderedFilledCalloutVariant());
    mutableTheme.h38('-outlined', get_OutlinedCalloutVariant());
    mutableTheme.h38('-matching-link', get_MatchingLinkCalloutVariant());
    mutableTheme.n33('silk-checkbox', get_CheckboxStyle());
    mutableTheme.h38('-checkbox', get_CheckboxInputVariant());
    mutableTheme.n33('silk-checkbox-icon-container', get_CheckboxIconContainerStyle());
    mutableTheme.n33('silk-checkbox-icon', get_CheckboxIconStyle());
    mutableTheme.h38('-checked', get_CheckedCheckboxIconContainerVariant());
    mutableTheme.h38('-unchecked', get_UncheckedCheckboxIconContainerVariant());
    mutableTheme.n33('silk-overlay', get_OverlayStyle());
    mutableTheme.n33('silk-popup', get_PopupStyle());
    mutableTheme.n33('silk-simple-grid', get_SimpleGridStyle());
    mutableTheme.n33('silk-surface', get_SurfaceStyle());
    mutableTheme.n33('silk-horizontal-divider', get_HorizontalDividerStyle());
    mutableTheme.n33('silk-vertical-divider', get_VerticalDividerStyle());
    mutableTheme.n33('silk-switch', get_SwitchStyle());
    mutableTheme.n33('silk-switch-track', get_SwitchTrackStyle());
    mutableTheme.n33('silk-switch-thumb', get_SwitchThumbStyle());
    mutableTheme.h38('-switch', get_SwitchInputVariant());
    mutableTheme.n33('silk-tabs', get_TabsStyle());
    mutableTheme.n33('silk-tabs-tab-row', get_TabsTabRowStyle());
    mutableTheme.n33('silk-tabs-tab', get_TabsTabStyle());
    mutableTheme.n33('silk-tabs-panel', get_TabsPanelStyle());
    mutableTheme.n33('silk-tooltip-arrow', get_TooltipArrowStyle());
    mutableTheme.h38('-top-left', get_TopLeftTooltipArrowVariant());
    mutableTheme.h38('-top', get_TopTooltipArrowVariant());
    mutableTheme.h38('-top-right', get_TopRightTooltipArrowVariant());
    mutableTheme.h38('-left-top', get_LeftTopTooltipArrowVariant());
    mutableTheme.h38('-left', get_LeftTooltipArrowVariant());
    mutableTheme.h38('-left-bottom', get_LeftBottomTooltipArrowVariant());
    mutableTheme.h38('-right-top', get_RightTopTooltipArrowVariant());
    mutableTheme.h38('-right', get_RightTooltipArrowVariant());
    mutableTheme.h38('-right-bottom', get_RightBottomTooltipArrowVariant());
    mutableTheme.h38('-bottom-left', get_BottomLeftTooltipArrowVariant());
    mutableTheme.h38('-bottom', get_BottomTooltipArrowVariant());
    mutableTheme.h38('-bottom-right', get_BottomRightTooltipArrowVariant());
    mutableTheme.n33('silk-tooltip', get_TooltipStyle());
    mutableTheme.n33('silk-tooltip-text', get_TooltipTextContainerStyle());
    mutableTheme.i38('silk-checkbox-enabled', get_CheckboxEnabledAnim());
    mutableTheme.z37('silk-button-size_xs', Companion_getInstance_1().u3d_1);
    mutableTheme.z37('silk-button-size_sm', Companion_getInstance_1().v3d_1);
    mutableTheme.z37('silk-button-size_md', Companion_getInstance_1().w3d_1);
    mutableTheme.z37('silk-button-size_lg', Companion_getInstance_1().x3d_1);
    mutableTheme.z37('silk-checkbox-size_sm', Companion_getInstance_2().h3f_1);
    mutableTheme.z37('silk-checkbox-size_md', Companion_getInstance_2().i3f_1);
    mutableTheme.z37('silk-checkbox-size_lg', Companion_getInstance_2().j3f_1);
    mutableTheme.z37('silk-input-size_xs', Companion_getInstance_3().q3g_1);
    mutableTheme.z37('silk-input-size_sm', Companion_getInstance_3().r3g_1);
    mutableTheme.z37('silk-input-size_md', Companion_getInstance_3().s3g_1);
    mutableTheme.z37('silk-input-size_lg', Companion_getInstance_3().t3g_1);
    mutableTheme.z37('silk-switch-size_sm', Companion_getInstance_4().r3h_1);
    mutableTheme.z37('silk-switch-size_md', Companion_getInstance_4().s3h_1);
    mutableTheme.z37('silk-switch-size_lg', Companion_getInstance_4().t3h_1);
    mutableTheme.z37('silk-callout-type_caution', Companion_getInstance_0().t3c_1);
    mutableTheme.z37('silk-callout-type_important', Companion_getInstance_0().u3c_1);
    mutableTheme.z37('silk-callout-type_note', Companion_getInstance_0().v3c_1);
    mutableTheme.z37('silk-callout-type_question', Companion_getInstance_0().w3c_1);
    mutableTheme.z37('silk-callout-type_quote', Companion_getInstance_0().x3c_1);
    mutableTheme.z37('silk-callout-type_tip', Companion_getInstance_0().y3c_1);
    mutableTheme.z37('silk-callout-type_warning', Companion_getInstance_0().z3c_1);
  }
  function setSilkWidgetVariables(_this__u8e3s4, colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    // Inline function 'kotlin.let' call
    // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
    var silkColorsStyleName = get_name(get_SilkColorsStyle());
    removeClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode.u36())]);
    addClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode)]);
  }
  function SilkWidgetVariables(rootElementId, $composer, $changed, $default) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var rootElementId_0 = {_v: rootElementId};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-368967725);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f15(rootElementId_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        rootElementId_0._v = 'root';
      }
      $composer_0.v1d(743479865);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.f1f();
      var tmp;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'com.varabyte.kobweb.silk.init.SilkWidgetVariables.<anonymous>' call
        var value = SilkWidgetVariables$lambda(rootElementId_0);
        tmp0.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.x1d();
      SilkWidgetVariables_0(tmp0_group, $composer_0, 0);
    } else {
      $composer_0.e18();
    }
    var tmp1_safe_receiver = $composer_0.y1f();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l1l(SilkWidgetVariables$lambda_0(rootElementId_0, $changed, $default));
    }
  }
  function SilkWidgetVariables_0(provideRootElement, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1418237724);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(provideRootElement) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      $composer_0.v1d(743474465);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1f();
      var tmp;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'com.varabyte.kobweb.silk.init.SilkWidgetVariables.<anonymous>' call
        var value = provideRootElement();
        this_0.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.x1d();
      var rootElement = tmp0_group;
      SilkWidgetVariables_1(rootElement, $composer_0, 0);
    } else {
      $composer_0.e18();
    }
    var tmp1_safe_receiver = $composer_0.y1f();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l1l(SilkWidgetVariables$lambda_1(provideRootElement, $changed));
    }
  }
  function SilkWidgetVariables_1(rootElement, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(145799267);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(rootElement) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.o1d()) {
      setSilkWidgetVariables(rootElement, Companion_instance_17.r36($composer_0, 6));
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(SilkWidgetVariables$lambda_2(rootElement, $changed));
    }
  }
  function SilkColorsStyle$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette($this$base.n36_1);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(Companion_instance, get_BackgroundColorVar(), get_background(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().n3d(), get_button(palette).w3k()), ButtonVars_getInstance().p3d(), get_button(palette).d2l()), ButtonVars_getInstance().q3d(), get_button(palette).x3k()), CheckboxVars_getInstance().e3f(), get_checkbox(palette).y3k()), CheckboxVars_getInstance().f3f(), get_checkbox(palette).d2l()), CheckboxVars_getInstance().d3f(), get_checkbox(palette).z3k()), InputVars_getInstance().b3g(), get_input(palette).a3l()), InputVars_getInstance().c3g(), get_input(palette).b3l()), InputVars_getInstance().d3g(), get_input(palette).c3l()), InputVars_getInstance().e3g(), get_input(palette).d3l()), InputVars_getInstance().f3g(), get_input(palette).e3l()), OverlayVars_getInstance().t3b(), get_overlay(palette)), SwitchVars_getInstance().q3h(), get_switch(palette).f3l()), TabVars_getInstance().r3b(), get_tab(palette).z3k()), TabVars_getInstance().t3b(), get_tab(palette).y3k()), TabVars_getInstance().u3b(), get_tab(palette).g3l()), TabVars_getInstance().v3b(), get_tab(palette).d2l()), TabVars_getInstance().w3b(), get_tab(palette).x3k()), TooltipVars_getInstance().t3b(), get_tooltip(palette).y3k()), TooltipVars_getInstance().r3b(), get_tooltip(palette).z3k());
  }
  function SilkWidgetVariables$lambda($rootElementId) {
    return function () {
      var tmp = document.getElementById($rootElementId._v);
      return tmp instanceof HTMLElement ? tmp : THROW_CCE();
    };
  }
  function SilkWidgetVariables$lambda_0($rootElementId, $$changed, $$default) {
    return function ($composer, $force) {
      SilkWidgetVariables($rootElementId._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SilkWidgetVariables$lambda_1($provideRootElement, $$changed) {
    return function ($composer, $force) {
      SilkWidgetVariables_0($provideRootElement, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SilkWidgetVariables$lambda_2($rootElement, $$changed) {
    return function ($composer, $force) {
      SilkWidgetVariables_1($rootElement, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_InitSilkWidgets_kt_dse0va;
  function _init_properties_InitSilkWidgets_kt__62z9ag() {
    if (!properties_initialized_InitSilkWidgets_kt_dse0va) {
      properties_initialized_InitSilkWidgets_kt_dse0va = true;
      var tmp = Companion_instance_5;
      SilkColorsStyle = base_0(tmp, VOID, SilkColorsStyle$lambda);
    }
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle;
  }
  var DisabledStyle;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorTransitionDurationVar$delegate.k2t(null, SmoothColorTransitionDurationVar$factory());
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle;
  }
  var SmoothColorStyle;
  function DisabledStyle$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.v1d(812442038);
    var tmp0 = tabIndex(ariaDisabled(Companion_instance), -1);
    $composer_0.x1d();
    return tmp0;
  }
  function DisabledStyle$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_instance, 0.5), Companion_instance_1.u2q());
  }
  function SmoothColorStyle$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition_0(Companion_instance, [Companion_instance_2.x2t('background-color', get_SmoothColorTransitionDurationVar().e2t())]);
  }
  function SmoothColorTransitionDurationVar$factory() {
    return getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, KProperty0, function () {
      return get_SmoothColorTransitionDurationVar();
    }, null);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_instance_5;
      var tmp_0 = DisabledStyle$lambda;
      DisabledStyle = base_1(tmp, tmp_0, DisabledStyle$lambda_0);
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().a2r().e2t();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_instance_5;
      SmoothColorStyle = base_0(tmp_1, VOID, SmoothColorStyle$lambda);
    }
  }
  var com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable;
  var com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable;
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.j3b_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.k3b_1 = StyleVariable_1(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.l3b_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.m3b_1 = StyleVariable_1(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.n3b_1 = StyleVariable_1(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.o3b_1 = StyleVariable_1(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.p3b_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.q3b_1 = StyleVariable_1(tmp0_defaultFallback_6, 'silk');
  }
  protoOf(TransitionDurationVars).u3e = function () {
    return this.l3b_1.k2t(this, VeryFast$factory());
  };
  protoOf(TransitionDurationVars).j3h = function () {
    return this.m3b_1.k2t(this, Fast$factory());
  };
  protoOf(TransitionDurationVars).a2r = function () {
    return this.n3b_1.k2t(this, Normal$factory());
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function VeryFast$factory() {
    return getPropertyCallableRef('VeryFast', 1, KProperty1, function (receiver) {
      return receiver.u3e();
    }, null);
  }
  function Fast$factory() {
    return getPropertyCallableRef('Fast', 1, KProperty1, function (receiver) {
      return receiver.j3h();
    }, null);
  }
  function Normal$factory() {
    return getPropertyCallableRef('Normal', 1, KProperty1, function (receiver) {
      return receiver.a2r();
    }, null);
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BackgroundColorVar$delegate.k2t(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return ColorVar$delegate.k2t(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BorderColorVar$delegate.k2t(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return FocusOutlineColorVar$delegate.k2t(null, FocusOutlineColorVar$factory());
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderOpacityVar$delegate.k2t(null, PlaceholderOpacityVar$factory());
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderColorVar$delegate.k2t(null, PlaceholderColorVar$factory());
  }
  var PlaceholderColorVar$delegate;
  function BackgroundColorVar$factory() {
    return getPropertyCallableRef('BackgroundColorVar', 0, KProperty0, function () {
      return get_BackgroundColorVar();
    }, null);
  }
  function ColorVar$factory() {
    return getPropertyCallableRef('ColorVar', 0, KProperty0, function () {
      return get_ColorVar();
    }, null);
  }
  function BorderColorVar$factory() {
    return getPropertyCallableRef('BorderColorVar', 0, KProperty0, function () {
      return get_BorderColorVar();
    }, null);
  }
  function FocusOutlineColorVar$factory() {
    return getPropertyCallableRef('FocusOutlineColorVar', 0, KProperty0, function () {
      return get_FocusOutlineColorVar();
    }, null);
  }
  function PlaceholderOpacityVar$factory() {
    return getPropertyCallableRef('PlaceholderOpacityVar', 0, KProperty0, function () {
      return get_PlaceholderOpacityVar();
    }, null);
  }
  function PlaceholderColorVar$factory() {
    return getPropertyCallableRef('PlaceholderColorVar', 0, KProperty0, function () {
      return get_PlaceholderColorVar();
    }, null);
  }
  var properties_initialized_ColorVars_kt_3y5hvl;
  function _init_properties_ColorVars_kt__w8x7ib() {
    if (!properties_initialized_ColorVars_kt_3y5hvl) {
      properties_initialized_ColorVars_kt_3y5hvl = true;
      BackgroundColorVar$delegate = StyleVariable('silk');
      ColorVar$delegate = StyleVariable('silk');
      BorderColorVar$delegate = StyleVariable('silk');
      FocusOutlineColorVar$delegate = StyleVariable('silk');
      PlaceholderOpacityVar$delegate = StyleVariable_2(1.0, 'silk');
      PlaceholderColorVar$delegate = StyleVariable('silk');
    }
  }
  var com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable;
  var com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable;
  function FontSizeVars() {
    FontSizeVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.75);
    tmp.y3d_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.875);
    tmp_0.z3d_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(1);
    tmp_1.a3e_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(1.125);
    tmp_2.b3e_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(FontSizeVars).c3e = function () {
    return this.y3d_1.k2t(this, XS$factory());
  };
  protoOf(FontSizeVars).d3e = function () {
    return this.z3d_1.k2t(this, SM$factory());
  };
  protoOf(FontSizeVars).e3e = function () {
    return this.a3e_1.k2t(this, MD$factory());
  };
  protoOf(FontSizeVars).f3e = function () {
    return this.b3e_1.k2t(this, LG$factory());
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function BorderRadiusVars() {
    BorderRadiusVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.125);
    tmp.u3g_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.25);
    tmp_0.v3g_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.375);
    tmp_1.w3g_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.x3g_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(BorderRadiusVars).c3e = function () {
    return this.u3g_1.k2t(this, XS$factory_0());
  };
  protoOf(BorderRadiusVars).d3e = function () {
    return this.v3g_1.k2t(this, SM$factory_0());
  };
  protoOf(BorderRadiusVars).e3e = function () {
    return this.w3g_1.k2t(this, MD$factory_0());
  };
  var BorderRadiusVars_instance;
  function BorderRadiusVars_getInstance() {
    if (BorderRadiusVars_instance == null)
      new BorderRadiusVars();
    return BorderRadiusVars_instance;
  }
  function XS$factory() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.c3e();
    }, null);
  }
  function SM$factory() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.d3e();
    }, null);
  }
  function MD$factory() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.e3e();
    }, null);
  }
  function LG$factory() {
    return getPropertyCallableRef('LG', 1, KProperty1, function (receiver) {
      return receiver.f3e();
    }, null);
  }
  function XS$factory_0() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.c3e();
    }, null);
  }
  function SM$factory_0() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.d3e();
    }, null);
  }
  function MD$factory_0() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.e3e();
    }, null);
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCallout$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable;
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.y3i_1 = this.p3a();
    this.z3i_1 = this.p3a();
    this.a3j_1 = this.p3a();
    this.b3j_1 = this.p3a();
  }
  protoOf(MutableButton).h3l = function (_set____db54di) {
    return this.y3i_1.m3a(this, default$factory(), _set____db54di);
  };
  protoOf(MutableButton).w3k = function () {
    return this.y3i_1.k2t(this, default$factory_0());
  };
  protoOf(MutableButton).i3l = function (_set____db54di) {
    return this.z3i_1.m3a(this, hover$factory(), _set____db54di);
  };
  protoOf(MutableButton).d2l = function () {
    return this.z3i_1.k2t(this, hover$factory_0());
  };
  protoOf(MutableButton).j3l = function (_set____db54di) {
    return this.a3j_1.m3a(this, focus$factory(), _set____db54di);
  };
  protoOf(MutableButton).k3l = function () {
    return this.a3j_1.k2t(this, focus$factory_0());
  };
  protoOf(MutableButton).l3l = function (_set____db54di) {
    return this.b3j_1.m3a(this, pressed$factory(), _set____db54di);
  };
  protoOf(MutableButton).x3k = function () {
    return this.b3j_1.k2t(this, pressed$factory_0());
  };
  protoOf(MutableButton).c3j = function (default_0, hover, focus, pressed) {
    this.h3l(default_0);
    this.i3l(hover);
    this.j3l(focus);
    this.l3l(pressed);
  };
  function MutableCallout(palette) {
    ColorGroup.call(this, palette, 'callout');
    this.f3j_1 = this.p3a();
    this.g3j_1 = this.p3a();
    this.h3j_1 = this.p3a();
    this.i3j_1 = this.p3a();
    this.j3j_1 = this.p3a();
    this.k3j_1 = this.p3a();
    this.l3j_1 = this.p3a();
  }
  protoOf(MutableCallout).m3l = function (_set____db54di) {
    return this.f3j_1.m3a(this, caution$factory(), _set____db54di);
  };
  protoOf(MutableCallout).f3c = function () {
    return this.f3j_1.k2t(this, caution$factory_0());
  };
  protoOf(MutableCallout).n3l = function (_set____db54di) {
    return this.g3j_1.m3a(this, important$factory(), _set____db54di);
  };
  protoOf(MutableCallout).g3c = function () {
    return this.g3j_1.k2t(this, important$factory_0());
  };
  protoOf(MutableCallout).o3l = function (_set____db54di) {
    return this.h3j_1.m3a(this, note$factory(), _set____db54di);
  };
  protoOf(MutableCallout).h3c = function () {
    return this.h3j_1.k2t(this, note$factory_0());
  };
  protoOf(MutableCallout).p3l = function (_set____db54di) {
    return this.i3j_1.m3a(this, question$factory(), _set____db54di);
  };
  protoOf(MutableCallout).i3c = function () {
    return this.i3j_1.k2t(this, question$factory_0());
  };
  protoOf(MutableCallout).q3l = function (_set____db54di) {
    return this.j3j_1.m3a(this, quote$factory(), _set____db54di);
  };
  protoOf(MutableCallout).j3c = function () {
    return this.j3j_1.k2t(this, quote$factory_0());
  };
  protoOf(MutableCallout).r3l = function (_set____db54di) {
    return this.k3j_1.m3a(this, tip$factory(), _set____db54di);
  };
  protoOf(MutableCallout).k3c = function () {
    return this.k3j_1.k2t(this, tip$factory_0());
  };
  protoOf(MutableCallout).s3l = function (_set____db54di) {
    return this.l3j_1.m3a(this, warning$factory(), _set____db54di);
  };
  protoOf(MutableCallout).l3c = function () {
    return this.l3j_1.k2t(this, warning$factory_0());
  };
  protoOf(MutableCallout).m3j = function (caution, important, note, question, quote, tip, warning) {
    this.m3l(caution);
    this.n3l(important);
    this.o3l(note);
    this.p3l(question);
    this.q3l(quote);
    this.r3l(tip);
    this.s3l(warning);
  };
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.p3j_1 = this.p3a();
    this.q3j_1 = this.p3a();
    this.r3j_1 = this.p3a();
  }
  protoOf(MutableCheckbox).t3l = function (_set____db54di) {
    return this.p3j_1.m3a(this, background$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).y3k = function () {
    return this.p3j_1.k2t(this, background$factory_0());
  };
  protoOf(MutableCheckbox).i3l = function (_set____db54di) {
    return this.q3j_1.m3a(this, hover$factory_1(), _set____db54di);
  };
  protoOf(MutableCheckbox).d2l = function () {
    return this.q3j_1.k2t(this, hover$factory_2());
  };
  protoOf(MutableCheckbox).u3l = function (_set____db54di) {
    return this.r3j_1.m3a(this, color$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).z3k = function () {
    return this.r3j_1.k2t(this, color$factory_0());
  };
  protoOf(MutableCheckbox).s3j = function (background, hover, color) {
    this.t3l(background);
    this.i3l(hover);
    this.u3l(color);
  };
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.v3j_1 = this.p3a();
    this.w3j_1 = this.p3a();
    this.x3j_1 = this.p3a();
    this.y3j_1 = this.p3a();
    this.z3j_1 = this.p3a();
  }
  protoOf(MutableInput).v3l = function (_set____db54di) {
    return this.v3j_1.m3a(this, hoveredBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).a3l = function () {
    return this.v3j_1.k2t(this, hoveredBorder$factory_0());
  };
  protoOf(MutableInput).w3l = function (_set____db54di) {
    return this.w3j_1.m3a(this, invalidBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).b3l = function () {
    return this.w3j_1.k2t(this, invalidBorder$factory_0());
  };
  protoOf(MutableInput).x3l = function (_set____db54di) {
    return this.x3j_1.m3a(this, filled$factory(), _set____db54di);
  };
  protoOf(MutableInput).c3l = function () {
    return this.x3j_1.k2t(this, filled$factory_0());
  };
  protoOf(MutableInput).y3l = function (_set____db54di) {
    return this.y3j_1.m3a(this, filledHover$factory(), _set____db54di);
  };
  protoOf(MutableInput).d3l = function () {
    return this.y3j_1.k2t(this, filledHover$factory_0());
  };
  protoOf(MutableInput).z3l = function (_set____db54di) {
    return this.z3j_1.m3a(this, filledFocus$factory(), _set____db54di);
  };
  protoOf(MutableInput).e3l = function () {
    return this.z3j_1.k2t(this, filledFocus$factory_0());
  };
  protoOf(MutableInput).a3k = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.v3l(hoveredBorder);
    this.w3l(invalidBorder);
    this.x3l(filled);
    this.y3l(filledHover);
    this.z3l(filledFocus);
  };
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.d3k_1 = this.p3a();
    this.e3k_1 = this.p3a();
    this.f3k_1 = this.p3a();
  }
  protoOf(MutableSwitch).a3m = function (_set____db54di) {
    return this.d3k_1.m3a(this, backgroundOn$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).b3m = function () {
    return this.d3k_1.k2t(this, backgroundOn$factory_0());
  };
  protoOf(MutableSwitch).c3m = function (_set____db54di) {
    return this.e3k_1.m3a(this, backgroundOff$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).d3m = function () {
    return this.e3k_1.k2t(this, backgroundOff$factory_0());
  };
  protoOf(MutableSwitch).e3m = function (_set____db54di) {
    return this.f3k_1.m3a(this, thumb$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).f3l = function () {
    return this.f3k_1.k2t(this, thumb$factory_0());
  };
  protoOf(MutableSwitch).s3j = function (backgroundOn, backgroundOff, thumb) {
    this.a3m(backgroundOn);
    this.c3m(backgroundOff);
    this.e3m(thumb);
  };
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.i3k_1 = this.p3a();
    this.j3k_1 = this.p3a();
    this.k3k_1 = this.p3a();
    this.l3k_1 = this.p3a();
    this.m3k_1 = this.p3a();
    this.n3k_1 = this.p3a();
    this.o3k_1 = this.p3a();
    this.p3k_1 = this.p3a();
  }
  protoOf(MutableTab).u3l = function (_set____db54di) {
    return this.i3k_1.m3a(this, color$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).z3k = function () {
    return this.i3k_1.k2t(this, color$factory_2());
  };
  protoOf(MutableTab).t3l = function (_set____db54di) {
    return this.j3k_1.m3a(this, background$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).y3k = function () {
    return this.j3k_1.k2t(this, background$factory_2());
  };
  protoOf(MutableTab).f3m = function (_set____db54di) {
    return this.k3k_1.m3a(this, selectedColor$factory(), _set____db54di);
  };
  protoOf(MutableTab).g3m = function () {
    return this.k3k_1.k2t(this, selectedColor$factory_0());
  };
  protoOf(MutableTab).h3m = function (_set____db54di) {
    return this.l3k_1.m3a(this, selectedBackground$factory(), _set____db54di);
  };
  protoOf(MutableTab).i3m = function () {
    return this.l3k_1.k2t(this, selectedBackground$factory_0());
  };
  protoOf(MutableTab).j3m = function (_set____db54di) {
    return this.m3k_1.m3a(this, selectedBorder$factory(), _set____db54di);
  };
  protoOf(MutableTab).k3m = function () {
    return this.m3k_1.k2t(this, selectedBorder$factory_0());
  };
  protoOf(MutableTab).i3l = function (_set____db54di) {
    return this.n3k_1.m3a(this, hover$factory_3(), _set____db54di);
  };
  protoOf(MutableTab).d2l = function () {
    return this.n3k_1.k2t(this, hover$factory_4());
  };
  protoOf(MutableTab).l3l = function (_set____db54di) {
    return this.o3k_1.m3a(this, pressed$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).x3k = function () {
    return this.o3k_1.k2t(this, pressed$factory_2());
  };
  protoOf(MutableTab).l3m = function (_set____db54di) {
    return this.p3k_1.m3a(this, disabled$factory(), _set____db54di);
  };
  protoOf(MutableTab).g3l = function () {
    return this.p3k_1.k2t(this, disabled$factory_0());
  };
  protoOf(MutableTab).m3m = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.u3l(color);
    this.t3l(background);
    this.f3m(selectedColor);
    this.h3m(selectedBackground);
    this.j3m(selectedBorder);
    this.i3l(hover);
    this.l3l(pressed);
    this.l3m(disabled);
  };
  protoOf(MutableTab).q3k = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.m3m(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_instance;
    } else {
      tmp = $super.m3m.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.t3k_1 = this.p3a();
    this.u3k_1 = this.p3a();
  }
  protoOf(MutableTooltip).t3l = function (_set____db54di) {
    return this.t3k_1.m3a(this, background$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).y3k = function () {
    return this.t3k_1.k2t(this, background$factory_4());
  };
  protoOf(MutableTooltip).u3l = function (_set____db54di) {
    return this.u3k_1.m3a(this, color$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).z3k = function () {
    return this.u3k_1.k2t(this, color$factory_4());
  };
  protoOf(MutableTooltip).v3k = function (background, color) {
    this.t3l(background);
    this.u3l(color);
  };
  function get_tooltip(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tooltip_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tab(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tab_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_switch(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_switch_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_overlay(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.i3a('overlay');
  }
  function get_input(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_input_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_checkbox(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_checkbox_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_button(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_button_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_placeholder_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.i3a('placeholder');
  }
  function get_focusOutline(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.i3a('focusOutline');
  }
  function get_border(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.i3a('border');
  }
  function get_color(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.i3a('color');
  }
  function get_background(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.i3a('background');
  }
  function get_tooltip_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTooltip(_this__u8e3s4);
  }
  function get_tab_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTab(_this__u8e3s4);
  }
  function get_switch_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableSwitch(_this__u8e3s4);
  }
  function get_input_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableInput(_this__u8e3s4);
  }
  function get_checkbox_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCheckbox(_this__u8e3s4);
  }
  function get_button_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableButton(_this__u8e3s4);
  }
  function set_background(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.q3a('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.i3a('background');
  }
  function set_color(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.q3a('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.i3a('color');
  }
  function set_border(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.q3a('border', value);
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.q3a('focusOutline', value);
  }
  function set_overlay(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.q3a('overlay', value);
  }
  function set_placeholder(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.q3a('placeholder', value);
  }
  function get_callout(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCallout(_this__u8e3s4);
  }
  function get_callout_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_callout(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.w3k();
    }, function (receiver, value) {
      return receiver.h3l(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.w3k();
    }, function (receiver, value) {
      return receiver.h3l(value);
    });
  }
  function hover$factory() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.d2l();
    }, function (receiver, value) {
      return receiver.i3l(value);
    });
  }
  function hover$factory_0() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.d2l();
    }, function (receiver, value) {
      return receiver.i3l(value);
    });
  }
  function focus$factory() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.k3l();
    }, function (receiver, value) {
      return receiver.j3l(value);
    });
  }
  function focus$factory_0() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.k3l();
    }, function (receiver, value) {
      return receiver.j3l(value);
    });
  }
  function pressed$factory() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.x3k();
    }, function (receiver, value) {
      return receiver.l3l(value);
    });
  }
  function pressed$factory_0() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.x3k();
    }, function (receiver, value) {
      return receiver.l3l(value);
    });
  }
  function caution$factory() {
    return getPropertyCallableRef('caution', 1, KMutableProperty1, function (receiver) {
      return receiver.f3c();
    }, function (receiver, value) {
      return receiver.m3l(value);
    });
  }
  function caution$factory_0() {
    return getPropertyCallableRef('caution', 1, KMutableProperty1, function (receiver) {
      return receiver.f3c();
    }, function (receiver, value) {
      return receiver.m3l(value);
    });
  }
  function important$factory() {
    return getPropertyCallableRef('important', 1, KMutableProperty1, function (receiver) {
      return receiver.g3c();
    }, function (receiver, value) {
      return receiver.n3l(value);
    });
  }
  function important$factory_0() {
    return getPropertyCallableRef('important', 1, KMutableProperty1, function (receiver) {
      return receiver.g3c();
    }, function (receiver, value) {
      return receiver.n3l(value);
    });
  }
  function note$factory() {
    return getPropertyCallableRef('note', 1, KMutableProperty1, function (receiver) {
      return receiver.h3c();
    }, function (receiver, value) {
      return receiver.o3l(value);
    });
  }
  function note$factory_0() {
    return getPropertyCallableRef('note', 1, KMutableProperty1, function (receiver) {
      return receiver.h3c();
    }, function (receiver, value) {
      return receiver.o3l(value);
    });
  }
  function question$factory() {
    return getPropertyCallableRef('question', 1, KMutableProperty1, function (receiver) {
      return receiver.i3c();
    }, function (receiver, value) {
      return receiver.p3l(value);
    });
  }
  function question$factory_0() {
    return getPropertyCallableRef('question', 1, KMutableProperty1, function (receiver) {
      return receiver.i3c();
    }, function (receiver, value) {
      return receiver.p3l(value);
    });
  }
  function quote$factory() {
    return getPropertyCallableRef('quote', 1, KMutableProperty1, function (receiver) {
      return receiver.j3c();
    }, function (receiver, value) {
      return receiver.q3l(value);
    });
  }
  function quote$factory_0() {
    return getPropertyCallableRef('quote', 1, KMutableProperty1, function (receiver) {
      return receiver.j3c();
    }, function (receiver, value) {
      return receiver.q3l(value);
    });
  }
  function tip$factory() {
    return getPropertyCallableRef('tip', 1, KMutableProperty1, function (receiver) {
      return receiver.k3c();
    }, function (receiver, value) {
      return receiver.r3l(value);
    });
  }
  function tip$factory_0() {
    return getPropertyCallableRef('tip', 1, KMutableProperty1, function (receiver) {
      return receiver.k3c();
    }, function (receiver, value) {
      return receiver.r3l(value);
    });
  }
  function warning$factory() {
    return getPropertyCallableRef('warning', 1, KMutableProperty1, function (receiver) {
      return receiver.l3c();
    }, function (receiver, value) {
      return receiver.s3l(value);
    });
  }
  function warning$factory_0() {
    return getPropertyCallableRef('warning', 1, KMutableProperty1, function (receiver) {
      return receiver.l3c();
    }, function (receiver, value) {
      return receiver.s3l(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.y3k();
    }, function (receiver, value) {
      return receiver.t3l(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.y3k();
    }, function (receiver, value) {
      return receiver.t3l(value);
    });
  }
  function hover$factory_1() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.d2l();
    }, function (receiver, value) {
      return receiver.i3l(value);
    });
  }
  function hover$factory_2() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.d2l();
    }, function (receiver, value) {
      return receiver.i3l(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.z3k();
    }, function (receiver, value) {
      return receiver.u3l(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.z3k();
    }, function (receiver, value) {
      return receiver.u3l(value);
    });
  }
  function hoveredBorder$factory() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.a3l();
    }, function (receiver, value) {
      return receiver.v3l(value);
    });
  }
  function hoveredBorder$factory_0() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.a3l();
    }, function (receiver, value) {
      return receiver.v3l(value);
    });
  }
  function invalidBorder$factory() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.b3l();
    }, function (receiver, value) {
      return receiver.w3l(value);
    });
  }
  function invalidBorder$factory_0() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.b3l();
    }, function (receiver, value) {
      return receiver.w3l(value);
    });
  }
  function filled$factory() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.c3l();
    }, function (receiver, value) {
      return receiver.x3l(value);
    });
  }
  function filled$factory_0() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.c3l();
    }, function (receiver, value) {
      return receiver.x3l(value);
    });
  }
  function filledHover$factory() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.d3l();
    }, function (receiver, value) {
      return receiver.y3l(value);
    });
  }
  function filledHover$factory_0() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.d3l();
    }, function (receiver, value) {
      return receiver.y3l(value);
    });
  }
  function filledFocus$factory() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.e3l();
    }, function (receiver, value) {
      return receiver.z3l(value);
    });
  }
  function filledFocus$factory_0() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.e3l();
    }, function (receiver, value) {
      return receiver.z3l(value);
    });
  }
  function backgroundOn$factory() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.b3m();
    }, function (receiver, value) {
      return receiver.a3m(value);
    });
  }
  function backgroundOn$factory_0() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.b3m();
    }, function (receiver, value) {
      return receiver.a3m(value);
    });
  }
  function backgroundOff$factory() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.d3m();
    }, function (receiver, value) {
      return receiver.c3m(value);
    });
  }
  function backgroundOff$factory_0() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.d3m();
    }, function (receiver, value) {
      return receiver.c3m(value);
    });
  }
  function thumb$factory() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.f3l();
    }, function (receiver, value) {
      return receiver.e3m(value);
    });
  }
  function thumb$factory_0() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.f3l();
    }, function (receiver, value) {
      return receiver.e3m(value);
    });
  }
  function color$factory_1() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.z3k();
    }, function (receiver, value) {
      return receiver.u3l(value);
    });
  }
  function color$factory_2() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.z3k();
    }, function (receiver, value) {
      return receiver.u3l(value);
    });
  }
  function background$factory_1() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.y3k();
    }, function (receiver, value) {
      return receiver.t3l(value);
    });
  }
  function background$factory_2() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.y3k();
    }, function (receiver, value) {
      return receiver.t3l(value);
    });
  }
  function selectedColor$factory() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.g3m();
    }, function (receiver, value) {
      return receiver.f3m(value);
    });
  }
  function selectedColor$factory_0() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.g3m();
    }, function (receiver, value) {
      return receiver.f3m(value);
    });
  }
  function selectedBackground$factory() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.i3m();
    }, function (receiver, value) {
      return receiver.h3m(value);
    });
  }
  function selectedBackground$factory_0() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.i3m();
    }, function (receiver, value) {
      return receiver.h3m(value);
    });
  }
  function selectedBorder$factory() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.k3m();
    }, function (receiver, value) {
      return receiver.j3m(value);
    });
  }
  function selectedBorder$factory_0() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.k3m();
    }, function (receiver, value) {
      return receiver.j3m(value);
    });
  }
  function hover$factory_3() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.d2l();
    }, function (receiver, value) {
      return receiver.i3l(value);
    });
  }
  function hover$factory_4() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.d2l();
    }, function (receiver, value) {
      return receiver.i3l(value);
    });
  }
  function pressed$factory_1() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.x3k();
    }, function (receiver, value) {
      return receiver.l3l(value);
    });
  }
  function pressed$factory_2() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.x3k();
    }, function (receiver, value) {
      return receiver.l3l(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.g3l();
    }, function (receiver, value) {
      return receiver.l3m(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.g3l();
    }, function (receiver, value) {
      return receiver.l3m(value);
    });
  }
  function background$factory_3() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.y3k();
    }, function (receiver, value) {
      return receiver.t3l(value);
    });
  }
  function background$factory_4() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.y3k();
    }, function (receiver, value) {
      return receiver.t3l(value);
    });
  }
  function color$factory_3() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.z3k();
    }, function (receiver, value) {
      return receiver.u3l(value);
    });
  }
  function color$factory_4() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.z3k();
    }, function (receiver, value) {
      return receiver.u3l(value);
    });
  }
  var properties_initialized_SilkWidgetColorGroups_kt_1mdo2;
  function _init_properties_SilkWidgetColorGroups_kt__mh2tbg() {
    if (!properties_initialized_SilkWidgetColorGroups_kt_1mdo2) {
      properties_initialized_SilkWidgetColorGroups_kt_1mdo2 = true;
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCallout$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable = 0;
    }
  }
  //region block: init
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable = 0;
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable = 8;
  com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable = 8;
  com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Input_0;
  _.$_$.b = SimpleGrid;
  _.$_$.c = Surface;
  _.$_$.d = numColumns;
  _.$_$.e = get_SilkColorsStyle;
  _.$_$.f = SilkWidgetVariables;
  _.$_$.g = initSilkWidgets;
  _.$_$.h = get_SmoothColorStyle;
  _.$_$.i = get_BorderColorVar;
  _.$_$.j = get_ColorVar;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
