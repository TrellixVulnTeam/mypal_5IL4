(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("devtools/shared/flags"));
	else if(typeof define === 'function' && define.amd)
		define(["devtools/shared/flags"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("devtools/shared/flags")) : factory(root["devtools/shared/flags"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_121__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/build";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(961);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(6),
	    getPrototype = __webpack_require__(12),
	    isObjectLike = __webpack_require__(14);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(7),
	    getRawTag = __webpack_require__(10),
	    objectToString = __webpack_require__(11);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(8);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(9);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(7);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 11 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(13);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(68);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(69),
	    toKey = __webpack_require__(111);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(70),
	    isKey = __webpack_require__(71),
	    stringToPath = __webpack_require__(73),
	    toString = __webpack_require__(108);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;


/***/ },
/* 70 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(70),
	    isSymbol = __webpack_require__(72);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(6),
	    isObjectLike = __webpack_require__(14);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(74);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(75);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(76);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(77),
	    mapCacheDelete = __webpack_require__(102),
	    mapCacheGet = __webpack_require__(105),
	    mapCacheHas = __webpack_require__(106),
	    mapCacheSet = __webpack_require__(107);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(78),
	    ListCache = __webpack_require__(93),
	    Map = __webpack_require__(101);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(79),
	    hashDelete = __webpack_require__(89),
	    hashGet = __webpack_require__(90),
	    hashHas = __webpack_require__(91),
	    hashSet = __webpack_require__(92);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(80);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(81);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(82),
	    getValue = __webpack_require__(88);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(83),
	    isMasked = __webpack_require__(85),
	    isObject = __webpack_require__(84),
	    toSource = __webpack_require__(87);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(6),
	    isObject = __webpack_require__(84);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(86);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(8);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 87 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 89 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(80);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(80);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(80);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(94),
	    listCacheDelete = __webpack_require__(95),
	    listCacheGet = __webpack_require__(98),
	    listCacheHas = __webpack_require__(99),
	    listCacheSet = __webpack_require__(100);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 94 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(96);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(97);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 97 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(96);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(96);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(96);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(81),
	    root = __webpack_require__(8);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(103);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(104);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 104 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(103);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(103);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(103);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(109);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(7),
	    arrayMap = __webpack_require__(110),
	    isArray = __webpack_require__(70),
	    isSymbol = __webpack_require__(72);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 110 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(72);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var baseSet = __webpack_require__(113);

	/**
	 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	 * it's created. Arrays are created for missing index properties while objects
	 * are created for all other missing properties. Use `_.setWith` to customize
	 * `path` creation.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.set(object, 'a[0].b.c', 4);
	 * console.log(object.a[0].b.c);
	 * // => 4
	 *
	 * _.set(object, ['x', '0', 'y', 'z'], 5);
	 * console.log(object.x[0].y.z);
	 * // => 5
	 */
	function set(object, path, value) {
	  return object == null ? object : baseSet(object, path, value);
	}

	module.exports = set;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(114),
	    castPath = __webpack_require__(69),
	    isIndex = __webpack_require__(117),
	    isObject = __webpack_require__(84),
	    toKey = __webpack_require__(111);

	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet(object, path, value, customizer) {
	  if (!isObject(object)) {
	    return object;
	  }
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;

	  while (nested != null && ++index < length) {
	    var key = toKey(path[index]),
	        newValue = value;

	    if (index != lastIndex) {
	      var objValue = nested[key];
	      newValue = customizer ? customizer(objValue, key, nested) : undefined;
	      if (newValue === undefined) {
	        newValue = isObject(objValue)
	          ? objValue
	          : (isIndex(path[index + 1]) ? [] : {});
	      }
	    }
	    assignValue(nested, key, newValue);
	    nested = nested[key];
	  }
	  return object;
	}

	module.exports = baseSet;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(115),
	    eq = __webpack_require__(97);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(116);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(81);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ },
/* 117 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 118 */
/***/ function(module, exports) {

	

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};

	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};


	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};


	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};


	exports.extname = function(path) {
	  return splitPath(path)[3];
	};

	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(120)))

/***/ },
/* 120 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_121__;

/***/ },
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var createToPairs = __webpack_require__(196),
	    keys = __webpack_require__(205);

	/**
	 * Creates an array of own enumerable string keyed-value pairs for `object`
	 * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
	 * entries are returned.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias entries
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the key-value pairs.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.toPairs(new Foo);
	 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	 */
	var toPairs = createToPairs(keys);

	module.exports = toPairs;


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var baseToPairs = __webpack_require__(197),
	    getTag = __webpack_require__(198),
	    mapToArray = __webpack_require__(203),
	    setToPairs = __webpack_require__(204);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';

	/**
	 * Creates a `_.toPairs` or `_.toPairsIn` function.
	 *
	 * @private
	 * @param {Function} keysFunc The function to get the keys of a given object.
	 * @returns {Function} Returns the new pairs function.
	 */
	function createToPairs(keysFunc) {
	  return function(object) {
	    var tag = getTag(object);
	    if (tag == mapTag) {
	      return mapToArray(object);
	    }
	    if (tag == setTag) {
	      return setToPairs(object);
	    }
	    return baseToPairs(object, keysFunc(object));
	  };
	}

	module.exports = createToPairs;


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(110);

	/**
	 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	 * of key-value pairs for `object` corresponding to the property names of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the key-value pairs.
	 */
	function baseToPairs(object, props) {
	  return arrayMap(props, function(key) {
	    return [key, object[key]];
	  });
	}

	module.exports = baseToPairs;


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(199),
	    Map = __webpack_require__(101),
	    Promise = __webpack_require__(200),
	    Set = __webpack_require__(201),
	    WeakMap = __webpack_require__(202),
	    baseGetTag = __webpack_require__(6),
	    toSource = __webpack_require__(87);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(81),
	    root = __webpack_require__(8);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(81),
	    root = __webpack_require__(8);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(81),
	    root = __webpack_require__(8);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(81),
	    root = __webpack_require__(8);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 203 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 204 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to its value-value pairs.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the value-value pairs.
	 */
	function setToPairs(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = [value, value];
	  });
	  return result;
	}

	module.exports = setToPairs;


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(206),
	    baseKeys = __webpack_require__(217),
	    isArrayLike = __webpack_require__(220);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(207),
	    isArguments = __webpack_require__(208),
	    isArray = __webpack_require__(70),
	    isBuffer = __webpack_require__(210),
	    isIndex = __webpack_require__(117),
	    isTypedArray = __webpack_require__(212);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 207 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(209),
	    isObjectLike = __webpack_require__(14);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(6),
	    isObjectLike = __webpack_require__(14);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(8),
	    stubFalse = __webpack_require__(211);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)(module)))

/***/ },
/* 211 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(213),
	    baseUnary = __webpack_require__(215),
	    nodeUtil = __webpack_require__(216);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(6),
	    isLength = __webpack_require__(214),
	    isObjectLike = __webpack_require__(14);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 214 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 215 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(9);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)(module)))

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(218),
	    nativeKeys = __webpack_require__(219);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ },
/* 218 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(13);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(83),
	    isLength = __webpack_require__(214);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(265),
	    baseMatchesProperty = __webpack_require__(294),
	    identity = __webpack_require__(298),
	    isArray = __webpack_require__(70),
	    property = __webpack_require__(299);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(266),
	    getMatchData = __webpack_require__(291),
	    matchesStrictComparable = __webpack_require__(293);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(267),
	    baseIsEqual = __webpack_require__(273);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(93),
	    stackClear = __webpack_require__(268),
	    stackDelete = __webpack_require__(269),
	    stackGet = __webpack_require__(270),
	    stackHas = __webpack_require__(271),
	    stackSet = __webpack_require__(272);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(93);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ },
/* 269 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ },
/* 270 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 271 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(93),
	    Map = __webpack_require__(101),
	    MapCache = __webpack_require__(76);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(274),
	    isObjectLike = __webpack_require__(14);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(267),
	    equalArrays = __webpack_require__(275),
	    equalByTag = __webpack_require__(281),
	    equalObjects = __webpack_require__(284),
	    getTag = __webpack_require__(198),
	    isArray = __webpack_require__(70),
	    isBuffer = __webpack_require__(210),
	    isTypedArray = __webpack_require__(212);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(276),
	    arraySome = __webpack_require__(279),
	    cacheHas = __webpack_require__(280);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(76),
	    setCacheAdd = __webpack_require__(277),
	    setCacheHas = __webpack_require__(278);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 277 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 278 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 279 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 280 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(7),
	    Uint8Array = __webpack_require__(282),
	    eq = __webpack_require__(97),
	    equalArrays = __webpack_require__(275),
	    mapToArray = __webpack_require__(203),
	    setToArray = __webpack_require__(283);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(8);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 283 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(285);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(286),
	    getSymbols = __webpack_require__(288),
	    keys = __webpack_require__(205);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(287),
	    isArray = __webpack_require__(70);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ },
/* 287 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(289),
	    stubArray = __webpack_require__(290);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	module.exports = getSymbols;


/***/ },
/* 289 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ },
/* 290 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(292),
	    keys = __webpack_require__(205);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(84);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 293 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(273),
	    get = __webpack_require__(67),
	    hasIn = __webpack_require__(295),
	    isKey = __webpack_require__(71),
	    isStrictComparable = __webpack_require__(292),
	    matchesStrictComparable = __webpack_require__(293),
	    toKey = __webpack_require__(111);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(296),
	    hasPath = __webpack_require__(297);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 296 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(69),
	    isArguments = __webpack_require__(208),
	    isArray = __webpack_require__(70),
	    isIndex = __webpack_require__(117),
	    isLength = __webpack_require__(214),
	    toKey = __webpack_require__(111);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 298 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(300),
	    basePropertyDeep = __webpack_require__(301),
	    isKey = __webpack_require__(71),
	    toKey = __webpack_require__(111);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 300 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(68);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(303);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(304);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(84),
	    isSymbol = __webpack_require__(72);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(8);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)(module)))

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(400);

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	module.exports = cloneTypedArray;


/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(282);

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	module.exports = cloneArrayBuffer;


/***/ },
/* 401 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(403),
	    getPrototype = __webpack_require__(12),
	    isPrototype = __webpack_require__(218);

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(84);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	module.exports = baseCreate;


/***/ },
/* 404 */,
/* 405 */,
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(114),
	    baseAssignValue = __webpack_require__(115);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(206),
	    baseKeysIn = __webpack_require__(408),
	    isArrayLike = __webpack_require__(220);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(84),
	    isPrototype = __webpack_require__(218),
	    nativeKeysIn = __webpack_require__(409);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ },
/* 409 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(411),
	    isIterateeCall = __webpack_require__(418);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(298),
	    overRest = __webpack_require__(412),
	    setToString = __webpack_require__(414);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(413);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ },
/* 413 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(415),
	    shortOut = __webpack_require__(417);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(416),
	    defineProperty = __webpack_require__(116),
	    identity = __webpack_require__(298);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ },
/* 416 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ },
/* 417 */
/***/ function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(97),
	    isArrayLike = __webpack_require__(220),
	    isIndex = __webpack_require__(117),
	    isObject = __webpack_require__(84);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	/* eslint max-len: 0 */

	// This is a trick taken from Esprima. It turns out that, on
	// non-Chrome browsers, to check whether a string is in a set, a
	// predicate containing a big ugly `switch` statement is faster than
	// a regular expression, and on Chrome the two are about on par.
	// This function uses `eval` (non-lexical) to produce such a
	// predicate from a space-separated string of words.
	//
	// It starts by sorting the words by length.

	function makePredicate(words) {
	  words = words.split(" ");
	  return function (str) {
	    return words.indexOf(str) >= 0;
	  };
	}

	// Reserved word lists for various dialects of the language

	var reservedWords = {
	  6: makePredicate("enum await"),
	  strict: makePredicate("implements interface let package private protected public static yield"),
	  strictBind: makePredicate("eval arguments")
	};

	// And the keywords

	var isKeyword = makePredicate("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this let const class extends export import yield super");

	// ## Character categories

	// Big ugly regular expressions that match characters in the
	// whitespace, identifier, and identifier-start categories. These
	// are only applied when a character is found to actually have a
	// code point above 128.
	// Generated by `bin/generate-identifier-regex.js`.

	var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
	var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA900-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";

	var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
	var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

	nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;

	// These are a run-length and offset encoded representation of the
	// >0xffff code points that are a valid part of identifiers. The
	// offset starts at 0x10000, and each pair of numbers represents an
	// offset to the next range, and then a size of the range. They were
	// generated by `bin/generate-identifier-regex.js`.
	// eslint-disable-next-line comma-spacing
	var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 17, 26, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 26, 45, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 785, 52, 76, 44, 33, 24, 27, 35, 42, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 54, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 86, 25, 391, 63, 32, 0, 449, 56, 264, 8, 2, 36, 18, 0, 50, 29, 881, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 881, 68, 12, 0, 67, 12, 65, 0, 32, 6124, 20, 754, 9486, 1, 3071, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 4149, 196, 60, 67, 1213, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 10591, 541];
	// eslint-disable-next-line comma-spacing
	var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 1306, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 52, 0, 13, 2, 49, 13, 10, 2, 4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 57, 0, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 87, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 423, 9, 838, 7, 2, 7, 17, 9, 57, 21, 2, 13, 19882, 9, 135, 4, 60, 6, 26, 9, 1016, 45, 17, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 2214, 6, 110, 6, 6, 9, 792487, 239];

	// This has a complexity linear to the value of the code. The
	// assumption is that looking up astral identifier characters is
	// rare.
	function isInAstralSet(code, set) {
	  var pos = 0x10000;
	  for (var i = 0; i < set.length; i += 2) {
	    pos += set[i];
	    if (pos > code) return false;

	    pos += set[i + 1];
	    if (pos >= code) return true;
	  }
	}

	// Test whether a given character code starts an identifier.

	function isIdentifierStart(code) {
	  if (code < 65) return code === 36;
	  if (code < 91) return true;
	  if (code < 97) return code === 95;
	  if (code < 123) return true;
	  if (code <= 0xffff) return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
	  return isInAstralSet(code, astralIdentifierStartCodes);
	}

	// Test whether a given character is part of an identifier.

	function isIdentifierChar(code) {
	  if (code < 48) return code === 36;
	  if (code < 58) return true;
	  if (code < 65) return false;
	  if (code < 91) return true;
	  if (code < 97) return code === 95;
	  if (code < 123) return true;
	  if (code <= 0xffff) return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
	  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
	}

	// A second optional argument can be given to further configure
	var defaultOptions = {
	  // Source type ("script" or "module") for different semantics
	  sourceType: "script",
	  // Source filename.
	  sourceFilename: undefined,
	  // Line from which to start counting source. Useful for
	  // integration with other tools.
	  startLine: 1,
	  // When enabled, a return at the top level is not considered an
	  // error.
	  allowReturnOutsideFunction: false,
	  // When enabled, import/export statements are not constrained to
	  // appearing at the top of the program.
	  allowImportExportEverywhere: false,
	  // TODO
	  allowSuperOutsideMethod: false,
	  // An array of plugins to enable
	  plugins: [],
	  // TODO
	  strictMode: null
	};

	// Interpret and default an options object

	function getOptions(opts) {
	  var options = {};
	  for (var key in defaultOptions) {
	    options[key] = opts && key in opts ? opts[key] : defaultOptions[key];
	  }
	  return options;
	}

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};











	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};











	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};











	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	// ## Token types

	// The assignment of fine-grained, information-carrying type objects
	// allows the tokenizer to store the information it has about a
	// token in a way that is very cheap for the parser to look up.

	// All token type variables start with an underscore, to make them
	// easy to recognize.

	// The `beforeExpr` property is used to disambiguate between regular
	// expressions and divisions. It is set on all token types that can
	// be followed by an expression (thus, a slash after them would be a
	// regular expression).
	//
	// `isLoop` marks a keyword as starting a loop, which is important
	// to know when parsing a label, in order to allow or disallow
	// continue jumps to that label.

	var beforeExpr = true;
	var startsExpr = true;
	var isLoop = true;
	var isAssign = true;
	var prefix = true;
	var postfix = true;

	var TokenType = function TokenType(label) {
	  var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  classCallCheck(this, TokenType);

	  this.label = label;
	  this.keyword = conf.keyword;
	  this.beforeExpr = !!conf.beforeExpr;
	  this.startsExpr = !!conf.startsExpr;
	  this.rightAssociative = !!conf.rightAssociative;
	  this.isLoop = !!conf.isLoop;
	  this.isAssign = !!conf.isAssign;
	  this.prefix = !!conf.prefix;
	  this.postfix = !!conf.postfix;
	  this.binop = conf.binop || null;
	  this.updateContext = null;
	};

	var KeywordTokenType = function (_TokenType) {
	  inherits(KeywordTokenType, _TokenType);

	  function KeywordTokenType(name) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    classCallCheck(this, KeywordTokenType);

	    options.keyword = name;

	    return possibleConstructorReturn(this, _TokenType.call(this, name, options));
	  }

	  return KeywordTokenType;
	}(TokenType);

	var BinopTokenType = function (_TokenType2) {
	  inherits(BinopTokenType, _TokenType2);

	  function BinopTokenType(name, prec) {
	    classCallCheck(this, BinopTokenType);
	    return possibleConstructorReturn(this, _TokenType2.call(this, name, { beforeExpr: beforeExpr, binop: prec }));
	  }

	  return BinopTokenType;
	}(TokenType);

	var types = {
	  num: new TokenType("num", { startsExpr: startsExpr }),
	  regexp: new TokenType("regexp", { startsExpr: startsExpr }),
	  string: new TokenType("string", { startsExpr: startsExpr }),
	  name: new TokenType("name", { startsExpr: startsExpr }),
	  eof: new TokenType("eof"),

	  // Punctuation token types.
	  bracketL: new TokenType("[", { beforeExpr: beforeExpr, startsExpr: startsExpr }),
	  bracketR: new TokenType("]"),
	  braceL: new TokenType("{", { beforeExpr: beforeExpr, startsExpr: startsExpr }),
	  braceBarL: new TokenType("{|", { beforeExpr: beforeExpr, startsExpr: startsExpr }),
	  braceR: new TokenType("}"),
	  braceBarR: new TokenType("|}"),
	  parenL: new TokenType("(", { beforeExpr: beforeExpr, startsExpr: startsExpr }),
	  parenR: new TokenType(")"),
	  comma: new TokenType(",", { beforeExpr: beforeExpr }),
	  semi: new TokenType(";", { beforeExpr: beforeExpr }),
	  colon: new TokenType(":", { beforeExpr: beforeExpr }),
	  doubleColon: new TokenType("::", { beforeExpr: beforeExpr }),
	  dot: new TokenType("."),
	  question: new TokenType("?", { beforeExpr: beforeExpr }),
	  arrow: new TokenType("=>", { beforeExpr: beforeExpr }),
	  template: new TokenType("template"),
	  ellipsis: new TokenType("...", { beforeExpr: beforeExpr }),
	  backQuote: new TokenType("`", { startsExpr: startsExpr }),
	  dollarBraceL: new TokenType("${", { beforeExpr: beforeExpr, startsExpr: startsExpr }),
	  at: new TokenType("@"),

	  // Operators. These carry several kinds of properties to help the
	  // parser use them properly (the presence of these properties is
	  // what categorizes them as operators).
	  //
	  // `binop`, when present, specifies that this operator is a binary
	  // operator, and will refer to its precedence.
	  //
	  // `prefix` and `postfix` mark the operator as a prefix or postfix
	  // unary operator.
	  //
	  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
	  // binary operators with a very low precedence, that should result
	  // in AssignmentExpression nodes.

	  eq: new TokenType("=", { beforeExpr: beforeExpr, isAssign: isAssign }),
	  assign: new TokenType("_=", { beforeExpr: beforeExpr, isAssign: isAssign }),
	  incDec: new TokenType("++/--", { prefix: prefix, postfix: postfix, startsExpr: startsExpr }),
	  prefix: new TokenType("prefix", { beforeExpr: beforeExpr, prefix: prefix, startsExpr: startsExpr }),
	  logicalOR: new BinopTokenType("||", 1),
	  logicalAND: new BinopTokenType("&&", 2),
	  bitwiseOR: new BinopTokenType("|", 3),
	  bitwiseXOR: new BinopTokenType("^", 4),
	  bitwiseAND: new BinopTokenType("&", 5),
	  equality: new BinopTokenType("==/!=", 6),
	  relational: new BinopTokenType("</>", 7),
	  bitShift: new BinopTokenType("<</>>", 8),
	  plusMin: new TokenType("+/-", { beforeExpr: beforeExpr, binop: 9, prefix: prefix, startsExpr: startsExpr }),
	  modulo: new BinopTokenType("%", 10),
	  star: new BinopTokenType("*", 10),
	  slash: new BinopTokenType("/", 10),
	  exponent: new TokenType("**", { beforeExpr: beforeExpr, binop: 11, rightAssociative: true })
	};

	var keywords = {
	  "break": new KeywordTokenType("break"),
	  "case": new KeywordTokenType("case", { beforeExpr: beforeExpr }),
	  "catch": new KeywordTokenType("catch"),
	  "continue": new KeywordTokenType("continue"),
	  "debugger": new KeywordTokenType("debugger"),
	  "default": new KeywordTokenType("default", { beforeExpr: beforeExpr }),
	  "do": new KeywordTokenType("do", { isLoop: isLoop, beforeExpr: beforeExpr }),
	  "else": new KeywordTokenType("else", { beforeExpr: beforeExpr }),
	  "finally": new KeywordTokenType("finally"),
	  "for": new KeywordTokenType("for", { isLoop: isLoop }),
	  "function": new KeywordTokenType("function", { startsExpr: startsExpr }),
	  "if": new KeywordTokenType("if"),
	  "return": new KeywordTokenType("return", { beforeExpr: beforeExpr }),
	  "switch": new KeywordTokenType("switch"),
	  "throw": new KeywordTokenType("throw", { beforeExpr: beforeExpr }),
	  "try": new KeywordTokenType("try"),
	  "var": new KeywordTokenType("var"),
	  "let": new KeywordTokenType("let"),
	  "const": new KeywordTokenType("const"),
	  "while": new KeywordTokenType("while", { isLoop: isLoop }),
	  "with": new KeywordTokenType("with"),
	  "new": new KeywordTokenType("new", { beforeExpr: beforeExpr, startsExpr: startsExpr }),
	  "this": new KeywordTokenType("this", { startsExpr: startsExpr }),
	  "super": new KeywordTokenType("super", { startsExpr: startsExpr }),
	  "class": new KeywordTokenType("class"),
	  "extends": new KeywordTokenType("extends", { beforeExpr: beforeExpr }),
	  "export": new KeywordTokenType("export"),
	  "import": new KeywordTokenType("import", { startsExpr: startsExpr }),
	  "yield": new KeywordTokenType("yield", { beforeExpr: beforeExpr, startsExpr: startsExpr }),
	  "null": new KeywordTokenType("null", { startsExpr: startsExpr }),
	  "true": new KeywordTokenType("true", { startsExpr: startsExpr }),
	  "false": new KeywordTokenType("false", { startsExpr: startsExpr }),
	  "in": new KeywordTokenType("in", { beforeExpr: beforeExpr, binop: 7 }),
	  "instanceof": new KeywordTokenType("instanceof", { beforeExpr: beforeExpr, binop: 7 }),
	  "typeof": new KeywordTokenType("typeof", { beforeExpr: beforeExpr, prefix: prefix, startsExpr: startsExpr }),
	  "void": new KeywordTokenType("void", { beforeExpr: beforeExpr, prefix: prefix, startsExpr: startsExpr }),
	  "delete": new KeywordTokenType("delete", { beforeExpr: beforeExpr, prefix: prefix, startsExpr: startsExpr })
	};

	// Map keyword names to token types.
	Object.keys(keywords).forEach(function (name) {
	  types["_" + name] = keywords[name];
	});

	// Matches a whole line break (where CRLF is considered a single
	// line break). Used to count lines.

	var lineBreak = /\r\n?|\n|\u2028|\u2029/;
	var lineBreakG = new RegExp(lineBreak.source, "g");

	function isNewLine(code) {
	  return code === 10 || code === 13 || code === 0x2028 || code === 0x2029;
	}

	var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;

	// The algorithm used to determine whether a regexp can appear at a
	// given point in the program is loosely based on sweet.js' approach.
	// See https://github.com/mozilla/sweet.js/wiki/design

	var TokContext = function TokContext(token, isExpr, preserveSpace, override) {
	  classCallCheck(this, TokContext);

	  this.token = token;
	  this.isExpr = !!isExpr;
	  this.preserveSpace = !!preserveSpace;
	  this.override = override;
	};

	var types$1 = {
	  braceStatement: new TokContext("{", false),
	  braceExpression: new TokContext("{", true),
	  templateQuasi: new TokContext("${", true),
	  parenStatement: new TokContext("(", false),
	  parenExpression: new TokContext("(", true),
	  template: new TokContext("`", true, true, function (p) {
	    return p.readTmplToken();
	  }),
	  functionExpression: new TokContext("function", true)
	};

	// Token-specific context update code

	types.parenR.updateContext = types.braceR.updateContext = function () {
	  if (this.state.context.length === 1) {
	    this.state.exprAllowed = true;
	    return;
	  }

	  var out = this.state.context.pop();
	  if (out === types$1.braceStatement && this.curContext() === types$1.functionExpression) {
	    this.state.context.pop();
	    this.state.exprAllowed = false;
	  } else if (out === types$1.templateQuasi) {
	    this.state.exprAllowed = true;
	  } else {
	    this.state.exprAllowed = !out.isExpr;
	  }
	};

	types.name.updateContext = function (prevType) {
	  this.state.exprAllowed = false;

	  if (prevType === types._let || prevType === types._const || prevType === types._var) {
	    if (lineBreak.test(this.input.slice(this.state.end))) {
	      this.state.exprAllowed = true;
	    }
	  }
	};

	types.braceL.updateContext = function (prevType) {
	  this.state.context.push(this.braceIsBlock(prevType) ? types$1.braceStatement : types$1.braceExpression);
	  this.state.exprAllowed = true;
	};

	types.dollarBraceL.updateContext = function () {
	  this.state.context.push(types$1.templateQuasi);
	  this.state.exprAllowed = true;
	};

	types.parenL.updateContext = function (prevType) {
	  var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
	  this.state.context.push(statementParens ? types$1.parenStatement : types$1.parenExpression);
	  this.state.exprAllowed = true;
	};

	types.incDec.updateContext = function () {
	  // tokExprAllowed stays unchanged
	};

	types._function.updateContext = function () {
	  if (this.curContext() !== types$1.braceStatement) {
	    this.state.context.push(types$1.functionExpression);
	  }

	  this.state.exprAllowed = false;
	};

	types.backQuote.updateContext = function () {
	  if (this.curContext() === types$1.template) {
	    this.state.context.pop();
	  } else {
	    this.state.context.push(types$1.template);
	  }
	  this.state.exprAllowed = false;
	};

	// These are used when `options.locations` is on, for the
	// `startLoc` and `endLoc` properties.

	var Position = function Position(line, col) {
	  classCallCheck(this, Position);

	  this.line = line;
	  this.column = col;
	};

	var SourceLocation = function SourceLocation(start, end) {
	  classCallCheck(this, SourceLocation);

	  this.start = start;
	  this.end = end;
	};

	// The `getLineInfo` function is mostly useful when the
	// `locations` option is off (for performance reasons) and you
	// want to find the line/column position for a given character
	// offset. `input` should be the code string that the offset refers
	// into.

	function getLineInfo(input, offset) {
	  for (var line = 1, cur = 0;;) {
	    lineBreakG.lastIndex = cur;
	    var match = lineBreakG.exec(input);
	    if (match && match.index < offset) {
	      ++line;
	      cur = match.index + match[0].length;
	    } else {
	      return new Position(line, offset - cur);
	    }
	  }
	}

	var State = function () {
	  function State() {
	    classCallCheck(this, State);
	  }

	  State.prototype.init = function init(options, input) {
	    this.strict = options.strictMode === false ? false : options.sourceType === "module";

	    this.input = input;

	    this.potentialArrowAt = -1;

	    this.inMethod = this.inFunction = this.inGenerator = this.inAsync = this.inPropertyName = this.inType = this.inClassProperty = this.noAnonFunctionType = false;

	    this.labels = [];

	    this.decorators = [];

	    this.tokens = [];

	    this.comments = [];

	    this.trailingComments = [];
	    this.leadingComments = [];
	    this.commentStack = [];

	    this.pos = this.lineStart = 0;
	    this.curLine = options.startLine;

	    this.type = types.eof;
	    this.value = null;
	    this.start = this.end = this.pos;
	    this.startLoc = this.endLoc = this.curPosition();

	    this.lastTokEndLoc = this.lastTokStartLoc = null;
	    this.lastTokStart = this.lastTokEnd = this.pos;

	    this.context = [types$1.braceStatement];
	    this.exprAllowed = true;

	    this.containsEsc = this.containsOctal = false;
	    this.octalPosition = null;

	    this.invalidTemplateEscapePosition = null;

	    this.exportedIdentifiers = [];

	    return this;
	  };

	  // TODO


	  // TODO


	  // Used to signify the start of a potential arrow function


	  // Flags to track whether we are in a function, a generator.


	  // Labels in scope.


	  // Leading decorators.


	  // Token store.


	  // Comment store.


	  // Comment attachment store


	  // The current position of the tokenizer in the input.


	  // Properties of the current token:
	  // Its type


	  // For tokens that include more information than their type, the value


	  // Its start and end offset


	  // And, if locations are used, the {line, column} object
	  // corresponding to those offsets


	  // Position information for the previous token


	  // The context stack is used to superficially track syntactic
	  // context to predict whether a regular expression is allowed in a
	  // given position.


	  // Used to signal to callers of `readWord1` whether the word
	  // contained any escape sequences. This is needed because words with
	  // escape sequences must not be interpreted as keywords.


	  // TODO


	  // Names of exports store. `default` is stored as a name for both
	  // `export default foo;` and `export { foo as default };`.


	  State.prototype.curPosition = function curPosition() {
	    return new Position(this.curLine, this.pos - this.lineStart);
	  };

	  State.prototype.clone = function clone(skipArrays) {
	    var state = new State();
	    for (var key in this) {
	      var val = this[key];

	      if ((!skipArrays || key === "context") && Array.isArray(val)) {
	        val = val.slice();
	      }

	      state[key] = val;
	    }
	    return state;
	  };

	  return State;
	}();

	// Object type used to represent tokens. Note that normally, tokens
	// simply exist as properties on the parser object. This is only
	// used for the onToken callback and the external tokenizer.

	var Token = function Token(state) {
	  classCallCheck(this, Token);

	  this.type = state.type;
	  this.value = state.value;
	  this.start = state.start;
	  this.end = state.end;
	  this.loc = new SourceLocation(state.startLoc, state.endLoc);
	};

	// ## Tokenizer

	function codePointToString(code) {
	  // UTF-16 Decoding
	  if (code <= 0xFFFF) {
	    return String.fromCharCode(code);
	  } else {
	    return String.fromCharCode((code - 0x10000 >> 10) + 0xD800, (code - 0x10000 & 1023) + 0xDC00);
	  }
	}

	var Tokenizer = function () {
	  function Tokenizer(options, input) {
	    classCallCheck(this, Tokenizer);

	    this.state = new State();
	    this.state.init(options, input);
	  }

	  // Move to the next token

	  Tokenizer.prototype.next = function next() {
	    if (!this.isLookahead) {
	      this.state.tokens.push(new Token(this.state));
	    }

	    this.state.lastTokEnd = this.state.end;
	    this.state.lastTokStart = this.state.start;
	    this.state.lastTokEndLoc = this.state.endLoc;
	    this.state.lastTokStartLoc = this.state.startLoc;
	    this.nextToken();
	  };

	  // TODO

	  Tokenizer.prototype.eat = function eat(type) {
	    if (this.match(type)) {
	      this.next();
	      return true;
	    } else {
	      return false;
	    }
	  };

	  // TODO

	  Tokenizer.prototype.match = function match(type) {
	    return this.state.type === type;
	  };

	  // TODO

	  Tokenizer.prototype.isKeyword = function isKeyword$$1(word) {
	    return isKeyword(word);
	  };

	  // TODO

	  Tokenizer.prototype.lookahead = function lookahead() {
	    var old = this.state;
	    this.state = old.clone(true);

	    this.isLookahead = true;
	    this.next();
	    this.isLookahead = false;

	    var curr = this.state.clone(true);
	    this.state = old;
	    return curr;
	  };

	  // Toggle strict mode. Re-reads the next number or string to please
	  // pedantic tests (`"use strict"; 010;` should fail).

	  Tokenizer.prototype.setStrict = function setStrict(strict) {
	    this.state.strict = strict;
	    if (!this.match(types.num) && !this.match(types.string)) return;
	    this.state.pos = this.state.start;
	    while (this.state.pos < this.state.lineStart) {
	      this.state.lineStart = this.input.lastIndexOf("\n", this.state.lineStart - 2) + 1;
	      --this.state.curLine;
	    }
	    this.nextToken();
	  };

	  Tokenizer.prototype.curContext = function curContext() {
	    return this.state.context[this.state.context.length - 1];
	  };

	  // Read a single token, updating the parser object's token-related
	  // properties.

	  Tokenizer.prototype.nextToken = function nextToken() {
	    var curContext = this.curContext();
	    if (!curContext || !curContext.preserveSpace) this.skipSpace();

	    this.state.containsOctal = false;
	    this.state.octalPosition = null;
	    this.state.start = this.state.pos;
	    this.state.startLoc = this.state.curPosition();
	    if (this.state.pos >= this.input.length) return this.finishToken(types.eof);

	    if (curContext.override) {
	      return curContext.override(this);
	    } else {
	      return this.readToken(this.fullCharCodeAtPos());
	    }
	  };

	  Tokenizer.prototype.readToken = function readToken(code) {
	    // Identifier or keyword. '\uXXXX' sequences are allowed in
	    // identifiers, so '\' also dispatches to that.
	    if (isIdentifierStart(code) || code === 92 /* '\' */) {
	        return this.readWord();
	      } else {
	      return this.getTokenFromCode(code);
	    }
	  };

	  Tokenizer.prototype.fullCharCodeAtPos = function fullCharCodeAtPos() {
	    var code = this.input.charCodeAt(this.state.pos);
	    if (code <= 0xd7ff || code >= 0xe000) return code;

	    var next = this.input.charCodeAt(this.state.pos + 1);
	    return (code << 10) + next - 0x35fdc00;
	  };

	  Tokenizer.prototype.pushComment = function pushComment(block, text, start, end, startLoc, endLoc) {
	    var comment = {
	      type: block ? "CommentBlock" : "CommentLine",
	      value: text,
	      start: start,
	      end: end,
	      loc: new SourceLocation(startLoc, endLoc)
	    };

	    if (!this.isLookahead) {
	      this.state.tokens.push(comment);
	      this.state.comments.push(comment);
	      this.addComment(comment);
	    }
	  };

	  Tokenizer.prototype.skipBlockComment = function skipBlockComment() {
	    var startLoc = this.state.curPosition();
	    var start = this.state.pos;
	    var end = this.input.indexOf("*/", this.state.pos += 2);
	    if (end === -1) this.raise(this.state.pos - 2, "Unterminated comment");

	    this.state.pos = end + 2;
	    lineBreakG.lastIndex = start;
	    var match = void 0;
	    while ((match = lineBreakG.exec(this.input)) && match.index < this.state.pos) {
	      ++this.state.curLine;
	      this.state.lineStart = match.index + match[0].length;
	    }

	    this.pushComment(true, this.input.slice(start + 2, end), start, this.state.pos, startLoc, this.state.curPosition());
	  };

	  Tokenizer.prototype.skipLineComment = function skipLineComment(startSkip) {
	    var start = this.state.pos;
	    var startLoc = this.state.curPosition();
	    var ch = this.input.charCodeAt(this.state.pos += startSkip);
	    while (this.state.pos < this.input.length && ch !== 10 && ch !== 13 && ch !== 8232 && ch !== 8233) {
	      ++this.state.pos;
	      ch = this.input.charCodeAt(this.state.pos);
	    }

	    this.pushComment(false, this.input.slice(start + startSkip, this.state.pos), start, this.state.pos, startLoc, this.state.curPosition());
	  };

	  // Called at the start of the parse and after every token. Skips
	  // whitespace and comments, and.

	  Tokenizer.prototype.skipSpace = function skipSpace() {
	    loop: while (this.state.pos < this.input.length) {
	      var ch = this.input.charCodeAt(this.state.pos);
	      switch (ch) {
	        case 32:case 160:
	          // ' '
	          ++this.state.pos;
	          break;

	        case 13:
	          if (this.input.charCodeAt(this.state.pos + 1) === 10) {
	            ++this.state.pos;
	          }

	        case 10:case 8232:case 8233:
	          ++this.state.pos;
	          ++this.state.curLine;
	          this.state.lineStart = this.state.pos;
	          break;

	        case 47:
	          // '/'
	          switch (this.input.charCodeAt(this.state.pos + 1)) {
	            case 42:
	              // '*'
	              this.skipBlockComment();
	              break;

	            case 47:
	              this.skipLineComment(2);
	              break;

	            default:
	              break loop;
	          }
	          break;

	        default:
	          if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
	            ++this.state.pos;
	          } else {
	            break loop;
	          }
	      }
	    }
	  };

	  // Called at the end of every token. Sets `end`, `val`, and
	  // maintains `context` and `exprAllowed`, and skips the space after
	  // the token, so that the next one's `start` will point at the
	  // right position.

	  Tokenizer.prototype.finishToken = function finishToken(type, val) {
	    this.state.end = this.state.pos;
	    this.state.endLoc = this.state.curPosition();
	    var prevType = this.state.type;
	    this.state.type = type;
	    this.state.value = val;

	    this.updateContext(prevType);
	  };

	  // ### Token reading

	  // This is the function that is called to fetch the next token. It
	  // is somewhat obscure, because it works in character codes rather
	  // than characters, and because operator parsing has been inlined
	  // into it.
	  //
	  // All in the name of speed.
	  //


	  Tokenizer.prototype.readToken_dot = function readToken_dot() {
	    var next = this.input.charCodeAt(this.state.pos + 1);
	    if (next >= 48 && next <= 57) {
	      return this.readNumber(true);
	    }

	    var next2 = this.input.charCodeAt(this.state.pos + 2);
	    if (next === 46 && next2 === 46) {
	      // 46 = dot '.'
	      this.state.pos += 3;
	      return this.finishToken(types.ellipsis);
	    } else {
	      ++this.state.pos;
	      return this.finishToken(types.dot);
	    }
	  };

	  Tokenizer.prototype.readToken_slash = function readToken_slash() {
	    // '/'
	    if (this.state.exprAllowed) {
	      ++this.state.pos;
	      return this.readRegexp();
	    }

	    var next = this.input.charCodeAt(this.state.pos + 1);
	    if (next === 61) {
	      return this.finishOp(types.assign, 2);
	    } else {
	      return this.finishOp(types.slash, 1);
	    }
	  };

	  Tokenizer.prototype.readToken_mult_modulo = function readToken_mult_modulo(code) {
	    // '%*'
	    var type = code === 42 ? types.star : types.modulo;
	    var width = 1;
	    var next = this.input.charCodeAt(this.state.pos + 1);

	    if (next === 42) {
	      // '*'
	      width++;
	      next = this.input.charCodeAt(this.state.pos + 2);
	      type = types.exponent;
	    }

	    if (next === 61) {
	      width++;
	      type = types.assign;
	    }

	    return this.finishOp(type, width);
	  };

	  Tokenizer.prototype.readToken_pipe_amp = function readToken_pipe_amp(code) {
	    // '|&'
	    var next = this.input.charCodeAt(this.state.pos + 1);
	    if (next === code) return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2);
	    if (next === 61) return this.finishOp(types.assign, 2);
	    if (code === 124 && next === 125 && this.hasPlugin("flow")) return this.finishOp(types.braceBarR, 2);
	    return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1);
	  };

	  Tokenizer.prototype.readToken_caret = function readToken_caret() {
	    // '^'
	    var next = this.input.charCodeAt(this.state.pos + 1);
	    if (next === 61) {
	      return this.finishOp(types.assign, 2);
	    } else {
	      return this.finishOp(types.bitwiseXOR, 1);
	    }
	  };

	  Tokenizer.prototype.readToken_plus_min = function readToken_plus_min(code) {
	    // '+-'
	    var next = this.input.charCodeAt(this.state.pos + 1);

	    if (next === code) {
	      if (next === 45 && this.input.charCodeAt(this.state.pos + 2) === 62 && lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.pos))) {
	        // A `-->` line comment
	        this.skipLineComment(3);
	        this.skipSpace();
	        return this.nextToken();
	      }
	      return this.finishOp(types.incDec, 2);
	    }

	    if (next === 61) {
	      return this.finishOp(types.assign, 2);
	    } else {
	      return this.finishOp(types.plusMin, 1);
	    }
	  };

	  Tokenizer.prototype.readToken_lt_gt = function readToken_lt_gt(code) {
	    // '<>'
	    var next = this.input.charCodeAt(this.state.pos + 1);
	    var size = 1;

	    if (next === code) {
	      size = code === 62 && this.input.charCodeAt(this.state.pos + 2) === 62 ? 3 : 2;
	      if (this.input.charCodeAt(this.state.pos + size) === 61) return this.finishOp(types.assign, size + 1);
	      return this.finishOp(types.bitShift, size);
	    }

	    if (next === 33 && code === 60 && this.input.charCodeAt(this.state.pos + 2) === 45 && this.input.charCodeAt(this.state.pos + 3) === 45) {
	      if (this.inModule) this.unexpected();
	      // `<!--`, an XML-style comment that should be interpreted as a line comment
	      this.skipLineComment(4);
	      this.skipSpace();
	      return this.nextToken();
	    }

	    if (next === 61) {
	      // <= | >=
	      size = 2;
	    }

	    return this.finishOp(types.relational, size);
	  };

	  Tokenizer.prototype.readToken_eq_excl = function readToken_eq_excl(code) {
	    // '=!'
	    var next = this.input.charCodeAt(this.state.pos + 1);
	    if (next === 61) return this.finishOp(types.equality, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
	    if (code === 61 && next === 62) {
	      // '=>'
	      this.state.pos += 2;
	      return this.finishToken(types.arrow);
	    }
	    return this.finishOp(code === 61 ? types.eq : types.prefix, 1);
	  };

	  Tokenizer.prototype.getTokenFromCode = function getTokenFromCode(code) {
	    switch (code) {
	      // The interpretation of a dot depends on whether it is followed
	      // by a digit or another two dots.
	      case 46:
	        // '.'
	        return this.readToken_dot();

	      // Punctuation tokens.
	      case 40:
	        ++this.state.pos;return this.finishToken(types.parenL);
	      case 41:
	        ++this.state.pos;return this.finishToken(types.parenR);
	      case 59:
	        ++this.state.pos;return this.finishToken(types.semi);
	      case 44:
	        ++this.state.pos;return this.finishToken(types.comma);
	      case 91:
	        ++this.state.pos;return this.finishToken(types.bracketL);
	      case 93:
	        ++this.state.pos;return this.finishToken(types.bracketR);

	      case 123:
	        if (this.hasPlugin("flow") && this.input.charCodeAt(this.state.pos + 1) === 124) {
	          return this.finishOp(types.braceBarL, 2);
	        } else {
	          ++this.state.pos;
	          return this.finishToken(types.braceL);
	        }

	      case 125:
	        ++this.state.pos;return this.finishToken(types.braceR);

	      case 58:
	        if (this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58) {
	          return this.finishOp(types.doubleColon, 2);
	        } else {
	          ++this.state.pos;
	          return this.finishToken(types.colon);
	        }

	      case 63:
	        ++this.state.pos;return this.finishToken(types.question);
	      case 64:
	        ++this.state.pos;return this.finishToken(types.at);

	      case 96:
	        // '`'
	        ++this.state.pos;
	        return this.finishToken(types.backQuote);

	      case 48:
	        // '0'
	        var next = this.input.charCodeAt(this.state.pos + 1);
	        if (next === 120 || next === 88) return this.readRadixNumber(16); // '0x', '0X' - hex number
	        if (next === 111 || next === 79) return this.readRadixNumber(8); // '0o', '0O' - octal number
	        if (next === 98 || next === 66) return this.readRadixNumber(2); // '0b', '0B' - binary number
	      // Anything else beginning with a digit is an integer, octal
	      // number, or float.
	      case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
	        // 1-9
	        return this.readNumber(false);

	      // Quotes produce strings.
	      case 34:case 39:
	        // '"', "'"
	        return this.readString(code);

	      // Operators are parsed inline in tiny state machines. '=' (61) is
	      // often referred to. `finishOp` simply skips the amount of
	      // characters it is given as second argument, and returns a token
	      // of the type given by its first argument.

	      case 47:
	        // '/'
	        return this.readToken_slash();

	      case 37:case 42:
	        // '%*'
	        return this.readToken_mult_modulo(code);

	      case 124:case 38:
	        // '|&'
	        return this.readToken_pipe_amp(code);

	      case 94:
	        // '^'
	        return this.readToken_caret();

	      case 43:case 45:
	        // '+-'
	        return this.readToken_plus_min(code);

	      case 60:case 62:
	        // '<>'
	        return this.readToken_lt_gt(code);

	      case 61:case 33:
	        // '=!'
	        return this.readToken_eq_excl(code);

	      case 126:
	        // '~'
	        return this.finishOp(types.prefix, 1);
	    }

	    this.raise(this.state.pos, "Unexpected character '" + codePointToString(code) + "'");
	  };

	  Tokenizer.prototype.finishOp = function finishOp(type, size) {
	    var str = this.input.slice(this.state.pos, this.state.pos + size);
	    this.state.pos += size;
	    return this.finishToken(type, str);
	  };

	  Tokenizer.prototype.readRegexp = function readRegexp() {
	    var start = this.state.pos;
	    var escaped = void 0,
	        inClass = void 0;
	    for (;;) {
	      if (this.state.pos >= this.input.length) this.raise(start, "Unterminated regular expression");
	      var ch = this.input.charAt(this.state.pos);
	      if (lineBreak.test(ch)) {
	        this.raise(start, "Unterminated regular expression");
	      }
	      if (escaped) {
	        escaped = false;
	      } else {
	        if (ch === "[") {
	          inClass = true;
	        } else if (ch === "]" && inClass) {
	          inClass = false;
	        } else if (ch === "/" && !inClass) {
	          break;
	        }
	        escaped = ch === "\\";
	      }
	      ++this.state.pos;
	    }
	    var content = this.input.slice(start, this.state.pos);
	    ++this.state.pos;
	    // Need to use `readWord1` because '\uXXXX' sequences are allowed
	    // here (don't ask).
	    var mods = this.readWord1();
	    if (mods) {
	      var validFlags = /^[gmsiyu]*$/;
	      if (!validFlags.test(mods)) this.raise(start, "Invalid regular expression flag");
	    }
	    return this.finishToken(types.regexp, {
	      pattern: content,
	      flags: mods
	    });
	  };

	  // Read an integer in the given radix. Return null if zero digits
	  // were read, the integer value otherwise. When `len` is given, this
	  // will return `null` unless the integer has exactly `len` digits.

	  Tokenizer.prototype.readInt = function readInt(radix, len) {
	    var start = this.state.pos;
	    var total = 0;

	    for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
	      var code = this.input.charCodeAt(this.state.pos);
	      var val = void 0;
	      if (code >= 97) {
	        val = code - 97 + 10; // a
	      } else if (code >= 65) {
	        val = code - 65 + 10; // A
	      } else if (code >= 48 && code <= 57) {
	        val = code - 48; // 0-9
	      } else {
	        val = Infinity;
	      }
	      if (val >= radix) break;
	      ++this.state.pos;
	      total = total * radix + val;
	    }
	    if (this.state.pos === start || len != null && this.state.pos - start !== len) return null;

	    return total;
	  };

	  Tokenizer.prototype.readRadixNumber = function readRadixNumber(radix) {
	    this.state.pos += 2; // 0x
	    var val = this.readInt(radix);
	    if (val == null) this.raise(this.state.start + 2, "Expected number in radix " + radix);
	    if (isIdentifierStart(this.fullCharCodeAtPos())) this.raise(this.state.pos, "Identifier directly after number");
	    return this.finishToken(types.num, val);
	  };

	  // Read an integer, octal integer, or floating-point number.

	  Tokenizer.prototype.readNumber = function readNumber(startsWithDot) {
	    var start = this.state.pos;
	    var octal = this.input.charCodeAt(start) === 48; // '0'
	    var isFloat = false;

	    if (!startsWithDot && this.readInt(10) === null) this.raise(start, "Invalid number");
	    if (octal && this.state.pos == start + 1) octal = false; // number === 0

	    var next = this.input.charCodeAt(this.state.pos);
	    if (next === 46 && !octal) {
	      // '.'
	      ++this.state.pos;
	      this.readInt(10);
	      isFloat = true;
	      next = this.input.charCodeAt(this.state.pos);
	    }

	    if ((next === 69 || next === 101) && !octal) {
	      // 'eE'
	      next = this.input.charCodeAt(++this.state.pos);
	      if (next === 43 || next === 45) ++this.state.pos; // '+-'
	      if (this.readInt(10) === null) this.raise(start, "Invalid number");
	      isFloat = true;
	    }

	    if (isIdentifierStart(this.fullCharCodeAtPos())) this.raise(this.state.pos, "Identifier directly after number");

	    var str = this.input.slice(start, this.state.pos);
	    var val = void 0;
	    if (isFloat) {
	      val = parseFloat(str);
	    } else if (!octal || str.length === 1) {
	      val = parseInt(str, 10);
	    } else if (this.state.strict) {
	      this.raise(start, "Invalid number");
	    } else if (/[89]/.test(str)) {
	      val = parseInt(str, 10);
	    } else {
	      val = parseInt(str, 8);
	    }
	    return this.finishToken(types.num, val);
	  };

	  // Read a string value, interpreting backslash-escapes.

	  Tokenizer.prototype.readCodePoint = function readCodePoint(throwOnInvalid) {
	    var ch = this.input.charCodeAt(this.state.pos);
	    var code = void 0;

	    if (ch === 123) {
	      // '{'
	      var codePos = ++this.state.pos;
	      code = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos, throwOnInvalid);
	      ++this.state.pos;
	      if (code === null) {
	        --this.state.invalidTemplateEscapePosition; // to point to the '\'' instead of the 'u'
	      } else if (code > 0x10FFFF) {
	        if (throwOnInvalid) {
	          this.raise(codePos, "Code point out of bounds");
	        } else {
	          this.state.invalidTemplateEscapePosition = codePos - 2;
	          return null;
	        }
	      }
	    } else {
	      code = this.readHexChar(4, throwOnInvalid);
	    }
	    return code;
	  };

	  Tokenizer.prototype.readString = function readString(quote) {
	    var out = "",
	        chunkStart = ++this.state.pos;
	    for (;;) {
	      if (this.state.pos >= this.input.length) this.raise(this.state.start, "Unterminated string constant");
	      var ch = this.input.charCodeAt(this.state.pos);
	      if (ch === quote) break;
	      if (ch === 92) {
	        // '\'
	        out += this.input.slice(chunkStart, this.state.pos);
	        out += this.readEscapedChar(false);
	        chunkStart = this.state.pos;
	      } else {
	        if (isNewLine(ch)) this.raise(this.state.start, "Unterminated string constant");
	        ++this.state.pos;
	      }
	    }
	    out += this.input.slice(chunkStart, this.state.pos++);
	    return this.finishToken(types.string, out);
	  };

	  // Reads template string tokens.

	  Tokenizer.prototype.readTmplToken = function readTmplToken() {
	    var out = "",
	        chunkStart = this.state.pos,
	        containsInvalid = false;
	    for (;;) {
	      if (this.state.pos >= this.input.length) this.raise(this.state.start, "Unterminated template");
	      var ch = this.input.charCodeAt(this.state.pos);
	      if (ch === 96 || ch === 36 && this.input.charCodeAt(this.state.pos + 1) === 123) {
	        // '`', '${'
	        if (this.state.pos === this.state.start && this.match(types.template)) {
	          if (ch === 36) {
	            this.state.pos += 2;
	            return this.finishToken(types.dollarBraceL);
	          } else {
	            ++this.state.pos;
	            return this.finishToken(types.backQuote);
	          }
	        }
	        out += this.input.slice(chunkStart, this.state.pos);
	        return this.finishToken(types.template, containsInvalid ? null : out);
	      }
	      if (ch === 92) {
	        // '\'
	        out += this.input.slice(chunkStart, this.state.pos);
	        var escaped = this.readEscapedChar(true);
	        if (escaped === null) {
	          containsInvalid = true;
	        } else {
	          out += escaped;
	        }
	        chunkStart = this.state.pos;
	      } else if (isNewLine(ch)) {
	        out += this.input.slice(chunkStart, this.state.pos);
	        ++this.state.pos;
	        switch (ch) {
	          case 13:
	            if (this.input.charCodeAt(this.state.pos) === 10) ++this.state.pos;
	          case 10:
	            out += "\n";
	            break;
	          default:
	            out += String.fromCharCode(ch);
	            break;
	        }
	        ++this.state.curLine;
	        this.state.lineStart = this.state.pos;
	        chunkStart = this.state.pos;
	      } else {
	        ++this.state.pos;
	      }
	    }
	  };

	  // Used to read escaped characters

	  Tokenizer.prototype.readEscapedChar = function readEscapedChar(inTemplate) {
	    var throwOnInvalid = !inTemplate;
	    var ch = this.input.charCodeAt(++this.state.pos);
	    ++this.state.pos;
	    switch (ch) {
	      case 110:
	        return "\n"; // 'n' -> '\n'
	      case 114:
	        return "\r"; // 'r' -> '\r'
	      case 120:
	        {
	          // 'x'
	          var code = this.readHexChar(2, throwOnInvalid);
	          return code === null ? null : String.fromCharCode(code);
	        }
	      case 117:
	        {
	          // 'u'
	          var _code = this.readCodePoint(throwOnInvalid);
	          return _code === null ? null : codePointToString(_code);
	        }
	      case 116:
	        return "\t"; // 't' -> '\t'
	      case 98:
	        return "\b"; // 'b' -> '\b'
	      case 118:
	        return "\x0B"; // 'v' -> '\u000b'
	      case 102:
	        return "\f"; // 'f' -> '\f'
	      case 13:
	        if (this.input.charCodeAt(this.state.pos) === 10) ++this.state.pos; // '\r\n'
	      case 10:
	        // ' \n'
	        this.state.lineStart = this.state.pos;
	        ++this.state.curLine;
	        return "";
	      default:
	        if (ch >= 48 && ch <= 55) {
	          var codePos = this.state.pos - 1;
	          var octalStr = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/)[0];
	          var octal = parseInt(octalStr, 8);
	          if (octal > 255) {
	            octalStr = octalStr.slice(0, -1);
	            octal = parseInt(octalStr, 8);
	          }
	          if (octal > 0) {
	            if (inTemplate) {
	              this.state.invalidTemplateEscapePosition = codePos;
	              return null;
	            } else if (this.state.strict) {
	              this.raise(codePos, "Octal literal in strict mode");
	            } else if (!this.state.containsOctal) {
	              // These properties are only used to throw an error for an octal which occurs
	              // in a directive which occurs prior to a "use strict" directive.
	              this.state.containsOctal = true;
	              this.state.octalPosition = codePos;
	            }
	          }
	          this.state.pos += octalStr.length - 1;
	          return String.fromCharCode(octal);
	        }
	        return String.fromCharCode(ch);
	    }
	  };

	  // Used to read character escape sequences ('\x', '\u').

	  Tokenizer.prototype.readHexChar = function readHexChar(len, throwOnInvalid) {
	    var codePos = this.state.pos;
	    var n = this.readInt(16, len);
	    if (n === null) {
	      if (throwOnInvalid) {
	        this.raise(codePos, "Bad character escape sequence");
	      } else {
	        this.state.pos = codePos - 1;
	        this.state.invalidTemplateEscapePosition = codePos - 1;
	      }
	    }
	    return n;
	  };

	  // Read an identifier, and return it as a string. Sets `this.state.containsEsc`
	  // to whether the word contained a '\u' escape.
	  //
	  // Incrementally adds only escaped chars, adding other chunks as-is
	  // as a micro-optimization.

	  Tokenizer.prototype.readWord1 = function readWord1() {
	    this.state.containsEsc = false;
	    var word = "",
	        first = true,
	        chunkStart = this.state.pos;
	    while (this.state.pos < this.input.length) {
	      var ch = this.fullCharCodeAtPos();
	      if (isIdentifierChar(ch)) {
	        this.state.pos += ch <= 0xffff ? 1 : 2;
	      } else if (ch === 92) {
	        // "\"
	        this.state.containsEsc = true;

	        word += this.input.slice(chunkStart, this.state.pos);
	        var escStart = this.state.pos;

	        if (this.input.charCodeAt(++this.state.pos) !== 117) {
	          // "u"
	          this.raise(this.state.pos, "Expecting Unicode escape sequence \\uXXXX");
	        }

	        ++this.state.pos;
	        var esc = this.readCodePoint(true);
	        if (!(first ? isIdentifierStart : isIdentifierChar)(esc, true)) {
	          this.raise(escStart, "Invalid Unicode escape");
	        }

	        word += codePointToString(esc);
	        chunkStart = this.state.pos;
	      } else {
	        break;
	      }
	      first = false;
	    }
	    return word + this.input.slice(chunkStart, this.state.pos);
	  };

	  // Read an identifier or keyword token. Will check for reserved
	  // words when necessary.

	  Tokenizer.prototype.readWord = function readWord() {
	    var word = this.readWord1();
	    var type = types.name;
	    if (!this.state.containsEsc && this.isKeyword(word)) {
	      type = keywords[word];
	    }
	    return this.finishToken(type, word);
	  };

	  Tokenizer.prototype.braceIsBlock = function braceIsBlock(prevType) {
	    if (prevType === types.colon) {
	      var parent = this.curContext();
	      if (parent === types$1.braceStatement || parent === types$1.braceExpression) {
	        return !parent.isExpr;
	      }
	    }

	    if (prevType === types._return) {
	      return lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start));
	    }

	    if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR) {
	      return true;
	    }

	    if (prevType === types.braceL) {
	      return this.curContext() === types$1.braceStatement;
	    }

	    return !this.state.exprAllowed;
	  };

	  Tokenizer.prototype.updateContext = function updateContext(prevType) {
	    var type = this.state.type;
	    var update = void 0;

	    if (type.keyword && prevType === types.dot) {
	      this.state.exprAllowed = false;
	    } else if (update = type.updateContext) {
	      update.call(this, prevType);
	    } else {
	      this.state.exprAllowed = type.beforeExpr;
	    }
	  };

	  return Tokenizer;
	}();

	var plugins = {};
	var frozenDeprecatedWildcardPluginList = ["jsx", "doExpressions", "objectRestSpread", "decorators", "classProperties", "exportExtensions", "asyncGenerators", "functionBind", "functionSent", "dynamicImport", "flow"];

	var Parser = function (_Tokenizer) {
	  inherits(Parser, _Tokenizer);

	  function Parser(options, input) {
	    classCallCheck(this, Parser);

	    options = getOptions(options);

	    var _this = possibleConstructorReturn(this, _Tokenizer.call(this, options, input));

	    _this.options = options;
	    _this.inModule = _this.options.sourceType === "module";
	    _this.input = input;
	    _this.plugins = _this.loadPlugins(_this.options.plugins);
	    _this.filename = options.sourceFilename;

	    // If enabled, skip leading hashbang line.
	    if (_this.state.pos === 0 && _this.input[0] === "#" && _this.input[1] === "!") {
	      _this.skipLineComment(2);
	    }
	    return _this;
	  }

	  Parser.prototype.isReservedWord = function isReservedWord(word) {
	    if (word === "await") {
	      return this.inModule;
	    } else {
	      return reservedWords[6](word);
	    }
	  };

	  Parser.prototype.hasPlugin = function hasPlugin(name) {
	    if (this.plugins["*"] && frozenDeprecatedWildcardPluginList.indexOf(name) > -1) {
	      return true;
	    }

	    return !!this.plugins[name];
	  };

	  Parser.prototype.extend = function extend(name, f) {
	    this[name] = f(this[name]);
	  };

	  Parser.prototype.loadAllPlugins = function loadAllPlugins() {
	    var _this2 = this;

	    // ensure flow plugin loads last, also ensure estree is not loaded with *
	    var pluginNames = Object.keys(plugins).filter(function (name) {
	      return name !== "flow" && name !== "estree";
	    });
	    pluginNames.push("flow");

	    pluginNames.forEach(function (name) {
	      var plugin = plugins[name];
	      if (plugin) plugin(_this2);
	    });
	  };

	  Parser.prototype.loadPlugins = function loadPlugins(pluginList) {
	    // TODO: Deprecate "*" option in next major version of Babylon
	    if (pluginList.indexOf("*") >= 0) {
	      this.loadAllPlugins();

	      return { "*": true };
	    }

	    var pluginMap = {};

	    if (pluginList.indexOf("flow") >= 0) {
	      // ensure flow plugin loads last
	      pluginList = pluginList.filter(function (plugin) {
	        return plugin !== "flow";
	      });
	      pluginList.push("flow");
	    }

	    if (pluginList.indexOf("estree") >= 0) {
	      // ensure estree plugin loads first
	      pluginList = pluginList.filter(function (plugin) {
	        return plugin !== "estree";
	      });
	      pluginList.unshift("estree");
	    }

	    for (var _iterator = pluginList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var name = _ref;

	      if (!pluginMap[name]) {
	        pluginMap[name] = true;

	        var plugin = plugins[name];
	        if (plugin) plugin(this);
	      }
	    }

	    return pluginMap;
	  };

	  Parser.prototype.parse = function parse() {
	    var file = this.startNode();
	    var program = this.startNode();
	    this.nextToken();
	    return this.parseTopLevel(file, program);
	  };

	  return Parser;
	}(Tokenizer);

	var pp = Parser.prototype;

	// ## Parser utilities

	// TODO

	pp.addExtra = function (node, key, val) {
	  if (!node) return;

	  var extra = node.extra = node.extra || {};
	  extra[key] = val;
	};

	// TODO

	pp.isRelational = function (op) {
	  return this.match(types.relational) && this.state.value === op;
	};

	// TODO

	pp.expectRelational = function (op) {
	  if (this.isRelational(op)) {
	    this.next();
	  } else {
	    this.unexpected(null, types.relational);
	  }
	};

	// Tests whether parsed token is a contextual keyword.

	pp.isContextual = function (name) {
	  return this.match(types.name) && this.state.value === name;
	};

	// Consumes contextual keyword if possible.

	pp.eatContextual = function (name) {
	  return this.state.value === name && this.eat(types.name);
	};

	// Asserts that following token is given contextual keyword.

	pp.expectContextual = function (name, message) {
	  if (!this.eatContextual(name)) this.unexpected(null, message);
	};

	// Test whether a semicolon can be inserted at the current position.

	pp.canInsertSemicolon = function () {
	  return this.match(types.eof) || this.match(types.braceR) || lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start));
	};

	// TODO

	pp.isLineTerminator = function () {
	  return this.eat(types.semi) || this.canInsertSemicolon();
	};

	// Consume a semicolon, or, failing that, see if we are allowed to
	// pretend that there is a semicolon at this position.

	pp.semicolon = function () {
	  if (!this.isLineTerminator()) this.unexpected(null, types.semi);
	};

	// Expect a token of a given type. If found, consume it, otherwise,
	// raise an unexpected token error at given pos.

	pp.expect = function (type, pos) {
	  return this.eat(type) || this.unexpected(pos, type);
	};

	// Raise an unexpected token error. Can take the expected token type
	// instead of a message string.

	pp.unexpected = function (pos) {
	  var messageOrType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Unexpected token";

	  if (messageOrType && (typeof messageOrType === "undefined" ? "undefined" : _typeof(messageOrType)) === "object" && messageOrType.label) {
	    messageOrType = "Unexpected token, expected " + messageOrType.label;
	  }
	  this.raise(pos != null ? pos : this.state.start, messageOrType);
	};

	/* eslint max-len: 0 */

	var pp$1 = Parser.prototype;

	// ### Statement parsing

	// Parse a program. Initializes the parser, reads any number of
	// statements, and wraps them in a Program node.  Optionally takes a
	// `program` argument.  If present, the statements will be appended
	// to its body instead of creating a new node.

	pp$1.parseTopLevel = function (file, program) {
	  program.sourceType = this.options.sourceType;

	  this.parseBlockBody(program, true, true, types.eof);

	  file.program = this.finishNode(program, "Program");
	  file.comments = this.state.comments;
	  file.tokens = this.state.tokens;

	  return this.finishNode(file, "File");
	};

	var loopLabel = { kind: "loop" };
	var switchLabel = { kind: "switch" };

	// TODO

	pp$1.stmtToDirective = function (stmt) {
	  var expr = stmt.expression;

	  var directiveLiteral = this.startNodeAt(expr.start, expr.loc.start);
	  var directive = this.startNodeAt(stmt.start, stmt.loc.start);

	  var raw = this.input.slice(expr.start, expr.end);
	  var val = directiveLiteral.value = raw.slice(1, -1); // remove quotes

	  this.addExtra(directiveLiteral, "raw", raw);
	  this.addExtra(directiveLiteral, "rawValue", val);

	  directive.value = this.finishNodeAt(directiveLiteral, "DirectiveLiteral", expr.end, expr.loc.end);

	  return this.finishNodeAt(directive, "Directive", stmt.end, stmt.loc.end);
	};

	// Parse a single statement.
	//
	// If expecting a statement and finding a slash operator, parse a
	// regular expression literal. This is to handle cases like
	// `if (foo) /blah/.exec(foo)`, where looking at the previous token
	// does not help.

	pp$1.parseStatement = function (declaration, topLevel) {
	  if (this.match(types.at)) {
	    this.parseDecorators(true);
	  }

	  var starttype = this.state.type;
	  var node = this.startNode();

	  // Most types of statements are recognized by the keyword they
	  // start with. Many are trivial to parse, some require a bit of
	  // complexity.

	  switch (starttype) {
	    case types._break:case types._continue:
	      return this.parseBreakContinueStatement(node, starttype.keyword);
	    case types._debugger:
	      return this.parseDebuggerStatement(node);
	    case types._do:
	      return this.parseDoStatement(node);
	    case types._for:
	      return this.parseForStatement(node);
	    case types._function:
	      if (!declaration) this.unexpected();
	      return this.parseFunctionStatement(node);

	    case types._class:
	      if (!declaration) this.unexpected();
	      return this.parseClass(node, true);

	    case types._if:
	      return this.parseIfStatement(node);
	    case types._return:
	      return this.parseReturnStatement(node);
	    case types._switch:
	      return this.parseSwitchStatement(node);
	    case types._throw:
	      return this.parseThrowStatement(node);
	    case types._try:
	      return this.parseTryStatement(node);

	    case types._let:
	    case types._const:
	      if (!declaration) this.unexpected(); // NOTE: falls through to _var

	    case types._var:
	      return this.parseVarStatement(node, starttype);

	    case types._while:
	      return this.parseWhileStatement(node);
	    case types._with:
	      return this.parseWithStatement(node);
	    case types.braceL:
	      return this.parseBlock();
	    case types.semi:
	      return this.parseEmptyStatement(node);
	    case types._export:
	    case types._import:
	      if (this.hasPlugin("dynamicImport") && this.lookahead().type === types.parenL) break;

	      if (!this.options.allowImportExportEverywhere) {
	        if (!topLevel) {
	          this.raise(this.state.start, "'import' and 'export' may only appear at the top level");
	        }

	        if (!this.inModule) {
	          this.raise(this.state.start, "'import' and 'export' may appear only with 'sourceType: module'");
	        }
	      }
	      return starttype === types._import ? this.parseImport(node) : this.parseExport(node);

	    case types.name:
	      if (this.state.value === "async") {
	        // peek ahead and see if next token is a function
	        var state = this.state.clone();
	        this.next();
	        if (this.match(types._function) && !this.canInsertSemicolon()) {
	          this.expect(types._function);
	          return this.parseFunction(node, true, false, true);
	        } else {
	          this.state = state;
	        }
	      }
	  }

	  // If the statement does not start with a statement keyword or a
	  // brace, it's an ExpressionStatement or LabeledStatement. We
	  // simply start parsing an expression, and afterwards, if the
	  // next token is a colon and the expression was a simple
	  // Identifier node, we switch to interpreting it as a label.
	  var maybeName = this.state.value;
	  var expr = this.parseExpression();

	  if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon)) {
	    return this.parseLabeledStatement(node, maybeName, expr);
	  } else {
	    return this.parseExpressionStatement(node, expr);
	  }
	};

	pp$1.takeDecorators = function (node) {
	  if (this.state.decorators.length) {
	    node.decorators = this.state.decorators;
	    this.state.decorators = [];
	  }
	};

	pp$1.parseDecorators = function (allowExport) {
	  while (this.match(types.at)) {
	    var decorator = this.parseDecorator();
	    this.state.decorators.push(decorator);
	  }

	  if (allowExport && this.match(types._export)) {
	    return;
	  }

	  if (!this.match(types._class)) {
	    this.raise(this.state.start, "Leading decorators must be attached to a class declaration");
	  }
	};

	pp$1.parseDecorator = function () {
	  if (!this.hasPlugin("decorators")) {
	    this.unexpected();
	  }
	  var node = this.startNode();
	  this.next();
	  node.expression = this.parseMaybeAssign();
	  return this.finishNode(node, "Decorator");
	};

	pp$1.parseBreakContinueStatement = function (node, keyword) {
	  var isBreak = keyword === "break";
	  this.next();

	  if (this.isLineTerminator()) {
	    node.label = null;
	  } else if (!this.match(types.name)) {
	    this.unexpected();
	  } else {
	    node.label = this.parseIdentifier();
	    this.semicolon();
	  }

	  // Verify that there is an actual destination to break or
	  // continue to.
	  var i = void 0;
	  for (i = 0; i < this.state.labels.length; ++i) {
	    var lab = this.state.labels[i];
	    if (node.label == null || lab.name === node.label.name) {
	      if (lab.kind != null && (isBreak || lab.kind === "loop")) break;
	      if (node.label && isBreak) break;
	    }
	  }
	  if (i === this.state.labels.length) this.raise(node.start, "Unsyntactic " + keyword);
	  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
	};

	pp$1.parseDebuggerStatement = function (node) {
	  this.next();
	  this.semicolon();
	  return this.finishNode(node, "DebuggerStatement");
	};

	pp$1.parseDoStatement = function (node) {
	  this.next();
	  this.state.labels.push(loopLabel);
	  node.body = this.parseStatement(false);
	  this.state.labels.pop();
	  this.expect(types._while);
	  node.test = this.parseParenExpression();
	  this.eat(types.semi);
	  return this.finishNode(node, "DoWhileStatement");
	};

	// Disambiguating between a `for` and a `for`/`in` or `for`/`of`
	// loop is non-trivial. Basically, we have to parse the init `var`
	// statement or expression, disallowing the `in` operator (see
	// the second parameter to `parseExpression`), and then check
	// whether the next token is `in` or `of`. When there is no init
	// part (semicolon immediately after the opening parenthesis), it
	// is a regular `for` loop.

	pp$1.parseForStatement = function (node) {
	  this.next();
	  this.state.labels.push(loopLabel);

	  var forAwait = false;
	  if (this.hasPlugin("asyncGenerators") && this.state.inAsync && this.isContextual("await")) {
	    forAwait = true;
	    this.next();
	  }
	  this.expect(types.parenL);

	  if (this.match(types.semi)) {
	    if (forAwait) {
	      this.unexpected();
	    }
	    return this.parseFor(node, null);
	  }

	  if (this.match(types._var) || this.match(types._let) || this.match(types._const)) {
	    var _init = this.startNode();
	    var varKind = this.state.type;
	    this.next();
	    this.parseVar(_init, true, varKind);
	    this.finishNode(_init, "VariableDeclaration");

	    if (this.match(types._in) || this.isContextual("of")) {
	      if (_init.declarations.length === 1 && !_init.declarations[0].init) {
	        return this.parseForIn(node, _init, forAwait);
	      }
	    }
	    if (forAwait) {
	      this.unexpected();
	    }
	    return this.parseFor(node, _init);
	  }

	  var refShorthandDefaultPos = { start: 0 };
	  var init = this.parseExpression(true, refShorthandDefaultPos);
	  if (this.match(types._in) || this.isContextual("of")) {
	    var description = this.isContextual("of") ? "for-of statement" : "for-in statement";
	    this.toAssignable(init, undefined, description);
	    this.checkLVal(init, undefined, undefined, description);
	    return this.parseForIn(node, init, forAwait);
	  } else if (refShorthandDefaultPos.start) {
	    this.unexpected(refShorthandDefaultPos.start);
	  }
	  if (forAwait) {
	    this.unexpected();
	  }
	  return this.parseFor(node, init);
	};

	pp$1.parseFunctionStatement = function (node) {
	  this.next();
	  return this.parseFunction(node, true);
	};

	pp$1.parseIfStatement = function (node) {
	  this.next();
	  node.test = this.parseParenExpression();
	  node.consequent = this.parseStatement(false);
	  node.alternate = this.eat(types._else) ? this.parseStatement(false) : null;
	  return this.finishNode(node, "IfStatement");
	};

	pp$1.parseReturnStatement = function (node) {
	  if (!this.state.inFunction && !this.options.allowReturnOutsideFunction) {
	    this.raise(this.state.start, "'return' outside of function");
	  }

	  this.next();

	  // In `return` (and `break`/`continue`), the keywords with
	  // optional arguments, we eagerly look for a semicolon or the
	  // possibility to insert one.

	  if (this.isLineTerminator()) {
	    node.argument = null;
	  } else {
	    node.argument = this.parseExpression();
	    this.semicolon();
	  }

	  return this.finishNode(node, "ReturnStatement");
	};

	pp$1.parseSwitchStatement = function (node) {
	  this.next();
	  node.discriminant = this.parseParenExpression();
	  node.cases = [];
	  this.expect(types.braceL);
	  this.state.labels.push(switchLabel);

	  // Statements under must be grouped (by label) in SwitchCase
	  // nodes. `cur` is used to keep the node that we are currently
	  // adding statements to.

	  var cur = void 0;
	  for (var sawDefault; !this.match(types.braceR);) {
	    if (this.match(types._case) || this.match(types._default)) {
	      var isCase = this.match(types._case);
	      if (cur) this.finishNode(cur, "SwitchCase");
	      node.cases.push(cur = this.startNode());
	      cur.consequent = [];
	      this.next();
	      if (isCase) {
	        cur.test = this.parseExpression();
	      } else {
	        if (sawDefault) this.raise(this.state.lastTokStart, "Multiple default clauses");
	        sawDefault = true;
	        cur.test = null;
	      }
	      this.expect(types.colon);
	    } else {
	      if (cur) {
	        cur.consequent.push(this.parseStatement(true));
	      } else {
	        this.unexpected();
	      }
	    }
	  }
	  if (cur) this.finishNode(cur, "SwitchCase");
	  this.next(); // Closing brace
	  this.state.labels.pop();
	  return this.finishNode(node, "SwitchStatement");
	};

	pp$1.parseThrowStatement = function (node) {
	  this.next();
	  if (lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start))) this.raise(this.state.lastTokEnd, "Illegal newline after throw");
	  node.argument = this.parseExpression();
	  this.semicolon();
	  return this.finishNode(node, "ThrowStatement");
	};

	// Reused empty array added for node fields that are always empty.

	var empty = [];

	pp$1.parseTryStatement = function (node) {
	  this.next();

	  node.block = this.parseBlock();
	  node.handler = null;

	  if (this.match(types._catch)) {
	    var clause = this.startNode();
	    this.next();

	    this.expect(types.parenL);
	    clause.param = this.parseBindingAtom();
	    this.checkLVal(clause.param, true, Object.create(null), "catch clause");
	    this.expect(types.parenR);

	    clause.body = this.parseBlock();
	    node.handler = this.finishNode(clause, "CatchClause");
	  }

	  node.guardedHandlers = empty;
	  node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;

	  if (!node.handler && !node.finalizer) {
	    this.raise(node.start, "Missing catch or finally clause");
	  }

	  return this.finishNode(node, "TryStatement");
	};

	pp$1.parseVarStatement = function (node, kind) {
	  this.next();
	  this.parseVar(node, false, kind);
	  this.semicolon();
	  return this.finishNode(node, "VariableDeclaration");
	};

	pp$1.parseWhileStatement = function (node) {
	  this.next();
	  node.test = this.parseParenExpression();
	  this.state.labels.push(loopLabel);
	  node.body = this.parseStatement(false);
	  this.state.labels.pop();
	  return this.finishNode(node, "WhileStatement");
	};

	pp$1.parseWithStatement = function (node) {
	  if (this.state.strict) this.raise(this.state.start, "'with' in strict mode");
	  this.next();
	  node.object = this.parseParenExpression();
	  node.body = this.parseStatement(false);
	  return this.finishNode(node, "WithStatement");
	};

	pp$1.parseEmptyStatement = function (node) {
	  this.next();
	  return this.finishNode(node, "EmptyStatement");
	};

	pp$1.parseLabeledStatement = function (node, maybeName, expr) {
	  for (var _iterator = this.state.labels, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var _label = _ref;

	    if (_label.name === maybeName) {
	      this.raise(expr.start, "Label '" + maybeName + "' is already declared");
	    }
	  }

	  var kind = this.state.type.isLoop ? "loop" : this.match(types._switch) ? "switch" : null;
	  for (var i = this.state.labels.length - 1; i >= 0; i--) {
	    var label = this.state.labels[i];
	    if (label.statementStart === node.start) {
	      label.statementStart = this.state.start;
	      label.kind = kind;
	    } else {
	      break;
	    }
	  }

	  this.state.labels.push({ name: maybeName, kind: kind, statementStart: this.state.start });
	  node.body = this.parseStatement(true);
	  this.state.labels.pop();
	  node.label = expr;
	  return this.finishNode(node, "LabeledStatement");
	};

	pp$1.parseExpressionStatement = function (node, expr) {
	  node.expression = expr;
	  this.semicolon();
	  return this.finishNode(node, "ExpressionStatement");
	};

	// Parse a semicolon-enclosed block of statements, handling `"use
	// strict"` declarations when `allowStrict` is true (used for
	// function bodies).

	pp$1.parseBlock = function (allowDirectives) {
	  var node = this.startNode();
	  this.expect(types.braceL);
	  this.parseBlockBody(node, allowDirectives, false, types.braceR);
	  return this.finishNode(node, "BlockStatement");
	};

	pp$1.isValidDirective = function (stmt) {
	  return stmt.type === "ExpressionStatement" && stmt.expression.type === "StringLiteral" && !stmt.expression.extra.parenthesized;
	};

	pp$1.parseBlockBody = function (node, allowDirectives, topLevel, end) {
	  node.body = [];
	  node.directives = [];

	  var parsedNonDirective = false;
	  var oldStrict = void 0;
	  var octalPosition = void 0;

	  while (!this.eat(end)) {
	    if (!parsedNonDirective && this.state.containsOctal && !octalPosition) {
	      octalPosition = this.state.octalPosition;
	    }

	    var stmt = this.parseStatement(true, topLevel);

	    if (allowDirectives && !parsedNonDirective && this.isValidDirective(stmt)) {
	      var directive = this.stmtToDirective(stmt);
	      node.directives.push(directive);

	      if (oldStrict === undefined && directive.value.value === "use strict") {
	        oldStrict = this.state.strict;
	        this.setStrict(true);

	        if (octalPosition) {
	          this.raise(octalPosition, "Octal literal in strict mode");
	        }
	      }

	      continue;
	    }

	    parsedNonDirective = true;
	    node.body.push(stmt);
	  }

	  if (oldStrict === false) {
	    this.setStrict(false);
	  }
	};

	// Parse a regular `for` loop. The disambiguation code in
	// `parseStatement` will already have parsed the init statement or
	// expression.

	pp$1.parseFor = function (node, init) {
	  node.init = init;
	  this.expect(types.semi);
	  node.test = this.match(types.semi) ? null : this.parseExpression();
	  this.expect(types.semi);
	  node.update = this.match(types.parenR) ? null : this.parseExpression();
	  this.expect(types.parenR);
	  node.body = this.parseStatement(false);
	  this.state.labels.pop();
	  return this.finishNode(node, "ForStatement");
	};

	// Parse a `for`/`in` and `for`/`of` loop, which are almost
	// same from parser's perspective.

	pp$1.parseForIn = function (node, init, forAwait) {
	  var type = void 0;
	  if (forAwait) {
	    this.eatContextual("of");
	    type = "ForAwaitStatement";
	  } else {
	    type = this.match(types._in) ? "ForInStatement" : "ForOfStatement";
	    this.next();
	  }
	  node.left = init;
	  node.right = this.parseExpression();
	  this.expect(types.parenR);
	  node.body = this.parseStatement(false);
	  this.state.labels.pop();
	  return this.finishNode(node, type);
	};

	// Parse a list of variable declarations.

	pp$1.parseVar = function (node, isFor, kind) {
	  node.declarations = [];
	  node.kind = kind.keyword;
	  for (;;) {
	    var decl = this.startNode();
	    this.parseVarHead(decl);
	    if (this.eat(types.eq)) {
	      decl.init = this.parseMaybeAssign(isFor);
	    } else if (kind === types._const && !(this.match(types._in) || this.isContextual("of"))) {
	      this.unexpected();
	    } else if (decl.id.type !== "Identifier" && !(isFor && (this.match(types._in) || this.isContextual("of")))) {
	      this.raise(this.state.lastTokEnd, "Complex binding patterns require an initialization value");
	    } else {
	      decl.init = null;
	    }
	    node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
	    if (!this.eat(types.comma)) break;
	  }
	  return node;
	};

	pp$1.parseVarHead = function (decl) {
	  decl.id = this.parseBindingAtom();
	  this.checkLVal(decl.id, true, undefined, "variable declaration");
	};

	// Parse a function declaration or literal (depending on the
	// `isStatement` parameter).

	pp$1.parseFunction = function (node, isStatement, allowExpressionBody, isAsync, optionalId) {
	  var oldInMethod = this.state.inMethod;
	  this.state.inMethod = false;

	  this.initFunction(node, isAsync);

	  if (this.match(types.star)) {
	    if (node.async && !this.hasPlugin("asyncGenerators")) {
	      this.unexpected();
	    } else {
	      node.generator = true;
	      this.next();
	    }
	  }

	  if (isStatement && !optionalId && !this.match(types.name) && !this.match(types._yield)) {
	    this.unexpected();
	  }

	  if (this.match(types.name) || this.match(types._yield)) {
	    node.id = this.parseBindingIdentifier();
	  }

	  this.parseFunctionParams(node);
	  this.parseFunctionBody(node, allowExpressionBody);

	  this.state.inMethod = oldInMethod;

	  return this.finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
	};

	pp$1.parseFunctionParams = function (node) {
	  this.expect(types.parenL);
	  node.params = this.parseBindingList(types.parenR);
	};

	// Parse a class declaration or literal (depending on the
	// `isStatement` parameter).

	pp$1.parseClass = function (node, isStatement, optionalId) {
	  this.next();
	  this.takeDecorators(node);
	  this.parseClassId(node, isStatement, optionalId);
	  this.parseClassSuper(node);
	  this.parseClassBody(node);
	  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
	};

	pp$1.isClassProperty = function () {
	  return this.match(types.eq) || this.match(types.semi) || this.match(types.braceR);
	};

	pp$1.isClassMethod = function () {
	  return this.match(types.parenL);
	};

	pp$1.isNonstaticConstructor = function (method) {
	  return !method.computed && !method.static && (method.key.name === "constructor" || // Identifier
	  method.key.value === "constructor" // Literal
	  );
	};

	pp$1.parseClassBody = function (node) {
	  // class bodies are implicitly strict
	  var oldStrict = this.state.strict;
	  this.state.strict = true;

	  var hadConstructorCall = false;
	  var hadConstructor = false;
	  var decorators = [];
	  var classBody = this.startNode();

	  classBody.body = [];

	  this.expect(types.braceL);

	  while (!this.eat(types.braceR)) {
	    if (this.eat(types.semi)) {
	      if (decorators.length > 0) {
	        this.raise(this.state.lastTokEnd, "Decorators must not be followed by a semicolon");
	      }
	      continue;
	    }

	    if (this.match(types.at)) {
	      decorators.push(this.parseDecorator());
	      continue;
	    }

	    var method = this.startNode();

	    // steal the decorators if there are any
	    if (decorators.length) {
	      method.decorators = decorators;
	      decorators = [];
	    }

	    method.static = false;
	    if (this.match(types.name) && this.state.value === "static") {
	      var key = this.parseIdentifier(true); // eats 'static'
	      if (this.isClassMethod()) {
	        // a method named 'static'
	        method.kind = "method";
	        method.computed = false;
	        method.key = key;
	        this.parseClassMethod(classBody, method, false, false);
	        continue;
	      } else if (this.isClassProperty()) {
	        // a property named 'static'
	        method.computed = false;
	        method.key = key;
	        classBody.body.push(this.parseClassProperty(method));
	        continue;
	      }
	      // otherwise something static
	      method.static = true;
	    }

	    if (this.eat(types.star)) {
	      // a generator
	      method.kind = "method";
	      this.parsePropertyName(method);
	      if (this.isNonstaticConstructor(method)) {
	        this.raise(method.key.start, "Constructor can't be a generator");
	      }
	      if (!method.computed && method.static && (method.key.name === "prototype" || method.key.value === "prototype")) {
	        this.raise(method.key.start, "Classes may not have static property named prototype");
	      }
	      this.parseClassMethod(classBody, method, true, false);
	    } else {
	      var isSimple = this.match(types.name);
	      var _key = this.parsePropertyName(method);
	      if (!method.computed && method.static && (method.key.name === "prototype" || method.key.value === "prototype")) {
	        this.raise(method.key.start, "Classes may not have static property named prototype");
	      }
	      if (this.isClassMethod()) {
	        // a normal method
	        if (this.isNonstaticConstructor(method)) {
	          if (hadConstructor) {
	            this.raise(_key.start, "Duplicate constructor in the same class");
	          } else if (method.decorators) {
	            this.raise(method.start, "You can't attach decorators to a class constructor");
	          }
	          hadConstructor = true;
	          method.kind = "constructor";
	        } else {
	          method.kind = "method";
	        }
	        this.parseClassMethod(classBody, method, false, false);
	      } else if (this.isClassProperty()) {
	        // a normal property
	        if (this.isNonstaticConstructor(method)) {
	          this.raise(method.key.start, "Classes may not have a non-static field named 'constructor'");
	        }
	        classBody.body.push(this.parseClassProperty(method));
	      } else if (isSimple && _key.name === "async" && !this.isLineTerminator()) {
	        // an async method
	        var isGenerator = this.hasPlugin("asyncGenerators") && this.eat(types.star);
	        method.kind = "method";
	        this.parsePropertyName(method);
	        if (this.isNonstaticConstructor(method)) {
	          this.raise(method.key.start, "Constructor can't be an async function");
	        }
	        this.parseClassMethod(classBody, method, isGenerator, true);
	      } else if (isSimple && (_key.name === "get" || _key.name === "set") && !(this.isLineTerminator() && this.match(types.star))) {
	        // `get\n*` is an uninitialized property named 'get' followed by a generator.
	        // a getter or setter
	        method.kind = _key.name;
	        this.parsePropertyName(method);
	        if (this.isNonstaticConstructor(method)) {
	          this.raise(method.key.start, "Constructor can't have get/set modifier");
	        }
	        this.parseClassMethod(classBody, method, false, false);
	        this.checkGetterSetterParamCount(method);
	      } else if (this.hasPlugin("classConstructorCall") && isSimple && _key.name === "call" && this.match(types.name) && this.state.value === "constructor") {
	        // a (deprecated) call constructor
	        if (hadConstructorCall) {
	          this.raise(method.start, "Duplicate constructor call in the same class");
	        } else if (method.decorators) {
	          this.raise(method.start, "You can't attach decorators to a class constructor");
	        }
	        hadConstructorCall = true;
	        method.kind = "constructorCall";
	        this.parsePropertyName(method); // consume "constructor" and make it the method's name
	        this.parseClassMethod(classBody, method, false, false);
	      } else if (this.isLineTerminator()) {
	        // an uninitialized class property (due to ASI, since we don't otherwise recognize the next token)
	        if (this.isNonstaticConstructor(method)) {
	          this.raise(method.key.start, "Classes may not have a non-static field named 'constructor'");
	        }
	        classBody.body.push(this.parseClassProperty(method));
	      } else {
	        this.unexpected();
	      }
	    }
	  }

	  if (decorators.length) {
	    this.raise(this.state.start, "You have trailing decorators with no method");
	  }

	  node.body = this.finishNode(classBody, "ClassBody");

	  this.state.strict = oldStrict;
	};

	pp$1.parseClassProperty = function (node) {
	  this.state.inClassProperty = true;
	  if (this.match(types.eq)) {
	    if (!this.hasPlugin("classProperties")) this.unexpected();
	    this.next();
	    node.value = this.parseMaybeAssign();
	  } else {
	    node.value = null;
	  }
	  this.semicolon();
	  this.state.inClassProperty = false;
	  return this.finishNode(node, "ClassProperty");
	};

	pp$1.parseClassMethod = function (classBody, method, isGenerator, isAsync) {
	  this.parseMethod(method, isGenerator, isAsync);
	  classBody.body.push(this.finishNode(method, "ClassMethod"));
	};

	pp$1.parseClassId = function (node, isStatement, optionalId) {
	  if (this.match(types.name)) {
	    node.id = this.parseIdentifier();
	  } else {
	    if (optionalId || !isStatement) {
	      node.id = null;
	    } else {
	      this.unexpected();
	    }
	  }
	};

	pp$1.parseClassSuper = function (node) {
	  node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
	};

	// Parses module export declaration.

	pp$1.parseExport = function (node) {
	  this.next();
	  // export * from '...'
	  if (this.match(types.star)) {
	    var specifier = this.startNode();
	    this.next();
	    if (this.hasPlugin("exportExtensions") && this.eatContextual("as")) {
	      specifier.exported = this.parseIdentifier();
	      node.specifiers = [this.finishNode(specifier, "ExportNamespaceSpecifier")];
	      this.parseExportSpecifiersMaybe(node);
	      this.parseExportFrom(node, true);
	    } else {
	      this.parseExportFrom(node, true);
	      return this.finishNode(node, "ExportAllDeclaration");
	    }
	  } else if (this.hasPlugin("exportExtensions") && this.isExportDefaultSpecifier()) {
	    var _specifier = this.startNode();
	    _specifier.exported = this.parseIdentifier(true);
	    node.specifiers = [this.finishNode(_specifier, "ExportDefaultSpecifier")];
	    if (this.match(types.comma) && this.lookahead().type === types.star) {
	      this.expect(types.comma);
	      var _specifier2 = this.startNode();
	      this.expect(types.star);
	      this.expectContextual("as");
	      _specifier2.exported = this.parseIdentifier();
	      node.specifiers.push(this.finishNode(_specifier2, "ExportNamespaceSpecifier"));
	    } else {
	      this.parseExportSpecifiersMaybe(node);
	    }
	    this.parseExportFrom(node, true);
	  } else if (this.eat(types._default)) {
	    // export default ...
	    var expr = this.startNode();
	    var needsSemi = false;
	    if (this.eat(types._function)) {
	      expr = this.parseFunction(expr, true, false, false, true);
	    } else if (this.match(types._class)) {
	      expr = this.parseClass(expr, true, true);
	    } else {
	      needsSemi = true;
	      expr = this.parseMaybeAssign();
	    }
	    node.declaration = expr;
	    if (needsSemi) this.semicolon();
	    this.checkExport(node, true, true);
	    return this.finishNode(node, "ExportDefaultDeclaration");
	  } else if (this.shouldParseExportDeclaration()) {
	    node.specifiers = [];
	    node.source = null;
	    node.declaration = this.parseExportDeclaration(node);
	  } else {
	    // export { x, y as z } [from '...']
	    node.declaration = null;
	    node.specifiers = this.parseExportSpecifiers();
	    this.parseExportFrom(node);
	  }
	  this.checkExport(node, true);
	  return this.finishNode(node, "ExportNamedDeclaration");
	};

	pp$1.parseExportDeclaration = function () {
	  return this.parseStatement(true);
	};

	pp$1.isExportDefaultSpecifier = function () {
	  if (this.match(types.name)) {
	    return this.state.value !== "async";
	  }

	  if (!this.match(types._default)) {
	    return false;
	  }

	  var lookahead = this.lookahead();
	  return lookahead.type === types.comma || lookahead.type === types.name && lookahead.value === "from";
	};

	pp$1.parseExportSpecifiersMaybe = function (node) {
	  if (this.eat(types.comma)) {
	    node.specifiers = node.specifiers.concat(this.parseExportSpecifiers());
	  }
	};

	pp$1.parseExportFrom = function (node, expect) {
	  if (this.eatContextual("from")) {
	    node.source = this.match(types.string) ? this.parseExprAtom() : this.unexpected();
	    this.checkExport(node);
	  } else {
	    if (expect) {
	      this.unexpected();
	    } else {
	      node.source = null;
	    }
	  }

	  this.semicolon();
	};

	pp$1.shouldParseExportDeclaration = function () {
	  return this.state.type.keyword === "var" || this.state.type.keyword === "const" || this.state.type.keyword === "let" || this.state.type.keyword === "function" || this.state.type.keyword === "class" || this.isContextual("async");
	};

	pp$1.checkExport = function (node, checkNames, isDefault) {
	  if (checkNames) {
	    // Check for duplicate exports
	    if (isDefault) {
	      // Default exports
	      this.checkDuplicateExports(node, "default");
	    } else if (node.specifiers && node.specifiers.length) {
	      // Named exports
	      for (var _iterator2 = node.specifiers, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	        var _ref2;

	        if (_isArray2) {
	          if (_i2 >= _iterator2.length) break;
	          _ref2 = _iterator2[_i2++];
	        } else {
	          _i2 = _iterator2.next();
	          if (_i2.done) break;
	          _ref2 = _i2.value;
	        }

	        var specifier = _ref2;

	        this.checkDuplicateExports(specifier, specifier.exported.name);
	      }
	    } else if (node.declaration) {
	      // Exported declarations
	      if (node.declaration.type === "FunctionDeclaration" || node.declaration.type === "ClassDeclaration") {
	        this.checkDuplicateExports(node, node.declaration.id.name);
	      } else if (node.declaration.type === "VariableDeclaration") {
	        for (var _iterator3 = node.declaration.declarations, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	          var _ref3;

	          if (_isArray3) {
	            if (_i3 >= _iterator3.length) break;
	            _ref3 = _iterator3[_i3++];
	          } else {
	            _i3 = _iterator3.next();
	            if (_i3.done) break;
	            _ref3 = _i3.value;
	          }

	          var declaration = _ref3;

	          this.checkDeclaration(declaration.id);
	        }
	      }
	    }
	  }

	  if (this.state.decorators.length) {
	    var isClass = node.declaration && (node.declaration.type === "ClassDeclaration" || node.declaration.type === "ClassExpression");
	    if (!node.declaration || !isClass) {
	      this.raise(node.start, "You can only use decorators on an export when exporting a class");
	    }
	    this.takeDecorators(node.declaration);
	  }
	};

	pp$1.checkDeclaration = function (node) {
	  if (node.type === "ObjectPattern") {
	    for (var _iterator4 = node.properties, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
	      var _ref4;

	      if (_isArray4) {
	        if (_i4 >= _iterator4.length) break;
	        _ref4 = _iterator4[_i4++];
	      } else {
	        _i4 = _iterator4.next();
	        if (_i4.done) break;
	        _ref4 = _i4.value;
	      }

	      var prop = _ref4;

	      this.checkDeclaration(prop);
	    }
	  } else if (node.type === "ArrayPattern") {
	    for (var _iterator5 = node.elements, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
	      var _ref5;

	      if (_isArray5) {
	        if (_i5 >= _iterator5.length) break;
	        _ref5 = _iterator5[_i5++];
	      } else {
	        _i5 = _iterator5.next();
	        if (_i5.done) break;
	        _ref5 = _i5.value;
	      }

	      var elem = _ref5;

	      if (elem) {
	        this.checkDeclaration(elem);
	      }
	    }
	  } else if (node.type === "ObjectProperty") {
	    this.checkDeclaration(node.value);
	  } else if (node.type === "RestElement" || node.type === "RestProperty") {
	    this.checkDeclaration(node.argument);
	  } else if (node.type === "Identifier") {
	    this.checkDuplicateExports(node, node.name);
	  }
	};

	pp$1.checkDuplicateExports = function (node, name) {
	  if (this.state.exportedIdentifiers.indexOf(name) > -1) {
	    this.raiseDuplicateExportError(node, name);
	  }
	  this.state.exportedIdentifiers.push(name);
	};

	pp$1.raiseDuplicateExportError = function (node, name) {
	  this.raise(node.start, name === "default" ? "Only one default export allowed per module." : "`" + name + "` has already been exported. Exported identifiers must be unique.");
	};

	// Parses a comma-separated list of module exports.

	pp$1.parseExportSpecifiers = function () {
	  var nodes = [];
	  var first = true;
	  var needsFrom = void 0;

	  // export { x, y as z } [from '...']
	  this.expect(types.braceL);

	  while (!this.eat(types.braceR)) {
	    if (first) {
	      first = false;
	    } else {
	      this.expect(types.comma);
	      if (this.eat(types.braceR)) break;
	    }

	    var isDefault = this.match(types._default);
	    if (isDefault && !needsFrom) needsFrom = true;

	    var node = this.startNode();
	    node.local = this.parseIdentifier(isDefault);
	    node.exported = this.eatContextual("as") ? this.parseIdentifier(true) : node.local.__clone();
	    nodes.push(this.finishNode(node, "ExportSpecifier"));
	  }

	  // https://github.com/ember-cli/ember-cli/pull/3739
	  if (needsFrom && !this.isContextual("from")) {
	    this.unexpected();
	  }

	  return nodes;
	};

	// Parses import declaration.

	pp$1.parseImport = function (node) {
	  this.eat(types._import);

	  // import '...'
	  if (this.match(types.string)) {
	    node.specifiers = [];
	    node.source = this.parseExprAtom();
	  } else {
	    node.specifiers = [];
	    this.parseImportSpecifiers(node);
	    this.expectContextual("from");
	    node.source = this.match(types.string) ? this.parseExprAtom() : this.unexpected();
	  }
	  this.semicolon();
	  return this.finishNode(node, "ImportDeclaration");
	};

	// Parses a comma-separated list of module imports.

	pp$1.parseImportSpecifiers = function (node) {
	  var first = true;
	  if (this.match(types.name)) {
	    // import defaultObj, { x, y as z } from '...'
	    var startPos = this.state.start;
	    var startLoc = this.state.startLoc;
	    node.specifiers.push(this.parseImportSpecifierDefault(this.parseIdentifier(), startPos, startLoc));
	    if (!this.eat(types.comma)) return;
	  }

	  if (this.match(types.star)) {
	    var specifier = this.startNode();
	    this.next();
	    this.expectContextual("as");
	    specifier.local = this.parseIdentifier();
	    this.checkLVal(specifier.local, true, undefined, "import namespace specifier");
	    node.specifiers.push(this.finishNode(specifier, "ImportNamespaceSpecifier"));
	    return;
	  }

	  this.expect(types.braceL);
	  while (!this.eat(types.braceR)) {
	    if (first) {
	      first = false;
	    } else {
	      // Detect an attempt to deep destructure
	      if (this.eat(types.colon)) {
	        this.unexpected(null, "ES2015 named imports do not destructure. Use another statement for destructuring after the import.");
	      }

	      this.expect(types.comma);
	      if (this.eat(types.braceR)) break;
	    }

	    this.parseImportSpecifier(node);
	  }
	};

	pp$1.parseImportSpecifier = function (node) {
	  var specifier = this.startNode();
	  specifier.imported = this.parseIdentifier(true);
	  if (this.eatContextual("as")) {
	    specifier.local = this.parseIdentifier();
	  } else {
	    this.checkReservedWord(specifier.imported.name, specifier.start, true, true);
	    specifier.local = specifier.imported.__clone();
	  }
	  this.checkLVal(specifier.local, true, undefined, "import specifier");
	  node.specifiers.push(this.finishNode(specifier, "ImportSpecifier"));
	};

	pp$1.parseImportSpecifierDefault = function (id, startPos, startLoc) {
	  var node = this.startNodeAt(startPos, startLoc);
	  node.local = id;
	  this.checkLVal(node.local, true, undefined, "default import specifier");
	  return this.finishNode(node, "ImportDefaultSpecifier");
	};

	var pp$2 = Parser.prototype;

	// Convert existing expression atom to assignable pattern
	// if possible.

	pp$2.toAssignable = function (node, isBinding, contextDescription) {
	  if (node) {
	    switch (node.type) {
	      case "Identifier":
	      case "ObjectPattern":
	      case "ArrayPattern":
	      case "AssignmentPattern":
	        break;

	      case "ObjectExpression":
	        node.type = "ObjectPattern";
	        for (var _iterator = node.properties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	          var _ref;

	          if (_isArray) {
	            if (_i >= _iterator.length) break;
	            _ref = _iterator[_i++];
	          } else {
	            _i = _iterator.next();
	            if (_i.done) break;
	            _ref = _i.value;
	          }

	          var prop = _ref;

	          if (prop.type === "ObjectMethod") {
	            if (prop.kind === "get" || prop.kind === "set") {
	              this.raise(prop.key.start, "Object pattern can't contain getter or setter");
	            } else {
	              this.raise(prop.key.start, "Object pattern can't contain methods");
	            }
	          } else {
	            this.toAssignable(prop, isBinding, "object destructuring pattern");
	          }
	        }
	        break;

	      case "ObjectProperty":
	        this.toAssignable(node.value, isBinding, contextDescription);
	        break;

	      case "SpreadProperty":
	        node.type = "RestProperty";
	        var arg = node.argument;
	        this.toAssignable(arg, isBinding, contextDescription);
	        break;

	      case "ArrayExpression":
	        node.type = "ArrayPattern";
	        this.toAssignableList(node.elements, isBinding, contextDescription);
	        break;

	      case "AssignmentExpression":
	        if (node.operator === "=") {
	          node.type = "AssignmentPattern";
	          delete node.operator;
	        } else {
	          this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
	        }
	        break;

	      case "MemberExpression":
	        if (!isBinding) break;

	      default:
	        {
	          var message = "Invalid left-hand side" + (contextDescription ? " in " + contextDescription : /* istanbul ignore next */"expression");
	          this.raise(node.start, message);
	        }
	    }
	  }
	  return node;
	};

	// Convert list of expression atoms to binding list.

	pp$2.toAssignableList = function (exprList, isBinding, contextDescription) {
	  var end = exprList.length;
	  if (end) {
	    var last = exprList[end - 1];
	    if (last && last.type === "RestElement") {
	      --end;
	    } else if (last && last.type === "SpreadElement") {
	      last.type = "RestElement";
	      var arg = last.argument;
	      this.toAssignable(arg, isBinding, contextDescription);
	      if (arg.type !== "Identifier" && arg.type !== "MemberExpression" && arg.type !== "ArrayPattern") {
	        this.unexpected(arg.start);
	      }
	      --end;
	    }
	  }
	  for (var i = 0; i < end; i++) {
	    var elt = exprList[i];
	    if (elt) this.toAssignable(elt, isBinding, contextDescription);
	  }
	  return exprList;
	};

	// Convert list of expression atoms to a list of

	pp$2.toReferencedList = function (exprList) {
	  return exprList;
	};

	// Parses spread element.

	pp$2.parseSpread = function (refShorthandDefaultPos) {
	  var node = this.startNode();
	  this.next();
	  node.argument = this.parseMaybeAssign(false, refShorthandDefaultPos);
	  return this.finishNode(node, "SpreadElement");
	};

	pp$2.parseRest = function () {
	  var node = this.startNode();
	  this.next();
	  node.argument = this.parseBindingIdentifier();
	  return this.finishNode(node, "RestElement");
	};

	pp$2.shouldAllowYieldIdentifier = function () {
	  return this.match(types._yield) && !this.state.strict && !this.state.inGenerator;
	};

	pp$2.parseBindingIdentifier = function () {
	  return this.parseIdentifier(this.shouldAllowYieldIdentifier());
	};

	// Parses lvalue (assignable) atom.

	pp$2.parseBindingAtom = function () {
	  switch (this.state.type) {
	    case types._yield:
	      if (this.state.strict || this.state.inGenerator) this.unexpected();
	    // fall-through
	    case types.name:
	      return this.parseIdentifier(true);

	    case types.bracketL:
	      var node = this.startNode();
	      this.next();
	      node.elements = this.parseBindingList(types.bracketR, true);
	      return this.finishNode(node, "ArrayPattern");

	    case types.braceL:
	      return this.parseObj(true);

	    default:
	      this.unexpected();
	  }
	};

	pp$2.parseBindingList = function (close, allowEmpty) {
	  var elts = [];
	  var first = true;
	  while (!this.eat(close)) {
	    if (first) {
	      first = false;
	    } else {
	      this.expect(types.comma);
	    }
	    if (allowEmpty && this.match(types.comma)) {
	      elts.push(null);
	    } else if (this.eat(close)) {
	      break;
	    } else if (this.match(types.ellipsis)) {
	      elts.push(this.parseAssignableListItemTypes(this.parseRest()));
	      this.expect(close);
	      break;
	    } else {
	      var decorators = [];
	      while (this.match(types.at)) {
	        decorators.push(this.parseDecorator());
	      }
	      var left = this.parseMaybeDefault();
	      if (decorators.length) {
	        left.decorators = decorators;
	      }
	      this.parseAssignableListItemTypes(left);
	      elts.push(this.parseMaybeDefault(left.start, left.loc.start, left));
	    }
	  }
	  return elts;
	};

	pp$2.parseAssignableListItemTypes = function (param) {
	  return param;
	};

	// Parses assignment pattern around given atom if possible.

	pp$2.parseMaybeDefault = function (startPos, startLoc, left) {
	  startLoc = startLoc || this.state.startLoc;
	  startPos = startPos || this.state.start;
	  left = left || this.parseBindingAtom();
	  if (!this.eat(types.eq)) return left;

	  var node = this.startNodeAt(startPos, startLoc);
	  node.left = left;
	  node.right = this.parseMaybeAssign();
	  return this.finishNode(node, "AssignmentPattern");
	};

	// Verify that a node is an lval — something that can be assigned
	// to.

	pp$2.checkLVal = function (expr, isBinding, checkClashes, contextDescription) {
	  switch (expr.type) {
	    case "Identifier":
	      this.checkReservedWord(expr.name, expr.start, false, true);

	      if (checkClashes) {
	        // we need to prefix this with an underscore for the cases where we have a key of
	        // `__proto__`. there's a bug in old V8 where the following wouldn't work:
	        //
	        //   > var obj = Object.create(null);
	        //   undefined
	        //   > obj.__proto__
	        //   null
	        //   > obj.__proto__ = true;
	        //   true
	        //   > obj.__proto__
	        //   null
	        var key = "_" + expr.name;

	        if (checkClashes[key]) {
	          this.raise(expr.start, "Argument name clash in strict mode");
	        } else {
	          checkClashes[key] = true;
	        }
	      }
	      break;

	    case "MemberExpression":
	      if (isBinding) this.raise(expr.start, (isBinding ? "Binding" : "Assigning to") + " member expression");
	      break;

	    case "ObjectPattern":
	      for (var _iterator2 = expr.properties, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	        var _ref2;

	        if (_isArray2) {
	          if (_i2 >= _iterator2.length) break;
	          _ref2 = _iterator2[_i2++];
	        } else {
	          _i2 = _iterator2.next();
	          if (_i2.done) break;
	          _ref2 = _i2.value;
	        }

	        var prop = _ref2;

	        if (prop.type === "ObjectProperty") prop = prop.value;
	        this.checkLVal(prop, isBinding, checkClashes, "object destructuring pattern");
	      }
	      break;

	    case "ArrayPattern":
	      for (var _iterator3 = expr.elements, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	        var _ref3;

	        if (_isArray3) {
	          if (_i3 >= _iterator3.length) break;
	          _ref3 = _iterator3[_i3++];
	        } else {
	          _i3 = _iterator3.next();
	          if (_i3.done) break;
	          _ref3 = _i3.value;
	        }

	        var elem = _ref3;

	        if (elem) this.checkLVal(elem, isBinding, checkClashes, "array destructuring pattern");
	      }
	      break;

	    case "AssignmentPattern":
	      this.checkLVal(expr.left, isBinding, checkClashes, "assignment pattern");
	      break;

	    case "RestProperty":
	      this.checkLVal(expr.argument, isBinding, checkClashes, "rest property");
	      break;

	    case "RestElement":
	      this.checkLVal(expr.argument, isBinding, checkClashes, "rest element");
	      break;

	    default:
	      {
	        var message = (isBinding ? /* istanbul ignore next */"Binding invalid" : "Invalid") + " left-hand side" + (contextDescription ? " in " + contextDescription : /* istanbul ignore next */"expression");
	        this.raise(expr.start, message);
	      }
	  }
	};

	/* eslint max-len: 0 */

	// A recursive descent parser operates by defining functions for all
	// syntactic elements, and recursively calling those, each function
	// advancing the input stream and returning an AST node. Precedence
	// of constructs (for example, the fact that `!x[1]` means `!(x[1])`
	// instead of `(!x)[1]` is handled by the fact that the parser
	// function that parses unary prefix operators is called first, and
	// in turn calls the function that parses `[]` subscripts — that
	// way, it'll receive the node for `x[1]` already parsed, and wraps
	// *that* in the unary operator node.
	//
	// Acorn uses an [operator precedence parser][opp] to handle binary
	// operator precedence, because it is much more compact than using
	// the technique outlined above, which uses different, nesting
	// functions to specify precedence, for all of the ten binary
	// precedence levels that JavaScript defines.
	//
	// [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser

	var pp$3 = Parser.prototype;

	// Check if property name clashes with already added.
	// Object/class getters and setters are not allowed to clash —
	// either with each other or with an init property — and in
	// strict mode, init properties are also not allowed to be repeated.

	pp$3.checkPropClash = function (prop, propHash) {
	  if (prop.computed || prop.kind) return;

	  var key = prop.key;
	  // It is either an Identifier or a String/NumericLiteral
	  var name = key.type === "Identifier" ? key.name : String(key.value);

	  if (name === "__proto__") {
	    if (propHash.proto) this.raise(key.start, "Redefinition of __proto__ property");
	    propHash.proto = true;
	  }
	};

	// Convenience method to parse an Expression only
	pp$3.getExpression = function () {
	  this.nextToken();
	  var expr = this.parseExpression();
	  if (!this.match(types.eof)) {
	    this.unexpected();
	  }
	  return expr;
	};

	// ### Expression parsing

	// These nest, from the most general expression type at the top to
	// 'atomic', nondivisible expression types at the bottom. Most of
	// the functions will simply let the function (s) below them parse,
	// and, *if* the syntactic construct they handle is present, wrap
	// the AST node that the inner parser gave them in another node.

	// Parse a full expression. The optional arguments are used to
	// forbid the `in` operator (in for loops initialization expressions)
	// and provide reference for storing '=' operator inside shorthand
	// property assignment in contexts where both object expression
	// and object pattern might appear (so it's possible to raise
	// delayed syntax error at correct position).

	pp$3.parseExpression = function (noIn, refShorthandDefaultPos) {
	  var startPos = this.state.start;
	  var startLoc = this.state.startLoc;
	  var expr = this.parseMaybeAssign(noIn, refShorthandDefaultPos);
	  if (this.match(types.comma)) {
	    var node = this.startNodeAt(startPos, startLoc);
	    node.expressions = [expr];
	    while (this.eat(types.comma)) {
	      node.expressions.push(this.parseMaybeAssign(noIn, refShorthandDefaultPos));
	    }
	    this.toReferencedList(node.expressions);
	    return this.finishNode(node, "SequenceExpression");
	  }
	  return expr;
	};

	// Parse an assignment expression. This includes applications of
	// operators like `+=`.

	pp$3.parseMaybeAssign = function (noIn, refShorthandDefaultPos, afterLeftParse, refNeedsArrowPos) {
	  var startPos = this.state.start;
	  var startLoc = this.state.startLoc;

	  if (this.match(types._yield) && this.state.inGenerator) {
	    var _left = this.parseYield();
	    if (afterLeftParse) _left = afterLeftParse.call(this, _left, startPos, startLoc);
	    return _left;
	  }

	  var failOnShorthandAssign = void 0;
	  if (refShorthandDefaultPos) {
	    failOnShorthandAssign = false;
	  } else {
	    refShorthandDefaultPos = { start: 0 };
	    failOnShorthandAssign = true;
	  }

	  if (this.match(types.parenL) || this.match(types.name)) {
	    this.state.potentialArrowAt = this.state.start;
	  }

	  var left = this.parseMaybeConditional(noIn, refShorthandDefaultPos, refNeedsArrowPos);
	  if (afterLeftParse) left = afterLeftParse.call(this, left, startPos, startLoc);
	  if (this.state.type.isAssign) {
	    var node = this.startNodeAt(startPos, startLoc);
	    node.operator = this.state.value;
	    node.left = this.match(types.eq) ? this.toAssignable(left, undefined, "assignment expression") : left;
	    refShorthandDefaultPos.start = 0; // reset because shorthand default was used correctly

	    this.checkLVal(left, undefined, undefined, "assignment expression");

	    if (left.extra && left.extra.parenthesized) {
	      var errorMsg = void 0;
	      if (left.type === "ObjectPattern") {
	        errorMsg = "`({a}) = 0` use `({a} = 0)`";
	      } else if (left.type === "ArrayPattern") {
	        errorMsg = "`([a]) = 0` use `([a] = 0)`";
	      }
	      if (errorMsg) {
	        this.raise(left.start, "You're trying to assign to a parenthesized expression, eg. instead of " + errorMsg);
	      }
	    }

	    this.next();
	    node.right = this.parseMaybeAssign(noIn);
	    return this.finishNode(node, "AssignmentExpression");
	  } else if (failOnShorthandAssign && refShorthandDefaultPos.start) {
	    this.unexpected(refShorthandDefaultPos.start);
	  }

	  return left;
	};

	// Parse a ternary conditional (`?:`) operator.

	pp$3.parseMaybeConditional = function (noIn, refShorthandDefaultPos, refNeedsArrowPos) {
	  var startPos = this.state.start;
	  var startLoc = this.state.startLoc;
	  var expr = this.parseExprOps(noIn, refShorthandDefaultPos);
	  if (refShorthandDefaultPos && refShorthandDefaultPos.start) return expr;

	  return this.parseConditional(expr, noIn, startPos, startLoc, refNeedsArrowPos);
	};

	pp$3.parseConditional = function (expr, noIn, startPos, startLoc) {
	  if (this.eat(types.question)) {
	    var node = this.startNodeAt(startPos, startLoc);
	    node.test = expr;
	    node.consequent = this.parseMaybeAssign();
	    this.expect(types.colon);
	    node.alternate = this.parseMaybeAssign(noIn);
	    return this.finishNode(node, "ConditionalExpression");
	  }
	  return expr;
	};

	// Start the precedence parser.

	pp$3.parseExprOps = function (noIn, refShorthandDefaultPos) {
	  var startPos = this.state.start;
	  var startLoc = this.state.startLoc;
	  var expr = this.parseMaybeUnary(refShorthandDefaultPos);
	  if (refShorthandDefaultPos && refShorthandDefaultPos.start) {
	    return expr;
	  } else {
	    return this.parseExprOp(expr, startPos, startLoc, -1, noIn);
	  }
	};

	// Parse binary operators with the operator precedence parsing
	// algorithm. `left` is the left-hand side of the operator.
	// `minPrec` provides context that allows the function to stop and
	// defer further parser to one of its callers when it encounters an
	// operator that has a lower precedence than the set it is parsing.

	pp$3.parseExprOp = function (left, leftStartPos, leftStartLoc, minPrec, noIn) {
	  var prec = this.state.type.binop;
	  if (prec != null && (!noIn || !this.match(types._in))) {
	    if (prec > minPrec) {
	      var node = this.startNodeAt(leftStartPos, leftStartLoc);
	      node.left = left;
	      node.operator = this.state.value;

	      if (node.operator === "**" && left.type === "UnaryExpression" && left.extra && !left.extra.parenthesizedArgument && !left.extra.parenthesized) {
	        this.raise(left.argument.start, "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.");
	      }

	      var op = this.state.type;
	      this.next();

	      var startPos = this.state.start;
	      var startLoc = this.state.startLoc;
	      node.right = this.parseExprOp(this.parseMaybeUnary(), startPos, startLoc, op.rightAssociative ? prec - 1 : prec, noIn);

	      this.finishNode(node, op === types.logicalOR || op === types.logicalAND ? "LogicalExpression" : "BinaryExpression");
	      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn);
	    }
	  }
	  return left;
	};

	// Parse unary operators, both prefix and postfix.

	pp$3.parseMaybeUnary = function (refShorthandDefaultPos) {
	  if (this.state.type.prefix) {
	    var node = this.startNode();
	    var update = this.match(types.incDec);
	    node.operator = this.state.value;
	    node.prefix = true;
	    this.next();

	    var argType = this.state.type;
	    node.argument = this.parseMaybeUnary();

	    this.addExtra(node, "parenthesizedArgument", argType === types.parenL && (!node.argument.extra || !node.argument.extra.parenthesized));

	    if (refShorthandDefaultPos && refShorthandDefaultPos.start) {
	      this.unexpected(refShorthandDefaultPos.start);
	    }

	    if (update) {
	      this.checkLVal(node.argument, undefined, undefined, "prefix operation");
	    } else if (this.state.strict && node.operator === "delete" && node.argument.type === "Identifier") {
	      this.raise(node.start, "Deleting local variable in strict mode");
	    }

	    return this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
	  }

	  var startPos = this.state.start;
	  var startLoc = this.state.startLoc;
	  var expr = this.parseExprSubscripts(refShorthandDefaultPos);
	  if (refShorthandDefaultPos && refShorthandDefaultPos.start) return expr;
	  while (this.state.type.postfix && !this.canInsertSemicolon()) {
	    var _node = this.startNodeAt(startPos, startLoc);
	    _node.operator = this.state.value;
	    _node.prefix = false;
	    _node.argument = expr;
	    this.checkLVal(expr, undefined, undefined, "postfix operation");
	    this.next();
	    expr = this.finishNode(_node, "UpdateExpression");
	  }
	  return expr;
	};

	// Parse call, dot, and `[]`-subscript expressions.

	pp$3.parseExprSubscripts = function (refShorthandDefaultPos) {
	  var startPos = this.state.start;
	  var startLoc = this.state.startLoc;
	  var potentialArrowAt = this.state.potentialArrowAt;
	  var expr = this.parseExprAtom(refShorthandDefaultPos);

	  if (expr.type === "ArrowFunctionExpression" && expr.start === potentialArrowAt) {
	    return expr;
	  }

	  if (refShorthandDefaultPos && refShorthandDefaultPos.start) {
	    return expr;
	  }

	  return this.parseSubscripts(expr, startPos, startLoc);
	};

	pp$3.parseSubscripts = function (base, startPos, startLoc, noCalls) {
	  for (;;) {
	    if (!noCalls && this.eat(types.doubleColon)) {
	      var node = this.startNodeAt(startPos, startLoc);
	      node.object = base;
	      node.callee = this.parseNoCallExpr();
	      return this.parseSubscripts(this.finishNode(node, "BindExpression"), startPos, startLoc, noCalls);
	    } else if (this.eat(types.dot)) {
	      var _node2 = this.startNodeAt(startPos, startLoc);
	      _node2.object = base;
	      _node2.property = this.parseIdentifier(true);
	      _node2.computed = false;
	      base = this.finishNode(_node2, "MemberExpression");
	    } else if (this.eat(types.bracketL)) {
	      var _node3 = this.startNodeAt(startPos, startLoc);
	      _node3.object = base;
	      _node3.property = this.parseExpression();
	      _node3.computed = true;
	      this.expect(types.bracketR);
	      base = this.finishNode(_node3, "MemberExpression");
	    } else if (!noCalls && this.match(types.parenL)) {
	      var possibleAsync = this.state.potentialArrowAt === base.start && base.type === "Identifier" && base.name === "async" && !this.canInsertSemicolon();
	      this.next();

	      var _node4 = this.startNodeAt(startPos, startLoc);
	      _node4.callee = base;
	      _node4.arguments = this.parseCallExpressionArguments(types.parenR, possibleAsync);
	      if (_node4.callee.type === "Import" && _node4.arguments.length !== 1) {
	        this.raise(_node4.start, "import() requires exactly one argument");
	      }
	      base = this.finishNode(_node4, "CallExpression");

	      if (possibleAsync && this.shouldParseAsyncArrow()) {
	        return this.parseAsyncArrowFromCallExpression(this.startNodeAt(startPos, startLoc), _node4);
	      } else {
	        this.toReferencedList(_node4.arguments);
	      }
	    } else if (this.match(types.backQuote)) {
	      var _node5 = this.startNodeAt(startPos, startLoc);
	      _node5.tag = base;
	      _node5.quasi = this.parseTemplate(true);
	      base = this.finishNode(_node5, "TaggedTemplateExpression");
	    } else {
	      return base;
	    }
	  }
	};

	pp$3.parseCallExpressionArguments = function (close, possibleAsyncArrow) {
	  var elts = [];
	  var innerParenStart = void 0;
	  var first = true;

	  while (!this.eat(close)) {
	    if (first) {
	      first = false;
	    } else {
	      this.expect(types.comma);
	      if (this.eat(close)) break;
	    }

	    // we need to make sure that if this is an async arrow functions, that we don't allow inner parens inside the params
	    if (this.match(types.parenL) && !innerParenStart) {
	      innerParenStart = this.state.start;
	    }

	    elts.push(this.parseExprListItem(false, possibleAsyncArrow ? { start: 0 } : undefined, possibleAsyncArrow ? { start: 0 } : undefined));
	  }

	  // we found an async arrow function so let's not allow any inner parens
	  if (possibleAsyncArrow && innerParenStart && this.shouldParseAsyncArrow()) {
	    this.unexpected();
	  }

	  return elts;
	};

	pp$3.shouldParseAsyncArrow = function () {
	  return this.match(types.arrow);
	};

	pp$3.parseAsyncArrowFromCallExpression = function (node, call) {
	  this.expect(types.arrow);
	  return this.parseArrowExpression(node, call.arguments, true);
	};

	// Parse a no-call expression (like argument of `new` or `::` operators).

	pp$3.parseNoCallExpr = function () {
	  var startPos = this.state.start;
	  var startLoc = this.state.startLoc;
	  return this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
	};

	// Parse an atomic expression — either a single token that is an
	// expression, an expression started by a keyword like `function` or
	// `new`, or an expression wrapped in punctuation like `()`, `[]`,
	// or `{}`.

	pp$3.parseExprAtom = function (refShorthandDefaultPos) {
	  var canBeArrow = this.state.potentialArrowAt === this.state.start;
	  var node = void 0;

	  switch (this.state.type) {
	    case types._super:
	      if (!this.state.inMethod && !this.state.inClassProperty && !this.options.allowSuperOutsideMethod) {
	        this.raise(this.state.start, "'super' outside of function or class");
	      }

	      node = this.startNode();
	      this.next();
	      if (!this.match(types.parenL) && !this.match(types.bracketL) && !this.match(types.dot)) {
	        this.unexpected();
	      }
	      if (this.match(types.parenL) && this.state.inMethod !== "constructor" && !this.options.allowSuperOutsideMethod) {
	        this.raise(node.start, "super() outside of class constructor");
	      }
	      return this.finishNode(node, "Super");

	    case types._import:
	      if (!this.hasPlugin("dynamicImport")) this.unexpected();

	      node = this.startNode();
	      this.next();
	      if (!this.match(types.parenL)) {
	        this.unexpected(null, types.parenL);
	      }
	      return this.finishNode(node, "Import");

	    case types._this:
	      node = this.startNode();
	      this.next();
	      return this.finishNode(node, "ThisExpression");

	    case types._yield:
	      if (this.state.inGenerator) this.unexpected();

	    case types.name:
	      node = this.startNode();
	      var allowAwait = this.state.value === "await" && this.state.inAsync;
	      var allowYield = this.shouldAllowYieldIdentifier();
	      var id = this.parseIdentifier(allowAwait || allowYield);

	      if (id.name === "await") {
	        if (this.state.inAsync || this.inModule) {
	          return this.parseAwait(node);
	        }
	      } else if (id.name === "async" && this.match(types._function) && !this.canInsertSemicolon()) {
	        this.next();
	        return this.parseFunction(node, false, false, true);
	      } else if (canBeArrow && id.name === "async" && this.match(types.name)) {
	        var params = [this.parseIdentifier()];
	        this.expect(types.arrow);
	        // let foo = bar => {};
	        return this.parseArrowExpression(node, params, true);
	      }

	      if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
	        return this.parseArrowExpression(node, [id]);
	      }

	      return id;

	    case types._do:
	      if (this.hasPlugin("doExpressions")) {
	        var _node6 = this.startNode();
	        this.next();
	        var oldInFunction = this.state.inFunction;
	        var oldLabels = this.state.labels;
	        this.state.labels = [];
	        this.state.inFunction = false;
	        _node6.body = this.parseBlock(false, true);
	        this.state.inFunction = oldInFunction;
	        this.state.labels = oldLabels;
	        return this.finishNode(_node6, "DoExpression");
	      }

	    case types.regexp:
	      var value = this.state.value;
	      node = this.parseLiteral(value.value, "RegExpLiteral");
	      node.pattern = value.pattern;
	      node.flags = value.flags;
	      return node;

	    case types.num:
	      return this.parseLiteral(this.state.value, "NumericLiteral");

	    case types.string:
	      return this.parseLiteral(this.state.value, "StringLiteral");

	    case types._null:
	      node = this.startNode();
	      this.next();
	      return this.finishNode(node, "NullLiteral");

	    case types._true:case types._false:
	      node = this.startNode();
	      node.value = this.match(types._true);
	      this.next();
	      return this.finishNode(node, "BooleanLiteral");

	    case types.parenL:
	      return this.parseParenAndDistinguishExpression(null, null, canBeArrow);

	    case types.bracketL:
	      node = this.startNode();
	      this.next();
	      node.elements = this.parseExprList(types.bracketR, true, refShorthandDefaultPos);
	      this.toReferencedList(node.elements);
	      return this.finishNode(node, "ArrayExpression");

	    case types.braceL:
	      return this.parseObj(false, refShorthandDefaultPos);

	    case types._function:
	      return this.parseFunctionExpression();

	    case types.at:
	      this.parseDecorators();

	    case types._class:
	      node = this.startNode();
	      this.takeDecorators(node);
	      return this.parseClass(node, false);

	    case types._new:
	      return this.parseNew();

	    case types.backQuote:
	      return this.parseTemplate(false);

	    case types.doubleColon:
	      node = this.startNode();
	      this.next();
	      node.object = null;
	      var callee = node.callee = this.parseNoCallExpr();
	      if (callee.type === "MemberExpression") {
	        return this.finishNode(node, "BindExpression");
	      } else {
	        this.raise(callee.start, "Binding should be performed on object property.");
	      }

	    default:
	      this.unexpected();
	  }
	};

	pp$3.parseFunctionExpression = function () {
	  var node = this.startNode();
	  var meta = this.parseIdentifier(true);
	  if (this.state.inGenerator && this.eat(types.dot) && this.hasPlugin("functionSent")) {
	    return this.parseMetaProperty(node, meta, "sent");
	  } else {
	    return this.parseFunction(node, false);
	  }
	};

	pp$3.parseMetaProperty = function (node, meta, propertyName) {
	  node.meta = meta;
	  node.property = this.parseIdentifier(true);

	  if (node.property.name !== propertyName) {
	    this.raise(node.property.start, "The only valid meta property for new is " + meta.name + "." + propertyName);
	  }

	  return this.finishNode(node, "MetaProperty");
	};

	pp$3.parseLiteral = function (value, type, startPos, startLoc) {
	  startPos = startPos || this.state.start;
	  startLoc = startLoc || this.state.startLoc;

	  var node = this.startNodeAt(startPos, startLoc);
	  this.addExtra(node, "rawValue", value);
	  this.addExtra(node, "raw", this.input.slice(startPos, this.state.end));
	  node.value = value;
	  this.next();
	  return this.finishNode(node, type);
	};

	pp$3.parseParenExpression = function () {
	  this.expect(types.parenL);
	  var val = this.parseExpression();
	  this.expect(types.parenR);
	  return val;
	};

	pp$3.parseParenAndDistinguishExpression = function (startPos, startLoc, canBeArrow) {
	  startPos = startPos || this.state.start;
	  startLoc = startLoc || this.state.startLoc;

	  var val = void 0;
	  this.expect(types.parenL);

	  var innerStartPos = this.state.start;
	  var innerStartLoc = this.state.startLoc;
	  var exprList = [];
	  var refShorthandDefaultPos = { start: 0 };
	  var refNeedsArrowPos = { start: 0 };
	  var first = true;
	  var spreadStart = void 0;
	  var optionalCommaStart = void 0;

	  while (!this.match(types.parenR)) {
	    if (first) {
	      first = false;
	    } else {
	      this.expect(types.comma, refNeedsArrowPos.start || null);
	      if (this.match(types.parenR)) {
	        optionalCommaStart = this.state.start;
	        break;
	      }
	    }

	    if (this.match(types.ellipsis)) {
	      var spreadNodeStartPos = this.state.start;
	      var spreadNodeStartLoc = this.state.startLoc;
	      spreadStart = this.state.start;
	      exprList.push(this.parseParenItem(this.parseRest(), spreadNodeStartPos, spreadNodeStartLoc));
	      break;
	    } else {
	      exprList.push(this.parseMaybeAssign(false, refShorthandDefaultPos, this.parseParenItem, refNeedsArrowPos));
	    }
	  }

	  var innerEndPos = this.state.start;
	  var innerEndLoc = this.state.startLoc;
	  this.expect(types.parenR);

	  var arrowNode = this.startNodeAt(startPos, startLoc);
	  if (canBeArrow && this.shouldParseArrow() && (arrowNode = this.parseArrow(arrowNode))) {
	    for (var _iterator = exprList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var param = _ref;

	      if (param.extra && param.extra.parenthesized) this.unexpected(param.extra.parenStart);
	    }

	    return this.parseArrowExpression(arrowNode, exprList);
	  }

	  if (!exprList.length) {
	    this.unexpected(this.state.lastTokStart);
	  }
	  if (optionalCommaStart) this.unexpected(optionalCommaStart);
	  if (spreadStart) this.unexpected(spreadStart);
	  if (refShorthandDefaultPos.start) this.unexpected(refShorthandDefaultPos.start);
	  if (refNeedsArrowPos.start) this.unexpected(refNeedsArrowPos.start);

	  if (exprList.length > 1) {
	    val = this.startNodeAt(innerStartPos, innerStartLoc);
	    val.expressions = exprList;
	    this.toReferencedList(val.expressions);
	    this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
	  } else {
	    val = exprList[0];
	  }

	  this.addExtra(val, "parenthesized", true);
	  this.addExtra(val, "parenStart", startPos);

	  return val;
	};

	pp$3.shouldParseArrow = function () {
	  return !this.canInsertSemicolon();
	};

	pp$3.parseArrow = function (node) {
	  if (this.eat(types.arrow)) {
	    return node;
	  }
	};

	pp$3.parseParenItem = function (node) {
	  return node;
	};

	// New's precedence is slightly tricky. It must allow its argument
	// to be a `[]` or dot subscript expression, but not a call — at
	// least, not without wrapping it in parentheses. Thus, it uses the

	pp$3.parseNew = function () {
	  var node = this.startNode();
	  var meta = this.parseIdentifier(true);

	  if (this.eat(types.dot)) {
	    var metaProp = this.parseMetaProperty(node, meta, "target");

	    if (!this.state.inFunction) {
	      this.raise(metaProp.property.start, "new.target can only be used in functions");
	    }

	    return metaProp;
	  }

	  node.callee = this.parseNoCallExpr();

	  if (this.eat(types.parenL)) {
	    node.arguments = this.parseExprList(types.parenR);
	    this.toReferencedList(node.arguments);
	  } else {
	    node.arguments = [];
	  }

	  return this.finishNode(node, "NewExpression");
	};

	// Parse template expression.

	pp$3.parseTemplateElement = function (isTagged) {
	  var elem = this.startNode();
	  if (this.state.value === null) {
	    if (!isTagged || !this.hasPlugin("templateInvalidEscapes")) {
	      this.raise(this.state.invalidTemplateEscapePosition, "Invalid escape sequence in template");
	    } else {
	      this.state.invalidTemplateEscapePosition = null;
	    }
	  }
	  elem.value = {
	    raw: this.input.slice(this.state.start, this.state.end).replace(/\r\n?/g, "\n"),
	    cooked: this.state.value
	  };
	  this.next();
	  elem.tail = this.match(types.backQuote);
	  return this.finishNode(elem, "TemplateElement");
	};

	pp$3.parseTemplate = function (isTagged) {
	  var node = this.startNode();
	  this.next();
	  node.expressions = [];
	  var curElt = this.parseTemplateElement(isTagged);
	  node.quasis = [curElt];
	  while (!curElt.tail) {
	    this.expect(types.dollarBraceL);
	    node.expressions.push(this.parseExpression());
	    this.expect(types.braceR);
	    node.quasis.push(curElt = this.parseTemplateElement(isTagged));
	  }
	  this.next();
	  return this.finishNode(node, "TemplateLiteral");
	};

	// Parse an object literal or binding pattern.

	pp$3.parseObj = function (isPattern, refShorthandDefaultPos) {
	  var decorators = [];
	  var propHash = Object.create(null);
	  var first = true;
	  var node = this.startNode();

	  node.properties = [];
	  this.next();

	  var firstRestLocation = null;

	  while (!this.eat(types.braceR)) {
	    if (first) {
	      first = false;
	    } else {
	      this.expect(types.comma);
	      if (this.eat(types.braceR)) break;
	    }

	    while (this.match(types.at)) {
	      decorators.push(this.parseDecorator());
	    }

	    var prop = this.startNode(),
	        isGenerator = false,
	        isAsync = false,
	        startPos = void 0,
	        startLoc = void 0;
	    if (decorators.length) {
	      prop.decorators = decorators;
	      decorators = [];
	    }

	    if (this.hasPlugin("objectRestSpread") && this.match(types.ellipsis)) {
	      prop = this.parseSpread(isPattern ? { start: 0 } : undefined);
	      prop.type = isPattern ? "RestProperty" : "SpreadProperty";
	      if (isPattern) this.toAssignable(prop.argument, true, "object pattern");
	      node.properties.push(prop);
	      if (isPattern) {
	        var position = this.state.start;
	        if (firstRestLocation !== null) {
	          this.unexpected(firstRestLocation, "Cannot have multiple rest elements when destructuring");
	        } else if (this.eat(types.braceR)) {
	          break;
	        } else if (this.match(types.comma) && this.lookahead().type === types.braceR) {
	          // TODO: temporary rollback
	          // this.unexpected(position, "A trailing comma is not permitted after the rest element");
	          continue;
	        } else {
	          firstRestLocation = position;
	          continue;
	        }
	      } else {
	        continue;
	      }
	    }

	    prop.method = false;
	    prop.shorthand = false;

	    if (isPattern || refShorthandDefaultPos) {
	      startPos = this.state.start;
	      startLoc = this.state.startLoc;
	    }

	    if (!isPattern) {
	      isGenerator = this.eat(types.star);
	    }

	    if (!isPattern && this.isContextual("async")) {
	      if (isGenerator) this.unexpected();

	      var asyncId = this.parseIdentifier();
	      if (this.match(types.colon) || this.match(types.parenL) || this.match(types.braceR) || this.match(types.eq) || this.match(types.comma)) {
	        prop.key = asyncId;
	        prop.computed = false;
	      } else {
	        isAsync = true;
	        if (this.hasPlugin("asyncGenerators")) isGenerator = this.eat(types.star);
	        this.parsePropertyName(prop);
	      }
	    } else {
	      this.parsePropertyName(prop);
	    }

	    this.parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, refShorthandDefaultPos);
	    this.checkPropClash(prop, propHash);

	    if (prop.shorthand) {
	      this.addExtra(prop, "shorthand", true);
	    }

	    node.properties.push(prop);
	  }

	  if (firstRestLocation !== null) {
	    this.unexpected(firstRestLocation, "The rest element has to be the last element when destructuring");
	  }

	  if (decorators.length) {
	    this.raise(this.state.start, "You have trailing decorators with no property");
	  }

	  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
	};

	pp$3.isGetterOrSetterMethod = function (prop, isPattern) {
	  return !isPattern && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.match(types.string) || // get "string"() {}
	  this.match(types.num) || // get 1() {}
	  this.match(types.bracketL) || // get ["string"]() {}
	  this.match(types.name) || // get foo() {}
	  this.state.type.keyword // get debugger() {}
	  );
	};

	// get methods aren't allowed to have any parameters
	// set methods must have exactly 1 parameter
	pp$3.checkGetterSetterParamCount = function (method) {
	  var paramCount = method.kind === "get" ? 0 : 1;
	  if (method.params.length !== paramCount) {
	    var start = method.start;
	    if (method.kind === "get") {
	      this.raise(start, "getter should have no params");
	    } else {
	      this.raise(start, "setter should have exactly one param");
	    }
	  }
	};

	pp$3.parseObjectMethod = function (prop, isGenerator, isAsync, isPattern) {
	  if (isAsync || isGenerator || this.match(types.parenL)) {
	    if (isPattern) this.unexpected();
	    prop.kind = "method";
	    prop.method = true;
	    this.parseMethod(prop, isGenerator, isAsync);

	    return this.finishNode(prop, "ObjectMethod");
	  }

	  if (this.isGetterOrSetterMethod(prop, isPattern)) {
	    if (isGenerator || isAsync) this.unexpected();
	    prop.kind = prop.key.name;
	    this.parsePropertyName(prop);
	    this.parseMethod(prop);
	    this.checkGetterSetterParamCount(prop);

	    return this.finishNode(prop, "ObjectMethod");
	  }
	};

	pp$3.parseObjectProperty = function (prop, startPos, startLoc, isPattern, refShorthandDefaultPos) {
	  if (this.eat(types.colon)) {
	    prop.value = isPattern ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssign(false, refShorthandDefaultPos);

	    return this.finishNode(prop, "ObjectProperty");
	  }

	  if (!prop.computed && prop.key.type === "Identifier") {
	    this.checkReservedWord(prop.key.name, prop.key.start, true, true);

	    if (isPattern) {
	      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
	    } else if (this.match(types.eq) && refShorthandDefaultPos) {
	      if (!refShorthandDefaultPos.start) {
	        refShorthandDefaultPos.start = this.state.start;
	      }
	      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
	    } else {
	      prop.value = prop.key.__clone();
	    }
	    prop.shorthand = true;

	    return this.finishNode(prop, "ObjectProperty");
	  }
	};

	pp$3.parseObjPropValue = function (prop, startPos, startLoc, isGenerator, isAsync, isPattern, refShorthandDefaultPos) {
	  var node = this.parseObjectMethod(prop, isGenerator, isAsync, isPattern) || this.parseObjectProperty(prop, startPos, startLoc, isPattern, refShorthandDefaultPos);

	  if (!node) this.unexpected();

	  return node;
	};

	pp$3.parsePropertyName = function (prop) {
	  if (this.eat(types.bracketL)) {
	    prop.computed = true;
	    prop.key = this.parseMaybeAssign();
	    this.expect(types.bracketR);
	  } else {
	    prop.computed = false;
	    var oldInPropertyName = this.state.inPropertyName;
	    this.state.inPropertyName = true;
	    prop.key = this.match(types.num) || this.match(types.string) ? this.parseExprAtom() : this.parseIdentifier(true);
	    this.state.inPropertyName = oldInPropertyName;
	  }
	  return prop.key;
	};

	// Initialize empty function node.

	pp$3.initFunction = function (node, isAsync) {
	  node.id = null;
	  node.generator = false;
	  node.expression = false;
	  node.async = !!isAsync;
	};

	// Parse object or class method.

	pp$3.parseMethod = function (node, isGenerator, isAsync) {
	  var oldInMethod = this.state.inMethod;
	  this.state.inMethod = node.kind || true;
	  this.initFunction(node, isAsync);
	  this.expect(types.parenL);
	  node.params = this.parseBindingList(types.parenR);
	  node.generator = !!isGenerator;
	  this.parseFunctionBody(node);
	  this.state.inMethod = oldInMethod;
	  return node;
	};

	// Parse arrow function expression with given parameters.

	pp$3.parseArrowExpression = function (node, params, isAsync) {
	  this.initFunction(node, isAsync);
	  node.params = this.toAssignableList(params, true, "arrow function parameters");
	  this.parseFunctionBody(node, true);
	  return this.finishNode(node, "ArrowFunctionExpression");
	};

	pp$3.isStrictBody = function (node, isExpression) {
	  if (!isExpression && node.body.directives.length) {
	    for (var _iterator2 = node.body.directives, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	      var _ref2;

	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }

	      var directive = _ref2;

	      if (directive.value.value === "use strict") {
	        return true;
	      }
	    }
	  }

	  return false;
	};

	// Parse function body and check parameters.
	pp$3.parseFunctionBody = function (node, allowExpression) {
	  var isExpression = allowExpression && !this.match(types.braceL);

	  var oldInAsync = this.state.inAsync;
	  this.state.inAsync = node.async;
	  if (isExpression) {
	    node.body = this.parseMaybeAssign();
	    node.expression = true;
	  } else {
	    // Start a new scope with regard to labels and the `inFunction`
	    // flag (restore them to their old value afterwards).
	    var oldInFunc = this.state.inFunction;
	    var oldInGen = this.state.inGenerator;
	    var oldLabels = this.state.labels;
	    this.state.inFunction = true;this.state.inGenerator = node.generator;this.state.labels = [];
	    node.body = this.parseBlock(true);
	    node.expression = false;
	    this.state.inFunction = oldInFunc;this.state.inGenerator = oldInGen;this.state.labels = oldLabels;
	  }
	  this.state.inAsync = oldInAsync;

	  // If this is a strict mode function, verify that argument names
	  // are not repeated, and it does not try to bind the words `eval`
	  // or `arguments`.
	  var isStrict = this.isStrictBody(node, isExpression);
	  // Also check when allowExpression === true for arrow functions
	  var checkLVal = this.state.strict || allowExpression || isStrict;

	  if (isStrict && node.id && node.id.type === "Identifier" && node.id.name === "yield") {
	    this.raise(node.id.start, "Binding yield in strict mode");
	  }

	  if (checkLVal) {
	    var nameHash = Object.create(null);
	    var oldStrict = this.state.strict;
	    if (isStrict) this.state.strict = true;
	    if (node.id) {
	      this.checkLVal(node.id, true, undefined, "function name");
	    }
	    for (var _iterator3 = node.params, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	      var _ref3;

	      if (_isArray3) {
	        if (_i3 >= _iterator3.length) break;
	        _ref3 = _iterator3[_i3++];
	      } else {
	        _i3 = _iterator3.next();
	        if (_i3.done) break;
	        _ref3 = _i3.value;
	      }

	      var param = _ref3;

	      if (isStrict && param.type !== "Identifier") {
	        this.raise(param.start, "Non-simple parameter in strict mode");
	      }
	      this.checkLVal(param, true, nameHash, "function parameter list");
	    }
	    this.state.strict = oldStrict;
	  }
	};

	// Parses a comma-separated list of expressions, and returns them as
	// an array. `close` is the token type that ends the list, and
	// `allowEmpty` can be turned on to allow subsequent commas with
	// nothing in between them to be parsed as `null` (which is needed
	// for array literals).

	pp$3.parseExprList = function (close, allowEmpty, refShorthandDefaultPos) {
	  var elts = [];
	  var first = true;

	  while (!this.eat(close)) {
	    if (first) {
	      first = false;
	    } else {
	      this.expect(types.comma);
	      if (this.eat(close)) break;
	    }

	    elts.push(this.parseExprListItem(allowEmpty, refShorthandDefaultPos));
	  }
	  return elts;
	};

	pp$3.parseExprListItem = function (allowEmpty, refShorthandDefaultPos, refNeedsArrowPos) {
	  var elt = void 0;
	  if (allowEmpty && this.match(types.comma)) {
	    elt = null;
	  } else if (this.match(types.ellipsis)) {
	    elt = this.parseSpread(refShorthandDefaultPos);
	  } else {
	    elt = this.parseMaybeAssign(false, refShorthandDefaultPos, this.parseParenItem, refNeedsArrowPos);
	  }
	  return elt;
	};

	// Parse the next token as an identifier. If `liberal` is true (used
	// when parsing properties), it will also convert keywords into
	// identifiers.

	pp$3.parseIdentifier = function (liberal) {
	  var node = this.startNode();
	  if (!liberal) {
	    this.checkReservedWord(this.state.value, this.state.start, !!this.state.type.keyword, false);
	  }

	  if (this.match(types.name)) {
	    node.name = this.state.value;
	  } else if (this.state.type.keyword) {
	    node.name = this.state.type.keyword;
	  } else {
	    this.unexpected();
	  }

	  if (!liberal && node.name === "await" && this.state.inAsync) {
	    this.raise(node.start, "invalid use of await inside of an async function");
	  }

	  node.loc.identifierName = node.name;

	  this.next();
	  return this.finishNode(node, "Identifier");
	};

	pp$3.checkReservedWord = function (word, startLoc, checkKeywords, isBinding) {
	  if (this.isReservedWord(word) || checkKeywords && this.isKeyword(word)) {
	    this.raise(startLoc, word + " is a reserved word");
	  }

	  if (this.state.strict && (reservedWords.strict(word) || isBinding && reservedWords.strictBind(word))) {
	    this.raise(startLoc, word + " is a reserved word in strict mode");
	  }
	};

	// Parses await expression inside async function.

	pp$3.parseAwait = function (node) {
	  // istanbul ignore next: this condition is checked at the call site so won't be hit here
	  if (!this.state.inAsync) {
	    this.unexpected();
	  }
	  if (this.match(types.star)) {
	    this.raise(node.start, "await* has been removed from the async functions proposal. Use Promise.all() instead.");
	  }
	  node.argument = this.parseMaybeUnary();
	  return this.finishNode(node, "AwaitExpression");
	};

	// Parses yield expression inside generator.

	pp$3.parseYield = function () {
	  var node = this.startNode();
	  this.next();
	  if (this.match(types.semi) || this.canInsertSemicolon() || !this.match(types.star) && !this.state.type.startsExpr) {
	    node.delegate = false;
	    node.argument = null;
	  } else {
	    node.delegate = this.eat(types.star);
	    node.argument = this.parseMaybeAssign();
	  }
	  return this.finishNode(node, "YieldExpression");
	};

	// Start an AST node, attaching a start offset.

	var pp$4 = Parser.prototype;
	var commentKeys = ["leadingComments", "trailingComments", "innerComments"];

	var Node = function () {
	  function Node(pos, loc, filename) {
	    classCallCheck(this, Node);

	    this.type = "";
	    this.start = pos;
	    this.end = 0;
	    this.loc = new SourceLocation(loc);
	    if (filename) this.loc.filename = filename;
	  }

	  Node.prototype.__clone = function __clone() {
	    var node2 = new Node();
	    for (var key in this) {
	      // Do not clone comments that are already attached to the node
	      if (commentKeys.indexOf(key) < 0) {
	        node2[key] = this[key];
	      }
	    }

	    return node2;
	  };

	  return Node;
	}();

	pp$4.startNode = function () {
	  return new Node(this.state.start, this.state.startLoc, this.filename);
	};

	pp$4.startNodeAt = function (pos, loc) {
	  return new Node(pos, loc, this.filename);
	};

	function finishNodeAt(node, type, pos, loc) {
	  node.type = type;
	  node.end = pos;
	  node.loc.end = loc;
	  this.processComment(node);
	  return node;
	}

	// Finish an AST node, adding `type` and `end` properties.

	pp$4.finishNode = function (node, type) {
	  return finishNodeAt.call(this, node, type, this.state.lastTokEnd, this.state.lastTokEndLoc);
	};

	// Finish node at given position

	pp$4.finishNodeAt = function (node, type, pos, loc) {
	  return finishNodeAt.call(this, node, type, pos, loc);
	};

	var pp$5 = Parser.prototype;

	// This function is used to raise exceptions on parse errors. It
	// takes an offset integer (into the current `input`) to indicate
	// the location of the error, attaches the position to the end
	// of the error message, and then raises a `SyntaxError` with that
	// message.

	pp$5.raise = function (pos, message) {
	  var loc = getLineInfo(this.input, pos);
	  message += " (" + loc.line + ":" + loc.column + ")";
	  var err = new SyntaxError(message);
	  err.pos = pos;
	  err.loc = loc;
	  throw err;
	};

	/* eslint max-len: 0 */

	/**
	 * Based on the comment attachment algorithm used in espree and estraverse.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are met:
	 *
	 * * Redistributions of source code must retain the above copyright
	 *   notice, this list of conditions and the following disclaimer.
	 * * Redistributions in binary form must reproduce the above copyright
	 *   notice, this list of conditions and the following disclaimer in the
	 *   documentation and/or other materials provided with the distribution.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	 * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	function last(stack) {
	  return stack[stack.length - 1];
	}

	var pp$6 = Parser.prototype;

	pp$6.addComment = function (comment) {
	  if (this.filename) comment.loc.filename = this.filename;
	  this.state.trailingComments.push(comment);
	  this.state.leadingComments.push(comment);
	};

	pp$6.processComment = function (node) {
	  if (node.type === "Program" && node.body.length > 0) return;

	  var stack = this.state.commentStack;

	  var firstChild = void 0,
	      lastChild = void 0,
	      trailingComments = void 0,
	      i = void 0,
	      j = void 0;

	  if (this.state.trailingComments.length > 0) {
	    // If the first comment in trailingComments comes after the
	    // current node, then we're good - all comments in the array will
	    // come after the node and so it's safe to add them as official
	    // trailingComments.
	    if (this.state.trailingComments[0].start >= node.end) {
	      trailingComments = this.state.trailingComments;
	      this.state.trailingComments = [];
	    } else {
	      // Otherwise, if the first comment doesn't come after the
	      // current node, that means we have a mix of leading and trailing
	      // comments in the array and that leadingComments contains the
	      // same items as trailingComments. Reset trailingComments to
	      // zero items and we'll handle this by evaluating leadingComments
	      // later.
	      this.state.trailingComments.length = 0;
	    }
	  } else {
	    var lastInStack = last(stack);
	    if (stack.length > 0 && lastInStack.trailingComments && lastInStack.trailingComments[0].start >= node.end) {
	      trailingComments = lastInStack.trailingComments;
	      lastInStack.trailingComments = null;
	    }
	  }

	  // Eating the stack.
	  if (stack.length > 0 && last(stack).start >= node.start) {
	    firstChild = stack.pop();
	  }

	  while (stack.length > 0 && last(stack).start >= node.start) {
	    lastChild = stack.pop();
	  }

	  if (!lastChild && firstChild) lastChild = firstChild;

	  // Attach comments that follow a trailing comma on the last
	  // property in an object literal or a trailing comma in function arguments
	  // as trailing comments
	  if (firstChild && this.state.leadingComments.length > 0) {
	    var lastComment = last(this.state.leadingComments);

	    if (firstChild.type === "ObjectProperty") {
	      if (lastComment.start >= node.start) {
	        if (this.state.commentPreviousNode) {
	          for (j = 0; j < this.state.leadingComments.length; j++) {
	            if (this.state.leadingComments[j].end < this.state.commentPreviousNode.end) {
	              this.state.leadingComments.splice(j, 1);
	              j--;
	            }
	          }

	          if (this.state.leadingComments.length > 0) {
	            firstChild.trailingComments = this.state.leadingComments;
	            this.state.leadingComments = [];
	          }
	        }
	      }
	    } else if (node.type === "CallExpression" && node.arguments && node.arguments.length) {
	      var lastArg = last(node.arguments);

	      if (lastArg && lastComment.start >= lastArg.start && lastComment.end <= node.end) {
	        if (this.state.commentPreviousNode) {
	          if (this.state.leadingComments.length > 0) {
	            lastArg.trailingComments = this.state.leadingComments;
	            this.state.leadingComments = [];
	          }
	        }
	      }
	    }
	  }

	  if (lastChild) {
	    if (lastChild.leadingComments) {
	      if (lastChild !== node && last(lastChild.leadingComments).end <= node.start) {
	        node.leadingComments = lastChild.leadingComments;
	        lastChild.leadingComments = null;
	      } else {
	        // A leading comment for an anonymous class had been stolen by its first ClassMethod,
	        // so this takes back the leading comment.
	        // See also: https://github.com/eslint/espree/issues/158
	        for (i = lastChild.leadingComments.length - 2; i >= 0; --i) {
	          if (lastChild.leadingComments[i].end <= node.start) {
	            node.leadingComments = lastChild.leadingComments.splice(0, i + 1);
	            break;
	          }
	        }
	      }
	    }
	  } else if (this.state.leadingComments.length > 0) {
	    if (last(this.state.leadingComments).end <= node.start) {
	      if (this.state.commentPreviousNode) {
	        for (j = 0; j < this.state.leadingComments.length; j++) {
	          if (this.state.leadingComments[j].end < this.state.commentPreviousNode.end) {
	            this.state.leadingComments.splice(j, 1);
	            j--;
	          }
	        }
	      }
	      if (this.state.leadingComments.length > 0) {
	        node.leadingComments = this.state.leadingComments;
	        this.state.leadingComments = [];
	      }
	    } else {
	      // https://github.com/eslint/espree/issues/2
	      //
	      // In special cases, such as return (without a value) and
	      // debugger, all comments will end up as leadingComments and
	      // will otherwise be eliminated. This step runs when the
	      // commentStack is empty and there are comments left
	      // in leadingComments.
	      //
	      // This loop figures out the stopping point between the actual
	      // leading and trailing comments by finding the location of the
	      // first comment that comes after the given node.
	      for (i = 0; i < this.state.leadingComments.length; i++) {
	        if (this.state.leadingComments[i].end > node.start) {
	          break;
	        }
	      }

	      // Split the array based on the location of the first comment
	      // that comes after the node. Keep in mind that this could
	      // result in an empty array, and if so, the array must be
	      // deleted.
	      node.leadingComments = this.state.leadingComments.slice(0, i);
	      if (node.leadingComments.length === 0) {
	        node.leadingComments = null;
	      }

	      // Similarly, trailing comments are attached later. The variable
	      // must be reset to null if there are no trailing comments.
	      trailingComments = this.state.leadingComments.slice(i);
	      if (trailingComments.length === 0) {
	        trailingComments = null;
	      }
	    }
	  }

	  this.state.commentPreviousNode = node;

	  if (trailingComments) {
	    if (trailingComments.length && trailingComments[0].start >= node.start && last(trailingComments).end <= node.end) {
	      node.innerComments = trailingComments;
	    } else {
	      node.trailingComments = trailingComments;
	    }
	  }

	  stack.push(node);
	};

	var pp$7 = Parser.prototype;

	pp$7.estreeParseRegExpLiteral = function (_ref) {
	  var pattern = _ref.pattern,
	      flags = _ref.flags;

	  var regex = null;
	  try {
	    regex = new RegExp(pattern, flags);
	  } catch (e) {
	    // In environments that don't support these flags value will
	    // be null as the regex can't be represented natively.
	  }
	  var node = this.estreeParseLiteral(regex);
	  node.regex = { pattern: pattern, flags: flags };

	  return node;
	};

	pp$7.estreeParseLiteral = function (value) {
	  return this.parseLiteral(value, "Literal");
	};

	pp$7.directiveToStmt = function (directive) {
	  var directiveLiteral = directive.value;

	  var stmt = this.startNodeAt(directive.start, directive.loc.start);
	  var expression = this.startNodeAt(directiveLiteral.start, directiveLiteral.loc.start);

	  expression.value = directiveLiteral.value;
	  expression.raw = directiveLiteral.extra.raw;

	  stmt.expression = this.finishNodeAt(expression, "Literal", directiveLiteral.end, directiveLiteral.loc.end);
	  stmt.directive = directiveLiteral.extra.raw.slice(1, -1);

	  return this.finishNodeAt(stmt, "ExpressionStatement", directive.end, directive.loc.end);
	};

	function isSimpleProperty(node) {
	  return node && node.type === "Property" && node.kind === "init" && node.method === false;
	}

	var estreePlugin = function (instance) {
	  instance.extend("checkDeclaration", function (inner) {
	    return function (node) {
	      if (isSimpleProperty(node)) {
	        this.checkDeclaration(node.value);
	      } else {
	        inner.call(this, node);
	      }
	    };
	  });

	  instance.extend("checkGetterSetterParamCount", function () {
	    return function (prop) {
	      var paramCount = prop.kind === "get" ? 0 : 1;
	      if (prop.value.params.length !== paramCount) {
	        var start = prop.start;
	        if (prop.kind === "get") {
	          this.raise(start, "getter should have no params");
	        } else {
	          this.raise(start, "setter should have exactly one param");
	        }
	      }
	    };
	  });

	  instance.extend("checkLVal", function (inner) {
	    return function (expr, isBinding, checkClashes) {
	      var _this = this;

	      switch (expr.type) {
	        case "ObjectPattern":
	          expr.properties.forEach(function (prop) {
	            _this.checkLVal(prop.type === "Property" ? prop.value : prop, isBinding, checkClashes, "object destructuring pattern");
	          });
	          break;
	        default:
	          for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	            args[_key - 3] = arguments[_key];
	          }

	          inner.call.apply(inner, [this, expr, isBinding, checkClashes].concat(args));
	      }
	    };
	  });

	  instance.extend("checkPropClash", function () {
	    return function (prop, propHash) {
	      if (prop.computed || !isSimpleProperty(prop)) return;

	      var key = prop.key;
	      // It is either an Identifier or a String/NumericLiteral
	      var name = key.type === "Identifier" ? key.name : String(key.value);

	      if (name === "__proto__") {
	        if (propHash.proto) this.raise(key.start, "Redefinition of __proto__ property");
	        propHash.proto = true;
	      }
	    };
	  });

	  instance.extend("isStrictBody", function () {
	    return function (node, isExpression) {
	      if (!isExpression && node.body.body.length > 0) {
	        for (var _iterator = node.body.body, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	          var _ref2;

	          if (_isArray) {
	            if (_i >= _iterator.length) break;
	            _ref2 = _iterator[_i++];
	          } else {
	            _i = _iterator.next();
	            if (_i.done) break;
	            _ref2 = _i.value;
	          }

	          var directive = _ref2;

	          if (directive.type === "ExpressionStatement" && directive.expression.type === "Literal") {
	            if (directive.expression.value === "use strict") return true;
	          } else {
	            // Break for the first non literal expression
	            break;
	          }
	        }
	      }

	      return false;
	    };
	  });

	  instance.extend("isValidDirective", function () {
	    return function (stmt) {
	      return stmt.type === "ExpressionStatement" && stmt.expression.type === "Literal" && typeof stmt.expression.value === "string" && (!stmt.expression.extra || !stmt.expression.extra.parenthesized);
	    };
	  });

	  instance.extend("stmtToDirective", function (inner) {
	    return function (stmt) {
	      var directive = inner.call(this, stmt);
	      var value = stmt.expression.value;

	      // Reset value to the actual value as in estree mode we want
	      // the stmt to have the real value and not the raw value
	      directive.value.value = value;

	      return directive;
	    };
	  });

	  instance.extend("parseBlockBody", function (inner) {
	    return function (node) {
	      var _this2 = this;

	      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      inner.call.apply(inner, [this, node].concat(args));

	      node.directives.reverse().forEach(function (directive) {
	        node.body.unshift(_this2.directiveToStmt(directive));
	      });
	      delete node.directives;
	    };
	  });

	  instance.extend("parseClassMethod", function () {
	    return function (classBody, method, isGenerator, isAsync) {
	      this.parseMethod(method, isGenerator, isAsync);
	      if (method.typeParameters) {
	        method.value.typeParameters = method.typeParameters;
	        delete method.typeParameters;
	      }
	      classBody.body.push(this.finishNode(method, "MethodDefinition"));
	    };
	  });

	  instance.extend("parseExprAtom", function (inner) {
	    return function () {
	      switch (this.state.type) {
	        case types.regexp:
	          return this.estreeParseRegExpLiteral(this.state.value);

	        case types.num:
	        case types.string:
	          return this.estreeParseLiteral(this.state.value);

	        case types._null:
	          return this.estreeParseLiteral(null);

	        case types._true:
	          return this.estreeParseLiteral(true);

	        case types._false:
	          return this.estreeParseLiteral(false);

	        default:
	          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	            args[_key3] = arguments[_key3];
	          }

	          return inner.call.apply(inner, [this].concat(args));
	      }
	    };
	  });

	  instance.extend("parseLiteral", function (inner) {
	    return function () {
	      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }

	      var node = inner.call.apply(inner, [this].concat(args));
	      node.raw = node.extra.raw;
	      delete node.extra;

	      return node;
	    };
	  });

	  instance.extend("parseMethod", function (inner) {
	    return function (node) {
	      var funcNode = this.startNode();
	      funcNode.kind = node.kind; // provide kind, so inner method correctly sets state

	      for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	        args[_key5 - 1] = arguments[_key5];
	      }

	      funcNode = inner.call.apply(inner, [this, funcNode].concat(args));
	      delete funcNode.kind;
	      node.value = this.finishNode(funcNode, "FunctionExpression");

	      return node;
	    };
	  });

	  instance.extend("parseObjectMethod", function (inner) {
	    return function () {
	      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        args[_key6] = arguments[_key6];
	      }

	      var node = inner.call.apply(inner, [this].concat(args));

	      if (node) {
	        if (node.kind === "method") node.kind = "init";
	        node.type = "Property";
	      }

	      return node;
	    };
	  });

	  instance.extend("parseObjectProperty", function (inner) {
	    return function () {
	      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        args[_key7] = arguments[_key7];
	      }

	      var node = inner.call.apply(inner, [this].concat(args));

	      if (node) {
	        node.kind = "init";
	        node.type = "Property";
	      }

	      return node;
	    };
	  });

	  instance.extend("toAssignable", function (inner) {
	    return function (node, isBinding) {
	      for (var _len8 = arguments.length, args = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
	        args[_key8 - 2] = arguments[_key8];
	      }

	      if (isSimpleProperty(node)) {
	        this.toAssignable.apply(this, [node.value, isBinding].concat(args));

	        return node;
	      } else if (node.type === "ObjectExpression") {
	        node.type = "ObjectPattern";
	        for (var _iterator2 = node.properties, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	          var _ref3;

	          if (_isArray2) {
	            if (_i2 >= _iterator2.length) break;
	            _ref3 = _iterator2[_i2++];
	          } else {
	            _i2 = _iterator2.next();
	            if (_i2.done) break;
	            _ref3 = _i2.value;
	          }

	          var prop = _ref3;

	          if (prop.kind === "get" || prop.kind === "set") {
	            this.raise(prop.key.start, "Object pattern can't contain getter or setter");
	          } else if (prop.method) {
	            this.raise(prop.key.start, "Object pattern can't contain methods");
	          } else {
	            this.toAssignable(prop, isBinding, "object destructuring pattern");
	          }
	        }

	        return node;
	      }

	      return inner.call.apply(inner, [this, node, isBinding].concat(args));
	    };
	  });
	};

	/* eslint max-len: 0 */

	var primitiveTypes = ["any", "mixed", "empty", "bool", "boolean", "number", "string", "void", "null"];

	var pp$8 = Parser.prototype;

	pp$8.flowParseTypeInitialiser = function (tok) {
	  var oldInType = this.state.inType;
	  this.state.inType = true;
	  this.expect(tok || types.colon);

	  var type = this.flowParseType();
	  this.state.inType = oldInType;
	  return type;
	};

	pp$8.flowParsePredicate = function () {
	  var node = this.startNode();
	  var moduloLoc = this.state.startLoc;
	  var moduloPos = this.state.start;
	  this.expect(types.modulo);
	  var checksLoc = this.state.startLoc;
	  this.expectContextual("checks");
	  // Force '%' and 'checks' to be adjacent
	  if (moduloLoc.line !== checksLoc.line || moduloLoc.column !== checksLoc.column - 1) {
	    this.raise(moduloPos, "Spaces between ´%´ and ´checks´ are not allowed here.");
	  }
	  if (this.eat(types.parenL)) {
	    node.expression = this.parseExpression();
	    this.expect(types.parenR);
	    return this.finishNode(node, "DeclaredPredicate");
	  } else {
	    return this.finishNode(node, "InferredPredicate");
	  }
	};

	pp$8.flowParseTypeAndPredicateInitialiser = function () {
	  var oldInType = this.state.inType;
	  this.state.inType = true;
	  this.expect(types.colon);
	  var type = null;
	  var predicate = null;
	  if (this.match(types.modulo)) {
	    this.state.inType = oldInType;
	    predicate = this.flowParsePredicate();
	  } else {
	    type = this.flowParseType();
	    this.state.inType = oldInType;
	    if (this.match(types.modulo)) {
	      predicate = this.flowParsePredicate();
	    }
	  }
	  return [type, predicate];
	};

	pp$8.flowParseDeclareClass = function (node) {
	  this.next();
	  this.flowParseInterfaceish(node, true);
	  return this.finishNode(node, "DeclareClass");
	};

	pp$8.flowParseDeclareFunction = function (node) {
	  this.next();

	  var id = node.id = this.parseIdentifier();

	  var typeNode = this.startNode();
	  var typeContainer = this.startNode();

	  if (this.isRelational("<")) {
	    typeNode.typeParameters = this.flowParseTypeParameterDeclaration();
	  } else {
	    typeNode.typeParameters = null;
	  }

	  this.expect(types.parenL);
	  var tmp = this.flowParseFunctionTypeParams();
	  typeNode.params = tmp.params;
	  typeNode.rest = tmp.rest;
	  this.expect(types.parenR);
	  var predicate = null;

	  var _flowParseTypeAndPred = this.flowParseTypeAndPredicateInitialiser();

	  typeNode.returnType = _flowParseTypeAndPred[0];
	  predicate = _flowParseTypeAndPred[1];

	  typeContainer.typeAnnotation = this.finishNode(typeNode, "FunctionTypeAnnotation");
	  typeContainer.predicate = predicate;
	  id.typeAnnotation = this.finishNode(typeContainer, "TypeAnnotation");

	  this.finishNode(id, id.type);

	  this.semicolon();

	  return this.finishNode(node, "DeclareFunction");
	};

	pp$8.flowParseDeclare = function (node) {
	  if (this.match(types._class)) {
	    return this.flowParseDeclareClass(node);
	  } else if (this.match(types._function)) {
	    return this.flowParseDeclareFunction(node);
	  } else if (this.match(types._var)) {
	    return this.flowParseDeclareVariable(node);
	  } else if (this.isContextual("module")) {
	    if (this.lookahead().type === types.dot) {
	      return this.flowParseDeclareModuleExports(node);
	    } else {
	      return this.flowParseDeclareModule(node);
	    }
	  } else if (this.isContextual("type")) {
	    return this.flowParseDeclareTypeAlias(node);
	  } else if (this.isContextual("interface")) {
	    return this.flowParseDeclareInterface(node);
	  } else {
	    this.unexpected();
	  }
	};

	pp$8.flowParseDeclareVariable = function (node) {
	  this.next();
	  node.id = this.flowParseTypeAnnotatableIdentifier();
	  this.semicolon();
	  return this.finishNode(node, "DeclareVariable");
	};

	pp$8.flowParseDeclareModule = function (node) {
	  this.next();

	  if (this.match(types.string)) {
	    node.id = this.parseExprAtom();
	  } else {
	    node.id = this.parseIdentifier();
	  }

	  var bodyNode = node.body = this.startNode();
	  var body = bodyNode.body = [];
	  this.expect(types.braceL);
	  while (!this.match(types.braceR)) {
	    var _bodyNode = this.startNode();

	    if (this.match(types._import)) {
	      var lookahead = this.lookahead();
	      if (lookahead.value !== "type" && lookahead.value !== "typeof") {
	        this.unexpected(null, "Imports within a `declare module` body must always be `import type` or `import typeof`");
	      }

	      this.parseImport(_bodyNode);
	    } else {
	      this.expectContextual("declare", "Only declares and type imports are allowed inside declare module");

	      _bodyNode = this.flowParseDeclare(_bodyNode, true);
	    }

	    body.push(_bodyNode);
	  }
	  this.expect(types.braceR);

	  this.finishNode(bodyNode, "BlockStatement");
	  return this.finishNode(node, "DeclareModule");
	};

	pp$8.flowParseDeclareModuleExports = function (node) {
	  this.expectContextual("module");
	  this.expect(types.dot);
	  this.expectContextual("exports");
	  node.typeAnnotation = this.flowParseTypeAnnotation();
	  this.semicolon();

	  return this.finishNode(node, "DeclareModuleExports");
	};

	pp$8.flowParseDeclareTypeAlias = function (node) {
	  this.next();
	  this.flowParseTypeAlias(node);
	  return this.finishNode(node, "DeclareTypeAlias");
	};

	pp$8.flowParseDeclareInterface = function (node) {
	  this.next();
	  this.flowParseInterfaceish(node);
	  return this.finishNode(node, "DeclareInterface");
	};

	// Interfaces

	pp$8.flowParseInterfaceish = function (node) {
	  node.id = this.parseIdentifier();

	  if (this.isRelational("<")) {
	    node.typeParameters = this.flowParseTypeParameterDeclaration();
	  } else {
	    node.typeParameters = null;
	  }

	  node.extends = [];
	  node.mixins = [];

	  if (this.eat(types._extends)) {
	    do {
	      node.extends.push(this.flowParseInterfaceExtends());
	    } while (this.eat(types.comma));
	  }

	  if (this.isContextual("mixins")) {
	    this.next();
	    do {
	      node.mixins.push(this.flowParseInterfaceExtends());
	    } while (this.eat(types.comma));
	  }

	  node.body = this.flowParseObjectType(true, false, false);
	};

	pp$8.flowParseInterfaceExtends = function () {
	  var node = this.startNode();

	  node.id = this.flowParseQualifiedTypeIdentifier();
	  if (this.isRelational("<")) {
	    node.typeParameters = this.flowParseTypeParameterInstantiation();
	  } else {
	    node.typeParameters = null;
	  }

	  return this.finishNode(node, "InterfaceExtends");
	};

	pp$8.flowParseInterface = function (node) {
	  this.flowParseInterfaceish(node, false);
	  return this.finishNode(node, "InterfaceDeclaration");
	};

	pp$8.flowParseRestrictedIdentifier = function (liberal) {
	  if (primitiveTypes.indexOf(this.state.value) > -1) {
	    this.raise(this.state.start, "Cannot overwrite primitive type " + this.state.value);
	  }

	  return this.parseIdentifier(liberal);
	};

	// Type aliases

	pp$8.flowParseTypeAlias = function (node) {
	  node.id = this.flowParseRestrictedIdentifier();

	  if (this.isRelational("<")) {
	    node.typeParameters = this.flowParseTypeParameterDeclaration();
	  } else {
	    node.typeParameters = null;
	  }

	  node.right = this.flowParseTypeInitialiser(types.eq);
	  this.semicolon();

	  return this.finishNode(node, "TypeAlias");
	};

	// Type annotations

	pp$8.flowParseTypeParameter = function () {
	  var node = this.startNode();

	  var variance = this.flowParseVariance();

	  var ident = this.flowParseTypeAnnotatableIdentifier();
	  node.name = ident.name;
	  node.variance = variance;
	  node.bound = ident.typeAnnotation;

	  if (this.match(types.eq)) {
	    this.eat(types.eq);
	    node.default = this.flowParseType();
	  }

	  return this.finishNode(node, "TypeParameter");
	};

	pp$8.flowParseTypeParameterDeclaration = function () {
	  var oldInType = this.state.inType;
	  var node = this.startNode();
	  node.params = [];

	  this.state.inType = true;

	  // istanbul ignore else: this condition is already checked at all call sites
	  if (this.isRelational("<") || this.match(types.jsxTagStart)) {
	    this.next();
	  } else {
	    this.unexpected();
	  }

	  do {
	    node.params.push(this.flowParseTypeParameter());
	    if (!this.isRelational(">")) {
	      this.expect(types.comma);
	    }
	  } while (!this.isRelational(">"));
	  this.expectRelational(">");

	  this.state.inType = oldInType;

	  return this.finishNode(node, "TypeParameterDeclaration");
	};

	pp$8.flowParseTypeParameterInstantiation = function () {
	  var node = this.startNode();
	  var oldInType = this.state.inType;
	  node.params = [];

	  this.state.inType = true;

	  this.expectRelational("<");
	  while (!this.isRelational(">")) {
	    node.params.push(this.flowParseType());
	    if (!this.isRelational(">")) {
	      this.expect(types.comma);
	    }
	  }
	  this.expectRelational(">");

	  this.state.inType = oldInType;

	  return this.finishNode(node, "TypeParameterInstantiation");
	};

	pp$8.flowParseObjectPropertyKey = function () {
	  return this.match(types.num) || this.match(types.string) ? this.parseExprAtom() : this.parseIdentifier(true);
	};

	pp$8.flowParseObjectTypeIndexer = function (node, isStatic, variance) {
	  node.static = isStatic;

	  this.expect(types.bracketL);
	  if (this.lookahead().type === types.colon) {
	    node.id = this.flowParseObjectPropertyKey();
	    node.key = this.flowParseTypeInitialiser();
	  } else {
	    node.id = null;
	    node.key = this.flowParseType();
	  }
	  this.expect(types.bracketR);
	  node.value = this.flowParseTypeInitialiser();
	  node.variance = variance;

	  this.flowObjectTypeSemicolon();
	  return this.finishNode(node, "ObjectTypeIndexer");
	};

	pp$8.flowParseObjectTypeMethodish = function (node) {
	  node.params = [];
	  node.rest = null;
	  node.typeParameters = null;

	  if (this.isRelational("<")) {
	    node.typeParameters = this.flowParseTypeParameterDeclaration();
	  }

	  this.expect(types.parenL);
	  while (!this.match(types.parenR) && !this.match(types.ellipsis)) {
	    node.params.push(this.flowParseFunctionTypeParam());
	    if (!this.match(types.parenR)) {
	      this.expect(types.comma);
	    }
	  }

	  if (this.eat(types.ellipsis)) {
	    node.rest = this.flowParseFunctionTypeParam();
	  }
	  this.expect(types.parenR);
	  node.returnType = this.flowParseTypeInitialiser();

	  return this.finishNode(node, "FunctionTypeAnnotation");
	};

	pp$8.flowParseObjectTypeMethod = function (startPos, startLoc, isStatic, key) {
	  var node = this.startNodeAt(startPos, startLoc);
	  node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(startPos, startLoc));
	  node.static = isStatic;
	  node.key = key;
	  node.optional = false;
	  this.flowObjectTypeSemicolon();
	  return this.finishNode(node, "ObjectTypeProperty");
	};

	pp$8.flowParseObjectTypeCallProperty = function (node, isStatic) {
	  var valueNode = this.startNode();
	  node.static = isStatic;
	  node.value = this.flowParseObjectTypeMethodish(valueNode);
	  this.flowObjectTypeSemicolon();
	  return this.finishNode(node, "ObjectTypeCallProperty");
	};

	pp$8.flowParseObjectType = function (allowStatic, allowExact, allowSpread) {
	  var oldInType = this.state.inType;
	  this.state.inType = true;

	  var nodeStart = this.startNode();
	  var node = void 0;
	  var propertyKey = void 0;
	  var isStatic = false;

	  nodeStart.callProperties = [];
	  nodeStart.properties = [];
	  nodeStart.indexers = [];

	  var endDelim = void 0;
	  var exact = void 0;
	  if (allowExact && this.match(types.braceBarL)) {
	    this.expect(types.braceBarL);
	    endDelim = types.braceBarR;
	    exact = true;
	  } else {
	    this.expect(types.braceL);
	    endDelim = types.braceR;
	    exact = false;
	  }

	  nodeStart.exact = exact;

	  while (!this.match(endDelim)) {
	    var optional = false;
	    var startPos = this.state.start;
	    var startLoc = this.state.startLoc;
	    node = this.startNode();
	    if (allowStatic && this.isContextual("static") && this.lookahead().type !== types.colon) {
	      this.next();
	      isStatic = true;
	    }

	    var variancePos = this.state.start;
	    var variance = this.flowParseVariance();

	    if (this.match(types.bracketL)) {
	      nodeStart.indexers.push(this.flowParseObjectTypeIndexer(node, isStatic, variance));
	    } else if (this.match(types.parenL) || this.isRelational("<")) {
	      if (variance) {
	        this.unexpected(variancePos);
	      }
	      nodeStart.callProperties.push(this.flowParseObjectTypeCallProperty(node, isStatic));
	    } else {
	      if (this.match(types.ellipsis)) {
	        if (!allowSpread) {
	          this.unexpected(null, "Spread operator cannot appear in class or interface definitions");
	        }
	        if (variance) {
	          this.unexpected(variance.start, "Spread properties cannot have variance");
	        }
	        this.expect(types.ellipsis);
	        node.argument = this.flowParseType();
	        this.flowObjectTypeSemicolon();
	        nodeStart.properties.push(this.finishNode(node, "ObjectTypeSpreadProperty"));
	      } else {
	        propertyKey = this.flowParseObjectPropertyKey();
	        if (this.isRelational("<") || this.match(types.parenL)) {
	          // This is a method property
	          if (variance) {
	            this.unexpected(variance.start);
	          }
	          nodeStart.properties.push(this.flowParseObjectTypeMethod(startPos, startLoc, isStatic, propertyKey));
	        } else {
	          if (this.eat(types.question)) {
	            optional = true;
	          }
	          node.key = propertyKey;
	          node.value = this.flowParseTypeInitialiser();
	          node.optional = optional;
	          node.static = isStatic;
	          node.variance = variance;
	          this.flowObjectTypeSemicolon();
	          nodeStart.properties.push(this.finishNode(node, "ObjectTypeProperty"));
	        }
	      }
	    }

	    isStatic = false;
	  }

	  this.expect(endDelim);

	  var out = this.finishNode(nodeStart, "ObjectTypeAnnotation");

	  this.state.inType = oldInType;

	  return out;
	};

	pp$8.flowObjectTypeSemicolon = function () {
	  if (!this.eat(types.semi) && !this.eat(types.comma) && !this.match(types.braceR) && !this.match(types.braceBarR)) {
	    this.unexpected();
	  }
	};

	pp$8.flowParseQualifiedTypeIdentifier = function (startPos, startLoc, id) {
	  startPos = startPos || this.state.start;
	  startLoc = startLoc || this.state.startLoc;
	  var node = id || this.parseIdentifier();

	  while (this.eat(types.dot)) {
	    var node2 = this.startNodeAt(startPos, startLoc);
	    node2.qualification = node;
	    node2.id = this.parseIdentifier();
	    node = this.finishNode(node2, "QualifiedTypeIdentifier");
	  }

	  return node;
	};

	pp$8.flowParseGenericType = function (startPos, startLoc, id) {
	  var node = this.startNodeAt(startPos, startLoc);

	  node.typeParameters = null;
	  node.id = this.flowParseQualifiedTypeIdentifier(startPos, startLoc, id);

	  if (this.isRelational("<")) {
	    node.typeParameters = this.flowParseTypeParameterInstantiation();
	  }

	  return this.finishNode(node, "GenericTypeAnnotation");
	};

	pp$8.flowParseTypeofType = function () {
	  var node = this.startNode();
	  this.expect(types._typeof);
	  node.argument = this.flowParsePrimaryType();
	  return this.finishNode(node, "TypeofTypeAnnotation");
	};

	pp$8.flowParseTupleType = function () {
	  var node = this.startNode();
	  node.types = [];
	  this.expect(types.bracketL);
	  // We allow trailing commas
	  while (this.state.pos < this.input.length && !this.match(types.bracketR)) {
	    node.types.push(this.flowParseType());
	    if (this.match(types.bracketR)) break;
	    this.expect(types.comma);
	  }
	  this.expect(types.bracketR);
	  return this.finishNode(node, "TupleTypeAnnotation");
	};

	pp$8.flowParseFunctionTypeParam = function () {
	  var name = null;
	  var optional = false;
	  var typeAnnotation = null;
	  var node = this.startNode();
	  var lh = this.lookahead();
	  if (lh.type === types.colon || lh.type === types.question) {
	    name = this.parseIdentifier();
	    if (this.eat(types.question)) {
	      optional = true;
	    }
	    typeAnnotation = this.flowParseTypeInitialiser();
	  } else {
	    typeAnnotation = this.flowParseType();
	  }
	  node.name = name;
	  node.optional = optional;
	  node.typeAnnotation = typeAnnotation;
	  return this.finishNode(node, "FunctionTypeParam");
	};

	pp$8.reinterpretTypeAsFunctionTypeParam = function (type) {
	  var node = this.startNodeAt(type.start, type.loc.start);
	  node.name = null;
	  node.optional = false;
	  node.typeAnnotation = type;
	  return this.finishNode(node, "FunctionTypeParam");
	};

	pp$8.flowParseFunctionTypeParams = function () {
	  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	  var ret = { params: params, rest: null };
	  while (!this.match(types.parenR) && !this.match(types.ellipsis)) {
	    ret.params.push(this.flowParseFunctionTypeParam());
	    if (!this.match(types.parenR)) {
	      this.expect(types.comma);
	    }
	  }
	  if (this.eat(types.ellipsis)) {
	    ret.rest = this.flowParseFunctionTypeParam();
	  }
	  return ret;
	};

	pp$8.flowIdentToTypeAnnotation = function (startPos, startLoc, node, id) {
	  switch (id.name) {
	    case "any":
	      return this.finishNode(node, "AnyTypeAnnotation");

	    case "void":
	      return this.finishNode(node, "VoidTypeAnnotation");

	    case "bool":
	    case "boolean":
	      return this.finishNode(node, "BooleanTypeAnnotation");

	    case "mixed":
	      return this.finishNode(node, "MixedTypeAnnotation");

	    case "empty":
	      return this.finishNode(node, "EmptyTypeAnnotation");

	    case "number":
	      return this.finishNode(node, "NumberTypeAnnotation");

	    case "string":
	      return this.finishNode(node, "StringTypeAnnotation");

	    default:
	      return this.flowParseGenericType(startPos, startLoc, id);
	  }
	};

	// The parsing of types roughly parallels the parsing of expressions, and
	// primary types are kind of like primary expressions...they're the
	// primitives with which other types are constructed.
	pp$8.flowParsePrimaryType = function () {
	  var startPos = this.state.start;
	  var startLoc = this.state.startLoc;
	  var node = this.startNode();
	  var tmp = void 0;
	  var type = void 0;
	  var isGroupedType = false;
	  var oldNoAnonFunctionType = this.state.noAnonFunctionType;

	  switch (this.state.type) {
	    case types.name:
	      return this.flowIdentToTypeAnnotation(startPos, startLoc, node, this.parseIdentifier());

	    case types.braceL:
	      return this.flowParseObjectType(false, false, true);

	    case types.braceBarL:
	      return this.flowParseObjectType(false, true, true);

	    case types.bracketL:
	      return this.flowParseTupleType();

	    case types.relational:
	      if (this.state.value === "<") {
	        node.typeParameters = this.flowParseTypeParameterDeclaration();
	        this.expect(types.parenL);
	        tmp = this.flowParseFunctionTypeParams();
	        node.params = tmp.params;
	        node.rest = tmp.rest;
	        this.expect(types.parenR);

	        this.expect(types.arrow);

	        node.returnType = this.flowParseType();

	        return this.finishNode(node, "FunctionTypeAnnotation");
	      }
	      break;

	    case types.parenL:
	      this.next();

	      // Check to see if this is actually a grouped type
	      if (!this.match(types.parenR) && !this.match(types.ellipsis)) {
	        if (this.match(types.name)) {
	          var token = this.lookahead().type;
	          isGroupedType = token !== types.question && token !== types.colon;
	        } else {
	          isGroupedType = true;
	        }
	      }

	      if (isGroupedType) {
	        this.state.noAnonFunctionType = false;
	        type = this.flowParseType();
	        this.state.noAnonFunctionType = oldNoAnonFunctionType;

	        // A `,` or a `) =>` means this is an anonymous function type
	        if (this.state.noAnonFunctionType || !(this.match(types.comma) || this.match(types.parenR) && this.lookahead().type === types.arrow)) {
	          this.expect(types.parenR);
	          return type;
	        } else {
	          // Eat a comma if there is one
	          this.eat(types.comma);
	        }
	      }

	      if (type) {
	        tmp = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(type)]);
	      } else {
	        tmp = this.flowParseFunctionTypeParams();
	      }

	      node.params = tmp.params;
	      node.rest = tmp.rest;

	      this.expect(types.parenR);

	      this.expect(types.arrow);

	      node.returnType = this.flowParseType();

	      node.typeParameters = null;

	      return this.finishNode(node, "FunctionTypeAnnotation");

	    case types.string:
	      return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");

	    case types._true:case types._false:
	      node.value = this.match(types._true);
	      this.next();
	      return this.finishNode(node, "BooleanLiteralTypeAnnotation");

	    case types.plusMin:
	      if (this.state.value === "-") {
	        this.next();
	        if (!this.match(types.num)) this.unexpected(null, "Unexpected token, expected number");

	        return this.parseLiteral(-this.state.value, "NumericLiteralTypeAnnotation", node.start, node.loc.start);
	      }

	      this.unexpected();
	    case types.num:
	      return this.parseLiteral(this.state.value, "NumericLiteralTypeAnnotation");

	    case types._null:
	      node.value = this.match(types._null);
	      this.next();
	      return this.finishNode(node, "NullLiteralTypeAnnotation");

	    case types._this:
	      node.value = this.match(types._this);
	      this.next();
	      return this.finishNode(node, "ThisTypeAnnotation");

	    case types.star:
	      this.next();
	      return this.finishNode(node, "ExistentialTypeParam");

	    default:
	      if (this.state.type.keyword === "typeof") {
	        return this.flowParseTypeofType();
	      }
	  }

	  this.unexpected();
	};

	pp$8.flowParsePostfixType = function () {
	  var startPos = this.state.start,
	      startLoc = this.state.startLoc;
	  var type = this.flowParsePrimaryType();
	  while (!this.canInsertSemicolon() && this.match(types.bracketL)) {
	    var node = this.startNodeAt(startPos, startLoc);
	    node.elementType = type;
	    this.expect(types.bracketL);
	    this.expect(types.bracketR);
	    type = this.finishNode(node, "ArrayTypeAnnotation");
	  }
	  return type;
	};

	pp$8.flowParsePrefixType = function () {
	  var node = this.startNode();
	  if (this.eat(types.question)) {
	    node.typeAnnotation = this.flowParsePrefixType();
	    return this.finishNode(node, "NullableTypeAnnotation");
	  } else {
	    return this.flowParsePostfixType();
	  }
	};

	pp$8.flowParseAnonFunctionWithoutParens = function () {
	  var param = this.flowParsePrefixType();
	  if (!this.state.noAnonFunctionType && this.eat(types.arrow)) {
	    var node = this.startNodeAt(param.start, param.loc.start);
	    node.params = [this.reinterpretTypeAsFunctionTypeParam(param)];
	    node.rest = null;
	    node.returnType = this.flowParseType();
	    node.typeParameters = null;
	    return this.finishNode(node, "FunctionTypeAnnotation");
	  }
	  return param;
	};

	pp$8.flowParseIntersectionType = function () {
	  var node = this.startNode();
	  this.eat(types.bitwiseAND);
	  var type = this.flowParseAnonFunctionWithoutParens();
	  node.types = [type];
	  while (this.eat(types.bitwiseAND)) {
	    node.types.push(this.flowParseAnonFunctionWithoutParens());
	  }
	  return node.types.length === 1 ? type : this.finishNode(node, "IntersectionTypeAnnotation");
	};

	pp$8.flowParseUnionType = function () {
	  var node = this.startNode();
	  this.eat(types.bitwiseOR);
	  var type = this.flowParseIntersectionType();
	  node.types = [type];
	  while (this.eat(types.bitwiseOR)) {
	    node.types.push(this.flowParseIntersectionType());
	  }
	  return node.types.length === 1 ? type : this.finishNode(node, "UnionTypeAnnotation");
	};

	pp$8.flowParseType = function () {
	  var oldInType = this.state.inType;
	  this.state.inType = true;
	  var type = this.flowParseUnionType();
	  this.state.inType = oldInType;
	  return type;
	};

	pp$8.flowParseTypeAnnotation = function () {
	  var node = this.startNode();
	  node.typeAnnotation = this.flowParseTypeInitialiser();
	  return this.finishNode(node, "TypeAnnotation");
	};

	pp$8.flowParseTypeAndPredicateAnnotation = function () {
	  var node = this.startNode();

	  var _flowParseTypeAndPred2 = this.flowParseTypeAndPredicateInitialiser();

	  node.typeAnnotation = _flowParseTypeAndPred2[0];
	  node.predicate = _flowParseTypeAndPred2[1];

	  return this.finishNode(node, "TypeAnnotation");
	};

	pp$8.flowParseTypeAnnotatableIdentifier = function () {
	  var ident = this.flowParseRestrictedIdentifier();
	  if (this.match(types.colon)) {
	    ident.typeAnnotation = this.flowParseTypeAnnotation();
	    this.finishNode(ident, ident.type);
	  }
	  return ident;
	};

	pp$8.typeCastToParameter = function (node) {
	  node.expression.typeAnnotation = node.typeAnnotation;

	  return this.finishNodeAt(node.expression, node.expression.type, node.typeAnnotation.end, node.typeAnnotation.loc.end);
	};

	pp$8.flowParseVariance = function () {
	  var variance = null;
	  if (this.match(types.plusMin)) {
	    if (this.state.value === "+") {
	      variance = "plus";
	    } else if (this.state.value === "-") {
	      variance = "minus";
	    }
	    this.next();
	  }
	  return variance;
	};

	var flowPlugin = function (instance) {
	  // plain function return types: function name(): string {}
	  instance.extend("parseFunctionBody", function (inner) {
	    return function (node, allowExpression) {
	      if (this.match(types.colon) && !allowExpression) {
	        // if allowExpression is true then we're parsing an arrow function and if
	        // there's a return type then it's been handled elsewhere
	        node.returnType = this.flowParseTypeAndPredicateAnnotation();
	      }

	      return inner.call(this, node, allowExpression);
	    };
	  });

	  // interfaces
	  instance.extend("parseStatement", function (inner) {
	    return function (declaration, topLevel) {
	      // strict mode handling of `interface` since it's a reserved word
	      if (this.state.strict && this.match(types.name) && this.state.value === "interface") {
	        var node = this.startNode();
	        this.next();
	        return this.flowParseInterface(node);
	      } else {
	        return inner.call(this, declaration, topLevel);
	      }
	    };
	  });

	  // declares, interfaces and type aliases
	  instance.extend("parseExpressionStatement", function (inner) {
	    return function (node, expr) {
	      if (expr.type === "Identifier") {
	        if (expr.name === "declare") {
	          if (this.match(types._class) || this.match(types.name) || this.match(types._function) || this.match(types._var)) {
	            return this.flowParseDeclare(node);
	          }
	        } else if (this.match(types.name)) {
	          if (expr.name === "interface") {
	            return this.flowParseInterface(node);
	          } else if (expr.name === "type") {
	            return this.flowParseTypeAlias(node);
	          }
	        }
	      }

	      return inner.call(this, node, expr);
	    };
	  });

	  // export type
	  instance.extend("shouldParseExportDeclaration", function (inner) {
	    return function () {
	      return this.isContextual("type") || this.isContextual("interface") || inner.call(this);
	    };
	  });

	  instance.extend("isExportDefaultSpecifier", function (inner) {
	    return function () {
	      if (this.match(types.name) && (this.state.value === "type" || this.state.value === "interface")) {
	        return false;
	      }

	      return inner.call(this);
	    };
	  });

	  instance.extend("parseConditional", function (inner) {
	    return function (expr, noIn, startPos, startLoc, refNeedsArrowPos) {
	      // only do the expensive clone if there is a question mark
	      // and if we come from inside parens
	      if (refNeedsArrowPos && this.match(types.question)) {
	        var state = this.state.clone();
	        try {
	          return inner.call(this, expr, noIn, startPos, startLoc);
	        } catch (err) {
	          if (err instanceof SyntaxError) {
	            this.state = state;
	            refNeedsArrowPos.start = err.pos || this.state.start;
	            return expr;
	          } else {
	            // istanbul ignore next: no such error is expected
	            throw err;
	          }
	        }
	      }

	      return inner.call(this, expr, noIn, startPos, startLoc);
	    };
	  });

	  instance.extend("parseParenItem", function (inner) {
	    return function (node, startPos, startLoc) {
	      node = inner.call(this, node, startPos, startLoc);
	      if (this.eat(types.question)) {
	        node.optional = true;
	      }

	      if (this.match(types.colon)) {
	        var typeCastNode = this.startNodeAt(startPos, startLoc);
	        typeCastNode.expression = node;
	        typeCastNode.typeAnnotation = this.flowParseTypeAnnotation();

	        return this.finishNode(typeCastNode, "TypeCastExpression");
	      }

	      return node;
	    };
	  });

	  instance.extend("parseExport", function (inner) {
	    return function (node) {
	      node = inner.call(this, node);
	      if (node.type === "ExportNamedDeclaration") {
	        node.exportKind = node.exportKind || "value";
	      }
	      return node;
	    };
	  });

	  instance.extend("parseExportDeclaration", function (inner) {
	    return function (node) {
	      if (this.isContextual("type")) {
	        node.exportKind = "type";

	        var declarationNode = this.startNode();
	        this.next();

	        if (this.match(types.braceL)) {
	          // export type { foo, bar };
	          node.specifiers = this.parseExportSpecifiers();
	          this.parseExportFrom(node);
	          return null;
	        } else {
	          // export type Foo = Bar;
	          return this.flowParseTypeAlias(declarationNode);
	        }
	      } else if (this.isContextual("interface")) {
	        node.exportKind = "type";
	        var _declarationNode = this.startNode();
	        this.next();
	        return this.flowParseInterface(_declarationNode);
	      } else {
	        return inner.call(this, node);
	      }
	    };
	  });

	  instance.extend("parseClassId", function (inner) {
	    return function (node) {
	      inner.apply(this, arguments);
	      if (this.isRelational("<")) {
	        node.typeParameters = this.flowParseTypeParameterDeclaration();
	      }
	    };
	  });

	  // don't consider `void` to be a keyword as then it'll use the void token type
	  // and set startExpr
	  instance.extend("isKeyword", function (inner) {
	    return function (name) {
	      if (this.state.inType && name === "void") {
	        return false;
	      } else {
	        return inner.call(this, name);
	      }
	    };
	  });

	  // ensure that inside flow types, we bypass the jsx parser plugin
	  instance.extend("readToken", function (inner) {
	    return function (code) {
	      if (this.state.inType && (code === 62 || code === 60)) {
	        return this.finishOp(types.relational, 1);
	      } else {
	        return inner.call(this, code);
	      }
	    };
	  });

	  // don't lex any token as a jsx one inside a flow type
	  instance.extend("jsx_readToken", function (inner) {
	    return function () {
	      if (!this.state.inType) return inner.call(this);
	    };
	  });

	  instance.extend("toAssignable", function (inner) {
	    return function (node, isBinding, contextDescription) {
	      if (node.type === "TypeCastExpression") {
	        return inner.call(this, this.typeCastToParameter(node), isBinding, contextDescription);
	      } else {
	        return inner.call(this, node, isBinding, contextDescription);
	      }
	    };
	  });

	  // turn type casts that we found in function parameter head into type annotated params
	  instance.extend("toAssignableList", function (inner) {
	    return function (exprList, isBinding, contextDescription) {
	      for (var i = 0; i < exprList.length; i++) {
	        var expr = exprList[i];
	        if (expr && expr.type === "TypeCastExpression") {
	          exprList[i] = this.typeCastToParameter(expr);
	        }
	      }
	      return inner.call(this, exprList, isBinding, contextDescription);
	    };
	  });

	  // this is a list of nodes, from something like a call expression, we need to filter the
	  // type casts that we've found that are illegal in this context
	  instance.extend("toReferencedList", function () {
	    return function (exprList) {
	      for (var i = 0; i < exprList.length; i++) {
	        var expr = exprList[i];
	        if (expr && expr._exprListItem && expr.type === "TypeCastExpression") {
	          this.raise(expr.start, "Unexpected type cast");
	        }
	      }

	      return exprList;
	    };
	  });

	  // parse an item inside a expression list eg. `(NODE, NODE)` where NODE represents
	  // the position where this function is called
	  instance.extend("parseExprListItem", function (inner) {
	    return function () {
	      var container = this.startNode();

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      var node = inner.call.apply(inner, [this].concat(args));
	      if (this.match(types.colon)) {
	        container._exprListItem = true;
	        container.expression = node;
	        container.typeAnnotation = this.flowParseTypeAnnotation();
	        return this.finishNode(container, "TypeCastExpression");
	      } else {
	        return node;
	      }
	    };
	  });

	  instance.extend("checkLVal", function (inner) {
	    return function (node) {
	      if (node.type !== "TypeCastExpression") {
	        return inner.apply(this, arguments);
	      }
	    };
	  });

	  // parse class property type annotations
	  instance.extend("parseClassProperty", function (inner) {
	    return function (node) {
	      delete node.variancePos;
	      if (this.match(types.colon)) {
	        node.typeAnnotation = this.flowParseTypeAnnotation();
	      }
	      return inner.call(this, node);
	    };
	  });

	  // determine whether or not we're currently in the position where a class method would appear
	  instance.extend("isClassMethod", function (inner) {
	    return function () {
	      return this.isRelational("<") || inner.call(this);
	    };
	  });

	  // determine whether or not we're currently in the position where a class property would appear
	  instance.extend("isClassProperty", function (inner) {
	    return function () {
	      return this.match(types.colon) || inner.call(this);
	    };
	  });

	  instance.extend("isNonstaticConstructor", function (inner) {
	    return function (method) {
	      return !this.match(types.colon) && inner.call(this, method);
	    };
	  });

	  // parse type parameters for class methods
	  instance.extend("parseClassMethod", function (inner) {
	    return function (classBody, method) {
	      if (method.variance) {
	        this.unexpected(method.variancePos);
	      }
	      delete method.variance;
	      delete method.variancePos;
	      if (this.isRelational("<")) {
	        method.typeParameters = this.flowParseTypeParameterDeclaration();
	      }

	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      inner.call.apply(inner, [this, classBody, method].concat(args));
	    };
	  });

	  // parse a the super class type parameters and implements
	  instance.extend("parseClassSuper", function (inner) {
	    return function (node, isStatement) {
	      inner.call(this, node, isStatement);
	      if (node.superClass && this.isRelational("<")) {
	        node.superTypeParameters = this.flowParseTypeParameterInstantiation();
	      }
	      if (this.isContextual("implements")) {
	        this.next();
	        var implemented = node.implements = [];
	        do {
	          var _node = this.startNode();
	          _node.id = this.parseIdentifier();
	          if (this.isRelational("<")) {
	            _node.typeParameters = this.flowParseTypeParameterInstantiation();
	          } else {
	            _node.typeParameters = null;
	          }
	          implemented.push(this.finishNode(_node, "ClassImplements"));
	        } while (this.eat(types.comma));
	      }
	    };
	  });

	  instance.extend("parsePropertyName", function (inner) {
	    return function (node) {
	      var variancePos = this.state.start;
	      var variance = this.flowParseVariance();
	      var key = inner.call(this, node);
	      node.variance = variance;
	      node.variancePos = variancePos;
	      return key;
	    };
	  });

	  // parse type parameters for object method shorthand
	  instance.extend("parseObjPropValue", function (inner) {
	    return function (prop) {
	      if (prop.variance) {
	        this.unexpected(prop.variancePos);
	      }
	      delete prop.variance;
	      delete prop.variancePos;

	      var typeParameters = void 0;

	      // method shorthand
	      if (this.isRelational("<")) {
	        typeParameters = this.flowParseTypeParameterDeclaration();
	        if (!this.match(types.parenL)) this.unexpected();
	      }

	      inner.apply(this, arguments);

	      // add typeParameters if we found them
	      if (typeParameters) {
	        (prop.value || prop).typeParameters = typeParameters;
	      }
	    };
	  });

	  instance.extend("parseAssignableListItemTypes", function () {
	    return function (param) {
	      if (this.eat(types.question)) {
	        param.optional = true;
	      }
	      if (this.match(types.colon)) {
	        param.typeAnnotation = this.flowParseTypeAnnotation();
	      }
	      this.finishNode(param, param.type);
	      return param;
	    };
	  });

	  instance.extend("parseMaybeDefault", function (inner) {
	    return function () {
	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }

	      var node = inner.apply(this, args);

	      if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
	        this.raise(node.typeAnnotation.start, "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`");
	      }

	      return node;
	    };
	  });

	  // parse typeof and type imports
	  instance.extend("parseImportSpecifiers", function (inner) {
	    return function (node) {
	      node.importKind = "value";

	      var kind = null;
	      if (this.match(types._typeof)) {
	        kind = "typeof";
	      } else if (this.isContextual("type")) {
	        kind = "type";
	      }
	      if (kind) {
	        var lh = this.lookahead();
	        if (lh.type === types.name && lh.value !== "from" || lh.type === types.braceL || lh.type === types.star) {
	          this.next();
	          node.importKind = kind;
	        }
	      }

	      inner.call(this, node);
	    };
	  });

	  // parse import-type/typeof shorthand
	  instance.extend("parseImportSpecifier", function () {
	    return function (node) {
	      var specifier = this.startNode();
	      var firstIdentLoc = this.state.start;
	      var firstIdent = this.parseIdentifier(true);

	      var specifierTypeKind = null;
	      if (firstIdent.name === "type") {
	        specifierTypeKind = "type";
	      } else if (firstIdent.name === "typeof") {
	        specifierTypeKind = "typeof";
	      }

	      var isBinding = false;
	      if (this.isContextual("as")) {
	        var as_ident = this.parseIdentifier(true);
	        if (specifierTypeKind !== null && !this.match(types.name) && !this.state.type.keyword) {
	          // `import {type as ,` or `import {type as }`
	          specifier.imported = as_ident;
	          specifier.importKind = specifierTypeKind;
	          specifier.local = as_ident.__clone();
	        } else {
	          // `import {type as foo`
	          specifier.imported = firstIdent;
	          specifier.importKind = null;
	          specifier.local = this.parseIdentifier();
	        }
	      } else if (specifierTypeKind !== null && (this.match(types.name) || this.state.type.keyword)) {
	        // `import {type foo`
	        specifier.imported = this.parseIdentifier(true);
	        specifier.importKind = specifierTypeKind;
	        if (this.eatContextual("as")) {
	          specifier.local = this.parseIdentifier();
	        } else {
	          isBinding = true;
	          specifier.local = specifier.imported.__clone();
	        }
	      } else {
	        isBinding = true;
	        specifier.imported = firstIdent;
	        specifier.importKind = null;
	        specifier.local = specifier.imported.__clone();
	      }

	      if ((node.importKind === "type" || node.importKind === "typeof") && (specifier.importKind === "type" || specifier.importKind === "typeof")) {
	        this.raise(firstIdentLoc, "`The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements`");
	      }

	      if (isBinding) this.checkReservedWord(specifier.local.name, specifier.start, true, true);

	      this.checkLVal(specifier.local, true, undefined, "import specifier");
	      node.specifiers.push(this.finishNode(specifier, "ImportSpecifier"));
	    };
	  });

	  // parse function type parameters - function foo<T>() {}
	  instance.extend("parseFunctionParams", function (inner) {
	    return function (node) {
	      if (this.isRelational("<")) {
	        node.typeParameters = this.flowParseTypeParameterDeclaration();
	      }
	      inner.call(this, node);
	    };
	  });

	  // parse flow type annotations on variable declarator heads - let foo: string = bar
	  instance.extend("parseVarHead", function (inner) {
	    return function (decl) {
	      inner.call(this, decl);
	      if (this.match(types.colon)) {
	        decl.id.typeAnnotation = this.flowParseTypeAnnotation();
	        this.finishNode(decl.id, decl.id.type);
	      }
	    };
	  });

	  // parse the return type of an async arrow function - let foo = (async (): number => {});
	  instance.extend("parseAsyncArrowFromCallExpression", function (inner) {
	    return function (node, call) {
	      if (this.match(types.colon)) {
	        var oldNoAnonFunctionType = this.state.noAnonFunctionType;
	        this.state.noAnonFunctionType = true;
	        node.returnType = this.flowParseTypeAnnotation();
	        this.state.noAnonFunctionType = oldNoAnonFunctionType;
	      }

	      return inner.call(this, node, call);
	    };
	  });

	  // todo description
	  instance.extend("shouldParseAsyncArrow", function (inner) {
	    return function () {
	      return this.match(types.colon) || inner.call(this);
	    };
	  });

	  // We need to support type parameter declarations for arrow functions. This
	  // is tricky. There are three situations we need to handle
	  //
	  // 1. This is either JSX or an arrow function. We'll try JSX first. If that
	  //    fails, we'll try an arrow function. If that fails, we'll throw the JSX
	  //    error.
	  // 2. This is an arrow function. We'll parse the type parameter declaration,
	  //    parse the rest, make sure the rest is an arrow function, and go from
	  //    there
	  // 3. This is neither. Just call the inner function
	  instance.extend("parseMaybeAssign", function (inner) {
	    return function () {
	      var jsxError = null;

	      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }

	      if (types.jsxTagStart && this.match(types.jsxTagStart)) {
	        var state = this.state.clone();
	        try {
	          return inner.apply(this, args);
	        } catch (err) {
	          if (err instanceof SyntaxError) {
	            this.state = state;

	            // Remove `tc.j_expr` and `tc.j_oTag` from context added
	            // by parsing `jsxTagStart` to stop the JSX plugin from
	            // messing with the tokens
	            this.state.context.length -= 2;

	            jsxError = err;
	          } else {
	            // istanbul ignore next: no such error is expected
	            throw err;
	          }
	        }
	      }

	      if (jsxError != null || this.isRelational("<")) {
	        var arrowExpression = void 0;
	        var typeParameters = void 0;
	        try {
	          typeParameters = this.flowParseTypeParameterDeclaration();

	          arrowExpression = inner.apply(this, args);
	          arrowExpression.typeParameters = typeParameters;
	          arrowExpression.start = typeParameters.start;
	          arrowExpression.loc.start = typeParameters.loc.start;
	        } catch (err) {
	          throw jsxError || err;
	        }

	        if (arrowExpression.type === "ArrowFunctionExpression") {
	          return arrowExpression;
	        } else if (jsxError != null) {
	          throw jsxError;
	        } else {
	          this.raise(typeParameters.start, "Expected an arrow function after this type parameter declaration");
	        }
	      }

	      return inner.apply(this, args);
	    };
	  });

	  // handle return types for arrow functions
	  instance.extend("parseArrow", function (inner) {
	    return function (node) {
	      if (this.match(types.colon)) {
	        var state = this.state.clone();
	        try {
	          var oldNoAnonFunctionType = this.state.noAnonFunctionType;
	          this.state.noAnonFunctionType = true;
	          var returnType = this.flowParseTypeAndPredicateAnnotation();
	          this.state.noAnonFunctionType = oldNoAnonFunctionType;

	          if (this.canInsertSemicolon()) this.unexpected();
	          if (!this.match(types.arrow)) this.unexpected();
	          // assign after it is clear it is an arrow
	          node.returnType = returnType;
	        } catch (err) {
	          if (err instanceof SyntaxError) {
	            this.state = state;
	          } else {
	            // istanbul ignore next: no such error is expected
	            throw err;
	          }
	        }
	      }

	      return inner.call(this, node);
	    };
	  });

	  instance.extend("shouldParseArrow", function (inner) {
	    return function () {
	      return this.match(types.colon) || inner.call(this);
	    };
	  });
	};

	// Adapted from String.fromcodepoint to export the function without modifying String
	/*! https://mths.be/fromcodepoint v0.2.1 by @mathias */

	// The MIT License (MIT)
	// Copyright (c) Mathias Bynens
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
	// associated documentation files (the "Software"), to deal in the Software without restriction,
	// including without limitation the rights to use, copy, modify, merge, publish, distribute,
	// sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in all copies or
	// substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
	// NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	var fromCodePoint = String.fromCodePoint;

	if (!fromCodePoint) {
	  var stringFromCharCode = String.fromCharCode;
	  var floor = Math.floor;
	  fromCodePoint = function fromCodePoint() {
	    var MAX_SIZE = 0x4000;
	    var codeUnits = [];
	    var highSurrogate = void 0;
	    var lowSurrogate = void 0;
	    var index = -1;
	    var length = arguments.length;
	    if (!length) {
	      return "";
	    }
	    var result = "";
	    while (++index < length) {
	      var codePoint = Number(arguments[index]);
	      if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
	      codePoint < 0 || // not a valid Unicode code point
	      codePoint > 0x10FFFF || // not a valid Unicode code point
	      floor(codePoint) != codePoint // not an integer
	      ) {
	          throw RangeError("Invalid code point: " + codePoint);
	        }
	      if (codePoint <= 0xFFFF) {
	        // BMP code point
	        codeUnits.push(codePoint);
	      } else {
	        // Astral code point; split in surrogate halves
	        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	        codePoint -= 0x10000;
	        highSurrogate = (codePoint >> 10) + 0xD800;
	        lowSurrogate = codePoint % 0x400 + 0xDC00;
	        codeUnits.push(highSurrogate, lowSurrogate);
	      }
	      if (index + 1 == length || codeUnits.length > MAX_SIZE) {
	        result += stringFromCharCode.apply(null, codeUnits);
	        codeUnits.length = 0;
	      }
	    }
	    return result;
	  };
	}

	var fromCodePoint$1 = fromCodePoint;

	var XHTMLEntities = {
	  quot: "\"",
	  amp: "&",
	  apos: "'",
	  lt: "<",
	  gt: ">",
	  nbsp: "\xA0",
	  iexcl: "\xA1",
	  cent: "\xA2",
	  pound: "\xA3",
	  curren: "\xA4",
	  yen: "\xA5",
	  brvbar: "\xA6",
	  sect: "\xA7",
	  uml: "\xA8",
	  copy: "\xA9",
	  ordf: "\xAA",
	  laquo: "\xAB",
	  not: "\xAC",
	  shy: "\xAD",
	  reg: "\xAE",
	  macr: "\xAF",
	  deg: "\xB0",
	  plusmn: "\xB1",
	  sup2: "\xB2",
	  sup3: "\xB3",
	  acute: "\xB4",
	  micro: "\xB5",
	  para: "\xB6",
	  middot: "\xB7",
	  cedil: "\xB8",
	  sup1: "\xB9",
	  ordm: "\xBA",
	  raquo: "\xBB",
	  frac14: "\xBC",
	  frac12: "\xBD",
	  frac34: "\xBE",
	  iquest: "\xBF",
	  Agrave: "\xC0",
	  Aacute: "\xC1",
	  Acirc: "\xC2",
	  Atilde: "\xC3",
	  Auml: "\xC4",
	  Aring: "\xC5",
	  AElig: "\xC6",
	  Ccedil: "\xC7",
	  Egrave: "\xC8",
	  Eacute: "\xC9",
	  Ecirc: "\xCA",
	  Euml: "\xCB",
	  Igrave: "\xCC",
	  Iacute: "\xCD",
	  Icirc: "\xCE",
	  Iuml: "\xCF",
	  ETH: "\xD0",
	  Ntilde: "\xD1",
	  Ograve: "\xD2",
	  Oacute: "\xD3",
	  Ocirc: "\xD4",
	  Otilde: "\xD5",
	  Ouml: "\xD6",
	  times: "\xD7",
	  Oslash: "\xD8",
	  Ugrave: "\xD9",
	  Uacute: "\xDA",
	  Ucirc: "\xDB",
	  Uuml: "\xDC",
	  Yacute: "\xDD",
	  THORN: "\xDE",
	  szlig: "\xDF",
	  agrave: "\xE0",
	  aacute: "\xE1",
	  acirc: "\xE2",
	  atilde: "\xE3",
	  auml: "\xE4",
	  aring: "\xE5",
	  aelig: "\xE6",
	  ccedil: "\xE7",
	  egrave: "\xE8",
	  eacute: "\xE9",
	  ecirc: "\xEA",
	  euml: "\xEB",
	  igrave: "\xEC",
	  iacute: "\xED",
	  icirc: "\xEE",
	  iuml: "\xEF",
	  eth: "\xF0",
	  ntilde: "\xF1",
	  ograve: "\xF2",
	  oacute: "\xF3",
	  ocirc: "\xF4",
	  otilde: "\xF5",
	  ouml: "\xF6",
	  divide: "\xF7",
	  oslash: "\xF8",
	  ugrave: "\xF9",
	  uacute: "\xFA",
	  ucirc: "\xFB",
	  uuml: "\xFC",
	  yacute: "\xFD",
	  thorn: "\xFE",
	  yuml: "\xFF",
	  OElig: "\u0152",
	  oelig: "\u0153",
	  Scaron: "\u0160",
	  scaron: "\u0161",
	  Yuml: "\u0178",
	  fnof: "\u0192",
	  circ: "\u02C6",
	  tilde: "\u02DC",
	  Alpha: "\u0391",
	  Beta: "\u0392",
	  Gamma: "\u0393",
	  Delta: "\u0394",
	  Epsilon: "\u0395",
	  Zeta: "\u0396",
	  Eta: "\u0397",
	  Theta: "\u0398",
	  Iota: "\u0399",
	  Kappa: "\u039A",
	  Lambda: "\u039B",
	  Mu: "\u039C",
	  Nu: "\u039D",
	  Xi: "\u039E",
	  Omicron: "\u039F",
	  Pi: "\u03A0",
	  Rho: "\u03A1",
	  Sigma: "\u03A3",
	  Tau: "\u03A4",
	  Upsilon: "\u03A5",
	  Phi: "\u03A6",
	  Chi: "\u03A7",
	  Psi: "\u03A8",
	  Omega: "\u03A9",
	  alpha: "\u03B1",
	  beta: "\u03B2",
	  gamma: "\u03B3",
	  delta: "\u03B4",
	  epsilon: "\u03B5",
	  zeta: "\u03B6",
	  eta: "\u03B7",
	  theta: "\u03B8",
	  iota: "\u03B9",
	  kappa: "\u03BA",
	  lambda: "\u03BB",
	  mu: "\u03BC",
	  nu: "\u03BD",
	  xi: "\u03BE",
	  omicron: "\u03BF",
	  pi: "\u03C0",
	  rho: "\u03C1",
	  sigmaf: "\u03C2",
	  sigma: "\u03C3",
	  tau: "\u03C4",
	  upsilon: "\u03C5",
	  phi: "\u03C6",
	  chi: "\u03C7",
	  psi: "\u03C8",
	  omega: "\u03C9",
	  thetasym: "\u03D1",
	  upsih: "\u03D2",
	  piv: "\u03D6",
	  ensp: "\u2002",
	  emsp: "\u2003",
	  thinsp: "\u2009",
	  zwnj: "\u200C",
	  zwj: "\u200D",
	  lrm: "\u200E",
	  rlm: "\u200F",
	  ndash: "\u2013",
	  mdash: "\u2014",
	  lsquo: "\u2018",
	  rsquo: "\u2019",
	  sbquo: "\u201A",
	  ldquo: "\u201C",
	  rdquo: "\u201D",
	  bdquo: "\u201E",
	  dagger: "\u2020",
	  Dagger: "\u2021",
	  bull: "\u2022",
	  hellip: "\u2026",
	  permil: "\u2030",
	  prime: "\u2032",
	  Prime: "\u2033",
	  lsaquo: "\u2039",
	  rsaquo: "\u203A",
	  oline: "\u203E",
	  frasl: "\u2044",
	  euro: "\u20AC",
	  image: "\u2111",
	  weierp: "\u2118",
	  real: "\u211C",
	  trade: "\u2122",
	  alefsym: "\u2135",
	  larr: "\u2190",
	  uarr: "\u2191",
	  rarr: "\u2192",
	  darr: "\u2193",
	  harr: "\u2194",
	  crarr: "\u21B5",
	  lArr: "\u21D0",
	  uArr: "\u21D1",
	  rArr: "\u21D2",
	  dArr: "\u21D3",
	  hArr: "\u21D4",
	  forall: "\u2200",
	  part: "\u2202",
	  exist: "\u2203",
	  empty: "\u2205",
	  nabla: "\u2207",
	  isin: "\u2208",
	  notin: "\u2209",
	  ni: "\u220B",
	  prod: "\u220F",
	  sum: "\u2211",
	  minus: "\u2212",
	  lowast: "\u2217",
	  radic: "\u221A",
	  prop: "\u221D",
	  infin: "\u221E",
	  ang: "\u2220",
	  and: "\u2227",
	  or: "\u2228",
	  cap: "\u2229",
	  cup: "\u222A",
	  "int": "\u222B",
	  there4: "\u2234",
	  sim: "\u223C",
	  cong: "\u2245",
	  asymp: "\u2248",
	  ne: "\u2260",
	  equiv: "\u2261",
	  le: "\u2264",
	  ge: "\u2265",
	  sub: "\u2282",
	  sup: "\u2283",
	  nsub: "\u2284",
	  sube: "\u2286",
	  supe: "\u2287",
	  oplus: "\u2295",
	  otimes: "\u2297",
	  perp: "\u22A5",
	  sdot: "\u22C5",
	  lceil: "\u2308",
	  rceil: "\u2309",
	  lfloor: "\u230A",
	  rfloor: "\u230B",
	  lang: "\u2329",
	  rang: "\u232A",
	  loz: "\u25CA",
	  spades: "\u2660",
	  clubs: "\u2663",
	  hearts: "\u2665",
	  diams: "\u2666"
	};

	var HEX_NUMBER = /^[\da-fA-F]+$/;
	var DECIMAL_NUMBER = /^\d+$/;

	types$1.j_oTag = new TokContext("<tag", false);
	types$1.j_cTag = new TokContext("</tag", false);
	types$1.j_expr = new TokContext("<tag>...</tag>", true, true);

	types.jsxName = new TokenType("jsxName");
	types.jsxText = new TokenType("jsxText", { beforeExpr: true });
	types.jsxTagStart = new TokenType("jsxTagStart", { startsExpr: true });
	types.jsxTagEnd = new TokenType("jsxTagEnd");

	types.jsxTagStart.updateContext = function () {
	  this.state.context.push(types$1.j_expr); // treat as beginning of JSX expression
	  this.state.context.push(types$1.j_oTag); // start opening tag context
	  this.state.exprAllowed = false;
	};

	types.jsxTagEnd.updateContext = function (prevType) {
	  var out = this.state.context.pop();
	  if (out === types$1.j_oTag && prevType === types.slash || out === types$1.j_cTag) {
	    this.state.context.pop();
	    this.state.exprAllowed = this.curContext() === types$1.j_expr;
	  } else {
	    this.state.exprAllowed = true;
	  }
	};

	var pp$9 = Parser.prototype;

	// Reads inline JSX contents token.

	pp$9.jsxReadToken = function () {
	  var out = "";
	  var chunkStart = this.state.pos;
	  for (;;) {
	    if (this.state.pos >= this.input.length) {
	      this.raise(this.state.start, "Unterminated JSX contents");
	    }

	    var ch = this.input.charCodeAt(this.state.pos);

	    switch (ch) {
	      case 60: // "<"
	      case 123:
	        // "{"
	        if (this.state.pos === this.state.start) {
	          if (ch === 60 && this.state.exprAllowed) {
	            ++this.state.pos;
	            return this.finishToken(types.jsxTagStart);
	          }
	          return this.getTokenFromCode(ch);
	        }
	        out += this.input.slice(chunkStart, this.state.pos);
	        return this.finishToken(types.jsxText, out);

	      case 38:
	        // "&"
	        out += this.input.slice(chunkStart, this.state.pos);
	        out += this.jsxReadEntity();
	        chunkStart = this.state.pos;
	        break;

	      default:
	        if (isNewLine(ch)) {
	          out += this.input.slice(chunkStart, this.state.pos);
	          out += this.jsxReadNewLine(true);
	          chunkStart = this.state.pos;
	        } else {
	          ++this.state.pos;
	        }
	    }
	  }
	};

	pp$9.jsxReadNewLine = function (normalizeCRLF) {
	  var ch = this.input.charCodeAt(this.state.pos);
	  var out = void 0;
	  ++this.state.pos;
	  if (ch === 13 && this.input.charCodeAt(this.state.pos) === 10) {
	    ++this.state.pos;
	    out = normalizeCRLF ? "\n" : "\r\n";
	  } else {
	    out = String.fromCharCode(ch);
	  }
	  ++this.state.curLine;
	  this.state.lineStart = this.state.pos;

	  return out;
	};

	pp$9.jsxReadString = function (quote) {
	  var out = "";
	  var chunkStart = ++this.state.pos;
	  for (;;) {
	    if (this.state.pos >= this.input.length) {
	      this.raise(this.state.start, "Unterminated string constant");
	    }

	    var ch = this.input.charCodeAt(this.state.pos);
	    if (ch === quote) break;
	    if (ch === 38) {
	      // "&"
	      out += this.input.slice(chunkStart, this.state.pos);
	      out += this.jsxReadEntity();
	      chunkStart = this.state.pos;
	    } else if (isNewLine(ch)) {
	      out += this.input.slice(chunkStart, this.state.pos);
	      out += this.jsxReadNewLine(false);
	      chunkStart = this.state.pos;
	    } else {
	      ++this.state.pos;
	    }
	  }
	  out += this.input.slice(chunkStart, this.state.pos++);
	  return this.finishToken(types.string, out);
	};

	pp$9.jsxReadEntity = function () {
	  var str = "";
	  var count = 0;
	  var entity = void 0;
	  var ch = this.input[this.state.pos];

	  var startPos = ++this.state.pos;
	  while (this.state.pos < this.input.length && count++ < 10) {
	    ch = this.input[this.state.pos++];
	    if (ch === ";") {
	      if (str[0] === "#") {
	        if (str[1] === "x") {
	          str = str.substr(2);
	          if (HEX_NUMBER.test(str)) entity = fromCodePoint$1(parseInt(str, 16));
	        } else {
	          str = str.substr(1);
	          if (DECIMAL_NUMBER.test(str)) entity = fromCodePoint$1(parseInt(str, 10));
	        }
	      } else {
	        entity = XHTMLEntities[str];
	      }
	      break;
	    }
	    str += ch;
	  }
	  if (!entity) {
	    this.state.pos = startPos;
	    return "&";
	  }
	  return entity;
	};

	// Read a JSX identifier (valid tag or attribute name).
	//
	// Optimized version since JSX identifiers can"t contain
	// escape characters and so can be read as single slice.
	// Also assumes that first character was already checked
	// by isIdentifierStart in readToken.

	pp$9.jsxReadWord = function () {
	  var ch = void 0;
	  var start = this.state.pos;
	  do {
	    ch = this.input.charCodeAt(++this.state.pos);
	  } while (isIdentifierChar(ch) || ch === 45); // "-"
	  return this.finishToken(types.jsxName, this.input.slice(start, this.state.pos));
	};

	// Transforms JSX element name to string.

	function getQualifiedJSXName(object) {
	  if (object.type === "JSXIdentifier") {
	    return object.name;
	  }

	  if (object.type === "JSXNamespacedName") {
	    return object.namespace.name + ":" + object.name.name;
	  }

	  if (object.type === "JSXMemberExpression") {
	    return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);
	  }
	}

	// Parse next token as JSX identifier

	pp$9.jsxParseIdentifier = function () {
	  var node = this.startNode();
	  if (this.match(types.jsxName)) {
	    node.name = this.state.value;
	  } else if (this.state.type.keyword) {
	    node.name = this.state.type.keyword;
	  } else {
	    this.unexpected();
	  }
	  this.next();
	  return this.finishNode(node, "JSXIdentifier");
	};

	// Parse namespaced identifier.

	pp$9.jsxParseNamespacedName = function () {
	  var startPos = this.state.start;
	  var startLoc = this.state.startLoc;
	  var name = this.jsxParseIdentifier();
	  if (!this.eat(types.colon)) return name;

	  var node = this.startNodeAt(startPos, startLoc);
	  node.namespace = name;
	  node.name = this.jsxParseIdentifier();
	  return this.finishNode(node, "JSXNamespacedName");
	};

	// Parses element name in any form - namespaced, member
	// or single identifier.

	pp$9.jsxParseElementName = function () {
	  var startPos = this.state.start;
	  var startLoc = this.state.startLoc;
	  var node = this.jsxParseNamespacedName();
	  while (this.eat(types.dot)) {
	    var newNode = this.startNodeAt(startPos, startLoc);
	    newNode.object = node;
	    newNode.property = this.jsxParseIdentifier();
	    node = this.finishNode(newNode, "JSXMemberExpression");
	  }
	  return node;
	};

	// Parses any type of JSX attribute value.

	pp$9.jsxParseAttributeValue = function () {
	  var node = void 0;
	  switch (this.state.type) {
	    case types.braceL:
	      node = this.jsxParseExpressionContainer();
	      if (node.expression.type === "JSXEmptyExpression") {
	        this.raise(node.start, "JSX attributes must only be assigned a non-empty expression");
	      } else {
	        return node;
	      }

	    case types.jsxTagStart:
	    case types.string:
	      node = this.parseExprAtom();
	      node.extra = null;
	      return node;

	    default:
	      this.raise(this.state.start, "JSX value should be either an expression or a quoted JSX text");
	  }
	};

	// JSXEmptyExpression is unique type since it doesn't actually parse anything,
	// and so it should start at the end of last read token (left brace) and finish
	// at the beginning of the next one (right brace).

	pp$9.jsxParseEmptyExpression = function () {
	  var node = this.startNodeAt(this.state.lastTokEnd, this.state.lastTokEndLoc);
	  return this.finishNodeAt(node, "JSXEmptyExpression", this.state.start, this.state.startLoc);
	};

	// Parse JSX spread child

	pp$9.jsxParseSpreadChild = function () {
	  var node = this.startNode();
	  this.expect(types.braceL);
	  this.expect(types.ellipsis);
	  node.expression = this.parseExpression();
	  this.expect(types.braceR);

	  return this.finishNode(node, "JSXSpreadChild");
	};

	// Parses JSX expression enclosed into curly brackets.


	pp$9.jsxParseExpressionContainer = function () {
	  var node = this.startNode();
	  this.next();
	  if (this.match(types.braceR)) {
	    node.expression = this.jsxParseEmptyExpression();
	  } else {
	    node.expression = this.parseExpression();
	  }
	  this.expect(types.braceR);
	  return this.finishNode(node, "JSXExpressionContainer");
	};

	// Parses following JSX attribute name-value pair.

	pp$9.jsxParseAttribute = function () {
	  var node = this.startNode();
	  if (this.eat(types.braceL)) {
	    this.expect(types.ellipsis);
	    node.argument = this.parseMaybeAssign();
	    this.expect(types.braceR);
	    return this.finishNode(node, "JSXSpreadAttribute");
	  }
	  node.name = this.jsxParseNamespacedName();
	  node.value = this.eat(types.eq) ? this.jsxParseAttributeValue() : null;
	  return this.finishNode(node, "JSXAttribute");
	};

	// Parses JSX opening tag starting after "<".

	pp$9.jsxParseOpeningElementAt = function (startPos, startLoc) {
	  var node = this.startNodeAt(startPos, startLoc);
	  node.attributes = [];
	  node.name = this.jsxParseElementName();
	  while (!this.match(types.slash) && !this.match(types.jsxTagEnd)) {
	    node.attributes.push(this.jsxParseAttribute());
	  }
	  node.selfClosing = this.eat(types.slash);
	  this.expect(types.jsxTagEnd);
	  return this.finishNode(node, "JSXOpeningElement");
	};

	// Parses JSX closing tag starting after "</".

	pp$9.jsxParseClosingElementAt = function (startPos, startLoc) {
	  var node = this.startNodeAt(startPos, startLoc);
	  node.name = this.jsxParseElementName();
	  this.expect(types.jsxTagEnd);
	  return this.finishNode(node, "JSXClosingElement");
	};

	// Parses entire JSX element, including it"s opening tag
	// (starting after "<"), attributes, contents and closing tag.

	pp$9.jsxParseElementAt = function (startPos, startLoc) {
	  var node = this.startNodeAt(startPos, startLoc);
	  var children = [];
	  var openingElement = this.jsxParseOpeningElementAt(startPos, startLoc);
	  var closingElement = null;

	  if (!openingElement.selfClosing) {
	    contents: for (;;) {
	      switch (this.state.type) {
	        case types.jsxTagStart:
	          startPos = this.state.start;startLoc = this.state.startLoc;
	          this.next();
	          if (this.eat(types.slash)) {
	            closingElement = this.jsxParseClosingElementAt(startPos, startLoc);
	            break contents;
	          }
	          children.push(this.jsxParseElementAt(startPos, startLoc));
	          break;

	        case types.jsxText:
	          children.push(this.parseExprAtom());
	          break;

	        case types.braceL:
	          if (this.lookahead().type === types.ellipsis) {
	            children.push(this.jsxParseSpreadChild());
	          } else {
	            children.push(this.jsxParseExpressionContainer());
	          }

	          break;

	        // istanbul ignore next - should never happen
	        default:
	          this.unexpected();
	      }
	    }

	    if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
	      this.raise(closingElement.start, "Expected corresponding JSX closing tag for <" + getQualifiedJSXName(openingElement.name) + ">");
	    }
	  }

	  node.openingElement = openingElement;
	  node.closingElement = closingElement;
	  node.children = children;
	  if (this.match(types.relational) && this.state.value === "<") {
	    this.raise(this.state.start, "Adjacent JSX elements must be wrapped in an enclosing tag");
	  }
	  return this.finishNode(node, "JSXElement");
	};

	// Parses entire JSX element from current position.

	pp$9.jsxParseElement = function () {
	  var startPos = this.state.start;
	  var startLoc = this.state.startLoc;
	  this.next();
	  return this.jsxParseElementAt(startPos, startLoc);
	};

	var jsxPlugin = function (instance) {
	  instance.extend("parseExprAtom", function (inner) {
	    return function (refShortHandDefaultPos) {
	      if (this.match(types.jsxText)) {
	        var node = this.parseLiteral(this.state.value, "JSXText");
	        // https://github.com/babel/babel/issues/2078
	        node.extra = null;
	        return node;
	      } else if (this.match(types.jsxTagStart)) {
	        return this.jsxParseElement();
	      } else {
	        return inner.call(this, refShortHandDefaultPos);
	      }
	    };
	  });

	  instance.extend("readToken", function (inner) {
	    return function (code) {
	      if (this.state.inPropertyName) return inner.call(this, code);

	      var context = this.curContext();

	      if (context === types$1.j_expr) {
	        return this.jsxReadToken();
	      }

	      if (context === types$1.j_oTag || context === types$1.j_cTag) {
	        if (isIdentifierStart(code)) {
	          return this.jsxReadWord();
	        }

	        if (code === 62) {
	          ++this.state.pos;
	          return this.finishToken(types.jsxTagEnd);
	        }

	        if ((code === 34 || code === 39) && context === types$1.j_oTag) {
	          return this.jsxReadString(code);
	        }
	      }

	      if (code === 60 && this.state.exprAllowed) {
	        ++this.state.pos;
	        return this.finishToken(types.jsxTagStart);
	      }

	      return inner.call(this, code);
	    };
	  });

	  instance.extend("updateContext", function (inner) {
	    return function (prevType) {
	      if (this.match(types.braceL)) {
	        var curContext = this.curContext();
	        if (curContext === types$1.j_oTag) {
	          this.state.context.push(types$1.braceExpression);
	        } else if (curContext === types$1.j_expr) {
	          this.state.context.push(types$1.templateQuasi);
	        } else {
	          inner.call(this, prevType);
	        }
	        this.state.exprAllowed = true;
	      } else if (this.match(types.slash) && prevType === types.jsxTagStart) {
	        this.state.context.length -= 2; // do not consider JSX expr -> JSX open tag -> ... anymore
	        this.state.context.push(types$1.j_cTag); // reconsider as closing tag context
	        this.state.exprAllowed = false;
	      } else {
	        return inner.call(this, prevType);
	      }
	    };
	  });
	};

	plugins.estree = estreePlugin;
	plugins.flow = flowPlugin;
	plugins.jsx = jsxPlugin;

	function parse(input, options) {
	  return new Parser(options, input).parse();
	}

	function parseExpression(input, options) {
	  var parser = new Parser(options, input);
	  if (parser.options.strictMode) {
	    parser.state.strict = true;
	  }
	  return parser.getExpression();
	}

	exports.parse = parse;
	exports.parseExpression = parseExpression;
	exports.tokTypes = types;


/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.visitors = exports.Hub = exports.Scope = exports.NodePath = undefined;

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _path = __webpack_require__(490);

	Object.defineProperty(exports, "NodePath", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_path).default;
	  }
	});

	var _scope = __webpack_require__(583);

	Object.defineProperty(exports, "Scope", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_scope).default;
	  }
	});

	var _hub = __webpack_require__(648);

	Object.defineProperty(exports, "Hub", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_hub).default;
	  }
	});
	exports.default = traverse;

	var _context = __webpack_require__(649);

	var _context2 = _interopRequireDefault(_context);

	var _visitors = __webpack_require__(650);

	var visitors = _interopRequireWildcard(_visitors);

	var _babelMessages = __webpack_require__(612);

	var messages = _interopRequireWildcard(_babelMessages);

	var _includes = __webpack_require__(601);

	var _includes2 = _interopRequireDefault(_includes);

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	var _cache = __webpack_require__(618);

	var cache = _interopRequireWildcard(_cache);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.visitors = visitors;
	function traverse(parent, opts, scope, state, parentPath) {
	  if (!parent) return;
	  if (!opts) opts = {};

	  if (!opts.noScope && !scope) {
	    if (parent.type !== "Program" && parent.type !== "File") {
	      throw new Error(messages.get("traverseNeedsParent", parent.type));
	    }
	  }

	  visitors.explode(opts);

	  traverse.node(parent, opts, scope, state, parentPath);
	}

	traverse.visitors = visitors;
	traverse.verify = visitors.verify;
	traverse.explode = visitors.explode;

	traverse.NodePath = __webpack_require__(490);
	traverse.Scope = __webpack_require__(583);
	traverse.Hub = __webpack_require__(648);

	traverse.cheap = function (node, enter) {
	  return t.traverseFast(node, enter);
	};

	traverse.node = function (node, opts, scope, state, parentPath, skipKeys) {
	  var keys = t.VISITOR_KEYS[node.type];
	  if (!keys) return;

	  var context = new _context2.default(scope, opts, state, parentPath);
	  for (var _iterator = keys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var key = _ref;

	    if (skipKeys && skipKeys[key]) continue;
	    if (context.visit(node, key)) return;
	  }
	};

	traverse.clearNode = function (node, opts) {
	  t.removeProperties(node, opts);

	  cache.path.delete(node);
	};

	traverse.removeProperties = function (tree, opts) {
	  t.traverseFast(tree, traverse.clearNode, opts);
	  return tree;
	};

	function hasBlacklistedType(path, state) {
	  if (path.node.type === state.type) {
	    state.has = true;
	    path.stop();
	  }
	}

	traverse.hasType = function (tree, scope, type, blacklistTypes) {
	  if ((0, _includes2.default)(blacklistTypes, tree.type)) return false;

	  if (tree.type === type) return true;

	  var state = {
	    has: false,
	    type: type
	  };

	  traverse(tree, {
	    blacklist: blacklistTypes,
	    enter: hasBlacklistedType
	  }, scope, state);

	  return state.has;
	};

	traverse.clearCache = function () {
	  cache.clear();
	};

	traverse.clearCache.clearPath = cache.clearPath;
	traverse.clearCache.clearScope = cache.clearScope;

	traverse.copyCache = function (source, destination) {
	  if (cache.path.has(source)) {
	    cache.path.set(destination, cache.path.get(source));
	  }
	};

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(438), __esModule: true };

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(439);
	__webpack_require__(485);
	module.exports = __webpack_require__(487);

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(440);
	var global        = __webpack_require__(451)
	  , hide          = __webpack_require__(455)
	  , Iterators     = __webpack_require__(443)
	  , TO_STRING_TAG = __webpack_require__(482)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(441)
	  , step             = __webpack_require__(442)
	  , Iterators        = __webpack_require__(443)
	  , toIObject        = __webpack_require__(444);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(448)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 441 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 442 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 443 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(445)
	  , defined = __webpack_require__(447);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(446);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 446 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 447 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(449)
	  , $export        = __webpack_require__(450)
	  , redefine       = __webpack_require__(465)
	  , hide           = __webpack_require__(455)
	  , has            = __webpack_require__(466)
	  , Iterators      = __webpack_require__(443)
	  , $iterCreate    = __webpack_require__(467)
	  , setToStringTag = __webpack_require__(481)
	  , getPrototypeOf = __webpack_require__(483)
	  , ITERATOR       = __webpack_require__(482)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 449 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(451)
	  , core      = __webpack_require__(452)
	  , ctx       = __webpack_require__(453)
	  , hide      = __webpack_require__(455)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 451 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 452 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(454);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 454 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(456)
	  , createDesc = __webpack_require__(464);
	module.exports = __webpack_require__(460) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(457)
	  , IE8_DOM_DEFINE = __webpack_require__(459)
	  , toPrimitive    = __webpack_require__(463)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(460) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(458);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 458 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(460) && !__webpack_require__(461)(function(){
	  return Object.defineProperty(__webpack_require__(462)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(461)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 461 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(458)
	  , document = __webpack_require__(451).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(458);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 464 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(455);

/***/ },
/* 466 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(468)
	  , descriptor     = __webpack_require__(464)
	  , setToStringTag = __webpack_require__(481)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(455)(IteratorPrototype, __webpack_require__(482)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(457)
	  , dPs         = __webpack_require__(469)
	  , enumBugKeys = __webpack_require__(479)
	  , IE_PROTO    = __webpack_require__(476)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(462)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(480).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(456)
	  , anObject = __webpack_require__(457)
	  , getKeys  = __webpack_require__(470);

	module.exports = __webpack_require__(460) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(471)
	  , enumBugKeys = __webpack_require__(479);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(466)
	  , toIObject    = __webpack_require__(444)
	  , arrayIndexOf = __webpack_require__(472)(false)
	  , IE_PROTO     = __webpack_require__(476)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(444)
	  , toLength  = __webpack_require__(473)
	  , toIndex   = __webpack_require__(475);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(474)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 474 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(474)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(477)('keys')
	  , uid    = __webpack_require__(478);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(451)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 478 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 479 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(451).document && document.documentElement;

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(456).f
	  , has = __webpack_require__(466)
	  , TAG = __webpack_require__(482)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(477)('wks')
	  , uid        = __webpack_require__(478)
	  , Symbol     = __webpack_require__(451).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(466)
	  , toObject    = __webpack_require__(484)
	  , IE_PROTO    = __webpack_require__(476)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(447);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(486)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(448)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(474)
	  , defined   = __webpack_require__(447);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(457)
	  , get      = __webpack_require__(488);
	module.exports = __webpack_require__(452).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(489)
	  , ITERATOR  = __webpack_require__(482)('iterator')
	  , Iterators = __webpack_require__(443);
	module.exports = __webpack_require__(452).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(446)
	  , TAG = __webpack_require__(482)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _classCallCheck2 = __webpack_require__(491);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _virtualTypes = __webpack_require__(492);

	var virtualTypes = _interopRequireWildcard(_virtualTypes);

	var _debug2 = __webpack_require__(579);

	var _debug3 = _interopRequireDefault(_debug2);

	var _invariant = __webpack_require__(159);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _index = __webpack_require__(436);

	var _index2 = _interopRequireDefault(_index);

	var _assign = __webpack_require__(582);

	var _assign2 = _interopRequireDefault(_assign);

	var _scope = __webpack_require__(583);

	var _scope2 = _interopRequireDefault(_scope);

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	var _cache = __webpack_require__(618);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _debug = (0, _debug3.default)("babel");

	var NodePath = function () {
	  function NodePath(hub, parent) {
	    (0, _classCallCheck3.default)(this, NodePath);

	    this.parent = parent;
	    this.hub = hub;
	    this.contexts = [];
	    this.data = {};
	    this.shouldSkip = false;
	    this.shouldStop = false;
	    this.removed = false;
	    this.state = null;
	    this.opts = null;
	    this.skipKeys = null;
	    this.parentPath = null;
	    this.context = null;
	    this.container = null;
	    this.listKey = null;
	    this.inList = false;
	    this.parentKey = null;
	    this.key = null;
	    this.node = null;
	    this.scope = null;
	    this.type = null;
	    this.typeAnnotation = null;
	  }

	  NodePath.get = function get(_ref) {
	    var hub = _ref.hub,
	        parentPath = _ref.parentPath,
	        parent = _ref.parent,
	        container = _ref.container,
	        listKey = _ref.listKey,
	        key = _ref.key;

	    if (!hub && parentPath) {
	      hub = parentPath.hub;
	    }

	    (0, _invariant2.default)(parent, "To get a node path the parent needs to exist");

	    var targetNode = container[key];

	    var paths = _cache.path.get(parent) || [];
	    if (!_cache.path.has(parent)) {
	      _cache.path.set(parent, paths);
	    }

	    var path = void 0;

	    for (var i = 0; i < paths.length; i++) {
	      var pathCheck = paths[i];
	      if (pathCheck.node === targetNode) {
	        path = pathCheck;
	        break;
	      }
	    }

	    if (!path) {
	      path = new NodePath(hub, parent);
	      paths.push(path);
	    }

	    path.setup(parentPath, container, listKey, key);

	    return path;
	  };

	  NodePath.prototype.getScope = function getScope(scope) {
	    var ourScope = scope;

	    if (this.isScope()) {
	      ourScope = new _scope2.default(this, scope);
	    }

	    return ourScope;
	  };

	  NodePath.prototype.setData = function setData(key, val) {
	    return this.data[key] = val;
	  };

	  NodePath.prototype.getData = function getData(key, def) {
	    var val = this.data[key];
	    if (!val && def) val = this.data[key] = def;
	    return val;
	  };

	  NodePath.prototype.buildCodeFrameError = function buildCodeFrameError(msg) {
	    var Error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SyntaxError;

	    return this.hub.file.buildCodeFrameError(this.node, msg, Error);
	  };

	  NodePath.prototype.traverse = function traverse(visitor, state) {
	    (0, _index2.default)(this.node, visitor, this.scope, state, this);
	  };

	  NodePath.prototype.mark = function mark(type, message) {
	    this.hub.file.metadata.marked.push({
	      type: type,
	      message: message,
	      loc: this.node.loc
	    });
	  };

	  NodePath.prototype.set = function set(key, node) {
	    t.validate(this.node, key, node);
	    this.node[key] = node;
	  };

	  NodePath.prototype.getPathLocation = function getPathLocation() {
	    var parts = [];
	    var path = this;
	    do {
	      var key = path.key;
	      if (path.inList) key = path.listKey + "[" + key + "]";
	      parts.unshift(key);
	    } while (path = path.parentPath);
	    return parts.join(".");
	  };

	  NodePath.prototype.debug = function debug(buildMessage) {
	    if (!_debug.enabled) return;
	    _debug(this.getPathLocation() + " " + this.type + ": " + buildMessage());
	  };

	  return NodePath;
	}();

	exports.default = NodePath;


	(0, _assign2.default)(NodePath.prototype, __webpack_require__(624));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(625));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(628));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(638));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(639));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(640));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(641));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(642));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(644));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(646));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(647));

	var _loop2 = function _loop2() {
	  if (_isArray) {
	    if (_i >= _iterator.length) return "break";
	    _ref2 = _iterator[_i++];
	  } else {
	    _i = _iterator.next();
	    if (_i.done) return "break";
	    _ref2 = _i.value;
	  }

	  var type = _ref2;

	  var typeKey = "is" + type;
	  NodePath.prototype[typeKey] = function (opts) {
	    return t[typeKey](this.node, opts);
	  };

	  NodePath.prototype["assert" + type] = function (opts) {
	    if (!this[typeKey](opts)) {
	      throw new TypeError("Expected node path of type " + type);
	    }
	  };
	};

	for (var _iterator = t.TYPES, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	  var _ref2;

	  var _ret2 = _loop2();

	  if (_ret2 === "break") break;
	}

	var _loop = function _loop(type) {
	  if (type[0] === "_") return "continue";
	  if (t.TYPES.indexOf(type) < 0) t.TYPES.push(type);

	  var virtualType = virtualTypes[type];

	  NodePath.prototype["is" + type] = function (opts) {
	    return virtualType.checkPath(this, opts);
	  };
	};

	for (var type in virtualTypes) {
	  var _ret = _loop(type);

	  if (_ret === "continue") continue;
	}
	module.exports = exports["default"];

/***/ },
/* 491 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.Flow = exports.Pure = exports.Generated = exports.User = exports.Var = exports.BlockScoped = exports.Referenced = exports.Scope = exports.Expression = exports.Statement = exports.BindingIdentifier = exports.ReferencedMemberExpression = exports.ReferencedIdentifier = undefined;

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var ReferencedIdentifier = exports.ReferencedIdentifier = {
	  types: ["Identifier", "JSXIdentifier"],
	  checkPath: function checkPath(_ref, opts) {
	    var node = _ref.node,
	        parent = _ref.parent;

	    if (!t.isIdentifier(node, opts) && !t.isJSXMemberExpression(parent, opts)) {
	      if (t.isJSXIdentifier(node, opts)) {
	        if (_babelTypes.react.isCompatTag(node.name)) return false;
	      } else {
	        return false;
	      }
	    }

	    return t.isReferenced(node, parent);
	  }
	};

	var ReferencedMemberExpression = exports.ReferencedMemberExpression = {
	  types: ["MemberExpression"],
	  checkPath: function checkPath(_ref2) {
	    var node = _ref2.node,
	        parent = _ref2.parent;

	    return t.isMemberExpression(node) && t.isReferenced(node, parent);
	  }
	};

	var BindingIdentifier = exports.BindingIdentifier = {
	  types: ["Identifier"],
	  checkPath: function checkPath(_ref3) {
	    var node = _ref3.node,
	        parent = _ref3.parent;

	    return t.isIdentifier(node) && t.isBinding(node, parent);
	  }
	};

	var Statement = exports.Statement = {
	  types: ["Statement"],
	  checkPath: function checkPath(_ref4) {
	    var node = _ref4.node,
	        parent = _ref4.parent;

	    if (t.isStatement(node)) {
	      if (t.isVariableDeclaration(node)) {
	        if (t.isForXStatement(parent, { left: node })) return false;
	        if (t.isForStatement(parent, { init: node })) return false;
	      }

	      return true;
	    } else {
	      return false;
	    }
	  }
	};

	var Expression = exports.Expression = {
	  types: ["Expression"],
	  checkPath: function checkPath(path) {
	    if (path.isIdentifier()) {
	      return path.isReferencedIdentifier();
	    } else {
	      return t.isExpression(path.node);
	    }
	  }
	};

	var Scope = exports.Scope = {
	  types: ["Scopable"],
	  checkPath: function checkPath(path) {
	    return t.isScope(path.node, path.parent);
	  }
	};

	var Referenced = exports.Referenced = {
	  checkPath: function checkPath(path) {
	    return t.isReferenced(path.node, path.parent);
	  }
	};

	var BlockScoped = exports.BlockScoped = {
	  checkPath: function checkPath(path) {
	    return t.isBlockScoped(path.node);
	  }
	};

	var Var = exports.Var = {
	  types: ["VariableDeclaration"],
	  checkPath: function checkPath(path) {
	    return t.isVar(path.node);
	  }
	};

	var User = exports.User = {
	  checkPath: function checkPath(path) {
	    return path.node && !!path.node.loc;
	  }
	};

	var Generated = exports.Generated = {
	  checkPath: function checkPath(path) {
	    return !path.isUser();
	  }
	};

	var Pure = exports.Pure = {
	  checkPath: function checkPath(path, opts) {
	    return path.scope.isPure(path.node, opts);
	  }
	};

	var Flow = exports.Flow = {
	  types: ["Flow", "ImportDeclaration", "ExportDeclaration", "ImportSpecifier"],
	  checkPath: function checkPath(_ref5) {
	    var node = _ref5.node;

	    if (t.isFlow(node)) {
	      return true;
	    } else if (t.isImportDeclaration(node)) {
	      return node.importKind === "type" || node.importKind === "typeof";
	    } else if (t.isExportDeclaration(node)) {
	      return node.exportKind === "type";
	    } else if (t.isImportSpecifier(node)) {
	      return node.importKind === "type" || node.importKind === "typeof";
	    } else {
	      return false;
	    }
	  }
	};

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.createTypeAnnotationBasedOnTypeof = exports.removeTypeDuplicates = exports.createUnionTypeAnnotation = exports.valueToNode = exports.toBlock = exports.toExpression = exports.toStatement = exports.toBindingIdentifierName = exports.toIdentifier = exports.toKeyAlias = exports.toSequenceExpression = exports.toComputedKey = exports.isNodesEquivalent = exports.isImmutable = exports.isScope = exports.isSpecifierDefault = exports.isVar = exports.isBlockScoped = exports.isLet = exports.isValidIdentifier = exports.isReferenced = exports.isBinding = exports.getOuterBindingIdentifiers = exports.getBindingIdentifiers = exports.TYPES = exports.react = exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = undefined;

	var _getOwnPropertySymbols = __webpack_require__(494);

	var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _keys = __webpack_require__(508);

	var _keys2 = _interopRequireDefault(_keys);

	var _stringify = __webpack_require__(512);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _constants = __webpack_require__(514);

	Object.defineProperty(exports, "STATEMENT_OR_BLOCK_KEYS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.STATEMENT_OR_BLOCK_KEYS;
	  }
	});
	Object.defineProperty(exports, "FLATTENABLE_KEYS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.FLATTENABLE_KEYS;
	  }
	});
	Object.defineProperty(exports, "FOR_INIT_KEYS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.FOR_INIT_KEYS;
	  }
	});
	Object.defineProperty(exports, "COMMENT_KEYS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.COMMENT_KEYS;
	  }
	});
	Object.defineProperty(exports, "LOGICAL_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.LOGICAL_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "UPDATE_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.UPDATE_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "BOOLEAN_NUMBER_BINARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.BOOLEAN_NUMBER_BINARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "EQUALITY_BINARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.EQUALITY_BINARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "COMPARISON_BINARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.COMPARISON_BINARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "BOOLEAN_BINARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.BOOLEAN_BINARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "NUMBER_BINARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.NUMBER_BINARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "BINARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.BINARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "BOOLEAN_UNARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.BOOLEAN_UNARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "NUMBER_UNARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.NUMBER_UNARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "STRING_UNARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.STRING_UNARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "UNARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.UNARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "INHERIT_KEYS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.INHERIT_KEYS;
	  }
	});
	Object.defineProperty(exports, "BLOCK_SCOPED_SYMBOL", {
	  enumerable: true,
	  get: function get() {
	    return _constants.BLOCK_SCOPED_SYMBOL;
	  }
	});
	Object.defineProperty(exports, "NOT_LOCAL_BINDING", {
	  enumerable: true,
	  get: function get() {
	    return _constants.NOT_LOCAL_BINDING;
	  }
	});
	exports.is = is;
	exports.isType = isType;
	exports.validate = validate;
	exports.shallowEqual = shallowEqual;
	exports.appendToMemberExpression = appendToMemberExpression;
	exports.prependToMemberExpression = prependToMemberExpression;
	exports.ensureBlock = ensureBlock;
	exports.clone = clone;
	exports.cloneWithoutLoc = cloneWithoutLoc;
	exports.cloneDeep = cloneDeep;
	exports.buildMatchMemberExpression = buildMatchMemberExpression;
	exports.removeComments = removeComments;
	exports.inheritsComments = inheritsComments;
	exports.inheritTrailingComments = inheritTrailingComments;
	exports.inheritLeadingComments = inheritLeadingComments;
	exports.inheritInnerComments = inheritInnerComments;
	exports.inherits = inherits;
	exports.assertNode = assertNode;
	exports.isNode = isNode;
	exports.traverseFast = traverseFast;
	exports.removeProperties = removeProperties;
	exports.removePropertiesDeep = removePropertiesDeep;

	var _retrievers = __webpack_require__(517);

	Object.defineProperty(exports, "getBindingIdentifiers", {
	  enumerable: true,
	  get: function get() {
	    return _retrievers.getBindingIdentifiers;
	  }
	});
	Object.defineProperty(exports, "getOuterBindingIdentifiers", {
	  enumerable: true,
	  get: function get() {
	    return _retrievers.getOuterBindingIdentifiers;
	  }
	});

	var _validators = __webpack_require__(521);

	Object.defineProperty(exports, "isBinding", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isBinding;
	  }
	});
	Object.defineProperty(exports, "isReferenced", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isReferenced;
	  }
	});
	Object.defineProperty(exports, "isValidIdentifier", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isValidIdentifier;
	  }
	});
	Object.defineProperty(exports, "isLet", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isLet;
	  }
	});
	Object.defineProperty(exports, "isBlockScoped", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isBlockScoped;
	  }
	});
	Object.defineProperty(exports, "isVar", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isVar;
	  }
	});
	Object.defineProperty(exports, "isSpecifierDefault", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isSpecifierDefault;
	  }
	});
	Object.defineProperty(exports, "isScope", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isScope;
	  }
	});
	Object.defineProperty(exports, "isImmutable", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isImmutable;
	  }
	});
	Object.defineProperty(exports, "isNodesEquivalent", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isNodesEquivalent;
	  }
	});

	var _converters = __webpack_require__(534);

	Object.defineProperty(exports, "toComputedKey", {
	  enumerable: true,
	  get: function get() {
	    return _converters.toComputedKey;
	  }
	});
	Object.defineProperty(exports, "toSequenceExpression", {
	  enumerable: true,
	  get: function get() {
	    return _converters.toSequenceExpression;
	  }
	});
	Object.defineProperty(exports, "toKeyAlias", {
	  enumerable: true,
	  get: function get() {
	    return _converters.toKeyAlias;
	  }
	});
	Object.defineProperty(exports, "toIdentifier", {
	  enumerable: true,
	  get: function get() {
	    return _converters.toIdentifier;
	  }
	});
	Object.defineProperty(exports, "toBindingIdentifierName", {
	  enumerable: true,
	  get: function get() {
	    return _converters.toBindingIdentifierName;
	  }
	});
	Object.defineProperty(exports, "toStatement", {
	  enumerable: true,
	  get: function get() {
	    return _converters.toStatement;
	  }
	});
	Object.defineProperty(exports, "toExpression", {
	  enumerable: true,
	  get: function get() {
	    return _converters.toExpression;
	  }
	});
	Object.defineProperty(exports, "toBlock", {
	  enumerable: true,
	  get: function get() {
	    return _converters.toBlock;
	  }
	});
	Object.defineProperty(exports, "valueToNode", {
	  enumerable: true,
	  get: function get() {
	    return _converters.valueToNode;
	  }
	});

	var _flow = __webpack_require__(540);

	Object.defineProperty(exports, "createUnionTypeAnnotation", {
	  enumerable: true,
	  get: function get() {
	    return _flow.createUnionTypeAnnotation;
	  }
	});
	Object.defineProperty(exports, "removeTypeDuplicates", {
	  enumerable: true,
	  get: function get() {
	    return _flow.removeTypeDuplicates;
	  }
	});
	Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
	  enumerable: true,
	  get: function get() {
	    return _flow.createTypeAnnotationBasedOnTypeof;
	  }
	});

	var _toFastProperties = __webpack_require__(541);

	var _toFastProperties2 = _interopRequireDefault(_toFastProperties);

	var _clone = __webpack_require__(542);

	var _clone2 = _interopRequireDefault(_clone);

	var _uniq = __webpack_require__(561);

	var _uniq2 = _interopRequireDefault(_uniq);

	__webpack_require__(570);

	var _definitions = __webpack_require__(571);

	var _react2 = __webpack_require__(578);

	var _react = _interopRequireWildcard(_react2);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var t = exports;

	function registerType(type) {
	  var is = t["is" + type];
	  if (!is) {
	    is = t["is" + type] = function (node, opts) {
	      return t.is(type, node, opts);
	    };
	  }

	  t["assert" + type] = function (node, opts) {
	    opts = opts || {};
	    if (!is(node, opts)) {
	      throw new Error("Expected type " + (0, _stringify2.default)(type) + " with option " + (0, _stringify2.default)(opts));
	    }
	  };
	}

	exports.VISITOR_KEYS = _definitions.VISITOR_KEYS;
	exports.ALIAS_KEYS = _definitions.ALIAS_KEYS;
	exports.NODE_FIELDS = _definitions.NODE_FIELDS;
	exports.BUILDER_KEYS = _definitions.BUILDER_KEYS;
	exports.DEPRECATED_KEYS = _definitions.DEPRECATED_KEYS;
	exports.react = _react;


	for (var type in t.VISITOR_KEYS) {
	  registerType(type);
	}

	t.FLIPPED_ALIAS_KEYS = {};

	(0, _keys2.default)(t.ALIAS_KEYS).forEach(function (type) {
	  t.ALIAS_KEYS[type].forEach(function (alias) {
	    var types = t.FLIPPED_ALIAS_KEYS[alias] = t.FLIPPED_ALIAS_KEYS[alias] || [];
	    types.push(type);
	  });
	});

	(0, _keys2.default)(t.FLIPPED_ALIAS_KEYS).forEach(function (type) {
	  t[type.toUpperCase() + "_TYPES"] = t.FLIPPED_ALIAS_KEYS[type];
	  registerType(type);
	});

	var TYPES = exports.TYPES = (0, _keys2.default)(t.VISITOR_KEYS).concat((0, _keys2.default)(t.FLIPPED_ALIAS_KEYS)).concat((0, _keys2.default)(t.DEPRECATED_KEYS));

	function is(type, node, opts) {
	  if (!node) return false;

	  var matches = isType(node.type, type);
	  if (!matches) return false;

	  if (typeof opts === "undefined") {
	    return true;
	  } else {
	    return t.shallowEqual(node, opts);
	  }
	}

	function isType(nodeType, targetType) {
	  if (nodeType === targetType) return true;

	  if (t.ALIAS_KEYS[targetType]) return false;

	  var aliases = t.FLIPPED_ALIAS_KEYS[targetType];
	  if (aliases) {
	    if (aliases[0] === nodeType) return true;

	    for (var _iterator = aliases, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var alias = _ref;

	      if (nodeType === alias) return true;
	    }
	  }

	  return false;
	}

	(0, _keys2.default)(t.BUILDER_KEYS).forEach(function (type) {
	  var keys = t.BUILDER_KEYS[type];

	  function builder() {
	    if (arguments.length > keys.length) {
	      throw new Error("t." + type + ": Too many arguments passed. Received " + arguments.length + " but can receive " + ("no more than " + keys.length));
	    }

	    var node = {};
	    node.type = type;

	    var i = 0;

	    for (var _iterator2 = keys, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	      var _ref2;

	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }

	      var _key = _ref2;

	      var field = t.NODE_FIELDS[type][_key];

	      var arg = arguments[i++];
	      if (arg === undefined) arg = (0, _clone2.default)(field.default);

	      node[_key] = arg;
	    }

	    for (var key in node) {
	      validate(node, key, node[key]);
	    }

	    return node;
	  }

	  t[type] = builder;
	  t[type[0].toLowerCase() + type.slice(1)] = builder;
	});

	var _loop = function _loop(_type) {
	  var newType = t.DEPRECATED_KEYS[_type];

	  function proxy(fn) {
	    return function () {
	      console.trace("The node type " + _type + " has been renamed to " + newType);
	      return fn.apply(this, arguments);
	    };
	  }

	  t[_type] = t[_type[0].toLowerCase() + _type.slice(1)] = proxy(t[newType]);
	  t["is" + _type] = proxy(t["is" + newType]);
	  t["assert" + _type] = proxy(t["assert" + newType]);
	};

	for (var _type in t.DEPRECATED_KEYS) {
	  _loop(_type);
	}

	function validate(node, key, val) {
	  if (!node) return;

	  var fields = t.NODE_FIELDS[node.type];
	  if (!fields) return;

	  var field = fields[key];
	  if (!field || !field.validate) return;
	  if (field.optional && val == null) return;

	  field.validate(node, key, val);
	}

	function shallowEqual(actual, expected) {
	  var keys = (0, _keys2.default)(expected);

	  for (var _iterator3 = keys, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
	    var _ref3;

	    if (_isArray3) {
	      if (_i3 >= _iterator3.length) break;
	      _ref3 = _iterator3[_i3++];
	    } else {
	      _i3 = _iterator3.next();
	      if (_i3.done) break;
	      _ref3 = _i3.value;
	    }

	    var key = _ref3;

	    if (actual[key] !== expected[key]) {
	      return false;
	    }
	  }

	  return true;
	}

	function appendToMemberExpression(member, append, computed) {
	  member.object = t.memberExpression(member.object, member.property, member.computed);
	  member.property = append;
	  member.computed = !!computed;
	  return member;
	}

	function prependToMemberExpression(member, prepend) {
	  member.object = t.memberExpression(prepend, member.object);
	  return member;
	}

	function ensureBlock(node) {
	  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "body";

	  return node[key] = t.toBlock(node[key], node);
	}

	function clone(node) {
	  if (!node) return node;
	  var newNode = {};
	  for (var key in node) {
	    if (key[0] === "_") continue;
	    newNode[key] = node[key];
	  }
	  return newNode;
	}

	function cloneWithoutLoc(node) {
	  var newNode = clone(node);
	  delete newNode.loc;
	  return newNode;
	}

	function cloneDeep(node) {
	  if (!node) return node;
	  var newNode = {};

	  for (var key in node) {
	    if (key[0] === "_") continue;

	    var val = node[key];

	    if (val) {
	      if (val.type) {
	        val = t.cloneDeep(val);
	      } else if (Array.isArray(val)) {
	        val = val.map(t.cloneDeep);
	      }
	    }

	    newNode[key] = val;
	  }

	  return newNode;
	}

	function buildMatchMemberExpression(match, allowPartial) {
	  var parts = match.split(".");

	  return function (member) {
	    if (!t.isMemberExpression(member)) return false;

	    var search = [member];
	    var i = 0;

	    while (search.length) {
	      var node = search.shift();

	      if (allowPartial && i === parts.length) {
	        return true;
	      }

	      if (t.isIdentifier(node)) {
	        if (parts[i] !== node.name) return false;
	      } else if (t.isStringLiteral(node)) {
	        if (parts[i] !== node.value) return false;
	      } else if (t.isMemberExpression(node)) {
	        if (node.computed && !t.isStringLiteral(node.property)) {
	          return false;
	        } else {
	          search.push(node.object);
	          search.push(node.property);
	          continue;
	        }
	      } else {
	        return false;
	      }

	      if (++i > parts.length) {
	        return false;
	      }
	    }

	    return true;
	  };
	}

	function removeComments(node) {
	  for (var _iterator4 = t.COMMENT_KEYS, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
	    var _ref4;

	    if (_isArray4) {
	      if (_i4 >= _iterator4.length) break;
	      _ref4 = _iterator4[_i4++];
	    } else {
	      _i4 = _iterator4.next();
	      if (_i4.done) break;
	      _ref4 = _i4.value;
	    }

	    var key = _ref4;

	    delete node[key];
	  }
	  return node;
	}

	function inheritsComments(child, parent) {
	  inheritTrailingComments(child, parent);
	  inheritLeadingComments(child, parent);
	  inheritInnerComments(child, parent);
	  return child;
	}

	function inheritTrailingComments(child, parent) {
	  _inheritComments("trailingComments", child, parent);
	}

	function inheritLeadingComments(child, parent) {
	  _inheritComments("leadingComments", child, parent);
	}

	function inheritInnerComments(child, parent) {
	  _inheritComments("innerComments", child, parent);
	}

	function _inheritComments(key, child, parent) {
	  if (child && parent) {
	    child[key] = (0, _uniq2.default)([].concat(child[key], parent[key]).filter(Boolean));
	  }
	}

	function inherits(child, parent) {
	  if (!child || !parent) return child;

	  for (var _iterator5 = t.INHERIT_KEYS.optional, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);;) {
	    var _ref5;

	    if (_isArray5) {
	      if (_i5 >= _iterator5.length) break;
	      _ref5 = _iterator5[_i5++];
	    } else {
	      _i5 = _iterator5.next();
	      if (_i5.done) break;
	      _ref5 = _i5.value;
	    }

	    var _key2 = _ref5;

	    if (child[_key2] == null) {
	      child[_key2] = parent[_key2];
	    }
	  }

	  for (var key in parent) {
	    if (key[0] === "_") child[key] = parent[key];
	  }

	  for (var _iterator6 = t.INHERIT_KEYS.force, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);;) {
	    var _ref6;

	    if (_isArray6) {
	      if (_i6 >= _iterator6.length) break;
	      _ref6 = _iterator6[_i6++];
	    } else {
	      _i6 = _iterator6.next();
	      if (_i6.done) break;
	      _ref6 = _i6.value;
	    }

	    var _key3 = _ref6;

	    child[_key3] = parent[_key3];
	  }

	  t.inheritsComments(child, parent);

	  return child;
	}

	function assertNode(node) {
	  if (!isNode(node)) {
	    throw new TypeError("Not a valid node " + (node && node.type));
	  }
	}

	function isNode(node) {
	  return !!(node && _definitions.VISITOR_KEYS[node.type]);
	}

	(0, _toFastProperties2.default)(t);
	(0, _toFastProperties2.default)(t.VISITOR_KEYS);

	function traverseFast(node, enter, opts) {
	  if (!node) return;

	  var keys = t.VISITOR_KEYS[node.type];
	  if (!keys) return;

	  opts = opts || {};
	  enter(node, opts);

	  for (var _iterator7 = keys, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);;) {
	    var _ref7;

	    if (_isArray7) {
	      if (_i7 >= _iterator7.length) break;
	      _ref7 = _iterator7[_i7++];
	    } else {
	      _i7 = _iterator7.next();
	      if (_i7.done) break;
	      _ref7 = _i7.value;
	    }

	    var key = _ref7;

	    var subNode = node[key];

	    if (Array.isArray(subNode)) {
	      for (var _iterator8 = subNode, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);;) {
	        var _ref8;

	        if (_isArray8) {
	          if (_i8 >= _iterator8.length) break;
	          _ref8 = _iterator8[_i8++];
	        } else {
	          _i8 = _iterator8.next();
	          if (_i8.done) break;
	          _ref8 = _i8.value;
	        }

	        var _node = _ref8;

	        traverseFast(_node, enter, opts);
	      }
	    } else {
	      traverseFast(subNode, enter, opts);
	    }
	  }
	}

	var CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];

	var CLEAR_KEYS_PLUS_COMMENTS = t.COMMENT_KEYS.concat(["comments"]).concat(CLEAR_KEYS);

	function removeProperties(node, opts) {
	  opts = opts || {};
	  var map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;
	  for (var _iterator9 = map, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9);;) {
	    var _ref9;

	    if (_isArray9) {
	      if (_i9 >= _iterator9.length) break;
	      _ref9 = _iterator9[_i9++];
	    } else {
	      _i9 = _iterator9.next();
	      if (_i9.done) break;
	      _ref9 = _i9.value;
	    }

	    var _key4 = _ref9;

	    if (node[_key4] != null) node[_key4] = undefined;
	  }

	  for (var key in node) {
	    if (key[0] === "_" && node[key] != null) node[key] = undefined;
	  }

	  var syms = (0, _getOwnPropertySymbols2.default)(node);
	  for (var _iterator10 = syms, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10);;) {
	    var _ref10;

	    if (_isArray10) {
	      if (_i10 >= _iterator10.length) break;
	      _ref10 = _iterator10[_i10++];
	    } else {
	      _i10 = _iterator10.next();
	      if (_i10.done) break;
	      _ref10 = _i10.value;
	    }

	    var sym = _ref10;

	    node[sym] = null;
	  }
	}

	function removePropertiesDeep(tree, opts) {
	  traverseFast(tree, removeProperties, opts);
	  return tree;
	}

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(495), __esModule: true };

/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(496);
	module.exports = __webpack_require__(452).Object.getOwnPropertySymbols;

/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(451)
	  , has            = __webpack_require__(466)
	  , DESCRIPTORS    = __webpack_require__(460)
	  , $export        = __webpack_require__(450)
	  , redefine       = __webpack_require__(465)
	  , META           = __webpack_require__(497).KEY
	  , $fails         = __webpack_require__(461)
	  , shared         = __webpack_require__(477)
	  , setToStringTag = __webpack_require__(481)
	  , uid            = __webpack_require__(478)
	  , wks            = __webpack_require__(482)
	  , wksExt         = __webpack_require__(498)
	  , wksDefine      = __webpack_require__(499)
	  , keyOf          = __webpack_require__(500)
	  , enumKeys       = __webpack_require__(501)
	  , isArray        = __webpack_require__(504)
	  , anObject       = __webpack_require__(457)
	  , toIObject      = __webpack_require__(444)
	  , toPrimitive    = __webpack_require__(463)
	  , createDesc     = __webpack_require__(464)
	  , _create        = __webpack_require__(468)
	  , gOPNExt        = __webpack_require__(505)
	  , $GOPD          = __webpack_require__(507)
	  , $DP            = __webpack_require__(456)
	  , $keys          = __webpack_require__(470)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(506).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(503).f  = $propertyIsEnumerable;
	  __webpack_require__(502).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(449)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(455)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 497 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(478)('meta')
	  , isObject = __webpack_require__(458)
	  , has      = __webpack_require__(466)
	  , setDesc  = __webpack_require__(456).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(461)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 498 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(482);

/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(451)
	  , core           = __webpack_require__(452)
	  , LIBRARY        = __webpack_require__(449)
	  , wksExt         = __webpack_require__(498)
	  , defineProperty = __webpack_require__(456).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(470)
	  , toIObject = __webpack_require__(444);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(470)
	  , gOPS    = __webpack_require__(502)
	  , pIE     = __webpack_require__(503);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 502 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 503 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 504 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(446);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 505 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(444)
	  , gOPN      = __webpack_require__(506).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 506 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(471)
	  , hiddenKeys = __webpack_require__(479).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 507 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(503)
	  , createDesc     = __webpack_require__(464)
	  , toIObject      = __webpack_require__(444)
	  , toPrimitive    = __webpack_require__(463)
	  , has            = __webpack_require__(466)
	  , IE8_DOM_DEFINE = __webpack_require__(459)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(460) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 508 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(509), __esModule: true };

/***/ },
/* 509 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(510);
	module.exports = __webpack_require__(452).Object.keys;

/***/ },
/* 510 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(484)
	  , $keys    = __webpack_require__(470);

	__webpack_require__(511)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 511 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(450)
	  , core    = __webpack_require__(452)
	  , fails   = __webpack_require__(461);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 512 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(513), __esModule: true };

/***/ },
/* 513 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(452)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 514 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = undefined;

	var _for = __webpack_require__(515);

	var _for2 = _interopRequireDefault(_for);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var STATEMENT_OR_BLOCK_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
	var FLATTENABLE_KEYS = exports.FLATTENABLE_KEYS = ["body", "expressions"];
	var FOR_INIT_KEYS = exports.FOR_INIT_KEYS = ["left", "init"];
	var COMMENT_KEYS = exports.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];

	var LOGICAL_OPERATORS = exports.LOGICAL_OPERATORS = ["||", "&&"];
	var UPDATE_OPERATORS = exports.UPDATE_OPERATORS = ["++", "--"];

	var BOOLEAN_NUMBER_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
	var EQUALITY_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
	var COMPARISON_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = [].concat(EQUALITY_BINARY_OPERATORS, ["in", "instanceof"]);
	var BOOLEAN_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = [].concat(COMPARISON_BINARY_OPERATORS, BOOLEAN_NUMBER_BINARY_OPERATORS);
	var NUMBER_BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
	var BINARY_OPERATORS = exports.BINARY_OPERATORS = ["+"].concat(NUMBER_BINARY_OPERATORS, BOOLEAN_BINARY_OPERATORS);

	var BOOLEAN_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
	var NUMBER_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = ["+", "-", "++", "--", "~"];
	var STRING_UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = ["typeof"];
	var UNARY_OPERATORS = exports.UNARY_OPERATORS = ["void"].concat(BOOLEAN_UNARY_OPERATORS, NUMBER_UNARY_OPERATORS, STRING_UNARY_OPERATORS);

	var INHERIT_KEYS = exports.INHERIT_KEYS = {
	  optional: ["typeAnnotation", "typeParameters", "returnType"],
	  force: ["start", "loc", "end"]
	};

	var BLOCK_SCOPED_SYMBOL = exports.BLOCK_SCOPED_SYMBOL = (0, _for2.default)("var used to be block scoped");
	var NOT_LOCAL_BINDING = exports.NOT_LOCAL_BINDING = (0, _for2.default)("should not be considered a local binding");

/***/ },
/* 515 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(516), __esModule: true };

/***/ },
/* 516 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(496);
	module.exports = __webpack_require__(452).Symbol['for'];

/***/ },
/* 517 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _create = __webpack_require__(518);

	var _create2 = _interopRequireDefault(_create);

	exports.getBindingIdentifiers = getBindingIdentifiers;
	exports.getOuterBindingIdentifiers = getOuterBindingIdentifiers;

	var _index = __webpack_require__(493);

	var t = _interopRequireWildcard(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getBindingIdentifiers(node, duplicates, outerOnly) {
	  var search = [].concat(node);
	  var ids = (0, _create2.default)(null);

	  while (search.length) {
	    var id = search.shift();
	    if (!id) continue;

	    var keys = t.getBindingIdentifiers.keys[id.type];

	    if (t.isIdentifier(id)) {
	      if (duplicates) {
	        var _ids = ids[id.name] = ids[id.name] || [];
	        _ids.push(id);
	      } else {
	        ids[id.name] = id;
	      }
	      continue;
	    }

	    if (t.isExportDeclaration(id)) {
	      if (t.isDeclaration(id.declaration)) {
	        search.push(id.declaration);
	      }
	      continue;
	    }

	    if (outerOnly) {
	      if (t.isFunctionDeclaration(id)) {
	        search.push(id.id);
	        continue;
	      }

	      if (t.isFunctionExpression(id)) {
	        continue;
	      }
	    }

	    if (keys) {
	      for (var i = 0; i < keys.length; i++) {
	        var key = keys[i];
	        if (id[key]) {
	          search = search.concat(id[key]);
	        }
	      }
	    }
	  }

	  return ids;
	}

	getBindingIdentifiers.keys = {
	  DeclareClass: ["id"],
	  DeclareFunction: ["id"],
	  DeclareModule: ["id"],
	  DeclareVariable: ["id"],
	  InterfaceDeclaration: ["id"],
	  TypeAlias: ["id"],

	  CatchClause: ["param"],
	  LabeledStatement: ["label"],
	  UnaryExpression: ["argument"],
	  AssignmentExpression: ["left"],

	  ImportSpecifier: ["local"],
	  ImportNamespaceSpecifier: ["local"],
	  ImportDefaultSpecifier: ["local"],
	  ImportDeclaration: ["specifiers"],

	  ExportSpecifier: ["exported"],
	  ExportNamespaceSpecifier: ["exported"],
	  ExportDefaultSpecifier: ["exported"],

	  FunctionDeclaration: ["id", "params"],
	  FunctionExpression: ["id", "params"],

	  ClassDeclaration: ["id"],
	  ClassExpression: ["id"],

	  RestElement: ["argument"],
	  UpdateExpression: ["argument"],

	  RestProperty: ["argument"],
	  ObjectProperty: ["value"],

	  AssignmentPattern: ["left"],
	  ArrayPattern: ["elements"],
	  ObjectPattern: ["properties"],

	  VariableDeclaration: ["declarations"],
	  VariableDeclarator: ["id"]
	};

	function getOuterBindingIdentifiers(node, duplicates) {
	  return getBindingIdentifiers(node, duplicates, true);
	}

/***/ },
/* 518 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(519), __esModule: true };

/***/ },
/* 519 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(520);
	var $Object = __webpack_require__(452).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 520 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(450)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(468)});

/***/ },
/* 521 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _keys = __webpack_require__(508);

	var _keys2 = _interopRequireDefault(_keys);

	var _typeof2 = __webpack_require__(522);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.isBinding = isBinding;
	exports.isReferenced = isReferenced;
	exports.isValidIdentifier = isValidIdentifier;
	exports.isLet = isLet;
	exports.isBlockScoped = isBlockScoped;
	exports.isVar = isVar;
	exports.isSpecifierDefault = isSpecifierDefault;
	exports.isScope = isScope;
	exports.isImmutable = isImmutable;
	exports.isNodesEquivalent = isNodesEquivalent;

	var _retrievers = __webpack_require__(517);

	var _esutils = __webpack_require__(530);

	var _esutils2 = _interopRequireDefault(_esutils);

	var _index = __webpack_require__(493);

	var t = _interopRequireWildcard(_index);

	var _constants = __webpack_require__(514);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isBinding(node, parent) {
	  var keys = _retrievers.getBindingIdentifiers.keys[parent.type];
	  if (keys) {
	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      var val = parent[key];
	      if (Array.isArray(val)) {
	        if (val.indexOf(node) >= 0) return true;
	      } else {
	        if (val === node) return true;
	      }
	    }
	  }

	  return false;
	}

	function isReferenced(node, parent) {
	  switch (parent.type) {
	    case "BindExpression":
	      return parent.object === node || parent.callee === node;

	    case "MemberExpression":
	    case "JSXMemberExpression":
	      if (parent.property === node && parent.computed) {
	        return true;
	      } else if (parent.object === node) {
	        return true;
	      } else {
	        return false;
	      }

	    case "MetaProperty":
	      return false;

	    case "ObjectProperty":
	      if (parent.key === node) {
	        return parent.computed;
	      }

	    case "VariableDeclarator":
	      return parent.id !== node;

	    case "ArrowFunctionExpression":
	    case "FunctionDeclaration":
	    case "FunctionExpression":
	      for (var _iterator = parent.params, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	        var _ref;

	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }

	        var param = _ref;

	        if (param === node) return false;
	      }

	      return parent.id !== node;

	    case "ExportSpecifier":
	      if (parent.source) {
	        return false;
	      } else {
	        return parent.local === node;
	      }

	    case "ExportNamespaceSpecifier":
	    case "ExportDefaultSpecifier":
	      return false;

	    case "JSXAttribute":
	      return parent.name !== node;

	    case "ClassProperty":
	      if (parent.key === node) {
	        return parent.computed;
	      } else {
	        return parent.value === node;
	      }

	    case "ImportDefaultSpecifier":
	    case "ImportNamespaceSpecifier":
	    case "ImportSpecifier":
	      return false;

	    case "ClassDeclaration":
	    case "ClassExpression":
	      return parent.id !== node;

	    case "ClassMethod":
	    case "ObjectMethod":
	      return parent.key === node && parent.computed;

	    case "LabeledStatement":
	      return false;

	    case "CatchClause":
	      return parent.param !== node;

	    case "RestElement":
	      return false;

	    case "AssignmentExpression":
	      return parent.right === node;

	    case "AssignmentPattern":
	      return parent.right === node;

	    case "ObjectPattern":
	    case "ArrayPattern":
	      return false;
	  }

	  return true;
	}

	function isValidIdentifier(name) {
	  if (typeof name !== "string" || _esutils2.default.keyword.isReservedWordES6(name, true)) {
	    return false;
	  } else if (name === "await") {
	    return false;
	  } else {
	    return _esutils2.default.keyword.isIdentifierNameES6(name);
	  }
	}

	function isLet(node) {
	  return t.isVariableDeclaration(node) && (node.kind !== "var" || node[_constants.BLOCK_SCOPED_SYMBOL]);
	}

	function isBlockScoped(node) {
	  return t.isFunctionDeclaration(node) || t.isClassDeclaration(node) || t.isLet(node);
	}

	function isVar(node) {
	  return t.isVariableDeclaration(node, { kind: "var" }) && !node[_constants.BLOCK_SCOPED_SYMBOL];
	}

	function isSpecifierDefault(specifier) {
	  return t.isImportDefaultSpecifier(specifier) || t.isIdentifier(specifier.imported || specifier.exported, { name: "default" });
	}

	function isScope(node, parent) {
	  if (t.isBlockStatement(node) && t.isFunction(parent, { body: node })) {
	    return false;
	  }

	  return t.isScopable(node);
	}

	function isImmutable(node) {
	  if (t.isType(node.type, "Immutable")) return true;

	  if (t.isIdentifier(node)) {
	    if (node.name === "undefined") {
	      return true;
	    } else {
	      return false;
	    }
	  }

	  return false;
	}

	function isNodesEquivalent(a, b) {
	  if ((typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) !== "object" || (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) !== "object" || a == null || b == null) {
	    return a === b;
	  }

	  if (a.type !== b.type) {
	    return false;
	  }

	  var fields = (0, _keys2.default)(t.NODE_FIELDS[a.type] || a.type);

	  for (var _iterator2 = fields, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	    var _ref2;

	    if (_isArray2) {
	      if (_i2 >= _iterator2.length) break;
	      _ref2 = _iterator2[_i2++];
	    } else {
	      _i2 = _iterator2.next();
	      if (_i2.done) break;
	      _ref2 = _i2.value;
	    }

	    var field = _ref2;

	    if ((0, _typeof3.default)(a[field]) !== (0, _typeof3.default)(b[field])) {
	      return false;
	    }

	    if (Array.isArray(a[field])) {
	      if (!Array.isArray(b[field])) {
	        return false;
	      }
	      if (a[field].length !== b[field].length) {
	        return false;
	      }

	      for (var i = 0; i < a[field].length; i++) {
	        if (!isNodesEquivalent(a[field][i], b[field][i])) {
	          return false;
	        }
	      }
	      continue;
	    }

	    if (!isNodesEquivalent(a[field], b[field])) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 522 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(523);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(525);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 523 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(524), __esModule: true };

/***/ },
/* 524 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(485);
	__webpack_require__(439);
	module.exports = __webpack_require__(498).f('iterator');

/***/ },
/* 525 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(526), __esModule: true };

/***/ },
/* 526 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(496);
	__webpack_require__(527);
	__webpack_require__(528);
	__webpack_require__(529);
	module.exports = __webpack_require__(452).Symbol;

/***/ },
/* 527 */
/***/ function(module, exports) {

	

/***/ },
/* 528 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(499)('asyncIterator');

/***/ },
/* 529 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(499)('observable');

/***/ },
/* 530 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/


	(function () {
	    'use strict';

	    exports.ast = __webpack_require__(531);
	    exports.code = __webpack_require__(532);
	    exports.keyword = __webpack_require__(533);
	}());
	/* vim: set sw=4 ts=4 et tw=80 : */


/***/ },
/* 531 */
/***/ function(module, exports) {

	/*
	  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS'
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function () {
	    'use strict';

	    function isExpression(node) {
	        if (node == null) { return false; }
	        switch (node.type) {
	            case 'ArrayExpression':
	            case 'AssignmentExpression':
	            case 'BinaryExpression':
	            case 'CallExpression':
	            case 'ConditionalExpression':
	            case 'FunctionExpression':
	            case 'Identifier':
	            case 'Literal':
	            case 'LogicalExpression':
	            case 'MemberExpression':
	            case 'NewExpression':
	            case 'ObjectExpression':
	            case 'SequenceExpression':
	            case 'ThisExpression':
	            case 'UnaryExpression':
	            case 'UpdateExpression':
	                return true;
	        }
	        return false;
	    }

	    function isIterationStatement(node) {
	        if (node == null) { return false; }
	        switch (node.type) {
	            case 'DoWhileStatement':
	            case 'ForInStatement':
	            case 'ForStatement':
	            case 'WhileStatement':
	                return true;
	        }
	        return false;
	    }

	    function isStatement(node) {
	        if (node == null) { return false; }
	        switch (node.type) {
	            case 'BlockStatement':
	            case 'BreakStatement':
	            case 'ContinueStatement':
	            case 'DebuggerStatement':
	            case 'DoWhileStatement':
	            case 'EmptyStatement':
	            case 'ExpressionStatement':
	            case 'ForInStatement':
	            case 'ForStatement':
	            case 'IfStatement':
	            case 'LabeledStatement':
	            case 'ReturnStatement':
	            case 'SwitchStatement':
	            case 'ThrowStatement':
	            case 'TryStatement':
	            case 'VariableDeclaration':
	            case 'WhileStatement':
	            case 'WithStatement':
	                return true;
	        }
	        return false;
	    }

	    function isSourceElement(node) {
	      return isStatement(node) || node != null && node.type === 'FunctionDeclaration';
	    }

	    function trailingStatement(node) {
	        switch (node.type) {
	        case 'IfStatement':
	            if (node.alternate != null) {
	                return node.alternate;
	            }
	            return node.consequent;

	        case 'LabeledStatement':
	        case 'ForStatement':
	        case 'ForInStatement':
	        case 'WhileStatement':
	        case 'WithStatement':
	            return node.body;
	        }
	        return null;
	    }

	    function isProblematicIfStatement(node) {
	        var current;

	        if (node.type !== 'IfStatement') {
	            return false;
	        }
	        if (node.alternate == null) {
	            return false;
	        }
	        current = node.consequent;
	        do {
	            if (current.type === 'IfStatement') {
	                if (current.alternate == null)  {
	                    return true;
	                }
	            }
	            current = trailingStatement(current);
	        } while (current);

	        return false;
	    }

	    module.exports = {
	        isExpression: isExpression,
	        isStatement: isStatement,
	        isIterationStatement: isIterationStatement,
	        isSourceElement: isSourceElement,
	        isProblematicIfStatement: isProblematicIfStatement,

	        trailingStatement: trailingStatement
	    };
	}());
	/* vim: set sw=4 ts=4 et tw=80 : */


/***/ },
/* 532 */
/***/ function(module, exports) {

	/*
	  Copyright (C) 2013-2014 Yusuke Suzuki <utatane.tea@gmail.com>
	  Copyright (C) 2014 Ivan Nikulin <ifaaan@gmail.com>

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function () {
	    'use strict';

	    var ES6Regex, ES5Regex, NON_ASCII_WHITESPACES, IDENTIFIER_START, IDENTIFIER_PART, ch;

	    // See `tools/generate-identifier-regex.js`.
	    ES5Regex = {
	        // ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierStart:
	        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	        // ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierPart:
	        NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
	    };

	    ES6Regex = {
	        // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierStart:
	        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,
	        // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierPart:
	        NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
	    };

	    function isDecimalDigit(ch) {
	        return 0x30 <= ch && ch <= 0x39;  // 0..9
	    }

	    function isHexDigit(ch) {
	        return 0x30 <= ch && ch <= 0x39 ||  // 0..9
	            0x61 <= ch && ch <= 0x66 ||     // a..f
	            0x41 <= ch && ch <= 0x46;       // A..F
	    }

	    function isOctalDigit(ch) {
	        return ch >= 0x30 && ch <= 0x37;  // 0..7
	    }

	    // 7.2 White Space

	    NON_ASCII_WHITESPACES = [
	        0x1680, 0x180E,
	        0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A,
	        0x202F, 0x205F,
	        0x3000,
	        0xFEFF
	    ];

	    function isWhiteSpace(ch) {
	        return ch === 0x20 || ch === 0x09 || ch === 0x0B || ch === 0x0C || ch === 0xA0 ||
	            ch >= 0x1680 && NON_ASCII_WHITESPACES.indexOf(ch) >= 0;
	    }

	    // 7.3 Line Terminators

	    function isLineTerminator(ch) {
	        return ch === 0x0A || ch === 0x0D || ch === 0x2028 || ch === 0x2029;
	    }

	    // 7.6 Identifier Names and Identifiers

	    function fromCodePoint(cp) {
	        if (cp <= 0xFFFF) { return String.fromCharCode(cp); }
	        var cu1 = String.fromCharCode(Math.floor((cp - 0x10000) / 0x400) + 0xD800);
	        var cu2 = String.fromCharCode(((cp - 0x10000) % 0x400) + 0xDC00);
	        return cu1 + cu2;
	    }

	    IDENTIFIER_START = new Array(0x80);
	    for(ch = 0; ch < 0x80; ++ch) {
	        IDENTIFIER_START[ch] =
	            ch >= 0x61 && ch <= 0x7A ||  // a..z
	            ch >= 0x41 && ch <= 0x5A ||  // A..Z
	            ch === 0x24 || ch === 0x5F;  // $ (dollar) and _ (underscore)
	    }

	    IDENTIFIER_PART = new Array(0x80);
	    for(ch = 0; ch < 0x80; ++ch) {
	        IDENTIFIER_PART[ch] =
	            ch >= 0x61 && ch <= 0x7A ||  // a..z
	            ch >= 0x41 && ch <= 0x5A ||  // A..Z
	            ch >= 0x30 && ch <= 0x39 ||  // 0..9
	            ch === 0x24 || ch === 0x5F;  // $ (dollar) and _ (underscore)
	    }

	    function isIdentifierStartES5(ch) {
	        return ch < 0x80 ? IDENTIFIER_START[ch] : ES5Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
	    }

	    function isIdentifierPartES5(ch) {
	        return ch < 0x80 ? IDENTIFIER_PART[ch] : ES5Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
	    }

	    function isIdentifierStartES6(ch) {
	        return ch < 0x80 ? IDENTIFIER_START[ch] : ES6Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
	    }

	    function isIdentifierPartES6(ch) {
	        return ch < 0x80 ? IDENTIFIER_PART[ch] : ES6Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
	    }

	    module.exports = {
	        isDecimalDigit: isDecimalDigit,
	        isHexDigit: isHexDigit,
	        isOctalDigit: isOctalDigit,
	        isWhiteSpace: isWhiteSpace,
	        isLineTerminator: isLineTerminator,
	        isIdentifierStartES5: isIdentifierStartES5,
	        isIdentifierPartES5: isIdentifierPartES5,
	        isIdentifierStartES6: isIdentifierStartES6,
	        isIdentifierPartES6: isIdentifierPartES6
	    };
	}());
	/* vim: set sw=4 ts=4 et tw=80 : */


/***/ },
/* 533 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function () {
	    'use strict';

	    var code = __webpack_require__(532);

	    function isStrictModeReservedWordES6(id) {
	        switch (id) {
	        case 'implements':
	        case 'interface':
	        case 'package':
	        case 'private':
	        case 'protected':
	        case 'public':
	        case 'static':
	        case 'let':
	            return true;
	        default:
	            return false;
	        }
	    }

	    function isKeywordES5(id, strict) {
	        // yield should not be treated as keyword under non-strict mode.
	        if (!strict && id === 'yield') {
	            return false;
	        }
	        return isKeywordES6(id, strict);
	    }

	    function isKeywordES6(id, strict) {
	        if (strict && isStrictModeReservedWordES6(id)) {
	            return true;
	        }

	        switch (id.length) {
	        case 2:
	            return (id === 'if') || (id === 'in') || (id === 'do');
	        case 3:
	            return (id === 'var') || (id === 'for') || (id === 'new') || (id === 'try');
	        case 4:
	            return (id === 'this') || (id === 'else') || (id === 'case') ||
	                (id === 'void') || (id === 'with') || (id === 'enum');
	        case 5:
	            return (id === 'while') || (id === 'break') || (id === 'catch') ||
	                (id === 'throw') || (id === 'const') || (id === 'yield') ||
	                (id === 'class') || (id === 'super');
	        case 6:
	            return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
	                (id === 'switch') || (id === 'export') || (id === 'import');
	        case 7:
	            return (id === 'default') || (id === 'finally') || (id === 'extends');
	        case 8:
	            return (id === 'function') || (id === 'continue') || (id === 'debugger');
	        case 10:
	            return (id === 'instanceof');
	        default:
	            return false;
	        }
	    }

	    function isReservedWordES5(id, strict) {
	        return id === 'null' || id === 'true' || id === 'false' || isKeywordES5(id, strict);
	    }

	    function isReservedWordES6(id, strict) {
	        return id === 'null' || id === 'true' || id === 'false' || isKeywordES6(id, strict);
	    }

	    function isRestrictedWord(id) {
	        return id === 'eval' || id === 'arguments';
	    }

	    function isIdentifierNameES5(id) {
	        var i, iz, ch;

	        if (id.length === 0) { return false; }

	        ch = id.charCodeAt(0);
	        if (!code.isIdentifierStartES5(ch)) {
	            return false;
	        }

	        for (i = 1, iz = id.length; i < iz; ++i) {
	            ch = id.charCodeAt(i);
	            if (!code.isIdentifierPartES5(ch)) {
	                return false;
	            }
	        }
	        return true;
	    }

	    function decodeUtf16(lead, trail) {
	        return (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
	    }

	    function isIdentifierNameES6(id) {
	        var i, iz, ch, lowCh, check;

	        if (id.length === 0) { return false; }

	        check = code.isIdentifierStartES6;
	        for (i = 0, iz = id.length; i < iz; ++i) {
	            ch = id.charCodeAt(i);
	            if (0xD800 <= ch && ch <= 0xDBFF) {
	                ++i;
	                if (i >= iz) { return false; }
	                lowCh = id.charCodeAt(i);
	                if (!(0xDC00 <= lowCh && lowCh <= 0xDFFF)) {
	                    return false;
	                }
	                ch = decodeUtf16(ch, lowCh);
	            }
	            if (!check(ch)) {
	                return false;
	            }
	            check = code.isIdentifierPartES6;
	        }
	        return true;
	    }

	    function isIdentifierES5(id, strict) {
	        return isIdentifierNameES5(id) && !isReservedWordES5(id, strict);
	    }

	    function isIdentifierES6(id, strict) {
	        return isIdentifierNameES6(id) && !isReservedWordES6(id, strict);
	    }

	    module.exports = {
	        isKeywordES5: isKeywordES5,
	        isKeywordES6: isKeywordES6,
	        isReservedWordES5: isReservedWordES5,
	        isReservedWordES6: isReservedWordES6,
	        isRestrictedWord: isRestrictedWord,
	        isIdentifierNameES5: isIdentifierNameES5,
	        isIdentifierNameES6: isIdentifierNameES6,
	        isIdentifierES5: isIdentifierES5,
	        isIdentifierES6: isIdentifierES6
	    };
	}());
	/* vim: set sw=4 ts=4 et tw=80 : */


/***/ },
/* 534 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _maxSafeInteger = __webpack_require__(535);

	var _maxSafeInteger2 = _interopRequireDefault(_maxSafeInteger);

	var _stringify = __webpack_require__(512);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.toComputedKey = toComputedKey;
	exports.toSequenceExpression = toSequenceExpression;
	exports.toKeyAlias = toKeyAlias;
	exports.toIdentifier = toIdentifier;
	exports.toBindingIdentifierName = toBindingIdentifierName;
	exports.toStatement = toStatement;
	exports.toExpression = toExpression;
	exports.toBlock = toBlock;
	exports.valueToNode = valueToNode;

	var _isPlainObject = __webpack_require__(5);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _isRegExp = __webpack_require__(538);

	var _isRegExp2 = _interopRequireDefault(_isRegExp);

	var _index = __webpack_require__(493);

	var t = _interopRequireWildcard(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function toComputedKey(node) {
	  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node.key || node.property;

	  if (!node.computed) {
	    if (t.isIdentifier(key)) key = t.stringLiteral(key.name);
	  }
	  return key;
	}

	function toSequenceExpression(nodes, scope) {
	  if (!nodes || !nodes.length) return;

	  var declars = [];
	  var bailed = false;

	  var result = convert(nodes);
	  if (bailed) return;

	  for (var i = 0; i < declars.length; i++) {
	    scope.push(declars[i]);
	  }

	  return result;

	  function convert(nodes) {
	    var ensureLastUndefined = false;
	    var exprs = [];

	    for (var _iterator = nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var node = _ref;

	      if (t.isExpression(node)) {
	        exprs.push(node);
	      } else if (t.isExpressionStatement(node)) {
	        exprs.push(node.expression);
	      } else if (t.isVariableDeclaration(node)) {
	        if (node.kind !== "var") return bailed = true;

	        for (var _iterator2 = node.declarations, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	          var _ref2;

	          if (_isArray2) {
	            if (_i2 >= _iterator2.length) break;
	            _ref2 = _iterator2[_i2++];
	          } else {
	            _i2 = _iterator2.next();
	            if (_i2.done) break;
	            _ref2 = _i2.value;
	          }

	          var declar = _ref2;

	          var bindings = t.getBindingIdentifiers(declar);
	          for (var key in bindings) {
	            declars.push({
	              kind: node.kind,
	              id: bindings[key]
	            });
	          }

	          if (declar.init) {
	            exprs.push(t.assignmentExpression("=", declar.id, declar.init));
	          }
	        }

	        ensureLastUndefined = true;
	        continue;
	      } else if (t.isIfStatement(node)) {
	        var consequent = node.consequent ? convert([node.consequent]) : scope.buildUndefinedNode();
	        var alternate = node.alternate ? convert([node.alternate]) : scope.buildUndefinedNode();
	        if (!consequent || !alternate) return bailed = true;

	        exprs.push(t.conditionalExpression(node.test, consequent, alternate));
	      } else if (t.isBlockStatement(node)) {
	        exprs.push(convert(node.body));
	      } else if (t.isEmptyStatement(node)) {
	        ensureLastUndefined = true;
	        continue;
	      } else {
	        return bailed = true;
	      }

	      ensureLastUndefined = false;
	    }

	    if (ensureLastUndefined || exprs.length === 0) {
	      exprs.push(scope.buildUndefinedNode());
	    }

	    if (exprs.length === 1) {
	      return exprs[0];
	    } else {
	      return t.sequenceExpression(exprs);
	    }
	  }
	}

	function toKeyAlias(node) {
	  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node.key;

	  var alias = void 0;

	  if (node.kind === "method") {
	    return toKeyAlias.increment() + "";
	  } else if (t.isIdentifier(key)) {
	    alias = key.name;
	  } else if (t.isStringLiteral(key)) {
	    alias = (0, _stringify2.default)(key.value);
	  } else {
	    alias = (0, _stringify2.default)(t.removePropertiesDeep(t.cloneDeep(key)));
	  }

	  if (node.computed) {
	    alias = "[" + alias + "]";
	  }

	  if (node.static) {
	    alias = "static:" + alias;
	  }

	  return alias;
	}

	toKeyAlias.uid = 0;

	toKeyAlias.increment = function () {
	  if (toKeyAlias.uid >= _maxSafeInteger2.default) {
	    return toKeyAlias.uid = 0;
	  } else {
	    return toKeyAlias.uid++;
	  }
	};

	function toIdentifier(name) {
	  name = name + "";

	  name = name.replace(/[^a-zA-Z0-9$_]/g, "-");

	  name = name.replace(/^[-0-9]+/, "");

	  name = name.replace(/[-\s]+(.)?/g, function (match, c) {
	    return c ? c.toUpperCase() : "";
	  });

	  if (!t.isValidIdentifier(name)) {
	    name = "_" + name;
	  }

	  return name || "_";
	}

	function toBindingIdentifierName(name) {
	  name = toIdentifier(name);
	  if (name === "eval" || name === "arguments") name = "_" + name;
	  return name;
	}

	function toStatement(node, ignore) {
	  if (t.isStatement(node)) {
	    return node;
	  }

	  var mustHaveId = false;
	  var newType = void 0;

	  if (t.isClass(node)) {
	    mustHaveId = true;
	    newType = "ClassDeclaration";
	  } else if (t.isFunction(node)) {
	    mustHaveId = true;
	    newType = "FunctionDeclaration";
	  } else if (t.isAssignmentExpression(node)) {
	    return t.expressionStatement(node);
	  }

	  if (mustHaveId && !node.id) {
	    newType = false;
	  }

	  if (!newType) {
	    if (ignore) {
	      return false;
	    } else {
	      throw new Error("cannot turn " + node.type + " to a statement");
	    }
	  }

	  node.type = newType;

	  return node;
	}

	function toExpression(node) {
	  if (t.isExpressionStatement(node)) {
	    node = node.expression;
	  }

	  if (t.isExpression(node)) {
	    return node;
	  }

	  if (t.isClass(node)) {
	    node.type = "ClassExpression";
	  } else if (t.isFunction(node)) {
	    node.type = "FunctionExpression";
	  }

	  if (!t.isExpression(node)) {
	    throw new Error("cannot turn " + node.type + " to an expression");
	  }

	  return node;
	}

	function toBlock(node, parent) {
	  if (t.isBlockStatement(node)) {
	    return node;
	  }

	  if (t.isEmptyStatement(node)) {
	    node = [];
	  }

	  if (!Array.isArray(node)) {
	    if (!t.isStatement(node)) {
	      if (t.isFunction(parent)) {
	        node = t.returnStatement(node);
	      } else {
	        node = t.expressionStatement(node);
	      }
	    }

	    node = [node];
	  }

	  return t.blockStatement(node);
	}

	function valueToNode(value) {
	  if (value === undefined) {
	    return t.identifier("undefined");
	  }

	  if (value === true || value === false) {
	    return t.booleanLiteral(value);
	  }

	  if (value === null) {
	    return t.nullLiteral();
	  }

	  if (typeof value === "string") {
	    return t.stringLiteral(value);
	  }

	  if (typeof value === "number") {
	    return t.numericLiteral(value);
	  }

	  if ((0, _isRegExp2.default)(value)) {
	    var pattern = value.source;
	    var flags = value.toString().match(/\/([a-z]+|)$/)[1];
	    return t.regExpLiteral(pattern, flags);
	  }

	  if (Array.isArray(value)) {
	    return t.arrayExpression(value.map(t.valueToNode));
	  }

	  if ((0, _isPlainObject2.default)(value)) {
	    var props = [];
	    for (var key in value) {
	      var nodeKey = void 0;
	      if (t.isValidIdentifier(key)) {
	        nodeKey = t.identifier(key);
	      } else {
	        nodeKey = t.stringLiteral(key);
	      }
	      props.push(t.objectProperty(nodeKey, t.valueToNode(value[key])));
	    }
	    return t.objectExpression(props);
	  }

	  throw new Error("don't know how to turn this value into a node");
	}

/***/ },
/* 535 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(536), __esModule: true };

/***/ },
/* 536 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(537);
	module.exports = 0x1fffffffffffff;

/***/ },
/* 537 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(450);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 538 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsRegExp = __webpack_require__(539),
	    baseUnary = __webpack_require__(215),
	    nodeUtil = __webpack_require__(216);

	/* Node.js helper references. */
	var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

	/**
	 * Checks if `value` is classified as a `RegExp` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	 * @example
	 *
	 * _.isRegExp(/abc/);
	 * // => true
	 *
	 * _.isRegExp('/abc/');
	 * // => false
	 */
	var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

	module.exports = isRegExp;


/***/ },
/* 539 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(6),
	    isObjectLike = __webpack_require__(14);

	/** `Object#toString` result references. */
	var regexpTag = '[object RegExp]';

	/**
	 * The base implementation of `_.isRegExp` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	 */
	function baseIsRegExp(value) {
	  return isObjectLike(value) && baseGetTag(value) == regexpTag;
	}

	module.exports = baseIsRegExp;


/***/ },
/* 540 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.createUnionTypeAnnotation = createUnionTypeAnnotation;
	exports.removeTypeDuplicates = removeTypeDuplicates;
	exports.createTypeAnnotationBasedOnTypeof = createTypeAnnotationBasedOnTypeof;

	var _index = __webpack_require__(493);

	var t = _interopRequireWildcard(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function createUnionTypeAnnotation(types) {
	  var flattened = removeTypeDuplicates(types);

	  if (flattened.length === 1) {
	    return flattened[0];
	  } else {
	    return t.unionTypeAnnotation(flattened);
	  }
	}

	function removeTypeDuplicates(nodes) {
	  var generics = {};
	  var bases = {};

	  var typeGroups = [];

	  var types = [];

	  for (var i = 0; i < nodes.length; i++) {
	    var node = nodes[i];
	    if (!node) continue;

	    if (types.indexOf(node) >= 0) {
	      continue;
	    }

	    if (t.isAnyTypeAnnotation(node)) {
	      return [node];
	    }

	    if (t.isFlowBaseAnnotation(node)) {
	      bases[node.type] = node;
	      continue;
	    }

	    if (t.isUnionTypeAnnotation(node)) {
	      if (typeGroups.indexOf(node.types) < 0) {
	        nodes = nodes.concat(node.types);
	        typeGroups.push(node.types);
	      }
	      continue;
	    }

	    if (t.isGenericTypeAnnotation(node)) {
	      var name = node.id.name;

	      if (generics[name]) {
	        var existing = generics[name];
	        if (existing.typeParameters) {
	          if (node.typeParameters) {
	            existing.typeParameters.params = removeTypeDuplicates(existing.typeParameters.params.concat(node.typeParameters.params));
	          }
	        } else {
	          existing = node.typeParameters;
	        }
	      } else {
	        generics[name] = node;
	      }

	      continue;
	    }

	    types.push(node);
	  }

	  for (var type in bases) {
	    types.push(bases[type]);
	  }

	  for (var _name in generics) {
	    types.push(generics[_name]);
	  }

	  return types;
	}

	function createTypeAnnotationBasedOnTypeof(type) {
	  if (type === "string") {
	    return t.stringTypeAnnotation();
	  } else if (type === "number") {
	    return t.numberTypeAnnotation();
	  } else if (type === "undefined") {
	    return t.voidTypeAnnotation();
	  } else if (type === "boolean") {
	    return t.booleanTypeAnnotation();
	  } else if (type === "function") {
	    return t.genericTypeAnnotation(t.identifier("Function"));
	  } else if (type === "object") {
	    return t.genericTypeAnnotation(t.identifier("Object"));
	  } else if (type === "symbol") {
	    return t.genericTypeAnnotation(t.identifier("Symbol"));
	  } else {
	    throw new Error("Invalid typeof value");
	  }
	}

/***/ },
/* 541 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function toFastproperties(o) {
		function Sub() {}
		Sub.prototype = o;
		var receiver = new Sub(); // create an instance
		function ic() { return typeof receiver.foo; } // perform access
		ic(); 
		ic();
		return o;
		eval("o" + o); // ensure no dead code elimination
	}


/***/ },
/* 542 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(543);

	/** Used to compose bitmasks for cloning. */
	var CLONE_SYMBOLS_FLAG = 4;

	/**
	 * Creates a shallow clone of `value`.
	 *
	 * **Note:** This method is loosely based on the
	 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	 * and supports cloning arrays, array buffers, booleans, date objects, maps,
	 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	 * arrays. The own enumerable properties of `arguments` objects are cloned
	 * as plain objects. An empty object is returned for uncloneable values such
	 * as error objects, functions, DOM nodes, and WeakMaps.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to clone.
	 * @returns {*} Returns the cloned value.
	 * @see _.cloneDeep
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var shallow = _.clone(objects);
	 * console.log(shallow[0] === objects[0]);
	 * // => true
	 */
	function clone(value) {
	  return baseClone(value, CLONE_SYMBOLS_FLAG);
	}

	module.exports = clone;


/***/ },
/* 543 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(267),
	    arrayEach = __webpack_require__(544),
	    assignValue = __webpack_require__(114),
	    baseAssign = __webpack_require__(545),
	    baseAssignIn = __webpack_require__(546),
	    cloneBuffer = __webpack_require__(398),
	    copyArray = __webpack_require__(401),
	    copySymbols = __webpack_require__(547),
	    copySymbolsIn = __webpack_require__(548),
	    getAllKeys = __webpack_require__(285),
	    getAllKeysIn = __webpack_require__(550),
	    getTag = __webpack_require__(198),
	    initCloneArray = __webpack_require__(551),
	    initCloneByTag = __webpack_require__(552),
	    initCloneObject = __webpack_require__(402),
	    isArray = __webpack_require__(70),
	    isBuffer = __webpack_require__(210),
	    isObject = __webpack_require__(84),
	    keys = __webpack_require__(205);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? copySymbolsIn(value, baseAssignIn(result, value))
	          : copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  var keysFunc = isFull
	    ? (isFlat ? getAllKeysIn : getAllKeys)
	    : (isFlat ? keysIn : keys);

	  var props = isArr ? undefined : keysFunc(value);
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	module.exports = baseClone;


/***/ },
/* 544 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 545 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(406),
	    keys = __webpack_require__(205);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 546 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(406),
	    keysIn = __webpack_require__(407);

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && copyObject(source, keysIn(source), object);
	}

	module.exports = baseAssignIn;


/***/ },
/* 547 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(406),
	    getSymbols = __webpack_require__(288);

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	module.exports = copySymbols;


/***/ },
/* 548 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(406),
	    getSymbolsIn = __webpack_require__(549);

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return copyObject(source, getSymbolsIn(source), object);
	}

	module.exports = copySymbolsIn;


/***/ },
/* 549 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(287),
	    getPrototype = __webpack_require__(12),
	    getSymbols = __webpack_require__(288),
	    stubArray = __webpack_require__(290);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};

	module.exports = getSymbolsIn;


/***/ },
/* 550 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(286),
	    getSymbolsIn = __webpack_require__(549),
	    keysIn = __webpack_require__(407);

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}

	module.exports = getAllKeysIn;


/***/ },
/* 551 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	module.exports = initCloneArray;


/***/ },
/* 552 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(400),
	    cloneDataView = __webpack_require__(553),
	    cloneMap = __webpack_require__(554),
	    cloneRegExp = __webpack_require__(557),
	    cloneSet = __webpack_require__(558),
	    cloneSymbol = __webpack_require__(560),
	    cloneTypedArray = __webpack_require__(399);

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	module.exports = initCloneByTag;


/***/ },
/* 553 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(400);

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	module.exports = cloneDataView;


/***/ },
/* 554 */
/***/ function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(555),
	    arrayReduce = __webpack_require__(556),
	    mapToArray = __webpack_require__(203);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	module.exports = cloneMap;


/***/ },
/* 555 */
/***/ function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	module.exports = addMapEntry;


/***/ },
/* 556 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ },
/* 557 */
/***/ function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	module.exports = cloneRegExp;


/***/ },
/* 558 */
/***/ function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(559),
	    arrayReduce = __webpack_require__(556),
	    setToArray = __webpack_require__(283);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	module.exports = cloneSet;


/***/ },
/* 559 */
/***/ function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}

	module.exports = addSetEntry;


/***/ },
/* 560 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(7);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	module.exports = cloneSymbol;


/***/ },
/* 561 */
/***/ function(module, exports, __webpack_require__) {

	var baseUniq = __webpack_require__(562);

	/**
	 * Creates a duplicate-free version of an array, using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons, in which only the first occurrence of each element
	 * is kept. The order of result values is determined by the order they occur
	 * in the array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @returns {Array} Returns the new duplicate free array.
	 * @example
	 *
	 * _.uniq([2, 1, 2]);
	 * // => [2, 1]
	 */
	function uniq(array) {
	  return (array && array.length) ? baseUniq(array) : [];
	}

	module.exports = uniq;


/***/ },
/* 562 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(276),
	    arrayIncludes = __webpack_require__(563),
	    arrayIncludesWith = __webpack_require__(567),
	    cacheHas = __webpack_require__(280),
	    createSet = __webpack_require__(568),
	    setToArray = __webpack_require__(283);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseUniq;


/***/ },
/* 563 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(564);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ },
/* 564 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(263),
	    baseIsNaN = __webpack_require__(565),
	    strictIndexOf = __webpack_require__(566);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	module.exports = baseIndexOf;


/***/ },
/* 565 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;


/***/ },
/* 566 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = strictIndexOf;


/***/ },
/* 567 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ },
/* 568 */
/***/ function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(201),
	    noop = __webpack_require__(569),
	    setToArray = __webpack_require__(283);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Creates a set object of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	  return new Set(values);
	};

	module.exports = createSet;


/***/ },
/* 569 */
/***/ function(module, exports) {

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ },
/* 570 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(571);

	__webpack_require__(572);

	__webpack_require__(573);

	__webpack_require__(574);

	__webpack_require__(575);

	__webpack_require__(576);

	__webpack_require__(577);

/***/ },
/* 571 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = undefined;

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _stringify = __webpack_require__(512);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _typeof2 = __webpack_require__(522);

	var _typeof3 = _interopRequireDefault(_typeof2);

	exports.assertEach = assertEach;
	exports.assertOneOf = assertOneOf;
	exports.assertNodeType = assertNodeType;
	exports.assertNodeOrValueType = assertNodeOrValueType;
	exports.assertValueType = assertValueType;
	exports.chain = chain;
	exports.default = defineType;

	var _index = __webpack_require__(493);

	var t = _interopRequireWildcard(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VISITOR_KEYS = exports.VISITOR_KEYS = {};
	var ALIAS_KEYS = exports.ALIAS_KEYS = {};
	var NODE_FIELDS = exports.NODE_FIELDS = {};
	var BUILDER_KEYS = exports.BUILDER_KEYS = {};
	var DEPRECATED_KEYS = exports.DEPRECATED_KEYS = {};

	function getType(val) {
	  if (Array.isArray(val)) {
	    return "array";
	  } else if (val === null) {
	    return "null";
	  } else if (val === undefined) {
	    return "undefined";
	  } else {
	    return typeof val === "undefined" ? "undefined" : (0, _typeof3.default)(val);
	  }
	}

	function assertEach(callback) {
	  function validator(node, key, val) {
	    if (!Array.isArray(val)) return;

	    for (var i = 0; i < val.length; i++) {
	      callback(node, key + "[" + i + "]", val[i]);
	    }
	  }
	  validator.each = callback;
	  return validator;
	}

	function assertOneOf() {
	  for (var _len = arguments.length, vals = Array(_len), _key = 0; _key < _len; _key++) {
	    vals[_key] = arguments[_key];
	  }

	  function validate(node, key, val) {
	    if (vals.indexOf(val) < 0) {
	      throw new TypeError("Property " + key + " expected value to be one of " + (0, _stringify2.default)(vals) + " but got " + (0, _stringify2.default)(val));
	    }
	  }

	  validate.oneOf = vals;

	  return validate;
	}

	function assertNodeType() {
	  for (var _len2 = arguments.length, types = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    types[_key2] = arguments[_key2];
	  }

	  function validate(node, key, val) {
	    var valid = false;

	    for (var _iterator = types, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var type = _ref;

	      if (t.is(type, val)) {
	        valid = true;
	        break;
	      }
	    }

	    if (!valid) {
	      throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + (0, _stringify2.default)(types) + " " + ("but instead got " + (0, _stringify2.default)(val && val.type)));
	    }
	  }

	  validate.oneOfNodeTypes = types;

	  return validate;
	}

	function assertNodeOrValueType() {
	  for (var _len3 = arguments.length, types = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    types[_key3] = arguments[_key3];
	  }

	  function validate(node, key, val) {
	    var valid = false;

	    for (var _iterator2 = types, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	      var _ref2;

	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }

	      var type = _ref2;

	      if (getType(val) === type || t.is(type, val)) {
	        valid = true;
	        break;
	      }
	    }

	    if (!valid) {
	      throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + (0, _stringify2.default)(types) + " " + ("but instead got " + (0, _stringify2.default)(val && val.type)));
	    }
	  }

	  validate.oneOfNodeOrValueTypes = types;

	  return validate;
	}

	function assertValueType(type) {
	  function validate(node, key, val) {
	    var valid = getType(val) === type;

	    if (!valid) {
	      throw new TypeError("Property " + key + " expected type of " + type + " but got " + getType(val));
	    }
	  }

	  validate.type = type;

	  return validate;
	}

	function chain() {
	  for (var _len4 = arguments.length, fns = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	    fns[_key4] = arguments[_key4];
	  }

	  function validate() {
	    for (var _iterator3 = fns, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
	      var _ref3;

	      if (_isArray3) {
	        if (_i3 >= _iterator3.length) break;
	        _ref3 = _iterator3[_i3++];
	      } else {
	        _i3 = _iterator3.next();
	        if (_i3.done) break;
	        _ref3 = _i3.value;
	      }

	      var fn = _ref3;

	      fn.apply(undefined, arguments);
	    }
	  }
	  validate.chainOf = fns;
	  return validate;
	}

	function defineType(type) {
	  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var inherits = opts.inherits && store[opts.inherits] || {};

	  opts.fields = opts.fields || inherits.fields || {};
	  opts.visitor = opts.visitor || inherits.visitor || [];
	  opts.aliases = opts.aliases || inherits.aliases || [];
	  opts.builder = opts.builder || inherits.builder || opts.visitor || [];

	  if (opts.deprecatedAlias) {
	    DEPRECATED_KEYS[opts.deprecatedAlias] = type;
	  }

	  for (var _iterator4 = opts.visitor.concat(opts.builder), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
	    var _ref4;

	    if (_isArray4) {
	      if (_i4 >= _iterator4.length) break;
	      _ref4 = _iterator4[_i4++];
	    } else {
	      _i4 = _iterator4.next();
	      if (_i4.done) break;
	      _ref4 = _i4.value;
	    }

	    var _key5 = _ref4;

	    opts.fields[_key5] = opts.fields[_key5] || {};
	  }

	  for (var key in opts.fields) {
	    var field = opts.fields[key];

	    if (opts.builder.indexOf(key) === -1) {
	      field.optional = true;
	    }
	    if (field.default === undefined) {
	      field.default = null;
	    } else if (!field.validate) {
	      field.validate = assertValueType(getType(field.default));
	    }
	  }

	  VISITOR_KEYS[type] = opts.visitor;
	  BUILDER_KEYS[type] = opts.builder;
	  NODE_FIELDS[type] = opts.fields;
	  ALIAS_KEYS[type] = opts.aliases;

	  store[type] = opts;
	}

	var store = {};

/***/ },
/* 572 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(493);

	var t = _interopRequireWildcard(_index);

	var _constants = __webpack_require__(514);

	var _index2 = __webpack_require__(571);

	var _index3 = _interopRequireDefault(_index2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	(0, _index3.default)("ArrayExpression", {
	  fields: {
	    elements: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
	      default: []
	    }
	  },
	  visitor: ["elements"],
	  aliases: ["Expression"]
	});

	(0, _index3.default)("AssignmentExpression", {
	  fields: {
	    operator: {
	      validate: (0, _index2.assertValueType)("string")
	    },
	    left: {
	      validate: (0, _index2.assertNodeType)("LVal")
	    },
	    right: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    }
	  },
	  builder: ["operator", "left", "right"],
	  visitor: ["left", "right"],
	  aliases: ["Expression"]
	});

	(0, _index3.default)("BinaryExpression", {
	  builder: ["operator", "left", "right"],
	  fields: {
	    operator: {
	      validate: _index2.assertOneOf.apply(undefined, _constants.BINARY_OPERATORS)
	    },
	    left: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    right: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    }
	  },
	  visitor: ["left", "right"],
	  aliases: ["Binary", "Expression"]
	});

	(0, _index3.default)("Directive", {
	  visitor: ["value"],
	  fields: {
	    value: {
	      validate: (0, _index2.assertNodeType)("DirectiveLiteral")
	    }
	  }
	});

	(0, _index3.default)("DirectiveLiteral", {
	  builder: ["value"],
	  fields: {
	    value: {
	      validate: (0, _index2.assertValueType)("string")
	    }
	  }
	});

	(0, _index3.default)("BlockStatement", {
	  builder: ["body", "directives"],
	  visitor: ["directives", "body"],
	  fields: {
	    directives: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Directive"))),
	      default: []
	    },
	    body: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Statement")))
	    }
	  },
	  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
	});

	(0, _index3.default)("BreakStatement", {
	  visitor: ["label"],
	  fields: {
	    label: {
	      validate: (0, _index2.assertNodeType)("Identifier"),
	      optional: true
	    }
	  },
	  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
	});

	(0, _index3.default)("CallExpression", {
	  visitor: ["callee", "arguments"],
	  fields: {
	    callee: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    arguments: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Expression", "SpreadElement")))
	    }
	  },
	  aliases: ["Expression"]
	});

	(0, _index3.default)("CatchClause", {
	  visitor: ["param", "body"],
	  fields: {
	    param: {
	      validate: (0, _index2.assertNodeType)("Identifier")
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("BlockStatement")
	    }
	  },
	  aliases: ["Scopable"]
	});

	(0, _index3.default)("ConditionalExpression", {
	  visitor: ["test", "consequent", "alternate"],
	  fields: {
	    test: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    consequent: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    alternate: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    }
	  },
	  aliases: ["Expression", "Conditional"]
	});

	(0, _index3.default)("ContinueStatement", {
	  visitor: ["label"],
	  fields: {
	    label: {
	      validate: (0, _index2.assertNodeType)("Identifier"),
	      optional: true
	    }
	  },
	  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
	});

	(0, _index3.default)("DebuggerStatement", {
	  aliases: ["Statement"]
	});

	(0, _index3.default)("DoWhileStatement", {
	  visitor: ["test", "body"],
	  fields: {
	    test: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("Statement")
	    }
	  },
	  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
	});

	(0, _index3.default)("EmptyStatement", {
	  aliases: ["Statement"]
	});

	(0, _index3.default)("ExpressionStatement", {
	  visitor: ["expression"],
	  fields: {
	    expression: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    }
	  },
	  aliases: ["Statement", "ExpressionWrapper"]
	});

	(0, _index3.default)("File", {
	  builder: ["program", "comments", "tokens"],
	  visitor: ["program"],
	  fields: {
	    program: {
	      validate: (0, _index2.assertNodeType)("Program")
	    }
	  }
	});

	(0, _index3.default)("ForInStatement", {
	  visitor: ["left", "right", "body"],
	  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
	  fields: {
	    left: {
	      validate: (0, _index2.assertNodeType)("VariableDeclaration", "LVal")
	    },
	    right: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("Statement")
	    }
	  }
	});

	(0, _index3.default)("ForStatement", {
	  visitor: ["init", "test", "update", "body"],
	  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
	  fields: {
	    init: {
	      validate: (0, _index2.assertNodeType)("VariableDeclaration", "Expression"),
	      optional: true
	    },
	    test: {
	      validate: (0, _index2.assertNodeType)("Expression"),
	      optional: true
	    },
	    update: {
	      validate: (0, _index2.assertNodeType)("Expression"),
	      optional: true
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("Statement")
	    }
	  }
	});

	(0, _index3.default)("FunctionDeclaration", {
	  builder: ["id", "params", "body", "generator", "async"],
	  visitor: ["id", "params", "body", "returnType", "typeParameters"],
	  fields: {
	    id: {
	      validate: (0, _index2.assertNodeType)("Identifier")
	    },
	    params: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("LVal")))
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("BlockStatement")
	    },
	    generator: {
	      default: false,
	      validate: (0, _index2.assertValueType)("boolean")
	    },
	    async: {
	      default: false,
	      validate: (0, _index2.assertValueType)("boolean")
	    }
	  },
	  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"]
	});

	(0, _index3.default)("FunctionExpression", {
	  inherits: "FunctionDeclaration",
	  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
	  fields: {
	    id: {
	      validate: (0, _index2.assertNodeType)("Identifier"),
	      optional: true
	    },
	    params: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("LVal")))
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("BlockStatement")
	    },
	    generator: {
	      default: false,
	      validate: (0, _index2.assertValueType)("boolean")
	    },
	    async: {
	      default: false,
	      validate: (0, _index2.assertValueType)("boolean")
	    }
	  }
	});

	(0, _index3.default)("Identifier", {
	  builder: ["name"],
	  visitor: ["typeAnnotation"],
	  aliases: ["Expression", "LVal"],
	  fields: {
	    name: {
	      validate: function validate(node, key, val) {
	        if (!t.isValidIdentifier(val)) {}
	      }
	    },
	    decorators: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator")))
	    }
	  }
	});

	(0, _index3.default)("IfStatement", {
	  visitor: ["test", "consequent", "alternate"],
	  aliases: ["Statement", "Conditional"],
	  fields: {
	    test: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    consequent: {
	      validate: (0, _index2.assertNodeType)("Statement")
	    },
	    alternate: {
	      optional: true,
	      validate: (0, _index2.assertNodeType)("Statement")
	    }
	  }
	});

	(0, _index3.default)("LabeledStatement", {
	  visitor: ["label", "body"],
	  aliases: ["Statement"],
	  fields: {
	    label: {
	      validate: (0, _index2.assertNodeType)("Identifier")
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("Statement")
	    }
	  }
	});

	(0, _index3.default)("StringLiteral", {
	  builder: ["value"],
	  fields: {
	    value: {
	      validate: (0, _index2.assertValueType)("string")
	    }
	  },
	  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
	});

	(0, _index3.default)("NumericLiteral", {
	  builder: ["value"],
	  deprecatedAlias: "NumberLiteral",
	  fields: {
	    value: {
	      validate: (0, _index2.assertValueType)("number")
	    }
	  },
	  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
	});

	(0, _index3.default)("NullLiteral", {
	  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
	});

	(0, _index3.default)("BooleanLiteral", {
	  builder: ["value"],
	  fields: {
	    value: {
	      validate: (0, _index2.assertValueType)("boolean")
	    }
	  },
	  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
	});

	(0, _index3.default)("RegExpLiteral", {
	  builder: ["pattern", "flags"],
	  deprecatedAlias: "RegexLiteral",
	  aliases: ["Expression", "Literal"],
	  fields: {
	    pattern: {
	      validate: (0, _index2.assertValueType)("string")
	    },
	    flags: {
	      validate: (0, _index2.assertValueType)("string"),
	      default: ""
	    }
	  }
	});

	(0, _index3.default)("LogicalExpression", {
	  builder: ["operator", "left", "right"],
	  visitor: ["left", "right"],
	  aliases: ["Binary", "Expression"],
	  fields: {
	    operator: {
	      validate: _index2.assertOneOf.apply(undefined, _constants.LOGICAL_OPERATORS)
	    },
	    left: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    right: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    }
	  }
	});

	(0, _index3.default)("MemberExpression", {
	  builder: ["object", "property", "computed"],
	  visitor: ["object", "property"],
	  aliases: ["Expression", "LVal"],
	  fields: {
	    object: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    property: {
	      validate: function validate(node, key, val) {
	        var expectedType = node.computed ? "Expression" : "Identifier";
	        (0, _index2.assertNodeType)(expectedType)(node, key, val);
	      }
	    },
	    computed: {
	      default: false
	    }
	  }
	});

	(0, _index3.default)("NewExpression", {
	  visitor: ["callee", "arguments"],
	  aliases: ["Expression"],
	  fields: {
	    callee: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    arguments: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Expression", "SpreadElement")))
	    }
	  }
	});

	(0, _index3.default)("Program", {
	  visitor: ["directives", "body"],
	  builder: ["body", "directives"],
	  fields: {
	    directives: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Directive"))),
	      default: []
	    },
	    body: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Statement")))
	    }
	  },
	  aliases: ["Scopable", "BlockParent", "Block", "FunctionParent"]
	});

	(0, _index3.default)("ObjectExpression", {
	  visitor: ["properties"],
	  aliases: ["Expression"],
	  fields: {
	    properties: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadProperty")))
	    }
	  }
	});

	(0, _index3.default)("ObjectMethod", {
	  builder: ["kind", "key", "params", "body", "computed"],
	  fields: {
	    kind: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("string"), (0, _index2.assertOneOf)("method", "get", "set")),
	      default: "method"
	    },
	    computed: {
	      validate: (0, _index2.assertValueType)("boolean"),
	      default: false
	    },
	    key: {
	      validate: function validate(node, key, val) {
	        var expectedTypes = node.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
	        _index2.assertNodeType.apply(undefined, expectedTypes)(node, key, val);
	      }
	    },
	    decorators: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator")))
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("BlockStatement")
	    },
	    generator: {
	      default: false,
	      validate: (0, _index2.assertValueType)("boolean")
	    },
	    async: {
	      default: false,
	      validate: (0, _index2.assertValueType)("boolean")
	    }
	  },
	  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
	  aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
	});

	(0, _index3.default)("ObjectProperty", {
	  builder: ["key", "value", "computed", "shorthand", "decorators"],
	  fields: {
	    computed: {
	      validate: (0, _index2.assertValueType)("boolean"),
	      default: false
	    },
	    key: {
	      validate: function validate(node, key, val) {
	        var expectedTypes = node.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
	        _index2.assertNodeType.apply(undefined, expectedTypes)(node, key, val);
	      }
	    },
	    value: {
	      validate: (0, _index2.assertNodeType)("Expression", "Pattern", "RestElement")
	    },
	    shorthand: {
	      validate: (0, _index2.assertValueType)("boolean"),
	      default: false
	    },
	    decorators: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator"))),
	      optional: true
	    }
	  },
	  visitor: ["key", "value", "decorators"],
	  aliases: ["UserWhitespacable", "Property", "ObjectMember"]
	});

	(0, _index3.default)("RestElement", {
	  visitor: ["argument", "typeAnnotation"],
	  aliases: ["LVal"],
	  fields: {
	    argument: {
	      validate: (0, _index2.assertNodeType)("LVal")
	    },
	    decorators: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator")))
	    }
	  }
	});

	(0, _index3.default)("ReturnStatement", {
	  visitor: ["argument"],
	  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
	  fields: {
	    argument: {
	      validate: (0, _index2.assertNodeType)("Expression"),
	      optional: true
	    }
	  }
	});

	(0, _index3.default)("SequenceExpression", {
	  visitor: ["expressions"],
	  fields: {
	    expressions: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Expression")))
	    }
	  },
	  aliases: ["Expression"]
	});

	(0, _index3.default)("SwitchCase", {
	  visitor: ["test", "consequent"],
	  fields: {
	    test: {
	      validate: (0, _index2.assertNodeType)("Expression"),
	      optional: true
	    },
	    consequent: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Statement")))
	    }
	  }
	});

	(0, _index3.default)("SwitchStatement", {
	  visitor: ["discriminant", "cases"],
	  aliases: ["Statement", "BlockParent", "Scopable"],
	  fields: {
	    discriminant: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    cases: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("SwitchCase")))
	    }
	  }
	});

	(0, _index3.default)("ThisExpression", {
	  aliases: ["Expression"]
	});

	(0, _index3.default)("ThrowStatement", {
	  visitor: ["argument"],
	  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
	  fields: {
	    argument: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    }
	  }
	});

	(0, _index3.default)("TryStatement", {
	  visitor: ["block", "handler", "finalizer"],
	  aliases: ["Statement"],
	  fields: {
	    body: {
	      validate: (0, _index2.assertNodeType)("BlockStatement")
	    },
	    handler: {
	      optional: true,
	      handler: (0, _index2.assertNodeType)("BlockStatement")
	    },
	    finalizer: {
	      optional: true,
	      validate: (0, _index2.assertNodeType)("BlockStatement")
	    }
	  }
	});

	(0, _index3.default)("UnaryExpression", {
	  builder: ["operator", "argument", "prefix"],
	  fields: {
	    prefix: {
	      default: true
	    },
	    argument: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    operator: {
	      validate: _index2.assertOneOf.apply(undefined, _constants.UNARY_OPERATORS)
	    }
	  },
	  visitor: ["argument"],
	  aliases: ["UnaryLike", "Expression"]
	});

	(0, _index3.default)("UpdateExpression", {
	  builder: ["operator", "argument", "prefix"],
	  fields: {
	    prefix: {
	      default: false
	    },
	    argument: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    operator: {
	      validate: _index2.assertOneOf.apply(undefined, _constants.UPDATE_OPERATORS)
	    }
	  },
	  visitor: ["argument"],
	  aliases: ["Expression"]
	});

	(0, _index3.default)("VariableDeclaration", {
	  builder: ["kind", "declarations"],
	  visitor: ["declarations"],
	  aliases: ["Statement", "Declaration"],
	  fields: {
	    kind: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("string"), (0, _index2.assertOneOf)("var", "let", "const"))
	    },
	    declarations: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("VariableDeclarator")))
	    }
	  }
	});

	(0, _index3.default)("VariableDeclarator", {
	  visitor: ["id", "init"],
	  fields: {
	    id: {
	      validate: (0, _index2.assertNodeType)("LVal")
	    },
	    init: {
	      optional: true,
	      validate: (0, _index2.assertNodeType)("Expression")
	    }
	  }
	});

	(0, _index3.default)("WhileStatement", {
	  visitor: ["test", "body"],
	  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
	  fields: {
	    test: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("BlockStatement", "Statement")
	    }
	  }
	});

	(0, _index3.default)("WithStatement", {
	  visitor: ["object", "body"],
	  aliases: ["Statement"],
	  fields: {
	    object: {
	      object: (0, _index2.assertNodeType)("Expression")
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("BlockStatement", "Statement")
	    }
	  }
	});

/***/ },
/* 573 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(571);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _index2.default)("AssignmentPattern", {
	  visitor: ["left", "right"],
	  aliases: ["Pattern", "LVal"],
	  fields: {
	    left: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    },
	    right: {
	      validate: (0, _index.assertNodeType)("Expression")
	    },
	    decorators: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
	    }
	  }
	});

	(0, _index2.default)("ArrayPattern", {
	  visitor: ["elements", "typeAnnotation"],
	  aliases: ["Pattern", "LVal"],
	  fields: {
	    elements: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Identifier", "Pattern", "RestElement")))
	    },
	    decorators: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
	    }
	  }
	});

	(0, _index2.default)("ArrowFunctionExpression", {
	  builder: ["params", "body", "async"],
	  visitor: ["params", "body", "returnType", "typeParameters"],
	  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
	  fields: {
	    params: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("LVal")))
	    },
	    body: {
	      validate: (0, _index.assertNodeType)("BlockStatement", "Expression")
	    },
	    async: {
	      validate: (0, _index.assertValueType)("boolean"),
	      default: false
	    }
	  }
	});

	(0, _index2.default)("ClassBody", {
	  visitor: ["body"],
	  fields: {
	    body: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("ClassMethod", "ClassProperty")))
	    }
	  }
	});

	(0, _index2.default)("ClassDeclaration", {
	  builder: ["id", "superClass", "body", "decorators"],
	  visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
	  aliases: ["Scopable", "Class", "Statement", "Declaration", "Pureish"],
	  fields: {
	    id: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    },
	    body: {
	      validate: (0, _index.assertNodeType)("ClassBody")
	    },
	    superClass: {
	      optional: true,
	      validate: (0, _index.assertNodeType)("Expression")
	    },
	    decorators: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
	    }
	  }
	});

	(0, _index2.default)("ClassExpression", {
	  inherits: "ClassDeclaration",
	  aliases: ["Scopable", "Class", "Expression", "Pureish"],
	  fields: {
	    id: {
	      optional: true,
	      validate: (0, _index.assertNodeType)("Identifier")
	    },
	    body: {
	      validate: (0, _index.assertNodeType)("ClassBody")
	    },
	    superClass: {
	      optional: true,
	      validate: (0, _index.assertNodeType)("Expression")
	    },
	    decorators: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
	    }
	  }
	});

	(0, _index2.default)("ExportAllDeclaration", {
	  visitor: ["source"],
	  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
	  fields: {
	    source: {
	      validate: (0, _index.assertNodeType)("StringLiteral")
	    }
	  }
	});

	(0, _index2.default)("ExportDefaultDeclaration", {
	  visitor: ["declaration"],
	  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
	  fields: {
	    declaration: {
	      validate: (0, _index.assertNodeType)("FunctionDeclaration", "ClassDeclaration", "Expression")
	    }
	  }
	});

	(0, _index2.default)("ExportNamedDeclaration", {
	  visitor: ["declaration", "specifiers", "source"],
	  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
	  fields: {
	    declaration: {
	      validate: (0, _index.assertNodeType)("Declaration"),
	      optional: true
	    },
	    specifiers: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("ExportSpecifier")))
	    },
	    source: {
	      validate: (0, _index.assertNodeType)("StringLiteral"),
	      optional: true
	    }
	  }
	});

	(0, _index2.default)("ExportSpecifier", {
	  visitor: ["local", "exported"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    local: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    },
	    exported: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    }
	  }
	});

	(0, _index2.default)("ForOfStatement", {
	  visitor: ["left", "right", "body"],
	  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
	  fields: {
	    left: {
	      validate: (0, _index.assertNodeType)("VariableDeclaration", "LVal")
	    },
	    right: {
	      validate: (0, _index.assertNodeType)("Expression")
	    },
	    body: {
	      validate: (0, _index.assertNodeType)("Statement")
	    }
	  }
	});

	(0, _index2.default)("ImportDeclaration", {
	  visitor: ["specifiers", "source"],
	  aliases: ["Statement", "Declaration", "ModuleDeclaration"],
	  fields: {
	    specifiers: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
	    },
	    source: {
	      validate: (0, _index.assertNodeType)("StringLiteral")
	    }
	  }
	});

	(0, _index2.default)("ImportDefaultSpecifier", {
	  visitor: ["local"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    local: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    }
	  }
	});

	(0, _index2.default)("ImportNamespaceSpecifier", {
	  visitor: ["local"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    local: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    }
	  }
	});

	(0, _index2.default)("ImportSpecifier", {
	  visitor: ["local", "imported"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    local: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    },
	    imported: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    },
	    importKind: {
	      validate: (0, _index.assertOneOf)(null, "type", "typeof")
	    }
	  }
	});

	(0, _index2.default)("MetaProperty", {
	  visitor: ["meta", "property"],
	  aliases: ["Expression"],
	  fields: {
	    meta: {
	      validate: (0, _index.assertValueType)("string")
	    },
	    property: {
	      validate: (0, _index.assertValueType)("string")
	    }
	  }
	});

	(0, _index2.default)("ClassMethod", {
	  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
	  builder: ["kind", "key", "params", "body", "computed", "static"],
	  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
	  fields: {
	    kind: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("string"), (0, _index.assertOneOf)("get", "set", "method", "constructor")),
	      default: "method"
	    },
	    computed: {
	      default: false,
	      validate: (0, _index.assertValueType)("boolean")
	    },
	    static: {
	      default: false,
	      validate: (0, _index.assertValueType)("boolean")
	    },
	    key: {
	      validate: function validate(node, key, val) {
	        var expectedTypes = node.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
	        _index.assertNodeType.apply(undefined, expectedTypes)(node, key, val);
	      }
	    },
	    params: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("LVal")))
	    },
	    body: {
	      validate: (0, _index.assertNodeType)("BlockStatement")
	    },
	    generator: {
	      default: false,
	      validate: (0, _index.assertValueType)("boolean")
	    },
	    async: {
	      default: false,
	      validate: (0, _index.assertValueType)("boolean")
	    }
	  }
	});

	(0, _index2.default)("ObjectPattern", {
	  visitor: ["properties", "typeAnnotation"],
	  aliases: ["Pattern", "LVal"],
	  fields: {
	    properties: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("RestProperty", "Property")))
	    },
	    decorators: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
	    }
	  }
	});

	(0, _index2.default)("SpreadElement", {
	  visitor: ["argument"],
	  aliases: ["UnaryLike"],
	  fields: {
	    argument: {
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

	(0, _index2.default)("Super", {
	  aliases: ["Expression"]
	});

	(0, _index2.default)("TaggedTemplateExpression", {
	  visitor: ["tag", "quasi"],
	  aliases: ["Expression"],
	  fields: {
	    tag: {
	      validate: (0, _index.assertNodeType)("Expression")
	    },
	    quasi: {
	      validate: (0, _index.assertNodeType)("TemplateLiteral")
	    }
	  }
	});

	(0, _index2.default)("TemplateElement", {
	  builder: ["value", "tail"],
	  fields: {
	    value: {},
	    tail: {
	      validate: (0, _index.assertValueType)("boolean"),
	      default: false
	    }
	  }
	});

	(0, _index2.default)("TemplateLiteral", {
	  visitor: ["quasis", "expressions"],
	  aliases: ["Expression", "Literal"],
	  fields: {
	    quasis: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("TemplateElement")))
	    },
	    expressions: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Expression")))
	    }
	  }
	});

	(0, _index2.default)("YieldExpression", {
	  builder: ["argument", "delegate"],
	  visitor: ["argument"],
	  aliases: ["Expression", "Terminatorless"],
	  fields: {
	    delegate: {
	      validate: (0, _index.assertValueType)("boolean"),
	      default: false
	    },
	    argument: {
	      optional: true,
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

/***/ },
/* 574 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(571);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _index2.default)("AnyTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"],
	  fields: {}
	});

	(0, _index2.default)("ArrayTypeAnnotation", {
	  visitor: ["elementType"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("BooleanTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"],
	  fields: {}
	});

	(0, _index2.default)("BooleanLiteralTypeAnnotation", {
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("NullLiteralTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"],
	  fields: {}
	});

	(0, _index2.default)("ClassImplements", {
	  visitor: ["id", "typeParameters"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("ClassProperty", {
	  visitor: ["key", "value", "typeAnnotation", "decorators"],
	  builder: ["key", "value", "typeAnnotation", "decorators", "computed"],
	  aliases: ["Property"],
	  fields: {
	    computed: {
	      validate: (0, _index.assertValueType)("boolean"),
	      default: false
	    }
	  }
	});

	(0, _index2.default)("DeclareClass", {
	  visitor: ["id", "typeParameters", "extends", "body"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {}
	});

	(0, _index2.default)("DeclareFunction", {
	  visitor: ["id"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {}
	});

	(0, _index2.default)("DeclareInterface", {
	  visitor: ["id", "typeParameters", "extends", "body"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {}
	});

	(0, _index2.default)("DeclareModule", {
	  visitor: ["id", "body"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {}
	});

	(0, _index2.default)("DeclareModuleExports", {
	  visitor: ["typeAnnotation"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {}
	});

	(0, _index2.default)("DeclareTypeAlias", {
	  visitor: ["id", "typeParameters", "right"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {}
	});

	(0, _index2.default)("DeclareVariable", {
	  visitor: ["id"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {}
	});

	(0, _index2.default)("ExistentialTypeParam", {
	  aliases: ["Flow"]
	});

	(0, _index2.default)("FunctionTypeAnnotation", {
	  visitor: ["typeParameters", "params", "rest", "returnType"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("FunctionTypeParam", {
	  visitor: ["name", "typeAnnotation"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("GenericTypeAnnotation", {
	  visitor: ["id", "typeParameters"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("InterfaceExtends", {
	  visitor: ["id", "typeParameters"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("InterfaceDeclaration", {
	  visitor: ["id", "typeParameters", "extends", "body"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {}
	});

	(0, _index2.default)("IntersectionTypeAnnotation", {
	  visitor: ["types"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("MixedTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"]
	});

	(0, _index2.default)("EmptyTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"]
	});

	(0, _index2.default)("NullableTypeAnnotation", {
	  visitor: ["typeAnnotation"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("NumericLiteralTypeAnnotation", {
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("NumberTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"],
	  fields: {}
	});

	(0, _index2.default)("StringLiteralTypeAnnotation", {
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("StringTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"],
	  fields: {}
	});

	(0, _index2.default)("ThisTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"],
	  fields: {}
	});

	(0, _index2.default)("TupleTypeAnnotation", {
	  visitor: ["types"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("TypeofTypeAnnotation", {
	  visitor: ["argument"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("TypeAlias", {
	  visitor: ["id", "typeParameters", "right"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {}
	});

	(0, _index2.default)("TypeAnnotation", {
	  visitor: ["typeAnnotation"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("TypeCastExpression", {
	  visitor: ["expression", "typeAnnotation"],
	  aliases: ["Flow", "ExpressionWrapper", "Expression"],
	  fields: {}
	});

	(0, _index2.default)("TypeParameter", {
	  visitor: ["bound"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("TypeParameterDeclaration", {
	  visitor: ["params"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("TypeParameterInstantiation", {
	  visitor: ["params"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("ObjectTypeAnnotation", {
	  visitor: ["properties", "indexers", "callProperties"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("ObjectTypeCallProperty", {
	  visitor: ["value"],
	  aliases: ["Flow", "UserWhitespacable"],
	  fields: {}
	});

	(0, _index2.default)("ObjectTypeIndexer", {
	  visitor: ["id", "key", "value"],
	  aliases: ["Flow", "UserWhitespacable"],
	  fields: {}
	});

	(0, _index2.default)("ObjectTypeProperty", {
	  visitor: ["key", "value"],
	  aliases: ["Flow", "UserWhitespacable"],
	  fields: {}
	});

	(0, _index2.default)("ObjectTypeSpreadProperty", {
	  visitor: ["argument"],
	  aliases: ["Flow", "UserWhitespacable"],
	  fields: {}
	});

	(0, _index2.default)("QualifiedTypeIdentifier", {
	  visitor: ["id", "qualification"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("UnionTypeAnnotation", {
	  visitor: ["types"],
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("VoidTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"],
	  fields: {}
	});

/***/ },
/* 575 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(571);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _index2.default)("JSXAttribute", {
	  visitor: ["name", "value"],
	  aliases: ["JSX", "Immutable"],
	  fields: {
	    name: {
	      validate: (0, _index.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
	    },
	    value: {
	      optional: true,
	      validate: (0, _index.assertNodeType)("JSXElement", "StringLiteral", "JSXExpressionContainer")
	    }
	  }
	});

	(0, _index2.default)("JSXClosingElement", {
	  visitor: ["name"],
	  aliases: ["JSX", "Immutable"],
	  fields: {
	    name: {
	      validate: (0, _index.assertNodeType)("JSXIdentifier", "JSXMemberExpression")
	    }
	  }
	});

	(0, _index2.default)("JSXElement", {
	  builder: ["openingElement", "closingElement", "children", "selfClosing"],
	  visitor: ["openingElement", "children", "closingElement"],
	  aliases: ["JSX", "Immutable", "Expression"],
	  fields: {
	    openingElement: {
	      validate: (0, _index.assertNodeType)("JSXOpeningElement")
	    },
	    closingElement: {
	      optional: true,
	      validate: (0, _index.assertNodeType)("JSXClosingElement")
	    },
	    children: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement")))
	    }
	  }
	});

	(0, _index2.default)("JSXEmptyExpression", {
	  aliases: ["JSX", "Expression"]
	});

	(0, _index2.default)("JSXExpressionContainer", {
	  visitor: ["expression"],
	  aliases: ["JSX", "Immutable"],
	  fields: {
	    expression: {
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

	(0, _index2.default)("JSXSpreadChild", {
	  visitor: ["expression"],
	  aliases: ["JSX", "Immutable"],
	  fields: {
	    expression: {
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

	(0, _index2.default)("JSXIdentifier", {
	  builder: ["name"],
	  aliases: ["JSX", "Expression"],
	  fields: {
	    name: {
	      validate: (0, _index.assertValueType)("string")
	    }
	  }
	});

	(0, _index2.default)("JSXMemberExpression", {
	  visitor: ["object", "property"],
	  aliases: ["JSX", "Expression"],
	  fields: {
	    object: {
	      validate: (0, _index.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
	    },
	    property: {
	      validate: (0, _index.assertNodeType)("JSXIdentifier")
	    }
	  }
	});

	(0, _index2.default)("JSXNamespacedName", {
	  visitor: ["namespace", "name"],
	  aliases: ["JSX"],
	  fields: {
	    namespace: {
	      validate: (0, _index.assertNodeType)("JSXIdentifier")
	    },
	    name: {
	      validate: (0, _index.assertNodeType)("JSXIdentifier")
	    }
	  }
	});

	(0, _index2.default)("JSXOpeningElement", {
	  builder: ["name", "attributes", "selfClosing"],
	  visitor: ["name", "attributes"],
	  aliases: ["JSX", "Immutable"],
	  fields: {
	    name: {
	      validate: (0, _index.assertNodeType)("JSXIdentifier", "JSXMemberExpression")
	    },
	    selfClosing: {
	      default: false,
	      validate: (0, _index.assertValueType)("boolean")
	    },
	    attributes: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
	    }
	  }
	});

	(0, _index2.default)("JSXSpreadAttribute", {
	  visitor: ["argument"],
	  aliases: ["JSX"],
	  fields: {
	    argument: {
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

	(0, _index2.default)("JSXText", {
	  aliases: ["JSX", "Immutable"],
	  builder: ["value"],
	  fields: {
	    value: {
	      validate: (0, _index.assertValueType)("string")
	    }
	  }
	});

/***/ },
/* 576 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(571);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _index2.default)("Noop", {
	  visitor: []
	});

	(0, _index2.default)("ParenthesizedExpression", {
	  visitor: ["expression"],
	  aliases: ["Expression", "ExpressionWrapper"],
	  fields: {
	    expression: {
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

/***/ },
/* 577 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(571);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _index2.default)("AwaitExpression", {
	  builder: ["argument"],
	  visitor: ["argument"],
	  aliases: ["Expression", "Terminatorless"],
	  fields: {
	    argument: {
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

	(0, _index2.default)("ForAwaitStatement", {
	  visitor: ["left", "right", "body"],
	  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
	  fields: {
	    left: {
	      validate: (0, _index.assertNodeType)("VariableDeclaration", "LVal")
	    },
	    right: {
	      validate: (0, _index.assertNodeType)("Expression")
	    },
	    body: {
	      validate: (0, _index.assertNodeType)("Statement")
	    }
	  }
	});

	(0, _index2.default)("BindExpression", {
	  visitor: ["object", "callee"],
	  aliases: ["Expression"],
	  fields: {}
	});

	(0, _index2.default)("Import", {
	  aliases: ["Expression"]
	});

	(0, _index2.default)("Decorator", {
	  visitor: ["expression"],
	  fields: {
	    expression: {
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

	(0, _index2.default)("DoExpression", {
	  visitor: ["body"],
	  aliases: ["Expression"],
	  fields: {
	    body: {
	      validate: (0, _index.assertNodeType)("BlockStatement")
	    }
	  }
	});

	(0, _index2.default)("ExportDefaultSpecifier", {
	  visitor: ["exported"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    exported: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    }
	  }
	});

	(0, _index2.default)("ExportNamespaceSpecifier", {
	  visitor: ["exported"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    exported: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    }
	  }
	});

	(0, _index2.default)("RestProperty", {
	  visitor: ["argument"],
	  aliases: ["UnaryLike"],
	  fields: {
	    argument: {
	      validate: (0, _index.assertNodeType)("LVal")
	    }
	  }
	});

	(0, _index2.default)("SpreadProperty", {
	  visitor: ["argument"],
	  aliases: ["UnaryLike"],
	  fields: {
	    argument: {
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

/***/ },
/* 578 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.isReactComponent = undefined;
	exports.isCompatTag = isCompatTag;
	exports.buildChildren = buildChildren;

	var _index = __webpack_require__(493);

	var t = _interopRequireWildcard(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var isReactComponent = exports.isReactComponent = t.buildMatchMemberExpression("React.Component");

	function isCompatTag(tagName) {
	  return !!tagName && /^[a-z]|\-/.test(tagName);
	}

	function cleanJSXElementLiteralChild(child, args) {
	  var lines = child.value.split(/\r\n|\n|\r/);

	  var lastNonEmptyLine = 0;

	  for (var i = 0; i < lines.length; i++) {
	    if (lines[i].match(/[^ \t]/)) {
	      lastNonEmptyLine = i;
	    }
	  }

	  var str = "";

	  for (var _i = 0; _i < lines.length; _i++) {
	    var line = lines[_i];

	    var isFirstLine = _i === 0;
	    var isLastLine = _i === lines.length - 1;
	    var isLastNonEmptyLine = _i === lastNonEmptyLine;

	    var trimmedLine = line.replace(/\t/g, " ");

	    if (!isFirstLine) {
	      trimmedLine = trimmedLine.replace(/^[ ]+/, "");
	    }

	    if (!isLastLine) {
	      trimmedLine = trimmedLine.replace(/[ ]+$/, "");
	    }

	    if (trimmedLine) {
	      if (!isLastNonEmptyLine) {
	        trimmedLine += " ";
	      }

	      str += trimmedLine;
	    }
	  }

	  if (str) args.push(t.stringLiteral(str));
	}

	function buildChildren(node) {
	  var elems = [];

	  for (var i = 0; i < node.children.length; i++) {
	    var child = node.children[i];

	    if (t.isJSXText(child)) {
	      cleanJSXElementLiteralChild(child, elems);
	      continue;
	    }

	    if (t.isJSXExpressionContainer(child)) child = child.expression;
	    if (t.isJSXEmptyExpression(child)) continue;

	    elems.push(child);
	  }

	  return elems;
	}

/***/ },
/* 579 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(580);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
	    return true;
	  }

	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
	    // double check webkit in userAgent just in case we are in a worker
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs(args) {
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return;

	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit')

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}

	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = ({"NODE_ENV":"production","TARGET":"firefox-panel"}).DEBUG;
	  }

	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(120)))

/***/ },
/* 580 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(581);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */

	exports.formatters = {};

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */

	function selectColor(namespace) {
	  var hash = 0, i;

	  for (i in namespace) {
	    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }

	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function createDebug(namespace) {

	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;

	    var self = debug;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);

	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }

	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);

	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }

	  return debug;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  exports.names = [];
	  exports.skips = [];

	  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 581 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) {
	    return;
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name;
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(114),
	    copyObject = __webpack_require__(406),
	    createAssigner = __webpack_require__(410),
	    isArrayLike = __webpack_require__(220),
	    isPrototype = __webpack_require__(218),
	    keys = __webpack_require__(205);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	module.exports = assign;


/***/ },
/* 583 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _keys = __webpack_require__(508);

	var _keys2 = _interopRequireDefault(_keys);

	var _create = __webpack_require__(518);

	var _create2 = _interopRequireDefault(_create);

	var _map = __webpack_require__(584);

	var _map2 = _interopRequireDefault(_map);

	var _classCallCheck2 = __webpack_require__(491);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _includes = __webpack_require__(601);

	var _includes2 = _interopRequireDefault(_includes);

	var _repeat = __webpack_require__(605);

	var _repeat2 = _interopRequireDefault(_repeat);

	var _renamer = __webpack_require__(607);

	var _renamer2 = _interopRequireDefault(_renamer);

	var _index = __webpack_require__(436);

	var _index2 = _interopRequireDefault(_index);

	var _defaults = __webpack_require__(609);

	var _defaults2 = _interopRequireDefault(_defaults);

	var _babelMessages = __webpack_require__(612);

	var messages = _interopRequireWildcard(_babelMessages);

	var _binding2 = __webpack_require__(608);

	var _binding3 = _interopRequireDefault(_binding2);

	var _globals = __webpack_require__(616);

	var _globals2 = _interopRequireDefault(_globals);

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	var _cache = __webpack_require__(618);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _crawlCallsCount = 0;

	function getCache(path, parentScope, self) {
	  var scopes = _cache.scope.get(path.node) || [];

	  for (var _iterator = scopes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var scope = _ref;

	    if (scope.parent === parentScope && scope.path === path) return scope;
	  }

	  scopes.push(self);

	  if (!_cache.scope.has(path.node)) {
	    _cache.scope.set(path.node, scopes);
	  }
	}

	function gatherNodeParts(node, parts) {
	  if (t.isModuleDeclaration(node)) {
	    if (node.source) {
	      gatherNodeParts(node.source, parts);
	    } else if (node.specifiers && node.specifiers.length) {
	      for (var _iterator2 = node.specifiers, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	        var _ref2;

	        if (_isArray2) {
	          if (_i2 >= _iterator2.length) break;
	          _ref2 = _iterator2[_i2++];
	        } else {
	          _i2 = _iterator2.next();
	          if (_i2.done) break;
	          _ref2 = _i2.value;
	        }

	        var specifier = _ref2;

	        gatherNodeParts(specifier, parts);
	      }
	    } else if (node.declaration) {
	      gatherNodeParts(node.declaration, parts);
	    }
	  } else if (t.isModuleSpecifier(node)) {
	    gatherNodeParts(node.local, parts);
	  } else if (t.isMemberExpression(node)) {
	    gatherNodeParts(node.object, parts);
	    gatherNodeParts(node.property, parts);
	  } else if (t.isIdentifier(node)) {
	    parts.push(node.name);
	  } else if (t.isLiteral(node)) {
	    parts.push(node.value);
	  } else if (t.isCallExpression(node)) {
	    gatherNodeParts(node.callee, parts);
	  } else if (t.isObjectExpression(node) || t.isObjectPattern(node)) {
	    for (var _iterator3 = node.properties, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
	      var _ref3;

	      if (_isArray3) {
	        if (_i3 >= _iterator3.length) break;
	        _ref3 = _iterator3[_i3++];
	      } else {
	        _i3 = _iterator3.next();
	        if (_i3.done) break;
	        _ref3 = _i3.value;
	      }

	      var prop = _ref3;

	      gatherNodeParts(prop.key || prop.argument, parts);
	    }
	  }
	}

	var collectorVisitor = {
	  For: function For(path) {
	    for (var _iterator4 = t.FOR_INIT_KEYS, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
	      var _ref4;

	      if (_isArray4) {
	        if (_i4 >= _iterator4.length) break;
	        _ref4 = _iterator4[_i4++];
	      } else {
	        _i4 = _iterator4.next();
	        if (_i4.done) break;
	        _ref4 = _i4.value;
	      }

	      var key = _ref4;

	      var declar = path.get(key);
	      if (declar.isVar()) path.scope.getFunctionParent().registerBinding("var", declar);
	    }
	  },
	  Declaration: function Declaration(path) {
	    if (path.isBlockScoped()) return;

	    if (path.isExportDeclaration() && path.get("declaration").isDeclaration()) return;

	    path.scope.getFunctionParent().registerDeclaration(path);
	  },
	  ReferencedIdentifier: function ReferencedIdentifier(path, state) {
	    state.references.push(path);
	  },
	  ForXStatement: function ForXStatement(path, state) {
	    var left = path.get("left");
	    if (left.isPattern() || left.isIdentifier()) {
	      state.constantViolations.push(left);
	    }
	  },


	  ExportDeclaration: {
	    exit: function exit(path) {
	      var node = path.node,
	          scope = path.scope;

	      var declar = node.declaration;
	      if (t.isClassDeclaration(declar) || t.isFunctionDeclaration(declar)) {
	        var _id = declar.id;
	        if (!_id) return;

	        var binding = scope.getBinding(_id.name);
	        if (binding) binding.reference(path);
	      } else if (t.isVariableDeclaration(declar)) {
	        for (var _iterator5 = declar.declarations, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);;) {
	          var _ref5;

	          if (_isArray5) {
	            if (_i5 >= _iterator5.length) break;
	            _ref5 = _iterator5[_i5++];
	          } else {
	            _i5 = _iterator5.next();
	            if (_i5.done) break;
	            _ref5 = _i5.value;
	          }

	          var decl = _ref5;

	          var ids = t.getBindingIdentifiers(decl);
	          for (var name in ids) {
	            var _binding = scope.getBinding(name);
	            if (_binding) _binding.reference(path);
	          }
	        }
	      }
	    }
	  },

	  LabeledStatement: function LabeledStatement(path) {
	    path.scope.getProgramParent().addGlobal(path.node);
	    path.scope.getBlockParent().registerDeclaration(path);
	  },
	  AssignmentExpression: function AssignmentExpression(path, state) {
	    state.assignments.push(path);
	  },
	  UpdateExpression: function UpdateExpression(path, state) {
	    state.constantViolations.push(path.get("argument"));
	  },
	  UnaryExpression: function UnaryExpression(path, state) {
	    if (path.node.operator === "delete") {
	      state.constantViolations.push(path.get("argument"));
	    }
	  },
	  BlockScoped: function BlockScoped(path) {
	    var scope = path.scope;
	    if (scope.path === path) scope = scope.parent;
	    scope.getBlockParent().registerDeclaration(path);
	  },
	  ClassDeclaration: function ClassDeclaration(path) {
	    var id = path.node.id;
	    if (!id) return;

	    var name = id.name;
	    path.scope.bindings[name] = path.scope.getBinding(name);
	  },
	  Block: function Block(path) {
	    var paths = path.get("body");
	    for (var _iterator6 = paths, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);;) {
	      var _ref6;

	      if (_isArray6) {
	        if (_i6 >= _iterator6.length) break;
	        _ref6 = _iterator6[_i6++];
	      } else {
	        _i6 = _iterator6.next();
	        if (_i6.done) break;
	        _ref6 = _i6.value;
	      }

	      var bodyPath = _ref6;

	      if (bodyPath.isFunctionDeclaration()) {
	        path.scope.getBlockParent().registerDeclaration(bodyPath);
	      }
	    }
	  }
	};

	var uid = 0;

	var Scope = function () {
	  function Scope(path, parentScope) {
	    (0, _classCallCheck3.default)(this, Scope);

	    if (parentScope && parentScope.block === path.node) {
	      return parentScope;
	    }

	    var cached = getCache(path, parentScope, this);
	    if (cached) return cached;

	    this.uid = uid++;
	    this.parent = parentScope;
	    this.hub = path.hub;

	    this.parentBlock = path.parent;
	    this.block = path.node;
	    this.path = path;

	    this.labels = new _map2.default();
	  }

	  Scope.prototype.traverse = function traverse(node, opts, state) {
	    (0, _index2.default)(node, opts, this, state, this.path);
	  };

	  Scope.prototype.generateDeclaredUidIdentifier = function generateDeclaredUidIdentifier() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "temp";

	    var id = this.generateUidIdentifier(name);
	    this.push({ id: id });
	    return id;
	  };

	  Scope.prototype.generateUidIdentifier = function generateUidIdentifier() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "temp";

	    return t.identifier(this.generateUid(name));
	  };

	  Scope.prototype.generateUid = function generateUid() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "temp";

	    name = t.toIdentifier(name).replace(/^_+/, "").replace(/[0-9]+$/g, "");

	    var uid = void 0;
	    var i = 0;
	    do {
	      uid = this._generateUid(name, i);
	      i++;
	    } while (this.hasLabel(uid) || this.hasBinding(uid) || this.hasGlobal(uid) || this.hasReference(uid));

	    var program = this.getProgramParent();
	    program.references[uid] = true;
	    program.uids[uid] = true;

	    return uid;
	  };

	  Scope.prototype._generateUid = function _generateUid(name, i) {
	    var id = name;
	    if (i > 1) id += i;
	    return "_" + id;
	  };

	  Scope.prototype.generateUidIdentifierBasedOnNode = function generateUidIdentifierBasedOnNode(parent, defaultName) {
	    var node = parent;

	    if (t.isAssignmentExpression(parent)) {
	      node = parent.left;
	    } else if (t.isVariableDeclarator(parent)) {
	      node = parent.id;
	    } else if (t.isObjectProperty(node) || t.isObjectMethod(node)) {
	      node = node.key;
	    }

	    var parts = [];
	    gatherNodeParts(node, parts);

	    var id = parts.join("$");
	    id = id.replace(/^_/, "") || defaultName || "ref";

	    return this.generateUidIdentifier(id.slice(0, 20));
	  };

	  Scope.prototype.isStatic = function isStatic(node) {
	    if (t.isThisExpression(node) || t.isSuper(node)) {
	      return true;
	    }

	    if (t.isIdentifier(node)) {
	      var binding = this.getBinding(node.name);
	      if (binding) {
	        return binding.constant;
	      } else {
	        return this.hasBinding(node.name);
	      }
	    }

	    return false;
	  };

	  Scope.prototype.maybeGenerateMemoised = function maybeGenerateMemoised(node, dontPush) {
	    if (this.isStatic(node)) {
	      return null;
	    } else {
	      var _id2 = this.generateUidIdentifierBasedOnNode(node);
	      if (!dontPush) this.push({ id: _id2 });
	      return _id2;
	    }
	  };

	  Scope.prototype.checkBlockScopedCollisions = function checkBlockScopedCollisions(local, kind, name, id) {
	    if (kind === "param") return;

	    if (kind === "hoisted" && local.kind === "let") return;

	    var duplicate = kind === "let" || local.kind === "let" || local.kind === "const" || local.kind === "module" || local.kind === "param" && (kind === "let" || kind === "const");

	    if (duplicate) {
	      throw this.hub.file.buildCodeFrameError(id, messages.get("scopeDuplicateDeclaration", name), TypeError);
	    }
	  };

	  Scope.prototype.rename = function rename(oldName, newName, block) {
	    var binding = this.getBinding(oldName);
	    if (binding) {
	      newName = newName || this.generateUidIdentifier(oldName).name;
	      return new _renamer2.default(binding, oldName, newName).rename(block);
	    }
	  };

	  Scope.prototype._renameFromMap = function _renameFromMap(map, oldName, newName, value) {
	    if (map[oldName]) {
	      map[newName] = value;
	      map[oldName] = null;
	    }
	  };

	  Scope.prototype.dump = function dump() {
	    var sep = (0, _repeat2.default)("-", 60);
	    console.log(sep);
	    var scope = this;
	    do {
	      console.log("#", scope.block.type);
	      for (var name in scope.bindings) {
	        var binding = scope.bindings[name];
	        console.log(" -", name, {
	          constant: binding.constant,
	          references: binding.references,
	          violations: binding.constantViolations.length,
	          kind: binding.kind
	        });
	      }
	    } while (scope = scope.parent);
	    console.log(sep);
	  };

	  Scope.prototype.toArray = function toArray(node, i) {
	    var file = this.hub.file;

	    if (t.isIdentifier(node)) {
	      var binding = this.getBinding(node.name);
	      if (binding && binding.constant && binding.path.isGenericType("Array")) return node;
	    }

	    if (t.isArrayExpression(node)) {
	      return node;
	    }

	    if (t.isIdentifier(node, { name: "arguments" })) {
	      return t.callExpression(t.memberExpression(t.memberExpression(t.memberExpression(t.identifier("Array"), t.identifier("prototype")), t.identifier("slice")), t.identifier("call")), [node]);
	    }

	    var helperName = "toArray";
	    var args = [node];
	    if (i === true) {
	      helperName = "toConsumableArray";
	    } else if (i) {
	      args.push(t.numericLiteral(i));
	      helperName = "slicedToArray";
	    }
	    return t.callExpression(file.addHelper(helperName), args);
	  };

	  Scope.prototype.hasLabel = function hasLabel(name) {
	    return !!this.getLabel(name);
	  };

	  Scope.prototype.getLabel = function getLabel(name) {
	    return this.labels.get(name);
	  };

	  Scope.prototype.registerLabel = function registerLabel(path) {
	    this.labels.set(path.node.label.name, path);
	  };

	  Scope.prototype.registerDeclaration = function registerDeclaration(path) {
	    if (path.isLabeledStatement()) {
	      this.registerLabel(path);
	    } else if (path.isFunctionDeclaration()) {
	      this.registerBinding("hoisted", path.get("id"), path);
	    } else if (path.isVariableDeclaration()) {
	      var declarations = path.get("declarations");
	      for (var _iterator7 = declarations, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);;) {
	        var _ref7;

	        if (_isArray7) {
	          if (_i7 >= _iterator7.length) break;
	          _ref7 = _iterator7[_i7++];
	        } else {
	          _i7 = _iterator7.next();
	          if (_i7.done) break;
	          _ref7 = _i7.value;
	        }

	        var declar = _ref7;

	        this.registerBinding(path.node.kind, declar);
	      }
	    } else if (path.isClassDeclaration()) {
	      this.registerBinding("let", path);
	    } else if (path.isImportDeclaration()) {
	      var specifiers = path.get("specifiers");
	      for (var _iterator8 = specifiers, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);;) {
	        var _ref8;

	        if (_isArray8) {
	          if (_i8 >= _iterator8.length) break;
	          _ref8 = _iterator8[_i8++];
	        } else {
	          _i8 = _iterator8.next();
	          if (_i8.done) break;
	          _ref8 = _i8.value;
	        }

	        var specifier = _ref8;

	        this.registerBinding("module", specifier);
	      }
	    } else if (path.isExportDeclaration()) {
	      var _declar = path.get("declaration");
	      if (_declar.isClassDeclaration() || _declar.isFunctionDeclaration() || _declar.isVariableDeclaration()) {
	        this.registerDeclaration(_declar);
	      }
	    } else {
	      this.registerBinding("unknown", path);
	    }
	  };

	  Scope.prototype.buildUndefinedNode = function buildUndefinedNode() {
	    if (this.hasBinding("undefined")) {
	      return t.unaryExpression("void", t.numericLiteral(0), true);
	    } else {
	      return t.identifier("undefined");
	    }
	  };

	  Scope.prototype.registerConstantViolation = function registerConstantViolation(path) {
	    var ids = path.getBindingIdentifiers();
	    for (var name in ids) {
	      var binding = this.getBinding(name);
	      if (binding) binding.reassign(path);
	    }
	  };

	  Scope.prototype.registerBinding = function registerBinding(kind, path) {
	    var bindingPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : path;

	    if (!kind) throw new ReferenceError("no `kind`");

	    if (path.isVariableDeclaration()) {
	      var declarators = path.get("declarations");
	      for (var _iterator9 = declarators, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9);;) {
	        var _ref9;

	        if (_isArray9) {
	          if (_i9 >= _iterator9.length) break;
	          _ref9 = _iterator9[_i9++];
	        } else {
	          _i9 = _iterator9.next();
	          if (_i9.done) break;
	          _ref9 = _i9.value;
	        }

	        var declar = _ref9;

	        this.registerBinding(kind, declar);
	      }
	      return;
	    }

	    var parent = this.getProgramParent();
	    var ids = path.getBindingIdentifiers(true);

	    for (var name in ids) {
	      for (var _iterator10 = ids[name], _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10);;) {
	        var _ref10;

	        if (_isArray10) {
	          if (_i10 >= _iterator10.length) break;
	          _ref10 = _iterator10[_i10++];
	        } else {
	          _i10 = _iterator10.next();
	          if (_i10.done) break;
	          _ref10 = _i10.value;
	        }

	        var _id3 = _ref10;

	        var local = this.getOwnBinding(name);
	        if (local) {
	          if (local.identifier === _id3) continue;

	          this.checkBlockScopedCollisions(local, kind, name, _id3);
	        }

	        if (local && local.path.isFlow()) local = null;

	        parent.references[name] = true;

	        this.bindings[name] = new _binding3.default({
	          identifier: _id3,
	          existing: local,
	          scope: this,
	          path: bindingPath,
	          kind: kind
	        });
	      }
	    }
	  };

	  Scope.prototype.addGlobal = function addGlobal(node) {
	    this.globals[node.name] = node;
	  };

	  Scope.prototype.hasUid = function hasUid(name) {
	    var scope = this;

	    do {
	      if (scope.uids[name]) return true;
	    } while (scope = scope.parent);

	    return false;
	  };

	  Scope.prototype.hasGlobal = function hasGlobal(name) {
	    var scope = this;

	    do {
	      if (scope.globals[name]) return true;
	    } while (scope = scope.parent);

	    return false;
	  };

	  Scope.prototype.hasReference = function hasReference(name) {
	    var scope = this;

	    do {
	      if (scope.references[name]) return true;
	    } while (scope = scope.parent);

	    return false;
	  };

	  Scope.prototype.isPure = function isPure(node, constantsOnly) {
	    if (t.isIdentifier(node)) {
	      var binding = this.getBinding(node.name);
	      if (!binding) return false;
	      if (constantsOnly) return binding.constant;
	      return true;
	    } else if (t.isClass(node)) {
	      if (node.superClass && !this.isPure(node.superClass, constantsOnly)) return false;
	      return this.isPure(node.body, constantsOnly);
	    } else if (t.isClassBody(node)) {
	      for (var _iterator11 = node.body, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : (0, _getIterator3.default)(_iterator11);;) {
	        var _ref11;

	        if (_isArray11) {
	          if (_i11 >= _iterator11.length) break;
	          _ref11 = _iterator11[_i11++];
	        } else {
	          _i11 = _iterator11.next();
	          if (_i11.done) break;
	          _ref11 = _i11.value;
	        }

	        var method = _ref11;

	        if (!this.isPure(method, constantsOnly)) return false;
	      }
	      return true;
	    } else if (t.isBinary(node)) {
	      return this.isPure(node.left, constantsOnly) && this.isPure(node.right, constantsOnly);
	    } else if (t.isArrayExpression(node)) {
	      for (var _iterator12 = node.elements, _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : (0, _getIterator3.default)(_iterator12);;) {
	        var _ref12;

	        if (_isArray12) {
	          if (_i12 >= _iterator12.length) break;
	          _ref12 = _iterator12[_i12++];
	        } else {
	          _i12 = _iterator12.next();
	          if (_i12.done) break;
	          _ref12 = _i12.value;
	        }

	        var elem = _ref12;

	        if (!this.isPure(elem, constantsOnly)) return false;
	      }
	      return true;
	    } else if (t.isObjectExpression(node)) {
	      for (var _iterator13 = node.properties, _isArray13 = Array.isArray(_iterator13), _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : (0, _getIterator3.default)(_iterator13);;) {
	        var _ref13;

	        if (_isArray13) {
	          if (_i13 >= _iterator13.length) break;
	          _ref13 = _iterator13[_i13++];
	        } else {
	          _i13 = _iterator13.next();
	          if (_i13.done) break;
	          _ref13 = _i13.value;
	        }

	        var prop = _ref13;

	        if (!this.isPure(prop, constantsOnly)) return false;
	      }
	      return true;
	    } else if (t.isClassMethod(node)) {
	      if (node.computed && !this.isPure(node.key, constantsOnly)) return false;
	      if (node.kind === "get" || node.kind === "set") return false;
	      return true;
	    } else if (t.isClassProperty(node) || t.isObjectProperty(node)) {
	      if (node.computed && !this.isPure(node.key, constantsOnly)) return false;
	      return this.isPure(node.value, constantsOnly);
	    } else if (t.isUnaryExpression(node)) {
	      return this.isPure(node.argument, constantsOnly);
	    } else {
	      return t.isPureish(node);
	    }
	  };

	  Scope.prototype.setData = function setData(key, val) {
	    return this.data[key] = val;
	  };

	  Scope.prototype.getData = function getData(key) {
	    var scope = this;
	    do {
	      var data = scope.data[key];
	      if (data != null) return data;
	    } while (scope = scope.parent);
	  };

	  Scope.prototype.removeData = function removeData(key) {
	    var scope = this;
	    do {
	      var data = scope.data[key];
	      if (data != null) scope.data[key] = null;
	    } while (scope = scope.parent);
	  };

	  Scope.prototype.init = function init() {
	    if (!this.references) this.crawl();
	  };

	  Scope.prototype.crawl = function crawl() {
	    _crawlCallsCount++;
	    this._crawl();
	    _crawlCallsCount--;
	  };

	  Scope.prototype._crawl = function _crawl() {
	    var path = this.path;

	    this.references = (0, _create2.default)(null);
	    this.bindings = (0, _create2.default)(null);
	    this.globals = (0, _create2.default)(null);
	    this.uids = (0, _create2.default)(null);
	    this.data = (0, _create2.default)(null);

	    if (path.isLoop()) {
	      for (var _iterator14 = t.FOR_INIT_KEYS, _isArray14 = Array.isArray(_iterator14), _i14 = 0, _iterator14 = _isArray14 ? _iterator14 : (0, _getIterator3.default)(_iterator14);;) {
	        var _ref14;

	        if (_isArray14) {
	          if (_i14 >= _iterator14.length) break;
	          _ref14 = _iterator14[_i14++];
	        } else {
	          _i14 = _iterator14.next();
	          if (_i14.done) break;
	          _ref14 = _i14.value;
	        }

	        var key = _ref14;

	        var node = path.get(key);
	        if (node.isBlockScoped()) this.registerBinding(node.node.kind, node);
	      }
	    }

	    if (path.isFunctionExpression() && path.has("id")) {
	      if (!path.get("id").node[t.NOT_LOCAL_BINDING]) {
	        this.registerBinding("local", path.get("id"), path);
	      }
	    }

	    if (path.isClassExpression() && path.has("id")) {
	      if (!path.get("id").node[t.NOT_LOCAL_BINDING]) {
	        this.registerBinding("local", path);
	      }
	    }

	    if (path.isFunction()) {
	      var params = path.get("params");
	      for (var _iterator15 = params, _isArray15 = Array.isArray(_iterator15), _i15 = 0, _iterator15 = _isArray15 ? _iterator15 : (0, _getIterator3.default)(_iterator15);;) {
	        var _ref15;

	        if (_isArray15) {
	          if (_i15 >= _iterator15.length) break;
	          _ref15 = _iterator15[_i15++];
	        } else {
	          _i15 = _iterator15.next();
	          if (_i15.done) break;
	          _ref15 = _i15.value;
	        }

	        var param = _ref15;

	        this.registerBinding("param", param);
	      }
	    }

	    if (path.isCatchClause()) {
	      this.registerBinding("let", path);
	    }

	    var parent = this.getProgramParent();
	    if (parent.crawling) return;

	    var state = {
	      references: [],
	      constantViolations: [],
	      assignments: []
	    };

	    this.crawling = true;
	    path.traverse(collectorVisitor, state);
	    this.crawling = false;

	    for (var _iterator16 = state.assignments, _isArray16 = Array.isArray(_iterator16), _i16 = 0, _iterator16 = _isArray16 ? _iterator16 : (0, _getIterator3.default)(_iterator16);;) {
	      var _ref16;

	      if (_isArray16) {
	        if (_i16 >= _iterator16.length) break;
	        _ref16 = _iterator16[_i16++];
	      } else {
	        _i16 = _iterator16.next();
	        if (_i16.done) break;
	        _ref16 = _i16.value;
	      }

	      var _path = _ref16;

	      var ids = _path.getBindingIdentifiers();
	      var programParent = void 0;
	      for (var name in ids) {
	        if (_path.scope.getBinding(name)) continue;

	        programParent = programParent || _path.scope.getProgramParent();
	        programParent.addGlobal(ids[name]);
	      }

	      _path.scope.registerConstantViolation(_path);
	    }

	    for (var _iterator17 = state.references, _isArray17 = Array.isArray(_iterator17), _i17 = 0, _iterator17 = _isArray17 ? _iterator17 : (0, _getIterator3.default)(_iterator17);;) {
	      var _ref17;

	      if (_isArray17) {
	        if (_i17 >= _iterator17.length) break;
	        _ref17 = _iterator17[_i17++];
	      } else {
	        _i17 = _iterator17.next();
	        if (_i17.done) break;
	        _ref17 = _i17.value;
	      }

	      var ref = _ref17;

	      var binding = ref.scope.getBinding(ref.node.name);
	      if (binding) {
	        binding.reference(ref);
	      } else {
	        ref.scope.getProgramParent().addGlobal(ref.node);
	      }
	    }

	    for (var _iterator18 = state.constantViolations, _isArray18 = Array.isArray(_iterator18), _i18 = 0, _iterator18 = _isArray18 ? _iterator18 : (0, _getIterator3.default)(_iterator18);;) {
	      var _ref18;

	      if (_isArray18) {
	        if (_i18 >= _iterator18.length) break;
	        _ref18 = _iterator18[_i18++];
	      } else {
	        _i18 = _iterator18.next();
	        if (_i18.done) break;
	        _ref18 = _i18.value;
	      }

	      var _path2 = _ref18;

	      _path2.scope.registerConstantViolation(_path2);
	    }
	  };

	  Scope.prototype.push = function push(opts) {
	    var path = this.path;

	    if (!path.isBlockStatement() && !path.isProgram()) {
	      path = this.getBlockParent().path;
	    }

	    if (path.isSwitchStatement()) {
	      path = this.getFunctionParent().path;
	    }

	    if (path.isLoop() || path.isCatchClause() || path.isFunction()) {
	      t.ensureBlock(path.node);
	      path = path.get("body");
	    }

	    var unique = opts.unique;
	    var kind = opts.kind || "var";
	    var blockHoist = opts._blockHoist == null ? 2 : opts._blockHoist;

	    var dataKey = "declaration:" + kind + ":" + blockHoist;
	    var declarPath = !unique && path.getData(dataKey);

	    if (!declarPath) {
	      var declar = t.variableDeclaration(kind, []);
	      declar._generated = true;
	      declar._blockHoist = blockHoist;

	      var _path$unshiftContaine = path.unshiftContainer("body", [declar]);

	      declarPath = _path$unshiftContaine[0];

	      if (!unique) path.setData(dataKey, declarPath);
	    }

	    var declarator = t.variableDeclarator(opts.id, opts.init);
	    declarPath.node.declarations.push(declarator);
	    this.registerBinding(kind, declarPath.get("declarations").pop());
	  };

	  Scope.prototype.getProgramParent = function getProgramParent() {
	    var scope = this;
	    do {
	      if (scope.path.isProgram()) {
	        return scope;
	      }
	    } while (scope = scope.parent);
	    throw new Error("We couldn't find a Function or Program...");
	  };

	  Scope.prototype.getFunctionParent = function getFunctionParent() {
	    var scope = this;
	    do {
	      if (scope.path.isFunctionParent()) {
	        return scope;
	      }
	    } while (scope = scope.parent);
	    throw new Error("We couldn't find a Function or Program...");
	  };

	  Scope.prototype.getBlockParent = function getBlockParent() {
	    var scope = this;
	    do {
	      if (scope.path.isBlockParent()) {
	        return scope;
	      }
	    } while (scope = scope.parent);
	    throw new Error("We couldn't find a BlockStatement, For, Switch, Function, Loop or Program...");
	  };

	  Scope.prototype.getAllBindings = function getAllBindings() {
	    var ids = (0, _create2.default)(null);

	    var scope = this;
	    do {
	      (0, _defaults2.default)(ids, scope.bindings);
	      scope = scope.parent;
	    } while (scope);

	    return ids;
	  };

	  Scope.prototype.getAllBindingsOfKind = function getAllBindingsOfKind() {
	    var ids = (0, _create2.default)(null);

	    for (var _iterator19 = arguments, _isArray19 = Array.isArray(_iterator19), _i19 = 0, _iterator19 = _isArray19 ? _iterator19 : (0, _getIterator3.default)(_iterator19);;) {
	      var _ref19;

	      if (_isArray19) {
	        if (_i19 >= _iterator19.length) break;
	        _ref19 = _iterator19[_i19++];
	      } else {
	        _i19 = _iterator19.next();
	        if (_i19.done) break;
	        _ref19 = _i19.value;
	      }

	      var kind = _ref19;

	      var scope = this;
	      do {
	        for (var name in scope.bindings) {
	          var binding = scope.bindings[name];
	          if (binding.kind === kind) ids[name] = binding;
	        }
	        scope = scope.parent;
	      } while (scope);
	    }

	    return ids;
	  };

	  Scope.prototype.bindingIdentifierEquals = function bindingIdentifierEquals(name, node) {
	    return this.getBindingIdentifier(name) === node;
	  };

	  Scope.prototype.warnOnFlowBinding = function warnOnFlowBinding(binding) {
	    if (_crawlCallsCount === 0 && binding && binding.path.isFlow()) {
	      console.warn("\n        You or one of the Babel plugins you are using are using Flow declarations as bindings.\n        Support for this will be removed in version 7. To find out the caller, grep for this\n        message and change it to a `console.trace()`.\n      ");
	    }
	    return binding;
	  };

	  Scope.prototype.getBinding = function getBinding(name) {
	    var scope = this;

	    do {
	      var binding = scope.getOwnBinding(name);
	      if (binding) return this.warnOnFlowBinding(binding);
	    } while (scope = scope.parent);
	  };

	  Scope.prototype.getOwnBinding = function getOwnBinding(name) {
	    return this.warnOnFlowBinding(this.bindings[name]);
	  };

	  Scope.prototype.getBindingIdentifier = function getBindingIdentifier(name) {
	    var info = this.getBinding(name);
	    return info && info.identifier;
	  };

	  Scope.prototype.getOwnBindingIdentifier = function getOwnBindingIdentifier(name) {
	    var binding = this.bindings[name];
	    return binding && binding.identifier;
	  };

	  Scope.prototype.hasOwnBinding = function hasOwnBinding(name) {
	    return !!this.getOwnBinding(name);
	  };

	  Scope.prototype.hasBinding = function hasBinding(name, noGlobals) {
	    if (!name) return false;
	    if (this.hasOwnBinding(name)) return true;
	    if (this.parentHasBinding(name, noGlobals)) return true;
	    if (this.hasUid(name)) return true;
	    if (!noGlobals && (0, _includes2.default)(Scope.globals, name)) return true;
	    if (!noGlobals && (0, _includes2.default)(Scope.contextVariables, name)) return true;
	    return false;
	  };

	  Scope.prototype.parentHasBinding = function parentHasBinding(name, noGlobals) {
	    return this.parent && this.parent.hasBinding(name, noGlobals);
	  };

	  Scope.prototype.moveBindingTo = function moveBindingTo(name, scope) {
	    var info = this.getBinding(name);
	    if (info) {
	      info.scope.removeOwnBinding(name);
	      info.scope = scope;
	      scope.bindings[name] = info;
	    }
	  };

	  Scope.prototype.removeOwnBinding = function removeOwnBinding(name) {
	    delete this.bindings[name];
	  };

	  Scope.prototype.removeBinding = function removeBinding(name) {
	    var info = this.getBinding(name);
	    if (info) {
	      info.scope.removeOwnBinding(name);
	    }

	    var scope = this;
	    do {
	      if (scope.uids[name]) {
	        scope.uids[name] = false;
	      }
	    } while (scope = scope.parent);
	  };

	  return Scope;
	}();

	Scope.globals = (0, _keys2.default)(_globals2.default.builtin);
	Scope.contextVariables = ["arguments", "undefined", "Infinity", "NaN"];
	exports.default = Scope;
	module.exports = exports["default"];

/***/ },
/* 584 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(585), __esModule: true };

/***/ },
/* 585 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(527);
	__webpack_require__(485);
	__webpack_require__(439);
	__webpack_require__(586);
	__webpack_require__(598);
	module.exports = __webpack_require__(452).Map;

/***/ },
/* 586 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(587);

	// 23.1 Map Objects
	module.exports = __webpack_require__(594)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 587 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(456).f
	  , create      = __webpack_require__(468)
	  , redefineAll = __webpack_require__(588)
	  , ctx         = __webpack_require__(453)
	  , anInstance  = __webpack_require__(589)
	  , defined     = __webpack_require__(447)
	  , forOf       = __webpack_require__(590)
	  , $iterDefine = __webpack_require__(448)
	  , step        = __webpack_require__(442)
	  , setSpecies  = __webpack_require__(593)
	  , DESCRIPTORS = __webpack_require__(460)
	  , fastKey     = __webpack_require__(497).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(455);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 589 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 590 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(453)
	  , call        = __webpack_require__(591)
	  , isArrayIter = __webpack_require__(592)
	  , anObject    = __webpack_require__(457)
	  , toLength    = __webpack_require__(473)
	  , getIterFn   = __webpack_require__(488)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 591 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(457);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 592 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(443)
	  , ITERATOR   = __webpack_require__(482)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(451)
	  , core        = __webpack_require__(452)
	  , dP          = __webpack_require__(456)
	  , DESCRIPTORS = __webpack_require__(460)
	  , SPECIES     = __webpack_require__(482)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 594 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(451)
	  , $export        = __webpack_require__(450)
	  , meta           = __webpack_require__(497)
	  , fails          = __webpack_require__(461)
	  , hide           = __webpack_require__(455)
	  , redefineAll    = __webpack_require__(588)
	  , forOf          = __webpack_require__(590)
	  , anInstance     = __webpack_require__(589)
	  , isObject       = __webpack_require__(458)
	  , setToStringTag = __webpack_require__(481)
	  , dP             = __webpack_require__(456).f
	  , each           = __webpack_require__(595)(0)
	  , DESCRIPTORS    = __webpack_require__(460);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 595 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(453)
	  , IObject  = __webpack_require__(445)
	  , toObject = __webpack_require__(484)
	  , toLength = __webpack_require__(473)
	  , asc      = __webpack_require__(596);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 596 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(597);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 597 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(458)
	  , isArray  = __webpack_require__(504)
	  , SPECIES  = __webpack_require__(482)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 598 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(450);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(599)('Map')});

/***/ },
/* 599 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(489)
	  , from    = __webpack_require__(600);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 600 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(590);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 601 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(564),
	    isArrayLike = __webpack_require__(220),
	    isString = __webpack_require__(602),
	    toInteger = __webpack_require__(302),
	    values = __webpack_require__(603);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Checks if `value` is in `collection`. If `collection` is a string, it's
	 * checked for a substring of `value`, otherwise
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * is used for equality comparisons. If `fromIndex` is negative, it's used as
	 * the offset from the end of `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	 * @returns {boolean} Returns `true` if `value` is found, else `false`.
	 * @example
	 *
	 * _.includes([1, 2, 3], 1);
	 * // => true
	 *
	 * _.includes([1, 2, 3], 1, 2);
	 * // => false
	 *
	 * _.includes({ 'a': 1, 'b': 2 }, 1);
	 * // => true
	 *
	 * _.includes('abcd', 'bc');
	 * // => true
	 */
	function includes(collection, value, fromIndex, guard) {
	  collection = isArrayLike(collection) ? collection : values(collection);
	  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

	  var length = collection.length;
	  if (fromIndex < 0) {
	    fromIndex = nativeMax(length + fromIndex, 0);
	  }
	  return isString(collection)
	    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
	    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
	}

	module.exports = includes;


/***/ },
/* 602 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(6),
	    isArray = __webpack_require__(70),
	    isObjectLike = __webpack_require__(14);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 603 */
/***/ function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(604),
	    keys = __webpack_require__(205);

	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object == null ? [] : baseValues(object, keys(object));
	}

	module.exports = values;


/***/ },
/* 604 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(110);

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return arrayMap(props, function(key) {
	    return object[key];
	  });
	}

	module.exports = baseValues;


/***/ },
/* 605 */
/***/ function(module, exports, __webpack_require__) {

	var baseRepeat = __webpack_require__(606),
	    isIterateeCall = __webpack_require__(418),
	    toInteger = __webpack_require__(302),
	    toString = __webpack_require__(108);

	/**
	 * Repeats the given string `n` times.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to repeat.
	 * @param {number} [n=1] The number of times to repeat the string.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {string} Returns the repeated string.
	 * @example
	 *
	 * _.repeat('*', 3);
	 * // => '***'
	 *
	 * _.repeat('abc', 2);
	 * // => 'abcabc'
	 *
	 * _.repeat('abc', 0);
	 * // => ''
	 */
	function repeat(string, n, guard) {
	  if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
	    n = 1;
	  } else {
	    n = toInteger(n);
	  }
	  return baseRepeat(toString(string), n);
	}

	module.exports = repeat;


/***/ },
/* 606 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeFloor = Math.floor;

	/**
	 * The base implementation of `_.repeat` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {string} string The string to repeat.
	 * @param {number} n The number of times to repeat the string.
	 * @returns {string} Returns the repeated string.
	 */
	function baseRepeat(string, n) {
	  var result = '';
	  if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
	    return result;
	  }
	  // Leverage the exponentiation by squaring algorithm for a faster repeat.
	  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	  do {
	    if (n % 2) {
	      result += string;
	    }
	    n = nativeFloor(n / 2);
	    if (n) {
	      string += string;
	    }
	  } while (n);

	  return result;
	}

	module.exports = baseRepeat;


/***/ },
/* 607 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(491);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _binding = __webpack_require__(608);

	var _binding2 = _interopRequireDefault(_binding);

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var renameVisitor = {
	  ReferencedIdentifier: function ReferencedIdentifier(_ref, state) {
	    var node = _ref.node;

	    if (node.name === state.oldName) {
	      node.name = state.newName;
	    }
	  },
	  Scope: function Scope(path, state) {
	    if (!path.scope.bindingIdentifierEquals(state.oldName, state.binding.identifier)) {
	      path.skip();
	    }
	  },
	  "AssignmentExpression|Declaration": function AssignmentExpressionDeclaration(path, state) {
	    var ids = path.getOuterBindingIdentifiers();

	    for (var name in ids) {
	      if (name === state.oldName) ids[name].name = state.newName;
	    }
	  }
	};

	var Renamer = function () {
	  function Renamer(binding, oldName, newName) {
	    (0, _classCallCheck3.default)(this, Renamer);

	    this.newName = newName;
	    this.oldName = oldName;
	    this.binding = binding;
	  }

	  Renamer.prototype.maybeConvertFromExportDeclaration = function maybeConvertFromExportDeclaration(parentDeclar) {
	    var exportDeclar = parentDeclar.parentPath.isExportDeclaration() && parentDeclar.parentPath;
	    if (!exportDeclar) return;

	    var isDefault = exportDeclar.isExportDefaultDeclaration();

	    if (isDefault && (parentDeclar.isFunctionDeclaration() || parentDeclar.isClassDeclaration()) && !parentDeclar.node.id) {
	      parentDeclar.node.id = parentDeclar.scope.generateUidIdentifier("default");
	    }

	    var bindingIdentifiers = parentDeclar.getOuterBindingIdentifiers();
	    var specifiers = [];

	    for (var name in bindingIdentifiers) {
	      var localName = name === this.oldName ? this.newName : name;
	      var exportedName = isDefault ? "default" : name;
	      specifiers.push(t.exportSpecifier(t.identifier(localName), t.identifier(exportedName)));
	    }

	    if (specifiers.length) {
	      var aliasDeclar = t.exportNamedDeclaration(null, specifiers);

	      if (parentDeclar.isFunctionDeclaration()) {
	        aliasDeclar._blockHoist = 3;
	      }

	      exportDeclar.insertAfter(aliasDeclar);
	      exportDeclar.replaceWith(parentDeclar.node);
	    }
	  };

	  Renamer.prototype.maybeConvertFromClassFunctionDeclaration = function maybeConvertFromClassFunctionDeclaration(path) {
	    return;

	    if (!path.isFunctionDeclaration() && !path.isClassDeclaration()) return;
	    if (this.binding.kind !== "hoisted") return;

	    path.node.id = t.identifier(this.oldName);
	    path.node._blockHoist = 3;

	    path.replaceWith(t.variableDeclaration("let", [t.variableDeclarator(t.identifier(this.newName), t.toExpression(path.node))]));
	  };

	  Renamer.prototype.maybeConvertFromClassFunctionExpression = function maybeConvertFromClassFunctionExpression(path) {
	    return;

	    if (!path.isFunctionExpression() && !path.isClassExpression()) return;
	    if (this.binding.kind !== "local") return;

	    path.node.id = t.identifier(this.oldName);

	    this.binding.scope.parent.push({
	      id: t.identifier(this.newName)
	    });

	    path.replaceWith(t.assignmentExpression("=", t.identifier(this.newName), path.node));
	  };

	  Renamer.prototype.rename = function rename(block) {
	    var binding = this.binding,
	        oldName = this.oldName,
	        newName = this.newName;
	    var scope = binding.scope,
	        path = binding.path;


	    var parentDeclar = path.find(function (path) {
	      return path.isDeclaration() || path.isFunctionExpression();
	    });
	    if (parentDeclar) {
	      this.maybeConvertFromExportDeclaration(parentDeclar);
	    }

	    scope.traverse(block || scope.block, renameVisitor, this);

	    if (!block) {
	      scope.removeOwnBinding(oldName);
	      scope.bindings[newName] = binding;
	      this.binding.identifier.name = newName;
	    }

	    if (binding.type === "hoisted") {}

	    if (parentDeclar) {
	      this.maybeConvertFromClassFunctionDeclaration(parentDeclar);
	      this.maybeConvertFromClassFunctionExpression(parentDeclar);
	    }
	  };

	  return Renamer;
	}();

	exports.default = Renamer;
	module.exports = exports["default"];

/***/ },
/* 608 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(491);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Binding = function () {
	  function Binding(_ref) {
	    var existing = _ref.existing,
	        identifier = _ref.identifier,
	        scope = _ref.scope,
	        path = _ref.path,
	        kind = _ref.kind;
	    (0, _classCallCheck3.default)(this, Binding);

	    this.identifier = identifier;
	    this.scope = scope;
	    this.path = path;
	    this.kind = kind;

	    this.constantViolations = [];
	    this.constant = true;

	    this.referencePaths = [];
	    this.referenced = false;
	    this.references = 0;

	    this.clearValue();

	    if (existing) {
	      this.constantViolations = [].concat(existing.path, existing.constantViolations, this.constantViolations);
	    }
	  }

	  Binding.prototype.deoptValue = function deoptValue() {
	    this.clearValue();
	    this.hasDeoptedValue = true;
	  };

	  Binding.prototype.setValue = function setValue(value) {
	    if (this.hasDeoptedValue) return;
	    this.hasValue = true;
	    this.value = value;
	  };

	  Binding.prototype.clearValue = function clearValue() {
	    this.hasDeoptedValue = false;
	    this.hasValue = false;
	    this.value = null;
	  };

	  Binding.prototype.reassign = function reassign(path) {
	    this.constant = false;
	    if (this.constantViolations.indexOf(path) !== -1) {
	      return;
	    }
	    this.constantViolations.push(path);
	  };

	  Binding.prototype.reference = function reference(path) {
	    if (this.referencePaths.indexOf(path) !== -1) {
	      return;
	    }
	    this.referenced = true;
	    this.references++;
	    this.referencePaths.push(path);
	  };

	  Binding.prototype.dereference = function dereference() {
	    this.references--;
	    this.referenced = !!this.references;
	  };

	  return Binding;
	}();

	exports.default = Binding;
	module.exports = exports["default"];

/***/ },
/* 609 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(413),
	    assignInWith = __webpack_require__(610),
	    baseRest = __webpack_require__(411),
	    customDefaultsAssignIn = __webpack_require__(611);

	/**
	 * Assigns own and inherited enumerable string keyed properties of source
	 * objects to the destination object for all destination properties that
	 * resolve to `undefined`. Source objects are applied from left to right.
	 * Once a property is set, additional values of the same property are ignored.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.defaultsDeep
	 * @example
	 *
	 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var defaults = baseRest(function(args) {
	  args.push(undefined, customDefaultsAssignIn);
	  return apply(assignInWith, undefined, args);
	});

	module.exports = defaults;


/***/ },
/* 610 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(406),
	    createAssigner = __webpack_require__(410),
	    keysIn = __webpack_require__(407);

	/**
	 * This method is like `_.assignIn` except that it accepts `customizer`
	 * which is invoked to produce the assigned values. If `customizer` returns
	 * `undefined`, assignment is handled by the method instead. The `customizer`
	 * is invoked with five arguments: (objValue, srcValue, key, object, source).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extendWith
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} sources The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 * @see _.assignWith
	 * @example
	 *
	 * function customizer(objValue, srcValue) {
	 *   return _.isUndefined(objValue) ? srcValue : objValue;
	 * }
	 *
	 * var defaults = _.partialRight(_.assignInWith, customizer);
	 *
	 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
	  copyObject(source, keysIn(source), object, customizer);
	});

	module.exports = assignInWith;


/***/ },
/* 611 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(97);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
	 * of source objects to the destination object for all destination properties
	 * that resolve to `undefined`.
	 *
	 * @private
	 * @param {*} objValue The destination value.
	 * @param {*} srcValue The source value.
	 * @param {string} key The key of the property to assign.
	 * @param {Object} object The parent object of `objValue`.
	 * @returns {*} Returns the value to assign.
	 */
	function customDefaultsAssignIn(objValue, srcValue, key, object) {
	  if (objValue === undefined ||
	      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	    return srcValue;
	  }
	  return objValue;
	}

	module.exports = customDefaultsAssignIn;


/***/ },
/* 612 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.MESSAGES = undefined;

	var _stringify = __webpack_require__(512);

	var _stringify2 = _interopRequireDefault(_stringify);

	exports.get = get;
	exports.parseArgs = parseArgs;

	var _util = __webpack_require__(613);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MESSAGES = exports.MESSAGES = {
	  tailCallReassignmentDeopt: "Function reference has been reassigned, so it will probably be dereferenced, therefore we can't optimise this with confidence",
	  classesIllegalBareSuper: "Illegal use of bare super",
	  classesIllegalSuperCall: "Direct super call is illegal in non-constructor, use super.$1() instead",
	  scopeDuplicateDeclaration: "Duplicate declaration $1",
	  settersNoRest: "Setters aren't allowed to have a rest",
	  noAssignmentsInForHead: "No assignments allowed in for-in/of head",
	  expectedMemberExpressionOrIdentifier: "Expected type MemberExpression or Identifier",
	  invalidParentForThisNode: "We don't know how to handle this node within the current parent - please open an issue",
	  readOnly: "$1 is read-only",
	  unknownForHead: "Unknown node type $1 in ForStatement",
	  didYouMean: "Did you mean $1?",
	  codeGeneratorDeopt: "Note: The code generator has deoptimised the styling of $1 as it exceeds the max of $2.",
	  missingTemplatesDirectory: "no templates directory - this is most likely the result of a broken `npm publish`. Please report to https://github.com/babel/babel/issues",
	  unsupportedOutputType: "Unsupported output type $1",
	  illegalMethodName: "Illegal method name $1",
	  lostTrackNodePath: "We lost track of this node's position, likely because the AST was directly manipulated",

	  modulesIllegalExportName: "Illegal export $1",
	  modulesDuplicateDeclarations: "Duplicate module declarations with the same source but in different scopes",

	  undeclaredVariable: "Reference to undeclared variable $1",
	  undeclaredVariableType: "Referencing a type alias outside of a type annotation",
	  undeclaredVariableSuggestion: "Reference to undeclared variable $1 - did you mean $2?",

	  traverseNeedsParent: "You must pass a scope and parentPath unless traversing a Program/File. Instead of that you tried to traverse a $1 node without passing scope and parentPath.",
	  traverseVerifyRootFunction: "You passed `traverse()` a function when it expected a visitor object, are you sure you didn't mean `{ enter: Function }`?",
	  traverseVerifyVisitorProperty: "You passed `traverse()` a visitor object with the property $1 that has the invalid property $2",
	  traverseVerifyNodeType: "You gave us a visitor for the node type $1 but it's not a valid type",

	  pluginNotObject: "Plugin $2 specified in $1 was expected to return an object when invoked but returned $3",
	  pluginNotFunction: "Plugin $2 specified in $1 was expected to return a function but returned $3",
	  pluginUnknown: "Unknown plugin $1 specified in $2 at $3, attempted to resolve relative to $4",
	  pluginInvalidProperty: "Plugin $2 specified in $1 provided an invalid property of $3"
	};

	function get(key) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  var msg = MESSAGES[key];
	  if (!msg) throw new ReferenceError("Unknown message " + (0, _stringify2.default)(key));

	  args = parseArgs(args);

	  return msg.replace(/\$(\d+)/g, function (str, i) {
	    return args[i - 1];
	  });
	}

	function parseArgs(args) {
	  return args.map(function (val) {
	    if (val != null && val.inspect) {
	      return val.inspect();
	    } else {
	      try {
	        return (0, _stringify2.default)(val) || val + "";
	      } catch (e) {
	        return util.inspect(val);
	      }
	    }
	  });
	}

/***/ },
/* 613 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = ({"NODE_ENV":"production","TARGET":"firefox-panel"}).NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(614);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(615);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(120)))

/***/ },
/* 614 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 615 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 616 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(617);


/***/ },
/* 617 */
/***/ function(module, exports) {

	module.exports = {"builtin":{"Array":false,"ArrayBuffer":false,"Boolean":false,"constructor":false,"DataView":false,"Date":false,"decodeURI":false,"decodeURIComponent":false,"encodeURI":false,"encodeURIComponent":false,"Error":false,"escape":false,"eval":false,"EvalError":false,"Float32Array":false,"Float64Array":false,"Function":false,"hasOwnProperty":false,"Infinity":false,"Int16Array":false,"Int32Array":false,"Int8Array":false,"isFinite":false,"isNaN":false,"isPrototypeOf":false,"JSON":false,"Map":false,"Math":false,"NaN":false,"Number":false,"Object":false,"parseFloat":false,"parseInt":false,"Promise":false,"propertyIsEnumerable":false,"Proxy":false,"RangeError":false,"ReferenceError":false,"Reflect":false,"RegExp":false,"Set":false,"String":false,"Symbol":false,"SyntaxError":false,"System":false,"toLocaleString":false,"toString":false,"TypeError":false,"Uint16Array":false,"Uint32Array":false,"Uint8Array":false,"Uint8ClampedArray":false,"undefined":false,"unescape":false,"URIError":false,"valueOf":false,"WeakMap":false,"WeakSet":false},"es5":{"Array":false,"Boolean":false,"constructor":false,"Date":false,"decodeURI":false,"decodeURIComponent":false,"encodeURI":false,"encodeURIComponent":false,"Error":false,"escape":false,"eval":false,"EvalError":false,"Function":false,"hasOwnProperty":false,"Infinity":false,"isFinite":false,"isNaN":false,"isPrototypeOf":false,"JSON":false,"Math":false,"NaN":false,"Number":false,"Object":false,"parseFloat":false,"parseInt":false,"propertyIsEnumerable":false,"RangeError":false,"ReferenceError":false,"RegExp":false,"String":false,"SyntaxError":false,"toLocaleString":false,"toString":false,"TypeError":false,"undefined":false,"unescape":false,"URIError":false,"valueOf":false},"es6":{"Array":false,"ArrayBuffer":false,"Boolean":false,"constructor":false,"DataView":false,"Date":false,"decodeURI":false,"decodeURIComponent":false,"encodeURI":false,"encodeURIComponent":false,"Error":false,"escape":false,"eval":false,"EvalError":false,"Float32Array":false,"Float64Array":false,"Function":false,"hasOwnProperty":false,"Infinity":false,"Int16Array":false,"Int32Array":false,"Int8Array":false,"isFinite":false,"isNaN":false,"isPrototypeOf":false,"JSON":false,"Map":false,"Math":false,"NaN":false,"Number":false,"Object":false,"parseFloat":false,"parseInt":false,"Promise":false,"propertyIsEnumerable":false,"Proxy":false,"RangeError":false,"ReferenceError":false,"Reflect":false,"RegExp":false,"Set":false,"String":false,"Symbol":false,"SyntaxError":false,"System":false,"toLocaleString":false,"toString":false,"TypeError":false,"Uint16Array":false,"Uint32Array":false,"Uint8Array":false,"Uint8ClampedArray":false,"undefined":false,"unescape":false,"URIError":false,"valueOf":false,"WeakMap":false,"WeakSet":false},"browser":{"addEventListener":false,"alert":false,"AnalyserNode":false,"Animation":false,"AnimationEffectReadOnly":false,"AnimationEffectTiming":false,"AnimationEffectTimingReadOnly":false,"AnimationEvent":false,"AnimationPlaybackEvent":false,"AnimationTimeline":false,"applicationCache":false,"ApplicationCache":false,"ApplicationCacheErrorEvent":false,"atob":false,"Attr":false,"Audio":false,"AudioBuffer":false,"AudioBufferSourceNode":false,"AudioContext":false,"AudioDestinationNode":false,"AudioListener":false,"AudioNode":false,"AudioParam":false,"AudioProcessingEvent":false,"AutocompleteErrorEvent":false,"BarProp":false,"BatteryManager":false,"BeforeUnloadEvent":false,"BiquadFilterNode":false,"Blob":false,"blur":false,"btoa":false,"Cache":false,"caches":false,"CacheStorage":false,"cancelAnimationFrame":false,"cancelIdleCallback":false,"CanvasGradient":false,"CanvasPattern":false,"CanvasRenderingContext2D":false,"CDATASection":false,"ChannelMergerNode":false,"ChannelSplitterNode":false,"CharacterData":false,"clearInterval":false,"clearTimeout":false,"clientInformation":false,"ClientRect":false,"ClientRectList":false,"ClipboardEvent":false,"close":false,"closed":false,"CloseEvent":false,"Comment":false,"CompositionEvent":false,"confirm":false,"console":false,"ConvolverNode":false,"createImageBitmap":false,"Credential":false,"CredentialsContainer":false,"crypto":false,"Crypto":false,"CryptoKey":false,"CSS":false,"CSSAnimation":false,"CSSFontFaceRule":false,"CSSImportRule":false,"CSSKeyframeRule":false,"CSSKeyframesRule":false,"CSSMediaRule":false,"CSSPageRule":false,"CSSRule":false,"CSSRuleList":false,"CSSStyleDeclaration":false,"CSSStyleRule":false,"CSSStyleSheet":false,"CSSSupportsRule":false,"CSSTransition":false,"CSSUnknownRule":false,"CSSViewportRule":false,"customElements":false,"CustomEvent":false,"DataTransfer":false,"DataTransferItem":false,"DataTransferItemList":false,"Debug":false,"defaultStatus":false,"defaultstatus":false,"DelayNode":false,"DeviceMotionEvent":false,"DeviceOrientationEvent":false,"devicePixelRatio":false,"dispatchEvent":false,"document":false,"Document":false,"DocumentFragment":false,"DocumentTimeline":false,"DocumentType":false,"DOMError":false,"DOMException":false,"DOMImplementation":false,"DOMParser":false,"DOMSettableTokenList":false,"DOMStringList":false,"DOMStringMap":false,"DOMTokenList":false,"DragEvent":false,"DynamicsCompressorNode":false,"Element":false,"ElementTimeControl":false,"ErrorEvent":false,"event":false,"Event":false,"EventSource":false,"EventTarget":false,"external":false,"FederatedCredential":false,"fetch":false,"File":false,"FileError":false,"FileList":false,"FileReader":false,"find":false,"focus":false,"FocusEvent":false,"FontFace":false,"FormData":false,"frameElement":false,"frames":false,"GainNode":false,"Gamepad":false,"GamepadButton":false,"GamepadEvent":false,"getComputedStyle":false,"getSelection":false,"HashChangeEvent":false,"Headers":false,"history":false,"History":false,"HTMLAllCollection":false,"HTMLAnchorElement":false,"HTMLAppletElement":false,"HTMLAreaElement":false,"HTMLAudioElement":false,"HTMLBaseElement":false,"HTMLBlockquoteElement":false,"HTMLBodyElement":false,"HTMLBRElement":false,"HTMLButtonElement":false,"HTMLCanvasElement":false,"HTMLCollection":false,"HTMLContentElement":false,"HTMLDataListElement":false,"HTMLDetailsElement":false,"HTMLDialogElement":false,"HTMLDirectoryElement":false,"HTMLDivElement":false,"HTMLDListElement":false,"HTMLDocument":false,"HTMLElement":false,"HTMLEmbedElement":false,"HTMLFieldSetElement":false,"HTMLFontElement":false,"HTMLFormControlsCollection":false,"HTMLFormElement":false,"HTMLFrameElement":false,"HTMLFrameSetElement":false,"HTMLHeadElement":false,"HTMLHeadingElement":false,"HTMLHRElement":false,"HTMLHtmlElement":false,"HTMLIFrameElement":false,"HTMLImageElement":false,"HTMLInputElement":false,"HTMLIsIndexElement":false,"HTMLKeygenElement":false,"HTMLLabelElement":false,"HTMLLayerElement":false,"HTMLLegendElement":false,"HTMLLIElement":false,"HTMLLinkElement":false,"HTMLMapElement":false,"HTMLMarqueeElement":false,"HTMLMediaElement":false,"HTMLMenuElement":false,"HTMLMetaElement":false,"HTMLMeterElement":false,"HTMLModElement":false,"HTMLObjectElement":false,"HTMLOListElement":false,"HTMLOptGroupElement":false,"HTMLOptionElement":false,"HTMLOptionsCollection":false,"HTMLOutputElement":false,"HTMLParagraphElement":false,"HTMLParamElement":false,"HTMLPictureElement":false,"HTMLPreElement":false,"HTMLProgressElement":false,"HTMLQuoteElement":false,"HTMLScriptElement":false,"HTMLSelectElement":false,"HTMLShadowElement":false,"HTMLSourceElement":false,"HTMLSpanElement":false,"HTMLStyleElement":false,"HTMLTableCaptionElement":false,"HTMLTableCellElement":false,"HTMLTableColElement":false,"HTMLTableElement":false,"HTMLTableRowElement":false,"HTMLTableSectionElement":false,"HTMLTemplateElement":false,"HTMLTextAreaElement":false,"HTMLTitleElement":false,"HTMLTrackElement":false,"HTMLUListElement":false,"HTMLUnknownElement":false,"HTMLVideoElement":false,"IDBCursor":false,"IDBCursorWithValue":false,"IDBDatabase":false,"IDBEnvironment":false,"IDBFactory":false,"IDBIndex":false,"IDBKeyRange":false,"IDBObjectStore":false,"IDBOpenDBRequest":false,"IDBRequest":false,"IDBTransaction":false,"IDBVersionChangeEvent":false,"Image":false,"ImageBitmap":false,"ImageData":false,"indexedDB":false,"innerHeight":false,"innerWidth":false,"InputEvent":false,"InputMethodContext":false,"IntersectionObserver":false,"IntersectionObserverEntry":false,"Intl":false,"KeyboardEvent":false,"KeyframeEffect":false,"KeyframeEffectReadOnly":false,"length":false,"localStorage":false,"location":false,"Location":false,"locationbar":false,"matchMedia":false,"MediaElementAudioSourceNode":false,"MediaEncryptedEvent":false,"MediaError":false,"MediaKeyError":false,"MediaKeyEvent":false,"MediaKeyMessageEvent":false,"MediaKeys":false,"MediaKeySession":false,"MediaKeyStatusMap":false,"MediaKeySystemAccess":false,"MediaList":false,"MediaQueryList":false,"MediaQueryListEvent":false,"MediaSource":false,"MediaRecorder":false,"MediaStream":false,"MediaStreamAudioDestinationNode":false,"MediaStreamAudioSourceNode":false,"MediaStreamEvent":false,"MediaStreamTrack":false,"menubar":false,"MessageChannel":false,"MessageEvent":false,"MessagePort":false,"MIDIAccess":false,"MIDIConnectionEvent":false,"MIDIInput":false,"MIDIInputMap":false,"MIDIMessageEvent":false,"MIDIOutput":false,"MIDIOutputMap":false,"MIDIPort":false,"MimeType":false,"MimeTypeArray":false,"MouseEvent":false,"moveBy":false,"moveTo":false,"MutationEvent":false,"MutationObserver":false,"MutationRecord":false,"name":false,"NamedNodeMap":false,"navigator":false,"Navigator":false,"Node":false,"NodeFilter":false,"NodeIterator":false,"NodeList":false,"Notification":false,"OfflineAudioCompletionEvent":false,"OfflineAudioContext":false,"offscreenBuffering":false,"onbeforeunload":true,"onblur":true,"onerror":true,"onfocus":true,"onload":true,"onresize":true,"onunload":true,"open":false,"openDatabase":false,"opener":false,"opera":false,"Option":false,"OscillatorNode":false,"outerHeight":false,"outerWidth":false,"PageTransitionEvent":false,"pageXOffset":false,"pageYOffset":false,"parent":false,"PasswordCredential":false,"Path2D":false,"performance":false,"Performance":false,"PerformanceEntry":false,"PerformanceMark":false,"PerformanceMeasure":false,"PerformanceNavigation":false,"PerformanceResourceTiming":false,"PerformanceTiming":false,"PeriodicWave":false,"Permissions":false,"PermissionStatus":false,"personalbar":false,"Plugin":false,"PluginArray":false,"PopStateEvent":false,"postMessage":false,"print":false,"ProcessingInstruction":false,"ProgressEvent":false,"PromiseRejectionEvent":false,"prompt":false,"PushManager":false,"PushSubscription":false,"RadioNodeList":false,"Range":false,"ReadableByteStream":false,"ReadableStream":false,"removeEventListener":false,"Request":false,"requestAnimationFrame":false,"requestIdleCallback":false,"resizeBy":false,"resizeTo":false,"Response":false,"RTCIceCandidate":false,"RTCSessionDescription":false,"RTCPeerConnection":false,"screen":false,"Screen":false,"screenLeft":false,"ScreenOrientation":false,"screenTop":false,"screenX":false,"screenY":false,"ScriptProcessorNode":false,"scroll":false,"scrollbars":false,"scrollBy":false,"scrollTo":false,"scrollX":false,"scrollY":false,"SecurityPolicyViolationEvent":false,"Selection":false,"self":false,"ServiceWorker":false,"ServiceWorkerContainer":false,"ServiceWorkerRegistration":false,"sessionStorage":false,"setInterval":false,"setTimeout":false,"ShadowRoot":false,"SharedKeyframeList":false,"SharedWorker":false,"showModalDialog":false,"SiteBoundCredential":false,"speechSynthesis":false,"SpeechSynthesisEvent":false,"SpeechSynthesisUtterance":false,"status":false,"statusbar":false,"stop":false,"Storage":false,"StorageEvent":false,"styleMedia":false,"StyleSheet":false,"StyleSheetList":false,"SubtleCrypto":false,"SVGAElement":false,"SVGAltGlyphDefElement":false,"SVGAltGlyphElement":false,"SVGAltGlyphItemElement":false,"SVGAngle":false,"SVGAnimateColorElement":false,"SVGAnimatedAngle":false,"SVGAnimatedBoolean":false,"SVGAnimatedEnumeration":false,"SVGAnimatedInteger":false,"SVGAnimatedLength":false,"SVGAnimatedLengthList":false,"SVGAnimatedNumber":false,"SVGAnimatedNumberList":false,"SVGAnimatedPathData":false,"SVGAnimatedPoints":false,"SVGAnimatedPreserveAspectRatio":false,"SVGAnimatedRect":false,"SVGAnimatedString":false,"SVGAnimatedTransformList":false,"SVGAnimateElement":false,"SVGAnimateMotionElement":false,"SVGAnimateTransformElement":false,"SVGAnimationElement":false,"SVGCircleElement":false,"SVGClipPathElement":false,"SVGColor":false,"SVGColorProfileElement":false,"SVGColorProfileRule":false,"SVGComponentTransferFunctionElement":false,"SVGCSSRule":false,"SVGCursorElement":false,"SVGDefsElement":false,"SVGDescElement":false,"SVGDiscardElement":false,"SVGDocument":false,"SVGElement":false,"SVGElementInstance":false,"SVGElementInstanceList":false,"SVGEllipseElement":false,"SVGEvent":false,"SVGExternalResourcesRequired":false,"SVGFEBlendElement":false,"SVGFEColorMatrixElement":false,"SVGFEComponentTransferElement":false,"SVGFECompositeElement":false,"SVGFEConvolveMatrixElement":false,"SVGFEDiffuseLightingElement":false,"SVGFEDisplacementMapElement":false,"SVGFEDistantLightElement":false,"SVGFEDropShadowElement":false,"SVGFEFloodElement":false,"SVGFEFuncAElement":false,"SVGFEFuncBElement":false,"SVGFEFuncGElement":false,"SVGFEFuncRElement":false,"SVGFEGaussianBlurElement":false,"SVGFEImageElement":false,"SVGFEMergeElement":false,"SVGFEMergeNodeElement":false,"SVGFEMorphologyElement":false,"SVGFEOffsetElement":false,"SVGFEPointLightElement":false,"SVGFESpecularLightingElement":false,"SVGFESpotLightElement":false,"SVGFETileElement":false,"SVGFETurbulenceElement":false,"SVGFilterElement":false,"SVGFilterPrimitiveStandardAttributes":false,"SVGFitToViewBox":false,"SVGFontElement":false,"SVGFontFaceElement":false,"SVGFontFaceFormatElement":false,"SVGFontFaceNameElement":false,"SVGFontFaceSrcElement":false,"SVGFontFaceUriElement":false,"SVGForeignObjectElement":false,"SVGGElement":false,"SVGGeometryElement":false,"SVGGlyphElement":false,"SVGGlyphRefElement":false,"SVGGradientElement":false,"SVGGraphicsElement":false,"SVGHKernElement":false,"SVGICCColor":false,"SVGImageElement":false,"SVGLangSpace":false,"SVGLength":false,"SVGLengthList":false,"SVGLinearGradientElement":false,"SVGLineElement":false,"SVGLocatable":false,"SVGMarkerElement":false,"SVGMaskElement":false,"SVGMatrix":false,"SVGMetadataElement":false,"SVGMissingGlyphElement":false,"SVGMPathElement":false,"SVGNumber":false,"SVGNumberList":false,"SVGPaint":false,"SVGPathElement":false,"SVGPathSeg":false,"SVGPathSegArcAbs":false,"SVGPathSegArcRel":false,"SVGPathSegClosePath":false,"SVGPathSegCurvetoCubicAbs":false,"SVGPathSegCurvetoCubicRel":false,"SVGPathSegCurvetoCubicSmoothAbs":false,"SVGPathSegCurvetoCubicSmoothRel":false,"SVGPathSegCurvetoQuadraticAbs":false,"SVGPathSegCurvetoQuadraticRel":false,"SVGPathSegCurvetoQuadraticSmoothAbs":false,"SVGPathSegCurvetoQuadraticSmoothRel":false,"SVGPathSegLinetoAbs":false,"SVGPathSegLinetoHorizontalAbs":false,"SVGPathSegLinetoHorizontalRel":false,"SVGPathSegLinetoRel":false,"SVGPathSegLinetoVerticalAbs":false,"SVGPathSegLinetoVerticalRel":false,"SVGPathSegList":false,"SVGPathSegMovetoAbs":false,"SVGPathSegMovetoRel":false,"SVGPatternElement":false,"SVGPoint":false,"SVGPointList":false,"SVGPolygonElement":false,"SVGPolylineElement":false,"SVGPreserveAspectRatio":false,"SVGRadialGradientElement":false,"SVGRect":false,"SVGRectElement":false,"SVGRenderingIntent":false,"SVGScriptElement":false,"SVGSetElement":false,"SVGStopElement":false,"SVGStringList":false,"SVGStylable":false,"SVGStyleElement":false,"SVGSVGElement":false,"SVGSwitchElement":false,"SVGSymbolElement":false,"SVGTests":false,"SVGTextContentElement":false,"SVGTextElement":false,"SVGTextPathElement":false,"SVGTextPositioningElement":false,"SVGTitleElement":false,"SVGTransform":false,"SVGTransformable":false,"SVGTransformList":false,"SVGTRefElement":false,"SVGTSpanElement":false,"SVGUnitTypes":false,"SVGURIReference":false,"SVGUseElement":false,"SVGViewElement":false,"SVGViewSpec":false,"SVGVKernElement":false,"SVGZoomAndPan":false,"SVGZoomEvent":false,"Text":false,"TextDecoder":false,"TextEncoder":false,"TextEvent":false,"TextMetrics":false,"TextTrack":false,"TextTrackCue":false,"TextTrackCueList":false,"TextTrackList":false,"TimeEvent":false,"TimeRanges":false,"toolbar":false,"top":false,"Touch":false,"TouchEvent":false,"TouchList":false,"TrackEvent":false,"TransitionEvent":false,"TreeWalker":false,"UIEvent":false,"URL":false,"URLSearchParams":false,"ValidityState":false,"VTTCue":false,"WaveShaperNode":false,"WebGLActiveInfo":false,"WebGLBuffer":false,"WebGLContextEvent":false,"WebGLFramebuffer":false,"WebGLProgram":false,"WebGLRenderbuffer":false,"WebGLRenderingContext":false,"WebGLShader":false,"WebGLShaderPrecisionFormat":false,"WebGLTexture":false,"WebGLUniformLocation":false,"WebSocket":false,"WheelEvent":false,"window":false,"Window":false,"Worker":false,"XDomainRequest":false,"XMLDocument":false,"XMLHttpRequest":false,"XMLHttpRequestEventTarget":false,"XMLHttpRequestProgressEvent":false,"XMLHttpRequestUpload":false,"XMLSerializer":false,"XPathEvaluator":false,"XPathException":false,"XPathExpression":false,"XPathNamespace":false,"XPathNSResolver":false,"XPathResult":false,"XSLTProcessor":false},"worker":{"applicationCache":false,"atob":false,"Blob":false,"BroadcastChannel":false,"btoa":false,"Cache":false,"caches":false,"clearInterval":false,"clearTimeout":false,"close":true,"console":false,"fetch":false,"FileReaderSync":false,"FormData":false,"Headers":false,"IDBCursor":false,"IDBCursorWithValue":false,"IDBDatabase":false,"IDBFactory":false,"IDBIndex":false,"IDBKeyRange":false,"IDBObjectStore":false,"IDBOpenDBRequest":false,"IDBRequest":false,"IDBTransaction":false,"IDBVersionChangeEvent":false,"ImageData":false,"importScripts":true,"indexedDB":false,"location":false,"MessageChannel":false,"MessagePort":false,"name":false,"navigator":false,"Notification":false,"onclose":true,"onconnect":true,"onerror":true,"onlanguagechange":true,"onmessage":true,"onoffline":true,"ononline":true,"onrejectionhandled":true,"onunhandledrejection":true,"performance":false,"Performance":false,"PerformanceEntry":false,"PerformanceMark":false,"PerformanceMeasure":false,"PerformanceNavigation":false,"PerformanceResourceTiming":false,"PerformanceTiming":false,"postMessage":true,"Promise":false,"Request":false,"Response":false,"self":true,"ServiceWorkerRegistration":false,"setInterval":false,"setTimeout":false,"TextDecoder":false,"TextEncoder":false,"URL":false,"URLSearchParams":false,"WebSocket":false,"Worker":false,"XMLHttpRequest":false},"node":{"__dirname":false,"__filename":false,"arguments":false,"Buffer":false,"clearImmediate":false,"clearInterval":false,"clearTimeout":false,"console":false,"exports":true,"GLOBAL":false,"global":false,"Intl":false,"module":false,"process":false,"require":false,"root":false,"setImmediate":false,"setInterval":false,"setTimeout":false},"commonjs":{"exports":true,"module":false,"require":false,"global":false},"amd":{"define":false,"require":false},"mocha":{"after":false,"afterEach":false,"before":false,"beforeEach":false,"context":false,"describe":false,"it":false,"mocha":false,"run":false,"setup":false,"specify":false,"suite":false,"suiteSetup":false,"suiteTeardown":false,"teardown":false,"test":false,"xcontext":false,"xdescribe":false,"xit":false,"xspecify":false},"jasmine":{"afterAll":false,"afterEach":false,"beforeAll":false,"beforeEach":false,"describe":false,"expect":false,"fail":false,"fdescribe":false,"fit":false,"it":false,"jasmine":false,"pending":false,"runs":false,"spyOn":false,"spyOnProperty":false,"waits":false,"waitsFor":false,"xdescribe":false,"xit":false},"jest":{"afterAll":false,"afterEach":false,"beforeAll":false,"beforeEach":false,"check":false,"describe":false,"expect":false,"gen":false,"it":false,"fdescribe":false,"fit":false,"jest":false,"pit":false,"require":false,"test":false,"xdescribe":false,"xit":false,"xtest":false},"qunit":{"asyncTest":false,"deepEqual":false,"equal":false,"expect":false,"module":false,"notDeepEqual":false,"notEqual":false,"notOk":false,"notPropEqual":false,"notStrictEqual":false,"ok":false,"propEqual":false,"QUnit":false,"raises":false,"start":false,"stop":false,"strictEqual":false,"test":false,"throws":false},"phantomjs":{"console":true,"exports":true,"phantom":true,"require":true,"WebPage":true},"couch":{"emit":false,"exports":false,"getRow":false,"log":false,"module":false,"provides":false,"require":false,"respond":false,"send":false,"start":false,"sum":false},"rhino":{"defineClass":false,"deserialize":false,"gc":false,"help":false,"importClass":false,"importPackage":false,"java":false,"load":false,"loadClass":false,"Packages":false,"print":false,"quit":false,"readFile":false,"readUrl":false,"runCommand":false,"seal":false,"serialize":false,"spawn":false,"sync":false,"toint32":false,"version":false},"nashorn":{"__DIR__":false,"__FILE__":false,"__LINE__":false,"com":false,"edu":false,"exit":false,"Java":false,"java":false,"javafx":false,"JavaImporter":false,"javax":false,"JSAdapter":false,"load":false,"loadWithNewGlobal":false,"org":false,"Packages":false,"print":false,"quit":false},"wsh":{"ActiveXObject":true,"Enumerator":true,"GetObject":true,"ScriptEngine":true,"ScriptEngineBuildVersion":true,"ScriptEngineMajorVersion":true,"ScriptEngineMinorVersion":true,"VBArray":true,"WScript":true,"WSH":true,"XDomainRequest":true},"jquery":{"$":false,"jQuery":false},"yui":{"Y":false,"YUI":false,"YUI_config":false},"shelljs":{"cat":false,"cd":false,"chmod":false,"config":false,"cp":false,"dirs":false,"echo":false,"env":false,"error":false,"exec":false,"exit":false,"find":false,"grep":false,"ls":false,"ln":false,"mkdir":false,"mv":false,"popd":false,"pushd":false,"pwd":false,"rm":false,"sed":false,"set":false,"target":false,"tempdir":false,"test":false,"touch":false,"which":false},"prototypejs":{"$":false,"$$":false,"$A":false,"$break":false,"$continue":false,"$F":false,"$H":false,"$R":false,"$w":false,"Abstract":false,"Ajax":false,"Autocompleter":false,"Builder":false,"Class":false,"Control":false,"Draggable":false,"Draggables":false,"Droppables":false,"Effect":false,"Element":false,"Enumerable":false,"Event":false,"Field":false,"Form":false,"Hash":false,"Insertion":false,"ObjectRange":false,"PeriodicalExecuter":false,"Position":false,"Prototype":false,"Scriptaculous":false,"Selector":false,"Sortable":false,"SortableObserver":false,"Sound":false,"Template":false,"Toggle":false,"Try":false},"meteor":{"$":false,"_":false,"Accounts":false,"AccountsClient":false,"AccountsServer":false,"AccountsCommon":false,"App":false,"Assets":false,"Blaze":false,"check":false,"Cordova":false,"DDP":false,"DDPServer":false,"DDPRateLimiter":false,"Deps":false,"EJSON":false,"Email":false,"HTTP":false,"Log":false,"Match":false,"Meteor":false,"Mongo":false,"MongoInternals":false,"Npm":false,"Package":false,"Plugin":false,"process":false,"Random":false,"ReactiveDict":false,"ReactiveVar":false,"Router":false,"ServiceConfiguration":false,"Session":false,"share":false,"Spacebars":false,"Template":false,"Tinytest":false,"Tracker":false,"UI":false,"Utils":false,"WebApp":false,"WebAppInternals":false},"mongo":{"_isWindows":false,"_rand":false,"BulkWriteResult":false,"cat":false,"cd":false,"connect":false,"db":false,"getHostName":false,"getMemInfo":false,"hostname":false,"ISODate":false,"listFiles":false,"load":false,"ls":false,"md5sumFile":false,"mkdir":false,"Mongo":false,"NumberInt":false,"NumberLong":false,"ObjectId":false,"PlanCache":false,"print":false,"printjson":false,"pwd":false,"quit":false,"removeFile":false,"rs":false,"sh":false,"UUID":false,"version":false,"WriteResult":false},"applescript":{"$":false,"Application":false,"Automation":false,"console":false,"delay":false,"Library":false,"ObjC":false,"ObjectSpecifier":false,"Path":false,"Progress":false,"Ref":false},"serviceworker":{"caches":false,"Cache":false,"CacheStorage":false,"Client":false,"clients":false,"Clients":false,"ExtendableEvent":false,"ExtendableMessageEvent":false,"FetchEvent":false,"importScripts":false,"registration":false,"self":false,"ServiceWorker":false,"ServiceWorkerContainer":false,"ServiceWorkerGlobalScope":false,"ServiceWorkerMessageEvent":false,"ServiceWorkerRegistration":false,"skipWaiting":false,"WindowClient":false},"atomtest":{"advanceClock":false,"fakeClearInterval":false,"fakeClearTimeout":false,"fakeSetInterval":false,"fakeSetTimeout":false,"resetTimeouts":false,"waitsForPromise":false},"embertest":{"andThen":false,"click":false,"currentPath":false,"currentRouteName":false,"currentURL":false,"fillIn":false,"find":false,"findWithAssert":false,"keyEvent":false,"pauseTest":false,"resumeTest":false,"triggerEvent":false,"visit":false},"protractor":{"$":false,"$$":false,"browser":false,"By":false,"by":false,"DartObject":false,"element":false,"protractor":false},"shared-node-browser":{"clearInterval":false,"clearTimeout":false,"console":false,"setInterval":false,"setTimeout":false},"webextensions":{"browser":false,"chrome":false,"opr":false},"greasemonkey":{"GM_addStyle":false,"GM_deleteValue":false,"GM_getResourceText":false,"GM_getResourceURL":false,"GM_getValue":false,"GM_info":false,"GM_listValues":false,"GM_log":false,"GM_openInTab":false,"GM_registerMenuCommand":false,"GM_setClipboard":false,"GM_setValue":false,"GM_xmlhttpRequest":false,"unsafeWindow":false}}

/***/ },
/* 618 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.scope = exports.path = undefined;

	var _weakMap = __webpack_require__(619);

	var _weakMap2 = _interopRequireDefault(_weakMap);

	exports.clear = clear;
	exports.clearPath = clearPath;
	exports.clearScope = clearScope;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var path = exports.path = new _weakMap2.default();
	var scope = exports.scope = new _weakMap2.default();

	function clear() {
	  clearPath();
	  clearScope();
	}

	function clearPath() {
	  exports.path = path = new _weakMap2.default();
	}

	function clearScope() {
	  exports.scope = scope = new _weakMap2.default();
	}

/***/ },
/* 619 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(620), __esModule: true };

/***/ },
/* 620 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(527);
	__webpack_require__(439);
	__webpack_require__(621);
	module.exports = __webpack_require__(452).WeakMap;

/***/ },
/* 621 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(595)(0)
	  , redefine     = __webpack_require__(465)
	  , meta         = __webpack_require__(497)
	  , assign       = __webpack_require__(622)
	  , weak         = __webpack_require__(623)
	  , isObject     = __webpack_require__(458)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(594)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 622 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(470)
	  , gOPS     = __webpack_require__(502)
	  , pIE      = __webpack_require__(503)
	  , toObject = __webpack_require__(484)
	  , IObject  = __webpack_require__(445)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(461)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 623 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(588)
	  , getWeak           = __webpack_require__(497).getWeak
	  , anObject          = __webpack_require__(457)
	  , isObject          = __webpack_require__(458)
	  , anInstance        = __webpack_require__(589)
	  , forOf             = __webpack_require__(590)
	  , createArrayMethod = __webpack_require__(595)
	  , $has              = __webpack_require__(466)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 624 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.findParent = findParent;
	exports.find = find;
	exports.getFunctionParent = getFunctionParent;
	exports.getStatementParent = getStatementParent;
	exports.getEarliestCommonAncestorFrom = getEarliestCommonAncestorFrom;
	exports.getDeepestCommonAncestorFrom = getDeepestCommonAncestorFrom;
	exports.getAncestry = getAncestry;
	exports.isAncestor = isAncestor;
	exports.isDescendant = isDescendant;
	exports.inType = inType;
	exports.inShadow = inShadow;

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	var _index = __webpack_require__(490);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function findParent(callback) {
	  var path = this;
	  while (path = path.parentPath) {
	    if (callback(path)) return path;
	  }
	  return null;
	}

	function find(callback) {
	  var path = this;
	  do {
	    if (callback(path)) return path;
	  } while (path = path.parentPath);
	  return null;
	}

	function getFunctionParent() {
	  return this.findParent(function (path) {
	    return path.isFunction() || path.isProgram();
	  });
	}

	function getStatementParent() {
	  var path = this;
	  do {
	    if (Array.isArray(path.container)) {
	      return path;
	    }
	  } while (path = path.parentPath);
	}

	function getEarliestCommonAncestorFrom(paths) {
	  return this.getDeepestCommonAncestorFrom(paths, function (deepest, i, ancestries) {
	    var earliest = void 0;
	    var keys = t.VISITOR_KEYS[deepest.type];

	    for (var _iterator = ancestries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var ancestry = _ref;

	      var path = ancestry[i + 1];

	      if (!earliest) {
	        earliest = path;
	        continue;
	      }

	      if (path.listKey && earliest.listKey === path.listKey) {
	        if (path.key < earliest.key) {
	          earliest = path;
	          continue;
	        }
	      }

	      var earliestKeyIndex = keys.indexOf(earliest.parentKey);
	      var currentKeyIndex = keys.indexOf(path.parentKey);
	      if (earliestKeyIndex > currentKeyIndex) {
	        earliest = path;
	      }
	    }

	    return earliest;
	  });
	}

	function getDeepestCommonAncestorFrom(paths, filter) {
	  var _this = this;

	  if (!paths.length) {
	    return this;
	  }

	  if (paths.length === 1) {
	    return paths[0];
	  }

	  var minDepth = Infinity;

	  var lastCommonIndex = void 0,
	      lastCommon = void 0;

	  var ancestries = paths.map(function (path) {
	    var ancestry = [];

	    do {
	      ancestry.unshift(path);
	    } while ((path = path.parentPath) && path !== _this);

	    if (ancestry.length < minDepth) {
	      minDepth = ancestry.length;
	    }

	    return ancestry;
	  });

	  var first = ancestries[0];

	  depthLoop: for (var i = 0; i < minDepth; i++) {
	    var shouldMatch = first[i];

	    for (var _iterator2 = ancestries, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	      var _ref2;

	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }

	      var ancestry = _ref2;

	      if (ancestry[i] !== shouldMatch) {
	        break depthLoop;
	      }
	    }

	    lastCommonIndex = i;
	    lastCommon = shouldMatch;
	  }

	  if (lastCommon) {
	    if (filter) {
	      return filter(lastCommon, lastCommonIndex, ancestries);
	    } else {
	      return lastCommon;
	    }
	  } else {
	    throw new Error("Couldn't find intersection");
	  }
	}

	function getAncestry() {
	  var path = this;
	  var paths = [];
	  do {
	    paths.push(path);
	  } while (path = path.parentPath);
	  return paths;
	}

	function isAncestor(maybeDescendant) {
	  return maybeDescendant.isDescendant(this);
	}

	function isDescendant(maybeAncestor) {
	  return !!this.findParent(function (parent) {
	    return parent === maybeAncestor;
	  });
	}

	function inType() {
	  var path = this;
	  while (path) {
	    for (var _iterator3 = arguments, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
	      var _ref3;

	      if (_isArray3) {
	        if (_i3 >= _iterator3.length) break;
	        _ref3 = _iterator3[_i3++];
	      } else {
	        _i3 = _iterator3.next();
	        if (_i3.done) break;
	        _ref3 = _i3.value;
	      }

	      var type = _ref3;

	      if (path.node.type === type) return true;
	    }
	    path = path.parentPath;
	  }

	  return false;
	}

	function inShadow(key) {
	  var parentFn = this.isFunction() ? this : this.findParent(function (p) {
	    return p.isFunction();
	  });
	  if (!parentFn) return;

	  if (parentFn.isFunctionExpression() || parentFn.isFunctionDeclaration()) {
	    var shadow = parentFn.node.shadow;

	    if (shadow && (!key || shadow[key] !== false)) {
	      return parentFn;
	    }
	  } else if (parentFn.isArrowFunctionExpression()) {
	    return parentFn;
	  }

	  return null;
	}

/***/ },
/* 625 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.getTypeAnnotation = getTypeAnnotation;
	exports._getTypeAnnotation = _getTypeAnnotation;
	exports.isBaseType = isBaseType;
	exports.couldBeBaseType = couldBeBaseType;
	exports.baseTypeStrictlyMatches = baseTypeStrictlyMatches;
	exports.isGenericType = isGenericType;

	var _inferers = __webpack_require__(626);

	var inferers = _interopRequireWildcard(_inferers);

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getTypeAnnotation() {
	  if (this.typeAnnotation) return this.typeAnnotation;

	  var type = this._getTypeAnnotation() || t.anyTypeAnnotation();
	  if (t.isTypeAnnotation(type)) type = type.typeAnnotation;
	  return this.typeAnnotation = type;
	}

	function _getTypeAnnotation() {
	  var node = this.node;

	  if (!node) {
	    if (this.key === "init" && this.parentPath.isVariableDeclarator()) {
	      var declar = this.parentPath.parentPath;
	      var declarParent = declar.parentPath;

	      if (declar.key === "left" && declarParent.isForInStatement()) {
	        return t.stringTypeAnnotation();
	      }

	      if (declar.key === "left" && declarParent.isForOfStatement()) {
	        return t.anyTypeAnnotation();
	      }

	      return t.voidTypeAnnotation();
	    } else {
	      return;
	    }
	  }

	  if (node.typeAnnotation) {
	    return node.typeAnnotation;
	  }

	  var inferer = inferers[node.type];
	  if (inferer) {
	    return inferer.call(this, node);
	  }

	  inferer = inferers[this.parentPath.type];
	  if (inferer && inferer.validParent) {
	    return this.parentPath.getTypeAnnotation();
	  }
	}

	function isBaseType(baseName, soft) {
	  return _isBaseType(baseName, this.getTypeAnnotation(), soft);
	}

	function _isBaseType(baseName, type, soft) {
	  if (baseName === "string") {
	    return t.isStringTypeAnnotation(type);
	  } else if (baseName === "number") {
	    return t.isNumberTypeAnnotation(type);
	  } else if (baseName === "boolean") {
	    return t.isBooleanTypeAnnotation(type);
	  } else if (baseName === "any") {
	    return t.isAnyTypeAnnotation(type);
	  } else if (baseName === "mixed") {
	    return t.isMixedTypeAnnotation(type);
	  } else if (baseName === "empty") {
	    return t.isEmptyTypeAnnotation(type);
	  } else if (baseName === "void") {
	    return t.isVoidTypeAnnotation(type);
	  } else {
	    if (soft) {
	      return false;
	    } else {
	      throw new Error("Unknown base type " + baseName);
	    }
	  }
	}

	function couldBeBaseType(name) {
	  var type = this.getTypeAnnotation();
	  if (t.isAnyTypeAnnotation(type)) return true;

	  if (t.isUnionTypeAnnotation(type)) {
	    for (var _iterator = type.types, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var type2 = _ref;

	      if (t.isAnyTypeAnnotation(type2) || _isBaseType(name, type2, true)) {
	        return true;
	      }
	    }
	    return false;
	  } else {
	    return _isBaseType(name, type, true);
	  }
	}

	function baseTypeStrictlyMatches(right) {
	  var left = this.getTypeAnnotation();
	  right = right.getTypeAnnotation();

	  if (!t.isAnyTypeAnnotation(left) && t.isFlowBaseAnnotation(left)) {
	    return right.type === left.type;
	  }
	}

	function isGenericType(genericName) {
	  var type = this.getTypeAnnotation();
	  return t.isGenericTypeAnnotation(type) && t.isIdentifier(type.id, { name: genericName });
	}

/***/ },
/* 626 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.ClassDeclaration = exports.ClassExpression = exports.FunctionDeclaration = exports.ArrowFunctionExpression = exports.FunctionExpression = exports.Identifier = undefined;

	var _infererReference = __webpack_require__(627);

	Object.defineProperty(exports, "Identifier", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_infererReference).default;
	  }
	});
	exports.VariableDeclarator = VariableDeclarator;
	exports.TypeCastExpression = TypeCastExpression;
	exports.NewExpression = NewExpression;
	exports.TemplateLiteral = TemplateLiteral;
	exports.UnaryExpression = UnaryExpression;
	exports.BinaryExpression = BinaryExpression;
	exports.LogicalExpression = LogicalExpression;
	exports.ConditionalExpression = ConditionalExpression;
	exports.SequenceExpression = SequenceExpression;
	exports.AssignmentExpression = AssignmentExpression;
	exports.UpdateExpression = UpdateExpression;
	exports.StringLiteral = StringLiteral;
	exports.NumericLiteral = NumericLiteral;
	exports.BooleanLiteral = BooleanLiteral;
	exports.NullLiteral = NullLiteral;
	exports.RegExpLiteral = RegExpLiteral;
	exports.ObjectExpression = ObjectExpression;
	exports.ArrayExpression = ArrayExpression;
	exports.RestElement = RestElement;
	exports.CallExpression = CallExpression;
	exports.TaggedTemplateExpression = TaggedTemplateExpression;

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function VariableDeclarator() {
	  var id = this.get("id");

	  if (id.isIdentifier()) {
	    return this.get("init").getTypeAnnotation();
	  } else {
	    return;
	  }
	}

	function TypeCastExpression(node) {
	  return node.typeAnnotation;
	}

	TypeCastExpression.validParent = true;

	function NewExpression(node) {
	  if (this.get("callee").isIdentifier()) {
	    return t.genericTypeAnnotation(node.callee);
	  }
	}

	function TemplateLiteral() {
	  return t.stringTypeAnnotation();
	}

	function UnaryExpression(node) {
	  var operator = node.operator;

	  if (operator === "void") {
	    return t.voidTypeAnnotation();
	  } else if (t.NUMBER_UNARY_OPERATORS.indexOf(operator) >= 0) {
	    return t.numberTypeAnnotation();
	  } else if (t.STRING_UNARY_OPERATORS.indexOf(operator) >= 0) {
	    return t.stringTypeAnnotation();
	  } else if (t.BOOLEAN_UNARY_OPERATORS.indexOf(operator) >= 0) {
	    return t.booleanTypeAnnotation();
	  }
	}

	function BinaryExpression(node) {
	  var operator = node.operator;

	  if (t.NUMBER_BINARY_OPERATORS.indexOf(operator) >= 0) {
	    return t.numberTypeAnnotation();
	  } else if (t.BOOLEAN_BINARY_OPERATORS.indexOf(operator) >= 0) {
	    return t.booleanTypeAnnotation();
	  } else if (operator === "+") {
	    var right = this.get("right");
	    var left = this.get("left");

	    if (left.isBaseType("number") && right.isBaseType("number")) {
	      return t.numberTypeAnnotation();
	    } else if (left.isBaseType("string") || right.isBaseType("string")) {
	      return t.stringTypeAnnotation();
	    }

	    return t.unionTypeAnnotation([t.stringTypeAnnotation(), t.numberTypeAnnotation()]);
	  }
	}

	function LogicalExpression() {
	  return t.createUnionTypeAnnotation([this.get("left").getTypeAnnotation(), this.get("right").getTypeAnnotation()]);
	}

	function ConditionalExpression() {
	  return t.createUnionTypeAnnotation([this.get("consequent").getTypeAnnotation(), this.get("alternate").getTypeAnnotation()]);
	}

	function SequenceExpression() {
	  return this.get("expressions").pop().getTypeAnnotation();
	}

	function AssignmentExpression() {
	  return this.get("right").getTypeAnnotation();
	}

	function UpdateExpression(node) {
	  var operator = node.operator;
	  if (operator === "++" || operator === "--") {
	    return t.numberTypeAnnotation();
	  }
	}

	function StringLiteral() {
	  return t.stringTypeAnnotation();
	}

	function NumericLiteral() {
	  return t.numberTypeAnnotation();
	}

	function BooleanLiteral() {
	  return t.booleanTypeAnnotation();
	}

	function NullLiteral() {
	  return t.nullLiteralTypeAnnotation();
	}

	function RegExpLiteral() {
	  return t.genericTypeAnnotation(t.identifier("RegExp"));
	}

	function ObjectExpression() {
	  return t.genericTypeAnnotation(t.identifier("Object"));
	}

	function ArrayExpression() {
	  return t.genericTypeAnnotation(t.identifier("Array"));
	}

	function RestElement() {
	  return ArrayExpression();
	}

	RestElement.validParent = true;

	function Func() {
	  return t.genericTypeAnnotation(t.identifier("Function"));
	}

	exports.FunctionExpression = Func;
	exports.ArrowFunctionExpression = Func;
	exports.FunctionDeclaration = Func;
	exports.ClassExpression = Func;
	exports.ClassDeclaration = Func;
	function CallExpression() {
	  return resolveCall(this.get("callee"));
	}

	function TaggedTemplateExpression() {
	  return resolveCall(this.get("tag"));
	}

	function resolveCall(callee) {
	  callee = callee.resolve();

	  if (callee.isFunction()) {
	    if (callee.is("async")) {
	      if (callee.is("generator")) {
	        return t.genericTypeAnnotation(t.identifier("AsyncIterator"));
	      } else {
	        return t.genericTypeAnnotation(t.identifier("Promise"));
	      }
	    } else {
	      if (callee.node.returnType) {
	        return callee.node.returnType;
	      } else {}
	    }
	  }
	}

/***/ },
/* 627 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.default = function (node) {
	  if (!this.isReferenced()) return;

	  var binding = this.scope.getBinding(node.name);
	  if (binding) {
	    if (binding.identifier.typeAnnotation) {
	      return binding.identifier.typeAnnotation;
	    } else {
	      return getTypeAnnotationBindingConstantViolations(this, node.name);
	    }
	  }

	  if (node.name === "undefined") {
	    return t.voidTypeAnnotation();
	  } else if (node.name === "NaN" || node.name === "Infinity") {
	    return t.numberTypeAnnotation();
	  } else if (node.name === "arguments") {}
	};

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getTypeAnnotationBindingConstantViolations(path, name) {
	  var binding = path.scope.getBinding(name);

	  var types = [];
	  path.typeAnnotation = t.unionTypeAnnotation(types);

	  var functionConstantViolations = [];
	  var constantViolations = getConstantViolationsBefore(binding, path, functionConstantViolations);

	  var testType = getConditionalAnnotation(path, name);
	  if (testType) {
	    var testConstantViolations = getConstantViolationsBefore(binding, testType.ifStatement);

	    constantViolations = constantViolations.filter(function (path) {
	      return testConstantViolations.indexOf(path) < 0;
	    });

	    types.push(testType.typeAnnotation);
	  }

	  if (constantViolations.length) {
	    constantViolations = constantViolations.concat(functionConstantViolations);

	    for (var _iterator = constantViolations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var violation = _ref;

	      types.push(violation.getTypeAnnotation());
	    }
	  }

	  if (types.length) {
	    return t.createUnionTypeAnnotation(types);
	  }
	}

	function getConstantViolationsBefore(binding, path, functions) {
	  var violations = binding.constantViolations.slice();
	  violations.unshift(binding.path);
	  return violations.filter(function (violation) {
	    violation = violation.resolve();
	    var status = violation._guessExecutionStatusRelativeTo(path);
	    if (functions && status === "function") functions.push(violation);
	    return status === "before";
	  });
	}

	function inferAnnotationFromBinaryExpression(name, path) {
	  var operator = path.node.operator;

	  var right = path.get("right").resolve();
	  var left = path.get("left").resolve();

	  var target = void 0;
	  if (left.isIdentifier({ name: name })) {
	    target = right;
	  } else if (right.isIdentifier({ name: name })) {
	    target = left;
	  }
	  if (target) {
	    if (operator === "===") {
	      return target.getTypeAnnotation();
	    } else if (t.BOOLEAN_NUMBER_BINARY_OPERATORS.indexOf(operator) >= 0) {
	      return t.numberTypeAnnotation();
	    } else {
	      return;
	    }
	  } else {
	    if (operator !== "===") return;
	  }

	  var typeofPath = void 0;
	  var typePath = void 0;
	  if (left.isUnaryExpression({ operator: "typeof" })) {
	    typeofPath = left;
	    typePath = right;
	  } else if (right.isUnaryExpression({ operator: "typeof" })) {
	    typeofPath = right;
	    typePath = left;
	  }
	  if (!typePath && !typeofPath) return;

	  typePath = typePath.resolve();
	  if (!typePath.isLiteral()) return;

	  var typeValue = typePath.node.value;
	  if (typeof typeValue !== "string") return;

	  if (!typeofPath.get("argument").isIdentifier({ name: name })) return;

	  return t.createTypeAnnotationBasedOnTypeof(typePath.node.value);
	}

	function getParentConditionalPath(path) {
	  var parentPath = void 0;
	  while (parentPath = path.parentPath) {
	    if (parentPath.isIfStatement() || parentPath.isConditionalExpression()) {
	      if (path.key === "test") {
	        return;
	      } else {
	        return parentPath;
	      }
	    } else {
	      path = parentPath;
	    }
	  }
	}

	function getConditionalAnnotation(path, name) {
	  var ifStatement = getParentConditionalPath(path);
	  if (!ifStatement) return;

	  var test = ifStatement.get("test");
	  var paths = [test];
	  var types = [];

	  do {
	    var _path = paths.shift().resolve();

	    if (_path.isLogicalExpression()) {
	      paths.push(_path.get("left"));
	      paths.push(_path.get("right"));
	    }

	    if (_path.isBinaryExpression()) {
	      var type = inferAnnotationFromBinaryExpression(name, _path);
	      if (type) types.push(type);
	    }
	  } while (paths.length);

	  if (types.length) {
	    return {
	      typeAnnotation: t.createUnionTypeAnnotation(types),
	      ifStatement: ifStatement
	    };
	  } else {
	    return getConditionalAnnotation(ifStatement, name);
	  }
	}
	module.exports = exports["default"];

/***/ },
/* 628 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.replaceWithMultiple = replaceWithMultiple;
	exports.replaceWithSourceString = replaceWithSourceString;
	exports.replaceWith = replaceWith;
	exports._replaceWith = _replaceWith;
	exports.replaceExpressionWithStatements = replaceExpressionWithStatements;
	exports.replaceInline = replaceInline;

	var _babelCodeFrame = __webpack_require__(629);

	var _babelCodeFrame2 = _interopRequireDefault(_babelCodeFrame);

	var _index = __webpack_require__(436);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(490);

	var _index4 = _interopRequireDefault(_index3);

	var _babylon = __webpack_require__(435);

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hoistVariablesVisitor = {
	  Function: function Function(path) {
	    path.skip();
	  },
	  VariableDeclaration: function VariableDeclaration(path) {
	    if (path.node.kind !== "var") return;

	    var bindings = path.getBindingIdentifiers();
	    for (var key in bindings) {
	      path.scope.push({ id: bindings[key] });
	    }

	    var exprs = [];

	    for (var _iterator = path.node.declarations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var declar = _ref;

	      if (declar.init) {
	        exprs.push(t.expressionStatement(t.assignmentExpression("=", declar.id, declar.init)));
	      }
	    }

	    path.replaceWithMultiple(exprs);
	  }
	};

	function replaceWithMultiple(nodes) {
	  this.resync();

	  nodes = this._verifyNodeList(nodes);
	  t.inheritLeadingComments(nodes[0], this.node);
	  t.inheritTrailingComments(nodes[nodes.length - 1], this.node);
	  this.node = this.container[this.key] = null;
	  this.insertAfter(nodes);

	  if (this.node) {
	    this.requeue();
	  } else {
	    this.remove();
	  }
	}

	function replaceWithSourceString(replacement) {
	  this.resync();

	  try {
	    replacement = "(" + replacement + ")";
	    replacement = (0, _babylon.parse)(replacement);
	  } catch (err) {
	    var loc = err.loc;
	    if (loc) {
	      err.message += " - make sure this is an expression.";
	      err.message += "\n" + (0, _babelCodeFrame2.default)(replacement, loc.line, loc.column + 1);
	    }
	    throw err;
	  }

	  replacement = replacement.program.body[0].expression;
	  _index2.default.removeProperties(replacement);
	  return this.replaceWith(replacement);
	}

	function replaceWith(replacement) {
	  this.resync();

	  if (this.removed) {
	    throw new Error("You can't replace this node, we've already removed it");
	  }

	  if (replacement instanceof _index4.default) {
	    replacement = replacement.node;
	  }

	  if (!replacement) {
	    throw new Error("You passed `path.replaceWith()` a falsy node, use `path.remove()` instead");
	  }

	  if (this.node === replacement) {
	    return;
	  }

	  if (this.isProgram() && !t.isProgram(replacement)) {
	    throw new Error("You can only replace a Program root node with another Program node");
	  }

	  if (Array.isArray(replacement)) {
	    throw new Error("Don't use `path.replaceWith()` with an array of nodes, use `path.replaceWithMultiple()`");
	  }

	  if (typeof replacement === "string") {
	    throw new Error("Don't use `path.replaceWith()` with a source string, use `path.replaceWithSourceString()`");
	  }

	  if (this.isNodeType("Statement") && t.isExpression(replacement)) {
	    if (!this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(replacement)) {
	      replacement = t.expressionStatement(replacement);
	    }
	  }

	  if (this.isNodeType("Expression") && t.isStatement(replacement)) {
	    if (!this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(replacement)) {
	      return this.replaceExpressionWithStatements([replacement]);
	    }
	  }

	  var oldNode = this.node;
	  if (oldNode) {
	    t.inheritsComments(replacement, oldNode);
	    t.removeComments(oldNode);
	  }

	  this._replaceWith(replacement);
	  this.type = replacement.type;

	  this.setScope();

	  this.requeue();
	}

	function _replaceWith(node) {
	  if (!this.container) {
	    throw new ReferenceError("Container is falsy");
	  }

	  if (this.inList) {
	    t.validate(this.parent, this.key, [node]);
	  } else {
	    t.validate(this.parent, this.key, node);
	  }

	  this.debug(function () {
	    return "Replace with " + (node && node.type);
	  });

	  this.node = this.container[this.key] = node;
	}

	function replaceExpressionWithStatements(nodes) {
	  this.resync();

	  var toSequenceExpression = t.toSequenceExpression(nodes, this.scope);

	  if (t.isSequenceExpression(toSequenceExpression)) {
	    var exprs = toSequenceExpression.expressions;

	    if (exprs.length >= 2 && this.parentPath.isExpressionStatement()) {
	      this._maybePopFromStatements(exprs);
	    }

	    if (exprs.length === 1) {
	      this.replaceWith(exprs[0]);
	    } else {
	      this.replaceWith(toSequenceExpression);
	    }
	  } else if (toSequenceExpression) {
	    this.replaceWith(toSequenceExpression);
	  } else {
	    var container = t.functionExpression(null, [], t.blockStatement(nodes));
	    container.shadow = true;

	    this.replaceWith(t.callExpression(container, []));
	    this.traverse(hoistVariablesVisitor);

	    var completionRecords = this.get("callee").getCompletionRecords();
	    for (var _iterator2 = completionRecords, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	      var _ref2;

	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }

	      var path = _ref2;

	      if (!path.isExpressionStatement()) continue;

	      var loop = path.findParent(function (path) {
	        return path.isLoop();
	      });
	      if (loop) {
	        var uid = loop.getData("expressionReplacementReturnUid");

	        if (!uid) {
	          var callee = this.get("callee");
	          uid = callee.scope.generateDeclaredUidIdentifier("ret");
	          callee.get("body").pushContainer("body", t.returnStatement(uid));
	          loop.setData("expressionReplacementReturnUid", uid);
	        } else {
	          uid = t.identifier(uid.name);
	        }

	        path.get("expression").replaceWith(t.assignmentExpression("=", uid, path.node.expression));
	      } else {
	        path.replaceWith(t.returnStatement(path.node.expression));
	      }
	    }

	    return this.node;
	  }
	}

	function replaceInline(nodes) {
	  this.resync();

	  if (Array.isArray(nodes)) {
	    if (Array.isArray(this.container)) {
	      nodes = this._verifyNodeList(nodes);
	      this._containerInsertAfter(nodes);
	      return this.remove();
	    } else {
	      return this.replaceWithMultiple(nodes);
	    }
	  } else {
	    return this.replaceWith(nodes);
	  }
	}

/***/ },
/* 629 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (rawLines, lineNumber, colNumber) {
	  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	  colNumber = Math.max(colNumber, 0);

	  var highlighted = opts.highlightCode && _chalk2.default.supportsColor || opts.forceColor;
	  var chalk = _chalk2.default;
	  if (opts.forceColor) {
	    chalk = new _chalk2.default.constructor({ enabled: true });
	  }
	  var maybeHighlight = function maybeHighlight(chalkFn, string) {
	    return highlighted ? chalkFn(string) : string;
	  };
	  var defs = getDefs(chalk);
	  if (highlighted) rawLines = highlight(defs, rawLines);

	  var linesAbove = opts.linesAbove || 2;
	  var linesBelow = opts.linesBelow || 3;

	  var lines = rawLines.split(NEWLINE);
	  var start = Math.max(lineNumber - (linesAbove + 1), 0);
	  var end = Math.min(lines.length, lineNumber + linesBelow);

	  if (!lineNumber && !colNumber) {
	    start = 0;
	    end = lines.length;
	  }

	  var numberMaxWidth = String(end).length;

	  var frame = lines.slice(start, end).map(function (line, index) {
	    var number = start + 1 + index;
	    var paddedNumber = (" " + number).slice(-numberMaxWidth);
	    var gutter = " " + paddedNumber + " | ";
	    if (number === lineNumber) {
	      var markerLine = "";
	      if (colNumber) {
	        var markerSpacing = line.slice(0, colNumber - 1).replace(/[^\t]/g, " ");
	        markerLine = ["\n ", maybeHighlight(defs.gutter, gutter.replace(/\d/g, " ")), markerSpacing, maybeHighlight(defs.marker, "^")].join("");
	      }
	      return [maybeHighlight(defs.marker, ">"), maybeHighlight(defs.gutter, gutter), line, markerLine].join("");
	    } else {
	      return " " + maybeHighlight(defs.gutter, gutter) + line;
	    }
	  }).join("\n");

	  if (highlighted) {
	    return chalk.reset(frame);
	  } else {
	    return frame;
	  }
	};

	var _jsTokens = __webpack_require__(630);

	var _jsTokens2 = _interopRequireDefault(_jsTokens);

	var _esutils = __webpack_require__(530);

	var _esutils2 = _interopRequireDefault(_esutils);

	var _chalk = __webpack_require__(631);

	var _chalk2 = _interopRequireDefault(_chalk);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDefs(chalk) {
	  return {
	    keyword: chalk.cyan,
	    capitalized: chalk.yellow,
	    jsx_tag: chalk.yellow,
	    punctuator: chalk.yellow,

	    number: chalk.magenta,
	    string: chalk.green,
	    regex: chalk.magenta,
	    comment: chalk.grey,
	    invalid: chalk.white.bgRed.bold,
	    gutter: chalk.grey,
	    marker: chalk.red.bold
	  };
	}

	var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;

	var JSX_TAG = /^[a-z][\w-]*$/i;

	var BRACKET = /^[()\[\]{}]$/;

	function getTokenType(match) {
	  var _match$slice = match.slice(-2),
	      offset = _match$slice[0],
	      text = _match$slice[1];

	  var token = (0, _jsTokens.matchToToken)(match);

	  if (token.type === "name") {
	    if (_esutils2.default.keyword.isReservedWordES6(token.value)) {
	      return "keyword";
	    }

	    if (JSX_TAG.test(token.value) && (text[offset - 1] === "<" || text.substr(offset - 2, 2) == "</")) {
	      return "jsx_tag";
	    }

	    if (token.value[0] !== token.value[0].toLowerCase()) {
	      return "capitalized";
	    }
	  }

	  if (token.type === "punctuator" && BRACKET.test(token.value)) {
	    return "bracket";
	  }

	  return token.type;
	}

	function highlight(defs, text) {
	  return text.replace(_jsTokens2.default, function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var type = getTokenType(args);
	    var colorize = defs[type];
	    if (colorize) {
	      return args[0].split(NEWLINE).map(function (str) {
	        return colorize(str);
	      }).join("\n");
	    } else {
	      return args[0];
	    }
	  });
	}

	module.exports = exports["default"];

/***/ },
/* 630 */
/***/ function(module, exports) {

	// Copyright 2014, 2015, 2016, 2017 Simon Lydell
	// License: MIT. (See LICENSE.)

	Object.defineProperty(exports, "__esModule", {
	  value: true
	})

	// This regex comes from regex.coffee, and is inserted here by generate-index.js
	// (run `npm run build`).
	exports.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g

	exports.matchToToken = function(match) {
	  var token = {type: "invalid", value: match[0]}
	       if (match[ 1]) token.type = "string" , token.closed = !!(match[3] || match[4])
	  else if (match[ 5]) token.type = "comment"
	  else if (match[ 6]) token.type = "comment", token.closed = !!match[7]
	  else if (match[ 8]) token.type = "regex"
	  else if (match[ 9]) token.type = "number"
	  else if (match[10]) token.type = "name"
	  else if (match[11]) token.type = "punctuator"
	  else if (match[12]) token.type = "whitespace"
	  return token
	}


/***/ },
/* 631 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	var escapeStringRegexp = __webpack_require__(632);
	var ansiStyles = __webpack_require__(1056);
	var stripAnsi = __webpack_require__(634);
	var hasAnsi = __webpack_require__(636);
	var supportsColor = __webpack_require__(637);
	var defineProps = Object.defineProperties;
	var isSimpleWindowsTerm = process.platform === 'win32' && !/^xterm/i.test(({"NODE_ENV":"production","TARGET":"firefox-panel"}).TERM);

	function Chalk(options) {
		// detect mode if not set manually
		this.enabled = !options || options.enabled === undefined ? supportsColor : options.enabled;
	}

	// use bright blue on Windows as the normal blue color is illegible
	if (isSimpleWindowsTerm) {
		ansiStyles.blue.open = '\u001b[94m';
	}

	var styles = (function () {
		var ret = {};

		Object.keys(ansiStyles).forEach(function (key) {
			ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');

			ret[key] = {
				get: function () {
					return build.call(this, this._styles.concat(key));
				}
			};
		});

		return ret;
	})();

	var proto = defineProps(function chalk() {}, styles);

	function build(_styles) {
		var builder = function () {
			return applyStyle.apply(builder, arguments);
		};

		builder._styles = _styles;
		builder.enabled = this.enabled;
		// __proto__ is used because we must return a function, but there is
		// no way to create a function with a different prototype.
		/* eslint-disable no-proto */
		builder.__proto__ = proto;

		return builder;
	}

	function applyStyle() {
		// support varags, but simply cast to string in case there's only one arg
		var args = arguments;
		var argsLen = args.length;
		var str = argsLen !== 0 && String(arguments[0]);

		if (argsLen > 1) {
			// don't slice `arguments`, it prevents v8 optimizations
			for (var a = 1; a < argsLen; a++) {
				str += ' ' + args[a];
			}
		}

		if (!this.enabled || !str) {
			return str;
		}

		var nestedStyles = this._styles;
		var i = nestedStyles.length;

		// Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
		// see https://github.com/chalk/chalk/issues/58
		// If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.
		var originalDim = ansiStyles.dim.open;
		if (isSimpleWindowsTerm && (nestedStyles.indexOf('gray') !== -1 || nestedStyles.indexOf('grey') !== -1)) {
			ansiStyles.dim.open = '';
		}

		while (i--) {
			var code = ansiStyles[nestedStyles[i]];

			// Replace any instances already present with a re-opening code
			// otherwise only the part of the string until said closing code
			// will be colored, and the rest will simply be 'plain'.
			str = code.open + str.replace(code.closeRe, code.open) + code.close;
		}

		// Reset the original 'dim' if we changed it to work around the Windows dimmed gray issue.
		ansiStyles.dim.open = originalDim;

		return str;
	}

	function init() {
		var ret = {};

		Object.keys(styles).forEach(function (name) {
			ret[name] = {
				get: function () {
					return build.call(this, [name]);
				}
			};
		});

		return ret;
	}

	defineProps(Chalk.prototype, init());

	module.exports = new Chalk();
	module.exports.styles = ansiStyles;
	module.exports.hasColor = hasAnsi;
	module.exports.stripColor = stripAnsi;
	module.exports.supportsColor = supportsColor;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(120)))

/***/ },
/* 632 */
/***/ function(module, exports) {

	'use strict';

	var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

	module.exports = function (str) {
		if (typeof str !== 'string') {
			throw new TypeError('Expected a string');
		}

		return str.replace(matchOperatorsRe, '\\$&');
	};


/***/ },
/* 633 */,
/* 634 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(635)();

	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ },
/* 635 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function () {
		return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
	};


/***/ },
/* 636 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(635);
	var re = new RegExp(ansiRegex().source); // remove the `g` flag
	module.exports = re.test.bind(re);


/***/ },
/* 637 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	var argv = process.argv;

	var terminator = argv.indexOf('--');
	var hasFlag = function (flag) {
		flag = '--' + flag;
		var pos = argv.indexOf(flag);
		return pos !== -1 && (terminator !== -1 ? pos < terminator : true);
	};

	module.exports = (function () {
		if ('FORCE_COLOR' in ({"NODE_ENV":"production","TARGET":"firefox-panel"})) {
			return true;
		}

		if (hasFlag('no-color') ||
			hasFlag('no-colors') ||
			hasFlag('color=false')) {
			return false;
		}

		if (hasFlag('color') ||
			hasFlag('colors') ||
			hasFlag('color=true') ||
			hasFlag('color=always')) {
			return true;
		}

		if (process.stdout && !process.stdout.isTTY) {
			return false;
		}

		if (process.platform === 'win32') {
			return true;
		}

		if ('COLORTERM' in ({"NODE_ENV":"production","TARGET":"firefox-panel"})) {
			return true;
		}

		if (({"NODE_ENV":"production","TARGET":"firefox-panel"}).TERM === 'dumb') {
			return false;
		}

		if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(({"NODE_ENV":"production","TARGET":"firefox-panel"}).TERM)) {
			return true;
		}

		return false;
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(120)))

/***/ },
/* 638 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(522);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _map = __webpack_require__(584);

	var _map2 = _interopRequireDefault(_map);

	exports.evaluateTruthy = evaluateTruthy;
	exports.evaluate = evaluate;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VALID_CALLEES = ["String", "Number", "Math"];
	var INVALID_METHODS = ["random"];

	function evaluateTruthy() {
	  var res = this.evaluate();
	  if (res.confident) return !!res.value;
	}

	function evaluate() {
	  var confident = true;
	  var deoptPath = void 0;
	  var seen = new _map2.default();

	  function deopt(path) {
	    if (!confident) return;
	    deoptPath = path;
	    confident = false;
	  }

	  var value = evaluate(this);
	  if (!confident) value = undefined;
	  return {
	    confident: confident,
	    deopt: deoptPath,
	    value: value
	  };

	  function evaluate(path) {
	    var node = path.node;


	    if (seen.has(node)) {
	      var existing = seen.get(node);
	      if (existing.resolved) {
	        return existing.value;
	      } else {
	        deopt(path);
	        return;
	      }
	    } else {
	      var item = { resolved: false };
	      seen.set(node, item);

	      var val = _evaluate(path);
	      if (confident) {
	        item.resolved = true;
	        item.value = val;
	      }
	      return val;
	    }
	  }

	  function _evaluate(path) {
	    if (!confident) return;

	    var node = path.node;


	    if (path.isSequenceExpression()) {
	      var exprs = path.get("expressions");
	      return evaluate(exprs[exprs.length - 1]);
	    }

	    if (path.isStringLiteral() || path.isNumericLiteral() || path.isBooleanLiteral()) {
	      return node.value;
	    }

	    if (path.isNullLiteral()) {
	      return null;
	    }

	    if (path.isTemplateLiteral()) {
	      var str = "";

	      var i = 0;
	      var _exprs = path.get("expressions");

	      for (var _iterator = node.quasis, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	        var _ref;

	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }

	        var elem = _ref;

	        if (!confident) break;

	        str += elem.value.cooked;

	        var expr = _exprs[i++];
	        if (expr) str += String(evaluate(expr));
	      }

	      if (!confident) return;
	      return str;
	    }

	    if (path.isConditionalExpression()) {
	      var testResult = evaluate(path.get("test"));
	      if (!confident) return;
	      if (testResult) {
	        return evaluate(path.get("consequent"));
	      } else {
	        return evaluate(path.get("alternate"));
	      }
	    }

	    if (path.isExpressionWrapper()) {
	      return evaluate(path.get("expression"));
	    }

	    if (path.isMemberExpression() && !path.parentPath.isCallExpression({ callee: node })) {
	      var property = path.get("property");
	      var object = path.get("object");

	      if (object.isLiteral() && property.isIdentifier()) {
	        var _value = object.node.value;
	        var type = typeof _value === "undefined" ? "undefined" : (0, _typeof3.default)(_value);
	        if (type === "number" || type === "string") {
	          return _value[property.node.name];
	        }
	      }
	    }

	    if (path.isReferencedIdentifier()) {
	      var binding = path.scope.getBinding(node.name);

	      if (binding && binding.constantViolations.length > 0) {
	        return deopt(binding.path);
	      }

	      if (binding && path.node.start < binding.path.node.end) {
	        return deopt(binding.path);
	      }

	      if (binding && binding.hasValue) {
	        return binding.value;
	      } else {
	        if (node.name === "undefined") {
	          return binding ? deopt(binding.path) : undefined;
	        } else if (node.name === "Infinity") {
	          return binding ? deopt(binding.path) : Infinity;
	        } else if (node.name === "NaN") {
	          return binding ? deopt(binding.path) : NaN;
	        }

	        var resolved = path.resolve();
	        if (resolved === path) {
	          return deopt(path);
	        } else {
	          return evaluate(resolved);
	        }
	      }
	    }

	    if (path.isUnaryExpression({ prefix: true })) {
	      if (node.operator === "void") {
	        return undefined;
	      }

	      var argument = path.get("argument");
	      if (node.operator === "typeof" && (argument.isFunction() || argument.isClass())) {
	        return "function";
	      }

	      var arg = evaluate(argument);
	      if (!confident) return;
	      switch (node.operator) {
	        case "!":
	          return !arg;
	        case "+":
	          return +arg;
	        case "-":
	          return -arg;
	        case "~":
	          return ~arg;
	        case "typeof":
	          return typeof arg === "undefined" ? "undefined" : (0, _typeof3.default)(arg);
	      }
	    }

	    if (path.isArrayExpression()) {
	      var arr = [];
	      var elems = path.get("elements");
	      for (var _iterator2 = elems, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	        var _ref2;

	        if (_isArray2) {
	          if (_i2 >= _iterator2.length) break;
	          _ref2 = _iterator2[_i2++];
	        } else {
	          _i2 = _iterator2.next();
	          if (_i2.done) break;
	          _ref2 = _i2.value;
	        }

	        var _elem = _ref2;

	        _elem = _elem.evaluate();

	        if (_elem.confident) {
	          arr.push(_elem.value);
	        } else {
	          return deopt(_elem);
	        }
	      }
	      return arr;
	    }

	    if (path.isObjectExpression()) {
	      var obj = {};
	      var props = path.get("properties");
	      for (var _iterator3 = props, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
	        var _ref3;

	        if (_isArray3) {
	          if (_i3 >= _iterator3.length) break;
	          _ref3 = _iterator3[_i3++];
	        } else {
	          _i3 = _iterator3.next();
	          if (_i3.done) break;
	          _ref3 = _i3.value;
	        }

	        var prop = _ref3;

	        if (prop.isObjectMethod() || prop.isSpreadProperty()) {
	          return deopt(prop);
	        }
	        var keyPath = prop.get("key");
	        var key = keyPath;
	        if (prop.node.computed) {
	          key = key.evaluate();
	          if (!key.confident) {
	            return deopt(keyPath);
	          }
	          key = key.value;
	        } else if (key.isIdentifier()) {
	          key = key.node.name;
	        } else {
	          key = key.node.value;
	        }
	        var valuePath = prop.get("value");
	        var _value2 = valuePath.evaluate();
	        if (!_value2.confident) {
	          return deopt(valuePath);
	        }
	        _value2 = _value2.value;
	        obj[key] = _value2;
	      }
	      return obj;
	    }

	    if (path.isLogicalExpression()) {
	      var wasConfident = confident;
	      var left = evaluate(path.get("left"));
	      var leftConfident = confident;
	      confident = wasConfident;
	      var right = evaluate(path.get("right"));
	      var rightConfident = confident;
	      confident = leftConfident && rightConfident;

	      switch (node.operator) {
	        case "||":
	          if (left && leftConfident) {
	            confident = true;
	            return left;
	          }

	          if (!confident) return;

	          return left || right;
	        case "&&":
	          if (!left && leftConfident || !right && rightConfident) {
	            confident = true;
	          }

	          if (!confident) return;

	          return left && right;
	      }
	    }

	    if (path.isBinaryExpression()) {
	      var _left = evaluate(path.get("left"));
	      if (!confident) return;
	      var _right = evaluate(path.get("right"));
	      if (!confident) return;

	      switch (node.operator) {
	        case "-":
	          return _left - _right;
	        case "+":
	          return _left + _right;
	        case "/":
	          return _left / _right;
	        case "*":
	          return _left * _right;
	        case "%":
	          return _left % _right;
	        case "**":
	          return Math.pow(_left, _right);
	        case "<":
	          return _left < _right;
	        case ">":
	          return _left > _right;
	        case "<=":
	          return _left <= _right;
	        case ">=":
	          return _left >= _right;
	        case "==":
	          return _left == _right;
	        case "!=":
	          return _left != _right;
	        case "===":
	          return _left === _right;
	        case "!==":
	          return _left !== _right;
	        case "|":
	          return _left | _right;
	        case "&":
	          return _left & _right;
	        case "^":
	          return _left ^ _right;
	        case "<<":
	          return _left << _right;
	        case ">>":
	          return _left >> _right;
	        case ">>>":
	          return _left >>> _right;
	      }
	    }

	    if (path.isCallExpression()) {
	      var callee = path.get("callee");
	      var context = void 0;
	      var func = void 0;

	      if (callee.isIdentifier() && !path.scope.getBinding(callee.node.name, true) && VALID_CALLEES.indexOf(callee.node.name) >= 0) {
	        func = global[node.callee.name];
	      }

	      if (callee.isMemberExpression()) {
	        var _object = callee.get("object");
	        var _property = callee.get("property");

	        if (_object.isIdentifier() && _property.isIdentifier() && VALID_CALLEES.indexOf(_object.node.name) >= 0 && INVALID_METHODS.indexOf(_property.node.name) < 0) {
	          context = global[_object.node.name];
	          func = context[_property.node.name];
	        }

	        if (_object.isLiteral() && _property.isIdentifier()) {
	          var _type = (0, _typeof3.default)(_object.node.value);
	          if (_type === "string" || _type === "number") {
	            context = _object.node.value;
	            func = context[_property.node.name];
	          }
	        }
	      }

	      if (func) {
	        var args = path.get("arguments").map(evaluate);
	        if (!confident) return;

	        return func.apply(context, args);
	      }
	    }

	    deopt(path);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 639 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.toComputedKey = toComputedKey;
	exports.ensureBlock = ensureBlock;
	exports.arrowFunctionToShadowed = arrowFunctionToShadowed;

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function toComputedKey() {
	  var node = this.node;

	  var key = void 0;
	  if (this.isMemberExpression()) {
	    key = node.property;
	  } else if (this.isProperty() || this.isMethod()) {
	    key = node.key;
	  } else {
	    throw new ReferenceError("todo");
	  }

	  if (!node.computed) {
	    if (t.isIdentifier(key)) key = t.stringLiteral(key.name);
	  }

	  return key;
	}

	function ensureBlock() {
	  return t.ensureBlock(this.node);
	}

	function arrowFunctionToShadowed() {
	  if (!this.isArrowFunctionExpression()) return;

	  this.ensureBlock();

	  var node = this.node;

	  node.expression = false;
	  node.type = "FunctionExpression";
	  node.shadow = node.shadow || true;
	}

/***/ },
/* 640 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.is = undefined;

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.matchesPattern = matchesPattern;
	exports.has = has;
	exports.isStatic = isStatic;
	exports.isnt = isnt;
	exports.equals = equals;
	exports.isNodeType = isNodeType;
	exports.canHaveVariableDeclarationOrExpression = canHaveVariableDeclarationOrExpression;
	exports.canSwapBetweenExpressionAndStatement = canSwapBetweenExpressionAndStatement;
	exports.isCompletionRecord = isCompletionRecord;
	exports.isStatementOrBlock = isStatementOrBlock;
	exports.referencesImport = referencesImport;
	exports.getSource = getSource;
	exports.willIMaybeExecuteBefore = willIMaybeExecuteBefore;
	exports._guessExecutionStatusRelativeTo = _guessExecutionStatusRelativeTo;
	exports._guessExecutionStatusRelativeToDifferentFunctions = _guessExecutionStatusRelativeToDifferentFunctions;
	exports.resolve = resolve;
	exports._resolve = _resolve;

	var _includes = __webpack_require__(601);

	var _includes2 = _interopRequireDefault(_includes);

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function matchesPattern(pattern, allowPartial) {
	  if (!this.isMemberExpression()) return false;

	  var parts = pattern.split(".");
	  var search = [this.node];
	  var i = 0;

	  function matches(name) {
	    var part = parts[i];
	    return part === "*" || name === part;
	  }

	  while (search.length) {
	    var node = search.shift();

	    if (allowPartial && i === parts.length) {
	      return true;
	    }

	    if (t.isIdentifier(node)) {
	      if (!matches(node.name)) return false;
	    } else if (t.isLiteral(node)) {
	      if (!matches(node.value)) return false;
	    } else if (t.isMemberExpression(node)) {
	      if (node.computed && !t.isLiteral(node.property)) {
	        return false;
	      } else {
	        search.unshift(node.property);
	        search.unshift(node.object);
	        continue;
	      }
	    } else if (t.isThisExpression(node)) {
	      if (!matches("this")) return false;
	    } else {
	      return false;
	    }

	    if (++i > parts.length) {
	      return false;
	    }
	  }

	  return i === parts.length;
	}

	function has(key) {
	  var val = this.node && this.node[key];
	  if (val && Array.isArray(val)) {
	    return !!val.length;
	  } else {
	    return !!val;
	  }
	}

	function isStatic() {
	  return this.scope.isStatic(this.node);
	}

	var is = exports.is = has;

	function isnt(key) {
	  return !this.has(key);
	}

	function equals(key, value) {
	  return this.node[key] === value;
	}

	function isNodeType(type) {
	  return t.isType(this.type, type);
	}

	function canHaveVariableDeclarationOrExpression() {
	  return (this.key === "init" || this.key === "left") && this.parentPath.isFor();
	}

	function canSwapBetweenExpressionAndStatement(replacement) {
	  if (this.key !== "body" || !this.parentPath.isArrowFunctionExpression()) {
	    return false;
	  }

	  if (this.isExpression()) {
	    return t.isBlockStatement(replacement);
	  } else if (this.isBlockStatement()) {
	    return t.isExpression(replacement);
	  }

	  return false;
	}

	function isCompletionRecord(allowInsideFunction) {
	  var path = this;
	  var first = true;

	  do {
	    var container = path.container;

	    if (path.isFunction() && !first) {
	      return !!allowInsideFunction;
	    }

	    first = false;

	    if (Array.isArray(container) && path.key !== container.length - 1) {
	      return false;
	    }
	  } while ((path = path.parentPath) && !path.isProgram());

	  return true;
	}

	function isStatementOrBlock() {
	  if (this.parentPath.isLabeledStatement() || t.isBlockStatement(this.container)) {
	    return false;
	  } else {
	    return (0, _includes2.default)(t.STATEMENT_OR_BLOCK_KEYS, this.key);
	  }
	}

	function referencesImport(moduleSource, importName) {
	  if (!this.isReferencedIdentifier()) return false;

	  var binding = this.scope.getBinding(this.node.name);
	  if (!binding || binding.kind !== "module") return false;

	  var path = binding.path;
	  var parent = path.parentPath;
	  if (!parent.isImportDeclaration()) return false;

	  if (parent.node.source.value === moduleSource) {
	    if (!importName) return true;
	  } else {
	    return false;
	  }

	  if (path.isImportDefaultSpecifier() && importName === "default") {
	    return true;
	  }

	  if (path.isImportNamespaceSpecifier() && importName === "*") {
	    return true;
	  }

	  if (path.isImportSpecifier() && path.node.imported.name === importName) {
	    return true;
	  }

	  return false;
	}

	function getSource() {
	  var node = this.node;
	  if (node.end) {
	    return this.hub.file.code.slice(node.start, node.end);
	  } else {
	    return "";
	  }
	}

	function willIMaybeExecuteBefore(target) {
	  return this._guessExecutionStatusRelativeTo(target) !== "after";
	}

	function _guessExecutionStatusRelativeTo(target) {
	  var targetFuncParent = target.scope.getFunctionParent();
	  var selfFuncParent = this.scope.getFunctionParent();

	  if (targetFuncParent.node !== selfFuncParent.node) {
	    var status = this._guessExecutionStatusRelativeToDifferentFunctions(targetFuncParent);
	    if (status) {
	      return status;
	    } else {
	      target = targetFuncParent.path;
	    }
	  }

	  var targetPaths = target.getAncestry();
	  if (targetPaths.indexOf(this) >= 0) return "after";

	  var selfPaths = this.getAncestry();

	  var commonPath = void 0;
	  var targetIndex = void 0;
	  var selfIndex = void 0;
	  for (selfIndex = 0; selfIndex < selfPaths.length; selfIndex++) {
	    var selfPath = selfPaths[selfIndex];
	    targetIndex = targetPaths.indexOf(selfPath);
	    if (targetIndex >= 0) {
	      commonPath = selfPath;
	      break;
	    }
	  }
	  if (!commonPath) {
	    return "before";
	  }

	  var targetRelationship = targetPaths[targetIndex - 1];
	  var selfRelationship = selfPaths[selfIndex - 1];
	  if (!targetRelationship || !selfRelationship) {
	    return "before";
	  }

	  if (targetRelationship.listKey && targetRelationship.container === selfRelationship.container) {
	    return targetRelationship.key > selfRelationship.key ? "before" : "after";
	  }

	  var targetKeyPosition = t.VISITOR_KEYS[targetRelationship.type].indexOf(targetRelationship.key);
	  var selfKeyPosition = t.VISITOR_KEYS[selfRelationship.type].indexOf(selfRelationship.key);
	  return targetKeyPosition > selfKeyPosition ? "before" : "after";
	}

	function _guessExecutionStatusRelativeToDifferentFunctions(targetFuncParent) {
	  var targetFuncPath = targetFuncParent.path;
	  if (!targetFuncPath.isFunctionDeclaration()) return;

	  var binding = targetFuncPath.scope.getBinding(targetFuncPath.node.id.name);

	  if (!binding.references) return "before";

	  var referencePaths = binding.referencePaths;

	  for (var _iterator = referencePaths, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var path = _ref;

	    if (path.key !== "callee" || !path.parentPath.isCallExpression()) {
	      return;
	    }
	  }

	  var allStatus = void 0;

	  for (var _iterator2 = referencePaths, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	    var _ref2;

	    if (_isArray2) {
	      if (_i2 >= _iterator2.length) break;
	      _ref2 = _iterator2[_i2++];
	    } else {
	      _i2 = _iterator2.next();
	      if (_i2.done) break;
	      _ref2 = _i2.value;
	    }

	    var _path = _ref2;

	    var childOfFunction = !!_path.find(function (path) {
	      return path.node === targetFuncPath.node;
	    });
	    if (childOfFunction) continue;

	    var status = this._guessExecutionStatusRelativeTo(_path);

	    if (allStatus) {
	      if (allStatus !== status) return;
	    } else {
	      allStatus = status;
	    }
	  }

	  return allStatus;
	}

	function resolve(dangerous, resolved) {
	  return this._resolve(dangerous, resolved) || this;
	}

	function _resolve(dangerous, resolved) {
	  if (resolved && resolved.indexOf(this) >= 0) return;

	  resolved = resolved || [];
	  resolved.push(this);

	  if (this.isVariableDeclarator()) {
	    if (this.get("id").isIdentifier()) {
	      return this.get("init").resolve(dangerous, resolved);
	    } else {}
	  } else if (this.isReferencedIdentifier()) {
	    var binding = this.scope.getBinding(this.node.name);
	    if (!binding) return;

	    if (!binding.constant) return;

	    if (binding.kind === "module") return;

	    if (binding.path !== this) {
	      var ret = binding.path.resolve(dangerous, resolved);

	      if (this.find(function (parent) {
	        return parent.node === ret.node;
	      })) return;
	      return ret;
	    }
	  } else if (this.isTypeCastExpression()) {
	    return this.get("expression").resolve(dangerous, resolved);
	  } else if (dangerous && this.isMemberExpression()) {

	    var targetKey = this.toComputedKey();
	    if (!t.isLiteral(targetKey)) return;

	    var targetName = targetKey.value;

	    var target = this.get("object").resolve(dangerous, resolved);

	    if (target.isObjectExpression()) {
	      var props = target.get("properties");
	      for (var _iterator3 = props, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
	        var _ref3;

	        if (_isArray3) {
	          if (_i3 >= _iterator3.length) break;
	          _ref3 = _iterator3[_i3++];
	        } else {
	          _i3 = _iterator3.next();
	          if (_i3.done) break;
	          _ref3 = _i3.value;
	        }

	        var prop = _ref3;

	        if (!prop.isProperty()) continue;

	        var key = prop.get("key");

	        var match = prop.isnt("computed") && key.isIdentifier({ name: targetName });

	        match = match || key.isLiteral({ value: targetName });

	        if (match) return prop.get("value").resolve(dangerous, resolved);
	      }
	    } else if (target.isArrayExpression() && !isNaN(+targetName)) {
	      var elems = target.get("elements");
	      var elem = elems[targetName];
	      if (elem) return elem.resolve(dangerous, resolved);
	    }
	  }
	}

/***/ },
/* 641 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.call = call;
	exports._call = _call;
	exports.isBlacklisted = isBlacklisted;
	exports.visit = visit;
	exports.skip = skip;
	exports.skipKey = skipKey;
	exports.stop = stop;
	exports.setScope = setScope;
	exports.setContext = setContext;
	exports.resync = resync;
	exports._resyncParent = _resyncParent;
	exports._resyncKey = _resyncKey;
	exports._resyncList = _resyncList;
	exports._resyncRemoved = _resyncRemoved;
	exports.popContext = popContext;
	exports.pushContext = pushContext;
	exports.setup = setup;
	exports.setKey = setKey;
	exports.requeue = requeue;
	exports._getQueueContexts = _getQueueContexts;

	var _index = __webpack_require__(436);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function call(key) {
	  var opts = this.opts;

	  this.debug(function () {
	    return key;
	  });

	  if (this.node) {
	    if (this._call(opts[key])) return true;
	  }

	  if (this.node) {
	    return this._call(opts[this.node.type] && opts[this.node.type][key]);
	  }

	  return false;
	}

	function _call(fns) {
	  if (!fns) return false;

	  for (var _iterator = fns, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var fn = _ref;

	    if (!fn) continue;

	    var node = this.node;
	    if (!node) return true;

	    var ret = fn.call(this.state, this, this.state);
	    if (ret) throw new Error("Unexpected return value from visitor method " + fn);

	    if (this.node !== node) return true;

	    if (this.shouldStop || this.shouldSkip || this.removed) return true;
	  }

	  return false;
	}

	function isBlacklisted() {
	  var blacklist = this.opts.blacklist;
	  return blacklist && blacklist.indexOf(this.node.type) > -1;
	}

	function visit() {
	  if (!this.node) {
	    return false;
	  }

	  if (this.isBlacklisted()) {
	    return false;
	  }

	  if (this.opts.shouldSkip && this.opts.shouldSkip(this)) {
	    return false;
	  }

	  if (this.call("enter") || this.shouldSkip) {
	    this.debug(function () {
	      return "Skip...";
	    });
	    return this.shouldStop;
	  }

	  this.debug(function () {
	    return "Recursing into...";
	  });
	  _index2.default.node(this.node, this.opts, this.scope, this.state, this, this.skipKeys);

	  this.call("exit");

	  return this.shouldStop;
	}

	function skip() {
	  this.shouldSkip = true;
	}

	function skipKey(key) {
	  this.skipKeys[key] = true;
	}

	function stop() {
	  this.shouldStop = true;
	  this.shouldSkip = true;
	}

	function setScope() {
	  if (this.opts && this.opts.noScope) return;

	  var target = this.context && this.context.scope;

	  if (!target) {
	    var path = this.parentPath;
	    while (path && !target) {
	      if (path.opts && path.opts.noScope) return;

	      target = path.scope;
	      path = path.parentPath;
	    }
	  }

	  this.scope = this.getScope(target);
	  if (this.scope) this.scope.init();
	}

	function setContext(context) {
	  this.shouldSkip = false;
	  this.shouldStop = false;
	  this.removed = false;
	  this.skipKeys = {};

	  if (context) {
	    this.context = context;
	    this.state = context.state;
	    this.opts = context.opts;
	  }

	  this.setScope();

	  return this;
	}

	function resync() {
	  if (this.removed) return;

	  this._resyncParent();
	  this._resyncList();
	  this._resyncKey();
	}

	function _resyncParent() {
	  if (this.parentPath) {
	    this.parent = this.parentPath.node;
	  }
	}

	function _resyncKey() {
	  if (!this.container) return;

	  if (this.node === this.container[this.key]) return;

	  if (Array.isArray(this.container)) {
	    for (var i = 0; i < this.container.length; i++) {
	      if (this.container[i] === this.node) {
	        return this.setKey(i);
	      }
	    }
	  } else {
	    for (var key in this.container) {
	      if (this.container[key] === this.node) {
	        return this.setKey(key);
	      }
	    }
	  }

	  this.key = null;
	}

	function _resyncList() {
	  if (!this.parent || !this.inList) return;

	  var newContainer = this.parent[this.listKey];
	  if (this.container === newContainer) return;

	  this.container = newContainer || null;
	}

	function _resyncRemoved() {
	  if (this.key == null || !this.container || this.container[this.key] !== this.node) {
	    this._markRemoved();
	  }
	}

	function popContext() {
	  this.contexts.pop();
	  this.setContext(this.contexts[this.contexts.length - 1]);
	}

	function pushContext(context) {
	  this.contexts.push(context);
	  this.setContext(context);
	}

	function setup(parentPath, container, listKey, key) {
	  this.inList = !!listKey;
	  this.listKey = listKey;
	  this.parentKey = listKey || key;
	  this.container = container;

	  this.parentPath = parentPath || this.parentPath;
	  this.setKey(key);
	}

	function setKey(key) {
	  this.key = key;
	  this.node = this.container[this.key];
	  this.type = this.node && this.node.type;
	}

	function requeue() {
	  var pathToQueue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

	  if (pathToQueue.removed) return;

	  var contexts = this.contexts;

	  for (var _iterator2 = contexts, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	    var _ref2;

	    if (_isArray2) {
	      if (_i2 >= _iterator2.length) break;
	      _ref2 = _iterator2[_i2++];
	    } else {
	      _i2 = _iterator2.next();
	      if (_i2.done) break;
	      _ref2 = _i2.value;
	    }

	    var context = _ref2;

	    context.maybeQueue(pathToQueue);
	  }
	}

	function _getQueueContexts() {
	  var path = this;
	  var contexts = this.contexts;
	  while (!contexts.length) {
	    path = path.parentPath;
	    contexts = path.contexts;
	  }
	  return contexts;
	}

/***/ },
/* 642 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.remove = remove;
	exports._callRemovalHooks = _callRemovalHooks;
	exports._remove = _remove;
	exports._markRemoved = _markRemoved;
	exports._assertUnremoved = _assertUnremoved;

	var _removalHooks = __webpack_require__(643);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function remove() {
	  this._assertUnremoved();

	  this.resync();

	  if (this._callRemovalHooks()) {
	    this._markRemoved();
	    return;
	  }

	  this.shareCommentsWithSiblings();
	  this._remove();
	  this._markRemoved();
	}

	function _callRemovalHooks() {
	  for (var _iterator = _removalHooks.hooks, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var fn = _ref;

	    if (fn(this, this.parentPath)) return true;
	  }
	}

	function _remove() {
	  if (Array.isArray(this.container)) {
	    this.container.splice(this.key, 1);
	    this.updateSiblingKeys(this.key, -1);
	  } else {
	    this._replaceWith(null);
	  }
	}

	function _markRemoved() {
	  this.shouldSkip = true;
	  this.removed = true;
	  this.node = null;
	}

	function _assertUnremoved() {
	  if (this.removed) {
	    throw this.buildCodeFrameError("NodePath has been removed so is read-only.");
	  }
	}

/***/ },
/* 643 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var hooks = exports.hooks = [function (self, parent) {
	  var removeParent = self.key === "test" && (parent.isWhile() || parent.isSwitchCase()) || self.key === "declaration" && parent.isExportDeclaration() || self.key === "body" && parent.isLabeledStatement() || self.listKey === "declarations" && parent.isVariableDeclaration() && parent.node.declarations.length === 1 || self.key === "expression" && parent.isExpressionStatement();

	  if (removeParent) {
	    parent.remove();
	    return true;
	  }
	}, function (self, parent) {
	  if (parent.isSequenceExpression() && parent.node.expressions.length === 1) {
	    parent.replaceWith(parent.node.expressions[0]);
	    return true;
	  }
	}, function (self, parent) {
	  if (parent.isBinary()) {
	    if (self.key === "left") {
	      parent.replaceWith(parent.node.right);
	    } else {
	      parent.replaceWith(parent.node.left);
	    }
	    return true;
	  }
	}, function (self, parent) {
	  if (parent.isIfStatement() && (self.key === "consequent" || self.key === "alternate") || self.key === "body" && (parent.isLoop() || parent.isArrowFunctionExpression())) {
	    self.replaceWith({
	      type: "BlockStatement",
	      body: []
	    });
	    return true;
	  }
	}];

/***/ },
/* 644 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(522);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.insertBefore = insertBefore;
	exports._containerInsert = _containerInsert;
	exports._containerInsertBefore = _containerInsertBefore;
	exports._containerInsertAfter = _containerInsertAfter;
	exports._maybePopFromStatements = _maybePopFromStatements;
	exports.insertAfter = insertAfter;
	exports.updateSiblingKeys = updateSiblingKeys;
	exports._verifyNodeList = _verifyNodeList;
	exports.unshiftContainer = unshiftContainer;
	exports.pushContainer = pushContainer;
	exports.hoist = hoist;

	var _cache = __webpack_require__(618);

	var _hoister = __webpack_require__(645);

	var _hoister2 = _interopRequireDefault(_hoister);

	var _index = __webpack_require__(490);

	var _index2 = _interopRequireDefault(_index);

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function insertBefore(nodes) {
	  this._assertUnremoved();

	  nodes = this._verifyNodeList(nodes);

	  if (this.parentPath.isExpressionStatement() || this.parentPath.isLabeledStatement()) {
	    return this.parentPath.insertBefore(nodes);
	  } else if (this.isNodeType("Expression") || this.parentPath.isForStatement() && this.key === "init") {
	    if (this.node) nodes.push(this.node);
	    this.replaceExpressionWithStatements(nodes);
	  } else {
	    this._maybePopFromStatements(nodes);
	    if (Array.isArray(this.container)) {
	      return this._containerInsertBefore(nodes);
	    } else if (this.isStatementOrBlock()) {
	      if (this.node) nodes.push(this.node);
	      this._replaceWith(t.blockStatement(nodes));
	    } else {
	      throw new Error("We don't know what to do with this node type. " + "We were previously a Statement but we can't fit in here?");
	    }
	  }

	  return [this];
	}

	function _containerInsert(from, nodes) {
	  this.updateSiblingKeys(from, nodes.length);

	  var paths = [];

	  for (var i = 0; i < nodes.length; i++) {
	    var to = from + i;
	    var node = nodes[i];
	    this.container.splice(to, 0, node);

	    if (this.context) {
	      var path = this.context.create(this.parent, this.container, to, this.listKey);

	      if (this.context.queue) path.pushContext(this.context);
	      paths.push(path);
	    } else {
	      paths.push(_index2.default.get({
	        parentPath: this.parentPath,
	        parent: this.parent,
	        container: this.container,
	        listKey: this.listKey,
	        key: to
	      }));
	    }
	  }

	  var contexts = this._getQueueContexts();

	  for (var _iterator = paths, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var _path = _ref;

	    _path.setScope();
	    _path.debug(function () {
	      return "Inserted.";
	    });

	    for (var _iterator2 = contexts, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	      var _ref2;

	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }

	      var context = _ref2;

	      context.maybeQueue(_path, true);
	    }
	  }

	  return paths;
	}

	function _containerInsertBefore(nodes) {
	  return this._containerInsert(this.key, nodes);
	}

	function _containerInsertAfter(nodes) {
	  return this._containerInsert(this.key + 1, nodes);
	}

	function _maybePopFromStatements(nodes) {
	  var last = nodes[nodes.length - 1];
	  var isIdentifier = t.isIdentifier(last) || t.isExpressionStatement(last) && t.isIdentifier(last.expression);

	  if (isIdentifier && !this.isCompletionRecord()) {
	    nodes.pop();
	  }
	}

	function insertAfter(nodes) {
	  this._assertUnremoved();

	  nodes = this._verifyNodeList(nodes);

	  if (this.parentPath.isExpressionStatement() || this.parentPath.isLabeledStatement()) {
	    return this.parentPath.insertAfter(nodes);
	  } else if (this.isNodeType("Expression") || this.parentPath.isForStatement() && this.key === "init") {
	    if (this.node) {
	      var temp = this.scope.generateDeclaredUidIdentifier();
	      nodes.unshift(t.expressionStatement(t.assignmentExpression("=", temp, this.node)));
	      nodes.push(t.expressionStatement(temp));
	    }
	    this.replaceExpressionWithStatements(nodes);
	  } else {
	    this._maybePopFromStatements(nodes);
	    if (Array.isArray(this.container)) {
	      return this._containerInsertAfter(nodes);
	    } else if (this.isStatementOrBlock()) {
	      if (this.node) nodes.unshift(this.node);
	      this._replaceWith(t.blockStatement(nodes));
	    } else {
	      throw new Error("We don't know what to do with this node type. " + "We were previously a Statement but we can't fit in here?");
	    }
	  }

	  return [this];
	}

	function updateSiblingKeys(fromIndex, incrementBy) {
	  if (!this.parent) return;

	  var paths = _cache.path.get(this.parent);
	  for (var i = 0; i < paths.length; i++) {
	    var path = paths[i];
	    if (path.key >= fromIndex) {
	      path.key += incrementBy;
	    }
	  }
	}

	function _verifyNodeList(nodes) {
	  if (!nodes) {
	    return [];
	  }

	  if (nodes.constructor !== Array) {
	    nodes = [nodes];
	  }

	  for (var i = 0; i < nodes.length; i++) {
	    var node = nodes[i];
	    var msg = void 0;

	    if (!node) {
	      msg = "has falsy node";
	    } else if ((typeof node === "undefined" ? "undefined" : (0, _typeof3.default)(node)) !== "object") {
	      msg = "contains a non-object node";
	    } else if (!node.type) {
	      msg = "without a type";
	    } else if (node instanceof _index2.default) {
	      msg = "has a NodePath when it expected a raw object";
	    }

	    if (msg) {
	      var type = Array.isArray(node) ? "array" : typeof node === "undefined" ? "undefined" : (0, _typeof3.default)(node);
	      throw new Error("Node list " + msg + " with the index of " + i + " and type of " + type);
	    }
	  }

	  return nodes;
	}

	function unshiftContainer(listKey, nodes) {
	  this._assertUnremoved();

	  nodes = this._verifyNodeList(nodes);

	  var path = _index2.default.get({
	    parentPath: this,
	    parent: this.node,
	    container: this.node[listKey],
	    listKey: listKey,
	    key: 0
	  });

	  return path.insertBefore(nodes);
	}

	function pushContainer(listKey, nodes) {
	  this._assertUnremoved();

	  nodes = this._verifyNodeList(nodes);

	  var container = this.node[listKey];
	  var path = _index2.default.get({
	    parentPath: this,
	    parent: this.node,
	    container: container,
	    listKey: listKey,
	    key: container.length
	  });

	  return path.replaceWithMultiple(nodes);
	}

	function hoist() {
	  var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.scope;

	  var hoister = new _hoister2.default(this, scope);
	  return hoister.run();
	}

/***/ },
/* 645 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _classCallCheck2 = __webpack_require__(491);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var referenceVisitor = {
	  ReferencedIdentifier: function ReferencedIdentifier(path, state) {
	    if (path.isJSXIdentifier() && _babelTypes.react.isCompatTag(path.node.name) && !path.parentPath.isJSXMemberExpression()) {
	      return;
	    }

	    if (path.node.name === "this") {
	      var scope = path.scope;
	      do {
	        if (scope.path.isFunction() && !scope.path.isArrowFunctionExpression()) break;
	      } while (scope = scope.parent);
	      if (scope) state.breakOnScopePaths.push(scope.path);
	    }

	    var binding = path.scope.getBinding(path.node.name);
	    if (!binding) return;

	    if (binding !== state.scope.getBinding(path.node.name)) return;

	    state.bindings[path.node.name] = binding;
	  }
	};

	var PathHoister = function () {
	  function PathHoister(path, scope) {
	    (0, _classCallCheck3.default)(this, PathHoister);

	    this.breakOnScopePaths = [];

	    this.bindings = {};

	    this.scopes = [];

	    this.scope = scope;
	    this.path = path;

	    this.attachAfter = false;
	  }

	  PathHoister.prototype.isCompatibleScope = function isCompatibleScope(scope) {
	    for (var key in this.bindings) {
	      var binding = this.bindings[key];
	      if (!scope.bindingIdentifierEquals(key, binding.identifier)) {
	        return false;
	      }
	    }

	    return true;
	  };

	  PathHoister.prototype.getCompatibleScopes = function getCompatibleScopes() {
	    var scope = this.path.scope;
	    do {
	      if (this.isCompatibleScope(scope)) {
	        this.scopes.push(scope);
	      } else {
	        break;
	      }

	      if (this.breakOnScopePaths.indexOf(scope.path) >= 0) {
	        break;
	      }
	    } while (scope = scope.parent);
	  };

	  PathHoister.prototype.getAttachmentPath = function getAttachmentPath() {
	    var path = this._getAttachmentPath();
	    if (!path) return;

	    var targetScope = path.scope;

	    if (targetScope.path === path) {
	      targetScope = path.scope.parent;
	    }

	    if (targetScope.path.isProgram() || targetScope.path.isFunction()) {
	      for (var name in this.bindings) {
	        if (!targetScope.hasOwnBinding(name)) continue;

	        var binding = this.bindings[name];

	        if (binding.kind === "param") continue;

	        if (this.getAttachmentParentForPath(binding.path).key > path.key) {
	          this.attachAfter = true;
	          path = binding.path;

	          for (var _iterator = binding.constantViolations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	            var _ref;

	            if (_isArray) {
	              if (_i >= _iterator.length) break;
	              _ref = _iterator[_i++];
	            } else {
	              _i = _iterator.next();
	              if (_i.done) break;
	              _ref = _i.value;
	            }

	            var violationPath = _ref;

	            if (this.getAttachmentParentForPath(violationPath).key > path.key) {
	              path = violationPath;
	            }
	          }
	        }
	      }
	    }

	    if (path.parentPath.isExportDeclaration()) {
	      path = path.parentPath;
	    }

	    return path;
	  };

	  PathHoister.prototype._getAttachmentPath = function _getAttachmentPath() {
	    var scopes = this.scopes;

	    var scope = scopes.pop();

	    if (!scope) return;

	    if (scope.path.isFunction()) {
	      if (this.hasOwnParamBindings(scope)) {
	        if (this.scope === scope) return;

	        return scope.path.get("body").get("body")[0];
	      } else {
	        return this.getNextScopeAttachmentParent();
	      }
	    } else if (scope.path.isProgram()) {
	      return this.getNextScopeAttachmentParent();
	    }
	  };

	  PathHoister.prototype.getNextScopeAttachmentParent = function getNextScopeAttachmentParent() {
	    var scope = this.scopes.pop();
	    if (scope) return this.getAttachmentParentForPath(scope.path);
	  };

	  PathHoister.prototype.getAttachmentParentForPath = function getAttachmentParentForPath(path) {
	    do {
	      if (!path.parentPath || Array.isArray(path.container) && path.isStatement() || path.isVariableDeclarator() && path.parentPath.node !== null && path.parentPath.node.declarations.length > 1) return path;
	    } while (path = path.parentPath);
	  };

	  PathHoister.prototype.hasOwnParamBindings = function hasOwnParamBindings(scope) {
	    for (var name in this.bindings) {
	      if (!scope.hasOwnBinding(name)) continue;

	      var binding = this.bindings[name];

	      if (binding.kind === "param" && binding.constant) return true;
	    }
	    return false;
	  };

	  PathHoister.prototype.run = function run() {
	    var node = this.path.node;
	    if (node._hoisted) return;
	    node._hoisted = true;

	    this.path.traverse(referenceVisitor, this);

	    this.getCompatibleScopes();

	    var attachTo = this.getAttachmentPath();
	    if (!attachTo) return;

	    if (attachTo.getFunctionParent() === this.path.getFunctionParent()) return;

	    var uid = attachTo.scope.generateUidIdentifier("ref");
	    var declarator = t.variableDeclarator(uid, this.path.node);

	    var insertFn = this.attachAfter ? "insertAfter" : "insertBefore";
	    attachTo[insertFn]([attachTo.isVariableDeclarator() ? declarator : t.variableDeclaration("var", [declarator])]);

	    var parent = this.path.parentPath;
	    if (parent.isJSXElement() && this.path.container === parent.node.children) {
	      uid = t.JSXExpressionContainer(uid);
	    }

	    this.path.replaceWith(uid);
	  };

	  return PathHoister;
	}();

	exports.default = PathHoister;
	module.exports = exports["default"];

/***/ },
/* 646 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _create = __webpack_require__(518);

	var _create2 = _interopRequireDefault(_create);

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.getStatementParent = getStatementParent;
	exports.getOpposite = getOpposite;
	exports.getCompletionRecords = getCompletionRecords;
	exports.getSibling = getSibling;
	exports.getPrevSibling = getPrevSibling;
	exports.getNextSibling = getNextSibling;
	exports.getAllNextSiblings = getAllNextSiblings;
	exports.getAllPrevSiblings = getAllPrevSiblings;
	exports.get = get;
	exports._getKey = _getKey;
	exports._getPattern = _getPattern;
	exports.getBindingIdentifiers = getBindingIdentifiers;
	exports.getOuterBindingIdentifiers = getOuterBindingIdentifiers;
	exports.getBindingIdentifierPaths = getBindingIdentifierPaths;
	exports.getOuterBindingIdentifierPaths = getOuterBindingIdentifierPaths;

	var _index = __webpack_require__(490);

	var _index2 = _interopRequireDefault(_index);

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStatementParent() {
	  var path = this;

	  do {
	    if (!path.parentPath || Array.isArray(path.container) && path.isStatement()) {
	      break;
	    } else {
	      path = path.parentPath;
	    }
	  } while (path);

	  if (path && (path.isProgram() || path.isFile())) {
	    throw new Error("File/Program node, we can't possibly find a statement parent to this");
	  }

	  return path;
	}

	function getOpposite() {
	  if (this.key === "left") {
	    return this.getSibling("right");
	  } else if (this.key === "right") {
	    return this.getSibling("left");
	  }
	}

	function getCompletionRecords() {
	  var paths = [];

	  var add = function add(path) {
	    if (path) paths = paths.concat(path.getCompletionRecords());
	  };

	  if (this.isIfStatement()) {
	    add(this.get("consequent"));
	    add(this.get("alternate"));
	  } else if (this.isDoExpression() || this.isFor() || this.isWhile()) {
	    add(this.get("body"));
	  } else if (this.isProgram() || this.isBlockStatement()) {
	    add(this.get("body").pop());
	  } else if (this.isFunction()) {
	    return this.get("body").getCompletionRecords();
	  } else if (this.isTryStatement()) {
	    add(this.get("block"));
	    add(this.get("handler"));
	    add(this.get("finalizer"));
	  } else {
	    paths.push(this);
	  }

	  return paths;
	}

	function getSibling(key) {
	  return _index2.default.get({
	    parentPath: this.parentPath,
	    parent: this.parent,
	    container: this.container,
	    listKey: this.listKey,
	    key: key
	  });
	}

	function getPrevSibling() {
	  return this.getSibling(this.key - 1);
	}

	function getNextSibling() {
	  return this.getSibling(this.key + 1);
	}

	function getAllNextSiblings() {
	  var _key = this.key;
	  var sibling = this.getSibling(++_key);
	  var siblings = [];
	  while (sibling.node) {
	    siblings.push(sibling);
	    sibling = this.getSibling(++_key);
	  }
	  return siblings;
	}

	function getAllPrevSiblings() {
	  var _key = this.key;
	  var sibling = this.getSibling(--_key);
	  var siblings = [];
	  while (sibling.node) {
	    siblings.push(sibling);
	    sibling = this.getSibling(--_key);
	  }
	  return siblings;
	}

	function get(key, context) {
	  if (context === true) context = this.context;
	  var parts = key.split(".");
	  if (parts.length === 1) {
	    return this._getKey(key, context);
	  } else {
	    return this._getPattern(parts, context);
	  }
	}

	function _getKey(key, context) {
	  var _this = this;

	  var node = this.node;
	  var container = node[key];

	  if (Array.isArray(container)) {
	    return container.map(function (_, i) {
	      return _index2.default.get({
	        listKey: key,
	        parentPath: _this,
	        parent: node,
	        container: container,
	        key: i
	      }).setContext(context);
	    });
	  } else {
	    return _index2.default.get({
	      parentPath: this,
	      parent: node,
	      container: node,
	      key: key
	    }).setContext(context);
	  }
	}

	function _getPattern(parts, context) {
	  var path = this;
	  for (var _iterator = parts, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var part = _ref;

	    if (part === ".") {
	      path = path.parentPath;
	    } else {
	      if (Array.isArray(path)) {
	        path = path[part];
	      } else {
	        path = path.get(part, context);
	      }
	    }
	  }
	  return path;
	}

	function getBindingIdentifiers(duplicates) {
	  return t.getBindingIdentifiers(this.node, duplicates);
	}

	function getOuterBindingIdentifiers(duplicates) {
	  return t.getOuterBindingIdentifiers(this.node, duplicates);
	}

	function getBindingIdentifierPaths() {
	  var duplicates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	  var outerOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var path = this;
	  var search = [].concat(path);
	  var ids = (0, _create2.default)(null);

	  while (search.length) {
	    var id = search.shift();
	    if (!id) continue;
	    if (!id.node) continue;

	    var keys = t.getBindingIdentifiers.keys[id.node.type];

	    if (id.isIdentifier()) {
	      if (duplicates) {
	        var _ids = ids[id.node.name] = ids[id.node.name] || [];
	        _ids.push(id);
	      } else {
	        ids[id.node.name] = id;
	      }
	      continue;
	    }

	    if (id.isExportDeclaration()) {
	      var declaration = id.get("declaration");
	      if (declaration.isDeclaration()) {
	        search.push(declaration);
	      }
	      continue;
	    }

	    if (outerOnly) {
	      if (id.isFunctionDeclaration()) {
	        search.push(id.get("id"));
	        continue;
	      }
	      if (id.isFunctionExpression()) {
	        continue;
	      }
	    }

	    if (keys) {
	      for (var i = 0; i < keys.length; i++) {
	        var key = keys[i];
	        var child = id.get(key);
	        if (Array.isArray(child) || child.node) {
	          search = search.concat(child);
	        }
	      }
	    }
	  }

	  return ids;
	}

	function getOuterBindingIdentifierPaths(duplicates) {
	  return this.getBindingIdentifierPaths(duplicates, true);
	}

/***/ },
/* 647 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.shareCommentsWithSiblings = shareCommentsWithSiblings;
	exports.addComment = addComment;
	exports.addComments = addComments;
	function shareCommentsWithSiblings() {
	  if (typeof this.key === "string") return;

	  var node = this.node;
	  if (!node) return;

	  var trailing = node.trailingComments;
	  var leading = node.leadingComments;
	  if (!trailing && !leading) return;

	  var prev = this.getSibling(this.key - 1);
	  var next = this.getSibling(this.key + 1);

	  if (!prev.node) prev = next;
	  if (!next.node) next = prev;

	  prev.addComments("trailing", leading);
	  next.addComments("leading", trailing);
	}

	function addComment(type, content, line) {
	  this.addComments(type, [{
	    type: line ? "CommentLine" : "CommentBlock",
	    value: content
	  }]);
	}

	function addComments(type, comments) {
	  if (!comments) return;

	  var node = this.node;
	  if (!node) return;

	  var key = type + "Comments";

	  if (node[key]) {
	    node[key] = node[key].concat(comments);
	  } else {
	    node[key] = comments;
	  }
	}

/***/ },
/* 648 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(491);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Hub = function Hub(file, options) {
	  (0, _classCallCheck3.default)(this, Hub);

	  this.file = file;
	  this.options = options;
	};

	exports.default = Hub;
	module.exports = exports["default"];

/***/ },
/* 649 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _classCallCheck2 = __webpack_require__(491);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _path2 = __webpack_require__(490);

	var _path3 = _interopRequireDefault(_path2);

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var testing = ("production") === "test";

	var TraversalContext = function () {
	  function TraversalContext(scope, opts, state, parentPath) {
	    (0, _classCallCheck3.default)(this, TraversalContext);
	    this.queue = null;

	    this.parentPath = parentPath;
	    this.scope = scope;
	    this.state = state;
	    this.opts = opts;
	  }

	  TraversalContext.prototype.shouldVisit = function shouldVisit(node) {
	    var opts = this.opts;
	    if (opts.enter || opts.exit) return true;

	    if (opts[node.type]) return true;

	    var keys = t.VISITOR_KEYS[node.type];
	    if (!keys || !keys.length) return false;

	    for (var _iterator = keys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var key = _ref;

	      if (node[key]) return true;
	    }

	    return false;
	  };

	  TraversalContext.prototype.create = function create(node, obj, key, listKey) {
	    return _path3.default.get({
	      parentPath: this.parentPath,
	      parent: node,
	      container: obj,
	      key: key,
	      listKey: listKey
	    });
	  };

	  TraversalContext.prototype.maybeQueue = function maybeQueue(path, notPriority) {
	    if (this.trap) {
	      throw new Error("Infinite cycle detected");
	    }

	    if (this.queue) {
	      if (notPriority) {
	        this.queue.push(path);
	      } else {
	        this.priorityQueue.push(path);
	      }
	    }
	  };

	  TraversalContext.prototype.visitMultiple = function visitMultiple(container, parent, listKey) {
	    if (container.length === 0) return false;

	    var queue = [];

	    for (var key = 0; key < container.length; key++) {
	      var node = container[key];
	      if (node && this.shouldVisit(node)) {
	        queue.push(this.create(parent, container, key, listKey));
	      }
	    }

	    return this.visitQueue(queue);
	  };

	  TraversalContext.prototype.visitSingle = function visitSingle(node, key) {
	    if (this.shouldVisit(node[key])) {
	      return this.visitQueue([this.create(node, node, key)]);
	    } else {
	      return false;
	    }
	  };

	  TraversalContext.prototype.visitQueue = function visitQueue(queue) {
	    this.queue = queue;
	    this.priorityQueue = [];

	    var visited = [];
	    var stop = false;

	    for (var _iterator2 = queue, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	      var _ref2;

	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }

	      var path = _ref2;

	      path.resync();

	      if (path.contexts.length === 0 || path.contexts[path.contexts.length - 1] !== this) {
	        path.pushContext(this);
	      }

	      if (path.key === null) continue;

	      if (testing && queue.length >= 10000) {
	        this.trap = true;
	      }

	      if (visited.indexOf(path.node) >= 0) continue;
	      visited.push(path.node);

	      if (path.visit()) {
	        stop = true;
	        break;
	      }

	      if (this.priorityQueue.length) {
	        stop = this.visitQueue(this.priorityQueue);
	        this.priorityQueue = [];
	        this.queue = queue;
	        if (stop) break;
	      }
	    }

	    for (var _iterator3 = queue, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
	      var _ref3;

	      if (_isArray3) {
	        if (_i3 >= _iterator3.length) break;
	        _ref3 = _iterator3[_i3++];
	      } else {
	        _i3 = _iterator3.next();
	        if (_i3.done) break;
	        _ref3 = _i3.value;
	      }

	      var _path = _ref3;

	      _path.popContext();
	    }

	    this.queue = null;

	    return stop;
	  };

	  TraversalContext.prototype.visit = function visit(node, key) {
	    var nodes = node[key];
	    if (!nodes) return false;

	    if (Array.isArray(nodes)) {
	      return this.visitMultiple(nodes, node, key);
	    } else {
	      return this.visitSingle(node, key);
	    }
	  };

	  return TraversalContext;
	}();

	exports.default = TraversalContext;
	module.exports = exports["default"];

/***/ },
/* 650 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(522);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _keys = __webpack_require__(508);

	var _keys2 = _interopRequireDefault(_keys);

	var _getIterator2 = __webpack_require__(437);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.explode = explode;
	exports.verify = verify;
	exports.merge = merge;

	var _virtualTypes = __webpack_require__(492);

	var virtualTypes = _interopRequireWildcard(_virtualTypes);

	var _babelMessages = __webpack_require__(612);

	var messages = _interopRequireWildcard(_babelMessages);

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	var _clone = __webpack_require__(542);

	var _clone2 = _interopRequireDefault(_clone);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function explode(visitor) {
	  if (visitor._exploded) return visitor;
	  visitor._exploded = true;

	  for (var nodeType in visitor) {
	    if (shouldIgnoreKey(nodeType)) continue;

	    var parts = nodeType.split("|");
	    if (parts.length === 1) continue;

	    var fns = visitor[nodeType];
	    delete visitor[nodeType];

	    for (var _iterator = parts, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var part = _ref;

	      visitor[part] = fns;
	    }
	  }

	  verify(visitor);

	  delete visitor.__esModule;

	  ensureEntranceObjects(visitor);

	  ensureCallbackArrays(visitor);

	  for (var _iterator2 = (0, _keys2.default)(visitor), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	    var _ref2;

	    if (_isArray2) {
	      if (_i2 >= _iterator2.length) break;
	      _ref2 = _iterator2[_i2++];
	    } else {
	      _i2 = _iterator2.next();
	      if (_i2.done) break;
	      _ref2 = _i2.value;
	    }

	    var _nodeType3 = _ref2;

	    if (shouldIgnoreKey(_nodeType3)) continue;

	    var wrapper = virtualTypes[_nodeType3];
	    if (!wrapper) continue;

	    var _fns2 = visitor[_nodeType3];
	    for (var type in _fns2) {
	      _fns2[type] = wrapCheck(wrapper, _fns2[type]);
	    }

	    delete visitor[_nodeType3];

	    if (wrapper.types) {
	      for (var _iterator4 = wrapper.types, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
	        var _ref4;

	        if (_isArray4) {
	          if (_i4 >= _iterator4.length) break;
	          _ref4 = _iterator4[_i4++];
	        } else {
	          _i4 = _iterator4.next();
	          if (_i4.done) break;
	          _ref4 = _i4.value;
	        }

	        var _type = _ref4;

	        if (visitor[_type]) {
	          mergePair(visitor[_type], _fns2);
	        } else {
	          visitor[_type] = _fns2;
	        }
	      }
	    } else {
	      mergePair(visitor, _fns2);
	    }
	  }

	  for (var _nodeType in visitor) {
	    if (shouldIgnoreKey(_nodeType)) continue;

	    var _fns = visitor[_nodeType];

	    var aliases = t.FLIPPED_ALIAS_KEYS[_nodeType];

	    var deprecratedKey = t.DEPRECATED_KEYS[_nodeType];
	    if (deprecratedKey) {
	      console.trace("Visitor defined for " + _nodeType + " but it has been renamed to " + deprecratedKey);
	      aliases = [deprecratedKey];
	    }

	    if (!aliases) continue;

	    delete visitor[_nodeType];

	    for (var _iterator3 = aliases, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
	      var _ref3;

	      if (_isArray3) {
	        if (_i3 >= _iterator3.length) break;
	        _ref3 = _iterator3[_i3++];
	      } else {
	        _i3 = _iterator3.next();
	        if (_i3.done) break;
	        _ref3 = _i3.value;
	      }

	      var alias = _ref3;

	      var existing = visitor[alias];
	      if (existing) {
	        mergePair(existing, _fns);
	      } else {
	        visitor[alias] = (0, _clone2.default)(_fns);
	      }
	    }
	  }

	  for (var _nodeType2 in visitor) {
	    if (shouldIgnoreKey(_nodeType2)) continue;

	    ensureCallbackArrays(visitor[_nodeType2]);
	  }

	  return visitor;
	}

	function verify(visitor) {
	  if (visitor._verified) return;

	  if (typeof visitor === "function") {
	    throw new Error(messages.get("traverseVerifyRootFunction"));
	  }

	  for (var nodeType in visitor) {
	    if (nodeType === "enter" || nodeType === "exit") {
	      validateVisitorMethods(nodeType, visitor[nodeType]);
	    }

	    if (shouldIgnoreKey(nodeType)) continue;

	    if (t.TYPES.indexOf(nodeType) < 0) {
	      throw new Error(messages.get("traverseVerifyNodeType", nodeType));
	    }

	    var visitors = visitor[nodeType];
	    if ((typeof visitors === "undefined" ? "undefined" : (0, _typeof3.default)(visitors)) === "object") {
	      for (var visitorKey in visitors) {
	        if (visitorKey === "enter" || visitorKey === "exit") {
	          validateVisitorMethods(nodeType + "." + visitorKey, visitors[visitorKey]);
	        } else {
	          throw new Error(messages.get("traverseVerifyVisitorProperty", nodeType, visitorKey));
	        }
	      }
	    }
	  }

	  visitor._verified = true;
	}

	function validateVisitorMethods(path, val) {
	  var fns = [].concat(val);
	  for (var _iterator5 = fns, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);;) {
	    var _ref5;

	    if (_isArray5) {
	      if (_i5 >= _iterator5.length) break;
	      _ref5 = _iterator5[_i5++];
	    } else {
	      _i5 = _iterator5.next();
	      if (_i5.done) break;
	      _ref5 = _i5.value;
	    }

	    var fn = _ref5;

	    if (typeof fn !== "function") {
	      throw new TypeError("Non-function found defined in " + path + " with type " + (typeof fn === "undefined" ? "undefined" : (0, _typeof3.default)(fn)));
	    }
	  }
	}

	function merge(visitors) {
	  var states = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var wrapper = arguments[2];

	  var rootVisitor = {};

	  for (var i = 0; i < visitors.length; i++) {
	    var visitor = visitors[i];
	    var state = states[i];

	    explode(visitor);

	    for (var type in visitor) {
	      var visitorType = visitor[type];

	      if (state || wrapper) {
	        visitorType = wrapWithStateOrWrapper(visitorType, state, wrapper);
	      }

	      var nodeVisitor = rootVisitor[type] = rootVisitor[type] || {};
	      mergePair(nodeVisitor, visitorType);
	    }
	  }

	  return rootVisitor;
	}

	function wrapWithStateOrWrapper(oldVisitor, state, wrapper) {
	  var newVisitor = {};

	  var _loop = function _loop(key) {
	    var fns = oldVisitor[key];

	    if (!Array.isArray(fns)) return "continue";

	    fns = fns.map(function (fn) {
	      var newFn = fn;

	      if (state) {
	        newFn = function newFn(path) {
	          return fn.call(state, path, state);
	        };
	      }

	      if (wrapper) {
	        newFn = wrapper(state.key, key, newFn);
	      }

	      return newFn;
	    });

	    newVisitor[key] = fns;
	  };

	  for (var key in oldVisitor) {
	    var _ret = _loop(key);

	    if (_ret === "continue") continue;
	  }

	  return newVisitor;
	}

	function ensureEntranceObjects(obj) {
	  for (var key in obj) {
	    if (shouldIgnoreKey(key)) continue;

	    var fns = obj[key];
	    if (typeof fns === "function") {
	      obj[key] = { enter: fns };
	    }
	  }
	}

	function ensureCallbackArrays(obj) {
	  if (obj.enter && !Array.isArray(obj.enter)) obj.enter = [obj.enter];
	  if (obj.exit && !Array.isArray(obj.exit)) obj.exit = [obj.exit];
	}

	function wrapCheck(wrapper, fn) {
	  var newFn = function newFn(path) {
	    if (wrapper.checkPath(path)) {
	      return fn.apply(this, arguments);
	    }
	  };
	  newFn.toString = function () {
	    return fn.toString();
	  };
	  return newFn;
	}

	function shouldIgnoreKey(key) {
	  if (key[0] === "_") return true;

	  if (key === "enter" || key === "exit" || key === "shouldSkip") return true;

	  if (key === "blacklist" || key === "noScope" || key === "skipKeys") return true;

	  return false;
	}

	function mergePair(dest, src) {
	  for (var key in src) {
	    dest[key] = [].concat(dest[key] || [], src[key]);
	  }
	}

/***/ },
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(707);

	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */
	function flatten(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? baseFlatten(array, 1) : [];
	}

	module.exports = flatten;


/***/ },
/* 707 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(287),
	    isFlattenable = __webpack_require__(708);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ },
/* 708 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(7),
	    isArguments = __webpack_require__(208),
	    isArray = __webpack_require__(70);

	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	module.exports = isFlattenable;


/***/ },
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var feature = __webpack_require__(829);

	module.exports = feature;

/***/ },
/* 829 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var pick = __webpack_require__(67);
	var put = __webpack_require__(112);
	var fs = __webpack_require__(118);
	var path = __webpack_require__(119);

	var config = void 0;

	var flag = __webpack_require__(121);

	function isBrowser() {
	  return typeof window == "object" && typeof module == "undefined";
	}

	/**
	 * Gets a config value for a given key
	 * e.g "chrome.webSocketPort"
	 */
	function getValue(key) {
	  return pick(config, key);
	}

	function setValue(key, value) {
	  return put(config, key, value);
	}

	function isEnabled(key) {
	  return config.features && typeof config.features[key] == "object" ? config.features[key].enabled : config.features[key];
	}

	function isDevelopment() {
	  if (isBrowser()) {
	    if (true) {
	      return false;
	    }
	    var href = window.location ? window.location.href : "";
	    return href.match(/^file:/) || href.match(/localhost:/);
	  }

	  if (isFirefoxPanel()) {
	    // Default to production if compiling for the Firefox panel
	    return ("production") === "development";
	  }
	  return ("production") !== "production";
	}

	function isTesting() {
	  return flag.testing;
	}

	function isFirefoxPanel() {
	  return ("firefox-panel") == "firefox-panel";
	}

	function isApplication() {
	  return ("firefox-panel") == "application";
	}

	function isFirefox() {
	  return (/firefox/i.test(navigator.userAgent)
	  );
	}

	function setConfig(value) {
	  config = value;
	}

	function getConfig() {
	  return config;
	}

	function updateLocalConfig(relativePath) {
	  var localConfigPath = path.resolve(relativePath, "../configs/local.json");
	  var output = JSON.stringify(config, null, 2);
	  fs.writeFileSync(localConfigPath, output, { flag: "w" });
	  return output;
	}

	module.exports = {
	  isEnabled,
	  getValue,
	  setValue,
	  isDevelopment,
	  isTesting,
	  isFirefoxPanel,
	  isApplication,
	  isFirefox,
	  getConfig,
	  setConfig,
	  updateLocalConfig
	};

/***/ },
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */,
/* 888 */,
/* 889 */,
/* 890 */,
/* 891 */,
/* 892 */,
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */,
/* 898 */,
/* 899 */,
/* 900 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

	const networkRequest = __webpack_require__(901);
	const workerUtils = __webpack_require__(902);

	module.exports = {
	  networkRequest,
	  workerUtils
	};

/***/ },
/* 901 */
/***/ function(module, exports) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

	function networkRequest(url, opts) {
	  return new Promise((resolve, reject) => {
	    const req = new XMLHttpRequest();

	    req.addEventListener("readystatechange", () => {
	      if (req.readyState === XMLHttpRequest.DONE) {
	        if (req.status === 200) {
	          resolve({ content: req.responseText });
	        } else {
	          reject(req.statusText);
	        }
	      }
	    });

	    // Not working yet.
	    // if (!opts.loadFromCache) {
	    //   req.channel.loadFlags = (
	    //     Components.interfaces.nsIRequest.LOAD_BYPASS_CACHE |
	    //       Components.interfaces.nsIRequest.INHIBIT_CACHING |
	    //       Components.interfaces.nsIRequest.LOAD_ANONYMOUS
	    //   );
	    // }

	    req.open("GET", url);
	    req.send();
	  });
	}

	module.exports = networkRequest;

/***/ },
/* 902 */
/***/ function(module, exports) {

	

	function WorkerDispatcher() {
	  this.msgId = 1;
	  this.worker = null;
	} /* This Source Code Form is subject to the terms of the Mozilla Public
	   * License, v. 2.0. If a copy of the MPL was not distributed with this
	   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

	WorkerDispatcher.prototype = {
	  start(url) {
	    this.worker = new Worker(url);
	    this.worker.onerror = () => {
	      console.error(`Error in worker ${url}`);
	    };
	  },

	  stop() {
	    if (!this.worker) {
	      return;
	    }

	    this.worker.terminate();
	    this.worker = null;
	  },

	  task(method) {
	    return (...args) => {
	      return new Promise((resolve, reject) => {
	        const id = this.msgId++;
	        this.worker.postMessage({ id, method, args });

	        const listener = ({ data: result }) => {
	          if (result.id !== id) {
	            return;
	          }

	          this.worker.removeEventListener("message", listener);
	          if (result.error) {
	            reject(result.error);
	          } else {
	            resolve(result.response);
	          }
	        };

	        this.worker.addEventListener("message", listener);
	      });
	    };
	  }
	};

	function workerHandler(publicInterface) {
	  return function workerHandler(msg) {
	    const { id, method, args } = msg.data;
	    const response = publicInterface[method].apply(undefined, args);
	    if (response instanceof Promise) {
	      response.then(val => self.postMessage({ id, response: val }), err => self.postMessage({ id, error: err }));
	    } else {
	      self.postMessage({ id, response });
	    }
	  };
	}

	module.exports = {
	  WorkerDispatcher,
	  workerHandler
	};

/***/ },
/* 903 */,
/* 904 */,
/* 905 */,
/* 906 */,
/* 907 */,
/* 908 */,
/* 909 */,
/* 910 */,
/* 911 */,
/* 912 */,
/* 913 */,
/* 914 */,
/* 915 */,
/* 916 */,
/* 917 */,
/* 918 */,
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */,
/* 923 */,
/* 924 */,
/* 925 */,
/* 926 */,
/* 927 */,
/* 928 */,
/* 929 */,
/* 930 */,
/* 931 */,
/* 932 */,
/* 933 */,
/* 934 */,
/* 935 */,
/* 936 */,
/* 937 */,
/* 938 */,
/* 939 */,
/* 940 */,
/* 941 */,
/* 942 */,
/* 943 */,
/* 944 */,
/* 945 */,
/* 946 */,
/* 947 */,
/* 948 */,
/* 949 */,
/* 950 */,
/* 951 */,
/* 952 */,
/* 953 */,
/* 954 */,
/* 955 */,
/* 956 */,
/* 957 */,
/* 958 */,
/* 959 */,
/* 960 */,
/* 961 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _closest = __webpack_require__(1055);

	var _scopes = __webpack_require__(1049);

	var _getSymbols = __webpack_require__(1050);

	var _getSymbols2 = _interopRequireDefault(_getSymbols);

	var _getOutOfScopeLocations = __webpack_require__(1072);

	var _getOutOfScopeLocations2 = _interopRequireDefault(_getOutOfScopeLocations);

	var _devtoolsUtils = __webpack_require__(900);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var workerHandler = _devtoolsUtils.workerUtils.workerHandler;


	self.onmessage = workerHandler({
	  getClosestExpression: _closest.getClosestExpression,
	  getOutOfScopeLocations: _getOutOfScopeLocations2.default,
	  getSymbols: _getSymbols2.default,
	  clearSymbols: _getSymbols.clearSymbols,
	  getVariablesInScope: _scopes.getVariablesInScope
	});

/***/ },
/* 962 */,
/* 963 */
/***/ function(module, exports, __webpack_require__) {

	var baseKeys = __webpack_require__(217),
	    getTag = __webpack_require__(198),
	    isArguments = __webpack_require__(208),
	    isArray = __webpack_require__(70),
	    isArrayLike = __webpack_require__(220),
	    isBuffer = __webpack_require__(210),
	    isPrototype = __webpack_require__(218),
	    isTypedArray = __webpack_require__(212);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }
	  if (isArrayLike(value) &&
	      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
	    return !value.length;
	  }
	  var tag = getTag(value);
	  if (tag == mapTag || tag == setTag) {
	    return !value.size;
	  }
	  if (isPrototype(value)) {
	    return !baseKeys(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = isEmpty;


/***/ },
/* 964 */,
/* 965 */,
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */,
/* 970 */,
/* 971 */,
/* 972 */,
/* 973 */,
/* 974 */,
/* 975 */,
/* 976 */,
/* 977 */,
/* 978 */,
/* 979 */,
/* 980 */,
/* 981 */,
/* 982 */,
/* 983 */,
/* 984 */,
/* 985 */,
/* 986 */,
/* 987 */,
/* 988 */,
/* 989 */,
/* 990 */,
/* 991 */,
/* 992 */,
/* 993 */,
/* 994 */,
/* 995 */,
/* 996 */,
/* 997 */,
/* 998 */,
/* 999 */,
/* 1000 */,
/* 1001 */,
/* 1002 */,
/* 1003 */,
/* 1004 */,
/* 1005 */,
/* 1006 */,
/* 1007 */,
/* 1008 */,
/* 1009 */,
/* 1010 */,
/* 1011 */,
/* 1012 */,
/* 1013 */,
/* 1014 */,
/* 1015 */,
/* 1016 */,
/* 1017 */,
/* 1018 */,
/* 1019 */,
/* 1020 */,
/* 1021 */,
/* 1022 */,
/* 1023 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var babylon = __webpack_require__(435);
	var types = __webpack_require__(493);

	var startScript = /<script[^>]*>/im;
	var endScript = /<\/script\s*>/im;

	function getCandidateScriptLocations(source, index) {
	  var i = index || 0;
	  var str = source.substring(i);

	  var startMatch = startScript.exec(str);
	  if (startMatch) {
	    var startsAt = startMatch.index + startMatch[0].length;
	    var afterStart = str.substring(startsAt);
	    var endMatch = endScript.exec(afterStart);
	    if (endMatch) {
	      var locLength = endMatch.index;
	      var locIndex = i + startsAt;

	      return [adjustForLineAndColumn(source, {
	        index: locIndex,
	        length: locLength,
	        source: source.substring(locIndex, locIndex + locLength)
	      })].concat(_toConsumableArray(getCandidateScriptLocations(source, locIndex + locLength + endMatch[0].length)));
	    }
	  }

	  return [];
	}

	function parseScript(_ref) {
	  var source = _ref.source,
	      line = _ref.line;

	  // remove empty or only whitespace scripts
	  if (source.length === 0 || /^\s+$/.test(source)) {
	    return null;
	  }

	  try {
	    return babylon.parse(source, {
	      sourceType: "script",
	      startLine: line
	    });
	  } catch (e) {
	    return null;
	  }
	}

	function parseScripts(locations) {
	  var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : parseScript;

	  return locations.map(parser);
	}

	function generateWhitespace(length) {
	  return Array.from(new Array(length + 1)).join(" ");
	}

	function calcLineAndColumn(source, index) {
	  var lines = source.substring(0, index).replace(/\r\l?/, "\n").split(/\n/);
	  var line = lines.length;
	  var column = lines.pop().length + 1;

	  return {
	    column: column,
	    line: line
	  };
	}

	function adjustForLineAndColumn(fullSource, location) {
	  var _calcLineAndColumn = calcLineAndColumn(fullSource, location.index),
	      column = _calcLineAndColumn.column,
	      line = _calcLineAndColumn.line;

	  return Object.assign({}, location, {
	    line: line,
	    column: column,
	    // prepend whitespace for scripts that do not start on the first column
	    source: generateWhitespace(column) + location.source
	  });
	}

	function parseScriptTags(source, parser) {
	  var scripts = parseScripts(getCandidateScriptLocations(source), parser).filter(types.isFile).reduce(function (main, script) {
	    return {
	      statements: main.statements.concat(script.program.body),
	      comments: main.comments.concat(script.comments),
	      tokens: main.tokens.concat(script.tokens)
	    };
	  }, {
	    statements: [],
	    comments: [],
	    tokens: []
	  });

	  var program = types.program(scripts.statements);
	  var file = types.file(program, scripts.comments, scripts.tokens);

	  var end = calcLineAndColumn(source, source.length);
	  file.start = program.start = 0;
	  file.end = program.end = source.length;
	  file.loc = program.loc = {
	    start: {
	      line: 1,
	      column: 0
	    },
	    end: end
	  };

	  return file;
	}

	function extractScriptTags(source) {
	  return parseScripts(getCandidateScriptLocations(source), function (loc) {
	    var ast = parseScript(loc);

	    if (ast) {
	      return loc;
	    }

	    return null;
	  }).filter(types.isFile);
	}

	exports.default = parseScriptTags;
	exports.extractScriptTags = extractScriptTags;
	exports.generateWhitespace = generateWhitespace;
	exports.getCandidateScriptLocations = getCandidateScriptLocations;
	exports.parseScript = parseScript;
	exports.parseScripts = parseScripts;
	exports.parseScriptTags = parseScriptTags;

/***/ },
/* 1024 */,
/* 1025 */,
/* 1026 */,
/* 1027 */,
/* 1028 */,
/* 1029 */,
/* 1030 */,
/* 1031 */,
/* 1032 */,
/* 1033 */,
/* 1034 */,
/* 1035 */,
/* 1036 */,
/* 1037 */,
/* 1038 */,
/* 1039 */,
/* 1040 */,
/* 1041 */,
/* 1042 */,
/* 1043 */,
/* 1044 */,
/* 1045 */,
/* 1046 */,
/* 1047 */,
/* 1048 */,
/* 1049 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	exports.getVariablesInLocalScope = getVariablesInLocalScope;
	exports.getVariablesInScope = getVariablesInScope;
	exports.isExpressionInScope = isExpressionInScope;

	var _toPairs = __webpack_require__(195);

	var _toPairs2 = _interopRequireDefault(_toPairs);

	var _uniq = __webpack_require__(561);

	var _uniq2 = _interopRequireDefault(_uniq);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function getScopeVariables(scope) {
	  var bindings = scope.bindings;


	  return (0, _toPairs2.default)(bindings).map((_ref) => {
	    var _ref2 = _slicedToArray(_ref, 2),
	        name = _ref2[0],
	        binding = _ref2[1];

	    return {
	      name,
	      references: binding.referencePaths
	    };
	  });
	}

	function getScopeChain(scope) {
	  var scopes = [];

	  do {
	    scopes.push(scope);
	  } while (scope = scope.parent);

	  return scopes;
	}

	function getVariablesInLocalScope(scope) {
	  return getScopeVariables(scope);
	}

	function getVariablesInScope(scope) {
	  var _ref3;

	  var scopes = getScopeChain(scope);
	  var scopeVars = scopes.map(getScopeVariables);
	  var vars = (_ref3 = [{ name: "this" }, { name: "arguments" }]).concat.apply(_ref3, _toConsumableArray(scopeVars)).map(variable => variable.name);
	  return (0, _uniq2.default)(vars);
	}

	function isExpressionInScope(expression, scope) {
	  if (!scope) {
	    return false;
	  }

	  var variables = getVariablesInScope(scope);
	  var firstPart = expression.split(/\./)[0];
	  return variables.includes(firstPart);
	}

/***/ },
/* 1050 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getSymbols;
	exports.formatSymbols = formatSymbols;
	exports.clearSymbols = clearSymbols;

	var _ast = __webpack_require__(1051);

	var _helpers = __webpack_require__(1052);

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	var _getFunctionName = __webpack_require__(1053);

	var _getFunctionName2 = _interopRequireDefault(_getFunctionName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var symbolDeclarations = new Map();

	function getFunctionParameterNames(path) {
	  return path.node.params.map(param => param.name);
	}

	function getVariableNames(path) {
	  if (t.isObjectProperty(path) && !(0, _helpers.isFunction)(path.node.value)) {
	    return [{
	      name: path.node.key.name,
	      location: path.node.loc
	    }];
	  }

	  if (!path.node.declarations) {
	    return path.node.params.map(dec => ({
	      name: dec.name,
	      location: dec.loc
	    }));
	  }

	  return path.node.declarations.map(dec => ({
	    name: dec.id.name,
	    location: dec.loc
	  }));
	}

	function getComments(ast) {
	  if (!ast || !ast.comments) {
	    return [];
	  }
	  return ast.comments.map(comment => ({
	    name: comment.location,
	    location: comment.loc
	  }));
	}

	function extractSymbols(source) {
	  var functions = [];
	  var variables = [];
	  var memberExpressions = [];
	  var callExpressions = [];
	  var objectProperties = [];
	  var identifiers = [];

	  var ast = (0, _ast.traverseAst)(source, {
	    enter(path) {
	      if ((0, _helpers.isVariable)(path)) {
	        variables.push.apply(variables, _toConsumableArray(getVariableNames(path)));
	      }

	      if ((0, _helpers.isFunction)(path)) {
	        functions.push({
	          name: (0, _getFunctionName2.default)(path),
	          location: path.node.loc,
	          parameterNames: getFunctionParameterNames(path),
	          identifier: path.node.id
	        });
	      }

	      if (t.isClassDeclaration(path)) {
	        variables.push({
	          name: path.node.id.name,
	          location: path.node.loc
	        });
	      }

	      if (t.isObjectProperty(path)) {
	        var _path$node$key$loc = path.node.key.loc,
	            start = _path$node$key$loc.start,
	            end = _path$node$key$loc.end,
	            identifierName = _path$node$key$loc.identifierName;

	        objectProperties.push({
	          name: identifierName,
	          location: { start, end },
	          expression: getSnippet(path)
	        });
	      }

	      if (t.isMemberExpression(path)) {
	        var _path$node$property$l = path.node.property.loc,
	            _start = _path$node$property$l.start,
	            _end = _path$node$property$l.end;

	        memberExpressions.push({
	          name: path.node.property.name,
	          location: { start: _start, end: _end },
	          expressionLocation: path.node.loc,
	          expression: getSnippet(path)
	        });
	      }

	      if (t.isCallExpression(path)) {
	        var callee = path.node.callee;
	        if (!t.isMemberExpression(callee)) {
	          var _callee$loc = callee.loc,
	              _start2 = _callee$loc.start,
	              _end2 = _callee$loc.end,
	              _identifierName = _callee$loc.identifierName;

	          callExpressions.push({
	            name: _identifierName,
	            location: { start: _start2, end: _end2 }
	          });
	        }
	      }

	      if (t.isIdentifier(path)) {
	        var _path$node$loc = path.node.loc,
	            _start3 = _path$node$loc.start,
	            _end3 = _path$node$loc.end;


	        identifiers.push({
	          name: path.node.name,
	          expression: path.node.name,
	          location: { start: _start3, end: _end3 }
	        });
	      }

	      if (t.isThisExpression(path.node)) {
	        var _path$node$loc2 = path.node.loc,
	            _start4 = _path$node$loc2.start,
	            _end4 = _path$node$loc2.end;

	        identifiers.push({
	          name: "this",
	          location: { start: _start4, end: _end4 },
	          expressionLocation: path.node.loc,
	          expression: "this"
	        });
	      }

	      if (t.isVariableDeclarator(path)) {
	        var node = path.node.id;
	        var _path$node$loc3 = path.node.loc,
	            _start5 = _path$node$loc3.start,
	            _end5 = _path$node$loc3.end;


	        identifiers.push({
	          name: node.name,
	          expression: node.name,
	          location: { start: _start5, end: _end5 }
	        });
	      }
	    }
	  });

	  // comments are extracted separately from the AST
	  var comments = getComments(ast);

	  return {
	    functions,
	    variables,
	    callExpressions,
	    memberExpressions,
	    objectProperties,
	    comments,
	    identifiers
	  };
	}

	function getSymbols(source) {
	  if (symbolDeclarations.has(source.id)) {
	    var _symbols = symbolDeclarations.get(source.id);
	    if (_symbols) {
	      return _symbols;
	    }
	  }

	  var symbols = extractSymbols(source);
	  symbolDeclarations.set(source.id, symbols);
	  return symbols;
	}

	function extendSnippet(name, expression, path, prevPath) {
	  var computed = path && path.node.computed;
	  var prevComputed = prevPath && prevPath.node.computed;
	  var prevArray = t.isArrayExpression(prevPath);
	  var array = t.isArrayExpression(path);

	  if (expression === "") {
	    if (computed) {
	      return `[${name}]`;
	    }
	    return name;
	  }

	  if (computed || array) {
	    if (prevComputed || prevArray) {
	      return `[${name}]${expression}`;
	    }
	    return `[${name}].${expression}`;
	  }

	  if (prevComputed || prevArray) {
	    return `${name}${expression}`;
	  }

	  return `${name}.${expression}`;
	}

	function getMemberSnippet(node) {
	  var expression = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

	  if (t.isMemberExpression(node)) {
	    var _name = node.property.name;

	    return getMemberSnippet(node.object, extendSnippet(_name, expression));
	  }

	  if (t.isCallExpression(node)) {
	    return "";
	  }

	  if (t.isThisExpression(node)) {
	    return `this.${expression}`;
	  }

	  if (t.isIdentifier(node)) {
	    return `${node.name}.${expression}`;
	  }

	  return expression;
	}

	function getObjectSnippet(path, prevPath) {
	  var expression = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

	  if (!path) {
	    return expression;
	  }

	  var name = path.node.key.name;

	  var extendedExpression = extendSnippet(name, expression, path, prevPath);

	  var nextPrevPath = path;
	  var nextPath = path.parentPath && path.parentPath.parentPath;

	  return getSnippet(nextPath, nextPrevPath, extendedExpression);
	}

	function getArraySnippet(path, prevPath, expression) {
	  var index = prevPath.parentPath.key;
	  var extendedExpression = extendSnippet(index, expression, path, prevPath);

	  var nextPrevPath = path;
	  var nextPath = path.parentPath && path.parentPath.parentPath;

	  return getSnippet(nextPath, nextPrevPath, extendedExpression);
	}

	function getSnippet(path, prevPath) {
	  var expression = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

	  if (t.isVariableDeclaration(path)) {
	    var node = path.node.declarations[0];
	    var _name2 = node.id.name;
	    return extendSnippet(_name2, expression, path, prevPath);
	  }

	  if (t.isVariableDeclarator(path)) {
	    var _node = path.node.id;
	    if (t.isObjectPattern(_node)) {
	      return expression;
	    }

	    var _name3 = _node.name;
	    var prop = extendSnippet(_name3, expression, path, prevPath);
	    return prop;
	  }

	  if (t.isAssignmentExpression(path)) {
	    var _node2 = path.node.left;
	    var _name4 = t.isMemberExpression(_node2) ? getMemberSnippet(_node2) : _node2.name;

	    var _prop = extendSnippet(_name4, expression, path, prevPath);
	    return _prop;
	  }

	  if ((0, _helpers.isFunction)(path)) {
	    return expression;
	  }

	  if (t.isIdentifier(path)) {
	    var _node3 = path.node;
	    return `${_node3.name}.${expression}`;
	  }

	  if (t.isObjectProperty(path)) {
	    return getObjectSnippet(path, prevPath, expression);
	  }

	  if (t.isObjectExpression(path)) {
	    var parentPath = prevPath && prevPath.parentPath;
	    return getObjectSnippet(parentPath, prevPath, expression);
	  }

	  if (t.isMemberExpression(path)) {
	    return getMemberSnippet(path.node, expression);
	  }

	  if (t.isArrayExpression(path)) {
	    return getArraySnippet(path, prevPath, expression);
	  }
	}

	function formatSymbols(source) {
	  var _getSymbols = getSymbols(source),
	      objectProperties = _getSymbols.objectProperties,
	      memberExpressions = _getSymbols.memberExpressions,
	      callExpressions = _getSymbols.callExpressions,
	      identifiers = _getSymbols.identifiers,
	      variables = _getSymbols.variables;

	  function formatLocation(loc) {
	    if (!loc) {
	      return "";
	    }
	    var start = loc.start,
	        end = loc.end;


	    var startLoc = `(${start.line}, ${start.column})`;
	    var endLoc = `(${end.line}, ${end.column})`;
	    return `[${startLoc}, ${endLoc}]`;
	  }

	  function summarize(symbol) {
	    var loc = formatLocation(symbol.location);
	    var exprLoc = formatLocation(symbol.expressionLocation);
	    var params = symbol.parameterNames ? symbol.parameterNames.join(", ") : "";
	    var expression = symbol.expression || "";
	    return `${loc} ${exprLoc} ${expression} ${symbol.name} ${params}`;
	  }

	  return ["properties", objectProperties.map(summarize).join("\n"), "member expressions", memberExpressions.map(summarize).join("\n"), "call expressions", callExpressions.map(summarize).join("\n"), "identifiers", identifiers.map(summarize).join("\n"), "variables", variables.map(summarize).join("\n")].join("\n");
	}

	function clearSymbols() {
	  symbolDeclarations = new Map();
	}

/***/ },
/* 1051 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getAst = getAst;
	exports.traverseAst = traverseAst;

	var _parseScriptTags = __webpack_require__(1023);

	var _parseScriptTags2 = _interopRequireDefault(_parseScriptTags);

	var _babylon = __webpack_require__(435);

	var babylon = _interopRequireWildcard(_babylon);

	var _babelTraverse = __webpack_require__(436);

	var _babelTraverse2 = _interopRequireDefault(_babelTraverse);

	var _isEmpty = __webpack_require__(963);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	var _devtoolsConfig = __webpack_require__(828);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ASTs = new Map();

	function _parse(code, opts) {
	  return babylon.parse(code, Object.assign({}, opts, {
	    sourceType: "module",
	    plugins: ["jsx", "flow", "objectRestSpread"]
	  }));
	}

	function parse(text, opts) {
	  var ast = void 0;
	  if (!text) {
	    return;
	  }

	  try {
	    ast = _parse(text, opts);
	  } catch (error) {
	    if ((0, _devtoolsConfig.isDevelopment)()) {
	      console.warn("parse failed", text);
	    }

	    ast = {};
	  }

	  return ast;
	}

	// Custom parser for parse-script-tags that adapts its input structure to
	// our parser's signature
	function htmlParser(_ref) {
	  var source = _ref.source,
	      line = _ref.line;

	  return parse(source, {
	    startLine: line
	  });
	}

	function getAst(source) {
	  if (!source || !source.text) {
	    return {};
	  }

	  if (ASTs.has(source.id)) {
	    return ASTs.get(source.id);
	  }

	  var ast = {};
	  if (source.contentType == "text/html") {
	    ast = (0, _parseScriptTags2.default)(source.text, htmlParser) || {};
	  } else if (source.contentType == "text/javascript") {
	    ast = parse(source.text);
	  }

	  ASTs.set(source.id, ast);
	  return ast;
	}

	function traverseAst(source, visitor) {
	  var ast = getAst(source);
	  if ((0, _isEmpty2.default)(ast)) {
	    return null;
	  }

	  (0, _babelTraverse2.default)(ast, visitor);
	  return ast;
	}

/***/ },
/* 1052 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isLexicalScope = isLexicalScope;
	exports.isFunction = isFunction;
	exports.isVariable = isVariable;
	exports.getMemberExpression = getMemberExpression;
	exports.containsPosition = containsPosition;
	exports.containsLocation = containsLocation;
	exports.nodeContainsPosition = nodeContainsPosition;

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function isLexicalScope(path) {
	  return t.isBlockStatement(path) || isFunction(path) || t.isProgram(path);
	}

	function isFunction(path) {
	  return t.isFunction(path) || t.isArrowFunctionExpression(path) || t.isObjectMethod(path) || t.isClassMethod(path);
	}

	function isVariable(path) {
	  return t.isVariableDeclaration(path) || isFunction(path) && path.node.params.length || t.isObjectProperty(path) && !isFunction(path.node.value);
	}

	function getMemberExpression(root) {
	  function _getMemberExpression(node, expr) {
	    if (t.isMemberExpression(node)) {
	      expr = [node.property.name].concat(expr);
	      return _getMemberExpression(node.object, expr);
	    }

	    if (t.isCallExpression(node)) {
	      return [];
	    }

	    if (t.isThisExpression(node)) {
	      return ["this"].concat(expr);
	    }

	    return [node.name].concat(expr);
	  }

	  var expr = _getMemberExpression(root, []);
	  return expr.join(".");
	}

	function containsPosition(a, b) {
	  var startsBefore = a.start.line < b.line || a.start.line === b.line && a.start.column <= b.column;
	  var endsAfter = a.end.line > b.line || a.end.line === b.line && a.end.column >= b.column;

	  return startsBefore && endsAfter;
	}

	function containsLocation(a, b) {
	  return containsPosition(a, b.start) && containsPosition(a, b.end);
	}

	function nodeContainsPosition(node, position) {
	  return containsPosition(node.loc, position);
	}

/***/ },
/* 1053 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getFunctionName;
	function getFunctionName(path) {
	  if (path.node.id) {
	    return path.node.id.name;
	  }

	  var parent = path.parent;
	  if (parent.type == "ObjectProperty") {
	    return parent.key.name;
	  }

	  if (parent.type == "ObjectExpression" || path.node.type == "ClassMethod") {
	    return path.node.key.name;
	  }

	  if (parent.type == "VariableDeclarator") {
	    return parent.id.name;
	  }

	  if (parent.type == "AssignmentExpression") {
	    if (parent.left.type == "MemberExpression") {
	      return parent.left.property.name;
	    }

	    return parent.left.name;
	  }

	  return "anonymous";
	}

/***/ },
/* 1054 */,
/* 1055 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getClosestExpression = getClosestExpression;
	exports.getClosestScope = getClosestScope;
	exports.getClosestPath = getClosestPath;

	var _babelTypes = __webpack_require__(493);

	var t = _interopRequireWildcard(_babelTypes);

	var _ast = __webpack_require__(1051);

	var _helpers = __webpack_require__(1052);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function getNodeValue(node) {
	  if (t.isThisExpression(node)) {
	    return "this";
	  }

	  return node.name;
	}

	function getClosestMemberExpression(source, token, location) {
	  var expression = null;
	  (0, _ast.traverseAst)(source, {
	    enter(path) {
	      var node = path.node;

	      if (!(0, _helpers.nodeContainsPosition)(node, location)) {
	        return path.skip();
	      }

	      if (t.isMemberExpression(node) && node.property.name === token) {
	        var memberExpression = (0, _helpers.getMemberExpression)(node);
	        expression = {
	          expression: memberExpression,
	          location: node.loc
	        };
	      }
	    }
	  });

	  return expression;
	}

	function getClosestExpression(source, token, location) {
	  var memberExpression = getClosestMemberExpression(source, token, location);
	  if (memberExpression) {
	    return memberExpression;
	  }

	  var path = getClosestPath(source, location);
	  if (!path || !path.node) {
	    return;
	  }

	  var node = path.node;

	  return { expression: getNodeValue(node), location: node.loc };
	}

	function getClosestScope(source, location) {
	  var closestPath = null;

	  (0, _ast.traverseAst)(source, {
	    enter(path) {
	      if (!(0, _helpers.nodeContainsPosition)(path.node, location)) {
	        return path.skip();
	      }

	      if ((0, _helpers.isLexicalScope)(path)) {
	        closestPath = path;
	      }
	    }
	  });

	  if (!closestPath) {
	    return;
	  }

	  return closestPath.scope;
	}

	function getClosestPath(source, location) {
	  var closestPath = null;

	  (0, _ast.traverseAst)(source, {
	    enter(path) {
	      if (!(0, _helpers.nodeContainsPosition)(path.node, location)) {
	        return path.skip();
	      }
	      closestPath = path;
	    }
	  });

	  return closestPath;
	}

/***/ },
/* 1056 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	function assembleStyles () {
		var styles = {
			modifiers: {
				reset: [0, 0],
				bold: [1, 22], // 21 isn't widely supported and 22 does the same thing
				dim: [2, 22],
				italic: [3, 23],
				underline: [4, 24],
				inverse: [7, 27],
				hidden: [8, 28],
				strikethrough: [9, 29]
			},
			colors: {
				black: [30, 39],
				red: [31, 39],
				green: [32, 39],
				yellow: [33, 39],
				blue: [34, 39],
				magenta: [35, 39],
				cyan: [36, 39],
				white: [37, 39],
				gray: [90, 39]
			},
			bgColors: {
				bgBlack: [40, 49],
				bgRed: [41, 49],
				bgGreen: [42, 49],
				bgYellow: [43, 49],
				bgBlue: [44, 49],
				bgMagenta: [45, 49],
				bgCyan: [46, 49],
				bgWhite: [47, 49]
			}
		};

		// fix humans
		styles.colors.grey = styles.colors.gray;

		Object.keys(styles).forEach(function (groupName) {
			var group = styles[groupName];

			Object.keys(group).forEach(function (styleName) {
				var style = group[styleName];

				styles[styleName] = group[styleName] = {
					open: '\u001b[' + style[0] + 'm',
					close: '\u001b[' + style[1] + 'm'
				};
			});

			Object.defineProperty(styles, groupName, {
				value: group,
				enumerable: false
			});
		});

		return styles;
	}

	Object.defineProperty(module, 'exports', {
		enumerable: true,
		get: assembleStyles
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)(module)))

/***/ },
/* 1057 */,
/* 1058 */,
/* 1059 */,
/* 1060 */,
/* 1061 */,
/* 1062 */,
/* 1063 */,
/* 1064 */,
/* 1065 */,
/* 1066 */,
/* 1067 */,
/* 1068 */,
/* 1069 */,
/* 1070 */,
/* 1071 */,
/* 1072 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _get = __webpack_require__(1073);

	var _get2 = _interopRequireDefault(_get);

	var _helpers = __webpack_require__(1052);

	var _getSymbols2 = __webpack_require__(1050);

	var _getSymbols3 = _interopRequireDefault(_getSymbols2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function findSymbols(source) {
	  var _getSymbols = (0, _getSymbols3.default)(source),
	      functions = _getSymbols.functions,
	      comments = _getSymbols.comments;

	  return { functions, comments };
	}

	/**
	 * Returns the location for a given function path. If the path represents a
	 * function declaration, the location will begin after the function identifier
	 * but before the function parameters.
	 */

	function getLocation(func) {
	  var location = _extends({}, func.location);

	  // if the function has an identifier, start the block after it so the
	  // identifier is included in the "scope" of its parent
	  var identifierEnd = (0, _get2.default)("identifier.loc.end", func);
	  if (identifierEnd) {
	    location.start = identifierEnd;
	  }

	  return location;
	}

	/**
	 * Reduces an array of locations to remove items that are completely enclosed
	 * by another location in the array.
	 */
	function removeOverlaps(locations, location) {
	  // support reducing without an initializing array
	  if (!Array.isArray(locations)) {
	    locations = [locations];
	  }

	  var contains = locations.filter(a => (0, _helpers.containsLocation)(a, location)).length > 0;

	  if (!contains) {
	    locations.push(location);
	  }

	  return locations;
	}

	/**
	 * Sorts an array of locations by start position
	 */
	function sortByStart(a, b) {
	  if (a.start.line < b.start.line) {
	    return -1;
	  } else if (a.start.line === b.start.line) {
	    return a.start.column - b.start.column;
	  }

	  return 1;
	}

	/**
	 * Returns an array of locations that are considered out of scope for the given
	 * location.
	 */
	function getOutOfScopeLocations(source, position) {
	  var _findSymbols = findSymbols(source),
	      functions = _findSymbols.functions,
	      comments = _findSymbols.comments;

	  var commentLocations = comments.map(c => c.location);

	  return functions.map(getLocation).concat(commentLocations).filter(loc => !(0, _helpers.containsPosition)(loc, position)).reduce(removeOverlaps, []).sort(sortByStart);
	}

	exports.default = getOutOfScopeLocations;

/***/ },
/* 1073 */
/***/ function(module, exports, __webpack_require__) {

	var convert = __webpack_require__(1074),
	    func = convert('get', __webpack_require__(67));

	func.placeholder = __webpack_require__(1077);
	module.exports = func;


/***/ },
/* 1074 */
/***/ function(module, exports, __webpack_require__) {

	var baseConvert = __webpack_require__(1075),
	    util = __webpack_require__(1078);

	/**
	 * Converts `func` of `name` to an immutable auto-curried iteratee-first data-last
	 * version with conversion `options` applied. If `name` is an object its methods
	 * will be converted.
	 *
	 * @param {string} name The name of the function to wrap.
	 * @param {Function} [func] The function to wrap.
	 * @param {Object} [options] The options object. See `baseConvert` for more details.
	 * @returns {Function|Object} Returns the converted function or object.
	 */
	function convert(name, func, options) {
	  return baseConvert(util, name, func, options);
	}

	module.exports = convert;


/***/ },
/* 1075 */
/***/ function(module, exports, __webpack_require__) {

	var mapping = __webpack_require__(1076),
	    fallbackHolder = __webpack_require__(1077);

	/** Built-in value reference. */
	var push = Array.prototype.push;

	/**
	 * Creates a function, with an arity of `n`, that invokes `func` with the
	 * arguments it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} n The arity of the new function.
	 * @returns {Function} Returns the new function.
	 */
	function baseArity(func, n) {
	  return n == 2
	    ? function(a, b) { return func.apply(undefined, arguments); }
	    : function(a) { return func.apply(undefined, arguments); };
	}

	/**
	 * Creates a function that invokes `func`, with up to `n` arguments, ignoring
	 * any additional arguments.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @param {number} n The arity cap.
	 * @returns {Function} Returns the new function.
	 */
	function baseAry(func, n) {
	  return n == 2
	    ? function(a, b) { return func(a, b); }
	    : function(a) { return func(a); };
	}

	/**
	 * Creates a clone of `array`.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the cloned array.
	 */
	function cloneArray(array) {
	  var length = array ? array.length : 0,
	      result = Array(length);

	  while (length--) {
	    result[length] = array[length];
	  }
	  return result;
	}

	/**
	 * Creates a function that clones a given object using the assignment `func`.
	 *
	 * @private
	 * @param {Function} func The assignment function.
	 * @returns {Function} Returns the new cloner function.
	 */
	function createCloner(func) {
	  return function(object) {
	    return func({}, object);
	  };
	}

	/**
	 * A specialized version of `_.spread` which flattens the spread array into
	 * the arguments of the invoked `func`.
	 *
	 * @private
	 * @param {Function} func The function to spread arguments over.
	 * @param {number} start The start position of the spread.
	 * @returns {Function} Returns the new function.
	 */
	function flatSpread(func, start) {
	  return function() {
	    var length = arguments.length,
	        lastIndex = length - 1,
	        args = Array(length);

	    while (length--) {
	      args[length] = arguments[length];
	    }
	    var array = args[start],
	        otherArgs = args.slice(0, start);

	    if (array) {
	      push.apply(otherArgs, array);
	    }
	    if (start != lastIndex) {
	      push.apply(otherArgs, args.slice(start + 1));
	    }
	    return func.apply(this, otherArgs);
	  };
	}

	/**
	 * Creates a function that wraps `func` and uses `cloner` to clone the first
	 * argument it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} cloner The function to clone arguments.
	 * @returns {Function} Returns the new immutable function.
	 */
	function wrapImmutable(func, cloner) {
	  return function() {
	    var length = arguments.length;
	    if (!length) {
	      return;
	    }
	    var args = Array(length);
	    while (length--) {
	      args[length] = arguments[length];
	    }
	    var result = args[0] = cloner.apply(undefined, args);
	    func.apply(undefined, args);
	    return result;
	  };
	}

	/**
	 * The base implementation of `convert` which accepts a `util` object of methods
	 * required to perform conversions.
	 *
	 * @param {Object} util The util object.
	 * @param {string} name The name of the function to convert.
	 * @param {Function} func The function to convert.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.cap=true] Specify capping iteratee arguments.
	 * @param {boolean} [options.curry=true] Specify currying.
	 * @param {boolean} [options.fixed=true] Specify fixed arity.
	 * @param {boolean} [options.immutable=true] Specify immutable operations.
	 * @param {boolean} [options.rearg=true] Specify rearranging arguments.
	 * @returns {Function|Object} Returns the converted function or object.
	 */
	function baseConvert(util, name, func, options) {
	  var setPlaceholder,
	      isLib = typeof name == 'function',
	      isObj = name === Object(name);

	  if (isObj) {
	    options = func;
	    func = name;
	    name = undefined;
	  }
	  if (func == null) {
	    throw new TypeError;
	  }
	  options || (options = {});

	  var config = {
	    'cap': 'cap' in options ? options.cap : true,
	    'curry': 'curry' in options ? options.curry : true,
	    'fixed': 'fixed' in options ? options.fixed : true,
	    'immutable': 'immutable' in options ? options.immutable : true,
	    'rearg': 'rearg' in options ? options.rearg : true
	  };

	  var forceCurry = ('curry' in options) && options.curry,
	      forceFixed = ('fixed' in options) && options.fixed,
	      forceRearg = ('rearg' in options) && options.rearg,
	      placeholder = isLib ? func : fallbackHolder,
	      pristine = isLib ? func.runInContext() : undefined;

	  var helpers = isLib ? func : {
	    'ary': util.ary,
	    'assign': util.assign,
	    'clone': util.clone,
	    'curry': util.curry,
	    'forEach': util.forEach,
	    'isArray': util.isArray,
	    'isFunction': util.isFunction,
	    'iteratee': util.iteratee,
	    'keys': util.keys,
	    'rearg': util.rearg,
	    'toInteger': util.toInteger,
	    'toPath': util.toPath
	  };

	  var ary = helpers.ary,
	      assign = helpers.assign,
	      clone = helpers.clone,
	      curry = helpers.curry,
	      each = helpers.forEach,
	      isArray = helpers.isArray,
	      isFunction = helpers.isFunction,
	      keys = helpers.keys,
	      rearg = helpers.rearg,
	      toInteger = helpers.toInteger,
	      toPath = helpers.toPath;

	  var aryMethodKeys = keys(mapping.aryMethod);

	  var wrappers = {
	    'castArray': function(castArray) {
	      return function() {
	        var value = arguments[0];
	        return isArray(value)
	          ? castArray(cloneArray(value))
	          : castArray.apply(undefined, arguments);
	      };
	    },
	    'iteratee': function(iteratee) {
	      return function() {
	        var func = arguments[0],
	            arity = arguments[1],
	            result = iteratee(func, arity),
	            length = result.length;

	        if (config.cap && typeof arity == 'number') {
	          arity = arity > 2 ? (arity - 2) : 1;
	          return (length && length <= arity) ? result : baseAry(result, arity);
	        }
	        return result;
	      };
	    },
	    'mixin': function(mixin) {
	      return function(source) {
	        var func = this;
	        if (!isFunction(func)) {
	          return mixin(func, Object(source));
	        }
	        var pairs = [];
	        each(keys(source), function(key) {
	          if (isFunction(source[key])) {
	            pairs.push([key, func.prototype[key]]);
	          }
	        });

	        mixin(func, Object(source));

	        each(pairs, function(pair) {
	          var value = pair[1];
	          if (isFunction(value)) {
	            func.prototype[pair[0]] = value;
	          } else {
	            delete func.prototype[pair[0]];
	          }
	        });
	        return func;
	      };
	    },
	    'nthArg': function(nthArg) {
	      return function(n) {
	        var arity = n < 0 ? 1 : (toInteger(n) + 1);
	        return curry(nthArg(n), arity);
	      };
	    },
	    'rearg': function(rearg) {
	      return function(func, indexes) {
	        var arity = indexes ? indexes.length : 0;
	        return curry(rearg(func, indexes), arity);
	      };
	    },
	    'runInContext': function(runInContext) {
	      return function(context) {
	        return baseConvert(util, runInContext(context), options);
	      };
	    }
	  };

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Casts `func` to a function with an arity capped iteratee if needed.
	   *
	   * @private
	   * @param {string} name The name of the function to inspect.
	   * @param {Function} func The function to inspect.
	   * @returns {Function} Returns the cast function.
	   */
	  function castCap(name, func) {
	    if (config.cap) {
	      var indexes = mapping.iterateeRearg[name];
	      if (indexes) {
	        return iterateeRearg(func, indexes);
	      }
	      var n = !isLib && mapping.iterateeAry[name];
	      if (n) {
	        return iterateeAry(func, n);
	      }
	    }
	    return func;
	  }

	  /**
	   * Casts `func` to a curried function if needed.
	   *
	   * @private
	   * @param {string} name The name of the function to inspect.
	   * @param {Function} func The function to inspect.
	   * @param {number} n The arity of `func`.
	   * @returns {Function} Returns the cast function.
	   */
	  function castCurry(name, func, n) {
	    return (forceCurry || (config.curry && n > 1))
	      ? curry(func, n)
	      : func;
	  }

	  /**
	   * Casts `func` to a fixed arity function if needed.
	   *
	   * @private
	   * @param {string} name The name of the function to inspect.
	   * @param {Function} func The function to inspect.
	   * @param {number} n The arity cap.
	   * @returns {Function} Returns the cast function.
	   */
	  function castFixed(name, func, n) {
	    if (config.fixed && (forceFixed || !mapping.skipFixed[name])) {
	      var data = mapping.methodSpread[name],
	          start = data && data.start;

	      return start  === undefined ? ary(func, n) : flatSpread(func, start);
	    }
	    return func;
	  }

	  /**
	   * Casts `func` to an rearged function if needed.
	   *
	   * @private
	   * @param {string} name The name of the function to inspect.
	   * @param {Function} func The function to inspect.
	   * @param {number} n The arity of `func`.
	   * @returns {Function} Returns the cast function.
	   */
	  function castRearg(name, func, n) {
	    return (config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name]))
	      ? rearg(func, mapping.methodRearg[name] || mapping.aryRearg[n])
	      : func;
	  }

	  /**
	   * Creates a clone of `object` by `path`.
	   *
	   * @private
	   * @param {Object} object The object to clone.
	   * @param {Array|string} path The path to clone by.
	   * @returns {Object} Returns the cloned object.
	   */
	  function cloneByPath(object, path) {
	    path = toPath(path);

	    var index = -1,
	        length = path.length,
	        lastIndex = length - 1,
	        result = clone(Object(object)),
	        nested = result;

	    while (nested != null && ++index < length) {
	      var key = path[index],
	          value = nested[key];

	      if (value != null) {
	        nested[path[index]] = clone(index == lastIndex ? value : Object(value));
	      }
	      nested = nested[key];
	    }
	    return result;
	  }

	  /**
	   * Converts `lodash` to an immutable auto-curried iteratee-first data-last
	   * version with conversion `options` applied.
	   *
	   * @param {Object} [options] The options object. See `baseConvert` for more details.
	   * @returns {Function} Returns the converted `lodash`.
	   */
	  function convertLib(options) {
	    return _.runInContext.convert(options)(undefined);
	  }

	  /**
	   * Create a converter function for `func` of `name`.
	   *
	   * @param {string} name The name of the function to convert.
	   * @param {Function} func The function to convert.
	   * @returns {Function} Returns the new converter function.
	   */
	  function createConverter(name, func) {
	    var realName = mapping.aliasToReal[name] || name,
	        methodName = mapping.remap[realName] || realName,
	        oldOptions = options;

	    return function(options) {
	      var newUtil = isLib ? pristine : helpers,
	          newFunc = isLib ? pristine[methodName] : func,
	          newOptions = assign(assign({}, oldOptions), options);

	      return baseConvert(newUtil, realName, newFunc, newOptions);
	    };
	  }

	  /**
	   * Creates a function that wraps `func` to invoke its iteratee, with up to `n`
	   * arguments, ignoring any additional arguments.
	   *
	   * @private
	   * @param {Function} func The function to cap iteratee arguments for.
	   * @param {number} n The arity cap.
	   * @returns {Function} Returns the new function.
	   */
	  function iterateeAry(func, n) {
	    return overArg(func, function(func) {
	      return typeof func == 'function' ? baseAry(func, n) : func;
	    });
	  }

	  /**
	   * Creates a function that wraps `func` to invoke its iteratee with arguments
	   * arranged according to the specified `indexes` where the argument value at
	   * the first index is provided as the first argument, the argument value at
	   * the second index is provided as the second argument, and so on.
	   *
	   * @private
	   * @param {Function} func The function to rearrange iteratee arguments for.
	   * @param {number[]} indexes The arranged argument indexes.
	   * @returns {Function} Returns the new function.
	   */
	  function iterateeRearg(func, indexes) {
	    return overArg(func, function(func) {
	      var n = indexes.length;
	      return baseArity(rearg(baseAry(func, n), indexes), n);
	    });
	  }

	  /**
	   * Creates a function that invokes `func` with its first argument transformed.
	   *
	   * @private
	   * @param {Function} func The function to wrap.
	   * @param {Function} transform The argument transform.
	   * @returns {Function} Returns the new function.
	   */
	  function overArg(func, transform) {
	    return function() {
	      var length = arguments.length;
	      if (!length) {
	        return func();
	      }
	      var args = Array(length);
	      while (length--) {
	        args[length] = arguments[length];
	      }
	      var index = config.rearg ? 0 : (length - 1);
	      args[index] = transform(args[index]);
	      return func.apply(undefined, args);
	    };
	  }

	  /**
	   * Creates a function that wraps `func` and applys the conversions
	   * rules by `name`.
	   *
	   * @private
	   * @param {string} name The name of the function to wrap.
	   * @param {Function} func The function to wrap.
	   * @returns {Function} Returns the converted function.
	   */
	  function wrap(name, func) {
	    var result,
	        realName = mapping.aliasToReal[name] || name,
	        wrapped = func,
	        wrapper = wrappers[realName];

	    if (wrapper) {
	      wrapped = wrapper(func);
	    }
	    else if (config.immutable) {
	      if (mapping.mutate.array[realName]) {
	        wrapped = wrapImmutable(func, cloneArray);
	      }
	      else if (mapping.mutate.object[realName]) {
	        wrapped = wrapImmutable(func, createCloner(func));
	      }
	      else if (mapping.mutate.set[realName]) {
	        wrapped = wrapImmutable(func, cloneByPath);
	      }
	    }
	    each(aryMethodKeys, function(aryKey) {
	      each(mapping.aryMethod[aryKey], function(otherName) {
	        if (realName == otherName) {
	          var data = mapping.methodSpread[realName],
	              afterRearg = data && data.afterRearg;

	          result = afterRearg
	            ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey)
	            : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);

	          result = castCap(realName, result);
	          result = castCurry(realName, result, aryKey);
	          return false;
	        }
	      });
	      return !result;
	    });

	    result || (result = wrapped);
	    if (result == func) {
	      result = forceCurry ? curry(result, 1) : function() {
	        return func.apply(this, arguments);
	      };
	    }
	    result.convert = createConverter(realName, func);
	    if (mapping.placeholder[realName]) {
	      setPlaceholder = true;
	      result.placeholder = func.placeholder = placeholder;
	    }
	    return result;
	  }

	  /*--------------------------------------------------------------------------*/

	  if (!isObj) {
	    return wrap(name, func);
	  }
	  var _ = func;

	  // Convert methods by ary cap.
	  var pairs = [];
	  each(aryMethodKeys, function(aryKey) {
	    each(mapping.aryMethod[aryKey], function(key) {
	      var func = _[mapping.remap[key] || key];
	      if (func) {
	        pairs.push([key, wrap(key, func)]);
	      }
	    });
	  });

	  // Convert remaining methods.
	  each(keys(_), function(key) {
	    var func = _[key];
	    if (typeof func == 'function') {
	      var length = pairs.length;
	      while (length--) {
	        if (pairs[length][0] == key) {
	          return;
	        }
	      }
	      func.convert = createConverter(key, func);
	      pairs.push([key, func]);
	    }
	  });

	  // Assign to `_` leaving `_.prototype` unchanged to allow chaining.
	  each(pairs, function(pair) {
	    _[pair[0]] = pair[1];
	  });

	  _.convert = convertLib;
	  if (setPlaceholder) {
	    _.placeholder = placeholder;
	  }
	  // Assign aliases.
	  each(keys(_), function(key) {
	    each(mapping.realToAlias[key] || [], function(alias) {
	      _[alias] = _[key];
	    });
	  });

	  return _;
	}

	module.exports = baseConvert;


/***/ },
/* 1076 */
/***/ function(module, exports) {

	/** Used to map aliases to their real names. */
	exports.aliasToReal = {

	  // Lodash aliases.
	  'each': 'forEach',
	  'eachRight': 'forEachRight',
	  'entries': 'toPairs',
	  'entriesIn': 'toPairsIn',
	  'extend': 'assignIn',
	  'extendAll': 'assignInAll',
	  'extendAllWith': 'assignInAllWith',
	  'extendWith': 'assignInWith',
	  'first': 'head',

	  // Methods that are curried variants of others.
	  'conforms': 'conformsTo',
	  'matches': 'isMatch',
	  'property': 'get',

	  // Ramda aliases.
	  '__': 'placeholder',
	  'F': 'stubFalse',
	  'T': 'stubTrue',
	  'all': 'every',
	  'allPass': 'overEvery',
	  'always': 'constant',
	  'any': 'some',
	  'anyPass': 'overSome',
	  'apply': 'spread',
	  'assoc': 'set',
	  'assocPath': 'set',
	  'complement': 'negate',
	  'compose': 'flowRight',
	  'contains': 'includes',
	  'dissoc': 'unset',
	  'dissocPath': 'unset',
	  'dropLast': 'dropRight',
	  'dropLastWhile': 'dropRightWhile',
	  'equals': 'isEqual',
	  'identical': 'eq',
	  'indexBy': 'keyBy',
	  'init': 'initial',
	  'invertObj': 'invert',
	  'juxt': 'over',
	  'omitAll': 'omit',
	  'nAry': 'ary',
	  'path': 'get',
	  'pathEq': 'matchesProperty',
	  'pathOr': 'getOr',
	  'paths': 'at',
	  'pickAll': 'pick',
	  'pipe': 'flow',
	  'pluck': 'map',
	  'prop': 'get',
	  'propEq': 'matchesProperty',
	  'propOr': 'getOr',
	  'props': 'at',
	  'symmetricDifference': 'xor',
	  'symmetricDifferenceBy': 'xorBy',
	  'symmetricDifferenceWith': 'xorWith',
	  'takeLast': 'takeRight',
	  'takeLastWhile': 'takeRightWhile',
	  'unapply': 'rest',
	  'unnest': 'flatten',
	  'useWith': 'overArgs',
	  'where': 'conformsTo',
	  'whereEq': 'isMatch',
	  'zipObj': 'zipObject'
	};

	/** Used to map ary to method names. */
	exports.aryMethod = {
	  '1': [
	    'assignAll', 'assignInAll', 'attempt', 'castArray', 'ceil', 'create',
	    'curry', 'curryRight', 'defaultsAll', 'defaultsDeepAll', 'floor', 'flow',
	    'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'mergeAll',
	    'methodOf', 'mixin', 'nthArg', 'over', 'overEvery', 'overSome','rest', 'reverse',
	    'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart',
	    'uniqueId', 'words', 'zipAll'
	  ],
	  '2': [
	    'add', 'after', 'ary', 'assign', 'assignAllWith', 'assignIn', 'assignInAllWith',
	    'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith',
	    'cloneWith', 'concat', 'conformsTo', 'countBy', 'curryN', 'curryRightN',
	    'debounce', 'defaults', 'defaultsDeep', 'defaultTo', 'delay', 'difference',
	    'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq',
	    'every', 'filter', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex',
	    'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach',
	    'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get',
	    'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection',
	    'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy',
	    'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty',
	    'maxBy', 'meanBy', 'merge', 'mergeAllWith', 'minBy', 'multiply', 'nth', 'omit',
	    'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial',
	    'partialRight', 'partition', 'pick', 'pickBy', 'propertyOf', 'pull', 'pullAll',
	    'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove',
	    'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex',
	    'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy',
	    'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight',
	    'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars',
	    'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith',
	    'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject',
	    'zipObjectDeep'
	  ],
	  '3': [
	    'assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith',
	    'findFrom', 'findIndexFrom', 'findLastFrom', 'findLastIndexFrom', 'getOr',
	    'includesFrom', 'indexOfFrom', 'inRange', 'intersectionBy', 'intersectionWith',
	    'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth',
	    'lastIndexOfFrom', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd',
	    'padCharsStart', 'pullAllBy', 'pullAllWith', 'rangeStep', 'rangeStepRight',
	    'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy',
	    'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy',
	    'xorWith', 'zipWith'
	  ],
	  '4': [
	    'fill', 'setWith', 'updateWith'
	  ]
	};

	/** Used to map ary to rearg configs. */
	exports.aryRearg = {
	  '2': [1, 0],
	  '3': [2, 0, 1],
	  '4': [3, 2, 0, 1]
	};

	/** Used to map method names to their iteratee ary. */
	exports.iterateeAry = {
	  'dropRightWhile': 1,
	  'dropWhile': 1,
	  'every': 1,
	  'filter': 1,
	  'find': 1,
	  'findFrom': 1,
	  'findIndex': 1,
	  'findIndexFrom': 1,
	  'findKey': 1,
	  'findLast': 1,
	  'findLastFrom': 1,
	  'findLastIndex': 1,
	  'findLastIndexFrom': 1,
	  'findLastKey': 1,
	  'flatMap': 1,
	  'flatMapDeep': 1,
	  'flatMapDepth': 1,
	  'forEach': 1,
	  'forEachRight': 1,
	  'forIn': 1,
	  'forInRight': 1,
	  'forOwn': 1,
	  'forOwnRight': 1,
	  'map': 1,
	  'mapKeys': 1,
	  'mapValues': 1,
	  'partition': 1,
	  'reduce': 2,
	  'reduceRight': 2,
	  'reject': 1,
	  'remove': 1,
	  'some': 1,
	  'takeRightWhile': 1,
	  'takeWhile': 1,
	  'times': 1,
	  'transform': 2
	};

	/** Used to map method names to iteratee rearg configs. */
	exports.iterateeRearg = {
	  'mapKeys': [1],
	  'reduceRight': [1, 0]
	};

	/** Used to map method names to rearg configs. */
	exports.methodRearg = {
	  'assignInAllWith': [1, 0],
	  'assignInWith': [1, 2, 0],
	  'assignAllWith': [1, 0],
	  'assignWith': [1, 2, 0],
	  'differenceBy': [1, 2, 0],
	  'differenceWith': [1, 2, 0],
	  'getOr': [2, 1, 0],
	  'intersectionBy': [1, 2, 0],
	  'intersectionWith': [1, 2, 0],
	  'isEqualWith': [1, 2, 0],
	  'isMatchWith': [2, 1, 0],
	  'mergeAllWith': [1, 0],
	  'mergeWith': [1, 2, 0],
	  'padChars': [2, 1, 0],
	  'padCharsEnd': [2, 1, 0],
	  'padCharsStart': [2, 1, 0],
	  'pullAllBy': [2, 1, 0],
	  'pullAllWith': [2, 1, 0],
	  'rangeStep': [1, 2, 0],
	  'rangeStepRight': [1, 2, 0],
	  'setWith': [3, 1, 2, 0],
	  'sortedIndexBy': [2, 1, 0],
	  'sortedLastIndexBy': [2, 1, 0],
	  'unionBy': [1, 2, 0],
	  'unionWith': [1, 2, 0],
	  'updateWith': [3, 1, 2, 0],
	  'xorBy': [1, 2, 0],
	  'xorWith': [1, 2, 0],
	  'zipWith': [1, 2, 0]
	};

	/** Used to map method names to spread configs. */
	exports.methodSpread = {
	  'assignAll': { 'start': 0 },
	  'assignAllWith': { 'start': 0 },
	  'assignInAll': { 'start': 0 },
	  'assignInAllWith': { 'start': 0 },
	  'defaultsAll': { 'start': 0 },
	  'defaultsDeepAll': { 'start': 0 },
	  'invokeArgs': { 'start': 2 },
	  'invokeArgsMap': { 'start': 2 },
	  'mergeAll': { 'start': 0 },
	  'mergeAllWith': { 'start': 0 },
	  'partial': { 'start': 1 },
	  'partialRight': { 'start': 1 },
	  'without': { 'start': 1 },
	  'zipAll': { 'start': 0 }
	};

	/** Used to identify methods which mutate arrays or objects. */
	exports.mutate = {
	  'array': {
	    'fill': true,
	    'pull': true,
	    'pullAll': true,
	    'pullAllBy': true,
	    'pullAllWith': true,
	    'pullAt': true,
	    'remove': true,
	    'reverse': true
	  },
	  'object': {
	    'assign': true,
	    'assignAll': true,
	    'assignAllWith': true,
	    'assignIn': true,
	    'assignInAll': true,
	    'assignInAllWith': true,
	    'assignInWith': true,
	    'assignWith': true,
	    'defaults': true,
	    'defaultsAll': true,
	    'defaultsDeep': true,
	    'defaultsDeepAll': true,
	    'merge': true,
	    'mergeAll': true,
	    'mergeAllWith': true,
	    'mergeWith': true,
	  },
	  'set': {
	    'set': true,
	    'setWith': true,
	    'unset': true,
	    'update': true,
	    'updateWith': true
	  }
	};

	/** Used to track methods with placeholder support */
	exports.placeholder = {
	  'bind': true,
	  'bindKey': true,
	  'curry': true,
	  'curryRight': true,
	  'partial': true,
	  'partialRight': true
	};

	/** Used to map real names to their aliases. */
	exports.realToAlias = (function() {
	  var hasOwnProperty = Object.prototype.hasOwnProperty,
	      object = exports.aliasToReal,
	      result = {};

	  for (var key in object) {
	    var value = object[key];
	    if (hasOwnProperty.call(result, value)) {
	      result[value].push(key);
	    } else {
	      result[value] = [key];
	    }
	  }
	  return result;
	}());

	/** Used to map method names to other names. */
	exports.remap = {
	  'assignAll': 'assign',
	  'assignAllWith': 'assignWith',
	  'assignInAll': 'assignIn',
	  'assignInAllWith': 'assignInWith',
	  'curryN': 'curry',
	  'curryRightN': 'curryRight',
	  'defaultsAll': 'defaults',
	  'defaultsDeepAll': 'defaultsDeep',
	  'findFrom': 'find',
	  'findIndexFrom': 'findIndex',
	  'findLastFrom': 'findLast',
	  'findLastIndexFrom': 'findLastIndex',
	  'getOr': 'get',
	  'includesFrom': 'includes',
	  'indexOfFrom': 'indexOf',
	  'invokeArgs': 'invoke',
	  'invokeArgsMap': 'invokeMap',
	  'lastIndexOfFrom': 'lastIndexOf',
	  'mergeAll': 'merge',
	  'mergeAllWith': 'mergeWith',
	  'padChars': 'pad',
	  'padCharsEnd': 'padEnd',
	  'padCharsStart': 'padStart',
	  'propertyOf': 'get',
	  'rangeStep': 'range',
	  'rangeStepRight': 'rangeRight',
	  'restFrom': 'rest',
	  'spreadFrom': 'spread',
	  'trimChars': 'trim',
	  'trimCharsEnd': 'trimEnd',
	  'trimCharsStart': 'trimStart',
	  'zipAll': 'zip'
	};

	/** Used to track methods that skip fixing their arity. */
	exports.skipFixed = {
	  'castArray': true,
	  'flow': true,
	  'flowRight': true,
	  'iteratee': true,
	  'mixin': true,
	  'rearg': true,
	  'runInContext': true
	};

	/** Used to track methods that skip rearranging arguments. */
	exports.skipRearg = {
	  'add': true,
	  'assign': true,
	  'assignIn': true,
	  'bind': true,
	  'bindKey': true,
	  'concat': true,
	  'difference': true,
	  'divide': true,
	  'eq': true,
	  'gt': true,
	  'gte': true,
	  'isEqual': true,
	  'lt': true,
	  'lte': true,
	  'matchesProperty': true,
	  'merge': true,
	  'multiply': true,
	  'overArgs': true,
	  'partial': true,
	  'partialRight': true,
	  'propertyOf': true,
	  'random': true,
	  'range': true,
	  'rangeRight': true,
	  'subtract': true,
	  'zip': true,
	  'zipObject': true,
	  'zipObjectDeep': true
	};


/***/ },
/* 1077 */
/***/ function(module, exports) {

	/**
	 * The default argument placeholder value for methods.
	 *
	 * @type {Object}
	 */
	module.exports = {};


/***/ },
/* 1078 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  'ary': __webpack_require__(1079),
	  'assign': __webpack_require__(545),
	  'clone': __webpack_require__(542),
	  'curry': __webpack_require__(1110),
	  'forEach': __webpack_require__(544),
	  'isArray': __webpack_require__(70),
	  'isFunction': __webpack_require__(83),
	  'iteratee': __webpack_require__(1111),
	  'keys': __webpack_require__(217),
	  'rearg': __webpack_require__(1112),
	  'toInteger': __webpack_require__(302),
	  'toPath': __webpack_require__(1114)
	};


/***/ },
/* 1079 */
/***/ function(module, exports, __webpack_require__) {

	var createWrap = __webpack_require__(1080);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_ARY_FLAG = 128;

	/**
	 * Creates a function that invokes `func`, with up to `n` arguments,
	 * ignoring any additional arguments.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {Function} func The function to cap arguments for.
	 * @param {number} [n=func.length] The arity cap.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Function} Returns the new capped function.
	 * @example
	 *
	 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	 * // => [6, 8, 10]
	 */
	function ary(func, n, guard) {
	  n = guard ? undefined : n;
	  n = (func && n == null) ? func.length : n;
	  return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
	}

	module.exports = ary;


/***/ },
/* 1080 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetData = __webpack_require__(1081),
	    createBind = __webpack_require__(1083),
	    createCurry = __webpack_require__(1085),
	    createHybrid = __webpack_require__(1086),
	    createPartial = __webpack_require__(1108),
	    getData = __webpack_require__(1094),
	    mergeData = __webpack_require__(1109),
	    setData = __webpack_require__(1100),
	    setWrapToString = __webpack_require__(1101),
	    toInteger = __webpack_require__(302);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_CURRY_RIGHT_FLAG = 16,
	    WRAP_PARTIAL_FLAG = 32,
	    WRAP_PARTIAL_RIGHT_FLAG = 64;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that either curries or invokes `func` with optional
	 * `this` binding and partially applied arguments.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask flags.
	 *    1 - `_.bind`
	 *    2 - `_.bindKey`
	 *    4 - `_.curry` or `_.curryRight` of a bound function
	 *    8 - `_.curry`
	 *   16 - `_.curryRight`
	 *   32 - `_.partial`
	 *   64 - `_.partialRight`
	 *  128 - `_.rearg`
	 *  256 - `_.ary`
	 *  512 - `_.flip`
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to be partially applied.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
	  if (!isBindKey && typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var length = partials ? partials.length : 0;
	  if (!length) {
	    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
	    partials = holders = undefined;
	  }
	  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
	  arity = arity === undefined ? arity : toInteger(arity);
	  length -= holders ? holders.length : 0;

	  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
	    var partialsRight = partials,
	        holdersRight = holders;

	    partials = holders = undefined;
	  }
	  var data = isBindKey ? undefined : getData(func);

	  var newData = [
	    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
	    argPos, ary, arity
	  ];

	  if (data) {
	    mergeData(newData, data);
	  }
	  func = newData[0];
	  bitmask = newData[1];
	  thisArg = newData[2];
	  partials = newData[3];
	  holders = newData[4];
	  arity = newData[9] = newData[9] === undefined
	    ? (isBindKey ? 0 : func.length)
	    : nativeMax(newData[9] - length, 0);

	  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
	    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
	  }
	  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
	    var result = createBind(func, bitmask, thisArg);
	  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
	    result = createCurry(func, bitmask, arity);
	  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
	    result = createPartial(func, bitmask, thisArg, partials);
	  } else {
	    result = createHybrid.apply(undefined, newData);
	  }
	  var setter = data ? baseSetData : setData;
	  return setWrapToString(setter(result, newData), func, bitmask);
	}

	module.exports = createWrap;


/***/ },
/* 1081 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(298),
	    metaMap = __webpack_require__(1082);

	/**
	 * The base implementation of `setData` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetData = !metaMap ? identity : function(func, data) {
	  metaMap.set(func, data);
	  return func;
	};

	module.exports = baseSetData;


/***/ },
/* 1082 */
/***/ function(module, exports, __webpack_require__) {

	var WeakMap = __webpack_require__(202);

	/** Used to store function metadata. */
	var metaMap = WeakMap && new WeakMap;

	module.exports = metaMap;


/***/ },
/* 1083 */
/***/ function(module, exports, __webpack_require__) {

	var createCtor = __webpack_require__(1084),
	    root = __webpack_require__(8);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1;

	/**
	 * Creates a function that wraps `func` to invoke it with the optional `this`
	 * binding of `thisArg`.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createBind(func, bitmask, thisArg) {
	  var isBind = bitmask & WRAP_BIND_FLAG,
	      Ctor = createCtor(func);

	  function wrapper() {
	    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	    return fn.apply(isBind ? thisArg : this, arguments);
	  }
	  return wrapper;
	}

	module.exports = createBind;


/***/ },
/* 1084 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(403),
	    isObject = __webpack_require__(84);

	/**
	 * Creates a function that produces an instance of `Ctor` regardless of
	 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	 *
	 * @private
	 * @param {Function} Ctor The constructor to wrap.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCtor(Ctor) {
	  return function() {
	    // Use a `switch` statement to work with class constructors. See
	    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	    // for more details.
	    var args = arguments;
	    switch (args.length) {
	      case 0: return new Ctor;
	      case 1: return new Ctor(args[0]);
	      case 2: return new Ctor(args[0], args[1]);
	      case 3: return new Ctor(args[0], args[1], args[2]);
	      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	    }
	    var thisBinding = baseCreate(Ctor.prototype),
	        result = Ctor.apply(thisBinding, args);

	    // Mimic the constructor's `return` behavior.
	    // See https://es5.github.io/#x13.2.2 for more details.
	    return isObject(result) ? result : thisBinding;
	  };
	}

	module.exports = createCtor;


/***/ },
/* 1085 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(413),
	    createCtor = __webpack_require__(1084),
	    createHybrid = __webpack_require__(1086),
	    createRecurry = __webpack_require__(1090),
	    getHolder = __webpack_require__(1105),
	    replaceHolders = __webpack_require__(1107),
	    root = __webpack_require__(8);

	/**
	 * Creates a function that wraps `func` to enable currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {number} arity The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCurry(func, bitmask, arity) {
	  var Ctor = createCtor(func);

	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length,
	        placeholder = getHolder(wrapper);

	    while (index--) {
	      args[index] = arguments[index];
	    }
	    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
	      ? []
	      : replaceHolders(args, placeholder);

	    length -= holders.length;
	    if (length < arity) {
	      return createRecurry(
	        func, bitmask, createHybrid, wrapper.placeholder, undefined,
	        args, holders, undefined, undefined, arity - length);
	    }
	    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	    return apply(fn, this, args);
	  }
	  return wrapper;
	}

	module.exports = createCurry;


/***/ },
/* 1086 */
/***/ function(module, exports, __webpack_require__) {

	var composeArgs = __webpack_require__(1087),
	    composeArgsRight = __webpack_require__(1088),
	    countHolders = __webpack_require__(1089),
	    createCtor = __webpack_require__(1084),
	    createRecurry = __webpack_require__(1090),
	    getHolder = __webpack_require__(1105),
	    reorder = __webpack_require__(1106),
	    replaceHolders = __webpack_require__(1107),
	    root = __webpack_require__(8);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_CURRY_RIGHT_FLAG = 16,
	    WRAP_ARY_FLAG = 128,
	    WRAP_FLIP_FLAG = 512;

	/**
	 * Creates a function that wraps `func` to invoke it with optional `this`
	 * binding of `thisArg`, partial application, and currying.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [partialsRight] The arguments to append to those provided
	 *  to the new function.
	 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	  var isAry = bitmask & WRAP_ARY_FLAG,
	      isBind = bitmask & WRAP_BIND_FLAG,
	      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
	      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
	      isFlip = bitmask & WRAP_FLIP_FLAG,
	      Ctor = isBindKey ? undefined : createCtor(func);

	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length;

	    while (index--) {
	      args[index] = arguments[index];
	    }
	    if (isCurried) {
	      var placeholder = getHolder(wrapper),
	          holdersCount = countHolders(args, placeholder);
	    }
	    if (partials) {
	      args = composeArgs(args, partials, holders, isCurried);
	    }
	    if (partialsRight) {
	      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
	    }
	    length -= holdersCount;
	    if (isCurried && length < arity) {
	      var newHolders = replaceHolders(args, placeholder);
	      return createRecurry(
	        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
	        args, newHolders, argPos, ary, arity - length
	      );
	    }
	    var thisBinding = isBind ? thisArg : this,
	        fn = isBindKey ? thisBinding[func] : func;

	    length = args.length;
	    if (argPos) {
	      args = reorder(args, argPos);
	    } else if (isFlip && length > 1) {
	      args.reverse();
	    }
	    if (isAry && ary < length) {
	      args.length = ary;
	    }
	    if (this && this !== root && this instanceof wrapper) {
	      fn = Ctor || createCtor(fn);
	    }
	    return fn.apply(thisBinding, args);
	  }
	  return wrapper;
	}

	module.exports = createHybrid;


/***/ },
/* 1087 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates an array that is the composition of partially applied arguments,
	 * placeholders, and provided arguments into a single array of arguments.
	 *
	 * @private
	 * @param {Array} args The provided arguments.
	 * @param {Array} partials The arguments to prepend to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgs(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersLength = holders.length,
	      leftIndex = -1,
	      leftLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(leftLength + rangeLength),
	      isUncurried = !isCurried;

	  while (++leftIndex < leftLength) {
	    result[leftIndex] = partials[leftIndex];
	  }
	  while (++argsIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[holders[argsIndex]] = args[argsIndex];
	    }
	  }
	  while (rangeLength--) {
	    result[leftIndex++] = args[argsIndex++];
	  }
	  return result;
	}

	module.exports = composeArgs;


/***/ },
/* 1088 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * This function is like `composeArgs` except that the arguments composition
	 * is tailored for `_.partialRight`.
	 *
	 * @private
	 * @param {Array} args The provided arguments.
	 * @param {Array} partials The arguments to append to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgsRight(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersIndex = -1,
	      holdersLength = holders.length,
	      rightIndex = -1,
	      rightLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(rangeLength + rightLength),
	      isUncurried = !isCurried;

	  while (++argsIndex < rangeLength) {
	    result[argsIndex] = args[argsIndex];
	  }
	  var offset = argsIndex;
	  while (++rightIndex < rightLength) {
	    result[offset + rightIndex] = partials[rightIndex];
	  }
	  while (++holdersIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[offset + holders[holdersIndex]] = args[argsIndex++];
	    }
	  }
	  return result;
	}

	module.exports = composeArgsRight;


/***/ },
/* 1089 */
/***/ function(module, exports) {

	/**
	 * Gets the number of `placeholder` occurrences in `array`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} placeholder The placeholder to search for.
	 * @returns {number} Returns the placeholder count.
	 */
	function countHolders(array, placeholder) {
	  var length = array.length,
	      result = 0;

	  while (length--) {
	    if (array[length] === placeholder) {
	      ++result;
	    }
	  }
	  return result;
	}

	module.exports = countHolders;


/***/ },
/* 1090 */
/***/ function(module, exports, __webpack_require__) {

	var isLaziable = __webpack_require__(1091),
	    setData = __webpack_require__(1100),
	    setWrapToString = __webpack_require__(1101);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_BOUND_FLAG = 4,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_PARTIAL_FLAG = 32,
	    WRAP_PARTIAL_RIGHT_FLAG = 64;

	/**
	 * Creates a function that wraps `func` to continue currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {Function} wrapFunc The function to create the `func` wrapper.
	 * @param {*} placeholder The placeholder value.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
	  var isCurry = bitmask & WRAP_CURRY_FLAG,
	      newHolders = isCurry ? holders : undefined,
	      newHoldersRight = isCurry ? undefined : holders,
	      newPartials = isCurry ? partials : undefined,
	      newPartialsRight = isCurry ? undefined : partials;

	  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
	  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

	  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
	    bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
	  }
	  var newData = [
	    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
	    newHoldersRight, argPos, ary, arity
	  ];

	  var result = wrapFunc.apply(undefined, newData);
	  if (isLaziable(func)) {
	    setData(result, newData);
	  }
	  result.placeholder = placeholder;
	  return setWrapToString(result, func, bitmask);
	}

	module.exports = createRecurry;


/***/ },
/* 1091 */
/***/ function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(1092),
	    getData = __webpack_require__(1094),
	    getFuncName = __webpack_require__(1095),
	    lodash = __webpack_require__(1097);

	/**
	 * Checks if `func` has a lazy counterpart.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	 *  else `false`.
	 */
	function isLaziable(func) {
	  var funcName = getFuncName(func),
	      other = lodash[funcName];

	  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
	    return false;
	  }
	  if (func === other) {
	    return true;
	  }
	  var data = getData(other);
	  return !!data && func === data[0];
	}

	module.exports = isLaziable;


/***/ },
/* 1092 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(403),
	    baseLodash = __webpack_require__(1093);

	/** Used as references for the maximum length and index of an array. */
	var MAX_ARRAY_LENGTH = 4294967295;

	/**
	 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	 *
	 * @private
	 * @constructor
	 * @param {*} value The value to wrap.
	 */
	function LazyWrapper(value) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__dir__ = 1;
	  this.__filtered__ = false;
	  this.__iteratees__ = [];
	  this.__takeCount__ = MAX_ARRAY_LENGTH;
	  this.__views__ = [];
	}

	// Ensure `LazyWrapper` is an instance of `baseLodash`.
	LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	LazyWrapper.prototype.constructor = LazyWrapper;

	module.exports = LazyWrapper;


/***/ },
/* 1093 */
/***/ function(module, exports) {

	/**
	 * The function whose prototype chain sequence wrappers inherit from.
	 *
	 * @private
	 */
	function baseLodash() {
	  // No operation performed.
	}

	module.exports = baseLodash;


/***/ },
/* 1094 */
/***/ function(module, exports, __webpack_require__) {

	var metaMap = __webpack_require__(1082),
	    noop = __webpack_require__(569);

	/**
	 * Gets metadata for `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {*} Returns the metadata for `func`.
	 */
	var getData = !metaMap ? noop : function(func) {
	  return metaMap.get(func);
	};

	module.exports = getData;


/***/ },
/* 1095 */
/***/ function(module, exports, __webpack_require__) {

	var realNames = __webpack_require__(1096);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the name of `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {string} Returns the function name.
	 */
	function getFuncName(func) {
	  var result = (func.name + ''),
	      array = realNames[result],
	      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

	  while (length--) {
	    var data = array[length],
	        otherFunc = data.func;
	    if (otherFunc == null || otherFunc == func) {
	      return data.name;
	    }
	  }
	  return result;
	}

	module.exports = getFuncName;


/***/ },
/* 1096 */
/***/ function(module, exports) {

	/** Used to lookup unminified function names. */
	var realNames = {};

	module.exports = realNames;


/***/ },
/* 1097 */
/***/ function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(1092),
	    LodashWrapper = __webpack_require__(1098),
	    baseLodash = __webpack_require__(1093),
	    isArray = __webpack_require__(70),
	    isObjectLike = __webpack_require__(14),
	    wrapperClone = __webpack_require__(1099);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates a `lodash` object which wraps `value` to enable implicit method
	 * chain sequences. Methods that operate on and return arrays, collections,
	 * and functions can be chained together. Methods that retrieve a single value
	 * or may return a primitive value will automatically end the chain sequence
	 * and return the unwrapped value. Otherwise, the value must be unwrapped
	 * with `_#value`.
	 *
	 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	 * enabled using `_.chain`.
	 *
	 * The execution of chained methods is lazy, that is, it's deferred until
	 * `_#value` is implicitly or explicitly called.
	 *
	 * Lazy evaluation allows several methods to support shortcut fusion.
	 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	 * the creation of intermediate arrays and can greatly reduce the number of
	 * iteratee executions. Sections of a chain sequence qualify for shortcut
	 * fusion if the section is applied to an array and iteratees accept only
	 * one argument. The heuristic for whether a section qualifies for shortcut
	 * fusion is subject to change.
	 *
	 * Chaining is supported in custom builds as long as the `_#value` method is
	 * directly or indirectly included in the build.
	 *
	 * In addition to lodash methods, wrappers have `Array` and `String` methods.
	 *
	 * The wrapper `Array` methods are:
	 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	 *
	 * The wrapper `String` methods are:
	 * `replace` and `split`
	 *
	 * The wrapper methods that support shortcut fusion are:
	 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	 *
	 * The chainable wrapper methods are:
	 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	 * `zipObject`, `zipObjectDeep`, and `zipWith`
	 *
	 * The wrapper methods that are **not** chainable by default are:
	 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	 * `upperFirst`, `value`, and `words`
	 *
	 * @name _
	 * @constructor
	 * @category Seq
	 * @param {*} value The value to wrap in a `lodash` instance.
	 * @returns {Object} Returns the new `lodash` wrapper instance.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var wrapped = _([1, 2, 3]);
	 *
	 * // Returns an unwrapped value.
	 * wrapped.reduce(_.add);
	 * // => 6
	 *
	 * // Returns a wrapped value.
	 * var squares = wrapped.map(square);
	 *
	 * _.isArray(squares);
	 * // => false
	 *
	 * _.isArray(squares.value());
	 * // => true
	 */
	function lodash(value) {
	  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	    if (value instanceof LodashWrapper) {
	      return value;
	    }
	    if (hasOwnProperty.call(value, '__wrapped__')) {
	      return wrapperClone(value);
	    }
	  }
	  return new LodashWrapper(value);
	}

	// Ensure wrappers are instances of `baseLodash`.
	lodash.prototype = baseLodash.prototype;
	lodash.prototype.constructor = lodash;

	module.exports = lodash;


/***/ },
/* 1098 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(403),
	    baseLodash = __webpack_require__(1093);

	/**
	 * The base constructor for creating `lodash` wrapper objects.
	 *
	 * @private
	 * @param {*} value The value to wrap.
	 * @param {boolean} [chainAll] Enable explicit method chain sequences.
	 */
	function LodashWrapper(value, chainAll) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__chain__ = !!chainAll;
	  this.__index__ = 0;
	  this.__values__ = undefined;
	}

	LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	LodashWrapper.prototype.constructor = LodashWrapper;

	module.exports = LodashWrapper;


/***/ },
/* 1099 */
/***/ function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(1092),
	    LodashWrapper = __webpack_require__(1098),
	    copyArray = __webpack_require__(401);

	/**
	 * Creates a clone of `wrapper`.
	 *
	 * @private
	 * @param {Object} wrapper The wrapper to clone.
	 * @returns {Object} Returns the cloned wrapper.
	 */
	function wrapperClone(wrapper) {
	  if (wrapper instanceof LazyWrapper) {
	    return wrapper.clone();
	  }
	  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
	  result.__actions__ = copyArray(wrapper.__actions__);
	  result.__index__  = wrapper.__index__;
	  result.__values__ = wrapper.__values__;
	  return result;
	}

	module.exports = wrapperClone;


/***/ },
/* 1100 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetData = __webpack_require__(1081),
	    shortOut = __webpack_require__(417);

	/**
	 * Sets metadata for `func`.
	 *
	 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	 * period of time, it will trip its breaker and transition to an identity
	 * function to avoid garbage collection pauses in V8. See
	 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
	 * for more details.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */
	var setData = shortOut(baseSetData);

	module.exports = setData;


/***/ },
/* 1101 */
/***/ function(module, exports, __webpack_require__) {

	var getWrapDetails = __webpack_require__(1102),
	    insertWrapDetails = __webpack_require__(1103),
	    setToString = __webpack_require__(414),
	    updateWrapDetails = __webpack_require__(1104);

	/**
	 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
	 * with wrapper details in a comment at the top of the source body.
	 *
	 * @private
	 * @param {Function} wrapper The function to modify.
	 * @param {Function} reference The reference function.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @returns {Function} Returns `wrapper`.
	 */
	function setWrapToString(wrapper, reference, bitmask) {
	  var source = (reference + '');
	  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
	}

	module.exports = setWrapToString;


/***/ },
/* 1102 */
/***/ function(module, exports) {

	/** Used to match wrap detail comments. */
	var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
	    reSplitDetails = /,? & /;

	/**
	 * Extracts wrapper details from the `source` body comment.
	 *
	 * @private
	 * @param {string} source The source to inspect.
	 * @returns {Array} Returns the wrapper details.
	 */
	function getWrapDetails(source) {
	  var match = source.match(reWrapDetails);
	  return match ? match[1].split(reSplitDetails) : [];
	}

	module.exports = getWrapDetails;


/***/ },
/* 1103 */
/***/ function(module, exports) {

	/** Used to match wrap detail comments. */
	var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

	/**
	 * Inserts wrapper `details` in a comment at the top of the `source` body.
	 *
	 * @private
	 * @param {string} source The source to modify.
	 * @returns {Array} details The details to insert.
	 * @returns {string} Returns the modified source.
	 */
	function insertWrapDetails(source, details) {
	  var length = details.length;
	  if (!length) {
	    return source;
	  }
	  var lastIndex = length - 1;
	  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
	  details = details.join(length > 2 ? ', ' : ' ');
	  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
	}

	module.exports = insertWrapDetails;


/***/ },
/* 1104 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(544),
	    arrayIncludes = __webpack_require__(563);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_CURRY_RIGHT_FLAG = 16,
	    WRAP_PARTIAL_FLAG = 32,
	    WRAP_PARTIAL_RIGHT_FLAG = 64,
	    WRAP_ARY_FLAG = 128,
	    WRAP_REARG_FLAG = 256,
	    WRAP_FLIP_FLAG = 512;

	/** Used to associate wrap methods with their bit flags. */
	var wrapFlags = [
	  ['ary', WRAP_ARY_FLAG],
	  ['bind', WRAP_BIND_FLAG],
	  ['bindKey', WRAP_BIND_KEY_FLAG],
	  ['curry', WRAP_CURRY_FLAG],
	  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
	  ['flip', WRAP_FLIP_FLAG],
	  ['partial', WRAP_PARTIAL_FLAG],
	  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
	  ['rearg', WRAP_REARG_FLAG]
	];

	/**
	 * Updates wrapper `details` based on `bitmask` flags.
	 *
	 * @private
	 * @returns {Array} details The details to modify.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @returns {Array} Returns `details`.
	 */
	function updateWrapDetails(details, bitmask) {
	  arrayEach(wrapFlags, function(pair) {
	    var value = '_.' + pair[0];
	    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
	      details.push(value);
	    }
	  });
	  return details.sort();
	}

	module.exports = updateWrapDetails;


/***/ },
/* 1105 */
/***/ function(module, exports) {

	/**
	 * Gets the argument placeholder value for `func`.
	 *
	 * @private
	 * @param {Function} func The function to inspect.
	 * @returns {*} Returns the placeholder value.
	 */
	function getHolder(func) {
	  var object = func;
	  return object.placeholder;
	}

	module.exports = getHolder;


/***/ },
/* 1106 */
/***/ function(module, exports, __webpack_require__) {

	var copyArray = __webpack_require__(401),
	    isIndex = __webpack_require__(117);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * Reorder `array` according to the specified indexes where the element at
	 * the first index is assigned as the first element, the element at
	 * the second index is assigned as the second element, and so on.
	 *
	 * @private
	 * @param {Array} array The array to reorder.
	 * @param {Array} indexes The arranged array indexes.
	 * @returns {Array} Returns `array`.
	 */
	function reorder(array, indexes) {
	  var arrLength = array.length,
	      length = nativeMin(indexes.length, arrLength),
	      oldArray = copyArray(array);

	  while (length--) {
	    var index = indexes[length];
	    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	  }
	  return array;
	}

	module.exports = reorder;


/***/ },
/* 1107 */
/***/ function(module, exports) {

	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';

	/**
	 * Replaces all `placeholder` elements in `array` with an internal placeholder
	 * and returns an array of their indexes.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {*} placeholder The placeholder to replace.
	 * @returns {Array} Returns the new array of placeholder indexes.
	 */
	function replaceHolders(array, placeholder) {
	  var index = -1,
	      length = array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (value === placeholder || value === PLACEHOLDER) {
	      array[index] = PLACEHOLDER;
	      result[resIndex++] = index;
	    }
	  }
	  return result;
	}

	module.exports = replaceHolders;


/***/ },
/* 1108 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(413),
	    createCtor = __webpack_require__(1084),
	    root = __webpack_require__(8);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1;

	/**
	 * Creates a function that wraps `func` to invoke it with the `this` binding
	 * of `thisArg` and `partials` prepended to the arguments it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} partials The arguments to prepend to those provided to
	 *  the new function.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createPartial(func, bitmask, thisArg, partials) {
	  var isBind = bitmask & WRAP_BIND_FLAG,
	      Ctor = createCtor(func);

	  function wrapper() {
	    var argsIndex = -1,
	        argsLength = arguments.length,
	        leftIndex = -1,
	        leftLength = partials.length,
	        args = Array(leftLength + argsLength),
	        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

	    while (++leftIndex < leftLength) {
	      args[leftIndex] = partials[leftIndex];
	    }
	    while (argsLength--) {
	      args[leftIndex++] = arguments[++argsIndex];
	    }
	    return apply(fn, isBind ? thisArg : this, args);
	  }
	  return wrapper;
	}

	module.exports = createPartial;


/***/ },
/* 1109 */
/***/ function(module, exports, __webpack_require__) {

	var composeArgs = __webpack_require__(1087),
	    composeArgsRight = __webpack_require__(1088),
	    replaceHolders = __webpack_require__(1107);

	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';

	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_BOUND_FLAG = 4,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_ARY_FLAG = 128,
	    WRAP_REARG_FLAG = 256;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * Merges the function metadata of `source` into `data`.
	 *
	 * Merging metadata reduces the number of wrappers used to invoke a function.
	 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	 * may be applied regardless of execution order. Methods like `_.ary` and
	 * `_.rearg` modify function arguments, making the order in which they are
	 * executed important, preventing the merging of metadata. However, we make
	 * an exception for a safe combined case where curried functions have `_.ary`
	 * and or `_.rearg` applied.
	 *
	 * @private
	 * @param {Array} data The destination metadata.
	 * @param {Array} source The source metadata.
	 * @returns {Array} Returns `data`.
	 */
	function mergeData(data, source) {
	  var bitmask = data[1],
	      srcBitmask = source[1],
	      newBitmask = bitmask | srcBitmask,
	      isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

	  var isCombo =
	    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
	    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
	    ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

	  // Exit early if metadata can't be merged.
	  if (!(isCommon || isCombo)) {
	    return data;
	  }
	  // Use source `thisArg` if available.
	  if (srcBitmask & WRAP_BIND_FLAG) {
	    data[2] = source[2];
	    // Set when currying a bound function.
	    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
	  }
	  // Compose partial arguments.
	  var value = source[3];
	  if (value) {
	    var partials = data[3];
	    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
	    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
	  }
	  // Compose partial right arguments.
	  value = source[5];
	  if (value) {
	    partials = data[5];
	    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
	    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
	  }
	  // Use source `argPos` if available.
	  value = source[7];
	  if (value) {
	    data[7] = value;
	  }
	  // Use source `ary` if it's smaller.
	  if (srcBitmask & WRAP_ARY_FLAG) {
	    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	  }
	  // Use source `arity` if one is not provided.
	  if (data[9] == null) {
	    data[9] = source[9];
	  }
	  // Use source `func` and merge bitmasks.
	  data[0] = source[0];
	  data[1] = newBitmask;

	  return data;
	}

	module.exports = mergeData;


/***/ },
/* 1110 */
/***/ function(module, exports, __webpack_require__) {

	var createWrap = __webpack_require__(1080);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_CURRY_FLAG = 8;

	/**
	 * Creates a function that accepts arguments of `func` and either invokes
	 * `func` returning its result, if at least `arity` number of arguments have
	 * been provided, or returns a function that accepts the remaining `func`
	 * arguments, and so on. The arity of `func` may be specified if `func.length`
	 * is not sufficient.
	 *
	 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	 * may be used as a placeholder for provided arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of curried functions.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.0.0
	 * @category Function
	 * @param {Function} func The function to curry.
	 * @param {number} [arity=func.length] The arity of `func`.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Function} Returns the new curried function.
	 * @example
	 *
	 * var abc = function(a, b, c) {
	 *   return [a, b, c];
	 * };
	 *
	 * var curried = _.curry(abc);
	 *
	 * curried(1)(2)(3);
	 * // => [1, 2, 3]
	 *
	 * curried(1, 2)(3);
	 * // => [1, 2, 3]
	 *
	 * curried(1, 2, 3);
	 * // => [1, 2, 3]
	 *
	 * // Curried with placeholders.
	 * curried(1)(_, 3)(2);
	 * // => [1, 2, 3]
	 */
	function curry(func, arity, guard) {
	  arity = guard ? undefined : arity;
	  var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
	  result.placeholder = curry.placeholder;
	  return result;
	}

	// Assign default placeholders.
	curry.placeholder = {};

	module.exports = curry;


/***/ },
/* 1111 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(543),
	    baseIteratee = __webpack_require__(264);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;

	/**
	 * Creates a function that invokes `func` with the arguments of the created
	 * function. If `func` is a property name, the created function returns the
	 * property value for a given element. If `func` is an array or object, the
	 * created function returns `true` for elements that contain the equivalent
	 * source properties, otherwise it returns `false`.
	 *
	 * @static
	 * @since 4.0.0
	 * @memberOf _
	 * @category Util
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @returns {Function} Returns the callback.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': true },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
	 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.filter(users, _.iteratee(['user', 'fred']));
	 * // => [{ 'user': 'fred', 'age': 40 }]
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, _.iteratee('user'));
	 * // => ['barney', 'fred']
	 *
	 * // Create custom iteratee shorthands.
	 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
	 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
	 *     return func.test(string);
	 *   };
	 * });
	 *
	 * _.filter(['abc', 'def'], /ef/);
	 * // => ['def']
	 */
	function iteratee(func) {
	  return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
	}

	module.exports = iteratee;


/***/ },
/* 1112 */
/***/ function(module, exports, __webpack_require__) {

	var createWrap = __webpack_require__(1080),
	    flatRest = __webpack_require__(1113);

	/** Used to compose bitmasks for function metadata. */
	var WRAP_REARG_FLAG = 256;

	/**
	 * Creates a function that invokes `func` with arguments arranged according
	 * to the specified `indexes` where the argument value at the first index is
	 * provided as the first argument, the argument value at the second index is
	 * provided as the second argument, and so on.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {Function} func The function to rearrange arguments for.
	 * @param {...(number|number[])} indexes The arranged argument indexes.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var rearged = _.rearg(function(a, b, c) {
	 *   return [a, b, c];
	 * }, [2, 0, 1]);
	 *
	 * rearged('b', 'c', 'a')
	 * // => ['a', 'b', 'c']
	 */
	var rearg = flatRest(function(func, indexes) {
	  return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
	});

	module.exports = rearg;


/***/ },
/* 1113 */
/***/ function(module, exports, __webpack_require__) {

	var flatten = __webpack_require__(706),
	    overRest = __webpack_require__(412),
	    setToString = __webpack_require__(414);

	/**
	 * A specialized version of `baseRest` which flattens the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @returns {Function} Returns the new function.
	 */
	function flatRest(func) {
	  return setToString(overRest(func, undefined, flatten), func + '');
	}

	module.exports = flatRest;


/***/ },
/* 1114 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(110),
	    copyArray = __webpack_require__(401),
	    isArray = __webpack_require__(70),
	    isSymbol = __webpack_require__(72),
	    stringToPath = __webpack_require__(73),
	    toKey = __webpack_require__(111),
	    toString = __webpack_require__(108);

	/**
	 * Converts `value` to a property path array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Util
	 * @param {*} value The value to convert.
	 * @returns {Array} Returns the new property path array.
	 * @example
	 *
	 * _.toPath('a.b.c');
	 * // => ['a', 'b', 'c']
	 *
	 * _.toPath('a[0].b.c');
	 * // => ['a', '0', 'b', 'c']
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return arrayMap(value, toKey);
	  }
	  return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
	}

	module.exports = toPath;


/***/ }
/******/ ])
});
;