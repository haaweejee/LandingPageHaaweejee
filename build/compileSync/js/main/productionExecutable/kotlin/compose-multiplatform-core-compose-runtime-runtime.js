(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-collection-collection.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    globalThis['compose-multiplatform-core-compose-runtime-runtime'] = factory(typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_collection_internal_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.x6;
  var initMetadataForInterface = kotlin_kotlin.$_$.j6;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  var VOID = kotlin_kotlin.$_$.e;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var Companion_instance = kotlin_kotlin.$_$.b2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.t1;
  var createFailure = kotlin_kotlin.$_$.m9;
  var intercepted = kotlin_kotlin.$_$.z4;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var get = kotlin_kotlin.$_$.i5;
  var fold = kotlin_kotlin.$_$.h5;
  var minusKey = kotlin_kotlin.$_$.j5;
  var plus = kotlin_kotlin.$_$.l5;
  var toString = kotlin_kotlin.$_$.z6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var isInterface = kotlin_kotlin.$_$.p6;
  var equals = kotlin_kotlin.$_$.z5;
  var hashCode = kotlin_kotlin.$_$.f6;
  var rotateLeft = kotlin_kotlin.$_$.r9;
  var Enum = kotlin_kotlin.$_$.y8;
  var rotateRight = kotlin_kotlin.$_$.s9;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var fill = kotlin_kotlin.$_$.f3;
  var MutableIntIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.a;
  var emptyList = kotlin_kotlin.$_$.d3;
  var Long = kotlin_kotlin.$_$.c9;
  var sortWith = kotlin_kotlin.$_$.k4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var to = kotlin_kotlin.$_$.w9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.h6;
  var IllegalStateException = kotlin_kotlin.$_$.b9;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.d1;
  var captureStack = kotlin_kotlin.$_$.t5;
  var defineProp = kotlin_kotlin.$_$.y5;
  var MutableIntObjectMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.c;
  var lazy = kotlin_kotlin.$_$.o9;
  var mutableScatterSetOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.k;
  var MutableScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.h;
  var mutableListOf = kotlin_kotlin.$_$.z3;
  var KtMutableList = kotlin_kotlin.$_$.o2;
  var MutableScatterMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.g;
  var compareTo = kotlin_kotlin.$_$.x5;
  var FunctionAdapter = kotlin_kotlin.$_$.q5;
  var Comparator = kotlin_kotlin.$_$.x8;
  var KProperty1 = kotlin_kotlin.$_$.j7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d6;
  var MutableIntList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.b;
  var isArray = kotlin_kotlin.$_$.n6;
  var KtSet = kotlin_kotlin.$_$.q2;
  var mutableScatterSetOf_0 = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.l;
  var KtMap = kotlin_kotlin.$_$.m2;
  var Exception = kotlin_kotlin.$_$.a9;
  var plus_0 = kotlin_kotlin.$_$.b4;
  var initMetadataForObject = kotlin_kotlin.$_$.l6;
  var fillArrayVal = kotlin_kotlin.$_$.a6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var toString_0 = kotlin_kotlin.$_$.v9;
  var Element = kotlin_kotlin.$_$.k5;
  var getStringHashCode = kotlin_kotlin.$_$.e6;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var CoroutineImpl = kotlin_kotlin.$_$.m5;
  var returnIfSuspended = kotlin_kotlin.$_$.g;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x4;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.i6;
  var initMetadataForLambda = kotlin_kotlin.$_$.k6;
  var MutableObjectIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.e;
  var ScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.i;
  var fill_0 = kotlin_kotlin.$_$.h3;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var addAll = kotlin_kotlin.$_$.s2;
  var toList = kotlin_kotlin.$_$.q4;
  var flatten = kotlin_kotlin.$_$.j3;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.u;
  var CancellationException = kotlin_kotlin.$_$.w4;
  var addSuppressed = kotlin_kotlin.$_$.j9;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var removeFirst = kotlin_kotlin.$_$.h4;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var arrayCopy = kotlin_kotlin.$_$.t2;
  var MutableObjectList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.f;
  var anyToString = kotlin_kotlin.$_$.r5;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.y;
  var MutableIntSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.d;
  var first = kotlin_kotlin.$_$.i3;
  var last = kotlin_kotlin.$_$.s3;
  var toList_0 = kotlin_kotlin.$_$.r4;
  var copyOf = kotlin_kotlin.$_$.a3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var plus_1 = kotlin_kotlin.$_$.f4;
  var coerceAtMost = kotlin_kotlin.$_$.b7;
  var coerceAtLeast = kotlin_kotlin.$_$.a7;
  var copyOf_0 = kotlin_kotlin.$_$.z2;
  var ensureNotNull = kotlin_kotlin.$_$.n9;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var RandomAccess = kotlin_kotlin.$_$.p2;
  var SequenceScope = kotlin_kotlin.$_$.k7;
  var numberRangeToNumber = kotlin_kotlin.$_$.t6;
  var until = kotlin_kotlin.$_$.f7;
  var iterator = kotlin_kotlin.$_$.o7;
  var Collection = kotlin_kotlin.$_$.j2;
  var mutableScatterMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.j;
  var mutableSetOf = kotlin_kotlin.$_$.a4;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var AbstractList = kotlin_kotlin.$_$.e2;
  var KtList = kotlin_kotlin.$_$.k2;
  var arrayIterator = kotlin_kotlin.$_$.s5;
  var AbstractMutableList = kotlin_kotlin.$_$.g2;
  var MutableIterable = kotlin_kotlin.$_$.n2;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var copyOfRange = kotlin_kotlin.$_$.y2;
  var indexOf = kotlin_kotlin.$_$.m3;
  var AbstractMap = kotlin_kotlin.$_$.f2;
  var Entry = kotlin_kotlin.$_$.l2;
  var AbstractSet = kotlin_kotlin.$_$.h2;
  var AbstractCollection = kotlin_kotlin.$_$.d2;
  var objectCreate = kotlin_kotlin.$_$.w6;
  var step = kotlin_kotlin.$_$.e7;
  var countOneBits = kotlin_kotlin.$_$.k9;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var toString_1 = kotlin_kotlin.$_$.q8;
  var longArray = kotlin_kotlin.$_$.s6;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var Char = kotlin_kotlin.$_$.w8;
  var isCharSequence = kotlin_kotlin.$_$.o6;
  var minus = kotlin_kotlin.$_$.y3;
  var contains = kotlin_kotlin.$_$.x2;
  var plus_2 = kotlin_kotlin.$_$.e4;
  var primitiveArrayConcat = kotlin_kotlin.$_$.d;
  var singleOrNull = kotlin_kotlin.$_$.j4;
  var intArrayIterator = kotlin_kotlin.$_$.m6;
  var toIntArray = kotlin_kotlin.$_$.p4;
  var sequence = kotlin_kotlin.$_$.q7;
  var countTrailingZeroBits = kotlin_kotlin.$_$.l9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var println = kotlin_kotlin.$_$.p5;
  var printStackTrace = kotlin_kotlin.$_$.q9;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.f;
  var toDuration = kotlin_kotlin.$_$.u8;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.q1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.v;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.r;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  initMetadataForInterface(Applier, 'Applier');
  initMetadataForClass(OffsetApplier, 'OffsetApplier', VOID, VOID, [Applier]);
  initMetadataForClass(AbstractApplier, 'AbstractApplier', VOID, VOID, [Applier]);
  initMetadataForClass(FrameAwaiter, 'FrameAwaiter');
  function get_key() {
    return Key_instance_0;
  }
  initMetadataForInterface(MonotonicFrameClock, 'MonotonicFrameClock', VOID, VOID, [Element], [1]);
  initMetadataForClass(BroadcastFrameClock, 'BroadcastFrameClock', BroadcastFrameClock, VOID, [MonotonicFrameClock], [1]);
  initMetadataForInterface(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback');
  initMetadataForClass(Invalidation, 'Invalidation');
  initMetadataForInterface(RememberObserver, 'RememberObserver');
  initMetadataForInterface(ReusableRememberObserver, 'ReusableRememberObserver', VOID, VOID, [RememberObserver]);
  initMetadataForClass(CompositionContextHolder, 'CompositionContextHolder', VOID, VOID, [ReusableRememberObserver]);
  initMetadataForClass(ComposerImpl$derivedStateObserver$1);
  function changed(value) {
    return this.t1e(value);
  }
  function changed_0(value) {
    return this.v1e(value);
  }
  function changed_1(value) {
    return this.u1e(value);
  }
  function changedInstance(value) {
    return this.f15(value);
  }
  initMetadataForInterface(Composer, 'Composer');
  initMetadataForClass(ComposerImpl, 'ComposerImpl', VOID, VOID, [Composer]);
  initMetadataForClass(Composer$Companion$Empty$1);
  initMetadataForCompanion(Companion);
  initMetadataForClass(InvalidationResult, 'InvalidationResult', VOID, Enum);
  initMetadataForClass(MovableContentStateReference, 'MovableContentStateReference');
  initMetadataForClass(MovableContentState, 'MovableContentState');
  initMetadataForClass(MovableContent, 'MovableContent');
  initMetadataForClass(ComposeRuntimeError, 'ComposeRuntimeError', VOID, IllegalStateException);
  initMetadataForClass(ProvidedValue, 'ProvidedValue');
  initMetadataForClass(RememberObserverHolder, 'RememberObserverHolder');
  initMetadataForClass(Pending, 'Pending');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(GroupInfo, 'GroupInfo');
  initMetadataForClass(MutableScatterMultiMap, 'MutableScatterMultiMap');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(RememberEventDispatcher, 'RememberEventDispatcher');
  initMetadataForInterface(RecomposeScopeOwner, 'RecomposeScopeOwner');
  initMetadataForClass(CompositionImpl, 'CompositionImpl', VOID, VOID, [RecomposeScopeOwner]);
  initMetadataForClass(CompositionObserverHolder, 'CompositionObserverHolder', CompositionObserverHolder);
  initMetadataForObject(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt');
  initMetadataForObject(ScopeInvalidated, 'ScopeInvalidated');
  initMetadataForClass(CompositionImplServiceKey$1);
  initMetadataForClass(CompositionContext, 'CompositionContext');
  initMetadataForClass(CompositionLocal, 'CompositionLocal');
  initMetadataForClass(ProvidableCompositionLocal, 'ProvidableCompositionLocal', VOID, CompositionLocal);
  initMetadataForClass(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', VOID, ProvidableCompositionLocal);
  initMetadataForClass(DynamicProvidableCompositionLocal, 'DynamicProvidableCompositionLocal', VOID, ProvidableCompositionLocal);
  initMetadataForInterface(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', VOID, VOID, [KtMap]);
  initMetadataForInterface(DerivedState, 'DerivedState');
  initMetadataForClass(DisposableEffectScope, 'DisposableEffectScope', DisposableEffectScope);
  initMetadataForClass(LaunchedEffectImpl, 'LaunchedEffectImpl', VOID, VOID, [RememberObserver]);
  initMetadataForClass(CompositionScopedCoroutineScopeCanceller, 'CompositionScopedCoroutineScopeCanceller', VOID, VOID, [RememberObserver]);
  initMetadataForClass(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', VOID, CancellationException);
  initMetadataForClass(LeftCompositionCancellationException, 'LeftCompositionCancellationException', LeftCompositionCancellationException, PlatformOptimizedCancellationException);
  initMetadataForClass(DisposableEffectImpl, 'DisposableEffectImpl', VOID, VOID, [RememberObserver]);
  initMetadataForClass(JoinedKey, 'JoinedKey');
  initMetadataForObject(Key, 'Key');
  initMetadataForClass(OpaqueKey, 'OpaqueKey');
  initMetadataForInterface(ProduceStateScope, 'ProduceStateScope', VOID, VOID, [CoroutineScope_0], [1]);
  initMetadataForCoroutine($awaitDisposeCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(ProduceStateScopeImpl, 'ProduceStateScopeImpl', VOID, VOID, [ProduceStateScope], [1]);
  initMetadataForLambda(produceState$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(RecomposeScopeImpl, 'RecomposeScopeImpl');
  initMetadataForLambda(Recomposer$recompositionRunner$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(State, 'State', VOID, Enum);
  initMetadataForClass(RecomposerInfoImpl, 'RecomposerInfoImpl');
  initMetadataForClass(RecomposerErrorState, 'RecomposerErrorState');
  initMetadataForCompanion(Companion_2);
  initMetadataForLambda(Recomposer$runRecomposeAndApplyChanges$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(Recomposer$recompositionRunner$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($awaitWorkAvailableCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(Recomposer, 'Recomposer', VOID, CompositionContext, VOID, [0, 1, 2]);
  initMetadataForClass(SlotTable, 'SlotTable', SlotTable);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SlotWriter, 'SlotWriter');
  initMetadataForClass(Anchor, 'Anchor');
  initMetadataForClass(GroupSourceInformation, 'GroupSourceInformation');
  initMetadataForClass(SlotReader, 'SlotReader');
  initMetadataForClass(GroupIterator, 'GroupIterator');
  initMetadataForClass(SlotTableGroup, 'SlotTableGroup');
  initMetadataForClass(PrioritySet, 'PrioritySet', PrioritySet);
  initMetadataForClass(KeyInfo, 'KeyInfo');
  initMetadataForClass(SourceInformationGroupIterator, 'SourceInformationGroupIterator');
  initMetadataForClass(SourceInformationGroupPath, 'SourceInformationGroupPath');
  initMetadataForClass(AnchoredGroupPath, 'AnchoredGroupPath', VOID, SourceInformationGroupPath);
  initMetadataForClass(SourceInformationSlotTableGroup, 'SourceInformationSlotTableGroup');
  initMetadataForClass(RelativeGroupPath, 'RelativeGroupPath', VOID, SourceInformationGroupPath);
  function merge(previous, current, applied) {
    return null;
  }
  initMetadataForInterface(SnapshotMutationPolicy, 'SnapshotMutationPolicy');
  initMetadataForObject(StructuralEqualityPolicy, 'StructuralEqualityPolicy', VOID, VOID, [SnapshotMutationPolicy]);
  initMetadataForClass(StateRecord, 'StateRecord');
  initMetadataForClass(StateStateRecord, 'StateStateRecord', VOID, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  initMetadataForInterface(StateObject, 'StateObject');
  initMetadataForClass(StateObjectImpl, 'StateObjectImpl', VOID, VOID, [StateObject]);
  initMetadataForClass(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', VOID, StateObjectImpl);
  initMetadataForClass(SnapshotThreadLocal, 'SnapshotThreadLocal', SnapshotThreadLocal);
  initMetadataForClass(IntStack, 'IntStack', IntStack);
  initMetadataForClass(Stack, 'Stack', Stack);
  initMetadataForInterface(ValueHolder, 'ValueHolder');
  initMetadataForClass(LazyValueHolder, 'LazyValueHolder', VOID, VOID, [ValueHolder]);
  initMetadataForClass(DynamicValueHolder, 'DynamicValueHolder', VOID, VOID, [ValueHolder]);
  initMetadataForClass(StaticValueHolder, 'StaticValueHolder', VOID, VOID, [ValueHolder]);
  initMetadataForClass(ComputedValueHolder, 'ComputedValueHolder', VOID, VOID, [ValueHolder]);
  initMetadataForClass(OperationsDebugStringFormattable, 'OperationsDebugStringFormattable');
  initMetadataForClass(ChangeList, 'ChangeList', ChangeList, OperationsDebugStringFormattable);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ComposerChangeListWriter, 'ComposerChangeListWriter');
  initMetadataForClass(FixupList, 'FixupList', FixupList, OperationsDebugStringFormattable);
  initMetadataForClass(Operation, 'Operation');
  initMetadataForObject(Ups, 'Ups', VOID, Operation);
  initMetadataForObject(Downs, 'Downs', VOID, Operation);
  initMetadataForObject(AdvanceSlotsBy, 'AdvanceSlotsBy', VOID, Operation);
  initMetadataForObject(Remember, 'Remember', VOID, Operation);
  initMetadataForObject(AppendValue, 'AppendValue', VOID, Operation);
  initMetadataForObject(TrimParentValues, 'TrimParentValues', VOID, Operation);
  initMetadataForObject(UpdateValue, 'UpdateValue', VOID, Operation);
  initMetadataForObject(UpdateAnchoredValue, 'UpdateAnchoredValue', VOID, Operation);
  initMetadataForObject(UpdateAuxData, 'UpdateAuxData', VOID, Operation);
  initMetadataForObject(EnsureRootGroupStarted, 'EnsureRootGroupStarted', VOID, Operation);
  initMetadataForObject(EnsureGroupStarted, 'EnsureGroupStarted', VOID, Operation);
  initMetadataForObject(RemoveCurrentGroup, 'RemoveCurrentGroup', VOID, Operation);
  initMetadataForObject(MoveCurrentGroup, 'MoveCurrentGroup', VOID, Operation);
  initMetadataForObject(EndCurrentGroup, 'EndCurrentGroup', VOID, Operation);
  initMetadataForObject(SkipToEndOfCurrentGroup, 'SkipToEndOfCurrentGroup', VOID, Operation);
  initMetadataForObject(EndCompositionScope, 'EndCompositionScope', VOID, Operation);
  initMetadataForObject(UseCurrentNode, 'UseCurrentNode', VOID, Operation);
  initMetadataForObject(UpdateNode, 'UpdateNode', VOID, Operation);
  initMetadataForObject(RemoveNode, 'RemoveNode', VOID, Operation);
  initMetadataForObject(MoveNode, 'MoveNode', VOID, Operation);
  initMetadataForObject(InsertSlots, 'InsertSlots', VOID, Operation);
  initMetadataForObject(InsertSlotsWithFixups, 'InsertSlotsWithFixups', VOID, Operation);
  initMetadataForObject(InsertNodeFixup, 'InsertNodeFixup', VOID, Operation);
  initMetadataForObject(PostInsertNodeFixup, 'PostInsertNodeFixup', VOID, Operation);
  initMetadataForObject(ResetSlots, 'ResetSlots', VOID, Operation);
  initMetadataForObject(DetermineMovableContentNodeIndex, 'DetermineMovableContentNodeIndex', VOID, Operation);
  initMetadataForObject(CopyNodesToNewAnchorLocation, 'CopyNodesToNewAnchorLocation', VOID, Operation);
  initMetadataForObject(CopySlotTableToAnchorLocation, 'CopySlotTableToAnchorLocation', VOID, Operation);
  initMetadataForObject(EndMovableContentPlacement, 'EndMovableContentPlacement', VOID, Operation);
  initMetadataForObject(ReleaseMovableGroupAtCurrent, 'ReleaseMovableGroupAtCurrent', VOID, Operation);
  initMetadataForObject(ApplyChangeList, 'ApplyChangeList', VOID, Operation);
  initMetadataForClass(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1, VOID, VOID, VOID, [RecomposeScopeOwner]);
  initMetadataForClass(OpIterator, 'OpIterator');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Operations, 'Operations', Operations, OperationsDebugStringFormattable);
  initMetadataForClass(MutableVector, 'MutableVector', VOID, VOID, [RandomAccess]);
  initMetadataForLambda(ScatterSetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ScatterSetWrapper, 'ScatterSetWrapper', VOID, VOID, [KtSet]);
  initMetadataForClass(ScopeMap, 'ScopeMap', ScopeMap);
  initMetadataForClass(AbstractListIterator, 'AbstractListIterator');
  initMetadataForClass(SingleElementListIterator, 'SingleElementListIterator', VOID, AbstractListIterator);
  initMetadataForClass(AbstractPersistentList, 'AbstractPersistentList', VOID, AbstractList, [Collection, KtList, AbstractList]);
  initMetadataForClass(BufferIterator, 'BufferIterator', VOID, AbstractListIterator);
  initMetadataForClass(PersistentVector, 'PersistentVector', VOID, AbstractPersistentList, [Collection, KtList, AbstractPersistentList]);
  initMetadataForClass(PersistentVectorBuilder, 'PersistentVectorBuilder', VOID, AbstractMutableList, [AbstractMutableList, Collection, KtMutableList, MutableIterable]);
  initMetadataForClass(PersistentVectorIterator, 'PersistentVectorIterator', VOID, AbstractListIterator);
  initMetadataForClass(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', VOID, AbstractListIterator);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(SmallPersistentVector, 'SmallPersistentVector', VOID, AbstractPersistentList, [KtList, Collection, AbstractPersistentList]);
  initMetadataForClass(TrieIterator, 'TrieIterator', VOID, AbstractListIterator);
  initMetadataForClass(ObjectRef, 'ObjectRef');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(PersistentHashMap, 'PersistentHashMap', VOID, AbstractMap, [AbstractMap, KtMap]);
  initMetadataForClass(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator');
  initMetadataForClass(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapValuesIterator, 'PersistentHashMapValuesIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(TrieNodeBaseIterator, 'TrieNodeBaseIterator');
  initMetadataForClass(TrieNodeKeysIterator, 'TrieNodeKeysIterator', TrieNodeKeysIterator, TrieNodeBaseIterator);
  initMetadataForClass(TrieNodeValuesIterator, 'TrieNodeValuesIterator', TrieNodeValuesIterator, TrieNodeBaseIterator);
  initMetadataForClass(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', TrieNodeEntriesIterator, TrieNodeBaseIterator);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(PersistentHashMapKeys, 'PersistentHashMapKeys', VOID, AbstractSet, [KtSet, Collection, AbstractSet]);
  initMetadataForClass(PersistentHashMapValues, 'PersistentHashMapValues', VOID, AbstractCollection, [Collection, AbstractCollection]);
  initMetadataForClass(PersistentHashMapEntries, 'PersistentHashMapEntries', VOID, AbstractSet, [KtSet, Collection, AbstractSet]);
  initMetadataForClass(ModificationResult, 'ModificationResult');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(TrieNode, 'TrieNode');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(PersistentOrderedSet, 'PersistentOrderedSet', VOID, AbstractSet, [AbstractSet, KtSet, Collection]);
  initMetadataForClass(Links, 'Links', Links_init_$Create$);
  initMetadataForClass(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator');
  initMetadataForObject(EndOfChain, 'EndOfChain');
  initMetadataForObject(ListImplementation, 'ListImplementation');
  initMetadataForClass(MutabilityOwnership, 'MutabilityOwnership', MutabilityOwnership);
  initMetadataForClass(IntRef, 'IntRef', IntRef);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', VOID, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  initMetadataForClass(ThreadMap, 'ThreadMap');
  initMetadataForInterface(ObserverHandle, 'ObserverHandle');
  initMetadataForClass(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', VOID, VOID, [ObserverHandle, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', VOID, VOID, [ObserverHandle, FunctionAdapter]);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(Snapshot, 'Snapshot');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(MutableSnapshot, 'MutableSnapshot', VOID, Snapshot);
  initMetadataForClass(SnapshotApplyResult, 'SnapshotApplyResult');
  initMetadataForObject(Success, 'Success', VOID, SnapshotApplyResult);
  initMetadataForClass(Failure, 'Failure', VOID, SnapshotApplyResult);
  initMetadataForClass(GlobalSnapshot, 'GlobalSnapshot', VOID, MutableSnapshot);
  initMetadataForClass(NestedMutableSnapshot, 'NestedMutableSnapshot', VOID, MutableSnapshot);
  initMetadataForClass(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', SnapshotDoubleIndexHeap);
  initMetadataForCompanion(Companion_13);
  initMetadataForLambda(SnapshotIdSet$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SnapshotIdSet, 'SnapshotIdSet');
  initMetadataForClass(StateListStateRecord, 'StateListStateRecord', VOID, StateRecord);
  initMetadataForClass(SnapshotStateList, 'SnapshotStateList', SnapshotStateList, VOID, [StateObject, KtMutableList, RandomAccess]);
  initMetadataForClass(StateListIterator, 'StateListIterator');
  initMetadataForClass(SnapshotWeakSet, 'SnapshotWeakSet', SnapshotWeakSet);
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForClass(AtomicInt, 'AtomicInt');
  initMetadataForClass(ComposableLambdaImpl, 'ComposableLambdaImpl');
  initMetadataForClass(MonotonicClockImpl, 'MonotonicClockImpl', MonotonicClockImpl, VOID, [MonotonicFrameClock], [1]);
  initMetadataForObject(Trace, 'Trace');
  initMetadataForClass(IntMap, 'IntMap', IntMap);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.k11_1 = applier;
    this.l11_1 = offset;
    this.m11_1 = 0;
  }
  protoOf(OffsetApplier).b11 = function () {
    return this.k11_1.b11();
  };
  protoOf(OffsetApplier).e11 = function (node) {
    this.m11_1 = this.m11_1 + 1 | 0;
    this.k11_1.e11(node);
  };
  protoOf(OffsetApplier).f11 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.m11_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var tmp$ret$0 = 'OffsetApplier up called with no corresponding down';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.m11_1 = this.m11_1 - 1 | 0;
    this.k11_1.f11();
  };
  protoOf(OffsetApplier).g11 = function (index, instance) {
    this.k11_1.g11(index + (this.m11_1 === 0 ? this.l11_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).h11 = function (index, instance) {
    this.k11_1.h11(index + (this.m11_1 === 0 ? this.l11_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).i11 = function (index, count) {
    this.k11_1.i11(index + (this.m11_1 === 0 ? this.l11_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).j11 = function (from, to, count) {
    var effectiveOffset = this.m11_1 === 0 ? this.l11_1 : 0;
    this.k11_1.j11(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.n11_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o11_1 = ArrayList_init_$Create$();
    this.p11_1 = this.n11_1;
  }
  protoOf(AbstractApplier).q11 = function (_set____db54di) {
    this.p11_1 = _set____db54di;
  };
  protoOf(AbstractApplier).b11 = function () {
    return this.p11_1;
  };
  protoOf(AbstractApplier).r11 = function (node) {
    this.o11_1.h(this.b11());
    this.q11(node);
  };
  protoOf(AbstractApplier).e11 = function (node) {
    return this.r11((node == null ? true : !(node == null)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).f11 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.o11_1.q()) {
      // Inline function 'androidx.compose.runtime.AbstractApplier.up.<anonymous>' call
      var tmp$ret$1 = 'empty stack';
      throwIllegalStateException(tmp$ret$1);
    }
    this.q11(this.o11_1.b2(this.o11_1.m() - 1 | 0));
  };
  function FrameAwaiter(onFrame, continuation) {
    this.s11_1 = onFrame;
    this.t11_1 = continuation;
  }
  protoOf(FrameAwaiter).u11 = function (timeNanos) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      // Inline function 'kotlin.Companion.success' call
      var value = this.s11_1(timeNanos);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp$ret$3 = tmp;
    this.t11_1.h9(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.w11_1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>' call
    if (!($this.x11_1 == null))
      return Unit_instance;
    $this.x11_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = $this.y11_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = item.t11_1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        this_1.h9(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.y11_1.y1();
    $this.a12_1.c12(0);
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.w11_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>.<anonymous>' call
      this$0.y11_1.v1($awaiter);
      if (this$0.y11_1.q()) {
        this$0.a12_1.c12(0);
      }
      return Unit_instance;
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.v11_1 = onNewAwaiters;
    this.w11_1 = new Object();
    this.x11_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y11_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.z11_1 = ArrayList_init_$Create$();
    this.a12_1 = new AtomicInt(0);
  }
  protoOf(BroadcastFrameClock).d12 = function () {
    return !(this.a12_1.pn() === 0);
  };
  protoOf(BroadcastFrameClock).e12 = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.w11_1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.sendFrame.<anonymous>' call
    var toResume = this.y11_1;
    this.y11_1 = this.z11_1;
    this.z11_1 = toResume;
    this.a12_1.c12(0);
    var inductionVariable = 0;
    var last = toResume.m();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.p(i).u11(timeNanos);
      }
       while (inductionVariable < last);
    toResume.y1();
  };
  protoOf(BroadcastFrameClock).f12 = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.bm();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.w11_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.x11_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.h9(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.y11_1.q();
      this.y11_1.h(awaiter);
      if (!hadAwaiters) {
        this.a12_1.c12(1);
      }
      var hasNewAwaiters = !hadAwaiters;
      cancellable.sk(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters && !(this.v11_1 == null)) {
        try {
          this.v11_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.ek();
  };
  function invalidApplier() {
    var message = 'Invalid applier';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  function get_provider() {
    _init_properties_Composer_kt__bmp4g0();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  var providerValues;
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function get_InvalidationLocationAscending() {
    _init_properties_Composer_kt__bmp4g0();
    return InvalidationLocationAscending;
  }
  var InvalidationLocationAscending;
  function Invalidation(scope, location, instances) {
    this.j12_1 = scope;
    this.k12_1 = location;
    this.l12_1 = instances;
  }
  protoOf(Invalidation).m12 = function () {
    return this.j12_1.v12(this.l12_1);
  };
  function startRoot($this) {
    $this.h13_1 = 0;
    $this.d14_1 = $this.y12_1.z14();
    startGroup($this, 100);
    $this.x12_1.a15();
    $this.q13_1 = $this.x12_1.b15();
    $this.t13_1.e15(asInt($this.s13_1));
    $this.s13_1 = $this.f15($this.q13_1);
    $this.h14_1 = null;
    if (!$this.l13_1) {
      $this.l13_1 = $this.x12_1.g15();
    }
    if (!$this.y13_1) {
      $this.y13_1 = $this.x12_1.h15();
    }
    var tmp0_safe_receiver = read($this.q13_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.startRoot.<anonymous>' call
      tmp0_safe_receiver.h($this.y12_1);
      $this.x12_1.i15(tmp0_safe_receiver);
    }
    startGroup($this, $this.x12_1.j15());
  }
  function endRoot($this) {
    endGroup($this);
    $this.x12_1.k15();
    endGroup($this);
    $this.j14_1.x15();
    finalizeCompose($this);
    $this.d14_1.n16();
    $this.m13_1 = false;
    $this.s13_1 = asBool($this.t13_1.o16());
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.d13_1.y1();
    $this.i13_1.y1();
    $this.p13_1.y1();
    $this.t13_1.y1();
    $this.r13_1 = null;
    $this.l14_1.y1();
    $this.n14_1 = 0;
    $this.w13_1 = 0;
    $this.n13_1 = false;
    $this.m14_1 = false;
    $this.u13_1 = false;
    $this.b14_1 = false;
    $this.m13_1 = false;
    $this.v13_1 = -1;
    if (!$this.d14_1.e16_1) {
      $this.d14_1.n16();
    }
    if (!$this.f14_1.o17_1) {
      forceFreshInsertTable($this);
    }
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_0().q17_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_0().q17_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.g13_1 = $this.g13_1 + $this.d14_1.t17() | 0;
  }
  function updateSlot($this, value) {
    $this.u17();
    $this.v17(value);
  }
  function rememberObserverAnchor($this) {
    var tmp;
    if ($this.m14_1) {
      var tmp_0;
      if (get_isAfterFirstChild($this.f14_1)) {
        var group = $this.f14_1.l17_1 - 1 | 0;
        var parent = $this.f14_1.w17(group);
        while (!(parent === $this.f14_1.n17_1) && parent >= 0) {
          group = parent;
          parent = $this.f14_1.w17(group);
        }
        tmp_0 = $this.f14_1.x17(group);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (get_isAfterFirstChild_0($this.d14_1)) {
        var group_0 = $this.d14_1.f16_1 - 1 | 0;
        var parent_0 = $this.d14_1.w17(group_0);
        while (!(parent_0 === $this.d14_1.h16_1) && parent_0 >= 0) {
          group_0 = parent_0;
          parent_0 = $this.d14_1.w17(group_0);
        }
        tmp_1 = $this.d14_1.x17(group_0);
      } else {
        tmp_1 = null;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.h14_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.d14_1.h16_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.m14_1 && $this.g14_1) {
      var current = $this.f14_1.n17_1;
      while (current > 0) {
        if ($this.f14_1.z17(current) === 202 && equals($this.f14_1.a18(current), get_compositionLocalMap())) {
          var tmp = $this.f14_1.y17(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.h14_1 = providers;
          return providers;
        }
        current = $this.f14_1.w17(current);
      }
    }
    if ($this.d14_1.m() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.d14_1.z17(current_0) === 202 && equals($this.d14_1.a18(current_0), get_compositionLocalMap())) {
          var tmp0_safe_receiver = $this.r13_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p(current_0);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            var tmp_1 = $this.d14_1.y17(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.h14_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.d14_1.w17(current_0);
      }
    }
    $this.h14_1 = $this.q13_1;
    return $this.q13_1;
  }
  function recordProviderUpdate($this, providers) {
    var tmp0_elvis_lhs = $this.r13_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordProviderUpdate.<anonymous>' call
      var newProviderUpdates = new IntMap();
      $this.r13_1 = newProviderUpdates;
      tmp = newProviderUpdates;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var providerUpdates = tmp;
    providerUpdates.c18($this.d14_1.f16_1, providers);
  }
  function ensureWriter($this) {
    if ($this.f14_1.o17_1) {
      $this.f14_1 = $this.e14_1.d18();
      $this.f14_1.e18();
      $this.g14_1 = false;
      $this.h14_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.f14_1.o17_1);
    forceFreshInsertTable($this);
  }
  function forceFreshInsertTable($this) {
    var tmp = $this;
    // Inline function 'kotlin.apply' call
    var this_0 = new SlotTable();
    // Inline function 'androidx.compose.runtime.ComposerImpl.forceFreshInsertTable.<anonymous>' call
    if ($this.y13_1) {
      this_0.f18();
    }
    if ($this.x12_1.h18()) {
      this_0.g18();
    }
    tmp.e14_1 = this_0;
    var tmp_0 = $this;
    // Inline function 'kotlin.also' call
    var this_1 = $this.e14_1.d18();
    // Inline function 'androidx.compose.runtime.ComposerImpl.forceFreshInsertTable.<anonymous>' call
    this_1.i18(true);
    tmp_0.f14_1 = this_1;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.d14_1.m18();
    } else {
      if (!(data == null) && !($this.d14_1.k18() === data)) {
        $this.j14_1.j18(data);
      }
      $this.d14_1.l18();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
    var rGroupIndex = $this.h13_1;
    if (objectKey == null)
      if (!(data == null) && key === 207 && !equals(data, Companion_getInstance().n18_1)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash = hashCode(data);
        var tmp = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = $this.n14_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_1 = rotateLeft(this_0, 3) ^ keyHash;
        tmp.n14_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var tmp_0 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_2 = $this.n14_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_3 = rotateLeft(this_2, 3) ^ key;
        tmp_0.n14_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
      }
     else {
      if (objectKey instanceof Enum) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_0 = objectKey.m2_1;
        var tmp_1 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_4 = $this.n14_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
        tmp_1.n14_1 = rotateLeft(this_5, 3) ^ 0;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_1 = hashCode(objectKey);
        var tmp_2 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_6 = $this.n14_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
        tmp_2.n14_1 = rotateLeft(this_7, 3) ^ 0;
      }
    }
    if (objectKey == null) {
      $this.h13_1 = $this.h13_1 + 1 | 0;
    }
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_0().q17_1));
    if ($this.m14_1) {
      $this.d14_1.o18();
      var startIndex = $this.f14_1.l17_1;
      if (isNode) {
        $this.f14_1.r18(key, Companion_getInstance().n18_1);
      } else if (!(data == null)) {
        var tmp_3 = $this.f14_1;
        tmp_3.q18(key, objectKey == null ? Companion_getInstance().n18_1 : objectKey, data);
      } else {
        var tmp_4 = $this.f14_1;
        tmp_4.p18(key, objectKey == null ? Companion_getInstance().n18_1 : objectKey);
      }
      var tmp4_safe_receiver = $this.e13_1;
      if (tmp4_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp4_safe_receiver.y18(insertKeyInfo, $this.f13_1 - tmp4_safe_receiver.t18_1 | 0);
        tmp4_safe_receiver.z18(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_instance;
    }
    var tmp_5;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_0().r17_1))) {
      tmp_5 = $this.u13_1;
    } else {
      tmp_5 = false;
    }
    var forceReplace = tmp_5;
    if ($this.e13_1 == null) {
      var slotKey = $this.d14_1.a19();
      if (!forceReplace && slotKey === key && equals(objectKey, $this.d14_1.c19())) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.e13_1 = new Pending($this.d14_1.b19(), $this.f13_1);
      }
    }
    var pending = $this.e13_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.d19(key, objectKey);
      if (!forceReplace && !(keyInfo == null)) {
        pending.z18(keyInfo);
        var location = keyInfo.h19_1;
        $this.f13_1 = pending.k19(keyInfo) + pending.t18_1 | 0;
        var relativePosition = pending.l19(keyInfo);
        var currentRelativePosition = relativePosition - pending.u18_1 | 0;
        pending.m19(relativePosition, pending.u18_1);
        $this.j14_1.n19(location);
        $this.d14_1.o19(location);
        if (currentRelativePosition > 0) {
          $this.j14_1.p19(currentRelativePosition);
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.d14_1.o18();
        $this.m14_1 = true;
        $this.h14_1 = null;
        ensureWriter($this);
        $this.f14_1.e19();
        var startIndex_0 = $this.f14_1.l17_1;
        if (isNode) {
          $this.f14_1.r18(key, Companion_getInstance().n18_1);
        } else if (!(data == null)) {
          var tmp_6 = $this.f14_1;
          tmp_6.q18(key, objectKey == null ? Companion_getInstance().n18_1 : objectKey, data);
        } else {
          var tmp_7 = $this.f14_1;
          tmp_7.p18(key, objectKey == null ? Companion_getInstance().n18_1 : objectKey);
        }
        $this.k14_1 = $this.f14_1.x17(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.y18(insertKeyInfo_0, $this.f13_1 - pending.t18_1 | 0);
        pending.z18(insertKeyInfo_0);
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$12 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$12, isNode ? 0 : $this.f13_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.d13_1.q19($this.e13_1);
    $this.e13_1 = newPending;
    $this.i13_1.e15($this.g13_1);
    $this.i13_1.e15($this.h13_1);
    $this.i13_1.e15($this.f13_1);
    if (isNode)
      $this.f13_1 = 0;
    $this.g13_1 = 0;
    $this.h13_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.d13_1.o16();
    if (!(previousPending == null) && !inserting) {
      previousPending.u18_1 = previousPending.u18_1 + 1 | 0;
    }
    $this.e13_1 = previousPending;
    $this.f13_1 = $this.i13_1.o16() + expectedNodeCount | 0;
    $this.h13_1 = $this.i13_1.o16();
    $this.g13_1 = $this.i13_1.o16() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    var rGroupIndex = $this.i13_1.r19() - 1 | 0;
    if ($this.m14_1) {
      var parent = $this.f14_1.n17_1;
      var tmp1 = $this.f14_1.z17(parent);
      var tmp3 = $this.f14_1.a18(parent);
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      var data = $this.f14_1.y17(parent);
      if (tmp3 == null)
        if (!(data == null) && tmp1 === 207 && !equals(data, Companion_getInstance().n18_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey = hashCode(data);
          var tmp = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_0 = $this.n14_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_1 = rotateRight(this_0, 3) ^ groupKey;
          tmp.n14_1 = rotateRight(this_1, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_0 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_2 = $this.n14_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_3 = rotateRight(this_2, 3) ^ tmp1;
          tmp_0.n14_1 = rotateRight(this_3, 3);
        }
       else {
        if (tmp3 instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_0 = tmp3.m2_1;
          var tmp_1 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_4 = $this.n14_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_5 = rotateRight(this_4, 3) ^ groupKey_0;
          tmp_1.n14_1 = rotateRight(this_5, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_1 = hashCode(tmp3);
          var tmp_2 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_6 = $this.n14_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_7 = rotateRight(this_6, 3) ^ groupKey_1;
          tmp_2.n14_1 = rotateRight(this_7, 3);
        }
      }
    } else {
      var parent_0 = $this.d14_1.h16_1;
      var tmp6 = $this.d14_1.z17(parent_0);
      var tmp8 = $this.d14_1.a18(parent_0);
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      var data_0 = $this.d14_1.y17(parent_0);
      if (tmp8 == null)
        if (!(data_0 == null) && tmp6 === 207 && !equals(data_0, Companion_getInstance().n18_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_2 = hashCode(data_0);
          var tmp_3 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_8 = $this.n14_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_9 = rotateRight(this_8, 3) ^ groupKey_2;
          tmp_3.n14_1 = rotateRight(this_9, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_4 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_10 = $this.n14_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_11 = rotateRight(this_10, 3) ^ tmp6;
          tmp_4.n14_1 = rotateRight(this_11, 3);
        }
       else {
        if (tmp8 instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_3 = tmp8.m2_1;
          var tmp_5 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_12 = $this.n14_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_13 = rotateRight(this_12, 3) ^ groupKey_3;
          tmp_5.n14_1 = rotateRight(this_13, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_4 = hashCode(tmp8);
          var tmp_6 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_14 = $this.n14_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_15 = rotateRight(this_14, 3) ^ groupKey_4;
          tmp_6.n14_1 = rotateRight(this_15, 3);
        }
      }
    }
    var expectedNodeCount = $this.g13_1;
    var pending = $this.e13_1;
    if (!(pending == null) && pending.s18_1.m() > 0) {
      var previous = pending.s18_1;
      var current = pending.s19();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.m();
      var previousIndex = 0;
      var previousEnd = previous.m();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.p(previousIndex);
        if (!usedKeys.o(previousInfo)) {
          var deleteOffset = pending.k19(previousInfo);
          $this.j14_1.t19(deleteOffset + pending.t18_1 | 0, previousInfo.i19_1);
          pending.u19(previousInfo.h19_1, 0);
          $this.j14_1.n19(previousInfo.h19_1);
          $this.d14_1.o19(previousInfo.h19_1);
          recordDelete($this);
          $this.d14_1.t17();
          removeRange($this.o13_1, previousInfo.h19_1, previousInfo.h19_1 + $this.d14_1.v19(previousInfo.h19_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.o(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.p(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.k19(currentInfo);
            placedKeys.h(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.w19(currentInfo);
              $this.j14_1.x19(nodePosition + pending.t18_1 | 0, nodeOffset + pending.t18_1 | 0, updatedCount);
              pending.y19(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.w19(currentInfo) | 0;
        }
      }
      $this.j14_1.z19();
      if (previous.m() > 0) {
        $this.j14_1.n19($this.d14_1.a1a());
        $this.d14_1.e18();
      }
    }
    var removeIndex = $this.f13_1;
    while (!$this.d14_1.b1a()) {
      var startSlot = $this.d14_1.f16_1;
      recordDelete($this);
      var nodesToRemove = $this.d14_1.t17();
      $this.j14_1.t19(removeIndex, nodesToRemove);
      removeRange($this.o13_1, startSlot, $this.d14_1.f16_1);
    }
    var inserting = $this.m14_1;
    if (inserting) {
      if (isNode) {
        $this.l14_1.h1a();
        expectedNodeCount = 1;
      }
      $this.d14_1.i1a();
      var parentGroup = $this.f14_1.n17_1;
      $this.f14_1.j1a();
      if (!$this.d14_1.m1a()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.f14_1.k1a();
        $this.f14_1.i18(true);
        recordInsert($this, $this.k14_1);
        $this.m14_1 = false;
        if (!$this.y12_1.l1a()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        $this.j14_1.c1a();
      }
      var remainingSlots = $this.d14_1.d1a();
      if (remainingSlots > 0) {
        $this.j14_1.e1a(remainingSlots);
      }
      $this.j14_1.f1a();
      var parentGroup_0 = $this.d14_1.h16_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.d14_1.g1a();
      $this.j14_1.z19();
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.b14_1;
    $this.b14_1 = true;
    var recomposed = false;
    var parent = $this.d14_1.h16_1;
    var end = parent + $this.d14_1.v19(parent) | 0;
    var recomposeIndex = $this.f13_1;
    var recomposeCompoundKey = $this.n14_1;
    var oldGroupNodeCount = $this.g13_1;
    var oldRGroupIndex = $this.h13_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.o13_1, $this.d14_1.f16_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.k12_1;
      removeLocation($this.o13_1, location);
      if (firstInRange_0.m12()) {
        recomposed = true;
        $this.d14_1.o19(location);
        var newGroup = $this.d14_1.f16_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.f13_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.h13_1 = rGroupIndexOf($this, newGroup);
        var newParent = $this.d14_1.w17(newGroup);
        $this.n14_1 = compoundKeyOf($this, newParent, rGroupIndexOf($this, newParent), parent, recomposeCompoundKey);
        $this.h14_1 = null;
        firstInRange_0.j12_1.o1a($this);
        $this.h14_1 = null;
        $this.d14_1.p1a(parent);
      } else {
        $this.a14_1.q19(firstInRange_0.j12_1);
        firstInRange_0.j12_1.n1a();
        $this.a14_1.o16();
      }
      firstInRange_0 = firstInRange($this.o13_1, $this.d14_1.f16_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.d14_1.e18();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.f13_1 = recomposeIndex + parentGroupNodes | 0;
      $this.g13_1 = oldGroupNodeCount + parentGroupNodes | 0;
      $this.h13_1 = oldRGroupIndex;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.n14_1 = recomposeCompoundKey;
    $this.b14_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.d13_1.m() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.d13_1.q1a(pendingIndex);
            if (!(pending == null) && pending.u19(current, newCurrentNodes)) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.d14_1.h16_1;
        } else {
          if ($this.d14_1.r1a(current))
            break $l$loop_0;
          current = $this.d14_1.w17(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.d14_1.w17(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.d14_1.r1a(anchorGroup)) {
      anchorGroup = $this.d14_1.w17(anchorGroup);
    }
    var index = $this.d14_1.r1a(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.d14_1.s1a(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.d14_1.v19(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + ($this.d14_1.r1a(current) ? 1 : updatedNodeCount($this, current)) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function rGroupIndexOf($this, group) {
    var result = 0;
    var parent = $this.d14_1.w17(group);
    var child = parent + 1 | 0;
    while (child < group) {
      if (!$this.d14_1.t1a(child)) {
        result = result + 1 | 0;
      }
      child = child + $this.d14_1.v19(child) | 0;
    }
    return result;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.k13_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.fv(group) ? tmp0_safe_receiver.p(group) : 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.j13_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.d14_1.s1a(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.k13_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = new MutableIntIntMap();
          $this.k13_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        virtualCounts.ev(group, count);
      } else {
        var tmp1_elvis_lhs = $this.j13_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.d14_1.m());
          fill(newCounts_0, -1);
          $this.j13_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.j13_1 = null;
    $this.k13_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.d14_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 && !(current === nearestCommonRoot)) {
      if (reader.r1a(current)) {
        $this.j14_1.c1a();
      }
      current = reader.w17(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 && !(group === nearestCommonRoot)) {
      doRecordDownsFor($this, $this.d14_1.w17(group), nearestCommonRoot);
      if ($this.d14_1.r1a(group)) {
        $this.j14_1.u1a(nodeAt($this.d14_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, rGroupIndex, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.d14_1, $this, group);
      var tmp_0;
      if (groupKey === 126665345) {
        tmp_0 = groupKey;
      } else {
        var parent = $this.d14_1.w17(group);
        var parentKey = parent === recomposeGroup ? recomposeKey : compoundKeyOf($this, parent, rGroupIndexOf($this, parent), recomposeGroup, recomposeKey);
        var effectiveRGroupIndex = $this.d14_1.t1a(group) ? 0 : rGroupIndex;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = rotateLeft(parentKey, 3) ^ groupKey;
        tmp_0 = rotateLeft(this_0, 3) ^ effectiveRGroupIndex;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.t1a(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.a18(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.m2_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = 126665345;
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var it = _this__u8e3s4.z17(group);
      var tmp_2;
      if (it === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.y17(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance().n18_1) ? it : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? it : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = it;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.g13_1 = $this.d14_1.v1a();
    $this.d14_1.e18();
  }
  function addRecomposeScope($this) {
    if ($this.m14_1) {
      var tmp = $this.c13_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.a14_1.q19(scope);
      $this.v17(scope);
      scope.z1a($this.x13_1);
    } else {
      var invalidation = removeLocation($this.o13_1, $this.d14_1.h16_1);
      var slot = $this.d14_1.l();
      var tmp_0;
      if (equals(slot, Companion_getInstance().n18_1)) {
        var tmp_1 = $this.c13_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.v17(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      var tmp_2;
      if (!(invalidation == null)) {
        tmp_2 = true;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = scope_0.w1a();
        // Inline function 'androidx.compose.runtime.ComposerImpl.addRecomposeScope.<anonymous>' call
        if (this_0) {
          scope_0.x1a(false);
        }
        tmp_2 = this_0;
      }
      scope_0.y1a(tmp_2);
      $this.a14_1.q19(scope_0);
      scope_0.z1a($this.x13_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.a1b(126665345, content);
    updateSlot($this, parameter);
    var savedCompoundKeyHash = $this.n14_1;
    try {
      $this.n14_1 = 126665345;
      if ($this.m14_1) {
        $this.f14_1.b1b();
      }
      var providersChanged = $this.m14_1 ? false : !equals($this.d14_1.k18(), locals);
      if (providersChanged) {
        recordProviderUpdate($this, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_0().q17_1, locals);
      $this.h14_1 = null;
      if ($this.m14_1 && !force) {
        $this.g14_1 = true;
        var anchor = $this.f14_1.x17($this.f14_1.w17($this.f14_1.n17_1));
        var reference = new MovableContentStateReference(content, parameter, $this.c13_1, $this.e14_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.x12_1.c1b(reference);
      } else {
        var savedProvidersInvalid = $this.s13_1;
        $this.s13_1 = providersChanged;
        invokeComposable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.s13_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.h14_1 = null;
      $this.n14_1 = savedCompoundKeyHash;
      $this.d1b();
    }
  }
  function insertMovableContentGuarded($this, references) {
    var tmp0 = $this.j14_1;
    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
    var newChangeList = $this.b13_1;
    var previousChangeList = tmp0.m15_1;
    try {
      tmp0.m15_1 = newChangeList;
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>' call
      $this.j14_1.e1b();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.p(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
          var to = item.qe();
          var from = item.re();
          var anchor = to.j1b_1;
          var location = to.i1b_1.m1b(anchor);
          var effectiveNodeIndex = new IntRef();
          $this.j14_1.n1b(effectiveNodeIndex, anchor);
          if (from == null) {
            var toSlotTable = to.i1b_1;
            if (equals(toSlotTable, $this.e14_1)) {
              createFreshInsertTable($this);
            }
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader = to.i1b_1.z14();
            var tmp;
            try {
              reader.o19(location);
              $this.j14_1.s1b(location);
              var offsetChanges = new ChangeList();
              recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda($this, offsetChanges, reader, to));
              $this.j14_1.t1b(offsetChanges, effectiveNodeIndex);
              tmp = Unit_instance;
            }finally {
              reader.n16();
            }
          } else {
            var resolvedState = $this.x12_1.o1b(from);
            var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.p1b_1;
            var fromTable = tmp1_elvis_lhs == null ? from.i1b_1 : tmp1_elvis_lhs;
            var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.p1b_1;
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.x17(0);
            var fromAnchor = tmp4_elvis_lhs == null ? from.j1b_1 : tmp4_elvis_lhs;
            var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!nodesToInsert.q()) {
              $this.j14_1.q1b(nodesToInsert, effectiveNodeIndex);
              if (equals(to.i1b_1, $this.y12_1)) {
                var group = $this.y12_1.m1b(anchor);
                updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.m() | 0);
              }
            }
            $this.j14_1.r1b(resolvedState, $this.x12_1, from, to);
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader_0 = fromTable.z14();
            var tmp_0;
            try {
              $l$block: {
                // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                var savedReader = $this.d14_1;
                var savedCountOverrides = $this.j13_1;
                var savedProviderUpdates = $this.r13_1;
                $this.j13_1 = null;
                $this.r13_1 = null;
                try {
                  $this.d14_1 = reader_0;
                  // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  var newLocation = fromTable.m1b(fromAnchor);
                  reader_0.o19(newLocation);
                  $this.j14_1.s1b(newLocation);
                  var offsetChanges_0 = new ChangeList();
                  // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
                  var this_0 = $this.j14_1;
                  var previousChangeList_0 = this_0.m15_1;
                  try {
                    this_0.m15_1 = offsetChanges_0;
                    // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
                    var this_1 = $this.j14_1;
                    var previousImplicitRootStart = this_1.p15_1;
                    try {
                      this_1.p15_1 = false;
                      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = reader_0.f16_1;
                      var tmp_2 = from.k1b_1;
                      recomposeMovableContent($this, from.h1b_1, to.h1b_1, tmp_1, tmp_2, ComposerImpl$insertMovableContentGuarded$lambda_0($this, to));
                    }finally {
                      this_1.p15_1 = previousImplicitRootStart;
                    }
                  }finally {
                    this_0.m15_1 = previousChangeList_0;
                  }
                  $this.j14_1.t1b(offsetChanges_0, effectiveNodeIndex);
                  break $l$block;
                }finally {
                  $this.d14_1 = savedReader;
                  $this.j13_1 = savedCountOverrides;
                  $this.r13_1 = savedProviderUpdates;
                }
              }
              tmp_0 = Unit_instance;
            }finally {
              reader_0.n16();
            }
          }
          $this.j14_1.u1b();
        }
         while (inductionVariable <= last);
      $this.j14_1.v1b();
      $this.j14_1.s1b(0);
    }finally {
      tmp0.m15_1 = previousChangeList;
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedIsComposing = $this.b14_1;
    var savedNodeIndex = $this.f13_1;
    try {
      $this.b14_1 = true;
      $this.f13_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.p(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.qe();
          var instances = item.re();
          if (!(instances == null)) {
            $this.w1b(scope, instances);
          } else {
            $this.w1b(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (from == null) {
        tmp = null;
      } else {
        tmp = from.x1b(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.b14_1 = savedIsComposing;
      $this.f13_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function doCompose($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.b14_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>' call
      var tmp$ret$0 = 'Reentrant composition is not supported';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp1 = 'Compose:recompose';
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.trace' call
      var token = Trace_instance.y1b(tmp1);
      try {
        // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>' call
        $this.x13_1 = currentSnapshot().d1c();
        $this.r13_1 = null;
        // Inline function 'androidx.collection.ScatterMap.forEach' call
        var this_0 = invalidationsRequested.e1c_1;
        var k = this_0.lx_1;
        var v = this_0.mx_1;
        $l$block_0: {
          // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
          var m = this_0.kx_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                      var tmp = k[index];
                      var tmp1_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      var tmp_0 = v[index];
                      var tmp2 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                      $l$block: {
                        // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
                        if (!(tmp1_0 instanceof RecomposeScopeImpl))
                          THROW_CCE();
                        var tmp0_safe_receiver = tmp1_0.p12_1;
                        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f1c_1;
                        var tmp_1;
                        if (tmp1_elvis_lhs == null) {
                          break $l$block;
                        } else {
                          tmp_1 = tmp1_elvis_lhs;
                        }
                        var location = tmp_1;
                        // Inline function 'kotlin.takeUnless' call
                        var tmp_2;
                        // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>.<anonymous>' call
                        if (!(tmp2 === ScopeInvalidated_instance)) {
                          tmp_2 = tmp2;
                        } else {
                          tmp_2 = null;
                        }
                        var tmp$ret$5 = tmp_2;
                        $this.o13_1.h(new Invalidation(tmp1_0, location, tmp$ret$5));
                      }
                    }
                    slot = slot.a3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block_0;
                }
              }
            }
             while (!(i === lastIndex));
        }
        sortWith($this.o13_1, get_InvalidationLocationAscending());
        $this.f13_1 = 0;
        var complete = false;
        $this.b14_1 = true;
        try {
          startRoot($this);
          var savedContent = $this.u17();
          if (!(savedContent === content) && !(content == null)) {
            $this.v17((content == null ? true : !(content == null)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var observer = $this.z13_1;
          var observers = derivedStateObservers_0();
          try {
            observers.j1c(observer);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, content);
              endGroup($this);
            } else if (($this.m13_1 || $this.s13_1) && !(savedContent == null) && !equals(savedContent, Companion_getInstance().n18_1)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.k1c();
            }
          }finally {
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            var tmp$ret$7 = observers.i1c_1 - 1 | 0;
            observers.b2(tmp$ret$7);
          }
          endRoot($this);
          complete = true;
        }finally {
          $this.b14_1 = false;
          $this.o13_1.y1();
          if (!complete) {
            abortRoot($this);
          }
          createFreshInsertTable($this);
        }
        break $l$block_1;
      }finally {
        Trace_instance.l1c(token);
      }
    }
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.m1c(_this__u8e3s4.h16_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.m1c(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!$this.n13_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $this.n13_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.n13_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected';
      composeImmediateRuntimeError(tmp$ret$0);
    }
  }
  function recordInsert($this, anchor) {
    if ($this.l14_1.q()) {
      $this.j14_1.o1c(anchor, $this.e14_1);
    } else {
      $this.j14_1.n1c(anchor, $this.e14_1, $this.l14_1);
      $this.l14_1 = new FixupList();
    }
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.d14_1.f16_1);
    $this.j14_1.p1c();
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    $this.j14_1.z19();
  }
  function reportAllMovableContent($this) {
    if ($this.y12_1.r1c()) {
      var changes = new ChangeList();
      $this.i14_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var reader = $this.y12_1.z14();
      var tmp;
      try {
        $this.d14_1 = reader;
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
        var this_0 = $this.j14_1;
        var previousChangeList = this_0.m15_1;
        try {
          this_0.m15_1 = changes;
          // Inline function 'androidx.compose.runtime.ComposerImpl.reportAllMovableContent.<anonymous>.<anonymous>' call
          reportFreeMovableContent($this, 0);
          $this.j14_1.q1c();
        }finally {
          this_0.m15_1 = previousChangeList;
        }
        tmp = Unit_instance;
      }finally {
        reader.n16();
      }
    }
  }
  function finalizeCompose($this) {
    $this.j14_1.s1c();
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!$this.d13_1.q()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var tmp$ret$0 = 'Start/end imbalance';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.e13_1 = null;
    $this.f13_1 = 0;
    $this.g13_1 = 0;
    $this.n14_1 = 0;
    $this.n13_1 = false;
    $this.j14_1.t1c();
    $this.a14_1.y1();
    clearUpdatedNodeCounts($this);
  }
  function CompositionContextHolder() {
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var reader = this$0.d14_1;
    var tmp;
    if (reader.k1d(group)) {
      var key = reader.z17(group);
      var objectKey = reader.a18(group);
      var tmp_0;
      var tmp_1;
      if (key === 126665345) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = reader.v1c(group, 0);
        var anchor = reader.x17(group);
        var end = group + reader.v19(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var this_0 = filterToRange(this$0.o13_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(this_0.m());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.m() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.p(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            var element = to(item.j12_1, item.l12_1);
            target.h(element);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.c13_1, this$0.y12_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.x12_1.g1d(reference);
        this$0.j14_1.h1d();
        this$0.j14_1.i1d(this$0.c13_1, this$0.x12_1, reference);
        var tmp_2;
        if (needsNodeDelete) {
          this$0.j14_1.j1d(nodeIndex, group);
          tmp_2 = 0;
        } else {
          tmp_2 = reader.s1a(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 && equals(objectKey, get_reference())) {
          var tmp_3 = reader.v1c(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.w1c_1;
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s = compositionContext.c1d_1.j();
            while (_iterator__ex2g4s.k()) {
              var element_0 = _iterator__ex2g4s.l();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element_0);
              this$0.x12_1.f1d(element_0.c13_1);
            }
          }
          tmp_0 = reader.s1a(group);
        } else {
          if (reader.r1a(group)) {
            tmp_0 = 1;
          } else {
            tmp_0 = reader.s1a(group);
          }
        }
      }
      tmp = tmp_0;
    } else if (reader.u1c(group)) {
      var size = reader.v19(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = reader.r1a(current);
        if (isNode) {
          this$0.j14_1.z19();
          this$0.j14_1.u1a(reader.m1c(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode || needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          this$0.j14_1.z19();
          this$0.j14_1.c1a();
        }
        current = current + reader.v19(current) | 0;
      }
      tmp = reader.r1a(group) ? 1 : runningNodeCount;
    } else if (reader.r1a(group)) {
      tmp = 1;
    } else {
      tmp = reader.s1a(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.l1d_1 = this$0;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C3293@126183L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:3293)');
        }
        $content.n1d_1($parameter, $composer_0, 0);
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
  function ComposerImpl$insertMovableContentGuarded$lambda(this$0, $offsetChanges, $reader, $to) {
    return function () {
      var tmp0 = this$0.j14_1;
      var newChangeList = $offsetChanges;
      var previousChangeList = tmp0.m15_1;
      var tmp;
      try {
        tmp0.m15_1 = newChangeList;
        var tmp0_0 = this$0;
        var tmp1 = $reader;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
          var savedReader = tmp0_0.d14_1;
          var savedCountOverrides = tmp0_0.j13_1;
          var savedProviderUpdates = tmp0_0.r13_1;
          tmp0_0.j13_1 = null;
          tmp0_0.r13_1 = null;
          try {
            tmp0_0.d14_1 = tmp1;
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
            var this_0 = this$0.j14_1;
            var previousImplicitRootStart = this_0.p15_1;
            try {
              this_0.p15_1 = false;
              // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              invokeMovableContentLambda(this$0, $to.f1b_1, $to.l1b_1, $to.g1b_1, true);
            }finally {
              this_0.p15_1 = previousImplicitRootStart;
            }
            break $l$block;
          }finally {
            tmp0_0.d14_1 = savedReader;
            tmp0_0.j13_1 = savedCountOverrides;
            tmp0_0.r13_1 = savedProviderUpdates;
          }
        }
        tmp = Unit_instance;
      }finally {
        tmp0.m15_1 = previousChangeList;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.f1b_1, $to.l1b_1, $to.g1b_1, true);
      return Unit_instance;
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.w12_1 = applier;
    this.x12_1 = parentContext;
    this.y12_1 = slotTable;
    this.z12_1 = abandonSet;
    this.a13_1 = changes;
    this.b13_1 = lateChanges;
    this.c13_1 = composition;
    this.d13_1 = new Stack();
    this.e13_1 = null;
    this.f13_1 = 0;
    this.g13_1 = 0;
    this.h13_1 = 0;
    this.i13_1 = new IntStack();
    this.j13_1 = null;
    this.k13_1 = null;
    this.l13_1 = false;
    this.m13_1 = false;
    this.n13_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o13_1 = ArrayList_init_$Create$();
    this.p13_1 = new IntStack();
    this.q13_1 = persistentCompositionLocalHashMapOf();
    this.r13_1 = null;
    this.s13_1 = false;
    this.t13_1 = new IntStack();
    this.u13_1 = false;
    this.v13_1 = -1;
    this.w13_1 = 0;
    this.x13_1 = 0;
    this.y13_1 = this.x12_1.h15() || this.x12_1.h18();
    var tmp_0 = this;
    tmp_0.z13_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.a14_1 = new Stack();
    this.b14_1 = false;
    this.c14_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.y12_1.z14();
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    this_0.n16();
    tmp_1.d14_1 = this_0;
    var tmp_2 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new SlotTable();
    // Inline function 'androidx.compose.runtime.ComposerImpl.insertTable.<anonymous>' call
    if (this.x12_1.h15()) {
      this_1.f18();
    }
    if (this.x12_1.h18()) {
      this_1.g18();
    }
    tmp_2.e14_1 = this_1;
    var tmp_3 = this;
    // Inline function 'kotlin.also' call
    var this_2 = this.e14_1.d18();
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    this_2.i18(true);
    tmp_3.f14_1 = this_2;
    this.g14_1 = false;
    this.h14_1 = null;
    this.i14_1 = null;
    this.j14_1 = new ComposerChangeListWriter(this, this.a13_1);
    var tmp_4 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = this.e14_1.z14();
    var tmp_5;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_5 = reader.x17(0);
    }finally {
      reader.n16();
    }
    tmp_4.k14_1 = tmp_5;
    this.l14_1 = new FixupList();
    this.m14_1 = false;
    this.n14_1 = 0;
  }
  protoOf(ComposerImpl).p1d = function () {
    return this.w12_1;
  };
  protoOf(ComposerImpl).q1d = function () {
    return this.w13_1 > 0;
  };
  protoOf(ComposerImpl).r1d = function () {
    return this.x12_1.s1d();
  };
  protoOf(ComposerImpl).t1d = function (key) {
    return start(this, key, null, Companion_getInstance_0().q17_1, null);
  };
  protoOf(ComposerImpl).u1d = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).v1d = function (key) {
    var pending = this.e13_1;
    if (!(pending == null)) {
      start(this, key, null, Companion_getInstance_0().q17_1, null);
      return Unit_instance;
    }
    validateNodeNotExpected(this);
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
    var rGroupIndex = this.h13_1;
    if (null == null)
      if (!(null == null) && key === 207 && !equals(null, Companion_getInstance().n18_1)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash = hashCode(null);
        var tmp = this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = this.n14_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_1 = rotateLeft(this_0, 3) ^ keyHash;
        tmp.n14_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var tmp_0 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_2 = this.n14_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_3 = rotateLeft(this_2, 3) ^ key;
        tmp_0.n14_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
      }
     else {
      if (null instanceof Enum) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_0 = null.m2_1;
        var tmp_1 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_4 = this.n14_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
        tmp_1.n14_1 = rotateLeft(this_5, 3) ^ 0;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_1 = hashCode(null);
        var tmp_2 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_6 = this.n14_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
        tmp_2.n14_1 = rotateLeft(this_7, 3) ^ 0;
      }
    }
    this.h13_1 = this.h13_1 + 1 | 0;
    var reader = this.d14_1;
    if (this.m14_1) {
      reader.o18();
      this.f14_1.p18(key, Companion_getInstance().n18_1);
      enterGroup(this, false, null);
      return Unit_instance;
    }
    var slotKey = reader.a19();
    if (slotKey === key && !reader.w1d()) {
      reader.l18();
      enterGroup(this, false, null);
      return Unit_instance;
    }
    if (!reader.b1a()) {
      var removeIndex = this.f13_1;
      var startSlot = reader.f16_1;
      recordDelete(this);
      var nodesToRemove = reader.t17();
      this.j14_1.t19(removeIndex, nodesToRemove);
      removeRange(this.o13_1, startSlot, reader.f16_1);
    }
    reader.o18();
    this.m14_1 = true;
    this.h14_1 = null;
    ensureWriter(this);
    var writer = this.f14_1;
    writer.e19();
    var startIndex = writer.l17_1;
    writer.p18(key, Companion_getInstance().n18_1);
    this.k14_1 = writer.x17(startIndex);
    enterGroup(this, false, null);
  };
  protoOf(ComposerImpl).x1d = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).y1d = function () {
    return start(this, -127, null, Companion_getInstance_0().q17_1, null);
  };
  protoOf(ComposerImpl).z1d = function () {
    endGroup(this);
    var scope = this.a1e();
    if (!(scope == null) && scope.s19()) {
      scope.b1e(true);
    }
  };
  protoOf(ComposerImpl).c1e = function () {
    var tmp;
    if (!this.o1d() || this.s13_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.a1e();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1e()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).a1b = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_0().q17_1, null);
  };
  protoOf(ComposerImpl).d1b = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).d1e = function () {
    this.r13_1 = null;
  };
  protoOf(ComposerImpl).e1e = function () {
    return this.m14_1;
  };
  protoOf(ComposerImpl).o1d = function () {
    var tmp;
    var tmp_0;
    if (!this.m14_1 && !this.u13_1 && !this.s13_1) {
      var tmp0_safe_receiver = this.a1e();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f1e()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.m13_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).m18 = function () {
    start(this, 125, null, Companion_getInstance_0().r17_1, null);
    this.n13_1 = true;
  };
  protoOf(ComposerImpl).g1e = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.m14_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var tmp$ret$0 = 'createNode() can only be called when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var insertIndex = this.i13_1.h1e();
    var groupAnchor = this.f14_1.x17(this.f14_1.n17_1);
    this.g13_1 = this.g13_1 + 1 | 0;
    this.l14_1.i1e(factory, insertIndex, groupAnchor);
  };
  protoOf(ComposerImpl).j1e = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.m14_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var tmp$ret$0 = 'useNode() called while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var node = _get_node__db0vwp(this.d14_1, this);
    this.j14_1.u1a(node);
    var tmp;
    if (this.u13_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.j14_1.k1e(node);
    }
  };
  protoOf(ComposerImpl).l1e = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).m1e = function (value, block) {
    if (this.m14_1) {
      this.l14_1.o1e(value, block);
    } else {
      this.j14_1.n1e(value, block);
    }
  };
  protoOf(ComposerImpl).u17 = function () {
    var tmp;
    if (this.m14_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance().n18_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      var it = this.d14_1.l();
      var tmp_0;
      var tmp_1;
      if (this.u13_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance().n18_1;
      } else {
        tmp_0 = it;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).p1e = function () {
    var tmp;
    if (this.m14_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance().n18_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlotForCache.<anonymous>' call
      var it = this.d14_1.l();
      var tmp_0;
      var tmp_1;
      if (this.u13_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance().n18_1;
      } else {
        if (it instanceof RememberObserverHolder) {
          tmp_0 = it.q1e_1;
        } else {
          tmp_0 = it;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).f15 = function (value) {
    var tmp;
    if (!equals(this.u17(), value)) {
      this.v17(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).s1e = function (value) {
    var tmp;
    if (!(this.u17() === value)) {
      this.v17(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).t1e = function (value) {
    var next = this.u17();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.v17(value);
    return true;
  };
  protoOf(ComposerImpl).u1e = function (value) {
    var next = this.u17();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.v17(value);
    return true;
  };
  protoOf(ComposerImpl).v1e = function (value) {
    var next = this.u17();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.v17(value);
    return true;
  };
  protoOf(ComposerImpl).v17 = function (value) {
    if (this.m14_1) {
      this.f14_1.b1f(value);
    } else {
      if (this.d14_1.m16_1) {
        var groupSlotIndex = this.d14_1.x1e() - 1 | 0;
        if (this.j14_1.a1f()) {
          this.j14_1.z1e(value, this.d14_1.x17(this.d14_1.h16_1), groupSlotIndex);
        } else {
          this.j14_1.y1e(value, groupSlotIndex);
        }
      } else {
        this.j14_1.w1e(this.d14_1.x17(this.d14_1.h16_1), value);
      }
    }
  };
  protoOf(ComposerImpl).c1f = function (value) {
    var tmp;
    if (!(value == null) ? isInterface(value, RememberObserver) : false) {
      if (this.m14_1) {
        this.j14_1.d1f(value);
      }
      this.z12_1.h(value);
      tmp = new RememberObserverHolder(value, rememberObserverAnchor(this));
    } else {
      tmp = value;
    }
    var toStore = tmp;
    this.v17(toStore);
  };
  protoOf(ComposerImpl).e1f = function (value) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.startProvider.<anonymous>' call
    var it = this.f1f();
    var tmp;
    if (equals(it, Companion_getInstance().n18_1)) {
      tmp = null;
    } else {
      tmp = (!(it == null) ? isInterface(it, ValueHolder) : false) ? it : THROW_CCE();
    }
    var oldState = tmp;
    var tmp_0 = value.g1f_1;
    var local = tmp_0 instanceof CompositionLocal ? tmp_0 : THROW_CCE();
    var state = local.p1f(value instanceof ProvidedValue ? value : THROW_CCE(), oldState);
    var change = !equals(state, oldState);
    if (change) {
      this.q1f(state);
    }
    var providers;
    var invalid;
    if (this.m14_1) {
      var tmp_1;
      if (value.n1f_1 || !contains_0(parentScope, local)) {
        tmp_1 = parentScope.r1f(local, state);
      } else {
        tmp_1 = parentScope;
      }
      providers = tmp_1;
      invalid = false;
      this.g14_1 = true;
    } else {
      var tmp_2 = this.d14_1.y17(this.d14_1.f16_1);
      var oldScope = (!(tmp_2 == null) ? isInterface(tmp_2, PersistentCompositionLocalMap) : false) ? tmp_2 : THROW_CCE();
      providers = (!this.o1d() || change) && (value.n1f_1 || !contains_0(parentScope, local)) ? parentScope.r1f(local, state) : oldScope;
      invalid = this.u13_1 || !(oldScope === providers);
    }
    if (invalid && !this.m14_1) {
      recordProviderUpdate(this, providers);
    }
    this.t13_1.e15(asInt(this.s13_1));
    this.s13_1 = invalid;
    this.h14_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_0().q17_1, providers);
  };
  protoOf(ComposerImpl).s1f = function () {
    endGroup(this);
    endGroup(this);
    this.s13_1 = asBool(this.t13_1.o16());
    this.h14_1 = null;
  };
  protoOf(ComposerImpl).t1f = function (key) {
    return read(currentCompositionLocalScope(this), key);
  };
  protoOf(ComposerImpl).a1e = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    var it = this.a14_1;
    return this.w13_1 === 0 && it.hz() ? it.h1e() : null;
  };
  protoOf(ComposerImpl).w1b = function (scope, instance) {
    var tmp0_elvis_lhs = scope.p12_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.d14_1.y15_1;
    var location = anchor.u1f(slotTable);
    if (this.b14_1 && location >= this.d14_1.f16_1) {
      insertIfMissing(this.o13_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).k1c = function () {
    if (this.o13_1.q()) {
      skipGroup(this);
    } else {
      var reader = this.d14_1;
      var key = reader.a19();
      var dataKey = reader.c19();
      var aux = reader.k18();
      var rGroupIndex = this.h13_1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
      if (dataKey == null)
        if (!(aux == null) && key === 207 && !equals(aux, Companion_getInstance().n18_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash = hashCode(aux);
          var tmp = this;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_0 = this.n14_1;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_1 = rotateLeft(this_0, 3) ^ keyHash;
          tmp.n14_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var tmp_0 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_2 = this.n14_1;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_3 = rotateLeft(this_2, 3) ^ key;
          tmp_0.n14_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash_0 = dataKey.m2_1;
          var tmp_1 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_4 = this.n14_1;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
          tmp_1.n14_1 = rotateLeft(this_5, 3) ^ 0;
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash_1 = hashCode(dataKey);
          var tmp_2 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_6 = this.n14_1;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
          tmp_2.n14_1 = rotateLeft(this_7, 3) ^ 0;
        }
      }
      startReaderGroup(this, reader.v1f(), null);
      recomposeToGroupEnd(this);
      reader.g1a();
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      if (dataKey == null)
        if (!(aux == null) && key === 207 && !equals(aux, Companion_getInstance().n18_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey = hashCode(aux);
          var tmp_3 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_8 = this.n14_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_9 = rotateRight(this_8, 3) ^ groupKey;
          tmp_3.n14_1 = rotateRight(this_9, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_4 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_10 = this.n14_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_11 = rotateRight(this_10, 3) ^ key;
          tmp_4.n14_1 = rotateRight(this_11, 3);
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_0 = dataKey.m2_1;
          var tmp_5 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_12 = this.n14_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_13 = rotateRight(this_12, 3) ^ groupKey_0;
          tmp_5.n14_1 = rotateRight(this_13, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_1 = hashCode(dataKey);
          var tmp_6 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_14 = this.n14_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_15 = rotateRight(this_14, 3) ^ groupKey_1;
          tmp_6.n14_1 = rotateRight(this_15, 3);
        }
      }
    }
  };
  protoOf(ComposerImpl).e18 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.g13_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var tmp$ret$0 = 'No nodes can be emitted before calling skipAndEndGroup';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp0_safe_receiver = this.a1e();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w1f();
    }
    if (this.o13_1.q()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).x1f = function (key) {
    this.v1d(key);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).y1f = function () {
    var scope = this.a14_1.hz() ? this.a14_1.o16() : null;
    if (scope != null) {
      scope.y1a(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.z1f(this.x13_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.endRestartGroup.<anonymous>' call
      this.j14_1.a1g(tmp2_safe_receiver, this.c13_1);
    }
    var tmp;
    if (!(scope == null) && !scope.c1g() && (scope.s19() || this.l13_1)) {
      if (scope.p12_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.m14_1) {
          tmp_1 = this.f14_1.x17(this.f14_1.n17_1);
        } else {
          tmp_1 = this.d14_1.x17(this.d14_1.h16_1);
        }
        tmp_0.p12_1 = tmp_1;
      }
      scope.b1g(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).d1g = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).e1g = function (sourceInformation) {
    if (this.m14_1 && this.y13_1) {
      this.f14_1.f1g(sourceInformation);
    }
  };
  protoOf(ComposerImpl).g1g = function (key, sourceInformation) {
    if (this.m14_1 && this.y13_1) {
      this.f14_1.h1g(key, sourceInformation);
    }
  };
  protoOf(ComposerImpl).i1g = function () {
    if (this.m14_1 && this.y13_1) {
      this.f14_1.j1g();
    }
  };
  protoOf(ComposerImpl).k1g = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.a13_1.q()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent.<anonymous>' call
      var tmp$ret$0 = 'Expected applyChanges() to have been called';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    doCompose(this, invalidationsRequested, content);
  };
  protoOf(ComposerImpl).m1g = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.b14_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var tmp$ret$0 = 'Preparing a composition while composing is not supported';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.b14_1 = true;
    try {
      block();
    }finally {
      this.b14_1 = false;
    }
  };
  protoOf(ComposerImpl).n1g = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.a13_1.q()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var tmp$ret$0 = 'Expected applyChanges() to have been called';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.m() > 0) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.o13_1.q();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.m13_1;
    }
    if (tmp) {
      doCompose(this, invalidationsRequested, null);
      return this.a13_1.hz();
    }
    return false;
  };
  protoOf(ComposerImpl).o1g = function () {
    return this.a1e();
  };
  protoOf(ComposerImpl).f1f = function () {
    return this.p1e();
  };
  protoOf(ComposerImpl).q1f = function (value) {
    return this.c1f(value);
  };
  protoOf(ComposerImpl).p1g = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.q1g(true);
    }
  };
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.n18_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_instance;
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'androidx.compose.runtime.SlotWriter.forAllData' call
    var group = _this__u8e3s4.l17_1;
    var address = access$groupIndexToAddress(_this__u8e3s4, group);
    var start = access$dataIndex(_this__u8e3s4, access$_get_groups__7d4n3r(_this__u8e3s4), address);
    var end = access$dataIndex(_this__u8e3s4, access$_get_groups__7d4n3r(_this__u8e3s4), access$groupIndexToAddress(_this__u8e3s4, _this__u8e3s4.l17_1 + _this__u8e3s4.v19(_this__u8e3s4.l17_1) | 0));
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.removeCurrentGroup.<anonymous>' call
        var slot_0 = access$_get_slots__7x4q9w(_this__u8e3s4)[access$dataIndexToDataAddress(_this__u8e3s4, slot)];
        if (!(slot_0 == null) ? isInterface(slot_0, ComposeNodeLifecycleCallback) : false) {
          var endRelativeOrder = _this__u8e3s4.r1g() - slot | 0;
          rememberManager.s1g(slot_0, endRelativeOrder, -1, -1);
        }
        if (slot_0 instanceof RememberObserverHolder) {
          var endRelativeSlotIndex = _this__u8e3s4.r1g() - slot | 0;
          // Inline function 'androidx.compose.runtime.withAfterAnchorInfo' call
          var anchor = slot_0.r1e_1;
          var priority = -1;
          var endRelativeAfter = -1;
          if (!(anchor == null) && anchor.u1g()) {
            priority = _this__u8e3s4.m1b(anchor);
            endRelativeAfter = _this__u8e3s4.r1g() - _this__u8e3s4.t1g(priority) | 0;
          }
          var tmp2 = priority;
          // Inline function 'androidx.compose.runtime.removeCurrentGroup.<anonymous>.<anonymous>' call
          var endRelativeAfter_0 = endRelativeAfter;
          rememberManager.v1g(slot_0.q1e_1, endRelativeSlotIndex, tmp2, endRelativeAfter_0);
        }
        if (slot_0 instanceof RecomposeScopeImpl) {
          slot_0.w1g();
        }
      }
       while (inductionVariable < end);
    _this__u8e3s4.x1g();
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.f1b_1 = content;
    this.g1b_1 = parameter;
    this.h1b_1 = composition;
    this.i1b_1 = slotTable;
    this.j1b_1 = anchor;
    this.k1b_1 = invalidations;
    this.l1b_1 = locals;
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!value) {
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      var tmp$ret$0 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$0);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function MovableContentState(slotTable) {
    this.p1b_1 = slotTable;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.e1g(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    var it = get_compositionTracer();
    return !(it == null) && it.y1g();
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1g(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a1h();
    }
  }
  function MovableContent() {
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.b1h_1 = message;
  }
  protoOf(ComposeRuntimeError).e1 = function () {
    return this.b1h_1;
  };
  function ProvidedValue(compositionLocal, value, explicitNull, mutationPolicy, state, compute, isDynamic) {
    this.g1f_1 = compositionLocal;
    this.h1f_1 = explicitNull;
    this.i1f_1 = mutationPolicy;
    this.j1f_1 = state;
    this.k1f_1 = compute;
    this.l1f_1 = isDynamic;
    this.m1f_1 = value;
    this.n1f_1 = true;
  }
  protoOf(ProvidedValue).e2 = function () {
    var tmp = this.m1f_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ProvidedValue).c1h = function () {
    var tmp;
    if (this.h1f_1) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else if (!(this.j1f_1 == null)) {
      tmp = this.j1f_1.e2();
    } else if (!(this.m1f_1 == null)) {
      tmp = this.m1f_1;
    } else {
      composeRuntimeError('Unexpected form of a provided value');
    }
    return tmp;
  };
  protoOf(ProvidedValue).d1h = function () {
    return (this.h1f_1 || !(this.e2() == null)) && !this.l1f_1;
  };
  function RememberObserverHolder(wrapped, after) {
    this.q1e_1 = wrapped;
    this.r1e_1 = after;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableScatterMultiMap(multiMap(this$0.s18_1.m()));
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var it = this_0.e1h_1;
      var inductionVariable = 0;
      var last = this$0.s18_1.m();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.s18_1.p(index);
          MutableScatterMultiMap__put_impl_1qpnrt(it, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      var tmp$ret$0 = this_0.e1h_1;
      return new MutableScatterMultiMap(tmp$ret$0);
    };
  }
  function Pending(keyInfos, startIndex) {
    this.s18_1 = keyInfos;
    this.t18_1 = startIndex;
    this.u18_1 = 0;
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.t18_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var tmp$ret$0 = 'Invalid start index';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.v18_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    var result = new MutableIntObjectMap();
    var inductionVariable = 0;
    var last = this.s18_1.m();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.s18_1.p(index);
        result.bw(keyInfo.h19_1, new GroupInfo(index, runningNodeIndex, keyInfo.i19_1));
        runningNodeIndex = runningNodeIndex + keyInfo.i19_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.w18_1 = result;
    var tmp_1 = this;
    tmp_1.x18_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).f1h = function () {
    var tmp0 = this.x18_1;
    // Inline function 'kotlin.getValue' call
    keyMap$factory();
    return tmp0.e2().e1h_1;
  };
  protoOf(Pending).d19 = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return MutableScatterMultiMap__pop_impl_h6qh61(this.f1h(), joinedKey);
  };
  protoOf(Pending).z18 = function (keyInfo) {
    return this.v18_1.h(keyInfo);
  };
  protoOf(Pending).s19 = function () {
    return this.v18_1;
  };
  protoOf(Pending).m19 = function (from, to) {
    if (from > to) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_0 = this.w18_1;
      var v = this_0.sv_1;
      $l$block: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m = this_0.qv_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    var tmp = v[index];
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
                    var group = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var position = group.g1h_1;
                    if (position === from)
                      group.g1h_1 = to;
                    else if (to <= position ? position < from : false)
                      group.g1h_1 = position + 1 | 0;
                  }
                  slot = slot.a3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    } else if (to > from) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_2 = this.w18_1;
      var v_0 = this_2.sv_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m_0 = this_2.qv_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.c3(this_3.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    var tmp_0 = v_0[index_0];
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
                    var group_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    var position_0 = group_0.g1h_1;
                    if (position_0 === from)
                      group_0.g1h_1 = to;
                    else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
                      group_0.g1h_1 = position_0 - 1 | 0;
                  }
                  slot_0 = slot_0.a3(8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
  };
  protoOf(Pending).y19 = function (from, to, count) {
    if (from > to) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_0 = this.w18_1;
      var v = this_0.sv_1;
      $l$block: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m = this_0.qv_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    var tmp = v[index];
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
                    var group = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var position = group.h1h_1;
                    if (from <= position ? position < (from + count | 0) : false)
                      group.h1h_1 = to + (position - from | 0) | 0;
                    else if (to <= position ? position < from : false)
                      group.h1h_1 = position + count | 0;
                  }
                  slot = slot.a3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    } else if (to > from) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_2 = this.w18_1;
      var v_0 = this_2.sv_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m_0 = this_2.qv_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.c3(this_3.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    var tmp_0 = v_0[index_0];
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
                    var group_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    var position_0 = group_0.h1h_1;
                    if (from <= position_0 ? position_0 < (from + count | 0) : false)
                      group_0.h1h_1 = to + (position_0 - from | 0) | 0;
                    else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
                      group_0.h1h_1 = position_0 - count | 0;
                  }
                  slot_0 = slot_0.a3(8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
  };
  protoOf(Pending).y18 = function (keyInfo, insertIndex) {
    this.w18_1.bw(keyInfo.h19_1, new GroupInfo(-1, insertIndex, 0));
  };
  protoOf(Pending).u19 = function (group, newCount) {
    var groupInfo = this.w18_1.p(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.h1h_1;
      var difference = newCount - groupInfo.i1h_1 | 0;
      groupInfo.i1h_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
        var this_0 = this.w18_1;
        var v = this_0.sv_1;
        $l$block: {
          // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
          var m = this_0.qv_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index_0 = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                      var tmp = v[index_0];
                      // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
                      var childGroupInfo = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (childGroupInfo.h1h_1 >= index && !equals(childGroupInfo, groupInfo)) {
                        var newIndex = childGroupInfo.h1h_1 + difference | 0;
                        if (newIndex >= 0)
                          childGroupInfo.h1h_1 = newIndex;
                      }
                    }
                    slot = slot.a3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).l19 = function (keyInfo) {
    var tmp0_safe_receiver = this.w18_1.p(keyInfo.h19_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g1h_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).k19 = function (keyInfo) {
    var tmp0_safe_receiver = this.w18_1.p(keyInfo.h19_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1h_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).w19 = function (keyInfo) {
    var tmp0_safe_receiver = this.w18_1.p(keyInfo.h19_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i1h_1;
    return tmp1_elvis_lhs == null ? keyInfo.i19_1 : tmp1_elvis_lhs;
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.q17_1 = _GroupKind___init__impl__iwqg06(0);
    this.r17_1 = _GroupKind___init__impl__iwqg06(1);
    this.s17_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.m()) {
      var validation = _this__u8e3s4.p(index);
      if (validation.k12_1 < end) {
        _this__u8e3s4.b2(index);
      } else
        break $l$loop;
    }
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function ReusableRememberObserver() {
  }
  function get_isAfterFirstChild(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.l17_1 > (_this__u8e3s4.n17_1 + 1 | 0);
  }
  function get_isAfterFirstChild_0(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.f16_1 > (_this__u8e3s4.h16_1 + 1 | 0);
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.m()) {
      var firstInvalidation = _this__u8e3s4.p(index);
      if (firstInvalidation.k12_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.b2(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common || b === common)
      return common;
    if (_this__u8e3s4.w17(a) === b)
      return b;
    if (_this__u8e3s4.w17(b) === a)
      return a;
    if (_this__u8e3s4.w17(a) === _this__u8e3s4.w17(b))
      return _this__u8e3s4.w17(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var times = aDistance - bDistance | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.w17(currentA);
      }
       while (inductionVariable < times);
    // Inline function 'kotlin.repeat' call
    var times_0 = bDistance - aDistance | 0;
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.w17(currentB);
      }
       while (inductionVariable_0 < times_0);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.w17(currentA);
      currentB = _this__u8e3s4.w17(currentB);
    }
    return currentA;
  }
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
      if (!(instance == null) ? isInterface(instance, DerivedState) : false) {
        tmp_0 = instance;
      } else {
        tmp_0 = null;
      }
      var tmp$ret$1 = tmp_0;
      _this__u8e3s4.a2(tmp, new Invalidation(scope, location, tmp$ret$1));
    } else {
      var invalidation = _this__u8e3s4.p(index);
      if (!(instance == null) ? isInterface(instance, DerivedState) : false) {
        var oldInstance = invalidation.l12_1;
        if (oldInstance == null)
          invalidation.l12_1 = instance;
        else {
          if (oldInstance instanceof MutableScatterSet) {
            if (!(oldInstance instanceof MutableScatterSet))
              THROW_CCE();
            oldInstance.h(instance);
          } else {
            invalidation.l12_1 = mutableScatterSetOf(oldInstance, instance);
          }
        }
      } else {
        invalidation.l12_1 = null;
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = _this__u8e3s4.z14();
    var tmp;
    try {
      var index = _this__u8e3s4.m1b(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(reader, result, index);
      tmp = Unit_instance;
    }finally {
      reader.n16();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.m()) {
      var invalidation = _this__u8e3s4.p(index);
      if (invalidation.k12_1 < end) {
        result.h(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function composeImmediateRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.g1h_1 = slotIndex;
    this.h1h_1 = nodeIndex;
    this.i1h_1 = nodeCount;
  }
  function _MutableScatterMultiMap___init__impl__s8ohqe(map) {
    return map;
  }
  function _MutableScatterMultiMap___get_map__impl__38gkgh($this) {
    return $this;
  }
  function MutableScatterMultiMap__put_impl_1qpnrt($this, key, value) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = _MutableScatterMultiMap___get_map__impl__38gkgh($this);
    var index = this_0.wx(key);
    var inserting = index < 0;
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.mx_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    // Inline function 'androidx.compose.runtime.MutableScatterMultiMap.put.<anonymous>' call
    var previous = tmp;
    var tmp_1;
    if (previous == null) {
      tmp_1 = value;
    } else {
      if (!(previous == null) ? isInterface(previous, KtMutableList) : false) {
        var list = (!(previous == null) ? isInterface(previous, KtMutableList) : false) ? previous : THROW_CCE();
        list.h(value);
        tmp_1 = list;
      } else {
        tmp_1 = mutableListOf([previous, value]);
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.lx_1[insertionIndex] = key;
      this_0.mx_1[insertionIndex] = computedValue;
    } else {
      this_0.mx_1[index] = computedValue;
    }
  }
  function MutableScatterMultiMap__pop_impl_h6qh61($this, key) {
    var tmp0_safe_receiver = _MutableScatterMultiMap___get_map__impl__38gkgh($this).h2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.MutableScatterMultiMap.pop.<anonymous>' call
      var tmp_0;
      if (isInterface(tmp0_safe_receiver, KtMutableList)) {
        var list = isInterface(tmp0_safe_receiver, KtMutableList) ? tmp0_safe_receiver : THROW_CCE();
        var result = list.b2(0);
        if (list.q()) {
          _MutableScatterMultiMap___get_map__impl__38gkgh($this).z4(key);
        }
        tmp_0 = result;
      } else {
        _MutableScatterMultiMap___get_map__impl__38gkgh($this).z4(key);
        tmp_0 = tmp0_safe_receiver;
      }
      var tmp_1 = tmp_0;
      tmp = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
    }
    return tmp;
  }
  function MutableScatterMultiMap__toString_impl_ksvnwa($this) {
    return 'MutableScatterMultiMap(map=' + $this.toString() + ')';
  }
  function MutableScatterMultiMap__hashCode_impl_sh2h9z($this) {
    return $this.hashCode();
  }
  function MutableScatterMultiMap__equals_impl_j6710t($this, other) {
    if (!(other instanceof MutableScatterMultiMap))
      return false;
    var tmp0_other_with_cast = other instanceof MutableScatterMultiMap ? other.e1h_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function MutableScatterMultiMap(map) {
    this.e1h_1 = map;
  }
  protoOf(MutableScatterMultiMap).toString = function () {
    return MutableScatterMultiMap__toString_impl_ksvnwa(this.e1h_1);
  };
  protoOf(MutableScatterMultiMap).hashCode = function () {
    return MutableScatterMultiMap__hashCode_impl_sh2h9z(this.e1h_1);
  };
  protoOf(MutableScatterMultiMap).equals = function (other) {
    return MutableScatterMultiMap__equals_impl_j6710t(this.e1h_1, other);
  };
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.g19_1 == null) ? new JoinedKey(_this__u8e3s4.f19_1, _this__u8e3s4.g19_1) : _this__u8e3s4.f19_1;
  }
  function multiMap(initialCapacity) {
    _init_properties_Composer_kt__bmp4g0();
    return _MutableScatterMultiMap___init__impl__s8ohqe(new MutableScatterMap(initialCapacity));
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    var it = findLocation(_this__u8e3s4, location);
    return it < 0 ? -(it + 1 | 0) | 0 : it;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.m() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.p(mid);
      var cmp = compareTo(midVal.k12_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 && !(current === root)) {
      current = _this__u8e3s4.w17(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.g1g(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.i1g();
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this);
    if ($this$with.e1e() || !equals($this$with.f1f(), value)) {
      $this$with.q1f(value);
      _Updater___get_composer__impl__9ty7av($this).m1e(value, block);
    }
    return Unit_instance;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.j1h_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).k1h = function (a, b) {
    return this.j1h_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.k1h(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).h3 = function () {
    return this.j1h_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.h3());
  };
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.r1a(group)) {
      result.h($reader.m1c(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.v19(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.v19(current) | 0;
      }
    }
  }
  function InvalidationLocationAscending$lambda(i1, i2) {
    _init_properties_Composer_kt__bmp4g0();
    return compareTo(i1.k12_1, i2.k12_1);
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return new MutableScatterMultiMap(receiver.f1h());
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
      var tmp = InvalidationLocationAscending$lambda;
      InvalidationLocationAscending = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  var CompositionImplServiceKey;
  function recordLeaving($this, instance, endRelativeOrder, priority, endRelativeAfter) {
    processPendingLeaving($this, endRelativeOrder);
    if (0 <= endRelativeAfter ? endRelativeAfter < endRelativeOrder : false) {
      $this.q1h_1.h(instance);
      $this.r1h_1.nv(priority);
      $this.s1h_1.nv(endRelativeAfter);
    } else {
      $this.n1h_1.h(instance);
    }
  }
  function processPendingLeaving($this, endRelativeOrder) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.q1h_1.q()) {
      var index = 0;
      var toAdd = null;
      var toAddAfter = null;
      var toAddPriority = null;
      while (index < $this.s1h_1.m()) {
        if (endRelativeOrder <= $this.s1h_1.p(index)) {
          var instance = $this.q1h_1.b2(index);
          var endRelativeAfter = $this.s1h_1.b2(index);
          var priority = $this.r1h_1.b2(index);
          if (toAdd == null) {
            toAdd = mutableListOf([instance]);
            // Inline function 'kotlin.also' call
            var this_0 = new MutableIntList();
            // Inline function 'androidx.compose.runtime.RememberEventDispatcher.processPendingLeaving.<anonymous>' call
            this_0.nv(endRelativeAfter);
            toAddAfter = this_0;
            // Inline function 'kotlin.also' call
            var this_1 = new MutableIntList();
            // Inline function 'androidx.compose.runtime.RememberEventDispatcher.processPendingLeaving.<anonymous>' call
            this_1.nv(priority);
            toAddPriority = this_1;
          } else {
            if (!(toAddPriority instanceof MutableIntList))
              THROW_CCE();
            if (!(toAddAfter instanceof MutableIntList))
              THROW_CCE();
            toAdd.h(instance);
            toAddAfter.nv(endRelativeAfter);
            toAddPriority.nv(priority);
          }
        } else {
          index = index + 1 | 0;
        }
      }
      if (!(toAdd == null)) {
        if (!(toAddPriority instanceof MutableIntList))
          THROW_CCE();
        if (!(toAddAfter instanceof MutableIntList))
          THROW_CCE();
        var inductionVariable = 0;
        var last = toAdd.m() - 1 | 0;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var inductionVariable_0 = i + 1 | 0;
            var last_0 = toAdd.m();
            if (inductionVariable_0 < last_0)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var iAfter = toAddAfter.p(i);
                var jAfter = toAddAfter.p(j);
                if (iAfter < jAfter || (jAfter === iAfter && toAddPriority.p(i) < toAddPriority.p(j))) {
                  swap(toAdd, i, j);
                  swap_0(toAddPriority, i, j);
                  swap_0(toAddAfter, i, j);
                }
              }
               while (inductionVariable_0 < last_0);
          }
           while (inductionVariable < last);
        $this.n1h_1.n(toAdd);
      }
    }
  }
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.l1i_1.q1d();
  }
  function composeInitial($this, content) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.o1i_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.composeInitial.<anonymous>' call
      var tmp$ret$0 = 'The composition is disposed';
      throwIllegalStateException(tmp$ret$0);
    }
    $this.p1i_1 = content;
    $this.t1h_1.q1i($this, $this.p1i_1);
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.v1h_1.s1i(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
          addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.v1h_1));
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.v1h_1.s1i(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
        addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.v1h_1));
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked($this, value, forgetConditionalScopes) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.z1h_1.e1c_1.h2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.dz_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.cz_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      var tmp = k[index];
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (!$this.f1i_1.u1i(value, scope) && !scope.v1i(value).equals(InvalidationResult_IGNORED_getInstance())) {
                        if (scope.t1i() && !forgetConditionalScopes) {
                          $this.b1i_1.h(scope);
                        } else {
                          $this.a1i_1.h(scope);
                        }
                      }
                    }
                    slot = slot.a3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (!$this.f1i_1.u1i(value, scope_0) && !scope_0.v1i(value).equals(InvalidationResult_IGNORED_getInstance())) {
          if (scope_0.t1i() && !forgetConditionalScopes) {
            $this.b1i_1.h(scope_0);
          } else {
            $this.a1i_1.h(scope_0);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    var tmp;
    if (values instanceof ScatterSetWrapper) {
      var this_0 = values.w1i_1;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.dz_1;
      var tmp$ret$5;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.cz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp_0 = k[index];
                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                    var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    if (value instanceof RecomposeScopeImpl) {
                      value.v1i(null);
                    } else {
                      addPendingInvalidationsLocked($this, value, forgetConditionalScopes);
                      // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
                      var value_0 = $this.c1i_1.e1c_1.h2(value);
                      if (value_0 != null) {
                        if (value_0 instanceof MutableScatterSet) {
                          // Inline function 'androidx.collection.ScatterSet.forEach' call
                          var this_2 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
                          // Inline function 'kotlin.contracts.contract' call
                          var k_0 = this_2.dz_1;
                          $l$block: {
                            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                            // Inline function 'kotlin.contracts.contract' call
                            var m_0 = this_2.cz_1;
                            var lastIndex_0 = m_0.length - 2 | 0;
                            var inductionVariable_1 = 0;
                            if (inductionVariable_1 <= lastIndex_0)
                              do {
                                var i_0 = inductionVariable_1;
                                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                var slot_0 = m_0[i_0];
                                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                var this_3 = slot_0;
                                if (!this_3.c3(this_3.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                                  var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                  var inductionVariable_2 = 0;
                                  if (inductionVariable_2 < bitCount_0)
                                    do {
                                      var j_0 = inductionVariable_2;
                                      inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                      // Inline function 'androidx.collection.isFull' call
                                      if (slot_0.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                                        var index_0 = (i_0 << 3) + j_0 | 0;
                                        // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                                        var tmp_1 = k_0[index_0];
                                        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                                        var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                                        addPendingInvalidationsLocked($this, it, forgetConditionalScopes);
                                      }
                                      slot_0 = slot_0.a3(8);
                                    }
                                     while (inductionVariable_2 < bitCount_0);
                                  if (!(bitCount_0 === 8)) {
                                    break $l$block;
                                  }
                                }
                              }
                               while (!(i_0 === lastIndex_0));
                          }
                        } else {
                          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                          var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
                          addPendingInvalidationsLocked($this, it_0, forgetConditionalScopes);
                        }
                      }
                    }
                  }
                  slot = slot.a3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                tmp$ret$5 = Unit_instance;
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp = tmp$ret$5;
    } else {
      var _iterator__ex2g4s = values.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.v1i(null);
        } else {
          addPendingInvalidationsLocked($this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
          var value_1 = $this.c1i_1.e1c_1.h2(element);
          if (value_1 != null) {
            if (value_1 instanceof MutableScatterSet) {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_4 = value_1 instanceof MutableScatterSet ? value_1 : THROW_CCE();
              // Inline function 'kotlin.contracts.contract' call
              var k_1 = this_4.dz_1;
              $l$block_1: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_1 = this_4.cz_1;
                var lastIndex_1 = m_1.length - 2 | 0;
                var inductionVariable_3 = 0;
                if (inductionVariable_3 <= lastIndex_1)
                  do {
                    var i_1 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var slot_1 = m_1[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_5 = slot_1;
                    if (!this_5.c3(this_5.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_4 = 0;
                      if (inductionVariable_4 < bitCount_1)
                        do {
                          var j_1 = inductionVariable_4;
                          inductionVariable_4 = inductionVariable_4 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_1.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                            var index_1 = (i_1 << 3) + j_1 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            var tmp_2 = k_1[index_1];
                            // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                            var it_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                            addPendingInvalidationsLocked($this, it_1, forgetConditionalScopes);
                          }
                          slot_1 = slot_1.a3(8);
                        }
                         while (inductionVariable_4 < bitCount_1);
                      if (!(bitCount_1 === 8)) {
                        break $l$block_1;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex_1));
              }
            } else {
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
              var it_2 = !(value_1 == null) ? value_1 : THROW_CCE();
              addPendingInvalidationsLocked($this, it_2, forgetConditionalScopes);
            }
          }
        }
      }
      tmp = Unit_instance;
    }
    var conditionallyInvalidatedScopes = $this.b1i_1;
    var invalidatedScopes = $this.a1i_1;
    if (forgetConditionalScopes && conditionallyInvalidatedScopes.hz()) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_6 = $this.z1h_1.e1c_1;
      $l$block_3: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_2 = this_6.kx_1;
        var lastIndex_2 = m_2.length - 2 | 0;
        var inductionVariable_5 = 0;
        if (inductionVariable_5 <= lastIndex_2)
          do {
            var i_2 = inductionVariable_5;
            inductionVariable_5 = inductionVariable_5 + 1 | 0;
            var slot_2 = m_2[i_2];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_7 = slot_2;
            if (!this_7.c3(this_7.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_2 = 8 - (~(i_2 - lastIndex_2 | 0) >>> 31 | 0) | 0;
              var inductionVariable_6 = 0;
              if (inductionVariable_6 < bitCount_2)
                do {
                  var j_2 = inductionVariable_6;
                  inductionVariable_6 = inductionVariable_6 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_2.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_2 = (i_2 << 3) + j_2 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    var tmp_3 = this_6.lx_1[index_2];
                    (tmp_3 == null ? true : !(tmp_3 == null)) || THROW_CCE();
                    var tmp_4 = this_6.mx_1[index_2];
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var value_2 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
                    var tmp_5;
                    if (value_2 instanceof MutableScatterSet) {
                      var set = value_2 instanceof MutableScatterSet ? value_2 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements = set.dz_1;
                      $l$block_2: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_3 = set.cz_1;
                        var lastIndex_3 = m_3.length - 2 | 0;
                        var inductionVariable_7 = 0;
                        if (inductionVariable_7 <= lastIndex_3)
                          do {
                            var i_3 = inductionVariable_7;
                            inductionVariable_7 = inductionVariable_7 + 1 | 0;
                            var slot_3 = m_3[i_3];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_8 = slot_3;
                            if (!this_8.c3(this_8.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                              var bitCount_3 = 8 - (~(i_3 - lastIndex_3 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_8 = 0;
                              if (inductionVariable_8 < bitCount_3)
                                do {
                                  var j_3 = inductionVariable_8;
                                  inductionVariable_8 = inductionVariable_8 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_3.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                                    var index_3 = (i_3 << 3) + j_3 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    var tmp_6 = elements[index_3];
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var scope = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
                                    if (conditionallyInvalidatedScopes.o(scope) || invalidatedScopes.o(scope)) {
                                      set.r10(index_3);
                                    }
                                  }
                                  slot_3 = slot_3.a3(8);
                                }
                                 while (inductionVariable_8 < bitCount_3);
                              if (!(bitCount_3 === 8)) {
                                break $l$block_2;
                              }
                            }
                          }
                           while (!(i_3 === lastIndex_3));
                      }
                      tmp_5 = set.q();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_0 = !(value_2 == null) ? value_2 : THROW_CCE();
                      tmp_5 = conditionallyInvalidatedScopes.o(scope_0) || invalidatedScopes.o(scope_0);
                    }
                    if (tmp_5) {
                      this_6.dw(index_2);
                    }
                  }
                  slot_2 = slot_2.a3(8);
                }
                 while (inductionVariable_6 < bitCount_2);
              if (!(bitCount_2 === 8)) {
                break $l$block_3;
              }
            }
          }
           while (!(i_2 === lastIndex_2));
      }
      conditionallyInvalidatedScopes.y1();
      cleanUpDerivedStateObservations($this);
    } else if (invalidatedScopes.hz()) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_9 = $this.z1h_1.e1c_1;
      $l$block_5: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_4 = this_9.kx_1;
        var lastIndex_4 = m_4.length - 2 | 0;
        var inductionVariable_9 = 0;
        if (inductionVariable_9 <= lastIndex_4)
          do {
            var i_4 = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            var slot_4 = m_4[i_4];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_10 = slot_4;
            if (!this_10.c3(this_10.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_4 = 8 - (~(i_4 - lastIndex_4 | 0) >>> 31 | 0) | 0;
              var inductionVariable_10 = 0;
              if (inductionVariable_10 < bitCount_4)
                do {
                  var j_4 = inductionVariable_10;
                  inductionVariable_10 = inductionVariable_10 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_4.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_4 = (i_4 << 3) + j_4 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    var tmp_7 = this_9.lx_1[index_4];
                    (tmp_7 == null ? true : !(tmp_7 == null)) || THROW_CCE();
                    var tmp_8 = this_9.mx_1[index_4];
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var value_3 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
                    var tmp_9;
                    if (value_3 instanceof MutableScatterSet) {
                      var set_0 = value_3 instanceof MutableScatterSet ? value_3 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements_0 = set_0.dz_1;
                      $l$block_4: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_5 = set_0.cz_1;
                        var lastIndex_5 = m_5.length - 2 | 0;
                        var inductionVariable_11 = 0;
                        if (inductionVariable_11 <= lastIndex_5)
                          do {
                            var i_5 = inductionVariable_11;
                            inductionVariable_11 = inductionVariable_11 + 1 | 0;
                            var slot_5 = m_5[i_5];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_11 = slot_5;
                            if (!this_11.c3(this_11.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                              var bitCount_5 = 8 - (~(i_5 - lastIndex_5 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_12 = 0;
                              if (inductionVariable_12 < bitCount_5)
                                do {
                                  var j_5 = inductionVariable_12;
                                  inductionVariable_12 = inductionVariable_12 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_5.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                                    var index_5 = (i_5 << 3) + j_5 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    var tmp_10 = elements_0[index_5];
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var scope_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
                                    if (invalidatedScopes.o(scope_1)) {
                                      set_0.r10(index_5);
                                    }
                                  }
                                  slot_5 = slot_5.a3(8);
                                }
                                 while (inductionVariable_12 < bitCount_5);
                              if (!(bitCount_5 === 8)) {
                                break $l$block_4;
                              }
                            }
                          }
                           while (!(i_5 === lastIndex_5));
                      }
                      tmp_9 = set_0.q();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_2 = !(value_3 == null) ? value_3 : THROW_CCE();
                      tmp_9 = invalidatedScopes.o(scope_2);
                    }
                    if (tmp_9) {
                      this_9.dw(index_4);
                    }
                  }
                  slot_4 = slot_4.a3(8);
                }
                 while (inductionVariable_10 < bitCount_4);
              if (!(bitCount_4 === 8)) {
                break $l$block_5;
              }
            }
          }
           while (!(i_4 === lastIndex_4));
      }
      cleanUpDerivedStateObservations($this);
      invalidatedScopes.y1();
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = $this.c1i_1.e1c_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.kx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  var tmp = this_0.lx_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.mx_1[index];
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.dz_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.cz_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_2 = slot_0;
                          if (!this_2.c3(this_2.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                  var tmp_2 = elements[index_0];
                                  // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                                  var derivedState = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                                  if (!$this.z1h_1.x1i(derivedState)) {
                                    set.r10(index_0);
                                  }
                                }
                                slot_0 = slot_0.a3(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.q();
                  } else {
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    var derivedState_0 = !(value == null) ? value : THROW_CCE();
                    tmp_1 = !$this.z1h_1.x1i(derivedState_0);
                  }
                  if (tmp_1) {
                    this_0.dw(index);
                  }
                }
                slot = slot.a3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
    if ($this.b1i_1.hz()) {
      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
      var this_3 = $this.b1i_1;
      var elements_0 = this_3.dz_1;
      $l$block_1: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m_1 = this_3.cz_1;
        var lastIndex_1 = m_1.length - 2 | 0;
        var inductionVariable_3 = 0;
        if (inductionVariable_3 <= lastIndex_1)
          do {
            var i_1 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var slot_1 = m_1[i_1];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_4 = slot_1;
            if (!this_4.c3(this_4.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
              var inductionVariable_4 = 0;
              if (inductionVariable_4 < bitCount_1)
                do {
                  var j_1 = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_1.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_1 = (i_1 << 3) + j_1 | 0;
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                    var tmp_3 = elements_0[index_1];
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).t1i()) {
                      this_3.r10(index_1);
                    }
                  }
                  slot_1 = slot_1.a3(8);
                }
                 while (inductionVariable_4 < bitCount_1);
              if (!(bitCount_1 === 8)) {
                break $l$block_1;
              }
            }
          }
           while (!(i_1 === lastIndex_1));
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.z1h_1.e1c_1.h2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.dz_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.cz_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      var tmp = k[index];
                      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (scope.v1i(value).equals(InvalidationResult_IMMINENT_getInstance())) {
                        $this.f1i_1.y1i(value, scope);
                      }
                    }
                    slot = slot.a3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (scope_0.v1i(value).equals(InvalidationResult_IMMINENT_getInstance())) {
          $this.f1i_1.y1i(value, scope_0);
        }
      }
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.x1h_1);
    try {
      if (changes.q())
        return Unit_instance;
      var tmp0 = 'Compose:applyChanges';
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_instance.y1b(tmp0);
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>' call
          $this.u1h_1.c11();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = $this.y1h_1.d18();
          var normalClose = false;
          var tmp;
          try {
            changes.z1i($this.u1h_1, writer, manager);
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
            normalClose = true;
            tmp = Unit_instance;
          }finally {
            writer.i18(normalClose);
          }
          $this.u1h_1.d11();
          break $l$block;
        }finally {
          Trace_instance.l1c(token);
        }
      }
      manager.a1j();
      manager.b1j();
      if ($this.h1i_1) {
        var tmp1 = 'Compose:unobserve';
        $l$block_2: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token_0 = Trace_instance.y1b(tmp1);
          try {
            // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>' call
            $this.h1i_1 = false;
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
            // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
            var this_0 = $this.z1h_1.e1c_1;
            $l$block_1: {
              // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
              var m = this_0.kx_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                          var tmp_0 = this_0.lx_1[index];
                          (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
                          var tmp_1 = this_0.mx_1[index];
                          // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                          var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          var tmp_2;
                          if (value instanceof MutableScatterSet) {
                            var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                            // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                            var elements = set.dz_1;
                            $l$block_0: {
                              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                              // Inline function 'kotlin.contracts.contract' call
                              var m_0 = set.cz_1;
                              var lastIndex_0 = m_0.length - 2 | 0;
                              var inductionVariable_1 = 0;
                              if (inductionVariable_1 <= lastIndex_0)
                                do {
                                  var i_0 = inductionVariable_1;
                                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                  var slot_0 = m_0[i_0];
                                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                  var this_2 = slot_0;
                                  if (!this_2.c3(this_2.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                                    var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                    var inductionVariable_2 = 0;
                                    if (inductionVariable_2 < bitCount_0)
                                      do {
                                        var j_0 = inductionVariable_2;
                                        inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                        // Inline function 'androidx.collection.isFull' call
                                        if (slot_0.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                                          var index_0 = (i_0 << 3) + j_0 | 0;
                                          // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                          var tmp_3 = elements[index_0];
                                          // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                                          if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).u1g()) {
                                            set.r10(index_0);
                                          }
                                        }
                                        slot_0 = slot_0.a3(8);
                                      }
                                       while (inductionVariable_2 < bitCount_0);
                                    if (!(bitCount_0 === 8)) {
                                      break $l$block_0;
                                    }
                                  }
                                }
                                 while (!(i_0 === lastIndex_0));
                            }
                            tmp_2 = set.q();
                          } else {
                            // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                            tmp_2 = !(!(value == null) ? value : THROW_CCE()).u1g();
                          }
                          if (tmp_2) {
                            this_0.dw(index);
                          }
                        }
                        slot = slot.a3(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_1;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            cleanUpDerivedStateObservations($this);
            break $l$block_2;
          }finally {
            Trace_instance.l1c(token_0);
          }
        }
      }
    }finally {
      if ($this.e1i_1.q()) {
        manager.c1j();
      }
    }
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.d1j() && $this.l1i_1.w1b(scope, instance);
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.w1h_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.i1i_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.y1h_1.e1j($this.j1i_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      var observer_0 = observer($this);
      if (instance == null) {
        $this.g1i_1.f1j(scope, ScopeInvalidated_instance);
      } else {
        var tmp_1;
        if (observer_0 == null) {
          tmp_1 = !(!(instance == null) ? isInterface(instance, DerivedState) : false);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          $this.g1i_1.f1j(scope, ScopeInvalidated_instance);
        } else {
          var tmp2 = $this.g1i_1;
          var tmp$ret$5;
          $l$block_1: {
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf' call
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
            var value = tmp2.e1c_1.h2(scope);
            if (value != null) {
              if (value instanceof MutableScatterSet) {
                // Inline function 'androidx.collection.ScatterSet.forEach' call
                var this_0 = value instanceof MutableScatterSet ? value : THROW_CCE();
                // Inline function 'kotlin.contracts.contract' call
                var k = this_0.dz_1;
                $l$block_0: {
                  // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                  // Inline function 'kotlin.contracts.contract' call
                  var m = this_0.cz_1;
                  var lastIndex = m.length - 2 | 0;
                  var inductionVariable = 0;
                  if (inductionVariable <= lastIndex)
                    do {
                      var i = inductionVariable;
                      inductionVariable = inductionVariable + 1 | 0;
                      var slot = m[i];
                      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                      var this_1 = slot;
                      if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                        var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                        var inductionVariable_0 = 0;
                        if (inductionVariable_0 < bitCount)
                          do {
                            var j = inductionVariable_0;
                            inductionVariable_0 = inductionVariable_0 + 1 | 0;
                            // Inline function 'androidx.collection.isFull' call
                            if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                              var index = (i << 3) + j | 0;
                              // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                              var tmp_2 = k[index];
                              // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf.<anonymous>' call
                              // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
                              if (((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()) === ScopeInvalidated_instance) {
                                tmp$ret$5 = true;
                                break $l$block_1;
                              }
                            }
                            slot = slot.a3(8);
                          }
                           while (inductionVariable_0 < bitCount);
                        if (!(bitCount === 8)) {
                          break $l$block_0;
                        }
                      }
                    }
                     while (!(i === lastIndex));
                }
              } else {
                // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
                if ((!(value == null) ? value : THROW_CCE()) === ScopeInvalidated_instance) {
                  tmp$ret$5 = true;
                  break $l$block_1;
                }
              }
            }
            tmp$ret$5 = false;
          }
          if (!tmp$ret$5) {
            $this.g1i_1.y1i(scope, instance);
          }
        }
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.t1h_1.g1j($this);
    return $this.d1j() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.g1i_1;
    $this.g1i_1 = new ScopeMap();
    return invalidations;
  }
  function observer($this) {
    var holder = $this.k1i_1;
    var tmp;
    if (holder.j1j_1) {
      tmp = holder.i1j_1;
    } else {
      var parentHolder = $this.t1h_1.h1j();
      var parentObserver = parentHolder == null ? null : parentHolder.i1j_1;
      if (!equals(parentObserver, holder.i1j_1)) {
        holder.i1j_1 = parentObserver;
      }
      tmp = parentObserver;
    }
    return tmp;
  }
  function RememberEventDispatcher(abandoning) {
    this.l1h_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m1h_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.n1h_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.o1h_1 = ArrayList_init_$Create$();
    this.p1h_1 = null;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.q1h_1 = ArrayList_init_$Create$();
    this.r1h_1 = new MutableIntList();
    this.s1h_1 = new MutableIntList();
  }
  protoOf(RememberEventDispatcher).k1j = function (instance) {
    this.m1h_1.h(instance);
  };
  protoOf(RememberEventDispatcher).v1g = function (instance, endRelativeOrder, priority, endRelativeAfter) {
    recordLeaving(this, instance, endRelativeOrder, priority, endRelativeAfter);
  };
  protoOf(RememberEventDispatcher).s1g = function (instance, endRelativeOrder, priority, endRelativeAfter) {
    var tmp0_elvis_lhs = this.p1h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf_0();
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.p1h_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var releasing = tmp;
    releasing.w10(instance);
    recordLeaving(this, instance, endRelativeOrder, priority, endRelativeAfter);
  };
  protoOf(RememberEventDispatcher).a1j = function () {
    processPendingLeaving(this, -2147483648);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.n1h_1.q()) {
      var tmp1 = 'Compose:onForgotten';
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_instance.y1b(tmp1);
        try {
          // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>' call
          var releasing = this.p1h_1;
          var inductionVariable = this.n1h_1.m() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = this.n1h_1.p(i);
              if (isInterface(instance, RememberObserver)) {
                this.l1h_1.v1(instance);
                instance.l1j();
              }
              if (isInterface(instance, ComposeNodeLifecycleCallback)) {
                if (!(releasing == null) && releasing.o(instance)) {
                  instance.i12();
                } else {
                  instance.h12();
                }
              }
            }
             while (0 <= inductionVariable);
          break $l$block;
        }finally {
          Trace_instance.l1c(token);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.m1h_1.q()) {
      var tmp3 = 'Compose:onRemembered';
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_instance.y1b(tmp3);
        try {
          // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>' call
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.m1h_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last = this_0.m() - 1 | 0;
          if (inductionVariable_0 <= last)
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item = this_0.p(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.l1h_1.v1(item);
              item.m1j();
            }
             while (inductionVariable_0 <= last);
          break $l$block_0;
        }finally {
          Trace_instance.l1c(token_0);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).b1j = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.o1h_1.q()) {
      var tmp1 = 'Compose:sideeffects';
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_instance.y1b(tmp1);
        try {
          // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>' call
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.o1h_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.m() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.p(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.o1h_1.y1();
          break $l$block;
        }finally {
          Trace_instance.l1c(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).c1j = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.l1h_1.q()) {
      var tmp1 = 'Compose:abandons';
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_instance.y1b(tmp1);
        try {
          // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchAbandons.<anonymous>' call
          var iterator = this.l1h_1.j();
          while (iterator.k()) {
            var instance = iterator.l();
            iterator.x3();
            instance.n1j();
          }
          break $l$block;
        }finally {
          Trace_instance.l1c(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.t1h_1 = parent;
    this.u1h_1 = applier;
    this.v1h_1 = new AtomicReference(null);
    this.w1h_1 = new Object();
    this.x1h_1 = (new MutableScatterSet()).a11();
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SlotTable();
    // Inline function 'androidx.compose.runtime.CompositionImpl.slotTable.<anonymous>' call
    if (this.t1h_1.h18()) {
      this_0.g18();
    }
    if (this.t1h_1.h15()) {
      this_0.f18();
    }
    tmp.y1h_1 = this_0;
    this.z1h_1 = new ScopeMap();
    this.a1i_1 = new MutableScatterSet();
    this.b1i_1 = new MutableScatterSet();
    this.c1i_1 = new ScopeMap();
    this.d1i_1 = new ChangeList();
    this.e1i_1 = new ChangeList();
    this.f1i_1 = new ScopeMap();
    this.g1i_1 = new ScopeMap();
    this.h1i_1 = false;
    this.i1i_1 = null;
    this.j1i_1 = 0;
    this.k1i_1 = new CompositionObserverHolder();
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var this_1 = new ComposerImpl(this.u1h_1, this.t1h_1, this.y1h_1, this.x1h_1, this.d1i_1, this.e1i_1, this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.t1h_1.o1j(this_1);
    tmp_0.l1i_1 = this_1;
    this.m1i_1 = recomposeContext;
    var tmp_1 = this;
    var tmp_2 = this.t1h_1;
    tmp_1.n1i_1 = tmp_2 instanceof Recomposer;
    this.o1i_1 = false;
    this.p1i_1 = ComposableSingletons$CompositionKt_getInstance().p1j_1;
  }
  protoOf(CompositionImpl).d1j = function () {
    return this.l1i_1.b14_1;
  };
  protoOf(CompositionImpl).r1j = function () {
    return this.o1i_1;
  };
  protoOf(CompositionImpl).s1j = function (content) {
    composeInitial(this, content);
  };
  protoOf(CompositionImpl).t1j = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        this.w1h_1;
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>' call
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (!(observer_0 == null)) {
            var tmp_2 = invalidations.u1j();
            observer_0.v1j(this, isInterface(tmp_2, KtMap) ? tmp_2 : THROW_CCE());
          }
          this.l1i_1.k1g(invalidations, content);
          var tmp_3;
          if (observer_0 == null) {
            tmp_3 = null;
          } else {
            observer_0.w1j(this);
            tmp_3 = Unit_instance;
          }
          tmp_1 = tmp_3;
        } catch ($p) {
          var tmp_4;
          if ($p instanceof Exception) {
            var e = $p;
            this.g1i_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_5;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_5 = !this.x1h_1.q();
        } else {
          tmp_5 = false;
        }
        if (tmp_5) {
          (new RememberEventDispatcher(this.x1h_1)).c1j();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_6;
      if ($p instanceof Exception) {
        var e_0 = $p;
        this.x1j();
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).y1j = function (values) {
    $l$loop: while (true) {
      var old = this.v1h_1.pn();
      var tmp;
      if (old == null ? true : equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, KtSet) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_0((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var message = 'corrupt pendingModifications: ' + toString(this.v1h_1);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      var new_0 = tmp;
      if (this.v1h_1.z1j(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          this.w1h_1;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recordModificationsOf.<anonymous>' call
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).a1k = function (values) {
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    var tmp;
    if (values instanceof ScatterSetWrapper) {
      var this_0 = values.w1i_1;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.dz_1;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.cz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp_0 = k[index];
                    // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
                    var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    if (this.z1h_1.x1i(value) || this.c1i_1.x1i(value))
                      return true;
                  }
                  slot = slot.a3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                tmp$ret$2 = Unit_instance;
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp = tmp$ret$2;
    } else {
      var _iterator__ex2g4s = values.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
        if (this.z1h_1.x1i(element) || this.c1i_1.x1i(element))
          return true;
      }
      tmp = Unit_instance;
    }
    return false;
  };
  protoOf(CompositionImpl).b1k = function (block) {
    return this.l1i_1.m1g(block);
  };
  protoOf(CompositionImpl).c1k = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.l1i_1.a1e();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.recordReadOf.<anonymous>' call
        tmp0_safe_receiver.q1g(true);
        var alreadyRead = tmp0_safe_receiver.d1k(value);
        if (!alreadyRead) {
          if (value instanceof StateObjectImpl) {
            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
            var tmp$ret$0 = _ReaderKind___init__impl__jqeebu(1);
            value.f1k(tmp$ret$0);
          }
          this.z1h_1.y1i(value, tmp0_safe_receiver);
          if (isInterface(value, DerivedState)) {
            var record = value.g1k();
            this.c1i_1.h1k(value);
            // Inline function 'androidx.collection.ObjectIntMap.forEachKey' call
            var this_0 = record.i1k();
            var k = this_0.qw_1;
            $l$block: {
              // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
              var m = this_0.pw_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ObjectIntMap.forEachKey.<anonymous>' call
                          var tmp = k[index];
                          // Inline function 'androidx.compose.runtime.CompositionImpl.recordReadOf.<anonymous>.<anonymous>' call
                          var dependency = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                          if (dependency instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$3 = _ReaderKind___init__impl__jqeebu(1);
                            dependency.f1k(tmp$ret$3);
                          }
                          this.c1i_1.y1i(dependency, value);
                        }
                        slot = slot.a3(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            tmp0_safe_receiver.k1k(value, record.j1k());
          }
        }
      }
    }
  };
  protoOf(CompositionImpl).l1k = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.w1h_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>' call
    invalidateScopeOfLocked(this, value);
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = this.c1i_1.e1c_1.h2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.dz_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.cz_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      var tmp = k[index];
                      // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
                      var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      invalidateScopeOfLocked(this, it);
                    }
                    slot = slot.a3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
        var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        invalidateScopeOfLocked(this, it_0);
      }
    }
    return Unit_instance;
  };
  protoOf(CompositionImpl).m1k = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.w1h_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (observer_0 == null)
            null;
          else {
            var tmp_2 = invalidations.u1j();
            observer_0.v1j(this, isInterface(tmp_2, KtMap) ? tmp_2 : THROW_CCE());
          }
          // Inline function 'kotlin.also' call
          var this_0 = this.l1i_1.n1g(invalidations);
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!this_0) {
            drainPendingModificationsLocked(this);
          }
          if (observer_0 == null)
            null;
          else {
            observer_0.w1j(this);
          }
          tmp_1 = this_0;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Exception) {
            var e = $p;
            this.g1i_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_4;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_4 = !this.x1h_1.q();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          (new RememberEventDispatcher(this.x1h_1)).c1j();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof Exception) {
        var e_0 = $p;
        this.x1j();
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).n1k = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.p(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.oe_1.h1b_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp;
      try {
        this.l1i_1.d1g(references);
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp = Unit_instance;
      }finally {
        var tmp_0;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !this.x1h_1.q();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          (new RememberEventDispatcher(this.x1h_1)).c1j();
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.x1j();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).o1k = function (state) {
    var manager = new RememberEventDispatcher(this.x1h_1);
    var slotTable = state.p1b_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.d18();
    var normalClose = false;
    var tmp;
    try {
      removeCurrentGroup(writer, manager);
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = Unit_instance;
    }finally {
      writer.i18(normalClose);
    }
    manager.a1j();
  };
  protoOf(CompositionImpl).p1k = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.w1h_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.applyChanges.<anonymous>' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp;
      try {
        applyChangesInLocked(this, this.d1i_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp = Unit_instance;
      }finally {
        var tmp_0;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !this.x1h_1.q();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          (new RememberEventDispatcher(this.x1h_1)).c1j();
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.x1j();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).q1k = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.w1h_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.applyLateChanges.<anonymous>' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp;
      try {
        if (this.e1i_1.hz()) {
          applyChangesInLocked(this, this.e1i_1);
        }
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp = Unit_instance;
      }finally {
        var tmp_0;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !this.x1h_1.q();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          (new RememberEventDispatcher(this.x1h_1)).c1j();
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.x1j();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).r1k = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.w1h_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.changesApplied.<anonymous>' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp;
      try {
        this.l1i_1.d1e();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.x1h_1.q()) {
          (new RememberEventDispatcher(this.x1h_1)).c1j();
        }
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp = Unit_instance;
      }finally {
        var tmp_0;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !this.x1h_1.q();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          (new RememberEventDispatcher(this.x1h_1)).c1j();
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.x1j();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).x1j = function () {
    this.v1h_1.s1k(null);
    this.d1i_1.y1();
    this.e1i_1.y1();
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.x1h_1.q()) {
      (new RememberEventDispatcher(this.x1h_1)).c1j();
    }
  };
  protoOf(CompositionImpl).t1k = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.w1h_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.y1h_1.q14_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.u1k();
      }
    }
  };
  protoOf(CompositionImpl).x1b = function (to, groupIndex, block) {
    var tmp;
    if (!(to == null) && !equals(to, this) && groupIndex >= 0) {
      var tmp_0 = this;
      tmp_0.i1i_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.j1i_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.i1i_1 = null;
        this.j1i_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).v1k = function (scope, instance) {
    if (scope.w1k()) {
      scope.b1g(true);
    }
    var anchor = scope.p12_1;
    if (anchor == null || !anchor.u1g())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.y1h_1.x1k(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.w1h_1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.i1i_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.y1k())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).z1k = function (scope) {
    this.h1i_1 = true;
  };
  protoOf(CompositionImpl).a1l = function (instance, scope) {
    this.z1h_1.u1i(instance, scope);
  };
  protoOf(CompositionImpl).b1l = function (state) {
    if (!this.z1h_1.x1i(state)) {
      this.c1i_1.h1k(state);
    }
  };
  function CompositionObserverHolder(observer, root) {
    observer = observer === VOID ? null : observer;
    root = root === VOID ? false : root;
    this.i1j_1 = observer;
    this.j1j_1 = root;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.m1d(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:623)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
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
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 3) === 2) || !$composer_0.o1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:757)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.p1j_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.q1j_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function ScopeInvalidated() {
  }
  var ScopeInvalidated_instance;
  function ScopeInvalidated_getInstance() {
    return ScopeInvalidated_instance;
  }
  function swap(_this__u8e3s4, a, b) {
    _init_properties_Composition_kt__t5pjw8();
    var item = _this__u8e3s4.p(a);
    _this__u8e3s4.z1(a, _this__u8e3s4.p(b));
    _this__u8e3s4.z1(b, item);
  }
  function swap_0(_this__u8e3s4, a, b) {
    _init_properties_Composition_kt__t5pjw8();
    var item = _this__u8e3s4.p(a);
    _this__u8e3s4.pv(a, _this__u8e3s4.p(b));
    _this__u8e3s4.pv(b, item);
  }
  function ControlledComposition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  function CompositionImplServiceKey$1() {
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
      CompositionImplServiceKey = new CompositionImplServiceKey$1();
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  function CompositionContext() {
  }
  protoOf(CompositionContext).h1j = function () {
    return null;
  };
  protoOf(CompositionContext).i15 = function (table) {
  };
  protoOf(CompositionContext).o1j = function (composer) {
  };
  protoOf(CompositionContext).b15 = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).a15 = function () {
  };
  protoOf(CompositionContext).k15 = function () {
  };
  protoOf(CompositionContext).o1b = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.o1f_1 = new LazyValueHolder(defaultFactory);
  }
  protoOf(CompositionLocal).d1l = function () {
    return this.o1f_1;
  };
  function valueHolderOf($this, value) {
    var tmp;
    if (value.l1f_1) {
      var tmp1_elvis_lhs = value.j1f_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp_1 = value.e2();
        var tmp0_elvis_lhs = value.i1f_1;
        tmp_0 = mutableStateOf(tmp_1, tmp0_elvis_lhs == null ? structuralEqualityPolicy() : tmp0_elvis_lhs);
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = new DynamicValueHolder(tmp_0);
    } else if (!(value.k1f_1 == null)) {
      tmp = new ComputedValueHolder(value.k1f_1);
    } else if (!(value.j1f_1 == null)) {
      tmp = new DynamicValueHolder(value.j1f_1);
    } else {
      tmp = new StaticValueHolder(value.c1h());
    }
    return tmp;
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
  }
  protoOf(ProvidableCompositionLocal).g1l = function (value) {
    return this.f1l(value);
  };
  protoOf(ProvidableCompositionLocal).p1f = function (value, previous) {
    var tmp;
    if (previous instanceof DynamicValueHolder) {
      var tmp_0;
      if (value.l1f_1) {
        previous.j1l_1.is(value.c1h());
        tmp_0 = previous;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    } else {
      if (previous instanceof StaticValueHolder) {
        tmp = value.d1h() && equals(value.c1h(), previous.i1l_1) ? previous : null;
      } else {
        if (previous instanceof ComputedValueHolder) {
          tmp = value.k1f_1 === previous.h1l_1 ? previous : null;
        } else {
          tmp = null;
        }
      }
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? valueHolderOf(this, value) : tmp1_elvis_lhs;
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).f1l = function (value) {
    return new ProvidedValue(this, value, value === null, null, null, null, false);
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider(value, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x1f(-1350970552);
    sourceInformation($composer_0, 'C(CompositionLocalProvider)P(1)400@17486L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1350970552, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider (CompositionLocal.kt:398)');
    }
    $composer_0.e1f(value);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.s1f();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(CompositionLocalProvider$lambda(value, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.n1l_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).f1l = function (value) {
    return new ProvidedValue(this, value, value === null, this.n1l_1, null, null, true);
  };
  function CompositionLocalProvider$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PersistentCompositionLocalMap() {
  }
  function read(_this__u8e3s4, key) {
    // Inline function 'kotlin.collections.getOrElse' call
    var key_0 = key instanceof CompositionLocal ? key : THROW_CCE();
    var tmp0_elvis_lhs = _this__u8e3s4.h2(key_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.read.<anonymous>' call
      tmp = key.d1l();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp_0 = tmp.o1l(_this__u8e3s4);
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  }
  function contains_0(_this__u8e3s4, key) {
    return _this__u8e3s4.f2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().pn();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = fillArrayVal(Array(0), null);
      // Inline function 'kotlin.also' call
      var this_0 = new MutableVector(tmp$ret$0, 0);
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().s1l(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
  }
  function LaunchedEffect(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1179185413, 'C(LaunchedEffect)P(1)338@14267L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1179185413, $changed, -1, 'androidx.compose.runtime.LaunchedEffect (Effects.kt:336)');
    }
    var applyContext = $composer_0.r1d();
    sourceInformationMarkerStart($composer_0, 2064962644, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.f15(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1f();
    var tmp;
    if (invalid || it === Companion_getInstance().n18_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_0.q1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.t1l_1 = task;
    this.u1l_1 = CoroutineScope(parentCoroutineContext);
    this.v1l_1 = null;
  }
  protoOf(LaunchedEffectImpl).m1j = function () {
    var tmp0_safe_receiver = this.v1l_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.v1l_1 = launch(this.u1l_1, VOID, VOID, this.t1l_1);
  };
  protoOf(LaunchedEffectImpl).l1j = function () {
    var tmp0_safe_receiver = this.v1l_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.mj(new LeftCompositionCancellationException());
    }
    this.v1l_1 = null;
  };
  protoOf(LaunchedEffectImpl).n1j = function () {
    var tmp0_safe_receiver = this.v1l_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.mj(new LeftCompositionCancellationException());
    }
    this.v1l_1 = null;
  };
  function CompositionScopedCoroutineScopeCanceller(coroutineScope) {
    this.w1l_1 = coroutineScope;
  }
  protoOf(CompositionScopedCoroutineScopeCanceller).m1j = function () {
  };
  protoOf(CompositionScopedCoroutineScopeCanceller).l1j = function () {
    cancel_0(this.w1l_1, new LeftCompositionCancellationException());
  };
  protoOf(CompositionScopedCoroutineScopeCanceller).n1j = function () {
    cancel_0(this.w1l_1, new LeftCompositionCancellationException());
  };
  function createCompositionCoroutineScope(coroutineContext, composer) {
    _init_properties_Effects_kt__be5lps();
    var tmp;
    if (!(coroutineContext.j9(Key_instance) == null)) {
      // Inline function 'kotlin.apply' call
      var this_0 = Job();
      // Inline function 'androidx.compose.runtime.createCompositionCoroutineScope.<anonymous>' call
      this_0.hr(IllegalArgumentException_init_$Create$('CoroutineContext supplied to rememberCoroutineScope may not include a parent job'));
      tmp = CoroutineScope(this_0);
    } else {
      var applyContext = composer.r1d();
      tmp = CoroutineScope(applyContext.jg(Job(applyContext.j9(Key_instance))).jg(coroutineContext));
    }
    return tmp;
  }
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function DisposableEffect(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1371986847, 'C(DisposableEffect)P(1)155@6197L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1371986847, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:154)');
    }
    sourceInformationMarkerStart($composer_0, 1176203671, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.f15(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1f();
    var tmp;
    if (invalid || it === Companion_getInstance().n18_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.q1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function DisposableEffectImpl(effect) {
    this.x1l_1 = effect;
    this.y1l_1 = null;
  }
  protoOf(DisposableEffectImpl).m1j = function () {
    this.y1l_1 = this.x1l_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).l1j = function () {
    var tmp0_safe_receiver = this.y1l_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.cm();
    }
    this.y1l_1 = null;
  };
  protoOf(DisposableEffectImpl).n1j = function () {
  };
  function DisposableEffect_0(keys, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1307627122, 'C(DisposableEffect)P(1)276@11903L48:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1307627122, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:275)');
    }
    // Inline function 'androidx.compose.runtime.remember' call
    var keys_0 = keys.slice();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, -568225417, 'CC(remember)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var inductionVariable = 0;
    var last = keys_0.length;
    while (inductionVariable < last) {
      var key = keys_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.f15(key));
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = invalid;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.f1f();
    var tmp;
    if (invalid_0 || it === Companion_getInstance().n18_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.q1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function DisposableEffect_1(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1429097729, 'C(DisposableEffect)P(1,2)195@8083L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1429097729, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:194)');
    }
    sourceInformationMarkerStart($composer_0, 1176264029, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.f15(key1) | $composer_0.f15(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1f();
    var tmp;
    if (invalid || it === Companion_getInstance().n18_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.q1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.m2_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.z1l_1 = left;
    this.a1m_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.z1l_1), 31) + hashCodeOf(this, this.a1m_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.z1l_1) + ', right=' + toString_0(this.a1m_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.z1l_1, tmp0_other_with_cast.z1l_1))
      return false;
    if (!equals(this.a1m_1, tmp0_other_with_cast.a1m_1))
      return false;
    return true;
  };
  function Key() {
  }
  var Key_instance_0;
  function Key_getInstance() {
    return Key_instance_0;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.j9(Key_instance_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function OpaqueKey(key) {
    this.b1m_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.b1m_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.b1m_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.b1m_1 === tmp0_other_with_cast.b1m_1))
      return false;
    return true;
  };
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function produceState(initialValue, producer, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 10454275, 'C(produceState)80@2911L41,81@2978L74,81@2957L95:ProduceState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(10454275, $changed, -1, 'androidx.compose.runtime.produceState (ProduceState.kt:79)');
    }
    sourceInformationMarkerStart($composer_0, 2143000241, 'CC(remember):ProduceState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1f();
    var tmp;
    if (false || it === Companion_getInstance().n18_1) {
      // Inline function 'androidx.compose.runtime.produceState.<anonymous>' call
      var value = mutableStateOf(initialValue);
      $composer_0.q1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var result = tmp1_group;
    sourceInformationMarkerStart($composer_0, 2143002418, 'CC(remember):ProduceState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.s1e(producer);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.f1f();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().n18_1) {
      // Inline function 'androidx.compose.runtime.produceState.<anonymous>' call
      var value_0 = produceState$slambda_0(producer, result, null);
      $composer_0.q1f(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect(Unit_instance, tmp2_group, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return result;
  }
  function ProduceStateScope() {
  }
  function $awaitDisposeCOROUTINE$0(_this__u8e3s4, onDispose, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1m_1 = _this__u8e3s4;
    this.m1m_1 = onDispose;
  }
  protoOf($awaitDisposeCOROUTINE$0).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 5;
            this.w8_1 = 1;
            continue $sm;
          case 1:
            this.x8_1 = 4;
            this.w8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.bm();
            suspendResult = returnIfSuspended(cancellable.ek(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n1m_1 = suspendResult;
            this.x8_1 = 5;
            this.w8_1 = 3;
            continue $sm;
          case 3:
            this.x8_1 = 5;
            this.m1m_1();
            return Unit_instance;
          case 4:
            this.x8_1 = 5;
            var t = this.z8_1;
            this.m1m_1();
            throw t;
          case 5:
            throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x8_1 === 5) {
          throw e;
        } else {
          this.w8_1 = this.x8_1;
          this.z8_1 = e;
        }
      }
     while (true);
  };
  function ProduceStateScopeImpl(state, coroutineContext) {
    this.o1m_1 = coroutineContext;
    this.p1m_1 = state;
  }
  protoOf(ProduceStateScopeImpl).gi = function () {
    return this.o1m_1;
  };
  protoOf(ProduceStateScopeImpl).is = function (_set____db54di) {
    this.p1m_1.is(_set____db54di);
  };
  protoOf(ProduceStateScopeImpl).e2 = function () {
    return this.p1m_1.e2();
  };
  protoOf(ProduceStateScopeImpl).c1m = function (onDispose, $completion) {
    var tmp = new $awaitDisposeCOROUTINE$0(this, onDispose, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  function produceState$slambda($producer, $result, resultContinuation) {
    this.y1m_1 = $producer;
    this.z1m_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(produceState$slambda).b1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.c1n($this$LaunchedEffect, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(produceState$slambda).q9 = function (p1, $completion) {
    return this.b1n((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(produceState$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 2;
            this.w8_1 = 1;
            suspendResult = this.y1m_1(new ProduceStateScopeImpl(this.z1m_1, this.a1n_1.gi()), this);
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
  protoOf(produceState$slambda).c1n = function ($this$LaunchedEffect, completion) {
    var i = new produceState$slambda(this.y1m_1, this.z1m_1, completion);
    i.a1n_1 = $this$LaunchedEffect;
    return i;
  };
  function produceState$slambda_0($producer, $result, resultContinuation) {
    var i = new produceState$slambda($producer, $result, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.b1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var callbackLock;
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.n12_1 = $this.n12_1 | 32;
    } else {
      $this.n12_1 = $this.n12_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.n12_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.n12_1 = $this.n12_1 | 16;
    } else {
      $this.n12_1 = $this.n12_1 & -17;
    }
  }
  function checkDerivedStateChanged(_this__u8e3s4, $this, dependencies) {
    if (!isInterface(_this__u8e3s4, DerivedState))
      THROW_CCE();
    var tmp0_elvis_lhs = _this__u8e3s4.p1l();
    var policy = tmp0_elvis_lhs == null ? structuralEqualityPolicy() : tmp0_elvis_lhs;
    return !policy.d1n(_this__u8e3s4.g1k().j1k(), dependencies.h2(_this__u8e3s4));
  }
  function Companion_1() {
  }
  protoOf(Companion_1).e1n = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.q()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.p(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.f1n(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.g1n(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_1).h1n = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.q()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.m() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.p(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.x1k(item)) {
              var tmp_1 = slots.i1n(slots.m1b(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $instances) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.s12_1 === $token && $instances.equals(this$0.t12_1)) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var this_0 = $instances;
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
          var m = this_0.pw_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.MutableObjectIntMap.removeIf.<anonymous>' call
                      var tmp_1 = this_0.qw_1[index];
                      var tmp1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
                      var shouldRemove = !(this_0.rw_1[index] === $token);
                      if (shouldRemove) {
                        composition.a1l(tmp1, this$0);
                        if (isInterface(tmp1, DerivedState)) {
                          composition.b1l(tmp1);
                          var tmp0_safe_receiver = this$0.u12_1;
                          if (tmp0_safe_receiver == null)
                            null;
                          else
                            tmp0_safe_receiver.z4(tmp1);
                        }
                      }
                      if (shouldRemove) {
                        this_0.bx(index);
                      }
                    }
                    slot = slot.a3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  tmp$ret$3 = Unit_instance;
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
        tmp = tmp$ret$3;
      }
      return Unit_instance;
    };
  }
  function RecomposeScopeImpl(owner) {
    this.n12_1 = 0;
    this.o12_1 = owner;
    this.p12_1 = null;
    this.q12_1 = null;
    this.r12_1 = null;
    this.s12_1 = 0;
    this.t12_1 = null;
    this.u12_1 = null;
  }
  protoOf(RecomposeScopeImpl).u1g = function () {
    var tmp;
    if (!(this.o12_1 == null)) {
      var tmp0_safe_receiver = this.p12_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1g();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).y1k = function () {
    return !(this.q12_1 == null);
  };
  protoOf(RecomposeScopeImpl).q1g = function (value) {
    if (value) {
      this.n12_1 = this.n12_1 | 1;
    } else {
      this.n12_1 = this.n12_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).s19 = function () {
    return !((this.n12_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).b1e = function (value) {
    if (value) {
      this.n12_1 = this.n12_1 | 2;
    } else {
      this.n12_1 = this.n12_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).w1k = function () {
    return !((this.n12_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).b1g = function (value) {
    if (value) {
      this.n12_1 = this.n12_1 | 4;
    } else {
      this.n12_1 = this.n12_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).c1e = function () {
    return !((this.n12_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).y1a = function (value) {
    if (value) {
      this.n12_1 = this.n12_1 | 8;
    } else {
      this.n12_1 = this.n12_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).f1e = function () {
    return !((this.n12_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).o1a = function (composer) {
    var block = this.q12_1;
    var observer = this.r12_1;
    if (!(observer == null) && !(block == null)) {
      observer.j1n(this);
      try {
        block(composer, 1);
      }finally {
        observer.k1n(this);
      }
      return Unit_instance;
    }
    if ((block == null ? null : block(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid restart scope';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(RecomposeScopeImpl).v1i = function (value) {
    var tmp0_safe_receiver = this.o12_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1k(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).w1g = function () {
    var tmp0_safe_receiver = this.o12_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1k(this);
    }
    this.o12_1 = null;
    this.t12_1 = null;
    this.u12_1 = null;
    var tmp1_safe_receiver = this.r12_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l1n(this);
    }
  };
  protoOf(RecomposeScopeImpl).g1n = function (owner) {
    this.o12_1 = owner;
  };
  protoOf(RecomposeScopeImpl).u1k = function () {
    var tmp0_safe_receiver = this.o12_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.v1k(this, null);
  };
  protoOf(RecomposeScopeImpl).l1l = function (block) {
    this.q12_1 = block;
  };
  protoOf(RecomposeScopeImpl).x1a = function (value) {
    if (value) {
      this.n12_1 = this.n12_1 | 64;
    } else {
      this.n12_1 = this.n12_1 & -65;
    }
  };
  protoOf(RecomposeScopeImpl).w1a = function () {
    return !((this.n12_1 & 64) === 0);
  };
  protoOf(RecomposeScopeImpl).c1g = function () {
    return !((this.n12_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).z1a = function (token) {
    this.s12_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).w1f = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).d1k = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.t12_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableObjectIntMap();
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.t12_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedInstances = tmp;
    var token = trackedInstances.ax(instance, this.s12_1, -1);
    if (token === this.s12_1) {
      return true;
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).k1k = function (instance, value) {
    var tmp0_elvis_lhs = this.u12_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableScatterMap();
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordDerivedStateValue.<anonymous>' call
      this.u12_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    trackedDependencies.vx(instance, value);
  };
  protoOf(RecomposeScopeImpl).t1i = function () {
    return !(this.u12_1 == null);
  };
  protoOf(RecomposeScopeImpl).v12 = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.u12_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (isInterface(instances, DerivedState)) {
      tmp_0 = checkDerivedStateChanged(instances, this, trackedDependencies);
    } else {
      if (instances instanceof ScatterSet) {
        var tmp_1;
        if (instances.hz()) {
          var tmp$ret$3;
          $l$block: {
            // Inline function 'androidx.collection.ScatterSet.any' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.collection.ScatterSet.forEach' call
            // Inline function 'kotlin.contracts.contract' call
            var k = instances.dz_1;
            $l$block_0: {
              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
              // Inline function 'kotlin.contracts.contract' call
              var m = instances.cz_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_0 = slot;
                  if (!this_0.c3(this_0.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                          var tmp_2 = k[index];
                          // Inline function 'androidx.collection.ScatterSet.any.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
                          var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                          var tmp_3;
                          if (!(!(it == null) ? isInterface(it, DerivedState) : false)) {
                            tmp_3 = true;
                          } else {
                            tmp_3 = checkDerivedStateChanged(it, this, trackedDependencies);
                          }
                          if (tmp_3) {
                            tmp$ret$3 = true;
                            break $l$block;
                          }
                        }
                        slot = slot.a3(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_0;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            tmp$ret$3 = false;
          }
          tmp_1 = tmp$ret$3;
        } else {
          tmp_1 = false;
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = true;
      }
    }
    return tmp_0;
  };
  protoOf(RecomposeScopeImpl).n1a = function () {
    var tmp0_safe_receiver = this.o12_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.t12_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>' call
        _set_rereading__pnqtpo(this, true);
        try {
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver_0.qw_1;
          var v = tmp0_safe_receiver_0.rw_1;
          $l$block: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver_0.pw_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.c3(this_0.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        var tmp_0 = k[index];
                        var tmp1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
                        v[index];
                        tmp0_safe_receiver.c1k(tmp1);
                      }
                      slot = slot.a3(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block;
                  }
                }
              }
               while (!(i === lastIndex));
          }
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_instance;
      }
    }
  };
  protoOf(RecomposeScopeImpl).z1f = function (token) {
    var tmp0_safe_receiver = this.t12_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.c1g()) {
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.any' call
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver.qw_1;
          var v = tmp0_safe_receiver.rw_1;
          $l$block_0: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver.pw_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.c3(this_0.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        var tmp_2 = k[index];
                        (tmp_2 == null ? true : !(tmp_2 == null)) || THROW_CCE();
                        // Inline function 'androidx.collection.ObjectIntMap.any.<anonymous>' call
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
                        if (!(v[index] === token)) {
                          tmp$ret$3 = true;
                          break $l$block;
                        }
                      }
                      slot = slot.a3(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp$ret$3 = false;
        }
        tmp_1 = tmp$ret$3;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    _init_properties_RecomposeScopeImpl_kt__t15emj();
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var properties_initialized_RecomposeScopeImpl_kt_pxgdx3;
  function _init_properties_RecomposeScopeImpl_kt__t15emj() {
    if (!properties_initialized_RecomposeScopeImpl_kt_pxgdx3) {
      properties_initialized_RecomposeScopeImpl_kt_pxgdx3 = true;
      callbackLock = new Object();
    }
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.m1n_1.e2();
      var new_0 = old.h(info);
      if (old === new_0 || $this.m1n_1.js(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.m1n_1.e2();
      var new_0 = old.v1(info);
      if (old === new_0 || $this.m1n_1.js(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(this$0, toRecompose, toInsert, toApply, toLateApply, toComplete, modifiedValues, alreadyComposed) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>' call
    toRecompose.y1();
    toInsert.y1();
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = toApply.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = toApply.p(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
        item.x1j();
        recordFailedCompositionLocked(this$0, item);
      }
       while (inductionVariable <= last);
    toApply.y1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = toLateApply.dz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = toLateApply.cz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= lastIndex)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.c3(this_0.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < bitCount)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index_0 = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp = k[index_0];
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  it.x1j();
                  recordFailedCompositionLocked(this$0, it);
                }
                slot = slot.a3(8);
              }
               while (inductionVariable_1 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    toLateApply.y1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k_0 = toComplete.dz_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m_0 = toComplete.cz_1;
      var lastIndex_0 = m_0.length - 2 | 0;
      var inductionVariable_2 = 0;
      if (inductionVariable_2 <= lastIndex_0)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var slot_0 = m_0[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot_0;
          if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
            var inductionVariable_3 = 0;
            if (inductionVariable_3 < bitCount_0)
              do {
                var j_0 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_0.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index_1 = (i_0 << 3) + j_0 | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp_0 = k_0[index_1];
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).r1k();
                }
                slot_0 = slot_0.a3(8);
              }
               while (inductionVariable_3 < bitCount_0);
            if (!(bitCount_0 === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i_0 === lastIndex_0));
    }
    toComplete.y1();
    modifiedValues.y1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k_1 = alreadyComposed.dz_1;
    $l$block_1: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m_1 = alreadyComposed.cz_1;
      var lastIndex_1 = m_1.length - 2 | 0;
      var inductionVariable_4 = 0;
      if (inductionVariable_4 <= lastIndex_1)
        do {
          var i_1 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var slot_1 = m_1[i_1];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_2 = slot_1;
          if (!this_2.c3(this_2.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
            var inductionVariable_5 = 0;
            if (inductionVariable_5 < bitCount_1)
              do {
                var j_1 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_1.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index_2 = (i_1 << 3) + j_1 | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp_1 = k_1[index_2];
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  var it_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                  it_0.x1j();
                  recordFailedCompositionLocked(this$0, it_0);
                }
                slot_1 = slot_1.a3(8);
              }
               while (inductionVariable_5 < bitCount_1);
            if (!(bitCount_1 === 8)) {
              break $l$block_1;
            }
          }
        }
         while (!(i_1 === lastIndex_1));
    }
    alreadyComposed.y1();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.y1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = this$0.y1n_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.h(item);
      }
       while (inductionVariable <= last);
    this$0.y1n_1.y1();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $modifiedValues, $alreadyComposed, $toInsert, $toApply, $modifiedValuesSet, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        var tmp0 = 'Recomposer:animation';
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token = Trace_instance.y1b(tmp0);
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>' call
            this$0.p1n_1.e12(frameTime);
            Companion_instance_12.n1o();
            break $l$block;
          }finally {
            Trace_instance.l1c(token);
          }
        }
        tmp = Unit_instance;
      }
      var tmp1 = 'Recomposer:recompose';
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_instance.y1b(tmp1);
        try {
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>' call
          recordComposerModifications(this$0);
          // Inline function 'androidx.compose.runtime.synchronized' call
          this$0.q1n_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
          var this_0 = this$0.w1n_1;
          // Inline function 'kotlin.contracts.contract' call
          var size = this_0.i1c_1;
          if (size > 0) {
            var i = 0;
            var tmp_0 = this_0.g1c_1;
            var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
            do {
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var it = content[i];
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.h(it);
              i = i + 1 | 0;
            }
             while (i < size);
          }
          this$0.w1n_1.y1();
          $modifiedValues.y1();
          $alreadyComposed.y1();
          $l$loop: while (true) {
            var tmp_1;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!$toRecompose.q()) {
              tmp_1 = true;
            } else {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_1 = !$toInsert.q();
            }
            if (!tmp_1) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_1 = $toRecompose;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable = 0;
              var last = this_1.m() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_1.p(index);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  var tmp0_safe_receiver = performRecompose(this$0, item, $modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toApply.h(tmp0_safe_receiver);
                  }
                  $alreadyComposed.h(item);
                }
                 while (inductionVariable <= last);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.y1();
            }
            if ($modifiedValues.hz() || this$0.w1n_1.hz()) {
              // Inline function 'androidx.compose.runtime.synchronized' call
              this$0.q1n_1;
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_2 = _get_knownCompositions__y8veaj(this$0);
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = this_2.m() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_2.p(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!$alreadyComposed.o(item_0) && item_0.a1k($modifiedValuesSet)) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.h(item_0);
                  }
                }
                 while (inductionVariable_0 <= last_0);
              // Inline function 'androidx.compose.runtime.collection.MutableVector.removeIf' call
              var this_3 = this$0.w1n_1;
              var gap = 0;
              var size_0 = this_3.i1c_1;
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < size_0)
                $l$loop_0: do {
                  var i_0 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var tmp_2 = this_3.g1c_1[i_0];
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  var value = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                  var tmp_3;
                  if (!$alreadyComposed.o(value) && !$toRecompose.o(value)) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.h(value);
                    tmp_3 = true;
                  } else {
                    tmp_3 = false;
                  }
                  if (tmp_3) {
                    gap = gap + 1 | 0;
                    continue $l$loop_0;
                  }
                  if (gap > 0) {
                    this_3.g1c_1[i_0 - gap | 0] = this_3.g1c_1[i_0];
                  }
                }
                 while (inductionVariable_1 < size_0);
              fill_0(this_3.g1c_1, null, size_0 - gap | 0, size_0);
              this_3.o1o(size_0 - gap | 0);
            }
            if ($toRecompose.q()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_1: while (true) {
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  if (!!$toInsert.q()) {
                    break $l$loop_1;
                  }
                  $toLateApply.x10(performInsertValues(this$0, $toInsert, $modifiedValues));
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                  return Unit_instance;
                } else {
                  throw $p;
                }
              }
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toApply.q()) {
            var tmp0_this = this$0;
            tmp0_this.o1n_1 = tmp0_this.o1n_1.w2();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_4 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_1 = this_4.m() - 1 | 0;
              if (inductionVariable_2 <= last_1)
                do {
                  var index_1 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_1 = this_4.p(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.h(item_1);
                }
                 while (inductionVariable_2 <= last_1);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_5 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_2 = this_5.m() - 1 | 0;
              if (inductionVariable_3 <= last_2)
                do {
                  var index_2 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_2 = this_5.p(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_2.p1k();
                }
                 while (inductionVariable_3 <= last_2);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.y1();
            }
          }
          if ($toLateApply.hz()) {
            try {
              $toComplete.z10($toLateApply);
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_6 = $toLateApply;
              // Inline function 'kotlin.contracts.contract' call
              var k = this_6.dz_1;
              $l$block_0: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m = this_6.cz_1;
                var lastIndex = m.length - 2 | 0;
                var inductionVariable_4 = 0;
                if (inductionVariable_4 <= lastIndex)
                  do {
                    var i_1 = inductionVariable_4;
                    inductionVariable_4 = inductionVariable_4 + 1 | 0;
                    var slot = m[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_7 = slot;
                    if (!this_7.c3(this_7.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount = 8 - (~(i_1 - lastIndex | 0) >>> 31 | 0) | 0;
                      var inductionVariable_5 = 0;
                      if (inductionVariable_5 < bitCount)
                        do {
                          var j = inductionVariable_5;
                          inductionVariable_5 = inductionVariable_5 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                            var index_3 = (i_1 << 3) + j | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            var tmp_4 = k[index_3];
                            // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                            ((tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE()).q1k();
                          }
                          slot = slot.a3(8);
                        }
                         while (inductionVariable_5 < bitCount);
                      if (!(bitCount === 8)) {
                        break $l$block_0;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex));
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.y1();
            }
          }
          if ($toComplete.hz()) {
            try {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_8 = $toComplete;
              // Inline function 'kotlin.contracts.contract' call
              var k_0 = this_8.dz_1;
              $l$block_1: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_0 = this_8.cz_1;
                var lastIndex_0 = m_0.length - 2 | 0;
                var inductionVariable_6 = 0;
                if (inductionVariable_6 <= lastIndex_0)
                  do {
                    var i_2 = inductionVariable_6;
                    inductionVariable_6 = inductionVariable_6 + 1 | 0;
                    var slot_0 = m_0[i_2];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_9 = slot_0;
                    if (!this_9.c3(this_9.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount_0 = 8 - (~(i_2 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_7 = 0;
                      if (inductionVariable_7 < bitCount_0)
                        do {
                          var j_0 = inductionVariable_7;
                          inductionVariable_7 = inductionVariable_7 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_0.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                            var index_4 = (i_2 << 3) + j_0 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            var tmp_5 = k_0[index_4];
                            // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                            ((tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE()).r1k();
                          }
                          slot_0 = slot_0.a3(8);
                        }
                         while (inductionVariable_7 < bitCount_0);
                      if (!(bitCount_0 === 8)) {
                        break $l$block_1;
                      }
                    }
                  }
                   while (!(i_2 === lastIndex_0));
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.y1();
            }
          }
          // Inline function 'androidx.compose.runtime.synchronized' call
          this$0.q1n_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          deriveStateLocked(this$0);
          Companion_instance_12.p1o();
          $alreadyComposed.y1();
          $modifiedValues.y1();
          this$0.c1o_1 = null;
          break $l$block_2;
        }finally {
          Trace_instance.l1c(token_0);
        }
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.q1n_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.i1o_1.e2().n2(State_Idle_getInstance()) >= 0) {
        var snapshotInvalidations = this$0.v1n_1;
        // Inline function 'androidx.compose.runtime.collection.fastForEach' call
        var tmp_0;
        if (changed instanceof ScatterSetWrapper) {
          var this_0 = changed.w1i_1;
          // Inline function 'kotlin.contracts.contract' call
          var k = this_0.dz_1;
          var tmp$ret$4;
          $l$block_0: {
            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
            // Inline function 'kotlin.contracts.contract' call
            var m = this_0.cz_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_1 = slot;
                if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                        var tmp_1 = k[index];
                        var tmp1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                        $l$block: {
                          // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                          var tmp_2;
                          if (tmp1 instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$2 = _ReaderKind___init__impl__jqeebu(1);
                            tmp_2 = !tmp1.q1o(tmp$ret$2);
                          } else {
                            tmp_2 = false;
                          }
                          if (tmp_2) {
                            break $l$block;
                          }
                          snapshotInvalidations.h(tmp1);
                        }
                      }
                      slot = slot.a3(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    tmp$ret$4 = Unit_instance;
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp_0 = tmp$ret$4;
        } else {
          var _iterator__ex2g4s = changed.j();
          while (_iterator__ex2g4s.k()) {
            var element = _iterator__ex2g4s.l();
            $l$block_1: {
              // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_3;
              if (element instanceof StateObjectImpl) {
                // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                var tmp$ret$5 = _ReaderKind___init__impl__jqeebu(1);
                tmp_3 = !element.q1o(tmp$ret$5);
              } else {
                tmp_3 = false;
              }
              if (tmp_3) {
                break $l$block_1;
              }
              snapshotInvalidations.h(element);
            }
          }
          tmp_0 = Unit_instance;
        }
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$10 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.h9(tmp$ret$10);
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.z1o_1 = $block;
    this.a1p_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).b1n = function ($this$coroutineScope, $completion) {
    var tmp = this.c1n($this$coroutineScope, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).q9 = function (p1, $completion) {
    return this.b1n((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 2;
            this.w8_1 = 1;
            suspendResult = this.z1o_1(this.b1p_1, this.a1p_1, this);
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
  protoOf(Recomposer$recompositionRunner$slambda$slambda).c1n = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.z1o_1, this.a1p_1, completion);
    i.b1p_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.b1n($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_knownCompositions__y8veaj($this) {
    var tmp0_elvis_lhs = $this.u1n_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.runtime.Recomposer.<get-knownCompositions>.<anonymous>' call
      var compositions = $this.t1n_1;
      var newCache = compositions.q() ? emptyList() : ArrayList_init_$Create$_1(compositions);
      $this.u1n_1 = newCache;
      tmp = newCache;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.h1o_1 && $this.p1n_1.d12();
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.i1o_1.e2().n2(State_ShuttingDown_getInstance()) <= 0) {
      clearKnownCompositionsLocked($this);
      $this.v1n_1 = new MutableScatterSet();
      $this.w1n_1.y1();
      $this.x1n_1.y1();
      $this.y1n_1.y1();
      $this.b1o_1 = null;
      var tmp0_safe_receiver = $this.d1o_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.rk();
      $this.d1o_1 = null;
      $this.g1o_1 = null;
      return null;
    }
    var tmp;
    if (!($this.g1o_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.r1n_1 == null) {
        $this.v1n_1 = new MutableScatterSet();
        $this.w1n_1.y1();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        if ($this.w1n_1.hz() || $this.v1n_1.hz()) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.x1n_1.q();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.y1n_1.q();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.e1o_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.i1o_1.is(newState);
    var tmp_4;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.d1o_1;
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.d1o_1 = null;
      tmp_4 = this_0;
    } else {
      tmp_4 = null;
    }
    return tmp_4;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.f1o_1) {
      tmp = true;
    } else {
      var tmp1 = $this.j1o_1.mq();
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var _iterator__ex2g4s = tmp1.j();
        while (_iterator__ex2g4s.k()) {
          var element = _iterator__ex2g4s.l();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.hi()) {
            tmp$ret$3 = true;
            break $l$block;
          }
        }
        tmp$ret$3 = false;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.c1p_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.d1p_1 = recoverable;
    this.e1p_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.v1n_1.q())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var this_0 = wrapIntoSet($this.v1n_1);
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.v1n_1 = new MutableScatterSet();
    var changes = this_0;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    var compositions = _get_knownCompositions__y8veaj($this);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = compositions.m() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.p(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.y1j(changes);
            if ($this.i1o_1.e2().n2(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.q1n_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
      $this.v1n_1 = new MutableScatterSet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        $this.q1n_1;
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        $this.v1n_1.u10(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      var message = 'called outside of runRecomposeAndApplyChanges';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.s1n_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    if ($this.i1o_1.e2().n2(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      var message = 'Recomposer shut down';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!($this.r1n_1 == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Recomposer already running';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $this.r1n_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_2().n1n_1.pn()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.q1n_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.x1n_1.y1();
      $this.w1n_1.y1();
      $this.v1n_1 = new MutableScatterSet();
      $this.y1n_1.y1();
      $this.z1n_1.y1();
      $this.a1o_1.y1();
      $this.g1o_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        recordFailedCompositionLocked($this, failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.q1n_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      var errorState = $this.g1o_1;
      if (errorState == null) {
        $this.g1o_1 = new RecomposerErrorState(false, e);
      } else {
        throw errorState.e1p_1;
      }
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function clearKnownCompositionsLocked($this) {
    $this.t1n_1.y1();
    $this.u1n_1 = emptyList();
  }
  function removeKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.minusAssign' call
    $this.t1n_1.v1(composition);
    $this.u1n_1 = null;
  }
  function addKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.plusAssign' call
    $this.t1n_1.h(composition);
    $this.u1n_1 = null;
  }
  function recordFailedCompositionLocked($this, composition) {
    var tmp0_elvis_lhs = $this.b1o_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'androidx.compose.runtime.Recomposer.recordFailedCompositionLocked.<anonymous>' call
      $this.b1o_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var failedCompositions = tmp;
    if (!failedCompositions.o(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      failedCompositions.h(composition);
    }
    removeKnownCompositionLocked($this, composition);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    return $this.v1n_1.hz() || $this.w1n_1.hz() || _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$2($this, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  }
  function recompositionRunner($this, block, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.c9();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.p1n_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>' call
    var tmp0 = $this.y1n_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.p(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.h1b_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1)
      return Unit_instance;
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.q()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.d1j() || composition.r1j()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.c1o_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_instance_12.o1p(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.p1p();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.hz()) === true) {
              composition.b1k(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.m1k();
            break $l$block;
          }finally {
            snapshot.q1p(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$(references.m());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.p(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.h1b_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.h2(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.y4(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.h(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.k2().j();
    while (tmp0_iterator.k()) {
      var tmp1_loop_parameter = tmp0_iterator.l();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.d2();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.e2();
      runtimeCheck(!composition.d1j());
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.o1p(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block_1: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.p1p();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              $this.q1n_1;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.m());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.m() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.p(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  var element = to(item_0, removeLastMultiValue($this.z1n_1, item_0.f1b_1));
                  target.h(element);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              var tmp_0;
              var tmp_1;
              var tmp$ret$12;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_1 = 0;
                var last_1 = pairs.m() - 1 | 0;
                if (inductionVariable_1 <= last_1)
                  do {
                    var index_1 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var item_1 = pairs.p(index_1);
                    // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    if (!(item_1.pe_1 == null)) {
                      tmp$ret$12 = false;
                      break $l$block;
                    }
                  }
                   while (inductionVariable_1 <= last_1);
                tmp$ret$12 = true;
              }
              if (tmp$ret$12) {
                tmp_1 = true;
              } else {
                var tmp$ret$14;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                  // Inline function 'kotlin.contracts.contract' call
                  var inductionVariable_2 = 0;
                  var last_2 = pairs.m() - 1 | 0;
                  if (inductionVariable_2 <= last_2)
                    do {
                      var index_2 = inductionVariable_2;
                      inductionVariable_2 = inductionVariable_2 + 1 | 0;
                      var item_2 = pairs.p(index_2);
                      // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                      if (!!(item_2.pe_1 == null)) {
                        tmp$ret$14 = false;
                        break $l$block_0;
                      }
                    }
                     while (inductionVariable_2 <= last_2);
                  tmp$ret$14 = true;
                }
                tmp_1 = tmp$ret$14;
              }
              if (tmp_1) {
                tmp_0 = pairs;
              } else {
                // Inline function 'androidx.compose.runtime.snapshots.fastMapNotNull' call
                // Inline function 'kotlin.contracts.contract' call
                var target_0 = ArrayList_init_$Create$_0(pairs.m());
                // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_3 = 0;
                var last_3 = pairs.m() - 1 | 0;
                if (inductionVariable_3 <= last_3)
                  do {
                    var index_3 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var item_3 = pairs.p(index_3);
                    // Inline function 'androidx.compose.runtime.snapshots.fastMapNotNull.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    var tmp0_safe_receiver = item_3.pe_1 == null ? item_3.oe_1 : null;
                    if (tmp0_safe_receiver == null)
                      null;
                    else {
                      // Inline function 'kotlin.let' call
                      // Inline function 'androidx.compose.runtime.snapshots.fastMapNotNull.<anonymous>.<anonymous>' call
                      // Inline function 'kotlin.collections.plusAssign' call
                      target_0.h(tmp0_safe_receiver);
                    }
                  }
                   while (inductionVariable_3 <= last_3);
                var toReturn = target_0;
                // Inline function 'androidx.compose.runtime.synchronized' call
                $this.q1n_1;
                // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                // Inline function 'kotlin.collections.plusAssign' call
                var this_0 = $this.y1n_1;
                addAll(this_0, toReturn);
                // Inline function 'androidx.compose.runtime.snapshots.fastFilterIndexed' call
                // Inline function 'kotlin.contracts.contract' call
                var target_1 = ArrayList_init_$Create$_0(pairs.m());
                // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_4 = 0;
                var last_4 = pairs.m() - 1 | 0;
                if (inductionVariable_4 <= last_4)
                  do {
                    var index_4 = inductionVariable_4;
                    inductionVariable_4 = inductionVariable_4 + 1 | 0;
                    var item_4 = pairs.p(index_4);
                    // Inline function 'androidx.compose.runtime.snapshots.fastFilterIndexed.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    if (!(item_4.pe_1 == null)) {
                      // Inline function 'kotlin.collections.plusAssign' call
                      target_1.h(item_4);
                    }
                  }
                   while (inductionVariable_4 <= last_4);
                tmp_0 = target_1;
              }
              var toInsert = tmp_0;
              composition.n1k(toInsert);
              break $l$block_1;
            }finally {
              snapshot.q1p(previous);
            }
          }
          break $l$block_2;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.i2());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.z1n_1.q()) {
      var references = flatten($this.z1n_1.j2());
      $this.z1n_1.y1();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.m());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.p(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          var element = to(item, $this.a1o_1.h2(item));
          target.h(element);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.a1o_1.y1();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.m() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.p(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.qe();
        var state = item_0.re();
        if (!(state == null)) {
          reference.h1b_1.o1k(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.e1q();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }finally {
      snapshot.cm();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    return $this.w1n_1.hz() || _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.m1n_1 = MutableStateFlow(persistentSetOf());
    this.n1n_1 = new AtomicReference(false);
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.y1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.fillToInsert.<anonymous>' call
    var iterator = this$0.y1n_1.j();
    while (iterator.k()) {
      var value = iterator.l();
      if (equals(value.h1b_1, $composition)) {
        toInsert.h(value);
        iterator.x3();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.q1n_1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = deriveStateLocked(this$0);
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.i1o_1.e2().n2(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.s1n_1);
      if (this_0 == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.h9(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.q1n_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1;
        if (runnerJobCause == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          var tmp_2;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!(runnerJobCause instanceof CancellationException)) {
            tmp_2 = runnerJobCause;
          } else {
            tmp_2 = null;
          }
          tmp_1 = tmp_2;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
        }
        tmp_0 = tmp0_safe_receiver;
      }
      tmp.s1n_1 = tmp_0;
      this$0.i1o_1.is(State_ShutDown_getInstance());
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.q1n_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.r1n_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.i1o_1.is(State_ShuttingDown_getInstance());
        if (!this$0.f1o_1) {
          runnerJob.mj(cancellation);
        } else if (!(this$0.d1o_1 == null)) {
          continuationToResume = this$0.d1o_1;
        }
        this$0.d1o_1 = null;
        tmp = runnerJob.hj(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.s1n_1 = cancellation;
        this$0.i1o_1.is(State_ShutDown_getInstance());
        tmp = Unit_instance;
      }
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.h9(tmp$ret$2);
      }
      return Unit_instance;
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.n1q_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).y1q = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.z1q($this$recompositionRunner, parentFrameClock, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).a1r = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.y1q(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 6;
            var tmp_0 = this;
            tmp_0.q1q_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.r1q_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.s1q_1 = ArrayList_init_$Create$();
            this.t1q_1 = mutableScatterSetOf_0();
            this.u1q_1 = mutableScatterSetOf_0();
            this.v1q_1 = new MutableScatterSet();
            this.w1q_1 = wrapIntoSet(this.v1q_1);
            this.x1q_1 = mutableScatterSetOf_0();
            this.w8_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.n1q_1)) {
              this.w8_1 = 5;
              continue $sm;
            }

            this.w8_1 = 2;
            suspendResult = awaitWorkAvailable(this.n1q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.n1q_1)) {
              this.w8_1 = 1;
              continue $sm;
            } else {
              this.w8_1 = 3;
              continue $sm;
            }

          case 3:
            this.w8_1 = 4;
            suspendResult = this.p1q_1.f12(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.n1q_1, this.q1q_1, this.v1q_1, this.x1q_1, this.r1q_1, this.s1q_1, this.w1q_1, this.t1q_1, this.u1q_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.n1q_1);
            this.w8_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x8_1 === 6) {
          throw e;
        } else {
          this.w8_1 = this.x8_1;
          this.z8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).z1q = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.n1q_1, completion);
    i.o1q_1 = $this$recompositionRunner;
    i.p1q_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.y1q($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.j1r_1 = this$0;
    this.k1r_1 = $block;
    this.l1r_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).b1n = function ($this$withContext, $completion) {
    var tmp = this.c1n($this$withContext, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(Recomposer$recompositionRunner$slambda).q9 = function (p1, $completion) {
    return this.b1n((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 5;
            this.n1r_1 = get_job(this.m1r_1.gi());
            registerRunnerJob(this.j1r_1, this.n1r_1);
            var tmp_0 = this;
            var tmp_1 = Companion_instance_12;
            tmp_0.o1r_1 = tmp_1.q1r(Recomposer$recompositionRunner$slambda$lambda(this.j1r_1));
            addRunning(Companion_getInstance_2(), this.j1r_1.l1o_1);
            this.w8_1 = 1;
            continue $sm;
          case 1:
            this.x8_1 = 4;
            this.j1r_1.q1n_1;
            var this_0 = _get_knownCompositions__y8veaj(this.j1r_1);
            var inductionVariable = 0;
            var last = this_0.m() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.p(index);
                item.t1k();
              }
               while (inductionVariable <= last);
            this.w8_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.k1r_1, this.l1r_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.p1r_1 = suspendResult;
            this.x8_1 = 5;
            this.w8_1 = 3;
            continue $sm;
          case 3:
            this.x8_1 = 5;
            this.o1r_1.cm();
            this.j1r_1.q1n_1;
            if (this.j1r_1.r1n_1 === this.n1r_1) {
              this.j1r_1.r1n_1 = null;
            }

            deriveStateLocked(this.j1r_1);
            removeRunning(Companion_getInstance_2(), this.j1r_1.l1o_1);
            return Unit_instance;
          case 4:
            this.x8_1 = 5;
            var t = this.z8_1;
            this.o1r_1.cm();
            this.j1r_1.q1n_1;
            if (this.j1r_1.r1n_1 === this.n1r_1) {
              this.j1r_1.r1n_1 = null;
            }

            deriveStateLocked(this.j1r_1);
            removeRunning(Companion_getInstance_2(), this.j1r_1.l1o_1);
            throw t;
          case 5:
            throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x8_1 === 5) {
          throw e;
        } else {
          this.w8_1 = this.x8_1;
          this.z8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda).c1n = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.j1r_1, this.k1r_1, this.l1r_1, completion);
    i.m1r_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.b1n($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      var this_0 = $modifiedValues;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.dz_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.cz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp = k[index];
                    // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
                    var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    $composition.l1k(it);
                  }
                  slot = slot.a3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      return Unit_instance;
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.c1k(value);
      return Unit_instance;
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.l1k(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.h(value);
      return Unit_instance;
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1p_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$2).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.n1p_1)) {
              this.w8_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.bm();
              this.n1p_1.q1n_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.n1p_1)) {
                tmp_0 = cancellable;
              } else {
                this.n1p_1.d1o_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.h9(_Result___init__impl__xyqfz8(Unit_instance));
              }
              suspendResult = returnIfSuspended(cancellable.ek(), this);
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
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_2();
    CompositionContext.call(this);
    this.o1n_1 = new Long(0, 0);
    var tmp = this;
    tmp.p1n_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.q1n_1 = new Object();
    this.r1n_1 = null;
    this.s1n_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.t1n_1 = ArrayList_init_$Create$();
    this.u1n_1 = null;
    this.v1n_1 = new MutableScatterSet();
    var tmp_1 = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$1 = fillArrayVal(Array(16), null);
    tmp_1.w1n_1 = new MutableVector(tmp$ret$1, 0);
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.x1n_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.y1n_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.z1n_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.a1o_1 = LinkedHashMap_init_$Create$();
    this.b1o_1 = null;
    this.c1o_1 = null;
    this.d1o_1 = null;
    this.e1o_1 = 0;
    this.f1o_1 = false;
    this.g1o_1 = null;
    this.h1o_1 = false;
    this.i1o_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Job(effectCoroutineContext.j9(Key_instance));
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    this_0.hj(Recomposer$effectJob$lambda(this));
    tmp_6.j1o_1 = this_0;
    this.k1o_1 = effectCoroutineContext.jg(this.p1n_1).jg(this.j1o_1);
    this.l1o_1 = new RecomposerInfoImpl(this);
  }
  protoOf(Recomposer).s1d = function () {
    return this.k1o_1;
  };
  protoOf(Recomposer).r1r = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).q1i = function (composition, content) {
    var composerWasComposing = composition.d1j();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.o1p(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.p1p();
            try {
              composition.t1j(content);
              break $l$block;
            }finally {
              snapshot.q1p(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_12.p1o();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.composeInitial.<anonymous>' call
    if (this.i1o_1.e2().n2(State_ShuttingDown_getInstance()) > 0) {
      if (!_get_knownCompositions__y8veaj(this).o(composition)) {
        addKnownCompositionLocked(this, composition);
      }
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    try {
      composition.p1k();
      composition.q1k();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_12.p1o();
    }
  };
  protoOf(Recomposer).j15 = function () {
    return 1000;
  };
  protoOf(Recomposer).h18 = function () {
    return Companion_getInstance_2().n1n_1.pn();
  };
  protoOf(Recomposer).g15 = function () {
    return false;
  };
  protoOf(Recomposer).h15 = function () {
    return false;
  };
  protoOf(Recomposer).i15 = function (table) {
  };
  protoOf(Recomposer).g1j = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.w1n_1.ge(composition)) {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.plusAssign' call
      this.w1n_1.j1c(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.h9(tmp$ret$2);
    }
  };
  protoOf(Recomposer).c1b = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.y1n_1.h(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.h9(tmp$ret$2);
    }
  };
  protoOf(Recomposer).g1d = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.z1n_1, reference.f1b_1, reference);
  };
  protoOf(Recomposer).c1l = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateReleased.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    this.a1o_1.y4(reference, data);
  };
  protoOf(Recomposer).f1d = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.c1o_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableSetOf' call
      // Inline function 'kotlin.also' call
      var this_0 = LinkedHashSet_init_$Create$();
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.c1o_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.h(composition);
  };
  protoOf(Recomposer).o1b = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.q1n_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.a1o_1.z4(reference);
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.h2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = removeFirst(tmp0_safe_receiver);
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.q()) {
        _this__u8e3s4.z4(key);
      }
      tmp = this_0;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.h2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.y4(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.h(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (!properties_initialized_Recomposer_kt_k8q2ph) {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function tryAnchor($this, index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.u14_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.tryAnchor.<anonymous>' call
      var tmp$ret$0 = 'use active SlotWriter to crate an anchor for location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    return (0 <= index ? index < $this.p14_1 : false) ? find($this.w14_1, index, $this.p14_1) : null;
  }
  function SlotTable() {
    this.o14_1 = new Int32Array(0);
    this.p14_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.q14_1 = tmp_1;
    this.r14_1 = 0;
    this.s14_1 = 0;
    this.t14_1 = new Object();
    this.u14_1 = false;
    this.v14_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.w14_1 = ArrayList_init_$Create$();
    this.x14_1 = null;
    this.y14_1 = null;
  }
  protoOf(SlotTable).l1a = function () {
    return this.p14_1 === 0;
  };
  protoOf(SlotTable).z14 = function () {
    if (this.u14_1) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot read while a writer is pending';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.s14_1 = this.s14_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).d18 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.u14_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var tmp$ret$0 = 'Cannot start a writer when another writer is pending';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.s14_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var tmp$ret$1 = 'Cannot start a writer when a reader is pending';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    this.u14_1 = true;
    this.v14_1 = this.v14_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).x17 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.u14_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var tmp$ret$0 = 'use active SlotWriter to create an anchor location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.p14_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var tmp$ret$1 = 'Parameter index is out of range';
      throwIllegalArgumentException(tmp$ret$1);
    }
    var tmp0 = this.w14_1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var effectiveSize = this.p14_1;
    var location = search(tmp0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      tmp0.a2(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0.p(location);
    }
    return tmp;
  };
  protoOf(SlotTable).m1b = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.u14_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var tmp$ret$0 = 'Use active SlotWriter to determine anchor location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.u1g()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var tmp$ret$1 = 'Anchor refers to a group that was removed';
      throwIllegalArgumentException(tmp$ret$1);
    }
    return anchor.f1c_1;
  };
  protoOf(SlotTable).x1k = function (anchor) {
    var tmp;
    if (anchor.u1g()) {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      var it = search(this.w14_1, anchor.f1c_1, this.p14_1);
      tmp = (it >= 0 && equals(this.w14_1.p(it), anchor));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).e1j = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.u14_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var tmp$ret$0 = 'Writer is active';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= groupIndex ? groupIndex < this.p14_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var tmp$ret$1 = 'Invalid group index';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    var tmp;
    if (this.x1k(anchor)) {
      var containsUpper = groupIndex + groupSize(this.o14_1, groupIndex) | 0;
      var containsArg = anchor.f1c_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).s1r = function (reader, sourceInformationMap) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(reader.y15_1 === this && this.s14_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var tmp$ret$0 = 'Unexpected reader close()';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.s14_1 = this.s14_1 - 1 | 0;
    if (!(sourceInformationMap == null)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.t14_1;
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var thisMap = this.x14_1;
      if (!(thisMap == null)) {
        thisMap.p5(sourceInformationMap);
      } else {
        this.x14_1 = sourceInformationMap;
      }
    }
  };
  protoOf(SlotTable).t1r = function (writer, groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.s16_1 === this && this.u14_1)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var tmp$ret$0 = 'Unexpected writer close()';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.u14_1 = false;
    this.u1r(groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap);
  };
  protoOf(SlotTable).u1r = function (groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap) {
    this.o14_1 = groups;
    this.p14_1 = groupsSize;
    this.q14_1 = slots;
    this.r14_1 = slotsSize;
    this.w14_1 = anchors;
    this.x14_1 = sourceInformationMap;
    this.y14_1 = calledByMap;
  };
  protoOf(SlotTable).r1c = function () {
    return this.p14_1 > 0 && containsMark(this.o14_1, 0);
  };
  protoOf(SlotTable).v1r = function (group) {
    var tmp0_safe_receiver = this.x14_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = tryAnchor(this, group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.h2(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SlotTable).g18 = function () {
    this.y14_1 = new MutableIntObjectMap();
  };
  protoOf(SlotTable).f18 = function () {
    this.x14_1 = HashMap_init_$Create$_0();
  };
  protoOf(SlotTable).i1n = function (group, slotIndex) {
    var start = slotAnchor(this.o14_1, group);
    var end = (group + 1 | 0) < this.p14_1 ? dataAnchor(this.o14_1, group + 1 | 0) : this.q14_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.q14_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance().n18_1;
    }
    return tmp;
  };
  protoOf(SlotTable).j = function () {
    return new GroupIterator(this, 0, this.p14_1);
  };
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.v19(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.l17_1);
    if (fromWriter.y16_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.c17_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.t16_1;
    var currentGroup = toWriter.l17_1;
    var tmp0 = fromWriter.t16_1;
    var tmp2 = imul(currentGroup, 5);
    var tmp3 = imul(fromIndex, 5);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, tmp2, tmp3, endIndex);
    var slots = toWriter.u16_1;
    var currentSlot = toWriter.a17_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = fromWriter.u16_1;
    arrayCopy(this_0, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.n17_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.e17_1;
    var slotsGapLen = toWriter.d17_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataIndex = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.c17_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.e17_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.v16_1, fromIndex, fromWriter.w1r());
    var endAnchors = locationOf(fromWriter.v16_1, sourceGroupsEnd, fromWriter.w1r());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.v16_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.p(anchorIndex);
          sourceAnchor.f1c_1 = sourceAnchor.f1c_1 + anchorDelta | 0;
          anchors.h(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.v16_1, toWriter.l17_1, toWriter.w1r());
      toWriter.v16_1.w1(insertLocation, anchors);
      sourceAnchors.c2(startAnchors, endAnchors).y1();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors_0.q()) {
      var sourceSourceInformationMap = fromWriter.w16_1;
      var destinationSourceInformation = toWriter.w16_1;
      if (!(sourceSourceInformationMap == null) && !(destinationSourceInformation == null)) {
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last = anchors_0.m() - 1 | 0;
        if (inductionVariable_1 <= last)
          do {
            var index = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item = anchors_0.p(index);
            // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
            var information = sourceSourceInformationMap.h2(item);
            if (!(information == null)) {
              sourceSourceInformationMap.z4(item);
              // Inline function 'kotlin.collections.set' call
              destinationSourceInformation.y4(item, information);
            }
          }
           while (inductionVariable_1 <= last);
      }
    }
    var toWriterParent = toWriter.n17_1;
    var tmp4_safe_receiver = sourceInformationOf(toWriter, parent);
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var predecessor = -1;
      var child = toWriterParent + 1 | 0;
      var endGroup = toWriter.l17_1;
      while (child < endGroup) {
        predecessor = child;
        child = child + groupSize(toWriter.t16_1, child) | 0;
      }
      tmp4_safe_receiver.d1s(toWriter, predecessor, endGroup);
    }
    var parentGroup = fromWriter.w17(fromIndex);
    var tmp_1;
    if (!removeSourceGroup) {
      tmp_1 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.l18();
        fromWriter.e1s(parentGroup - fromWriter.l17_1 | 0);
        fromWriter.l18();
      }
      fromWriter.e1s(fromIndex - fromWriter.l17_1 | 0);
      var anchorsRemoved = fromWriter.x1g();
      if (needsStartGroups) {
        fromWriter.e18();
        fromWriter.j1a();
        fromWriter.e18();
        fromWriter.j1a();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!anchorsRemoved_1) {
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var tmp$ret$14 = 'Unexpectedly removed anchors';
      composeImmediateRuntimeError(tmp$ret$14);
    }
    toWriter.g17_1 = toWriter.g17_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.l17_1 = currentGroup + groupsToMove | 0;
      toWriter.a17_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function rawUpdate($this, value) {
    var result = $this.f1s();
    $this.g1s(value);
    return result;
  }
  function groupSourceInformationFor($this, parent, sourceInformation) {
    var tmp0_safe_receiver = $this.w16_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.getOrPut' call
      var key = $this.x17(parent);
      var value = tmp0_safe_receiver.h2(key);
      var tmp_0;
      if (value == null) {
        // Inline function 'androidx.compose.runtime.SlotWriter.groupSourceInformationFor.<anonymous>' call
        var result = new GroupSourceInformation(0, sourceInformation, 0);
        if (sourceInformation == null) {
          var child = parent + 1 | 0;
          var end = $this.l17_1;
          while (child < end) {
            result.h1s($this, child);
            child = child + groupSize($this.t16_1, child) | 0;
          }
        }
        var answer = result;
        tmp0_safe_receiver.y4(key, answer);
        tmp_0 = answer;
      } else {
        tmp_0 = value;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function _get_currentGroupSlotIndex__p1glxf($this) {
    var tmp = $this.a17_1 - $this.i1s($this.n17_1) | 0;
    var tmp0_safe_receiver = $this.k17_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p($this.n17_1);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.m();
    return tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var previousParent = $this.n17_1;
    var inserting = $this.f17_1 > 0;
    $this.j17_1.e15($this.g17_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      var current = $this.l17_1;
      var newCurrentSlot = dataIndex_0($this.t16_1, $this, groupIndexToAddress($this, current));
      insertGroups($this, 1);
      $this.a17_1 = newCurrentSlot;
      $this.b17_1 = newCurrentSlot;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance().n18_1);
      var hasAux = !isNode && !(aux === Companion_getInstance().n18_1);
      var tmp0_gapLen = $this.d17_1;
      var tmp1_gapStart = $this.c17_1;
      var tmp2_capacity = $this.u16_1.length;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var anchor = dataIndexToDataAnchor($this, newCurrentSlot, tmp1_gapStart, tmp0_gapLen, tmp2_capacity);
      var tmp_1;
      if (anchor >= 0 && $this.e17_1 < current) {
        var slotsSize = $this.u16_1.length - $this.d17_1 | 0;
        tmp_1 = -((slotsSize - anchor | 0) + 1 | 0) | 0;
      } else {
        tmp_1 = anchor;
      }
      var dataAnchor = tmp_1;
      initGroup($this.t16_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.n17_1, dataAnchor);
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.u16_1;
        var currentSlot = $this.a17_1;
        if (isNode) {
          var tmp3 = currentSlot;
          currentSlot = tmp3 + 1 | 0;
          slots[tmp3] = aux;
        }
        if (hasObjectKey) {
          var tmp4 = currentSlot;
          currentSlot = tmp4 + 1 | 0;
          slots[tmp4] = objectKey;
        }
        if (hasAux) {
          var tmp5 = currentSlot;
          currentSlot = tmp5 + 1 | 0;
          slots[tmp5] = aux;
        }
        $this.a17_1 = currentSlot;
      }
      $this.g17_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.n17_1 = current;
      $this.l17_1 = newCurrent;
      if (previousParent >= 0) {
        var tmp6_safe_receiver = sourceInformationOf($this, previousParent);
        if (tmp6_safe_receiver == null)
          null;
        else {
          tmp6_safe_receiver.h1s($this, current);
        }
      }
      tmp_0 = newCurrent;
    } else {
      $this.h17_1.e15(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.l17_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance().n18_1)) {
        if (isNode) {
          $this.k1s(aux);
        } else {
          $this.j1s(aux);
        }
      }
      $this.a17_1 = slotIndex($this.t16_1, $this, currentGroupAddress);
      $this.b17_1 = dataIndex_0($this.t16_1, $this, groupIndexToAddress($this, $this.l17_1 + 1 | 0));
      $this.g17_1 = nodeCount($this.t16_1, currentGroupAddress);
      $this.n17_1 = currentGroup;
      $this.l17_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.t16_1, currentGroupAddress) | 0;
    }
    tmp.m17_1 = tmp_0;
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function containsGroupMark($this, group) {
    return group >= 0 && containsMark($this.t16_1, groupIndexToAddress($this, group));
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 && containsAnyMark($this.t16_1, groupIndexToAddress($this, group));
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.p17_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotWriter.recalculateMarks.<anonymous>' call
      while (tmp0_safe_receiver.hz()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.m1s(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.p17_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new PrioritySet();
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.p17_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.n1s(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.t16_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.t16_1, groupAddress, containsAnyMarks);
      var parent = $this.w17(group);
      if (parent >= 0) {
        set.n1s(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.v19(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.t16_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.v19(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.i17_1.e15((_get_capacity__a9k9f3($this) - $this.z16_1 | 0) - $this.m17_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.z16_1 | 0) - $this.i17_1.o16() | 0;
    $this.m17_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.y16_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.t16_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.t16_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.z16_1;
    var gapStart = $this.y16_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.v16_1.q()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.t16_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var destinationOffset = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, destinationOffset, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          var tmp9 = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, tmp9, endIndex);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.t16_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.t16_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.y16_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.d17_1;
    var gapStart = $this.c17_1;
    var slotsGapOwner = $this.e17_1;
    if (!(gapStart === index)) {
      var slots = $this.u16_1;
      if (index < gapStart) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = index + gapLen | 0;
        arrayCopy(slots, slots, destinationOffset, index, gapStart);
      } else {
        var tmp8 = gapStart + gapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, tmp8, endIndex);
      }
    }
    var tmp10 = group + 1 | 0;
    // Inline function 'kotlin.math.min' call
    var b = $this.w1r();
    var newSlotsGapOwner = Math.min(tmp10, b);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.u16_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.y16_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.t16_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var tmp$ret$3 = 'Unexpected anchor value, expected a positive anchor';
            composeImmediateRuntimeError(tmp$ret$3);
          }
          updateDataAnchor($this.t16_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.z16_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.t16_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var tmp$ret$4 = 'Unexpected anchor value, expected a negative anchor';
            composeImmediateRuntimeError(tmp$ret$4);
          }
          updateDataAnchor($this.t16_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.y16_1)
            updateAddress_0 = updateAddress_0 + $this.z16_1 | 0;
        }
      }
      $this.e17_1 = newSlotsGapOwner;
    }
    $this.c17_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.c17_1;
    var slotsGapEnd = slotsGapStart + $this.d17_1 | 0;
    fill_0($this.u16_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.l17_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.y16_1;
      var gapLen = $this.z16_1;
      var oldCapacity = $this.t16_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.t16_1;
        var tmp0 = imul(oldCapacity, 2);
        // Inline function 'kotlin.math.max' call
        var b = oldSize + size | 0;
        // Inline function 'kotlin.math.max' call
        var a = Math.max(tmp0, b);
        var newCapacity = Math.max(a, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, endIndex);
        var tmp11 = imul(newGapEndAddress, 5);
        var tmp12 = imul(oldGapEndAddress, 5);
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex_0 = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, tmp11, tmp12, endIndex_0);
        $this.t16_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.m17_1;
      if (currentEnd >= gapStart)
        $this.m17_1 = currentEnd + size | 0;
      $this.y16_1 = gapStart + size | 0;
      $this.z16_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.e17_1 < gapStart ? 0 : $this.c17_1, $this.d17_1, $this.u16_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.t16_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.e17_1;
      if (slotsGapOwner >= gapStart) {
        $this.e17_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.a17_1, group);
      var gapStart = $this.c17_1;
      var gapLen = $this.d17_1;
      if (gapLen < size) {
        var slots = $this.u16_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        var tmp0 = imul(oldCapacity, 2);
        // Inline function 'kotlin.math.max' call
        var b = oldSize + size | 0;
        // Inline function 'kotlin.math.max' call
        var a = Math.max(tmp0, b);
        var newCapacity = Math.max(a, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(newCapacity), null);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.u16_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.b17_1;
      if (currentDataEnd >= gapStart)
        $this.b17_1 = currentDataEnd + size | 0;
      $this.c17_1 = gapStart + size | 0;
      $this.d17_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.v16_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.q()) {
        anchorsRemoved = removeAnchors($this, start, len, $this.w16_1);
      }
      $this.y16_1 = start;
      var previousGapLen = $this.z16_1;
      var newGapLen = previousGapLen + len | 0;
      $this.z16_1 = newGapLen;
      var slotsGapOwner = $this.e17_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var b = slotsGapOwner - len | 0;
        tmp_0.e17_1 = Math.max(start, b);
      }
      if ($this.m17_1 >= $this.y16_1) {
        $this.m17_1 = $this.m17_1 - len | 0;
      }
      var parent = $this.n17_1;
      if (containsGroupMark($this, parent)) {
        updateContainsMark($this, parent);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function sourceInformationOf($this, group) {
    var tmp0_safe_receiver = $this.w16_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = $this.o1s(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.h2(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.d17_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.c17_1 = start;
      $this.d17_1 = gapLen + len | 0;
      fill_0($this.u16_1, null, start, start + len | 0);
      var currentDataEnd = $this.b17_1;
      if (currentDataEnd >= start)
        $this.b17_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(address < $this.t16_1.length && isNode($this.t16_1, address))) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var tmp$ret$0 = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $this.u16_1[dataIndexToDataAddress($this, nodeIndex($this.t16_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.z16_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.v16_1, previousGapStart, size);
      $l$loop_0: while (index < $this.v16_1.m()) {
        var anchor = $this.v16_1.p(index);
        var location = anchor.f1c_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.f1c_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.v16_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.v16_1.m()) {
        var anchor_0 = $this.v16_1.p(index_0);
        var location_0 = anchor_0.f1c_1;
        if (location_0 >= 0) {
          anchor_0.f1c_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size, sourceInformationMap) {
    var gapLen = $this.z16_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var it = locationOf($this.v16_1, gapStart + size | 0, groupsSize);
    var index = it >= $this.v16_1.m() ? it - 1 | 0 : it;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.v16_1.p(index);
      var location = $this.m1b(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.f1c_1 = -2147483648;
          if (sourceInformationMap == null)
            null;
          else
            sourceInformationMap.z4(anchor);
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var this_0 = removeAnchorStart < removeAnchorEnd;
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (this_0) {
      $this.v16_1.c2(removeAnchorStart, removeAnchorEnd).y1();
    }
    return this_0;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.w1r();
    var index = locationOf($this.v16_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.v16_1.m()) {
        var anchor = $this.v16_1.p(index);
        var location = $this.m1b(anchor);
        if (location >= originalLocation && location < end) {
          removedAnchors.h(anchor);
          $this.v16_1.b2(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.p(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.m1b(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.y16_1) {
          item.f1c_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.f1c_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.v16_1, newAnchorIndex, groupsSize);
        $this.v16_1.a2(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.t16_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.y16_1 ? index : index + $this.z16_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.c17_1 ? dataIndex : dataIndex + $this.d17_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.t16_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.u16_1.length - $this.d17_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.d17_1, $this.u16_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.u16_1.length - $this.d17_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.d17_1, $this.u16_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.c17_1, $this.d17_1, $this.u16_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.w1r() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.w1r() + index | 0) - -2 | 0;
  }
  function access$_get_groups__7d4n3r($this) {
    return $this.t16_1;
  }
  function access$_get_slots__7x4q9w($this) {
    return $this.u16_1;
  }
  function access$groupIndexToAddress($this, index) {
    return groupIndexToAddress($this, index);
  }
  function access$dataIndexToDataAddress($this, dataIndex) {
    return dataIndexToDataAddress($this, dataIndex);
  }
  function access$dataIndex($this, $receiver, address) {
    return dataIndex_0($receiver, $this, address);
  }
  function SlotWriter(table) {
    this.s16_1 = table;
    this.t16_1 = this.s16_1.o14_1;
    this.u16_1 = this.s16_1.q14_1;
    this.v16_1 = this.s16_1.w14_1;
    this.w16_1 = this.s16_1.x14_1;
    this.x16_1 = this.s16_1.y14_1;
    this.y16_1 = this.s16_1.p14_1;
    this.z16_1 = (this.t16_1.length / 5 | 0) - this.s16_1.p14_1 | 0;
    this.a17_1 = 0;
    this.b17_1 = 0;
    this.c17_1 = this.s16_1.r14_1;
    this.d17_1 = this.u16_1.length - this.s16_1.r14_1 | 0;
    this.e17_1 = this.s16_1.p14_1;
    this.f17_1 = 0;
    this.g17_1 = 0;
    this.h17_1 = new IntStack();
    this.i17_1 = new IntStack();
    this.j17_1 = new IntStack();
    this.k17_1 = null;
    this.l17_1 = 0;
    this.m17_1 = this.s16_1.p14_1;
    this.n17_1 = -1;
    this.o17_1 = false;
    this.p17_1 = null;
  }
  protoOf(SlotWriter).r1g = function () {
    return this.u16_1.length - this.d17_1 | 0;
  };
  protoOf(SlotWriter).v1f = function () {
    return this.l17_1 < this.m17_1 && isNode(this.t16_1, groupIndexToAddress(this, this.l17_1));
  };
  protoOf(SlotWriter).p1s = function () {
    return !(this.w16_1 == null);
  };
  protoOf(SlotWriter).q1s = function () {
    return !(this.x16_1 == null);
  };
  protoOf(SlotWriter).r1a = function (index) {
    return isNode(this.t16_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).s1a = function (index) {
    return nodeCount(this.t16_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).z17 = function (index) {
    return key(this.t16_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).a18 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.t16_1, address) ? this.u16_1[objectKeyIndex(this.t16_1, address)] : null;
  };
  protoOf(SlotWriter).v19 = function (index) {
    return groupSize(this.t16_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).y17 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.t16_1, address) ? this.u16_1[auxIndex(this.t16_1, this, address)] : Companion_getInstance().n18_1;
  };
  protoOf(SlotWriter).r1s = function (index) {
    return index > this.n17_1 && index < this.m17_1 || (this.n17_1 === 0 && index === 0);
  };
  protoOf(SlotWriter).s1s = function (index) {
    return this.t1s(index, this.l17_1);
  };
  protoOf(SlotWriter).t1s = function (index, group) {
    var tmp;
    if (group === this.n17_1) {
      tmp = this.m17_1;
    } else if (group > this.h17_1.v1s(0)) {
      tmp = group + this.v19(group) | 0;
    } else {
      var openIndex = this.h17_1.u1s(group);
      tmp = openIndex < 0 ? group + this.v19(group) | 0 : (_get_capacity__a9k9f3(this) - this.z16_1 | 0) - this.i17_1.q1a(openIndex) | 0;
    }
    var end = tmp;
    return index > group && index < end;
  };
  protoOf(SlotWriter).m1c = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.t16_1, address) ? this.u16_1[dataIndexToDataAddress(this, nodeIndex(this.t16_1, this, address))] : null;
  };
  protoOf(SlotWriter).w1s = function (anchor) {
    return this.m1c(anchor.x1s(this));
  };
  protoOf(SlotWriter).w17 = function (index) {
    return parent(this.t16_1, this, index);
  };
  protoOf(SlotWriter).i18 = function (normalClose) {
    this.o17_1 = true;
    if (normalClose && this.h17_1.q()) {
      moveGroupGapTo(this, this.w1r());
      moveSlotGapTo(this, this.u16_1.length - this.d17_1 | 0, this.y16_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.s16_1.t1r(this, this.t16_1, this.y16_1, this.u16_1, this.c17_1, this.v16_1, this.w16_1, this.x16_1);
  };
  protoOf(SlotWriter).y1s = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f17_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var tmp$ret$0 = 'Cannot reset when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    recalculateMarks(this);
    this.l17_1 = 0;
    this.m17_1 = _get_capacity__a9k9f3(this) - this.z16_1 | 0;
    this.a17_1 = 0;
    this.b17_1 = 0;
    this.g17_1 = 0;
  };
  protoOf(SlotWriter).b1f = function (value) {
    if (this.f17_1 > 0 && !(this.a17_1 === this.c17_1)) {
      var tmp0_elvis_lhs = this.k17_1;
      // Inline function 'kotlin.also' call
      var this_0 = tmp0_elvis_lhs == null ? new MutableIntObjectMap() : tmp0_elvis_lhs;
      // Inline function 'androidx.compose.runtime.SlotWriter.update.<anonymous>' call
      this.k17_1 = this_0;
      // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut' call
      var key = this.n17_1;
      var tmp0_elvis_lhs_0 = this_0.p(key);
      var tmp;
      if (tmp0_elvis_lhs_0 == null) {
        // Inline function 'androidx.compose.runtime.SlotWriter.update.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_1 = new MutableObjectList();
        // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut.<anonymous>' call
        this_0.bw(key, this_1);
        tmp = this_1;
      } else {
        tmp = tmp0_elvis_lhs_0;
      }
      var deferred = tmp;
      deferred.h(value);
      return Companion_getInstance().n18_1;
    }
    return rawUpdate(this, value);
  };
  protoOf(SlotWriter).z1s = function (anchor, value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f17_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.appendSlot.<anonymous>' call
      var tmp$ret$0 = 'Can only append a slot if not current inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var previousCurrentSlot = this.a17_1;
    var previousCurrentSlotEnd = this.b17_1;
    var anchorIndex = this.m1b(anchor);
    var slotIndex = dataIndex_0(this.t16_1, this, groupIndexToAddress(this, anchorIndex + 1 | 0));
    this.a17_1 = slotIndex;
    this.b17_1 = slotIndex;
    insertSlots(this, 1, anchorIndex);
    if (previousCurrentSlot >= slotIndex) {
      previousCurrentSlot = previousCurrentSlot + 1 | 0;
      previousCurrentSlotEnd = previousCurrentSlotEnd + 1 | 0;
    }
    this.u16_1[slotIndex] = value;
    this.a17_1 = previousCurrentSlot;
    this.b17_1 = previousCurrentSlotEnd;
  };
  protoOf(SlotWriter).a1t = function (count) {
    runtimeCheck(count > 0);
    var parent = this.n17_1;
    var groupSlotStart = slotIndex(this.t16_1, this, groupIndexToAddress(this, parent));
    var groupSlotEnd = dataIndex_0(this.t16_1, this, groupIndexToAddress(this, parent + 1 | 0));
    var removeStart = groupSlotEnd - count | 0;
    runtimeCheck(removeStart >= groupSlotStart);
    removeSlots(this, removeStart, count, parent);
    var currentSlot = this.a17_1;
    if (currentSlot >= groupSlotStart) {
      this.a17_1 = currentSlot - count | 0;
    }
  };
  protoOf(SlotWriter).j1s = function (value) {
    var address = groupIndexToAddress(this, this.l17_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!hasAux(this.t16_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var tmp$ret$0 = 'Updating the data of a group that was not created with a data slot';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.u16_1[dataIndexToDataAddress(this, auxIndex(this.t16_1, this, address))] = value;
  };
  protoOf(SlotWriter).f1g = function (sourceInformation) {
    if (this.f17_1 > 0) {
      groupSourceInformationFor(this, this.n17_1, sourceInformation);
    }
  };
  protoOf(SlotWriter).h1g = function (key, value) {
    if (this.f17_1 > 0) {
      var tmp0_safe_receiver = this.x16_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        add_0(tmp0_safe_receiver, key, this.z17(this.n17_1));
      }
      var tmp1_safe_receiver = groupSourceInformationFor(this, this.n17_1, null);
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.b1t(key, value, _get_currentGroupSlotIndex__p1glxf(this));
      }
    }
  };
  protoOf(SlotWriter).j1g = function () {
    if (this.f17_1 > 0) {
      var tmp0_safe_receiver = groupSourceInformationFor(this, this.n17_1, null);
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.c1t(_get_currentGroupSlotIndex__p1glxf(this));
      }
    }
  };
  protoOf(SlotWriter).k1s = function (value) {
    return updateNodeOfGroup(this, this.l17_1, value);
  };
  protoOf(SlotWriter).d1t = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.x1s(this), value);
  };
  protoOf(SlotWriter).g1s = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.a17_1 <= this.b17_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var tmp$ret$0 = 'Writing to an invalid slot';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.u16_1[dataIndexToDataAddress(this, this.a17_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).e1t = function (index, value) {
    return this.f1t(this.l17_1, index, value);
  };
  protoOf(SlotWriter).g1t = function (group, index) {
    var address = groupIndexToAddress(this, group);
    var slotsStart = slotIndex(this.t16_1, this, address);
    var slotsEnd = dataIndex_0(this.t16_1, this, groupIndexToAddress(this, group + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(slotsIndex >= slotsStart && slotsIndex < slotsEnd)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.slotIndexOfGroupSlotIndex.<anonymous>' call
      var tmp$ret$0 = 'Write to an invalid slot index ' + index + ' for group ' + group;
      composeImmediateRuntimeError(tmp$ret$0);
    }
    return slotsIndex;
  };
  protoOf(SlotWriter).f1t = function (group, index, value) {
    var slotsIndex = this.g1t(group, index);
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.u16_1[slotAddress];
    this.u16_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).f1s = function () {
    if (this.f17_1 > 0) {
      insertSlots(this, 1, this.n17_1);
    }
    var tmp = this.u16_1;
    var tmp1 = this.a17_1;
    this.a17_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).f1n = function (anchor, index) {
    return this.h1t(this.m1b(anchor), index);
  };
  protoOf(SlotWriter).h1t = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.t16_1, this, address);
    var slotsEnd = dataIndex_0(this.t16_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance().n18_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.u16_1[slotAddress];
  };
  protoOf(SlotWriter).i1s = function (groupIndex) {
    return slotIndex(this.t16_1, this, groupIndexToAddress(this, groupIndex));
  };
  protoOf(SlotWriter).i1t = function (groupIndex) {
    return dataIndex_0(this.t16_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
  };
  protoOf(SlotWriter).t1g = function (groupIndex) {
    return dataIndex_0(this.t16_1, this, groupIndexToAddress(this, groupIndex + this.v19(groupIndex) | 0));
  };
  protoOf(SlotWriter).e1s = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$0 = 'Cannot seek backwards';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f17_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$1 = 'Cannot call seek() while inserting';
      throwIllegalStateException(tmp$ret$1);
    }
    if (amount === 0)
      return Unit_instance;
    var index = this.l17_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= this.n17_1 && index <= this.m17_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$2 = 'Cannot seek outside the current group (' + this.n17_1 + '-' + this.m17_1 + ')';
      composeImmediateRuntimeError(tmp$ret$2);
    }
    this.l17_1 = index;
    var newSlot = dataIndex_0(this.t16_1, this, groupIndexToAddress(this, index));
    this.a17_1 = newSlot;
    this.b17_1 = newSlot;
  };
  protoOf(SlotWriter).e18 = function () {
    var newGroup = this.m17_1;
    this.l17_1 = newGroup;
    this.a17_1 = dataIndex_0(this.t16_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).e19 = function () {
    var tmp1 = this.f17_1;
    this.f17_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).k1a = function () {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f17_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var tmp$ret$0 = 'Unbalanced begin/end insert';
      throwIllegalStateException(tmp$ret$0);
    }
    this.f17_1 = this.f17_1 - 1 | 0;
    if (this.f17_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.j17_1.m() === this.h17_1.m())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var tmp$ret$1 = 'startGroup/endGroup mismatch while inserting';
        composeImmediateRuntimeError(tmp$ret$1);
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).l18 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f17_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var tmp$ret$0 = 'Key must be supplied when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    startGroup_1(this, 0, Companion_getInstance().n18_1, false, Companion_getInstance().n18_1);
  };
  protoOf(SlotWriter).p18 = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance().n18_1);
  };
  protoOf(SlotWriter).r18 = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance().n18_1);
  };
  protoOf(SlotWriter).q18 = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).j1a = function () {
    var inserting = this.f17_1 > 0;
    var currentGroup = this.l17_1;
    var currentGroupEnd = this.m17_1;
    var groupIndex = this.n17_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.g17_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.t16_1, groupAddress);
    if (inserting) {
      var deferredSlotWrites = this.k17_1;
      var tmp1_safe_receiver = deferredSlotWrites == null ? null : deferredSlotWrites.p(groupIndex);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        // Inline function 'androidx.collection.ObjectList.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var content = tmp1_safe_receiver.dx_1;
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.ex_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp = content[i];
            // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>.<anonymous>' call
            var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
            rawUpdate(this, value);
          }
           while (inductionVariable < last);
        deferredSlotWrites.cw(groupIndex);
      }
      updateGroupSize(this.t16_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.t16_1, groupAddress, newNodes);
      this.g17_1 = this.j17_1.o16() + (isNode_0 ? 1 : newNodes) | 0;
      this.n17_1 = parent(this.t16_1, this, groupIndex);
      var nextAddress = this.n17_1 < 0 ? this.w1r() : groupIndexToAddress(this, this.n17_1 + 1 | 0);
      var newCurrentSlot = nextAddress < 0 ? 0 : dataIndex_0(this.t16_1, this, nextAddress);
      this.a17_1 = newCurrentSlot;
      this.b17_1 = newCurrentSlot;
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var tmp$ret$2 = 'Expected to be at the end of a group';
        composeImmediateRuntimeError(tmp$ret$2);
      }
      var oldGroupSize = groupSize(this.t16_1, groupAddress);
      var oldNodes = nodeCount(this.t16_1, groupAddress);
      updateGroupSize(this.t16_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.t16_1, groupAddress, newNodes);
      var newParent = this.h17_1.o16();
      restoreCurrentGroupEnd(this);
      this.n17_1 = newParent;
      var groupParent = parent(this.t16_1, this, groupIndex);
      this.g17_1 = this.j17_1.o16();
      if (groupParent === newParent) {
        this.g17_1 = this.g17_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) || !(nodesDelta === 0)) {
          var current = groupParent;
          while (!(current === 0) && !(current === newParent) && (!(nodesDelta === 0) || !(groupSizeDelta === 0))) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.t16_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.t16_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.t16_1, currentAddress, nodeCount(this.t16_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.t16_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.t16_1, this, current);
          }
        }
        this.g17_1 = this.g17_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).j1t = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f17_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var tmp$ret$0 = 'Cannot call ensureStarted() while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var parent = this.n17_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(index >= parent && index < this.m17_1)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var tmp$ret$1 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeImmediateRuntimeError(tmp$ret$1);
      }
      var oldCurrent = this.l17_1;
      var oldCurrentSlot = this.a17_1;
      var oldCurrentSlotEnd = this.b17_1;
      this.l17_1 = index;
      this.l18();
      this.l17_1 = oldCurrent;
      this.a17_1 = oldCurrentSlot;
      this.b17_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).k1t = function (anchor) {
    return this.j1t(anchor.x1s(this));
  };
  protoOf(SlotWriter).t17 = function () {
    var groupAddress = groupIndexToAddress(this, this.l17_1);
    var newGroup = this.l17_1 + groupSize(this.t16_1, groupAddress) | 0;
    this.l17_1 = newGroup;
    this.a17_1 = dataIndex_0(this.t16_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.t16_1, groupAddress) ? 1 : nodeCount(this.t16_1, groupAddress);
  };
  protoOf(SlotWriter).x1g = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f17_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot remove group while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var oldGroup = this.l17_1;
    var oldSlot = this.a17_1;
    var dataStart = dataIndex_0(this.t16_1, this, groupIndexToAddress(this, oldGroup));
    var count = this.t17();
    var tmp0_safe_receiver = sourceInformationOf(this, this.n17_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp0_safe_receiver_0 = this.o1s(oldGroup);
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>.<anonymous>' call
        tmp = tmp0_safe_receiver.l1t(tmp0_safe_receiver_0);
      }
    }
    var tmp1_safe_receiver = this.p17_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      while (tmp1_safe_receiver.hz() && tmp1_safe_receiver.h1e() >= oldGroup) {
        tmp1_safe_receiver.m1s();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.l17_1 - oldGroup | 0);
    removeSlots(this, dataStart, this.a17_1 - dataStart | 0, oldGroup - 1 | 0);
    this.l17_1 = oldGroup;
    this.a17_1 = oldSlot;
    this.g17_1 = this.g17_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).m1t = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f17_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot move a group while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(offset >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$1 = 'Parameter offset is out of bounds';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    if (offset === 0)
      return Unit_instance;
    var current = this.l17_1;
    var parent = this.n17_1;
    var parentEnd = this.m17_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.t16_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var tmp$ret$2 = 'Parameter offset is out of bounds';
        composeImmediateRuntimeError(tmp$ret$2);
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.t16_1, groupIndexToAddress(this, groupToMove));
    var destinationSlot = dataIndex_0(this.t16_1, this, groupIndexToAddress(this, this.l17_1));
    var dataStart = dataIndex_0(this.t16_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.t16_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    // Inline function 'kotlin.math.max' call
    var a = this.l17_1 - 1 | 0;
    var tmp$ret$3 = Math.max(a, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.t16_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    var tmp7 = imul(currentAddress, 5);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, tmp7, moveLocationOffset, endIndex);
    if (moveDataLen > 0) {
      var slots = this.u16_1;
      var tmp13 = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex_0 = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, destinationSlot, tmp13, endIndex_0);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - destinationSlot | 0;
    var slotsGapStart = this.c17_1;
    var slotsGapLen = this.d17_1;
    var slotsCapacity = this.u16_1.length;
    var slotsGapOwner = this.e17_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!anchorsRemoved) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$10 = 'Unexpectedly removed anchors';
      composeImmediateRuntimeError(tmp$ret$10);
    }
    fixParentAnchorsFor(this, parent, this.m17_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).n1t = function (anchor, offset, writer) {
    runtimeCheck(writer.f17_1 > 0);
    runtimeCheck(this.f17_1 === 0);
    runtimeCheck(anchor.u1g());
    var location = this.m1b(anchor) + offset | 0;
    var currentGroup = this.l17_1;
    runtimeCheck(currentGroup <= location ? location < this.m17_1 : false);
    var parent = this.w17(location);
    var size = this.v19(location);
    var nodes = this.r1a(location) ? 1 : this.s1a(location);
    var result = moveGroup$default(Companion_instance_4, this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.t16_1, currentAddress, groupSize(this.t16_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.t16_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.t16_1, currentAddress, nodeCount(this.t16_1, currentAddress) - nodes | 0);
        }
      }
      current = this.w17(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.g17_1 >= nodes);
      this.g17_1 = this.g17_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).o1t = function (table, index, removeSourceGroup) {
    runtimeCheck(this.f17_1 > 0);
    if (index === 0 && this.l17_1 === 0 && this.s16_1.p14_1 === 0 && groupSize(table.o14_1, index) === table.p14_1) {
      var myGroups = this.t16_1;
      var mySlots = this.u16_1;
      var myAnchors = this.v16_1;
      var mySourceInformation = this.w16_1;
      var myCallInformation = this.x16_1;
      var groups = table.o14_1;
      var groupsSize = table.p14_1;
      var slots = table.q14_1;
      var slotsSize = table.r14_1;
      var sourceInformation = table.x14_1;
      var callInformation = table.y14_1;
      this.t16_1 = groups;
      this.u16_1 = slots;
      this.v16_1 = table.w14_1;
      this.y16_1 = groupsSize;
      this.z16_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.c17_1 = slotsSize;
      this.d17_1 = slots.length - slotsSize | 0;
      this.e17_1 = groupsSize;
      this.w16_1 = sourceInformation;
      this.x16_1 = callInformation;
      table.u1r(myGroups, 0, mySlots, 0, myAnchors, mySourceInformation, myCallInformation);
      return this.v16_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.d18();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = moveGroup(Companion_instance_4, writer, index, this, true, true, removeSourceGroup);
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = this_0;
    }finally {
      writer.i18(normalClose);
    }
    return tmp;
  };
  protoOf(SlotWriter).p1t = function (offset, table, index) {
    runtimeCheck(this.f17_1 <= 0 && this.v19(this.l17_1 + offset | 0) === 1);
    var previousCurrentGroup = this.l17_1;
    var previousCurrentSlot = this.a17_1;
    var previousCurrentSlotEnd = this.b17_1;
    this.e1s(offset);
    this.l18();
    this.e19();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.d18();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = moveGroup$default(Companion_instance_4, writer, index, this, false, true);
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = this_0;
    }finally {
      writer.i18(normalClose);
    }
    var anchors = tmp;
    this.k1a();
    this.j1a();
    this.l17_1 = previousCurrentGroup;
    this.a17_1 = previousCurrentSlot;
    this.b17_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).x17 = function (index) {
    var tmp0 = this.v16_1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var effectiveSize = this.w1r();
    var location = search(tmp0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.y16_1 ? index : -(this.w1r() - index | 0) | 0);
      tmp0.a2(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0.p(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).q1t = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.t16_1, groupAddress)) {
      updateMark(this.t16_1, groupAddress, true);
      if (!containsMark(this.t16_1, groupAddress)) {
        updateContainsMark(this, this.w17(group));
      }
    }
  };
  protoOf(SlotWriter).b1b = function (group, $super) {
    group = group === VOID ? this.n17_1 : group;
    var tmp;
    if ($super === VOID) {
      this.q1t(group);
      tmp = Unit_instance;
    } else {
      tmp = $super.q1t.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).m1b = function (anchor) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    var it = anchor.f1c_1;
    return it < 0 ? this.w1r() + it | 0 : it;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.l17_1 + ' end=' + this.m17_1 + ' size = ' + this.w1r() + ' ' + ('gap=' + this.y16_1 + '-' + (this.y16_1 + this.z16_1 | 0) + ')');
  };
  protoOf(SlotWriter).o1s = function (group) {
    return (0 <= group ? group < this.w1r() : false) ? find(this.v16_1, group, this.w1r()) : null;
  };
  protoOf(SlotWriter).w1r = function () {
    return _get_capacity__a9k9f3(this) - this.z16_1 | 0;
  };
  function Anchor(loc) {
    this.f1c_1 = loc;
  }
  protoOf(Anchor).u1g = function () {
    return !(this.f1c_1 === -2147483648);
  };
  protoOf(Anchor).u1f = function (slots) {
    return slots.m1b(this);
  };
  protoOf(Anchor).x1s = function (writer) {
    return writer.m1b(this);
  };
  protoOf(Anchor).toString = function () {
    return anyToString(this) + '{ location = ' + this.f1c_1 + ' }';
  };
  function openInformation($this) {
    var tmp0_safe_receiver = $this.a1s_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.fastLastOrNull' call
        var index = tmp0_safe_receiver.m() - 1 | 0;
        while (index >= 0) {
          var value = tmp0_safe_receiver.p(index);
          // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>.<anonymous>' call
          var tmp_0;
          if (value instanceof GroupSourceInformation) {
            tmp_0 = !value.b1s_1;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$1 = value;
            break $l$block;
          }
          index = index - 1 | 0;
        }
        tmp$ret$1 = null;
      }
      tmp = tmp$ret$1;
    }
    var tmp_1 = tmp;
    var tmp1_safe_receiver = tmp_1 instanceof GroupSourceInformation ? tmp_1 : null;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : openInformation(tmp1_safe_receiver);
    return tmp2_elvis_lhs == null ? $this : tmp2_elvis_lhs;
  }
  function add($this, group) {
    var tmp0_elvis_lhs = $this.a1s_1;
    var groups = tmp0_elvis_lhs == null ? ArrayList_init_$Create$() : tmp0_elvis_lhs;
    $this.a1s_1 = groups;
    groups.h(group);
  }
  function hasAnchor($this, anchor) {
    var tmp0_safe_receiver = $this.a1s_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.m() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.p(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.hasAnchor.<anonymous>' call
            var tmp_0;
            if (equals(item, anchor)) {
              tmp_0 = true;
            } else {
              var tmp_1;
              if (item instanceof GroupSourceInformation) {
                tmp_1 = hasAnchor(item, anchor);
              } else {
                tmp_1 = false;
              }
              tmp_0 = tmp_1;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    }
    return tmp === true;
  }
  function GroupSourceInformation(key, sourceInformation, dataStartOffset) {
    this.x1r_1 = key;
    this.y1r_1 = sourceInformation;
    this.z1r_1 = dataStartOffset;
    this.a1s_1 = null;
    this.b1s_1 = false;
    this.c1s_1 = 0;
  }
  protoOf(GroupSourceInformation).b1t = function (key, sourceInformation, dataOffset) {
    add(openInformation(this), new GroupSourceInformation(key, sourceInformation, dataOffset));
  };
  protoOf(GroupSourceInformation).c1t = function (dataOffset) {
    openInformation(this).r1t(dataOffset);
  };
  protoOf(GroupSourceInformation).h1s = function (writer, group) {
    add(openInformation(this), writer.x17(group));
  };
  protoOf(GroupSourceInformation).s1t = function (table, group) {
    add(openInformation(this), table.x17(group));
  };
  protoOf(GroupSourceInformation).d1s = function (writer, predecessor, group) {
    var tmp0_elvis_lhs = this.a1s_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
      this.a1s_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var groups = tmp;
    var tmp_0;
    if (predecessor >= 0) {
      var anchor = writer.o1s(predecessor);
      var tmp_1;
      if (!(anchor == null)) {
        var tmp$ret$2;
        $l$block: {
          // Inline function 'androidx.compose.runtime.fastIndexOf' call
          var index = 0;
          var size = groups.m();
          while (index < size) {
            var value = groups.p(index);
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
            var tmp_2;
            if (equals(value, anchor)) {
              tmp_2 = true;
            } else {
              var tmp_3;
              if (value instanceof GroupSourceInformation) {
                tmp_3 = hasAnchor(value, anchor);
              } else {
                tmp_3 = false;
              }
              tmp_2 = tmp_3;
            }
            if (tmp_2) {
              tmp$ret$2 = index;
              break $l$block;
            }
            index = index + 1 | 0;
          }
          tmp$ret$2 = -1;
        }
        tmp_1 = tmp$ret$2;
      } else {
        tmp_1 = 0;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = 0;
    }
    var index_0 = tmp_0;
    groups.a2(index_0, writer.x17(group));
  };
  protoOf(GroupSourceInformation).r1t = function (dataOffset) {
    this.b1s_1 = true;
    this.c1s_1 = dataOffset;
  };
  protoOf(GroupSourceInformation).l1t = function (anchor) {
    var groups = this.a1s_1;
    if (!(groups == null)) {
      var index = groups.m() - 1 | 0;
      while (index >= 0) {
        var item = groups.p(index);
        if (item instanceof Anchor) {
          if (equals(item, anchor)) {
            groups.b2(index);
          }
        } else {
          if (item instanceof GroupSourceInformation)
            if (!item.l1t(anchor)) {
              groups.b2(index);
            }
        }
        index = index - 1 | 0;
      }
      if (groups.q()) {
        this.a1s_1 = null;
        return false;
      }
      return true;
    }
    return true;
  };
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.b16_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance().n18_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.b16_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance().n18_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.b16_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.y15_1 = table;
    this.z15_1 = this.y15_1.o14_1;
    this.a16_1 = this.y15_1.p14_1;
    this.b16_1 = this.y15_1.q14_1;
    this.c16_1 = this.y15_1.r14_1;
    this.d16_1 = null;
    this.e16_1 = false;
    this.f16_1 = 0;
    this.g16_1 = this.a16_1;
    this.h16_1 = -1;
    this.i16_1 = new IntStack();
    this.j16_1 = 0;
    this.k16_1 = 0;
    this.l16_1 = 0;
    this.m16_1 = false;
  }
  protoOf(SlotReader).m = function () {
    return this.a16_1;
  };
  protoOf(SlotReader).w17 = function (index) {
    return parentAnchor(this.z15_1, index);
  };
  protoOf(SlotReader).v1f = function () {
    return isNode(this.z15_1, this.f16_1);
  };
  protoOf(SlotReader).r1a = function (index) {
    return isNode(this.z15_1, index);
  };
  protoOf(SlotReader).s1a = function (index) {
    return nodeCount(this.z15_1, index);
  };
  protoOf(SlotReader).m1c = function (index) {
    return isNode(this.z15_1, index) ? node(this.z15_1, this, index) : null;
  };
  protoOf(SlotReader).b1a = function () {
    return this.m1a() || this.f16_1 === this.g16_1;
  };
  protoOf(SlotReader).m1a = function () {
    return this.j16_1 > 0;
  };
  protoOf(SlotReader).t1t = function () {
    return groupSize(this.z15_1, this.f16_1);
  };
  protoOf(SlotReader).v19 = function (index) {
    return groupSize(this.z15_1, index);
  };
  protoOf(SlotReader).a1a = function () {
    return this.g16_1;
  };
  protoOf(SlotReader).a19 = function () {
    var tmp;
    if (this.f16_1 < this.g16_1) {
      tmp = key(this.z15_1, this.f16_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).z17 = function (index) {
    return key(this.z15_1, index);
  };
  protoOf(SlotReader).x1e = function () {
    return this.k16_1 - slotAnchor(this.z15_1, this.h16_1) | 0;
  };
  protoOf(SlotReader).t1a = function (index) {
    return hasObjectKey(this.z15_1, index);
  };
  protoOf(SlotReader).w1d = function () {
    return this.f16_1 < this.g16_1 && hasObjectKey(this.z15_1, this.f16_1);
  };
  protoOf(SlotReader).c19 = function () {
    return this.f16_1 < this.g16_1 ? objectKey(this.z15_1, this, this.f16_1) : null;
  };
  protoOf(SlotReader).a18 = function (index) {
    return objectKey(this.z15_1, this, index);
  };
  protoOf(SlotReader).k18 = function () {
    return this.f16_1 < this.g16_1 ? aux(this.z15_1, this, this.f16_1) : 0;
  };
  protoOf(SlotReader).y17 = function (index) {
    return aux(this.z15_1, this, index);
  };
  protoOf(SlotReader).k1d = function (index) {
    return hasMark(this.z15_1, index);
  };
  protoOf(SlotReader).u1c = function (index) {
    return containsMark(this.z15_1, index);
  };
  protoOf(SlotReader).v1a = function () {
    return this.h16_1 >= 0 ? nodeCount(this.z15_1, this.h16_1) : 0;
  };
  protoOf(SlotReader).d1a = function () {
    return this.l16_1 - this.k16_1 | 0;
  };
  protoOf(SlotReader).v1c = function (group, index) {
    var start = slotAnchor(this.z15_1, group);
    var next = group + 1 | 0;
    var end = next < this.a16_1 ? dataAnchor(this.z15_1, next) : this.c16_1;
    var address = start + index | 0;
    return address < end ? this.b16_1[address] : Companion_getInstance().n18_1;
  };
  protoOf(SlotReader).l = function () {
    if (this.j16_1 > 0 || this.k16_1 >= this.l16_1) {
      this.m16_1 = false;
      return Companion_getInstance().n18_1;
    }
    this.m16_1 = true;
    var tmp1 = this.k16_1;
    this.k16_1 = tmp1 + 1 | 0;
    return this.b16_1[tmp1];
  };
  protoOf(SlotReader).o18 = function () {
    this.j16_1 = this.j16_1 + 1 | 0;
  };
  protoOf(SlotReader).i1a = function () {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j16_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var tmp$ret$0 = 'Unbalanced begin/end empty';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.j16_1 = this.j16_1 - 1 | 0;
  };
  protoOf(SlotReader).n16 = function () {
    this.e16_1 = true;
    this.y15_1.s1r(this, this.d16_1);
  };
  protoOf(SlotReader).l18 = function () {
    if (this.j16_1 <= 0) {
      var parent = this.h16_1;
      var currentGroup = this.f16_1;
      // Inline function 'androidx.compose.runtime.requirePrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.z15_1, currentGroup) === parent)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var tmp$ret$0 = 'Invalid slot table detected';
        throwIllegalArgumentException(tmp$ret$0);
      }
      var tmp0_safe_receiver = this.d16_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h2(this.x17(parent));
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.s1t(this.y15_1, currentGroup);
      }
      var currentSlotStack = this.i16_1;
      var currentSlot = this.k16_1;
      var currentEndSlot = this.l16_1;
      if (currentSlot === 0 && currentEndSlot === 0) {
        currentSlotStack.e15(-1);
      } else {
        currentSlotStack.e15(currentSlot);
      }
      this.h16_1 = currentGroup;
      this.g16_1 = currentGroup + groupSize(this.z15_1, currentGroup) | 0;
      this.f16_1 = currentGroup + 1 | 0;
      this.k16_1 = slotAnchor(this.z15_1, currentGroup);
      this.l16_1 = currentGroup >= (this.a16_1 - 1 | 0) ? this.c16_1 : dataAnchor(this.z15_1, currentGroup + 1 | 0);
    }
  };
  protoOf(SlotReader).m18 = function () {
    if (this.j16_1 <= 0) {
      // Inline function 'androidx.compose.runtime.requirePrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.z15_1, this.f16_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var tmp$ret$0 = 'Expected a node group';
        throwIllegalArgumentException(tmp$ret$0);
      }
      this.l18();
    }
  };
  protoOf(SlotReader).t17 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j16_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot skip while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var count = isNode(this.z15_1, this.f16_1) ? 1 : nodeCount(this.z15_1, this.f16_1);
    this.f16_1 = this.f16_1 + groupSize(this.z15_1, this.f16_1) | 0;
    return count;
  };
  protoOf(SlotReader).e18 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j16_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var tmp$ret$0 = 'Cannot skip the enclosing group while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.f16_1 = this.g16_1;
    this.k16_1 = 0;
    this.l16_1 = 0;
  };
  protoOf(SlotReader).o19 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j16_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var tmp$ret$0 = 'Cannot reposition while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.f16_1 = index;
    var parent = index < this.a16_1 ? parentAnchor(this.z15_1, index) : -1;
    this.h16_1 = parent;
    if (parent < 0)
      this.g16_1 = this.a16_1;
    else
      this.g16_1 = parent + groupSize(this.z15_1, parent) | 0;
    this.k16_1 = 0;
    this.l16_1 = 0;
  };
  protoOf(SlotReader).p1a = function (index) {
    var newCurrentEnd = index + groupSize(this.z15_1, index) | 0;
    var current = this.f16_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(current >= index && current <= newCurrentEnd)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var tmp$ret$0 = 'Index ' + index + ' is not a parent of ' + current;
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.h16_1 = index;
    this.g16_1 = newCurrentEnd;
    this.k16_1 = 0;
    this.l16_1 = 0;
  };
  protoOf(SlotReader).g1a = function () {
    if (this.j16_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.f16_1 === this.g16_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var tmp$ret$0 = 'endGroup() not called at the end of a group';
        composeImmediateRuntimeError(tmp$ret$0);
      }
      var parent = parentAnchor(this.z15_1, this.h16_1);
      this.h16_1 = parent;
      this.g16_1 = parent < 0 ? this.a16_1 : parent + groupSize(this.z15_1, parent) | 0;
      var currentSlotStack = this.i16_1;
      var newCurrentSlot = currentSlotStack.o16();
      if (newCurrentSlot < 0) {
        this.k16_1 = 0;
        this.l16_1 = 0;
      } else {
        this.k16_1 = newCurrentSlot;
        this.l16_1 = parent >= (this.a16_1 - 1 | 0) ? this.c16_1 : dataAnchor(this.z15_1, parent + 1 | 0);
      }
    }
  };
  protoOf(SlotReader).b19 = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.j16_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.f16_1;
    while (childIndex < this.g16_1) {
      var tmp = key(this.z15_1, childIndex);
      var tmp_0 = objectKey(this.z15_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.z15_1, childIndex) ? 1 : nodeCount(this.z15_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.h(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.z15_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.f16_1 + ', key=' + this.a19() + ', ' + ('parent=' + this.h16_1 + ', end=' + this.g16_1 + ')');
  };
  protoOf(SlotReader).x17 = function (index) {
    var tmp0 = this.y15_1.w14_1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var effectiveSize = this.a16_1;
    var location = search(tmp0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      tmp0.a2(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0.p(location);
    }
    return tmp;
  };
  function find(_this__u8e3s4, index, effectiveSize) {
    var location = search(_this__u8e3s4, index, effectiveSize);
    return location >= 0 ? _this__u8e3s4.p(location) : null;
  }
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.m() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var it = _this__u8e3s4.p(mid).f1c_1;
      var midVal = it < 0 ? effectiveSize + it | 0 : it;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function slotAnchor(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 28) | 0;
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 30) | 0;
  }
  function auxIndex_0(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    var slot = imul(address, 5);
    return slot >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 29) | 0;
  }
  function validateRead($this) {
    if (!($this.u1t_1.v14_1 === $this.x1t_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.u1t_1 = table;
    this.v1t_1 = end;
    this.w1t_1 = start;
    this.x1t_1 = this.u1t_1.v14_1;
    if (this.u1t_1.u14_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).k = function () {
    return this.w1t_1 < this.v1t_1;
  };
  protoOf(GroupIterator).l = function () {
    validateRead(this);
    var group = this.w1t_1;
    this.w1t_1 = this.w1t_1 + groupSize(this.u1t_1.o14_1, group) | 0;
    return new SlotTableGroup(this.u1t_1, group, this.x1t_1);
  };
  function validateRead_0($this) {
    if (!($this.y1t_1.v14_1 === $this.a1u_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.v14_1 : version;
    this.y1t_1 = table;
    this.z1t_1 = group;
    this.a1u_1 = version;
  }
  protoOf(SlotTableGroup).j = function () {
    validateRead_0(this);
    var tmp0_safe_receiver = this.y1t_1.v1r(this.z1t_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotTableGroup.iterator.<anonymous>' call
      tmp = new SourceInformationGroupIterator(this.y1t_1, this.z1t_1, tmp0_safe_receiver, new AnchoredGroupPath(this.z1t_1));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? new GroupIterator(this.y1t_1, this.z1t_1 + 1 | 0, this.z1t_1 + groupSize(this.y1t_1.o14_1, this.z1t_1) | 0) : tmp1_elvis_lhs;
  };
  function add_0(_this__u8e3s4, key, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.p(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableIntSet();
      // Inline function 'androidx.compose.runtime.add.<anonymous>' call
      _this__u8e3s4.bw(key, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.nv(value);
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 && value < 67108863);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = list;
    }
    list = tmp;
    this.l1s_1 = list;
  }
  protoOf(PrioritySet).n1s = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.l1s_1.q()) {
      tmp = this.l1s_1.p(0) === value || this.l1s_1.p(this.l1s_1.m() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_instance;
    var index = this.l1s_1.m();
    this.l1s_1.h(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.l1s_1.p(parent);
      if (value > parentValue) {
        this.l1s_1.z1(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.l1s_1.z1(index, value);
  };
  protoOf(PrioritySet).hz = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.l1s_1.q();
  };
  protoOf(PrioritySet).h1e = function () {
    return first(this.l1s_1);
  };
  protoOf(PrioritySet).m1s = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.l1s_1.m() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var tmp$ret$0 = 'Set is empty';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var value = this.l1s_1.p(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.l1s_1.q()) {
        tmp = this.l1s_1.p(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.l1s_1.z1(0, last(this.l1s_1));
      this.l1s_1.b2(this.l1s_1.m() - 1 | 0);
      var index = 0;
      var size = this.l1s_1.m();
      var max = this.l1s_1.m() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.l1s_1.p(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.l1s_1.p(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.l1s_1.p(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.l1s_1.z1(index, rightValue);
              this.l1s_1.z1(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.l1s_1.z1(index, leftValue);
          this.l1s_1.z1(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    var it = search(_this__u8e3s4, index, effectiveSize);
    return it >= 0 ? it : -(it + 1 | 0) | 0;
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function countOneBits_0(value) {
    switch (value) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.f19_1 = key;
    this.g19_1 = objectKey;
    this.h19_1 = location;
    this.i19_1 = nodes;
    this.j19_1 = index;
  }
  function SourceInformationGroupIterator(table, parent, group, path) {
    this.b1u_1 = table;
    this.c1u_1 = parent;
    this.d1u_1 = group;
    this.e1u_1 = path;
    this.f1u_1 = this.b1u_1.v14_1;
    this.g1u_1 = 0;
  }
  protoOf(SourceInformationGroupIterator).k = function () {
    var tmp0_safe_receiver = this.d1u_1.a1s_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SourceInformationGroupIterator.hasNext.<anonymous>' call
      tmp = this.g1u_1 < tmp0_safe_receiver.m();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(SourceInformationGroupIterator).l = function () {
    var tmp2_safe_receiver = this.d1u_1.a1s_1;
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp1 = this.g1u_1;
      this.g1u_1 = tmp1 + 1 | 0;
      tmp = tmp2_safe_receiver.p(tmp1);
    }
    var group = tmp;
    var tmp_0;
    if (group instanceof Anchor) {
      tmp_0 = new SlotTableGroup(this.b1u_1, group.f1c_1, this.f1u_1);
    } else {
      if (group instanceof GroupSourceInformation) {
        tmp_0 = new SourceInformationSlotTableGroup(this.b1u_1, this.c1u_1, group, new RelativeGroupPath(this.e1u_1, this.g1u_1 - 1 | 0));
      } else {
        composeRuntimeError('Unexpected group information structure');
      }
    }
    return tmp_0;
  };
  function AnchoredGroupPath(group) {
    SourceInformationGroupPath.call(this);
    this.h1u_1 = group;
  }
  function SourceInformationGroupPath() {
  }
  function SourceInformationSlotTableGroup(table, parent, sourceInformation, identityPath) {
    this.i1u_1 = table;
    this.j1u_1 = parent;
    this.k1u_1 = sourceInformation;
    this.l1u_1 = identityPath;
    this.m1u_1 = this.k1u_1.x1r_1;
    this.n1u_1 = this;
  }
  protoOf(SourceInformationSlotTableGroup).j = function () {
    return new SourceInformationGroupIterator(this.i1u_1, this.j1u_1, this.k1u_1, this.l1u_1);
  };
  function RelativeGroupPath(parent, index) {
    SourceInformationGroupPath.call(this);
    this.o1u_1 = parent;
    this.p1u_1 = index;
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
  }
  protoOf(StructuralEqualityPolicy).r1u = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).d1n = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.r1u(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    return StructuralEqualityPolicy_instance;
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.u1u_1 = myValue;
  }
  protoOf(StateStateRecord).v1u = function (value) {
    var tmp = this;
    tmp.u1u_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).u1u_1;
  };
  protoOf(StateStateRecord).w1u = function () {
    return new StateStateRecord(this.u1u_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    StateObjectImpl.call(this);
    this.y1u_1 = policy;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new StateStateRecord(value);
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.next.<anonymous>' call
    if (Companion_instance_12.c1v()) {
      var tmp_0 = this_0;
      // Inline function 'kotlin.also' call
      var this_1 = new StateStateRecord(value);
      // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.next.<anonymous>.<anonymous>' call
      this_1.a1v_1 = 1;
      tmp_0.b1v_1 = this_1;
    }
    tmp.z1u_1 = this_0;
  }
  protoOf(SnapshotMutableStateImpl).p1l = function () {
    return this.y1u_1;
  };
  protoOf(SnapshotMutableStateImpl).is = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.z1u_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.<set-value>.<anonymous>' call
    var it = current(this_0);
    if (!this.p1l().d1n(it.u1u_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.z1u_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_12.b11();
      overwritableRecord(this_1, this, snapshot, it).u1u_1 = value;
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
    }
    return Unit_instance;
  };
  protoOf(SnapshotMutableStateImpl).e2 = function () {
    return readable_0(this.z1u_1, this).u1u_1;
  };
  protoOf(SnapshotMutableStateImpl).d1v = function () {
    return this.z1u_1;
  };
  protoOf(SnapshotMutableStateImpl).e1v = function (value) {
    var tmp = this;
    tmp.z1u_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).f1v = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.p1l().d1n(currentRecord.u1u_1, appliedRecord.u1u_1)) {
      tmp = current;
    } else {
      var merged = this.p1l().q1u(previousRecord.u1u_1, currentRecord.u1u_1, appliedRecord.u1u_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var this_0 = appliedRecord.w1u();
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (this_0 instanceof StateStateRecord ? this_0 : THROW_CCE()).u1u_1 = merged;
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.z1u_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    var it = current(this_0);
    return 'MutableState(value=' + toString_0(it.u1u_1) + ')@' + hashCode(this);
  };
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function mutableStateListOf_0(elements) {
    // Inline function 'kotlin.also' call
    var this_0 = new SnapshotStateList();
    // Inline function 'androidx.compose.runtime.mutableStateListOf.<anonymous>' call
    this_0.h1v(toList_0(elements));
    return this_0;
  }
  function SnapshotThreadLocal() {
    this.q1l_1 = new AtomicReference(get_emptyThreadMap());
    this.r1l_1 = new Object();
  }
  protoOf(SnapshotThreadLocal).pn = function () {
    var tmp = this.q1l_1.pn().l1v(currentThreadId());
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).s1l = function (value) {
    var key = currentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.r1l_1;
    // Inline function 'androidx.compose.runtime.SnapshotThreadLocal.set.<anonymous>' call
    var current = this.q1l_1.pn();
    if (current.m1v(key, value))
      return Unit_instance;
    this.q1l_1.s1k(current.n1v(key, value));
  };
  function IntStack() {
    this.c15_1 = new Int32Array(10);
    this.d15_1 = 0;
  }
  protoOf(IntStack).m = function () {
    return this.d15_1;
  };
  protoOf(IntStack).e15 = function (value) {
    if (this.d15_1 >= this.c15_1.length) {
      this.c15_1 = copyOf(this.c15_1, imul(this.c15_1.length, 2));
    }
    var tmp = this.c15_1;
    var tmp1 = this.d15_1;
    this.d15_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).o16 = function () {
    var tmp = this.c15_1;
    this.d15_1 = this.d15_1 - 1 | 0;
    return tmp[this.d15_1];
  };
  protoOf(IntStack).v1s = function (default_0) {
    return this.d15_1 > 0 ? this.h1e() : default_0;
  };
  protoOf(IntStack).h1e = function () {
    return this.c15_1[this.d15_1 - 1 | 0];
  };
  protoOf(IntStack).r19 = function () {
    return this.c15_1[this.d15_1 - 2 | 0];
  };
  protoOf(IntStack).q1a = function (index) {
    return this.c15_1[index];
  };
  protoOf(IntStack).q = function () {
    return this.d15_1 === 0;
  };
  protoOf(IntStack).y1 = function () {
    this.d15_1 = 0;
  };
  protoOf(IntStack).u1s = function (value) {
    var inductionVariable = 0;
    var last = this.d15_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.c15_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.p16_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).m = function () {
    return this.p16_1.m();
  };
  protoOf(Stack).q19 = function (value) {
    return this.p16_1.h(value);
  };
  protoOf(Stack).o16 = function () {
    return this.p16_1.b2(this.m() - 1 | 0);
  };
  protoOf(Stack).h1e = function () {
    return this.p16_1.p(this.m() - 1 | 0);
  };
  protoOf(Stack).q1a = function (index) {
    return this.p16_1.p(index);
  };
  protoOf(Stack).q = function () {
    return this.p16_1.q();
  };
  protoOf(Stack).hz = function () {
    return !this.q();
  };
  protoOf(Stack).y1 = function () {
    return this.p16_1.y1();
  };
  protoOf(Stack).h5 = function () {
    var tmp = 0;
    var tmp_0 = this.p16_1.m();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.p16_1.p(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function ValueHolder() {
  }
  function _get_current__qcrdxk($this) {
    var tmp0 = $this.o1v_1;
    // Inline function 'kotlin.getValue' call
    current$factory();
    return tmp0.e2();
  }
  function LazyValueHolder(valueProducer) {
    this.o1v_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).o1l = function (map) {
    return _get_current__qcrdxk(this);
  };
  function DynamicValueHolder(state) {
    this.j1l_1 = state;
  }
  protoOf(DynamicValueHolder).o1l = function (map) {
    return this.j1l_1.e2();
  };
  protoOf(DynamicValueHolder).toString = function () {
    return 'DynamicValueHolder(state=' + toString(this.j1l_1) + ')';
  };
  protoOf(DynamicValueHolder).hashCode = function () {
    return hashCode(this.j1l_1);
  };
  protoOf(DynamicValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DynamicValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof DynamicValueHolder ? other : THROW_CCE();
    if (!equals(this.j1l_1, tmp0_other_with_cast.j1l_1))
      return false;
    return true;
  };
  function StaticValueHolder(value) {
    this.i1l_1 = value;
  }
  protoOf(StaticValueHolder).o1l = function (map) {
    return this.i1l_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + toString_0(this.i1l_1) + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.i1l_1 == null ? 0 : hashCode(this.i1l_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.i1l_1, tmp0_other_with_cast.i1l_1))
      return false;
    return true;
  };
  function ComputedValueHolder(compute) {
    this.h1l_1 = compute;
  }
  protoOf(ComputedValueHolder).o1l = function (map) {
    return this.h1l_1(map);
  };
  protoOf(ComputedValueHolder).toString = function () {
    return 'ComputedValueHolder(compute=' + toString(this.h1l_1) + ')';
  };
  protoOf(ComputedValueHolder).hashCode = function () {
    return hashCode(this.h1l_1);
  };
  protoOf(ComputedValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedValueHolder ? other : THROW_CCE();
    if (!equals(this.h1l_1, tmp0_other_with_cast.h1l_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function ChangeList() {
    OperationsDebugStringFormattable.call(this);
    this.l1g_1 = new Operations();
  }
  protoOf(ChangeList).q = function () {
    return this.l1g_1.q();
  };
  protoOf(ChangeList).hz = function () {
    return this.l1g_1.hz();
  };
  protoOf(ChangeList).y1 = function () {
    this.l1g_1.y1();
  };
  protoOf(ChangeList).z1i = function (applier, slots, rememberManager) {
    return this.l1g_1.x1v(applier, slots, rememberManager);
  };
  protoOf(ChangeList).y1v = function (value) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = Remember_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemember.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    Remember_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).e1w = function (value, groupSlotIndex) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    UpdateValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    UpdateValue_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, groupSlotIndex);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).f1w = function (value, anchor, groupSlotIndex) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateAnchoredValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAnchoredValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, anchor);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$2, groupSlotIndex);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).g1w = function (anchor, value) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = AppendValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAppendValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    AppendValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
    AppendValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, value);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).h1w = function (count) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = TrimParentValues_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushTrimValues.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    TrimParentValues_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).i1w = function () {
    this.l1g_1.j1w(ResetSlots_getInstance());
  };
  protoOf(ChangeList).k1w = function (data) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateAuxData_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAuxData.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    UpdateAuxData_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, data);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).l1w = function () {
    this.l1g_1.j1w(EnsureRootGroupStarted_getInstance());
  };
  protoOf(ChangeList).m1w = function (anchor) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = EnsureGroupStarted_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEnsureGroupStarted.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    EnsureGroupStarted_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).n1w = function () {
    this.l1g_1.j1w(EndCurrentGroup_getInstance());
  };
  protoOf(ChangeList).o1w = function () {
    this.l1g_1.j1w(SkipToEndOfCurrentGroup_getInstance());
  };
  protoOf(ChangeList).p1w = function () {
    this.l1g_1.j1w(RemoveCurrentGroup_getInstance());
  };
  protoOf(ChangeList).q1w = function (anchor, from) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = InsertSlots_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    InsertSlots_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    InsertSlots_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).r1w = function (anchor, from, fixups) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = InsertSlotsWithFixups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, fixups);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).s1w = function (offset) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = MoveCurrentGroup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveCurrentGroup.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    MoveCurrentGroup_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, offset);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).t1w = function (action, composition) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = EndCompositionScope_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEndCompositionScope.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    EndCompositionScope_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, action);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    EndCompositionScope_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, composition);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).u1w = function (node) {
    if (!(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false) {
      this.l1g_1.j1w(UseCurrentNode_getInstance());
    }
  };
  protoOf(ChangeList).v1w = function (value, block) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).w1w = function (removeFrom, moveCount) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = RemoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    RemoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, removeFrom);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    RemoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, moveCount);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).x1w = function (to, from, count) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = MoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    MoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, to);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    MoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    MoveNode_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$2, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).y1w = function (distance) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = AdvanceSlotsBy_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAdvanceSlotsBy.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    AdvanceSlotsBy_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, distance);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).z1w = function (count) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = Ups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUps.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    Ups_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).a1x = function (nodes) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(nodes.length === 0)) {
      var tmp1 = this.l1g_1;
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var operation = Downs_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      tmp1.z1v(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDowns.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(tmp1);
      // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
      Downs_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, nodes);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(access$_get_pushedIntMask__wrtr8x(tmp1) === access$createExpectedArgMask(tmp1, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp1) === access$createExpectedArgMask(tmp1, operation.b1w_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.a1w_1;
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp1)) === 0)) {
              if (missingIntCount > 0) {
                this_0.d8(', ');
              }
              this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_0.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.b1w_1;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp1)) === 0)) {
              if (missingIntCount > 0) {
                this_1.d8(', ');
              }
              this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_1.toString();
        var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$7);
      }
    }
  };
  protoOf(ChangeList).b1x = function (effectiveNodeIndexOut, anchor) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = DetermineMovableContentNodeIndex_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDetermineMovableContentNodeIndex.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, effectiveNodeIndexOut);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, anchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).c1x = function (nodes, effectiveNodeIndex) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!nodes.q()) {
      var tmp1 = this.l1g_1;
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var operation = CopyNodesToNewAnchorLocation_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      tmp1.z1v(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopyNodesToNewAnchorLocation.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(tmp1);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, nodes);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, effectiveNodeIndex);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(access$_get_pushedIntMask__wrtr8x(tmp1) === access$createExpectedArgMask(tmp1, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp1) === access$createExpectedArgMask(tmp1, operation.b1w_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.a1w_1;
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp1)) === 0)) {
              if (missingIntCount > 0) {
                this_0.d8(', ');
              }
              this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_0.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.b1w_1;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp1)) === 0)) {
              if (missingIntCount > 0) {
                this_1.d8(', ');
              }
              this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_1.toString();
        var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$7);
      }
    }
  };
  protoOf(ChangeList).d1x = function (resolvedState, parentContext, from, to) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = CopySlotTableToAnchorLocation_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopySlotTableToAnchorLocation.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, resolvedState);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(3);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, to);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$3, from);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$8 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$8);
    }
  };
  protoOf(ChangeList).e1x = function (composition, parentContext, reference) {
    var tmp0 = this.l1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = ReleaseMovableGroupAtCurrent_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushReleaseMovableGroupAtCurrent.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, composition);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, reference);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).f1x = function () {
    this.l1g_1.j1w(EndMovableContentPlacement_getInstance());
  };
  protoOf(ChangeList).g1x = function (changeList, effectiveNodeIndex) {
    if (changeList.hz()) {
      var tmp0 = this.l1g_1;
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var operation = ApplyChangeList_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      tmp0.z1v(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushExecuteOperationsIn.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(tmp0);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
      ApplyChangeList_getInstance();
      var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, changeList);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      ApplyChangeList_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, effectiveNodeIndex);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.a1w_1;
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
              if (missingIntCount > 0) {
                this_0.d8(', ');
              }
              this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_0.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.b1w_1;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
              if (missingIntCount > 0) {
                this_1.d8(', ');
              }
              this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_1.toString();
        var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$6);
      }
    }
  };
  function _get_reader__fd8dw8($this) {
    return $this.l15_1.d14_1;
  }
  function pushApplierOperationPreamble($this) {
    pushPendingUpsAndDowns($this);
  }
  function pushSlotEditingOperationPreamble($this) {
    realizeOperationLocation$default($this);
    $this.h1d();
  }
  function pushSlotTableOperationPreamble($this, useParentSlot) {
    realizeOperationLocation($this, useParentSlot);
  }
  function pushSlotTableOperationPreamble$default($this, useParentSlot, $super) {
    useParentSlot = useParentSlot === VOID ? false : useParentSlot;
    return pushSlotTableOperationPreamble($this, useParentSlot);
  }
  function ensureRootStarted($this) {
    if (!$this.n15_1 && $this.p15_1) {
      pushSlotTableOperationPreamble$default($this);
      $this.m15_1.l1w();
      $this.n15_1 = true;
    }
  }
  function ensureGroupStarted($this, anchor) {
    pushSlotTableOperationPreamble$default($this);
    $this.m15_1.m1w(anchor);
    $this.n15_1 = true;
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? _get_reader__fd8dw8($this).h16_1 : _get_reader__fd8dw8($this).f16_1;
    var distance = location - $this.q15_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.realizeOperationLocation.<anonymous>' call
      var tmp$ret$0 = 'Tried to seek backward';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    if (distance > 0) {
      $this.m15_1.y1w(distance);
      $this.q15_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function realizeNodeMovementOperations($this) {
    if ($this.w15_1 > 0) {
      if ($this.t15_1 >= 0) {
        realizeRemoveNode($this, $this.t15_1, $this.w15_1);
        $this.t15_1 = -1;
      } else {
        realizeMoveNode($this, $this.v15_1, $this.u15_1, $this.w15_1);
        $this.u15_1 = -1;
        $this.v15_1 = -1;
      }
      $this.w15_1 = 0;
    }
  }
  function realizeRemoveNode($this, removeFrom, moveCount) {
    pushApplierOperationPreamble($this);
    $this.m15_1.w1w(removeFrom, moveCount);
  }
  function realizeMoveNode($this, to, from, count) {
    pushApplierOperationPreamble($this);
    $this.m15_1.x1w(to, from, count);
  }
  function pushPendingUpsAndDowns($this) {
    if ($this.r15_1 > 0) {
      $this.m15_1.z1w($this.r15_1);
      $this.r15_1 = 0;
    }
    if ($this.s15_1.hz()) {
      $this.m15_1.a1x($this.s15_1.h5());
      $this.s15_1.y1();
    }
  }
  function Companion_4() {
    this.h1x_1 = -2;
  }
  var Companion_instance_5;
  function Companion_getInstance_4() {
    return Companion_instance_5;
  }
  function ComposerChangeListWriter(composer, changeList) {
    this.l15_1 = composer;
    this.m15_1 = changeList;
    this.n15_1 = false;
    this.o15_1 = new IntStack();
    this.p15_1 = true;
    this.q15_1 = 0;
    this.r15_1 = 0;
    this.s15_1 = new Stack();
    this.t15_1 = -1;
    this.u15_1 = -1;
    this.v15_1 = -1;
    this.w15_1 = 0;
  }
  protoOf(ComposerChangeListWriter).n19 = function (location) {
    this.q15_1 = this.q15_1 + (location - _get_reader__fd8dw8(this).f16_1 | 0) | 0;
  };
  protoOf(ComposerChangeListWriter).s1b = function (location) {
    this.q15_1 = location;
  };
  protoOf(ComposerChangeListWriter).h1d = function () {
    if (_get_reader__fd8dw8(this).m() > 0) {
      var reader = _get_reader__fd8dw8(this);
      var location = reader.h16_1;
      if (!(this.o15_1.v1s(-2) === location)) {
        ensureRootStarted(this);
        if (location > 0) {
          var anchor = reader.x17(location);
          this.o15_1.e15(location);
          ensureGroupStarted(this, anchor);
        }
      }
    }
  };
  protoOf(ComposerChangeListWriter).a1f = function () {
    return (_get_reader__fd8dw8(this).h16_1 - this.q15_1 | 0) < 0;
  };
  protoOf(ComposerChangeListWriter).d1f = function (value) {
    this.m15_1.y1v(value);
  };
  protoOf(ComposerChangeListWriter).y1e = function (value, groupSlotIndex) {
    pushSlotTableOperationPreamble(this, true);
    this.m15_1.e1w(value, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).z1e = function (value, anchor, groupSlotIndex) {
    this.m15_1.f1w(value, anchor, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).w1e = function (anchor, value) {
    this.m15_1.g1w(anchor, value);
  };
  protoOf(ComposerChangeListWriter).e1a = function (count) {
    if (count > 0) {
      pushSlotEditingOperationPreamble(this);
      this.m15_1.h1w(count);
    }
  };
  protoOf(ComposerChangeListWriter).e1b = function () {
    this.m15_1.i1w();
  };
  protoOf(ComposerChangeListWriter).j18 = function (data) {
    pushSlotTableOperationPreamble$default(this);
    this.m15_1.k1w(data);
  };
  protoOf(ComposerChangeListWriter).x15 = function () {
    if (this.n15_1) {
      pushSlotTableOperationPreamble$default(this);
      pushSlotTableOperationPreamble$default(this);
      this.m15_1.n1w();
      this.n15_1 = false;
    }
  };
  protoOf(ComposerChangeListWriter).f1a = function () {
    var location = _get_reader__fd8dw8(this).h16_1;
    var currentStartedGroup = this.o15_1.v1s(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.endCurrentGroup.<anonymous>' call
      var tmp$ret$0 = 'Missed recording an endGroup';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    if (this.o15_1.v1s(-1) === location) {
      pushSlotTableOperationPreamble$default(this);
      this.o15_1.o16();
      this.m15_1.n1w();
    }
  };
  protoOf(ComposerChangeListWriter).u1b = function () {
    this.m15_1.o1w();
  };
  protoOf(ComposerChangeListWriter).p1c = function () {
    pushSlotEditingOperationPreamble(this);
    this.m15_1.p1w();
    this.q15_1 = this.q15_1 + _get_reader__fd8dw8(this).t1t() | 0;
  };
  protoOf(ComposerChangeListWriter).o1c = function (anchor, from) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    realizeNodeMovementOperations(this);
    this.m15_1.q1w(anchor, from);
  };
  protoOf(ComposerChangeListWriter).n1c = function (anchor, from, fixups) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    realizeNodeMovementOperations(this);
    this.m15_1.r1w(anchor, from, fixups);
  };
  protoOf(ComposerChangeListWriter).p19 = function (offset) {
    pushSlotEditingOperationPreamble(this);
    this.m15_1.s1w(offset);
  };
  protoOf(ComposerChangeListWriter).a1g = function (action, composition) {
    this.m15_1.t1w(action, composition);
  };
  protoOf(ComposerChangeListWriter).k1e = function (node) {
    pushApplierOperationPreamble(this);
    this.m15_1.u1w(node);
  };
  protoOf(ComposerChangeListWriter).n1e = function (value, block) {
    pushApplierOperationPreamble(this);
    this.m15_1.v1w(value, block);
  };
  protoOf(ComposerChangeListWriter).t19 = function (nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.removeNode.<anonymous>' call
        var tmp$ret$0 = 'Invalid remove index ' + nodeIndex;
        composeImmediateRuntimeError(tmp$ret$0);
      }
      if (this.t15_1 === nodeIndex) {
        this.w15_1 = this.w15_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.t15_1 = nodeIndex;
        this.w15_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).x19 = function (from, to, count) {
    if (count > 0) {
      if (this.w15_1 > 0 && this.u15_1 === (from - this.w15_1 | 0) && this.v15_1 === (to - this.w15_1 | 0)) {
        this.w15_1 = this.w15_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.u15_1 = from;
        this.v15_1 = to;
        this.w15_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).q1c = function () {
    pushPendingUpsAndDowns(this);
    if (this.n15_1) {
      this.u1b();
      this.x15();
    }
  };
  protoOf(ComposerChangeListWriter).z19 = function () {
    realizeNodeMovementOperations(this);
  };
  protoOf(ComposerChangeListWriter).j1d = function (nodeIndex, group) {
    this.z19();
    pushPendingUpsAndDowns(this);
    var nodeCount = _get_reader__fd8dw8(this).r1a(group) ? 1 : _get_reader__fd8dw8(this).s1a(group);
    if (nodeCount > 0) {
      this.t19(nodeIndex, nodeCount);
    }
  };
  protoOf(ComposerChangeListWriter).c1a = function () {
    realizeNodeMovementOperations(this);
    if (this.s15_1.hz()) {
      this.s15_1.o16();
    } else {
      this.r15_1 = this.r15_1 + 1 | 0;
    }
  };
  protoOf(ComposerChangeListWriter).u1a = function (node) {
    realizeNodeMovementOperations(this);
    this.s15_1.q19(node);
  };
  protoOf(ComposerChangeListWriter).n1b = function (effectiveNodeIndexOut, anchor) {
    pushPendingUpsAndDowns(this);
    this.m15_1.b1x(effectiveNodeIndexOut, anchor);
  };
  protoOf(ComposerChangeListWriter).q1b = function (nodes, effectiveNodeIndex) {
    this.m15_1.c1x(nodes, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).r1b = function (resolvedState, parentContext, from, to) {
    this.m15_1.d1x(resolvedState, parentContext, from, to);
  };
  protoOf(ComposerChangeListWriter).i1d = function (composition, parentContext, reference) {
    this.m15_1.e1x(composition, parentContext, reference);
  };
  protoOf(ComposerChangeListWriter).v1b = function () {
    this.m15_1.f1x();
    this.q15_1 = 0;
  };
  protoOf(ComposerChangeListWriter).t1b = function (other, effectiveNodeIndex) {
    this.m15_1.g1x(other, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).s1c = function () {
    pushPendingUpsAndDowns(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.o15_1.q()) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.finalizeComposition.<anonymous>' call
      var tmp$ret$0 = 'Missed recording an endGroup()';
      composeImmediateRuntimeError(tmp$ret$0);
    }
  };
  protoOf(ComposerChangeListWriter).t1c = function () {
    this.n15_1 = false;
    this.o15_1.y1();
    this.q15_1 = 0;
  };
  function FixupList() {
    OperationsDebugStringFormattable.call(this);
    this.q16_1 = new Operations();
    this.r16_1 = new Operations();
  }
  protoOf(FixupList).q = function () {
    return this.q16_1.q();
  };
  protoOf(FixupList).y1 = function () {
    this.r16_1.y1();
    this.q16_1.y1();
  };
  protoOf(FixupList).i1x = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.r16_1.q()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.executeAndFlushAllPendingFixups.<anonymous>' call
      var tmp$ret$0 = 'FixupList has pending fixup operations that were not realized. Were there mismatched insertNode() and endNodeInsert() calls?';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.q16_1.x1v(applier, slots, rememberManager);
  };
  protoOf(FixupList).i1e = function (factory, insertIndex, groupAnchor) {
    var tmp0 = this.q16_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = InsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    InsertNodeFixup_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, factory);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    InsertNodeFixup_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    InsertNodeFixup_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, groupAnchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
    var tmp3 = this.r16_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation_0 = PostInsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp3.z1v(operation_0);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push_0 = _WriteScope___init__impl__4xwato(tmp3);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$8 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push_0, tmp$ret$8, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$9 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push_0, tmp$ret$9, groupAnchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp3) === access$createExpectedArgMask(tmp3, operation_0.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp3) === access$createExpectedArgMask(tmp3, operation_0.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_1 = operation_0.a1w_1;
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < times_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_1 & access$_get_pushedIntMask__wrtr8x(tmp3)) === 0)) {
            if (missingIntCount_0 > 0) {
              this_2.d8(', ');
            }
            this_2.d8(operation_0.c1w(_IntParameter___init__impl__oy5xkp(index_1)));
            missingIntCount_0 = missingIntCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_1 < times_1);
      var missingInts_0 = this_2.toString();
      var missingObjectCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_3 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_2 = operation_0.b1w_1;
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < times_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_2 & access$_get_pushedObjectMask__8x586f(tmp3)) === 0)) {
            if (missingIntCount_0 > 0) {
              this_3.d8(', ');
            }
            this_3.d8(operation_0.d1w(_ObjectParameter___init__impl__iyg1ip(index_2)));
            missingObjectCount_0 = missingObjectCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_2 < times_2);
      var missingObjects_0 = this_3.toString();
      var tmp$ret$14 = 'Error while pushing ' + operation_0.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount_0 + ' int arguments (' + missingInts_0 + ') ') + ('and ' + missingObjectCount_0 + ' object arguments (' + missingObjects_0 + ').');
      throwIllegalStateException(tmp$ret$14);
    }
  };
  protoOf(FixupList).h1a = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.r16_1.hz()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.endNodeInsert.<anonymous>' call
      var tmp$ret$0 = 'Cannot end node insertion, there are no pending operations that can be realized.';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.r16_1.j1x(this.q16_1);
  };
  protoOf(FixupList).o1e = function (value, block) {
    var tmp0 = this.q16_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.z1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.updateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.a1w_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.b1w_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.a1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.d8(', ');
            }
            this_0.d8(operation.c1w(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.b1w_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.d8(', ');
            }
            this_1.d8(operation.d1w(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  function _IntParameter___init__impl__oy5xkp(offset) {
    return offset;
  }
  function _IntParameter___get_offset__impl__xsdcin($this) {
    return $this;
  }
  function _ObjectParameter___init__impl__iyg1ip(offset) {
    return offset;
  }
  function _ObjectParameter___get_offset__impl__x7fx93($this) {
    return $this;
  }
  function Ups() {
    Ups_instance = this;
    Operation.call(this, 1);
  }
  protoOf(Ups).c1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).c1w.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Ups).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.n1x(tmp$ret$0);
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Ups.execute.<anonymous>' call
        applier.f11();
      }
       while (inductionVariable < times);
  };
  var Ups_instance;
  function Ups_getInstance() {
    if (Ups_instance == null)
      new Ups();
    return Ups_instance;
  }
  function Downs() {
    Downs_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Downs).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'nodes';
    } else {
      tmp = protoOf(Operation).d1w.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Downs).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var nodes = _this__u8e3s4.r1x(tmp$ret$0);
    var inductionVariable = 0;
    var last = nodes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        nodeApplier.e11(nodes[index]);
      }
       while (inductionVariable <= last);
  };
  var Downs_instance;
  function Downs_getInstance() {
    if (Downs_instance == null)
      new Downs();
    return Downs_instance;
  }
  function AdvanceSlotsBy() {
    AdvanceSlotsBy_instance = this;
    Operation.call(this, 1);
  }
  protoOf(AdvanceSlotsBy).c1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'distance';
    } else {
      tmp = protoOf(Operation).c1w.call(this, parameter);
    }
    return tmp;
  };
  protoOf(AdvanceSlotsBy).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.e1s(_this__u8e3s4.n1x(tmp$ret$0));
  };
  var AdvanceSlotsBy_instance;
  function AdvanceSlotsBy_getInstance() {
    if (AdvanceSlotsBy_instance == null)
      new AdvanceSlotsBy();
    return AdvanceSlotsBy_instance;
  }
  function Remember() {
    Remember_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Remember).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).d1w.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Remember).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    rememberManager.k1j(_this__u8e3s4.r1x(tmp$ret$0));
  };
  var Remember_instance;
  function Remember_getInstance() {
    if (Remember_instance == null)
      new Remember();
    return Remember_instance;
  }
  function AppendValue() {
    AppendValue_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(AppendValue).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'value';
      } else {
        tmp = protoOf(Operation).d1w.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(AppendValue).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.r1x(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var value = _this__u8e3s4.r1x(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.k1j(value.q1e_1);
    }
    slots.z1s(anchor, value);
  };
  var AppendValue_instance;
  function AppendValue_getInstance() {
    if (AppendValue_instance == null)
      new AppendValue();
    return AppendValue_instance;
  }
  function TrimParentValues() {
    TrimParentValues_instance = this;
    Operation.call(this, 1);
  }
  protoOf(TrimParentValues).c1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).c1w.call(this, parameter);
    }
    return tmp;
  };
  protoOf(TrimParentValues).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var count = _this__u8e3s4.n1x(tmp$ret$0);
    var slotsSize = slots.r1g();
    // Inline function 'androidx.compose.runtime.SlotWriter.forEachTailSlot' call
    var groupIndex = slots.n17_1;
    var slotsStart = slots.i1s(groupIndex);
    var slotsEnd = slots.i1t(groupIndex);
    // Inline function 'kotlin.math.max' call
    var b = slotsEnd - count | 0;
    var inductionVariable = Math.max(slotsStart, b);
    if (inductionVariable < slotsEnd)
      do {
        var slotIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.execute.<anonymous>' call
        var value = access$_get_slots__7x4q9w(slots)[access$dataIndexToDataAddress(slots, slotIndex)];
        if (value instanceof RememberObserverHolder) {
          var endRelativeOrder = slotsSize - slotIndex | 0;
          rememberManager.v1g(value.q1e_1, endRelativeOrder, -1, -1);
        } else {
          if (value instanceof RecomposeScopeImpl) {
            value.w1g();
          }
        }
      }
       while (inductionVariable < slotsEnd);
    slots.a1t(count);
  };
  var TrimParentValues_instance;
  function TrimParentValues_getInstance() {
    if (TrimParentValues_instance == null)
      new TrimParentValues();
    return TrimParentValues_instance;
  }
  function UpdateValue() {
    UpdateValue_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(UpdateValue).c1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).c1w.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).d1w.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.r1x(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.n1x(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.k1j(value.q1e_1);
    }
    var previous = slots.e1t(groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      var endRelativeOrder = slots.r1g() - slots.g1t(slots.l17_1, groupSlotIndex) | 0;
      rememberManager.v1g(previous.q1e_1, endRelativeOrder, -1, -1);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.w1g();
      }
    }
  };
  var UpdateValue_instance;
  function UpdateValue_getInstance() {
    if (UpdateValue_instance == null)
      new UpdateValue();
    return UpdateValue_instance;
  }
  function UpdateAnchoredValue() {
    UpdateAnchoredValue_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(UpdateAnchoredValue).c1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).c1w.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAnchoredValue).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
      UpdateAnchoredValue_getInstance();
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).d1w.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateAnchoredValue).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.r1x(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var anchor = _this__u8e3s4.r1x(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.n1x(tmp$ret$2);
    if (value instanceof RememberObserverHolder) {
      rememberManager.k1j(value.q1e_1);
    }
    var groupIndex = slots.m1b(anchor);
    var previous = slots.f1t(groupIndex, groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      var endRelativeSlotOrder = slots.r1g() - slots.g1t(groupIndex, groupSlotIndex) | 0;
      // Inline function 'androidx.compose.runtime.withAfterAnchorInfo' call
      var anchor_0 = previous.r1e_1;
      var priority = -1;
      var endRelativeAfter = -1;
      if (!(anchor_0 == null) && anchor_0.u1g()) {
        priority = slots.m1b(anchor_0);
        endRelativeAfter = slots.r1g() - slots.t1g(priority) | 0;
      }
      var tmp5 = priority;
      // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.execute.<anonymous>' call
      var endRelativeAfter_0 = endRelativeAfter;
      rememberManager.v1g(previous.q1e_1, endRelativeSlotOrder, tmp5, endRelativeAfter_0);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.w1g();
      }
    }
  };
  var UpdateAnchoredValue_instance;
  function UpdateAnchoredValue_getInstance() {
    if (UpdateAnchoredValue_instance == null)
      new UpdateAnchoredValue();
    return UpdateAnchoredValue_instance;
  }
  function UpdateAuxData() {
    UpdateAuxData_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(UpdateAuxData).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'data';
    } else {
      tmp = protoOf(Operation).d1w.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAuxData).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.j1s(_this__u8e3s4.r1x(tmp$ret$0));
  };
  var UpdateAuxData_instance;
  function UpdateAuxData_getInstance() {
    if (UpdateAuxData_instance == null)
      new UpdateAuxData();
    return UpdateAuxData_instance;
  }
  function EnsureRootGroupStarted() {
    EnsureRootGroupStarted_instance = this;
    Operation.call(this);
  }
  protoOf(EnsureRootGroupStarted).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.j1t(0);
  };
  var EnsureRootGroupStarted_instance;
  function EnsureRootGroupStarted_getInstance() {
    if (EnsureRootGroupStarted_instance == null)
      new EnsureRootGroupStarted();
    return EnsureRootGroupStarted_instance;
  }
  function EnsureGroupStarted() {
    EnsureGroupStarted_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(EnsureGroupStarted).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      tmp = protoOf(Operation).d1w.call(this, parameter);
    }
    return tmp;
  };
  protoOf(EnsureGroupStarted).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.k1t(_this__u8e3s4.r1x(tmp$ret$0));
  };
  var EnsureGroupStarted_instance;
  function EnsureGroupStarted_getInstance() {
    if (EnsureGroupStarted_instance == null)
      new EnsureGroupStarted();
    return EnsureGroupStarted_instance;
  }
  function RemoveCurrentGroup() {
    RemoveCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(RemoveCurrentGroup).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    removeCurrentGroup(slots, rememberManager);
  };
  var RemoveCurrentGroup_instance;
  function RemoveCurrentGroup_getInstance() {
    if (RemoveCurrentGroup_instance == null)
      new RemoveCurrentGroup();
    return RemoveCurrentGroup_instance;
  }
  function MoveCurrentGroup() {
    MoveCurrentGroup_instance = this;
    Operation.call(this, 1);
  }
  protoOf(MoveCurrentGroup).c1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'offset';
    } else {
      tmp = protoOf(Operation).c1w.call(this, parameter);
    }
    return tmp;
  };
  protoOf(MoveCurrentGroup).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.m1t(_this__u8e3s4.n1x(tmp$ret$0));
  };
  var MoveCurrentGroup_instance;
  function MoveCurrentGroup_getInstance() {
    if (MoveCurrentGroup_instance == null)
      new MoveCurrentGroup();
    return MoveCurrentGroup_instance;
  }
  function EndCurrentGroup() {
    EndCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(EndCurrentGroup).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.j1a();
  };
  var EndCurrentGroup_instance;
  function EndCurrentGroup_getInstance() {
    if (EndCurrentGroup_instance == null)
      new EndCurrentGroup();
    return EndCurrentGroup_instance;
  }
  function SkipToEndOfCurrentGroup() {
    SkipToEndOfCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(SkipToEndOfCurrentGroup).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.e18();
  };
  var SkipToEndOfCurrentGroup_instance;
  function SkipToEndOfCurrentGroup_getInstance() {
    if (SkipToEndOfCurrentGroup_instance == null)
      new SkipToEndOfCurrentGroup();
    return SkipToEndOfCurrentGroup_instance;
  }
  function EndCompositionScope() {
    EndCompositionScope_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(EndCompositionScope).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'composition';
      } else {
        tmp = protoOf(Operation).d1w.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(EndCompositionScope).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var action = _this__u8e3s4.r1x(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var composition = _this__u8e3s4.r1x(tmp$ret$1);
    action(composition);
  };
  var EndCompositionScope_instance;
  function EndCompositionScope_getInstance() {
    if (EndCompositionScope_instance == null)
      new EndCompositionScope();
    return EndCompositionScope_instance;
  }
  function UseCurrentNode() {
    UseCurrentNode_instance = this;
    Operation.call(this);
  }
  protoOf(UseCurrentNode).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    var tmp = applier.b11();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).g12();
  };
  var UseCurrentNode_instance;
  function UseCurrentNode_getInstance() {
    if (UseCurrentNode_instance == null)
      new UseCurrentNode();
    return UseCurrentNode_instance;
  }
  function UpdateNode() {
    UpdateNode_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(UpdateNode).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'block';
      } else {
        tmp = protoOf(Operation).d1w.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateNode).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.r1x(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var block = _this__u8e3s4.r1x(tmp$ret$1);
    block(applier.b11(), value);
  };
  var UpdateNode_instance;
  function UpdateNode_getInstance() {
    if (UpdateNode_instance == null)
      new UpdateNode();
    return UpdateNode_instance;
  }
  function RemoveNode() {
    RemoveNode_instance = this;
    Operation.call(this, 2);
  }
  protoOf(RemoveNode).c1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'removeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'count';
      } else {
        tmp = protoOf(Operation).c1w.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(RemoveNode).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.n1x(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    applier.i11(tmp, _this__u8e3s4.n1x(tmp$ret$1));
  };
  var RemoveNode_instance;
  function RemoveNode_getInstance() {
    if (RemoveNode_instance == null)
      new RemoveNode();
    return RemoveNode_instance;
  }
  function MoveNode() {
    MoveNode_instance = this;
    Operation.call(this, 3);
  }
  protoOf(MoveNode).c1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'from';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'to';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
        if (parameter === _IntParameter___init__impl__oy5xkp(2)) {
          tmp = 'count';
        } else {
          tmp = protoOf(Operation).c1w.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(MoveNode).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.n1x(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    var tmp_0 = _this__u8e3s4.n1x(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    applier.j11(tmp, tmp_0, _this__u8e3s4.n1x(tmp$ret$2));
  };
  var MoveNode_instance;
  function MoveNode_getInstance() {
    if (MoveNode_instance == null)
      new MoveNode();
    return MoveNode_instance;
  }
  function InsertSlots() {
    InsertSlots_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(InsertSlots).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        tmp = protoOf(Operation).d1w.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertSlots).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.r1x(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.r1x(tmp$ret$1);
    slots.e19();
    slots.o1t(insertTable, anchor.u1f(insertTable), false);
    slots.k1a();
  };
  var InsertSlots_instance;
  function InsertSlots_getInstance() {
    if (InsertSlots_instance == null)
      new InsertSlots();
    return InsertSlots_instance;
  }
  function InsertSlotsWithFixups() {
    InsertSlotsWithFixups_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(InsertSlotsWithFixups).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'fixups';
        } else {
          tmp = protoOf(Operation).d1w.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(InsertSlotsWithFixups).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.r1x(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.r1x(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    var fixups = _this__u8e3s4.r1x(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = insertTable.d18();
    var normalClose = false;
    var tmp;
    try {
      fixups.i1x(applier, writer, rememberManager);
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = Unit_instance;
    }finally {
      writer.i18(normalClose);
    }
    slots.e19();
    slots.o1t(insertTable, anchor.u1f(insertTable), false);
    slots.k1a();
  };
  var InsertSlotsWithFixups_instance;
  function InsertSlotsWithFixups_getInstance() {
    if (InsertSlotsWithFixups_instance == null)
      new InsertSlotsWithFixups();
    return InsertSlotsWithFixups_instance;
  }
  function InsertNodeFixup() {
    InsertNodeFixup_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(InsertNodeFixup).c1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).c1w.call(this, parameter);
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'factory';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'groupAnchor';
      } else {
        tmp = protoOf(Operation).d1w.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var node = _this__u8e3s4.r1x(tmp$ret$0)();
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var groupAnchor = _this__u8e3s4.r1x(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.n1x(tmp$ret$2);
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    slots.d1t(groupAnchor, node);
    nodeApplier.g11(insertIndex, node);
    nodeApplier.e11(node);
  };
  var InsertNodeFixup_instance;
  function InsertNodeFixup_getInstance() {
    if (InsertNodeFixup_instance == null)
      new InsertNodeFixup();
    return InsertNodeFixup_instance;
  }
  function PostInsertNodeFixup() {
    PostInsertNodeFixup_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(PostInsertNodeFixup).c1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).c1w.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'groupAnchor';
    } else {
      tmp = protoOf(Operation).d1w.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var groupAnchor = _this__u8e3s4.r1x(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.n1x(tmp$ret$1);
    applier.f11();
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    var nodeToInsert = slots.w1s(groupAnchor);
    nodeApplier.h11(insertIndex, nodeToInsert);
  };
  var PostInsertNodeFixup_instance;
  function PostInsertNodeFixup_getInstance() {
    if (PostInsertNodeFixup_instance == null)
      new PostInsertNodeFixup();
    return PostInsertNodeFixup_instance;
  }
  function ResetSlots() {
    ResetSlots_instance = this;
    Operation.call(this);
  }
  protoOf(ResetSlots).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.y1s();
  };
  var ResetSlots_instance;
  function ResetSlots_getInstance() {
    if (ResetSlots_instance == null)
      new ResetSlots();
    return ResetSlots_instance;
  }
  function DetermineMovableContentNodeIndex() {
    DetermineMovableContentNodeIndex_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(DetermineMovableContentNodeIndex).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndexOut';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).d1w.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(DetermineMovableContentNodeIndex).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndexOut = _this__u8e3s4.r1x(tmp$ret$0);
    var tmp = effectiveNodeIndexOut;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.r1x(tmp$ret$1);
    tmp.o1z_1 = positionToInsert(slots, tmp_0, isInterface(applier, Applier) ? applier : THROW_CCE());
  };
  var DetermineMovableContentNodeIndex_instance;
  function DetermineMovableContentNodeIndex_getInstance() {
    if (DetermineMovableContentNodeIndex_instance == null)
      new DetermineMovableContentNodeIndex();
    return DetermineMovableContentNodeIndex_instance;
  }
  function CopyNodesToNewAnchorLocation() {
    CopyNodesToNewAnchorLocation_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(CopyNodesToNewAnchorLocation).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'nodes';
      } else {
        tmp = protoOf(Operation).d1w.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(CopyNodesToNewAnchorLocation).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndex = _this__u8e3s4.r1x(tmp$ret$0).o1z_1;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var nodesToInsert = _this__u8e3s4.r1x(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nodesToInsert.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nodesToInsert.p(index);
        // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.execute.<anonymous>' call
        if (!isInterface(applier, Applier))
          THROW_CCE();
        applier.h11(effectiveNodeIndex + index | 0, item);
        applier.g11(effectiveNodeIndex + index | 0, item);
      }
       while (inductionVariable <= last);
  };
  var CopyNodesToNewAnchorLocation_instance;
  function CopyNodesToNewAnchorLocation_getInstance() {
    if (CopyNodesToNewAnchorLocation_instance == null)
      new CopyNodesToNewAnchorLocation();
    return CopyNodesToNewAnchorLocation_instance;
  }
  function CopySlotTableToAnchorLocation() {
    CopySlotTableToAnchorLocation_instance = this;
    Operation.call(this, VOID, 4);
  }
  protoOf(CopySlotTableToAnchorLocation).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'resolvedState';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'resolvedCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'from';
        } else {
          // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
          if (parameter === _ObjectParameter___init__impl__iyg1ip(3)) {
            tmp = 'to';
          } else {
            tmp = protoOf(Operation).d1w.call(this, parameter);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(CopySlotTableToAnchorLocation).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(2);
    var from = _this__u8e3s4.r1x(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(3);
    var to = _this__u8e3s4.r1x(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    var parentCompositionContext = _this__u8e3s4.r1x(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp0_elvis_lhs = _this__u8e3s4.r1x(tmp$ret$3);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? parentCompositionContext.o1b(from) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      composeRuntimeError('Could not resolve state for movable content');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var resolvedState = tmp;
    var anchors = slots.p1t(1, resolvedState.p1b_1, 2);
    var tmp_0 = Companion_instance_2;
    var tmp_1 = to.h1b_1;
    tmp_0.e1n(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
  };
  var CopySlotTableToAnchorLocation_instance;
  function CopySlotTableToAnchorLocation_getInstance() {
    if (CopySlotTableToAnchorLocation_instance == null)
      new CopySlotTableToAnchorLocation();
    return CopySlotTableToAnchorLocation_instance;
  }
  function EndMovableContentPlacement() {
    EndMovableContentPlacement_instance = this;
    Operation.call(this);
  }
  protoOf(EndMovableContentPlacement).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    positionToParentOf(slots, isInterface(applier, Applier) ? applier : THROW_CCE(), 0);
    slots.j1a();
  };
  var EndMovableContentPlacement_instance;
  function EndMovableContentPlacement_getInstance() {
    if (EndMovableContentPlacement_instance == null)
      new EndMovableContentPlacement();
    return EndMovableContentPlacement_instance;
  }
  function ReleaseMovableGroupAtCurrent() {
    ReleaseMovableGroupAtCurrent_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(ReleaseMovableGroupAtCurrent).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'composition';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'parentCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'reference';
        } else {
          tmp = protoOf(Operation).d1w.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(ReleaseMovableGroupAtCurrent).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.r1x(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.r1x(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    releaseMovableGroupAtCurrent(tmp, tmp_0, _this__u8e3s4.r1x(tmp$ret$2), slots);
  };
  var ReleaseMovableGroupAtCurrent_instance;
  function ReleaseMovableGroupAtCurrent_getInstance() {
    if (ReleaseMovableGroupAtCurrent_instance == null)
      new ReleaseMovableGroupAtCurrent();
    return ReleaseMovableGroupAtCurrent_instance;
  }
  function ApplyChangeList() {
    ApplyChangeList_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(ApplyChangeList).d1w = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'changes';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'effectiveNodeIndex';
      } else {
        tmp = protoOf(Operation).d1w.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(ApplyChangeList).m1x = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp0_safe_receiver = _this__u8e3s4.r1x(tmp$ret$0);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o1z_1;
    var effectiveNodeIndex = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.r1x(tmp$ret$1);
    var tmp_0;
    if (effectiveNodeIndex > 0) {
      tmp_0 = new OffsetApplier(applier, effectiveNodeIndex);
    } else {
      tmp_0 = applier;
    }
    tmp.z1i(tmp_0, slots, rememberManager);
  };
  var ApplyChangeList_instance;
  function ApplyChangeList_getInstance() {
    if (ApplyChangeList_instance == null)
      new ApplyChangeList();
    return ApplyChangeList_instance;
  }
  function Operation(ints, objects) {
    ints = ints === VOID ? 0 : ints;
    objects = objects === VOID ? 0 : objects;
    this.a1w_1 = ints;
    this.b1w_1 = objects;
  }
  protoOf(Operation).o1x = function () {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = getKClassFromExpression(this).ka();
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(Operation).c1w = function (parameter) {
    return 'IntParameter(' + _IntParameter___get_offset__impl__xsdcin(parameter) + ')';
  };
  protoOf(Operation).d1w = function (parameter) {
    return 'ObjectParameter(' + _ObjectParameter___get_offset__impl__x7fx93(parameter) + ')';
  };
  protoOf(Operation).toString = function () {
    return this.o1x();
  };
  function positionToInsert(slots, anchor, applier) {
    var destination = slots.m1b(anchor);
    runtimeCheck(slots.l17_1 < destination);
    positionToParentOf(slots, applier, destination);
    var nodeIndex = currentNodeIndex(slots);
    while (slots.l17_1 < destination) {
      if (slots.s1s(destination)) {
        if (slots.v1f()) {
          applier.e11(slots.m1c(slots.l17_1));
          nodeIndex = 0;
        }
        slots.l18();
      } else
        nodeIndex = nodeIndex + slots.t17() | 0;
    }
    runtimeCheck(slots.l17_1 === destination);
    return nodeIndex;
  }
  function positionToParentOf(slots, applier, index) {
    while (!slots.r1s(index)) {
      slots.e18();
      if (slots.r1a(slots.n17_1)) {
        applier.f11();
      }
      slots.j1a();
    }
  }
  function releaseMovableGroupAtCurrent(composition, parentContext, reference, slots) {
    var slotTable = new SlotTable();
    if (slots.p1s()) {
      slotTable.f18();
    }
    if (slots.q1s()) {
      slotTable.g18();
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.d18();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.changelist.releaseMovableGroupAtCurrent.<anonymous>' call
      writer.e19();
      writer.p18(126665345, reference.f1b_1);
      writer.b1b();
      writer.b1f(reference.g1b_1);
      var anchors = slots.n1t(reference.j1b_1, 1, writer);
      writer.t17();
      writer.j1a();
      writer.k1a();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = anchors;
    }finally {
      writer.i18(normalClose);
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_instance_2.h1n(slotTable, anchors_0)) {
      var movableContentRecomposeScopeOwner = new releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer_0 = slotTable.d18();
      var normalClose_0 = false;
      var tmp_0;
      try {
        Companion_instance_2.e1n(writer_0, anchors_0, movableContentRecomposeScopeOwner);
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
        normalClose_0 = true;
        tmp_0 = Unit_instance;
      }finally {
        writer_0.i18(normalClose_0);
      }
    }
    parentContext.c1l(reference, state);
  }
  function currentNodeIndex(slots) {
    var original = slots.l17_1;
    var current = slots.n17_1;
    while (current >= 0 && !slots.r1a(current)) {
      current = slots.w17(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.t1s(original, current)) {
        if (slots.r1a(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.r1a(current) ? 1 : slots.s1a(current)) | 0;
        current = current + slots.v19(current) | 0;
      }
    }
    return index;
  }
  function releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.z1z_1 = $composition;
    this.a20_1 = $reference;
  }
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).v1k = function (scope, instance) {
    var tmp = this.z1z_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1k(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.a20_1;
      tmp2_this.k1b_1 = plus_1(tmp2_this.k1b_1, to(scope, instance));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).z1k = function (scope) {
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).c1k = function (value) {
  };
  function OperationsDebugStringFormattable() {
  }
  function _WriteScope___init__impl__4xwato(stack) {
    return stack;
  }
  function _get_stack__b8zp2v($this) {
    return $this;
  }
  function _WriteScope___get_operation__impl__krvgwa($this) {
    return peekOperation(_get_stack__b8zp2v($this));
  }
  function WriteScope__setInt_impl_yt2o8b($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt.<anonymous>' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _IntParameter___get_offset__impl__xsdcin(parameter);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.v1v_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt.<anonymous>.<anonymous>' call
      var tmp$ret$0 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).c1w(parameter);
      throwIllegalStateException(tmp$ret$0);
    }
    $this$with.v1v_1 = $this$with.v1v_1 | mask;
    $this$with.r1v_1[topIntIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function WriteScope__setObject_impl_rr41y9($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.changelist.WriteScope.setObject.<anonymous>' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.w1v_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setObject.<anonymous>.<anonymous>' call
      var tmp$ret$0 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).d1w(parameter);
      throwIllegalStateException(tmp$ret$0);
    }
    $this$with.w1v_1 = $this$with.w1v_1 | mask;
    $this$with.t1v_1[topObjectIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function determineNewSize($this, currentSize, requiredSize) {
    var resizeAmount = coerceAtMost(currentSize, 1024);
    return coerceAtLeast(currentSize + resizeAmount | 0, requiredSize);
  }
  function ensureIntArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.r1v_1.length;
    if (requiredSize > currentSize) {
      $this.r1v_1 = copyOf($this.r1v_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function ensureObjectArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.t1v_1.length;
    if (requiredSize > currentSize) {
      $this.t1v_1 = copyOf_0($this.t1v_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function createExpectedArgMask($this, paramCount) {
    return paramCount === 0 ? 0 : -1 >>> (32 - paramCount | 0) | 0;
  }
  function peekOperation($this) {
    return ensureNotNull($this.p1v_1[$this.q1v_1 - 1 | 0]);
  }
  function topIntIndexOf($this, parameter) {
    return ($this.s1v_1 - peekOperation($this).a1w_1 | 0) + _IntParameter___get_offset__impl__xsdcin(parameter) | 0;
  }
  function topObjectIndexOf($this, parameter) {
    return ($this.u1v_1 - peekOperation($this).b1w_1 | 0) + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0;
  }
  function OpIterator($outer) {
    this.e20_1 = $outer;
    this.b20_1 = 0;
    this.c20_1 = 0;
    this.d20_1 = 0;
  }
  protoOf(OpIterator).l = function () {
    if (this.b20_1 >= this.e20_1.q1v_1)
      return false;
    var op = this.f20();
    this.c20_1 = this.c20_1 + op.a1w_1 | 0;
    this.d20_1 = this.d20_1 + op.b1w_1 | 0;
    this.b20_1 = this.b20_1 + 1 | 0;
    return this.b20_1 < this.e20_1.q1v_1;
  };
  protoOf(OpIterator).f20 = function () {
    return ensureNotNull(this.e20_1.p1v_1[this.b20_1]);
  };
  protoOf(OpIterator).n1x = function (parameter) {
    return this.e20_1.r1v_1[this.c20_1 + _IntParameter___get_offset__impl__xsdcin(parameter) | 0];
  };
  protoOf(OpIterator).r1x = function (parameter) {
    var tmp = this.e20_1.t1v_1[this.d20_1 + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function Companion_5() {
    this.g20_1 = 1024;
    this.h20_1 = 16;
  }
  var Companion_instance_6;
  function Companion_getInstance_5() {
    return Companion_instance_6;
  }
  function access$_get_pushedIntMask__wrtr8x($this) {
    return $this.v1v_1;
  }
  function access$_get_pushedObjectMask__8x586f($this) {
    return $this.w1v_1;
  }
  function access$createExpectedArgMask($this, paramCount) {
    return createExpectedArgMask($this, paramCount);
  }
  function Operations() {
    OperationsDebugStringFormattable.call(this);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.p1v_1 = fillArrayVal(Array(16), null);
    this.q1v_1 = 0;
    this.r1v_1 = new Int32Array(16);
    this.s1v_1 = 0;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.t1v_1 = fillArrayVal(Array(16), null);
    this.u1v_1 = 0;
    this.v1v_1 = 0;
    this.w1v_1 = 0;
  }
  protoOf(Operations).m = function () {
    return this.q1v_1;
  };
  protoOf(Operations).q = function () {
    return this.m() === 0;
  };
  protoOf(Operations).hz = function () {
    return !(this.m() === 0);
  };
  protoOf(Operations).y1 = function () {
    this.q1v_1 = 0;
    this.s1v_1 = 0;
    fill_0(this.t1v_1, null, 0, this.u1v_1);
    this.u1v_1 = 0;
  };
  protoOf(Operations).z1v = function (operation) {
    this.v1v_1 = 0;
    this.w1v_1 = 0;
    if (this.q1v_1 === this.p1v_1.length) {
      var resizeAmount = coerceAtMost(this.q1v_1, 1024);
      this.p1v_1 = copyOf_0(this.p1v_1, this.q1v_1 + resizeAmount | 0);
    }
    ensureIntArgsSizeAtLeast(this, this.s1v_1 + operation.a1w_1 | 0);
    ensureObjectArgsSizeAtLeast(this, this.u1v_1 + operation.b1w_1 | 0);
    var tmp = this.p1v_1;
    var tmp1 = this.q1v_1;
    this.q1v_1 = tmp1 + 1 | 0;
    tmp[tmp1] = operation;
    this.s1v_1 = this.s1v_1 + operation.a1w_1 | 0;
    this.u1v_1 = this.u1v_1 + operation.b1w_1 | 0;
  };
  protoOf(Operations).j1w = function (operation) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(operation.a1w_1 === 0 && operation.b1w_1 === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var tmp$ret$0 = 'Cannot push ' + operation.toString() + ' without arguments because it expects ' + ('' + operation.a1w_1 + ' ints and ' + operation.b1w_1 + ' objects.');
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.z1v(operation);
  };
  protoOf(Operations).j1x = function (other) {
    if (this.q()) {
      throw NoSuchElementException_init_$Create$('Cannot pop(), because the stack is empty.');
    }
    var tmp = this.p1v_1;
    this.q1v_1 = this.q1v_1 - 1 | 0;
    var op = ensureNotNull(tmp[this.q1v_1]);
    this.p1v_1[this.q1v_1] = null;
    other.z1v(op);
    var thisObjIdx = this.u1v_1;
    var otherObjIdx = other.u1v_1;
    // Inline function 'kotlin.repeat' call
    var times = op.b1w_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherObjIdx = otherObjIdx - 1 | 0;
        thisObjIdx = thisObjIdx - 1 | 0;
        other.t1v_1[otherObjIdx] = this.t1v_1[thisObjIdx];
        this.t1v_1[thisObjIdx] = null;
      }
       while (inductionVariable < times);
    var thisIntIdx = this.s1v_1;
    var otherIntIdx = other.s1v_1;
    // Inline function 'kotlin.repeat' call
    var times_0 = op.a1w_1;
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherIntIdx = otherIntIdx - 1 | 0;
        thisIntIdx = thisIntIdx - 1 | 0;
        other.r1v_1[otherIntIdx] = this.r1v_1[thisIntIdx];
        this.r1v_1[thisIntIdx] = 0;
      }
       while (inductionVariable_0 < times_0);
    this.u1v_1 = this.u1v_1 - op.b1w_1 | 0;
    this.s1v_1 = this.s1v_1 - op.a1w_1 | 0;
  };
  protoOf(Operations).x1v = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.drain' call
    // Inline function 'androidx.compose.runtime.changelist.Operations.forEach' call
    if (this.hz()) {
      var iterator = new OpIterator(this);
      do {
        // Inline function 'androidx.compose.runtime.changelist.Operations.executeAndFlushAllPendingOperations.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.executeAndFlushAllPendingOperations.<anonymous>.<anonymous>' call
        iterator.f20().m1x(iterator, applier, slots, rememberManager);
      }
       while (iterator.l());
    }
    this.y1();
  };
  protoOf(Operations).toString = function () {
    return protoOf(OperationsDebugStringFormattable).toString.call(this);
  };
  function MutableVector(content, size) {
    this.g1c_1 = content;
    this.h1c_1 = null;
    this.i1c_1 = size;
  }
  protoOf(MutableVector).j1c = function (element) {
    this.ov(this.i1c_1 + 1 | 0);
    this.g1c_1[this.i1c_1] = element;
    this.i1c_1 = this.i1c_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).y1 = function () {
    var content = this.g1c_1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var inductionVariable = this.i1c_1 - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        content[i] = null;
      }
       while (0 <= inductionVariable);
    this.i1c_1 = 0;
  };
  protoOf(MutableVector).ge = function (element) {
    var inductionVariable = 0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var last = this.i1c_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
        var index = i;
        var tmp = this.g1c_1[index];
        var tmp$ret$1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (equals(tmp$ret$1, element))
          return true;
      }
       while (!(i === last));
    return false;
  };
  protoOf(MutableVector).ov = function (capacity) {
    var oldContent = this.g1c_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var b = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, b);
      this.g1c_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).hz = function () {
    return !(this.i1c_1 === 0);
  };
  protoOf(MutableVector).b2 = function (index) {
    var content = this.g1c_1;
    var tmp = content[index];
    var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.i1c_1 - 1 | 0))) {
      var tmp4 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.i1c_1;
      arrayCopy(content, content, index, tmp4, endIndex);
    }
    this.i1c_1 = this.i1c_1 - 1 | 0;
    content[this.i1c_1] = null;
    return item;
  };
  protoOf(MutableVector).o1o = function (newSize) {
    this.i1c_1 = newSize;
  };
  function wrapIntoSet(_this__u8e3s4) {
    return new ScatterSetWrapper(_this__u8e3s4);
  }
  function ScatterSetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.q20_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ScatterSetWrapper$iterator$slambda).l21 = function ($this$iterator, $completion) {
    var tmp = this.m21($this$iterator, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(ScatterSetWrapper$iterator$slambda).q9 = function (p1, $completion) {
    return this.l21(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ScatterSetWrapper$iterator$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 11;
            var tmp_0 = this;
            tmp_0.s20_1 = this.q20_1.w1i_1;
            this.t20_1 = this.s20_1;
            this.u20_1 = this.t20_1.dz_1;
            var tmp_1 = this;
            tmp_1.v20_1 = this.t20_1;
            this.w8_1 = 1;
            continue $sm;
          case 1:
            this.x20_1 = this.v20_1;
            this.y20_1 = this.x20_1.cz_1;
            this.z20_1 = this.y20_1.length - 2 | 0;
            this.a21_1 = numberRangeToNumber(0, this.z20_1).j();
            this.w8_1 = 2;
            continue $sm;
          case 2:
            if (!this.a21_1.k()) {
              this.w8_1 = 9;
              continue $sm;
            }

            this.b21_1 = this.a21_1.l();
            this.c21_1 = this.y20_1[this.b21_1];
            var this_0 = this.c21_1;
            if (!this_0.c3(this_0.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.d21_1 = 8 - (~(this.b21_1 - this.z20_1 | 0) >>> 31 | 0) | 0;
              this.e21_1 = until(0, this.d21_1).j();
              this.w8_1 = 3;
              continue $sm;
            } else {
              this.w8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.e21_1.k()) {
              this.w8_1 = 6;
              continue $sm;
            }

            this.f21_1 = this.e21_1.l();
            if (this.c21_1.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
              this.g21_1 = (this.b21_1 << 3) + this.f21_1 | 0;
              var tmp_2 = this;
              tmp_2.h21_1 = this.g21_1;
              this.i21_1 = this.h21_1;
              var tmp_3 = this;
              var tmp_4 = this.u20_1[this.i21_1];
              tmp_3.j21_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
              this.k21_1 = this.j21_1;
              this.w8_1 = 4;
              suspendResult = this.r20_1.se(this.k21_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.w8_1 = 5;
              continue $sm;
            }

          case 4:
            this.w8_1 = 5;
            continue $sm;
          case 5:
            this.c21_1 = this.c21_1.a3(8);
            this.w8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.d21_1 === 8)) {
              this.w20_1 = Unit_instance;
              this.w8_1 = 10;
              continue $sm;
            } else {
              this.w8_1 = 7;
              continue $sm;
            }

          case 7:
            this.w8_1 = 8;
            continue $sm;
          case 8:
            this.w8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.w8_1 = 1;
              continue $sm;
            }

            this.w8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x8_1 === 11) {
          throw e;
        } else {
          this.w8_1 = this.x8_1;
          this.z8_1 = e;
        }
      }
     while (true);
  };
  protoOf(ScatterSetWrapper$iterator$slambda).m21 = function ($this$iterator, completion) {
    var i = new ScatterSetWrapper$iterator$slambda(this.q20_1, completion);
    i.r20_1 = $this$iterator;
    return i;
  };
  function ScatterSetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new ScatterSetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.l21($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ScatterSetWrapper(set) {
    this.w1i_1 = set;
  }
  protoOf(ScatterSetWrapper).m = function () {
    return this.w1i_1.m();
  };
  protoOf(ScatterSetWrapper).q = function () {
    return this.w1i_1.q();
  };
  protoOf(ScatterSetWrapper).j = function () {
    return iterator(ScatterSetWrapper$iterator$slambda_0(this, null));
  };
  protoOf(ScatterSetWrapper).n21 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = elements.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'androidx.compose.runtime.collection.ScatterSetWrapper.containsAll.<anonymous>' call
        if (!this.w1i_1.o(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(ScatterSetWrapper).u1 = function (elements) {
    return this.n21(elements);
  };
  protoOf(ScatterSetWrapper).ge = function (element) {
    return this.w1i_1.o(element);
  };
  protoOf(ScatterSetWrapper).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.ge((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function ScopeMap() {
    this.e1c_1 = mutableScatterMapOf();
  }
  protoOf(ScopeMap).m = function () {
    return this.e1c_1.m();
  };
  protoOf(ScopeMap).y1i = function (key, scope) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = this.e1c_1;
    var index = this_0.wx(key);
    var inserting = index < 0;
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.mx_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.add.<anonymous>' call
    var value = tmp;
    var tmp_1;
    if (value == null) {
      tmp_1 = scope;
    } else {
      if (value instanceof MutableScatterSet) {
        (value instanceof MutableScatterSet ? value : THROW_CCE()).h(scope);
        tmp_1 = value;
      } else {
        var tmp_2;
        if (!(value === scope)) {
          var set = new MutableScatterSet();
          set.h(!(value == null) ? value : THROW_CCE());
          set.h(scope);
          tmp_2 = set;
        } else {
          tmp_2 = value;
        }
        tmp_1 = tmp_2;
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.lx_1[insertionIndex] = key;
      this_0.mx_1[insertionIndex] = computedValue;
    } else {
      this_0.mx_1[index] = computedValue;
    }
  };
  protoOf(ScopeMap).f1j = function (key, value) {
    this.e1c_1.vx(key, value);
  };
  protoOf(ScopeMap).x1i = function (element) {
    return this.e1c_1.f2(element);
  };
  protoOf(ScopeMap).u1i = function (key, scope) {
    var tmp0_elvis_lhs = this.e1c_1.h2(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp_0;
    if (value instanceof MutableScatterSet) {
      var set = value instanceof MutableScatterSet ? value : THROW_CCE();
      var removed = set.v1(scope);
      if (removed && set.q()) {
        this.e1c_1.z4(key);
      }
      return removed;
    } else {
      if (equals(value, scope)) {
        this.e1c_1.z4(key);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
    }
    return tmp_0;
  };
  protoOf(ScopeMap).h1k = function (scope) {
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = this.e1c_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.kx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  var tmp = this_0.lx_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.mx_1[index];
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScope.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    set.v1(scope);
                    tmp_1 = set.q();
                  } else {
                    tmp_1 = value === scope;
                  }
                  if (tmp_1) {
                    this_0.dw(index);
                  }
                }
                slot = slot.a3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
  };
  protoOf(ScopeMap).u1j = function () {
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$_0();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = this.e1c_1;
    var k = this_0.lx_1;
    var v = this_0.mx_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.kx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.c3(this_1.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.asMap.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp1_0 = !(tmp1 == null) ? tmp1 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    tmp_1 = set.jz();
                  } else {
                    tmp_1 = mutableSetOf([!(value == null) ? value : THROW_CCE()]);
                  }
                  // Inline function 'kotlin.collections.set' call
                  var value_0 = tmp_1;
                  result.y4(tmp1_0, value_0);
                }
                slot = slot.a3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return result;
  };
  function persistentSetOf() {
    return Companion_getInstance_9().p21();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function SingleElementListIterator(element, index) {
    AbstractListIterator.call(this, index, 1);
    this.s21_1 = element;
  }
  protoOf(SingleElementListIterator).l = function () {
    this.v21();
    this.t21_1 = this.t21_1 + 1 | 0;
    return this.s21_1;
  };
  protoOf(SingleElementListIterator).i4 = function () {
    this.w21();
    this.t21_1 = this.t21_1 - 1 | 0;
    return this.s21_1;
  };
  function AbstractListIterator(index, size) {
    this.t21_1 = index;
    this.u21_1 = size;
  }
  protoOf(AbstractListIterator).k = function () {
    return this.t21_1 < this.u21_1;
  };
  protoOf(AbstractListIterator).h4 = function () {
    return this.t21_1 > 0;
  };
  protoOf(AbstractListIterator).j4 = function () {
    return this.t21_1 - 1 | 0;
  };
  protoOf(AbstractListIterator).v21 = function () {
    if (!this.k())
      throw NoSuchElementException_init_$Create$_0();
  };
  protoOf(AbstractListIterator).w21 = function () {
    if (!this.h4())
      throw NoSuchElementException_init_$Create$_0();
  };
  function AbstractPersistentList$removeAll$lambda($elements) {
    return function (it) {
      return $elements.o(it);
    };
  }
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).n = function (elements) {
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.x21();
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    this_0.n(elements);
    return this_0.y21();
  };
  protoOf(AbstractPersistentList).v1 = function (element) {
    var index = this.r(element);
    if (!(index === -1)) {
      return this.b2(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).x1 = function (elements) {
    return this.z21(AbstractPersistentList$removeAll$lambda(elements));
  };
  protoOf(AbstractPersistentList).o = function (element) {
    return !(this.r(element) === -1);
  };
  protoOf(AbstractPersistentList).j = function () {
    return this.s1();
  };
  protoOf(AbstractPersistentList).s1 = function () {
    return this.t1(0);
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.d22_1 = buffer;
  }
  protoOf(BufferIterator).l = function () {
    if (!this.k()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var tmp1 = this.t21_1;
    this.t21_1 = tmp1 + 1 | 0;
    return this.d22_1[tmp1];
  };
  protoOf(BufferIterator).i4 = function () {
    if (!this.h4()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.t21_1 = this.t21_1 - 1 | 0;
    return this.d22_1[this.t21_1];
  };
  function rootSize($this) {
    return rootSize_1($this.g22_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.g22_1 >> 5 > 1 << $this.h22_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.h22_1 + 5 | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.g22_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.h22_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.g22_1 + 1 | 0, $this.h22_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.g22_1 - 1 | 0, shift);
    var tmp1_elvis_lhs = root == null ? null : copyOf_0(root, 32);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp = fillArrayVal(Array(32), null);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === 5) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - 5 | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.g22_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.f22_1, 32);
    if (tailSize < 32) {
      var tmp0 = $this.f22_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = tailIndex + 1 | 0;
      arrayCopy(tmp0, newTail, destinationOffset, tailIndex, tailSize);
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.g22_1 + 1 | 0, $this.h22_1);
    }
    var lastElement = $this.f22_1[31];
    var tmp5 = $this.f22_1;
    var tmp7 = tailIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = tailSize - 1 | 0;
    arrayCopy(tmp5, newTail, tmp7, tailIndex, endIndex);
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        tmp = fillArrayVal(Array(32), null);
      } else {
        tmp = copyOf_0(root, 32);
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = bufferIndex + 1 | 0;
      arrayCopy(root, newRoot, destinationOffset, bufferIndex, 31);
      elementCarry.i22_1 = root[31];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, 32);
    var lowerLevelShift = shift - 5 | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    if (inductionVariable < 32)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.i22_1, elementCarry);
      }
       while (inductionVariable < 32);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.g22_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.f22_1, 32);
    if (index < (tailSize - 1 | 0)) {
      var tmp0 = $this.f22_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      arrayCopy(tmp0, newTail, index, startIndex, tailSize);
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === 33 ? copyOf_0(root, 32) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.i22_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - 5 | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === 5) {
      tailCarry.i22_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - 5 | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null && bufferIndex === 0) {
      return null;
    }
    var newRoot = copyOf_0(root, 32);
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        tmp = fillArrayVal(Array(32), null);
      } else {
        tmp = copyOf_0(root, 32);
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = bufferIndex + 1 | 0;
      arrayCopy(root, newRoot, bufferIndex, startIndex, 32);
      newRoot[31] = tailCarry.i22_1;
      tailCarry.i22_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = 31;
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, 32);
    var lowerLevelShift = shift - 5 | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.f22_1;
    }
    var buffer = $this.e22_1;
    var shift = $this.h22_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - 5 | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, 32);
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - 5 | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.e22_1 = root;
    this.f22_1 = tail;
    this.g22_1 = size;
    this.h22_1 = rootShift;
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.g22_1 > 32)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      var tmp$ret$0 = 'Trie-based persistent vector should have at least ' + ('33 elements, got ' + this.g22_1);
      throwIllegalArgumentException(tmp$ret$0);
    }
    assert((this.g22_1 - rootSize_1(this.g22_1) | 0) <= coerceAtMost(this.f22_1.length, 32));
  }
  protoOf(PersistentVector).m = function () {
    return this.g22_1;
  };
  protoOf(PersistentVector).h = function (element) {
    var tailSize = this.g22_1 - rootSize(this) | 0;
    if (tailSize < 32) {
      var newTail = copyOf_0(this.f22_1, 32);
      newTail[tailSize] = element;
      return new PersistentVector(this.e22_1, newTail, this.g22_1 + 1 | 0, this.h22_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.e22_1, this.f22_1, newTail_0);
  };
  protoOf(PersistentVector).a22 = function (index, element) {
    ListImplementation_instance.j22(index, this.g22_1);
    if (index === this.g22_1) {
      return this.h(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.e22_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.e22_1, this.h22_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.i22_1);
  };
  protoOf(PersistentVector).b2 = function (index) {
    ListImplementation_instance.k22(index, this.g22_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.e22_1, rootSize_0, this.h22_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.e22_1, this.h22_1, index, new ObjectRef(this.f22_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.h22_1, 0);
  };
  protoOf(PersistentVector).z21 = function (predicate) {
    // Inline function 'kotlin.also' call
    var this_0 = this.x21();
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.removeAll.<anonymous>' call
    this_0.u22(predicate);
    return this_0.y21();
  };
  protoOf(PersistentVector).x21 = function () {
    return new PersistentVectorBuilder(this, this.e22_1, this.f22_1, this.h22_1);
  };
  protoOf(PersistentVector).t1 = function (index) {
    ListImplementation_instance.j22(index, this.g22_1);
    var tmp = this.f22_1;
    return new PersistentVectorIterator(this.e22_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.g22_1, (this.h22_1 / 5 | 0) + 1 | 0);
  };
  protoOf(PersistentVector).p = function (index) {
    ListImplementation_instance.k22(index, this.g22_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & 31];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).z1 = function (index, element) {
    ListImplementation_instance.k22(index, this.g22_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.f22_1, 32);
      newTail[index & 31] = element;
      return new PersistentVector(this.e22_1, newTail, this.g22_1, this.h22_1);
    }
    var newRoot = setInRoot(this, this.e22_1, this.h22_1, index, element);
    return new PersistentVector(newRoot, this.f22_1, this.g22_1, this.h22_1);
  };
  function rootSize_0($this) {
    if ($this.t22_1 <= 32) {
      return 0;
    }
    return rootSize_1($this.t22_1);
  }
  function tailSize($this, size) {
    if (size <= 32) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.t22_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === 33 && buffer[32] === $this.q22_1;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    var tmp1 = mutableBuffer($this);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = coerceAtMost(buffer.length, 32);
    arrayCopy(buffer, tmp1, 0, 0, endIndex);
    return tmp1;
  }
  function makeMutableShiftingRight($this, buffer, distance) {
    if (isMutable($this, buffer)) {
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = 32 - distance | 0;
      arrayCopy(buffer, buffer, distance, 0, endIndex);
      return buffer;
    }
    var tmp6 = mutableBuffer($this);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = 32 - distance | 0;
    arrayCopy(buffer, tmp6, distance, 0, endIndex_0);
    return tmp6;
  }
  function mutableBufferWith($this, element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(33), null);
    buffer[0] = element;
    buffer[32] = $this.q22_1;
    return buffer;
  }
  function mutableBuffer($this) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(33), null);
    buffer[32] = $this.q22_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.t22_1 >> 5 > 1 << $this.p22_1) {
      $this.r22_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.p22_1 + 5 | 0);
      $this.s22_1 = newTail;
      $this.p22_1 = $this.p22_1 + 5 | 0;
      $this.t22_1 = $this.t22_1 + 1 | 0;
      tmp = Unit_instance;
    } else if (root == null) {
      $this.r22_1 = filledTail;
      $this.s22_1 = newTail;
      $this.t22_1 = $this.t22_1 + 1 | 0;
      tmp = Unit_instance;
    } else {
      $this.r22_1 = pushTail_0($this, root, filledTail, $this.p22_1);
      $this.s22_1 = newTail;
      $this.t22_1 = $this.t22_1 + 1 | 0;
      tmp = Unit_instance;
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.t22_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 5) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - 5 | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < 32 && sourceIterator.k()) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.l();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> 5 < 1 << $this.p22_1 ? pushBuffers($this, root, rootSize, $this.p22_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.k()) {
      $this.p22_1 = $this.p22_1 + 5 | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.p22_1, $this.p22_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!buffersIterator.k()) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.pushBuffers.<anonymous>' call
      var tmp$ret$0 = 'invalid buffersIterator';
      throwIllegalArgumentException(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shift >= 0)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.pushBuffers.<anonymous>' call
      var tmp$ret$1 = 'negative shift';
      throwIllegalArgumentException(tmp$ret$1);
    }
    if (shift === 0) {
      return buffersIterator.l();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - 5 | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < 32) {
        tmp_1 = buffersIterator.k();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - 5 | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.s22_1);
    if (tailSize < 32) {
      var tmp0 = $this.s22_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = index + 1 | 0;
      arrayCopy(tmp0, mutableTail, destinationOffset, index, tailSize);
      mutableTail[index] = element;
      $this.r22_1 = root;
      $this.s22_1 = mutableTail;
      $this.t22_1 = $this.t22_1 + 1 | 0;
    } else {
      var lastElement = $this.s22_1[31];
      var tmp5 = $this.s22_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = index + 1 | 0;
      arrayCopy(tmp5, mutableTail, destinationOffset_0, index, 31);
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.i22_1 = root[31];
      var tmp1 = makeMutable($this, root);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = bufferIndex + 1 | 0;
      arrayCopy(root, tmp1, destinationOffset, bufferIndex, 31);
      var mutableRoot = tmp1;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - 5 | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    if (inductionVariable < 32)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.i22_1, elementCarry);
      }
       while (inductionVariable < 32);
    return mutableRoot_0;
  }
  function insertIntoRoot_1($this, elements, index, rightShift, buffers, nullBuffers, nextBuffer) {
    var tmp0 = $this.r22_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.insertIntoRoot.<anonymous>' call
        var message = 'root is null';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var startLeafIndex = index >> 5;
    var startLeaf = shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer);
    var lastLeafIndex = (rootSize_0($this) >> 5) - 1 | 0;
    var newNullBuffers = nullBuffers - (lastLeafIndex - startLeafIndex | 0) | 0;
    var newNextBuffer = newNullBuffers < nullBuffers ? ensureNotNull(buffers[newNullBuffers]) : nextBuffer;
    splitToBuffers($this, elements, index, startLeaf, 32, buffers, newNullBuffers, newNextBuffer);
  }
  function shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer) {
    var tmp0 = $this.r22_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.shiftLeafBuffers.<anonymous>' call
        var message = 'root is null';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var leafCount = rootSize_0($this) >> 5;
    var leafBufferIterator_0 = leafBufferIterator($this, leafCount);
    var bufferIndex = nullBuffers;
    var buffer = nextBuffer;
    while (!(leafBufferIterator_0.j4() === startLeafIndex)) {
      var currentBuffer = leafBufferIterator_0.i4();
      var tmp2 = buffer;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = 32 - rightShift | 0;
      arrayCopy(currentBuffer, tmp2, 0, startIndex, 32);
      buffer = makeMutableShiftingRight($this, currentBuffer, rightShift);
      bufferIndex = bufferIndex - 1 | 0;
      buffers[bufferIndex] = buffer;
    }
    return leafBufferIterator_0.i4();
  }
  function splitToBuffers($this, elements, index, startBuffer, startBufferSize, buffers, nullBuffers, nextBuffer) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(nullBuffers >= 1)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.splitToBuffers.<anonymous>' call
      var tmp$ret$0 = 'requires at least one nullBuffer';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var firstBuffer = makeMutable($this, startBuffer);
    buffers[0] = firstBuffer;
    var newNextBuffer = nextBuffer;
    var newNullBuffers = nullBuffers;
    var startBufferStartIndex = index & 31;
    var endBufferEndIndex = ((index + elements.m() | 0) - 1 | 0) & 31;
    var elementsToShift = startBufferSize - startBufferStartIndex | 0;
    if ((endBufferEndIndex + elementsToShift | 0) < 32) {
      var tmp2 = newNextBuffer;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = endBufferEndIndex + 1 | 0;
      arrayCopy(firstBuffer, tmp2, destinationOffset, startBufferStartIndex, startBufferSize);
    } else {
      var toCopyToLast = ((endBufferEndIndex + elementsToShift | 0) - 32 | 0) + 1 | 0;
      if (nullBuffers === 1) {
        newNextBuffer = firstBuffer;
      } else {
        newNextBuffer = mutableBuffer($this);
        newNullBuffers = newNullBuffers - 1 | 0;
        buffers[newNullBuffers] = newNextBuffer;
      }
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, nextBuffer, 0, startIndex, startBufferSize);
      var tmp12 = newNextBuffer;
      var tmp13 = endBufferEndIndex + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, tmp12, tmp13, startBufferStartIndex, endIndex);
    }
    var elementsIterator = elements.j();
    copyToBuffer($this, firstBuffer, startBufferStartIndex, elementsIterator);
    var inductionVariable = 1;
    var last = newNullBuffers;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        buffers[i] = copyToBuffer($this, mutableBuffer($this), 0, elementsIterator);
      }
       while (inductionVariable < last);
    copyToBuffer($this, newNextBuffer, 0, elementsIterator);
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.s22_1;
    }
    var buffer = ensureNotNull($this.r22_1);
    var shift = $this.p22_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - 5 | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.t22_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.s22_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.s22_1[index];
      var tmp0 = $this.s22_1;
      var tmp1 = makeMutable($this, $this.s22_1);
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      arrayCopy(tmp0, tmp1, index, startIndex, tailSize);
      var mutableTail = tmp1;
      mutableTail[tailSize - 1 | 0] = null;
      $this.r22_1 = root;
      $this.s22_1 = mutableTail;
      $this.t22_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.p22_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      var tmp1 = makeMutable($this, root);
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = bufferIndex + 1 | 0;
      arrayCopy(root, tmp1, bufferIndex, startIndex, 32);
      var mutableRoot = tmp1;
      mutableRoot[31] = tailCarry.i22_1;
      tailCarry.i22_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = 31;
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - 5 | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.r22_1 = null;
      var tmp = $this;
      var tmp_0;
      if (root == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_0 = [];
      } else {
        tmp_0 = root;
      }
      tmp.s22_1 = tmp_0;
      $this.t22_1 = rootSize;
      $this.p22_1 = shift;
      return Unit_instance;
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.i22_1;
    tmp_1.s22_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.t22_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.r22_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.p22_1 = shift - 5 | 0;
    } else {
      $this.r22_1 = newRoot;
      $this.p22_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === 5) {
      tailCarry.i22_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - 5 | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null && bufferIndex === 0) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function removeAll($this, predicate) {
    var tailSize = tailSize_0($this);
    var bufferRef = new ObjectRef(null);
    if ($this.r22_1 == null) {
      return !(removeAllFromTail($this, predicate, tailSize, bufferRef) === tailSize);
    }
    var leafIterator = leafBufferIterator($this, 0);
    var bufferSize = 32;
    while (bufferSize === 32 && leafIterator.k()) {
      bufferSize = removeAll_0($this, predicate, leafIterator.l(), 32, bufferRef);
    }
    if (bufferSize === 32) {
      assert(!leafIterator.k());
      var newTailSize = removeAllFromTail($this, predicate, tailSize, bufferRef);
      if (newTailSize === 0) {
        pullLastBufferFromRoot_0($this, $this.r22_1, $this.t22_1, $this.p22_1);
      }
      return !(newTailSize === tailSize);
    }
    var unaffectedElementsCount = leafIterator.j4() << 5;
    // Inline function 'kotlin.collections.mutableListOf' call
    var buffers = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.mutableListOf' call
    var recyclableBuffers = ArrayList_init_$Create$();
    while (leafIterator.k()) {
      var leaf = leafIterator.l();
      bufferSize = recyclableRemoveAll($this, predicate, leaf, 32, bufferSize, bufferRef, recyclableBuffers, buffers);
    }
    var newTailSize_0 = recyclableRemoveAll($this, predicate, $this.s22_1, tailSize, bufferSize, bufferRef, recyclableBuffers, buffers);
    var tmp = bufferRef.i22_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    fill_0(newTail, null, newTailSize_0, 32);
    var newRoot = buffers.q() ? ensureNotNull($this.r22_1) : pushBuffers($this, $this.r22_1, unaffectedElementsCount, $this.p22_1, buffers.j());
    var newRootSize = unaffectedElementsCount + (buffers.m() << 5) | 0;
    $this.r22_1 = retainFirst($this, newRoot, newRootSize);
    $this.s22_1 = newTail;
    $this.t22_1 = newRootSize + newTailSize_0 | 0;
    return true;
  }
  function retainFirst($this, root, size) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((size & 31) === 0)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.retainFirst.<anonymous>' call
      var tmp$ret$0 = 'invalid size';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (size === 0) {
      $this.p22_1 = 0;
      return null;
    }
    var lastIndex = size - 1 | 0;
    var newRoot = root;
    while (lastIndex >> $this.p22_1 === 0) {
      $this.p22_1 = $this.p22_1 - 5 | 0;
      var tmp = newRoot[0];
      newRoot = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    }
    return nullifyAfter($this, newRoot, lastIndex, $this.p22_1);
  }
  function nullifyAfter($this, root, index, shift) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shift >= 0)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.nullifyAfter.<anonymous>' call
      var tmp$ret$0 = 'shift should be positive';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (shift === 0) {
      return root;
    }
    var lastIndex = indexSegment(index, shift);
    var tmp = root[lastIndex];
    var newChild = nullifyAfter($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), index, shift - 5 | 0);
    var newRoot = root;
    if (lastIndex < 31 && !(newRoot[lastIndex + 1 | 0] == null)) {
      if (isMutable($this, newRoot)) {
        fill_0(newRoot, null, lastIndex + 1 | 0, 32);
      }
      var tmp1 = newRoot;
      var tmp2 = mutableBuffer($this);
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = lastIndex + 1 | 0;
      arrayCopy(tmp1, tmp2, 0, 0, endIndex);
      newRoot = tmp2;
    }
    if (!(newChild === newRoot[lastIndex])) {
      newRoot = makeMutable($this, newRoot);
      newRoot[lastIndex] = newChild;
    }
    return newRoot;
  }
  function removeAllFromTail($this, predicate, tailSize, bufferRef) {
    var newTailSize = removeAll_0($this, predicate, $this.s22_1, tailSize, bufferRef);
    if (newTailSize === tailSize) {
      assert(bufferRef.i22_1 === $this.s22_1);
      return tailSize;
    }
    var tmp = bufferRef.i22_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    fill_0(newTail, null, newTailSize, tailSize);
    $this.s22_1 = newTail;
    $this.t22_1 = $this.t22_1 - (tailSize - newTailSize | 0) | 0;
    return newTailSize;
  }
  function removeAll_0($this, predicate, buffer, bufferSize, bufferRef) {
    var newBuffer = buffer;
    var newBufferSize = bufferSize;
    var anyRemoved = false;
    var inductionVariable = 0;
    if (inductionVariable < bufferSize)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = buffer[index];
        var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (predicate(element)) {
          if (!anyRemoved) {
            newBuffer = makeMutable($this, buffer);
            newBufferSize = index;
            anyRemoved = true;
          }
        } else if (anyRemoved) {
          var tmp_0 = newBuffer;
          var tmp1 = newBufferSize;
          newBufferSize = tmp1 + 1 | 0;
          tmp_0[tmp1] = element;
        }
      }
       while (inductionVariable < bufferSize);
    bufferRef.i22_1 = newBuffer;
    return newBufferSize;
  }
  function recyclableRemoveAll($this, predicate, buffer, bufferSize, toBufferSize, bufferRef, recyclableBuffers, buffers) {
    if (isMutable($this, buffer)) {
      recyclableBuffers.h(buffer);
    }
    var tmp = bufferRef.i22_1;
    var toBuffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var newToBuffer = toBuffer;
    var newToBufferSize = toBufferSize;
    var inductionVariable = 0;
    if (inductionVariable < bufferSize)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_0 = buffer[index];
        var element = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        if (!predicate(element)) {
          if (newToBufferSize === 32) {
            var tmp_1;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!recyclableBuffers.q()) {
              tmp_1 = recyclableBuffers.b2(recyclableBuffers.m() - 1 | 0);
            } else {
              tmp_1 = mutableBuffer($this);
            }
            newToBuffer = tmp_1;
            newToBufferSize = 0;
          }
          var tmp_2 = newToBuffer;
          var tmp1 = newToBufferSize;
          newToBufferSize = tmp1 + 1 | 0;
          tmp_2[tmp1] = element;
        }
      }
       while (inductionVariable < bufferSize);
    bufferRef.i22_1 = newToBuffer;
    if (!(toBuffer === bufferRef.i22_1)) {
      buffers.h(toBuffer);
    }
    return newToBufferSize;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        $this.b4_1 = $this.b4_1 + 1 | 0;
      }
      oldElementCarry.i22_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - 5 | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function leafBufferIterator($this, index) {
    var tmp0 = $this.r22_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.leafBufferIterator.<anonymous>' call
        var message = 'Invalid root';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var root = tmp$ret$1;
    var leafCount = rootSize_0($this) >> 5;
    ListImplementation_instance.j22(index, leafCount);
    if ($this.p22_1 === 0) {
      return new SingleElementListIterator(root, index);
    }
    var trieHeight = $this.p22_1 / 5 | 0;
    return new TrieIterator(root, index, leafCount, trieHeight);
  }
  function PersistentVectorBuilder$removeAll$lambda($elements) {
    return function (it) {
      return $elements.o(it);
    };
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.m22_1 = vector;
    this.n22_1 = vectorRoot;
    this.o22_1 = vectorTail;
    this.p22_1 = rootShift;
    this.q22_1 = new MutabilityOwnership();
    this.r22_1 = this.n22_1;
    this.s22_1 = this.o22_1;
    this.t22_1 = this.m22_1.m();
  }
  protoOf(PersistentVectorBuilder).m = function () {
    return this.t22_1;
  };
  protoOf(PersistentVectorBuilder).v22 = function () {
    return this.b4_1;
  };
  protoOf(PersistentVectorBuilder).y21 = function () {
    var tmp = this;
    var tmp_0;
    if (this.r22_1 === this.n22_1 && this.s22_1 === this.o22_1) {
      tmp_0 = this.m22_1;
    } else {
      this.q22_1 = new MutabilityOwnership();
      this.n22_1 = this.r22_1;
      this.o22_1 = this.s22_1;
      var tmp_1;
      if (this.r22_1 == null) {
        var tmp_2;
        // Inline function 'kotlin.collections.isEmpty' call
        if (this.s22_1.length === 0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.s22_1, this.t22_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.r22_1), this.s22_1, this.t22_1, this.p22_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.m22_1 = tmp_0;
    return this.m22_1;
  };
  protoOf(PersistentVectorBuilder).h = function (element) {
    this.b4_1 = this.b4_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < 32) {
      var mutableTail = makeMutable(this, this.s22_1);
      mutableTail[tailSize] = element;
      this.s22_1 = mutableTail;
      this.t22_1 = this.t22_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.r22_1, this.s22_1, newTail);
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).n = function (elements) {
    if (elements.q()) {
      return false;
    }
    this.b4_1 = this.b4_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.j();
    if ((32 - tailSize | 0) >= elements.m()) {
      this.s22_1 = copyToBuffer(this, makeMutable(this, this.s22_1), tailSize, elementsIterator);
      this.t22_1 = this.t22_1 + elements.m() | 0;
    } else {
      var buffersSize = ((elements.m() + tailSize | 0) - 1 | 0) / 32 | 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var buffers = fillArrayVal(Array(buffersSize), null);
      buffers[0] = copyToBuffer(this, makeMutable(this, this.s22_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.r22_1;
      var tmp_1 = rootSize_0(this);
      tmp.r22_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.s22_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      this.t22_1 = this.t22_1 + elements.m() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).a2 = function (index, element) {
    ListImplementation_instance.j22(index, this.t22_1);
    if (index === this.t22_1) {
      this.h(element);
      return Unit_instance;
    }
    this.b4_1 = this.b4_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.r22_1, index - rootSize | 0, element);
      return Unit_instance;
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.r22_1), this.p22_1, index, element, elementCarry);
    var tmp = elementCarry.i22_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).w1 = function (index, elements) {
    ListImplementation_instance.j22(index, this.t22_1);
    if (index === this.t22_1) {
      return this.n(elements);
    }
    if (elements.q()) {
      return false;
    }
    this.b4_1 = this.b4_1 + 1 | 0;
    var unaffectedElementsCount = index >> 5 << 5;
    var buffersSize = (((this.t22_1 - unaffectedElementsCount | 0) + elements.m() | 0) - 1 | 0) / 32 | 0;
    if (buffersSize === 0) {
      assert(index >= rootSize_0(this));
      var startIndex = index & 31;
      var endIndex = ((index + elements.m() | 0) - 1 | 0) & 31;
      var tmp0 = this.s22_1;
      var tmp1 = makeMutable(this, this.s22_1);
      var tmp2 = endIndex + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex_0 = tailSize_0(this);
      arrayCopy(tmp0, tmp1, tmp2, startIndex, endIndex_0);
      var newTail = tmp1;
      copyToBuffer(this, newTail, startIndex, elements.j());
      this.s22_1 = newTail;
      this.t22_1 = this.t22_1 + elements.m() | 0;
      return true;
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var buffers = fillArrayVal(Array(buffersSize), null);
    var tailSize_1 = tailSize_0(this);
    var newTailSize = tailSize(this, this.t22_1 + elements.m() | 0);
    var newTail_0;
    if (index >= rootSize_0(this)) {
      newTail_0 = mutableBuffer(this);
      splitToBuffers(this, elements, index, this.s22_1, tailSize_1, buffers, buffersSize, newTail_0);
    } else if (newTailSize > tailSize_1) {
      var rightShift = newTailSize - tailSize_1 | 0;
      newTail_0 = makeMutableShiftingRight(this, this.s22_1, rightShift);
      insertIntoRoot_1(this, elements, index, rightShift, buffers, buffersSize, newTail_0);
    } else {
      var tmp6 = this.s22_1;
      var tmp7 = mutableBuffer(this);
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex_0 = tailSize_1 - newTailSize | 0;
      arrayCopy(tmp6, tmp7, 0, startIndex_0, tailSize_1);
      newTail_0 = tmp7;
      var rightShift_0 = 32 - (tailSize_1 - newTailSize | 0) | 0;
      var lastBuffer = makeMutableShiftingRight(this, this.s22_1, rightShift_0);
      buffers[buffersSize - 1 | 0] = lastBuffer;
      insertIntoRoot_1(this, elements, index, rightShift_0, buffers, buffersSize - 1 | 0, lastBuffer);
    }
    var tmp = this;
    var tmp_0 = this.r22_1;
    tmp.r22_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, unaffectedElementsCount, isArray(buffers) ? buffers : THROW_CCE());
    this.s22_1 = newTail_0;
    this.t22_1 = this.t22_1 + elements.m() | 0;
    return true;
  };
  protoOf(PersistentVectorBuilder).p = function (index) {
    ListImplementation_instance.k22(index, this.t22_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & 31];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).b2 = function (index) {
    ListImplementation_instance.k22(index, this.t22_1);
    this.b4_1 = this.b4_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.r22_1, rootSize, this.p22_1, index - rootSize | 0);
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.s22_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.r22_1), this.p22_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.p22_1, 0);
    var tmp_0 = elementCarry.i22_1;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).x1 = function (elements) {
    return this.u22(PersistentVectorBuilder$removeAll$lambda(elements));
  };
  protoOf(PersistentVectorBuilder).u22 = function (predicate) {
    var anyRemoved = removeAll(this, predicate);
    if (anyRemoved) {
      this.b4_1 = this.b4_1 + 1 | 0;
    }
    return anyRemoved;
  };
  protoOf(PersistentVectorBuilder).z1 = function (index, element) {
    ListImplementation_instance.k22(index, this.t22_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.s22_1);
      if (!(mutableTail === this.s22_1)) {
        this.b4_1 = this.b4_1 + 1 | 0;
      }
      var tailIndex = index & 31;
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.s22_1 = mutableTail;
      return (oldElement == null ? true : !(oldElement == null)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.r22_1 = setInRoot_0(this, ensureNotNull(this.r22_1), this.p22_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.i22_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).j = function () {
    return this.s1();
  };
  protoOf(PersistentVectorBuilder).s1 = function () {
    return this.t1(0);
  };
  protoOf(PersistentVectorBuilder).t1 = function (index) {
    ListImplementation_instance.j22(index, this.t22_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.y22_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.z22_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).l = function () {
    this.v21();
    if (this.z22_1.k()) {
      this.t21_1 = this.t21_1 + 1 | 0;
      return this.z22_1.l();
    }
    var tmp3 = this.t21_1;
    this.t21_1 = tmp3 + 1 | 0;
    return this.y22_1[tmp3 - this.z22_1.u21_1 | 0];
  };
  protoOf(PersistentVectorIterator).i4 = function () {
    this.w21();
    if (this.t21_1 > this.z22_1.u21_1) {
      this.t21_1 = this.t21_1 - 1 | 0;
      return this.y22_1[this.t21_1 - this.z22_1.u21_1 | 0];
    }
    this.t21_1 = this.t21_1 - 1 | 0;
    return this.z22_1.i4();
  };
  function reset($this) {
    $this.u21_1 = $this.h23_1.t22_1;
    $this.i23_1 = $this.h23_1.v22();
    $this.k23_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.h23_1.r22_1;
    if (root == null) {
      $this.j23_1 = null;
      return Unit_instance;
    }
    var trieSize = rootSize_1($this.h23_1.t22_1);
    var trieIndex = coerceAtMost($this.t21_1, trieSize);
    var trieHeight = ($this.h23_1.p22_1 / 5 | 0) + 1 | 0;
    if ($this.j23_1 == null) {
      $this.j23_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.j23_1).l23(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.i23_1 === $this.h23_1.v22()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.k23_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.t22_1);
    this.h23_1 = builder;
    this.i23_1 = this.h23_1.v22();
    this.j23_1 = null;
    this.k23_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).i4 = function () {
    checkForComodification(this);
    this.w21();
    this.k23_1 = this.t21_1 - 1 | 0;
    var tmp1_elvis_lhs = this.j23_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.h23_1.s22_1;
      this.t21_1 = this.t21_1 - 1 | 0;
      var tmp_1 = tmp_0[this.t21_1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.t21_1 > trieIterator.u21_1) {
      var tmp_2 = this.h23_1.s22_1;
      this.t21_1 = this.t21_1 - 1 | 0;
      var tmp_3 = tmp_2[this.t21_1 - trieIterator.u21_1 | 0];
      return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    }
    this.t21_1 = this.t21_1 - 1 | 0;
    return trieIterator.i4();
  };
  protoOf(PersistentVectorMutableIterator).l = function () {
    checkForComodification(this);
    this.v21();
    this.k23_1 = this.t21_1;
    var tmp2_elvis_lhs = this.j23_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.h23_1.s22_1;
      var tmp1 = this.t21_1;
      this.t21_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.k()) {
      this.t21_1 = this.t21_1 + 1 | 0;
      return trieIterator.l();
    }
    var tmp_2 = this.h23_1.s22_1;
    var tmp6 = this.t21_1;
    this.t21_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.u21_1 | 0];
    return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).x3 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.h23_1.b2(this.k23_1);
    if (this.k23_1 < this.t21_1)
      this.t21_1 = this.k23_1;
    reset(this);
  };
  function bufferOfSize($this, size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.m23_1 = new SmallPersistentVector(tmp$ret$0);
  }
  var Companion_instance_7;
  function Companion_getInstance_6() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_6();
    AbstractPersistentList.call(this);
    this.n23_1 = buffer;
    assert(this.n23_1.length <= 32);
  }
  protoOf(SmallPersistentVector).m = function () {
    return this.n23_1.length;
  };
  protoOf(SmallPersistentVector).h = function (element) {
    if (this.m() < 32) {
      var newBuffer = copyOf_0(this.n23_1, this.m() + 1 | 0);
      newBuffer[this.m()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.n23_1, tail, this.m() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).n = function (elements) {
    if ((this.m() + elements.m() | 0) <= 32) {
      var newBuffer = copyOf_0(this.n23_1, this.m() + elements.m() | 0);
      var index = this.m();
      var tmp0_iterator = elements.j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.x21();
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    this_0.n(elements);
    return this_0.y21();
  };
  protoOf(SmallPersistentVector).z21 = function (predicate) {
    var newBuffer = this.n23_1;
    var newSize = this.m();
    var anyRemoved = false;
    var inductionVariable = 0;
    var last = this.m();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.n23_1[index];
        var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (predicate(element)) {
          if (!anyRemoved) {
            // Inline function 'kotlin.collections.copyOf' call
            // Inline function 'kotlin.js.asDynamic' call
            newBuffer = this.n23_1.slice();
            newSize = index;
            anyRemoved = true;
          }
        } else if (anyRemoved) {
          var tmp_0 = newBuffer;
          var tmp1 = newSize;
          newSize = tmp1 + 1 | 0;
          tmp_0[tmp1] = element;
        }
      }
       while (inductionVariable < last);
    var tmp2_subject = newSize;
    return tmp2_subject === this.m() ? this : tmp2_subject === 0 ? Companion_getInstance_6().m23_1 : new SmallPersistentVector(copyOfRange(newBuffer, 0, newSize));
  };
  protoOf(SmallPersistentVector).a22 = function (index, element) {
    ListImplementation_instance.j22(index, this.m());
    if (index === this.m()) {
      return this.h(element);
    }
    if (this.m() < 32) {
      var newBuffer = bufferOfSize(this, this.m() + 1 | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.n23_1;
      arrayCopy(this_0, newBuffer, 0, 0, index);
      var tmp5 = this.n23_1;
      var tmp7 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.m();
      arrayCopy(tmp5, newBuffer, tmp7, index, endIndex);
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var root = this.n23_1.slice();
    var tmp11 = this.n23_1;
    var tmp13 = index + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.m() - 1 | 0;
    arrayCopy(tmp11, root, tmp13, index, endIndex_0);
    root[index] = element;
    var tail = presizedBufferWith(this.n23_1[31]);
    return new PersistentVector(root, tail, this.m() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).b2 = function (index) {
    ListImplementation_instance.k22(index, this.m());
    if (this.m() === 1) {
      return Companion_getInstance_6().m23_1;
    }
    var newBuffer = copyOf_0(this.n23_1, this.m() - 1 | 0);
    var tmp0 = this.n23_1;
    var tmp3 = index + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.m();
    arrayCopy(tmp0, newBuffer, index, tmp3, endIndex);
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).x21 = function () {
    return new PersistentVectorBuilder(this, null, this.n23_1, 0);
  };
  protoOf(SmallPersistentVector).r = function (element) {
    return indexOf(this.n23_1, element);
  };
  protoOf(SmallPersistentVector).t1 = function (index) {
    ListImplementation_instance.j22(index, this.m());
    var tmp = this.n23_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.m());
  };
  protoOf(SmallPersistentVector).p = function (index) {
    ListImplementation_instance.k22(index, this.m());
    var tmp = this.n23_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).z1 = function (index, element) {
    ListImplementation_instance.k22(index, this.m());
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = this.n23_1.slice();
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.c23_1 - startLevel | 0, 5);
    var i = startLevel;
    while (i < $this.c23_1) {
      var tmp = $this.d23_1;
      var tmp_0 = i;
      var tmp_1 = $this.d23_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - 5 | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.t21_1, shift) === indexPredicate) {
      shift = shift + 5 | 0;
    }
    if (shift > 0) {
      var level = ($this.c23_1 - 1 | 0) - (shift / 5 | 0) | 0;
      fillPath($this, $this.t21_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.t21_1 & 31;
    var tmp = $this.d23_1[$this.c23_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.c23_1 = height;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size_0 = this.c23_1;
    tmp.d23_1 = fillArrayVal(Array(size_0), null);
    this.e23_1 = index === size;
    this.d23_1[0] = root;
    fillPath(this, index - (this.e23_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).l23 = function (root, index, size, height) {
    this.t21_1 = index;
    this.u21_1 = size;
    this.c23_1 = height;
    if (this.d23_1.length < height) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.d23_1 = fillArrayVal(Array(height), null);
    }
    this.d23_1[0] = root;
    this.e23_1 = index === size;
    fillPath(this, index - (this.e23_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).l = function () {
    if (!this.k()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var result = elementAtCurrentIndex(this);
    this.t21_1 = this.t21_1 + 1 | 0;
    if (this.t21_1 === this.u21_1) {
      this.e23_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  protoOf(TrieIterator).i4 = function () {
    if (!this.h4()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.t21_1 = this.t21_1 - 1 | 0;
    if (this.e23_1) {
      this.e23_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, 31);
    return elementAtCurrentIndex(this);
  };
  function persistentVectorOf() {
    return Companion_getInstance_6().m23_1;
  }
  function presizedBufferWith(element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(32), null);
    buffer[0] = element;
    return buffer;
  }
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.i22_1 = value;
  }
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.o23_1 = new PersistentHashMap(Companion_getInstance_8().p23_1, 0);
  }
  protoOf(Companion_7).q23 = function () {
    var tmp = this.o23_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_8;
  function Companion_getInstance_7() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_7();
    AbstractMap.call(this);
    this.t23_1 = node;
    this.u23_1 = size;
  }
  protoOf(PersistentHashMap).m = function () {
    return this.u23_1;
  };
  protoOf(PersistentHashMap).i2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).j2 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).k2 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).f2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.t23_1.z23(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).h2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.t23_1.a24(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).y4 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.t23_1.b24(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.c24_1, this.m() + newNodeResult.d24_1 | 0);
  };
  protoOf(PersistentHashMap).z4 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.t23_1.e24(tmp$ret$0, key, 0);
    if (this.t23_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_7().q23();
    }
    return new PersistentHashMap(newNode, this.m() - 1 | 0);
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.f24_1[pathIndex].l24()) {
      return pathIndex;
    }
    if ($this.f24_1[pathIndex].p24()) {
      var node = $this.f24_1[pathIndex].m24();
      if (pathIndex === 6) {
        $this.f24_1[pathIndex + 1 | 0].o24(node.y23_1, node.y23_1.length);
      } else {
        $this.f24_1[pathIndex + 1 | 0].o24(node.y23_1, imul(2, node.n24()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.f24_1[$this.g24_1].l24()) {
      return Unit_instance;
    }
    var inductionVariable = $this.g24_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 && $this.f24_1[i].p24()) {
          $this.f24_1[i].q24();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.g24_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.f24_1[i - 1 | 0].q24();
        }
        $this.f24_1[i].o24(Companion_getInstance_8().p23_1.y23_1, 0);
      }
       while (0 <= inductionVariable);
    $this.h24_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.k())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.f24_1 = path;
    this.g24_1 = 0;
    this.h24_1 = true;
    this.f24_1[0].o24(node.y23_1, imul(2, node.n24()));
    this.g24_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).k = function () {
    return this.h24_1;
  };
  protoOf(PersistentHashMapBaseIterator).l = function () {
    checkHasNext(this);
    var result = this.f24_1[this.g24_1].l();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.i24_1 = Companion_getInstance_8().p23_1.y23_1;
    this.j24_1 = 0;
    this.k24_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).r24 = function (buffer, dataSize, index) {
    this.i24_1 = buffer;
    this.j24_1 = dataSize;
    this.k24_1 = index;
  };
  protoOf(TrieNodeBaseIterator).o24 = function (buffer, dataSize) {
    this.r24(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).l24 = function () {
    return this.k24_1 < this.j24_1;
  };
  protoOf(TrieNodeBaseIterator).p24 = function () {
    assert(this.k24_1 >= this.j24_1);
    return this.k24_1 < this.i24_1.length;
  };
  protoOf(TrieNodeBaseIterator).m24 = function () {
    assert(this.p24());
    var tmp = this.i24_1[this.k24_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).q24 = function () {
    assert(this.p24());
    this.k24_1 = this.k24_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).k = function () {
    return this.l24();
  };
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).l = function () {
    assert(this.l24());
    this.k24_1 = this.k24_1 + 2 | 0;
    var tmp = this.i24_1[this.k24_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).l = function () {
    assert(this.l24());
    this.k24_1 = this.k24_1 + 2 | 0;
    var tmp = this.i24_1[this.k24_1 - 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).l = function () {
    assert(this.l24());
    this.k24_1 = this.k24_1 + 2 | 0;
    var tmp = this.i24_1[this.k24_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.i24_1[this.k24_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.b25_1 = key;
    this.c25_1 = value;
  }
  protoOf(MapEntry).d2 = function () {
    return this.b25_1;
  };
  protoOf(MapEntry).e2 = function () {
    return this.c25_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.d2();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.e2();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp = (equals(tmp0_safe_receiver.d2(), this.d2()) && equals(tmp0_safe_receiver.e2(), this.e2()));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.d2()) + '=' + toString_0(this.e2());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.d25_1 = map;
  }
  protoOf(PersistentHashMapKeys).m = function () {
    return this.d25_1.m();
  };
  protoOf(PersistentHashMapKeys).o5 = function (element) {
    return this.d25_1.f2(element);
  };
  protoOf(PersistentHashMapKeys).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.o5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).j = function () {
    return new PersistentHashMapKeysIterator(this.d25_1.t23_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.e25_1 = map;
  }
  protoOf(PersistentHashMapValues).m = function () {
    return this.e25_1.m();
  };
  protoOf(PersistentHashMapValues).v5 = function (element) {
    return this.e25_1.g2(element);
  };
  protoOf(PersistentHashMapValues).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.v5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).j = function () {
    return new PersistentHashMapValuesIterator(this.e25_1.t23_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.f25_1 = map;
  }
  protoOf(PersistentHashMapEntries).m = function () {
    return this.f25_1.m();
  };
  protoOf(PersistentHashMapEntries).g25 = function (element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.f25_1.h2(element.d2());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.e2());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.e2() == null && this.f25_1.f2(element.d2()) : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).o = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.g25((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).j = function () {
    return new PersistentHashMapEntriesIterator(this.f25_1.t23_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.c24_1 = node;
    this.d24_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.w23_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.y23_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.y23_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.h25(positionMask);
    var newBuffer = insertEntryAtIndex($this.y23_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.v23_1 | positionMask, $this.w23_1, newBuffer);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.y23_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.v23_1, $this.w23_1, newBuffer);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.y23_1;
    if (newNodeBuffer.length === 2 && newNode.w23_1 === 0) {
      if ($this.y23_1.length === 1) {
        newNode.v23_1 = $this.w23_1;
        return newNode;
      }
      var keyIndex = $this.h25(positionMask);
      var newBuffer = replaceNodeWithEntry($this.y23_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.v23_1 ^ positionMask, $this.w23_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.y23_1, $this.y23_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.v23_1, $this.w23_1, newBuffer_0);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.y23_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.y23_1, nodeIndex);
    return TrieNode_init_$Create$($this.v23_1, $this.w23_1 ^ positionMask, newBuffer);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.i25(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.y23_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.v23_1 ^ positionMask, $this.w23_1 | positionMask, newBuffer);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.y23_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.y23_1, keyIndex);
    return TrieNode_init_$Create$($this.v23_1 ^ positionMask, $this.w23_1, newBuffer);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.y23_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.y23_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.y23_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.y23_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.y23_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.y23_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.y23_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.y23_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.y23_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.p23_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_9;
  function Companion_getInstance_8() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_8();
    this.v23_1 = dataMap;
    this.w23_1 = nodeMap;
    this.x23_1 = ownedBy;
    this.y23_1 = buffer;
  }
  protoOf(TrieNode).n24 = function () {
    return countOneBits(this.v23_1);
  };
  protoOf(TrieNode).j25 = function (positionMask) {
    return !((this.v23_1 & positionMask) === 0);
  };
  protoOf(TrieNode).h25 = function (positionMask) {
    return imul(2, countOneBits(this.v23_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).i25 = function (positionMask) {
    return (this.y23_1.length - 1 | 0) - countOneBits(this.w23_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).k25 = function (nodeIndex) {
    var tmp = this.y23_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).z23 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.j25(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.h25(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.k25(this.i25(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.z23(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).a24 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.j25(keyPositionMask)) {
      var keyIndex = this.h25(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.k25(this.i25(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.a24(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).b24 = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.j25(keyPositionMask)) {
      var keyIndex = this.h25(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.i25(keyPositionMask);
      var targetNode = this.k25(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.b24(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var node = putResult.c24_1;
      tmp_2.c24_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).e24 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.j25(keyPositionMask)) {
      var keyIndex = this.h25(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.i25(keyPositionMask);
      var targetNode = this.k25(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.e24(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length + 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    var tmp8 = keyIndex + 2 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp8, keyIndex, endIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    var tmp2 = nodeIndex + 2 | 0;
    var tmp3 = nodeIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, tmp2, tmp3, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, destinationOffset, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    var tmp9 = nodeIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, tmp9, endIndex);
    return newBuffer;
  }
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    var tmp13 = newNodeIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp13, nodeIndex, endIndex);
    return newBuffer;
  }
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    var tmp9 = keyIndex + 2 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp9, endIndex);
    return newBuffer;
  }
  function Companion_9() {
    Companion_instance_10 = this;
    this.o21_1 = new PersistentOrderedSet(EndOfChain_instance, EndOfChain_instance, Companion_getInstance_7().q23());
  }
  protoOf(Companion_9).p21 = function () {
    return this.o21_1;
  };
  var Companion_instance_10;
  function Companion_getInstance_9() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_9();
    AbstractSet.call(this);
    this.l25_1 = firstElement;
    this.m25_1 = lastElement;
    this.n25_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).m = function () {
    return this.n25_1.m();
  };
  protoOf(PersistentOrderedSet).o = function (element) {
    return this.n25_1.f2(element);
  };
  protoOf(PersistentOrderedSet).h = function (element) {
    if (this.n25_1.f2(element)) {
      return this;
    }
    if (this.q()) {
      var newMap = this.n25_1.y4(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.m25_1;
    var lastElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.n25_1.h2(lastElement));
    var newMap_0 = this.n25_1.y4(lastElement, lastLinks.q25(element)).y4(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.l25_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).v1 = function (element) {
    var tmp0_elvis_lhs = this.n25_1.h2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.n25_1.z4(element);
    if (links.r25()) {
      var tmp0 = newMap;
      // Inline function 'kotlin.collections.get' call
      var key = links.o25_1;
      var tmp$ret$0 = (isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).h2(key);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.o25_1;
      newMap = tmp_0.y4((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.q25(links.p25_1));
    }
    if (links.t25()) {
      var tmp2 = newMap;
      // Inline function 'kotlin.collections.get' call
      var key_0 = links.p25_1;
      var tmp$ret$1 = (isInterface(tmp2, KtMap) ? tmp2 : THROW_CCE()).h2(key_0);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.p25_1;
      newMap = tmp_2.y4((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.s25(links.o25_1));
    }
    var newFirstElement = !links.r25() ? links.p25_1 : this.l25_1;
    var newLastElement = !links.t25() ? links.o25_1 : this.m25_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).j = function () {
    return new PersistentOrderedSetIterator(this.l25_1, this.n25_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_instance, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.o25_1 = previous;
    this.p25_1 = next;
  }
  protoOf(Links).q25 = function (newNext) {
    return new Links(this.o25_1, newNext);
  };
  protoOf(Links).s25 = function (newPrevious) {
    return new Links(newPrevious, this.p25_1);
  };
  protoOf(Links).t25 = function () {
    return !(this.p25_1 === EndOfChain_instance);
  };
  protoOf(Links).r25 = function () {
    return !(this.o25_1 === EndOfChain_instance);
  };
  function checkHasNext_0($this) {
    if (!$this.k())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.u25_1 = nextElement;
    this.v25_1 = map;
    this.w25_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).k = function () {
    return this.w25_1 < this.v25_1.m();
  };
  protoOf(PersistentOrderedSetIterator).l = function () {
    checkHasNext_0(this);
    var tmp = this.u25_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.w25_1 = this.w25_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = this.v25_1.h2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + toString_0(result) + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.u25_1 = tmp_1.p25_1;
    return result;
  };
  function EndOfChain() {
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    return EndOfChain_instance;
  }
  function ListImplementation() {
  }
  protoOf(ListImplementation).k22 = function (index, size) {
    if (index < 0 || index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).j22 = function (index, size) {
    if (index < 0 || index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  function assert(condition) {
  }
  function get_lambdaKey() {
    _init_properties_ComposableLambda_kt__wilkc();
    return lambdaKey;
  }
  var lambdaKey;
  function composableLambdaInstance(key, tracked, block) {
    _init_properties_ComposableLambda_kt__wilkc();
    return new ComposableLambdaImpl(key, tracked, block);
  }
  function replacableWith(_this__u8e3s4, other) {
    _init_properties_ComposableLambda_kt__wilkc();
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = !_this__u8e3s4.u1g() || equals(_this__u8e3s4, other) || equals(_this__u8e3s4.p12_1, other.p12_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function rememberComposableLambda(key, tracked, block, $composer, $changed) {
    _init_properties_ComposableLambda_kt__wilkc();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1573003438, 'C(rememberComposableLambda)P(1,2)*628@13280L54:ComposableLambda.kt#9drcc');
    if (isTraceInProgress()) {
      traceEventStart(-1573003438, $changed, -1, 'androidx.compose.runtime.internal.rememberComposableLambda (ComposableLambda.kt:628)');
    }
    sourceInformationMarkerStart($composer_0, 1920923313, 'CC(remember):ComposableLambda.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.f1f();
    var tmp;
    if (false || it === Companion_getInstance().n18_1) {
      // Inline function 'androidx.compose.runtime.internal.rememberComposableLambda.<anonymous>' call
      var value = new ComposableLambdaImpl(key, tracked, block);
      $composer_0.q1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.internal.rememberComposableLambda.<anonymous>' call
    tmp1_group.c26(block);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function composableLambda(composer, key, tracked, block) {
    _init_properties_ComposableLambda_kt__wilkc();
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp$ret$0 = rotateLeft(key, 1);
    composer.a1b(tmp$ret$0, get_lambdaKey());
    var slot = composer.f1f();
    var tmp;
    if (slot === Companion_getInstance().n18_1) {
      var value = new ComposableLambdaImpl(key, tracked, block);
      composer.q1f(value);
      tmp = value;
    } else {
      if (!(slot instanceof ComposableLambdaImpl))
        THROW_CCE();
      slot.c26(block);
      tmp = slot;
    }
    var result = tmp;
    composer.d1b();
    return result;
  }
  var properties_initialized_ComposableLambda_kt_u87f2i;
  function _init_properties_ComposableLambda_kt__wilkc() {
    if (!properties_initialized_ComposableLambda_kt_u87f2i) {
      properties_initialized_ComposableLambda_kt_u87f2i = true;
      lambdaKey = new Object();
    }
  }
  function IntRef(element) {
    element = element === VOID ? 0 : element;
    this.o1z_1 = element;
  }
  protoOf(IntRef).toString = function () {
    return 'IntRef(element = ' + this.o1z_1 + ')@' + toString_1(hashCode(this), 16);
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_8().p23_1;
    tmp.d26_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_11;
  function Companion_getInstance_10() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_10();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).k2 = function () {
    return protoOf(PersistentHashMap).k2.call(this);
  };
  protoOf(PersistentCompositionLocalHashMap).r1f = function (key, value) {
    var tmp0_elvis_lhs = this.t23_1.b24(hashCode(key), key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentCompositionLocalHashMap(newNodeResult.c24_1, this.m() + newNodeResult.d24_1 | 0);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_10().d26_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_jvm_kt__b3bhkj();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_0($this, key) {
    var high = $this.i1v_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.j1v_1[0].equals(key) ? 0 : $this.j1v_1[0].x(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.j1v_1[mid];
      var comparison = midVal.t2(key);
      if (comparison.x(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.x(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.i1v_1 = size;
    this.j1v_1 = keys;
    this.k1v_1 = values;
  }
  protoOf(ThreadMap).l1v = function (key) {
    var index = find_0(this, key);
    return index >= 0 ? this.k1v_1[index] : null;
  };
  protoOf(ThreadMap).m1v = function (key, value) {
    var index = find_0(this, key);
    if (index < 0)
      return false;
    this.k1v_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).n1v = function (key, value) {
    var size = this.i1v_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.k1v_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = fillArrayVal(Array(newSize), null);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize && source < size) {
        var oldKey = this.j1v_1[source];
        var oldValue = this.k1v_1[source];
        if (oldKey.x(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.j1v_1[source];
          var oldValue_0 = this.k1v_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_jvm_kt_y907p1;
  function _init_properties_ThreadMap_jvm_kt__b3bhkj() {
    if (!properties_initialized_ThreadMap_jvm_kt_y907p1) {
      properties_initialized_ThreadMap_jvm_kt_y907p1 = true;
      var tmp = longArray(0);
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = HashSet_init_$Create$(_this__u8e3s4.m());
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.p(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        this_0.h(item);
      }
       while (inductionVariable <= last);
    return this_0;
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.i(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.m() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.p(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.i(separator);
        }
        if (limit < 0 || count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 && count > limit) {
      buffer.i(truncated);
    }
    buffer.i(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.i(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.i(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.e8(element.g1_1);
        } else {
          _this__u8e3s4.i(toString_0(element));
        }
      }
    }
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function set_applyObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    applyObservers = _set____db54di;
  }
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function set_globalWriteObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    globalWriteObservers = _set____db54di;
  }
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  function StateObject() {
  }
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.i26_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).cm = function () {
    return this.i26_1();
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).h3 = function () {
    return this.i26_1;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ObserverHandle) : false) {
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
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).hashCode = function () {
    return hashCode(this.h3());
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.j26_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).cm = function () {
    return this.j26_1();
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).h3 = function () {
    return this.j26_1;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ObserverHandle) : false) {
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
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).hashCode = function () {
    return hashCode(this.h3());
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_applyObservers(minus(get_applyObservers(), $observer));
      return Unit_instance;
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_globalWriteObservers(minus(get_globalWriteObservers(), $observer));
      advanceGlobalSnapshot_0();
      return Unit_instance;
    };
  }
  function Companion_11() {
    this.m1o_1 = 1;
  }
  protoOf(Companion_11).b11 = function () {
    return currentSnapshot();
  };
  protoOf(Companion_11).c1v = function () {
    return !(get_threadSnapshot().pn() == null);
  };
  protoOf(Companion_11).o1p = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k26(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Cannot create a mutable snapshot of an read-only snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_11).q1r = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    set_applyObservers(plus_1(get_applyObservers(), observer));
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_11).l26 = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    set_globalWriteObservers(plus_1(get_globalWriteObservers(), observer));
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_11).p1o = function () {
    return currentSnapshot().m26();
  };
  protoOf(Companion_11).n1o = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().pn().n26();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hz()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_12;
  function Companion_getInstance_11() {
    return Companion_instance_12;
  }
  function access$_get_pinningTrackingHandle__7vwthz($this) {
    return $this.c1c_1;
  }
  function Snapshot(id, invalid) {
    this.z1b_1 = invalid;
    this.a1c_1 = id;
    this.b1c_1 = false;
    this.c1c_1 = !(id === 0) ? trackPinning(id, this.o26()) : -1;
  }
  protoOf(Snapshot).p26 = function (_set____db54di) {
    this.z1b_1 = _set____db54di;
  };
  protoOf(Snapshot).o26 = function () {
    return this.z1b_1;
  };
  protoOf(Snapshot).q26 = function (_set____db54di) {
    this.a1c_1 = _set____db54di;
  };
  protoOf(Snapshot).d1c = function () {
    return this.a1c_1;
  };
  protoOf(Snapshot).r26 = function (value) {
    // Inline function 'kotlin.error' call
    var message = 'Updating write count is not supported for this snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Snapshot).s26 = function () {
    return 0;
  };
  protoOf(Snapshot).cm = function () {
    this.b1c_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.u26();
  };
  protoOf(Snapshot).p1p = function () {
    var previous = get_threadSnapshot().pn();
    get_threadSnapshot().s1l(this);
    return previous;
  };
  protoOf(Snapshot).q1p = function (snapshot) {
    get_threadSnapshot().s1l(snapshot);
  };
  protoOf(Snapshot).y26 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.z26();
    this.a27();
  };
  protoOf(Snapshot).z26 = function () {
    set_openSnapshots(get_openSnapshots().f27(this.d1c()));
  };
  protoOf(Snapshot).a27 = function () {
    this.u26();
  };
  protoOf(Snapshot).g27 = function () {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.b1c_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var tmp$ret$0 = 'Cannot use a disposed snapshot';
      throwIllegalArgumentException(tmp$ret$0);
    }
  };
  protoOf(Snapshot).u26 = function () {
    if (this.c1c_1 >= 0) {
      releasePinningLocked(this.c1c_1);
      this.c1c_1 = -1;
    }
  };
  protoOf(Snapshot).h27 = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.c1c_1;
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.c1c_1 = -1;
    return this_0;
  };
  function ObserverHandle() {
  }
  function validateNotApplied($this) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.d1q_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var tmp$ret$0 = 'Unsupported operation on a snapshot that has been applied';
      throwIllegalStateException(tmp$ret$0);
    }
  }
  function validateNotAppliedOrPinned($this) {
    var tmp;
    if (!$this.d1q_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = access$_get_pinningTrackingHandle__7vwthz($this) >= 0;
    }
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var tmp$ret$1 = 'Unsupported operation on a disposed or applied snapshot';
      throwIllegalStateException(tmp$ret$1);
    }
  }
  function abandon($this) {
    var modified = $this.n26();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.i27(null);
      var id = $this.d1c();
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = modified.dz_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = modified.cz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.c3(this_0.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp = k[index];
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
                    var current = ((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()).d1v();
                    while (!(current == null)) {
                      if (current.a1v_1 === id || contains($this.a1q_1, current.a1v_1)) {
                        current.a1v_1 = 0;
                      }
                      current = current.b1v_1;
                    }
                  }
                  slot = slot.a3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    $this.y26();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.b1q_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.b1q_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_12() {
    Companion_instance_13 = this;
    this.j27_1 = new Int32Array(0);
  }
  var Companion_instance_13;
  function Companion_getInstance_12() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Companion_getInstance_12();
    Snapshot.call(this, id, invalid);
    this.v1p_1 = readObserver;
    this.w1p_1 = writeObserver;
    this.x1p_1 = 0;
    this.y1p_1 = null;
    this.z1p_1 = null;
    this.a1q_1 = Companion_getInstance_13().k27_1;
    this.b1q_1 = Companion_getInstance_12().j27_1;
    this.c1q_1 = 1;
    this.d1q_1 = false;
  }
  protoOf(MutableSnapshot).v26 = function () {
    return this.v1p_1;
  };
  protoOf(MutableSnapshot).w26 = function () {
    return this.w1p_1;
  };
  protoOf(MutableSnapshot).k26 = function (readObserver, writeObserver) {
    this.g27();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.l27(this.d1c());
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().m27(newId));
    var currentInvalid = this.o26();
    this.p26(currentInvalid.m27(newId));
    // Inline function 'kotlin.also' call
    var this_0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.d1c() + 1 | 0, newId), mergedReadObserver(readObserver, this.v26()), mergedWriteObserver(writeObserver, this.w26()), this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.d1q_1 && !this.b1c_1) {
      var previousId = this.d1c();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      var tmp0_0 = access$_get_nextSnapshotId_$tSnapshotKt_vxgvey();
      access$_set_nextSnapshotId_$tSnapshotKt_xcaltq(tmp0_0 + 1 | 0);
      this.q26(tmp0_0);
      access$_set_openSnapshots_$tSnapshotKt_9lk9nh(access$_get_openSnapshots_$tSnapshotKt_7cpqp5().m27(this.d1c()));
      this.p26(addRange(this.o26(), previousId + 1 | 0, this.d1c()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).e1q = function () {
    var modified = this.n26();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().pn(), this, get_openSnapshots().f27(get_currentGlobalSnapshot().pn().d1c())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null || modified.m() === 0) {
      this.z26();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().pn();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.n26();
      if (!(previousModified == null) && previousModified.hz()) {
        observers = get_applyObservers();
        globalModified = previousModified;
      }
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().pn();
      var result = this.n27(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().f27(previousGlobalSnapshot_0.d1c()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.z26();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.n26();
      this.i27(null);
      previousGlobalSnapshot_0.i27(null);
      observers = get_applyObservers();
      globalModified = previousModified_0;
    }
    this.d1q_1 = true;
    if (!(globalModified == null)) {
      var nonNullGlobalModified = wrapIntoSet(ensureNotNull(globalModified));
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!nonNullGlobalModified.q()) {
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        var this_0 = observers;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.m() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.p(index);
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
            item(nonNullGlobalModified, this);
          }
           while (inductionVariable <= last);
      }
    }
    if (!(modified == null) && modified.hz()) {
      var modifiedSet = wrapIntoSet(modified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_1 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_1.m() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_1.p(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modifiedSet, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.a27();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = tmp0_safe_receiver.dz_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = tmp0_safe_receiver.cz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex)
          do {
            var i = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_2 = slot;
            if (!this_2.c3(this_2.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount)
                do {
                  var j = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_1 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp = k[index_1];
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
                    var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    processForUnusedRecordsLocked(it);
                  }
                  slot = slot.a3(8);
                }
                 while (inductionVariable_2 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k_0 = modified.dz_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m_0 = modified.cz_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_3 = 0;
        if (inductionVariable_3 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.c3(this_3.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_4 = 0;
              if (inductionVariable_4 < bitCount_0)
                do {
                  var j_0 = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_2 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp_0 = k_0[index_2];
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
                    var it_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    processForUnusedRecordsLocked(it_0);
                  }
                  slot_0 = slot_0.a3(8);
                }
                 while (inductionVariable_4 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
    var tmp2_safe_receiver = this.z1p_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_5 = 0;
      var last_1 = tmp2_safe_receiver.m() - 1 | 0;
      if (inductionVariable_5 <= last_1)
        do {
          var index_3 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var item_1 = tmp2_safe_receiver.p(index_3);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_5 <= last_1);
    }
    this.z1p_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).t26 = function () {
    return false;
  };
  protoOf(MutableSnapshot).cm = function () {
    if (!this.b1c_1) {
      protoOf(Snapshot).cm.call(this);
      this.o27(this);
    }
  };
  protoOf(MutableSnapshot).p27 = function (snapshot) {
    this.c1q_1 = this.c1q_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).o27 = function (snapshot) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.c1q_1 > 0)) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.nestedDeactivated.<anonymous>' call
      var tmp$ret$0 = 'no pending nested snapshots';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.c1q_1 = this.c1q_1 - 1 | 0;
    if (this.c1q_1 === 0) {
      if (!this.d1q_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).m26 = function () {
    if (this.d1q_1 || this.b1c_1)
      return Unit_instance;
    this.q27();
  };
  protoOf(MutableSnapshot).z26 = function () {
    set_openSnapshots(get_openSnapshots().f27(this.d1c()).r27(this.a1q_1));
  };
  protoOf(MutableSnapshot).a27 = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).a27.call(this);
  };
  protoOf(MutableSnapshot).n27 = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.o26().m27(this.d1c()).s27(this.a1q_1);
    var modified = ensureNotNull(this.n26());
    var statesToRemove = null;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = modified.dz_1;
    $l$block_2: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = modified.cz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.c3(this_0.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  $l$block_1: {
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
                    var first = tmp1.d1v();
                    var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
                    var tmp_0;
                    if (tmp0_elvis_lhs == null) {
                      break $l$block_1;
                    } else {
                      tmp_0 = tmp0_elvis_lhs;
                    }
                    var current = tmp_0;
                    var tmp1_elvis_lhs = readable(first, this.d1c(), start);
                    var tmp_1;
                    if (tmp1_elvis_lhs == null) {
                      break $l$block_1;
                    } else {
                      tmp_1 = tmp1_elvis_lhs;
                    }
                    var previous = tmp_1;
                    if (previous.a1v_1 === 1) {
                      break $l$block_1;
                    }
                    if (!equals(current, previous)) {
                      var tmp2_elvis_lhs = readable(first, this.d1c(), this.o26());
                      var tmp_2;
                      if (tmp2_elvis_lhs == null) {
                        readError();
                      } else {
                        tmp_2 = tmp2_elvis_lhs;
                      }
                      var applied = tmp_2;
                      var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.h2(current);
                      var tmp_3;
                      if (tmp4_elvis_lhs == null) {
                        // Inline function 'kotlin.run' call
                        // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                        tmp_3 = tmp1.f1v(previous, current, applied);
                      } else {
                        tmp_3 = tmp4_elvis_lhs;
                      }
                      var merged = tmp_3;
                      if (merged == null)
                        return new Failure(this);
                      else if (!equals(merged, applied))
                        if (equals(merged, current)) {
                          var tmp6_elvis_lhs = mergedRecords;
                          var tmp_4;
                          if (tmp6_elvis_lhs == null) {
                            // Inline function 'kotlin.collections.mutableListOf' call
                            // Inline function 'kotlin.also' call
                            var this_1 = ArrayList_init_$Create$();
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            mergedRecords = this_1;
                            tmp_4 = this_1;
                          } else {
                            tmp_4 = tmp6_elvis_lhs;
                          }
                          tmp_4.h(to(tmp1, current.w1u()));
                          var tmp7_elvis_lhs = statesToRemove;
                          var tmp_5;
                          if (tmp7_elvis_lhs == null) {
                            // Inline function 'kotlin.collections.mutableListOf' call
                            // Inline function 'kotlin.also' call
                            var this_2 = ArrayList_init_$Create$();
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            statesToRemove = this_2;
                            tmp_5 = this_2;
                          } else {
                            tmp_5 = tmp7_elvis_lhs;
                          }
                          tmp_5.h(tmp1);
                        } else {
                          var tmp8_elvis_lhs = mergedRecords;
                          var tmp_6;
                          if (tmp8_elvis_lhs == null) {
                            // Inline function 'kotlin.collections.mutableListOf' call
                            // Inline function 'kotlin.also' call
                            var this_3 = ArrayList_init_$Create$();
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            mergedRecords = this_3;
                            tmp_6 = this_3;
                          } else {
                            tmp_6 = tmp8_elvis_lhs;
                          }
                          tmp_6.h(!equals(merged, previous) ? to(tmp1, merged) : to(tmp1, previous.w1u()));
                        }
                    }
                  }
                }
                slot = slot.a3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_2;
            }
          }
        }
         while (!(i === lastIndex));
    }
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
      this.q27();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last = tmp0_safe_receiver.m() - 1 | 0;
      if (inductionVariable_1 <= last)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item = tmp0_safe_receiver.p(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state = item.qe();
          var stateRecord = item.re();
          stateRecord.a1v_1 = this.d1c();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          get_lock();
          stateRecord.b1v_1 = state.d1v();
          state.e1v(stateRecord);
        }
         while (inductionVariable_1 <= last);
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_0 = tmp1_safe_receiver.m() - 1 | 0;
      if (inductionVariable_2 <= last_0)
        do {
          var index_1 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_0 = tmp1_safe_receiver.p(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.v1(item_0);
        }
         while (inductionVariable_2 <= last_0);
      var mergedList = this.z1p_1;
      this.z1p_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).q27 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.l27(this.d1c());
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.d1q_1 && !this.b1c_1) {
      var previousId = this.d1c();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      var tmp0 = access$_get_nextSnapshotId_$tSnapshotKt_vxgvey();
      access$_set_nextSnapshotId_$tSnapshotKt_xcaltq(tmp0 + 1 | 0);
      this.q26(tmp0);
      access$_set_openSnapshots_$tSnapshotKt_9lk9nh(access$_get_openSnapshots_$tSnapshotKt_7cpqp5().m27(this.d1c()));
      this.p26(addRange(this.o26(), previousId + 1 | 0, this.d1c()));
    }
    return Unit_instance;
  };
  protoOf(MutableSnapshot).l27 = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.a1q_1 = this.a1q_1.m27(id);
  };
  protoOf(MutableSnapshot).t27 = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      var tmp1 = this.b1q_1;
      // Inline function 'kotlin.intArrayOf' call
      // Inline function 'kotlin.collections.plus' call
      var elements = new Int32Array([id]);
      tmp.b1q_1 = primitiveArrayConcat([tmp1, elements]);
    }
  };
  protoOf(MutableSnapshot).u27 = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_instance;
    var pinned = this.b1q_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.b1q_1 = tmp_0;
  };
  protoOf(MutableSnapshot).v27 = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.a1q_1 = this.a1q_1.s27(snapshots);
  };
  protoOf(MutableSnapshot).x26 = function (state) {
    var tmp0_elvis_lhs = this.n26();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf_0();
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.i27(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.h(state);
  };
  protoOf(MutableSnapshot).r26 = function (_set____db54di) {
    this.x1p_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).s26 = function () {
    return this.x1p_1;
  };
  protoOf(MutableSnapshot).i27 = function (_set____db54di) {
    this.y1p_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).n26 = function () {
    return this.y1p_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.w27_1 = snapshot;
  }
  function SnapshotApplyResult() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($it) {
    return function (state) {
      var this_0 = $it;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.m() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.p(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      return new MutableSnapshot(tmp0, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
    var it = get_globalWriteObservers();
    var tmp0_elvis_lhs = singleOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = GlobalSnapshot$_init_$lambda_36kgl8(it);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp$ret$4 = tmp;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$4);
  }
  protoOf(GlobalSnapshot).k26 = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).m26 = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).k28 = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).o27 = function (snapshot) {
    return this.k28(snapshot);
  };
  protoOf(GlobalSnapshot).l28 = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).p27 = function (snapshot) {
    return this.l28(snapshot);
  };
  protoOf(GlobalSnapshot).e1q = function () {
    var message = 'Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(GlobalSnapshot).cm = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.u26();
  };
  function StateRecord() {
    this.a1v_1 = currentSnapshot().d1c();
    this.b1v_1 = null;
  }
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.m28(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().nv(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().s28(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().pn();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().pn() : tmp0_elvis_lhs;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if (!(readObserver == null) && !(parentObserver_0 == null) && !(readObserver === parentObserver_0)) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if (!(writeObserver == null) && !(parentObserver == null) && !(writeObserver === parentObserver)) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var modified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().pn();
    modified = previousGlobalSnapshot.n26();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().nv(1);
    }
    var result = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    var tmp0_safe_receiver = modified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
      try {
        var observers = get_applyObservers();
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = observers.m() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.p(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(wrapIntoSet(tmp0_safe_receiver), previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
      }finally {
        get_pendingApplyObserverCount().nv(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver_0 = modified;
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = tmp0_safe_receiver_0.dz_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = tmp0_safe_receiver_0.cz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= lastIndex)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.c3(this_0.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < bitCount)
                do {
                  var j = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp_1 = k[index_0];
                    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
                    var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                    processForUnusedRecordsLocked(it);
                  }
                  slot = slot.a3(8);
                }
                 while (inductionVariable_1 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp_0 = Unit_instance;
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function deactivate($this) {
    if (!$this.h29_1) {
      $this.h29_1 = true;
      $this.g29_1.o27($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.g29_1 = parent;
    this.h29_1 = false;
    this.g29_1.p27(this);
  }
  protoOf(NestedMutableSnapshot).cm = function () {
    if (!this.b1c_1) {
      protoOf(MutableSnapshot).cm.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).e1q = function () {
    if (this.g29_1.d1q_1 || this.g29_1.b1c_1)
      return new Failure(this);
    var modified = this.n26();
    var id = this.d1c();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.g29_1, this, this.g29_1.o26()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null || modified.m() === 0) {
      this.y26();
    } else {
      var result = this.n27(this.g29_1.d1c(), optimisticMerges_0, this.g29_1.o26());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.g29_1.n26();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.y10(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.g29_1.i27(modified);
        this.i27(null);
      }
    }
    if (this.g29_1.d1c() < id) {
      this.g29_1.q27();
    }
    this.g29_1.p26(this.g29_1.o26().f27(id).r27(this.a1q_1));
    this.g29_1.l27(id);
    this.g29_1.t27(this.h27());
    this.g29_1.v27(this.a1q_1);
    this.g29_1.u27(this.b1q_1);
    this.d1q_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.m27(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.n26();
    var id = currentSnapshot.d1c();
    if (modified == null)
      return null;
    var start = applyingSnapshot.o26().m27(applyingSnapshot.d1c()).s27(applyingSnapshot.a1q_1);
    var result = null;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = modified.dz_1;
    $l$block_1: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = modified.cz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.c3(this_0.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  $l$block_0: {
                    // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
                    var first = tmp1.d1v();
                    var tmp0_elvis_lhs = readable(first, id, invalidSnapshots);
                    var tmp_0;
                    if (tmp0_elvis_lhs == null) {
                      break $l$block_0;
                    } else {
                      tmp_0 = tmp0_elvis_lhs;
                    }
                    var current = tmp_0;
                    var tmp1_elvis_lhs = readable(first, id, start);
                    var tmp_1;
                    if (tmp1_elvis_lhs == null) {
                      break $l$block_0;
                    } else {
                      tmp_1 = tmp1_elvis_lhs;
                    }
                    var previous = tmp_1;
                    if (!equals(current, previous)) {
                      var tmp2_elvis_lhs = readable(first, applyingSnapshot.d1c(), applyingSnapshot.o26());
                      var tmp_2;
                      if (tmp2_elvis_lhs == null) {
                        readError();
                      } else {
                        tmp_2 = tmp2_elvis_lhs;
                      }
                      var applied = tmp_2;
                      var merged = tmp1.f1v(previous, current, applied);
                      if (!(merged == null)) {
                        var tmp3_elvis_lhs = result;
                        var tmp_3;
                        if (tmp3_elvis_lhs == null) {
                          // Inline function 'kotlin.collections.hashMapOf' call
                          // Inline function 'kotlin.also' call
                          var this_1 = HashMap_init_$Create$_0();
                          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>.<anonymous>' call
                          result = this_1;
                          tmp_3 = this_1;
                        } else {
                          tmp_3 = tmp3_elvis_lhs;
                        }
                        // Inline function 'kotlin.collections.set' call
                        tmp_3.y4(current, merged);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                slot = slot.a3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_1;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var openSnapshots = get_openSnapshots();
    if (!openSnapshots.p(snapshot.d1c())) {
      var tmp = snapshot.d1c();
      var tmp_0 = snapshot.b1c_1;
      var tmp0_safe_receiver = snapshot instanceof MutableSnapshot ? snapshot : null;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1q_1;
      var tmp_1 = toString(tmp1_elvis_lhs == null ? 'read-only' : tmp1_elvis_lhs);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.validateOpen.<anonymous>' call
      // Inline function 'kotlin.error' call
      var message = 'Snapshot is not open: id=' + tmp + ', disposed=' + tmp_0 + ', applied=' + tmp_1 + ', lowestPin=' + get_pinningTable().i29(-1);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().f27(previousGlobalSnapshot.d1c()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().f27(previousGlobalSnapshot.d1c()));
    get_currentGlobalSnapshot().s1k(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.cm();
    set_openSnapshots(get_openSnapshots().m27(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var this_0 = get_extraStateObjects();
    var size = this_0.j29_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = this_0.l29_1[i];
        var value = entry == null ? null : entry.pn();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            this_0.l29_1[currentUsed] = entry;
            this_0.k29_1[currentUsed] = this_0.k29_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.l29_1[i_0] = null;
        this_0.k29_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      this_0.j29_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().n29(state);
    }
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.a1v_1 < current.a1v_1 ? current : candidate;
      }
      current = current.b1v_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var message = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.d1v();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().i29(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.a1v_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.a1v_1 < validRecord.a1v_1) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp0 = state.d1v();
              var tmp$ret$1;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var current_0 = tmp0;
                var youngest = tmp0;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.a1v_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.a1v_1 < current_0.a1v_1)
                    youngest = current_0;
                  current_0 = current_0.b1v_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.a1v_1 = 0;
            recordToOverwrite.v1u(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.b1v_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.a1v_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return !(candidateSnapshot === 0) && candidateSnapshot <= currentSnapshot && !invalid.p(candidateSnapshot);
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_instance_12.b11();
    var tmp0_safe_receiver = snapshot.v26();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.d1c(), snapshot.o26());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_instance_12.b11();
      var tmp_0 = state.d1v();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.d1c(), syncSnapshot.o26());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var snapshot = Companion_instance_12.b11();
    var tmp0_elvis_lhs = readable(r, snapshot.d1c(), snapshot.o26());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      var syncSnapshot = Companion_instance_12.b11();
      tmp = readable(r, syncSnapshot.d1c(), syncSnapshot.o26());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.r26(snapshot.s26() + 1 | 0);
    var tmp1_safe_receiver = snapshot.w26();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.t26()) {
      snapshot.x26(state);
    }
    var id = snapshot.d1c();
    if (candidate.a1v_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.a1v_1 = id;
    if (!(candidate.a1v_1 === 1)) {
      snapshot.x26(state);
    }
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.a1v_1 = 2147483647;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.w1u();
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      this_0.a1v_1 = 2147483647;
      this_0.b1v_1 = state.d1v();
      state.e1v(this_0 instanceof StateRecord ? this_0 : THROW_CCE());
      var tmp_2 = this_0;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.d1v();
    var validRecord = null;
    var reuseLimit = get_pinningTable().i29(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_13().k27_1;
    while (!(current == null)) {
      var currentId = current.a1v_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.a1v_1 < validRecord.a1v_1 ? current : validRecord;
        }
      }
      current = current.b1v_1;
    }
    return null;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.t26()) {
      snapshot.x26(state);
    }
    var id = snapshot.d1c();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.o26());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.a1v_1 === snapshot.d1c())
      return readData;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.writableRecord.<anonymous>' call
    var tmp0_elvis_lhs_0 = readable(state.d1v(), id, snapshot.o26());
    var tmp_0;
    if (tmp0_elvis_lhs_0 == null) {
      readError();
    } else {
      tmp_0 = tmp0_elvis_lhs_0;
    }
    var newReadData = tmp_0;
    var tmp_1 = newReadData.a1v_1 === id ? newReadData : newWritableRecordLocked(newReadData, state, snapshot);
    var newData = tmp_1 instanceof StateRecord ? tmp_1 : THROW_CCE();
    if (!(readData.a1v_1 === 1)) {
      snapshot.x26(state);
    }
    return newData;
  }
  function newWritableRecordLocked(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.v1u(_this__u8e3s4);
    newData.a1v_1 = snapshot.d1c();
    return newData;
  }
  function access$_get_openSnapshots_$tSnapshotKt_7cpqp5() {
    return get_openSnapshots();
  }
  function access$_set_openSnapshots_$tSnapshotKt_9lk9nh(_set____db54di) {
    return set_openSnapshots(_set____db54di);
  }
  function access$_get_nextSnapshotId_$tSnapshotKt_vxgvey() {
    return get_nextSnapshotId();
  }
  function access$_set_nextSnapshotId_$tSnapshotKt_xcaltq(_set____db54di) {
    return set_nextSnapshotId(_set____db54di);
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_openSnapshots(get_openSnapshots().m27(result.d1c()));
      return result;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = new Object();
      openSnapshots = Companion_getInstance_13().k27_1;
      nextSnapshotId = 2;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      applyObservers = emptyList();
      globalWriteObservers = emptyList();
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      // Inline function 'kotlin.also' call
      var this_0 = new GlobalSnapshot(tmp0, Companion_getInstance_13().k27_1);
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().m27(this_0.d1c()));
      currentGlobalSnapshot = new AtomicReference(this_0);
      snapshotInitializer = get_currentGlobalSnapshot().pn();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.o28_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap_1($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.o28_1;
    var half = $this.n28_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.n28_1 && values[right] < values[left]) {
        if (values[right] < values[current]) {
          swap_1($this, right, current);
          current = right;
        } else
          return Unit_instance;
      } else if (values[left] < values[current]) {
        swap_1($this, left, current);
        current = left;
      } else
        return Unit_instance;
    }
  }
  function swap_1($this, a, b) {
    var values = $this.o28_1;
    var index = $this.p28_1;
    var handles = $this.q28_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.o28_1.length;
    if (atLeast <= capacity)
      return Unit_instance;
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    var tmp0 = $this.o28_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = tmp0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, endIndex);
    var tmp5 = $this.p28_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = tmp5.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp5;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, endIndex_0);
    $this.o28_1 = newValues;
    $this.p28_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.q28_1.length;
    if ($this.r28_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      var tmp0 = $this.q28_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = tmp0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, endIndex);
      $this.q28_1 = newHandles;
    }
    var handle = $this.r28_1;
    $this.r28_1 = $this.q28_1[$this.r28_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.q28_1[handle] = $this.r28_1;
    $this.r28_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.n28_1 = 0;
    this.o28_1 = new Int32Array(16);
    this.p28_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.q28_1 = tmp_1;
    this.r28_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).i29 = function (default_0) {
    return this.n28_1 > 0 ? this.o28_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).nv = function (value) {
    ensure(this, this.n28_1 + 1 | 0);
    var tmp1 = this.n28_1;
    this.n28_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.o28_1[i] = value;
    this.p28_1[i] = handle;
    this.q28_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).s28 = function (handle) {
    var i = this.q28_1[handle];
    swap_1(this, i, this.n28_1 - 1 | 0);
    this.n28_1 = this.n28_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_13() {
    Companion_instance_14 = this;
    this.k27_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_14;
  function Companion_getInstance_13() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function access$_get_upperSet__2kurhn($this) {
    return $this.b27_1;
  }
  function access$_get_lowerSet__9mjss6($this) {
    return $this.c27_1;
  }
  function access$_get_lowerBound__ou44uq($this) {
    return $this.d27_1;
  }
  function access$_get_belowBound__uc78e($this) {
    return $this.e27_1;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.w29_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).f2a = function ($this$sequence, $completion) {
    var tmp = this.g2a($this$sequence, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(SnapshotIdSet$iterator$slambda).q9 = function (p1, $completion) {
    return this.f2a(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 15;
            this.y29_1 = this.w29_1.e27_1;
            if (!(this.y29_1 == null)) {
              this.z29_1 = intArrayIterator(this.y29_1);
              this.w8_1 = 1;
              continue $sm;
            } else {
              this.w8_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.z29_1.k()) {
              this.w8_1 = 3;
              continue $sm;
            }

            this.a2a_1 = this.z29_1.l();
            this.w8_1 = 2;
            suspendResult = this.x29_1.se(this.a2a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w8_1 = 1;
            continue $sm;
          case 3:
            this.w8_1 = 4;
            continue $sm;
          case 4:
            if (!this.w29_1.c27_1.equals(new Long(0, 0))) {
              this.b2a_1 = until(0, 64).j();
              this.w8_1 = 5;
              continue $sm;
            } else {
              this.w8_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.b2a_1.k()) {
              this.w8_1 = 8;
              continue $sm;
            }

            this.c2a_1 = this.b2a_1.l();
            if (!this.w29_1.c27_1.c3((new Long(1, 0)).z2(this.c2a_1)).equals(new Long(0, 0))) {
              this.w8_1 = 6;
              suspendResult = this.x29_1.se(this.c2a_1 + this.w29_1.d27_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.w8_1 = 7;
              continue $sm;
            }

          case 6:
            this.w8_1 = 7;
            continue $sm;
          case 7:
            this.w8_1 = 5;
            continue $sm;
          case 8:
            this.w8_1 = 9;
            continue $sm;
          case 9:
            if (!this.w29_1.b27_1.equals(new Long(0, 0))) {
              this.d2a_1 = until(0, 64).j();
              this.w8_1 = 10;
              continue $sm;
            } else {
              this.w8_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.d2a_1.k()) {
              this.w8_1 = 13;
              continue $sm;
            }

            this.e2a_1 = this.d2a_1.l();
            if (!this.w29_1.b27_1.c3((new Long(1, 0)).z2(this.e2a_1)).equals(new Long(0, 0))) {
              this.w8_1 = 11;
              suspendResult = this.x29_1.se((this.e2a_1 + 64 | 0) + this.w29_1.d27_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.w8_1 = 12;
              continue $sm;
            }

          case 11:
            this.w8_1 = 12;
            continue $sm;
          case 12:
            this.w8_1 = 10;
            continue $sm;
          case 13:
            this.w8_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x8_1 === 15) {
          throw e;
        } else {
          this.w8_1 = this.x8_1;
          this.z8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).g2a = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.w29_1, completion);
    i.x29_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.f2a($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_13();
    this.b27_1 = upperSet;
    this.c27_1 = lowerSet;
    this.d27_1 = lowerBound;
    this.e27_1 = belowBound;
  }
  protoOf(SnapshotIdSet).p = function (bit) {
    var offset = bit - this.d27_1 | 0;
    if (offset >= 0 && offset < 64) {
      return !(new Long(1, 0)).z2(offset).c3(this.c27_1).equals(new Long(0, 0));
    } else if (offset >= 64 && offset < 128) {
      return !(new Long(1, 0)).z2(offset - 64 | 0).c3(this.b27_1).equals(new Long(0, 0));
    } else if (offset > 0) {
      return false;
    } else {
      var tmp0_safe_receiver = this.e27_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
        tmp = binarySearch(tmp0_safe_receiver, bit) >= 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    }
  };
  protoOf(SnapshotIdSet).m27 = function (bit) {
    var offset = bit - this.d27_1 | 0;
    if (offset >= 0 && offset < 64) {
      var mask = (new Long(1, 0)).z2(offset);
      if (this.c27_1.c3(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.b27_1, this.c27_1.d3(mask), this.d27_1, this.e27_1);
      }
    } else if (offset >= 64 && offset < 128) {
      var mask_0 = (new Long(1, 0)).z2(offset - 64 | 0);
      if (this.b27_1.c3(mask_0).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.b27_1.d3(mask_0), this.c27_1, this.d27_1, this.e27_1);
      }
    } else if (offset >= 128) {
      if (!this.p(bit)) {
        var newUpperSet = this.b27_1;
        var newLowerSet = this.c27_1;
        var newLowerBound = this.d27_1;
        var newBelowBound = null;
        var targetLowerBound = imul((bit + 1 | 0) / 64 | 0, 64);
        $l$loop: while (newLowerBound < targetLowerBound) {
          if (!newLowerSet.equals(new Long(0, 0))) {
            if (newBelowBound == null) {
              // Inline function 'kotlin.collections.mutableListOf' call
              // Inline function 'kotlin.apply' call
              var this_0 = ArrayList_init_$Create$();
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
              var tmp0_safe_receiver = this.e27_1;
              if (tmp0_safe_receiver == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>' call
                // Inline function 'kotlin.collections.forEach' call
                var inductionVariable = 0;
                var last = tmp0_safe_receiver.length;
                while (inductionVariable < last) {
                  var element = tmp0_safe_receiver[inductionVariable];
                  inductionVariable = inductionVariable + 1 | 0;
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                  this_0.h(element);
                }
              }
              newBelowBound = this_0;
            }
            // Inline function 'kotlin.repeat' call
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < 64)
              do {
                var index = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                if (!newLowerSet.c3((new Long(1, 0)).z2(index)).equals(new Long(0, 0))) {
                  newBelowBound.h(index + newLowerBound | 0);
                }
              }
               while (inductionVariable_0 < 64);
          }
          if (newUpperSet.equals(new Long(0, 0))) {
            newLowerBound = targetLowerBound;
            newLowerSet = new Long(0, 0);
            break $l$loop;
          }
          newLowerSet = newUpperSet;
          newUpperSet = new Long(0, 0);
          newLowerBound = newLowerBound + 64 | 0;
        }
        var tmp = newUpperSet;
        var tmp_0 = newLowerSet;
        var tmp_1 = newLowerBound;
        var tmp0_safe_receiver_0 = newBelowBound;
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
        return (new SnapshotIdSet(tmp, tmp_0, tmp_1, tmp1_elvis_lhs == null ? this.e27_1 : tmp1_elvis_lhs)).m27(bit);
      }
    } else {
      var tmp2_elvis_lhs = this.e27_1;
      var tmp_2;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.intArrayOf' call
        var tmp$ret$3 = new Int32Array([bit]);
        return new SnapshotIdSet(this.b27_1, this.c27_1, this.d27_1, tmp$ret$3);
      } else {
        tmp_2 = tmp2_elvis_lhs;
      }
      var array = tmp_2;
      var location = binarySearch(array, bit);
      if (location < 0) {
        var insertLocation = -(location + 1 | 0) | 0;
        var newSize = array.length + 1 | 0;
        var newBelowBound_0 = new Int32Array(newSize);
        // Inline function 'kotlin.collections.copyInto' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = array;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_3, newBelowBound_0, 0, 0, insertLocation);
        var tmp12 = insertLocation + 1 | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = newSize - 1 | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = array;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_4, newBelowBound_0, tmp12, insertLocation, endIndex);
        newBelowBound_0[insertLocation] = bit;
        return new SnapshotIdSet(this.b27_1, this.c27_1, this.d27_1, newBelowBound_0);
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).f27 = function (bit) {
    var offset = bit - this.d27_1 | 0;
    if (offset >= 0 && offset < 64) {
      var mask = (new Long(1, 0)).z2(offset);
      if (!this.c27_1.c3(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.b27_1, this.c27_1.c3(mask.y2()), this.d27_1, this.e27_1);
      }
    } else if (offset >= 64 && offset < 128) {
      var mask_0 = (new Long(1, 0)).z2(offset - 64 | 0);
      if (!this.b27_1.c3(mask_0).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.b27_1.c3(mask_0.y2()), this.c27_1, this.d27_1, this.e27_1);
      }
    } else if (offset < 0) {
      var array = this.e27_1;
      if (!(array == null)) {
        var location = binarySearch(array, bit);
        if (location >= 0) {
          var newSize = array.length - 1 | 0;
          if (newSize === 0) {
            return new SnapshotIdSet(this.b27_1, this.c27_1, this.d27_1, null);
          }
          var newBelowBound = new Int32Array(newSize);
          if (location > 0) {
            // Inline function 'kotlin.collections.copyInto' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp, newBelowBound, 0, 0, location);
          }
          if (location < newSize) {
            var tmp8 = location + 1 | 0;
            // Inline function 'kotlin.collections.copyInto' call
            var endIndex = newSize + 1 | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_0 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_0, newBelowBound, location, tmp8, endIndex);
          }
          return new SnapshotIdSet(this.b27_1, this.c27_1, this.d27_1, newBelowBound);
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).r27 = function (bits) {
    if (bits === Companion_getInstance_13().k27_1)
      return this;
    if (this === Companion_getInstance_13().k27_1)
      return Companion_getInstance_13().k27_1;
    var tmp;
    if (bits.d27_1 === this.d27_1 && bits.e27_1 === this.e27_1) {
      tmp = new SnapshotIdSet(this.b27_1.c3(bits.b27_1.y2()), this.c27_1.c3(bits.c27_1.y2()), this.d27_1, this.e27_1);
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
      var accumulator = this;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
      var belowBound = access$_get_belowBound__uc78e(bits);
      if (!(belowBound == null)) {
        var inductionVariable = 0;
        var last = belowBound.length;
        while (inductionVariable < last) {
          var element = belowBound[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
          accumulator = accumulator.f27(element);
        }
      }
      if (!access$_get_lowerSet__9mjss6(bits).equals(new Long(0, 0))) {
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 64)
          do {
            var index = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (!access$_get_lowerSet__9mjss6(bits).c3((new Long(1, 0)).z2(index)).equals(new Long(0, 0))) {
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
              var element_0 = index + access$_get_lowerBound__ou44uq(bits) | 0;
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
              accumulator = accumulator.f27(element_0);
            }
          }
           while (inductionVariable_0 < 64);
      }
      if (!access$_get_upperSet__2kurhn(bits).equals(new Long(0, 0))) {
        var inductionVariable_1 = 0;
        if (inductionVariable_1 < 64)
          do {
            var index_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            if (!access$_get_upperSet__2kurhn(bits).c3((new Long(1, 0)).z2(index_0)).equals(new Long(0, 0))) {
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
              var element_1 = (index_0 + 64 | 0) + access$_get_lowerBound__ou44uq(bits) | 0;
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
              accumulator = accumulator.f27(element_1);
            }
          }
           while (inductionVariable_1 < 64);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).s27 = function (bits) {
    if (bits === Companion_getInstance_13().k27_1)
      return this;
    if (this === Companion_getInstance_13().k27_1)
      return bits;
    var tmp;
    if (bits.d27_1 === this.d27_1 && bits.e27_1 === this.e27_1) {
      tmp = new SnapshotIdSet(this.b27_1.d3(bits.b27_1), this.c27_1.d3(bits.c27_1), this.d27_1, this.e27_1);
    } else {
      var tmp_0;
      if (this.e27_1 == null) {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
        var accumulator = bits;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
        var belowBound = access$_get_belowBound__uc78e(this);
        if (!(belowBound == null)) {
          var inductionVariable = 0;
          var last = belowBound.length;
          while (inductionVariable < last) {
            var element = belowBound[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
            accumulator = accumulator.m27(element);
          }
        }
        if (!access$_get_lowerSet__9mjss6(this).equals(new Long(0, 0))) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < 64)
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (!access$_get_lowerSet__9mjss6(this).c3((new Long(1, 0)).z2(index)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_0 = index + access$_get_lowerBound__ou44uq(this) | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator = accumulator.m27(element_0);
              }
            }
             while (inductionVariable_0 < 64);
        }
        if (!access$_get_upperSet__2kurhn(this).equals(new Long(0, 0))) {
          var inductionVariable_1 = 0;
          if (inductionVariable_1 < 64)
            do {
              var index_0 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              if (!access$_get_upperSet__2kurhn(this).c3((new Long(1, 0)).z2(index_0)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_1 = (index_0 + 64 | 0) + access$_get_lowerBound__ou44uq(this) | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator = accumulator.m27(element_1);
              }
            }
             while (inductionVariable_1 < 64);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
        var accumulator_0 = this;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
        var belowBound_0 = access$_get_belowBound__uc78e(bits);
        if (!(belowBound_0 == null)) {
          var inductionVariable_2 = 0;
          var last_0 = belowBound_0.length;
          while (inductionVariable_2 < last_0) {
            var element_2 = belowBound_0[inductionVariable_2];
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
            accumulator_0 = accumulator_0.m27(element_2);
          }
        }
        if (!access$_get_lowerSet__9mjss6(bits).equals(new Long(0, 0))) {
          var inductionVariable_3 = 0;
          if (inductionVariable_3 < 64)
            do {
              var index_1 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              if (!access$_get_lowerSet__9mjss6(bits).c3((new Long(1, 0)).z2(index_1)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_3 = index_1 + access$_get_lowerBound__ou44uq(bits) | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator_0 = accumulator_0.m27(element_3);
              }
            }
             while (inductionVariable_3 < 64);
        }
        if (!access$_get_upperSet__2kurhn(bits).equals(new Long(0, 0))) {
          var inductionVariable_4 = 0;
          if (inductionVariable_4 < 64)
            do {
              var index_2 = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              if (!access$_get_upperSet__2kurhn(bits).c3((new Long(1, 0)).z2(index_2)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_4 = (index_2 + 64 | 0) + access$_get_lowerBound__ou44uq(bits) | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator_0 = accumulator_0.m27(element_4);
              }
            }
             while (inductionVariable_4 < 64);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).j = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).j();
  };
  protoOf(SnapshotIdSet).m28 = function (default_0) {
    var belowBound = this.e27_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.c27_1.equals(new Long(0, 0)))
      return this.d27_1 + countTrailingZeroBits(this.c27_1) | 0;
    if (!this.b27_1.equals(new Long(0, 0)))
      return (this.d27_1 + 64 | 0) + countTrailingZeroBits(this.b27_1) | 0;
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var _iterator__ex2g4s = this.j();
    while (_iterator__ex2g4s.k()) {
      var item = _iterator__ex2g4s.l();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.h(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(destination) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function get_sync() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return sync;
  }
  var sync;
  function StateListStateRecord(list) {
    StateRecord.call(this);
    this.j2a_1 = list;
    this.k2a_1 = 0;
    this.l2a_1 = 0;
  }
  protoOf(StateListStateRecord).v1u = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_sync();
    // Inline function 'androidx.compose.runtime.snapshots.StateListStateRecord.assign.<anonymous>' call
    var tmp = this;
    tmp.j2a_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).j2a_1;
    this.k2a_1 = value.k2a_1;
    this.l2a_1 = value.l2a_1;
  };
  protoOf(StateListStateRecord).w1u = function () {
    return new StateListStateRecord(this.j2a_1);
  };
  function mutateBoolean($this, block) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate' call
    var result;
    $l$loop: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = $this.g1v_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.k2a_1;
      oldList = current_0.j2a_1;
      var builder = ensureNotNull(oldList).x21();
      result = block(builder);
      var newList = builder.y21();
      var tmp_0;
      if (equals(newList, oldList)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
        var tmp_1 = $this.g1v_1;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var this_1 = tmp_1 instanceof StateListStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_instance_12.b11();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>' call
        var $this$writable = writableRecord(this_1, $this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_sync();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if ($this$writable.k2a_1 === currentModification) {
          $this$writable.j2a_1 = newList;
          $this$writable.k2a_1 = $this$writable.k2a_1 + 1 | 0;
          $this$writable.l2a_1 = $this$writable.l2a_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        // Inline function 'kotlin.also' call
        var this_2 = tmp_2;
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, $this);
        tmp_0 = this_2;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  }
  function SnapshotStateList$addAll$lambda($index, $elements) {
    return function (it) {
      return it.w1($index, $elements);
    };
  }
  function SnapshotStateList() {
    var tmp = this;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.firstStateRecord.<anonymous>' call
    var list = persistentListOf();
    // Inline function 'kotlin.also' call
    var this_0 = new StateListStateRecord(list);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.firstStateRecord.<anonymous>.<anonymous>' call
    if (Companion_instance_12.c1v()) {
      var tmp_0 = this_0;
      // Inline function 'kotlin.also' call
      var this_1 = new StateListStateRecord(list);
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.firstStateRecord.<anonymous>.<anonymous>.<anonymous>' call
      this_1.a1v_1 = 1;
      tmp_0.b1v_1 = this_1;
    }
    tmp.g1v_1 = this_0;
  }
  protoOf(SnapshotStateList).d1v = function () {
    return this.g1v_1;
  };
  protoOf(SnapshotStateList).e1v = function (value) {
    value.b1v_1 = this.g1v_1;
    var tmp = this;
    tmp.g1v_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).m2a = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    var tmp = this.g1v_1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-structure>.<anonymous>' call
    return current(this_0).l2a_1;
  };
  protoOf(SnapshotStateList).n2a = function () {
    var tmp = this.g1v_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).m = function () {
    return this.n2a().j2a_1.m();
  };
  protoOf(SnapshotStateList).ge = function (element) {
    return this.n2a().j2a_1.o(element);
  };
  protoOf(SnapshotStateList).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.ge((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).p = function (index) {
    return this.n2a().j2a_1.p(index);
  };
  protoOf(SnapshotStateList).o2a = function (element) {
    return this.n2a().j2a_1.r(element);
  };
  protoOf(SnapshotStateList).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.o2a((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).q = function () {
    return this.n2a().j2a_1.q();
  };
  protoOf(SnapshotStateList).j = function () {
    return this.s1();
  };
  protoOf(SnapshotStateList).s1 = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).t1 = function (index) {
    return new StateListIterator(this, index);
  };
  protoOf(SnapshotStateList).toString = function () {
    var tmp = this.g1v_1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.toString.<anonymous>' call
    var it = current(this_0);
    return 'SnapshotStateList(value=' + toString(it.j2a_1) + ')@' + hashCode(this);
  };
  protoOf(SnapshotStateList).j1c = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.g1v_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.k2a_1;
      oldList = current_0.j2a_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).h(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.g1v_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.b11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.k2a_1 === currentModification) {
        $this$writable.j2a_1 = newList;
        if (true) {
          $this$writable.l2a_1 = $this$writable.l2a_1 + 1 | 0;
        }
        $this$writable.k2a_1 = $this$writable.k2a_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_2 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).h = function (element) {
    return this.j1c((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).p2a = function (index, element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.g1v_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.k2a_1;
      oldList = current_0.j2a_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).a22(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.g1v_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.b11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.k2a_1 === currentModification) {
        $this$writable.j2a_1 = newList;
        if (true) {
          $this$writable.l2a_1 = $this$writable.l2a_1 + 1 | 0;
        }
        $this$writable.k2a_1 = $this$writable.k2a_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_2 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return Unit_instance;
  };
  protoOf(SnapshotStateList).a2 = function (index, element) {
    return this.p2a(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).q2a = function (index, elements) {
    return mutateBoolean(this, SnapshotStateList$addAll$lambda(index, elements));
  };
  protoOf(SnapshotStateList).w1 = function (index, elements) {
    return this.q2a(index, elements);
  };
  protoOf(SnapshotStateList).h1v = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.g1v_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.k2a_1;
      oldList = current_0.j2a_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var newList = ensureNotNull(oldList).n(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.g1v_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.b11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.k2a_1 === currentModification) {
        $this$writable.j2a_1 = newList;
        if (true) {
          $this$writable.l2a_1 = $this$writable.l2a_1 + 1 | 0;
        }
        $this$writable.k2a_1 = $this$writable.k2a_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_2 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).n = function (elements) {
    return this.h1v(elements);
  };
  protoOf(SnapshotStateList).y1 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    var tmp = this.g1v_1;
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_instance_12.b11();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var $this$writable = writableRecord(this_0, this, snapshot);
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_sync();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    $this$writable.j2a_1 = persistentListOf();
    $this$writable.k2a_1 = $this$writable.k2a_1 + 1 | 0;
    $this$writable.l2a_1 = $this$writable.l2a_1 + 1 | 0;
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
  };
  protoOf(SnapshotStateList).r2a = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.g1v_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.k2a_1;
      oldList = current_0.j2a_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var newList = ensureNotNull(oldList).v1(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.g1v_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.b11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.k2a_1 === currentModification) {
        $this$writable.j2a_1 = newList;
        if (true) {
          $this$writable.l2a_1 = $this$writable.l2a_1 + 1 | 0;
        }
        $this$writable.k2a_1 = $this$writable.k2a_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_2 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).v1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.r2a((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).s2a = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.g1v_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.k2a_1;
      oldList = current_0.j2a_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAll.<anonymous>' call
      var newList = ensureNotNull(oldList).x1(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.g1v_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.b11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.k2a_1 === currentModification) {
        $this$writable.j2a_1 = newList;
        if (true) {
          $this$writable.l2a_1 = $this$writable.l2a_1 + 1 | 0;
        }
        $this$writable.k2a_1 = $this$writable.k2a_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_2 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).x1 = function (elements) {
    return this.s2a(elements);
  };
  protoOf(SnapshotStateList).b2 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.p(index);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.g1v_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.k2a_1;
      oldList = current_0.j2a_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).b2(index);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.g1v_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.b11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.k2a_1 === currentModification) {
        $this$writable.j2a_1 = newList;
        if (true) {
          $this$writable.l2a_1 = $this$writable.l2a_1 + 1 | 0;
        }
        $this$writable.k2a_1 = $this$writable.k2a_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_3 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).t2a = function (index, element) {
    // Inline function 'kotlin.also' call
    var this_0 = this.p(index);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.g1v_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.k2a_1;
      oldList = current_0.j2a_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).z1(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.g1v_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.b11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.k2a_1 === currentModification) {
        $this$writable.j2a_1 = newList;
        if (false) {
          $this$writable.l2a_1 = $this$writable.l2a_1 + 1 | 0;
        }
        $this$writable.k2a_1 = $this$writable.k2a_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_3 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).z1 = function (index, element) {
    return this.t2a(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function validateModification($this) {
    if (!($this.u2a_1.m2a() === $this.x2a_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.u2a_1 = list;
    this.v2a_1 = offset - 1 | 0;
    this.w2a_1 = -1;
    this.x2a_1 = this.u2a_1.m2a();
  }
  protoOf(StateListIterator).h4 = function () {
    return this.v2a_1 >= 0;
  };
  protoOf(StateListIterator).i4 = function () {
    validateModification(this);
    validateRange(this.v2a_1, this.u2a_1.m());
    this.w2a_1 = this.v2a_1;
    // Inline function 'kotlin.also' call
    var this_0 = this.u2a_1.p(this.v2a_1);
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.previous.<anonymous>' call
    this.v2a_1 = this.v2a_1 - 1 | 0;
    return this_0;
  };
  protoOf(StateListIterator).j4 = function () {
    return this.v2a_1;
  };
  protoOf(StateListIterator).k = function () {
    return this.v2a_1 < (this.u2a_1.m() - 1 | 0);
  };
  protoOf(StateListIterator).l = function () {
    validateModification(this);
    var newIndex = this.v2a_1 + 1 | 0;
    this.w2a_1 = newIndex;
    validateRange(newIndex, this.u2a_1.m());
    // Inline function 'kotlin.also' call
    var this_0 = this.u2a_1.p(newIndex);
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.v2a_1 = newIndex;
    return this_0;
  };
  protoOf(StateListIterator).x3 = function () {
    validateModification(this);
    this.u2a_1.b2(this.v2a_1);
    this.v2a_1 = this.v2a_1 - 1 | 0;
    this.w2a_1 = -1;
    this.x2a_1 = this.u2a_1.m2a();
  };
  function validateRange(index, size) {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function _init_properties_SnapshotStateList_kt__mu1ud5() {
    if (!properties_initialized_SnapshotStateList_kt_lcuarf) {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      sync = new Object();
    }
  }
  var sync_0;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync_0 = new Object();
    }
  }
  function find_1($this, value, hash) {
    var low = 0;
    var high = $this.j29_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.k29_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.l29_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pn();
        if (value === midVal)
          return mid;
        return findExactIndex($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.k29_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.l29_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.pn();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.j29_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.k29_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.l29_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.pn();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.j29_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.j29_1 = 0;
    this.k29_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.l29_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).n29 = function (value) {
    var index;
    var size = this.j29_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_1(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.l29_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      var tmp1 = this.l29_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(tmp1, newValues, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.l29_1;
      arrayCopy(this_0, newValues, 0, 0, insertIndex);
      var tmp11 = this.k29_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp11;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.k29_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.l29_1 = newValues;
      this.k29_1 = newHashes;
    } else {
      var tmp21 = this.l29_1;
      var tmp22 = this.l29_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(tmp21, tmp22, destinationOffset_1, insertIndex, size);
      var tmp26 = this.k29_1;
      var tmp27 = this.k29_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = tmp26;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, tmp27, destinationOffset_2, insertIndex, size);
    }
    this.l29_1[insertIndex] = new WeakReference(value);
    this.k29_1[insertIndex] = hash;
    this.j29_1 = this.j29_1 + 1 | 0;
    return true;
  };
  function StateObjectImpl() {
    this.e1k_1 = new AtomicInt(0);
  }
  protoOf(StateObjectImpl).f1k = function (reader) {
    do {
      var old = _ReaderKind___init__impl__jqeebu(this.e1k_1.pn());
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
      var this_0 = old;
      if (!((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0))
        return Unit_instance;
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.withReadIn' call
      var this_1 = old;
      var new_0 = _ReaderKind___init__impl__jqeebu(_ReaderKind___get_mask__impl__gmhzqb(this_1) | _ReaderKind___get_mask__impl__gmhzqb(reader));
    }
     while (!this.e1k_1.y2a(_ReaderKind___get_mask__impl__gmhzqb(old), _ReaderKind___get_mask__impl__gmhzqb(new_0)));
  };
  protoOf(StateObjectImpl).q1o = function (reader) {
    // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
    var this_0 = _ReaderKind___init__impl__jqeebu(this.e1k_1.pn());
    return !((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0);
  };
  function _ReaderKind___init__impl__jqeebu(mask) {
    mask = mask === VOID ? 0 : mask;
    return mask;
  }
  function _ReaderKind___get_mask__impl__gmhzqb($this) {
    return $this;
  }
  function Companion_14() {
  }
  var Companion_instance_15;
  function Companion_getInstance_14() {
    return Companion_instance_15;
  }
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function AtomicReference(value) {
    this.r1i_1 = value;
  }
  protoOf(AtomicReference).pn = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.r1i_1;
  };
  protoOf(AtomicReference).s1k = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicReference.set.<set-delegate>' call
    this.r1i_1 = value;
  };
  protoOf(AtomicReference).s1i = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_getAndSet' call
    var oldValue = this.r1i_1;
    // Inline function 'androidx.compose.runtime.AtomicReference.getAndSet.<set-delegate>' call
    this.r1i_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).z1j = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.r1i_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicReference.compareAndSet.<set-delegate>' call
        this.r1i_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function AtomicInt(value) {
    this.b12_1 = value;
  }
  protoOf(AtomicInt).pn = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.b12_1;
  };
  protoOf(AtomicInt).c12 = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicInt.set.<set-delegate>' call
    this.b12_1 = value;
  };
  protoOf(AtomicInt).nv = function (amount) {
    // Inline function 'kotlinx.atomicfu.atomicfu_addAndGet' call
    // Inline function 'androidx.compose.runtime.AtomicInt.add.<set-delegate>' call
    this.b12_1 = this.b12_1 + amount | 0;
    return this.b12_1;
  };
  protoOf(AtomicInt).y2a = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.b12_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicInt.compareAndSet.<set-delegate>' call
        this.b12_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function trackWrite($this) {
    if ($this.y25_1) {
      var scope = $this.a26_1;
      if (!(scope == null)) {
        scope.u1k();
        $this.a26_1 = null;
      }
      var scopes = $this.b26_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.m();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.p(index);
            item.u1k();
          }
           while (inductionVariable < last);
        scopes.y1();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.y25_1) {
      var scope = composer.o1g();
      if (!(scope == null)) {
        composer.p1g(scope);
        var lastScope = $this.a26_1;
        if (replacableWith(lastScope, scope)) {
          $this.a26_1 = scope;
        } else {
          var lastScopes = $this.b26_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.b26_1 = newScopes;
            newScopes.h(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.m();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.p(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.z1(index, scope);
                  return Unit_instance;
                }
              }
               while (inductionVariable < last);
            lastScopes.h(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.m1d(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.z2a($p1, nc, updateChangedFlags($changed) | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl(key, tracked, block) {
    this.x25_1 = key;
    this.y25_1 = tracked;
    this.z25_1 = block;
    this.a26_1 = null;
    this.b26_1 = null;
  }
  protoOf(ComposableLambdaImpl).c26 = function (block) {
    if (!equals(this.z25_1, block)) {
      var oldBlockNull = this.z25_1 == null;
      this.z25_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).m1d = function (c, changed) {
    var c_0 = c.x1f(this.x25_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.f15(this) ? differentBits(0) : sameBits(0));
    var tmp = this.z25_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).z2a = function (p1, c, changed) {
    var c_0 = c.x1f(this.x25_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.f15(this) ? differentBits(1) : sameBits(1));
    var tmp = this.z25_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.y1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1l(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  function get_DefaultMonotonicFrameClock() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return DefaultMonotonicFrameClock;
  }
  var DefaultMonotonicFrameClock;
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  function currentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $continuation) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      this_0.h9(tmp$ret$0);
      return Unit_instance;
    };
  }
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).f12 = function (onFrame, $completion) {
    // Inline function 'kotlin.coroutines.suspendCoroutine.<anonymous>' call
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    // Inline function 'androidx.compose.runtime.MonotonicClockImpl.withFrameNanos.<anonymous>' call
    var tmp = window;
    tmp.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(onFrame, safe));
    return safe.o9();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (!properties_initialized_ActualJs_js_kt_azbr3k) {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
  }
  protoOf(Trace).y1b = function (name) {
    return null;
  };
  protoOf(Trace).l1c = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    return Trace_instance;
  }
  function invokeComposable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    composable(composer, 1);
  }
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function IntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.b18_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).p = function (key) {
    return this.b18_1.h2(key);
  };
  protoOf(IntMap).c18 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.b18_1.y4(key, value);
  };
  function WeakReference(reference) {
    this.m29_1 = reference;
  }
  protoOf(WeakReference).pn = function () {
    return this.m29_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).c11 = onBeginChanges;
  protoOf(OffsetApplier).d11 = onEndChanges;
  protoOf(AbstractApplier).c11 = onBeginChanges;
  protoOf(AbstractApplier).d11 = onEndChanges;
  protoOf(BroadcastFrameClock).d2 = get_key;
  protoOf(BroadcastFrameClock).j9 = get;
  protoOf(BroadcastFrameClock).ig = fold;
  protoOf(BroadcastFrameClock).hg = minusKey;
  protoOf(BroadcastFrameClock).jg = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.e1();
  });
  protoOf(StructuralEqualityPolicy).q1u = merge;
  protoOf(StateObjectImpl).f1v = mergeRecords;
  protoOf(SnapshotStateList).f1v = mergeRecords;
  protoOf(MonotonicClockImpl).d2 = get_key;
  protoOf(MonotonicClockImpl).j9 = get;
  protoOf(MonotonicClockImpl).ig = fold;
  protoOf(MonotonicClockImpl).hg = minusKey;
  protoOf(MonotonicClockImpl).jg = plus;
  //endregion
  //region block: init
  ScopeInvalidated_instance = new ScopeInvalidated();
  Key_instance_0 = new Key();
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  StructuralEqualityPolicy_instance = new StructuralEqualityPolicy();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  EndOfChain_instance = new EndOfChain();
  ListImplementation_instance = new ListImplementation();
  Companion_instance_12 = new Companion_11();
  Companion_instance_15 = new Companion_14();
  Trace_instance = new Trace();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = composableLambdaInstance;
  _.$_$.b = composableLambda;
  _.$_$.c = rememberComposableLambda;
  _.$_$.d = AbstractApplier;
  _.$_$.e = CompositionLocalProvider;
  _.$_$.f = CompositionScopedCoroutineScopeCanceller;
  _.$_$.g = ControlledComposition;
  _.$_$.h = get_DefaultMonotonicFrameClock;
  _.$_$.i = DisposableEffect_0;
  _.$_$.j = DisposableEffect_1;
  _.$_$.k = DisposableEffect;
  _.$_$.l = LaunchedEffect;
  _.$_$.m = ProduceStateScope;
  _.$_$.n = Recomposer;
  _.$_$.o = compositionLocalOf;
  _.$_$.p = createCompositionCoroutineScope;
  _.$_$.q = invalidApplier;
  _.$_$.r = isTraceInProgress;
  _.$_$.s = mutableStateListOf_0;
  _.$_$.t = mutableStateListOf;
  _.$_$.u = mutableStateOf;
  _.$_$.v = produceState;
  _.$_$.w = sourceInformationMarkerEnd;
  _.$_$.x = sourceInformationMarkerStart;
  _.$_$.y = staticCompositionLocalOf;
  _.$_$.z = traceEventEnd;
  _.$_$.a1 = traceEventStart;
  _.$_$.b1 = updateChangedFlags;
  _.$_$.c1 = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.d1 = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.e1 = _Updater___init__impl__rbfxm8;
  _.$_$.f1 = Updater__set_impl_v7kwss;
  _.$_$.g1 = Companion_instance_12;
  _.$_$.h1 = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-runtime-runtime.js.map
