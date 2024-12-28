(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-collection-collection'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-collection-collection'.");
    }
    globalThis['compose-multiplatform-core-collection-collection'] = factory(typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-collection-collection'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var clz32 = Math.clz32;
  var longArray = kotlin_kotlin.$_$.s6;
  var Long = kotlin_kotlin.$_$.c9;
  var fill = kotlin_kotlin.$_$.g3;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var toLong = kotlin_kotlin.$_$.y6;
  var countTrailingZeroBits = kotlin_kotlin.$_$.l9;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.w1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.x1;
  var ulongCompare = kotlin_kotlin.$_$.x9;
  var VOID = kotlin_kotlin.$_$.e;
  var toString = kotlin_kotlin.$_$.z6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var protoOf = kotlin_kotlin.$_$.x6;
  var initMetadataForClass = kotlin_kotlin.$_$.g6;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var until = kotlin_kotlin.$_$.f7;
  var copyOf = kotlin_kotlin.$_$.a3;
  var arrayCopy = kotlin_kotlin.$_$.t2;
  var fillArrayVal = kotlin_kotlin.$_$.a6;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var hashCode = kotlin_kotlin.$_$.f6;
  var equals = kotlin_kotlin.$_$.z5;
  var toString_0 = kotlin_kotlin.$_$.v9;
  var copyOf_0 = kotlin_kotlin.$_$.z2;
  var longArrayOf = kotlin_kotlin.$_$.r6;
  var CoroutineImpl = kotlin_kotlin.$_$.m5;
  var SequenceScope = kotlin_kotlin.$_$.k7;
  var numberRangeToNumber = kotlin_kotlin.$_$.t6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x4;
  var initMetadataForLambda = kotlin_kotlin.$_$.k6;
  var iterator = kotlin_kotlin.$_$.o7;
  var KtSet = kotlin_kotlin.$_$.q2;
  var Collection = kotlin_kotlin.$_$.j2;
  var MutableIterable = kotlin_kotlin.$_$.n2;
  var fill_0 = kotlin_kotlin.$_$.h3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(IntIntMap, 'IntIntMap');
  initMetadataForClass(MutableIntIntMap, 'MutableIntIntMap', MutableIntIntMap, IntIntMap);
  initMetadataForClass(IntList, 'IntList');
  initMetadataForClass(MutableIntList, 'MutableIntList', MutableIntList, IntList);
  initMetadataForClass(IntObjectMap, 'IntObjectMap');
  initMetadataForClass(MutableIntObjectMap, 'MutableIntObjectMap', MutableIntObjectMap, IntObjectMap);
  initMetadataForClass(IntSet, 'IntSet');
  initMetadataForClass(MutableIntSet, 'MutableIntSet', MutableIntSet, IntSet);
  initMetadataForClass(ObjectIntMap, 'ObjectIntMap');
  initMetadataForClass(MutableObjectIntMap, 'MutableObjectIntMap', MutableObjectIntMap, ObjectIntMap);
  initMetadataForClass(ObjectList, 'ObjectList');
  initMetadataForClass(MutableObjectList, 'MutableObjectList', MutableObjectList, ObjectList);
  initMetadataForClass(ScatterMap, 'ScatterMap');
  initMetadataForClass(MutableScatterMap, 'MutableScatterMap', MutableScatterMap, ScatterMap);
  initMetadataForLambda(ScatterSet$SetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SetWrapper, 'SetWrapper', VOID, VOID, [KtSet]);
  initMetadataForClass(ScatterSet, 'ScatterSet');
  initMetadataForLambda(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutableScatterSet$MutableSetWrapper$iterator$1);
  initMetadataForClass(MutableSetWrapper, 'MutableSetWrapper', VOID, SetWrapper, [SetWrapper, KtSet, Collection, MutableIterable]);
  initMetadataForClass(MutableScatterSet, 'MutableScatterSet', MutableScatterSet, ScatterSet);
  //endregion
  function initializeStorage($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.vu_1 = newCapacity;
    initializeMetadata($this, newCapacity);
    $this.tu_1 = new Int32Array(newCapacity);
    $this.uu_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableIntIntMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.su_1 = tmp_0;
    var tmp2 = $this.su_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
    initializeGrowth($this);
  }
  function initializeGrowth($this) {
    $this.cv_1 = loadedCapacity($this.dv()) - $this.wu_1 | 0;
  }
  function findInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.vu_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.su_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).u2(toLong(hash2));
      var x = g.e3(tmp$ret$4);
      var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.tu_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.c3(this_1.t2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot($this, hash1);
    var tmp_0;
    if ($this.cv_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.su_1[offset_0 >> 3].a3((offset_0 & 7) << 3).c3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage($this);
      index_0 = findFirstAvailableSlot($this, hash1);
    }
    $this.wu_1 = $this.wu_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.cv_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.su_1[offset_1 >> 3].a3((offset_1 & 7) << 3).c3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.cv_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableIntIntMap.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.su_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].c3((new Long(255, 0)).z2(b_0).y2()).d3(value.z2(b_0));
    var c = $this.vu_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].c3((new Long(255, 0)).z2(b_1).y2()).d3(value.z2(b_1));
    return ~index_0;
  }
  function findFirstAvailableSlot($this, hash1) {
    var probeMask = $this.vu_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.su_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].b3(b).d3(tmp0[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.c3(g.y2().z2(7)).c3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage($this) {
    var tmp;
    if ($this.vu_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.wu_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).u2(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.vu_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).u2(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage($this, nextCapacity($this.vu_1));
    } else {
      resizeStorage($this, nextCapacity($this.vu_1));
    }
  }
  function resizeStorage($this, newCapacity) {
    var previousMetadata = $this.su_1;
    var previousKeys = $this.tu_1;
    var previousValues = $this.uu_1;
    var previousCapacity = $this.vu_1;
    initializeStorage($this, newCapacity);
    var newKeys = $this.tu_1;
    var newValues = $this.uu_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].a3((i & 7) << 3).c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot($this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableIntIntMap.writeMetadata' call
          var value = toLong(tmp$ret$4);
          var m = $this.su_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
          var c = $this.vu_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].c3((new Long(255, 0)).z2(b_0).y2()).d3(value.z2(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableIntIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntIntMap.call(this);
    this.cv_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntIntMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntIntMap).ev = function (key, value) {
    var index = findInsertIndex(this, key);
    if (index < 0)
      index = ~index;
    this.tu_1[index] = key;
    this.uu_1[index] = value;
  };
  function IntIntMap() {
    this.su_1 = get_EmptyGroup();
    this.tu_1 = get_EmptyIntArray();
    this.uu_1 = get_EmptyIntArray();
    this.vu_1 = 0;
    this.wu_1 = 0;
  }
  protoOf(IntIntMap).dv = function () {
    return this.vu_1;
  };
  protoOf(IntIntMap).m = function () {
    return this.wu_1;
  };
  protoOf(IntIntMap).q = function () {
    return this.wu_1 === 0;
  };
  protoOf(IntIntMap).p = function (key) {
    var index = this.gv(key);
    if (index < 0) {
      throw NoSuchElementException_init_$Create$('Cannot find value for key ' + key);
    }
    return this.uu_1[index];
  };
  protoOf(IntIntMap).fv = function (key) {
    return this.gv(key) >= 0;
  };
  protoOf(IntIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.tu_1;
    var v = this.uu_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.su_1;
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
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntIntMap.hashCode.<anonymous>' call
                  hash = hash + (k[index] ^ v[index]) | 0;
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
    return hash;
  };
  protoOf(IntIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntIntMap)) {
      return false;
    }
    if (!(other.m() === this.m())) {
      return false;
    }
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.tu_1;
    var v = this.uu_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.su_1;
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
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  // Inline function 'androidx.collection.IntIntMap.equals.<anonymous>' call
                  if (!(v[index] === other.p(tmp1))) {
                    return false;
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
    return true;
  };
  protoOf(IntIntMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().e8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.tu_1;
    var v = this.uu_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.su_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.c3(this_0.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  // Inline function 'androidx.collection.IntIntMap.toString.<anonymous>' call
                  var value = v[index];
                  s.ob(tmp1);
                  s.d8('=');
                  s.ob(value);
                  i = i + 1 | 0;
                  if (i < this.wu_1) {
                    s.e8(_Char___init__impl__6a9atx(44)).e8(_Char___init__impl__6a9atx(32));
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
         while (!(i_0 === lastIndex));
    }
    return s.e8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(IntIntMap).gv = function (key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.vu_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = this.su_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).u2(toLong(hash2));
      var x = g.e3(tmp$ret$4);
      var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (this.tu_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.c3(this_1.t2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function IntList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyIntArray();
    } else {
      tmp_0 = new Int32Array(initialCapacity);
    }
    tmp.hv_1 = tmp_0;
    this.iv_1 = 0;
  }
  protoOf(IntList).m = function () {
    return this.iv_1;
  };
  protoOf(IntList).p = function (index) {
    if (!(0 <= index ? index < this.iv_1 : false)) {
      // Inline function 'androidx.collection.IntList.lastIndex' call
      var tmp$ret$0 = this.iv_1 - 1 | 0;
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' must be in 0..' + tmp$ret$0);
    }
    return this.hv_1[index];
  };
  protoOf(IntList).jv = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      // Inline function 'androidx.collection.IntList.joinToString.<anonymous>' call
      this_0.i(prefix);
      // Inline function 'androidx.collection.IntList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.hv_1;
      var inductionVariable = 0;
      var last = this.iv_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.collection.IntList.joinToString.<anonymous>.<anonymous>' call
          var element = content[i];
          if (i === limit) {
            this_0.i(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.i(separator);
          }
          this_0.ob(element);
        }
         while (inductionVariable < last);
      this_0.i(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntList).kv = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.jv(separator, prefix, postfix, limit, truncated) : $super.jv.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.IntList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.hv_1;
    var inductionVariable = 0;
    var last = this.iv_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.IntList.hashCode.<anonymous>' call
        var element = content[i];
        hashCode = hashCode + imul(31, element) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(IntList).equals = function (other) {
    var tmp;
    if (!(other instanceof IntList)) {
      tmp = true;
    } else {
      tmp = !(other.iv_1 === this.iv_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.hv_1;
    var otherContent = other.hv_1;
    // Inline function 'androidx.collection.IntList.indices' call
    var progression = until(0, this.iv_1);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(content[i] === otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(IntList).toString = function () {
    return this.kv(VOID, '[', ']');
  };
  function MutableIntList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    IntList.call(this, initialCapacity);
  }
  protoOf(MutableIntList).nv = function (element) {
    this.ov(this.iv_1 + 1 | 0);
    this.hv_1[this.iv_1] = element;
    this.iv_1 = this.iv_1 + 1 | 0;
    return true;
  };
  protoOf(MutableIntList).ov = function (capacity) {
    var oldContent = this.hv_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.hv_1 = copyOf(oldContent, newSize);
    }
  };
  protoOf(MutableIntList).b2 = function (index) {
    if (!(0 <= index ? index < this.iv_1 : false)) {
      // Inline function 'androidx.collection.IntList.lastIndex' call
      var tmp$ret$0 = this.iv_1 - 1 | 0;
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' must be in 0..' + tmp$ret$0);
    }
    var content = this.hv_1;
    var item = content[index];
    // Inline function 'androidx.collection.IntList.lastIndex' call
    if (!(index === (this.iv_1 - 1 | 0))) {
      var tmp5 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.iv_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, index, tmp5, endIndex);
    }
    this.iv_1 = this.iv_1 - 1 | 0;
    return item;
  };
  protoOf(MutableIntList).pv = function (index, element) {
    if (!(0 <= index ? index < this.iv_1 : false)) {
      // Inline function 'androidx.collection.IntList.lastIndex' call
      var tmp$ret$0 = this.iv_1 - 1 | 0;
      throw IndexOutOfBoundsException_init_$Create$('set index ' + index + ' must be between 0 .. ' + tmp$ret$0);
    }
    var content = this.hv_1;
    var old = content[index];
    content[index] = element;
    return old;
  };
  function initializeStorage_0($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.tv_1 = newCapacity;
    initializeMetadata_0($this, newCapacity);
    $this.rv_1 = new Int32Array(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.sv_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_0($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableIntObjectMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.qv_1 = tmp_0;
    var tmp2 = $this.qv_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
    initializeGrowth_0($this);
  }
  function initializeGrowth_0($this) {
    $this.aw_1 = loadedCapacity($this.dv()) - $this.uv_1 | 0;
  }
  function findAbsoluteInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.tv_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.qv_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).u2(toLong(hash2));
      var x = g.e3(tmp$ret$4);
      var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.rv_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.c3(this_1.t2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_0($this, hash1);
    var tmp_0;
    if ($this.aw_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.qv_1[offset_0 >> 3].a3((offset_0 & 7) << 3).c3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_0($this);
      index_0 = findFirstAvailableSlot_0($this, hash1);
    }
    $this.uv_1 = $this.uv_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.aw_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.qv_1[offset_1 >> 3].a3((offset_1 & 7) << 3).c3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.aw_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableIntObjectMap.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.qv_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].c3((new Long(255, 0)).z2(b_0).y2()).d3(value.z2(b_0));
    var c = $this.tv_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].c3((new Long(255, 0)).z2(b_1).y2()).d3(value.z2(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_0($this, hash1) {
    var probeMask = $this.tv_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.qv_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].b3(b).d3(tmp0[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.c3(g.y2().z2(7)).c3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_0($this) {
    var tmp;
    if ($this.tv_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.uv_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).u2(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.tv_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).u2(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_0($this, nextCapacity($this.tv_1));
    } else {
      resizeStorage_0($this, nextCapacity($this.tv_1));
    }
  }
  function resizeStorage_0($this, newCapacity) {
    var previousMetadata = $this.qv_1;
    var previousKeys = $this.rv_1;
    var previousValues = $this.sv_1;
    var previousCapacity = $this.tv_1;
    initializeStorage_0($this, newCapacity);
    var newKeys = $this.rv_1;
    var newValues = $this.sv_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].a3((i & 7) << 3).c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_0($this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableIntObjectMap.writeMetadata' call
          var value = toLong(tmp$ret$4);
          var m = $this.qv_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
          var c = $this.tv_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].c3((new Long(255, 0)).z2(b_0).y2()).d3(value.z2(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableIntObjectMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntObjectMap.call(this);
    this.aw_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntObjectMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_0(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntObjectMap).bw = function (key, value) {
    var index = findAbsoluteInsertIndex(this, key);
    this.rv_1[index] = key;
    this.sv_1[index] = value;
  };
  protoOf(MutableIntObjectMap).cw = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.tv_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.qv_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).u2(toLong(hash2));
        var x = g.e3(tmp$ret$4);
        var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.rv_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.c3(this_1.t2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    if (index_0 >= 0) {
      return this.dw(index_0);
    }
    return null;
  };
  protoOf(MutableIntObjectMap).dw = function (index) {
    this.uv_1 = this.uv_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableIntObjectMap.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.qv_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
    var c = this.tv_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].c3((new Long(255, 0)).z2(b_0).y2()).d3(value.z2(b_0));
    var oldValue = this.sv_1[index];
    this.sv_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  function IntObjectMap() {
    this.qv_1 = get_EmptyGroup();
    this.rv_1 = get_EmptyIntArray();
    this.sv_1 = get_EMPTY_OBJECTS();
    this.tv_1 = 0;
    this.uv_1 = 0;
  }
  protoOf(IntObjectMap).dv = function () {
    return this.tv_1;
  };
  protoOf(IntObjectMap).m = function () {
    return this.uv_1;
  };
  protoOf(IntObjectMap).q = function () {
    return this.uv_1 === 0;
  };
  protoOf(IntObjectMap).p = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.tv_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.qv_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).u2(toLong(hash2));
        var x = g.e3(tmp$ret$4);
        var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.rv_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.c3(this_1.t2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.sv_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(IntObjectMap).ew = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.tv_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.qv_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).u2(toLong(hash2));
        var x = g.e3(tmp$ret$4);
        var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.rv_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.c3(this_1.t2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntObjectMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.rv_1;
    var v = this.sv_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.qv_1;
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
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  var tmp = v[index];
                  // Inline function 'androidx.collection.IntObjectMap.hashCode.<anonymous>' call
                  var tmp_0 = hash;
                  var tmp_1 = tmp1;
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp_0 + (tmp_1 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
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
    return hash;
  };
  protoOf(IntObjectMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntObjectMap)) {
      return false;
    }
    if (!(other.m() === this.m())) {
      return false;
    }
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.rv_1;
    var v = this.sv_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.qv_1;
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
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  var tmp = v[index];
                  // Inline function 'androidx.collection.IntObjectMap.equals.<anonymous>' call
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (value == null) {
                    if (!(other.p(tmp1) == null) || !other.ew(tmp1)) {
                      return false;
                    }
                  } else if (!equals(value, other.p(tmp1))) {
                    return false;
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
    return true;
  };
  protoOf(IntObjectMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().e8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.rv_1;
    var v = this.sv_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.qv_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.c3(this_0.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  var tmp = v[index];
                  // Inline function 'androidx.collection.IntObjectMap.toString.<anonymous>' call
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  s.ob(tmp1);
                  s.d8('=');
                  s.c8(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.uv_1) {
                    s.e8(_Char___init__impl__6a9atx(44)).e8(_Char___init__impl__6a9atx(32));
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
         while (!(i_0 === lastIndex));
    }
    return s.e8(_Char___init__impl__6a9atx(125)).toString();
  };
  var EmptyIntSet;
  function get_EmptyIntArray() {
    _init_properties_IntSet_kt__km4dgt();
    return EmptyIntArray;
  }
  var EmptyIntArray;
  function IntSet() {
    this.fw_1 = get_EmptyGroup();
    this.gw_1 = get_EmptyIntArray();
    this.hw_1 = 0;
    this.iw_1 = 0;
  }
  protoOf(IntSet).dv = function () {
    return this.hw_1;
  };
  protoOf(IntSet).fv = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.hw_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.fw_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).u2(toLong(hash2));
        var x = g.e3(tmp$ret$4);
        var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.gw_1[index] === element) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.c3(this_1.t2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntSet).jv = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      // Inline function 'androidx.collection.IntSet.joinToString.<anonymous>' call
      this_0.i(prefix);
      var index = 0;
      // Inline function 'androidx.collection.IntSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.gw_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.fw_1;
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
                    // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                    // Inline function 'androidx.collection.IntSet.joinToString.<anonymous>.<anonymous>' call
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.i(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.i(separator);
                    }
                    this_0.ob(element);
                    index = index + 1 | 0;
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
      this_0.i(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntSet).jw = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.jv(separator, prefix, postfix, limit, truncated) : $super.jv.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.gw_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.fw_1;
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
                  // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntSet.hashCode.<anonymous>' call
                  hash = hash + k[index] | 0;
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
    return hash;
  };
  protoOf(IntSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntSet)) {
      return false;
    }
    if (!(other.iw_1 === this.iw_1)) {
      return false;
    }
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.gw_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.fw_1;
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
                  // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntSet.equals.<anonymous>' call
                  var element = k[index];
                  if (!other.fv(element)) {
                    return false;
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
    return true;
  };
  protoOf(IntSet).toString = function () {
    return this.jw(VOID, '[', ']');
  };
  function initializeStorage_1($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.hw_1 = newCapacity;
    initializeMetadata_1($this, newCapacity);
    $this.gw_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_1($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableIntSet.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.fw_1 = tmp_0;
    var tmp2 = $this.fw_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
    initializeGrowth_1($this);
  }
  function initializeGrowth_1($this) {
    $this.ow_1 = loadedCapacity($this.dv()) - $this.iw_1 | 0;
  }
  function findAbsoluteInsertIndex_0($this, element) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(element, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.hw_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.fw_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).u2(toLong(hash2));
      var x = g.e3(tmp$ret$4);
      var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.gw_1[index] === element) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.c3(this_1.t2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_1($this, hash1);
    var tmp_0;
    if ($this.ow_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.fw_1[offset_0 >> 3].a3((offset_0 & 7) << 3).c3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_1($this);
      index_0 = findFirstAvailableSlot_1($this, hash1);
    }
    $this.iw_1 = $this.iw_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.ow_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.fw_1[offset_1 >> 3].a3((offset_1 & 7) << 3).c3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.ow_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableIntSet.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.fw_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].c3((new Long(255, 0)).z2(b_0).y2()).d3(value.z2(b_0));
    var c = $this.hw_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].c3((new Long(255, 0)).z2(b_1).y2()).d3(value.z2(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_1($this, hash1) {
    var probeMask = $this.hw_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.fw_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].b3(b).d3(tmp0[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.c3(g.y2().z2(7)).c3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_1($this) {
    var tmp;
    if ($this.hw_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.iw_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).u2(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.hw_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).u2(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_1($this, nextCapacity($this.hw_1));
    } else {
      resizeStorage_1($this, nextCapacity($this.hw_1));
    }
  }
  function resizeStorage_1($this, newCapacity) {
    var previousMetadata = $this.fw_1;
    var previousElements = $this.gw_1;
    var previousCapacity = $this.hw_1;
    initializeStorage_1($this, newCapacity);
    var newElements = $this.gw_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].a3((i & 7) << 3).c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousElement, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_1($this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableIntSet.writeMetadata' call
          var value = toLong(tmp$ret$4);
          var m = $this.fw_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
          var c = $this.hw_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].c3((new Long(255, 0)).z2(b_0).y2()).d3(value.z2(b_0));
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableIntSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntSet.call(this);
    this.ow_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntSet.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_1(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntSet).nv = function (element) {
    var oldSize = this.iw_1;
    var index = findAbsoluteInsertIndex_0(this, element);
    this.gw_1[index] = element;
    return !(this.iw_1 === oldSize);
  };
  var properties_initialized_IntSet_kt_za7tcl;
  function _init_properties_IntSet_kt__km4dgt() {
    if (!properties_initialized_IntSet_kt_za7tcl) {
      properties_initialized_IntSet_kt_za7tcl = true;
      EmptyIntSet = new MutableIntSet(0);
      EmptyIntArray = new Int32Array(0);
    }
  }
  function initializeStorage_2($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.sw_1 = newCapacity;
    initializeMetadata_2($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.qw_1 = fillArrayVal(Array(newCapacity), null);
    $this.rw_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_2($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableObjectIntMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.pw_1 = tmp_0;
    var tmp2 = $this.pw_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
    initializeGrowth_2($this);
  }
  function initializeGrowth_2($this) {
    $this.zw_1 = loadedCapacity($this.dv()) - $this.tw_1 | 0;
  }
  function findIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.sw_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.pw_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).u2(toLong(hash2));
      var x = g.e3(tmp$ret$5);
      var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.qw_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.c3(this_1.t2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_2($this, hash1);
    var tmp_0;
    if ($this.zw_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.pw_1[offset_0 >> 3].a3((offset_0 & 7) << 3).c3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_2($this);
      index_0 = findFirstAvailableSlot_2($this, hash1);
    }
    $this.tw_1 = $this.tw_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.zw_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.pw_1[offset_1 >> 3].a3((offset_1 & 7) << 3).c3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.zw_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableObjectIntMap.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.pw_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].c3((new Long(255, 0)).z2(b_0).y2()).d3(value.z2(b_0));
    var c = $this.sw_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].c3((new Long(255, 0)).z2(b_1).y2()).d3(value.z2(b_1));
    return ~index_0;
  }
  function findFirstAvailableSlot_2($this, hash1) {
    var probeMask = $this.sw_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.pw_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].b3(b).d3(tmp0[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.c3(g.y2().z2(7)).c3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_2($this) {
    var tmp;
    if ($this.sw_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.tw_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).u2(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.sw_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).u2(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_2($this, nextCapacity($this.sw_1));
    } else {
      resizeStorage_2($this, nextCapacity($this.sw_1));
    }
  }
  function resizeStorage_2($this, newCapacity) {
    var previousMetadata = $this.pw_1;
    var previousKeys = $this.qw_1;
    var previousValues = $this.rw_1;
    var previousCapacity = $this.sw_1;
    initializeStorage_2($this, newCapacity);
    var newKeys = $this.qw_1;
    var newValues = $this.rw_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].a3((i & 7) << 3).c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_2($this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableObjectIntMap.writeMetadata' call
          var value = toLong(tmp$ret$5);
          var m = $this.pw_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
          var c = $this.sw_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].c3((new Long(255, 0)).z2(b_0).y2()).d3(value.z2(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableObjectIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ObjectIntMap.call(this);
    this.zw_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableObjectIntMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_2(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectIntMap).ax = function (key, value, default_0) {
    var index = findIndex(this, key);
    var previous = default_0;
    if (index < 0) {
      index = ~index;
    } else {
      previous = this.rw_1[index];
    }
    this.qw_1[index] = key;
    this.rw_1[index] = value;
    return previous;
  };
  protoOf(MutableObjectIntMap).bx = function (index) {
    this.tw_1 = this.tw_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableObjectIntMap.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.pw_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
    var c = this.sw_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].c3((new Long(255, 0)).z2(b_0).y2()).d3(value.z2(b_0));
    this.qw_1[index] = null;
  };
  function ObjectIntMap() {
    this.pw_1 = get_EmptyGroup();
    this.qw_1 = get_EMPTY_OBJECTS();
    this.rw_1 = get_EmptyIntArray();
    this.sw_1 = 0;
    this.tw_1 = 0;
  }
  protoOf(ObjectIntMap).dv = function () {
    return this.sw_1;
  };
  protoOf(ObjectIntMap).m = function () {
    return this.tw_1;
  };
  protoOf(ObjectIntMap).q = function () {
    return this.tw_1 === 0;
  };
  protoOf(ObjectIntMap).h2 = function (key) {
    var index = this.cx(key);
    if (index < 0) {
      throw NoSuchElementException_init_$Create$('There is no key ' + toString_0(key) + ' in the map');
    }
    return this.rw_1[index];
  };
  protoOf(ObjectIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.qw_1;
    var v = this.rw_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.pw_1;
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
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectIntMap.hashCode.<anonymous>' call
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp1 == null ? null : hashCode(tmp1);
                  hash = tmp_0 + ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) ^ v[index]) | 0;
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
    return hash;
  };
  protoOf(ObjectIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ObjectIntMap)) {
      return false;
    }
    if (!(other.m() === this.m())) {
      return false;
    }
    var o = other instanceof ObjectIntMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.qw_1;
    var v = this.rw_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.pw_1;
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
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectIntMap.equals.<anonymous>' call
                  if (!(v[index] === o.h2(tmp1))) {
                    return false;
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
    return true;
  };
  protoOf(ObjectIntMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().e8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.qw_1;
    var v = this.rw_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.pw_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.c3(this_0.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectIntMap.toString.<anonymous>' call
                  var value = v[index];
                  s.c8(tmp1 === this ? '(this)' : tmp1);
                  s.d8('=');
                  s.ob(value);
                  i = i + 1 | 0;
                  if (i < this.tw_1) {
                    s.e8(_Char___init__impl__6a9atx(44)).e8(_Char___init__impl__6a9atx(32));
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
         while (!(i_0 === lastIndex));
    }
    return s.e8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectIntMap).cx = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.sw_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = this.pw_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).u2(toLong(hash2));
      var x = g.e3(tmp$ret$5);
      var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.qw_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.c3(this_1.t2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function get_EmptyArray() {
    _init_properties_ObjectList_kt__fnapct();
    return EmptyArray;
  }
  var EmptyArray;
  var EmptyObjectList;
  function ObjectList$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString_0(element);
      }
      return tmp;
    };
  }
  function ObjectList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyArray();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_0 = fillArrayVal(Array(initialCapacity), null);
    }
    tmp.dx_1 = tmp_0;
    this.ex_1 = 0;
  }
  protoOf(ObjectList).m = function () {
    return this.ex_1;
  };
  protoOf(ObjectList).fx = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      // Inline function 'androidx.collection.ObjectList.joinToString.<anonymous>' call
      this_0.i(prefix);
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.dx_1;
      var inductionVariable = 0;
      var last = this.ex_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = content[i];
          // Inline function 'androidx.collection.ObjectList.joinToString.<anonymous>.<anonymous>' call
          var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          if (i === limit) {
            this_0.i(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.i(separator);
          }
          if (transform == null) {
            this_0.c8(element);
          } else {
            this_0.i(transform(element));
          }
        }
         while (inductionVariable < last);
      this_0.i(postfix);
    }
    return this_0.toString();
  };
  protoOf(ObjectList).gx = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.fx(separator, prefix, postfix, limit, truncated, transform) : $super.fx.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ObjectList).hashCode = function () {
    var hashCode_0 = 0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.dx_1;
    var inductionVariable = 0;
    var last = this.ex_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = content[i];
        // Inline function 'androidx.collection.ObjectList.hashCode.<anonymous>' call
        var tmp_0 = hashCode_0;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        hashCode_0 = tmp_0 + imul(31, tmp$ret$0) | 0;
      }
       while (inductionVariable < last);
    return hashCode_0;
  };
  protoOf(ObjectList).equals = function (other) {
    var tmp;
    if (!(other instanceof ObjectList)) {
      tmp = true;
    } else {
      tmp = !(other.ex_1 === this.ex_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.dx_1;
    var otherContent = other.dx_1;
    // Inline function 'androidx.collection.ObjectList.indices' call
    var progression = until(0, this.ex_1);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(content[i], otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(ObjectList).toString = function () {
    return this.gx(VOID, '[', ']', VOID, VOID, ObjectList$toString$lambda(this));
  };
  function MutableObjectList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    ObjectList.call(this, initialCapacity);
    this.jx_1 = null;
  }
  protoOf(MutableObjectList).h = function (element) {
    this.ov(this.ex_1 + 1 | 0);
    this.dx_1[this.ex_1] = element;
    this.ex_1 = this.ex_1 + 1 | 0;
    return true;
  };
  protoOf(MutableObjectList).ov = function (capacity) {
    var oldContent = this.dx_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.dx_1 = copyOf_0(oldContent, newSize);
    }
  };
  var properties_initialized_ObjectList_kt_7isazj;
  function _init_properties_ObjectList_kt__fnapct() {
    if (!properties_initialized_ObjectList_kt_7isazj) {
      properties_initialized_ObjectList_kt_7isazj = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EmptyArray = fillArrayVal(Array(0), null);
      EmptyObjectList = new MutableObjectList(0);
    }
  }
  function get_EmptyGroup() {
    _init_properties_ScatterMap_kt__cygxb2();
    return EmptyGroup;
  }
  var EmptyGroup;
  var EmptyScatterMap;
  function unloadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 8;
    }
    return capacity + ((capacity - 1 | 0) / 7 | 0) | 0;
  }
  function normalizeCapacity(n) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (n > 0) {
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = -1 >>> clz32(n) | 0;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function loadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 6;
    }
    return capacity - (capacity / 8 | 0) | 0;
  }
  function nextCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (capacity === 0) {
      tmp = 6;
    } else {
      tmp = imul(capacity, 2) + 1 | 0;
    }
    return tmp;
  }
  function initializeStorage_3($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.math.max' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.nx_1 = newCapacity;
    initializeMetadata_3($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.lx_1 = fillArrayVal(Array(newCapacity), null);
    var tmp_1 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_1.mx_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_3($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableScatterMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.kx_1 = tmp_0;
    var tmp2 = $this.kx_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
    initializeGrowth_3($this);
  }
  function initializeGrowth_3($this) {
    $this.ux_1 = loadedCapacity($this.dv()) - $this.ox_1 | 0;
  }
  function findFirstAvailableSlot_3($this, hash1) {
    var probeMask = $this.nx_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.kx_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].b3(b).d3(tmp0[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.c3(g.y2().z2(7)).c3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_3($this) {
    var tmp;
    if ($this.nx_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.ox_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).u2(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.nx_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).u2(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_3($this, nextCapacity($this.nx_1));
    } else {
      resizeStorage_3($this, nextCapacity($this.nx_1));
    }
  }
  function resizeStorage_3($this, newCapacity) {
    var previousMetadata = $this.kx_1;
    var previousKeys = $this.lx_1;
    var previousValues = $this.mx_1;
    var previousCapacity = $this.nx_1;
    initializeStorage_3($this, newCapacity);
    var newKeys = $this.lx_1;
    var newValues = $this.mx_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].a3((i & 7) << 3).c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_3($this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableScatterMap.writeMetadata' call
          var value = toLong(tmp$ret$5);
          var m = $this.kx_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
          var c = $this.nx_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].c3((new Long(255, 0)).z2(b_0).y2()).d3(value.z2(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableScatterMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterMap.call(this);
    this.ux_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableScatterMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_3(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterMap).vx = function (key, value) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.collection.MutableScatterMap.set.<anonymous>' call
    var index = this.wx(key);
    var index_0 = index < 0 ? ~index : index;
    this.lx_1[index_0] = key;
    this.mx_1[index_0] = value;
  };
  protoOf(MutableScatterMap).z4 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.nx_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.kx_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).u2(toLong(hash2));
        var x = g.e3(tmp$ret$5);
        var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.lx_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.c3(this_1.t2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    if (index_0 >= 0) {
      return this.dw(index_0);
    }
    return null;
  };
  protoOf(MutableScatterMap).dw = function (index) {
    this.ox_1 = this.ox_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableScatterMap.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.kx_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
    var c = this.nx_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].c3((new Long(255, 0)).z2(b_0).y2()).d3(value.z2(b_0));
    this.lx_1[index] = null;
    var oldValue = this.mx_1[index];
    this.mx_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableScatterMap).wx = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.nx_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = this.kx_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).u2(toLong(hash2));
      var x = g.e3(tmp$ret$5);
      var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.lx_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.c3(this_1.t2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_3(this, hash1);
    var tmp_0;
    if (this.ux_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !this.kx_1[offset_0 >> 3].a3((offset_0 & 7) << 3).c3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_3(this);
      index_0 = findFirstAvailableSlot_3(this, hash1);
    }
    this.ox_1 = this.ox_1 + 1 | 0;
    var tmp_1 = this;
    var tmp_2 = this.ux_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if (this.kx_1[offset_1 >> 3].a3((offset_1 & 7) << 3).c3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.ux_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableScatterMap.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = this.kx_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].c3((new Long(255, 0)).z2(b_0).y2()).d3(value.z2(b_0));
    var c = this.nx_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].c3((new Long(255, 0)).z2(b_1).y2()).d3(value.z2(b_1));
    return ~index_0;
  };
  function ScatterMap() {
    this.kx_1 = get_EmptyGroup();
    this.lx_1 = get_EMPTY_OBJECTS();
    this.mx_1 = get_EMPTY_OBJECTS();
    this.nx_1 = 0;
    this.ox_1 = 0;
  }
  protoOf(ScatterMap).dv = function () {
    return this.nx_1;
  };
  protoOf(ScatterMap).m = function () {
    return this.ox_1;
  };
  protoOf(ScatterMap).q = function () {
    return this.ox_1 === 0;
  };
  protoOf(ScatterMap).h2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.nx_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.kx_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).u2(toLong(hash2));
        var x = g.e3(tmp$ret$5);
        var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.lx_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.c3(this_1.t2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.mx_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(ScatterMap).f2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.nx_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.kx_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).u2(toLong(hash2));
        var x = g.e3(tmp$ret$5);
        var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.lx_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.c3(this_1.t2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.lx_1;
    var v = this.mx_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.kx_1;
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
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  // Inline function 'androidx.collection.ScatterMap.hashCode.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp1 == null ? null : hashCode(tmp1);
                  var tmp_2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs_0 = value == null ? null : hashCode(value);
                  hash = tmp_1 + (tmp_2 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0)) | 0;
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
    return hash;
  };
  protoOf(ScatterMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterMap)) {
      return false;
    }
    if (!(other.m() === this.m())) {
      return false;
    }
    var o = other instanceof ScatterMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.lx_1;
    var v = this.mx_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.kx_1;
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
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  // Inline function 'androidx.collection.ScatterMap.equals.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  if (value == null) {
                    if (!(o.h2(tmp1) == null) || !o.f2(tmp1)) {
                      return false;
                    }
                  } else if (!equals(value, o.h2(tmp1))) {
                    return false;
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
    return true;
  };
  protoOf(ScatterMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().e8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.lx_1;
    var v = this.mx_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.kx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.c3(this_0.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  // Inline function 'androidx.collection.ScatterMap.toString.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  s.c8(tmp1 === this ? '(this)' : tmp1);
                  s.d8('=');
                  s.c8(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.ox_1) {
                    s.e8(_Char___init__impl__6a9atx(44)).e8(_Char___init__impl__6a9atx(32));
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
         while (!(i_0 === lastIndex));
    }
    return s.e8(_Char___init__impl__6a9atx(125)).toString();
  };
  function mutableScatterMapOf() {
    _init_properties_ScatterMap_kt__cygxb2();
    return new MutableScatterMap();
  }
  var properties_initialized_ScatterMap_kt_apzngg;
  function _init_properties_ScatterMap_kt__cygxb2() {
    if (!properties_initialized_ScatterMap_kt_apzngg) {
      properties_initialized_ScatterMap_kt_apzngg = true;
      // Inline function 'kotlin.longArrayOf' call
      EmptyGroup = longArrayOf([new Long(-2139062017, -2139062144), new Long(-1, -1)]);
      EmptyScatterMap = new MutableScatterMap(0);
    }
  }
  var EmptyScatterSet;
  function ScatterSet$SetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.fy_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ScatterSet$SetWrapper$iterator$slambda).az = function ($this$iterator, $completion) {
    var tmp = this.bz($this$iterator, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).q9 = function (p1, $completion) {
    return this.az(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 11;
            var tmp_0 = this;
            tmp_0.hy_1 = this.fy_1;
            this.iy_1 = this.hy_1;
            this.jy_1 = this.iy_1.dz_1;
            var tmp_1 = this;
            tmp_1.ky_1 = this.iy_1;
            this.w8_1 = 1;
            continue $sm;
          case 1:
            this.my_1 = this.ky_1;
            this.ny_1 = this.my_1.cz_1;
            this.oy_1 = this.ny_1.length - 2 | 0;
            this.py_1 = numberRangeToNumber(0, this.oy_1).j();
            this.w8_1 = 2;
            continue $sm;
          case 2:
            if (!this.py_1.k()) {
              this.w8_1 = 9;
              continue $sm;
            }

            this.qy_1 = this.py_1.l();
            this.ry_1 = this.ny_1[this.qy_1];
            var this_0 = this.ry_1;
            if (!this_0.c3(this_0.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.sy_1 = 8 - (~(this.qy_1 - this.oy_1 | 0) >>> 31 | 0) | 0;
              this.ty_1 = until(0, this.sy_1).j();
              this.w8_1 = 3;
              continue $sm;
            } else {
              this.w8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.ty_1.k()) {
              this.w8_1 = 6;
              continue $sm;
            }

            this.uy_1 = this.ty_1.l();
            if (this.ry_1.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
              this.vy_1 = (this.qy_1 << 3) + this.uy_1 | 0;
              var tmp_2 = this;
              tmp_2.wy_1 = this.vy_1;
              this.xy_1 = this.wy_1;
              var tmp_3 = this;
              var tmp_4 = this.jy_1[this.xy_1];
              tmp_3.yy_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
              this.zy_1 = this.yy_1;
              this.w8_1 = 4;
              suspendResult = this.gy_1.se(this.zy_1, this);
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
            this.ry_1 = this.ry_1.a3(8);
            this.w8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.sy_1 === 8)) {
              this.ly_1 = Unit_instance;
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
  protoOf(ScatterSet$SetWrapper$iterator$slambda).bz = function ($this$iterator, completion) {
    var i = new ScatterSet$SetWrapper$iterator$slambda(this.fy_1, completion);
    i.gy_1 = $this$iterator;
    return i;
  };
  function ScatterSet$SetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new ScatterSet$SetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.az($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SetWrapper($outer) {
    this.gz_1 = $outer;
  }
  protoOf(SetWrapper).m = function () {
    return this.gz_1.fz_1;
  };
  protoOf(SetWrapper).u1 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.collection.SetWrapper.containsAll.<anonymous>' call
      if (!this.gz_1.o(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SetWrapper).o = function (element) {
    return this.gz_1.o(element);
  };
  protoOf(SetWrapper).q = function () {
    return this.gz_1.q();
  };
  protoOf(SetWrapper).j = function () {
    return iterator(ScatterSet$SetWrapper$iterator$slambda_0(this.gz_1, null));
  };
  function ScatterSet$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString_0(element);
      }
      return tmp;
    };
  }
  function ScatterSet() {
    this.cz_1 = get_EmptyGroup();
    this.dz_1 = get_EMPTY_OBJECTS();
    this.ez_1 = 0;
    this.fz_1 = 0;
  }
  protoOf(ScatterSet).dv = function () {
    return this.ez_1;
  };
  protoOf(ScatterSet).m = function () {
    return this.fz_1;
  };
  protoOf(ScatterSet).q = function () {
    return this.fz_1 === 0;
  };
  protoOf(ScatterSet).hz = function () {
    return !(this.fz_1 === 0);
  };
  protoOf(ScatterSet).o = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ez_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.cz_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).u2(toLong(hash2));
        var x = g.e3(tmp$ret$5);
        var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.dz_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.c3(this_1.t2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterSet).fx = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.joinToString.<anonymous>' call
      this_0.i(prefix);
      var index = 0;
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.dz_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.cz_1;
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
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp = k[index_0];
                    // Inline function 'androidx.collection.ScatterSet.joinToString.<anonymous>.<anonymous>' call
                    var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    if (index === limit) {
                      this_0.i(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.i(separator);
                    }
                    if (transform == null) {
                      this_0.c8(element);
                    } else {
                      this_0.i(transform(element));
                    }
                    index = index + 1 | 0;
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
      this_0.i(postfix);
    }
    return this_0.toString();
  };
  protoOf(ScatterSet).iz = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.fx(separator, prefix, postfix, limit, truncated, transform) : $super.fx.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ScatterSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.dz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.cz_1;
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
                  // Inline function 'androidx.collection.ScatterSet.hashCode.<anonymous>' call
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp_0 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
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
    return hash;
  };
  protoOf(ScatterSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterSet)) {
      return false;
    }
    if (!(other.m() === this.m())) {
      return false;
    }
    var o = other instanceof ScatterSet ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.dz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.cz_1;
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
                  // Inline function 'androidx.collection.ScatterSet.equals.<anonymous>' call
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!o.o(element)) {
                    return false;
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
    return true;
  };
  protoOf(ScatterSet).toString = function () {
    return this.iz(VOID, '[', ']', VOID, VOID, ScatterSet$toString$lambda(this));
  };
  protoOf(ScatterSet).jz = function () {
    return new SetWrapper(this);
  };
  function MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation) {
    this.sz_1 = this$0;
    this.tz_1 = this$1;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).az = function ($this$iterator, $completion) {
    var tmp = this.bz($this$iterator, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.e9();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).q9 = function (p1, $completion) {
    return this.az(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).e9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 11;
            var tmp_0 = this;
            tmp_0.vz_1 = this.sz_1;
            this.w8_1 = 1;
            continue $sm;
          case 1:
            this.xz_1 = this.vz_1;
            this.yz_1 = this.xz_1.cz_1;
            this.zz_1 = this.yz_1.length - 2 | 0;
            this.a10_1 = numberRangeToNumber(0, this.zz_1).j();
            this.w8_1 = 2;
            continue $sm;
          case 2:
            if (!this.a10_1.k()) {
              this.w8_1 = 9;
              continue $sm;
            }

            this.b10_1 = this.a10_1.l();
            this.c10_1 = this.yz_1[this.b10_1];
            var this_0 = this.c10_1;
            if (!this_0.c3(this_0.y2().z2(7)).c3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.d10_1 = 8 - (~(this.b10_1 - this.zz_1 | 0) >>> 31 | 0) | 0;
              this.e10_1 = until(0, this.d10_1).j();
              this.w8_1 = 3;
              continue $sm;
            } else {
              this.w8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.e10_1.k()) {
              this.w8_1 = 6;
              continue $sm;
            }

            this.f10_1 = this.e10_1.l();
            if (this.c10_1.c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
              this.g10_1 = (this.b10_1 << 3) + this.f10_1 | 0;
              var tmp_1 = this;
              tmp_1.h10_1 = this.g10_1;
              this.i10_1 = this.h10_1;
              this.tz_1.j10_1 = this.i10_1;
              this.w8_1 = 4;
              var tmp_2 = this.sz_1.dz_1[this.i10_1];
              suspendResult = this.uz_1.se((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE(), this);
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
            this.c10_1 = this.c10_1.a3(8);
            this.w8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.d10_1 === 8)) {
              this.wz_1 = Unit_instance;
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
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).bz = function ($this$iterator, completion) {
    var i = new MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this.sz_1, this.tz_1, completion);
    i.uz_1 = $this$iterator;
    return i;
  };
  function MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this$1, resultContinuation) {
    var i = new MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.az($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableScatterSet$MutableSetWrapper$iterator$1(this$0) {
    this.l10_1 = this$0;
    this.j10_1 = -1;
    var tmp = this;
    tmp.k10_1 = iterator(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this, null));
  }
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).k = function () {
    return this.k10_1.k();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).l = function () {
    return this.k10_1.l();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).x3 = function () {
    if (!(this.j10_1 === -1)) {
      this.l10_1.r10(this.j10_1);
      this.j10_1 = -1;
    }
  };
  function initializeStorage_4($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.ez_1 = newCapacity;
    initializeMetadata_4($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.dz_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_4($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableScatterSet.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.cz_1 = tmp_0;
    var tmp2 = $this.cz_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
    initializeGrowth_4($this);
  }
  function initializeGrowth_4($this) {
    $this.q10_1 = loadedCapacity($this.dv()) - $this.fz_1 | 0;
  }
  function findAbsoluteInsertIndex_1($this, element) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.ez_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.cz_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).u2(toLong(hash2));
      var x = g.e3(tmp$ret$5);
      var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.dz_1[index], element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.c3(this_1.t2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_4($this, hash1);
    var tmp_0;
    if ($this.q10_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.cz_1[offset_0 >> 3].a3((offset_0 & 7) << 3).c3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_4($this);
      index_0 = findFirstAvailableSlot_4($this, hash1);
    }
    $this.fz_1 = $this.fz_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.q10_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.cz_1[offset_1 >> 3].a3((offset_1 & 7) << 3).c3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.q10_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableScatterSet.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.cz_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].c3((new Long(255, 0)).z2(b_0).y2()).d3(value.z2(b_0));
    var c = $this.ez_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].c3((new Long(255, 0)).z2(b_1).y2()).d3(value.z2(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_4($this, hash1) {
    var probeMask = $this.ez_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.cz_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].b3(b).d3(tmp0[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.c3(g.y2().z2(7)).c3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_4($this) {
    var tmp;
    if ($this.ez_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.fz_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).u2(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.ez_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).u2(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_4($this, nextCapacity($this.ez_1));
    } else {
      resizeStorage_4($this, nextCapacity($this.ez_1));
    }
  }
  function resizeStorage_4($this, newCapacity) {
    var previousMetadata = $this.cz_1;
    var previousElements = $this.dz_1;
    var previousCapacity = $this.ez_1;
    initializeStorage_4($this, newCapacity);
    var newElements = $this.dz_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].a3((i & 7) << 3).c3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousElement == null ? null : hashCode(previousElement);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_4($this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableScatterSet.writeMetadata' call
          var value = toLong(tmp$ret$5);
          var m = $this.cz_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
          var c = $this.ez_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].c3((new Long(255, 0)).z2(b_0).y2()).d3(value.z2(b_0));
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableSetWrapper($outer) {
    this.t10_1 = $outer;
    SetWrapper.call(this, $outer);
  }
  protoOf(MutableSetWrapper).h = function (element) {
    return this.t10_1.h(element);
  };
  protoOf(MutableSetWrapper).n = function (elements) {
    return this.t10_1.u10(elements);
  };
  protoOf(MutableSetWrapper).y1 = function () {
    this.t10_1.y1();
  };
  protoOf(MutableSetWrapper).j = function () {
    return new MutableScatterSet$MutableSetWrapper$iterator$1(this.t10_1);
  };
  protoOf(MutableSetWrapper).v1 = function (element) {
    return this.t10_1.v1(element);
  };
  protoOf(MutableSetWrapper).x1 = function (elements) {
    var oldSize = this.t10_1.m();
    var tmp0_iterator = elements.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      this.t10_1.v10(element);
    }
    return !(oldSize === this.t10_1.m());
  };
  function MutableScatterSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterSet.call(this);
    this.q10_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableScatterSet.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_4(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterSet).h = function (element) {
    var oldSize = this.m();
    var index = findAbsoluteInsertIndex_1(this, element);
    this.dz_1[index] = element;
    return !(this.m() === oldSize);
  };
  protoOf(MutableScatterSet).w10 = function (element) {
    var index = findAbsoluteInsertIndex_1(this, element);
    this.dz_1[index] = element;
  };
  protoOf(MutableScatterSet).u10 = function (elements) {
    var oldSize = this.m();
    this.x10(elements);
    return !(oldSize === this.m());
  };
  protoOf(MutableScatterSet).y10 = function (elements) {
    var oldSize = this.m();
    this.z10(elements);
    return !(oldSize === this.m());
  };
  protoOf(MutableScatterSet).x10 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.collection.MutableScatterSet.plusAssign.<anonymous>' call
      this.w10(element);
    }
  };
  protoOf(MutableScatterSet).z10 = function (elements) {
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = elements.dz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = elements.cz_1;
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
                  // Inline function 'androidx.collection.MutableScatterSet.plusAssign.<anonymous>' call
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  this.w10(element);
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
  protoOf(MutableScatterSet).v1 = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ez_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.cz_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).u2(toLong(hash2));
        var x = g.e3(tmp$ret$5);
        var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.dz_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.c3(this_1.t2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var exists = index_0 >= 0;
    if (exists) {
      this.r10(index_0);
    }
    return exists;
  };
  protoOf(MutableScatterSet).v10 = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ez_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.cz_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].b3(b).d3(tmp3[i + 1 | 0].z2(64 - b | 0).c3(toLong(b).x2().a3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).u2(toLong(hash2));
        var x = g.e3(tmp$ret$5);
        var m = x.t2(new Long(16843009, 16843009)).c3(x.y2()).c3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.dz_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.c3(this_1.t2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.c3(g.y2().z2(6)).c3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    if (index_0 >= 0) {
      this.r10(index_0);
    }
  };
  protoOf(MutableScatterSet).r10 = function (index) {
    this.fz_1 = this.fz_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableScatterSet.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.cz_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
    var c = this.ez_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].c3((new Long(255, 0)).z2(b_0).y2()).d3(value.z2(b_0));
    this.dz_1[index] = null;
  };
  protoOf(MutableScatterSet).y1 = function () {
    this.fz_1 = 0;
    if (!(this.cz_1 === get_EmptyGroup())) {
      fill(this.cz_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.cz_1;
      var tmp1 = this.ez_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp1 >> 3;
      var b = (tmp1 & 7) << 3;
      tmp0[i] = tmp0[i].c3((new Long(255, 0)).z2(b).y2()).d3(value.z2(b));
    }
    fill_0(this.dz_1, null, 0, this.ez_1);
    initializeGrowth_4(this);
  };
  protoOf(MutableScatterSet).a11 = function () {
    return new MutableSetWrapper(this);
  };
  function mutableScatterSetOf() {
    _init_properties_ScatterSet_kt__vy48mc();
    return new MutableScatterSet();
  }
  function mutableScatterSetOf_0(element1, element2) {
    _init_properties_ScatterSet_kt__vy48mc();
    // Inline function 'kotlin.apply' call
    var this_0 = new MutableScatterSet(2);
    // Inline function 'androidx.collection.mutableScatterSetOf.<anonymous>' call
    this_0.w10(element1);
    this_0.w10(element2);
    return this_0;
  }
  var properties_initialized_ScatterSet_kt_dmj456;
  function _init_properties_ScatterSet_kt__vy48mc() {
    if (!properties_initialized_ScatterSet_kt_dmj456) {
      properties_initialized_ScatterSet_kt_dmj456 = true;
      EmptyScatterSet = new MutableScatterSet(0);
    }
  }
  var EMPTY_INTS;
  var EMPTY_LONGS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      EMPTY_LONGS = longArray(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = fillArrayVal(Array(0), null);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MutableIntIntMap;
  _.$_$.b = MutableIntList;
  _.$_$.c = MutableIntObjectMap;
  _.$_$.d = MutableIntSet;
  _.$_$.e = MutableObjectIntMap;
  _.$_$.f = MutableObjectList;
  _.$_$.g = MutableScatterMap;
  _.$_$.h = MutableScatterSet;
  _.$_$.i = ScatterSet;
  _.$_$.j = mutableScatterMapOf;
  _.$_$.k = mutableScatterSetOf_0;
  _.$_$.l = mutableScatterSetOf;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-collection-collection.js.map
