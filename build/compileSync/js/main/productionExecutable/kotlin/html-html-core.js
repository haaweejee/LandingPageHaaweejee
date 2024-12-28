(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-html-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    globalThis['html-html-core'] = factory(typeof globalThis['html-html-core'] === 'undefined' ? {} : globalThis['html-html-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-internal-html-core-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var protoOf = kotlin_kotlin.$_$.x6;
  var asList = kotlin_kotlin.$_$.u2;
  var initMetadataForInterface = kotlin_kotlin.$_$.j6;
  var VOID = kotlin_kotlin.$_$.e;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var addAll = kotlin_kotlin.$_$.r2;
  var to = kotlin_kotlin.$_$.w9;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var Pair = kotlin_kotlin.$_$.d9;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  var initMetadataForObject = kotlin_kotlin.$_$.l6;
  var toString = kotlin_kotlin.$_$.z6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.h6;
  var equals = kotlin_kotlin.$_$.z5;
  var charSequenceLength = kotlin_kotlin.$_$.w5;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var ensureNotNull = kotlin_kotlin.$_$.n9;
  var toString_0 = kotlin_kotlin.$_$.v9;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var toBoolean = kotlin_kotlin.$_$.o8;
  var hashCode = kotlin_kotlin.$_$.f6;
  var getStringHashCode = kotlin_kotlin.$_$.e6;
  var numberToDouble = kotlin_kotlin.$_$.u6;
  var getNumberHashCode = kotlin_kotlin.$_$.c6;
  var defineProp = kotlin_kotlin.$_$.y5;
  var isInterface = kotlin_kotlin.$_$.p6;
  var Collection = kotlin_kotlin.$_$.j2;
  var objectCreate = kotlin_kotlin.$_$.w6;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var listOfNotNull = kotlin_kotlin.$_$.t3;
  var joinToString = kotlin_kotlin.$_$.n3;
  var FunctionAdapter = kotlin_kotlin.$_$.q5;
  var joinToString_0 = kotlin_kotlin.$_$.o3;
  var contains = kotlin_kotlin.$_$.s7;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var emptyList = kotlin_kotlin.$_$.d3;
  var copyToArray = kotlin_kotlin.$_$.b3;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.u9;
  var lazy = kotlin_kotlin.$_$.o9;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var DisposableEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var KProperty1 = kotlin_kotlin.$_$.j7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d6;
  //endregion
  //region block: pre-declaration
  function onClick(listener) {
    this.z2c(new MouseEventListener('click', listener));
  }
  function onKeyUp(listener) {
    this.z2c(new KeyboardEventListener('keyup', listener));
  }
  initMetadataForInterface(EventsListenerScope, 'EventsListenerScope');
  function classes(classes) {
    return this.t2c(asList(classes));
  }
  function id(value) {
    return this.p2c('id', value);
  }
  function tabIndex(value) {
    return this.p2c('tabindex', value.toString());
  }
  function spellCheck(value) {
    return this.p2c('spellcheck', value.toString());
  }
  initMetadataForInterface(AttrsScope, 'AttrsScope', VOID, VOID, [EventsListenerScope]);
  initMetadataForClass(AttrsScopeBuilder, 'AttrsScopeBuilder', AttrsScopeBuilder, VOID, [AttrsScope, EventsListenerScope]);
  initMetadataForClass(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', EventsListenerScopeBuilder, VOID, [EventsListenerScope]);
  initMetadataForClass(InputType, 'InputType');
  initMetadataForClass(InputTypeWithUnitValue, 'InputTypeWithUnitValue', VOID, InputType);
  initMetadataForObject(Button, 'Button', VOID, InputTypeWithUnitValue);
  initMetadataForClass(InputTypeCheckedValue, 'InputTypeCheckedValue', VOID, InputType);
  initMetadataForObject(Checkbox, 'Checkbox', VOID, InputTypeCheckedValue);
  initMetadataForClass(InputTypeWithStringValue, 'InputTypeWithStringValue', VOID, InputType);
  initMetadataForObject(Color, 'Color', VOID, InputTypeWithStringValue);
  initMetadataForObject(Date_0, 'Date', VOID, InputTypeWithStringValue);
  initMetadataForObject(DateTimeLocal, 'DateTimeLocal', VOID, InputTypeWithStringValue);
  initMetadataForObject(Email, 'Email', VOID, InputTypeWithStringValue);
  initMetadataForObject(File, 'File', VOID, InputTypeWithStringValue);
  initMetadataForObject(Hidden, 'Hidden', VOID, InputTypeWithStringValue);
  initMetadataForObject(Month, 'Month', VOID, InputTypeWithStringValue);
  initMetadataForClass(InputTypeNumberValue, 'InputTypeNumberValue', VOID, InputType);
  initMetadataForObject(Number_0, 'Number', VOID, InputTypeNumberValue);
  initMetadataForObject(Password, 'Password', VOID, InputTypeWithStringValue);
  initMetadataForObject(Radio, 'Radio', VOID, InputTypeCheckedValue);
  initMetadataForObject(Range, 'Range', VOID, InputTypeNumberValue);
  initMetadataForObject(Search, 'Search', VOID, InputTypeWithStringValue);
  initMetadataForObject(Submit, 'Submit', VOID, InputTypeWithUnitValue);
  initMetadataForObject(Tel, 'Tel', VOID, InputTypeWithStringValue);
  initMetadataForObject(Text_0, 'Text', VOID, InputTypeWithStringValue);
  initMetadataForObject(Time, 'Time', VOID, InputTypeWithStringValue);
  initMetadataForObject(Url, 'Url', VOID, InputTypeWithStringValue);
  initMetadataForObject(Week, 'Week', VOID, InputTypeWithStringValue);
  initMetadataForCompanion(Companion);
  initMetadataForClass(SyntheticEventListener, 'SyntheticEventListener');
  initMetadataForClass(InputEventListener, 'InputEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(MouseEventListener, 'MouseEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(KeyboardEventListener, 'KeyboardEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(InputAttrsScope, 'InputAttrsScope', VOID, VOID, [AttrsScope]);
  initMetadataForClass(DisposeRadioGroupEffect$1$$inlined$onDispose$1);
  initMetadataForClass(TextAreaAttrsScope, 'TextAreaAttrsScope', VOID, VOID, [AttrsScope]);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForCompanion(Companion_5);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(CSSKeyframe, 'CSSKeyframe');
  initMetadataForObject(From, 'From', VOID, CSSKeyframe);
  initMetadataForObject(To, 'To', VOID, CSSKeyframe);
  initMetadataForInterface(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration');
  initMetadataForClass(CSSKeyframeRuleDeclaration, 'CSSKeyframeRuleDeclaration', VOID, VOID, [CSSStyledRuleDeclaration]);
  initMetadataForClass(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration');
  initMetadataForClass(Raw, 'Raw');
  initMetadataForClass(MediaFeature, 'MediaFeature');
  initMetadataForInterface(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration');
  initMetadataForClass(CSSMediaRuleDeclaration, 'CSSMediaRuleDeclaration', VOID, VOID, [CSSGroupingRuleDeclaration]);
  initMetadataForClass(CSSStyleRuleDeclaration, 'CSSStyleRuleDeclaration', VOID, VOID, [CSSStyledRuleDeclaration]);
  function property(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.x2j(propertyName, value);
  }
  function property_0(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.x2j(propertyName, value);
  }
  function variable(variableName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.z2j(variableName, value);
  }
  initMetadataForInterface(StyleScope, 'StyleScope');
  initMetadataForInterface(StyleHolder, 'StyleHolder');
  initMetadataForClass(StyleScopeBuilder, 'StyleScopeBuilder', StyleScopeBuilder, VOID, [StyleScope, StyleHolder]);
  initMetadataForClass(CSSRuleBuilderImpl, 'CSSRuleBuilderImpl', CSSRuleBuilderImpl, StyleScopeBuilder, [StyleScope, StyleScopeBuilder]);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(CSSUnitValueTyped, 'CSSUnitValueTyped');
  initMetadataForClass(RGB, 'RGB');
  initMetadataForClass(RGBA, 'RGBA');
  initMetadataForClass(StylePropertyDeclaration, 'StylePropertyDeclaration');
  initMetadataForCompanion(Companion_8);
  function add(selector, style) {
    this.e2j(new CSSStyleRuleDeclaration(selector, style));
  }
  initMetadataForInterface(CSSRulesHolder, 'CSSRulesHolder');
  function returnUniversalSelector() {
    return get_Universal();
  }
  function returnHoverSelector() {
    return this.d2l();
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  initMetadataForInterface(SelectorsScope, 'SelectorsScope');
  function invoke(_this__u8e3s4, cssRule) {
    this.a2l(new RawSelector(_this__u8e3s4), cssRule);
  }
  function style(_this__u8e3s4, cssRule) {
    this.a2l(new RawSelector(_this__u8e3s4), cssRule);
  }
  initMetadataForInterface(GenericStyleSheetBuilder, 'GenericStyleSheetBuilder', VOID, VOID, [CSSRulesHolder, SelectorsScope]);
  function style_0(selector, cssRule) {
    this.x2k(selector, buildCSSStyleRule(cssRule));
  }
  initMetadataForInterface(StyleSheetBuilder, 'StyleSheetBuilder', VOID, VOID, [CSSRulesHolder, GenericStyleSheetBuilder]);
  initMetadataForClass(StyleSheet, 'StyleSheet', StyleSheet_init_$Create$, VOID, [StyleSheetBuilder, CSSRulesHolder]);
  initMetadataForClass(CSSRulesHolderState, 'CSSRulesHolderState', CSSRulesHolderState, VOID, [CSSRulesHolder]);
  initMetadataForClass(CSSSelector, 'CSSSelector');
  initMetadataForClass(RawSelector, 'RawSelector', VOID, CSSSelector);
  initMetadataForClass(PseudoClassInternal, 'PseudoClassInternal', VOID, CSSSelector);
  initMetadataForClass(CSSBorder, 'CSSBorder', CSSBorder);
  initMetadataForInterface(FilterFunction, 'FilterFunction');
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(FilterBuilderImplementation, 'FilterBuilderImplementation', FilterBuilderImplementation);
  initMetadataForInterface(TransformFunction, 'TransformFunction');
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(TransformBuilderImplementation, 'TransformBuilderImplementation', TransformBuilderImplementation);
  initMetadataForClass(DomElementWrapper, 'DomElementWrapper', VOID, DomNodeWrapper);
  initMetadataForClass(ElementScopeBase, 'ElementScopeBase');
  initMetadataForClass(ElementScopeImpl, 'ElementScopeImpl', ElementScopeImpl, ElementScopeBase);
  initMetadataForInterface(ElementBuilder, 'ElementBuilder');
  initMetadataForClass(ElementBuilderImplementation, 'ElementBuilderImplementation', VOID, VOID, [ElementBuilder]);
  initMetadataForClass(TextArea$$inlined$run$1$1$1);
  initMetadataForClass(Input$$inlined$run$1$1$1);
  initMetadataForClass(Style$$inlined$run$1$1$1);
  initMetadataForClass(SyntheticEvent, 'SyntheticEvent');
  initMetadataForClass(SyntheticInputEvent, 'SyntheticInputEvent', VOID, SyntheticEvent);
  initMetadataForClass(SyntheticKeyboardEvent, 'SyntheticKeyboardEvent', VOID, SyntheticEvent);
  initMetadataForClass(SyntheticMouseEvent, 'SyntheticMouseEvent', VOID, SyntheticEvent);
  //endregion
  function get_setInputValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setInputValue;
  }
  var setInputValue;
  var setTextAreaDefaultValue;
  function get_setCheckedValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setCheckedValue;
  }
  var setCheckedValue;
  function forId(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.p2c('for', value);
  }
  function placeholder(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.p2c('placeholder', value);
  }
  function readOnly(_this__u8e3s4) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.p2c('readonly', '');
  }
  function required(_this__u8e3s4) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.p2c('required', '');
  }
  function autoComplete(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.p2c('autocomplete', value);
  }
  function type(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.p2c('type', value.q2c_1);
  }
  function alt(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.p2c('alt', value);
  }
  function src(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.p2c('src', value);
  }
  function href(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.p2c('href', value);
  }
  function setInputValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.innerText = v;
    return Unit_instance;
  }
  function setCheckedValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  var properties_initialized_Attrs_kt_uypsku;
  function _init_properties_Attrs_kt__w5qjhs() {
    if (!properties_initialized_Attrs_kt_uypsku) {
      properties_initialized_Attrs_kt_uypsku = true;
      setInputValue = setInputValue$lambda;
      setTextAreaDefaultValue = setTextAreaDefaultValue$lambda;
      setCheckedValue = setCheckedValue$lambda;
    }
  }
  function AttrsScope() {
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.c2d_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.d2d_1 = LinkedHashMap_init_$Create$();
    this.e2d_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.f2d_1 = ArrayList_init_$Create$();
    this.g2d_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.h2d_1 = ArrayList_init_$Create$();
    this.i2d_1 = 8;
  }
  protoOf(AttrsScopeBuilder).a2d = function (listener) {
    this.c2d_1.a2d(listener);
  };
  protoOf(AttrsScopeBuilder).b2d = function (listener) {
    this.c2d_1.b2d(listener);
  };
  protoOf(AttrsScopeBuilder).z2c = function (listener) {
    this.c2d_1.z2c(listener);
  };
  protoOf(AttrsScopeBuilder).t2c = function (classes) {
    this.h2d_1.n(classes);
  };
  protoOf(AttrsScopeBuilder).u2c = function (classes) {
    addAll(this.h2d_1, classes);
  };
  protoOf(AttrsScopeBuilder).s2c = function (builder) {
    // Inline function 'kotlin.apply' call
    builder(this.e2d_1);
  };
  protoOf(AttrsScopeBuilder).p2c = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.d2d_1.y4(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).y2c = function (update, value) {
    var tmp = to(update, value);
    this.f2d_1.h(tmp instanceof Pair ? tmp : THROW_CCE());
  };
  protoOf(AttrsScopeBuilder).l2d = function () {
    return this.d2d_1;
  };
  function EventsListenerScope() {
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.j2d_1 = ArrayList_init_$Create$();
    this.k2d_1 = 8;
  }
  protoOf(EventsListenerScopeBuilder).z2c = function (listener) {
    this.j2d_1.h(listener);
  };
  protoOf(EventsListenerScopeBuilder).m2d = function () {
    return this.j2d_1;
  };
  function Button() {
    Button_instance = this;
    InputTypeWithUnitValue.call(this, 'button');
    this.q2d_1 = 0;
  }
  var Button_instance;
  function Button_getInstance() {
    if (Button_instance == null)
      new Button();
    return Button_instance;
  }
  function Checkbox() {
    Checkbox_instance = this;
    InputTypeCheckedValue.call(this, 'checkbox');
    this.y2d_1 = 0;
  }
  var Checkbox_instance;
  function Checkbox_getInstance() {
    if (Checkbox_instance == null)
      new Checkbox();
    return Checkbox_instance;
  }
  function Color() {
    Color_instance = this;
    InputTypeWithStringValue.call(this, 'color');
    this.g2e_1 = 0;
  }
  var Color_instance;
  function Color_getInstance() {
    if (Color_instance == null)
      new Color();
    return Color_instance;
  }
  function Date_0() {
    Date_instance = this;
    InputTypeWithStringValue.call(this, 'date');
    this.n2e_1 = 0;
  }
  var Date_instance;
  function Date_getInstance() {
    if (Date_instance == null)
      new Date_0();
    return Date_instance;
  }
  function DateTimeLocal() {
    DateTimeLocal_instance = this;
    InputTypeWithStringValue.call(this, 'datetime-local');
    this.r2e_1 = 0;
  }
  var DateTimeLocal_instance;
  function DateTimeLocal_getInstance() {
    if (DateTimeLocal_instance == null)
      new DateTimeLocal();
    return DateTimeLocal_instance;
  }
  function Email() {
    Email_instance = this;
    InputTypeWithStringValue.call(this, 'email');
    this.v2e_1 = 0;
  }
  var Email_instance;
  function Email_getInstance() {
    if (Email_instance == null)
      new Email();
    return Email_instance;
  }
  function File() {
    File_instance = this;
    InputTypeWithStringValue.call(this, 'file');
    this.z2e_1 = 0;
  }
  var File_instance;
  function File_getInstance() {
    if (File_instance == null)
      new File();
    return File_instance;
  }
  function Hidden() {
    Hidden_instance = this;
    InputTypeWithStringValue.call(this, 'hidden');
    this.d2f_1 = 0;
  }
  var Hidden_instance;
  function Hidden_getInstance() {
    if (Hidden_instance == null)
      new Hidden();
    return Hidden_instance;
  }
  function Month() {
    Month_instance = this;
    InputTypeWithStringValue.call(this, 'month');
    this.h2f_1 = 0;
  }
  var Month_instance;
  function Month_getInstance() {
    if (Month_instance == null)
      new Month();
    return Month_instance;
  }
  function Number_0() {
    Number_instance = this;
    InputTypeNumberValue.call(this, 'number');
    this.l2f_1 = 0;
  }
  var Number_instance;
  function Number_getInstance() {
    if (Number_instance == null)
      new Number_0();
    return Number_instance;
  }
  function Password() {
    Password_instance = this;
    InputTypeWithStringValue.call(this, 'password');
    this.s2f_1 = 0;
  }
  var Password_instance;
  function Password_getInstance() {
    if (Password_instance == null)
      new Password();
    return Password_instance;
  }
  function Radio() {
    Radio_instance = this;
    InputTypeCheckedValue.call(this, 'radio');
    this.w2f_1 = 0;
  }
  var Radio_instance;
  function Radio_getInstance() {
    if (Radio_instance == null)
      new Radio();
    return Radio_instance;
  }
  function Range() {
    Range_instance = this;
    InputTypeNumberValue.call(this, 'range');
    this.a2g_1 = 0;
  }
  var Range_instance;
  function Range_getInstance() {
    if (Range_instance == null)
      new Range();
    return Range_instance;
  }
  function Search() {
    Search_instance = this;
    InputTypeWithStringValue.call(this, 'search');
    this.e2g_1 = 0;
  }
  var Search_instance;
  function Search_getInstance() {
    if (Search_instance == null)
      new Search();
    return Search_instance;
  }
  function Submit() {
    Submit_instance = this;
    InputTypeWithUnitValue.call(this, 'submit');
    this.i2g_1 = 0;
  }
  var Submit_instance;
  function Submit_getInstance() {
    if (Submit_instance == null)
      new Submit();
    return Submit_instance;
  }
  function Tel() {
    Tel_instance = this;
    InputTypeWithStringValue.call(this, 'tel');
    this.m2g_1 = 0;
  }
  var Tel_instance;
  function Tel_getInstance() {
    if (Tel_instance == null)
      new Tel();
    return Tel_instance;
  }
  function Text_0() {
    Text_instance = this;
    InputTypeWithStringValue.call(this, 'text');
    this.q2g_1 = 0;
  }
  var Text_instance;
  function Text_getInstance() {
    if (Text_instance == null)
      new Text_0();
    return Text_instance;
  }
  function Time() {
    Time_instance = this;
    InputTypeWithStringValue.call(this, 'time');
    this.u2g_1 = 0;
  }
  var Time_instance;
  function Time_getInstance() {
    if (Time_instance == null)
      new Time();
    return Time_instance;
  }
  function Url() {
    Url_instance = this;
    InputTypeWithStringValue.call(this, 'url');
    this.y2g_1 = 0;
  }
  var Url_instance;
  function Url_getInstance() {
    if (Url_instance == null)
      new Url();
    return Url_instance;
  }
  function Week() {
    Week_instance = this;
    InputTypeWithStringValue.call(this, 'week');
    this.c2h_1 = 0;
  }
  var Week_instance;
  function Week_getInstance() {
    if (Week_instance == null)
      new Week();
    return Week_instance;
  }
  function InputTypeWithStringValue(name) {
    InputType.call(this, name);
    this.j2e_1 = 0;
  }
  protoOf(InputTypeWithStringValue).c2e = function (event) {
    return Week_getInstance().d2h(event);
  };
  function InputTypeWithUnitValue(name) {
    InputType.call(this, name);
    this.t2d_1 = 0;
  }
  protoOf(InputTypeWithUnitValue).u2d = function (event) {
    return Unit_instance;
  };
  protoOf(InputTypeWithUnitValue).c2e = function (event) {
    this.u2d(event);
    return Unit_instance;
  };
  function InputTypeCheckedValue(name) {
    InputType.call(this, name);
    this.b2e_1 = 0;
  }
  protoOf(InputTypeCheckedValue).c2e = function (event) {
    var tmp0_safe_receiver = event.target;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.checked;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? false : tmp3_elvis_lhs;
  };
  function InputTypeNumberValue(name) {
    InputType.call(this, name);
    this.o2f_1 = 0;
  }
  protoOf(InputTypeNumberValue).c2e = function (event) {
    var tmp0_safe_receiver = event.target;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.valueAsNumber;
    return tmp2_elvis_lhs == null ? null : tmp2_elvis_lhs;
  };
  function Companion() {
  }
  protoOf(Companion).e2h = function (type) {
    var tmp;
    switch (type) {
      case 'button':
        tmp = Button_getInstance();
        break;
      case 'checkbox':
        tmp = Checkbox_getInstance();
        break;
      case 'color':
        tmp = Color_getInstance();
        break;
      case 'date':
        tmp = Date_getInstance();
        break;
      case 'datetime-local':
        tmp = DateTimeLocal_getInstance();
        break;
      case 'email':
        tmp = Email_getInstance();
        break;
      case 'file':
        tmp = File_getInstance();
        break;
      case 'hidden':
        tmp = Hidden_getInstance();
        break;
      case 'month':
        tmp = Month_getInstance();
        break;
      case 'number':
        tmp = Number_getInstance();
        break;
      case 'password':
        tmp = Password_getInstance();
        break;
      case 'radio':
        tmp = Radio_getInstance();
        break;
      case 'range':
        tmp = Range_getInstance();
        break;
      case 'search':
        tmp = Search_getInstance();
        break;
      case 'submit':
        tmp = Submit_getInstance();
        break;
      case 'tel':
        tmp = Tel_getInstance();
        break;
      case 'text':
        tmp = Text_getInstance();
        break;
      case 'time':
        tmp = Time_getInstance();
        break;
      case 'url':
        tmp = Url_getInstance();
        break;
      case 'week':
        tmp = Week_getInstance();
        break;
      default:
        var message = 'fromString got unknown type - ' + type;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function InputType(typeStr) {
    this.q2c_1 = typeStr;
    this.r2c_1 = 0;
  }
  protoOf(InputType).d2h = function (event) {
    var tmp0_safe_receiver = event.target;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.value;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
  };
  function SyntheticEventListener(event, listener) {
    this.f2h_1 = event;
    this.g2h_1 = listener;
    this.h2h_1 = this.f2h_1;
    this.i2h_1 = 0;
  }
  protoOf(SyntheticEventListener).o1x = function () {
    return this.h2h_1;
  };
  protoOf(SyntheticEventListener).vh = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new SyntheticEvent(event);
    this.g2h_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.vh(event);
  };
  function InputEventListener(eventName, inputType, listener) {
    eventName = eventName === VOID ? 'input' : eventName;
    SyntheticEventListener.call(this, eventName, listener);
    this.n2h_1 = inputType;
    this.o2h_1 = 0;
  }
  protoOf(InputEventListener).vh = function (event) {
    var value = this.n2h_1.c2e(event);
    this.g2h_1(new SyntheticInputEvent(value, event));
  };
  protoOf(InputEventListener).handleEvent = function (event) {
    return this.vh(event);
  };
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
    this.t2h_1 = 0;
  }
  protoOf(MouseEventListener).vh = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.g2h_1(new SyntheticMouseEvent(event));
  };
  protoOf(MouseEventListener).handleEvent = function (event) {
    return this.vh(event);
  };
  function KeyboardEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
    this.y2h_1 = 0;
  }
  protoOf(KeyboardEventListener).vh = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.g2h_1(new SyntheticKeyboardEvent(event));
  };
  protoOf(KeyboardEventListener).handleEvent = function (event) {
    return this.vh(event);
  };
  function InputAttrsScope(inputType, attrsScope) {
    this.z2h_1 = inputType;
    this.a2i_1 = attrsScope;
    this.b2i_1 = 8;
  }
  protoOf(InputAttrsScope).p2c = function (attr, value) {
    return this.a2i_1.p2c(attr, value);
  };
  protoOf(InputAttrsScope).u2c = function (classes) {
    this.a2i_1.u2c(classes);
  };
  protoOf(InputAttrsScope).t2c = function (classes) {
    this.a2i_1.t2c(classes);
  };
  protoOf(InputAttrsScope).v2c = function (value) {
    return this.a2i_1.v2c(value);
  };
  protoOf(InputAttrsScope).a2d = function (listener) {
    this.a2i_1.a2d(listener);
  };
  protoOf(InputAttrsScope).b2d = function (listener) {
    this.a2i_1.b2d(listener);
  };
  protoOf(InputAttrsScope).y2c = function (update, value) {
    this.a2i_1.y2c(update, value);
  };
  protoOf(InputAttrsScope).z2c = function (listener) {
    this.a2i_1.z2c(listener);
  };
  protoOf(InputAttrsScope).x2c = function (value) {
    return this.a2i_1.x2c(value);
  };
  protoOf(InputAttrsScope).s2c = function (builder) {
    this.a2i_1.s2c(builder);
  };
  protoOf(InputAttrsScope).w2c = function (value) {
    return this.a2i_1.w2c(value);
  };
  protoOf(InputAttrsScope).c2i = function (value) {
    var tmp0_subject = this.z2h_1;
    if (((equals(tmp0_subject, Checkbox_getInstance()) ? true : equals(tmp0_subject, Radio_getInstance())) ? true : equals(tmp0_subject, Hidden_getInstance())) ? true : equals(tmp0_subject, Submit_getInstance())) {
      this.p2c('value', value);
    } else {
      this.y2c(get_setInputValue(), value);
    }
    return this;
  };
  protoOf(InputAttrsScope).d2i = function (value) {
    this.c2i(toString(value));
    return this;
  };
  protoOf(InputAttrsScope).e2i = function (checked) {
    this.y2c(get_setCheckedValue(), checked);
    return this;
  };
  protoOf(InputAttrsScope).f2i = function (listener) {
    this.z2c(new InputEventListener('input', this.z2h_1, listener));
  };
  function get_controlledInputsValuesWeakMap() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledInputsValuesWeakMap;
  }
  var controlledInputsValuesWeakMap;
  function get_controlledRadioGroups() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledRadioGroups;
  }
  var controlledRadioGroups;
  function saveControlledInputState(element, value) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function updateRadioGroupIfNeeded(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var tmp;
    if (element.type === 'radio') {
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = element.name;
      tmp = charSequenceLength(this_0) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!get_controlledRadioGroups().f2(element.name)) {
        var tmp1 = get_controlledRadioGroups();
        var tmp2 = element.name;
        // Inline function 'kotlin.collections.mutableSetOf' call
        // Inline function 'kotlin.collections.set' call
        var value = LinkedHashSet_init_$Create$();
        tmp1.y4(tmp2, value);
      }
      ensureNotNull(get_controlledRadioGroups().h2(element.name)).h(element);
    }
  }
  function restoreControlledTextAreaState(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    if (get_controlledInputsValuesWeakMap().has(element)) {
      element.value = toString_0(get_controlledInputsValuesWeakMap().get(element));
    }
  }
  function DisposeRadioGroupEffect(_this__u8e3s4, $composer, $changed) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var $composer_0 = $composer;
    $composer_0.t1d(-1451478773);
    if (isTraceInProgress()) {
      traceEventStart(-1451478773, $changed, -1, 'org.jetbrains.compose.web.attributes.builders.DisposeRadioGroupEffect (InternalControlledInputUtils.kt:67)');
    }
    DisposableEffect(null, DisposeRadioGroupEffect$lambda(_this__u8e3s4), $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.u1d();
  }
  function restoreControlledInputState(inputElement) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var type = Companion_instance.e2h(inputElement.type);
    if (get_controlledInputsValuesWeakMap().has(inputElement)) {
      if (equals(type, Radio_getInstance())) {
        var tmp0_safe_receiver = get_controlledRadioGroups().h2(inputElement.name);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s = tmp0_safe_receiver.j();
          while (_iterator__ex2g4s.k()) {
            var element = _iterator__ex2g4s.l();
            // Inline function 'org.jetbrains.compose.web.attributes.builders.restoreControlledInputState.<anonymous>' call
            element.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(element)));
          }
        }
        inputElement.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(inputElement)));
        return Unit_instance;
      }
      if (equals(type, Checkbox_getInstance())) {
        inputElement.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(inputElement)));
      } else {
        inputElement.value = toString_0(get_controlledInputsValuesWeakMap().get(inputElement));
      }
    }
  }
  function DisposeRadioGroupEffect$1$$inlined$onDispose$1($ref) {
    this.g2i_1 = $ref;
  }
  protoOf(DisposeRadioGroupEffect$1$$inlined$onDispose$1).cm = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.builders.DisposeRadioGroupEffect.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = get_controlledRadioGroups().h2(this.g2i_1.name);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.v1(this.g2i_1);
    var tmp1_safe_receiver = get_controlledRadioGroups().h2(this.g2i_1.name);
    if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q()) === true) {
      get_controlledRadioGroups().z4(this.g2i_1.name);
    }
  };
  function DisposeRadioGroupEffect$lambda($this_DisposeRadioGroupEffect) {
    return function ($this$DisposableEffect) {
      var ref = $this_DisposeRadioGroupEffect.h2i($this$DisposableEffect);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new DisposeRadioGroupEffect$1$$inlined$onDispose$1(ref);
    };
  }
  var properties_initialized_InternalControlledInputUtils_kt_dwq2r0;
  function _init_properties_InternalControlledInputUtils_kt__h0qaxa() {
    if (!properties_initialized_InternalControlledInputUtils_kt_dwq2r0) {
      properties_initialized_InternalControlledInputUtils_kt_dwq2r0 = true;
      // Inline function 'kotlin.js.unsafeCast' call
      controlledInputsValuesWeakMap = new WeakMap();
      // Inline function 'kotlin.collections.mutableMapOf' call
      controlledRadioGroups = LinkedHashMap_init_$Create$();
    }
  }
  function TextAreaAttrsScope(attrsScope) {
    this.i2i_1 = attrsScope;
    this.j2i_1 = 8;
  }
  protoOf(TextAreaAttrsScope).p2c = function (attr, value) {
    return this.i2i_1.p2c(attr, value);
  };
  protoOf(TextAreaAttrsScope).u2c = function (classes) {
    this.i2i_1.u2c(classes);
  };
  protoOf(TextAreaAttrsScope).t2c = function (classes) {
    this.i2i_1.t2c(classes);
  };
  protoOf(TextAreaAttrsScope).v2c = function (value) {
    return this.i2i_1.v2c(value);
  };
  protoOf(TextAreaAttrsScope).a2d = function (listener) {
    this.i2i_1.a2d(listener);
  };
  protoOf(TextAreaAttrsScope).b2d = function (listener) {
    this.i2i_1.b2d(listener);
  };
  protoOf(TextAreaAttrsScope).y2c = function (update, value) {
    this.i2i_1.y2c(update, value);
  };
  protoOf(TextAreaAttrsScope).z2c = function (listener) {
    this.i2i_1.z2c(listener);
  };
  protoOf(TextAreaAttrsScope).x2c = function (value) {
    return this.i2i_1.x2c(value);
  };
  protoOf(TextAreaAttrsScope).s2c = function (builder) {
    this.i2i_1.s2c(builder);
  };
  protoOf(TextAreaAttrsScope).w2c = function (value) {
    return this.i2i_1.w2c(value);
  };
  protoOf(TextAreaAttrsScope).c2i = function (value) {
    this.y2c(get_setInputValue(), value);
    return this;
  };
  protoOf(TextAreaAttrsScope).k2i = function (listener) {
    this.z2c(new InputEventListener('input', Text_getInstance(), listener));
  };
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function Companion_5() {
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function Companion_6() {
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function From() {
    From_instance = this;
    CSSKeyframe.call(this);
    this.m2i_1 = 0;
  }
  protoOf(From).toString = function () {
    return 'from';
  };
  var From_instance;
  function From_getInstance() {
    if (From_instance == null)
      new From();
    return From_instance;
  }
  function To() {
    To_instance = this;
    CSSKeyframe.call(this);
    this.o2i_1 = 0;
  }
  protoOf(To).toString = function () {
    return 'to';
  };
  var To_instance;
  function To_getInstance() {
    if (To_instance == null)
      new To();
    return To_instance;
  }
  function CSSKeyframe() {
    this.p2i_1 = 0;
  }
  function CSSKeyframeRuleDeclaration(keyframe, style) {
    this.q2i_1 = keyframe;
    this.r2i_1 = style;
    this.s2i_1 = 8;
  }
  protoOf(CSSKeyframeRuleDeclaration).t2i = function () {
    return this.r2i_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).u2i = function () {
    return this.q2i_1.toString();
  };
  protoOf(CSSKeyframeRuleDeclaration).toString = function () {
    return 'CSSKeyframeRuleDeclaration(keyframe=' + this.q2i_1.toString() + ', style=' + toString(this.r2i_1) + ')';
  };
  protoOf(CSSKeyframeRuleDeclaration).hashCode = function () {
    var result = hashCode(this.q2i_1);
    result = imul(result, 31) + hashCode(this.r2i_1) | 0;
    return result;
  };
  protoOf(CSSKeyframeRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframeRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframeRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.q2i_1, tmp0_other_with_cast.q2i_1))
      return false;
    if (!equals(this.r2i_1, tmp0_other_with_cast.r2i_1))
      return false;
    return true;
  };
  function CSSKeyframesRuleDeclaration(name, keys) {
    this.v2i_1 = name;
    this.w2i_1 = keys;
    this.x2i_1 = 8;
  }
  protoOf(CSSKeyframesRuleDeclaration).u2i = function () {
    return '@keyframes ' + this.v2i_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).toString = function () {
    return 'CSSKeyframesRuleDeclaration(name=' + this.v2i_1 + ', keys=' + toString(this.w2i_1) + ')';
  };
  protoOf(CSSKeyframesRuleDeclaration).hashCode = function () {
    var result = getStringHashCode(this.v2i_1);
    result = imul(result, 31) + hashCode(this.w2i_1) | 0;
    return result;
  };
  protoOf(CSSKeyframesRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframesRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframesRuleDeclaration ? other : THROW_CCE();
    if (!(this.v2i_1 === tmp0_other_with_cast.v2i_1))
      return false;
    if (!equals(this.w2i_1, tmp0_other_with_cast.w2i_1))
      return false;
    return true;
  };
  function media(_this__u8e3s4, query, rulesBuild) {
    media_0(_this__u8e3s4, new Raw(query), rulesBuild);
  }
  function Raw(string) {
    this.y2i_1 = string;
    this.z2i_1 = 0;
  }
  protoOf(Raw).toString = function () {
    return this.y2i_1;
  };
  protoOf(Raw).hashCode = function () {
    return getStringHashCode(this.y2i_1);
  };
  protoOf(Raw).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Raw))
      return false;
    var tmp0_other_with_cast = other instanceof Raw ? other : THROW_CCE();
    if (!(this.y2i_1 === tmp0_other_with_cast.y2i_1))
      return false;
    return true;
  };
  function MediaFeature(name, value) {
    value = value === VOID ? null : value;
    this.a2j_1 = name;
    this.b2j_1 = value;
    this.c2j_1 = 8;
  }
  protoOf(MediaFeature).equals = function (other) {
    var tmp;
    if (other instanceof MediaFeature) {
      tmp = (this.a2j_1 === other.a2j_1 && toString_0(this.b2j_1) === toString_0(other.b2j_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MediaFeature).toString = function () {
    var tmp;
    if (this.b2j_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.css.MediaFeature.toString.<anonymous>' call
      tmp = ': ' + toString_0(this.b2j_1) + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return '(' + this.a2j_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function media_0(_this__u8e3s4, query, rulesBuild) {
    var rules = _this__u8e3s4.d2j(rulesBuild);
    _this__u8e3s4.e2j(new CSSMediaRuleDeclaration(query, rules));
  }
  function CSSMediaRuleDeclaration(query, rules) {
    this.f2j_1 = query;
    this.g2j_1 = rules;
    this.h2j_1 = 0;
  }
  protoOf(CSSMediaRuleDeclaration).i2j = function () {
    return this.g2j_1;
  };
  protoOf(CSSMediaRuleDeclaration).u2i = function () {
    return '@media ' + toString(this.f2j_1);
  };
  protoOf(CSSMediaRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSMediaRuleDeclaration) {
      tmp = (equals(this.g2j_1, other.g2j_1) && equals(this.f2j_1, other.f2j_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function unaryMinus(_this__u8e3s4) {
    return new CSSUnitValueTyped(-_this__u8e3s4.value, _this__u8e3s4.unit);
  }
  function times(_this__u8e3s4, unit) {
    return new CSSUnitValueTyped(unit.value * numberToDouble(_this__u8e3s4), unit.unit);
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.j2j_1 = selector;
    this.k2j_1 = style;
    this.l2j_1 = 8;
  }
  protoOf(CSSStyleRuleDeclaration).t2i = function () {
    return this.k2j_1;
  };
  protoOf(CSSStyleRuleDeclaration).u2i = function () {
    return this.j2j_1.n2j();
  };
  protoOf(CSSStyleRuleDeclaration).toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + toString(this.j2j_1) + ', style=' + toString(this.k2j_1) + ')';
  };
  protoOf(CSSStyleRuleDeclaration).hashCode = function () {
    var result = hashCode(this.j2j_1);
    result = imul(result, 31) + hashCode(this.k2j_1) | 0;
    return result;
  };
  protoOf(CSSStyleRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSStyleRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.j2j_1, tmp0_other_with_cast.j2j_1))
      return false;
    if (!equals(this.k2j_1, tmp0_other_with_cast.k2j_1))
      return false;
    return true;
  };
  function CSSStyledRuleDeclaration() {
  }
  function CSSGroupingRuleDeclaration() {
  }
  function buildCSSStyleRule(cssRule) {
    var builder = new CSSRuleBuilderImpl();
    cssRule(builder);
    return builder;
  }
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
    this.r2j_1 = 0;
  }
  function Companion_7() {
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function get_cssRem(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.rem' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'rem');
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'px');
  }
  function get_em(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.em' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'em');
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function get_fr(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.fr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'fr');
  }
  function get_ms(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.ms' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'ms');
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vh');
  }
  function get_deg(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.deg' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'deg');
  }
  function CSSUnitValueTyped(value, unit) {
    this.c2k_1 = value;
    this.d2k_1 = unit;
    this.e2k_1 = 0;
  }
  protoOf(CSSUnitValueTyped).e2 = function () {
    return this.c2k_1;
  };
  protoOf(CSSUnitValueTyped).f2k = function () {
    return this.d2k_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.c2k_1 + toString(this.d2k_1);
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.c2k_1);
    result = imul(result, 31) + hashCode(this.d2k_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    var tmp0_other_with_cast = other instanceof CSSUnitValueTyped ? other : THROW_CCE();
    if (!equals(this.c2k_1, tmp0_other_with_cast.c2k_1))
      return false;
    if (!equals(this.d2k_1, tmp0_other_with_cast.d2k_1))
      return false;
    return true;
  };
  function rgb(r, g, b) {
    return new RGB(r, g, b);
  }
  function rgba(r, g, b, a) {
    return new RGBA(r, g, b, a);
  }
  function RGB(r, g, b) {
    this.g2k_1 = r;
    this.h2k_1 = g;
    this.i2k_1 = b;
  }
  protoOf(RGB).toString = function () {
    return 'rgb(' + toString(this.g2k_1) + ', ' + toString(this.h2k_1) + ', ' + toString(this.i2k_1) + ')';
  };
  function RGBA(r, g, b, a) {
    this.j2k_1 = r;
    this.k2k_1 = g;
    this.l2k_1 = b;
    this.m2k_1 = a;
  }
  protoOf(RGBA).toString = function () {
    return 'rgba(' + toString(this.j2k_1) + ', ' + toString(this.k2k_1) + ', ' + toString(this.l2k_1) + ', ' + toString(this.m2k_1) + ')';
  };
  function StyleScope() {
  }
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.u2j_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.v2j_1 = ArrayList_init_$Create$();
    this.w2j_1 = 0;
  }
  protoOf(StyleScopeBuilder).a2k = function () {
    return this.u2j_1;
  };
  protoOf(StyleScopeBuilder).b2k = function () {
    return this.v2j_1;
  };
  protoOf(StyleScopeBuilder).x2j = function (propertyName, value) {
    this.a2k().h(new StylePropertyDeclaration(propertyName, value));
  };
  protoOf(StyleScopeBuilder).z2j = function (variableName, value) {
    this.b2k().h(new StylePropertyDeclaration(variableName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = (nativeEquals(this.a2k(), other.a2k()) && nativeEquals(this.b2k(), other.b2k()));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function StyleHolder() {
  }
  function StylePropertyDeclaration(name, value) {
    this.n2k_1 = name;
    this.o2k_1 = value;
    this.p2k_1 = 8;
  }
  protoOf(StylePropertyDeclaration).qe = function () {
    return this.n2k_1;
  };
  protoOf(StylePropertyDeclaration).re = function () {
    return this.o2k_1;
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.n2k_1 + ', value=' + toString(this.o2k_1) + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.n2k_1);
    result = imul(result, 31) + hashCode(this.o2k_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.n2k_1 === tmp0_other_with_cast.n2k_1))
      return false;
    if (!equals(this.o2k_1, tmp0_other_with_cast.o2k_1))
      return false;
    return true;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.m() === properties.m()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = _this__u8e3s4.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'org.jetbrains.compose.web.css.nativeEquals.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var otherProp = properties.p(tmp0);
        if (!(element.n2k_1 === otherProp.n2k_1 && toString(element.o2k_1) === toString(otherProp.o2k_1))) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function StyleSheet_init_$Init$(rulesHolder, usePrefix, $this) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    usePrefix = usePrefix === VOID ? true : usePrefix;
    StyleSheet.call($this, usePrefix ? null : '', rulesHolder);
    return $this;
  }
  function StyleSheet_init_$Create$(rulesHolder, usePrefix) {
    return StyleSheet_init_$Init$(rulesHolder, usePrefix, objectCreate(protoOf(StyleSheet)));
  }
  function Companion_8() {
    this.q2k_1 = 0;
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    return Companion_instance_8;
  }
  function StyleSheet(customPrefix, rulesHolder) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    this.r2k_1 = rulesHolder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.s2k_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    tmp_0.t2k_1 = customPrefix == null ? '' + getKClassFromExpression(this).ka() + '-' : customPrefix;
    this.u2k_1 = customPrefix == null;
    this.v2k_1 = 0;
  }
  protoOf(StyleSheet).w2k = function () {
    return this.r2k_1.w2k();
  };
  protoOf(StyleSheet).e2j = function (cssRule) {
    this.r2k_1.e2j(cssRule);
  };
  protoOf(StyleSheet).x2k = function (selector, style) {
    this.r2k_1.x2k(selector, style);
  };
  protoOf(StyleSheet).y2k = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    rulesBuild(this_0);
    return this_0.w2k();
  };
  protoOf(StyleSheet).d2j = function (rulesBuild) {
    return this.y2k(rulesBuild);
  };
  protoOf(StyleSheet).a2l = function (selector, cssRule) {
    return this.z2k(selector, cssRule);
  };
  function CSSRulesHolderState() {
    this.e2l_1 = mutableStateListOf();
    this.f2l_1 = 0;
  }
  protoOf(CSSRulesHolderState).w2k = function () {
    return this.e2l_1;
  };
  protoOf(CSSRulesHolderState).e2j = function (cssRule) {
    this.e2l_1.j1c(cssRule);
  };
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.h2l_1 = selector;
  }
  protoOf(RawSelector).toString = function () {
    return this.h2l_1;
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.h2l_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.h2l_1 === tmp0_other_with_cast.h2l_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.j2l_1 = name;
  }
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = (this.j2l_1 === other.j2l_1 && this.k2l() == other.k2l());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).k2l = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.k2l();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.css.PseudoClassInternal.toString.<anonymous>' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.j2l_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function GenericStyleSheetBuilder() {
  }
  function CSSRulesHolder() {
  }
  function StyleSheetBuilder() {
  }
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (!properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
    }
  }
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('background-color', value);
  }
  function borderRadius(_this__u8e3s4, r) {
    _this__u8e3s4.x2j('border-radius', r);
  }
  function border(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    border_0(_this__u8e3s4, border$lambda(width, style, color));
  }
  function borderRadius_0(_this__u8e3s4, topLeft, topRight, bottomRight, bottomLeft) {
    _this__u8e3s4.s2j('border-radius', toString(topLeft) + ' ' + toString(topRight) + ' ' + toString(bottomRight) + ' ' + toString(bottomLeft));
  }
  function border_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.x2j('border', this_0);
  }
  function CSSBorder() {
    this.l2l_1 = null;
    this.m2l_1 = null;
    this.n2l_1 = null;
    this.o2l_1 = 8;
  }
  protoOf(CSSBorder).equals = function (other) {
    var tmp;
    if (other instanceof CSSBorder) {
      tmp = (equals(this.l2l_1, other.l2l_1) && equals(this.m2l_1, other.m2l_1) && equals(this.n2l_1, other.n2l_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSBorder).toString = function () {
    var values = listOfNotNull([this.l2l_1, this.m2l_1, this.n2l_1]);
    return joinToString(values, ' ');
  };
  function width(_this__u8e3s4, size) {
    _this__u8e3s4.l2l_1 = size;
  }
  function style_1(_this__u8e3s4, style) {
    _this__u8e3s4.m2l_1 = style;
  }
  function color(_this__u8e3s4, color) {
    _this__u8e3s4.n2l_1 = color;
  }
  function border$lambda($width, $style, $color) {
    return function ($this$border) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'org.jetbrains.compose.web.css.border.<anonymous>.<anonymous>' call
        width($this$border, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'org.jetbrains.compose.web.css.border.<anonymous>.<anonymous>' call
        style_1($this$border, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'org.jetbrains.compose.web.css.border.<anonymous>.<anonymous>' call
        color($this$border, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function width_0(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('width', value);
  }
  function minWidth(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('min-width', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('height', value);
  }
  function minHeight(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('min-height', value);
  }
  function maxWidth(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('max-width', value);
  }
  function maxHeight(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('max-height', value);
  }
  function boxSizing(_this__u8e3s4, value) {
    _this__u8e3s4.s2j('box-sizing', value);
  }
  function color_0(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('color', value);
  }
  function filter(_this__u8e3s4, filterContext) {
    var builder = new FilterBuilderImplementation();
    // Inline function 'kotlin.apply' call
    filterContext(builder);
    _this__u8e3s4.s2j('filter', builder.toString());
  }
  function sam$org_jetbrains_compose_web_css_FilterFunction$0(function_0) {
    this.p2l_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0).e1q = function () {
    return this.p2l_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0).h3 = function () {
    return this.p2l_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.h3(), other.h3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0).hashCode = function () {
    return hashCode(this.h3());
  };
  function FilterBuilderImplementation$grayscale$lambda($amount) {
    return function () {
      return 'grayscale(' + toString($amount) + ')';
    };
  }
  function FilterBuilderImplementation$toString$lambda(it) {
    return it.e1q();
  }
  function FilterBuilderImplementation() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.q2l_1 = ArrayList_init_$Create$();
  }
  protoOf(FilterBuilderImplementation).r2l = function (amount) {
    var tmp = FilterBuilderImplementation$grayscale$lambda(amount);
    this.q2l_1.h(new sam$org_jetbrains_compose_web_css_FilterFunction$0(tmp));
  };
  protoOf(FilterBuilderImplementation).toString = function () {
    return joinToString(this.q2l_1, ' ', VOID, VOID, VOID, VOID, FilterBuilderImplementation$toString$lambda);
  };
  function FilterFunction() {
  }
  function flexGrow(_this__u8e3s4, value) {
    _this__u8e3s4.t2j('flex-grow', value);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.s2j('align-items', alignItems);
  }
  function alignSelf(_this__u8e3s4, alignSelf) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.s2j('align-self', alignSelf);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.s2j('flex-direction', flexDirection);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.s2j('justify-content', justifyContent);
  }
  function gap(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('gap', value);
  }
  function gridTemplateColumns(_this__u8e3s4, value) {
    _this__u8e3s4.s2j('grid-template-columns', value);
  }
  function gridArea(_this__u8e3s4, rowStart, columnStart) {
    _this__u8e3s4.s2j('grid-area', rowStart + ' / ' + columnStart);
  }
  function columnGap(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('column-gap', value);
  }
  function rowGap(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('row-gap', value);
  }
  function gridTemplateRows(_this__u8e3s4, value) {
    _this__u8e3s4.s2j('grid-template-rows', value);
  }
  function gridAutoColumns(_this__u8e3s4, value) {
    _this__u8e3s4.s2j('grid-auto-columns', value);
  }
  function gridAutoRows(_this__u8e3s4, value) {
    _this__u8e3s4.s2j('grid-auto-rows', value);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.s2j('margin', joinToString_0(value, ' '));
  }
  function marginBottom(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('margin-bottom', value);
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.s2j('padding', joinToString_0(value, ' '));
  }
  function position(_this__u8e3s4, position) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.s2j('position', position);
  }
  function top(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('top', value);
  }
  function left(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('left', value);
  }
  function right(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('right', value);
  }
  function bottom(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('bottom', value);
  }
  function opacity(_this__u8e3s4, value) {
    _this__u8e3s4.t2j('opacity', value);
  }
  function opacity_0(_this__u8e3s4, value) {
    _this__u8e3s4.t2j('opacity', value.value / 100);
  }
  function display(_this__u8e3s4, displayStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.s2j('display', displayStyle);
  }
  function lineHeight(_this__u8e3s4, value) {
    _this__u8e3s4.s2j('line-height', value);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.x2j('font-size', value);
  }
  function fontFamily(_this__u8e3s4, value) {
    _this__u8e3s4.s2j('font-family', joinToString_0(value, ', ', VOID, VOID, VOID, VOID, fontFamily$lambda));
  }
  function fontFamily$lambda(it) {
    return contains(it, ' ') ? '"' + it + '"' : it;
  }
  function transform(_this__u8e3s4, transformContext) {
    var transformBuilder = new TransformBuilderImplementation();
    // Inline function 'kotlin.apply' call
    transformContext(transformBuilder);
    _this__u8e3s4.s2j('transform', transformBuilder.toString());
  }
  function sam$org_jetbrains_compose_web_css_TransformFunction$0(function_0) {
    this.s2l_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0).e1q = function () {
    return this.s2l_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0).h3 = function () {
    return this.s2l_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.h3(), other.h3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0).hashCode = function () {
    return hashCode(this.h3());
  };
  function TransformBuilderImplementation$rotate$lambda($a) {
    return function () {
      return 'rotate(' + toString($a) + ')';
    };
  }
  function TransformBuilderImplementation$toString$lambda(it) {
    return it.e1q();
  }
  function TransformBuilderImplementation() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.t2l_1 = ArrayList_init_$Create$();
  }
  protoOf(TransformBuilderImplementation).u2l = function (a) {
    var tmp = TransformBuilderImplementation$rotate$lambda(a);
    this.t2l_1.h(new sam$org_jetbrains_compose_web_css_TransformFunction$0(tmp));
  };
  protoOf(TransformBuilderImplementation).toString = function () {
    return joinToString(this.t2l_1, ' ', VOID, VOID, VOID, VOID, TransformBuilderImplementation$toString$lambda);
  };
  function TransformFunction() {
  }
  function CSSSelector() {
    this.m2j_1 = 0;
  }
  protoOf(CSSSelector).n2j = function () {
    return toString(this);
  };
  function TagElement(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-576127026);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f15(elementBuilder) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s1e(applyAttrs) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.s1e(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-576127026, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement (Base.kt:110)');
      }
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -492369756, 'CC(remember):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1f();
      var tmp;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
        var value = new ElementScopeImpl();
        $composer_1.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var scope = tmp0;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode' call
      var $composer_2 = $composer_0;
      $composer_2.m18();
      if ($composer_2.e1e()) {
        var tmp_1 = $composer_2;
        tmp_1.g1e(TagElement$lambda(elementBuilder, scope));
      } else {
        $composer_2.j1e();
      }
      var tmp3 = _SkippableUpdater___init__impl__4ft0t9($composer_2);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var $composer_3 = $composer_2;
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.g2d_1;
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne(tmp3).t1d(509942095);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>.<anonymous>' call
      var $this$update = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne(tmp3));
      Updater__set_impl_v7kwss($this$update, attrsScope.h2d_1, DomElementWrapper$updateClasses$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.e2d_1, DomElementWrapper$updateStyleDeclarations$ref());
      var tmp_2 = attrsScope.l2d();
      Updater__set_impl_v7kwss($this$update, tmp_2, DomElementWrapper$updateAttrs$ref());
      var tmp_3 = attrsScope.c2d_1.m2d();
      Updater__set_impl_v7kwss($this$update, tmp_3, DomElementWrapper$updateEventListeners$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.f2d_1, DomElementWrapper$updateProperties$ref());
      _SkippableUpdater___get_composer__impl__6t7yne(tmp3).u1d();
      $composer_2.t1d(2058660585);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var $changed_0 = 8 & 64 >> 3 | 14 & 64 >> 3 | 112 & 64 >> 6;
      var $composer_4 = $composer_2;
      $composer_4.t1d(-914956529);
      content == null || content(scope, $composer_4, 14 & $changed_0 | 112 & $dirty >> 3);
      $composer_4.u1d();
      $composer_2.u1d();
      $composer_2.l1e();
      var tmp0_safe_receiver = refEffect;
      var tmp_4;
      if (tmp0_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
        DisposableEffect(null, TagElement$lambda_0(tmp0_safe_receiver, scope), $composer_0, 6);
        tmp_4 = Unit_instance;
      }
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
      tmp1_safe_receiver.l1l(TagElement$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.x2l_1 = node;
    this.y2l_1 = emptyList();
  }
  protoOf(DomElementWrapper).c2b = function () {
    return this.x2l_1;
  };
  protoOf(DomElementWrapper).z2l = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.y2l_1.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.x2l_1.removeEventListener(element.o1x(), element);
    }
    this.y2l_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.y2l_1.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.x2l_1.addEventListener(element_0.o1x(), element_0);
    }
  };
  protoOf(DomElementWrapper).a2m = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = applicators.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateProperties.<anonymous>' call
      var applicator = element.qe();
      var item = element.re();
      applicator(this.x2l_1, item);
    }
  };
  protoOf(DomElementWrapper).b2m = function (styleApplier) {
    var tmp0_subject = this.x2l_1;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.x2l_1.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.x2l_1.style;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = styleApplier.a2k().j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name = element.qe();
        var value = element.re();
        style.setProperty(name, toString(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = styleApplier.b2k().j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name_0 = element_0.qe();
        var value_0 = element_0.re();
        style.setProperty(name_0, toString(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).c2m = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.x2l_1.getAttributeNames();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      switch (element) {
        case 'style':
        case 'class':
          break;
        default:
          this.x2l_1.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = attrs.k2().j();
    while (_iterator__ex2g4s.k()) {
      var element_0 = _iterator__ex2g4s.l();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      this.x2l_1.setAttribute(element_0.d2(), element_0.e2());
    }
  };
  protoOf(DomElementWrapper).d2m = function (classes) {
    this.x2l_1.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.q()) {
      var tmp = this.x2l_1.classList;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$1 = copyToArray(classes);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$1.slice()));
      }.call(this));
    }
  };
  function TagElement$lambda($elementBuilder, $scope) {
    return function () {
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var node = $elementBuilder.w1u();
      $scope.i2m(node);
      return new DomElementWrapper(node);
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.d2m(p1);
      return Unit_instance;
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.b2m(p1);
      return Unit_instance;
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.c2m(p1);
      return Unit_instance;
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.z2l(p1);
      return Unit_instance;
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.a2m(p1);
      return Unit_instance;
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$lambda_0($effect, $scope) {
    return function ($this$DisposableEffect) {
      return $effect($this$DisposableEffect, $scope.j2m());
    };
  }
  function TagElement$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
    this.h2m_1 = 8;
  }
  protoOf(ElementScopeImpl).i2m = function (_set____db54di) {
    this.g2m_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).j2m = function () {
    var tmp = this.g2m_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).h2i = function (_this__u8e3s4) {
    return this.j2m();
  };
  function ElementScopeBase() {
    this.k2m_1 = 0;
    this.l2m_1 = 8;
  }
  var Address;
  var Article;
  var Aside;
  var Header;
  var Area;
  var Audio;
  var Map;
  var Track;
  var Video;
  var Datalist;
  var Fieldset;
  var Legend;
  var Meter;
  var Output;
  var Progress;
  var Embed;
  var Iframe;
  var Object_0;
  var Param;
  var Picture;
  var Source;
  var Canvas;
  var DList;
  var DTerm;
  var DDescription;
  function get_Div() {
    _init_properties_Elements_kt__eyv5nt();
    return Div;
  }
  var Div;
  function get_A() {
    _init_properties_Elements_kt__eyv5nt();
    return A;
  }
  var A;
  function get_Input() {
    _init_properties_Elements_kt__eyv5nt();
    return Input;
  }
  var Input;
  function get_Button() {
    _init_properties_Elements_kt__eyv5nt();
    return Button_0;
  }
  var Button_0;
  var H1;
  var H2;
  var H3;
  var H4;
  var H5;
  var H6;
  function get_P() {
    _init_properties_Elements_kt__eyv5nt();
    return P;
  }
  var P;
  var Em;
  var I;
  var B;
  var Small;
  var Sup;
  var Sub;
  var Blockquote;
  function get_Span() {
    _init_properties_Elements_kt__eyv5nt();
    return Span;
  }
  var Span;
  var Br;
  var Ul;
  var Ol;
  var Li;
  function get_Img() {
    _init_properties_Elements_kt__eyv5nt();
    return Img;
  }
  var Img;
  var Form;
  var Select;
  var Option;
  var OptGroup;
  var Section;
  function get_TextArea() {
    _init_properties_Elements_kt__eyv5nt();
    return TextArea;
  }
  var TextArea;
  var Nav;
  var Pre;
  var Code;
  var Main;
  var Footer;
  var Hr;
  function get_Label() {
    _init_properties_Elements_kt__eyv5nt();
    return Label;
  }
  var Label;
  var Table;
  var Caption;
  var Col;
  var Colgroup;
  var Tr;
  var Thead;
  var Th;
  var Td;
  var Tbody;
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style;
  }
  var Style;
  function ElementBuilder() {
  }
  function _get_el__ndc0ck($this) {
    var tmp0 = $this.n2m_1;
    // Inline function 'kotlin.getValue' call
    el$factory();
    return tmp0.e2();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.m2m_1);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.m2m_1 = tagName;
    var tmp = this;
    tmp.n2m_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).w1u = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Div_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1121267064);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s1e(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s1e(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1121267064, $dirty, -1, 'org.jetbrains.compose.web.dom.Div (Elements.kt:495)');
      }
      TagElement(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.l1l(Div$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Text_1(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1813500779);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f15(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-1813500779, $dirty, -1, 'org.jetbrains.compose.web.dom.Text (Elements.kt:482)');
      }
      $composer_0.t1d(-671462136);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.f1f();
      var tmp;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Text.<anonymous>' call
        var value_0 = Text$lambda;
        this_0.q1f(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.u1d();
      // Inline function 'androidx.compose.runtime.ComposeNode' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1886828752, 'CC(ComposeNode):Composables.kt#9igjgp');
      var tmp_1 = $composer_1.p1d();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_1.m18();
      if ($composer_1.e1e()) {
        $composer_1.g1e(tmpCache);
      } else {
        $composer_1.j1e();
      }
      // Inline function 'org.jetbrains.compose.web.dom.Text.<anonymous>' call
      var $this$ComposeNode = _Updater___init__impl__rbfxm8($composer_1);
      Updater__set_impl_v7kwss($this$ComposeNode, value, Text$lambda_0);
      $composer_1.l1e();
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.l1l(Text$lambda_1(value, $changed));
    }
  }
  function P_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-892332201);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s1e(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s1e(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-892332201, $dirty, -1, 'org.jetbrains.compose.web.dom.P (Elements.kt:569)');
      }
      TagElement(get_P(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.l1l(P$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Label_0(forId, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var forId_0 = {_v: forId};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-41178524);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f15(forId_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s1e(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.s1e(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        forId_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-41178524, $dirty, -1, 'org.jetbrains.compose.web.dom.Label (Elements.kt:858)');
      }
      var tmp = get_Label();
      $composer_0.t1d(-671451914);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.f15(forId_0._v) | $composer_0.s1e(attrs_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.f1f();
      var tmp_0;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Label.<anonymous>' call
        var value = Label$lambda(forId_0, attrs_0);
        tmp0.q1f(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.u1d();
      TagElement(tmp, tmpCache, content_0._v, $composer_0, 896 & $dirty);
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
      tmp0_safe_receiver.l1l(Label$lambda_0(forId_0, attrs_0, content_0, $changed, $default));
    }
  }
  function TextArea_0(value, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var value_0 = {_v: value};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(387201045);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f15(value_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s1e(attrs_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        value_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(387201045, $dirty, -1, 'org.jetbrains.compose.web.dom.TextArea (Elements.kt:753)');
      }
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -492369756, 'CC(remember):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1f();
      var tmp;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea.<anonymous>' call
        var value_1 = !(value_0._v == null);
        $composer_1.q1f(value_1);
        tmp = value_1;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var firstProvidedValueWasNotNull = tmp0;
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, -492369756, 'CC(remember):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.f1f();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().n18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea.<anonymous>' call
        var value_2 = mutableStateOf(0);
        $composer_2.q1f(value_2);
        tmp_1 = value_2;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      var keyForRestoringControlledState = tmp0_0;
      var tmp_3 = get_TextArea();
      $composer_0.t1d(-671454237);
      var tmp4 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!($composer_0.f15(keyForRestoringControlledState) | $composer_0.s1e(attrs_0._v)) | $composer_0.t1e(firstProvidedValueWasNotNull)) | $composer_0.f15(value_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = tmp4.f1f();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().n18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea.<anonymous>' call
        var value_3 = TextArea$lambda(attrs_0, firstProvidedValueWasNotNull, value_0, keyForRestoringControlledState);
        tmp4.q1f(value_3);
        tmp_4 = value_3;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmpCache = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.u1d();
      // Inline function 'kotlin.run' call
      // Inline function 'org.jetbrains.compose.web.dom.TextArea.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, 614898220, true, TextArea$lambda_0(keyForRestoringControlledState));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_3.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_3.f1f();
      var tmp_7;
      if (invalid_0 || it_2 === Companion_getInstance().n18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_3.q1f(value_4);
        tmp_7 = value_4;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmp0_1 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      TagElement(tmp_3, tmpCache, tmp0_1, $composer_0, 384);
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
      tmp0_safe_receiver.l1l(TextArea$lambda_1(value_0, attrs_0, $changed, $default));
    }
  }
  function Button_1(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(17018421);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s1e(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s1e(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(17018421, $dirty, -1, 'org.jetbrains.compose.web.dom.Button (Elements.kt:527)');
      }
      TagElement(get_Button(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.l1l(Button$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Input_0(type, attrs, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(330436284);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f15(type) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s1e(attrs) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(330436284, $dirty, -1, 'org.jetbrains.compose.web.dom.Input (Elements.kt:1078)');
      }
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -492369756, 'CC(remember):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.f1f();
      var tmp;
      if (false || it === Companion_getInstance().n18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Input.<anonymous>' call
        var value = mutableStateOf(0);
        $composer_1.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var keyForRestoringControlledState = tmp0;
      var tmp_1 = get_Input();
      $composer_0.t1d(-671446402);
      var tmp2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.f15(type) | $composer_0.f15(keyForRestoringControlledState)) | $composer_0.s1e(attrs));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp2.f1f();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().n18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Input.<anonymous>' call
        var value_0 = Input$lambda(type, attrs, keyForRestoringControlledState);
        tmp2.q1f(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmpCache = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.u1d();
      // Inline function 'kotlin.run' call
      // Inline function 'org.jetbrains.compose.web.dom.Input.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 558133459, true, Input$lambda_0(type, keyForRestoringControlledState));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.f1f();
      var tmp_5;
      if (invalid_0 || it_1 === Companion_getInstance().n18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Input.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_2.q1f(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_1;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      TagElement(tmp_1, tmpCache, tmp0_0, $composer_0, 384);
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
      tmp0_safe_receiver.l1l(Input$lambda_1(type, attrs, $changed));
    }
  }
  function Img_0(src, alt, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var alt_0 = {_v: alt};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(140604733);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f15(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f15(alt_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.s1e(attrs_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.o1d()) {
      if (!(($default & 2) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(140604733, $dirty, -1, 'org.jetbrains.compose.web.dom.Img (Elements.kt:646)');
      }
      var tmp = get_Img();
      $composer_0.t1d(-671457079);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.f15(src) | $composer_0.f15(alt_0._v)) | $composer_0.s1e(attrs_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.f1f();
      var tmp_0;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Img.<anonymous>' call
        var value = Img$lambda(src, alt_0, attrs_0);
        tmp0.q1f(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.u1d();
      TagElement(tmp, tmpCache, null, $composer_0, 384);
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
      tmp0_safe_receiver.l1l(Img$lambda_0(src, alt_0, attrs_0, $changed, $default));
    }
  }
  function Span_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-606646835);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s1e(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s1e(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-606646835, $dirty, -1, 'org.jetbrains.compose.web.dom.Span (Elements.kt:617)');
      }
      TagElement(get_Span(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.l1l(Span$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function A_0(href, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var href_0 = {_v: href};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1386364631);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.f15(href_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s1e(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.s1e(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        href_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1386364631, $dirty, -1, 'org.jetbrains.compose.web.dom.A (Elements.kt:508)');
      }
      var tmp = get_A();
      $composer_0.t1d(-671461516);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.f15(href_0._v) | $composer_0.s1e(attrs_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.f1f();
      var tmp_0;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.A.<anonymous>' call
        var value = A$lambda(href_0, attrs_0);
        tmp0.q1f(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.u1d();
      TagElement(tmp, tmpCache, content_0._v, $composer_0, 896 & $dirty);
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
      tmp0_safe_receiver.l1l(A$lambda_0(href_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Style_0(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(244974285);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s1e(applyAttrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.f15(cssRules) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        applyAttrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(244974285, $dirty, -1, 'org.jetbrains.compose.web.dom.Style (Elements.kt:1002)');
      }
      var tmp = get_Style();
      $composer_0.t1d(-671448825);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.s1e(applyAttrs_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.f1f();
      var tmp_0;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>' call
        var value = Style$lambda(applyAttrs_0);
        tmp0.q1f(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.u1d();
      // Inline function 'kotlin.run' call
      // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 962227798, true, Style$lambda_0(cssRules));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.f15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.f1f();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance().n18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.q1f(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      TagElement(tmp, tmpCache, tmp0_0, $composer_0, 384);
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
      tmp0_safe_receiver.l1l(Style$lambda_1(applyAttrs_0, cssRules, $changed, $default));
    }
  }
  function clearCSSRules(_this__u8e3s4) {
    _init_properties_Elements_kt__eyv5nt();
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.cssRules.length;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.dom.clearCSSRules.<anonymous>' call
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < times);
  }
  function Div$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Text$lambda() {
    _init_properties_Elements_kt__eyv5nt();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$lambda_0($this$set, value) {
    _init_properties_Elements_kt__eyv5nt();
    var tmp = $this$set.c2b();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_instance;
  }
  function Text$lambda_1($value, $$changed) {
    return function ($composer, $force) {
      Text_1($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function P$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      P_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Label$lambda($forId, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($forId._v == null)) {
        forId($this$TagElement, $forId._v);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function Label$lambda_0($forId, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Label_0($forId._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function TextArea$lambda$lambda($keyForRestoringControlledState) {
    return function (it) {
      $keyForRestoringControlledState.is($keyForRestoringControlledState.e2() + 1 | 0);
      return Unit_instance;
    };
  }
  function TextArea$lambda($attrs, $firstProvidedValueWasNotNull, $value, $keyForRestoringControlledState) {
    return function ($this$TagElement) {
      var textAreaAttrsBuilder = new TextAreaAttrsScope($this$TagElement);
      textAreaAttrsBuilder.k2i(TextArea$lambda$lambda($keyForRestoringControlledState));
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v(textAreaAttrsBuilder);
      }
      var tmp_0;
      if ($firstProvidedValueWasNotNull) {
        var tmp0_elvis_lhs = $value._v;
        textAreaAttrsBuilder.c2i(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function TextArea$$inlined$run$1$1$1() {
  }
  protoOf(TextArea$$inlined$run$1$1$1).cm = function () {
    // Inline function 'org.jetbrains.compose.web.dom.TextArea.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function TextArea$lambda$lambda_0($this_TagElement) {
    return function ($this$DisposableEffect) {
      restoreControlledTextAreaState($this_TagElement.h2i($this$DisposableEffect));
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new TextArea$$inlined$run$1$1$1();
    };
  }
  function TextArea$lambda_0($keyForRestoringControlledState) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.f15($this$TagElement) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(614898220, $dirty, -1, 'org.jetbrains.compose.web.dom.TextArea.<anonymous> (Elements.kt:776)');
        }
        var tmp_1 = $keyForRestoringControlledState.e2();
        DisposableEffect(tmp_1, TextArea$lambda$lambda_0($this$TagElement), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.e18();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function TextArea$lambda_1($value, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      TextArea_0($value._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Button$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_1($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Input$lambda$lambda($keyForRestoringControlledState) {
    return function (it) {
      $keyForRestoringControlledState.is($keyForRestoringControlledState.e2() + 1 | 0);
      return Unit_instance;
    };
  }
  function Input$lambda($type, $attrs, $keyForRestoringControlledState) {
    return function ($this$TagElement) {
      var inputAttrsBuilder = new InputAttrsScope($type, $this$TagElement);
      type(inputAttrsBuilder, $type);
      inputAttrsBuilder.f2i(Input$lambda$lambda($keyForRestoringControlledState));
      $attrs(inputAttrsBuilder);
      return Unit_instance;
    };
  }
  function Input$$inlined$run$1$1$1() {
  }
  protoOf(Input$$inlined$run$1$1$1).cm = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Input.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function Input$lambda$lambda_0($this_TagElement) {
    return function ($this$DisposableEffect) {
      restoreControlledInputState($this_TagElement.h2i($this$DisposableEffect));
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new Input$$inlined$run$1$1$1();
    };
  }
  function Input$lambda_0($type, $keyForRestoringControlledState) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.f15($this$TagElement) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(558133459, $dirty, -1, 'org.jetbrains.compose.web.dom.Input.<anonymous> (Elements.kt:1095)');
        }
        $composer_0.t1d(-1812148288);
        if (equals($type, Radio_getInstance())) {
          DisposeRadioGroupEffect($this$TagElement, $composer_0, 14 & $dirty);
        }
        $composer_0.u1d();
        var tmp_1 = $keyForRestoringControlledState.e2();
        DisposableEffect(tmp_1, Input$lambda$lambda_0($this$TagElement), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.e18();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function Input$lambda_1($type, $attrs, $$changed) {
    return function ($composer, $force) {
      Input_0($type, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Img$lambda($src, $alt, $attrs) {
    return function ($this$TagElement) {
      alt(src($this$TagElement, $src), $alt._v);
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function Img$lambda_0($src, $alt, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Img_0($src, $alt._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Span$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Span_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function A$lambda($href, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($href._v == null)) {
        href($this$TagElement, $href._v);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function A$lambda_0($href, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      A_0($href._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Style$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function Style$$inlined$run$1$1$1($cssStylesheet) {
    this.o2m_1 = $cssStylesheet;
  }
  protoOf(Style$$inlined$run$1$1$1).cm = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.o2m_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.h2i($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      if (cssStylesheet == null)
        null;
      else {
        setCSSRules(cssStylesheet, $cssRules);
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new Style$$inlined$run$1$1$1(cssStylesheet);
    };
  }
  function Style$lambda_0($cssRules) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.f15($this$TagElement) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $dirty, -1, 'org.jetbrains.compose.web.dom.Style.<anonymous> (Elements.kt:1011)');
        }
        var tmp_1 = $cssRules.m();
        DisposableEffect_0($cssRules, tmp_1, Style$lambda$lambda($this$TagElement, $cssRules), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.e18();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z2a(p0, p1, p2);
    };
  }
  function Style$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style_0($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function el$factory() {
    return getPropertyCallableRef('el', 1, KProperty1, function (receiver) {
      return _get_el__ndc0ck(receiver);
    }, null);
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function _init_properties_Elements_kt__eyv5nt() {
    if (!properties_initialized_Elements_kt_gtqiqv) {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Param = new ElementBuilderImplementation('param');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button_0 = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Sup = new ElementBuilderImplementation('sup');
      Sub = new ElementBuilderImplementation('sub');
      Blockquote = new ElementBuilderImplementation('blockquote');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = cssRules.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'org.jetbrains.compose.web.dom.setCSSRules.<anonymous>' call
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.u2i() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.dom.addRule.<anonymous>' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_0(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function fillRule(cssRuleDeclaration, cssRule) {
    if (isInterface(cssRuleDeclaration, CSSStyledRuleDeclaration)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cssStyleRule = cssRule;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = cssRuleDeclaration.t2i().a2k().j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name = element.qe();
        var value = element.re();
        setProperty(cssStyleRule.style, name, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = cssRuleDeclaration.t2i().b2k().j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name_0 = element_0.qe();
        var value_0 = element_0.re();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var cssGroupingRule = cssRule;
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_1 = cssRuleDeclaration.i2j().j();
        while (_iterator__ex2g4s_1.k()) {
          var element_1 = _iterator__ex2g4s_1.l();
          // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var cssGroupingRule_0 = cssRule;
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_2 = cssRuleDeclaration.w2i_1.j();
          while (_iterator__ex2g4s_2.k()) {
            var element_2 = _iterator__ex2g4s_2.l();
            // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
            addRule_2(cssGroupingRule_0, element_2);
          }
        }
      }
    }
  }
  function setProperty(style, name, value) {
    style.setProperty(name, toString(value));
  }
  function setVariable(style, name, value) {
    style.setProperty('--' + name, toString(value));
  }
  function addRule_1(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.u2i() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.dom.addRule.<anonymous>' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.u2i() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.dom.addRule.<anonymous>' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_3(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function addRule_4(_this__u8e3s4, cssRule) {
    // Inline function 'org.jetbrains.compose.web.css.appendRule' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.appendRule(cssRule);
    return _this__u8e3s4.cssRules.item(_this__u8e3s4.cssRules.length - 1 | 0);
  }
  function SyntheticEvent(nativeEvent) {
    this.p2m_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q2m_1 = this.p2m_1.target;
    this.r2m_1 = this.p2m_1.bubbles;
    this.s2m_1 = this.p2m_1.cancelable;
    this.t2m_1 = this.p2m_1.composed;
    this.u2m_1 = this.p2m_1.currentTarget;
    this.v2m_1 = this.p2m_1.eventPhase;
    this.w2m_1 = this.p2m_1.defaultPrevented;
    this.x2m_1 = this.p2m_1.timeStamp;
    this.y2m_1 = this.p2m_1.type;
    this.z2m_1 = this.p2m_1.isTrusted;
    this.a2n_1 = 0;
  }
  protoOf(SyntheticEvent).b2n = function () {
    return this.p2m_1.preventDefault();
  };
  protoOf(SyntheticEvent).c2n = function () {
    return this.p2m_1.stopPropagation();
  };
  function SyntheticInputEvent(value, nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.p2n_1 = value;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = nativeEvent.data;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = tmp0_safe_receiver;
    }
    tmp.q2n_1 = tmp_0;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver_0 = nativeEvent.dataTransfer;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_2 = tmp0_safe_receiver_0;
    }
    tmp_1.r2n_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver_1 = nativeEvent.inputType;
    var tmp_4;
    if (tmp0_safe_receiver_1 == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_4 = tmp0_safe_receiver_1;
    }
    tmp_3.s2n_1 = tmp_4;
    var tmp_5 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver_2 = nativeEvent.isComposing;
    var tmp_6;
    if (tmp0_safe_receiver_2 == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_6 = tmp0_safe_receiver_2;
    }
    var tmp1_elvis_lhs = tmp_6;
    tmp_5.t2n_1 = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    this.u2n_1 = 0;
  }
  function SyntheticKeyboardEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.h2o_1 = nativeEvent;
    this.i2o_1 = nativeEvent.altKey;
    this.j2o_1 = nativeEvent.code;
    this.k2o_1 = nativeEvent.ctrlKey;
    this.l2o_1 = nativeEvent.isComposing;
    this.m2o_1 = nativeEvent.key;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    tmp.n2o_1 = toString(nativeEvent.locale);
    this.o2o_1 = nativeEvent.location;
    this.p2o_1 = nativeEvent.metaKey;
    this.q2o_1 = nativeEvent.repeat;
    this.r2o_1 = nativeEvent.shiftKey;
    this.s2o_1 = 0;
  }
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.f2p_1 = nativeEvent;
    this.g2p_1 = nativeEvent.altKey;
    this.h2p_1 = nativeEvent.button;
    this.i2p_1 = nativeEvent.buttons;
    this.j2p_1 = nativeEvent.clientX;
    this.k2p_1 = nativeEvent.clientY;
    this.l2p_1 = nativeEvent.ctrlKey;
    this.m2p_1 = nativeEvent.metaKey;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = nativeEvent.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.n2p_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = nativeEvent.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.o2p_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.p2p_1 = nativeEvent.offsetX;
    this.q2p_1 = nativeEvent.offsetY;
    this.r2p_1 = nativeEvent.pageX;
    this.s2p_1 = nativeEvent.pageY;
    this.t2p_1 = nativeEvent.region;
    this.u2p_1 = nativeEvent.relatedTarget;
    this.v2p_1 = nativeEvent.screenX;
    this.w2p_1 = nativeEvent.screenY;
    this.x2p_1 = nativeEvent.shiftKey;
    this.y2p_1 = nativeEvent.x;
    this.z2p_1 = nativeEvent.y;
    this.a2q_1 = 0;
  }
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).v2c = id;
  protoOf(AttrsScopeBuilder).w2c = tabIndex;
  protoOf(AttrsScopeBuilder).x2c = spellCheck;
  protoOf(EventsListenerScopeBuilder).a2d = onClick;
  protoOf(EventsListenerScopeBuilder).b2d = onKeyUp;
  protoOf(StyleScopeBuilder).s2j = property;
  protoOf(StyleScopeBuilder).t2j = property_0;
  protoOf(StyleScopeBuilder).y2j = variable;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.e2();
  });
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.f2k();
  });
  protoOf(StyleSheet).z2k = style_0;
  protoOf(StyleSheet).b2l = style;
  protoOf(StyleSheet).c2l = invoke;
  protoOf(StyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheet).d2l = get_hover;
  protoOf(CSSRulesHolderState).x2k = add;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  Companion_instance_6 = new Companion_6();
  Companion_instance_7 = new Companion_7();
  Companion_instance_8 = new Companion_8();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = StyleSheet_init_$Init$;
  _.$_$.b = StyleSheet_init_$Create$;
  _.$_$.c = Text_getInstance;
  _.$_$.d = Companion_instance_3;
  _.$_$.e = Companion_instance_4;
  _.$_$.f = From_getInstance;
  _.$_$.g = To_getInstance;
  _.$_$.h = Companion_instance_1;
  _.$_$.i = Companion_instance_5;
  _.$_$.j = Companion_instance_6;
  _.$_$.k = Companion_instance_0;
  _.$_$.l = Companion_instance_2;
  _.$_$.m = classes;
  _.$_$.n = id;
  _.$_$.o = spellCheck;
  _.$_$.p = tabIndex;
  _.$_$.q = AttrsScope;
  _.$_$.r = onClick;
  _.$_$.s = onKeyUp;
  _.$_$.t = autoComplete;
  _.$_$.u = placeholder;
  _.$_$.v = readOnly;
  _.$_$.w = required;
  _.$_$.x = CSSBorder;
  _.$_$.y = CSSGroupingRuleDeclaration;
  _.$_$.z = CSSKeyframeRuleDeclaration;
  _.$_$.a1 = CSSKeyframesRuleDeclaration;
  _.$_$.b1 = MediaFeature;
  _.$_$.c1 = Raw;
  _.$_$.d1 = CSSMediaRuleDeclaration;
  _.$_$.e1 = property;
  _.$_$.f1 = property_0;
  _.$_$.g1 = variable;
  _.$_$.h1 = StyleScopeBuilder;
  _.$_$.i1 = StyleScope;
  _.$_$.j1 = StyleSheet;
  _.$_$.k1 = alignItems;
  _.$_$.l1 = alignSelf;
  _.$_$.m1 = backgroundColor;
  _.$_$.n1 = borderRadius;
  _.$_$.o1 = borderRadius_0;
  _.$_$.p1 = border;
  _.$_$.q1 = bottom;
  _.$_$.r1 = boxSizing;
  _.$_$.s1 = color;
  _.$_$.t1 = color_0;
  _.$_$.u1 = columnGap;
  _.$_$.v1 = get_cssRem;
  _.$_$.w1 = get_deg;
  _.$_$.x1 = display;
  _.$_$.y1 = get_em;
  _.$_$.z1 = filter;
  _.$_$.a2 = flexDirection;
  _.$_$.b2 = flexGrow;
  _.$_$.c2 = fontFamily;
  _.$_$.d2 = fontSize;
  _.$_$.e2 = get_fr;
  _.$_$.f2 = gap;
  _.$_$.g2 = gridArea;
  _.$_$.h2 = gridAutoColumns;
  _.$_$.i2 = gridAutoRows;
  _.$_$.j2 = gridTemplateColumns;
  _.$_$.k2 = gridTemplateRows;
  _.$_$.l2 = height;
  _.$_$.m2 = justifyContent;
  _.$_$.n2 = left;
  _.$_$.o2 = lineHeight;
  _.$_$.p2 = marginBottom;
  _.$_$.q2 = margin;
  _.$_$.r2 = maxHeight;
  _.$_$.s2 = maxWidth;
  _.$_$.t2 = media;
  _.$_$.u2 = minHeight;
  _.$_$.v2 = minWidth;
  _.$_$.w2 = get_ms;
  _.$_$.x2 = opacity;
  _.$_$.y2 = opacity_0;
  _.$_$.z2 = padding;
  _.$_$.a3 = get_percent;
  _.$_$.b3 = position;
  _.$_$.c3 = get_px;
  _.$_$.d3 = rgba;
  _.$_$.e3 = rgb;
  _.$_$.f3 = right;
  _.$_$.g3 = rowGap;
  _.$_$.h3 = style_1;
  _.$_$.i3 = times;
  _.$_$.j3 = top;
  _.$_$.k3 = transform;
  _.$_$.l3 = unaryMinus;
  _.$_$.m3 = get_vh;
  _.$_$.n3 = width_0;
  _.$_$.o3 = width;
  _.$_$.p3 = A_0;
  _.$_$.q3 = Button_1;
  _.$_$.r3 = Div_0;
  _.$_$.s3 = ElementBuilder;
  _.$_$.t3 = Img_0;
  _.$_$.u3 = Input_0;
  _.$_$.v3 = Label_0;
  _.$_$.w3 = P_0;
  _.$_$.x3 = Span_0;
  _.$_$.y3 = Style_0;
  _.$_$.z3 = TagElement;
  _.$_$.a4 = TextArea_0;
  _.$_$.b4 = Text_1;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
