(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    globalThis['kotlinx-coroutines-core'] = factory(typeof globalThis['kotlinx-coroutines-core'] === 'undefined' ? {} : globalThis['kotlinx-coroutines-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var protoOf = kotlin_kotlin.$_$.x6;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var Element = kotlin_kotlin.$_$.k5;
  var Continuation = kotlin_kotlin.$_$.g5;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  var VOID = kotlin_kotlin.$_$.e;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.z1;
  var Key_instance = kotlin_kotlin.$_$.y1;
  var equals = kotlin_kotlin.$_$.z5;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.y4;
  var toString = kotlin_kotlin.$_$.z6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var intercepted = kotlin_kotlin.$_$.z4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x4;
  var initMetadataForInterface = kotlin_kotlin.$_$.j6;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var isInterface = kotlin_kotlin.$_$.p6;
  var toString_0 = kotlin_kotlin.$_$.v9;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.l6;
  var hashCode = kotlin_kotlin.$_$.f6;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.s;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.u1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.v1;
  var Companion_instance = kotlin_kotlin.$_$.b2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.t1;
  var createFailure = kotlin_kotlin.$_$.m9;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.c5;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.b5;
  var get = kotlin_kotlin.$_$.d5;
  var minusKey = kotlin_kotlin.$_$.e5;
  var ContinuationInterceptor = kotlin_kotlin.$_$.f5;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var addSuppressed = kotlin_kotlin.$_$.j9;
  var Enum = kotlin_kotlin.$_$.y8;
  var startCoroutine = kotlin_kotlin.$_$.n5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.p9;
  var Long = kotlin_kotlin.$_$.c9;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.h;
  var RuntimeException = kotlin_kotlin.$_$.e9;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.l1;
  var captureStack = kotlin_kotlin.$_$.t5;
  var Error_0 = kotlin_kotlin.$_$.z8;
  var Error_init_$Init$ = kotlin_kotlin.$_$.a1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.u9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var CancellationException = kotlin_kotlin.$_$.w4;
  var ArrayList = kotlin_kotlin.$_$.i2;
  var CoroutineImpl = kotlin_kotlin.$_$.m5;
  var SequenceScope = kotlin_kotlin.$_$.k7;
  var initMetadataForLambda = kotlin_kotlin.$_$.k6;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var sequence = kotlin_kotlin.$_$.q7;
  var plus = kotlin_kotlin.$_$.l5;
  var get_0 = kotlin_kotlin.$_$.i5;
  var fold = kotlin_kotlin.$_$.h5;
  var minusKey_0 = kotlin_kotlin.$_$.j5;
  var anyToString = kotlin_kotlin.$_$.r5;
  var UnsupportedOperationException = kotlin_kotlin.$_$.i9;
  var Exception = kotlin_kotlin.$_$.a9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var ensureNotNull = kotlin_kotlin.$_$.n9;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.a5;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.t;
  var getStringHashCode = kotlin_kotlin.$_$.e6;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.k1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var removeFirstOrNull = kotlin_kotlin.$_$.g4;
  var KtMutableList = kotlin_kotlin.$_$.o2;
  var coerceIn = kotlin_kotlin.$_$.d7;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Element], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Element, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [JobSupport, Element, Continuation, CoroutineScope], [0]);
  initMetadataForClass(StandaloneCoroutine, 'StandaloneCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', VOID, StandaloneCoroutine, VOID, [0]);
  initMetadataForClass(ScopeCoroutine, 'ScopeCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(DispatchedCoroutine, 'DispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.qk(cause) : $super.qk.call(this, cause);
  }
  initMetadataForInterface(CancellableContinuation, 'CancellableContinuation', VOID, VOID, [Continuation]);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [DispatchedTask, CancellableContinuation]);
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForInterface(CancelHandler, 'CancelHandler', VOID, VOID, [NotCompleted]);
  initMetadataForClass(UserSupplied, 'UserSupplied', VOID, VOID, [CancelHandler]);
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForClass(UserSupplied_0, 'UserSupplied');
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForClass(CompletedWithCancellation, 'CompletedWithCancellation');
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  initMetadataForInterface(Delay, 'Delay', VOID, VOID, VOID, [1]);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_1, 'Key');
  initMetadataForInterface(ChildHandle, 'ChildHandle');
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [ChildHandle]);
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(LinkedListNode, 'LinkedListNode', LinkedListNode);
  initMetadataForClass(LinkedListHead, 'LinkedListHead', LinkedListHead, LinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LinkedListHead, [LinkedListHead, Incomplete]);
  initMetadataForClass(JobNode, 'JobNode', VOID, LinkedListNode, [LinkedListNode, Incomplete]);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [SynchronizedObject, Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForLambda(JobSupport$_get_children_$slambda_k839f8, CoroutineImpl, VOID, [1]);
  initMetadataForClass(JobCancellingNode, 'JobCancellingNode', VOID, JobNode);
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobCancellingNode);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobCancellingNode);
  initMetadataForClass(JobImpl, 'JobImpl', VOID, JobSupport, [JobSupport, Element], [0]);
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(SupervisorJobImpl, 'SupervisorJobImpl', VOID, JobImpl, VOID, [0]);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForClass(AbstractSharedFlow, 'AbstractSharedFlow', VOID, SynchronizedObject);
  initMetadataForClass(StateFlowImpl, 'StateFlowImpl', VOID, AbstractSharedFlow, VOID, [1]);
  initMetadataForClass(OpDescriptor, 'OpDescriptor');
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [DispatchedTask, Continuation]);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(UndispatchedCoroutine, 'UndispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForObject(TaskContext, 'TaskContext');
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(ClearTimeout, 'ClearTimeout', VOID, VOID, [CancelHandler]);
  initMetadataForClass(WindowClearTimeout, 'WindowClearTimeout', VOID, ClearTimeout);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.ci(parentContext.j9(Key_instance_2));
    }
    this.fi_1 = parentContext.jg(this);
  }
  protoOf(AbstractCoroutine).c9 = function () {
    return this.fi_1;
  };
  protoOf(AbstractCoroutine).gi = function () {
    return this.fi_1;
  };
  protoOf(AbstractCoroutine).hi = function () {
    return protoOf(JobSupport).hi.call(this);
  };
  protoOf(AbstractCoroutine).ii = function (value) {
  };
  protoOf(AbstractCoroutine).ji = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).ki = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).li = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.ji(state.mi_1, state.oi());
    } else {
      this.ii((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).h9 = function (result) {
    var state = this.pi(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.qi(state);
  };
  protoOf(AbstractCoroutine).qi = function (state) {
    return this.ri(state);
  };
  protoOf(AbstractCoroutine).si = function (exception) {
    handleCoroutineException(this.fi_1, exception);
  };
  protoOf(AbstractCoroutine).ti = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.fi_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).ti.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).ti.call(this);
  };
  protoOf(AbstractCoroutine).ui = function (start, receiver, block) {
    start.xi(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.yj() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.ui(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var oldContext = $completion.c9();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.j9(Key_instance), oldContext.j9(Key_instance))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        coroutine_0.fi_1;
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.ek();
    }
    return tmp$ret$0;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).wj = function (exception) {
    handleCoroutineException(this.fi_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.lk_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).dj = function () {
    startCoroutineCancellable_0(this.lk_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.dk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.dk_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.dk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.dk_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.dk_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).ri = function (state) {
    this.qi(state);
  };
  protoOf(DispatchedCoroutine).qi = function (state) {
    if (tryResume(this))
      return Unit_instance;
    resumeCancellableWith(intercepted(this.pk_1), recoverResult(state, this.pk_1));
  };
  protoOf(DispatchedCoroutine).ek = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.aj());
    if (state instanceof CompletedExceptionally)
      throw state.mi_1;
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  function CancellableContinuation() {
  }
  function invokeOnCancellation(_this__u8e3s4, handler) {
    var tmp;
    if (_this__u8e3s4 instanceof CancellableContinuationImpl) {
      _this__u8e3s4.al(handler);
      tmp = Unit_instance;
    } else {
      throw UnsupportedOperationException_init_$Create$('third-party implementation of CancellableContinuation is not supported');
    }
    return tmp;
  }
  function _get_parentHandle__f8dcex($this) {
    return $this.zk_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.aj();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.il_1)) {
      var tmp_0 = $this.vk_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).hl();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.vk_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.jl(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.xk_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    if (!!(index === 536870911)) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      segment.kl(index, cause, $this.c9());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.c9(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.xk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.xk_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.xk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.xk_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.c9().j9(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, true, VOID, new ChildContinuation($this));
    $this.zk_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.yk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellationImpl.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.yk_1.atomicfu$compareAndSet(state, handler))
          return Unit_instance;
      } else {
        var tmp;
        if (!(state == null) ? isInterface(state, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.tl()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.mi_1;
              if (isInterface(handler, CancelHandler)) {
                $this.ql(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.ml_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              if (state.rl()) {
                $this.ql(handler, state.pl_1);
                return Unit_instance;
              }
              var update = state.sl(VOID, handler);
              if ($this.yk_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.yk_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) && idempotent == null) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = isInterface(state, CancelHandler);
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, isInterface(state, CancelHandler) ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.yk_1;
    while (true) {
      var tmp1 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        if (!(tmp1 == null) ? isInterface(tmp1, NotCompleted) : false) {
          var update = resumedState($this, tmp1, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.yk_1.atomicfu$compareAndSet(tmp1, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_instance;
        } else {
          if (tmp1 instanceof CancelledContinuation) {
            if (tmp1.yl()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>.<anonymous>' call
                $this.ul(onCancellation, tmp1.mi_1);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.zl();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.vk_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.wk_1 = this.vk_1.c9();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$0 = (0 << 29) + 536870911 | 0;
    tmp.xk_1 = atomic$int$1(tmp$ret$0);
    this.yk_1 = atomic$ref$1(Active_instance);
    this.zk_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).am = function () {
    return this.vk_1;
  };
  protoOf(CancellableContinuationImpl).c9 = function () {
    return this.wk_1;
  };
  protoOf(CancellableContinuationImpl).aj = function () {
    return this.yk_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).bj = function () {
    var tmp = this.aj();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).bm = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.bj()) {
      handle.cm();
      this.zk_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).dm = function () {
    return this.aj();
  };
  protoOf(CancellableContinuationImpl).em = function (takenState, cause) {
    var this_0 = this.yk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            if (!!state.rl()) {
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.sl(VOID, VOID, VOID, VOID, cause);
            if (this.yk_1.atomicfu$compareAndSet(state, update)) {
              state.fm(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.yk_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).qk = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.yk_1;
    while (true) {
      var tmp1 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        if (!(!(tmp1 == null) ? isInterface(tmp1, NotCompleted) : false))
          return false;
        var tmp;
        if (!(tmp1 == null) ? isInterface(tmp1, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = tmp1 instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.yk_1.atomicfu$compareAndSet(tmp1, update)) {
          break $l$block;
        }
        if (isInterface(tmp1, CancelHandler)) {
          this.ql(tmp1, cause);
        } else {
          if (tmp1 instanceof Segment) {
            callSegmentOnCancellation(this, tmp1, cause);
          }
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.il_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).gm = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.qk(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).ql = function (handler, cause) {
    var tmp;
    try {
      handler.hm(cause);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.c9(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
        tmp_0 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).ul = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.c9(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).im = function (parent) {
    return parent.ej();
  };
  protoOf(CancellableContinuationImpl).ek = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.jm();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.jm();
    }
    var state = this.aj();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.mi_1, this);
    if (get_isCancellableMode(this.il_1)) {
      var job = this.c9().j9(Key_instance_2);
      if (!(job == null) && !job.hi()) {
        var cause = job.ej();
        this.em(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.km(state);
  };
  protoOf(CancellableContinuationImpl).jm = function () {
    var tmp = this.vk_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lm(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.zl();
    this.qk(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).h9 = function (result) {
    return resumeImpl$default(this, toState(result, this), this.il_1);
  };
  protoOf(CancellableContinuationImpl).sk = function (handler) {
    return invokeOnCancellation(this, new UserSupplied(handler));
  };
  protoOf(CancellableContinuationImpl).al = function (handler) {
    return invokeOnCancellationImpl(this, handler);
  };
  protoOf(CancellableContinuationImpl).zl = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.cm();
    this.zk_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).tk = function (_this__u8e3s4, value) {
    var tmp = this.vk_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.cl_1) === _this__u8e3s4) {
      tmp_0 = 4;
    } else {
      tmp_0 = this.il_1;
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).km = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.ll_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).mm = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).mm.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.vk_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.nm() + '(' + toDebugString(this.vk_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).nm = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
  function UserSupplied(handler) {
    this.qm_1 = handler;
  }
  protoOf(UserSupplied).hm = function (cause) {
    this.qm_1(cause);
  };
  protoOf(UserSupplied).toString = function () {
    return 'CancelHandler.UserSupplied[' + get_classSimpleName(this.qm_1) + '@' + get_hexAddress(this) + ']';
  };
  function CancelHandler() {
  }
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.ll_1 = result;
    this.ml_1 = cancelHandler;
    this.nl_1 = onCancellation;
    this.ol_1 = idempotentResume;
    this.pl_1 = cancelCause;
  }
  protoOf(CompletedContinuation).rl = function () {
    return !(this.pl_1 == null);
  };
  protoOf(CompletedContinuation).fm = function (cont, cause) {
    var tmp0_safe_receiver = this.ml_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.CompletedContinuation.invokeHandlers.<anonymous>' call
      cont.ql(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.nl_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.CompletedContinuation.invokeHandlers.<anonymous>' call
      cont.ul(tmp1_safe_receiver, cause);
    }
  };
  protoOf(CompletedContinuation).rm = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).sl = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.ll_1 : result;
    cancelHandler = cancelHandler === VOID ? this.ml_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.nl_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.ol_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.pl_1 : cancelCause;
    return $super === VOID ? this.rm(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.rm.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.ll_1) + ', cancelHandler=' + toString_0(this.ml_1) + ', onCancellation=' + toString_0(this.nl_1) + ', idempotentResume=' + toString_0(this.ol_1) + ', cancelCause=' + toString_0(this.pl_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.ll_1 == null ? 0 : hashCode(this.ll_1);
    result = imul(result, 31) + (this.ml_1 == null ? 0 : hashCode(this.ml_1)) | 0;
    result = imul(result, 31) + (this.nl_1 == null ? 0 : hashCode(this.nl_1)) | 0;
    result = imul(result, 31) + (this.ol_1 == null ? 0 : hashCode(this.ol_1)) | 0;
    result = imul(result, 31) + (this.pl_1 == null ? 0 : hashCode(this.pl_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.ll_1, tmp0_other_with_cast.ll_1))
      return false;
    if (!equals(this.ml_1, tmp0_other_with_cast.ml_1))
      return false;
    if (!equals(this.nl_1, tmp0_other_with_cast.nl_1))
      return false;
    if (!equals(this.ol_1, tmp0_other_with_cast.ol_1))
      return false;
    if (!equals(this.pl_1, tmp0_other_with_cast.pl_1))
      return false;
    return true;
  };
  function UserSupplied_0(handler) {
    this.sm_1 = handler;
  }
  protoOf(UserSupplied_0).hm = function (cause) {
    this.sm_1(cause);
  };
  protoOf(UserSupplied_0).toString = function () {
    return 'InternalCompletionHandler.UserSupplied[' + get_classSimpleName(this.sm_1) + '@' + get_hexAddress(this) + ']';
  };
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.mi_1 = cause;
    this.ni_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).oi = function () {
    return this.ni_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).tl = function () {
    return this.ni_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.mi_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.xl_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).yl = function () {
    return this.xl_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.fold' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    // Inline function 'kotlin.fold' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      tmp = !(onCancellation == null) ? new CompletedWithCancellation(it, onCancellation) : it;
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.tm_1 = result;
    this.um_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString_0(this.tm_1) + ', onCancellation=' + toString(this.um_1) + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.tm_1 == null ? 0 : hashCode(this.tm_1);
    result = imul(result, 31) + hashCode(this.um_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.tm_1, tmp0_other_with_cast.tm_1))
      return false;
    if (!equals(this.um_1, tmp0_other_with_cast.um_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.mi_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = (state == null ? true : !(state == null)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(value);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).wm = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).k9 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).l9 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.ym();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.j9(Key_instance_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp0_safe_receiver.zm(context, exception);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(exception, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, exception);
  }
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.j9(Key_instance_2) == null) ? context : context.jg(Job()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var coroutine = new ScopeCoroutine($completion.c9(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.gi().j9(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Scope cannot be cancelled because it does not have a job: ' + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.mj(cause);
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).xi = function (block, receiver, completion) {
    var tmp;
    switch (this.m2_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).yj = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.j9(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delay(timeMillis, $completion) {
    if (timeMillis.x(new Long(0, 0)) <= 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.bm();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    if (timeMillis.x(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.c9()).an(timeMillis, cancellable);
    }
    return cancellable.ek();
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.cn_1 = new Long(0, 0);
    this.dn_1 = false;
    this.en_1 = null;
  }
  protoOf(EventLoop).fn = function () {
    var tmp0_elvis_lhs = this.en_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.be();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.om();
    return true;
  };
  protoOf(EventLoop).gn = function (task) {
    var tmp0_elvis_lhs = this.en_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.en_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.zd(task);
  };
  protoOf(EventLoop).hn = function () {
    return this.cn_1.x(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).in = function () {
    var tmp0_safe_receiver = this.en_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).jn = function (unconfined) {
    this.cn_1 = this.cn_1.s2(delta(this, unconfined));
    if (!unconfined)
      this.dn_1 = true;
  };
  protoOf(EventLoop).kn = function (unconfined) {
    this.cn_1 = this.cn_1.t2(delta(this, unconfined));
    if (this.cn_1.x(new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.dn_1) {
      this.ln();
    }
  };
  protoOf(EventLoop).ln = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.mn_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).nn = function () {
    var tmp0_elvis_lhs = this.mn_1.pn();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().mn_1.qn(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).cm = function () {
  };
  protoOf(NonDisposableHandle).pj = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.j9(Key_instance_2);
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, onCancelling, invokeImmediately, handler) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    var tmp;
    if (_this__u8e3s4 instanceof JobSupport) {
      tmp = _this__u8e3s4.jj(onCancelling, invokeImmediately, handler);
    } else {
      tmp = _this__u8e3s4.ij(onCancelling, invokeImmediately, InternalCompletionHandler$invoke$ref(handler));
    }
    return tmp;
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.hi())
      throw _this__u8e3s4.ej();
  }
  function Job(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.j9(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Current context doesn't contain Job in it: " + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.mj(CancellationException_init_$Create$_0(message, cause));
  }
  function InternalCompletionHandler$invoke$ref($boundThis) {
    var l = function (p0) {
      $boundThis.hm(p0);
      return Unit_instance;
    };
    l.callableName = 'invoke';
    return l;
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.rn_1 = isActive;
  }
  protoOf(Empty).hi = function () {
    return this.rn_1;
  };
  protoOf(Empty).sn = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.rn_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).hi = function () {
    return true;
  };
  protoOf(NodeList).sn = function () {
    return this;
  };
  protoOf(NodeList).wn = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    this_0.d8('List{');
    this_0.d8(state);
    this_0.d8('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.xn_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var node = cur;
        if (first)
          first = false;
        else {
          this_0.d8(', ');
        }
        this_0.c8(node);
      }
      cur = cur.xn_1;
    }
    this_0.d8(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.wn('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    LinkedListNode.call(this);
  }
  protoOf(JobNode).ko = function () {
    var tmp = this.jo_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).hi = function () {
    return true;
  };
  protoOf(JobNode).sn = function () {
    return null;
  };
  protoOf(JobNode).cm = function () {
    return this.ko().kj(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.ko()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.po_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.po_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.mi_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.qo();
    var exceptions = state.ro(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.wj(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).tl();
      }
    }
    if (!wasCancelling) {
      $this.tj(finalException);
    }
    $this.li(finalState);
    var casSuccess = $this.ai_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.q()) {
      if (state.qo()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.ki() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = exceptions.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.p(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = exceptions.j();
        while (_iterator__ex2g4s_0.k()) {
          var element_0 = _iterator__ex2g4s_0.l();
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.m() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.m());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.j();
    while (tmp0_iterator.k()) {
      var exception = tmp0_iterator.l();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.h(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.ai_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.tj(null);
    $this.li(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.zi();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.completeStateFinalization.<anonymous>' call
      tmp0_safe_receiver.cm();
      $this.yi(NonDisposableHandle_instance);
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.mi_1;
    if (state instanceof JobNode) {
      try {
        state.hm(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.si(new CompletionHandlerException('Exception in completion handler ' + toString(state) + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.sn();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.tj(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.xn_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var node = cur;
        try {
          node.hm(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.xn_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      $this.si(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.uj())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.zi();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.pj(cause) || isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.xn_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var node = cur;
        try {
          node.hm(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.xn_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      $this.si(tmp0_safe_receiver_0);
    }
    return Unit_instance;
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.rn_1)
        return 0;
      if (!$this.ai_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.dj();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.ai_1.atomicfu$compareAndSet(state, state.so_1))
          return -1;
        $this.dj();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_0 = tmp1_safe_receiver;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.jo_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      if (!($this.aj() === expect)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.eo(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.rn_1 ? list : new InactiveNodeList(list);
    $this.ai_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.lo(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var list = state.xn_1;
    $this.ai_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var state = $this.aj();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.to();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.ki() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).rj();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = $this.aj();
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        if (tmp1 instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp1.uo())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp1.qo();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp1.vo(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = tmp1.wo();
          var tmp_0;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
            notifyCancelling($this, tmp1.mo_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp1 == null) ? isInterface(tmp1, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp1.hi()) {
              if (tryMakeCancelling($this, tmp1, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp1, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString_0(tmp1);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.sn();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.ai_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.to())
      return get_COMPLETING_ALREADY();
    finishing.xo(true);
    if (!(finishing === state)) {
      if (!$this.ai_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.qo();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
      finishing.vo(tmp0_safe_receiver.mi_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.wo();
    var tmp_0;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>' call
      notifyCancelling($this, list, tmp2_safe_receiver);
    }
    var child = firstChild($this, state);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.mi_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.sn();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.cp_1, VOID, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = nextChild_0;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_instance;
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.ri(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (!cur.zn_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      cur = cur.yn_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      cur = cur.xn_1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (cur.zn_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.qo() ? 'Cancelling' : state.to() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.hi() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.mo_1 = list;
    this.no_1 = atomic$boolean$1(isCompleting);
    this.oo_1 = atomic$ref$1(rootCause);
    this.po_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).sn = function () {
    return this.mo_1;
  };
  protoOf(Finishing).xo = function (value) {
    this.no_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).to = function () {
    return this.no_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).dp = function (value) {
    this.oo_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).wo = function () {
    return this.oo_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).uo = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).qo = function () {
    return !(this.wo() == null);
  };
  protoOf(Finishing).hi = function () {
    return this.wo() == null;
  };
  protoOf(Finishing).ro = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        this_0.h(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.wo();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
      list.a2(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.h(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).vo = function (exception) {
    var rootCause = this.wo();
    if (rootCause == null) {
      this.dp(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        this_0.h(eh);
        this_0.h(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).h(exception);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.qo() + ', completing=' + this.to() + ', rootCause=' + toString_0(this.wo()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.mo_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.ip_1 = parent;
    this.jp_1 = state;
    this.kp_1 = child;
    this.lp_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).hm = function (cause) {
    continueCompleting(this.ip_1, this.jp_1, this.kp_1, this.lp_1);
  };
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.up_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).iq = function ($this$sequence, $completion) {
    var tmp = this.jq($this$sequence, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).q9 = function (p1, $completion) {
    return this.iq(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 8;
            this.wp_1 = this.up_1.aj();
            var tmp_0 = this.wp_1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.w8_1 = 6;
              suspendResult = this.vp_1.se(this.wp_1.cp_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.wp_1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.xp_1 = this.wp_1.sn();
                if (this.xp_1 == null) {
                  this.yp_1 = null;
                  this.w8_1 = 5;
                  continue $sm;
                } else {
                  var tmp_2 = this;
                  tmp_2.zp_1 = this.xp_1;
                  this.aq_1 = this.zp_1;
                  var tmp_3 = this;
                  tmp_3.bq_1 = this.aq_1;
                  this.cq_1 = this.bq_1;
                  var tmp_4 = this;
                  tmp_4.dq_1 = this.cq_1;
                  this.eq_1 = this.dq_1;
                  this.fq_1 = this.eq_1.xn_1;
                  this.w8_1 = 1;
                  continue $sm;
                }
              } else {
                this.w8_1 = 7;
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.fq_1, this.eq_1)) {
              this.w8_1 = 4;
              continue $sm;
            }

            var tmp_5 = this.fq_1;
            if (tmp_5 instanceof ChildHandleNode) {
              var tmp_6 = this;
              tmp_6.gq_1 = this.fq_1;
              this.hq_1 = this.gq_1;
              this.w8_1 = 2;
              suspendResult = this.vp_1.se(this.hq_1.cp_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.w8_1 = 3;
              continue $sm;
            }

          case 2:
            this.w8_1 = 3;
            continue $sm;
          case 3:
            this.fq_1 = this.fq_1.xn_1;
            this.w8_1 = 1;
            continue $sm;
          case 4:
            var tmp_7 = this;
            tmp_7.yp_1 = Unit_instance;
            this.w8_1 = 5;
            continue $sm;
          case 5:
            this.w8_1 = 7;
            continue $sm;
          case 6:
            this.w8_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x8_1 === 8) {
          throw e;
        } else {
          this.w8_1 = this.x8_1;
          this.z8_1 = e;
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).jq = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.up_1, completion);
    i.vp_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.iq($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.ai_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.bi_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).d2 = function () {
    return Key_instance_2;
  };
  protoOf(JobSupport).yi = function (value) {
    this.bi_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).zi = function () {
    return this.bi_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).ci = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.yi(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.cj();
    var handle = parent.sj(this);
    this.yi(handle);
    if (this.bj()) {
      handle.cm();
      this.yi(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).aj = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.ai_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state instanceof OpDescriptor))
        return state;
      state.kq(this);
    }
  };
  protoOf(JobSupport).hi = function () {
    var state = this.aj();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.hi();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).bj = function () {
    var tmp = this.aj();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).cj = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var state = this.aj();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).dj = function () {
  };
  protoOf(JobSupport).ej = function () {
    var state = this.aj();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.wo();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.fj(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.gj(state.mi_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).fj = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.ki() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).gj = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.fj(_this__u8e3s4, message) : $super.fj.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).hj = function (handler) {
    return this.jj(false, true, new UserSupplied_0(handler));
  };
  protoOf(JobSupport).ij = function (onCancelling, invokeImmediately, handler) {
    return this.jj(onCancelling, invokeImmediately, new UserSupplied_0(handler));
  };
  protoOf(JobSupport).jj = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = this.aj();
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletionInternal.<anonymous>' call
        if (tmp1 instanceof Empty) {
          if (tmp1.rn_1) {
            if (this.ai_1.atomicfu$compareAndSet(tmp1, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp1);
          }
        } else {
          if (!(tmp1 == null) ? isInterface(tmp1, Incomplete) : false) {
            var list = tmp1.sn();
            if (list == null) {
              promoteSingleToNodeList(this, tmp1 instanceof JobNode ? tmp1 : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_instance;
              var tmp;
              if (onCancelling) {
                tmp = tmp1 instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
                rootCause = tmp1.wo();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = true;
                } else {
                  var tmp_1;
                  if (handler instanceof ChildHandleNode) {
                    tmp_1 = !tmp1.to();
                  } else {
                    tmp_1 = false;
                  }
                  tmp_0 = tmp_1;
                }
                if (tmp_0) {
                  if (!addLastAtomic(this, tmp1, list, node)) {
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                }
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  handler.hm(rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp1, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp1 instanceof CompletedExceptionally ? tmp1 : null;
              handler.hm(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.mi_1);
            }
            return NonDisposableHandle_instance;
          }
        }
      }
    }
  };
  protoOf(JobSupport).kj = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var state = this.aj();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.ai_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.sn() == null)) {
            node.do();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).lj = function () {
    return false;
  };
  protoOf(JobSupport).mj = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.ki() : null, null, this);
    } else {
      tmp = cause;
    }
    this.nj(tmp);
  };
  protoOf(JobSupport).ki = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).nj = function (cause) {
    this.qj(cause);
  };
  protoOf(JobSupport).oj = function (parentJob) {
    this.qj(parentJob);
  };
  protoOf(JobSupport).pj = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.qj(cause) && this.vj();
  };
  protoOf(JobSupport).qj = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.lj()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.ri(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).rj = function () {
    var state = this.aj();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.wo();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.mi_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).lq = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = this.aj();
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var finalState = tryMakeCompleting(this, tmp1, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.ri(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).pi = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = this.aj();
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var finalState = tryMakeCompleting(this, tmp1, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).mq = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).sj = function (child) {
    var tmp = invokeOnCompletion(this, true, VOID, new ChildHandleNode(child));
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).si = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).tj = function (cause) {
  };
  protoOf(JobSupport).uj = function () {
    return false;
  };
  protoOf(JobSupport).vj = function () {
    return true;
  };
  protoOf(JobSupport).wj = function (exception) {
    return false;
  };
  protoOf(JobSupport).li = function (state) {
  };
  protoOf(JobSupport).ri = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.xj() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).xj = function () {
    return this.ti() + '{' + stateString(this, this.aj()) + '}';
  };
  protoOf(JobSupport).ti = function () {
    return get_classSimpleName(this);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function InactiveNodeList(list) {
    this.so_1 = list;
  }
  protoOf(InactiveNodeList).sn = function () {
    return this.so_1;
  };
  protoOf(InactiveNodeList).hi = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.so_1.wn('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.cp_1 = childJob;
  }
  protoOf(ChildHandleNode).hm = function (cause) {
    return this.cp_1.oj(this.ko());
  };
  protoOf(ChildHandleNode).pj = function (cause) {
    return this.ko().pj(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.rq_1 = handler;
    this.sq_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).hm = function (cause) {
    if (this.sq_1.atomicfu$compareAndSet(0, 1)) {
      this.rq_1.hm(cause);
    }
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.xq_1 = handler;
  }
  protoOf(InvokeOnCompletion).hm = function (cause) {
    return this.xq_1.hm(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yq_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function IncompleteStateBox(state) {
    this.yq_1 = state;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.dr_1 = child;
  }
  protoOf(ChildContinuation).hm = function (cause) {
    this.dr_1.gm(this.dr_1.im(this.ko()));
  };
  function handlesExceptionF($this) {
    var tmp = $this.zi();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ko();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.vj())
        return true;
      var tmp_1 = parentJob.zi();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.ko();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.ci(parent);
    this.gr_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).lj = function () {
    return true;
  };
  protoOf(JobImpl).vj = function () {
    return this.gr_1;
  };
  protoOf(JobImpl).hr = function (exception) {
    return this.lq(new CompletedExceptionally(exception));
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.kr();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).kr = function () {
    var main = Dispatchers_getInstance().pr();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.jr();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).pj = function (cause) {
    return false;
  };
  function TimeoutCancellationException() {
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).wm = function (context) {
    return false;
  };
  protoOf(Unconfined).xm = function (context, block) {
    var yieldContext = context.j9(Key_instance_3);
    if (!(yieldContext == null)) {
      yieldContext.vr_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function updateState($this, expectedState, newState) {
    var curSequence;
    var curSlots;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var oldState = $this.as_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) && !equals(oldState, expectedState))
      return false;
    if (equals(oldState, newState))
      return true;
    $this.as_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.bs_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.bs_1 = curSequence;
    } else {
      $this.bs_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.cs_1;
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          if (element == null)
            null;
          else {
            element.hs();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      if ($this.bs_1 === curSequence) {
        $this.bs_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.bs_1;
      curSlots = $this.cs_1;
    }
  }
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.as_1 = atomic$ref$1(initialState);
    this.bs_1 = 0;
  }
  protoOf(StateFlowImpl).is = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).e2 = function () {
    var tmp0 = get_NULL();
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var value = this.as_1.kotlinx$atomicfu$value;
    var tmp;
    if (value === tmp0) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).js = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function AbstractSharedFlow() {
    SynchronizedObject.call(this);
    this.cs_1 = null;
    this.ds_1 = 0;
    this.es_1 = 0;
    this.fs_1 = null;
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function OpDescriptor() {
  }
  function get_value(_this__u8e3s4) {
    return _this__u8e3s4.pn();
  }
  function Segment() {
  }
  function ConcurrentLinkedListNode() {
  }
  function handleUncaughtCoroutineException(context, exception) {
    var tmp0_iterator = get_platformExceptionHandlers().j();
    while (tmp0_iterator.k()) {
      var handler = tmp0_iterator.l();
      try {
        handler.zm(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _ = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.gl_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.cl_1 = dispatcher;
    this.dl_1 = continuation;
    this.el_1 = get_UNDEFINED();
    this.fl_1 = threadContextElements(this.c9());
    this.gl_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).c9 = function () {
    return this.dl_1.c9();
  };
  protoOf(DispatchedContinuation).hl = function () {
    return !(this.gl_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).ls = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.gl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).ym = function () {
    this.ls();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.zl();
    }
  };
  protoOf(DispatchedContinuation).lm = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.gl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.gl_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!this.gl_1.atomicfu$compareAndSet(state, null)) {
            // Inline function 'kotlin.require.<anonymous>' call
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          // Inline function 'kotlin.error' call
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).jl = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.gl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.gl_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.gl_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).dm = function () {
    var state = this.el_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.el_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).am = function () {
    return this;
  };
  protoOf(DispatchedContinuation).h9 = function (result) {
    var context = this.dl_1.c9();
    var state = toState_0(result);
    if (this.cl_1.wm(context)) {
      this.el_1 = state;
      this.il_1 = 0;
      this.cl_1.xm(context, this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().nn();
        if (false && eventLoop.in()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.hn()) {
          this.el_1 = state;
          this.il_1 = 0;
          eventLoop.gn(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.jn(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            this.c9();
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.fl_1;
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>.<anonymous>' call
            this.dl_1.h9(result);
            $l$loop: while (eventLoop.fn()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.pm(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.kn(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).em = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.um_1(cause);
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.cl_1.toString() + ', ' + toDebugString(this.dl_1) + ']';
  };
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (_this__u8e3s4.cl_1.wm(_this__u8e3s4.c9())) {
        _this__u8e3s4.el_1 = state;
        _this__u8e3s4.il_1 = 1;
        _this__u8e3s4.cl_1.xm(_this__u8e3s4.c9(), _this__u8e3s4);
        tmp_0 = Unit_instance;
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().nn();
          if (false && eventLoop.in()) {
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.hn()) {
            _this__u8e3s4.el_1 = state;
            _this__u8e3s4.il_1 = 1;
            eventLoop.gn(_this__u8e3s4);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.jn(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.c9().j9(Key_instance_2);
                if (!(job == null) && !job.hi()) {
                  var cause = job.ej();
                  _this__u8e3s4.em(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.h9(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                _this__u8e3s4.dl_1;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.fl_1;
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith.<anonymous>' call
                _this__u8e3s4.dl_1.h9(result);
              }
              $l$loop: while (eventLoop.fn()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.pm(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.kn(true);
            }
            tmp_1 = false;
          }
        }
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.h9(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.il_1 = resumeMode;
  }
  protoOf(DispatchedTask).em = function (takenState, cause) {
  };
  protoOf(DispatchedTask).km = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).mm = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.mi_1;
  };
  protoOf(DispatchedTask).om = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    var taskContext = get_taskContext(this);
    var fatalException = null;
    try {
      var tmp = this.am();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.dl_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.fl_1;
      // Inline function 'kotlinx.coroutines.DispatchedTask.run.<anonymous>' call
      var context = continuation.c9();
      var state = this.dm();
      var exception = this.mm(state);
      var job = exception == null && get_isCancellableMode(this.il_1) ? context.j9(Key_instance_2) : null;
      if (!(job == null) && !job.hi()) {
        var cause = job.ej();
        this.em(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.h9(tmp$ret$0);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.h9(tmp$ret$1);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.km(state);
          var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
          continuation.h9(tmp$ret$3);
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'kotlinx.coroutines.afterTask' call
        // Inline function 'kotlin.Companion.success' call
        tmp_0 = _Result___init__impl__xyqfz8(Unit_instance);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var result = tmp_0;
      this.pm(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).pm = function (exception, finallyException) {
    if (exception === null && finallyException === null)
      return Unit_instance;
    if (!(exception === null) && !(finallyException === null)) {
      addSuppressed(exception, finallyException);
    }
    var cause = exception == null ? finallyException : exception;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.am().c9(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.am();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.il_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.cl_1;
      var context = delegate.c9();
      if (dispatcher.wm(context)) {
        dispatcher.xm(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().nn();
    if (eventLoop.hn()) {
      eventLoop.gn(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.jn(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.am(), true);
        $l$loop: while (eventLoop.fn()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.pm(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.kn(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.dm();
    var exception = _this__u8e3s4.mm(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.km(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      this_0.dl_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.fl_1;
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith.<anonymous>' call
      this_0.dl_1.h9(result);
    } else {
      delegate.h9(result);
    }
  }
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.pk_1 = uCont;
  }
  protoOf(ScopeCoroutine).uj = function () {
    return true;
  };
  protoOf(ScopeCoroutine).ri = function (state) {
    resumeCancellableWith(intercepted(this.pk_1), recoverResult(state, this.pk_1));
  };
  protoOf(ScopeCoroutine).qi = function (state) {
    this.pk_1.h9(recoverResult(state, this.pk_1));
  };
  function ContextScope(context) {
    this.ms_1 = context;
  }
  protoOf(ContextScope).gi = function () {
    return this.ms_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.ms_1) + ')';
  };
  function Symbol(symbol) {
    this.ns_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.ns_1 + '>';
  };
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(fatalCompletion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.h9(tmp$ret$0);
    throw e;
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.pi(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        state.mi_1;
        if (true) {
          throw recoverStackTrace(state.mi_1, _this__u8e3s4.pk_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.mi_1, _this__u8e3s4.pk_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$2 = tmp_1;
    }
    return tmp$ret$2;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        completion.c9();
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$5 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.h9(tmp$ret$5);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
        var tmp$ret$8 = _Result___init__impl__xyqfz8(value_0);
        actualCompletion.h9(tmp$ret$8);
      }
    }
  }
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().lr_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.gi().jg(context);
    return !(combined === Dispatchers_getInstance().lr_1) && combined.j9(Key_instance) == null ? combined.jg(Dispatchers_getInstance().lr_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.jg(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).qi = function (state) {
    return this.pk_1.h9(recoverResult(state, this.pk_1));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).ka();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).us = function () {
    process.nextTick(this.bt_1.zs_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.ft();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.ys_1 = dispatcher;
    var tmp = this;
    tmp.zs_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).gt = function () {
    this.ys_1.us();
  };
  protoOf(ScheduledMessageQueue).ht = function () {
    setTimeout(this.zs_1, 0);
  };
  protoOf(ScheduledMessageQueue).it = function (timeout) {
    setTimeout(this.zs_1, timeout);
  };
  function w3cSetTimeout(handler, timeout) {
    return setTimeout(handler, timeout);
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.wt_1 && event.data == this$0.xt_1) {
        event.stopPropagation();
        this$0.ft();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.ft();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.wt_1 = window_0;
    this.xt_1 = 'dispatchCoroutine';
    this.wt_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).gt = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).ht = function () {
    this.wt_1.postMessage(this.xt_1, '*');
  };
  function w3cSetTimeout_0(window_0, handler, timeout) {
    return setTimeout_0(window_0, handler, timeout);
  }
  function w3cClearTimeout(window_0, handle) {
    return window_0.clearTimeout(handle);
  }
  function w3cClearTimeout_0(handle) {
    return clearTimeout(handle);
  }
  function setTimeout_0(window_0, handler, timeout) {
    return window_0.setTimeout(handler, timeout);
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function propagateExceptionFinalResort(exception) {
    console.error(exception.toString());
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.lr_1 = createDefaultDispatcher();
    this.mr_1 = Unconfined_getInstance();
    this.nr_1 = new JsMainDispatcher(this.lr_1, false);
    this.or_1 = null;
  }
  protoOf(Dispatchers).pr = function () {
    var tmp0_elvis_lhs = this.or_1;
    return tmp0_elvis_lhs == null ? this.nr_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.zt_1 = delegate;
    this.au_1 = invokeImmediately;
    this.bu_1 = this.au_1 ? this : new JsMainDispatcher(this.zt_1, true);
  }
  protoOf(JsMainDispatcher).jr = function () {
    return this.bu_1;
  };
  protoOf(JsMainDispatcher).wm = function (context) {
    return !this.au_1;
  };
  protoOf(JsMainDispatcher).xm = function (context, block) {
    return this.zt_1.xm(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.kr();
    return tmp0_elvis_lhs == null ? this.zt_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).xm = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    captureStack(this, JobCancellationException);
    this.gu_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.gu_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.gu_1, this.gu_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.gu_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return TaskContext_instance;
  }
  function TaskContext() {
  }
  var TaskContext_instance;
  function TaskContext_getInstance() {
    return TaskContext_instance;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).us = function () {
    this.bt_1.it(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlinx.coroutines.SetTimeoutBasedDispatcher.scheduleResumeAfterDelay.<anonymous>.<anonymous>' call
      $continuation.tk(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.bt_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).xm = function (context, block) {
    this.bt_1.st(block);
  };
  protoOf(SetTimeoutBasedDispatcher).an = function (timeMillis, continuation) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new ClearTimeout(handle));
  };
  function MessageQueue() {
    this.ct_1 = ArrayDeque_init_$Create$();
    this.dt_1 = 16;
    this.et_1 = false;
  }
  protoOf(MessageQueue).m = function () {
    return this.ct_1.vd_1;
  };
  protoOf(MessageQueue).jt = function (index, element) {
    this.ct_1.a2(index, element);
  };
  protoOf(MessageQueue).a2 = function (index, element) {
    return this.jt(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).kt = function (element) {
    return this.ct_1.h(element);
  };
  protoOf(MessageQueue).h = function (element) {
    return this.kt((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).lt = function (index, elements) {
    return this.ct_1.w1(index, elements);
  };
  protoOf(MessageQueue).w1 = function (index, elements) {
    return this.lt(index, elements);
  };
  protoOf(MessageQueue).mt = function (elements) {
    return this.ct_1.n(elements);
  };
  protoOf(MessageQueue).n = function (elements) {
    return this.mt(elements);
  };
  protoOf(MessageQueue).y1 = function () {
    this.ct_1.y1();
  };
  protoOf(MessageQueue).nt = function (element) {
    return this.ct_1.o(element);
  };
  protoOf(MessageQueue).o = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.nt((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).p = function (index) {
    return this.ct_1.p(index);
  };
  protoOf(MessageQueue).ot = function (element) {
    return this.ct_1.r(element);
  };
  protoOf(MessageQueue).r = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.ot((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).q = function () {
    return this.ct_1.q();
  };
  protoOf(MessageQueue).j = function () {
    return this.ct_1.j();
  };
  protoOf(MessageQueue).t1 = function (index) {
    return this.ct_1.t1(index);
  };
  protoOf(MessageQueue).pt = function (element) {
    return this.ct_1.v1(element);
  };
  protoOf(MessageQueue).v1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.pt((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).qt = function (elements) {
    return this.ct_1.x1(elements);
  };
  protoOf(MessageQueue).x1 = function (elements) {
    return this.qt(elements);
  };
  protoOf(MessageQueue).b2 = function (index) {
    return this.ct_1.b2(index);
  };
  protoOf(MessageQueue).rt = function (index, element) {
    return this.ct_1.z1(index, element);
  };
  protoOf(MessageQueue).z1 = function (index, element) {
    return this.rt(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).st = function (element) {
    this.kt(element);
    if (!this.et_1) {
      this.et_1 = true;
      this.gt();
    }
  };
  protoOf(MessageQueue).ft = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.dt_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.om();
        }
         while (inductionVariable < times);
    }finally {
      if (this.q()) {
        this.et_1 = false;
      } else {
        this.ht();
      }
    }
  };
  function WindowClearTimeout($outer, handle) {
    this.ku_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).cm = function () {
    w3cClearTimeout(this.ku_1.mu_1, this.ou_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlinx.coroutines.WindowDispatcher.scheduleResumeAfterDelay.<anonymous>.<anonymous>' call
      $continuation.tk(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.mu_1 = window_0;
    this.nu_1 = new WindowMessageQueue(this.mu_1);
  }
  protoOf(WindowDispatcher).xm = function (context, block) {
    return this.nu_1.st(block);
  };
  protoOf(WindowDispatcher).an = function (timeMillis, continuation) {
    var handle = w3cSetTimeout_0(this.mu_1, WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new WindowClearTimeout(this, handle));
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).f3();
  }
  function ClearTimeout(handle) {
    this.ou_1 = handle;
  }
  protoOf(ClearTimeout).cm = function () {
    w3cClearTimeout_0(this.ou_1);
  };
  protoOf(ClearTimeout).hm = function (cause) {
    this.cm();
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.ou_1 + ']';
  };
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  protoOf(LinkedListHead).do = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this.xn_1 = this;
    this.yn_1 = this;
    this.zn_1 = false;
  }
  protoOf(LinkedListNode).eo = function (node) {
    var prev = this.yn_1;
    node.xn_1 = this;
    node.yn_1 = prev;
    prev.xn_1 = node;
    this.yn_1 = node;
  };
  protoOf(LinkedListNode).do = function () {
    return this.fo();
  };
  protoOf(LinkedListNode).cm = function () {
    this.do();
  };
  protoOf(LinkedListNode).fo = function () {
    if (this.zn_1)
      return false;
    var prev = this.yn_1;
    var next = this.xn_1;
    prev.xn_1 = next;
    next.yn_1 = prev;
    this.zn_1 = true;
    return true;
  };
  protoOf(LinkedListNode).lo = function (node) {
    if (!(this.xn_1 === this))
      return false;
    this.eo(node);
    return true;
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function SynchronizedObject() {
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.on_1 = null;
  }
  protoOf(CommonThreadLocal).pn = function () {
    var tmp = this.on_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).qn = function (value) {
    this.on_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).jg = plus;
  protoOf(JobSupport).j9 = get_0;
  protoOf(JobSupport).ig = fold;
  protoOf(JobSupport).hg = minusKey_0;
  protoOf(CancellableContinuationImpl).rk = cancel$default;
  protoOf(CoroutineDispatcher).j9 = get;
  protoOf(CoroutineDispatcher).hg = minusKey;
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_3 = new Key_2();
  counter = 0;
  DEBUG = false;
  TaskContext_instance = new TaskContext();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.b = coroutineScope;
  _.$_$.c = delay;
  _.$_$.d = withContext;
  _.$_$.e = Key_instance_2;
  _.$_$.f = MutableStateFlow;
  _.$_$.g = CancellableContinuationImpl;
  _.$_$.h = CoroutineDispatcher;
  _.$_$.i = CoroutineScope_0;
  _.$_$.j = CoroutineScope;
  _.$_$.k = Job;
  _.$_$.l = SupervisorJob;
  _.$_$.m = cancel;
  _.$_$.n = cancel_0;
  _.$_$.o = get_job;
  _.$_$.p = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
