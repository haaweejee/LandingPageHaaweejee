(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-html-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-html-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-icons-fa'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-icons-fa'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-icons-fa'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-icons-fa'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-icons-fa'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-icons-fa'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-icons-fa'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-icons-fa'.");
    }
    globalThis['kobweb-frontend-silk-icons-fa'] = factory(typeof globalThis['kobweb-frontend-silk-icons-fa'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-icons-fa'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-html-core']);
  }
}(function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d4;
  var Enum = kotlin_kotlin.$_$.y8;
  var protoOf = kotlin_kotlin.$_$.x6;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  var VOID = kotlin_kotlin.$_$.e;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(IconSize, 'IconSize', VOID, Enum);
  initMetadataForClass(IconCategory, 'IconCategory', VOID, Enum);
  //endregion
  function FaArrowUp(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1496180378);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f15(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('arrow-up', modifier_0._v, IconCategory_SOLID_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(FaArrowUp$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  var IconSize_XXS_instance;
  var IconSize_XS_instance;
  var IconSize_SM_instance;
  var IconSize_LG_instance;
  var IconSize_XL_instance;
  var IconSize_XXL_instance;
  var IconSize_X1_instance;
  var IconSize_X2_instance;
  var IconSize_X3_instance;
  var IconSize_X4_instance;
  var IconSize_X5_instance;
  var IconSize_X6_instance;
  var IconSize_X7_instance;
  var IconSize_X8_instance;
  var IconSize_X9_instance;
  var IconSize_X10_instance;
  var IconSize_entriesInitialized;
  function IconSize_initEntries() {
    if (IconSize_entriesInitialized)
      return Unit_instance;
    IconSize_entriesInitialized = true;
    IconSize_XXS_instance = new IconSize('XXS', 0, 'fa-2xs');
    IconSize_XS_instance = new IconSize('XS', 1, 'fa-xs');
    IconSize_SM_instance = new IconSize('SM', 2, 'fa-sm');
    IconSize_LG_instance = new IconSize('LG', 3, 'fa-lg');
    IconSize_XL_instance = new IconSize('XL', 4, 'fa-xl');
    IconSize_XXL_instance = new IconSize('XXL', 5, 'fa-2xl');
    IconSize_X1_instance = new IconSize('X1', 6, 'fa-1x');
    IconSize_X2_instance = new IconSize('X2', 7, 'fa-2x');
    IconSize_X3_instance = new IconSize('X3', 8, 'fa-3x');
    IconSize_X4_instance = new IconSize('X4', 9, 'fa-4x');
    IconSize_X5_instance = new IconSize('X5', 10, 'fa-5x');
    IconSize_X6_instance = new IconSize('X6', 11, 'fa-6x');
    IconSize_X7_instance = new IconSize('X7', 12, 'fa-7x');
    IconSize_X8_instance = new IconSize('X8', 13, 'fa-8x');
    IconSize_X9_instance = new IconSize('X9', 14, 'fa-9x');
    IconSize_X10_instance = new IconSize('X10', 15, 'fa-10x');
  }
  function IconSize(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.a3n_1 = className;
  }
  function FaBars(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(935718228);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f15(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('bars', modifier_0._v, IconCategory_SOLID_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(FaBars$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaXmark(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(723440359);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f15(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('xmark', modifier_0._v, IconCategory_SOLID_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(FaXmark$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaGithub(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(520287031);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f15(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('github', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(FaGithub$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaUpwork(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1253698432);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f15(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('upwork', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(FaUpwork$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaMedium(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1038991561);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f15(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('medium', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(FaMedium$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaLinkedin(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1870020334);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f15(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('linkedin', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(FaLinkedin$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaArrowLeft(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-463513902);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f15(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('arrow-left', modifier_0._v, IconCategory_SOLID_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(FaArrowLeft$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaArrowRight(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(1991407207);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.f15(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.o1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('arrow-right', modifier_0._v, IconCategory_SOLID_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.e18();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(FaArrowRight$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaIcon(name, modifier, style, size, $composer, $changed, $default) {
    var style_0 = {_v: style};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(706646195);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f15(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s1e(modifier) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.f15(style_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.f15(size_0._v) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.o1d()) {
      if (!(($default & 4) === 0)) {
        style_0._v = IconCategory_REGULAR_getInstance();
      }
      if (!(($default & 8) === 0)) {
        size_0._v = null;
      }
      $composer_0.v1d(-1370970547);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(($dirty & 896) === 256 | ($dirty & 14) === 4) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.f1f();
      var tmp;
      if (invalid || it === Companion_getInstance().n18_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.fa.FaIcon.<anonymous>' call
        var value = FaIcon$lambda(style_0, name, size_0);
        tmp0.q1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.x1d();
      var tmp_1 = toAttrs(modifier, tmp0_group);
      Span(tmp_1, null, $composer_0, 0, 2);
    } else {
      $composer_0.e18();
    }
    var tmp1_safe_receiver = $composer_0.y1f();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l1l(FaIcon$lambda_0(name, modifier, style_0, size_0, $changed, $default));
    }
  }
  var IconCategory_REGULAR_instance;
  var IconCategory_SOLID_instance;
  var IconCategory_BRAND_instance;
  var IconCategory_entriesInitialized;
  function IconCategory_initEntries() {
    if (IconCategory_entriesInitialized)
      return Unit_instance;
    IconCategory_entriesInitialized = true;
    IconCategory_REGULAR_instance = new IconCategory('REGULAR', 0, 'far');
    IconCategory_SOLID_instance = new IconCategory('SOLID', 1, 'fas');
    IconCategory_BRAND_instance = new IconCategory('BRAND', 2, 'fab');
  }
  function IconCategory(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.d3n_1 = className;
  }
  function FaArrowUp$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaArrowUp($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function FaBars$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaBars($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function FaXmark$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaXmark($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function FaGithub$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaGithub($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function FaUpwork$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaUpwork($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function FaMedium$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaMedium($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function FaLinkedin$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaLinkedin($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function FaArrowLeft$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaArrowLeft($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function FaArrowRight$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaArrowRight($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function FaIcon$lambda($style, $name, $size) {
    return function ($this$toAttrs) {
      $this$toAttrs.u2c([$style._v.d3n_1, 'fa-' + $name]);
      var tmp;
      if (!($size._v == null)) {
        $this$toAttrs.u2c([$size._v.a3n_1]);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function FaIcon$lambda_0($name, $modifier, $style, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaIcon($name, $modifier, $style._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function IconSize_LG_getInstance() {
    IconSize_initEntries();
    return IconSize_LG_instance;
  }
  function IconSize_XL_getInstance() {
    IconSize_initEntries();
    return IconSize_XL_instance;
  }
  function IconCategory_REGULAR_getInstance() {
    IconCategory_initEntries();
    return IconCategory_REGULAR_instance;
  }
  function IconCategory_SOLID_getInstance() {
    IconCategory_initEntries();
    return IconCategory_SOLID_instance;
  }
  function IconCategory_BRAND_getInstance() {
    IconCategory_initEntries();
    return IconCategory_BRAND_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FaArrowLeft;
  _.$_$.b = FaArrowRight;
  _.$_$.c = FaArrowUp;
  _.$_$.d = FaBars;
  _.$_$.e = FaGithub;
  _.$_$.f = FaLinkedin;
  _.$_$.g = FaMedium;
  _.$_$.h = FaUpwork;
  _.$_$.i = FaXmark;
  _.$_$.j = IconSize_LG_getInstance;
  _.$_$.k = IconSize_XL_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-icons-fa.js.map
