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
  var THROW_IAE = kotlin_kotlin.$_$.kf;
  var enumEntries = kotlin_kotlin.$_$.ia;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var Enum = kotlin_kotlin.$_$.ye;
  var protoOf = kotlin_kotlin.$_$.gc;
  var initMetadataForClass = kotlin_kotlin.$_$.db;
  var VOID = kotlin_kotlin.$_$.f;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e4;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var THROW_CCE = kotlin_kotlin.$_$.jf;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.e6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(IconSize, 'IconSize', VOID, Enum);
  initMetadataForClass(IconCategory, 'IconCategory', VOID, Enum);
  //endregion
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
  function values() {
    return [IconSize_XXS_getInstance(), IconSize_XS_getInstance(), IconSize_SM_getInstance(), IconSize_LG_getInstance(), IconSize_XL_getInstance(), IconSize_XXL_getInstance(), IconSize_X1_getInstance(), IconSize_X2_getInstance(), IconSize_X3_getInstance(), IconSize_X4_getInstance(), IconSize_X5_getInstance(), IconSize_X6_getInstance(), IconSize_X7_getInstance(), IconSize_X8_getInstance(), IconSize_X9_getInstance(), IconSize_X10_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'XXS':
        return IconSize_XXS_getInstance();
      case 'XS':
        return IconSize_XS_getInstance();
      case 'SM':
        return IconSize_SM_getInstance();
      case 'LG':
        return IconSize_LG_getInstance();
      case 'XL':
        return IconSize_XL_getInstance();
      case 'XXL':
        return IconSize_XXL_getInstance();
      case 'X1':
        return IconSize_X1_getInstance();
      case 'X2':
        return IconSize_X2_getInstance();
      case 'X3':
        return IconSize_X3_getInstance();
      case 'X4':
        return IconSize_X4_getInstance();
      case 'X5':
        return IconSize_X5_getInstance();
      case 'X6':
        return IconSize_X6_getInstance();
      case 'X7':
        return IconSize_X7_getInstance();
      case 'X8':
        return IconSize_X8_getInstance();
      case 'X9':
        return IconSize_X9_getInstance();
      case 'X10':
        return IconSize_X10_getInstance();
      default:
        IconSize_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var IconSize_entriesInitialized;
  function IconSize_initEntries() {
    if (IconSize_entriesInitialized)
      return Unit_getInstance();
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
  var $ENTRIES;
  function IconSize(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(IconSize).get_className_pmbm3o_k$ = function () {
    return this.className_1;
  };
  function FaArrowLeft(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-463513902);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('arrow-left', modifier_0._v, IconCategory_SOLID_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaArrowLeft$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaArrowRight(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1991407207);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('arrow-right', modifier_0._v, IconCategory_SOLID_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaArrowRight$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaUpwork(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1253698432);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('upwork', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaUpwork$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaXmark(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(723440359);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('xmark', modifier_0._v, IconCategory_SOLID_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaXmark$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaBars(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(935718228);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('bars', modifier_0._v, IconCategory_SOLID_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaBars$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaLinkedin(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1870020334);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('linkedin', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaLinkedin$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaMedium(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1038991561);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('medium', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaMedium$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaGithub(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(520287031);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('github', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaGithub$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaArrowUp(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1496180378);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('arrow-up', modifier_0._v, IconCategory_SOLID_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaArrowUp$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaIcon(name, modifier, style, size, $composer, $changed, $default) {
    var style_0 = {_v: style};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(706646195);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(style_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 4) === 0)) {
        style_0._v = IconCategory_REGULAR_getInstance();
      }
      if (!(($default & 8) === 0)) {
        size_0._v = null;
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-1370970547);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(($dirty & 896) === 256 | ($dirty & 14) === 4) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.fa.FaIcon.<anonymous>' call
        var value = FaIcon$lambda(style_0, name, size_0);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_1 = toAttrs(modifier, tmp0_group);
      Span(tmp_1, null, $composer_0, 0, 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(FaIcon$lambda_0(name, modifier, style_0, size_0, $changed, $default));
    }
  }
  var IconCategory_REGULAR_instance;
  var IconCategory_SOLID_instance;
  var IconCategory_BRAND_instance;
  function values_0() {
    return [IconCategory_REGULAR_getInstance(), IconCategory_SOLID_getInstance(), IconCategory_BRAND_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'REGULAR':
        return IconCategory_REGULAR_getInstance();
      case 'SOLID':
        return IconCategory_SOLID_getInstance();
      case 'BRAND':
        return IconCategory_BRAND_getInstance();
      default:
        IconCategory_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var IconCategory_entriesInitialized;
  function IconCategory_initEntries() {
    if (IconCategory_entriesInitialized)
      return Unit_getInstance();
    IconCategory_entriesInitialized = true;
    IconCategory_REGULAR_instance = new IconCategory('REGULAR', 0, 'far');
    IconCategory_SOLID_instance = new IconCategory('SOLID', 1, 'fas');
    IconCategory_BRAND_instance = new IconCategory('BRAND', 2, 'fab');
  }
  var $ENTRIES_0;
  function IconCategory(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(IconCategory).get_className_pmbm3o_k$ = function () {
    return this.className_1;
  };
  function FaArrowLeft$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaArrowLeft($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaArrowRight$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaArrowRight($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaUpwork$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaUpwork($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaXmark$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaXmark($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaBars$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaBars($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaLinkedin$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaLinkedin($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaMedium$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaMedium($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaGithub$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaGithub($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaArrowUp$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaArrowUp($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaIcon$lambda($style, $name, $size) {
    return function ($this$toAttrs) {
      $this$toAttrs.classes_ayghm2_k$([$style._v.className_1, 'fa-' + $name]);
      var tmp;
      if (!($size._v == null)) {
        $this$toAttrs.classes_ayghm2_k$([$size._v.className_1]);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function FaIcon$lambda_0($name, $modifier, $style, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaIcon($name, $modifier, $style._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function IconSize_XXS_getInstance() {
    IconSize_initEntries();
    return IconSize_XXS_instance;
  }
  function IconSize_XS_getInstance() {
    IconSize_initEntries();
    return IconSize_XS_instance;
  }
  function IconSize_SM_getInstance() {
    IconSize_initEntries();
    return IconSize_SM_instance;
  }
  function IconSize_LG_getInstance() {
    IconSize_initEntries();
    return IconSize_LG_instance;
  }
  function IconSize_XL_getInstance() {
    IconSize_initEntries();
    return IconSize_XL_instance;
  }
  function IconSize_XXL_getInstance() {
    IconSize_initEntries();
    return IconSize_XXL_instance;
  }
  function IconSize_X1_getInstance() {
    IconSize_initEntries();
    return IconSize_X1_instance;
  }
  function IconSize_X2_getInstance() {
    IconSize_initEntries();
    return IconSize_X2_instance;
  }
  function IconSize_X3_getInstance() {
    IconSize_initEntries();
    return IconSize_X3_instance;
  }
  function IconSize_X4_getInstance() {
    IconSize_initEntries();
    return IconSize_X4_instance;
  }
  function IconSize_X5_getInstance() {
    IconSize_initEntries();
    return IconSize_X5_instance;
  }
  function IconSize_X6_getInstance() {
    IconSize_initEntries();
    return IconSize_X6_instance;
  }
  function IconSize_X7_getInstance() {
    IconSize_initEntries();
    return IconSize_X7_instance;
  }
  function IconSize_X8_getInstance() {
    IconSize_initEntries();
    return IconSize_X8_instance;
  }
  function IconSize_X9_getInstance() {
    IconSize_initEntries();
    return IconSize_X9_instance;
  }
  function IconSize_X10_getInstance() {
    IconSize_initEntries();
    return IconSize_X10_instance;
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
