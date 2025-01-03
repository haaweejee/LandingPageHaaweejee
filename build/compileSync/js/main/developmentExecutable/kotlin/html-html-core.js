(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-internal-html-core-runtime.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-internal-html-core-runtime.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-html-core'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'html-html-core'.");
    }
    globalThis['html-html-core'] = factory(typeof globalThis['html-html-core'] === 'undefined' ? {} : globalThis['html-html-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['html-internal-html-core-runtime'], globalThis['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.gc;
  var THROW_CCE = kotlin_kotlin.$_$.jf;
  var Annotation = kotlin_kotlin.$_$.ve;
  var initMetadataForClass = kotlin_kotlin.$_$.db;
  var VOID = kotlin_kotlin.$_$.f;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.eb;
  var asList = kotlin_kotlin.$_$.e6;
  var initMetadataForInterface = kotlin_kotlin.$_$.gb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var addAll = kotlin_kotlin.$_$.w5;
  var to = kotlin_kotlin.$_$.ng;
  var Pair = kotlin_kotlin.$_$.gf;
  var initMetadataForObject = kotlin_kotlin.$_$.ib;
  var THROW_IAE = kotlin_kotlin.$_$.kf;
  var enumEntries = kotlin_kotlin.$_$.ia;
  var Enum = kotlin_kotlin.$_$.ye;
  var toString = kotlin_kotlin.$_$.jc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var NamedEventListener = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.d;
  var equals = kotlin_kotlin.$_$.va;
  var toString_0 = kotlin_kotlin.$_$.mg;
  var toBoolean = kotlin_kotlin.$_$.je;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var charSequenceLength = kotlin_kotlin.$_$.sa;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.w;
  var ensureNotNull = kotlin_kotlin.$_$.cg;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var hashCode = kotlin_kotlin.$_$.cb;
  var joinToString = kotlin_kotlin.$_$.m7;
  var getStringHashCode = kotlin_kotlin.$_$.bb;
  var objectCreate = kotlin_kotlin.$_$.fc;
  var toList = kotlin_kotlin.$_$.f9;
  var numberToDouble = kotlin_kotlin.$_$.dc;
  var getNumberHashCode = kotlin_kotlin.$_$.za;
  var defineProp = kotlin_kotlin.$_$.ua;
  var isInterface = kotlin_kotlin.$_$.sb;
  var Collection = kotlin_kotlin.$_$.w4;
  var FunctionAdapter = kotlin_kotlin.$_$.ka;
  var ReadOnlyProperty = kotlin_kotlin.$_$.lc;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var toMutableList = kotlin_kotlin.$_$.i9;
  var getBooleanHashCode = kotlin_kotlin.$_$.xa;
  var listOf = kotlin_kotlin.$_$.v7;
  var listOf_0 = kotlin_kotlin.$_$.u7;
  var listOfNotNull = kotlin_kotlin.$_$.t7;
  var joinToString_0 = kotlin_kotlin.$_$.n7;
  var contains = kotlin_kotlin.$_$.hd;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var emptyList = kotlin_kotlin.$_$.z6;
  var copyToArray = kotlin_kotlin.$_$.w6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var DOMScope = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.lg;
  var SideEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var lazy = kotlin_kotlin.$_$.eg;
  var DisposableEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var KProperty1 = kotlin_kotlin.$_$.wc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ab;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var mapOf = kotlin_kotlin.$_$.y7;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ExperimentalComposeWebApi, 'ExperimentalComposeWebApi', VOID, VOID, [Annotation]);
  initMetadataForCompanion(Companion);
  function onContextMenu(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('contextmenu', listener));
  }
  function onClick(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('click', listener));
  }
  function onDoubleClick(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('dblclick', listener));
  }
  function onMouseDown(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('mousedown', listener));
  }
  function onMouseUp(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('mouseup', listener));
  }
  function onMouseEnter(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('mouseenter', listener));
  }
  function onMouseLeave(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('mouseleave', listener));
  }
  function onMouseMove(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('mousemove', listener));
  }
  function onMouseOut(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('mouseout', listener));
  }
  function onMouseOver(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseEventListener('mouseover', listener));
  }
  function onWheel(listener) {
    this.registerEventListener_oiyxlj_k$(new MouseWheelEventListener('wheel', listener));
  }
  function onDrag(listener) {
    this.registerEventListener_oiyxlj_k$(new DragEventListener('drag', listener));
  }
  function onDrop(listener) {
    this.registerEventListener_oiyxlj_k$(new DragEventListener('drop', listener));
  }
  function onDragStart(listener) {
    this.registerEventListener_oiyxlj_k$(new DragEventListener('dragstart', listener));
  }
  function onDragEnd(listener) {
    this.registerEventListener_oiyxlj_k$(new DragEventListener('dragend', listener));
  }
  function onDragOver(listener) {
    this.registerEventListener_oiyxlj_k$(new DragEventListener('dragover', listener));
  }
  function onDragEnter(listener) {
    this.registerEventListener_oiyxlj_k$(new DragEventListener('dragenter', listener));
  }
  function onDragLeave(listener) {
    this.registerEventListener_oiyxlj_k$(new DragEventListener('dragleave', listener));
  }
  function onCopy(listener) {
    this.registerEventListener_oiyxlj_k$(new ClipboardEventListener('copy', listener));
  }
  function onCut(listener) {
    this.registerEventListener_oiyxlj_k$(new ClipboardEventListener('cut', listener));
  }
  function onPaste(listener) {
    this.registerEventListener_oiyxlj_k$(new ClipboardEventListener('paste', listener));
  }
  function onKeyDown(listener) {
    this.registerEventListener_oiyxlj_k$(new KeyboardEventListener('keydown', listener));
  }
  function onKeyUp(listener) {
    this.registerEventListener_oiyxlj_k$(new KeyboardEventListener('keyup', listener));
  }
  function onFocus(listener) {
    this.registerEventListener_oiyxlj_k$(new FocusEventListener('focus', listener));
  }
  function onBlur(listener) {
    this.registerEventListener_oiyxlj_k$(new FocusEventListener('blur', listener));
  }
  function onFocusIn(listener) {
    this.registerEventListener_oiyxlj_k$(new FocusEventListener('focusin', listener));
  }
  function onFocusOut(listener) {
    this.registerEventListener_oiyxlj_k$(new FocusEventListener('focusout', listener));
  }
  function onTouchCancel(listener) {
    this.registerEventListener_oiyxlj_k$(new TouchEventListener('touchcancel', listener));
  }
  function onTouchMove(listener) {
    this.registerEventListener_oiyxlj_k$(new TouchEventListener('touchmove', listener));
  }
  function onTouchEnd(listener) {
    this.registerEventListener_oiyxlj_k$(new TouchEventListener('touchend', listener));
  }
  function onTouchStart(listener) {
    this.registerEventListener_oiyxlj_k$(new TouchEventListener('touchstart', listener));
  }
  function onAnimationEnd(listener) {
    this.registerEventListener_oiyxlj_k$(new AnimationEventListener('animationend', listener));
  }
  function onAnimationIteration(listener) {
    this.registerEventListener_oiyxlj_k$(new AnimationEventListener('animationiteration', listener));
  }
  function onAnimationStart(listener) {
    this.registerEventListener_oiyxlj_k$(new AnimationEventListener('animationstart', listener));
  }
  function onScroll(listener) {
    this.registerEventListener_oiyxlj_k$(new SyntheticEventListener('scroll', listener));
  }
  function addEventListener(eventName, listener) {
    this.registerEventListener_oiyxlj_k$(new SyntheticEventListener(eventName, listener));
  }
  function addEventListener_0(eventName, listener) {
    this.registerEventListener_oiyxlj_k$(new SyntheticEventListener(eventName, listener));
  }
  initMetadataForInterface(EventsListenerScope, 'EventsListenerScope');
  function classes(classes) {
    return this.classes_ephr7k_k$(asList(classes));
  }
  function id(value) {
    return this.attr_w68641_k$('id', value);
  }
  function hidden() {
    return this.attr_w68641_k$('hidden', 'true');
  }
  function title(value) {
    return this.attr_w68641_k$('title', value);
  }
  function dir(value) {
    return this.attr_w68641_k$('dir', value.get_dirStr_cdza7h_k$());
  }
  function draggable(value) {
    return this.attr_w68641_k$('draggable', value.get_str_18ivy0_k$());
  }
  function contentEditable(value) {
    return this.attr_w68641_k$('contenteditable', value.toString());
  }
  function lang(value) {
    return this.attr_w68641_k$('lang', value);
  }
  function tabIndex(value) {
    return this.attr_w68641_k$('tabindex', value.toString());
  }
  function spellCheck(value) {
    return this.attr_w68641_k$('spellcheck', value.toString());
  }
  function inputMode(value) {
    return this.attr_w68641_k$('inputmode', value);
  }
  function inputMode_0(value) {
    return this.attr_w68641_k$('inputmode', value.get_str_18ivy0_k$());
  }
  initMetadataForInterface(AttrsScope, 'AttrsScope', VOID, VOID, [EventsListenerScope]);
  initMetadataForClass(AttrsScopeBuilder, 'AttrsScopeBuilder', AttrsScopeBuilder, VOID, [AttrsScope, EventsListenerScope]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', EventsListenerScopeBuilder, VOID, [EventsListenerScope]);
  initMetadataForClass(HtmlAttrMarker, 'HtmlAttrMarker', VOID, VOID, [Annotation]);
  initMetadataForClass(DirType, 'DirType');
  initMetadataForObject(Ltr, 'Ltr', VOID, DirType);
  initMetadataForObject(Rtl, 'Rtl', VOID, DirType);
  initMetadataForObject(Auto, 'Auto', VOID, DirType);
  initMetadataForCompanion(Companion_1);
  initMetadataForInterface(AutoComplete, 'AutoComplete');
  initMetadataForClass(InputMode, 'InputMode', VOID, Enum);
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
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Draggable, 'Draggable', VOID, Enum);
  initMetadataForClass(SyntheticEventListener, 'SyntheticEventListener', VOID, VOID, [NamedEventListener]);
  initMetadataForClass(InputEventListener, 'InputEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(MouseWheelEventListener, 'MouseWheelEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(KeyboardEventListener, 'KeyboardEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(TouchEventListener, 'TouchEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(AnimationEventListener, 'AnimationEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(SelectEventListener, 'SelectEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(ClipboardEventListener, 'ClipboardEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(FocusEventListener, 'FocusEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(ChangeEventListener, 'ChangeEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(DragEventListener, 'DragEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(MouseEventListener, 'MouseEventListener', VOID, SyntheticEventListener);
  initMetadataForClass(InputAttrsScope, 'InputAttrsScope', VOID, VOID, [AttrsScope]);
  initMetadataForClass(DisposeRadioGroupEffect$1$$inlined$onDispose$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(TextAreaAttrsScope, 'TextAreaAttrsScope', VOID, VOID, [AttrsScope]);
  function property(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.property_npxg1h_k$(propertyName, value);
  }
  function property_0(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.property_npxg1h_k$(propertyName, value);
  }
  function variable(variableName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.variable_px6kuc_k$(variableName, value);
  }
  function variable_0(variableName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.variable_px6kuc_k$(variableName, value);
  }
  function invoke(_this__u8e3s4, value) {
    this.variable_kvosx8_k$(_this__u8e3s4.name_1, toString(value));
  }
  function invoke_0(_this__u8e3s4, value) {
    this.variable_kvosx8_k$(_this__u8e3s4.name_1, value);
  }
  function invoke_1(_this__u8e3s4, value) {
    this.variable_j4rwe5_k$(_this__u8e3s4.name_1, value);
  }
  initMetadataForInterface(StyleScope, 'StyleScope');
  initMetadataForInterface(CSSStyleRuleBuilder, 'CSSStyleRuleBuilder', VOID, VOID, [StyleScope]);
  function add(selector, style) {
    this.add_19esmm_k$(new CSSStyleRuleDeclaration(selector, style));
  }
  initMetadataForInterface(CSSRulesHolder, 'CSSRulesHolder');
  function selector(selector) {
    return new RawSelector(selector);
  }
  function combine(selectors) {
    return new Combine_1(toMutableList(selectors));
  }
  function plus(_this__u8e3s4, selector) {
    var tmp;
    if (_this__u8e3s4 instanceof Combine_1) {
      _this__u8e3s4.selectors_1.add_utx5q5_k$(selector);
      tmp = _this__u8e3s4;
    } else {
      if (selector instanceof Combine_1) {
        selector.selectors_1.add_dl6gt3_k$(0, _this__u8e3s4);
        tmp = selector;
      } else {
        tmp = this.combine_s8rvtq_k$([_this__u8e3s4, selector]);
      }
    }
    return tmp;
  }
  function plus_0(_this__u8e3s4, selector) {
    var tmp;
    if (_this__u8e3s4 instanceof Combine_1) {
      _this__u8e3s4.selectors_1.add_utx5q5_k$(this.selector_430xff_k$(selector));
      tmp = _this__u8e3s4;
    } else {
      tmp = this.combine_s8rvtq_k$([_this__u8e3s4, this.selector_430xff_k$(selector)]);
    }
    return tmp;
  }
  function returnUniversalSelector() {
    return get_Universal();
  }
  function get_universal() {
    return get_Universal();
  }
  function type(type) {
    return new RawSelector(type);
  }
  function className(className) {
    return new RawSelector('.' + className);
  }
  function id_0(id) {
    return new RawSelector('#' + id);
  }
  function attr(name, value, operator, caseSensitive) {
    return new Attribute(name, value, operator, caseSensitive);
  }
  function attr$default(name, value, operator, caseSensitive, $super) {
    value = value === VOID ? null : value;
    operator = operator === VOID ? Operator_Equals_getInstance() : operator;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attr_1eatx7_k$(name, value, operator, caseSensitive) : attr(name, value, operator, caseSensitive);
  }
  function attrEquals(name, value, caseSensitive) {
    return this.attr_1eatx7_k$(name, value, Operator_Equals_getInstance(), caseSensitive);
  }
  function attrEquals$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrEquals_vwtgpq_k$(name, value, caseSensitive) : attrEquals(name, value, caseSensitive);
  }
  function attrListContains(name, value, caseSensitive) {
    return this.attr_1eatx7_k$(name, value, Operator_ListContains_getInstance(), caseSensitive);
  }
  function attrListContains$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrListContains_rjrrsw_k$(name, value, caseSensitive) : attrListContains(name, value, caseSensitive);
  }
  function attrHyphened(name, value, caseSensitive) {
    return this.attr_1eatx7_k$(name, value, Operator_Hyphened_getInstance(), caseSensitive);
  }
  function attrHyphened$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrHyphened_2fosj8_k$(name, value, caseSensitive) : attrHyphened(name, value, caseSensitive);
  }
  function attrPrefixed(name, value, caseSensitive) {
    return this.attr_1eatx7_k$(name, value, Operator_Prefixed_getInstance(), caseSensitive);
  }
  function attrPrefixed$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrPrefixed_7hjetw_k$(name, value, caseSensitive) : attrPrefixed(name, value, caseSensitive);
  }
  function attrSuffixed(name, value, caseSensitive) {
    return this.attr_1eatx7_k$(name, value, Operator_Suffixed_getInstance(), caseSensitive);
  }
  function attrSuffixed$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrSuffixed_6vqc43_k$(name, value, caseSensitive) : attrSuffixed(name, value, caseSensitive);
  }
  function attrContains(name, value, caseSensitive) {
    return this.attr_1eatx7_k$(name, value, Operator_Contains_getInstance(), caseSensitive);
  }
  function attrContains$default(name, value, caseSensitive, $super) {
    value = value === VOID ? null : value;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    return $super === VOID ? this.attrContains_fr4p8e_k$(name, value, caseSensitive) : attrContains(name, value, caseSensitive);
  }
  function group(selectors) {
    return new Group(toList(selectors));
  }
  function descendant(parent, selected) {
    return this.desc_lky2kv_k$(parent, selected);
  }
  function desc(parent, selected) {
    return new Descendant(parent, selected);
  }
  function desc_0(parent, selected) {
    return this.desc_lky2kv_k$(parent, this.selector_430xff_k$(selected));
  }
  function desc_1(parent, selected) {
    return this.desc_lky2kv_k$(this.selector_430xff_k$(parent), selected);
  }
  function desc_2(parent, selected) {
    return this.desc_lky2kv_k$(this.selector_430xff_k$(parent), this.selector_430xff_k$(selected));
  }
  function child(parent, selected) {
    return new Child(parent, selected);
  }
  function sibling(sibling, selected) {
    return new Sibling(sibling, selected);
  }
  function adjacent(sibling, selected) {
    return new Adjacent(sibling, selected);
  }
  function returnHoverSelector() {
    return this.get_hover_islez7_k$();
  }
  function hover(selector) {
    return this.plus_33ujzs_k$(selector, this.get_hover_islez7_k$());
  }
  function get_anyLink() {
    return new PseudoClassInternal('any-link');
  }
  function get_link() {
    return new PseudoClassInternal('link');
  }
  function get_visited() {
    return new PseudoClassInternal('visited');
  }
  function get_localLink() {
    return new PseudoClassInternal('local-link');
  }
  function get_target() {
    return new PseudoClassInternal('target');
  }
  function get_targetWithin() {
    return new PseudoClassInternal('target-within');
  }
  function get_scope() {
    return new PseudoClassInternal('scope');
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  function get_active() {
    return new PseudoClassInternal('active');
  }
  function get_focus() {
    return new PseudoClassInternal('focus');
  }
  function get_focusVisible() {
    return new PseudoClassInternal('focus-visible');
  }
  function get_playing() {
    return new PseudoClassInternal('playing');
  }
  function get_paused() {
    return new PseudoClassInternal('paused');
  }
  function get_autofill() {
    return new PseudoClassInternal('autofill');
  }
  function get_enabled() {
    return new PseudoClassInternal('enabled');
  }
  function get_disabled() {
    return new PseudoClassInternal('disabled');
  }
  function get_readOnly() {
    return new PseudoClassInternal('read-only');
  }
  function get_readWrite() {
    return new PseudoClassInternal('read-write');
  }
  function get_placeholderShown() {
    return new PseudoClassInternal('placeholder-shown');
  }
  function get_default() {
    return new PseudoClassInternal('default');
  }
  function get_checked() {
    return new PseudoClassInternal('checked');
  }
  function get_indeterminate() {
    return new PseudoClassInternal('indeterminate');
  }
  function get_blank() {
    return new PseudoClassInternal('blank');
  }
  function get_valid() {
    return new PseudoClassInternal('valid');
  }
  function get_invalid() {
    return new PseudoClassInternal('invalid');
  }
  function get_inRange() {
    return new PseudoClassInternal('in-range');
  }
  function get_outOfRange() {
    return new PseudoClassInternal('out-of-range');
  }
  function get_required() {
    return new PseudoClassInternal('required');
  }
  function get_optional() {
    return new PseudoClassInternal('optional');
  }
  function get_userInvalid() {
    return new PseudoClassInternal('user-invalid');
  }
  function get_root() {
    return new PseudoClassInternal('root');
  }
  function get_empty() {
    return new PseudoClassInternal('empty');
  }
  function get_first() {
    return new PseudoClassInternal('first');
  }
  function get_firstChild() {
    return new PseudoClassInternal('first-child');
  }
  function get_lastChild() {
    return new PseudoClassInternal('last-child');
  }
  function get_onlyChild() {
    return new PseudoClassInternal('only-child');
  }
  function get_firstOfType() {
    return new PseudoClassInternal('first-of-type');
  }
  function get_lastOfType() {
    return new PseudoClassInternal('last-of-type');
  }
  function get_onlyOfType() {
    return new PseudoClassInternal('only-of-type');
  }
  function get_host() {
    return new PseudoClassInternal('host');
  }
  function get_defined() {
    return new PseudoClassInternal('defined');
  }
  function get_left() {
    return new PseudoClassInternal('left');
  }
  function get_right() {
    return new PseudoClassInternal('right');
  }
  function lang_0(langCode) {
    return new Lang(langCode);
  }
  function nthChild(nth) {
    return new NthChild(nth);
  }
  function nthLastChild(nth) {
    return new NthLastChild(nth);
  }
  function nthOfType(nth) {
    return new NthOfType(nth);
  }
  function nthLastOfType(nth) {
    return new NthLastOfType(nth);
  }
  function host(selector) {
    return new Host(selector);
  }
  function not(selector) {
    return new Not_0(selector);
  }
  function get_after() {
    return new PseudoElementInternal('after');
  }
  function get_before() {
    return new PseudoElementInternal('before');
  }
  function get_cue() {
    return new PseudoElementInternal('cue');
  }
  function get_cueRegion() {
    return new PseudoElementInternal('cue-region');
  }
  function get_firstLetter() {
    return new PseudoElementInternal('first-letter');
  }
  function get_firstLine() {
    return new PseudoElementInternal('first-line');
  }
  function get_fileSelectorButton() {
    return new PseudoElementInternal('file-selector-button');
  }
  function get_selection() {
    return new PseudoElementInternal('selection');
  }
  function slotted(selector) {
    return new Slotted(selector);
  }
  initMetadataForInterface(SelectorsScope, 'SelectorsScope');
  function invoke_2(_this__u8e3s4, cssRule) {
    this.style_r4zx12_k$(_this__u8e3s4, cssRule);
  }
  function style(_this__u8e3s4, cssRule) {
    this.style_r4zx12_k$(_this__u8e3s4, cssRule);
  }
  function invoke_3(_this__u8e3s4, cssRule) {
    this.style_r4zx12_k$(new RawSelector(_this__u8e3s4), cssRule);
  }
  function style_0(_this__u8e3s4, cssRule) {
    this.style_r4zx12_k$(new RawSelector(_this__u8e3s4), cssRule);
  }
  initMetadataForInterface(GenericStyleSheetBuilder, 'GenericStyleSheetBuilder', VOID, VOID, [CSSRulesHolder, SelectorsScope]);
  initMetadataForInterface(CSSBuilder, 'CSSBuilder', VOID, VOID, [CSSStyleRuleBuilder, GenericStyleSheetBuilder]);
  initMetadataForInterface(StyleHolder, 'StyleHolder');
  initMetadataForClass(StyleScopeBuilder, 'StyleScopeBuilder', StyleScopeBuilder, VOID, [StyleScope, StyleHolder]);
  initMetadataForClass(CSSRuleBuilderImpl, 'CSSRuleBuilderImpl', CSSRuleBuilderImpl, StyleScopeBuilder, [CSSStyleRuleBuilder, StyleScopeBuilder]);
  initMetadataForClass(CSSBuilderImpl, 'CSSBuilderImpl', VOID, CSSRuleBuilderImpl, [CSSRuleBuilderImpl, CSSBuilder, CSSRulesHolder]);
  initMetadataForCompanion(Companion_3);
  initMetadataForInterface(StylePropertyEnum, 'StylePropertyEnum');
  initMetadataForInterface(Position, 'Position', VOID, VOID, [StylePropertyEnum]);
  initMetadataForCompanion(Companion_4);
  initMetadataForInterface(AnimationFillMode, 'AnimationFillMode', VOID, VOID, [StylePropertyEnum]);
  initMetadataForCompanion(Companion_5);
  initMetadataForInterface(AlignItems, 'AlignItems', VOID, VOID, [StylePropertyEnum]);
  initMetadataForCompanion(Companion_6);
  initMetadataForInterface(JustifyContent, 'JustifyContent', VOID, VOID, [StylePropertyEnum]);
  initMetadataForCompanion(Companion_7);
  initMetadataForInterface(LineStyle, 'LineStyle', VOID, VOID, [StylePropertyEnum]);
  initMetadataForCompanion(Companion_8);
  initMetadataForInterface(DisplayStyle, 'DisplayStyle', VOID, VOID, [StylePropertyEnum]);
  initMetadataForCompanion(Companion_9);
  initMetadataForInterface(AnimationTimingFunction, 'AnimationTimingFunction', VOID, VOID, [StylePropertyEnum]);
  initMetadataForCompanion(Companion_10);
  initMetadataForInterface(FlexDirection, 'FlexDirection', VOID, VOID, [StylePropertyEnum]);
  initMetadataForCompanion(Companion_11);
  initMetadataForInterface(AlignSelf, 'AlignSelf', VOID, VOID, [StylePropertyEnum]);
  initMetadataForCompanion(Companion_12);
  initMetadataForInterface(AnimationDirection, 'AnimationDirection', VOID, VOID, [StylePropertyEnum]);
  initMetadataForCompanion(Companion_13);
  initMetadataForInterface(AnimationPlayState, 'AnimationPlayState', VOID, VOID, [StylePropertyEnum]);
  initMetadataForCompanion(Companion_14);
  initMetadataForInterface(StepPosition, 'StepPosition', VOID, VOID, [StylePropertyEnum]);
  initMetadataForClass(CSSKeyframe, 'CSSKeyframe');
  initMetadataForObject(From, 'From', VOID, CSSKeyframe);
  initMetadataForObject(To, 'To', VOID, CSSKeyframe);
  initMetadataForClass(Percentage, 'Percentage', VOID, CSSKeyframe);
  initMetadataForClass(Combine, 'Combine', VOID, CSSKeyframe);
  initMetadataForInterface(CSSRuleDeclaration, 'CSSRuleDeclaration');
  initMetadataForInterface(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration');
  initMetadataForClass(CSSKeyframeRuleDeclaration, 'CSSKeyframeRuleDeclaration', VOID, VOID, [CSSRuleDeclaration, CSSStyledRuleDeclaration]);
  initMetadataForInterface(CSSNamedKeyframes, 'CSSNamedKeyframes');
  initMetadataForClass(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration', VOID, VOID, [CSSRuleDeclaration, CSSNamedKeyframes]);
  initMetadataForClass(CSSKeyframesBuilder, 'CSSKeyframesBuilder', CSSKeyframesBuilder);
  initMetadataForClass(Enum_0, 'Enum', VOID, Enum);
  initMetadataForInterface(CSSMediaQuery, 'CSSMediaQuery');
  initMetadataForInterface(Invertible, 'Invertible', VOID, VOID, [CSSMediaQuery]);
  initMetadataForInterface(Combinable, 'Combinable', VOID, VOID, [CSSMediaQuery]);
  initMetadataForInterface(Atomic, 'Atomic', VOID, VOID, [Invertible, Combinable]);
  initMetadataForClass(Raw, 'Raw', VOID, VOID, [Atomic]);
  initMetadataForClass(MediaType, 'MediaType', VOID, VOID, [Atomic]);
  initMetadataForClass(MediaFeature, 'MediaFeature', VOID, VOID, [CSSMediaQuery, Atomic]);
  initMetadataForClass(NotFeature, 'NotFeature', VOID, VOID, [CSSMediaQuery]);
  initMetadataForClass(And, 'And', VOID, VOID, [CSSMediaQuery, Invertible, Combinable]);
  initMetadataForClass(Not, 'Not', VOID, VOID, [CSSMediaQuery]);
  initMetadataForClass(Combine_0, 'Combine', VOID, VOID, [CSSMediaQuery]);
  initMetadataForClass(Only, 'Only', VOID, VOID, [CSSMediaQuery, Invertible]);
  initMetadataForClass(Or, 'Or');
  initMetadataForInterface(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration', VOID, VOID, [CSSRuleDeclaration]);
  initMetadataForClass(CSSMediaRuleDeclaration, 'CSSMediaRuleDeclaration', VOID, VOID, [CSSGroupingRuleDeclaration]);
  initMetadataForClass(CSSStyleRuleDeclaration, 'CSSStyleRuleDeclaration', VOID, VOID, [CSSRuleDeclaration, CSSStyledRuleDeclaration]);
  initMetadataForInterface(CSSUnit, 'CSSUnit');
  initMetadataForInterface(CSSUnitTime, 'CSSUnitTime', VOID, VOID, [CSSUnit]);
  initMetadataForInterface(CSSUnitLengthOrPercentage, 'CSSUnitLengthOrPercentage', VOID, VOID, [CSSUnit]);
  initMetadataForInterface(CSSUnitLength, 'CSSUnitLength', VOID, VOID, [CSSUnitLengthOrPercentage]);
  initMetadataForInterface(CSSUnitPercentage, 'CSSUnitPercentage', VOID, VOID, [CSSUnitLengthOrPercentage]);
  initMetadataForInterface(percent, 'percent', VOID, VOID, [CSSUnitPercentage]);
  initMetadataForInterface(CSSUnitRel, 'CSSUnitRel', VOID, VOID, [CSSUnitLength]);
  initMetadataForInterface(em, 'em', VOID, VOID, [CSSUnitRel]);
  initMetadataForInterface(ex, 'ex', VOID, VOID, [CSSUnitRel]);
  initMetadataForInterface(ch, 'ch', VOID, VOID, [CSSUnitRel]);
  initMetadataForInterface(ic, 'ic', VOID, VOID, [CSSUnitRel]);
  initMetadataForInterface(rem, 'rem', VOID, VOID, [CSSUnitRel]);
  initMetadataForInterface(lh, 'lh', VOID, VOID, [CSSUnitRel]);
  initMetadataForInterface(rlh, 'rlh', VOID, VOID, [CSSUnitRel]);
  initMetadataForInterface(vw, 'vw', VOID, VOID, [CSSUnitRel]);
  initMetadataForInterface(vh, 'vh', VOID, VOID, [CSSUnitRel]);
  initMetadataForInterface(vi, 'vi', VOID, VOID, [CSSUnitRel]);
  initMetadataForInterface(vb, 'vb', VOID, VOID, [CSSUnitRel]);
  initMetadataForInterface(vmin, 'vmin', VOID, VOID, [CSSUnitRel]);
  initMetadataForInterface(vmax, 'vmax', VOID, VOID, [CSSUnitRel]);
  initMetadataForInterface(cm, 'cm', VOID, VOID, [CSSUnitRel]);
  initMetadataForInterface(mm, 'mm', VOID, VOID, [CSSUnitRel]);
  initMetadataForInterface(Q, 'Q', VOID, VOID, [CSSUnitRel]);
  initMetadataForInterface(CSSUnitAbs, 'CSSUnitAbs', VOID, VOID, [CSSUnitLength]);
  initMetadataForInterface(pt, 'pt', VOID, VOID, [CSSUnitAbs]);
  initMetadataForInterface(pc, 'pc', VOID, VOID, [CSSUnitAbs]);
  initMetadataForInterface(px, 'px', VOID, VOID, [CSSUnitAbs]);
  initMetadataForInterface(CSSUnitAngle, 'CSSUnitAngle', VOID, VOID, [CSSUnit]);
  initMetadataForInterface(deg, 'deg', VOID, VOID, [CSSUnitAngle]);
  initMetadataForInterface(grad, 'grad', VOID, VOID, [CSSUnitAngle]);
  initMetadataForInterface(rad, 'rad', VOID, VOID, [CSSUnitAngle]);
  initMetadataForInterface(turn, 'turn', VOID, VOID, [CSSUnitAngle]);
  initMetadataForInterface(s, 's', VOID, VOID, [CSSUnitTime]);
  initMetadataForInterface(ms, 'ms', VOID, VOID, [CSSUnitTime]);
  initMetadataForInterface(CSSUnitFrequency, 'CSSUnitFrequency', VOID, VOID, [CSSUnit]);
  initMetadataForInterface(Hz, 'Hz', VOID, VOID, [CSSUnitFrequency]);
  initMetadataForInterface(kHz, 'kHz', VOID, VOID, [CSSUnitFrequency]);
  initMetadataForInterface(CSSUnitResolution, 'CSSUnitResolution', VOID, VOID, [CSSUnit]);
  initMetadataForInterface(dpi, 'dpi', VOID, VOID, [CSSUnitResolution]);
  initMetadataForInterface(dpcm, 'dpcm', VOID, VOID, [CSSUnitResolution]);
  initMetadataForInterface(dppx, 'dppx', VOID, VOID, [CSSUnitResolution]);
  initMetadataForInterface(CSSUnitFlex, 'CSSUnitFlex', VOID, VOID, [CSSUnit]);
  initMetadataForInterface(fr, 'fr', VOID, VOID, [CSSUnitFlex]);
  initMetadataForInterface(number, 'number', VOID, VOID, [CSSUnit]);
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(CSSUnitValueTyped, 'CSSUnitValueTyped');
  initMetadataForClass(RGB, 'RGB');
  initMetadataForClass(RGBA, 'RGBA');
  initMetadataForClass(HSL, 'HSL');
  initMetadataForClass(HSLA, 'HSLA');
  initMetadataForObject(Color_0, 'Color');
  initMetadataForClass(RGB_0, 'RGB');
  initMetadataForClass(RGBA_0, 'RGBA');
  initMetadataForInterface(CSSVariable, 'CSSVariable');
  initMetadataForClass(CSSStyleVariable, 'CSSStyleVariable', VOID, VOID, [CSSVariable]);
  initMetadataForClass(StylePropertyDeclaration, 'StylePropertyDeclaration');
  initMetadataForClass(sam$kotlin_properties_ReadOnlyProperty$0, 'sam$kotlin_properties_ReadOnlyProperty$0', VOID, VOID, [ReadOnlyProperty, FunctionAdapter]);
  initMetadataForClass(CSSSelector, 'CSSSelector');
  initMetadataForClass(StyleSheet$CSSHolder$provideDelegate$selector$1, VOID, VOID, CSSSelector);
  initMetadataForClass(sam$kotlin_properties_ReadOnlyProperty$0_0, 'sam$kotlin_properties_ReadOnlyProperty$0', VOID, VOID, [ReadOnlyProperty, FunctionAdapter]);
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(CSSSelfSelector, 'CSSSelfSelector', CSSSelfSelector, CSSSelector);
  initMetadataForClass(CSSHolder, 'CSSHolder');
  initMetadataForClass(CSSKeyframesHolder, 'CSSKeyframesHolder');
  function style_1(selector, cssRule) {
    this.add_h1zelh_k$(selector, buildCSSStyleRule(cssRule));
  }
  function style_2(selector, cssRule) {
    return this.style_pgxmpo_k$(selector, cssRule);
  }
  initMetadataForInterface(StyleSheetBuilder, 'StyleSheetBuilder', VOID, VOID, [CSSRulesHolder, GenericStyleSheetBuilder]);
  initMetadataForClass(StyleSheet, 'StyleSheet', StyleSheet_init_$Create$, VOID, [StyleSheetBuilder, CSSRulesHolder]);
  initMetadataForClass(CSSRulesHolderState, 'CSSRulesHolderState', CSSRulesHolderState, VOID, [CSSRulesHolder]);
  initMetadataForClass(RawSelector, 'RawSelector', VOID, CSSSelector);
  initMetadataForClass(Combine_1, 'Combine', VOID, CSSSelector);
  initMetadataForClass(Attribute, 'Attribute', VOID, CSSSelector);
  initMetadataForClass(Group, 'Group', VOID, CSSSelector);
  initMetadataForClass(Descendant, 'Descendant', VOID, CSSSelector);
  initMetadataForClass(Child, 'Child', VOID, CSSSelector);
  initMetadataForClass(Sibling, 'Sibling', VOID, CSSSelector);
  initMetadataForClass(Adjacent, 'Adjacent', VOID, CSSSelector);
  initMetadataForClass(PseudoClassInternal, 'PseudoClassInternal', VOID, CSSSelector);
  initMetadataForClass(Lang, 'Lang', VOID, PseudoClassInternal);
  initMetadataForClass(NthChild, 'NthChild', VOID, PseudoClassInternal);
  initMetadataForClass(NthLastChild, 'NthLastChild', VOID, PseudoClassInternal);
  initMetadataForClass(NthOfType, 'NthOfType', VOID, PseudoClassInternal);
  initMetadataForClass(NthLastOfType, 'NthLastOfType', VOID, PseudoClassInternal);
  initMetadataForClass(Host, 'Host', VOID, PseudoClassInternal);
  initMetadataForClass(Not_0, 'Not', VOID, PseudoClassInternal);
  initMetadataForClass(PseudoElementInternal, 'PseudoElementInternal', VOID, CSSSelector);
  initMetadataForClass(Slotted, 'Slotted', VOID, PseudoElementInternal);
  initMetadataForClass(StyleSheetBuilderImpl, 'StyleSheetBuilderImpl', StyleSheetBuilderImpl, VOID, [StyleSheetBuilder]);
  initMetadataForClass(CSSBorder, 'CSSBorder', CSSBorder);
  initMetadataForInterface(FilterBuilder, 'FilterBuilder');
  initMetadataForInterface(FilterFunction, 'FilterFunction');
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_0, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_1, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_2, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_3, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_4, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_5, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_6, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_7, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_8, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_9, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_10, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_11, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_12, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_13, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_14, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_15, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_16, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_17, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_FilterFunction$0_18, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', VOID, VOID, [FilterFunction, FunctionAdapter]);
  initMetadataForClass(FilterBuilderImplementation, 'FilterBuilderImplementation', FilterBuilderImplementation, VOID, [FilterBuilder]);
  initMetadataForInterface(TransformBuilder, 'TransformBuilder');
  initMetadataForInterface(TransformFunction, 'TransformFunction');
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_0, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_1, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_2, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_3, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_4, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_5, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_6, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_7, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_8, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_9, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_10, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_11, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_12, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_13, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_14, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_15, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_16, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_17, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_18, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_19, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_20, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_21, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_22, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_23, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_24, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_25, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_26, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_27, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_28, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_29, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_30, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(sam$org_jetbrains_compose_web_css_TransformFunction$0_31, 'sam$org_jetbrains_compose_web_css_TransformFunction$0', VOID, VOID, [TransformFunction, FunctionAdapter]);
  initMetadataForClass(TransformBuilderImplementation, 'TransformBuilderImplementation', TransformBuilderImplementation, VOID, [TransformBuilder]);
  initMetadataForClass(Operator, 'Operator', VOID, Enum);
  initMetadataForObject(Attribute_0, 'Attribute');
  initMetadataForObject(PseudoClass, 'PseudoClass');
  initMetadataForObject(PseudoElement, 'PseudoElement');
  initMetadataForInterface(Nth, 'Nth');
  initMetadataForClass(FunctionalImpl, 'FunctionalImpl', FunctionalImpl, VOID, [Nth]);
  initMetadataForObject(OddImpl, 'OddImpl', VOID, VOID, [Nth]);
  initMetadataForObject(EvenImpl, 'EvenImpl', VOID, VOID, [Nth]);
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(selectorScope$1, VOID, VOID, VOID, [SelectorsScope]);
  initMetadataForClass(DomElementWrapper, 'DomElementWrapper', VOID, DomNodeWrapper);
  function DisposableRefEffect(effect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-720765972);
    if (isTraceInProgress()) {
      traceEventStart(-720765972, $changed, -1, 'org.jetbrains.compose.web.dom.ElementScope.DisposableRefEffect (ElementScope.kt:57)');
    }
    this.DisposableRefEffect_k01vzl_k$(null, effect, $composer_0, 6 | 112 & $changed << 3 | 896 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  }
  initMetadataForInterface(ElementScope, 'ElementScope', VOID, VOID, [DOMScope]);
  initMetadataForInterface(DomEffectScope, 'DomEffectScope');
  initMetadataForClass(ElementScopeBase, 'ElementScopeBase', VOID, VOID, [ElementScope]);
  initMetadataForClass(ElementScopeImpl, 'ElementScopeImpl', ElementScopeImpl, ElementScopeBase);
  initMetadataForClass(DomDisposableEffectHolder, 'DomDisposableEffectHolder', VOID, VOID, [RememberObserver, DomEffectScope]);
  initMetadataForCompanion(Companion_18);
  initMetadataForInterface(ElementBuilder, 'ElementBuilder');
  initMetadataForClass(ElementBuilderImplementation, 'ElementBuilderImplementation', VOID, VOID, [ElementBuilder]);
  initMetadataForClass(Input$$inlined$run$1$1$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(TextArea$$inlined$run$1$1$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(Style$$inlined$run$1$1$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(RadioGroupScope, 'RadioGroupScope');
  initMetadataForClass(SyntheticEvent, 'SyntheticEvent');
  initMetadataForClass(SyntheticAnimationEvent, 'SyntheticAnimationEvent', VOID, SyntheticEvent);
  initMetadataForClass(SyntheticChangeEvent, 'SyntheticChangeEvent', VOID, SyntheticEvent);
  initMetadataForClass(SyntheticClipboardEvent, 'SyntheticClipboardEvent', VOID, SyntheticEvent);
  initMetadataForClass(SyntheticFocusEvent, 'SyntheticFocusEvent', VOID, SyntheticEvent);
  initMetadataForClass(SyntheticInputEvent, 'SyntheticInputEvent', VOID, SyntheticEvent);
  initMetadataForClass(SyntheticKeyboardEvent, 'SyntheticKeyboardEvent', VOID, SyntheticEvent);
  initMetadataForClass(SyntheticMouseEvent, 'SyntheticMouseEvent', VOID, SyntheticEvent);
  initMetadataForClass(SyntheticWheelEvent, 'SyntheticWheelEvent', VOID, SyntheticMouseEvent);
  initMetadataForClass(SyntheticDragEvent, 'SyntheticDragEvent', VOID, SyntheticMouseEvent);
  initMetadataForClass(SyntheticSelectEvent, 'SyntheticSelectEvent', VOID, SyntheticEvent);
  initMetadataForClass(SyntheticTouchEvent, 'SyntheticTouchEvent', VOID, SyntheticEvent);
  //endregion
  function ExperimentalComposeWebApi() {
  }
  protoOf(ExperimentalComposeWebApi).equals = function (other) {
    if (!(other instanceof ExperimentalComposeWebApi))
      return false;
    other instanceof ExperimentalComposeWebApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalComposeWebApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalComposeWebApi).toString = function () {
    return '@org.jetbrains.compose.web.ExperimentalComposeWebApi(' + ')';
  };
  function get_setInputValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setInputValue;
  }
  var setInputValue;
  function get_setTextAreaDefaultValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setTextAreaDefaultValue;
  }
  var setTextAreaDefaultValue;
  function get_setCheckedValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setCheckedValue;
  }
  var setCheckedValue;
  function placeholder(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_w68641_k$('placeholder', value);
  }
  function src(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_w68641_k$('src', value);
  }
  function required(_this__u8e3s4) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_w68641_k$('required', '');
  }
  function alt(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_w68641_k$('alt', value);
  }
  function href(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_w68641_k$('href', value);
  }
  function readOnly(_this__u8e3s4) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_w68641_k$('readonly', '');
  }
  function type_0(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_w68641_k$('type', value.get_typeStr_cucz82_k$());
  }
  function forId(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.attr_w68641_k$('for', value);
  }
  function autoComplete(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.attr_w68641_k$('autocomplete', value);
  }
  function setInputValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_getInstance();
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.innerText = v;
    return Unit_getInstance();
  }
  function setCheckedValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_getInstance();
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
  function get_setClassList() {
    _init_properties_AttrsScope_kt__ek7k4y();
    return setClassList;
  }
  var setClassList;
  function Companion() {
    Companion_instance = this;
    this.CLASS_1 = 'class';
    this.ID_1 = 'id';
    this.HIDDEN_1 = 'hidden';
    this.TITLE_1 = 'title';
    this.DIR_1 = 'dir';
    this.DRAGGABLE_1 = 'draggable';
    this.CONTENT_EDITABLE_1 = 'contenteditable';
    this.LANG_1 = 'lang';
    this.TAB_INDEX_1 = 'tabindex';
    this.SPELLCHECK_1 = 'spellcheck';
  }
  protoOf(Companion).get_CLASS_i7lkq7_k$ = function () {
    return this.CLASS_1;
  };
  protoOf(Companion).get_ID_kntopo_k$ = function () {
    return this.ID_1;
  };
  protoOf(Companion).get_HIDDEN_1dp9hp_k$ = function () {
    return this.HIDDEN_1;
  };
  protoOf(Companion).get_TITLE_igwjrj_k$ = function () {
    return this.TITLE_1;
  };
  protoOf(Companion).get_DIR_18jvuk_k$ = function () {
    return this.DIR_1;
  };
  protoOf(Companion).get_DRAGGABLE_lgsxfg_k$ = function () {
    return this.DRAGGABLE_1;
  };
  protoOf(Companion).get_CONTENT_EDITABLE_pkf1hv_k$ = function () {
    return this.CONTENT_EDITABLE_1;
  };
  protoOf(Companion).get_LANG_wo4kl3_k$ = function () {
    return this.LANG_1;
  };
  protoOf(Companion).get_TAB_INDEX_us6klb_k$ = function () {
    return this.TAB_INDEX_1;
  };
  protoOf(Companion).get_SPELLCHECK_xv0ui1_k$ = function () {
    return this.SPELLCHECK_1;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function AttrsScope() {
  }
  function get_$stableprop() {
    return 8;
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.eventsListenerScopeBuilder_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.attributesMap_1 = LinkedHashMap_init_$Create$();
    this.styleScope_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.propertyUpdates_1 = ArrayList_init_$Create$();
    this.refEffect_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.classes_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(AttrsScopeBuilder).get_eventsListenerScopeBuilder_e1ywca_k$ = function () {
    return this.eventsListenerScopeBuilder_1;
  };
  protoOf(AttrsScopeBuilder).addEventListener_pu8o1q_k$ = function (eventName, listener) {
    this.eventsListenerScopeBuilder_1.addEventListener_pu8o1q_k$(eventName, listener);
  };
  protoOf(AttrsScopeBuilder).addEventListener_xhf81m_k$ = function (eventName, listener) {
    this.eventsListenerScopeBuilder_1.addEventListener_xhf81m_k$(eventName, listener);
  };
  protoOf(AttrsScopeBuilder).onAnimationEnd_l576ug_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onAnimationEnd_l576ug_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onAnimationIteration_o79r9y_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onAnimationIteration_o79r9y_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onAnimationStart_ir5kdr_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onAnimationStart_ir5kdr_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onBlur_yy3d4s_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onBlur_yy3d4s_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onClick_q9cds6_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onClick_q9cds6_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onContextMenu_uus4bk_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onContextMenu_uus4bk_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onCopy_4jq33g_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onCopy_4jq33g_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onCut_wod3pf_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onCut_wod3pf_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDoubleClick_gh82mh_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDoubleClick_gh82mh_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDrag_xkse65_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDrag_xkse65_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDragEnd_4or1o2_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragEnd_4or1o2_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDragEnter_9tqs4v_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragEnter_9tqs4v_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDragLeave_nsncqa_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragLeave_nsncqa_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDragOver_tkxwb3_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragOver_tkxwb3_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDragStart_ispt2x_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragStart_ispt2x_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onDrop_373vqw_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDrop_373vqw_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onFocus_ozgn2v_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onFocus_ozgn2v_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onFocusIn_vryg4c_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onFocusIn_vryg4c_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onFocusOut_jw1zh_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onFocusOut_jw1zh_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onKeyDown_2pa1il_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onKeyDown_2pa1il_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onKeyUp_g6q8ee_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onKeyUp_g6q8ee_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseDown_hebxzb_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseDown_hebxzb_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseEnter_smfckd_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseEnter_smfckd_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseLeave_j862le_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseLeave_j862le_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseMove_r2z3wo_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseMove_r2z3wo_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseOut_nootgn_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseOut_nootgn_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseOver_o893qj_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseOver_o893qj_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onMouseUp_at21zm_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseUp_at21zm_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onPaste_8ucd2k_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onPaste_8ucd2k_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onScroll_ur92mf_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onScroll_ur92mf_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onTouchCancel_rg0d1t_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onTouchCancel_rg0d1t_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onTouchEnd_ugz1se_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onTouchEnd_ugz1se_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onTouchMove_wm6qxk_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onTouchMove_wm6qxk_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onTouchStart_4yr0c9_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onTouchStart_4yr0c9_k$(listener);
  };
  protoOf(AttrsScopeBuilder).onWheel_59frrx_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onWheel_59frrx_k$(listener);
  };
  protoOf(AttrsScopeBuilder).registerEventListener_oiyxlj_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.registerEventListener_oiyxlj_k$(listener);
  };
  protoOf(AttrsScopeBuilder).get_attributesMap_lhwm1x_k$ = function () {
    return this.attributesMap_1;
  };
  protoOf(AttrsScopeBuilder).get_styleScope_j97lsb_k$ = function () {
    return this.styleScope_1;
  };
  protoOf(AttrsScopeBuilder).get_propertyUpdates_8i1vmz_k$ = function () {
    return this.propertyUpdates_1;
  };
  protoOf(AttrsScopeBuilder).set_refEffect_3bqk3c_k$ = function (_set____db54di) {
    this.refEffect_1 = _set____db54di;
  };
  protoOf(AttrsScopeBuilder).get_refEffect_dxdq8s_k$ = function () {
    return this.refEffect_1;
  };
  protoOf(AttrsScopeBuilder).get_classes_o9f6ii_k$ = function () {
    return this.classes_1;
  };
  protoOf(AttrsScopeBuilder).classes_ephr7k_k$ = function (classes) {
    this.classes_1.addAll_4lagoh_k$(classes);
  };
  protoOf(AttrsScopeBuilder).classes_ayghm2_k$ = function (classes) {
    addAll(this.classes_1, classes);
  };
  protoOf(AttrsScopeBuilder).style_xwwy6r_k$ = function (builder) {
    // Inline function 'kotlin.apply' call
    builder(this.styleScope_1);
  };
  protoOf(AttrsScopeBuilder).ref_o4g25g_k$ = function (effect) {
    this.refEffect_1 = effect;
  };
  protoOf(AttrsScopeBuilder).attr_w68641_k$ = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.attributesMap_1.put_4fpzoq_k$(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).prop_cha5mt_k$ = function (update, value) {
    var tmp = to(update, value);
    this.propertyUpdates_1.add_utx5q5_k$(tmp instanceof Pair ? tmp : THROW_CCE());
  };
  protoOf(AttrsScopeBuilder).collect_2cke7n_k$ = function () {
    return this.attributesMap_1;
  };
  protoOf(AttrsScopeBuilder).copyFrom_8abx0d_k$ = function (attrsScope) {
    this.refEffect_1 = attrsScope.refEffect_1;
    this.styleScope_1.copyFrom_b6psnf_k$(attrsScope.styleScope_1);
    this.attributesMap_1.putAll_wgg6cj_k$(attrsScope.attributesMap_1);
    this.propertyUpdates_1.addAll_4lagoh_k$(attrsScope.propertyUpdates_1);
    this.eventsListenerScopeBuilder_1.copyListenersFrom_gldrrj_k$(attrsScope.eventsListenerScopeBuilder_1);
  };
  function setClassList$lambda(e, classList) {
    _init_properties_AttrsScope_kt__ek7k4y();
    (function () {
      var $externalVarargReceiverTmp = e.classList;
      return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(classList.slice()));
    }.call(this));
    return Unit_getInstance();
  }
  var properties_initialized_AttrsScope_kt_jxswks;
  function _init_properties_AttrsScope_kt__ek7k4y() {
    if (!properties_initialized_AttrsScope_kt_jxswks) {
      properties_initialized_AttrsScope_kt_jxswks = true;
      setClassList = setClassList$lambda;
    }
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.COPY_1 = 'copy';
    this.CUT_1 = 'cut';
    this.PASTE_1 = 'paste';
    this.CONTEXTMENU_1 = 'contextmenu';
    this.CLICK_1 = 'click';
    this.DBLCLICK_1 = 'dblclick';
    this.FOCUS_1 = 'focus';
    this.BLUR_1 = 'blur';
    this.FOCUSIN_1 = 'focusin';
    this.FOCUSOUT_1 = 'focusout';
    this.KEYDOWN_1 = 'keydown';
    this.KEYUP_1 = 'keyup';
    this.MOUSEDOWN_1 = 'mousedown';
    this.MOUSEUP_1 = 'mouseup';
    this.MOUSEENTER_1 = 'mouseenter';
    this.MOUSELEAVE_1 = 'mouseleave';
    this.MOUSEMOVE_1 = 'mousemove';
    this.MOUSEOUT_1 = 'mouseout';
    this.MOUSEOVER_1 = 'mouseover';
    this.WHEEL_1 = 'wheel';
    this.SCROLL_1 = 'scroll';
    this.SELECT_1 = 'select';
    this.TOUCHCANCEL_1 = 'touchcancel';
    this.TOUCHEND_1 = 'touchend';
    this.TOUCHMOVE_1 = 'touchmove';
    this.TOUCHSTART_1 = 'touchstart';
    this.ANIMATIONCANCEL_1 = 'animationcancel';
    this.ANIMATIONEND_1 = 'animationend';
    this.ANIMATIONITERATION_1 = 'animationiteration';
    this.ANIMATIONSTART_1 = 'animationstart';
    this.BEFOREINPUT_1 = 'beforeinput';
    this.INPUT_1 = 'input';
    this.CHANGE_1 = 'change';
    this.INVALID_1 = 'invalid';
    this.DRAG_1 = 'drag';
    this.DROP_1 = 'drop';
    this.DRAGSTART_1 = 'dragstart';
    this.DRAGEND_1 = 'dragend';
    this.DRAGOVER_1 = 'dragover';
    this.DRAGENTER_1 = 'dragenter';
    this.DRAGLEAVE_1 = 'dragleave';
    this.SUBMIT_1 = 'submit';
    this.RESET_1 = 'reset';
  }
  protoOf(Companion_0).get_COPY_wnz45a_k$ = function () {
    return this.COPY_1;
  };
  protoOf(Companion_0).get_CUT_18jwav_k$ = function () {
    return this.CUT_1;
  };
  protoOf(Companion_0).get_PASTE_iek8y2_k$ = function () {
    return this.PASTE_1;
  };
  protoOf(Companion_0).get_CONTEXTMENU_n7w1rv_k$ = function () {
    return this.CONTEXTMENU_1;
  };
  protoOf(Companion_0).get_CLICK_i7lq9r_k$ = function () {
    return this.CLICK_1;
  };
  protoOf(Companion_0).get_DBLCLICK_lnqjqb_k$ = function () {
    return this.DBLCLICK_1;
  };
  protoOf(Companion_0).get_FOCUS_i9awzz_k$ = function () {
    return this.FOCUS_1;
  };
  protoOf(Companion_0).get_BLUR_wnyf1s_k$ = function () {
    return this.BLUR_1;
  };
  protoOf(Companion_0).get_FOCUSIN_1ple5w_k$ = function () {
    return this.FOCUSIN_1;
  };
  protoOf(Companion_0).get_FOCUSOUT_hzoq81_k$ = function () {
    return this.FOCUSOUT_1;
  };
  protoOf(Companion_0).get_KEYDOWN_c6wzs_k$ = function () {
    return this.KEYDOWN_1;
  };
  protoOf(Companion_0).get_KEYUP_ibvyep_k$ = function () {
    return this.KEYUP_1;
  };
  protoOf(Companion_0).get_MOUSEDOWN_6q4qv6_k$ = function () {
    return this.MOUSEDOWN_1;
  };
  protoOf(Companion_0).get_MOUSEUP_xp42d3_k$ = function () {
    return this.MOUSEUP_1;
  };
  protoOf(Companion_0).get_MOUSEENTER_4ls4bg_k$ = function () {
    return this.MOUSEENTER_1;
  };
  protoOf(Companion_0).get_MOUSELEAVE_4pgjwb_k$ = function () {
    return this.MOUSELEAVE_1;
  };
  protoOf(Companion_0).get_MOUSEMOVE_6pz00j_k$ = function () {
    return this.MOUSEMOVE_1;
  };
  protoOf(Companion_0).get_MOUSEOUT_ku6wmm_k$ = function () {
    return this.MOUSEOUT_1;
  };
  protoOf(Companion_0).get_MOUSEOVER_6pxl8w_k$ = function () {
    return this.MOUSEOVER_1;
  };
  protoOf(Companion_0).get_WHEEL_iiiz9u_k$ = function () {
    return this.WHEEL_1;
  };
  protoOf(Companion_0).get_SCROLL_3qqzfa_k$ = function () {
    return this.SCROLL_1;
  };
  protoOf(Companion_0).get_SELECT_3rqj2d_k$ = function () {
    return this.SELECT_1;
  };
  protoOf(Companion_0).get_TOUCHCANCEL_dnulf4_k$ = function () {
    return this.TOUCHCANCEL_1;
  };
  protoOf(Companion_0).get_TOUCHEND_wewr97_k$ = function () {
    return this.TOUCHEND_1;
  };
  protoOf(Companion_0).get_TOUCHMOVE_aehk55_k$ = function () {
    return this.TOUCHMOVE_1;
  };
  protoOf(Companion_0).get_TOUCHSTART_wrtgr0_k$ = function () {
    return this.TOUCHSTART_1;
  };
  protoOf(Companion_0).get_ANIMATIONCANCEL_s7fx11_k$ = function () {
    return this.ANIMATIONCANCEL_1;
  };
  protoOf(Companion_0).get_ANIMATIONEND_8qz940_k$ = function () {
    return this.ANIMATIONEND_1;
  };
  protoOf(Companion_0).get_ANIMATIONITERATION_txi5cu_k$ = function () {
    return this.ANIMATIONITERATION_1;
  };
  protoOf(Companion_0).get_ANIMATIONSTART_qbysnt_k$ = function () {
    return this.ANIMATIONSTART_1;
  };
  protoOf(Companion_0).get_BEFOREINPUT_vjk3z6_k$ = function () {
    return this.BEFOREINPUT_1;
  };
  protoOf(Companion_0).get_INPUT_iaxxfl_k$ = function () {
    return this.INPUT_1;
  };
  protoOf(Companion_0).get_CHANGE_3rivk7_k$ = function () {
    return this.CHANGE_1;
  };
  protoOf(Companion_0).get_INVALID_pha976_k$ = function () {
    return this.INVALID_1;
  };
  protoOf(Companion_0).get_DRAG_wnzszh_k$ = function () {
    return this.DRAG_1;
  };
  protoOf(Companion_0).get_DROP_wnztbs_k$ = function () {
    return this.DROP_1;
  };
  protoOf(Companion_0).get_DRAGSTART_l9va57_k$ = function () {
    return this.DRAGSTART_1;
  };
  protoOf(Companion_0).get_DRAGEND_q9f4de_k$ = function () {
    return this.DRAGEND_1;
  };
  protoOf(Companion_0).get_DRAGOVER_wrllwv_k$ = function () {
    return this.DRAGOVER_1;
  };
  protoOf(Companion_0).get_DRAGENTER_lhnulh_k$ = function () {
    return this.DRAGENTER_1;
  };
  protoOf(Companion_0).get_DRAGLEAVE_ldzf0m_k$ = function () {
    return this.DRAGLEAVE_1;
  };
  protoOf(Companion_0).get_SUBMIT_40d0rl_k$ = function () {
    return this.SUBMIT_1;
  };
  protoOf(Companion_0).get_RESET_ifqdqe_k$ = function () {
    return this.RESET_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function EventsListenerScope() {
  }
  function _get_listeners__760gzy($this) {
    return $this.listeners_1;
  }
  function get_$stableprop_0() {
    return 8;
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.listeners_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(EventsListenerScopeBuilder).registerEventListener_oiyxlj_k$ = function (listener) {
    this.listeners_1.add_utx5q5_k$(listener);
  };
  protoOf(EventsListenerScopeBuilder).copyListenersFrom_gldrrj_k$ = function (from) {
    this.listeners_1.addAll_4lagoh_k$(from.listeners_1);
  };
  protoOf(EventsListenerScopeBuilder).collectListeners_za6ce6_k$ = function () {
    return this.listeners_1;
  };
  function HtmlAttrMarker() {
  }
  protoOf(HtmlAttrMarker).equals = function (other) {
    if (!(other instanceof HtmlAttrMarker))
      return false;
    other instanceof HtmlAttrMarker || THROW_CCE();
    return true;
  };
  protoOf(HtmlAttrMarker).hashCode = function () {
    return 0;
  };
  protoOf(HtmlAttrMarker).toString = function () {
    return '@org.jetbrains.compose.web.attributes.HtmlAttrMarker(' + ')';
  };
  function get_$stableprop_1() {
    return 0;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function get_$stableprop_3() {
    return 0;
  }
  function Ltr() {
    Ltr_instance = this;
    DirType.call(this, 'ltr');
    this.$stable_2 = 0;
  }
  var Ltr_instance;
  function Ltr_getInstance() {
    if (Ltr_instance == null)
      new Ltr();
    return Ltr_instance;
  }
  function Rtl() {
    Rtl_instance = this;
    DirType.call(this, 'rtl');
    this.$stable_2 = 0;
  }
  var Rtl_instance;
  function Rtl_getInstance() {
    if (Rtl_instance == null)
      new Rtl();
    return Rtl_instance;
  }
  function Auto() {
    Auto_instance = this;
    DirType.call(this, 'auto');
    this.$stable_2 = 0;
  }
  var Auto_instance;
  function Auto_getInstance() {
    if (Auto_instance == null)
      new Auto();
    return Auto_instance;
  }
  function get_$stableprop_4() {
    return 0;
  }
  function DirType(dirStr) {
    this.dirStr_1 = dirStr;
    this.$stable_1 = 0;
  }
  protoOf(DirType).get_dirStr_cdza7h_k$ = function () {
    return this.dirStr_1;
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).get_off_18iz96_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'off';
  };
  protoOf(Companion_1).get_on_kntnrs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'on';
  };
  protoOf(Companion_1).get_name_woqyms_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'name';
  };
  protoOf(Companion_1).get_honorificPrefix_18bb6y_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'honorific-prefix';
  };
  protoOf(Companion_1).get_givenName_wt5kvz_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'given-name';
  };
  protoOf(Companion_1).get_additionalName_h8z8t7_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'additional-name';
  };
  protoOf(Companion_1).get_familyName_6ytaaw_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'family-name';
  };
  protoOf(Companion_1).get_honorificSuffix_2p4755_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'honorific-suffix';
  };
  protoOf(Companion_1).get_nickname_umul6x_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'nickname';
  };
  protoOf(Companion_1).get_email_iqwbqr_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'email';
  };
  protoOf(Companion_1).get_username_ytz5i7_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'username';
  };
  protoOf(Companion_1).get_newPassword_g8455a_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'new-password';
  };
  protoOf(Companion_1).get_currentPassword_q3lfez_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'current-password';
  };
  protoOf(Companion_1).get_oneTimeCode_htasnd_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'one-time-code';
  };
  protoOf(Companion_1).get_organizationTitle_rufdj0_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'organization-title';
  };
  protoOf(Companion_1).get_organization_o1gozg_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'organization';
  };
  protoOf(Companion_1).get_streetAddress_17ko8o_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'street-address';
  };
  protoOf(Companion_1).get_addressLine1_8m9zea_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'address-line1';
  };
  protoOf(Companion_1).get_addressLine2_8m9zeb_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'address-line2';
  };
  protoOf(Companion_1).get_addressLine3_8m9zec_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'address-line3';
  };
  protoOf(Companion_1).get_addressLevel1_gzwrmw_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'address-level1';
  };
  protoOf(Companion_1).get_addressLevel2_gzwrmv_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'address-level2';
  };
  protoOf(Companion_1).get_addressLevel3_gzwrmu_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'address-level3';
  };
  protoOf(Companion_1).get_addressLevel4_gzwrmt_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'address-level4';
  };
  protoOf(Companion_1).get_country_h3tl7x_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'country';
  };
  protoOf(Companion_1).get_countryName_aj0oq0_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'country-name';
  };
  protoOf(Companion_1).get_postalCode_d34wrl_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'postal-code';
  };
  protoOf(Companion_1).get_ccName_bt06xg_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-name';
  };
  protoOf(Companion_1).get_ccGivenName_3v4b0f_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-given-name';
  };
  protoOf(Companion_1).get_ccAdditionalName_9q4a5h_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-additional-name';
  };
  protoOf(Companion_1).get_ccFamilyName_j4jx7c_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-family-name';
  };
  protoOf(Companion_1).get_ccNumber_jcvx4e_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-number';
  };
  protoOf(Companion_1).get_ccExp_iplsac_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-exp';
  };
  protoOf(Companion_1).get_ccExpMonth_5x3iwc_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-exp-month';
  };
  protoOf(Companion_1).get_ccExpYear_kfb19r_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-exp-year';
  };
  protoOf(Companion_1).get_ccSecurityCode_jvaqxi_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-csc';
  };
  protoOf(Companion_1).get_ccType_bt4ipv_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cc-type';
  };
  protoOf(Companion_1).get_transactionCurrency_n3np9i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'transaction-currency';
  };
  protoOf(Companion_1).get_transactionAmount_4n7orx_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'transaction-amount';
  };
  protoOf(Companion_1).get_language_cjhhk1_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'language';
  };
  protoOf(Companion_1).get_birthdate_bhbxrw_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bday';
  };
  protoOf(Companion_1).get_birthdateDay_tkstvs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bday-day';
  };
  protoOf(Companion_1).get_birthdateMonth_brctb8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bday-month';
  };
  protoOf(Companion_1).get_birthdateYear_6i0gip_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bday-year';
  };
  protoOf(Companion_1).get_sex_18iwar_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'sex';
  };
  protoOf(Companion_1).get_tel_18ivke_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tel';
  };
  protoOf(Companion_1).get_telCountryCode_emt8r5_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tel-country-code';
  };
  protoOf(Companion_1).get_telNational_5x07lw_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tel-national';
  };
  protoOf(Companion_1).get_telAreaCode_fk08a4_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tel-area-code';
  };
  protoOf(Companion_1).get_telLocal_gckpnd_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tel-local';
  };
  protoOf(Companion_1).get_telExtension_n0w5eb_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tel-extension';
  };
  protoOf(Companion_1).get_impp_woo0od_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'impp';
  };
  protoOf(Companion_1).get_url_18iuii_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'url';
  };
  protoOf(Companion_1).get_photo_iwv5zd_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.AutoComplete' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'photo';
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function AutoComplete() {
  }
  var InputMode_None_instance;
  var InputMode_Text_instance;
  var InputMode_Decimal_instance;
  var InputMode_Numeric_instance;
  var InputMode_Tel_instance;
  var InputMode_Search_instance;
  var InputMode_Email_instance;
  var InputMode_Url_instance;
  function values() {
    return [InputMode_None_getInstance(), InputMode_Text_getInstance(), InputMode_Decimal_getInstance(), InputMode_Numeric_getInstance(), InputMode_Tel_getInstance(), InputMode_Search_getInstance(), InputMode_Email_getInstance(), InputMode_Url_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'None':
        return InputMode_None_getInstance();
      case 'Text':
        return InputMode_Text_getInstance();
      case 'Decimal':
        return InputMode_Decimal_getInstance();
      case 'Numeric':
        return InputMode_Numeric_getInstance();
      case 'Tel':
        return InputMode_Tel_getInstance();
      case 'Search':
        return InputMode_Search_getInstance();
      case 'Email':
        return InputMode_Email_getInstance();
      case 'Url':
        return InputMode_Url_getInstance();
      default:
        InputMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var InputMode_entriesInitialized;
  function InputMode_initEntries() {
    if (InputMode_entriesInitialized)
      return Unit_getInstance();
    InputMode_entriesInitialized = true;
    InputMode_None_instance = new InputMode('None', 0, 'none');
    InputMode_Text_instance = new InputMode('Text', 1, 'text');
    InputMode_Decimal_instance = new InputMode('Decimal', 2, 'decimal');
    InputMode_Numeric_instance = new InputMode('Numeric', 3, 'numeric');
    InputMode_Tel_instance = new InputMode('Tel', 4, 'tel');
    InputMode_Search_instance = new InputMode('Search', 5, 'search');
    InputMode_Email_instance = new InputMode('Email', 6, 'email');
    InputMode_Url_instance = new InputMode('Url', 7, 'url');
  }
  var $ENTRIES;
  function InputMode(name, ordinal, str) {
    Enum.call(this, name, ordinal);
    this.str_1 = str;
  }
  protoOf(InputMode).get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  function get_$stableprop_5() {
    return 0;
  }
  function get_$stableprop_6() {
    return 0;
  }
  function get_$stableprop_7() {
    return 0;
  }
  function get_$stableprop_8() {
    return 0;
  }
  function get_$stableprop_9() {
    return 0;
  }
  function get_$stableprop_10() {
    return 0;
  }
  function get_$stableprop_11() {
    return 0;
  }
  function get_$stableprop_12() {
    return 0;
  }
  function get_$stableprop_13() {
    return 0;
  }
  function get_$stableprop_14() {
    return 0;
  }
  function get_$stableprop_15() {
    return 0;
  }
  function get_$stableprop_16() {
    return 0;
  }
  function get_$stableprop_17() {
    return 0;
  }
  function get_$stableprop_18() {
    return 0;
  }
  function get_$stableprop_19() {
    return 0;
  }
  function get_$stableprop_20() {
    return 0;
  }
  function get_$stableprop_21() {
    return 0;
  }
  function get_$stableprop_22() {
    return 0;
  }
  function get_$stableprop_23() {
    return 0;
  }
  function get_$stableprop_24() {
    return 0;
  }
  function get_$stableprop_25() {
    return 0;
  }
  function get_$stableprop_26() {
    return 0;
  }
  function get_$stableprop_27() {
    return 0;
  }
  function get_$stableprop_28() {
    return 0;
  }
  function Button() {
    Button_instance = this;
    InputTypeWithUnitValue.call(this, 'button');
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
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
    this.$stable_3 = 0;
  }
  var Week_instance;
  function Week_getInstance() {
    if (Week_instance == null)
      new Week();
    return Week_instance;
  }
  function InputTypeWithStringValue(name) {
    InputType.call(this, name);
    this.$stable_2 = 0;
  }
  protoOf(InputTypeWithStringValue).inputValue_qots9j_k$ = function (event) {
    return Week_getInstance().valueAsString_6n50q_k$(event);
  };
  function InputTypeWithUnitValue(name) {
    InputType.call(this, name);
    this.$stable_2 = 0;
  }
  protoOf(InputTypeWithUnitValue).inputValue_jk7d21_k$ = function (event) {
    return Unit_getInstance();
  };
  protoOf(InputTypeWithUnitValue).inputValue_qots9j_k$ = function (event) {
    this.inputValue_jk7d21_k$(event);
    return Unit_getInstance();
  };
  function InputTypeCheckedValue(name) {
    InputType.call(this, name);
    this.$stable_2 = 0;
  }
  protoOf(InputTypeCheckedValue).inputValue_qots9j_k$ = function (event) {
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
    this.$stable_2 = 0;
  }
  protoOf(InputTypeNumberValue).inputValue_qots9j_k$ = function (event) {
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
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).fromString_z108ba_k$ = function (type) {
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
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function get_$stableprop_29() {
    return 0;
  }
  function InputType(typeStr) {
    Companion_getInstance_3();
    this.typeStr_1 = typeStr;
    this.$stable_1 = 0;
  }
  protoOf(InputType).get_typeStr_cucz82_k$ = function () {
    return this.typeStr_1;
  };
  protoOf(InputType).valueAsString_6n50q_k$ = function (event) {
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
  var Draggable_True_instance;
  var Draggable_False_instance;
  var Draggable_Auto_instance;
  function values_0() {
    return [Draggable_True_getInstance(), Draggable_False_getInstance(), Draggable_Auto_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'True':
        return Draggable_True_getInstance();
      case 'False':
        return Draggable_False_getInstance();
      case 'Auto':
        return Draggable_Auto_getInstance();
      default:
        Draggable_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Draggable_entriesInitialized;
  function Draggable_initEntries() {
    if (Draggable_entriesInitialized)
      return Unit_getInstance();
    Draggable_entriesInitialized = true;
    Draggable_True_instance = new Draggable('True', 0, 'true');
    Draggable_False_instance = new Draggable('False', 1, 'false');
    Draggable_Auto_instance = new Draggable('Auto', 2, 'auto');
  }
  var $ENTRIES_0;
  function Draggable(name, ordinal, str) {
    Enum.call(this, name, ordinal);
    this.str_1 = str;
  }
  protoOf(Draggable).get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  function AutoComplete_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function InputMode_None_getInstance() {
    InputMode_initEntries();
    return InputMode_None_instance;
  }
  function InputMode_Text_getInstance() {
    InputMode_initEntries();
    return InputMode_Text_instance;
  }
  function InputMode_Decimal_getInstance() {
    InputMode_initEntries();
    return InputMode_Decimal_instance;
  }
  function InputMode_Numeric_getInstance() {
    InputMode_initEntries();
    return InputMode_Numeric_instance;
  }
  function InputMode_Tel_getInstance() {
    InputMode_initEntries();
    return InputMode_Tel_instance;
  }
  function InputMode_Search_getInstance() {
    InputMode_initEntries();
    return InputMode_Search_instance;
  }
  function InputMode_Email_getInstance() {
    InputMode_initEntries();
    return InputMode_Email_instance;
  }
  function InputMode_Url_getInstance() {
    InputMode_initEntries();
    return InputMode_Url_instance;
  }
  function Draggable_True_getInstance() {
    Draggable_initEntries();
    return Draggable_True_instance;
  }
  function Draggable_False_getInstance() {
    Draggable_initEntries();
    return Draggable_False_instance;
  }
  function Draggable_Auto_getInstance() {
    Draggable_initEntries();
    return Draggable_Auto_instance;
  }
  function get_$stableprop_30() {
    return 0;
  }
  function InputEventListener(eventName, inputType, listener) {
    eventName = eventName === VOID ? 'input' : eventName;
    SyntheticEventListener.call(this, eventName, listener);
    this.inputType_1 = inputType;
    this.$stable_2 = 0;
  }
  protoOf(InputEventListener).get_inputType_yaat1h_k$ = function () {
    return this.inputType_1;
  };
  protoOf(InputEventListener).handleEvent_zcjn50_k$ = function (event) {
    var value = this.inputType_1.inputValue_qots9j_k$(event);
    this.listener_1(new SyntheticInputEvent(value, event));
  };
  protoOf(InputEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function get_$stableprop_31() {
    return 0;
  }
  function MouseWheelEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
    this.$stable_2 = 0;
  }
  protoOf(MouseWheelEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticWheelEvent(event));
  };
  protoOf(MouseWheelEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function get_$stableprop_32() {
    return 0;
  }
  function KeyboardEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
    this.$stable_2 = 0;
  }
  protoOf(KeyboardEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticKeyboardEvent(event));
  };
  protoOf(KeyboardEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function get_$stableprop_33() {
    return 0;
  }
  function TouchEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
    this.$stable_2 = 0;
  }
  protoOf(TouchEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticTouchEvent(event));
  };
  protoOf(TouchEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function get_$stableprop_34() {
    return 0;
  }
  function SyntheticEventListener(event, listener) {
    this.event_1 = event;
    this.listener_1 = listener;
    this.name_1 = this.event_1;
    this.$stable_1 = 0;
  }
  protoOf(SyntheticEventListener).get_event_ir25pt_k$ = function () {
    return this.event_1;
  };
  protoOf(SyntheticEventListener).get_listener_9jgv43_k$ = function () {
    return this.listener_1;
  };
  protoOf(SyntheticEventListener).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(SyntheticEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new SyntheticEvent(event);
    this.listener_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function get_$stableprop_35() {
    return 0;
  }
  function AnimationEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
    this.$stable_2 = 0;
  }
  protoOf(AnimationEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticAnimationEvent(event, event));
  };
  protoOf(AnimationEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function get_$stableprop_36() {
    return 0;
  }
  function SelectEventListener(listener) {
    SyntheticEventListener.call(this, 'select', listener);
    this.$stable_2 = 0;
  }
  protoOf(SelectEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = event.target;
    this.listener_1(new SyntheticSelectEvent(event, tmp$ret$1));
  };
  protoOf(SelectEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function get_$stableprop_37() {
    return 0;
  }
  function ClipboardEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
    this.$stable_2 = 0;
  }
  protoOf(ClipboardEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticClipboardEvent(event));
  };
  protoOf(ClipboardEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function get_$stableprop_38() {
    return 0;
  }
  function FocusEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
    this.$stable_2 = 0;
  }
  protoOf(FocusEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticFocusEvent(event));
  };
  protoOf(FocusEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function get_$stableprop_39() {
    return 0;
  }
  function ChangeEventListener(inputType, listener) {
    SyntheticEventListener.call(this, 'change', listener);
    this.inputType_1 = inputType;
    this.$stable_2 = 0;
  }
  protoOf(ChangeEventListener).get_inputType_yaat1h_k$ = function () {
    return this.inputType_1;
  };
  protoOf(ChangeEventListener).handleEvent_zcjn50_k$ = function (event) {
    var value = this.inputType_1.inputValue_qots9j_k$(event);
    this.listener_1(new SyntheticChangeEvent(value, event));
  };
  protoOf(ChangeEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function get_$stableprop_40() {
    return 0;
  }
  function DragEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
    this.$stable_2 = 0;
  }
  protoOf(DragEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticDragEvent(event));
  };
  protoOf(DragEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function get_$stableprop_41() {
    return 0;
  }
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
    this.$stable_2 = 0;
  }
  protoOf(MouseEventListener).handleEvent_zcjn50_k$ = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.listener_1(new SyntheticMouseEvent(event));
  };
  protoOf(MouseEventListener).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  function get_$stableprop_42() {
    return 8;
  }
  function InputAttrsScope(inputType, attrsScope) {
    this.inputType_1 = inputType;
    this.$$delegate_0__1 = attrsScope;
    this.$stable_1 = 8;
  }
  protoOf(InputAttrsScope).get_inputType_yaat1h_k$ = function () {
    return this.inputType_1;
  };
  protoOf(InputAttrsScope).addEventListener_pu8o1q_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_pu8o1q_k$(eventName, listener);
  };
  protoOf(InputAttrsScope).addEventListener_xhf81m_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_xhf81m_k$(eventName, listener);
  };
  protoOf(InputAttrsScope).attr_w68641_k$ = function (attr, value) {
    return this.$$delegate_0__1.attr_w68641_k$(attr, value);
  };
  protoOf(InputAttrsScope).classes_ayghm2_k$ = function (classes) {
    this.$$delegate_0__1.classes_ayghm2_k$(classes);
  };
  protoOf(InputAttrsScope).classes_ephr7k_k$ = function (classes) {
    this.$$delegate_0__1.classes_ephr7k_k$(classes);
  };
  protoOf(InputAttrsScope).contentEditable_hbi188_k$ = function (value) {
    return this.$$delegate_0__1.contentEditable_hbi188_k$(value);
  };
  protoOf(InputAttrsScope).dir_uokp4q_k$ = function (value) {
    return this.$$delegate_0__1.dir_uokp4q_k$(value);
  };
  protoOf(InputAttrsScope).draggable_cxyxb5_k$ = function (value) {
    return this.$$delegate_0__1.draggable_cxyxb5_k$(value);
  };
  protoOf(InputAttrsScope).hidden_k4uzbq_k$ = function () {
    return this.$$delegate_0__1.hidden_k4uzbq_k$();
  };
  protoOf(InputAttrsScope).id_e4l56n_k$ = function (value) {
    return this.$$delegate_0__1.id_e4l56n_k$(value);
  };
  protoOf(InputAttrsScope).inputMode_1lh0s3_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_1lh0s3_k$(value);
  };
  protoOf(InputAttrsScope).inputMode_7krh0f_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_7krh0f_k$(value);
  };
  protoOf(InputAttrsScope).lang_9i4u6k_k$ = function (value) {
    return this.$$delegate_0__1.lang_9i4u6k_k$(value);
  };
  protoOf(InputAttrsScope).onAnimationEnd_l576ug_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationEnd_l576ug_k$(listener);
  };
  protoOf(InputAttrsScope).onAnimationIteration_o79r9y_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationIteration_o79r9y_k$(listener);
  };
  protoOf(InputAttrsScope).onAnimationStart_ir5kdr_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationStart_ir5kdr_k$(listener);
  };
  protoOf(InputAttrsScope).onBlur_yy3d4s_k$ = function (listener) {
    this.$$delegate_0__1.onBlur_yy3d4s_k$(listener);
  };
  protoOf(InputAttrsScope).onClick_q9cds6_k$ = function (listener) {
    this.$$delegate_0__1.onClick_q9cds6_k$(listener);
  };
  protoOf(InputAttrsScope).onContextMenu_uus4bk_k$ = function (listener) {
    this.$$delegate_0__1.onContextMenu_uus4bk_k$(listener);
  };
  protoOf(InputAttrsScope).onCopy_4jq33g_k$ = function (listener) {
    this.$$delegate_0__1.onCopy_4jq33g_k$(listener);
  };
  protoOf(InputAttrsScope).onCut_wod3pf_k$ = function (listener) {
    this.$$delegate_0__1.onCut_wod3pf_k$(listener);
  };
  protoOf(InputAttrsScope).onDoubleClick_gh82mh_k$ = function (listener) {
    this.$$delegate_0__1.onDoubleClick_gh82mh_k$(listener);
  };
  protoOf(InputAttrsScope).onDrag_xkse65_k$ = function (listener) {
    this.$$delegate_0__1.onDrag_xkse65_k$(listener);
  };
  protoOf(InputAttrsScope).onDragEnd_4or1o2_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnd_4or1o2_k$(listener);
  };
  protoOf(InputAttrsScope).onDragEnter_9tqs4v_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnter_9tqs4v_k$(listener);
  };
  protoOf(InputAttrsScope).onDragLeave_nsncqa_k$ = function (listener) {
    this.$$delegate_0__1.onDragLeave_nsncqa_k$(listener);
  };
  protoOf(InputAttrsScope).onDragOver_tkxwb3_k$ = function (listener) {
    this.$$delegate_0__1.onDragOver_tkxwb3_k$(listener);
  };
  protoOf(InputAttrsScope).onDragStart_ispt2x_k$ = function (listener) {
    this.$$delegate_0__1.onDragStart_ispt2x_k$(listener);
  };
  protoOf(InputAttrsScope).onDrop_373vqw_k$ = function (listener) {
    this.$$delegate_0__1.onDrop_373vqw_k$(listener);
  };
  protoOf(InputAttrsScope).onFocus_ozgn2v_k$ = function (listener) {
    this.$$delegate_0__1.onFocus_ozgn2v_k$(listener);
  };
  protoOf(InputAttrsScope).onFocusIn_vryg4c_k$ = function (listener) {
    this.$$delegate_0__1.onFocusIn_vryg4c_k$(listener);
  };
  protoOf(InputAttrsScope).onFocusOut_jw1zh_k$ = function (listener) {
    this.$$delegate_0__1.onFocusOut_jw1zh_k$(listener);
  };
  protoOf(InputAttrsScope).onKeyDown_2pa1il_k$ = function (listener) {
    this.$$delegate_0__1.onKeyDown_2pa1il_k$(listener);
  };
  protoOf(InputAttrsScope).onKeyUp_g6q8ee_k$ = function (listener) {
    this.$$delegate_0__1.onKeyUp_g6q8ee_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseDown_hebxzb_k$ = function (listener) {
    this.$$delegate_0__1.onMouseDown_hebxzb_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseEnter_smfckd_k$ = function (listener) {
    this.$$delegate_0__1.onMouseEnter_smfckd_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseLeave_j862le_k$ = function (listener) {
    this.$$delegate_0__1.onMouseLeave_j862le_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseMove_r2z3wo_k$ = function (listener) {
    this.$$delegate_0__1.onMouseMove_r2z3wo_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseOut_nootgn_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOut_nootgn_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseOver_o893qj_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOver_o893qj_k$(listener);
  };
  protoOf(InputAttrsScope).onMouseUp_at21zm_k$ = function (listener) {
    this.$$delegate_0__1.onMouseUp_at21zm_k$(listener);
  };
  protoOf(InputAttrsScope).onPaste_8ucd2k_k$ = function (listener) {
    this.$$delegate_0__1.onPaste_8ucd2k_k$(listener);
  };
  protoOf(InputAttrsScope).onScroll_ur92mf_k$ = function (listener) {
    this.$$delegate_0__1.onScroll_ur92mf_k$(listener);
  };
  protoOf(InputAttrsScope).onTouchCancel_rg0d1t_k$ = function (listener) {
    this.$$delegate_0__1.onTouchCancel_rg0d1t_k$(listener);
  };
  protoOf(InputAttrsScope).onTouchEnd_ugz1se_k$ = function (listener) {
    this.$$delegate_0__1.onTouchEnd_ugz1se_k$(listener);
  };
  protoOf(InputAttrsScope).onTouchMove_wm6qxk_k$ = function (listener) {
    this.$$delegate_0__1.onTouchMove_wm6qxk_k$(listener);
  };
  protoOf(InputAttrsScope).onTouchStart_4yr0c9_k$ = function (listener) {
    this.$$delegate_0__1.onTouchStart_4yr0c9_k$(listener);
  };
  protoOf(InputAttrsScope).onWheel_59frrx_k$ = function (listener) {
    this.$$delegate_0__1.onWheel_59frrx_k$(listener);
  };
  protoOf(InputAttrsScope).prop_cha5mt_k$ = function (update, value) {
    this.$$delegate_0__1.prop_cha5mt_k$(update, value);
  };
  protoOf(InputAttrsScope).ref_g0i5n6_k$ = function (effect) {
    this.$$delegate_0__1.ref_o4g25g_k$(effect);
  };
  protoOf(InputAttrsScope).ref_o4g25g_k$ = function (effect) {
    return this.ref_g0i5n6_k$(effect);
  };
  protoOf(InputAttrsScope).registerEventListener_oiyxlj_k$ = function (listener) {
    this.$$delegate_0__1.registerEventListener_oiyxlj_k$(listener);
  };
  protoOf(InputAttrsScope).spellCheck_hp5v6j_k$ = function (value) {
    return this.$$delegate_0__1.spellCheck_hp5v6j_k$(value);
  };
  protoOf(InputAttrsScope).style_xwwy6r_k$ = function (builder) {
    this.$$delegate_0__1.style_xwwy6r_k$(builder);
  };
  protoOf(InputAttrsScope).tabIndex_fn4aj_k$ = function (value) {
    return this.$$delegate_0__1.tabIndex_fn4aj_k$(value);
  };
  protoOf(InputAttrsScope).title_qpfo4e_k$ = function (value) {
    return this.$$delegate_0__1.title_qpfo4e_k$(value);
  };
  protoOf(InputAttrsScope).value_hphtnt_k$ = function (value) {
    var tmp0_subject = this.inputType_1;
    if (((equals(tmp0_subject, Checkbox_getInstance()) ? true : equals(tmp0_subject, Radio_getInstance())) ? true : equals(tmp0_subject, Hidden_getInstance())) ? true : equals(tmp0_subject, Submit_getInstance())) {
      this.attr_w68641_k$('value', value);
    } else {
      this.prop_cha5mt_k$(get_setInputValue(), value);
    }
    return this;
  };
  protoOf(InputAttrsScope).value_9pbxtm_k$ = function (value) {
    this.value_hphtnt_k$(toString(value));
    return this;
  };
  protoOf(InputAttrsScope).checked_fr7msi_k$ = function (checked) {
    this.prop_cha5mt_k$(get_setCheckedValue(), checked);
    return this;
  };
  protoOf(InputAttrsScope).defaultChecked_plyi8q_k$ = function () {
    this.attr_w68641_k$('checked', '');
    return this;
  };
  protoOf(InputAttrsScope).defaultValue_3511yu_k$ = function (value) {
    this.attr_w68641_k$('value', value);
    return this;
  };
  protoOf(InputAttrsScope).defaultValue_ceo717_k$ = function (value) {
    this.attr_w68641_k$('value', toString(value));
    return this;
  };
  protoOf(InputAttrsScope).onInvalid_705boi_k$ = function (listener) {
    this.addEventListener_pu8o1q_k$('invalid', listener);
  };
  protoOf(InputAttrsScope).onInput_qzb0am_k$ = function (listener) {
    this.registerEventListener_oiyxlj_k$(new InputEventListener('input', this.inputType_1, listener));
  };
  protoOf(InputAttrsScope).onChange_zfla64_k$ = function (listener) {
    this.registerEventListener_oiyxlj_k$(new ChangeEventListener(this.inputType_1, listener));
  };
  protoOf(InputAttrsScope).onBeforeInput_tacd4x_k$ = function (listener) {
    this.registerEventListener_oiyxlj_k$(new InputEventListener('beforeinput', this.inputType_1, listener));
  };
  protoOf(InputAttrsScope).onSelect_l8kuzx_k$ = function (listener) {
    this.registerEventListener_oiyxlj_k$(new SelectEventListener(listener));
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
  function restoreControlledInputState(inputElement) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var type = Companion_getInstance_3().fromString_z108ba_k$(inputElement.type);
    if (get_controlledInputsValuesWeakMap().has(inputElement)) {
      if (equals(type, Radio_getInstance())) {
        var tmp0_safe_receiver = get_controlledRadioGroups().get_wei43m_k$(inputElement.name);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
          while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
            var element = _iterator__ex2g4s.next_20eer_k$();
            // Inline function 'org.jetbrains.compose.web.attributes.builders.restoreControlledInputState.<anonymous>' call
            element.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(element)));
          }
        }
        inputElement.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(inputElement)));
        return Unit_getInstance();
      }
      if (equals(type, Checkbox_getInstance())) {
        inputElement.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(inputElement)));
      } else {
        inputElement.value = toString_0(get_controlledInputsValuesWeakMap().get(inputElement));
      }
    }
  }
  function saveControlledInputState(element, value) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function DisposeRadioGroupEffect(_this__u8e3s4, $composer, $changed) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1451478773);
    if (isTraceInProgress()) {
      traceEventStart(-1451478773, $changed, -1, 'org.jetbrains.compose.web.attributes.builders.DisposeRadioGroupEffect (InternalControlledInputUtils.kt:67)');
    }
    DisposableEffect(null, DisposeRadioGroupEffect$lambda(_this__u8e3s4), $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  }
  function restoreControlledTextAreaState(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    if (get_controlledInputsValuesWeakMap().has(element)) {
      element.value = toString_0(get_controlledInputsValuesWeakMap().get(element));
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
      if (!get_controlledRadioGroups().containsKey_aw81wo_k$(element.name)) {
        var tmp1 = get_controlledRadioGroups();
        var tmp2 = element.name;
        // Inline function 'kotlin.collections.mutableSetOf' call
        // Inline function 'kotlin.collections.set' call
        var value = LinkedHashSet_init_$Create$();
        tmp1.put_4fpzoq_k$(tmp2, value);
      }
      ensureNotNull(get_controlledRadioGroups().get_wei43m_k$(element.name)).add_utx5q5_k$(element);
    }
  }
  function DisposeRadioGroupEffect$1$$inlined$onDispose$1($ref) {
    this.$ref_1 = $ref;
  }
  protoOf(DisposeRadioGroupEffect$1$$inlined$onDispose$1).dispose_3nnxhr_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.builders.DisposeRadioGroupEffect.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = get_controlledRadioGroups().get_wei43m_k$(this.$ref_1.name);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.remove_cedx0m_k$(this.$ref_1);
    var tmp1_safe_receiver = get_controlledRadioGroups().get_wei43m_k$(this.$ref_1.name);
    if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.isEmpty_y1axqb_k$()) === true) {
      get_controlledRadioGroups().remove_gppy8k_k$(this.$ref_1.name);
    }
  };
  function DisposeRadioGroupEffect$lambda($this_DisposeRadioGroupEffect) {
    return function ($this$DisposableEffect) {
      var ref = $this_DisposeRadioGroupEffect.get_scopeElement_61kop2_k$($this$DisposableEffect);
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
  function get_$stableprop_43() {
    return 8;
  }
  function TextAreaAttrsScope(attrsScope) {
    this.$$delegate_0__1 = attrsScope;
    this.$stable_1 = 8;
  }
  protoOf(TextAreaAttrsScope).addEventListener_pu8o1q_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_pu8o1q_k$(eventName, listener);
  };
  protoOf(TextAreaAttrsScope).addEventListener_xhf81m_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_xhf81m_k$(eventName, listener);
  };
  protoOf(TextAreaAttrsScope).attr_w68641_k$ = function (attr, value) {
    return this.$$delegate_0__1.attr_w68641_k$(attr, value);
  };
  protoOf(TextAreaAttrsScope).classes_ayghm2_k$ = function (classes) {
    this.$$delegate_0__1.classes_ayghm2_k$(classes);
  };
  protoOf(TextAreaAttrsScope).classes_ephr7k_k$ = function (classes) {
    this.$$delegate_0__1.classes_ephr7k_k$(classes);
  };
  protoOf(TextAreaAttrsScope).contentEditable_hbi188_k$ = function (value) {
    return this.$$delegate_0__1.contentEditable_hbi188_k$(value);
  };
  protoOf(TextAreaAttrsScope).dir_uokp4q_k$ = function (value) {
    return this.$$delegate_0__1.dir_uokp4q_k$(value);
  };
  protoOf(TextAreaAttrsScope).draggable_cxyxb5_k$ = function (value) {
    return this.$$delegate_0__1.draggable_cxyxb5_k$(value);
  };
  protoOf(TextAreaAttrsScope).hidden_k4uzbq_k$ = function () {
    return this.$$delegate_0__1.hidden_k4uzbq_k$();
  };
  protoOf(TextAreaAttrsScope).id_e4l56n_k$ = function (value) {
    return this.$$delegate_0__1.id_e4l56n_k$(value);
  };
  protoOf(TextAreaAttrsScope).inputMode_1lh0s3_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_1lh0s3_k$(value);
  };
  protoOf(TextAreaAttrsScope).inputMode_7krh0f_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_7krh0f_k$(value);
  };
  protoOf(TextAreaAttrsScope).lang_9i4u6k_k$ = function (value) {
    return this.$$delegate_0__1.lang_9i4u6k_k$(value);
  };
  protoOf(TextAreaAttrsScope).onAnimationEnd_l576ug_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationEnd_l576ug_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onAnimationIteration_o79r9y_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationIteration_o79r9y_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onAnimationStart_ir5kdr_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationStart_ir5kdr_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onBlur_yy3d4s_k$ = function (listener) {
    this.$$delegate_0__1.onBlur_yy3d4s_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onClick_q9cds6_k$ = function (listener) {
    this.$$delegate_0__1.onClick_q9cds6_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onContextMenu_uus4bk_k$ = function (listener) {
    this.$$delegate_0__1.onContextMenu_uus4bk_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onCopy_4jq33g_k$ = function (listener) {
    this.$$delegate_0__1.onCopy_4jq33g_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onCut_wod3pf_k$ = function (listener) {
    this.$$delegate_0__1.onCut_wod3pf_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDoubleClick_gh82mh_k$ = function (listener) {
    this.$$delegate_0__1.onDoubleClick_gh82mh_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDrag_xkse65_k$ = function (listener) {
    this.$$delegate_0__1.onDrag_xkse65_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDragEnd_4or1o2_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnd_4or1o2_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDragEnter_9tqs4v_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnter_9tqs4v_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDragLeave_nsncqa_k$ = function (listener) {
    this.$$delegate_0__1.onDragLeave_nsncqa_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDragOver_tkxwb3_k$ = function (listener) {
    this.$$delegate_0__1.onDragOver_tkxwb3_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDragStart_ispt2x_k$ = function (listener) {
    this.$$delegate_0__1.onDragStart_ispt2x_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onDrop_373vqw_k$ = function (listener) {
    this.$$delegate_0__1.onDrop_373vqw_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onFocus_ozgn2v_k$ = function (listener) {
    this.$$delegate_0__1.onFocus_ozgn2v_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onFocusIn_vryg4c_k$ = function (listener) {
    this.$$delegate_0__1.onFocusIn_vryg4c_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onFocusOut_jw1zh_k$ = function (listener) {
    this.$$delegate_0__1.onFocusOut_jw1zh_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onKeyDown_2pa1il_k$ = function (listener) {
    this.$$delegate_0__1.onKeyDown_2pa1il_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onKeyUp_g6q8ee_k$ = function (listener) {
    this.$$delegate_0__1.onKeyUp_g6q8ee_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseDown_hebxzb_k$ = function (listener) {
    this.$$delegate_0__1.onMouseDown_hebxzb_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseEnter_smfckd_k$ = function (listener) {
    this.$$delegate_0__1.onMouseEnter_smfckd_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseLeave_j862le_k$ = function (listener) {
    this.$$delegate_0__1.onMouseLeave_j862le_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseMove_r2z3wo_k$ = function (listener) {
    this.$$delegate_0__1.onMouseMove_r2z3wo_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseOut_nootgn_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOut_nootgn_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseOver_o893qj_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOver_o893qj_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onMouseUp_at21zm_k$ = function (listener) {
    this.$$delegate_0__1.onMouseUp_at21zm_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onPaste_8ucd2k_k$ = function (listener) {
    this.$$delegate_0__1.onPaste_8ucd2k_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onScroll_ur92mf_k$ = function (listener) {
    this.$$delegate_0__1.onScroll_ur92mf_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onTouchCancel_rg0d1t_k$ = function (listener) {
    this.$$delegate_0__1.onTouchCancel_rg0d1t_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onTouchEnd_ugz1se_k$ = function (listener) {
    this.$$delegate_0__1.onTouchEnd_ugz1se_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onTouchMove_wm6qxk_k$ = function (listener) {
    this.$$delegate_0__1.onTouchMove_wm6qxk_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onTouchStart_4yr0c9_k$ = function (listener) {
    this.$$delegate_0__1.onTouchStart_4yr0c9_k$(listener);
  };
  protoOf(TextAreaAttrsScope).onWheel_59frrx_k$ = function (listener) {
    this.$$delegate_0__1.onWheel_59frrx_k$(listener);
  };
  protoOf(TextAreaAttrsScope).prop_cha5mt_k$ = function (update, value) {
    this.$$delegate_0__1.prop_cha5mt_k$(update, value);
  };
  protoOf(TextAreaAttrsScope).ref_e2flww_k$ = function (effect) {
    this.$$delegate_0__1.ref_o4g25g_k$(effect);
  };
  protoOf(TextAreaAttrsScope).ref_o4g25g_k$ = function (effect) {
    return this.ref_e2flww_k$(effect);
  };
  protoOf(TextAreaAttrsScope).registerEventListener_oiyxlj_k$ = function (listener) {
    this.$$delegate_0__1.registerEventListener_oiyxlj_k$(listener);
  };
  protoOf(TextAreaAttrsScope).spellCheck_hp5v6j_k$ = function (value) {
    return this.$$delegate_0__1.spellCheck_hp5v6j_k$(value);
  };
  protoOf(TextAreaAttrsScope).style_xwwy6r_k$ = function (builder) {
    this.$$delegate_0__1.style_xwwy6r_k$(builder);
  };
  protoOf(TextAreaAttrsScope).tabIndex_fn4aj_k$ = function (value) {
    return this.$$delegate_0__1.tabIndex_fn4aj_k$(value);
  };
  protoOf(TextAreaAttrsScope).title_qpfo4e_k$ = function (value) {
    return this.$$delegate_0__1.title_qpfo4e_k$(value);
  };
  protoOf(TextAreaAttrsScope).value_hphtnt_k$ = function (value) {
    this.prop_cha5mt_k$(get_setInputValue(), value);
    return this;
  };
  protoOf(TextAreaAttrsScope).defaultValue_3511yu_k$ = function (value) {
    this.prop_cha5mt_k$(get_setTextAreaDefaultValue(), value);
    return this;
  };
  protoOf(TextAreaAttrsScope).onInput_cld1rf_k$ = function (listener) {
    this.registerEventListener_oiyxlj_k$(new InputEventListener('input', Text_getInstance(), listener));
  };
  protoOf(TextAreaAttrsScope).onChange_nv2twx_k$ = function (listener) {
    this.registerEventListener_oiyxlj_k$(new ChangeEventListener(Text_getInstance(), listener));
  };
  protoOf(TextAreaAttrsScope).onBeforeInput_5ag6es_k$ = function (listener) {
    this.registerEventListener_oiyxlj_k$(new InputEventListener('beforeinput', Text_getInstance(), listener));
  };
  protoOf(TextAreaAttrsScope).onSelect_fhigw7_k$ = function (listener) {
    this.registerEventListener_oiyxlj_k$(new SelectEventListener(listener));
  };
  function appendRule(_this__u8e3s4, cssRule) {
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.appendRule(cssRule);
  }
  function CSSBuilder() {
  }
  function _get_currentRoot__jkxtsa($this) {
    return $this.currentRoot_1;
  }
  function get_$stableprop_44() {
    return 8;
  }
  function CSSBuilderImpl(currentRoot, self_0, rulesHolder) {
    CSSRuleBuilderImpl.call(this);
    this.currentRoot_1 = currentRoot;
    this.self_1 = self_0;
    this.$$delegate_0__1 = rulesHolder;
    this.$stable_3 = 8;
  }
  protoOf(CSSBuilderImpl).get_self_wou8id_k$ = function () {
    return this.self_1;
  };
  protoOf(CSSBuilderImpl).get_cssRules_jdoznh_k$ = function () {
    return this.$$delegate_0__1.get_cssRules_jdoznh_k$();
  };
  protoOf(CSSBuilderImpl).add_19esmm_k$ = function (cssRule) {
    this.$$delegate_0__1.add_19esmm_k$(cssRule);
  };
  protoOf(CSSBuilderImpl).add_h1zelh_k$ = function (selector, style) {
    this.$$delegate_0__1.add_h1zelh_k$(selector, style);
  };
  protoOf(CSSBuilderImpl).style_e6wlkt_k$ = function (selector, cssRule) {
    var tmp;
    if (selector.contains_trwpob_k$(this.self_1) || selector.contains_trwpob_k$(this.currentRoot_1)) {
      tmp = selector;
    } else {
      tmp = this.desc_lky2kv_k$(this.self_1, selector);
    }
    var resolvedSelector = tmp;
    var tmp0_container = buildCSS(this.currentRoot_1, resolvedSelector, cssRule);
    var style = tmp0_container.component1_7eebsc_k$();
    var rules = tmp0_container.component2_7eebsb_k$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = rules.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.css.CSSBuilderImpl.style.<anonymous>' call
      this.add_19esmm_k$(element);
    }
    this.add_h1zelh_k$(resolvedSelector, style);
  };
  protoOf(CSSBuilderImpl).style_r4zx12_k$ = function (selector, cssRule) {
    return this.style_e6wlkt_k$(selector, cssRule);
  };
  protoOf(CSSBuilderImpl).buildRules_yvviza_k$ = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBuilderImpl(this.currentRoot_1, this.self_1, new StyleSheetBuilderImpl());
    rulesBuild(this_0);
    return this_0.get_cssRules_jdoznh_k$();
  };
  protoOf(CSSBuilderImpl).buildRules_xiubel_k$ = function (rulesBuild) {
    return this.buildRules_yvviza_k$(rulesBuild);
  };
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).get_Static_4hz9g7_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'static';
  };
  protoOf(Companion_3).get_Relative_v4kdkl_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'relative';
  };
  protoOf(Companion_3).get_Absolute_25kja8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'absolute';
  };
  protoOf(Companion_3).get_Sticky_4i40sy_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'sticky';
  };
  protoOf(Companion_3).get_Fixed_i9smcr_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'fixed';
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Position() {
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).get_None_wo6tgh_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationFillMode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  protoOf(Companion_4).get_Forwards_mqp421_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationFillMode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'forwards';
  };
  protoOf(Companion_4).get_Backwards_6xoxjt_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationFillMode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'backwards';
  };
  protoOf(Companion_4).get_Both_wnz5re_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationFillMode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'both';
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function AnimationFillMode() {
  }
  function get_value(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).get_Normal_22avww_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion_5).get_Stretch_2brthg_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'stretch';
  };
  protoOf(Companion_5).get_Center_3arb0i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_5).get_Start_ih4i6x_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_5).get_End_18ju7i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  protoOf(Companion_5).get_FlexStart_cfavq8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-start';
  };
  protoOf(Companion_5).get_FlexEnd_fz7iu1_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-end';
  };
  protoOf(Companion_5).get_Baseline_bu5gku_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'baseline';
  };
  protoOf(Companion_5).get_SafeCenter_caps7p_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'safe center';
  };
  protoOf(Companion_5).get_UnsafeCenter_h98ef8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unsafe center';
  };
  protoOf(Companion_5).get_Inherit_a1a9e6_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inherit';
  };
  protoOf(Companion_5).get_Initial_a0h2v9_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'initial';
  };
  protoOf(Companion_5).get_Unset_ii4mhs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unset';
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function AlignItems() {
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).get_Center_3arb0i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_6).get_Start_ih4i6x_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_6).get_End_18ju7i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  protoOf(Companion_6).get_FlexStart_cfavq8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-start';
  };
  protoOf(Companion_6).get_FlexEnd_fz7iu1_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-end';
  };
  protoOf(Companion_6).get_Left_wo5bw0_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'left';
  };
  protoOf(Companion_6).get_Right_igdsyb_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'right';
  };
  protoOf(Companion_6).get_Normal_22avww_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion_6).get_SpaceBetween_5p3wqd_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'space-between';
  };
  protoOf(Companion_6).get_SpaceAround_1tvu22_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'space-around';
  };
  protoOf(Companion_6).get_SpaceEvenly_3s2yx0_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'space-evenly';
  };
  protoOf(Companion_6).get_Stretch_2brthg_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'stretch';
  };
  protoOf(Companion_6).get_Inherit_a1a9e6_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inherit';
  };
  protoOf(Companion_6).get_Initial_a0h2v9_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'initial';
  };
  protoOf(Companion_6).get_Unset_ii4mhs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unset';
  };
  protoOf(Companion_6).get_SafeCenter_caps7p_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'safe center';
  };
  protoOf(Companion_6).get_UnsafeCenter_h98ef8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unsafe center';
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function JustifyContent() {
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).get_None_wo6tgh_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  protoOf(Companion_7).get_Hidden_viqel_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'hidden';
  };
  protoOf(Companion_7).get_Dotted_2o3wrx_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dotted';
  };
  protoOf(Companion_7).get_Dashed_2vtwyu_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dashed';
  };
  protoOf(Companion_7).get_Solid_ih1j6q_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'solid';
  };
  protoOf(Companion_7).get_Double_2o3myu_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'double';
  };
  protoOf(Companion_7).get_Groove_17ey1p_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'groove';
  };
  protoOf(Companion_7).get_Ridge_igdqoy_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ridge';
  };
  protoOf(Companion_7).get_Inset_ibj3dg_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inset';
  };
  protoOf(Companion_7).get_Outset_2mooe5_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'outset';
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function LineStyle() {
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).get_Block_i7n684_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'block';
  };
  protoOf(Companion_8).get_Inline_bkx8e_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inline';
  };
  protoOf(Companion_8).get_InlineBlock_dx9ywb_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inline-block';
  };
  protoOf(Companion_8).get_Flex_wo1n4y_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex';
  };
  protoOf(Companion_8).get_LegacyInlineFlex_bx32c_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inline-flex';
  };
  protoOf(Companion_8).get_Grid_wo2enj_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'grid';
  };
  protoOf(Companion_8).get_LegacyInlineGrid_bxukx_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inline-grid';
  };
  protoOf(Companion_8).get_FlowRoot_2ttlax_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flow-root';
  };
  protoOf(Companion_8).get_None_wo6tgh_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  protoOf(Companion_8).get_Contents_uww6pv_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'contents';
  };
  protoOf(Companion_8).get_Table_ihc6md_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'table';
  };
  protoOf(Companion_8).get_TableRow_phjndh_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'table-row';
  };
  protoOf(Companion_8).get_ListItem_8hh2km_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'list-item';
  };
  protoOf(Companion_8).get_Inherit_a1a9e6_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inherit';
  };
  protoOf(Companion_8).get_Initial_a0h2v9_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'initial';
  };
  protoOf(Companion_8).get_Unset_ii4mhs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unset';
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function DisplayStyle() {
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).get_Ease_wo0sbb_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ease';
  };
  protoOf(Companion_9).get_EaseIn_2esdgk_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ease-in';
  };
  protoOf(Companion_9).get_EaseOut_3pbekp_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ease-out';
  };
  protoOf(Companion_9).get_EaseInOut_7d98oe_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ease-in-out';
  };
  protoOf(Companion_9).get_Linear_10u5ou_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'linear';
  };
  protoOf(Companion_9).get_StepStart_7bah8z_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'step-start';
  };
  protoOf(Companion_9).get_StepEnd_2ir2xm_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'step-end';
  };
  protoOf(Companion_9).cubicBezier_lhi215_k$ = function (x1, y1, x2, y2) {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cubic-bezier(' + x1 + ', ' + y1 + ', ' + x2 + ', ' + y2 + ')';
  };
  protoOf(Companion_9).steps_fj33mi_k$ = function (count, stepPosition) {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'steps(' + count + ', ' + toString(stepPosition) + ')';
  };
  protoOf(Companion_9).steps_rhawfj_k$ = function (count) {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'steps(' + count + ')';
  };
  protoOf(Companion_9).get_Inherit_a1a9e6_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inherit';
  };
  protoOf(Companion_9).get_Initial_a0h2v9_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'initial';
  };
  protoOf(Companion_9).get_Unset_ii4mhs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unset';
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function AnimationTimingFunction() {
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).get_Row_18jkj3_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'row';
  };
  protoOf(Companion_10).get_RowReverse_d0ukpd_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'row-reverse';
  };
  protoOf(Companion_10).get_Column_35am4h_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'column';
  };
  protoOf(Companion_10).get_ColumnReverse_rkbov1_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'column-reverse';
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FlexDirection() {
  }
  function Companion_11() {
    Companion_instance_11 = this;
  }
  protoOf(Companion_11).get_Auto_wnyn88_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'auto';
  };
  protoOf(Companion_11).get_Normal_22avww_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion_11).get_Center_3arb0i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_11).get_Start_ih4i6x_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_11).get_End_18ju7i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  protoOf(Companion_11).get_SelfStart_di8gbx_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'self-start';
  };
  protoOf(Companion_11).get_SelfEnd_9ir8ka_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'self-end';
  };
  protoOf(Companion_11).get_FlexStart_cfavq8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-start';
  };
  protoOf(Companion_11).get_FlexEnd_fz7iu1_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'flex-end';
  };
  protoOf(Companion_11).get_Baseline_bu5gku_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'baseline';
  };
  protoOf(Companion_11).get_Stretch_2brthg_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'stretch';
  };
  protoOf(Companion_11).get_SafeCenter_caps7p_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'safe center';
  };
  protoOf(Companion_11).get_UnsafeCenter_h98ef8_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unsafe center';
  };
  protoOf(Companion_11).get_Inherit_a1a9e6_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inherit';
  };
  protoOf(Companion_11).get_Initial_a0h2v9_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'initial';
  };
  protoOf(Companion_11).get_Unset_ii4mhs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unset';
  };
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function AlignSelf() {
  }
  function Companion_12() {
    Companion_instance_12 = this;
  }
  protoOf(Companion_12).get_Normal_22avww_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'normal';
  };
  protoOf(Companion_12).get_Reverse_o1nacn_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'reverse';
  };
  protoOf(Companion_12).get_Alternate_idby5t_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'alternate';
  };
  protoOf(Companion_12).get_AlternateReverse_i0aiof_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'alternate-reverse';
  };
  protoOf(Companion_12).get_Inherit_a1a9e6_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inherit';
  };
  protoOf(Companion_12).get_Initial_a0h2v9_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'initial';
  };
  protoOf(Companion_12).get_Unset_ii4mhs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unset';
  };
  var Companion_instance_12;
  function Companion_getInstance_13() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function AnimationDirection() {
  }
  function Companion_13() {
    Companion_instance_13 = this;
  }
  protoOf(Companion_13).get_Running_gl64p6_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationPlayState' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'running';
  };
  protoOf(Companion_13).get_Paused_2sr1w7_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationPlayState' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'Paused';
  };
  protoOf(Companion_13).get_Backwards_6xoxjt_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationPlayState' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'backwards';
  };
  protoOf(Companion_13).get_Both_wnz5re_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationPlayState' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'both';
  };
  protoOf(Companion_13).get_Inherit_a1a9e6_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationPlayState' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'inherit';
  };
  protoOf(Companion_13).get_Initial_a0h2v9_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationPlayState' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'initial';
  };
  protoOf(Companion_13).get_Unset_ii4mhs_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.AnimationPlayState' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'unset';
  };
  var Companion_instance_13;
  function Companion_getInstance_14() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function AnimationPlayState() {
  }
  function StylePropertyEnum() {
  }
  function Position_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function AnimationFillMode_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function AlignItems_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function JustifyContent_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function LineStyle_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function DisplayStyle_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function AnimationTimingFunction_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function Companion_14() {
    Companion_instance_14 = this;
  }
  protoOf(Companion_14).get_JumpStart_i85v5h_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.StepPosition' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'jump-start';
  };
  protoOf(Companion_14).get_JumpEnd_81cg5g_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.StepPosition' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'jump-end';
  };
  protoOf(Companion_14).get_JumpNone_yykj9t_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.StepPosition' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'jump-none';
  };
  protoOf(Companion_14).get_JumpBoth_yys6yw_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.StepPosition' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'jump-both';
  };
  protoOf(Companion_14).get_Start_ih4i6x_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.StepPosition' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_14).get_End_18ju7i_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.css.StepPosition' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function StepPosition() {
  }
  function FlexDirection_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function AlignSelf_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function AnimationDirection_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function AnimationPlayState_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function StepPosition_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function get_$stableprop_45() {
    return 0;
  }
  function get_$stableprop_46() {
    return 0;
  }
  function get_$stableprop_47() {
    return 8;
  }
  function get_$stableprop_48() {
    return 8;
  }
  function From() {
    From_instance = this;
    CSSKeyframe.call(this);
    this.$stable_2 = 0;
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
    this.$stable_2 = 0;
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
  function Percentage(value) {
    CSSKeyframe.call(this);
    this.value_1 = value;
    this.$stable_2 = 8;
  }
  protoOf(Percentage).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Percentage).toString = function () {
    return toString(this.value_1);
  };
  protoOf(Percentage).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(Percentage).copy_kcur6s_k$ = function (value) {
    return new Percentage(value);
  };
  protoOf(Percentage).copy$default_f7406y_k$ = function (value, $super) {
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_kcur6s_k$(value) : $super.copy_kcur6s_k$.call(this, value);
  };
  protoOf(Percentage).hashCode = function () {
    return hashCode(this.value_1);
  };
  protoOf(Percentage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Percentage))
      return false;
    var tmp0_other_with_cast = other instanceof Percentage ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function Combine(values) {
    CSSKeyframe.call(this);
    this.values_1 = values;
    this.$stable_2 = 8;
  }
  protoOf(Combine).get_values_ksazhn_k$ = function () {
    return this.values_1;
  };
  protoOf(Combine).toString = function () {
    return joinToString(this.values_1, ', ');
  };
  protoOf(Combine).component1_7eebsc_k$ = function () {
    return this.values_1;
  };
  protoOf(Combine).copy_3x4dz_k$ = function (values) {
    return new Combine(values);
  };
  protoOf(Combine).copy$default_gcp1m8_k$ = function (values, $super) {
    values = values === VOID ? this.values_1 : values;
    return $super === VOID ? this.copy_3x4dz_k$(values) : $super.copy_3x4dz_k$.call(this, values);
  };
  protoOf(Combine).hashCode = function () {
    return hashCode(this.values_1);
  };
  protoOf(Combine).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Combine))
      return false;
    var tmp0_other_with_cast = other instanceof Combine ? other : THROW_CCE();
    if (!equals(this.values_1, tmp0_other_with_cast.values_1))
      return false;
    return true;
  };
  function get_$stableprop_49() {
    return 0;
  }
  function CSSKeyframe() {
    this.$stable_1 = 0;
  }
  function get_$stableprop_50() {
    return 8;
  }
  function CSSKeyframeRuleDeclaration(keyframe, style) {
    this.keyframe_1 = keyframe;
    this.style_1 = style;
    this.$stable_1 = 8;
  }
  protoOf(CSSKeyframeRuleDeclaration).get_keyframe_nerrnt_k$ = function () {
    return this.keyframe_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).get_header_e7o2vq_k$ = function () {
    return this.keyframe_1.toString();
  };
  protoOf(CSSKeyframeRuleDeclaration).component1_7eebsc_k$ = function () {
    return this.keyframe_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).component2_7eebsb_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).copy_js03l5_k$ = function (keyframe, style) {
    return new CSSKeyframeRuleDeclaration(keyframe, style);
  };
  protoOf(CSSKeyframeRuleDeclaration).copy$default_olqi3m_k$ = function (keyframe, style, $super) {
    keyframe = keyframe === VOID ? this.keyframe_1 : keyframe;
    style = style === VOID ? this.style_1 : style;
    return $super === VOID ? this.copy_js03l5_k$(keyframe, style) : $super.copy_js03l5_k$.call(this, keyframe, style);
  };
  protoOf(CSSKeyframeRuleDeclaration).toString = function () {
    return 'CSSKeyframeRuleDeclaration(keyframe=' + this.keyframe_1.toString() + ', style=' + toString(this.style_1) + ')';
  };
  protoOf(CSSKeyframeRuleDeclaration).hashCode = function () {
    var result = hashCode(this.keyframe_1);
    result = imul(result, 31) + hashCode(this.style_1) | 0;
    return result;
  };
  protoOf(CSSKeyframeRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframeRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframeRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.keyframe_1, tmp0_other_with_cast.keyframe_1))
      return false;
    if (!equals(this.style_1, tmp0_other_with_cast.style_1))
      return false;
    return true;
  };
  function get_$stableprop_51() {
    return 8;
  }
  function CSSKeyframesRuleDeclaration(name, keys) {
    this.name_1 = name;
    this.keys_1 = keys;
    this.$stable_1 = 8;
  }
  protoOf(CSSKeyframesRuleDeclaration).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).get_keys_wop4xp_k$ = function () {
    return this.keys_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).get_header_e7o2vq_k$ = function () {
    return '@keyframes ' + this.name_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).component2_7eebsb_k$ = function () {
    return this.keys_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).copy_1u2wyi_k$ = function (name, keys) {
    return new CSSKeyframesRuleDeclaration(name, keys);
  };
  protoOf(CSSKeyframesRuleDeclaration).copy$default_oux16f_k$ = function (name, keys, $super) {
    name = name === VOID ? this.name_1 : name;
    keys = keys === VOID ? this.keys_1 : keys;
    return $super === VOID ? this.copy_1u2wyi_k$(name, keys) : $super.copy_1u2wyi_k$.call(this, name, keys);
  };
  protoOf(CSSKeyframesRuleDeclaration).toString = function () {
    return 'CSSKeyframesRuleDeclaration(name=' + this.name_1 + ', keys=' + toString(this.keys_1) + ')';
  };
  protoOf(CSSKeyframesRuleDeclaration).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.keys_1) | 0;
    return result;
  };
  protoOf(CSSKeyframesRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframesRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframesRuleDeclaration ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.keys_1, tmp0_other_with_cast.keys_1))
      return false;
    return true;
  };
  function CSSKeyframesBuilder_init_$Init$(init, $this) {
    CSSKeyframesBuilder.call($this);
    init($this);
    return $this;
  }
  function CSSKeyframesBuilder_init_$Create$(init) {
    return CSSKeyframesBuilder_init_$Init$(init, objectCreate(protoOf(CSSKeyframesBuilder)));
  }
  function get_$stableprop_52() {
    return 8;
  }
  function CSSKeyframesBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.frames_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(CSSKeyframesBuilder).get_frames_dgqchb_k$ = function () {
    return this.frames_1;
  };
  protoOf(CSSKeyframesBuilder).from_kkiub0_k$ = function (style) {
    var tmp0 = this.frames_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new CSSKeyframeRuleDeclaration(From_getInstance(), buildCSSStyleRule(style));
    tmp0.add_utx5q5_k$(element);
  };
  protoOf(CSSKeyframesBuilder).to_rhea2j_k$ = function (style) {
    var tmp0 = this.frames_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new CSSKeyframeRuleDeclaration(To_getInstance(), buildCSSStyleRule(style));
    tmp0.add_utx5q5_k$(element);
  };
  protoOf(CSSKeyframesBuilder).each_3ngzdr_k$ = function (keys, style) {
    var tmp0 = this.frames_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new CSSKeyframeRuleDeclaration(new Combine(toList(keys)), buildCSSStyleRule(style));
    tmp0.add_utx5q5_k$(element);
  };
  protoOf(CSSKeyframesBuilder).invoke_242laj_k$ = function (_this__u8e3s4, style) {
    var tmp0 = this.frames_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new CSSKeyframeRuleDeclaration(new Percentage(_this__u8e3s4), buildCSSStyleRule(style));
    tmp0.add_utx5q5_k$(element);
  };
  function CSSNamedKeyframes() {
  }
  function buildKeyframes(name, builder) {
    var frames = CSSKeyframesBuilder_init_$Create$(builder).frames_1;
    return new CSSKeyframesRuleDeclaration(name, frames);
  }
  function media(_this__u8e3s4, query, rulesBuild) {
    media_0(_this__u8e3s4, new Raw(query), rulesBuild);
  }
  function get_$stableprop_53() {
    return 0;
  }
  var Enum_All_instance;
  var Enum_Print_instance;
  var Enum_Screen_instance;
  var Enum_Speech_instance;
  function values_1() {
    return [Enum_All_getInstance(), Enum_Print_getInstance(), Enum_Screen_getInstance(), Enum_Speech_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'All':
        return Enum_All_getInstance();
      case 'Print':
        return Enum_Print_getInstance();
      case 'Screen':
        return Enum_Screen_getInstance();
      case 'Speech':
        return Enum_Speech_getInstance();
      default:
        Enum_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Enum_entriesInitialized;
  function Enum_initEntries() {
    if (Enum_entriesInitialized)
      return Unit_getInstance();
    Enum_entriesInitialized = true;
    Enum_All_instance = new Enum_0('All', 0);
    Enum_Print_instance = new Enum_0('Print', 1);
    Enum_Screen_instance = new Enum_0('Screen', 2);
    Enum_Speech_instance = new Enum_0('Speech', 3);
  }
  var $ENTRIES_1;
  function Enum_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_$stableprop_54() {
    return 0;
  }
  function Enum_All_getInstance() {
    Enum_initEntries();
    return Enum_All_instance;
  }
  function Enum_Print_getInstance() {
    Enum_initEntries();
    return Enum_Print_instance;
  }
  function Enum_Screen_getInstance() {
    Enum_initEntries();
    return Enum_Screen_instance;
  }
  function Enum_Speech_getInstance() {
    Enum_initEntries();
    return Enum_Speech_instance;
  }
  function get_$stableprop_55() {
    return 8;
  }
  function get_$stableprop_56() {
    return 8;
  }
  function get_$stableprop_57() {
    return 8;
  }
  function get_$stableprop_58() {
    return 8;
  }
  function get_$stableprop_59() {
    return 8;
  }
  function get_$stableprop_60() {
    return 8;
  }
  function get_$stableprop_61() {
    return 8;
  }
  function Invertible() {
  }
  function Combinable() {
  }
  function Atomic() {
  }
  function Raw(string) {
    this.string_1 = string;
    this.$stable_1 = 0;
  }
  protoOf(Raw).get_string_jnpst6_k$ = function () {
    return this.string_1;
  };
  protoOf(Raw).toString = function () {
    return this.string_1;
  };
  protoOf(Raw).component1_7eebsc_k$ = function () {
    return this.string_1;
  };
  protoOf(Raw).copy_a35qlh_k$ = function (string) {
    return new Raw(string);
  };
  protoOf(Raw).copy$default_88vucw_k$ = function (string, $super) {
    string = string === VOID ? this.string_1 : string;
    return $super === VOID ? this.copy_a35qlh_k$(string) : $super.copy_a35qlh_k$.call(this, string);
  };
  protoOf(Raw).hashCode = function () {
    return getStringHashCode(this.string_1);
  };
  protoOf(Raw).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Raw))
      return false;
    var tmp0_other_with_cast = other instanceof Raw ? other : THROW_CCE();
    if (!(this.string_1 === tmp0_other_with_cast.string_1))
      return false;
    return true;
  };
  function MediaType(type) {
    this.type_1 = type;
    this.$stable_1 = 0;
  }
  protoOf(MediaType).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(MediaType).toString = function () {
    return this.type_1.get_name_woqyms_k$();
  };
  protoOf(MediaType).component1_7eebsc_k$ = function () {
    return this.type_1;
  };
  protoOf(MediaType).copy_nhmwnr_k$ = function (type) {
    return new MediaType(type);
  };
  protoOf(MediaType).copy$default_55g050_k$ = function (type, $super) {
    type = type === VOID ? this.type_1 : type;
    return $super === VOID ? this.copy_nhmwnr_k$(type) : $super.copy_nhmwnr_k$.call(this, type);
  };
  protoOf(MediaType).hashCode = function () {
    return this.type_1.hashCode();
  };
  protoOf(MediaType).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MediaType))
      return false;
    var tmp0_other_with_cast = other instanceof MediaType ? other : THROW_CCE();
    if (!this.type_1.equals(tmp0_other_with_cast.type_1))
      return false;
    return true;
  };
  function MediaFeature(name, value) {
    value = value === VOID ? null : value;
    this.name_1 = name;
    this.value_1 = value;
    this.$stable_1 = 8;
  }
  protoOf(MediaFeature).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(MediaFeature).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(MediaFeature).equals = function (other) {
    var tmp;
    if (other instanceof MediaFeature) {
      tmp = (this.name_1 === other.name_1 && toString_0(this.value_1) === toString_0(other.value_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MediaFeature).toString = function () {
    var tmp;
    if (this.value_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.css.MediaFeature.toString.<anonymous>' call
      tmp = ': ' + toString_0(this.value_1) + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return '(' + this.name_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function NotFeature(query) {
    this.query_1 = query;
    this.$stable_1 = 8;
  }
  protoOf(NotFeature).get_query_ixn1y7_k$ = function () {
    return this.query_1;
  };
  protoOf(NotFeature).toString = function () {
    return '(not ' + this.query_1.toString() + ')';
  };
  protoOf(NotFeature).component1_7eebsc_k$ = function () {
    return this.query_1;
  };
  protoOf(NotFeature).copy_or61zs_k$ = function (query) {
    return new NotFeature(query);
  };
  protoOf(NotFeature).copy$default_53j75f_k$ = function (query, $super) {
    query = query === VOID ? this.query_1 : query;
    return $super === VOID ? this.copy_or61zs_k$(query) : $super.copy_or61zs_k$.call(this, query);
  };
  protoOf(NotFeature).hashCode = function () {
    return hashCode(this.query_1);
  };
  protoOf(NotFeature).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NotFeature))
      return false;
    var tmp0_other_with_cast = other instanceof NotFeature ? other : THROW_CCE();
    if (!this.query_1.equals(tmp0_other_with_cast.query_1))
      return false;
    return true;
  };
  function And(mediaList) {
    this.mediaList_1 = mediaList;
    this.$stable_1 = 8;
  }
  protoOf(And).get_mediaList_r4d4av_k$ = function () {
    return this.mediaList_1;
  };
  protoOf(And).toString = function () {
    return joinToString(this.mediaList_1, ' and ');
  };
  protoOf(And).component1_7eebsc_k$ = function () {
    return this.mediaList_1;
  };
  protoOf(And).copy_kozhnq_k$ = function (mediaList) {
    return new And(mediaList);
  };
  protoOf(And).copy$default_yesu9t_k$ = function (mediaList, $super) {
    mediaList = mediaList === VOID ? this.mediaList_1 : mediaList;
    return $super === VOID ? this.copy_kozhnq_k$(mediaList) : $super.copy_kozhnq_k$.call(this, mediaList);
  };
  protoOf(And).hashCode = function () {
    return hashCode(this.mediaList_1);
  };
  protoOf(And).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof And))
      return false;
    var tmp0_other_with_cast = other instanceof And ? other : THROW_CCE();
    if (!equals(this.mediaList_1, tmp0_other_with_cast.mediaList_1))
      return false;
    return true;
  };
  function Not(query) {
    this.query_1 = query;
    this.$stable_1 = 8;
  }
  protoOf(Not).get_query_ixn1y7_k$ = function () {
    return this.query_1;
  };
  protoOf(Not).toString = function () {
    return 'not ' + toString(this.query_1);
  };
  protoOf(Not).component1_7eebsc_k$ = function () {
    return this.query_1;
  };
  protoOf(Not).copy_nsrfyc_k$ = function (query) {
    return new Not(query);
  };
  protoOf(Not).copy$default_3swraj_k$ = function (query, $super) {
    query = query === VOID ? this.query_1 : query;
    return $super === VOID ? this.copy_nsrfyc_k$(query) : $super.copy_nsrfyc_k$.call(this, query);
  };
  protoOf(Not).hashCode = function () {
    return hashCode(this.query_1);
  };
  protoOf(Not).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Not))
      return false;
    var tmp0_other_with_cast = other instanceof Not ? other : THROW_CCE();
    if (!equals(this.query_1, tmp0_other_with_cast.query_1))
      return false;
    return true;
  };
  function Combine_0(mediaList) {
    this.mediaList_1 = mediaList;
    this.$stable_1 = 8;
  }
  protoOf(Combine_0).get_mediaList_r4d4av_k$ = function () {
    return this.mediaList_1;
  };
  protoOf(Combine_0).toString = function () {
    return joinToString(this.mediaList_1, ', ');
  };
  protoOf(Combine_0).component1_7eebsc_k$ = function () {
    return this.mediaList_1;
  };
  protoOf(Combine_0).copy_ywktkd_k$ = function (mediaList) {
    return new Combine_0(mediaList);
  };
  protoOf(Combine_0).copy$default_1ynts0_k$ = function (mediaList, $super) {
    mediaList = mediaList === VOID ? this.mediaList_1 : mediaList;
    return $super === VOID ? this.copy_ywktkd_k$(mediaList) : $super.copy_ywktkd_k$.call(this, mediaList);
  };
  protoOf(Combine_0).hashCode = function () {
    return hashCode(this.mediaList_1);
  };
  protoOf(Combine_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Combine_0))
      return false;
    var tmp0_other_with_cast = other instanceof Combine_0 ? other : THROW_CCE();
    if (!equals(this.mediaList_1, tmp0_other_with_cast.mediaList_1))
      return false;
    return true;
  };
  function Only(type, query) {
    this.type_1 = type;
    this.query_1 = query;
    this.$stable_1 = 8;
  }
  protoOf(Only).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(Only).get_query_ixn1y7_k$ = function () {
    return this.query_1;
  };
  protoOf(Only).toString = function () {
    return 'only ' + this.type_1.toString() + ' and ' + toString(this.query_1);
  };
  protoOf(Only).component1_7eebsc_k$ = function () {
    return this.type_1;
  };
  protoOf(Only).component2_7eebsb_k$ = function () {
    return this.query_1;
  };
  protoOf(Only).copy_r2m21c_k$ = function (type, query) {
    return new Only(type, query);
  };
  protoOf(Only).copy$default_xy8zc2_k$ = function (type, query, $super) {
    type = type === VOID ? this.type_1 : type;
    query = query === VOID ? this.query_1 : query;
    return $super === VOID ? this.copy_r2m21c_k$(type, query) : $super.copy_r2m21c_k$.call(this, type, query);
  };
  protoOf(Only).hashCode = function () {
    var result = this.type_1.hashCode();
    result = imul(result, 31) + hashCode(this.query_1) | 0;
    return result;
  };
  protoOf(Only).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Only))
      return false;
    var tmp0_other_with_cast = other instanceof Only ? other : THROW_CCE();
    if (!this.type_1.equals(tmp0_other_with_cast.type_1))
      return false;
    if (!equals(this.query_1, tmp0_other_with_cast.query_1))
      return false;
    return true;
  };
  function Or(mediaList) {
    this.mediaList_1 = mediaList;
    this.$stable_1 = 8;
  }
  protoOf(Or).get_mediaList_r4d4av_k$ = function () {
    return this.mediaList_1;
  };
  protoOf(Or).toString = function () {
    return joinToString(this.mediaList_1, ' or ');
  };
  protoOf(Or).component1_7eebsc_k$ = function () {
    return this.mediaList_1;
  };
  protoOf(Or).copy_g2hwic_k$ = function (mediaList) {
    return new Or(mediaList);
  };
  protoOf(Or).copy$default_21l8uf_k$ = function (mediaList, $super) {
    mediaList = mediaList === VOID ? this.mediaList_1 : mediaList;
    return $super === VOID ? this.copy_g2hwic_k$(mediaList) : $super.copy_g2hwic_k$.call(this, mediaList);
  };
  protoOf(Or).hashCode = function () {
    return hashCode(this.mediaList_1);
  };
  protoOf(Or).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Or))
      return false;
    var tmp0_other_with_cast = other instanceof Or ? other : THROW_CCE();
    if (!equals(this.mediaList_1, tmp0_other_with_cast.mediaList_1))
      return false;
    return true;
  };
  function CSSMediaQuery() {
  }
  function media_0(_this__u8e3s4, query, rulesBuild) {
    var rules = _this__u8e3s4.buildRules_xiubel_k$(rulesBuild);
    _this__u8e3s4.add_19esmm_k$(new CSSMediaRuleDeclaration(query, rules));
  }
  function get_$stableprop_62() {
    return 0;
  }
  function CSSMediaRuleDeclaration(query, rules) {
    this.query_1 = query;
    this.rules_1 = rules;
    this.$stable_1 = 0;
  }
  protoOf(CSSMediaRuleDeclaration).get_query_ixn1y7_k$ = function () {
    return this.query_1;
  };
  protoOf(CSSMediaRuleDeclaration).get_rules_iy6zf2_k$ = function () {
    return this.rules_1;
  };
  protoOf(CSSMediaRuleDeclaration).get_header_e7o2vq_k$ = function () {
    return '@media ' + toString(this.query_1);
  };
  protoOf(CSSMediaRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSMediaRuleDeclaration) {
      tmp = (equals(this.rules_1, other.rules_1) && equals(this.query_1, other.query_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function unaryMinus(_this__u8e3s4) {
    return new CSSUnitValueTyped(-_this__u8e3s4.value, _this__u8e3s4.unit);
  }
  function times(_this__u8e3s4, num) {
    return new CSSUnitValueTyped(_this__u8e3s4.value * numberToDouble(num), _this__u8e3s4.unit);
  }
  function times_0(_this__u8e3s4, unit) {
    return new CSSUnitValueTyped(unit.value * numberToDouble(_this__u8e3s4), unit.unit);
  }
  function CSSStyleRuleBuilder() {
  }
  function CSSRuleDeclaration() {
  }
  function get_$stableprop_63() {
    return 8;
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.selector_1 = selector;
    this.style_1 = style;
    this.$stable_1 = 8;
  }
  protoOf(CSSStyleRuleDeclaration).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(CSSStyleRuleDeclaration).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSStyleRuleDeclaration).get_header_e7o2vq_k$ = function () {
    return this.selector_1.asString_tqave4_k$();
  };
  protoOf(CSSStyleRuleDeclaration).component1_7eebsc_k$ = function () {
    return this.selector_1;
  };
  protoOf(CSSStyleRuleDeclaration).component2_7eebsb_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSStyleRuleDeclaration).copy_9nxmv3_k$ = function (selector, style) {
    return new CSSStyleRuleDeclaration(selector, style);
  };
  protoOf(CSSStyleRuleDeclaration).copy$default_opygl9_k$ = function (selector, style, $super) {
    selector = selector === VOID ? this.selector_1 : selector;
    style = style === VOID ? this.style_1 : style;
    return $super === VOID ? this.copy_9nxmv3_k$(selector, style) : $super.copy_9nxmv3_k$.call(this, selector, style);
  };
  protoOf(CSSStyleRuleDeclaration).toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + toString(this.selector_1) + ', style=' + toString(this.style_1) + ')';
  };
  protoOf(CSSStyleRuleDeclaration).hashCode = function () {
    var result = hashCode(this.selector_1);
    result = imul(result, 31) + hashCode(this.style_1) | 0;
    return result;
  };
  protoOf(CSSStyleRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSStyleRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.selector_1, tmp0_other_with_cast.selector_1))
      return false;
    if (!equals(this.style_1, tmp0_other_with_cast.style_1))
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
  function get_$stableprop_64() {
    return 0;
  }
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
    this.$stable_2 = 0;
  }
  function get_em(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.em' call
    Companion_getInstance_16();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'em');
  }
  function CSSUnitTime() {
  }
  function CSSUnitLength() {
  }
  function percent() {
  }
  function em() {
  }
  function ex() {
  }
  function ch() {
  }
  function ic() {
  }
  function rem() {
  }
  function lh() {
  }
  function rlh() {
  }
  function vw() {
  }
  function vh() {
  }
  function vi() {
  }
  function vb() {
  }
  function vmin() {
  }
  function vmax() {
  }
  function cm() {
  }
  function mm() {
  }
  function Q() {
  }
  function pt() {
  }
  function pc() {
  }
  function px() {
  }
  function deg() {
  }
  function grad() {
  }
  function rad() {
  }
  function turn() {
  }
  function s() {
  }
  function ms() {
  }
  function Hz() {
  }
  function kHz() {
  }
  function dpi() {
  }
  function dpcm() {
  }
  function dppx() {
  }
  function fr() {
  }
  function number() {
  }
  function Companion_15() {
    Companion_instance_15 = this;
  }
  protoOf(Companion_15).get_percent_9yntlw_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '%';
  };
  protoOf(Companion_15).get_em_knto0f_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'em';
  };
  protoOf(Companion_15).get_ex_knto04_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ex';
  };
  protoOf(Companion_15).get_ch_knto2a_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ch';
  };
  protoOf(Companion_15).get_ic_kntnx9_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ic';
  };
  protoOf(Companion_15).get_rem_18ix1r_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'rem';
  };
  protoOf(Companion_15).get_lh_kntnuj_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'lh';
  };
  protoOf(Companion_15).get_rlh_18iwvv_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'rlh';
  };
  protoOf(Companion_15).get_vw_kntnli_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vw';
  };
  protoOf(Companion_15).get_vh_kntnlx_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vh';
  };
  protoOf(Companion_15).get_vi_kntnlw_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vi';
  };
  protoOf(Companion_15).get_vb_kntnm3_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vb';
  };
  protoOf(Companion_15).get_vmin_wowbc5_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vmin';
  };
  protoOf(Companion_15).get_vmax_wowb5j_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'vmax';
  };
  protoOf(Companion_15).get_cm_knto25_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cm';
  };
  protoOf(Companion_15).get_mm_kntntj_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'mm';
  };
  protoOf(Companion_15).get_Q_1mhr54_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'Q';
  };
  protoOf(Companion_15).get_pt_kntnqr_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pt';
  };
  protoOf(Companion_15).get_pc_kntnr8_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pc';
  };
  protoOf(Companion_15).get_px_kntnqn_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'px';
  };
  protoOf(Companion_15).get_deg_18j7fn_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'deg';
  };
  protoOf(Companion_15).get_grad_womu1j_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'grad';
  };
  protoOf(Companion_15).get_rad_18ix5g_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'rad';
  };
  protoOf(Companion_15).get_turn_wov7ie_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'turn';
  };
  protoOf(Companion_15).get_s_1mhr62_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 's';
  };
  protoOf(Companion_15).get_ms_kntntd_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ms';
  };
  protoOf(Companion_15).get_Hz_kntop1_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'Hz';
  };
  protoOf(Companion_15).get_kHz_18j2x8_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'kHz';
  };
  protoOf(Companion_15).get_dpi_18j764_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dpi';
  };
  protoOf(Companion_15).get_dpcm_wokvnj_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dpcm';
  };
  protoOf(Companion_15).get_dppx_wokvz1_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dppx';
  };
  protoOf(Companion_15).get_fr_kntnzf_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'fr';
  };
  protoOf(Companion_15).get_number_hay53m_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'number';
  };
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function CSSUnit() {
  }
  function CSSUnitAngle() {
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    Companion_getInstance_16();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'px');
  }
  function CSSUnitLengthOrPercentage() {
  }
  function get_deg(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.deg' call
    Companion_getInstance_16();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'deg');
  }
  function get_cssRem(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.rem' call
    Companion_getInstance_16();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'rem');
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    Companion_getInstance_16();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function get_ms(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.ms' call
    Companion_getInstance_16();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'ms');
  }
  function get_fr(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.fr' call
    Companion_getInstance_16();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'fr');
  }
  function CSSUnitPercentage() {
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    Companion_getInstance_16();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vh');
  }
  function CSSUnitFlex() {
  }
  function get_$stableprop_65() {
    return 0;
  }
  function CSSUnitValueTyped(value, unit) {
    this.value_1 = value;
    this.unit_1 = unit;
    this.$stable_1 = 0;
  }
  protoOf(CSSUnitValueTyped).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(CSSUnitValueTyped).get_unit_wovp3h_k$ = function () {
    return this.unit_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.value_1 + toString(this.unit_1);
  };
  protoOf(CSSUnitValueTyped).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(CSSUnitValueTyped).component2_7eebsb_k$ = function () {
    return this.unit_1;
  };
  protoOf(CSSUnitValueTyped).copy_8jtivh_k$ = function (value, unit) {
    return new CSSUnitValueTyped(value, unit);
  };
  protoOf(CSSUnitValueTyped).copy$default_h58idk_k$ = function (value, unit, $super) {
    value = value === VOID ? this.value_1 : value;
    unit = unit === VOID ? this.unit_1 : unit;
    return $super === VOID ? this.copy_8jtivh_k$(value, unit) : $super.copy_8jtivh_k$.call(this, value, unit);
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.value_1);
    result = imul(result, 31) + hashCode(this.unit_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    var tmp0_other_with_cast = other instanceof CSSUnitValueTyped ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.unit_1, tmp0_other_with_cast.unit_1))
      return false;
    return true;
  };
  function CSSUnitRel() {
  }
  function CSSUnitAbs() {
  }
  function CSSUnitFrequency() {
  }
  function CSSUnitResolution() {
  }
  function get_$stableprop_66() {
    return 0;
  }
  function get_$stableprop_67() {
    return 0;
  }
  function HSL_init_$Init$(h, s, l, $this) {
    HSL.call($this, get_deg(h), s, l);
    return $this;
  }
  function HSL_init_$Create$(h, s, l) {
    return HSL_init_$Init$(h, s, l, objectCreate(protoOf(HSL)));
  }
  function get_$stableprop_68() {
    return 8;
  }
  function HSLA_init_$Init$(h, s, l, a, $this) {
    HSLA.call($this, get_deg(h), s, l, a);
    return $this;
  }
  function HSLA_init_$Create$(h, s, l, a) {
    return HSLA_init_$Init$(h, s, l, a, objectCreate(protoOf(HSLA)));
  }
  function get_$stableprop_69() {
    return 8;
  }
  function RGB(r, g, b) {
    this.r_1 = r;
    this.g_1 = g;
    this.b_1 = b;
    this.$stable_1 = 0;
  }
  protoOf(RGB).get_r_1mhr61_k$ = function () {
    return this.r_1;
  };
  protoOf(RGB).get_g_1mhr5q_k$ = function () {
    return this.g_1;
  };
  protoOf(RGB).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(RGB).toString = function () {
    return 'rgb(' + toString(this.r_1) + ', ' + toString(this.g_1) + ', ' + toString(this.b_1) + ')';
  };
  protoOf(RGB).component1_7eebsc_k$ = function () {
    return this.r_1;
  };
  protoOf(RGB).component2_7eebsb_k$ = function () {
    return this.g_1;
  };
  protoOf(RGB).component3_7eebsa_k$ = function () {
    return this.b_1;
  };
  protoOf(RGB).copy_w9xahi_k$ = function (r, g, b) {
    return new RGB(r, g, b);
  };
  protoOf(RGB).copy$default_inyh28_k$ = function (r, g, b, $super) {
    r = r === VOID ? this.r_1 : r;
    g = g === VOID ? this.g_1 : g;
    b = b === VOID ? this.b_1 : b;
    return $super === VOID ? this.copy_w9xahi_k$(r, g, b) : $super.copy_w9xahi_k$.call(this, r, g, b);
  };
  protoOf(RGB).hashCode = function () {
    var result = hashCode(this.r_1);
    result = imul(result, 31) + hashCode(this.g_1) | 0;
    result = imul(result, 31) + hashCode(this.b_1) | 0;
    return result;
  };
  protoOf(RGB).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RGB))
      return false;
    var tmp0_other_with_cast = other instanceof RGB ? other : THROW_CCE();
    if (!equals(this.r_1, tmp0_other_with_cast.r_1))
      return false;
    if (!equals(this.g_1, tmp0_other_with_cast.g_1))
      return false;
    if (!equals(this.b_1, tmp0_other_with_cast.b_1))
      return false;
    return true;
  };
  function RGBA(r, g, b, a) {
    this.r_1 = r;
    this.g_1 = g;
    this.b_1 = b;
    this.a_1 = a;
    this.$stable_1 = 0;
  }
  protoOf(RGBA).get_r_1mhr61_k$ = function () {
    return this.r_1;
  };
  protoOf(RGBA).get_g_1mhr5q_k$ = function () {
    return this.g_1;
  };
  protoOf(RGBA).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(RGBA).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(RGBA).toString = function () {
    return 'rgba(' + toString(this.r_1) + ', ' + toString(this.g_1) + ', ' + toString(this.b_1) + ', ' + toString(this.a_1) + ')';
  };
  protoOf(RGBA).component1_7eebsc_k$ = function () {
    return this.r_1;
  };
  protoOf(RGBA).component2_7eebsb_k$ = function () {
    return this.g_1;
  };
  protoOf(RGBA).component3_7eebsa_k$ = function () {
    return this.b_1;
  };
  protoOf(RGBA).component4_7eebs9_k$ = function () {
    return this.a_1;
  };
  protoOf(RGBA).copy_ko3x3f_k$ = function (r, g, b, a) {
    return new RGBA(r, g, b, a);
  };
  protoOf(RGBA).copy$default_hh1eth_k$ = function (r, g, b, a, $super) {
    r = r === VOID ? this.r_1 : r;
    g = g === VOID ? this.g_1 : g;
    b = b === VOID ? this.b_1 : b;
    a = a === VOID ? this.a_1 : a;
    return $super === VOID ? this.copy_ko3x3f_k$(r, g, b, a) : $super.copy_ko3x3f_k$.call(this, r, g, b, a);
  };
  protoOf(RGBA).hashCode = function () {
    var result = hashCode(this.r_1);
    result = imul(result, 31) + hashCode(this.g_1) | 0;
    result = imul(result, 31) + hashCode(this.b_1) | 0;
    result = imul(result, 31) + hashCode(this.a_1) | 0;
    return result;
  };
  protoOf(RGBA).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RGBA))
      return false;
    var tmp0_other_with_cast = other instanceof RGBA ? other : THROW_CCE();
    if (!equals(this.r_1, tmp0_other_with_cast.r_1))
      return false;
    if (!equals(this.g_1, tmp0_other_with_cast.g_1))
      return false;
    if (!equals(this.b_1, tmp0_other_with_cast.b_1))
      return false;
    if (!equals(this.a_1, tmp0_other_with_cast.a_1))
      return false;
    return true;
  };
  function HSL(h, s, l) {
    this.h_1 = h;
    this.s_1 = s;
    this.l_1 = l;
    this.$stable_1 = 8;
  }
  protoOf(HSL).get_h_1mhr5r_k$ = function () {
    return this.h_1;
  };
  protoOf(HSL).get_s_1mhr62_k$ = function () {
    return this.s_1;
  };
  protoOf(HSL).get_l_1mhr5v_k$ = function () {
    return this.l_1;
  };
  protoOf(HSL).toString = function () {
    return 'hsl(' + toString(this.h_1) + ', ' + toString(this.s_1) + '%, ' + toString(this.l_1) + '%)';
  };
  protoOf(HSL).component1_7eebsc_k$ = function () {
    return this.h_1;
  };
  protoOf(HSL).component2_7eebsb_k$ = function () {
    return this.s_1;
  };
  protoOf(HSL).component3_7eebsa_k$ = function () {
    return this.l_1;
  };
  protoOf(HSL).copy_ygvtow_k$ = function (h, s, l) {
    return new HSL(h, s, l);
  };
  protoOf(HSL).copy$default_ofxxj4_k$ = function (h, s, l, $super) {
    h = h === VOID ? this.h_1 : h;
    s = s === VOID ? this.s_1 : s;
    l = l === VOID ? this.l_1 : l;
    return $super === VOID ? this.copy_ygvtow_k$(h, s, l) : $super.copy_ygvtow_k$.call(this, h, s, l);
  };
  protoOf(HSL).hashCode = function () {
    var result = hashCode(this.h_1);
    result = imul(result, 31) + hashCode(this.s_1) | 0;
    result = imul(result, 31) + hashCode(this.l_1) | 0;
    return result;
  };
  protoOf(HSL).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HSL))
      return false;
    var tmp0_other_with_cast = other instanceof HSL ? other : THROW_CCE();
    if (!equals(this.h_1, tmp0_other_with_cast.h_1))
      return false;
    if (!equals(this.s_1, tmp0_other_with_cast.s_1))
      return false;
    if (!equals(this.l_1, tmp0_other_with_cast.l_1))
      return false;
    return true;
  };
  function HSLA(h, s, l, a) {
    this.h_1 = h;
    this.s_1 = s;
    this.l_1 = l;
    this.a_1 = a;
    this.$stable_1 = 8;
  }
  protoOf(HSLA).get_h_1mhr5r_k$ = function () {
    return this.h_1;
  };
  protoOf(HSLA).get_s_1mhr62_k$ = function () {
    return this.s_1;
  };
  protoOf(HSLA).get_l_1mhr5v_k$ = function () {
    return this.l_1;
  };
  protoOf(HSLA).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(HSLA).toString = function () {
    return 'hsla(' + toString(this.h_1) + ', ' + toString(this.s_1) + '%, ' + toString(this.l_1) + '%, ' + toString(this.a_1) + ')';
  };
  protoOf(HSLA).component1_7eebsc_k$ = function () {
    return this.h_1;
  };
  protoOf(HSLA).component2_7eebsb_k$ = function () {
    return this.s_1;
  };
  protoOf(HSLA).component3_7eebsa_k$ = function () {
    return this.l_1;
  };
  protoOf(HSLA).component4_7eebs9_k$ = function () {
    return this.a_1;
  };
  protoOf(HSLA).copy_js7xvf_k$ = function (h, s, l, a) {
    return new HSLA(h, s, l, a);
  };
  protoOf(HSLA).copy$default_jvkpn_k$ = function (h, s, l, a, $super) {
    h = h === VOID ? this.h_1 : h;
    s = s === VOID ? this.s_1 : s;
    l = l === VOID ? this.l_1 : l;
    a = a === VOID ? this.a_1 : a;
    return $super === VOID ? this.copy_js7xvf_k$(h, s, l, a) : $super.copy_js7xvf_k$.call(this, h, s, l, a);
  };
  protoOf(HSLA).hashCode = function () {
    var result = hashCode(this.h_1);
    result = imul(result, 31) + hashCode(this.s_1) | 0;
    result = imul(result, 31) + hashCode(this.l_1) | 0;
    result = imul(result, 31) + hashCode(this.a_1) | 0;
    return result;
  };
  protoOf(HSLA).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HSLA))
      return false;
    var tmp0_other_with_cast = other instanceof HSLA ? other : THROW_CCE();
    if (!equals(this.h_1, tmp0_other_with_cast.h_1))
      return false;
    if (!equals(this.s_1, tmp0_other_with_cast.s_1))
      return false;
    if (!equals(this.l_1, tmp0_other_with_cast.l_1))
      return false;
    if (!equals(this.a_1, tmp0_other_with_cast.a_1))
      return false;
    return true;
  };
  function get_$stableprop_70() {
    return 0;
  }
  function Color_0() {
    Color_instance_0 = this;
    this.$stable_1 = 0;
  }
  protoOf(Color_0).get_aliceblue_zbd233_k$ = function () {
    return Color_1('aliceblue');
  };
  protoOf(Color_0).get_antiquewhite_dljfeb_k$ = function () {
    return Color_1('antiquewhite');
  };
  protoOf(Color_0).get_aquamarine_jqard_k$ = function () {
    return Color_1('aquamarine');
  };
  protoOf(Color_0).get_azure_ioxv8m_k$ = function () {
    return Color_1('azure');
  };
  protoOf(Color_0).get_beige_ip3zy3_k$ = function () {
    return Color_1('beige');
  };
  protoOf(Color_0).get_bisque_bfxany_k$ = function () {
    return Color_1('bisque');
  };
  protoOf(Color_0).get_black_ip8aty_k$ = function () {
    return Color_1('black');
  };
  protoOf(Color_0).get_blanchedalmond_xh00hz_k$ = function () {
    return Color_1('blanchedalmond');
  };
  protoOf(Color_0).get_blue_wojj4z_k$ = function () {
    return Color_1('blue');
  };
  protoOf(Color_0).get_blueviolet_4c63a6_k$ = function () {
    return Color_1('blueviolet');
  };
  protoOf(Color_0).get_brown_ipcfm5_k$ = function () {
    return Color_1('brown');
  };
  protoOf(Color_0).get_burlywood_oa2kz4_k$ = function () {
    return Color_1('burlywood');
  };
  protoOf(Color_0).get_cadetblue_cuot2e_k$ = function () {
    return Color_1('cadetblue');
  };
  protoOf(Color_0).get_chartreuse_9n36cf_k$ = function () {
    return Color_1('chartreuse');
  };
  protoOf(Color_0).get_chocolate_jw6x03_k$ = function () {
    return Color_1('chocolate');
  };
  protoOf(Color_0).get_cornflowerblue_alq49m_k$ = function () {
    return Color_1('cornflowerblue');
  };
  protoOf(Color_0).get_cornsilk_vnj6x2_k$ = function () {
    return Color_1('cornsilk');
  };
  protoOf(Color_0).get_crimson_icc9h2_k$ = function () {
    return Color_1('crimson');
  };
  protoOf(Color_0).get_cyan_wokfak_k$ = function () {
    return Color_1('cyan');
  };
  protoOf(Color_0).get_darkblue_304dbb_k$ = function () {
    return Color_1('darkblue');
  };
  protoOf(Color_0).get_darkcyan_303h5q_k$ = function () {
    return Color_1('darkcyan');
  };
  protoOf(Color_0).get_darkgoldenrod_cl11rz_k$ = function () {
    return Color_1('darkgoldenrod');
  };
  protoOf(Color_0).get_darkgray_3012e6_k$ = function () {
    return Color_1('darkgray');
  };
  protoOf(Color_0).get_darkgreen_lzsxng_k$ = function () {
    return Color_1('darkgreen');
  };
  protoOf(Color_0).get_darkkhaki_lxs7z1_k$ = function () {
    return Color_1('darkkhaki');
  };
  protoOf(Color_0).get_darkmagenta_vkc9h2_k$ = function () {
    return Color_1('darkmagenta');
  };
  protoOf(Color_0).get_darkolivegreen_7vcpa1_k$ = function () {
    return Color_1('darkolivegreen');
  };
  protoOf(Color_0).get_darkorange_w9i6ct_k$ = function () {
    return Color_1('darkorange');
  };
  protoOf(Color_0).get_darkorchid_w9jbxe_k$ = function () {
    return Color_1('darkorchid');
  };
  protoOf(Color_0).get_darkred_p3vtde_k$ = function () {
    return Color_1('darkred');
  };
  protoOf(Color_0).get_darksalmon_xwj65p_k$ = function () {
    return Color_1('darksalmon');
  };
  protoOf(Color_0).get_darkslateblue_i855d8_k$ = function () {
    return Color_1('darkslateblue');
  };
  protoOf(Color_0).get_darkslategray_i81ug3_k$ = function () {
    return Color_1('darkslategray');
  };
  protoOf(Color_0).get_darkturquoise_xgbo76_k$ = function () {
    return Color_1('darkturquoise');
  };
  protoOf(Color_0).get_darkviolet_zg4a2m_k$ = function () {
    return Color_1('darkviolet');
  };
  protoOf(Color_0).get_deeppink_le8j4l_k$ = function () {
    return Color_1('deeppink');
  };
  protoOf(Color_0).get_deepskyblue_cz0co6_k$ = function () {
    return Color_1('deepskyblue');
  };
  protoOf(Color_0).get_dimgray_stf9j6_k$ = function () {
    return Color_1('dimgray');
  };
  protoOf(Color_0).get_dodgerblue_tguua_k$ = function () {
    return Color_1('dodgerblue');
  };
  protoOf(Color_0).get_firebrick_3tq2w2_k$ = function () {
    return Color_1('firebrick');
  };
  protoOf(Color_0).get_floralwhite_5zrd1w_k$ = function () {
    return Color_1('floralwhite');
  };
  protoOf(Color_0).get_forestgreen_q0ckd_k$ = function () {
    return Color_1('forestgreen');
  };
  protoOf(Color_0).get_fuchsia_7bu1aq_k$ = function () {
    return Color_1('fuchsia');
  };
  protoOf(Color_0).get_gainsboro_t2wzuz_k$ = function () {
    return Color_1('gainsboro');
  };
  protoOf(Color_0).get_ghostwhite_b9ngjh_k$ = function () {
    return Color_1('ghostwhite');
  };
  protoOf(Color_0).get_goldenrod_cnlggb_k$ = function () {
    return Color_1('goldenrod');
  };
  protoOf(Color_0).get_gold_woms2x_k$ = function () {
    return Color_1('gold');
  };
  protoOf(Color_0).get_gray_womu24_k$ = function () {
    return Color_1('gray');
  };
  protoOf(Color_0).get_green_is36qi_k$ = function () {
    return Color_1('green');
  };
  protoOf(Color_0).get_greenyellow_5bsysy_k$ = function () {
    return Color_1('greenyellow');
  };
  protoOf(Color_0).get_honeydew_voejes_k$ = function () {
    return Color_1('honeydew');
  };
  protoOf(Color_0).get_hotpink_jg67h6_k$ = function () {
    return Color_1('hotpink');
  };
  protoOf(Color_0).get_indianred_3a95lb_k$ = function () {
    return Color_1('indianred');
  };
  protoOf(Color_0).get_indigo_etpvbv_k$ = function () {
    return Color_1('indigo');
  };
  protoOf(Color_0).get_ivory_it9jls_k$ = function () {
    return Color_1('ivory');
  };
  protoOf(Color_0).get_khaki_iu3wex_k$ = function () {
    return Color_1('khaki');
  };
  protoOf(Color_0).get_lavenderblush_x9vfqo_k$ = function () {
    return Color_1('lavenderblush');
  };
  protoOf(Color_0).get_lavender_gamgsw_k$ = function () {
    return Color_1('lavender');
  };
  protoOf(Color_0).get_lawngreen_qrrc9a_k$ = function () {
    return Color_1('lawngreen');
  };
  protoOf(Color_0).get_lemonchiffon_bkotvd_k$ = function () {
    return Color_1('lemonchiffon');
  };
  protoOf(Color_0).get_lightblue_jv04av_k$ = function () {
    return Color_1('lightblue');
  };
  protoOf(Color_0).get_lightcoral_nkb53w_k$ = function () {
    return Color_1('lightcoral');
  };
  protoOf(Color_0).get_lightcyan_jv10gg_k$ = function () {
    return Color_1('lightcyan');
  };
  protoOf(Color_0).get_lightgoldenrodyellow_u5ont1_k$ = function () {
    return Color_1('lightgoldenrodyellow');
  };
  protoOf(Color_0).get_lightgray_jv3f80_k$ = function () {
    return Color_1('lightgray');
  };
  protoOf(Color_0).get_lightgreen_ni2bbe_k$ = function () {
    return Color_1('lightgreen');
  };
  protoOf(Color_0).get_lightpink_jv8zqb_k$ = function () {
    return Color_1('lightpink');
  };
  protoOf(Color_0).get_lightsalmon_ctjlgl_k$ = function () {
    return Color_1('lightsalmon');
  };
  protoOf(Color_0).get_lightseagreen_l37xtt_k$ = function () {
    return Color_1('lightseagreen');
  };
  protoOf(Color_0).get_lightskyblue_xo7be6_k$ = function () {
    return Color_1('lightskyblue');
  };
  protoOf(Color_0).get_lightslategray_94c373_k$ = function () {
    return Color_1('lightslategray');
  };
  protoOf(Color_0).get_lightsteelblue_7ajpzs_k$ = function () {
    return Color_1('lightsteelblue');
  };
  protoOf(Color_0).get_lightyellow_9x2pgf_k$ = function () {
    return Color_1('lightyellow');
  };
  protoOf(Color_0).get_limegreen_za9mzp_k$ = function () {
    return Color_1('limegreen');
  };
  protoOf(Color_0).get_lime_wopula_k$ = function () {
    return Color_1('lime');
  };
  protoOf(Color_0).get_linen_iuolht_k$ = function () {
    return Color_1('linen');
  };
  protoOf(Color_0).get_magenta_ez2mdc_k$ = function () {
    return Color_1('magenta');
  };
  protoOf(Color_0).get_maroon_gj03nd_k$ = function () {
    return Color_1('maroon');
  };
  protoOf(Color_0).get_mediumaquamarine_5rzm9o_k$ = function () {
    return Color_1('mediumaquamarine');
  };
  protoOf(Color_0).get_mediumblue_lkyztk_k$ = function () {
    return Color_1('mediumblue');
  };
  protoOf(Color_0).get_mediumorchid_61uowx_k$ = function () {
    return Color_1('mediumorchid');
  };
  protoOf(Color_0).get_mediumpurple_6ktfwa_k$ = function () {
    return Color_1('mediumpurple');
  };
  protoOf(Color_0).get_mediumseagreen_eiyd7y_k$ = function () {
    return Color_1('mediumseagreen');
  };
  protoOf(Color_0).get_mediumslateblue_tihwln_k$ = function () {
    return Color_1('mediumslateblue');
  };
  protoOf(Color_0).get_mediumspringgreen_eyoffs_k$ = function () {
    return Color_1('mediumspringgreen');
  };
  protoOf(Color_0).get_mediumturquoise_m5ywyr_k$ = function () {
    return Color_1('mediumturquoise');
  };
  protoOf(Color_0).get_mediumvioletred_3y6scs_k$ = function () {
    return Color_1('mediumvioletred');
  };
  protoOf(Color_0).get_midnightblue_asvt6b_k$ = function () {
    return Color_1('midnightblue');
  };
  protoOf(Color_0).get_mintcream_r411vb_k$ = function () {
    return Color_1('mintcream');
  };
  protoOf(Color_0).get_mistyrose_tt03wi_k$ = function () {
    return Color_1('mistyrose');
  };
  protoOf(Color_0).get_moccasin_shacrm_k$ = function () {
    return Color_1('moccasin');
  };
  protoOf(Color_0).get_navajowhite_7mwunx_k$ = function () {
    return Color_1('navajowhite');
  };
  protoOf(Color_0).get_navi_woqyun_k$ = function () {
    return Color_1('navi');
  };
  protoOf(Color_0).get_oldlace_lja7qj_k$ = function () {
    return Color_1('oldlace');
  };
  protoOf(Color_0).get_olivedrab_imctun_k$ = function () {
    return Color_1('olivedrab');
  };
  protoOf(Color_0).get_olive_iwdsxe_k$ = function () {
    return Color_1('olive');
  };
  protoOf(Color_0).get_orange_hq4yt3_k$ = function () {
    return Color_1('orange');
  };
  protoOf(Color_0).get_orangered_x4yzui_k$ = function () {
    return Color_1('orangered');
  };
  protoOf(Color_0).get_orchid_hq64do_k$ = function () {
    return Color_1('orchid');
  };
  protoOf(Color_0).get_palegoldenrod_a3qfbf_k$ = function () {
    return Color_1('palegoldenrod');
  };
  protoOf(Color_0).get_palegreen_plzr00_k$ = function () {
    return Color_1('palegreen');
  };
  protoOf(Color_0).get_paleturquoise_uz11qm_k$ = function () {
    return Color_1('paleturquoise');
  };
  protoOf(Color_0).get_palevioletred_4uvcf3_k$ = function () {
    return Color_1('palevioletred');
  };
  protoOf(Color_0).get_papayawhip_6f4lm3_k$ = function () {
    return Color_1('papayawhip');
  };
  protoOf(Color_0).get_peachpuff_lhfvhv_k$ = function () {
    return Color_1('peachpuff');
  };
  protoOf(Color_0).get_peru_wosbpd_k$ = function () {
    return Color_1('peru');
  };
  protoOf(Color_0).get_pink_wosekf_k$ = function () {
    return Color_1('pink');
  };
  protoOf(Color_0).get_plum_wosgyl_k$ = function () {
    return Color_1('plum');
  };
  protoOf(Color_0).get_powderblue_xfkoo4_k$ = function () {
    return Color_1('powderblue');
  };
  protoOf(Color_0).get_purple_i94vd1_k$ = function () {
    return Color_1('purple');
  };
  protoOf(Color_0).get_rebeccapurple_4oj1nm_k$ = function () {
    return Color_1('rebeccapurple');
  };
  protoOf(Color_0).get_red_18ix20_k$ = function () {
    return Color_1('red');
  };
  protoOf(Color_0).get_rosybrown_fqcd86_k$ = function () {
    return Color_1('rosybrown');
  };
  protoOf(Color_0).get_royalblue_9wxzgo_k$ = function () {
    return Color_1('royalblue');
  };
  protoOf(Color_0).get_saddlebrown_anoxye_k$ = function () {
    return Color_1('saddlebrown');
  };
  protoOf(Color_0).get_salmon_jd5ylz_k$ = function () {
    return Color_1('salmon');
  };
  protoOf(Color_0).get_sandybrown_gxgn12_k$ = function () {
    return Color_1('sandybrown');
  };
  protoOf(Color_0).get_seagreen_h9n76r_k$ = function () {
    return Color_1('seagreen');
  };
  protoOf(Color_0).get_seashell_h381rq_k$ = function () {
    return Color_1('seashell');
  };
  protoOf(Color_0).get_sienna_jhfv5n_k$ = function () {
    return Color_1('sienna');
  };
  protoOf(Color_0).get_silver_jhkhsm_k$ = function () {
    return Color_1('silver');
  };
  protoOf(Color_0).get_skyblue_y0h81a_k$ = function () {
    return Color_1('skyblue');
  };
  protoOf(Color_0).get_slateblue_rkcedm_k$ = function () {
    return Color_1('slateblue');
  };
  protoOf(Color_0).get_slategray_rkfpar_k$ = function () {
    return Color_1('slategray');
  };
  protoOf(Color_0).get_snow_wouf9o_k$ = function () {
    return Color_1('snow');
  };
  protoOf(Color_0).get_springgreen_21calp_k$ = function () {
    return Color_1('springgreen');
  };
  protoOf(Color_0).get_steelblue_pqnc3g_k$ = function () {
    return Color_1('steelblue');
  };
  protoOf(Color_0).get_teal_wouv8l_k$ = function () {
    return Color_1('teal');
  };
  protoOf(Color_0).get_thistle_kzphzu_k$ = function () {
    return Color_1('thistle');
  };
  protoOf(Color_0).get_tomato_k1x3ir_k$ = function () {
    return Color_1('tomato');
  };
  protoOf(Color_0).get_turquoise_87p5yw_k$ = function () {
    return Color_1('turquoise');
  };
  protoOf(Color_0).get_violet_kwr2iw_k$ = function () {
    return Color_1('violet');
  };
  protoOf(Color_0).get_wheat_j0pi9q_k$ = function () {
    return Color_1('wheat');
  };
  protoOf(Color_0).get_white_j0plog_k$ = function () {
    return Color_1('white');
  };
  protoOf(Color_0).get_whitesmoke_flfij5_k$ = function () {
    return Color_1('whitesmoke');
  };
  protoOf(Color_0).get_yellowgreen_5hm6jq_k$ = function () {
    return Color_1('yellowgreen');
  };
  protoOf(Color_0).get_yellow_m9mum5_k$ = function () {
    return Color_1('yellow');
  };
  protoOf(Color_0).get_transparent_enj387_k$ = function () {
    return Color_1('transparent');
  };
  protoOf(Color_0).get_currentColor_semt9v_k$ = function () {
    return Color_1('currentColor');
  };
  var Color_instance_0;
  function Color_getInstance_0() {
    if (Color_instance_0 == null)
      new Color_0();
    return Color_instance_0;
  }
  function rgb(r, g, b) {
    return new RGB_0(r, g, b);
  }
  function rgba(r, g, b, a) {
    return new RGBA_0(r, g, b, a);
  }
  function Color_1(name) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return name;
  }
  function RGB_0(r, g, b) {
    this.r_1 = r;
    this.g_1 = g;
    this.b_1 = b;
  }
  protoOf(RGB_0).get_r_1mhr61_k$ = function () {
    return this.r_1;
  };
  protoOf(RGB_0).get_g_1mhr5q_k$ = function () {
    return this.g_1;
  };
  protoOf(RGB_0).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(RGB_0).toString = function () {
    return 'rgb(' + toString(this.r_1) + ', ' + toString(this.g_1) + ', ' + toString(this.b_1) + ')';
  };
  function RGBA_0(r, g, b, a) {
    this.r_1 = r;
    this.g_1 = g;
    this.b_1 = b;
    this.a_1 = a;
  }
  protoOf(RGBA_0).get_r_1mhr61_k$ = function () {
    return this.r_1;
  };
  protoOf(RGBA_0).get_g_1mhr5q_k$ = function () {
    return this.g_1;
  };
  protoOf(RGBA_0).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(RGBA_0).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(RGBA_0).toString = function () {
    return 'rgba(' + toString(this.r_1) + ', ' + toString(this.g_1) + ', ' + toString(this.b_1) + ', ' + toString(this.a_1) + ')';
  };
  function StylePropertyValue(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function StylePropertyValue_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function StyleScope() {
  }
  function get_$stableprop_71() {
    return 0;
  }
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.properties_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.variables_1 = ArrayList_init_$Create$();
    this.$stable_1 = 0;
  }
  protoOf(StyleScopeBuilder).get_properties_zhllqc_k$ = function () {
    return this.properties_1;
  };
  protoOf(StyleScopeBuilder).get_variables_75f0zy_k$ = function () {
    return this.variables_1;
  };
  protoOf(StyleScopeBuilder).property_npxg1h_k$ = function (propertyName, value) {
    this.get_properties_zhllqc_k$().add_utx5q5_k$(new StylePropertyDeclaration(propertyName, value));
  };
  protoOf(StyleScopeBuilder).variable_px6kuc_k$ = function (variableName, value) {
    this.get_variables_75f0zy_k$().add_utx5q5_k$(new StylePropertyDeclaration(variableName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = (nativeEquals(this.get_properties_zhllqc_k$(), other.get_properties_zhllqc_k$()) && nativeEquals(this.get_variables_75f0zy_k$(), other.get_variables_75f0zy_k$()));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StyleScopeBuilder).copyFrom_b6psnf_k$ = function (sb) {
    this.get_properties_zhllqc_k$().addAll_4lagoh_k$(sb.get_properties_zhllqc_k$());
    this.get_variables_75f0zy_k$().addAll_4lagoh_k$(sb.get_variables_75f0zy_k$());
  };
  function get_$stableprop_72() {
    return 0;
  }
  function CSSStyleVariable(name) {
    this.name_1 = name;
    this.$stable_1 = 0;
  }
  protoOf(CSSStyleVariable).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  function StyleHolder() {
  }
  function StylePropertyDeclaration_init_$Init$(name, value, $this) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    StylePropertyDeclaration.call($this, name, value);
    return $this;
  }
  function StylePropertyDeclaration_init_$Create$(name, value) {
    return StylePropertyDeclaration_init_$Init$(name, value, objectCreate(protoOf(StylePropertyDeclaration)));
  }
  function StylePropertyDeclaration_init_$Init$_0(name, value, $this) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    StylePropertyDeclaration.call($this, name, value);
    return $this;
  }
  function StylePropertyDeclaration_init_$Create$_0(name, value) {
    return StylePropertyDeclaration_init_$Init$_0(name, value, objectCreate(protoOf(StylePropertyDeclaration)));
  }
  function get_$stableprop_73() {
    return 8;
  }
  function StylePropertyDeclaration(name, value) {
    this.name_1 = name;
    this.value_1 = value;
    this.$stable_1 = 8;
  }
  protoOf(StylePropertyDeclaration).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(StylePropertyDeclaration).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(StylePropertyDeclaration).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(StylePropertyDeclaration).component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  protoOf(StylePropertyDeclaration).copy_jp7ayt_k$ = function (name, value) {
    return new StylePropertyDeclaration(name, value);
  };
  protoOf(StylePropertyDeclaration).copy$default_76k51p_k$ = function (name, value, $super) {
    name = name === VOID ? this.name_1 : name;
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_jp7ayt_k$(name, value) : $super.copy_jp7ayt_k$.call(this, name, value);
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.name_1 + ', value=' + toString(this.value_1) + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.value_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.get_size_woubt6_k$() === properties.get_size_woubt6_k$()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = _this__u8e3s4.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.css.nativeEquals.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var otherProp = properties.get_c1px32_k$(tmp0);
        if (!(element.name_1 === otherProp.name_1 && toString(element.value_1) === toString(otherProp.value_1))) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function CSSVariable() {
  }
  function CSSVariableValue(value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function CSSVariableValue_0(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function _set_counter__gelo1j($this, _set____db54di) {
    $this.counter_1 = _set____db54di;
  }
  function _get_counter__t0a3kl($this) {
    return $this.counter_1;
  }
  function get_$stableprop_74() {
    return 8;
  }
  function _get_prefix__wiwq7t($this) {
    return $this.prefix_1;
  }
  function _get_cssBuilder__bqqveb($this) {
    return $this.cssBuilder_1;
  }
  function sam$kotlin_properties_ReadOnlyProperty$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_properties_ReadOnlyProperty$0).getValue_4u4kqi_k$ = function (thisRef, property) {
    return this.function_1(thisRef, property);
  };
  protoOf(sam$kotlin_properties_ReadOnlyProperty$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_properties_ReadOnlyProperty$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ReadOnlyProperty) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_properties_ReadOnlyProperty$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function StyleSheet$CSSHolder$provideDelegate$selector$1($className) {
    this.$className_1 = $className;
    CSSSelector.call(this);
  }
  protoOf(StyleSheet$CSSHolder$provideDelegate$selector$1).asString_tqave4_k$ = function () {
    return '.' + this.$className_1;
  };
  function StyleSheet$CSSHolder$provideDelegate$lambda($className) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
      return $className;
    };
  }
  function _get_prefix__wiwq7t_0($this) {
    return $this.prefix_1;
  }
  function _get_keyframesBuilder__6j3x4l($this) {
    return $this.keyframesBuilder_1;
  }
  function sam$kotlin_properties_ReadOnlyProperty$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_properties_ReadOnlyProperty$0_0).getValue_4u4kqi_k$ = function (thisRef, property) {
    return this.function_1(thisRef, property);
  };
  protoOf(sam$kotlin_properties_ReadOnlyProperty$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_properties_ReadOnlyProperty$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ReadOnlyProperty) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_properties_ReadOnlyProperty$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function StyleSheet$CSSKeyframesHolder$provideDelegate$lambda($rule) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
      return $rule;
    };
  }
  function _get_rulesHolder__jsmg7m($this) {
    return $this.rulesHolder_1;
  }
  function _get_boundClasses__m0yanx($this) {
    return $this.boundClasses_1;
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
  function Companion_16() {
    Companion_instance_16 = this;
    this.counter_1 = 0;
  }
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function CSSSelfSelector(selector) {
    selector = selector === VOID ? null : selector;
    CSSSelector.call(this);
    this.selector_1 = selector;
    this.$stable_2 = 8;
  }
  protoOf(CSSSelfSelector).set_selector_dlnrps_k$ = function (_set____db54di) {
    this.selector_1 = _set____db54di;
  };
  protoOf(CSSSelfSelector).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(CSSSelfSelector).toString = function () {
    throw IllegalStateException_init_$Create$("You can't concatenate `String + CSSSelector` which contains `self` or `root`. Use `selector(<your string>)` to convert `String` to `CSSSelector` for proper work. https://github.com/JetBrains/compose-jb/issues/1440");
  };
  protoOf(CSSSelfSelector).asString_tqave4_k$ = function () {
    var tmp0_safe_receiver = this.selector_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.asString_tqave4_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("You can't instantiate self");
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CSSSelfSelector).equals = function (other) {
    return other instanceof CSSSelfSelector;
  };
  function CSSHolder(prefix, cssBuilder) {
    this.prefix_1 = prefix;
    this.cssBuilder_1 = cssBuilder;
  }
  protoOf(CSSHolder).provideDelegate_vagi2_k$ = function (sheet, property) {
    var className = this.prefix_1 + property.callableName;
    var selector = new StyleSheet$CSSHolder$provideDelegate$selector$1(className);
    var tmp0_container = buildCSS(selector, selector, this.cssBuilder_1);
    var properties = tmp0_container.component1_7eebsc_k$();
    var rules = tmp0_container.component2_7eebsb_k$();
    sheet.add_h1zelh_k$(selector, properties);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = rules.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.css.CSSHolder.provideDelegate.<anonymous>' call
      sheet.add_19esmm_k$(element);
    }
    var tmp = StyleSheet$CSSHolder$provideDelegate$lambda(className);
    return new sam$kotlin_properties_ReadOnlyProperty$0(tmp);
  };
  function CSSKeyframesHolder(prefix, keyframesBuilder) {
    this.prefix_1 = prefix;
    this.keyframesBuilder_1 = keyframesBuilder;
  }
  protoOf(CSSKeyframesHolder).provideDelegate_vagi2_k$ = function (sheet, property) {
    var keyframesName = this.prefix_1 + property.callableName;
    var rule = buildKeyframes(keyframesName, this.keyframesBuilder_1);
    sheet.add_19esmm_k$(rule);
    var tmp = StyleSheet$CSSKeyframesHolder$provideDelegate$lambda(rule);
    return new sam$kotlin_properties_ReadOnlyProperty$0_0(tmp);
  };
  function get_$stableprop_75() {
    return 0;
  }
  function StyleSheet(customPrefix, rulesHolder) {
    Companion_getInstance_17();
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    this.rulesHolder_1 = rulesHolder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.boundClasses_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    tmp_0.prefix_1 = customPrefix == null ? '' + getKClassFromExpression(this).get_simpleName_r6f8py_k$() + '-' : customPrefix;
    this.usePrefix_1 = customPrefix == null;
    this.$stable_1 = 0;
  }
  protoOf(StyleSheet).get_cssRules_jdoznh_k$ = function () {
    return this.rulesHolder_1.get_cssRules_jdoznh_k$();
  };
  protoOf(StyleSheet).add_19esmm_k$ = function (cssRule) {
    this.rulesHolder_1.add_19esmm_k$(cssRule);
  };
  protoOf(StyleSheet).add_h1zelh_k$ = function (selector, style) {
    this.rulesHolder_1.add_h1zelh_k$(selector, style);
  };
  protoOf(StyleSheet).get_prefix_i78za3_k$ = function () {
    return this.prefix_1;
  };
  protoOf(StyleSheet).get_usePrefix_1oon1s_k$ = function () {
    return this.usePrefix_1;
  };
  protoOf(StyleSheet).style_z1ubaq_k$ = function (cssRule) {
    return new CSSHolder(this.prefix_1, cssRule);
  };
  protoOf(StyleSheet).keyframes_yhb7t5_k$ = function (cssKeyframes) {
    return new CSSKeyframesHolder(this.prefix_1, cssKeyframes);
  };
  protoOf(StyleSheet).buildRules_fgavxj_k$ = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    rulesBuild(this_0);
    return this_0.get_cssRules_jdoznh_k$();
  };
  protoOf(StyleSheet).buildRules_xiubel_k$ = function (rulesBuild) {
    return this.buildRules_fgavxj_k$(rulesBuild);
  };
  protoOf(StyleSheet).style_r4zx12_k$ = function (selector, cssRule) {
    return this.style_pgxmpo_k$(selector, cssRule);
  };
  function get_$stableprop_76() {
    return 0;
  }
  function CSSRulesHolderState() {
    this.cssRules_1 = mutableStateListOf();
    this.$stable_1 = 0;
  }
  protoOf(CSSRulesHolderState).get_cssRules_jdoznh_k$ = function () {
    return this.cssRules_1;
  };
  protoOf(CSSRulesHolderState).add_19esmm_k$ = function (cssRule) {
    this.cssRules_1.add_wl2rvy_k$(cssRule);
  };
  function buildCSS(thisClass, thisContext, cssRule) {
    var styleSheet = new StyleSheetBuilderImpl();
    var tmp0_elvis_lhs = thisClass instanceof CSSSelfSelector ? thisClass : null;
    var root = tmp0_elvis_lhs == null ? new CSSSelfSelector(thisClass) : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = thisContext instanceof CSSSelfSelector ? thisContext : null;
    var self_0 = tmp1_elvis_lhs == null ? new CSSSelfSelector(thisContext) : tmp1_elvis_lhs;
    var builder = new CSSBuilderImpl(root, self_0, styleSheet);
    cssRule(builder);
    return to(builder, styleSheet.get_cssRules_jdoznh_k$());
  }
  function Style(styleSheet, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1196466140);
    Style_1(null, styleSheet.get_cssRules_jdoznh_k$(), $composer_0, 0, 1);
    $composer_0.endReplaceableGroup_ern0ak_k$();
  }
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.selector_1 = selector;
  }
  protoOf(RawSelector).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(RawSelector).toString = function () {
    return this.selector_1;
  };
  protoOf(RawSelector).component1_7eebsc_k$ = function () {
    return this.selector_1;
  };
  protoOf(RawSelector).copy_a35qlh_k$ = function (selector) {
    return new RawSelector(selector);
  };
  protoOf(RawSelector).copy$default_o88rc3_k$ = function (selector, $super) {
    selector = selector === VOID ? this.selector_1 : selector;
    return $super === VOID ? this.copy_a35qlh_k$(selector) : $super.copy_a35qlh_k$.call(this, selector);
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.selector_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.selector_1 === tmp0_other_with_cast.selector_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function Combine$asString$lambda(it) {
    return it.asString_tqave4_k$();
  }
  function Combine_1(selectors) {
    CSSSelector.call(this);
    this.selectors_1 = selectors;
  }
  protoOf(Combine_1).get_selectors_jv45rp_k$ = function () {
    return this.selectors_1;
  };
  protoOf(Combine_1).contains_trwpob_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, this.selectors_1);
  };
  protoOf(Combine_1).toString = function () {
    return joinToString(this.selectors_1, '');
  };
  protoOf(Combine_1).asString_tqave4_k$ = function () {
    return joinToString(this.selectors_1, '', VOID, VOID, VOID, VOID, Combine$asString$lambda);
  };
  protoOf(Combine_1).component1_7eebsc_k$ = function () {
    return this.selectors_1;
  };
  protoOf(Combine_1).copy_4xkryr_k$ = function (selectors) {
    return new Combine_1(selectors);
  };
  protoOf(Combine_1).copy$default_4g1j7r_k$ = function (selectors, $super) {
    selectors = selectors === VOID ? this.selectors_1 : selectors;
    return $super === VOID ? this.copy_4xkryr_k$(selectors) : $super.copy_4xkryr_k$.call(this, selectors);
  };
  protoOf(Combine_1).hashCode = function () {
    return hashCode(this.selectors_1);
  };
  protoOf(Combine_1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Combine_1))
      return false;
    var tmp0_other_with_cast = other instanceof Combine_1 ? other : THROW_CCE();
    if (!equals(this.selectors_1, tmp0_other_with_cast.selectors_1))
      return false;
    return true;
  };
  function Attribute(name, value, operator, caseSensitive) {
    value = value === VOID ? null : value;
    operator = operator === VOID ? Operator_Equals_getInstance() : operator;
    caseSensitive = caseSensitive === VOID ? true : caseSensitive;
    CSSSelector.call(this);
    this.name_1 = name;
    this.value_1 = value;
    this.operator_1 = operator;
    this.caseSensitive_1 = caseSensitive;
  }
  protoOf(Attribute).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Attribute).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Attribute).get_operator_uy5ppp_k$ = function () {
    return this.operator_1;
  };
  protoOf(Attribute).get_caseSensitive_1sy9cz_k$ = function () {
    return this.caseSensitive_1;
  };
  protoOf(Attribute).toString = function () {
    var tmp;
    if (this.value_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.css.Attribute.toString.<anonymous>' call
      tmp = this.operator_1.get_value_j01efc_k$() + this.value_1 + (!this.caseSensitive_1 ? ' i' : '');
    }
    var tmp1_elvis_lhs = tmp;
    var valueStr = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    return '[' + this.name_1 + valueStr + ']';
  };
  protoOf(Attribute).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(Attribute).component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  protoOf(Attribute).component3_7eebsa_k$ = function () {
    return this.operator_1;
  };
  protoOf(Attribute).component4_7eebs9_k$ = function () {
    return this.caseSensitive_1;
  };
  protoOf(Attribute).copy_q0knhz_k$ = function (name, value, operator, caseSensitive) {
    return new Attribute(name, value, operator, caseSensitive);
  };
  protoOf(Attribute).copy$default_cesbfb_k$ = function (name, value, operator, caseSensitive, $super) {
    name = name === VOID ? this.name_1 : name;
    value = value === VOID ? this.value_1 : value;
    operator = operator === VOID ? this.operator_1 : operator;
    caseSensitive = caseSensitive === VOID ? this.caseSensitive_1 : caseSensitive;
    return $super === VOID ? this.copy_q0knhz_k$(name, value, operator, caseSensitive) : $super.copy_q0knhz_k$.call(this, name, value, operator, caseSensitive);
  };
  protoOf(Attribute).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + (this.value_1 == null ? 0 : getStringHashCode(this.value_1)) | 0;
    result = imul(result, 31) + this.operator_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.caseSensitive_1) | 0;
    return result;
  };
  protoOf(Attribute).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Attribute))
      return false;
    var tmp0_other_with_cast = other instanceof Attribute ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!(this.value_1 == tmp0_other_with_cast.value_1))
      return false;
    if (!this.operator_1.equals(tmp0_other_with_cast.operator_1))
      return false;
    if (!(this.caseSensitive_1 === tmp0_other_with_cast.caseSensitive_1))
      return false;
    return true;
  };
  function Group$asString$lambda(it) {
    return it.asString_tqave4_k$();
  }
  function Group(selectors) {
    CSSSelector.call(this);
    this.selectors_1 = selectors;
  }
  protoOf(Group).get_selectors_jv45rp_k$ = function () {
    return this.selectors_1;
  };
  protoOf(Group).contains_trwpob_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, this.selectors_1);
  };
  protoOf(Group).toString = function () {
    return joinToString(this.selectors_1, ', ');
  };
  protoOf(Group).asString_tqave4_k$ = function () {
    return joinToString(this.selectors_1, ', ', VOID, VOID, VOID, VOID, Group$asString$lambda);
  };
  protoOf(Group).component1_7eebsc_k$ = function () {
    return this.selectors_1;
  };
  protoOf(Group).copy_8acutw_k$ = function (selectors) {
    return new Group(selectors);
  };
  protoOf(Group).copy$default_kof9uc_k$ = function (selectors, $super) {
    selectors = selectors === VOID ? this.selectors_1 : selectors;
    return $super === VOID ? this.copy_8acutw_k$(selectors) : $super.copy_8acutw_k$.call(this, selectors);
  };
  protoOf(Group).hashCode = function () {
    return hashCode(this.selectors_1);
  };
  protoOf(Group).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Group))
      return false;
    var tmp0_other_with_cast = other instanceof Group ? other : THROW_CCE();
    if (!equals(this.selectors_1, tmp0_other_with_cast.selectors_1))
      return false;
    return true;
  };
  function Descendant(parent, selected) {
    CSSSelector.call(this);
    this.parent_1 = parent;
    this.selected_1 = selected;
  }
  protoOf(Descendant).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(Descendant).get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  protoOf(Descendant).contains_trwpob_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, listOf([this.parent_1, this.selected_1]));
  };
  protoOf(Descendant).toString = function () {
    return toString(this.parent_1) + ' ' + toString(this.selected_1);
  };
  protoOf(Descendant).asString_tqave4_k$ = function () {
    return this.parent_1.asString_tqave4_k$() + ' ' + this.selected_1.asString_tqave4_k$();
  };
  protoOf(Descendant).component1_7eebsc_k$ = function () {
    return this.parent_1;
  };
  protoOf(Descendant).component2_7eebsb_k$ = function () {
    return this.selected_1;
  };
  protoOf(Descendant).copy_7h89qt_k$ = function (parent, selected) {
    return new Descendant(parent, selected);
  };
  protoOf(Descendant).copy$default_6szacg_k$ = function (parent, selected, $super) {
    parent = parent === VOID ? this.parent_1 : parent;
    selected = selected === VOID ? this.selected_1 : selected;
    return $super === VOID ? this.copy_7h89qt_k$(parent, selected) : $super.copy_7h89qt_k$.call(this, parent, selected);
  };
  protoOf(Descendant).hashCode = function () {
    var result = hashCode(this.parent_1);
    result = imul(result, 31) + hashCode(this.selected_1) | 0;
    return result;
  };
  protoOf(Descendant).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Descendant))
      return false;
    var tmp0_other_with_cast = other instanceof Descendant ? other : THROW_CCE();
    if (!equals(this.parent_1, tmp0_other_with_cast.parent_1))
      return false;
    if (!equals(this.selected_1, tmp0_other_with_cast.selected_1))
      return false;
    return true;
  };
  function Child(parent, selected) {
    CSSSelector.call(this);
    this.parent_1 = parent;
    this.selected_1 = selected;
  }
  protoOf(Child).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(Child).get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  protoOf(Child).contains_trwpob_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, listOf([this.parent_1, this.selected_1]));
  };
  protoOf(Child).toString = function () {
    return toString(this.parent_1) + ' > ' + toString(this.selected_1);
  };
  protoOf(Child).asString_tqave4_k$ = function () {
    return this.parent_1.asString_tqave4_k$() + ' > ' + this.selected_1.asString_tqave4_k$();
  };
  protoOf(Child).component1_7eebsc_k$ = function () {
    return this.parent_1;
  };
  protoOf(Child).component2_7eebsb_k$ = function () {
    return this.selected_1;
  };
  protoOf(Child).copy_7h89qt_k$ = function (parent, selected) {
    return new Child(parent, selected);
  };
  protoOf(Child).copy$default_f33f2d_k$ = function (parent, selected, $super) {
    parent = parent === VOID ? this.parent_1 : parent;
    selected = selected === VOID ? this.selected_1 : selected;
    return $super === VOID ? this.copy_7h89qt_k$(parent, selected) : $super.copy_7h89qt_k$.call(this, parent, selected);
  };
  protoOf(Child).hashCode = function () {
    var result = hashCode(this.parent_1);
    result = imul(result, 31) + hashCode(this.selected_1) | 0;
    return result;
  };
  protoOf(Child).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Child))
      return false;
    var tmp0_other_with_cast = other instanceof Child ? other : THROW_CCE();
    if (!equals(this.parent_1, tmp0_other_with_cast.parent_1))
      return false;
    if (!equals(this.selected_1, tmp0_other_with_cast.selected_1))
      return false;
    return true;
  };
  function Sibling(prev, selected) {
    CSSSelector.call(this);
    this.prev_1 = prev;
    this.selected_1 = selected;
  }
  protoOf(Sibling).get_prev_wosl18_k$ = function () {
    return this.prev_1;
  };
  protoOf(Sibling).get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  protoOf(Sibling).contains_trwpob_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, listOf([this.prev_1, this.selected_1]));
  };
  protoOf(Sibling).toString = function () {
    return toString(this.prev_1) + ' ~ ' + toString(this.selected_1);
  };
  protoOf(Sibling).asString_tqave4_k$ = function () {
    return this.prev_1.asString_tqave4_k$() + ' ~ ' + this.selected_1.asString_tqave4_k$();
  };
  protoOf(Sibling).component1_7eebsc_k$ = function () {
    return this.prev_1;
  };
  protoOf(Sibling).component2_7eebsb_k$ = function () {
    return this.selected_1;
  };
  protoOf(Sibling).copy_7h89qt_k$ = function (prev, selected) {
    return new Sibling(prev, selected);
  };
  protoOf(Sibling).copy$default_aesmvp_k$ = function (prev, selected, $super) {
    prev = prev === VOID ? this.prev_1 : prev;
    selected = selected === VOID ? this.selected_1 : selected;
    return $super === VOID ? this.copy_7h89qt_k$(prev, selected) : $super.copy_7h89qt_k$.call(this, prev, selected);
  };
  protoOf(Sibling).hashCode = function () {
    var result = hashCode(this.prev_1);
    result = imul(result, 31) + hashCode(this.selected_1) | 0;
    return result;
  };
  protoOf(Sibling).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Sibling))
      return false;
    var tmp0_other_with_cast = other instanceof Sibling ? other : THROW_CCE();
    if (!equals(this.prev_1, tmp0_other_with_cast.prev_1))
      return false;
    if (!equals(this.selected_1, tmp0_other_with_cast.selected_1))
      return false;
    return true;
  };
  function Adjacent(prev, selected) {
    CSSSelector.call(this);
    this.prev_1 = prev;
    this.selected_1 = selected;
  }
  protoOf(Adjacent).get_prev_wosl18_k$ = function () {
    return this.prev_1;
  };
  protoOf(Adjacent).get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  protoOf(Adjacent).contains_trwpob_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, listOf([this.prev_1, this.selected_1]));
  };
  protoOf(Adjacent).toString = function () {
    return toString(this.prev_1) + ' + ' + toString(this.selected_1);
  };
  protoOf(Adjacent).asString_tqave4_k$ = function () {
    return this.prev_1.asString_tqave4_k$() + ' + ' + this.selected_1.asString_tqave4_k$();
  };
  protoOf(Adjacent).component1_7eebsc_k$ = function () {
    return this.prev_1;
  };
  protoOf(Adjacent).component2_7eebsb_k$ = function () {
    return this.selected_1;
  };
  protoOf(Adjacent).copy_7h89qt_k$ = function (prev, selected) {
    return new Adjacent(prev, selected);
  };
  protoOf(Adjacent).copy$default_7kk18l_k$ = function (prev, selected, $super) {
    prev = prev === VOID ? this.prev_1 : prev;
    selected = selected === VOID ? this.selected_1 : selected;
    return $super === VOID ? this.copy_7h89qt_k$(prev, selected) : $super.copy_7h89qt_k$.call(this, prev, selected);
  };
  protoOf(Adjacent).hashCode = function () {
    var result = hashCode(this.prev_1);
    result = imul(result, 31) + hashCode(this.selected_1) | 0;
    return result;
  };
  protoOf(Adjacent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Adjacent))
      return false;
    var tmp0_other_with_cast = other instanceof Adjacent ? other : THROW_CCE();
    if (!equals(this.prev_1, tmp0_other_with_cast.prev_1))
      return false;
    if (!equals(this.selected_1, tmp0_other_with_cast.selected_1))
      return false;
    return true;
  };
  function get_$stableprop_77() {
    return 0;
  }
  function get_$stableprop_78() {
    return 8;
  }
  function get_$stableprop_79() {
    return 8;
  }
  function get_$stableprop_80() {
    return 8;
  }
  function get_$stableprop_81() {
    return 8;
  }
  function get_$stableprop_82() {
    return 0;
  }
  function get_$stableprop_83() {
    return 0;
  }
  function Lang(langCode) {
    PseudoClassInternal.call(this, 'lang');
    this.langCode_1 = langCode;
    this.$stable_2 = 0;
  }
  protoOf(Lang).get_langCode_ciluis_k$ = function () {
    return this.langCode_1;
  };
  protoOf(Lang).argsStr_cb0nvw_k$ = function () {
    return this.langCode_1;
  };
  function NthChild(nth) {
    PseudoClassInternal.call(this, 'nth-child');
    this.nth_1 = nth;
    this.$stable_2 = 8;
  }
  protoOf(NthChild).get_nth_18iznr_k$ = function () {
    return this.nth_1;
  };
  protoOf(NthChild).argsStr_cb0nvw_k$ = function () {
    return toString(this.nth_1);
  };
  function NthLastChild(nth) {
    PseudoClassInternal.call(this, 'nth-last-child');
    this.nth_1 = nth;
    this.$stable_2 = 8;
  }
  protoOf(NthLastChild).get_nth_18iznr_k$ = function () {
    return this.nth_1;
  };
  protoOf(NthLastChild).argsStr_cb0nvw_k$ = function () {
    return toString(this.nth_1);
  };
  function NthOfType(nth) {
    PseudoClassInternal.call(this, 'nth-of-type');
    this.nth_1 = nth;
    this.$stable_2 = 8;
  }
  protoOf(NthOfType).get_nth_18iznr_k$ = function () {
    return this.nth_1;
  };
  protoOf(NthOfType).argsStr_cb0nvw_k$ = function () {
    return toString(this.nth_1);
  };
  function NthLastOfType(nth) {
    PseudoClassInternal.call(this, 'nth-last-of-type');
    this.nth_1 = nth;
    this.$stable_2 = 8;
  }
  protoOf(NthLastOfType).get_nth_18iznr_k$ = function () {
    return this.nth_1;
  };
  protoOf(NthLastOfType).argsStr_cb0nvw_k$ = function () {
    return toString(this.nth_1);
  };
  function Host(selector) {
    PseudoClassInternal.call(this, 'host');
    this.selector_1 = selector;
    this.$stable_2 = 0;
  }
  protoOf(Host).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(Host).contains_trwpob_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, listOf_0(this.selector_1));
  };
  protoOf(Host).argsStr_cb0nvw_k$ = function () {
    return this.selector_1.asString_tqave4_k$();
  };
  function Not_0(selector) {
    PseudoClassInternal.call(this, 'not');
    this.selector_1 = selector;
    this.$stable_2 = 0;
  }
  protoOf(Not_0).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(Not_0).contains_trwpob_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, listOf_0(this.selector_1));
  };
  protoOf(Not_0).argsStr_cb0nvw_k$ = function () {
    return toString(this.selector_1);
  };
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.name_1 = name;
  }
  protoOf(PseudoClassInternal).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = (this.name_1 === other.name_1 && this.argsStr_cb0nvw_k$() == other.argsStr_cb0nvw_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).argsStr_cb0nvw_k$ = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.argsStr_cb0nvw_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.css.PseudoClassInternal.toString.<anonymous>' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.name_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function get_$stableprop_84() {
    return 0;
  }
  function Slotted(selector) {
    PseudoElementInternal.call(this, 'slotted');
    this.selector_1 = selector;
    this.$stable_2 = 0;
  }
  protoOf(Slotted).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(Slotted).contains_trwpob_k$ = function (other) {
    return this.contains_ey7crm_k$(this, other, listOf_0(this.selector_1));
  };
  protoOf(Slotted).argsStr_cb0nvw_k$ = function () {
    return this.selector_1.asString_tqave4_k$();
  };
  function PseudoElementInternal(name) {
    CSSSelector.call(this);
    this.name_1 = name;
  }
  protoOf(PseudoElementInternal).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(PseudoElementInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoElementInternal) {
      tmp = (this.name_1 === other.name_1 && this.argsStr_cb0nvw_k$() == other.argsStr_cb0nvw_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoElementInternal).argsStr_cb0nvw_k$ = function () {
    return null;
  };
  protoOf(PseudoElementInternal).toString = function () {
    var tmp0_safe_receiver = this.argsStr_cb0nvw_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.css.PseudoElementInternal.toString.<anonymous>' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return '::' + this.name_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function GenericStyleSheetBuilder() {
  }
  function CSSRulesHolder() {
  }
  function StyleSheetBuilder() {
  }
  function get_$stableprop_85() {
    return 8;
  }
  function StyleSheetBuilderImpl() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.cssRules_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(StyleSheetBuilderImpl).get_cssRules_jdoznh_k$ = function () {
    return this.cssRules_1;
  };
  protoOf(StyleSheetBuilderImpl).add_19esmm_k$ = function (cssRule) {
    this.get_cssRules_jdoznh_k$().add_utx5q5_k$(cssRule);
  };
  protoOf(StyleSheetBuilderImpl).buildRules_fgavxj_k$ = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new StyleSheetBuilderImpl();
    rulesBuild(this_0);
    return this_0.get_cssRules_jdoznh_k$();
  };
  protoOf(StyleSheetBuilderImpl).buildRules_xiubel_k$ = function (rulesBuild) {
    return this.buildRules_fgavxj_k$(rulesBuild);
  };
  protoOf(StyleSheetBuilderImpl).style_r4zx12_k$ = function (selector, cssRule) {
    return this.style_pgxmpo_k$(selector, cssRule);
  };
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (!properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
    }
  }
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('background-color', value);
  }
  function borderWidth(_this__u8e3s4, top, horizontal, bottom) {
    _this__u8e3s4.property_wcrait_k$('border-width', toString(top) + ' ' + toString(horizontal) + ' ' + toString(bottom));
  }
  function borderWidth_0(_this__u8e3s4, vertical, horizontal) {
    _this__u8e3s4.property_wcrait_k$('border-width', toString(vertical) + ' ' + toString(horizontal));
  }
  function color(_this__u8e3s4, color) {
    _this__u8e3s4.color_1 = color;
  }
  function borderRadius(_this__u8e3s4, r) {
    _this__u8e3s4.property_npxg1h_k$('border-radius', r);
  }
  function get_$stableprop_86() {
    return 8;
  }
  function CSSBorder() {
    this.width_1 = null;
    this.style_1 = null;
    this.color_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(CSSBorder).set_width_dr0tcr_k$ = function (_set____db54di) {
    this.width_1 = _set____db54di;
  };
  protoOf(CSSBorder).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(CSSBorder).set_style_27eag0_k$ = function (_set____db54di) {
    this.style_1 = _set____db54di;
  };
  protoOf(CSSBorder).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSBorder).set_color_q6gjw9_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(CSSBorder).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(CSSBorder).equals = function (other) {
    var tmp;
    if (other instanceof CSSBorder) {
      tmp = (equals(this.width_1, other.width_1) && equals(this.style_1, other.style_1) && equals(this.color_1, other.color_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSBorder).toString = function () {
    var values = listOfNotNull([this.width_1, this.style_1, this.color_1]);
    return joinToString(values, ' ');
  };
  function borderWidth_1(_this__u8e3s4, top, right, bottom, left) {
    _this__u8e3s4.property_wcrait_k$('border-width', toString(top) + ' ' + toString(right) + ' ' + toString(bottom) + ' ' + toString(left));
  }
  function borderRadius_0(_this__u8e3s4, topLeft, topRight, bottomRight, bottomLeft) {
    _this__u8e3s4.property_wcrait_k$('border-radius', toString(topLeft) + ' ' + toString(topRight) + ' ' + toString(bottomRight) + ' ' + toString(bottomLeft));
  }
  function border(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    border_0(_this__u8e3s4, border$lambda(width, style, color));
  }
  function width(_this__u8e3s4, size) {
    _this__u8e3s4.width_1 = size;
  }
  function style_3(_this__u8e3s4, style) {
    _this__u8e3s4.style_1 = style;
  }
  function border_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.property_npxg1h_k$('border', this_0);
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
        style_3($this$border, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'org.jetbrains.compose.web.css.border.<anonymous>.<anonymous>' call
        color($this$border, tmp2_safe_receiver);
      }
      return Unit_getInstance();
    };
  }
  function minHeight(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('min-height', value);
  }
  function minWidth(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('min-width', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('height', value);
  }
  function width_0(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('width', value);
  }
  function maxHeight(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('max-height', value);
  }
  function maxWidth(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('max-width', value);
  }
  function boxSizing(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('box-sizing', value);
  }
  function color_0(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('color', value);
  }
  function FilterBuilder() {
  }
  function filter(_this__u8e3s4, filterContext) {
    var builder = new FilterBuilderImplementation();
    // Inline function 'kotlin.apply' call
    filterContext(builder);
    _this__u8e3s4.property_wcrait_k$('filter', builder.toString());
  }
  function _get_transformations__q77uih($this) {
    return $this.transformations_1;
  }
  function sam$org_jetbrains_compose_web_css_FilterFunction$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
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
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_0).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_1).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_1).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_1).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_2(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_2).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_2).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_2).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_3(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_3).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_3).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_3).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_4(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_4).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_4).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_4).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_5(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_5).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_5).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_5).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_5).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_6(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_6).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_6).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_6).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_6).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_7(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_7).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_7).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_7).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_7).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_8(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_8).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_8).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_8).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_8).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_9(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_9).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_9).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_9).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_9).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_10(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_10).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_10).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_10).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_10).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_11(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_11).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_11).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_11).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_11).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_12(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_12).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_12).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_12).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_12).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_13(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_13).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_13).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_13).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_13).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_14(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_14).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_14).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_14).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_14).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_15(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_15).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_15).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_15).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_15).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_16(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_16).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_16).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_16).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_16).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_17(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_17).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_17).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_17).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_17).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_FilterFunction$0_18(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_18).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_18).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_18).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FilterFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0_18).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function FilterBuilderImplementation$blur$lambda($radius) {
    return function () {
      return 'blur(' + toString($radius) + ')';
    };
  }
  function FilterBuilderImplementation$brightness$lambda($amount) {
    return function () {
      return 'brightness(' + toString($amount) + ')';
    };
  }
  function FilterBuilderImplementation$brightness$lambda_0($amount) {
    return function () {
      return 'brightness(' + toString($amount) + ')';
    };
  }
  function FilterBuilderImplementation$contrast$lambda($amount) {
    return function () {
      return 'contrast(' + toString($amount) + ')';
    };
  }
  function FilterBuilderImplementation$contrast$lambda_0($amount) {
    return function () {
      return 'contrast(' + toString($amount) + ')';
    };
  }
  function FilterBuilderImplementation$grayscale$lambda($amount) {
    return function () {
      return 'grayscale(' + toString($amount) + ')';
    };
  }
  function FilterBuilderImplementation$grayscale$lambda_0($amount) {
    return function () {
      return 'grayscale(' + toString($amount) + ')';
    };
  }
  function FilterBuilderImplementation$hueRotate$lambda($angle) {
    return function () {
      return 'hue-rotate(' + toString($angle) + ')';
    };
  }
  function FilterBuilderImplementation$toString$lambda(it) {
    return it.apply_1jdxta_k$();
  }
  function FilterBuilderImplementation$invert$lambda($amount) {
    return function () {
      return 'invert(' + toString($amount) + ')';
    };
  }
  function FilterBuilderImplementation$invert$lambda_0($amount) {
    return function () {
      return 'invert(' + toString($amount) + ')';
    };
  }
  function FilterBuilderImplementation$opacity$lambda($amount) {
    return function () {
      return 'opacity(' + toString($amount) + ')';
    };
  }
  function FilterBuilderImplementation$opacity$lambda_0($amount) {
    return function () {
      return 'opacity(' + toString($amount) + ')';
    };
  }
  function FilterBuilderImplementation$saturate$lambda($amount) {
    return function () {
      return 'saturate(' + toString($amount) + ')';
    };
  }
  function FilterBuilderImplementation$saturate$lambda_0($amount) {
    return function () {
      return 'saturate(' + toString($amount) + ')';
    };
  }
  function FilterBuilderImplementation$sepia$lambda($amount) {
    return function () {
      return 'sepia(' + toString($amount) + ')';
    };
  }
  function FilterBuilderImplementation$sepia$lambda_0($amount) {
    return function () {
      return 'sepia(' + toString($amount) + ')';
    };
  }
  function FilterBuilderImplementation$dropShadow$lambda($offsetX, $offsetY) {
    return function () {
      return 'drop-shadow(' + toString($offsetX) + ' ' + toString($offsetY) + ')';
    };
  }
  function FilterBuilderImplementation$dropShadow$lambda_0($offsetX, $offsetY, $blurRadius) {
    return function () {
      return 'drop-shadow(' + toString($offsetX) + ' ' + toString($offsetY) + ' ' + toString($blurRadius) + ')';
    };
  }
  function FilterBuilderImplementation$dropShadow$lambda_1($offsetX, $offsetY, $color) {
    return function () {
      return 'drop-shadow(' + toString($offsetX) + ' ' + toString($offsetY) + ' ' + toString($color) + ')';
    };
  }
  function FilterBuilderImplementation$dropShadow$lambda_2($offsetX, $offsetY, $blurRadius, $color) {
    return function () {
      return 'drop-shadow(' + toString($offsetX) + ' ' + toString($offsetY) + ' ' + toString($blurRadius) + ' ' + toString($color) + ')';
    };
  }
  function FilterBuilderImplementation() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.transformations_1 = ArrayList_init_$Create$();
  }
  protoOf(FilterBuilderImplementation).blur_mbv2gn_k$ = function (radius) {
    var tmp = FilterBuilderImplementation$blur$lambda(radius);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0(tmp));
  };
  protoOf(FilterBuilderImplementation).brightness_jjdg3a_k$ = function (amount) {
    var tmp = FilterBuilderImplementation$brightness$lambda(amount);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_0(tmp));
  };
  protoOf(FilterBuilderImplementation).brightness_2sucw1_k$ = function (amount) {
    var tmp = FilterBuilderImplementation$brightness$lambda_0(amount);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_1(tmp));
  };
  protoOf(FilterBuilderImplementation).contrast_ft01x5_k$ = function (amount) {
    var tmp = FilterBuilderImplementation$contrast$lambda(amount);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_2(tmp));
  };
  protoOf(FilterBuilderImplementation).contrast_907bv4_k$ = function (amount) {
    var tmp = FilterBuilderImplementation$contrast$lambda_0(amount);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_3(tmp));
  };
  protoOf(FilterBuilderImplementation).grayscale_c91ox8_k$ = function (amount) {
    var tmp = FilterBuilderImplementation$grayscale$lambda(amount);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_4(tmp));
  };
  protoOf(FilterBuilderImplementation).grayscale_jgyvp1_k$ = function (amount) {
    var tmp = FilterBuilderImplementation$grayscale$lambda_0(amount);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_5(tmp));
  };
  protoOf(FilterBuilderImplementation).hueRotate_1trwgy_k$ = function (angle) {
    var tmp = FilterBuilderImplementation$hueRotate$lambda(angle);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_6(tmp));
  };
  protoOf(FilterBuilderImplementation).toString = function () {
    return joinToString(this.transformations_1, ' ', VOID, VOID, VOID, VOID, FilterBuilderImplementation$toString$lambda);
  };
  protoOf(FilterBuilderImplementation).invert_j1rfj9_k$ = function (amount) {
    var tmp = FilterBuilderImplementation$invert$lambda(amount);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_7(tmp));
  };
  protoOf(FilterBuilderImplementation).invert_32ugpw_k$ = function (amount) {
    var tmp = FilterBuilderImplementation$invert$lambda_0(amount);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_8(tmp));
  };
  protoOf(FilterBuilderImplementation).opacity_qml3qo_k$ = function (amount) {
    var tmp = FilterBuilderImplementation$opacity$lambda(amount);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_9(tmp));
  };
  protoOf(FilterBuilderImplementation).opacity_1qcxtz_k$ = function (amount) {
    var tmp = FilterBuilderImplementation$opacity$lambda_0(amount);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_10(tmp));
  };
  protoOf(FilterBuilderImplementation).saturate_1wje50_k$ = function (amount) {
    var tmp = FilterBuilderImplementation$saturate$lambda(amount);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_11(tmp));
  };
  protoOf(FilterBuilderImplementation).saturate_ljvr4z_k$ = function (amount) {
    var tmp = FilterBuilderImplementation$saturate$lambda_0(amount);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_12(tmp));
  };
  protoOf(FilterBuilderImplementation).sepia_el0091_k$ = function (amount) {
    var tmp = FilterBuilderImplementation$sepia$lambda(amount);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_13(tmp));
  };
  protoOf(FilterBuilderImplementation).sepia_jhffzw_k$ = function (amount) {
    var tmp = FilterBuilderImplementation$sepia$lambda_0(amount);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_14(tmp));
  };
  protoOf(FilterBuilderImplementation).dropShadow_gn8jc1_k$ = function (offsetX, offsetY) {
    var tmp = FilterBuilderImplementation$dropShadow$lambda(offsetX, offsetY);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_15(tmp));
  };
  protoOf(FilterBuilderImplementation).dropShadow_hc4qq9_k$ = function (offsetX, offsetY, blurRadius) {
    var tmp = FilterBuilderImplementation$dropShadow$lambda_0(offsetX, offsetY, blurRadius);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_16(tmp));
  };
  protoOf(FilterBuilderImplementation).dropShadow_zeig1x_k$ = function (offsetX, offsetY, color) {
    var tmp = FilterBuilderImplementation$dropShadow$lambda_1(offsetX, offsetY, color);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_17(tmp));
  };
  protoOf(FilterBuilderImplementation).dropShadow_6382bv_k$ = function (offsetX, offsetY, blurRadius, color) {
    var tmp = FilterBuilderImplementation$dropShadow$lambda_2(offsetX, offsetY, blurRadius, color);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_FilterFunction$0_18(tmp));
  };
  function FilterFunction() {
  }
  function flexGrow(_this__u8e3s4, value) {
    _this__u8e3s4.property_jk9dw6_k$('flex-grow', value);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_wcrait_k$('align-items', alignItems);
  }
  function alignSelf(_this__u8e3s4, alignSelf) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_wcrait_k$('align-self', alignSelf);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_wcrait_k$('flex-direction', flexDirection);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_wcrait_k$('justify-content', justifyContent);
  }
  function gap(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('gap', value);
  }
  function gridTemplateColumns(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('grid-template-columns', value);
  }
  function gridArea(_this__u8e3s4, rowStart, columnStart) {
    _this__u8e3s4.property_wcrait_k$('grid-area', rowStart + ' / ' + columnStart);
  }
  function columnGap(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('column-gap', value);
  }
  function rowGap(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('row-gap', value);
  }
  function gridTemplateRows(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('grid-template-rows', value);
  }
  function gridAutoColumns(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('grid-auto-columns', value);
  }
  function gridAutoRows(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('grid-auto-rows', value);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('margin', joinToString_0(value, ' '));
  }
  function marginLeft(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('margin-left', value);
  }
  function marginRight(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('margin-right', value);
  }
  function marginTop(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('margin-top', value);
  }
  function marginBottom(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('margin-bottom', value);
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('padding', joinToString_0(value, ' '));
  }
  function position(_this__u8e3s4, position) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_wcrait_k$('position', position);
  }
  function top(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('top', value);
  }
  function left(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('left', value);
  }
  function right(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('right', value);
  }
  function bottom(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('bottom', value);
  }
  function display(_this__u8e3s4, displayStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_wcrait_k$('display', displayStyle);
  }
  function opacity(_this__u8e3s4, value) {
    _this__u8e3s4.property_jk9dw6_k$('opacity', value.value / 100);
  }
  function opacity_0(_this__u8e3s4, value) {
    _this__u8e3s4.property_jk9dw6_k$('opacity', value);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.property_npxg1h_k$('font-size', value);
  }
  function lineHeight(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('line-height', value);
  }
  function fontFamily(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('font-family', joinToString_0(value, ', ', VOID, VOID, VOID, VOID, fontFamily$lambda));
  }
  function fontFamily$lambda(it) {
    return contains(it, ' ') ? '"' + it + '"' : it;
  }
  function TransformBuilder() {
  }
  function transform(_this__u8e3s4, transformContext) {
    var transformBuilder = new TransformBuilderImplementation();
    // Inline function 'kotlin.apply' call
    transformContext(transformBuilder);
    _this__u8e3s4.property_wcrait_k$('transform', transformBuilder.toString());
  }
  function _get_transformations__q77uih_0($this) {
    return $this.transformations_1;
  }
  function sam$org_jetbrains_compose_web_css_TransformFunction$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
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
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_0).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_1).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_1).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_1).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_2(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_2).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_2).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_2).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_3(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_3).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_3).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_3).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_4(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_4).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_4).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_4).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_5(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_5).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_5).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_5).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_5).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_6(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_6).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_6).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_6).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_6).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_7(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_7).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_7).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_7).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_7).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_8(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_8).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_8).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_8).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_8).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_9(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_9).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_9).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_9).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_9).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_10(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_10).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_10).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_10).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_10).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_11(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_11).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_11).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_11).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_11).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_12(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_12).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_12).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_12).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_12).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_13(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_13).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_13).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_13).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_13).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_14(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_14).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_14).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_14).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_14).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_15(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_15).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_15).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_15).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_15).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_16(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_16).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_16).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_16).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_16).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_17(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_17).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_17).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_17).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_17).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_18(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_18).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_18).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_18).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_18).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_19(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_19).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_19).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_19).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_19).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_20(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_20).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_20).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_20).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_20).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_21(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_21).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_21).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_21).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_21).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_22(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_22).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_22).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_22).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_22).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_23(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_23).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_23).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_23).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_23).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_24(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_24).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_24).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_24).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_24).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_25(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_25).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_25).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_25).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_25).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_26(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_26).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_26).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_26).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_26).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_27(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_27).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_27).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_27).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_27).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_28(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_28).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_28).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_28).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_28).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_29(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_29).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_29).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_29).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_29).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_30(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_30).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_30).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_30).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_30).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$org_jetbrains_compose_web_css_TransformFunction$0_31(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_31).apply_1jdxta_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_31).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_31).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TransformFunction) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$org_jetbrains_compose_web_css_TransformFunction$0_31).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function TransformBuilderImplementation$matrix$lambda($a, $b, $c, $d, $tx, $ty) {
    return function () {
      return 'matrix(' + toString($a) + ', ' + toString($b) + ', ' + toString($c) + ', ' + toString($d) + ', ' + toString($tx) + ', ' + toString($ty) + ')';
    };
  }
  function TransformBuilderImplementation$matrix3d$lambda($a1, $b1, $c1, $d1, $a2, $b2, $c2, $d2, $a3, $b3, $c3, $d3, $a4, $b4, $c4, $d4) {
    return function () {
      return 'matrix3d(' + toString($a1) + ', ' + toString($b1) + ', ' + toString($c1) + ', ' + toString($d1) + ', ' + toString($a2) + ', ' + toString($b2) + ', ' + toString($c2) + ', ' + toString($d2) + ', ' + toString($a3) + ', ' + toString($b3) + ', ' + toString($c3) + ', ' + toString($d3) + ', ' + toString($a4) + ', ' + toString($b4) + ', ' + toString($c4) + ', ' + toString($d4) + ')';
    };
  }
  function TransformBuilderImplementation$perspective$lambda($d) {
    return function () {
      return 'perspective(' + toString($d) + ')';
    };
  }
  function TransformBuilderImplementation$rotate$lambda($a) {
    return function () {
      return 'rotate(' + toString($a) + ')';
    };
  }
  function TransformBuilderImplementation$rotate3d$lambda($x, $y, $z, $a) {
    return function () {
      return 'rotate3d(' + toString($x) + ', ' + toString($y) + ', ' + toString($z) + ', ' + toString($a) + ')';
    };
  }
  function TransformBuilderImplementation$rotateX$lambda($a) {
    return function () {
      return 'rotateX(' + toString($a) + ')';
    };
  }
  function TransformBuilderImplementation$rotateY$lambda($a) {
    return function () {
      return 'rotateY(' + toString($a) + ')';
    };
  }
  function TransformBuilderImplementation$rotateZ$lambda($a) {
    return function () {
      return 'rotateZ(' + toString($a) + ')';
    };
  }
  function TransformBuilderImplementation$scale$lambda($sx) {
    return function () {
      return 'scale(' + toString($sx) + ')';
    };
  }
  function TransformBuilderImplementation$scale$lambda_0($sx, $sy) {
    return function () {
      return 'scale(' + toString($sx) + ', ' + toString($sy) + ')';
    };
  }
  function TransformBuilderImplementation$scale3d$lambda($sx, $sy, $sz) {
    return function () {
      return 'scale3d(' + toString($sx) + ', ' + toString($sy) + ', ' + toString($sz) + ')';
    };
  }
  function TransformBuilderImplementation$scaleX$lambda($s) {
    return function () {
      return 'scaleX(' + toString($s) + ')';
    };
  }
  function TransformBuilderImplementation$scaleY$lambda($s) {
    return function () {
      return 'scaleY(' + toString($s) + ')';
    };
  }
  function TransformBuilderImplementation$scaleZ$lambda($s) {
    return function () {
      return 'scaleZ(' + toString($s) + ')';
    };
  }
  function TransformBuilderImplementation$skew$lambda($ax) {
    return function () {
      return 'skew(' + toString($ax) + ')';
    };
  }
  function TransformBuilderImplementation$skew$lambda_0($ax, $ay) {
    return function () {
      return 'skew(' + toString($ax) + ', ' + toString($ay) + ')';
    };
  }
  function TransformBuilderImplementation$skewX$lambda($a) {
    return function () {
      return 'skewX(' + toString($a) + ')';
    };
  }
  function TransformBuilderImplementation$skewY$lambda($a) {
    return function () {
      return 'skewY(' + toString($a) + ')';
    };
  }
  function TransformBuilderImplementation$translate$lambda($tx) {
    return function () {
      return 'translate(' + toString($tx) + ')';
    };
  }
  function TransformBuilderImplementation$translate$lambda_0($tx) {
    return function () {
      return 'translate(' + toString($tx) + ')';
    };
  }
  function TransformBuilderImplementation$translate$lambda_1($tx, $ty) {
    return function () {
      return 'translate(' + toString($tx) + ', ' + toString($ty) + ')';
    };
  }
  function TransformBuilderImplementation$translate$lambda_2($tx, $ty) {
    return function () {
      return 'translate(' + toString($tx) + ', ' + toString($ty) + ')';
    };
  }
  function TransformBuilderImplementation$translate$lambda_3($tx, $ty) {
    return function () {
      return 'translate(' + toString($tx) + ', ' + toString($ty) + ')';
    };
  }
  function TransformBuilderImplementation$translate$lambda_4($tx, $ty) {
    return function () {
      return 'translate(' + toString($tx) + ', ' + toString($ty) + ')';
    };
  }
  function TransformBuilderImplementation$translate3d$lambda($tx, $ty, $tz) {
    return function () {
      return 'translate3d(' + toString($tx) + ', ' + toString($ty) + ', ' + toString($tz) + ')';
    };
  }
  function TransformBuilderImplementation$translate3d$lambda_0($tx, $ty, $tz) {
    return function () {
      return 'translate3d(' + toString($tx) + ', ' + toString($ty) + ', ' + toString($tz) + ')';
    };
  }
  function TransformBuilderImplementation$translate3d$lambda_1($tx, $ty, $tz) {
    return function () {
      return 'translate3d(' + toString($tx) + ', ' + toString($ty) + ', ' + toString($tz) + ')';
    };
  }
  function TransformBuilderImplementation$translate3d$lambda_2($tx, $ty, $tz) {
    return function () {
      return 'translate3d(' + toString($tx) + ', ' + toString($ty) + ', ' + toString($tz) + ')';
    };
  }
  function TransformBuilderImplementation$translateX$lambda($tx) {
    return function () {
      return 'translateX(' + toString($tx) + ')';
    };
  }
  function TransformBuilderImplementation$translateX$lambda_0($tx) {
    return function () {
      return 'translateX(' + toString($tx) + ')';
    };
  }
  function TransformBuilderImplementation$translateY$lambda($ty) {
    return function () {
      return 'translateY(' + toString($ty) + ')';
    };
  }
  function TransformBuilderImplementation$translateY$lambda_0($ty) {
    return function () {
      return 'translateY(' + toString($ty) + ')';
    };
  }
  function TransformBuilderImplementation$translateZ$lambda($tz) {
    return function () {
      return 'translateZ(' + toString($tz) + ')';
    };
  }
  function TransformBuilderImplementation$toString$lambda(it) {
    return it.apply_1jdxta_k$();
  }
  function TransformBuilderImplementation() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.transformations_1 = ArrayList_init_$Create$();
  }
  protoOf(TransformBuilderImplementation).matrix_z2sxr3_k$ = function (a, b, c, d, tx, ty) {
    var tmp = TransformBuilderImplementation$matrix$lambda(a, b, c, d, tx, ty);
    return this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0(tmp));
  };
  protoOf(TransformBuilderImplementation).matrix3d_k0fj5q_k$ = function (a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) {
    var tmp = TransformBuilderImplementation$matrix3d$lambda(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_0(tmp));
  };
  protoOf(TransformBuilderImplementation).perspective_nwjm9u_k$ = function (d) {
    var tmp = TransformBuilderImplementation$perspective$lambda(d);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_1(tmp));
  };
  protoOf(TransformBuilderImplementation).rotate_utl8m_k$ = function (a) {
    var tmp = TransformBuilderImplementation$rotate$lambda(a);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_2(tmp));
  };
  protoOf(TransformBuilderImplementation).rotate3d_wm6562_k$ = function (x, y, z, a) {
    var tmp = TransformBuilderImplementation$rotate3d$lambda(x, y, z, a);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_3(tmp));
  };
  protoOf(TransformBuilderImplementation).rotateX_g4zebc_k$ = function (a) {
    var tmp = TransformBuilderImplementation$rotateX$lambda(a);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_4(tmp));
  };
  protoOf(TransformBuilderImplementation).rotateY_dabyrb_k$ = function (a) {
    var tmp = TransformBuilderImplementation$rotateY$lambda(a);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_5(tmp));
  };
  protoOf(TransformBuilderImplementation).rotateZ_afoj7a_k$ = function (a) {
    var tmp = TransformBuilderImplementation$rotateZ$lambda(a);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_6(tmp));
  };
  protoOf(TransformBuilderImplementation).scale_quwfox_k$ = function (sx) {
    var tmp = TransformBuilderImplementation$scale$lambda(sx);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_7(tmp));
  };
  protoOf(TransformBuilderImplementation).scale_802vru_k$ = function (sx, sy) {
    var tmp = TransformBuilderImplementation$scale$lambda_0(sx, sy);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_8(tmp));
  };
  protoOf(TransformBuilderImplementation).scale3d_8rg9wg_k$ = function (sx, sy, sz) {
    var tmp = TransformBuilderImplementation$scale3d$lambda(sx, sy, sz);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_9(tmp));
  };
  protoOf(TransformBuilderImplementation).scaleX_5vhlnx_k$ = function (s) {
    var tmp = TransformBuilderImplementation$scaleX$lambda(s);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_10(tmp));
  };
  protoOf(TransformBuilderImplementation).scaleY_7xcx70_k$ = function (s) {
    var tmp = TransformBuilderImplementation$scaleY$lambda(s);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_11(tmp));
  };
  protoOf(TransformBuilderImplementation).scaleZ_9z88q3_k$ = function (s) {
    var tmp = TransformBuilderImplementation$scaleZ$lambda(s);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_12(tmp));
  };
  protoOf(TransformBuilderImplementation).skew_g51vcl_k$ = function (ax) {
    var tmp = TransformBuilderImplementation$skew$lambda(ax);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_13(tmp));
  };
  protoOf(TransformBuilderImplementation).skew_65da6o_k$ = function (ax, ay) {
    var tmp = TransformBuilderImplementation$skew$lambda_0(ax, ay);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_14(tmp));
  };
  protoOf(TransformBuilderImplementation).skewX_vhgz95_k$ = function (a) {
    var tmp = TransformBuilderImplementation$skewX$lambda(a);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_15(tmp));
  };
  protoOf(TransformBuilderImplementation).skewY_yc4et6_k$ = function (a) {
    var tmp = TransformBuilderImplementation$skewY$lambda(a);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_16(tmp));
  };
  protoOf(TransformBuilderImplementation).translate_6fito0_k$ = function (tx) {
    var tmp = TransformBuilderImplementation$translate$lambda(tx);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_17(tmp));
  };
  protoOf(TransformBuilderImplementation).translate_l3dqxo_k$ = function (tx) {
    var tmp = TransformBuilderImplementation$translate$lambda_0(tx);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_18(tmp));
  };
  protoOf(TransformBuilderImplementation).translate_yq18w2_k$ = function (tx, ty) {
    var tmp = TransformBuilderImplementation$translate$lambda_1(tx, ty);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_19(tmp));
  };
  protoOf(TransformBuilderImplementation).translate_i1ch3i_k$ = function (tx, ty) {
    var tmp = TransformBuilderImplementation$translate$lambda_2(tx, ty);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_20(tmp));
  };
  protoOf(TransformBuilderImplementation).translate_l4dabu_k$ = function (tx, ty) {
    var tmp = TransformBuilderImplementation$translate$lambda_3(tx, ty);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_21(tmp));
  };
  protoOf(TransformBuilderImplementation).translate_svafuq_k$ = function (tx, ty) {
    var tmp = TransformBuilderImplementation$translate$lambda_4(tx, ty);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_22(tmp));
  };
  protoOf(TransformBuilderImplementation).translate3d_gtx64f_k$ = function (tx, ty, tz) {
    var tmp = TransformBuilderImplementation$translate3d$lambda(tx, ty, tz);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_23(tmp));
  };
  protoOf(TransformBuilderImplementation).translate3d_bw9fuz_k$ = function (tx, ty, tz) {
    var tmp = TransformBuilderImplementation$translate3d$lambda_0(tx, ty, tz);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_24(tmp));
  };
  protoOf(TransformBuilderImplementation).translate3d_vedcwd_k$ = function (tx, ty, tz) {
    var tmp = TransformBuilderImplementation$translate3d$lambda_1(tx, ty, tz);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_25(tmp));
  };
  protoOf(TransformBuilderImplementation).translate3d_jq9935_k$ = function (tx, ty, tz) {
    var tmp = TransformBuilderImplementation$translate3d$lambda_2(tx, ty, tz);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_26(tmp));
  };
  protoOf(TransformBuilderImplementation).translateX_s489xo_k$ = function (tx) {
    var tmp = TransformBuilderImplementation$translateX$lambda(tx);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_27(tmp));
  };
  protoOf(TransformBuilderImplementation).translateX_gc1dw8_k$ = function (tx) {
    var tmp = TransformBuilderImplementation$translateX$lambda_0(tx);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_28(tmp));
  };
  protoOf(TransformBuilderImplementation).translateY_ar5xnx_k$ = function (ty) {
    var tmp = TransformBuilderImplementation$translateY$lambda(ty);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_29(tmp));
  };
  protoOf(TransformBuilderImplementation).translateY_bm9xmh_k$ = function (ty) {
    var tmp = TransformBuilderImplementation$translateY$lambda_0(ty);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_30(tmp));
  };
  protoOf(TransformBuilderImplementation).translateZ_6lwelu_k$ = function (tz) {
    var tmp = TransformBuilderImplementation$translateZ$lambda(tz);
    this.transformations_1.add_utx5q5_k$(new sam$org_jetbrains_compose_web_css_TransformFunction$0_31(tmp));
  };
  protoOf(TransformBuilderImplementation).toString = function () {
    return joinToString(this.transformations_1, ' ', VOID, VOID, VOID, VOID, TransformBuilderImplementation$toString$lambda);
  };
  function TransformFunction() {
  }
  function get_selectorScope() {
    _init_properties_CSSSelectors_kt__t1yksx();
    return selectorScope;
  }
  var selectorScope;
  var Operator_Equals_instance;
  var Operator_ListContains_instance;
  var Operator_Hyphened_instance;
  var Operator_Prefixed_instance;
  var Operator_Suffixed_instance;
  var Operator_Contains_instance;
  function values_2() {
    return [Operator_Equals_getInstance(), Operator_ListContains_getInstance(), Operator_Hyphened_getInstance(), Operator_Prefixed_getInstance(), Operator_Suffixed_getInstance(), Operator_Contains_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'Equals':
        return Operator_Equals_getInstance();
      case 'ListContains':
        return Operator_ListContains_getInstance();
      case 'Hyphened':
        return Operator_Hyphened_getInstance();
      case 'Prefixed':
        return Operator_Prefixed_getInstance();
      case 'Suffixed':
        return Operator_Suffixed_getInstance();
      case 'Contains':
        return Operator_Contains_getInstance();
      default:
        Operator_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var Operator_entriesInitialized;
  function Operator_initEntries() {
    if (Operator_entriesInitialized)
      return Unit_getInstance();
    Operator_entriesInitialized = true;
    Operator_Equals_instance = new Operator('Equals', 0, '=');
    Operator_ListContains_instance = new Operator('ListContains', 1, '~=');
    Operator_Hyphened_instance = new Operator('Hyphened', 2, '|=');
    Operator_Prefixed_instance = new Operator('Prefixed', 3, '^=');
    Operator_Suffixed_instance = new Operator('Suffixed', 4, '$=');
    Operator_Contains_instance = new Operator('Contains', 5, '*=');
  }
  var $ENTRIES_2;
  function Operator(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(Operator).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function get_$stableprop_87() {
    return 0;
  }
  function Operator_Equals_getInstance() {
    Operator_initEntries();
    return Operator_Equals_instance;
  }
  function Operator_ListContains_getInstance() {
    Operator_initEntries();
    return Operator_ListContains_instance;
  }
  function Operator_Hyphened_getInstance() {
    Operator_initEntries();
    return Operator_Hyphened_instance;
  }
  function Operator_Prefixed_getInstance() {
    Operator_initEntries();
    return Operator_Prefixed_instance;
  }
  function Operator_Suffixed_getInstance() {
    Operator_initEntries();
    return Operator_Suffixed_instance;
  }
  function Operator_Contains_getInstance() {
    Operator_initEntries();
    return Operator_Contains_instance;
  }
  function get_$stableprop_88() {
    return 0;
  }
  function get_$stableprop_89() {
    return 0;
  }
  function Attribute_0() {
    Attribute_instance = this;
    this.$stable_1 = 0;
  }
  var Attribute_instance;
  function Attribute_getInstance() {
    if (Attribute_instance == null)
      new Attribute_0();
    return Attribute_instance;
  }
  function PseudoClass() {
    PseudoClass_instance = this;
    this.anyLink_1 = get_selectorScope().get_anyLink_cofd2b_k$();
    this.link_1 = get_selectorScope().get_link_wopumb_k$();
    this.visited_1 = get_selectorScope().get_visited_8zg8qp_k$();
    this.localLink_1 = get_selectorScope().get_localLink_bf63s4_k$();
    this.target_1 = get_selectorScope().get_target_juba8q_k$();
    this.targetWithin_1 = get_selectorScope().get_targetWithin_2o3zvf_k$();
    this.scope_1 = get_selectorScope().get_scope_iyfcq3_k$();
    this.hover_1 = get_selectorScope().get_hover_islez7_k$();
    this.active_1 = get_selectorScope().get_active_avldsf_k$();
    this.focus_1 = get_selectorScope().get_focus_irhg33_k$();
    this.focusVisible_1 = get_selectorScope().get_focusVisible_5vnmwz_k$();
    this.playing_1 = get_selectorScope().get_playing_6wau9n_k$();
    this.paused_1 = get_selectorScope().get_paused_hy6yif_k$();
    this.autofill_1 = get_selectorScope().get_autofill_801dad_k$();
    this.enabled_1 = get_selectorScope().get_enabled_pcr8o8_k$();
    this.disabled_1 = get_selectorScope().get_disabled_rbmjej_k$();
    this.readOnly_1 = get_selectorScope().get_readOnly_ovku97_k$();
    this.readWrite_1 = get_selectorScope().get_readWrite_a0tpds_k$();
    this.placeholderShown_1 = get_selectorScope().get_placeholderShown_1kc3x5_k$();
    this.default_1 = get_selectorScope().get_default_qtagd4_k$();
    this.checked_1 = get_selectorScope().get_checked_djib3y_k$();
    this.indeterminate_1 = get_selectorScope().get_indeterminate_997h5e_k$();
    this.blank_1 = get_selectorScope().get_blank_ip8b3f_k$();
    this.valid_1 = get_selectorScope().get_valid_j01e4z_k$();
    this.invalid_1 = get_selectorScope().get_invalid_xocxse_k$();
    this.inRange_1 = get_selectorScope().get_invalid_xocxse_k$();
    this.outOfRange_1 = get_selectorScope().get_outOfRange_z0zuv5_k$();
    this.required_1 = get_selectorScope().get_required_wq3z3c_k$();
    this.optional_1 = get_selectorScope().get_optional_x3zcnr_k$();
    this.userInvalid_1 = get_selectorScope().get_userInvalid_tptv3x_k$();
    this.root_1 = get_selectorScope().get_root_wott0r_k$();
    this.empty_1 = get_selectorScope().get_empty_iqwn50_k$();
    this.first_1 = get_selectorScope().get_first_irdx8n_k$();
    this.firstChild_1 = get_selectorScope().get_firstChild_n9lgdn_k$();
    this.lastChild_1 = get_selectorScope().get_lastChild_tniydf_k$();
    this.onlyChild_1 = get_selectorScope().get_onlyChild_cxh5if_k$();
    this.firstOfType_1 = get_selectorScope().get_firstOfType_5b9t60_k$();
    this.lastOfType_1 = get_selectorScope().get_lastOfType_9s7uy8_k$();
    this.onlyOfType_1 = get_selectorScope().get_onlyOfType_jptu62_k$();
    this.host_1 = get_selectorScope().get_host_wonf8x_k$();
    this.defined_1 = get_selectorScope().get_defined_qtfew0_k$();
    this.left_1 = get_selectorScope().get_left_woprgw_k$();
    this.right_1 = get_selectorScope().get_right_ixz7xv_k$();
    this.$stable_1 = 0;
  }
  protoOf(PseudoClass).get_anyLink_cofd2b_k$ = function () {
    return this.anyLink_1;
  };
  protoOf(PseudoClass).get_link_wopumb_k$ = function () {
    return this.link_1;
  };
  protoOf(PseudoClass).get_visited_8zg8qp_k$ = function () {
    return this.visited_1;
  };
  protoOf(PseudoClass).get_localLink_bf63s4_k$ = function () {
    return this.localLink_1;
  };
  protoOf(PseudoClass).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(PseudoClass).get_targetWithin_2o3zvf_k$ = function () {
    return this.targetWithin_1;
  };
  protoOf(PseudoClass).get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  protoOf(PseudoClass).get_hover_islez7_k$ = function () {
    return this.hover_1;
  };
  protoOf(PseudoClass).get_active_avldsf_k$ = function () {
    return this.active_1;
  };
  protoOf(PseudoClass).get_focus_irhg33_k$ = function () {
    return this.focus_1;
  };
  protoOf(PseudoClass).get_focusVisible_5vnmwz_k$ = function () {
    return this.focusVisible_1;
  };
  protoOf(PseudoClass).get_playing_6wau9n_k$ = function () {
    return this.playing_1;
  };
  protoOf(PseudoClass).get_paused_hy6yif_k$ = function () {
    return this.paused_1;
  };
  protoOf(PseudoClass).get_autofill_801dad_k$ = function () {
    return this.autofill_1;
  };
  protoOf(PseudoClass).get_enabled_pcr8o8_k$ = function () {
    return this.enabled_1;
  };
  protoOf(PseudoClass).get_disabled_rbmjej_k$ = function () {
    return this.disabled_1;
  };
  protoOf(PseudoClass).get_readOnly_ovku97_k$ = function () {
    return this.readOnly_1;
  };
  protoOf(PseudoClass).get_readWrite_a0tpds_k$ = function () {
    return this.readWrite_1;
  };
  protoOf(PseudoClass).get_placeholderShown_1kc3x5_k$ = function () {
    return this.placeholderShown_1;
  };
  protoOf(PseudoClass).get_default_qtagd4_k$ = function () {
    return this.default_1;
  };
  protoOf(PseudoClass).get_checked_djib3y_k$ = function () {
    return this.checked_1;
  };
  protoOf(PseudoClass).get_indeterminate_997h5e_k$ = function () {
    return this.indeterminate_1;
  };
  protoOf(PseudoClass).get_blank_ip8b3f_k$ = function () {
    return this.blank_1;
  };
  protoOf(PseudoClass).get_valid_j01e4z_k$ = function () {
    return this.valid_1;
  };
  protoOf(PseudoClass).get_invalid_xocxse_k$ = function () {
    return this.invalid_1;
  };
  protoOf(PseudoClass).get_inRange_x4kdv3_k$ = function () {
    return this.inRange_1;
  };
  protoOf(PseudoClass).get_outOfRange_z0zuv5_k$ = function () {
    return this.outOfRange_1;
  };
  protoOf(PseudoClass).get_required_wq3z3c_k$ = function () {
    return this.required_1;
  };
  protoOf(PseudoClass).get_optional_x3zcnr_k$ = function () {
    return this.optional_1;
  };
  protoOf(PseudoClass).get_userInvalid_tptv3x_k$ = function () {
    return this.userInvalid_1;
  };
  protoOf(PseudoClass).get_root_wott0r_k$ = function () {
    return this.root_1;
  };
  protoOf(PseudoClass).get_empty_iqwn50_k$ = function () {
    return this.empty_1;
  };
  protoOf(PseudoClass).get_first_irdx8n_k$ = function () {
    return this.first_1;
  };
  protoOf(PseudoClass).get_firstChild_n9lgdn_k$ = function () {
    return this.firstChild_1;
  };
  protoOf(PseudoClass).get_lastChild_tniydf_k$ = function () {
    return this.lastChild_1;
  };
  protoOf(PseudoClass).get_onlyChild_cxh5if_k$ = function () {
    return this.onlyChild_1;
  };
  protoOf(PseudoClass).get_firstOfType_5b9t60_k$ = function () {
    return this.firstOfType_1;
  };
  protoOf(PseudoClass).get_lastOfType_9s7uy8_k$ = function () {
    return this.lastOfType_1;
  };
  protoOf(PseudoClass).get_onlyOfType_jptu62_k$ = function () {
    return this.onlyOfType_1;
  };
  protoOf(PseudoClass).get_host_wonf8x_k$ = function () {
    return this.host_1;
  };
  protoOf(PseudoClass).get_defined_qtfew0_k$ = function () {
    return this.defined_1;
  };
  protoOf(PseudoClass).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(PseudoClass).get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  var PseudoClass_instance;
  function PseudoClass_getInstance() {
    if (PseudoClass_instance == null)
      new PseudoClass();
    return PseudoClass_instance;
  }
  function PseudoElement() {
    PseudoElement_instance = this;
    this.after_1 = get_selectorScope().get_after_iol2gj_k$();
    this.before_1 = get_selectorScope().get_before_bdhrwo_k$();
    this.cue_1 = get_selectorScope().get_cue_18j7sm_k$();
    this.cueRegion_1 = get_selectorScope().get_cueRegion_qinivy_k$();
    this.firstLetter_1 = get_selectorScope().get_firstLetter_6qe5bn_k$();
    this.firstLine_1 = get_selectorScope().get_firstLine_apktuj_k$();
    this.fileSelectorButton_1 = get_selectorScope().get_fileSelectorButton_ul3x92_k$();
    this.selection_1 = get_selectorScope().get_selection_jv4aal_k$();
    this.$stable_1 = 0;
  }
  protoOf(PseudoElement).get_after_iol2gj_k$ = function () {
    return this.after_1;
  };
  protoOf(PseudoElement).get_before_bdhrwo_k$ = function () {
    return this.before_1;
  };
  protoOf(PseudoElement).get_cue_18j7sm_k$ = function () {
    return this.cue_1;
  };
  protoOf(PseudoElement).get_cueRegion_qinivy_k$ = function () {
    return this.cueRegion_1;
  };
  protoOf(PseudoElement).get_firstLetter_6qe5bn_k$ = function () {
    return this.firstLetter_1;
  };
  protoOf(PseudoElement).get_firstLine_apktuj_k$ = function () {
    return this.firstLine_1;
  };
  protoOf(PseudoElement).get_fileSelectorButton_ul3x92_k$ = function () {
    return this.fileSelectorButton_1;
  };
  protoOf(PseudoElement).get_selection_jv4aal_k$ = function () {
    return this.selection_1;
  };
  var PseudoElement_instance;
  function PseudoElement_getInstance() {
    if (PseudoElement_instance == null)
      new PseudoElement();
    return PseudoElement_instance;
  }
  function get_$stableprop_90() {
    return 0;
  }
  function CSSSelector() {
    this.$stable_1 = 0;
  }
  protoOf(CSSSelector).contains_trwpob_k$ = function (other) {
    return this === other;
  };
  protoOf(CSSSelector).contains_ey7crm_k$ = function (that, other, children) {
    var tmp;
    if (that === other) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(children, Collection)) {
          tmp_0 = children.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = children.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'org.jetbrains.compose.web.css.selectors.CSSSelector.contains.<anonymous>' call
          if (element.contains_trwpob_k$(other)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  protoOf(CSSSelector).asString_tqave4_k$ = function () {
    return toString(this);
  };
  function FunctionalImpl(a, b) {
    a = a === VOID ? null : a;
    b = b === VOID ? null : b;
    this.a_1 = a;
    this.b_1 = b;
  }
  protoOf(FunctionalImpl).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(FunctionalImpl).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(FunctionalImpl).toString = function () {
    return !(this.a_1 == null) && !(this.b_1 == null) ? '' + this.a_1 + 'n+' + this.b_1 : !(this.a_1 == null) ? '' + this.a_1 + 'n' : !(this.b_1 == null) ? '' + this.b_1 : '';
  };
  protoOf(FunctionalImpl).component1_7eebsc_k$ = function () {
    return this.a_1;
  };
  protoOf(FunctionalImpl).component2_7eebsb_k$ = function () {
    return this.b_1;
  };
  protoOf(FunctionalImpl).copy_wvvy1t_k$ = function (a, b) {
    return new FunctionalImpl(a, b);
  };
  protoOf(FunctionalImpl).copy$default_wn6uh1_k$ = function (a, b, $super) {
    a = a === VOID ? this.a_1 : a;
    b = b === VOID ? this.b_1 : b;
    return $super === VOID ? this.copy_wvvy1t_k$(a, b) : $super.copy_wvvy1t_k$.call(this, a, b);
  };
  protoOf(FunctionalImpl).hashCode = function () {
    var result = this.a_1 == null ? 0 : this.a_1;
    result = imul(result, 31) + (this.b_1 == null ? 0 : this.b_1) | 0;
    return result;
  };
  protoOf(FunctionalImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FunctionalImpl))
      return false;
    var tmp0_other_with_cast = other instanceof FunctionalImpl ? other : THROW_CCE();
    if (!(this.a_1 == tmp0_other_with_cast.a_1))
      return false;
    if (!(this.b_1 == tmp0_other_with_cast.b_1))
      return false;
    return true;
  };
  function OddImpl() {
    OddImpl_instance = this;
  }
  protoOf(OddImpl).toString = function () {
    return 'odd';
  };
  var OddImpl_instance;
  function OddImpl_getInstance() {
    if (OddImpl_instance == null)
      new OddImpl();
    return OddImpl_instance;
  }
  function EvenImpl() {
    EvenImpl_instance = this;
  }
  protoOf(EvenImpl).toString = function () {
    return 'even';
  };
  var EvenImpl_instance;
  function EvenImpl_getInstance() {
    if (EvenImpl_instance == null)
      new EvenImpl();
    return EvenImpl_instance;
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.Odd_1 = OddImpl_getInstance();
    this.Even_1 = EvenImpl_getInstance();
  }
  protoOf(Companion_17).get_Odd_18jn16_k$ = function () {
    return this.Odd_1;
  };
  protoOf(Companion_17).get_Even_wo17k3_k$ = function () {
    return this.Even_1;
  };
  protoOf(Companion_17).Functional_xwpqbx_k$ = function (a, b) {
    return new FunctionalImpl(a, b);
  };
  protoOf(Companion_17).Functional$default_o4esv6_k$ = function (a, b, $super) {
    a = a === VOID ? null : a;
    b = b === VOID ? null : b;
    return $super === VOID ? this.Functional_xwpqbx_k$(a, b) : $super.Functional_xwpqbx_k$.call(this, a, b);
  };
  var Companion_instance_17;
  function Companion_getInstance_18() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function Nth() {
  }
  function selectorScope$1() {
  }
  var properties_initialized_CSSSelectors_kt_ttgqoj;
  function _init_properties_CSSSelectors_kt__t1yksx() {
    if (!properties_initialized_CSSSelectors_kt_ttgqoj) {
      properties_initialized_CSSSelectors_kt_ttgqoj = true;
      selectorScope = new selectorScope$1();
    }
  }
  function TagElement(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-576127026);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(elementBuilder) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(applyAttrs) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-576127026, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement (Base.kt:110)');
      }
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -492369756, 'CC(remember):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
        var value = new ElementScopeImpl();
        $composer_1.updateRememberedValue_l1wh71_k$(value);
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
      $composer_2.startNode_htvs8k_k$();
      if ($composer_2.get_inserting_25mlsw_k$()) {
        var tmp_1 = $composer_2;
        tmp_1.createNode_ahrd54_k$(TagElement$lambda(elementBuilder, scope));
      } else {
        $composer_2.useNode_io5s9l_k$();
      }
      var tmp3 = _SkippableUpdater___init__impl__4ft0t9($composer_2);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var $composer_3 = $composer_2;
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.get_refEffect_dxdq8s_k$();
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne(tmp3).startReplaceableGroup_ip860b_k$(509942095);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>.<anonymous>' call
      var $this$update = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne(tmp3));
      var tmp_2 = attrsScope.get_classes_o9f6ii_k$();
      Updater__set_impl_v7kwss($this$update, tmp_2, DomElementWrapper$updateClasses$ref());
      var tmp_3 = attrsScope.get_styleScope_j97lsb_k$();
      Updater__set_impl_v7kwss($this$update, tmp_3, DomElementWrapper$updateStyleDeclarations$ref());
      var tmp_4 = attrsScope.collect_2cke7n_k$();
      Updater__set_impl_v7kwss($this$update, tmp_4, DomElementWrapper$updateAttrs$ref());
      var tmp_5 = attrsScope.get_eventsListenerScopeBuilder_e1ywca_k$().collectListeners_za6ce6_k$();
      Updater__set_impl_v7kwss($this$update, tmp_5, DomElementWrapper$updateEventListeners$ref());
      var tmp_6 = attrsScope.get_propertyUpdates_8i1vmz_k$();
      Updater__set_impl_v7kwss($this$update, tmp_6, DomElementWrapper$updateProperties$ref());
      _SkippableUpdater___get_composer__impl__6t7yne(tmp3).endReplaceableGroup_ern0ak_k$();
      $composer_2.startReplaceableGroup_ip860b_k$(2058660585);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var $changed_0 = 8 & 64 >> 3 | 14 & 64 >> 3 | 112 & 64 >> 6;
      var $composer_4 = $composer_2;
      $composer_4.startReplaceableGroup_ip860b_k$(-914956529);
      content == null || content(scope, $composer_4, 14 & $changed_0 | 112 & $dirty >> 3);
      $composer_4.endReplaceableGroup_ern0ak_k$();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      $composer_2.endNode_3m0yfn_k$();
      var tmp0_safe_receiver = refEffect;
      var tmp_7;
      if (tmp0_safe_receiver == null) {
        tmp_7 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
        DisposableEffect(null, TagElement$lambda_0(tmp0_safe_receiver, scope), $composer_0, 6);
        tmp_7 = Unit_getInstance();
      }
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(TagElement$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function ComposeDomNode(factory, elementScope, attrsSkippableUpdate, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startNode_htvs8k_k$();
    if ($composer_0.get_inserting_25mlsw_k$()) {
      var tmp = $composer_0;
      tmp.createNode_ahrd54_k$(ComposeDomNode$lambda(factory));
    } else {
      $composer_0.useNode_io5s9l_k$();
    }
    attrsSkippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_0)), $composer_0, 112 & $changed >> 3);
    $composer_0.startReplaceableGroup_ip860b_k$(2058660585);
    content(elementScope, $composer_0, 8 & $changed >> 3 | 14 & $changed >> 3 | 112 & $changed >> 6);
    $composer_0.endReplaceableGroup_ern0ak_k$();
    $composer_0.endNode_3m0yfn_k$();
  }
  function _set_currentListeners__i9i2pb($this, _set____db54di) {
    $this.currentListeners_1 = _set____db54di;
  }
  function _get_currentListeners__atm6dh($this) {
    return $this.currentListeners_1;
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.node_2 = node;
    this.currentListeners_1 = emptyList();
  }
  protoOf(DomElementWrapper).get_node_wor8sr_k$ = function () {
    return this.node_2;
  };
  protoOf(DomElementWrapper).updateEventListeners_egkzls_k$ = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.currentListeners_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.node_2.removeEventListener(element.get_name_woqyms_k$(), element);
    }
    this.currentListeners_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.currentListeners_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.node_2.addEventListener(element_0.get_name_woqyms_k$(), element_0);
    }
  };
  protoOf(DomElementWrapper).updateProperties_gvj74x_k$ = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = applicators.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateProperties.<anonymous>' call
      var applicator = element.component1_7eebsc_k$();
      var item = element.component2_7eebsb_k$();
      applicator(this.node_2, item);
    }
  };
  protoOf(DomElementWrapper).updateStyleDeclarations_pwt3c4_k$ = function (styleApplier) {
    var tmp0_subject = this.node_2;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.node_2.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.node_2.style;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = styleApplier.get_properties_zhllqc_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name = element.component1_7eebsc_k$();
        var value = element.component2_7eebsb_k$();
        style.setProperty(name, toString(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = styleApplier.get_variables_75f0zy_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name_0 = element_0.component1_7eebsc_k$();
        var value_0 = element_0.component2_7eebsb_k$();
        style.setProperty(name_0, toString(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).updateAttrs_i94zab_k$ = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.node_2.getAttributeNames();
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
          this.node_2.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = attrs.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      this.node_2.setAttribute(element_0.get_key_18j28a_k$(), element_0.get_value_j01efc_k$());
    }
  };
  protoOf(DomElementWrapper).updateClasses_fnw5zf_k$ = function (classes) {
    this.node_2.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.isEmpty_y1axqb_k$()) {
      var tmp = this.node_2.classList;
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
      var node = $elementBuilder.create_md4cuc_k$();
      $scope.set_element_enpsqb_k$(node);
      return new DomElementWrapper(node);
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.updateClasses_fnw5zf_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.updateStyleDeclarations_pwt3c4_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.updateAttrs_i94zab_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.updateEventListeners_egkzls_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.updateProperties_gvj74x_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$lambda_0($effect, $scope) {
    return function ($this$DisposableEffect) {
      return $effect($this$DisposableEffect, $scope.get_element_q8gf71_k$());
    };
  }
  function TagElement$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ComposeDomNode$lambda($factory) {
    return function () {
      return $factory();
    };
  }
  function ElementScope() {
  }
  function DomEffectScope() {
  }
  function get_$stableprop_91() {
    return 8;
  }
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
    this.$stable_2 = 8;
  }
  protoOf(ElementScopeImpl).set_element_enpsqb_k$ = function (_set____db54di) {
    this.element_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).get_element_q8gf71_k$ = function () {
    var tmp = this.element_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).get_scopeElement_61kop2_k$ = function (_this__u8e3s4) {
    return this.get_element_q8gf71_k$();
  };
  function _set_nextDisposableDomEffectKey__ral2d4($this, _set____db54di) {
    $this.nextDisposableDomEffectKey_1 = _set____db54di;
  }
  function _get_nextDisposableDomEffectKey__spesrw($this) {
    return $this.nextDisposableDomEffectKey_1;
  }
  function get_$stableprop_92() {
    return 8;
  }
  function ElementScopeBase$DisposableRefEffect$lambda($effect, this$0) {
    return function ($this$DisposableEffect) {
      return $effect($this$DisposableEffect, this$0.get_element_q8gf71_k$());
    };
  }
  function ElementScopeBase$DomSideEffect$lambda($changed, $effect, $effectHolder, this$0) {
    return function () {
      if ($changed)
        $effect($effectHolder, this$0.get_element_q8gf71_k$());
      return Unit_getInstance();
    };
  }
  function ElementScopeBase() {
    this.nextDisposableDomEffectKey_1 = 0;
    this.$stable_1 = 8;
  }
  protoOf(ElementScopeBase).DisposableRefEffect_k01vzl_k$ = function (key, effect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-838444997);
    if (isTraceInProgress()) {
      traceEventStart(-838444997, $changed, -1, 'org.jetbrains.compose.web.dom.ElementScopeBase.DisposableRefEffect (ElementScope.kt:94)');
    }
    DisposableEffect(key, ElementScopeBase$DisposableRefEffect$lambda(effect, this), $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  };
  protoOf(ElementScopeBase).DomSideEffect_5ihz2k_k$ = function (key, effect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1272141141);
    if (isTraceInProgress()) {
      traceEventStart(1272141141, $changed, -1, 'org.jetbrains.compose.web.dom.ElementScopeBase.DomSideEffect (ElementScope.kt:103)');
    }
    var changed = $composer_0.changed_ga7h3f_k$(key);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.changed_ga7h3f_k$(key);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.jetbrains.compose.web.dom.ElementScopeBase.DomSideEffect.<anonymous>' call
      var value = new DomDisposableEffectHolder(this);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    var effectHolder = tmp0;
    SideEffect(ElementScopeBase$DomSideEffect$lambda(changed, effect, effectHolder, this), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  };
  protoOf(ElementScopeBase).DomSideEffect_otaudn_k$ = function (effect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1733559157);
    if (isTraceInProgress()) {
      traceEventStart(1733559157, $changed, -1, 'org.jetbrains.compose.web.dom.ElementScopeBase.DomSideEffect (ElementScope.kt:115)');
    }
    var tmp1 = this.nextDisposableDomEffectKey_1;
    this.nextDisposableDomEffectKey_1 = tmp1 + 1 | 0;
    this.DomSideEffect_5ihz2k_k$(tmp1, effect, $composer_0, 512 | 112 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  };
  function DomDisposableEffectHolder(elementScope) {
    this.elementScope_1 = elementScope;
    this.onDispose_1 = null;
  }
  protoOf(DomDisposableEffectHolder).get_elementScope_54l9tr_k$ = function () {
    return this.elementScope_1;
  };
  protoOf(DomDisposableEffectHolder).set_onDispose_7gvzye_k$ = function (_set____db54di) {
    this.onDispose_1 = _set____db54di;
  };
  protoOf(DomDisposableEffectHolder).get_onDispose_crocx5_k$ = function () {
    return this.onDispose_1;
  };
  protoOf(DomDisposableEffectHolder).onRemembered_68t2e3_k$ = function () {
  };
  protoOf(DomDisposableEffectHolder).onForgotten_pbqifp_k$ = function () {
    var tmp0_safe_receiver = this.onDispose_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(this.elementScope_1.get_element_q8gf71_k$());
  };
  protoOf(DomDisposableEffectHolder).onAbandoned_1gx7a3_k$ = function () {
  };
  protoOf(DomDisposableEffectHolder).onDispose_dotmc4_k$ = function (disposeEffect) {
    this.onDispose_1 = disposeEffect;
  };
  function get_Address() {
    _init_properties_Elements_kt__eyv5nt();
    return Address;
  }
  var Address;
  function get_Article() {
    _init_properties_Elements_kt__eyv5nt();
    return Article;
  }
  var Article;
  function get_Aside() {
    _init_properties_Elements_kt__eyv5nt();
    return Aside;
  }
  var Aside;
  function get_Header() {
    _init_properties_Elements_kt__eyv5nt();
    return Header;
  }
  var Header;
  function get_Area() {
    _init_properties_Elements_kt__eyv5nt();
    return Area;
  }
  var Area;
  function get_Audio() {
    _init_properties_Elements_kt__eyv5nt();
    return Audio;
  }
  var Audio;
  function get_Map() {
    _init_properties_Elements_kt__eyv5nt();
    return Map;
  }
  var Map;
  function get_Track() {
    _init_properties_Elements_kt__eyv5nt();
    return Track;
  }
  var Track;
  function get_Video() {
    _init_properties_Elements_kt__eyv5nt();
    return Video;
  }
  var Video;
  function get_Datalist() {
    _init_properties_Elements_kt__eyv5nt();
    return Datalist;
  }
  var Datalist;
  function get_Fieldset() {
    _init_properties_Elements_kt__eyv5nt();
    return Fieldset;
  }
  var Fieldset;
  function get_Legend() {
    _init_properties_Elements_kt__eyv5nt();
    return Legend;
  }
  var Legend;
  function get_Meter() {
    _init_properties_Elements_kt__eyv5nt();
    return Meter;
  }
  var Meter;
  function get_Output() {
    _init_properties_Elements_kt__eyv5nt();
    return Output;
  }
  var Output;
  function get_Progress() {
    _init_properties_Elements_kt__eyv5nt();
    return Progress;
  }
  var Progress;
  function get_Embed() {
    _init_properties_Elements_kt__eyv5nt();
    return Embed;
  }
  var Embed;
  function get_Iframe() {
    _init_properties_Elements_kt__eyv5nt();
    return Iframe;
  }
  var Iframe;
  function get_Object() {
    _init_properties_Elements_kt__eyv5nt();
    return Object_0;
  }
  var Object_0;
  function get_Param() {
    _init_properties_Elements_kt__eyv5nt();
    return Param;
  }
  var Param;
  function get_Picture() {
    _init_properties_Elements_kt__eyv5nt();
    return Picture;
  }
  var Picture;
  function get_Source() {
    _init_properties_Elements_kt__eyv5nt();
    return Source;
  }
  var Source;
  function get_Canvas() {
    _init_properties_Elements_kt__eyv5nt();
    return Canvas;
  }
  var Canvas;
  function get_DList() {
    _init_properties_Elements_kt__eyv5nt();
    return DList;
  }
  var DList;
  function get_DTerm() {
    _init_properties_Elements_kt__eyv5nt();
    return DTerm;
  }
  var DTerm;
  function get_DDescription() {
    _init_properties_Elements_kt__eyv5nt();
    return DDescription;
  }
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
  function get_H1() {
    _init_properties_Elements_kt__eyv5nt();
    return H1;
  }
  var H1;
  function get_H2() {
    _init_properties_Elements_kt__eyv5nt();
    return H2;
  }
  var H2;
  function get_H3() {
    _init_properties_Elements_kt__eyv5nt();
    return H3;
  }
  var H3;
  function get_H4() {
    _init_properties_Elements_kt__eyv5nt();
    return H4;
  }
  var H4;
  function get_H5() {
    _init_properties_Elements_kt__eyv5nt();
    return H5;
  }
  var H5;
  function get_H6() {
    _init_properties_Elements_kt__eyv5nt();
    return H6;
  }
  var H6;
  function get_P() {
    _init_properties_Elements_kt__eyv5nt();
    return P;
  }
  var P;
  function get_Em() {
    _init_properties_Elements_kt__eyv5nt();
    return Em;
  }
  var Em;
  function get_I() {
    _init_properties_Elements_kt__eyv5nt();
    return I;
  }
  var I;
  function get_B() {
    _init_properties_Elements_kt__eyv5nt();
    return B;
  }
  var B;
  function get_Small() {
    _init_properties_Elements_kt__eyv5nt();
    return Small;
  }
  var Small;
  function get_Sup() {
    _init_properties_Elements_kt__eyv5nt();
    return Sup;
  }
  var Sup;
  function get_Sub() {
    _init_properties_Elements_kt__eyv5nt();
    return Sub;
  }
  var Sub;
  function get_Blockquote() {
    _init_properties_Elements_kt__eyv5nt();
    return Blockquote;
  }
  var Blockquote;
  function get_Span() {
    _init_properties_Elements_kt__eyv5nt();
    return Span;
  }
  var Span;
  function get_Br() {
    _init_properties_Elements_kt__eyv5nt();
    return Br;
  }
  var Br;
  function get_Ul() {
    _init_properties_Elements_kt__eyv5nt();
    return Ul;
  }
  var Ul;
  function get_Ol() {
    _init_properties_Elements_kt__eyv5nt();
    return Ol;
  }
  var Ol;
  function get_Li() {
    _init_properties_Elements_kt__eyv5nt();
    return Li;
  }
  var Li;
  function get_Img() {
    _init_properties_Elements_kt__eyv5nt();
    return Img;
  }
  var Img;
  function get_Form() {
    _init_properties_Elements_kt__eyv5nt();
    return Form;
  }
  var Form;
  function get_Select() {
    _init_properties_Elements_kt__eyv5nt();
    return Select;
  }
  var Select;
  function get_Option() {
    _init_properties_Elements_kt__eyv5nt();
    return Option;
  }
  var Option;
  function get_OptGroup() {
    _init_properties_Elements_kt__eyv5nt();
    return OptGroup;
  }
  var OptGroup;
  function get_Section() {
    _init_properties_Elements_kt__eyv5nt();
    return Section;
  }
  var Section;
  function get_TextArea() {
    _init_properties_Elements_kt__eyv5nt();
    return TextArea;
  }
  var TextArea;
  function get_Nav() {
    _init_properties_Elements_kt__eyv5nt();
    return Nav;
  }
  var Nav;
  function get_Pre() {
    _init_properties_Elements_kt__eyv5nt();
    return Pre;
  }
  var Pre;
  function get_Code() {
    _init_properties_Elements_kt__eyv5nt();
    return Code;
  }
  var Code;
  function get_Main() {
    _init_properties_Elements_kt__eyv5nt();
    return Main;
  }
  var Main;
  function get_Footer() {
    _init_properties_Elements_kt__eyv5nt();
    return Footer;
  }
  var Footer;
  function get_Hr() {
    _init_properties_Elements_kt__eyv5nt();
    return Hr;
  }
  var Hr;
  function get_Label() {
    _init_properties_Elements_kt__eyv5nt();
    return Label;
  }
  var Label;
  function get_Table() {
    _init_properties_Elements_kt__eyv5nt();
    return Table;
  }
  var Table;
  function get_Caption() {
    _init_properties_Elements_kt__eyv5nt();
    return Caption;
  }
  var Caption;
  function get_Col() {
    _init_properties_Elements_kt__eyv5nt();
    return Col;
  }
  var Col;
  function get_Colgroup() {
    _init_properties_Elements_kt__eyv5nt();
    return Colgroup;
  }
  var Colgroup;
  function get_Tr() {
    _init_properties_Elements_kt__eyv5nt();
    return Tr;
  }
  var Tr;
  function get_Thead() {
    _init_properties_Elements_kt__eyv5nt();
    return Thead;
  }
  var Thead;
  function get_Th() {
    _init_properties_Elements_kt__eyv5nt();
    return Th;
  }
  var Th;
  function get_Td() {
    _init_properties_Elements_kt__eyv5nt();
    return Td;
  }
  var Td;
  function get_Tbody() {
    _init_properties_Elements_kt__eyv5nt();
    return Tbody;
  }
  var Tbody;
  function get_Tfoot() {
    _init_properties_Elements_kt__eyv5nt();
    return Tfoot;
  }
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style_0;
  }
  var Style_0;
  function P_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-892332201);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(P$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Span_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-606646835);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Span$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Div_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1121267064);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Div$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Companion_18() {
    Companion_instance_18 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.buildersCache_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_18).get_buildersCache_bdbdva_k$ = function () {
    return this.buildersCache_1;
  };
  protoOf(Companion_18).createBuilder_cjmhhk_k$ = function (tagName) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tagLowercase = tagName.toLowerCase();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.buildersCache_1;
    var value = this_0.get_wei43m_k$(tagLowercase);
    var tmp;
    if (value == null) {
      // Inline function 'org.jetbrains.compose.web.dom.Companion.createBuilder.<anonymous>' call
      var answer = new ElementBuilderImplementation(tagLowercase);
      this_0.put_4fpzoq_k$(tagLowercase, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return tmp;
  };
  var Companion_instance_18;
  function Companion_getInstance_19() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function ElementBuilder() {
  }
  function A_0(href, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var href_0 = {_v: href};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1386364631);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(href_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_0.startReplaceableGroup_ip860b_k$(-671461516);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.changed_ga7h3f_k$(href_0._v) | $composer_0.changedInstance_s1wkiy_k$(attrs_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.A.<anonymous>' call
        var value = A$lambda(href_0, attrs_0);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      TagElement(tmp, tmpCache, content_0._v, $composer_0, 896 & $dirty);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(A$lambda_0(href_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Img_0(src, alt, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var alt_0 = {_v: alt};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(140604733);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(alt_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_0.startReplaceableGroup_ip860b_k$(-671457079);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.changed_ga7h3f_k$(src) | $composer_0.changed_ga7h3f_k$(alt_0._v)) | $composer_0.changedInstance_s1wkiy_k$(attrs_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Img.<anonymous>' call
        var value = Img$lambda(src, alt_0, attrs_0);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      TagElement(tmp, tmpCache, null, $composer_0, 384);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Img$lambda_0(src, alt_0, attrs_0, $changed, $default));
    }
  }
  function Text_1(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1813500779);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1813500779, $dirty, -1, 'org.jetbrains.compose.web.dom.Text (Elements.kt:482)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-671462136);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Text.<anonymous>' call
        var value_0 = Text$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'androidx.compose.runtime.ComposeNode' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1886828752, 'CC(ComposeNode):Composables.kt#9igjgp');
      var tmp_1 = $composer_1.get_applier_bupu8u_k$();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_1.startNode_htvs8k_k$();
      if ($composer_1.get_inserting_25mlsw_k$()) {
        $composer_1.createNode_ahrd54_k$(tmpCache);
      } else {
        $composer_1.useNode_io5s9l_k$();
      }
      // Inline function 'org.jetbrains.compose.web.dom.Text.<anonymous>' call
      var $this$ComposeNode = _Updater___init__impl__rbfxm8($composer_1);
      Updater__set_impl_v7kwss($this$ComposeNode, value, Text$lambda_0);
      $composer_1.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Text$lambda_1(value, $changed));
    }
  }
  function Input_0(type, attrs, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(330436284);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(type) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(330436284, $dirty, -1, 'org.jetbrains.compose.web.dom.Input (Elements.kt:1078)');
      }
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -492369756, 'CC(remember):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Input.<anonymous>' call
        var value = mutableStateOf(0);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var keyForRestoringControlledState = tmp0;
      var tmp_1 = get_Input();
      $composer_0.startReplaceableGroup_ip860b_k$(-671446402);
      var tmp2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.changed_ga7h3f_k$(type) | $composer_0.changed_ga7h3f_k$(keyForRestoringControlledState)) | $composer_0.changedInstance_s1wkiy_k$(attrs));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp2.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Input.<anonymous>' call
        var value_0 = Input$lambda(type, attrs, keyForRestoringControlledState);
        tmp2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmpCache = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'org.jetbrains.compose.web.dom.Input.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 558133459, true, Input$lambda_0(type, keyForRestoringControlledState));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Input.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_1);
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
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Input$lambda_1(type, attrs, $changed));
    }
  }
  function TextArea_0(value, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var value_0 = {_v: value};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(387201045);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
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
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea.<anonymous>' call
        var value_1 = !(value_0._v == null);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
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
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea.<anonymous>' call
        var value_2 = mutableStateOf(0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_1 = value_2;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      var keyForRestoringControlledState = tmp0_0;
      var tmp_3 = get_TextArea();
      $composer_0.startReplaceableGroup_ip860b_k$(-671454237);
      var tmp4 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!($composer_0.changed_ga7h3f_k$(keyForRestoringControlledState) | $composer_0.changedInstance_s1wkiy_k$(attrs_0._v)) | $composer_0.changed_jpyyrz_k$(firstProvidedValueWasNotNull)) | $composer_0.changed_ga7h3f_k$(value_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = tmp4.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea.<anonymous>' call
        var value_3 = TextArea$lambda(attrs_0, firstProvidedValueWasNotNull, value_0, keyForRestoringControlledState);
        tmp4.updateRememberedValue_l1wh71_k$(value_3);
        tmp_4 = value_3;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmpCache = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'org.jetbrains.compose.web.dom.TextArea.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, 614898220, true, TextArea$lambda_0(keyForRestoringControlledState));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_3.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_3.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid_0 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.TextArea.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_3.updateRememberedValue_l1wh71_k$(value_4);
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
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(TextArea$lambda_1(value_0, attrs_0, $changed, $default));
    }
  }
  function Label_0(forId, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var forId_0 = {_v: forId};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-41178524);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(forId_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_0.startReplaceableGroup_ip860b_k$(-671451914);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.changed_ga7h3f_k$(forId_0._v) | $composer_0.changedInstance_s1wkiy_k$(attrs_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Label.<anonymous>' call
        var value = Label$lambda(forId_0, attrs_0);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      TagElement(tmp, tmpCache, content_0._v, $composer_0, 896 & $dirty);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Label$lambda_0(forId_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Button_1(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(17018421);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Button$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Style_1(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(244974285);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(applyAttrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(cssRules) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        applyAttrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(244974285, $dirty, -1, 'org.jetbrains.compose.web.dom.Style (Elements.kt:1002)');
      }
      var tmp = get_Style();
      $composer_0.startReplaceableGroup_ip860b_k$(-671448825);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$(applyAttrs_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>' call
        var value = Style$lambda(applyAttrs_0);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 962227798, true, Style$lambda_0(cssRules));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
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
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Style$lambda_1(applyAttrs_0, cssRules, $changed, $default));
    }
  }
  function _get_tagName__m9buy4($this) {
    return $this.tagName_1;
  }
  function _get_el__ndc0ck($this) {
    var tmp0 = $this.el$delegate_1;
    // Inline function 'kotlin.getValue' call
    el$factory();
    return tmp0.get_value_j01efc_k$();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.tagName_1);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.tagName_1 = tagName;
    var tmp = this;
    tmp.el$delegate_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).create_md4cuc_k$ = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
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
  function P$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      P_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Span$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Span_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Div$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function A$lambda($href, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($href._v == null)) {
        href($this$TagElement, $href._v);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_getInstance();
    };
  }
  function A$lambda_0($href, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      A_0($href._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Img$lambda($src, $alt, $attrs) {
    return function ($this$TagElement) {
      alt(src($this$TagElement, $src), $alt._v);
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$TagElement);
      }
      return Unit_getInstance();
    };
  }
  function Img$lambda_0($src, $alt, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Img_0($src, $alt._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Text$lambda() {
    _init_properties_Elements_kt__eyv5nt();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$lambda_0($this$set, value) {
    _init_properties_Elements_kt__eyv5nt();
    var tmp = $this$set.get_node_wor8sr_k$();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_getInstance();
  }
  function Text$lambda_1($value, $$changed) {
    return function ($composer, $force) {
      Text_1($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Input$lambda$lambda($keyForRestoringControlledState) {
    return function (it) {
      $keyForRestoringControlledState.set_value_v1vabv_k$($keyForRestoringControlledState.get_value_j01efc_k$() + 1 | 0);
      return Unit_getInstance();
    };
  }
  function Input$lambda($type, $attrs, $keyForRestoringControlledState) {
    return function ($this$TagElement) {
      var inputAttrsBuilder = new InputAttrsScope($type, $this$TagElement);
      type_0(inputAttrsBuilder, $type);
      inputAttrsBuilder.onInput_qzb0am_k$(Input$lambda$lambda($keyForRestoringControlledState));
      $attrs(inputAttrsBuilder);
      return Unit_getInstance();
    };
  }
  function Input$$inlined$run$1$1$1() {
  }
  protoOf(Input$$inlined$run$1$1$1).dispose_3nnxhr_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Input.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function Input$lambda$lambda_0($this_TagElement) {
    return function ($this$DisposableEffect) {
      restoreControlledInputState($this_TagElement.get_scopeElement_61kop2_k$($this$DisposableEffect));
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
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$TagElement) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(558133459, $dirty, -1, 'org.jetbrains.compose.web.dom.Input.<anonymous> (Elements.kt:1095)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(-1812148288);
        if (equals($type, Radio_getInstance())) {
          DisposeRadioGroupEffect($this$TagElement, $composer_0, 14 & $dirty);
        }
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp_1 = $keyForRestoringControlledState.get_value_j01efc_k$();
        DisposableEffect(tmp_1, Input$lambda$lambda_0($this$TagElement), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Input$lambda_1($type, $attrs, $$changed) {
    return function ($composer, $force) {
      Input_0($type, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function TextArea$lambda$lambda($keyForRestoringControlledState) {
    return function (it) {
      $keyForRestoringControlledState.set_value_v1vabv_k$($keyForRestoringControlledState.get_value_j01efc_k$() + 1 | 0);
      return Unit_getInstance();
    };
  }
  function TextArea$lambda($attrs, $firstProvidedValueWasNotNull, $value, $keyForRestoringControlledState) {
    return function ($this$TagElement) {
      var textAreaAttrsBuilder = new TextAreaAttrsScope($this$TagElement);
      textAreaAttrsBuilder.onInput_cld1rf_k$(TextArea$lambda$lambda($keyForRestoringControlledState));
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v(textAreaAttrsBuilder);
      }
      var tmp_0;
      if ($firstProvidedValueWasNotNull) {
        var tmp0_elvis_lhs = $value._v;
        textAreaAttrsBuilder.value_hphtnt_k$(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function TextArea$$inlined$run$1$1$1() {
  }
  protoOf(TextArea$$inlined$run$1$1$1).dispose_3nnxhr_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.dom.TextArea.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function TextArea$lambda$lambda_0($this_TagElement) {
    return function ($this$DisposableEffect) {
      restoreControlledTextAreaState($this_TagElement.get_scopeElement_61kop2_k$($this$DisposableEffect));
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
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$TagElement) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(614898220, $dirty, -1, 'org.jetbrains.compose.web.dom.TextArea.<anonymous> (Elements.kt:776)');
        }
        var tmp_1 = $keyForRestoringControlledState.get_value_j01efc_k$();
        DisposableEffect(tmp_1, TextArea$lambda$lambda_0($this$TagElement), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function TextArea$lambda_1($value, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      TextArea_0($value._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Label$lambda($forId, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($forId._v == null)) {
        forId($this$TagElement, $forId._v);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_getInstance();
    };
  }
  function Label$lambda_0($forId, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Label_0($forId._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Button$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_1($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Style$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_getInstance();
    };
  }
  function Style$$inlined$run$1$1$1($cssStylesheet) {
    this.$cssStylesheet_1 = $cssStylesheet;
  }
  protoOf(Style$$inlined$run$1$1$1).dispose_3nnxhr_k$ = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.$cssStylesheet_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.get_scopeElement_61kop2_k$($this$DisposableEffect).sheet;
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
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$TagElement) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $dirty, -1, 'org.jetbrains.compose.web.dom.Style.<anonymous> (Elements.kt:1011)');
        }
        var tmp_1 = $cssRules.get_size_woubt6_k$();
        DisposableEffect_0($cssRules, tmp_1, Style$lambda$lambda($this$TagElement, $cssRules), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Style$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style_1($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
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
      Style_0 = new ElementBuilderImplementation('style');
    }
  }
  function get_radioGroupScopeImpl() {
    _init_properties_RadioGroup_kt__a2rbj8();
    return radioGroupScopeImpl;
  }
  var radioGroupScopeImpl;
  function set_generatedRadioGroupNamesCounter(_set____db54di) {
    _init_properties_RadioGroup_kt__a2rbj8();
    generatedRadioGroupNamesCounter = _set____db54di;
  }
  function get_generatedRadioGroupNamesCounter() {
    _init_properties_RadioGroup_kt__a2rbj8();
    return generatedRadioGroupNamesCounter;
  }
  var generatedRadioGroupNamesCounter;
  function get_radioGroupCompositionLocalValue() {
    _init_properties_RadioGroup_kt__a2rbj8();
    return radioGroupCompositionLocalValue;
  }
  var radioGroupCompositionLocalValue;
  function get_radioGroupCompositionLocalName() {
    _init_properties_RadioGroup_kt__a2rbj8();
    return radioGroupCompositionLocalName;
  }
  var radioGroupCompositionLocalName;
  function get_$stableprop_93() {
    return 0;
  }
  function RadioGroupScope() {
    this.$stable_1 = 0;
  }
  function radioGroupCompositionLocalValue$lambda() {
    _init_properties_RadioGroup_kt__a2rbj8();
    var message = 'No radio group checked value provided';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function radioGroupCompositionLocalName$lambda() {
    _init_properties_RadioGroup_kt__a2rbj8();
    var message = 'No radio group name provided';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var properties_initialized_RadioGroup_kt_um4oue;
  function _init_properties_RadioGroup_kt__a2rbj8() {
    if (!properties_initialized_RadioGroup_kt_um4oue) {
      properties_initialized_RadioGroup_kt_um4oue = true;
      radioGroupScopeImpl = new RadioGroupScope();
      generatedRadioGroupNamesCounter = 0;
      radioGroupCompositionLocalValue = compositionLocalOf(VOID, radioGroupCompositionLocalValue$lambda);
      radioGroupCompositionLocalName = compositionLocalOf(VOID, radioGroupCompositionLocalName$lambda);
    }
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = cssRules.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.setCSSRules.<anonymous>' call
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.get_header_e7o2vq_k$() + ' {}');
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
      var _iterator__ex2g4s = cssRuleDeclaration.get_style_iyqetk_k$().get_properties_zhllqc_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name = element.component1_7eebsc_k$();
        var value = element.component2_7eebsb_k$();
        setProperty(cssStyleRule.style, name, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = cssRuleDeclaration.get_style_iyqetk_k$().get_variables_75f0zy_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name_0 = element_0.component1_7eebsc_k$();
        var value_0 = element_0.component2_7eebsb_k$();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var cssGroupingRule = cssRule;
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_1 = cssRuleDeclaration.get_rules_iy6zf2_k$().iterator_jk1svi_k$();
        while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
          var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
          // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var cssGroupingRule_0 = cssRule;
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_2 = cssRuleDeclaration.get_keys_wop4xp_k$().iterator_jk1svi_k$();
          while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
            var element_2 = _iterator__ex2g4s_2.next_20eer_k$();
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
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.get_header_e7o2vq_k$() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.dom.addRule.<anonymous>' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.get_header_e7o2vq_k$() + ' {}');
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
  function get_$stableprop_94() {
    return 0;
  }
  function SyntheticAnimationEvent(nativeEvent, animationEventDetails) {
    SyntheticEvent.call(this, nativeEvent);
    this.animationName_1 = animationEventDetails.animationName;
    this.elapsedTime_1 = animationEventDetails.elapsedTime;
    this.pseudoElement_1 = animationEventDetails.pseudoElement;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticAnimationEvent).get_animationName_wdgkxy_k$ = function () {
    return this.animationName_1;
  };
  protoOf(SyntheticAnimationEvent).get_elapsedTime_5vfaps_k$ = function () {
    return this.elapsedTime_1;
  };
  protoOf(SyntheticAnimationEvent).get_pseudoElement_9pr039_k$ = function () {
    return this.pseudoElement_1;
  };
  function get_$stableprop_95() {
    return 0;
  }
  function SyntheticChangeEvent(value, nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.value_1 = value;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticChangeEvent).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function get_$stableprop_96() {
    return 0;
  }
  function SyntheticClipboardEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.clipboardData_1 = nativeEvent.clipboardData;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticClipboardEvent).get_clipboardData_2lw3zr_k$ = function () {
    return this.clipboardData_1;
  };
  protoOf(SyntheticClipboardEvent).getData_bpxm7a_k$ = function (format) {
    var tmp0_safe_receiver = this.clipboardData_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getData(format);
  };
  protoOf(SyntheticClipboardEvent).setData_h15rmk_k$ = function (format, data) {
    var tmp0_safe_receiver = this.clipboardData_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.setData(format, data);
    }
  };
  function get_$stableprop_97() {
    return 0;
  }
  function SyntheticEvent(nativeEvent) {
    this.nativeEvent_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.target_1 = this.nativeEvent_1.target;
    this.bubbles_1 = this.nativeEvent_1.bubbles;
    this.cancelable_1 = this.nativeEvent_1.cancelable;
    this.composed_1 = this.nativeEvent_1.composed;
    this.currentTarget_1 = this.nativeEvent_1.currentTarget;
    this.eventPhase_1 = this.nativeEvent_1.eventPhase;
    this.defaultPrevented_1 = this.nativeEvent_1.defaultPrevented;
    this.timestamp_1 = this.nativeEvent_1.timeStamp;
    this.type_1 = this.nativeEvent_1.type;
    this.isTrusted_1 = this.nativeEvent_1.isTrusted;
    this.$stable_1 = 0;
  }
  protoOf(SyntheticEvent).get_nativeEvent_skldba_k$ = function () {
    return this.nativeEvent_1;
  };
  protoOf(SyntheticEvent).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(SyntheticEvent).get_bubbles_4z13zy_k$ = function () {
    return this.bubbles_1;
  };
  protoOf(SyntheticEvent).get_cancelable_b2ewrh_k$ = function () {
    return this.cancelable_1;
  };
  protoOf(SyntheticEvent).get_composed_tbcbff_k$ = function () {
    return this.composed_1;
  };
  protoOf(SyntheticEvent).get_currentTarget_yyne0v_k$ = function () {
    return this.currentTarget_1;
  };
  protoOf(SyntheticEvent).get_eventPhase_44nj3q_k$ = function () {
    return this.eventPhase_1;
  };
  protoOf(SyntheticEvent).get_defaultPrevented_umrpc1_k$ = function () {
    return this.defaultPrevented_1;
  };
  protoOf(SyntheticEvent).get_timestamp_9fccx9_k$ = function () {
    return this.timestamp_1;
  };
  protoOf(SyntheticEvent).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(SyntheticEvent).get_isTrusted_ievk1o_k$ = function () {
    return this.isTrusted_1;
  };
  protoOf(SyntheticEvent).preventDefault_xs6po9_k$ = function () {
    return this.nativeEvent_1.preventDefault();
  };
  protoOf(SyntheticEvent).stopPropagation_5qf8uy_k$ = function () {
    return this.nativeEvent_1.stopPropagation();
  };
  protoOf(SyntheticEvent).stopImmediatePropagation_zb9e3x_k$ = function () {
    return this.nativeEvent_1.stopImmediatePropagation();
  };
  protoOf(SyntheticEvent).composedPath_62fnop_k$ = function () {
    return this.nativeEvent_1.composedPath();
  };
  function get_$stableprop_98() {
    return 0;
  }
  function SyntheticFocusEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.relatedTarget_1 = nativeEvent.relatedTarget;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticFocusEvent).get_relatedTarget_1ea9gz_k$ = function () {
    return this.relatedTarget_1;
  };
  function get_$stableprop_99() {
    return 0;
  }
  function SyntheticInputEvent(value, nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.value_1 = value;
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
    tmp.data_1 = tmp_0;
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
    tmp_1.dataTransfer_1 = tmp_2;
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
    tmp_3.inputType_1 = tmp_4;
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
    tmp_5.isComposing_1 = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticInputEvent).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(SyntheticInputEvent).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(SyntheticInputEvent).get_dataTransfer_ncqosi_k$ = function () {
    return this.dataTransfer_1;
  };
  protoOf(SyntheticInputEvent).get_inputType_yaat1h_k$ = function () {
    return this.inputType_1;
  };
  protoOf(SyntheticInputEvent).get_isComposing_a8f9zw_k$ = function () {
    return this.isComposing_1;
  };
  function get_normalizedKeys() {
    _init_properties_SyntheticKeyboardEvent_kt__tcvd9u();
    return normalizedKeys;
  }
  var normalizedKeys;
  function _get_keyboardEvent__g732rm($this) {
    return $this.keyboardEvent_1;
  }
  function get_$stableprop_100() {
    return 0;
  }
  function SyntheticKeyboardEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.keyboardEvent_1 = nativeEvent;
    this.altKey_1 = nativeEvent.altKey;
    this.code_1 = nativeEvent.code;
    this.ctrlKey_1 = nativeEvent.ctrlKey;
    this.isComposing_1 = nativeEvent.isComposing;
    this.key_1 = nativeEvent.key;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    tmp.locale_1 = toString(nativeEvent.locale);
    this.location_1 = nativeEvent.location;
    this.metaKey_1 = nativeEvent.metaKey;
    this.repeat_1 = nativeEvent.repeat;
    this.shiftKey_1 = nativeEvent.shiftKey;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticKeyboardEvent).get_altKey_b0iwhr_k$ = function () {
    return this.altKey_1;
  };
  protoOf(SyntheticKeyboardEvent).get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  protoOf(SyntheticKeyboardEvent).get_ctrlKey_jfc6q3_k$ = function () {
    return this.ctrlKey_1;
  };
  protoOf(SyntheticKeyboardEvent).get_isComposing_a8f9zw_k$ = function () {
    return this.isComposing_1;
  };
  protoOf(SyntheticKeyboardEvent).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(SyntheticKeyboardEvent).get_locale_g9dqar_k$ = function () {
    return this.locale_1;
  };
  protoOf(SyntheticKeyboardEvent).get_location_d3s02_k$ = function () {
    return this.location_1;
  };
  protoOf(SyntheticKeyboardEvent).get_metaKey_h2b5f5_k$ = function () {
    return this.metaKey_1;
  };
  protoOf(SyntheticKeyboardEvent).get_repeat_iydw9w_k$ = function () {
    return this.repeat_1;
  };
  protoOf(SyntheticKeyboardEvent).get_shiftKey_ujdkqu_k$ = function () {
    return this.shiftKey_1;
  };
  protoOf(SyntheticKeyboardEvent).getModifierState_g49qi_k$ = function (keyArg) {
    return this.keyboardEvent_1.getModifierState(keyArg);
  };
  protoOf(SyntheticKeyboardEvent).getNormalizedKey_tfr8s2_k$ = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'org.jetbrains.compose.web.events.SyntheticKeyboardEvent.getNormalizedKey.<anonymous>' call
    var it = this.key_1;
    var tmp0_elvis_lhs = get_normalizedKeys().get_wei43m_k$(it);
    return tmp0_elvis_lhs == null ? it : tmp0_elvis_lhs;
  };
  var properties_initialized_SyntheticKeyboardEvent_kt_z9adjk;
  function _init_properties_SyntheticKeyboardEvent_kt__tcvd9u() {
    if (!properties_initialized_SyntheticKeyboardEvent_kt_z9adjk) {
      properties_initialized_SyntheticKeyboardEvent_kt_z9adjk = true;
      normalizedKeys = mapOf([to('Esc', 'Escape'), to('Spacebar', ' '), to('Left', 'ArrowLeft'), to('Up', 'ArrowUp'), to('Right', 'ArrowRight'), to('Down', 'ArrowDown'), to('Del', 'Delete'), to('Apps', 'ContextMenu'), to('Menu', 'ContextMenu'), to('Scroll', 'ScrollLock'), to('MozPrintableKey', 'Unidentified')]);
    }
  }
  function get_$stableprop_101() {
    return 0;
  }
  function SyntheticWheelEvent(nativeEvent) {
    SyntheticMouseEvent.call(this, nativeEvent);
    this.deltaX_1 = nativeEvent.deltaX;
    this.deltaY_1 = nativeEvent.deltaY;
    this.deltaZ_1 = nativeEvent.deltaZ;
    this.deltaMode_1 = nativeEvent.deltaMode;
    this.$stable_3 = 0;
  }
  protoOf(SyntheticWheelEvent).get_deltaX_cboxwp_k$ = function () {
    return this.deltaX_1;
  };
  protoOf(SyntheticWheelEvent).get_deltaY_cboxwq_k$ = function () {
    return this.deltaY_1;
  };
  protoOf(SyntheticWheelEvent).get_deltaZ_cboxwr_k$ = function () {
    return this.deltaZ_1;
  };
  protoOf(SyntheticWheelEvent).get_deltaMode_9dro42_k$ = function () {
    return this.deltaMode_1;
  };
  function _get_mouseEvent__o09ya2($this) {
    return $this.mouseEvent_1;
  }
  function get_$stableprop_102() {
    return 0;
  }
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.mouseEvent_1 = nativeEvent;
    this.altKey_1 = nativeEvent.altKey;
    this.button_1 = nativeEvent.button;
    this.buttons_1 = nativeEvent.buttons;
    this.clientX_1 = nativeEvent.clientX;
    this.clientY_1 = nativeEvent.clientY;
    this.ctrlKey_1 = nativeEvent.ctrlKey;
    this.metaKey_1 = nativeEvent.metaKey;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = nativeEvent.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.movementX_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = nativeEvent.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.movementY_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.offsetX_1 = nativeEvent.offsetX;
    this.offsetY_1 = nativeEvent.offsetY;
    this.pageX_1 = nativeEvent.pageX;
    this.pageY_1 = nativeEvent.pageY;
    this.region_1 = nativeEvent.region;
    this.relatedTarget_1 = nativeEvent.relatedTarget;
    this.screenX_1 = nativeEvent.screenX;
    this.screenY_1 = nativeEvent.screenY;
    this.shiftKey_1 = nativeEvent.shiftKey;
    this.x_1 = nativeEvent.x;
    this.y_1 = nativeEvent.y;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticMouseEvent).get_altKey_b0iwhr_k$ = function () {
    return this.altKey_1;
  };
  protoOf(SyntheticMouseEvent).get_button_bmjiuz_k$ = function () {
    return this.button_1;
  };
  protoOf(SyntheticMouseEvent).get_buttons_598yvs_k$ = function () {
    return this.buttons_1;
  };
  protoOf(SyntheticMouseEvent).get_clientX_fhxblw_k$ = function () {
    return this.clientX_1;
  };
  protoOf(SyntheticMouseEvent).get_clientY_fhxblx_k$ = function () {
    return this.clientY_1;
  };
  protoOf(SyntheticMouseEvent).get_ctrlKey_jfc6q3_k$ = function () {
    return this.ctrlKey_1;
  };
  protoOf(SyntheticMouseEvent).get_metaKey_h2b5f5_k$ = function () {
    return this.metaKey_1;
  };
  protoOf(SyntheticMouseEvent).get_movementX_qe3gf4_k$ = function () {
    return this.movementX_1;
  };
  protoOf(SyntheticMouseEvent).get_movementY_qe3gf5_k$ = function () {
    return this.movementY_1;
  };
  protoOf(SyntheticMouseEvent).get_offsetX_ocbsn8_k$ = function () {
    return this.offsetX_1;
  };
  protoOf(SyntheticMouseEvent).get_offsetY_ocbsn7_k$ = function () {
    return this.offsetY_1;
  };
  protoOf(SyntheticMouseEvent).get_pageX_iwqirk_k$ = function () {
    return this.pageX_1;
  };
  protoOf(SyntheticMouseEvent).get_pageY_iwqirl_k$ = function () {
    return this.pageY_1;
  };
  protoOf(SyntheticMouseEvent).get_region_iy88ot_k$ = function () {
    return this.region_1;
  };
  protoOf(SyntheticMouseEvent).get_relatedTarget_1ea9gz_k$ = function () {
    return this.relatedTarget_1;
  };
  protoOf(SyntheticMouseEvent).get_screenX_x4h283_k$ = function () {
    return this.screenX_1;
  };
  protoOf(SyntheticMouseEvent).get_screenY_x4h284_k$ = function () {
    return this.screenY_1;
  };
  protoOf(SyntheticMouseEvent).get_shiftKey_ujdkqu_k$ = function () {
    return this.shiftKey_1;
  };
  protoOf(SyntheticMouseEvent).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(SyntheticMouseEvent).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(SyntheticMouseEvent).getModifierState_g49qi_k$ = function (keyArg) {
    return this.mouseEvent_1.getModifierState(keyArg);
  };
  function get_$stableprop_103() {
    return 0;
  }
  function SyntheticDragEvent(nativeEvent) {
    SyntheticMouseEvent.call(this, nativeEvent);
    this.dataTransfer_1 = nativeEvent.dataTransfer;
    this.$stable_3 = 0;
  }
  protoOf(SyntheticDragEvent).get_dataTransfer_ncqosi_k$ = function () {
    return this.dataTransfer_1;
  };
  function get_$stableprop_104() {
    return 0;
  }
  function SyntheticSelectEvent(nativeEvent, selectionInfoDetails) {
    SyntheticEvent.call(this, nativeEvent);
    this.selectionStart_1 = selectionInfoDetails.selectionStart;
    this.selectionEnd_1 = selectionInfoDetails.selectionEnd;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticSelectEvent).get_selectionStart_1zskht_k$ = function () {
    return this.selectionStart_1;
  };
  protoOf(SyntheticSelectEvent).get_selectionEnd_mebxu0_k$ = function () {
    return this.selectionEnd_1;
  };
  protoOf(SyntheticSelectEvent).selection_sdn3hw_k$ = function () {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_safe_receiver = this.get_nativeEvent_skldba_k$().target.value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp3 = this.selectionStart_1;
      // Inline function 'kotlin.text.substring' call
      var endIndex = this.selectionEnd_1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver.substring(tmp3, endIndex);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  };
  function get_$stableprop_105() {
    return 0;
  }
  function SyntheticTouchEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.altKey_1 = nativeEvent.altKey;
    this.changedTouches_1 = nativeEvent.changedTouches;
    this.ctrlKey_1 = nativeEvent.ctrlKey;
    this.metaKey_1 = nativeEvent.metaKey;
    this.shiftKey_1 = nativeEvent.shiftKey;
    this.touches_1 = nativeEvent.touches;
    this.$stable_2 = 0;
  }
  protoOf(SyntheticTouchEvent).get_altKey_b0iwhr_k$ = function () {
    return this.altKey_1;
  };
  protoOf(SyntheticTouchEvent).get_changedTouches_6cqbxe_k$ = function () {
    return this.changedTouches_1;
  };
  protoOf(SyntheticTouchEvent).get_ctrlKey_jfc6q3_k$ = function () {
    return this.ctrlKey_1;
  };
  protoOf(SyntheticTouchEvent).get_metaKey_h2b5f5_k$ = function () {
    return this.metaKey_1;
  };
  protoOf(SyntheticTouchEvent).get_shiftKey_ujdkqu_k$ = function () {
    return this.shiftKey_1;
  };
  protoOf(SyntheticTouchEvent).get_touches_hi32yk_k$ = function () {
    return this.touches_1;
  };
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).id_e4l56n_k$ = id;
  protoOf(AttrsScopeBuilder).hidden_k4uzbq_k$ = hidden;
  protoOf(AttrsScopeBuilder).title_qpfo4e_k$ = title;
  protoOf(AttrsScopeBuilder).dir_uokp4q_k$ = dir;
  protoOf(AttrsScopeBuilder).draggable_cxyxb5_k$ = draggable;
  protoOf(AttrsScopeBuilder).contentEditable_hbi188_k$ = contentEditable;
  protoOf(AttrsScopeBuilder).lang_9i4u6k_k$ = lang;
  protoOf(AttrsScopeBuilder).tabIndex_fn4aj_k$ = tabIndex;
  protoOf(AttrsScopeBuilder).spellCheck_hp5v6j_k$ = spellCheck;
  protoOf(AttrsScopeBuilder).inputMode_1lh0s3_k$ = inputMode;
  protoOf(AttrsScopeBuilder).inputMode_7krh0f_k$ = inputMode_0;
  protoOf(EventsListenerScopeBuilder).onContextMenu_uus4bk_k$ = onContextMenu;
  protoOf(EventsListenerScopeBuilder).onClick_q9cds6_k$ = onClick;
  protoOf(EventsListenerScopeBuilder).onDoubleClick_gh82mh_k$ = onDoubleClick;
  protoOf(EventsListenerScopeBuilder).onMouseDown_hebxzb_k$ = onMouseDown;
  protoOf(EventsListenerScopeBuilder).onMouseUp_at21zm_k$ = onMouseUp;
  protoOf(EventsListenerScopeBuilder).onMouseEnter_smfckd_k$ = onMouseEnter;
  protoOf(EventsListenerScopeBuilder).onMouseLeave_j862le_k$ = onMouseLeave;
  protoOf(EventsListenerScopeBuilder).onMouseMove_r2z3wo_k$ = onMouseMove;
  protoOf(EventsListenerScopeBuilder).onMouseOut_nootgn_k$ = onMouseOut;
  protoOf(EventsListenerScopeBuilder).onMouseOver_o893qj_k$ = onMouseOver;
  protoOf(EventsListenerScopeBuilder).onWheel_59frrx_k$ = onWheel;
  protoOf(EventsListenerScopeBuilder).onDrag_xkse65_k$ = onDrag;
  protoOf(EventsListenerScopeBuilder).onDrop_373vqw_k$ = onDrop;
  protoOf(EventsListenerScopeBuilder).onDragStart_ispt2x_k$ = onDragStart;
  protoOf(EventsListenerScopeBuilder).onDragEnd_4or1o2_k$ = onDragEnd;
  protoOf(EventsListenerScopeBuilder).onDragOver_tkxwb3_k$ = onDragOver;
  protoOf(EventsListenerScopeBuilder).onDragEnter_9tqs4v_k$ = onDragEnter;
  protoOf(EventsListenerScopeBuilder).onDragLeave_nsncqa_k$ = onDragLeave;
  protoOf(EventsListenerScopeBuilder).onCopy_4jq33g_k$ = onCopy;
  protoOf(EventsListenerScopeBuilder).onCut_wod3pf_k$ = onCut;
  protoOf(EventsListenerScopeBuilder).onPaste_8ucd2k_k$ = onPaste;
  protoOf(EventsListenerScopeBuilder).onKeyDown_2pa1il_k$ = onKeyDown;
  protoOf(EventsListenerScopeBuilder).onKeyUp_g6q8ee_k$ = onKeyUp;
  protoOf(EventsListenerScopeBuilder).onFocus_ozgn2v_k$ = onFocus;
  protoOf(EventsListenerScopeBuilder).onBlur_yy3d4s_k$ = onBlur;
  protoOf(EventsListenerScopeBuilder).onFocusIn_vryg4c_k$ = onFocusIn;
  protoOf(EventsListenerScopeBuilder).onFocusOut_jw1zh_k$ = onFocusOut;
  protoOf(EventsListenerScopeBuilder).onTouchCancel_rg0d1t_k$ = onTouchCancel;
  protoOf(EventsListenerScopeBuilder).onTouchMove_wm6qxk_k$ = onTouchMove;
  protoOf(EventsListenerScopeBuilder).onTouchEnd_ugz1se_k$ = onTouchEnd;
  protoOf(EventsListenerScopeBuilder).onTouchStart_4yr0c9_k$ = onTouchStart;
  protoOf(EventsListenerScopeBuilder).onAnimationEnd_l576ug_k$ = onAnimationEnd;
  protoOf(EventsListenerScopeBuilder).onAnimationIteration_o79r9y_k$ = onAnimationIteration;
  protoOf(EventsListenerScopeBuilder).onAnimationStart_ir5kdr_k$ = onAnimationStart;
  protoOf(EventsListenerScopeBuilder).onScroll_ur92mf_k$ = onScroll;
  protoOf(EventsListenerScopeBuilder).addEventListener_pu8o1q_k$ = addEventListener;
  protoOf(EventsListenerScopeBuilder).addEventListener_xhf81m_k$ = addEventListener_0;
  protoOf(StyleScopeBuilder).property_wcrait_k$ = property;
  protoOf(StyleScopeBuilder).property_jk9dw6_k$ = property_0;
  protoOf(StyleScopeBuilder).variable_kvosx8_k$ = variable;
  protoOf(StyleScopeBuilder).variable_j4rwe5_k$ = variable_0;
  protoOf(StyleScopeBuilder).invoke_77zbl8_k$ = invoke;
  protoOf(StyleScopeBuilder).invoke_rxx4vw_k$ = invoke_0;
  protoOf(StyleScopeBuilder).invoke_jsk60r_k$ = invoke_1;
  protoOf(CSSBuilderImpl).invoke_3g5iuj_k$ = invoke_2;
  protoOf(CSSBuilderImpl).invoke_17x10s_k$ = invoke_3;
  protoOf(CSSBuilderImpl).style_f6q54s_k$ = style;
  protoOf(CSSBuilderImpl).style_qsvaqb_k$ = style_0;
  protoOf(CSSBuilderImpl).selector_430xff_k$ = selector;
  protoOf(CSSBuilderImpl).combine_s8rvtq_k$ = combine;
  protoOf(CSSBuilderImpl).plus_33ujzs_k$ = plus;
  protoOf(CSSBuilderImpl).plus_figtb_k$ = plus_0;
  protoOf(CSSBuilderImpl).returnUniversalSelector = returnUniversalSelector;
  protoOf(CSSBuilderImpl).get_universal_1qp21u_k$ = get_universal;
  protoOf(CSSBuilderImpl).type_g7nfuo_k$ = type;
  protoOf(CSSBuilderImpl).className_n9zzbd_k$ = className;
  protoOf(CSSBuilderImpl).id_e4l56n_k$ = id_0;
  protoOf(CSSBuilderImpl).attr_1eatx7_k$ = attr;
  protoOf(CSSBuilderImpl).attr$default_8acpq4_k$ = attr$default;
  protoOf(CSSBuilderImpl).attrEquals_vwtgpq_k$ = attrEquals;
  protoOf(CSSBuilderImpl).attrEquals$default_2vg9wo_k$ = attrEquals$default;
  protoOf(CSSBuilderImpl).attrListContains_rjrrsw_k$ = attrListContains;
  protoOf(CSSBuilderImpl).attrListContains$default_a6gpmi_k$ = attrListContains$default;
  protoOf(CSSBuilderImpl).attrHyphened_2fosj8_k$ = attrHyphened;
  protoOf(CSSBuilderImpl).attrHyphened$default_z202be_k$ = attrHyphened$default;
  protoOf(CSSBuilderImpl).attrPrefixed_7hjetw_k$ = attrPrefixed;
  protoOf(CSSBuilderImpl).attrPrefixed$default_jycsfa_k$ = attrPrefixed$default;
  protoOf(CSSBuilderImpl).attrSuffixed_6vqc43_k$ = attrSuffixed;
  protoOf(CSSBuilderImpl).attrSuffixed$default_6qo709_k$ = attrSuffixed$default;
  protoOf(CSSBuilderImpl).attrContains_fr4p8e_k$ = attrContains;
  protoOf(CSSBuilderImpl).attrContains$default_grlkqw_k$ = attrContains$default;
  protoOf(CSSBuilderImpl).group_fp9k4e_k$ = group;
  protoOf(CSSBuilderImpl).descendant_rdc8nx_k$ = descendant;
  protoOf(CSSBuilderImpl).desc_lky2kv_k$ = desc;
  protoOf(CSSBuilderImpl).desc_bh0wjc_k$ = desc_0;
  protoOf(CSSBuilderImpl).desc_8iwiiu_k$ = desc_1;
  protoOf(CSSBuilderImpl).desc_sumdm7_k$ = desc_2;
  protoOf(CSSBuilderImpl).child_falepo_k$ = child;
  protoOf(CSSBuilderImpl).sibling_ebo92a_k$ = sibling;
  protoOf(CSSBuilderImpl).adjacent_1pkom6_k$ = adjacent;
  protoOf(CSSBuilderImpl).returnHoverSelector = returnHoverSelector;
  protoOf(CSSBuilderImpl).hover_4aczjb_k$ = hover;
  protoOf(CSSBuilderImpl).get_hover_islez7_k$ = get_hover;
  protoOf(CSSBuilderImpl).get_anyLink_cofd2b_k$ = get_anyLink;
  protoOf(CSSBuilderImpl).get_link_wopumb_k$ = get_link;
  protoOf(CSSBuilderImpl).get_visited_8zg8qp_k$ = get_visited;
  protoOf(CSSBuilderImpl).get_localLink_bf63s4_k$ = get_localLink;
  protoOf(CSSBuilderImpl).get_target_juba8q_k$ = get_target;
  protoOf(CSSBuilderImpl).get_targetWithin_2o3zvf_k$ = get_targetWithin;
  protoOf(CSSBuilderImpl).get_scope_iyfcq3_k$ = get_scope;
  protoOf(CSSBuilderImpl).get_active_avldsf_k$ = get_active;
  protoOf(CSSBuilderImpl).get_focus_irhg33_k$ = get_focus;
  protoOf(CSSBuilderImpl).get_focusVisible_5vnmwz_k$ = get_focusVisible;
  protoOf(CSSBuilderImpl).get_playing_6wau9n_k$ = get_playing;
  protoOf(CSSBuilderImpl).get_paused_hy6yif_k$ = get_paused;
  protoOf(CSSBuilderImpl).get_autofill_801dad_k$ = get_autofill;
  protoOf(CSSBuilderImpl).get_enabled_pcr8o8_k$ = get_enabled;
  protoOf(CSSBuilderImpl).get_disabled_rbmjej_k$ = get_disabled;
  protoOf(CSSBuilderImpl).get_readOnly_ovku97_k$ = get_readOnly;
  protoOf(CSSBuilderImpl).get_readWrite_a0tpds_k$ = get_readWrite;
  protoOf(CSSBuilderImpl).get_placeholderShown_1kc3x5_k$ = get_placeholderShown;
  protoOf(CSSBuilderImpl).get_default_qtagd4_k$ = get_default;
  protoOf(CSSBuilderImpl).get_checked_djib3y_k$ = get_checked;
  protoOf(CSSBuilderImpl).get_indeterminate_997h5e_k$ = get_indeterminate;
  protoOf(CSSBuilderImpl).get_blank_ip8b3f_k$ = get_blank;
  protoOf(CSSBuilderImpl).get_valid_j01e4z_k$ = get_valid;
  protoOf(CSSBuilderImpl).get_invalid_xocxse_k$ = get_invalid;
  protoOf(CSSBuilderImpl).get_inRange_x4kdv3_k$ = get_inRange;
  protoOf(CSSBuilderImpl).get_outOfRange_z0zuv5_k$ = get_outOfRange;
  protoOf(CSSBuilderImpl).get_required_wq3z3c_k$ = get_required;
  protoOf(CSSBuilderImpl).get_optional_x3zcnr_k$ = get_optional;
  protoOf(CSSBuilderImpl).get_userInvalid_tptv3x_k$ = get_userInvalid;
  protoOf(CSSBuilderImpl).get_root_wott0r_k$ = get_root;
  protoOf(CSSBuilderImpl).get_empty_iqwn50_k$ = get_empty;
  protoOf(CSSBuilderImpl).get_first_irdx8n_k$ = get_first;
  protoOf(CSSBuilderImpl).get_firstChild_n9lgdn_k$ = get_firstChild;
  protoOf(CSSBuilderImpl).get_lastChild_tniydf_k$ = get_lastChild;
  protoOf(CSSBuilderImpl).get_onlyChild_cxh5if_k$ = get_onlyChild;
  protoOf(CSSBuilderImpl).get_firstOfType_5b9t60_k$ = get_firstOfType;
  protoOf(CSSBuilderImpl).get_lastOfType_9s7uy8_k$ = get_lastOfType;
  protoOf(CSSBuilderImpl).get_onlyOfType_jptu62_k$ = get_onlyOfType;
  protoOf(CSSBuilderImpl).get_host_wonf8x_k$ = get_host;
  protoOf(CSSBuilderImpl).host_bjfdhh_k$ = host;
  protoOf(CSSBuilderImpl).get_defined_qtfew0_k$ = get_defined;
  protoOf(CSSBuilderImpl).get_left_woprgw_k$ = get_left;
  protoOf(CSSBuilderImpl).get_right_ixz7xv_k$ = get_right;
  protoOf(CSSBuilderImpl).lang_9i4u6k_k$ = lang_0;
  protoOf(CSSBuilderImpl).nthChild_gg5ihj_k$ = nthChild;
  protoOf(CSSBuilderImpl).nthLastChild_ep0a1r_k$ = nthLastChild;
  protoOf(CSSBuilderImpl).nthOfType_wqjefk_k$ = nthOfType;
  protoOf(CSSBuilderImpl).nthLastOfType_9azghm_k$ = nthLastOfType;
  protoOf(CSSBuilderImpl).not_4ti0eo_k$ = not;
  protoOf(CSSBuilderImpl).get_after_iol2gj_k$ = get_after;
  protoOf(CSSBuilderImpl).get_before_bdhrwo_k$ = get_before;
  protoOf(CSSBuilderImpl).get_cue_18j7sm_k$ = get_cue;
  protoOf(CSSBuilderImpl).get_cueRegion_qinivy_k$ = get_cueRegion;
  protoOf(CSSBuilderImpl).get_firstLetter_6qe5bn_k$ = get_firstLetter;
  protoOf(CSSBuilderImpl).get_firstLine_apktuj_k$ = get_firstLine;
  protoOf(CSSBuilderImpl).get_fileSelectorButton_ul3x92_k$ = get_fileSelectorButton;
  protoOf(CSSBuilderImpl).get_selection_jv4aal_k$ = get_selection;
  protoOf(CSSBuilderImpl).slotted_hey9bi_k$ = slotted;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.get_value_j01efc_k$();
  });
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.get_unit_wovp3h_k$();
  });
  protoOf(StyleSheet).style_pgxmpo_k$ = style_1;
  protoOf(StyleSheet).style_f6q54s_k$ = style;
  protoOf(StyleSheet).style_qsvaqb_k$ = style_0;
  protoOf(StyleSheet).invoke_3g5iuj_k$ = invoke_2;
  protoOf(StyleSheet).invoke_17x10s_k$ = invoke_3;
  protoOf(StyleSheet).selector_430xff_k$ = selector;
  protoOf(StyleSheet).combine_s8rvtq_k$ = combine;
  protoOf(StyleSheet).plus_33ujzs_k$ = plus;
  protoOf(StyleSheet).plus_figtb_k$ = plus_0;
  protoOf(StyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheet).get_universal_1qp21u_k$ = get_universal;
  protoOf(StyleSheet).type_g7nfuo_k$ = type;
  protoOf(StyleSheet).className_n9zzbd_k$ = className;
  protoOf(StyleSheet).id_e4l56n_k$ = id_0;
  protoOf(StyleSheet).attr_1eatx7_k$ = attr;
  protoOf(StyleSheet).attr$default_8acpq4_k$ = attr$default;
  protoOf(StyleSheet).attrEquals_vwtgpq_k$ = attrEquals;
  protoOf(StyleSheet).attrEquals$default_2vg9wo_k$ = attrEquals$default;
  protoOf(StyleSheet).attrListContains_rjrrsw_k$ = attrListContains;
  protoOf(StyleSheet).attrListContains$default_a6gpmi_k$ = attrListContains$default;
  protoOf(StyleSheet).attrHyphened_2fosj8_k$ = attrHyphened;
  protoOf(StyleSheet).attrHyphened$default_z202be_k$ = attrHyphened$default;
  protoOf(StyleSheet).attrPrefixed_7hjetw_k$ = attrPrefixed;
  protoOf(StyleSheet).attrPrefixed$default_jycsfa_k$ = attrPrefixed$default;
  protoOf(StyleSheet).attrSuffixed_6vqc43_k$ = attrSuffixed;
  protoOf(StyleSheet).attrSuffixed$default_6qo709_k$ = attrSuffixed$default;
  protoOf(StyleSheet).attrContains_fr4p8e_k$ = attrContains;
  protoOf(StyleSheet).attrContains$default_grlkqw_k$ = attrContains$default;
  protoOf(StyleSheet).group_fp9k4e_k$ = group;
  protoOf(StyleSheet).descendant_rdc8nx_k$ = descendant;
  protoOf(StyleSheet).desc_lky2kv_k$ = desc;
  protoOf(StyleSheet).desc_bh0wjc_k$ = desc_0;
  protoOf(StyleSheet).desc_8iwiiu_k$ = desc_1;
  protoOf(StyleSheet).desc_sumdm7_k$ = desc_2;
  protoOf(StyleSheet).child_falepo_k$ = child;
  protoOf(StyleSheet).sibling_ebo92a_k$ = sibling;
  protoOf(StyleSheet).adjacent_1pkom6_k$ = adjacent;
  protoOf(StyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheet).hover_4aczjb_k$ = hover;
  protoOf(StyleSheet).get_hover_islez7_k$ = get_hover;
  protoOf(StyleSheet).get_anyLink_cofd2b_k$ = get_anyLink;
  protoOf(StyleSheet).get_link_wopumb_k$ = get_link;
  protoOf(StyleSheet).get_visited_8zg8qp_k$ = get_visited;
  protoOf(StyleSheet).get_localLink_bf63s4_k$ = get_localLink;
  protoOf(StyleSheet).get_target_juba8q_k$ = get_target;
  protoOf(StyleSheet).get_targetWithin_2o3zvf_k$ = get_targetWithin;
  protoOf(StyleSheet).get_scope_iyfcq3_k$ = get_scope;
  protoOf(StyleSheet).get_active_avldsf_k$ = get_active;
  protoOf(StyleSheet).get_focus_irhg33_k$ = get_focus;
  protoOf(StyleSheet).get_focusVisible_5vnmwz_k$ = get_focusVisible;
  protoOf(StyleSheet).get_playing_6wau9n_k$ = get_playing;
  protoOf(StyleSheet).get_paused_hy6yif_k$ = get_paused;
  protoOf(StyleSheet).get_autofill_801dad_k$ = get_autofill;
  protoOf(StyleSheet).get_enabled_pcr8o8_k$ = get_enabled;
  protoOf(StyleSheet).get_disabled_rbmjej_k$ = get_disabled;
  protoOf(StyleSheet).get_readOnly_ovku97_k$ = get_readOnly;
  protoOf(StyleSheet).get_readWrite_a0tpds_k$ = get_readWrite;
  protoOf(StyleSheet).get_placeholderShown_1kc3x5_k$ = get_placeholderShown;
  protoOf(StyleSheet).get_default_qtagd4_k$ = get_default;
  protoOf(StyleSheet).get_checked_djib3y_k$ = get_checked;
  protoOf(StyleSheet).get_indeterminate_997h5e_k$ = get_indeterminate;
  protoOf(StyleSheet).get_blank_ip8b3f_k$ = get_blank;
  protoOf(StyleSheet).get_valid_j01e4z_k$ = get_valid;
  protoOf(StyleSheet).get_invalid_xocxse_k$ = get_invalid;
  protoOf(StyleSheet).get_inRange_x4kdv3_k$ = get_inRange;
  protoOf(StyleSheet).get_outOfRange_z0zuv5_k$ = get_outOfRange;
  protoOf(StyleSheet).get_required_wq3z3c_k$ = get_required;
  protoOf(StyleSheet).get_optional_x3zcnr_k$ = get_optional;
  protoOf(StyleSheet).get_userInvalid_tptv3x_k$ = get_userInvalid;
  protoOf(StyleSheet).get_root_wott0r_k$ = get_root;
  protoOf(StyleSheet).get_empty_iqwn50_k$ = get_empty;
  protoOf(StyleSheet).get_first_irdx8n_k$ = get_first;
  protoOf(StyleSheet).get_firstChild_n9lgdn_k$ = get_firstChild;
  protoOf(StyleSheet).get_lastChild_tniydf_k$ = get_lastChild;
  protoOf(StyleSheet).get_onlyChild_cxh5if_k$ = get_onlyChild;
  protoOf(StyleSheet).get_firstOfType_5b9t60_k$ = get_firstOfType;
  protoOf(StyleSheet).get_lastOfType_9s7uy8_k$ = get_lastOfType;
  protoOf(StyleSheet).get_onlyOfType_jptu62_k$ = get_onlyOfType;
  protoOf(StyleSheet).get_host_wonf8x_k$ = get_host;
  protoOf(StyleSheet).host_bjfdhh_k$ = host;
  protoOf(StyleSheet).get_defined_qtfew0_k$ = get_defined;
  protoOf(StyleSheet).get_left_woprgw_k$ = get_left;
  protoOf(StyleSheet).get_right_ixz7xv_k$ = get_right;
  protoOf(StyleSheet).lang_9i4u6k_k$ = lang_0;
  protoOf(StyleSheet).nthChild_gg5ihj_k$ = nthChild;
  protoOf(StyleSheet).nthLastChild_ep0a1r_k$ = nthLastChild;
  protoOf(StyleSheet).nthOfType_wqjefk_k$ = nthOfType;
  protoOf(StyleSheet).nthLastOfType_9azghm_k$ = nthLastOfType;
  protoOf(StyleSheet).not_4ti0eo_k$ = not;
  protoOf(StyleSheet).get_after_iol2gj_k$ = get_after;
  protoOf(StyleSheet).get_before_bdhrwo_k$ = get_before;
  protoOf(StyleSheet).get_cue_18j7sm_k$ = get_cue;
  protoOf(StyleSheet).get_cueRegion_qinivy_k$ = get_cueRegion;
  protoOf(StyleSheet).get_firstLetter_6qe5bn_k$ = get_firstLetter;
  protoOf(StyleSheet).get_firstLine_apktuj_k$ = get_firstLine;
  protoOf(StyleSheet).get_fileSelectorButton_ul3x92_k$ = get_fileSelectorButton;
  protoOf(StyleSheet).get_selection_jv4aal_k$ = get_selection;
  protoOf(StyleSheet).slotted_hey9bi_k$ = slotted;
  protoOf(CSSRulesHolderState).add_h1zelh_k$ = add;
  protoOf(StyleSheetBuilderImpl).style_pgxmpo_k$ = style_1;
  protoOf(StyleSheetBuilderImpl).style_f6q54s_k$ = style;
  protoOf(StyleSheetBuilderImpl).style_qsvaqb_k$ = style_0;
  protoOf(StyleSheetBuilderImpl).add_h1zelh_k$ = add;
  protoOf(StyleSheetBuilderImpl).invoke_3g5iuj_k$ = invoke_2;
  protoOf(StyleSheetBuilderImpl).invoke_17x10s_k$ = invoke_3;
  protoOf(StyleSheetBuilderImpl).selector_430xff_k$ = selector;
  protoOf(StyleSheetBuilderImpl).combine_s8rvtq_k$ = combine;
  protoOf(StyleSheetBuilderImpl).plus_33ujzs_k$ = plus;
  protoOf(StyleSheetBuilderImpl).plus_figtb_k$ = plus_0;
  protoOf(StyleSheetBuilderImpl).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheetBuilderImpl).get_universal_1qp21u_k$ = get_universal;
  protoOf(StyleSheetBuilderImpl).type_g7nfuo_k$ = type;
  protoOf(StyleSheetBuilderImpl).className_n9zzbd_k$ = className;
  protoOf(StyleSheetBuilderImpl).id_e4l56n_k$ = id_0;
  protoOf(StyleSheetBuilderImpl).attr_1eatx7_k$ = attr;
  protoOf(StyleSheetBuilderImpl).attr$default_8acpq4_k$ = attr$default;
  protoOf(StyleSheetBuilderImpl).attrEquals_vwtgpq_k$ = attrEquals;
  protoOf(StyleSheetBuilderImpl).attrEquals$default_2vg9wo_k$ = attrEquals$default;
  protoOf(StyleSheetBuilderImpl).attrListContains_rjrrsw_k$ = attrListContains;
  protoOf(StyleSheetBuilderImpl).attrListContains$default_a6gpmi_k$ = attrListContains$default;
  protoOf(StyleSheetBuilderImpl).attrHyphened_2fosj8_k$ = attrHyphened;
  protoOf(StyleSheetBuilderImpl).attrHyphened$default_z202be_k$ = attrHyphened$default;
  protoOf(StyleSheetBuilderImpl).attrPrefixed_7hjetw_k$ = attrPrefixed;
  protoOf(StyleSheetBuilderImpl).attrPrefixed$default_jycsfa_k$ = attrPrefixed$default;
  protoOf(StyleSheetBuilderImpl).attrSuffixed_6vqc43_k$ = attrSuffixed;
  protoOf(StyleSheetBuilderImpl).attrSuffixed$default_6qo709_k$ = attrSuffixed$default;
  protoOf(StyleSheetBuilderImpl).attrContains_fr4p8e_k$ = attrContains;
  protoOf(StyleSheetBuilderImpl).attrContains$default_grlkqw_k$ = attrContains$default;
  protoOf(StyleSheetBuilderImpl).group_fp9k4e_k$ = group;
  protoOf(StyleSheetBuilderImpl).descendant_rdc8nx_k$ = descendant;
  protoOf(StyleSheetBuilderImpl).desc_lky2kv_k$ = desc;
  protoOf(StyleSheetBuilderImpl).desc_bh0wjc_k$ = desc_0;
  protoOf(StyleSheetBuilderImpl).desc_8iwiiu_k$ = desc_1;
  protoOf(StyleSheetBuilderImpl).desc_sumdm7_k$ = desc_2;
  protoOf(StyleSheetBuilderImpl).child_falepo_k$ = child;
  protoOf(StyleSheetBuilderImpl).sibling_ebo92a_k$ = sibling;
  protoOf(StyleSheetBuilderImpl).adjacent_1pkom6_k$ = adjacent;
  protoOf(StyleSheetBuilderImpl).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheetBuilderImpl).hover_4aczjb_k$ = hover;
  protoOf(StyleSheetBuilderImpl).get_hover_islez7_k$ = get_hover;
  protoOf(StyleSheetBuilderImpl).get_anyLink_cofd2b_k$ = get_anyLink;
  protoOf(StyleSheetBuilderImpl).get_link_wopumb_k$ = get_link;
  protoOf(StyleSheetBuilderImpl).get_visited_8zg8qp_k$ = get_visited;
  protoOf(StyleSheetBuilderImpl).get_localLink_bf63s4_k$ = get_localLink;
  protoOf(StyleSheetBuilderImpl).get_target_juba8q_k$ = get_target;
  protoOf(StyleSheetBuilderImpl).get_targetWithin_2o3zvf_k$ = get_targetWithin;
  protoOf(StyleSheetBuilderImpl).get_scope_iyfcq3_k$ = get_scope;
  protoOf(StyleSheetBuilderImpl).get_active_avldsf_k$ = get_active;
  protoOf(StyleSheetBuilderImpl).get_focus_irhg33_k$ = get_focus;
  protoOf(StyleSheetBuilderImpl).get_focusVisible_5vnmwz_k$ = get_focusVisible;
  protoOf(StyleSheetBuilderImpl).get_playing_6wau9n_k$ = get_playing;
  protoOf(StyleSheetBuilderImpl).get_paused_hy6yif_k$ = get_paused;
  protoOf(StyleSheetBuilderImpl).get_autofill_801dad_k$ = get_autofill;
  protoOf(StyleSheetBuilderImpl).get_enabled_pcr8o8_k$ = get_enabled;
  protoOf(StyleSheetBuilderImpl).get_disabled_rbmjej_k$ = get_disabled;
  protoOf(StyleSheetBuilderImpl).get_readOnly_ovku97_k$ = get_readOnly;
  protoOf(StyleSheetBuilderImpl).get_readWrite_a0tpds_k$ = get_readWrite;
  protoOf(StyleSheetBuilderImpl).get_placeholderShown_1kc3x5_k$ = get_placeholderShown;
  protoOf(StyleSheetBuilderImpl).get_default_qtagd4_k$ = get_default;
  protoOf(StyleSheetBuilderImpl).get_checked_djib3y_k$ = get_checked;
  protoOf(StyleSheetBuilderImpl).get_indeterminate_997h5e_k$ = get_indeterminate;
  protoOf(StyleSheetBuilderImpl).get_blank_ip8b3f_k$ = get_blank;
  protoOf(StyleSheetBuilderImpl).get_valid_j01e4z_k$ = get_valid;
  protoOf(StyleSheetBuilderImpl).get_invalid_xocxse_k$ = get_invalid;
  protoOf(StyleSheetBuilderImpl).get_inRange_x4kdv3_k$ = get_inRange;
  protoOf(StyleSheetBuilderImpl).get_outOfRange_z0zuv5_k$ = get_outOfRange;
  protoOf(StyleSheetBuilderImpl).get_required_wq3z3c_k$ = get_required;
  protoOf(StyleSheetBuilderImpl).get_optional_x3zcnr_k$ = get_optional;
  protoOf(StyleSheetBuilderImpl).get_userInvalid_tptv3x_k$ = get_userInvalid;
  protoOf(StyleSheetBuilderImpl).get_root_wott0r_k$ = get_root;
  protoOf(StyleSheetBuilderImpl).get_empty_iqwn50_k$ = get_empty;
  protoOf(StyleSheetBuilderImpl).get_first_irdx8n_k$ = get_first;
  protoOf(StyleSheetBuilderImpl).get_firstChild_n9lgdn_k$ = get_firstChild;
  protoOf(StyleSheetBuilderImpl).get_lastChild_tniydf_k$ = get_lastChild;
  protoOf(StyleSheetBuilderImpl).get_onlyChild_cxh5if_k$ = get_onlyChild;
  protoOf(StyleSheetBuilderImpl).get_firstOfType_5b9t60_k$ = get_firstOfType;
  protoOf(StyleSheetBuilderImpl).get_lastOfType_9s7uy8_k$ = get_lastOfType;
  protoOf(StyleSheetBuilderImpl).get_onlyOfType_jptu62_k$ = get_onlyOfType;
  protoOf(StyleSheetBuilderImpl).get_host_wonf8x_k$ = get_host;
  protoOf(StyleSheetBuilderImpl).host_bjfdhh_k$ = host;
  protoOf(StyleSheetBuilderImpl).get_defined_qtfew0_k$ = get_defined;
  protoOf(StyleSheetBuilderImpl).get_left_woprgw_k$ = get_left;
  protoOf(StyleSheetBuilderImpl).get_right_ixz7xv_k$ = get_right;
  protoOf(StyleSheetBuilderImpl).lang_9i4u6k_k$ = lang_0;
  protoOf(StyleSheetBuilderImpl).nthChild_gg5ihj_k$ = nthChild;
  protoOf(StyleSheetBuilderImpl).nthLastChild_ep0a1r_k$ = nthLastChild;
  protoOf(StyleSheetBuilderImpl).nthOfType_wqjefk_k$ = nthOfType;
  protoOf(StyleSheetBuilderImpl).nthLastOfType_9azghm_k$ = nthLastOfType;
  protoOf(StyleSheetBuilderImpl).not_4ti0eo_k$ = not;
  protoOf(StyleSheetBuilderImpl).get_after_iol2gj_k$ = get_after;
  protoOf(StyleSheetBuilderImpl).get_before_bdhrwo_k$ = get_before;
  protoOf(StyleSheetBuilderImpl).get_cue_18j7sm_k$ = get_cue;
  protoOf(StyleSheetBuilderImpl).get_cueRegion_qinivy_k$ = get_cueRegion;
  protoOf(StyleSheetBuilderImpl).get_firstLetter_6qe5bn_k$ = get_firstLetter;
  protoOf(StyleSheetBuilderImpl).get_firstLine_apktuj_k$ = get_firstLine;
  protoOf(StyleSheetBuilderImpl).get_fileSelectorButton_ul3x92_k$ = get_fileSelectorButton;
  protoOf(StyleSheetBuilderImpl).get_selection_jv4aal_k$ = get_selection;
  protoOf(StyleSheetBuilderImpl).slotted_hey9bi_k$ = slotted;
  protoOf(selectorScope$1).selector_430xff_k$ = selector;
  protoOf(selectorScope$1).combine_s8rvtq_k$ = combine;
  protoOf(selectorScope$1).plus_33ujzs_k$ = plus;
  protoOf(selectorScope$1).plus_figtb_k$ = plus_0;
  protoOf(selectorScope$1).returnUniversalSelector = returnUniversalSelector;
  protoOf(selectorScope$1).get_universal_1qp21u_k$ = get_universal;
  protoOf(selectorScope$1).type_g7nfuo_k$ = type;
  protoOf(selectorScope$1).className_n9zzbd_k$ = className;
  protoOf(selectorScope$1).id_e4l56n_k$ = id_0;
  protoOf(selectorScope$1).attr_1eatx7_k$ = attr;
  protoOf(selectorScope$1).attr$default_8acpq4_k$ = attr$default;
  protoOf(selectorScope$1).attrEquals_vwtgpq_k$ = attrEquals;
  protoOf(selectorScope$1).attrEquals$default_2vg9wo_k$ = attrEquals$default;
  protoOf(selectorScope$1).attrListContains_rjrrsw_k$ = attrListContains;
  protoOf(selectorScope$1).attrListContains$default_a6gpmi_k$ = attrListContains$default;
  protoOf(selectorScope$1).attrHyphened_2fosj8_k$ = attrHyphened;
  protoOf(selectorScope$1).attrHyphened$default_z202be_k$ = attrHyphened$default;
  protoOf(selectorScope$1).attrPrefixed_7hjetw_k$ = attrPrefixed;
  protoOf(selectorScope$1).attrPrefixed$default_jycsfa_k$ = attrPrefixed$default;
  protoOf(selectorScope$1).attrSuffixed_6vqc43_k$ = attrSuffixed;
  protoOf(selectorScope$1).attrSuffixed$default_6qo709_k$ = attrSuffixed$default;
  protoOf(selectorScope$1).attrContains_fr4p8e_k$ = attrContains;
  protoOf(selectorScope$1).attrContains$default_grlkqw_k$ = attrContains$default;
  protoOf(selectorScope$1).group_fp9k4e_k$ = group;
  protoOf(selectorScope$1).descendant_rdc8nx_k$ = descendant;
  protoOf(selectorScope$1).desc_lky2kv_k$ = desc;
  protoOf(selectorScope$1).desc_bh0wjc_k$ = desc_0;
  protoOf(selectorScope$1).desc_8iwiiu_k$ = desc_1;
  protoOf(selectorScope$1).desc_sumdm7_k$ = desc_2;
  protoOf(selectorScope$1).child_falepo_k$ = child;
  protoOf(selectorScope$1).sibling_ebo92a_k$ = sibling;
  protoOf(selectorScope$1).adjacent_1pkom6_k$ = adjacent;
  protoOf(selectorScope$1).returnHoverSelector = returnHoverSelector;
  protoOf(selectorScope$1).hover_4aczjb_k$ = hover;
  protoOf(selectorScope$1).get_hover_islez7_k$ = get_hover;
  protoOf(selectorScope$1).get_anyLink_cofd2b_k$ = get_anyLink;
  protoOf(selectorScope$1).get_link_wopumb_k$ = get_link;
  protoOf(selectorScope$1).get_visited_8zg8qp_k$ = get_visited;
  protoOf(selectorScope$1).get_localLink_bf63s4_k$ = get_localLink;
  protoOf(selectorScope$1).get_target_juba8q_k$ = get_target;
  protoOf(selectorScope$1).get_targetWithin_2o3zvf_k$ = get_targetWithin;
  protoOf(selectorScope$1).get_scope_iyfcq3_k$ = get_scope;
  protoOf(selectorScope$1).get_active_avldsf_k$ = get_active;
  protoOf(selectorScope$1).get_focus_irhg33_k$ = get_focus;
  protoOf(selectorScope$1).get_focusVisible_5vnmwz_k$ = get_focusVisible;
  protoOf(selectorScope$1).get_playing_6wau9n_k$ = get_playing;
  protoOf(selectorScope$1).get_paused_hy6yif_k$ = get_paused;
  protoOf(selectorScope$1).get_autofill_801dad_k$ = get_autofill;
  protoOf(selectorScope$1).get_enabled_pcr8o8_k$ = get_enabled;
  protoOf(selectorScope$1).get_disabled_rbmjej_k$ = get_disabled;
  protoOf(selectorScope$1).get_readOnly_ovku97_k$ = get_readOnly;
  protoOf(selectorScope$1).get_readWrite_a0tpds_k$ = get_readWrite;
  protoOf(selectorScope$1).get_placeholderShown_1kc3x5_k$ = get_placeholderShown;
  protoOf(selectorScope$1).get_default_qtagd4_k$ = get_default;
  protoOf(selectorScope$1).get_checked_djib3y_k$ = get_checked;
  protoOf(selectorScope$1).get_indeterminate_997h5e_k$ = get_indeterminate;
  protoOf(selectorScope$1).get_blank_ip8b3f_k$ = get_blank;
  protoOf(selectorScope$1).get_valid_j01e4z_k$ = get_valid;
  protoOf(selectorScope$1).get_invalid_xocxse_k$ = get_invalid;
  protoOf(selectorScope$1).get_inRange_x4kdv3_k$ = get_inRange;
  protoOf(selectorScope$1).get_outOfRange_z0zuv5_k$ = get_outOfRange;
  protoOf(selectorScope$1).get_required_wq3z3c_k$ = get_required;
  protoOf(selectorScope$1).get_optional_x3zcnr_k$ = get_optional;
  protoOf(selectorScope$1).get_userInvalid_tptv3x_k$ = get_userInvalid;
  protoOf(selectorScope$1).get_root_wott0r_k$ = get_root;
  protoOf(selectorScope$1).get_empty_iqwn50_k$ = get_empty;
  protoOf(selectorScope$1).get_first_irdx8n_k$ = get_first;
  protoOf(selectorScope$1).get_firstChild_n9lgdn_k$ = get_firstChild;
  protoOf(selectorScope$1).get_lastChild_tniydf_k$ = get_lastChild;
  protoOf(selectorScope$1).get_onlyChild_cxh5if_k$ = get_onlyChild;
  protoOf(selectorScope$1).get_firstOfType_5b9t60_k$ = get_firstOfType;
  protoOf(selectorScope$1).get_lastOfType_9s7uy8_k$ = get_lastOfType;
  protoOf(selectorScope$1).get_onlyOfType_jptu62_k$ = get_onlyOfType;
  protoOf(selectorScope$1).get_host_wonf8x_k$ = get_host;
  protoOf(selectorScope$1).host_bjfdhh_k$ = host;
  protoOf(selectorScope$1).get_defined_qtfew0_k$ = get_defined;
  protoOf(selectorScope$1).get_left_woprgw_k$ = get_left;
  protoOf(selectorScope$1).get_right_ixz7xv_k$ = get_right;
  protoOf(selectorScope$1).lang_9i4u6k_k$ = lang_0;
  protoOf(selectorScope$1).nthChild_gg5ihj_k$ = nthChild;
  protoOf(selectorScope$1).nthLastChild_ep0a1r_k$ = nthLastChild;
  protoOf(selectorScope$1).nthOfType_wqjefk_k$ = nthOfType;
  protoOf(selectorScope$1).nthLastOfType_9azghm_k$ = nthLastOfType;
  protoOf(selectorScope$1).not_4ti0eo_k$ = not;
  protoOf(selectorScope$1).get_after_iol2gj_k$ = get_after;
  protoOf(selectorScope$1).get_before_bdhrwo_k$ = get_before;
  protoOf(selectorScope$1).get_cue_18j7sm_k$ = get_cue;
  protoOf(selectorScope$1).get_cueRegion_qinivy_k$ = get_cueRegion;
  protoOf(selectorScope$1).get_firstLetter_6qe5bn_k$ = get_firstLetter;
  protoOf(selectorScope$1).get_firstLine_apktuj_k$ = get_firstLine;
  protoOf(selectorScope$1).get_fileSelectorButton_ul3x92_k$ = get_fileSelectorButton;
  protoOf(selectorScope$1).get_selection_jv4aal_k$ = get_selection;
  protoOf(selectorScope$1).slotted_hey9bi_k$ = slotted;
  protoOf(ElementScopeBase).DisposableRefEffect_mkt89a_k$ = DisposableRefEffect;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = StyleSheet_init_$Init$;
  _.$_$.b = StyleSheet_init_$Create$;
  _.$_$.c = Text_getInstance;
  _.$_$.d = Companion_getInstance_6;
  _.$_$.e = Companion_getInstance_12;
  _.$_$.f = From_getInstance;
  _.$_$.g = To_getInstance;
  _.$_$.h = Color_getInstance_0;
  _.$_$.i = Companion_getInstance_9;
  _.$_$.j = Companion_getInstance_11;
  _.$_$.k = Companion_getInstance_7;
  _.$_$.l = Companion_getInstance_8;
  _.$_$.m = Companion_getInstance_4;
  _.$_$.n = classes;
  _.$_$.o = contentEditable;
  _.$_$.p = dir;
  _.$_$.q = draggable;
  _.$_$.r = hidden;
  _.$_$.s = id;
  _.$_$.t = inputMode_0;
  _.$_$.u = inputMode;
  _.$_$.v = lang;
  _.$_$.w = spellCheck;
  _.$_$.x = tabIndex;
  _.$_$.y = title;
  _.$_$.z = AttrsScope;
  _.$_$.a1 = addEventListener_0;
  _.$_$.b1 = addEventListener;
  _.$_$.c1 = onAnimationEnd;
  _.$_$.d1 = onAnimationIteration;
  _.$_$.e1 = onAnimationStart;
  _.$_$.f1 = onBlur;
  _.$_$.g1 = onClick;
  _.$_$.h1 = onContextMenu;
  _.$_$.i1 = onCopy;
  _.$_$.j1 = onCut;
  _.$_$.k1 = onDoubleClick;
  _.$_$.l1 = onDragEnd;
  _.$_$.m1 = onDragEnter;
  _.$_$.n1 = onDragLeave;
  _.$_$.o1 = onDragOver;
  _.$_$.p1 = onDragStart;
  _.$_$.q1 = onDrag;
  _.$_$.r1 = onDrop;
  _.$_$.s1 = onFocusIn;
  _.$_$.t1 = onFocusOut;
  _.$_$.u1 = onFocus;
  _.$_$.v1 = onKeyDown;
  _.$_$.w1 = onKeyUp;
  _.$_$.x1 = onMouseDown;
  _.$_$.y1 = onMouseEnter;
  _.$_$.z1 = onMouseLeave;
  _.$_$.a2 = onMouseMove;
  _.$_$.b2 = onMouseOut;
  _.$_$.c2 = onMouseOver;
  _.$_$.d2 = onMouseUp;
  _.$_$.e2 = onPaste;
  _.$_$.f2 = onScroll;
  _.$_$.g2 = onTouchCancel;
  _.$_$.h2 = onTouchEnd;
  _.$_$.i2 = onTouchMove;
  _.$_$.j2 = onTouchStart;
  _.$_$.k2 = onWheel;
  _.$_$.l2 = autoComplete;
  _.$_$.m2 = placeholder;
  _.$_$.n2 = readOnly;
  _.$_$.o2 = required;
  _.$_$.p2 = CSSBorder;
  _.$_$.q2 = CSSGroupingRuleDeclaration;
  _.$_$.r2 = Combine;
  _.$_$.s2 = Percentage;
  _.$_$.t2 = CSSKeyframeRuleDeclaration;
  _.$_$.u2 = CSSKeyframesRuleDeclaration;
  _.$_$.v2 = MediaFeature;
  _.$_$.w2 = Raw;
  _.$_$.x2 = CSSMediaRuleDeclaration;
  _.$_$.y2 = CSSVariable;
  _.$_$.z2 = Color_1;
  _.$_$.a3 = invoke_1;
  _.$_$.b3 = invoke_0;
  _.$_$.c3 = invoke;
  _.$_$.d3 = property;
  _.$_$.e3 = property_0;
  _.$_$.f3 = variable_0;
  _.$_$.g3 = variable;
  _.$_$.h3 = StyleScopeBuilder;
  _.$_$.i3 = StyleScope;
  _.$_$.j3 = StyleSheet;
  _.$_$.k3 = alignItems;
  _.$_$.l3 = alignSelf;
  _.$_$.m3 = backgroundColor;
  _.$_$.n3 = borderRadius;
  _.$_$.o3 = borderRadius_0;
  _.$_$.p3 = borderWidth_1;
  _.$_$.q3 = borderWidth_0;
  _.$_$.r3 = borderWidth;
  _.$_$.s3 = border;
  _.$_$.t3 = bottom;
  _.$_$.u3 = boxSizing;
  _.$_$.v3 = color;
  _.$_$.w3 = color_0;
  _.$_$.x3 = columnGap;
  _.$_$.y3 = get_cssRem;
  _.$_$.z3 = get_deg;
  _.$_$.a4 = display;
  _.$_$.b4 = get_em;
  _.$_$.c4 = filter;
  _.$_$.d4 = flexDirection;
  _.$_$.e4 = flexGrow;
  _.$_$.f4 = fontFamily;
  _.$_$.g4 = fontSize;
  _.$_$.h4 = get_fr;
  _.$_$.i4 = gap;
  _.$_$.j4 = gridArea;
  _.$_$.k4 = gridAutoColumns;
  _.$_$.l4 = gridAutoRows;
  _.$_$.m4 = gridTemplateColumns;
  _.$_$.n4 = gridTemplateRows;
  _.$_$.o4 = height;
  _.$_$.p4 = justifyContent;
  _.$_$.q4 = left;
  _.$_$.r4 = lineHeight;
  _.$_$.s4 = marginBottom;
  _.$_$.t4 = marginLeft;
  _.$_$.u4 = marginRight;
  _.$_$.v4 = marginTop;
  _.$_$.w4 = margin;
  _.$_$.x4 = maxHeight;
  _.$_$.y4 = maxWidth;
  _.$_$.z4 = media;
  _.$_$.a5 = minHeight;
  _.$_$.b5 = minWidth;
  _.$_$.c5 = get_ms;
  _.$_$.d5 = opacity_0;
  _.$_$.e5 = opacity;
  _.$_$.f5 = padding;
  _.$_$.g5 = get_percent;
  _.$_$.h5 = position;
  _.$_$.i5 = get_px;
  _.$_$.j5 = rgba;
  _.$_$.k5 = rgb;
  _.$_$.l5 = right;
  _.$_$.m5 = rowGap;
  _.$_$.n5 = style_3;
  _.$_$.o5 = times_0;
  _.$_$.p5 = times;
  _.$_$.q5 = top;
  _.$_$.r5 = transform;
  _.$_$.s5 = unaryMinus;
  _.$_$.t5 = get_vh;
  _.$_$.u5 = width_0;
  _.$_$.v5 = width;
  _.$_$.w5 = A_0;
  _.$_$.x5 = Button_1;
  _.$_$.y5 = Div_0;
  _.$_$.z5 = ElementBuilder;
  _.$_$.a6 = Img_0;
  _.$_$.b6 = Input_0;
  _.$_$.c6 = Label_0;
  _.$_$.d6 = P_0;
  _.$_$.e6 = Span_0;
  _.$_$.f6 = Style_1;
  _.$_$.g6 = TagElement;
  _.$_$.h6 = TextArea_0;
  _.$_$.i6 = Text_1;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
