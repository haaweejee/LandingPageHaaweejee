(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    globalThis['html-internal-html-core-runtime'] = factory(typeof globalThis['html-internal-html-core-runtime'] === 'undefined' ? {} : globalThis['html-internal-html-core-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.x6;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var ensureNotNull = kotlin_kotlin.$_$.n9;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  var AbstractApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var VOID = kotlin_kotlin.$_$.e;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var Companion_instance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var CoroutineImpl = kotlin_kotlin.$_$.m5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var isInterface = kotlin_kotlin.$_$.p6;
  var initMetadataForLambda = kotlin_kotlin.$_$.k6;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var initMetadataForObject = kotlin_kotlin.$_$.l6;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var get_DefaultMonotonicFrameClock = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var Recomposer = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ControlledComposition = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x4;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DomNodeWrapper, 'DomNodeWrapper');
  initMetadataForClass(DomApplier, 'DomApplier', VOID, AbstractApplier);
  initMetadataForLambda(GlobalSnapshotManager$schedule$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(GlobalSnapshotManager, 'GlobalSnapshotManager');
  initMetadataForClass(JsMicrotasksDispatcher, 'JsMicrotasksDispatcher', JsMicrotasksDispatcher, CoroutineDispatcher);
  initMetadataForLambda(renderComposable$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(renderComposable$scope$1);
  //endregion
  function DomNodeWrapper(node) {
    this.a2b_1 = node;
    this.b2b_1 = 0;
  }
  protoOf(DomNodeWrapper).c2b = function () {
    return this.a2b_1;
  };
  protoOf(DomNodeWrapper).d2b = function (index, nodeWrapper) {
    var length = this.c2b().childNodes.length;
    if (index < length) {
      var tmp = this.c2b();
      var tmp_0 = nodeWrapper.c2b();
      // Inline function 'org.w3c.dom.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = this.c2b().childNodes[index];
      tmp.insertBefore(tmp_0, ensureNotNull(tmp$ret$1));
    } else {
      this.c2b().appendChild(nodeWrapper.c2b());
    }
  };
  protoOf(DomNodeWrapper).i11 = function (index, count) {
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.internal.runtime.DomNodeWrapper.remove.<anonymous>' call
        var tmp = this.c2b();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.c2b().childNodes[index];
        tmp.removeChild(ensureNotNull(tmp$ret$1));
      }
       while (inductionVariable < count);
  };
  protoOf(DomNodeWrapper).j11 = function (from, to, count) {
    if (from === to) {
      return Unit_instance;
    }
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromIndex = from > to ? from + i | 0 : from;
        var toIndex = from > to ? to + i | 0 : (to + count | 0) - 2 | 0;
        var tmp = this.c2b();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.c2b().childNodes[fromIndex];
        var child = tmp.removeChild(ensureNotNull(tmp$ret$1));
        var tmp_0 = this.c2b();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = this.c2b().childNodes[toIndex];
        tmp_0.insertBefore(child, ensureNotNull(tmp$ret$3));
      }
       while (inductionVariable < count);
  };
  function DomApplier(root) {
    AbstractApplier.call(this, root);
    this.h2b_1 = 0;
  }
  protoOf(DomApplier).i2b = function (index, instance) {
  };
  protoOf(DomApplier).g11 = function (index, instance) {
    return this.i2b(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).j2b = function (index, instance) {
    this.b11().d2b(index, instance);
  };
  protoOf(DomApplier).h11 = function (index, instance) {
    return this.j2b(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).i11 = function (index, count) {
    this.b11().i11(index, count);
  };
  protoOf(DomApplier).j11 = function (from, to, count) {
    this.b11().j11(from, to, count);
  };
  function synchronize($this) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.p2b_1.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'org.jetbrains.compose.web.internal.runtime.GlobalSnapshotManager.synchronize.<anonymous>' call
      element();
    }
    $this.p2b_1.y1();
    $this.q2b_1 = false;
  }
  function schedule($this, block) {
    $this.p2b_1.h(block);
    if (!$this.q2b_1) {
      $this.q2b_1 = true;
      launch($this.n2b_1, VOID, VOID, GlobalSnapshotManager$schedule$slambda_0(null));
    }
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda(it) {
    if (!GlobalSnapshotManager_getInstance().l2b_1) {
      GlobalSnapshotManager_getInstance().l2b_1 = true;
      var tmp = GlobalSnapshotManager_getInstance();
      schedule(tmp, GlobalSnapshotManager$globalWriteObserver$lambda$lambda);
    }
    return Unit_instance;
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda$lambda() {
    GlobalSnapshotManager_getInstance().l2b_1 = false;
    Companion_instance.n1o();
    return Unit_instance;
  }
  function GlobalSnapshotManager$schedule$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GlobalSnapshotManager$schedule$slambda).b1n = function ($this$launch, $completion) {
    var tmp = this.c1n($this$launch, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).q9 = function (p1, $completion) {
    return this.b1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        if (tmp === 0) {
          this.x8_1 = 1;
          synchronize(GlobalSnapshotManager_getInstance());
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
  protoOf(GlobalSnapshotManager$schedule$slambda).c1n = function ($this$launch, completion) {
    var i = new GlobalSnapshotManager$schedule$slambda(completion);
    i.a2c_1 = $this$launch;
    return i;
  };
  function GlobalSnapshotManager$schedule$slambda_0(resultContinuation) {
    var i = new GlobalSnapshotManager$schedule$slambda(resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GlobalSnapshotManager() {
    GlobalSnapshotManager_instance = this;
    this.k2b_1 = false;
    this.l2b_1 = false;
    this.m2b_1 = null;
    this.n2b_1 = CoroutineScope_0((new JsMicrotasksDispatcher()).jg(SupervisorJob()));
    var tmp = this;
    tmp.o2b_1 = GlobalSnapshotManager$globalWriteObserver$lambda;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.p2b_1 = ArrayList_init_$Create$();
    this.q2b_1 = false;
    this.r2b_1 = 8;
  }
  protoOf(GlobalSnapshotManager).b2c = function () {
    if (!this.k2b_1) {
      this.k2b_1 = true;
      this.m2b_1 = Companion_instance.l26(this.o2b_1);
    }
  };
  var GlobalSnapshotManager_instance;
  function GlobalSnapshotManager_getInstance() {
    if (GlobalSnapshotManager_instance == null)
      new GlobalSnapshotManager();
    return GlobalSnapshotManager_instance;
  }
  function JsMicrotasksDispatcher$dispatch$lambda($block) {
    return function (it) {
      $block.om();
      return Unit_instance;
    };
  }
  function JsMicrotasksDispatcher() {
    CoroutineDispatcher.call(this);
    this.d2c_1 = 0;
  }
  protoOf(JsMicrotasksDispatcher).xm = function (context, block) {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(JsMicrotasksDispatcher$dispatch$lambda(block));
  };
  function renderComposable(rootElementId, content) {
    return renderComposable_0(ensureNotNull(document.getElementById(rootElementId)), VOID, content);
  }
  function renderComposable_0(root, monotonicFrameClock, content) {
    monotonicFrameClock = monotonicFrameClock === VOID ? get_DefaultMonotonicFrameClock() : monotonicFrameClock;
    GlobalSnapshotManager_getInstance().b2c();
    var context = monotonicFrameClock.jg(new JsMicrotasksDispatcher());
    var recomposer = new Recomposer(context);
    var tmp = CoroutineScope_0(context);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp, VOID, tmp_0, renderComposable$slambda_0(recomposer, null));
    var composition = ControlledComposition(new DomApplier(new DomNodeWrapper(root)), recomposer);
    var scope = new renderComposable$scope$1(root);
    composition.s1j(ComposableLambda$invoke$ref(composableLambdaInstance(-1520853124, true, renderComposable$lambda(content, scope))));
    return composition;
  }
  function renderComposable$slambda($recomposer, resultContinuation) {
    this.m2c_1 = $recomposer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(renderComposable$slambda).b1n = function ($this$launch, $completion) {
    var tmp = this.c1n($this$launch, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(renderComposable$slambda).q9 = function (p1, $completion) {
    return this.b1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(renderComposable$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 2;
            this.w8_1 = 1;
            suspendResult = this.m2c_1.r1r(this);
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
  protoOf(renderComposable$slambda).c1n = function ($this$launch, completion) {
    var i = new renderComposable$slambda(this.m2c_1, completion);
    i.n2c_1 = $this$launch;
    return i;
  };
  function renderComposable$slambda_0($recomposer, resultContinuation) {
    var i = new renderComposable$slambda($recomposer, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function renderComposable$scope$1($root) {
    this.o2c_1 = $root;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function renderComposable$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-1520853124, $changed, -1, 'org.jetbrains.compose.web.renderComposable.<anonymous> (renderComposable.kt:60)');
        }
        $content($scope, $composer_0, 0);
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
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DomApplier;
  _.$_$.b = DomNodeWrapper;
  _.$_$.c = renderComposable;
  //endregion
  return _;
}));

//# sourceMappingURL=html-internal-html-core-runtime.js.map
