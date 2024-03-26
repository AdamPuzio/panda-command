var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/tsup/assets/esm_shims.js
var init_esm_shims = __esm({
  "node_modules/tsup/assets/esm_shims.js"() {
  }
});

// node_modules/lodash.camelcase/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.camelcase/index.js"(exports, module) {
    init_esm_shims();
    var INFINITY = 1 / 0;
    var symbolTag = "[object Symbol]";
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
    var rsComboSymbolsRange = "\\u20d0-\\u20f0";
    var rsDingbatRange = "\\u2700-\\u27bf";
    var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
    var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
    var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
    var rsPunctuationRange = "\\u2000-\\u206f";
    var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
    var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsBreak = "[" + rsBreakRange + "]";
    var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
    var rsDigits = "\\d+";
    var rsDingbat = "[" + rsDingbatRange + "]";
    var rsLower = "[" + rsLowerRange + "]";
    var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsUpper = "[" + rsUpperRange + "]";
    var rsZWJ = "\\u200d";
    var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")";
    var rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")";
    var rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
    var rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptLowerContr + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsUpperMisc + "+" + rsOptUpperContr + "(?=" + [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") + ")",
      rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
      rsUpper + "+" + rsOptUpperContr,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var deburredLetters = {
      // Latin-1 Supplement block.
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      // Latin Extended-A block.
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "ss"
    };
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array ? array.length : 0;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? void 0 : object[key];
      };
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var Symbol2 = root.Symbol;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
      };
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
    }
    var upperFirst = createCaseFirst("toUpperCase");
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? void 0 : pattern;
      if (pattern === void 0) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }
    module.exports = camelCase;
  }
});

// node_modules/command-line-args/dist/index.js
var require_dist = __commonJS({
  "node_modules/command-line-args/dist/index.js"(exports, module) {
    "use strict";
    init_esm_shims();
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var camelCase = _interopDefault(require_lodash());
    function isObject5(input) {
      return typeof input === "object" && input !== null;
    }
    function isArrayLike5(input) {
      return isObject5(input) && typeof input.length === "number";
    }
    function arrayify3(input) {
      if (Array.isArray(input)) {
        return input;
      }
      if (input === void 0) {
        return [];
      }
      if (isArrayLike5(input) || input instanceof Set) {
        return Array.from(input);
      }
      return [input];
    }
    function isObject$1(input) {
      return typeof input === "object" && input !== null;
    }
    function isArrayLike$1(input) {
      return isObject$1(input) && typeof input.length === "number";
    }
    function arrayify$1(input) {
      if (Array.isArray(input)) {
        return input;
      } else {
        if (input === void 0) {
          return [];
        } else if (isArrayLike$1(input)) {
          return Array.prototype.slice.call(input);
        } else {
          return [input];
        }
      }
    }
    function findReplace(array, testFn) {
      const found = [];
      const replaceWiths = arrayify$1(arguments);
      replaceWiths.splice(0, 2);
      arrayify$1(array).forEach((value, index) => {
        let expanded = [];
        replaceWiths.forEach((replaceWith) => {
          if (typeof replaceWith === "function") {
            expanded = expanded.concat(replaceWith(value));
          } else {
            expanded.push(replaceWith);
          }
        });
        if (testFn(value)) {
          found.push({
            index,
            replaceWithValue: expanded
          });
        }
      });
      found.reverse().forEach((item) => {
        const spliceArgs = [item.index, 1].concat(item.replaceWithValue);
        array.splice.apply(array, spliceArgs);
      });
      return array;
    }
    var re2 = {
      short: /^-([^\d-])$/,
      long: /^--(\S+)/,
      combinedShort: /^-[^\d-]{2,}$/,
      optEquals: /^(--\S+?)=(.*)/
    };
    var ArgvArray = class extends Array {
      /**
       * Clears the array has loads the supplied input.
       * @param {string[]} argv - The argv list to load. Defaults to `process.argv`.
       */
      load(argv) {
        this.clear();
        if (argv && argv !== process.argv) {
          argv = arrayify3(argv);
        } else {
          argv = process.argv.slice(0);
          const deleteCount = process.execArgv.some(isExecArg) ? 1 : 2;
          argv.splice(0, deleteCount);
        }
        argv.forEach((arg) => this.push(String(arg)));
      }
      /**
       * Clear the array.
       */
      clear() {
        this.length = 0;
      }
      /**
       * expand ``--option=value` style args.
       */
      expandOptionEqualsNotation() {
        if (this.some((arg) => re2.optEquals.test(arg))) {
          const expandedArgs = [];
          this.forEach((arg) => {
            const matches = arg.match(re2.optEquals);
            if (matches) {
              expandedArgs.push(matches[1], matches[2]);
            } else {
              expandedArgs.push(arg);
            }
          });
          this.clear();
          this.load(expandedArgs);
        }
      }
      /**
       * expand getopt-style combinedShort options.
       */
      expandGetoptNotation() {
        if (this.hasCombinedShortOptions()) {
          findReplace(this, re2.combinedShort, expandCombinedShortArg);
        }
      }
      /**
       * Returns true if the array contains combined short options (e.g. `-ab`).
       * @returns {boolean}
       */
      hasCombinedShortOptions() {
        return this.some((arg) => re2.combinedShort.test(arg));
      }
      static from(argv) {
        const result = new this();
        result.load(argv);
        return result;
      }
    };
    function expandCombinedShortArg(arg) {
      arg = arg.slice(1);
      return arg.split("").map((letter) => "-" + letter);
    }
    function isOptionEqualsNotation(arg) {
      return re2.optEquals.test(arg);
    }
    function isOption(arg) {
      return (re2.short.test(arg) || re2.long.test(arg)) && !re2.optEquals.test(arg);
    }
    function isLongOption(arg) {
      return re2.long.test(arg) && !isOptionEqualsNotation(arg);
    }
    function getOptionName(arg) {
      if (re2.short.test(arg)) {
        return arg.match(re2.short)[1];
      } else if (isLongOption(arg)) {
        return arg.match(re2.long)[1];
      } else if (isOptionEqualsNotation(arg)) {
        return arg.match(re2.optEquals)[1].replace(/^--/, "");
      } else {
        return null;
      }
    }
    function isValue(arg) {
      return !(isOption(arg) || re2.combinedShort.test(arg) || re2.optEquals.test(arg));
    }
    function isExecArg(arg) {
      return ["--eval", "-e"].indexOf(arg) > -1 || arg.startsWith("--eval=");
    }
    function isNumber3(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
    function isPlainObject4(input) {
      return input !== null && typeof input === "object" && input.constructor === Object;
    }
    function isArrayLike$2(input) {
      return isObject$2(input) && typeof input.length === "number";
    }
    function isObject$2(input) {
      return typeof input === "object" && input !== null;
    }
    function isDefined4(input) {
      return typeof input !== "undefined";
    }
    function isString3(input) {
      return typeof input === "string";
    }
    function isBoolean(input) {
      return typeof input === "boolean";
    }
    function isFunction3(input) {
      return typeof input === "function";
    }
    function isClass3(input) {
      if (isFunction3(input)) {
        return /^class /.test(Function.prototype.toString.call(input));
      } else {
        return false;
      }
    }
    function isPrimitive3(input) {
      if (input === null)
        return true;
      switch (typeof input) {
        case "string":
        case "number":
        case "symbol":
        case "undefined":
        case "boolean":
          return true;
        default:
          return false;
      }
    }
    function isPromise3(input) {
      if (input) {
        const isPromise4 = isDefined4(Promise) && input instanceof Promise;
        const isThenable = input.then && typeof input.then === "function";
        return !!(isPromise4 || isThenable);
      } else {
        return false;
      }
    }
    function isIterable3(input) {
      if (input === null || !isDefined4(input)) {
        return false;
      } else {
        return typeof input[Symbol.iterator] === "function" || typeof input[Symbol.asyncIterator] === "function";
      }
    }
    var t = {
      isNumber: isNumber3,
      isString: isString3,
      isBoolean,
      isPlainObject: isPlainObject4,
      isArrayLike: isArrayLike$2,
      isObject: isObject$2,
      isDefined: isDefined4,
      isFunction: isFunction3,
      isClass: isClass3,
      isPrimitive: isPrimitive3,
      isPromise: isPromise3,
      isIterable: isIterable3
    };
    var OptionDefinition = class {
      constructor(definition) {
        this.name = definition.name;
        this.type = definition.type || String;
        this.alias = definition.alias;
        this.multiple = definition.multiple;
        this.lazyMultiple = definition.lazyMultiple;
        this.defaultOption = definition.defaultOption;
        this.defaultValue = definition.defaultValue;
        this.group = definition.group;
        for (const prop in definition) {
          if (!this[prop])
            this[prop] = definition[prop];
        }
      }
      isBoolean() {
        return this.type === Boolean || t.isFunction(this.type) && this.type.name === "Boolean";
      }
      isMultiple() {
        return this.multiple || this.lazyMultiple;
      }
      static create(def) {
        const result = new this(def);
        return result;
      }
    };
    var Definitions = class extends Array {
      /**
       * validate option definitions
       * @param {boolean} [caseInsensitive=false] - whether arguments will be parsed in a case insensitive manner
       * @returns {string}
       */
      validate(caseInsensitive) {
        const someHaveNoName = this.some((def) => !def.name);
        if (someHaveNoName) {
          halt(
            "INVALID_DEFINITIONS",
            "Invalid option definitions: the `name` property is required on each definition"
          );
        }
        const someDontHaveFunctionType = this.some((def) => def.type && typeof def.type !== "function");
        if (someDontHaveFunctionType) {
          halt(
            "INVALID_DEFINITIONS",
            "Invalid option definitions: the `type` property must be a setter fuction (default: `Boolean`)"
          );
        }
        let invalidOption;
        const numericAlias = this.some((def) => {
          invalidOption = def;
          return t.isDefined(def.alias) && t.isNumber(def.alias);
        });
        if (numericAlias) {
          halt(
            "INVALID_DEFINITIONS",
            "Invalid option definition: to avoid ambiguity an alias cannot be numeric [--" + invalidOption.name + " alias is -" + invalidOption.alias + "]"
          );
        }
        const multiCharacterAlias = this.some((def) => {
          invalidOption = def;
          return t.isDefined(def.alias) && def.alias.length !== 1;
        });
        if (multiCharacterAlias) {
          halt(
            "INVALID_DEFINITIONS",
            "Invalid option definition: an alias must be a single character"
          );
        }
        const hypenAlias = this.some((def) => {
          invalidOption = def;
          return def.alias === "-";
        });
        if (hypenAlias) {
          halt(
            "INVALID_DEFINITIONS",
            'Invalid option definition: an alias cannot be "-"'
          );
        }
        const duplicateName = hasDuplicates(this.map((def) => caseInsensitive ? def.name.toLowerCase() : def.name));
        if (duplicateName) {
          halt(
            "INVALID_DEFINITIONS",
            "Two or more option definitions have the same name"
          );
        }
        const duplicateAlias = hasDuplicates(this.map((def) => caseInsensitive && t.isDefined(def.alias) ? def.alias.toLowerCase() : def.alias));
        if (duplicateAlias) {
          halt(
            "INVALID_DEFINITIONS",
            "Two or more option definitions have the same alias"
          );
        }
        const duplicateDefaultOption = this.filter((def) => def.defaultOption === true).length > 1;
        if (duplicateDefaultOption) {
          halt(
            "INVALID_DEFINITIONS",
            "Only one option definition can be the defaultOption"
          );
        }
        const defaultBoolean = this.some((def) => {
          invalidOption = def;
          return def.isBoolean() && def.defaultOption;
        });
        if (defaultBoolean) {
          halt(
            "INVALID_DEFINITIONS",
            `A boolean option ["${invalidOption.name}"] can not also be the defaultOption.`
          );
        }
      }
      /**
       * Get definition by option arg (e.g. `--one` or `-o`)
       * @param {string} [arg] the argument name to get the definition for
       * @param {boolean} [caseInsensitive] whether to use case insensitive comparisons when finding the appropriate definition
       * @returns {Definition}
       */
      get(arg, caseInsensitive) {
        if (isOption(arg)) {
          if (re2.short.test(arg)) {
            const shortOptionName = getOptionName(arg);
            if (caseInsensitive) {
              const lowercaseShortOptionName = shortOptionName.toLowerCase();
              return this.find((def) => t.isDefined(def.alias) && def.alias.toLowerCase() === lowercaseShortOptionName);
            } else {
              return this.find((def) => def.alias === shortOptionName);
            }
          } else {
            const optionName = getOptionName(arg);
            if (caseInsensitive) {
              const lowercaseOptionName = optionName.toLowerCase();
              return this.find((def) => def.name.toLowerCase() === lowercaseOptionName);
            } else {
              return this.find((def) => def.name === optionName);
            }
          }
        } else {
          return this.find((def) => def.name === arg);
        }
      }
      getDefault() {
        return this.find((def) => def.defaultOption === true);
      }
      isGrouped() {
        return this.some((def) => def.group);
      }
      whereGrouped() {
        return this.filter(containsValidGroup);
      }
      whereNotGrouped() {
        return this.filter((def) => !containsValidGroup(def));
      }
      whereDefaultValueSet() {
        return this.filter((def) => t.isDefined(def.defaultValue));
      }
      static from(definitions, caseInsensitive) {
        if (definitions instanceof this)
          return definitions;
        const result = super.from(arrayify3(definitions), (def) => OptionDefinition.create(def));
        result.validate(caseInsensitive);
        return result;
      }
    };
    function halt(name, message) {
      const err = new Error(message);
      err.name = name;
      throw err;
    }
    function containsValidGroup(def) {
      return arrayify3(def.group).some((group) => group);
    }
    function hasDuplicates(array) {
      const items = {};
      for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (items[value]) {
          return true;
        } else {
          if (t.isDefined(value))
            items[value] = true;
        }
      }
    }
    var ArgvParser = class {
      /**
       * @param {OptionDefinitions} - Definitions array
       * @param {object} [options] - Options
       * @param {string[]} [options.argv] - Overrides `process.argv`
       * @param {boolean} [options.stopAtFirstUnknown] -
       * @param {boolean} [options.caseInsensitive] - Arguments will be parsed in a case insensitive manner. Defaults to false.
       */
      constructor(definitions, options) {
        this.options = Object.assign({}, options);
        this.definitions = Definitions.from(definitions, this.options.caseInsensitive);
        this.argv = ArgvArray.from(this.options.argv);
        if (this.argv.hasCombinedShortOptions()) {
          findReplace(this.argv, re2.combinedShort.test.bind(re2.combinedShort), (arg) => {
            arg = arg.slice(1);
            return arg.split("").map((letter) => ({ origArg: `-${arg}`, arg: "-" + letter }));
          });
        }
      }
      /**
       * Yields one `{ event, name, value, arg, def }` argInfo object for each arg in `process.argv` (or `options.argv`).
       */
      *[Symbol.iterator]() {
        const definitions = this.definitions;
        let def;
        let value;
        let name;
        let event;
        let singularDefaultSet = false;
        let unknownFound = false;
        let origArg;
        for (let arg of this.argv) {
          if (t.isPlainObject(arg)) {
            origArg = arg.origArg;
            arg = arg.arg;
          }
          if (unknownFound && this.options.stopAtFirstUnknown) {
            yield { event: "unknown_value", arg, name: "_unknown", value: void 0 };
            continue;
          }
          if (isOption(arg)) {
            def = definitions.get(arg, this.options.caseInsensitive);
            value = void 0;
            if (def) {
              value = def.isBoolean() ? true : null;
              event = "set";
            } else {
              event = "unknown_option";
            }
          } else if (isOptionEqualsNotation(arg)) {
            const matches = arg.match(re2.optEquals);
            def = definitions.get(matches[1], this.options.caseInsensitive);
            if (def) {
              if (def.isBoolean()) {
                yield { event: "unknown_value", arg, name: "_unknown", value, def };
                event = "set";
                value = true;
              } else {
                event = "set";
                value = matches[2];
              }
            } else {
              event = "unknown_option";
            }
          } else if (isValue(arg)) {
            if (def) {
              value = arg;
              event = "set";
            } else {
              def = this.definitions.getDefault();
              if (def && !singularDefaultSet) {
                value = arg;
                event = "set";
              } else {
                event = "unknown_value";
                def = void 0;
              }
            }
          }
          name = def ? def.name : "_unknown";
          const argInfo = { event, arg, name, value, def };
          if (origArg) {
            argInfo.subArg = arg;
            argInfo.arg = origArg;
          }
          yield argInfo;
          if (name === "_unknown")
            unknownFound = true;
          if (def && def.defaultOption && !def.isMultiple() && event === "set")
            singularDefaultSet = true;
          if (def && def.isBoolean())
            def = void 0;
          if (def && !def.multiple && t.isDefined(value) && value !== null) {
            def = void 0;
          }
          value = void 0;
          event = void 0;
          name = void 0;
          origArg = void 0;
        }
      }
    };
    var _value2 = /* @__PURE__ */ new WeakMap();
    var Option = class {
      constructor(definition) {
        this.definition = new OptionDefinition(definition);
        this.state = null;
        this.resetToDefault();
      }
      get() {
        return _value2.get(this);
      }
      set(val) {
        this._set(val, "set");
      }
      _set(val, state) {
        const def = this.definition;
        if (def.isMultiple()) {
          if (val !== null && val !== void 0) {
            const arr = this.get();
            if (this.state === "default")
              arr.length = 0;
            arr.push(def.type(val));
            this.state = state;
          }
        } else {
          if (!def.isMultiple() && this.state === "set") {
            const err = new Error(`Singular option already set [${this.definition.name}=${this.get()}]`);
            err.name = "ALREADY_SET";
            err.value = val;
            err.optionName = def.name;
            throw err;
          } else if (val === null || val === void 0) {
            _value2.set(this, val);
          } else {
            _value2.set(this, def.type(val));
            this.state = state;
          }
        }
      }
      resetToDefault() {
        if (t.isDefined(this.definition.defaultValue)) {
          if (this.definition.isMultiple()) {
            _value2.set(this, arrayify3(this.definition.defaultValue).slice());
          } else {
            _value2.set(this, this.definition.defaultValue);
          }
        } else {
          if (this.definition.isMultiple()) {
            _value2.set(this, []);
          } else {
            _value2.set(this, null);
          }
        }
        this.state = "default";
      }
      static create(definition) {
        definition = new OptionDefinition(definition);
        if (definition.isBoolean()) {
          return FlagOption.create(definition);
        } else {
          return new this(definition);
        }
      }
    };
    var FlagOption = class extends Option {
      set(val) {
        super.set(true);
      }
      static create(def) {
        return new this(def);
      }
    };
    var Output = class extends Map {
      constructor(definitions) {
        super();
        this.definitions = Definitions.from(definitions);
        this.set("_unknown", Option.create({ name: "_unknown", multiple: true }));
        for (const def of this.definitions.whereDefaultValueSet()) {
          this.set(def.name, Option.create(def));
        }
      }
      toObject(options) {
        options = options || {};
        const output = {};
        for (const item of this) {
          const name = options.camelCase && item[0] !== "_unknown" ? camelCase(item[0]) : item[0];
          const option = item[1];
          if (name === "_unknown" && !option.get().length)
            continue;
          output[name] = option.get();
        }
        if (options.skipUnknown)
          delete output._unknown;
        return output;
      }
    };
    var GroupedOutput = class extends Output {
      toObject(options) {
        const superOutputNoCamel = super.toObject({ skipUnknown: options.skipUnknown });
        const superOutput = super.toObject(options);
        const unknown = superOutput._unknown;
        delete superOutput._unknown;
        const grouped = {
          _all: superOutput
        };
        if (unknown && unknown.length)
          grouped._unknown = unknown;
        this.definitions.whereGrouped().forEach((def) => {
          const name = options.camelCase ? camelCase(def.name) : def.name;
          const outputValue = superOutputNoCamel[def.name];
          for (const groupName of arrayify3(def.group)) {
            grouped[groupName] = grouped[groupName] || {};
            if (t.isDefined(outputValue)) {
              grouped[groupName][name] = outputValue;
            }
          }
        });
        this.definitions.whereNotGrouped().forEach((def) => {
          const name = options.camelCase ? camelCase(def.name) : def.name;
          const outputValue = superOutputNoCamel[def.name];
          if (t.isDefined(outputValue)) {
            if (!grouped._none)
              grouped._none = {};
            grouped._none[name] = outputValue;
          }
        });
        return grouped;
      }
    };
    function commandLineArgs(optionDefinitions, options) {
      options = options || {};
      if (options.stopAtFirstUnknown)
        options.partial = true;
      optionDefinitions = Definitions.from(optionDefinitions, options.caseInsensitive);
      const parser = new ArgvParser(optionDefinitions, {
        argv: options.argv,
        stopAtFirstUnknown: options.stopAtFirstUnknown,
        caseInsensitive: options.caseInsensitive
      });
      const OutputClass = optionDefinitions.isGrouped() ? GroupedOutput : Output;
      const output = new OutputClass(optionDefinitions);
      for (const argInfo of parser) {
        const arg = argInfo.subArg || argInfo.arg;
        if (!options.partial) {
          if (argInfo.event === "unknown_value") {
            const err = new Error(`Unknown value: ${arg}`);
            err.name = "UNKNOWN_VALUE";
            err.value = arg;
            throw err;
          } else if (argInfo.event === "unknown_option") {
            const err = new Error(`Unknown option: ${arg}`);
            err.name = "UNKNOWN_OPTION";
            err.optionName = arg;
            throw err;
          }
        }
        let option;
        if (output.has(argInfo.name)) {
          option = output.get(argInfo.name);
        } else {
          option = Option.create(argInfo.def);
          output.set(argInfo.name, option);
        }
        if (argInfo.name === "_unknown") {
          option.set(arg);
        } else {
          option.set(argInfo.value);
        }
      }
      return output.toObject({ skipUnknown: !options.partial, camelCase: options.camelCase });
    }
    module.exports = commandLineArgs;
  }
});

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports, module) {
    "use strict";
    init_esm_shims();
    module.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/color-convert/conversions.js"(exports, module) {
    init_esm_shims();
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      let h;
      let s;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r, g, b);
      const diff = v - Math.min(r, g, b);
      const diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r, 1 - g, 1 - b);
      const c = (1 - r - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r = rgb[0] / 255;
      let g = rgb[1] / 255;
      let b = rgb[2] / 255;
      r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
      g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
      b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
      const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r;
      let g;
      let b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z2 = z ** 3;
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r = args[0];
      const g = args[1];
      const b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r, g), b);
      const min = Math.min(Math.min(r, g), b);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/color-convert/route.js"(exports, module) {
    init_esm_shims();
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/color-convert/index.js"(exports, module) {
    init_esm_shims();
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module.exports = convert;
  }
});

// node_modules/chalk-template/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/chalk-template/node_modules/ansi-styles/index.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var wrapAnsi162 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${code + offset}m`;
    };
    var wrapAnsi2562 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${38 + offset};5;${code}m`;
    };
    var wrapAnsi16m2 = (fn, offset) => (...args) => {
      const rgb = fn(...args);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    var ansi2ansi = (n) => n;
    var rgb2rgb = (r, g, b) => [r, g, b];
    var setLazyProperty = (object, property, get) => {
      Object.defineProperty(object, property, {
        get: () => {
          const value = get();
          Object.defineProperty(object, property, {
            value,
            enumerable: true,
            configurable: true
          });
          return value;
        },
        enumerable: true,
        configurable: true
      });
    };
    var colorConvert;
    var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
      if (colorConvert === void 0) {
        colorConvert = require_color_convert();
      }
      const offset = isBackground ? 10 : 0;
      const styles3 = {};
      for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
        const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
        if (sourceSpace === targetSpace) {
          styles3[name] = wrap(identity, offset);
        } else if (typeof suite === "object") {
          styles3[name] = wrap(suite[targetSpace], offset);
        }
      }
      return styles3;
    };
    function assembleStyles2() {
      const codes = /* @__PURE__ */ new Map();
      const styles3 = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles3.color.gray = styles3.color.blackBright;
      styles3.bgColor.bgGray = styles3.bgColor.bgBlackBright;
      styles3.color.grey = styles3.color.blackBright;
      styles3.bgColor.bgGrey = styles3.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles3)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles3[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles3[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles3, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles3, "codes", {
        value: codes,
        enumerable: false
      });
      styles3.color.close = "\x1B[39m";
      styles3.bgColor.close = "\x1B[49m";
      setLazyProperty(styles3.color, "ansi", () => makeDynamicStyles(wrapAnsi162, "ansi16", ansi2ansi, false));
      setLazyProperty(styles3.color, "ansi256", () => makeDynamicStyles(wrapAnsi2562, "ansi256", ansi2ansi, false));
      setLazyProperty(styles3.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m2, "rgb", rgb2rgb, false));
      setLazyProperty(styles3.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi162, "ansi16", ansi2ansi, true));
      setLazyProperty(styles3.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi2562, "ansi256", ansi2ansi, true));
      setLazyProperty(styles3.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m2, "rgb", rgb2rgb, true));
      return styles3;
    }
    Object.defineProperty(module, "exports", {
      enumerable: true,
      get: assembleStyles2
    });
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports, module) {
    "use strict";
    init_esm_shims();
    module.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var os3 = __require("os");
    var tty2 = __require("tty");
    var hasFlag2 = require_has_flag();
    var { env: env2 } = process;
    var forceColor;
    if (hasFlag2("no-color") || hasFlag2("no-colors") || hasFlag2("color=false") || hasFlag2("color=never")) {
      forceColor = 0;
    } else if (hasFlag2("color") || hasFlag2("colors") || hasFlag2("color=true") || hasFlag2("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env2) {
      if (env2.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env2.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env2.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env2.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel2(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor2(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag2("color=16m") || hasFlag2("color=full") || hasFlag2("color=truecolor")) {
        return 3;
      }
      if (hasFlag2("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env2.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os3.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env2) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env2) || env2.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env2) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env2.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env2.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env2) {
        const version = parseInt((env2.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env2.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env2.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env2.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env2) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor2(stream, stream && stream.isTTY);
      return translateLevel2(level);
    }
    module.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel2(supportsColor2(true, tty2.isatty(1))),
      stderr: translateLevel2(supportsColor2(true, tty2.isatty(2)))
    };
  }
});

// node_modules/chalk-template/node_modules/chalk/source/util.js
var require_util = __commonJS({
  "node_modules/chalk-template/node_modules/chalk/source/util.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var stringReplaceAll2 = (string, substring, replacer) => {
      let index = string.indexOf(substring);
      if (index === -1) {
        return string;
      }
      const substringLength = substring.length;
      let endIndex = 0;
      let returnValue = "";
      do {
        returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
        endIndex = index + substringLength;
        index = string.indexOf(substring, endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    var stringEncaseCRLFWithFirstIndex2 = (string, prefix, postfix, index) => {
      let endIndex = 0;
      let returnValue = "";
      do {
        const gotCR = string[index - 1] === "\r";
        returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
        endIndex = index + 1;
        index = string.indexOf("\n", endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    module.exports = {
      stringReplaceAll: stringReplaceAll2,
      stringEncaseCRLFWithFirstIndex: stringEncaseCRLFWithFirstIndex2
    };
  }
});

// node_modules/chalk-template/node_modules/chalk/source/templates.js
var require_templates = __commonJS({
  "node_modules/chalk-template/node_modules/chalk/source/templates.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var TEMPLATE_REGEX2 = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX2 = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX2 = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX2 = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES2 = /* @__PURE__ */ new Map([
      ["n", "\n"],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"]
    ]);
    function unescape2(c) {
      const u = c[0] === "u";
      const bracket = c[1] === "{";
      if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      if (u && bracket) {
        return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
      }
      return ESCAPES2.get(c) || c;
    }
    function parseArguments2(name, arguments_) {
      const results = [];
      const chunks = arguments_.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        const number = Number(chunk);
        if (!Number.isNaN(number)) {
          results.push(number);
        } else if (matches = chunk.match(STRING_REGEX2)) {
          results.push(matches[2].replace(ESCAPE_REGEX2, (m, escape, character) => escape ? unescape2(escape) : character));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    function parseStyle2(style) {
      STYLE_REGEX2.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX2.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments2(name, matches[2]);
          results.push([name].concat(args));
        } else {
          results.push([name]);
        }
      }
      return results;
    }
    function buildStyle2(chalk3, styles3) {
      const enabled = {};
      for (const layer of styles3) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk3;
      for (const [styleName, styles4] of Object.entries(enabled)) {
        if (!Array.isArray(styles4)) {
          continue;
        }
        if (!(styleName in current)) {
          throw new Error(`Unknown Chalk style: ${styleName}`);
        }
        current = styles4.length > 0 ? current[styleName](...styles4) : current[styleName];
      }
      return current;
    }
    module.exports = (chalk3, temporary) => {
      const styles3 = [];
      const chunks = [];
      let chunk = [];
      temporary.replace(TEMPLATE_REGEX2, (m, escapeCharacter, inverse, style, close, character) => {
        if (escapeCharacter) {
          chunk.push(unescape2(escapeCharacter));
        } else if (style) {
          const string = chunk.join("");
          chunk = [];
          chunks.push(styles3.length === 0 ? string : buildStyle2(chalk3, styles3)(string));
          styles3.push({ inverse, styles: parseStyle2(style) });
        } else if (close) {
          if (styles3.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle2(chalk3, styles3)(chunk.join("")));
          chunk = [];
          styles3.pop();
        } else {
          chunk.push(character);
        }
      });
      chunks.push(chunk.join(""));
      if (styles3.length > 0) {
        const errMessage = `Chalk template literal is missing ${styles3.length} closing bracket${styles3.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMessage);
      }
      return chunks.join("");
    };
  }
});

// node_modules/chalk-template/node_modules/chalk/source/index.js
var require_source = __commonJS({
  "node_modules/chalk-template/node_modules/chalk/source/index.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var ansiStyles2 = require_ansi_styles();
    var { stdout: stdoutColor2, stderr: stderrColor2 } = require_supports_color();
    var {
      stringReplaceAll: stringReplaceAll2,
      stringEncaseCRLFWithFirstIndex: stringEncaseCRLFWithFirstIndex2
    } = require_util();
    var { isArray } = Array;
    var levelMapping2 = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    var styles3 = /* @__PURE__ */ Object.create(null);
    var applyOptions2 = (object, options = {}) => {
      if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      const colorLevel = stdoutColor2 ? stdoutColor2.level : 0;
      object.level = options.level === void 0 ? colorLevel : options.level;
    };
    var ChalkClass = class {
      constructor(options) {
        return chalkFactory2(options);
      }
    };
    var chalkFactory2 = (options) => {
      const chalk4 = {};
      applyOptions2(chalk4, options);
      chalk4.template = (...arguments_) => chalkTag(chalk4.template, ...arguments_);
      Object.setPrototypeOf(chalk4, Chalk.prototype);
      Object.setPrototypeOf(chalk4.template, chalk4);
      chalk4.template.constructor = () => {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      };
      chalk4.template.Instance = ChalkClass;
      return chalk4.template;
    };
    function Chalk(options) {
      return chalkFactory2(options);
    }
    for (const [styleName, style] of Object.entries(ansiStyles2)) {
      styles3[styleName] = {
        get() {
          const builder = createBuilder2(this, createStyler2(style.open, style.close, this._styler), this._isEmpty);
          Object.defineProperty(this, styleName, { value: builder });
          return builder;
        }
      };
    }
    styles3.visible = {
      get() {
        const builder = createBuilder2(this, this._styler, true);
        Object.defineProperty(this, "visible", { value: builder });
        return builder;
      }
    };
    var usedModels2 = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
    for (const model of usedModels2) {
      styles3[model] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler2(ansiStyles2.color[levelMapping2[level]][model](...arguments_), ansiStyles2.color.close, this._styler);
            return createBuilder2(this, styler, this._isEmpty);
          };
        }
      };
    }
    for (const model of usedModels2) {
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles3[bgModel] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler2(ansiStyles2.bgColor[levelMapping2[level]][model](...arguments_), ansiStyles2.bgColor.close, this._styler);
            return createBuilder2(this, styler, this._isEmpty);
          };
        }
      };
    }
    var proto2 = Object.defineProperties(() => {
    }, {
      ...styles3,
      level: {
        enumerable: true,
        get() {
          return this._generator.level;
        },
        set(level) {
          this._generator.level = level;
        }
      }
    });
    var createStyler2 = (open, close, parent) => {
      let openAll;
      let closeAll;
      if (parent === void 0) {
        openAll = open;
        closeAll = close;
      } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
      }
      return {
        open,
        close,
        openAll,
        closeAll,
        parent
      };
    };
    var createBuilder2 = (self2, _styler, _isEmpty) => {
      const builder = (...arguments_) => {
        if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
          return applyStyle2(builder, chalkTag(builder, ...arguments_));
        }
        return applyStyle2(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
      };
      Object.setPrototypeOf(builder, proto2);
      builder._generator = self2;
      builder._styler = _styler;
      builder._isEmpty = _isEmpty;
      return builder;
    };
    var applyStyle2 = (self2, string) => {
      if (self2.level <= 0 || !string) {
        return self2._isEmpty ? "" : string;
      }
      let styler = self2._styler;
      if (styler === void 0) {
        return string;
      }
      const { openAll, closeAll } = styler;
      if (string.indexOf("\x1B") !== -1) {
        while (styler !== void 0) {
          string = stringReplaceAll2(string, styler.close, styler.open);
          styler = styler.parent;
        }
      }
      const lfIndex = string.indexOf("\n");
      if (lfIndex !== -1) {
        string = stringEncaseCRLFWithFirstIndex2(string, closeAll, openAll, lfIndex);
      }
      return openAll + string + closeAll;
    };
    var template2;
    var chalkTag = (chalk4, ...strings) => {
      const [firstString] = strings;
      if (!isArray(firstString) || !isArray(firstString.raw)) {
        return strings.join(" ");
      }
      const arguments_ = strings.slice(1);
      const parts = [firstString.raw[0]];
      for (let i = 1; i < firstString.length; i++) {
        parts.push(
          String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"),
          String(firstString.raw[i])
        );
      }
      if (template2 === void 0) {
        template2 = require_templates();
      }
      return template2(chalk4, parts.join(""));
    };
    Object.defineProperties(Chalk.prototype, styles3);
    var chalk3 = Chalk();
    chalk3.supportsColor = stdoutColor2;
    chalk3.stderr = Chalk({ level: stderrColor2 ? stderrColor2.level : 0 });
    chalk3.stderr.supportsColor = stderrColor2;
    module.exports = chalk3;
  }
});

// node_modules/lodash.assignwith/index.js
var require_lodash2 = __commonJS({
  "node_modules/lodash.assignwith/index.js"(exports, module) {
    init_esm_shims();
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeKeys = overArg(Object.keys, Object);
    var nativeMax = Math.max;
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length = result.length, skipIndexes = !!length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        object[key] = value;
      }
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function baseRest(func, start) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = array;
        return apply(func, this, otherArgs);
      };
    }
    function copyObject(source, props, object, customizer) {
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        assignValue(object, key, newValue === void 0 ? source[key] : newValue);
      }
      return object;
    }
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
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
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isIterateeCall(value, index, object) {
      if (!isObject5(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike5(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto2 = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto2;
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike5(value) {
      return value != null && isLength(value.length) && !isFunction3(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike5(value);
    }
    function isFunction3(value) {
      var tag = isObject5(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject5(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    var assignWith2 = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });
    function keys(object) {
      return isArrayLike5(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = assignWith2;
  }
});

// src/index.ts
init_esm_shims();

// src/command.ts
init_esm_shims();
var import_command_line_args = __toESM(require_dist());

// node_modules/command-line-usage/index.js
init_esm_shims();

// node_modules/command-line-usage/lib/section/option-list.js
init_esm_shims();

// node_modules/command-line-usage/lib/section.js
init_esm_shims();

// node_modules/command-line-usage/node_modules/array-back/index.js
init_esm_shims();
function isObject(input) {
  return typeof input === "object" && input !== null;
}
function isArrayLike(input) {
  return isObject(input) && typeof input.length === "number";
}
function arrayify(input) {
  if (Array.isArray(input)) {
    return input;
  } else if (input === void 0) {
    return [];
  } else if (isArrayLike(input) || input instanceof Set) {
    return Array.from(input);
  } else {
    return [input];
  }
}
var array_back_default = arrayify;

// node_modules/command-line-usage/lib/chalk-format.js
init_esm_shims();

// node_modules/chalk-template/index.js
init_esm_shims();
var import_chalk = __toESM(require_source(), 1);
var TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.))|(?:{(~)?(#?[\w:]+(?:\([^)]*\))?(?:\.#?[\w:]+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(})|((?:.|[\r\n\f])+?)/gi;
var STYLE_REGEX = /(?:^|\.)(?:(?:(\w+)(?:\(([^)]*)\))?)|(?:#(?=[:a-fA-F\d]{2,})([a-fA-F\d]{6})?(?::([a-fA-F\d]{6}))?))/g;
var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
var ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
var ESCAPES = /* @__PURE__ */ new Map([
  ["n", "\n"],
  ["r", "\r"],
  ["t", "	"],
  ["b", "\b"],
  ["f", "\f"],
  ["v", "\v"],
  ["0", "\0"],
  ["\\", "\\"],
  ["e", "\x1B"],
  ["a", "\x07"]
]);
function unescape(c) {
  const u = c[0] === "u";
  const bracket = c[1] === "{";
  if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
    return String.fromCharCode(Number.parseInt(c.slice(1), 16));
  }
  if (u && bracket) {
    return String.fromCodePoint(Number.parseInt(c.slice(2, -1), 16));
  }
  return ESCAPES.get(c) || c;
}
function parseArguments(name, arguments_) {
  const results = [];
  const chunks = arguments_.trim().split(/\s*,\s*/g);
  let matches;
  for (const chunk of chunks) {
    const number = Number(chunk);
    if (!Number.isNaN(number)) {
      results.push(number);
    } else if (matches = chunk.match(STRING_REGEX)) {
      results.push(matches[2].replace(ESCAPE_REGEX, (_, escape, character) => escape ? unescape(escape) : character));
    } else {
      throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
    }
  }
  return results;
}
function parseHex(hex) {
  const n = Number.parseInt(hex, 16);
  return [
    // eslint-disable-next-line no-bitwise
    n >> 16 & 255,
    // eslint-disable-next-line no-bitwise
    n >> 8 & 255,
    // eslint-disable-next-line no-bitwise
    n & 255
  ];
}
function parseStyle(style) {
  STYLE_REGEX.lastIndex = 0;
  const results = [];
  let matches;
  while ((matches = STYLE_REGEX.exec(style)) !== null) {
    const name = matches[1];
    if (matches[2]) {
      results.push([name, ...parseArguments(name, matches[2])]);
    } else if (matches[3] || matches[4]) {
      if (matches[3]) {
        results.push(["rgb", ...parseHex(matches[3])]);
      }
      if (matches[4]) {
        results.push(["bgRgb", ...parseHex(matches[4])]);
      }
    } else {
      results.push([name]);
    }
  }
  return results;
}
function buildStyle(styles3) {
  const enabled = {};
  for (const layer of styles3) {
    for (const style of layer.styles) {
      enabled[style[0]] = layer.inverse ? null : style.slice(1);
    }
  }
  let current = import_chalk.default;
  for (const [styleName, styles4] of Object.entries(enabled)) {
    if (!Array.isArray(styles4)) {
      continue;
    }
    if (!(styleName in current)) {
      throw new Error(`Unknown Chalk style: ${styleName}`);
    }
    current = styles4.length > 0 ? current[styleName](...styles4) : current[styleName];
  }
  return current;
}
function template(string) {
  const styles3 = [];
  const chunks = [];
  let chunk = [];
  string.replace(TEMPLATE_REGEX, (_, escapeCharacter, inverse, style, close, character) => {
    if (escapeCharacter) {
      chunk.push(unescape(escapeCharacter));
    } else if (style) {
      const string2 = chunk.join("");
      chunk = [];
      chunks.push(styles3.length === 0 ? string2 : buildStyle(styles3)(string2));
      styles3.push({ inverse, styles: parseStyle(style) });
    } else if (close) {
      if (styles3.length === 0) {
        throw new Error("Found extraneous } in Chalk template literal");
      }
      chunks.push(buildStyle(styles3)(chunk.join("")));
      chunk = [];
      styles3.pop();
    } else {
      chunk.push(character);
    }
  });
  chunks.push(chunk.join(""));
  if (styles3.length > 0) {
    throw new Error(`Chalk template literal is missing ${styles3.length} closing bracket${styles3.length === 1 ? "" : "s"} (\`}\`)`);
  }
  return chunks.join("");
}
function chalkTemplate(firstString, ...arguments_) {
  if (!Array.isArray(firstString) || !Array.isArray(firstString.raw)) {
    throw new TypeError("A tagged template literal must be provided");
  }
  const parts = [firstString.raw[0]];
  for (let index = 1; index < firstString.raw.length; index++) {
    parts.push(
      String(arguments_[index - 1]).replace(/[{}\\]/g, "\\$&"),
      String(firstString.raw[index])
    );
  }
  return template(parts.join(""));
}

// node_modules/command-line-usage/lib/chalk-format.js
function chalkFormat(str) {
  if (str) {
    str = str.replace(/`/g, "\\`");
    return chalkTemplate(Object.assign([], { raw: [str] }));
  } else {
    return "";
  }
}
var chalk_format_default = chalkFormat;

// node_modules/command-line-usage/lib/section.js
import os from "os";
var Section = class {
  constructor() {
    this.lines = [];
  }
  add(lines) {
    if (lines) {
      array_back_default(lines).forEach((line) => this.lines.push(line));
    } else {
      this.lines.push("");
    }
  }
  toString() {
    return this.lines.join(os.EOL);
  }
  header(text) {
    if (text) {
      this.add(chalk_format_default(`{bold ${text}}`));
      this.add();
    }
  }
};
var section_default = Section;

// node_modules/table-layout/index.js
init_esm_shims();

// node_modules/table-layout/lib/rows.js
init_esm_shims();

// node_modules/table-layout/node_modules/array-back/index.js
init_esm_shims();
function isObject2(input) {
  return typeof input === "object" && input !== null;
}
function isArrayLike2(input) {
  return isObject2(input) && typeof input.length === "number";
}
function arrayify2(input) {
  if (Array.isArray(input)) {
    return input;
  } else if (input === void 0) {
    return [];
  } else if (isArrayLike2(input) || input instanceof Set) {
    return Array.from(input);
  } else {
    return [input];
  }
}
var array_back_default2 = arrayify2;

// node_modules/table-layout/lib/cell.js
init_esm_shims();
var _value = /* @__PURE__ */ new WeakMap();
var _column = /* @__PURE__ */ new WeakMap();
var Cell = class {
  constructor(value, column) {
    this.value = value;
    _column.set(this, column);
  }
  set value(val) {
    _value.set(this, val);
  }
  /**
  * Must return a string or object with a `.toString()` method.
  * @returns {string}
  */
  get value() {
    let cellValue = _value.get(this);
    const column = _column.get(this);
    if (column.get) {
      cellValue = column.get(cellValue);
    }
    if (cellValue === void 0) {
      cellValue = "";
    } else {
      cellValue = String(cellValue);
    }
    return cellValue;
  }
};
var cell_default = Cell;

// node_modules/table-layout/lib/rows.js
var Rows = class {
  constructor(rows, columns) {
    this.list = [];
    this.load(rows, columns);
  }
  load(rows, columns) {
    for (const row of array_back_default2(rows)) {
      const map = new Map(columns.list.map((column) => [column, new cell_default(row[column.name], column)]));
      this.list.push(map);
    }
  }
};
var rows_default = Rows;

// node_modules/table-layout/lib/columns.js
init_esm_shims();

// node_modules/table-layout/node_modules/typical/index.js
init_esm_shims();
function isNumber(n) {
  return !isNaN(parseFloat(n));
}
function isFiniteNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function isPlainObject(input) {
  return input !== null && typeof input === "object" && input.constructor === Object;
}
function isArrayLike3(input) {
  return isObject3(input) && typeof input.length === "number";
}
function isObject3(input) {
  return typeof input === "object" && input !== null;
}
function isDefined(input) {
  return typeof input !== "undefined";
}
function isUndefined(input) {
  return !isDefined(input);
}
function isNull(input) {
  return input === null;
}
function isDefinedValue(input) {
  return isDefined(input) && !isNull(input) && !Number.isNaN(input);
}
function isClass(input) {
  if (typeof input === "function") {
    return /^class /.test(Function.prototype.toString.call(input));
  } else {
    return false;
  }
}
function isPrimitive(input) {
  if (input === null)
    return true;
  switch (typeof input) {
    case "string":
    case "number":
    case "symbol":
    case "undefined":
    case "boolean":
      return true;
    default:
      return false;
  }
}
function isPromise(input) {
  if (input) {
    const isPromise3 = isDefined(Promise) && input instanceof Promise;
    const isThenable = input.then && typeof input.then === "function";
    return !!(isPromise3 || isThenable);
  } else {
    return false;
  }
}
function isIterable(input) {
  if (input === null || !isDefined(input)) {
    return false;
  } else {
    return typeof input[Symbol.iterator] === "function" || typeof input[Symbol.asyncIterator] === "function";
  }
}
function isString(input) {
  return typeof input === "string";
}
function isFunction(input) {
  return typeof input === "function";
}
var typical_default = {
  isNumber,
  isFiniteNumber,
  isPlainObject,
  isArrayLike: isArrayLike3,
  isObject: isObject3,
  isDefined,
  isUndefined,
  isNull,
  isDefinedValue,
  isClass,
  isPrimitive,
  isPromise,
  isIterable,
  isString,
  isFunction
};

// node_modules/table-layout/lib/column.js
init_esm_shims();

// node_modules/table-layout/lib/padding.js
init_esm_shims();
var Padding = class {
  constructor(padding) {
    this.left = padding.left;
    this.right = padding.right;
  }
  length() {
    return this.left.length + this.right.length;
  }
};
var padding_default = Padding;

// node_modules/table-layout/lib/column.js
var _padding = /* @__PURE__ */ new WeakMap();
var Column = class {
  constructor(column = {}) {
    this.name = column.name;
    this.width = column.width;
    this.maxWidth = column.maxWidth;
    this.minWidth = column.minWidth;
    this.noWrap = column.noWrap;
    this.break = column.break;
    this.contentWrappable = column.contentWrappable;
    this.contentWidth = column.contentWidth;
    this.minContentWidth = column.minContentWidth;
    this.padding = column.padding || { left: " ", right: " " };
    this.generatedWidth = null;
  }
  set padding(padding) {
    _padding.set(this, new padding_default(padding));
  }
  get padding() {
    return _padding.get(this);
  }
  /**
   * The width of the content (excluding padding) after being wrapped
   */
  get wrappedContentWidth() {
    return Math.max(this.generatedWidth - this.padding.length(), 0);
  }
  isResizable() {
    return !this.isFixed();
  }
  isFixed() {
    return typical_default.isDefined(this.width) || this.noWrap || !this.contentWrappable;
  }
  generateWidth() {
    this.generatedWidth = this.width || this.contentWidth + this.padding.length();
  }
  generateMinWidth() {
    this.minWidth = this.minContentWidth + this.padding.length();
  }
};
var column_default = Column;

// node_modules/table-layout/lib/columns.js
var _maxWidth = /* @__PURE__ */ new WeakMap();
var Columns = class _Columns {
  constructor(columns) {
    this.list = [];
    for (const column of array_back_default2(columns)) {
      this.add(column);
    }
  }
  /**
   * sum of all generatedWidth fields
   * @return {number}
   */
  totalWidth() {
    return this.list.length ? this.list.map((col) => col.generatedWidth).reduce((a, b) => a + b) : 0;
  }
  totalFixedWidth() {
    return this.getFixed().map((col) => col.generatedWidth).reduce((a, b) => a + b, 0);
  }
  get(columnName) {
    return this.list.find((column) => column.name === columnName);
  }
  getResizable() {
    return this.list.filter((column) => column.isResizable());
  }
  getFixed() {
    return this.list.filter((column) => column.isFixed());
  }
  add(column) {
    const col = column instanceof column_default ? column : new column_default(column);
    this.list.push(col);
    return col;
  }
  get maxWidth() {
    _maxWidth.get(this);
  }
  set maxWidth(val) {
    _maxWidth.set(this, val);
  }
  /**
   * sets `generatedWidth` for each column
   * @chainable
   */
  autoSize() {
    const maxWidth = _maxWidth.get(this);
    for (const column of this.list) {
      column.generateWidth();
      column.generateMinWidth();
    }
    for (const column of this.list) {
      if (typical_default.isDefined(column.maxWidth) && column.generatedWidth > column.maxWidth) {
        column.generatedWidth = column.maxWidth;
      }
      if (typical_default.isDefined(column.minWidth) && column.generatedWidth < column.minWidth) {
        column.generatedWidth = column.minWidth;
      }
    }
    const width = {
      total: this.totalWidth(),
      view: maxWidth,
      diff: this.totalWidth() - maxWidth,
      totalFixed: this.totalFixedWidth(),
      totalResizable: Math.max(maxWidth - this.totalFixedWidth(), 0)
    };
    if (width.diff > 0) {
      const resizableColumns = this.getResizable();
      for (const column of resizableColumns) {
        column.generatedWidth = Math.floor(width.totalResizable / resizableColumns.length);
      }
      const grownColumns = this.list.filter((column) => column.generatedWidth > column.contentWidth);
      const shrunkenColumns = this.list.filter((column) => column.generatedWidth < column.contentWidth);
      let salvagedSpace = 0;
      for (const column of grownColumns) {
        const currentGeneratedWidth = column.generatedWidth;
        column.generateWidth();
        salvagedSpace += currentGeneratedWidth - column.generatedWidth;
      }
      for (const column of shrunkenColumns) {
        column.generatedWidth += Math.floor(salvagedSpace / shrunkenColumns.length);
      }
    }
    return this;
  }
  /**
   * Factory method returning all distinct columns from input
   * @param  {object[]} - input recordset
   * @return {module:columns}
   */
  static getColumns(rows) {
    const columns = new _Columns();
    for (const row of array_back_default2(rows)) {
      for (const columnName in row) {
        let column = columns.get(columnName);
        if (!column) {
          column = columns.add({ name: columnName, contentWidth: 0, minContentWidth: 0 });
        }
      }
    }
    return columns;
  }
};
var columns_default = Columns;

// node_modules/wordwrapjs/index.js
init_esm_shims();
var re = {
  chunk: /[^\s-]+?-\b|\S+|\s+|\r\n?|\n/g,
  ansiEscapeSequence: /\u001b.*?m/g
};
var Wordwrap = class {
  /**
   * @param {string} text - The input text to wrap.
   * @param {module:wordwrapjs~WordwrapOptions} [options]
   */
  constructor(text = "", options = {}) {
    this._lines = String(text).split(/\r\n|\n/g);
    this.options = {
      eol: "\n",
      width: 30,
      ...options
    };
  }
  lines() {
    return this._lines.map(trimLine, this).map((line) => line.match(re.chunk) || ["~~empty~~"]).map(
      (lineWords) => this.options.break ? lineWords.map(breakWord, this) : lineWords
    ).map((lineWords) => lineWords.flat()).map((lineWords) => {
      return lineWords.reduce((lines, word) => {
        const currentLine = lines[lines.length - 1];
        if (replaceAnsi(word).length + replaceAnsi(currentLine).length > this.options.width) {
          lines.push(word);
        } else {
          lines[lines.length - 1] += word;
        }
        return lines;
      }, [""]);
    }).flat().map(trimLine, this).filter((line) => line.trim()).map((line) => line.replace("~~empty~~", ""));
  }
  wrap() {
    return this.lines().join(this.options.eol);
  }
  toString() {
    return this.wrap();
  }
  /**
   * @param {string} text - the input text to wrap
   * @param {module:wordwrapjs~WordwrapOptions} [options]
   */
  static wrap(text, options) {
    const block = new this(text, options);
    return block.wrap();
  }
  /**
   * Wraps the input text, returning an array of strings (lines).
   * @param {string} text - input text
   * @param {module:wordwrapjs~WordwrapOptions} [options]
   */
  static lines(text, options) {
    const block = new this(text, options);
    return block.lines();
  }
  /**
   * Returns true if the input text would be wrapped if passed into `.wrap()`.
   * @param {string} text - input text
   * @return {boolean}
   */
  static isWrappable(text = "") {
    const matches = String(text).match(re.chunk);
    return matches ? matches.length > 1 : false;
  }
  /**
   * Splits the input text into an array of words and whitespace.
   * @param {string} text - input text
   * @returns {string[]}
   */
  static getChunks(text) {
    return text.match(re.chunk) || [];
  }
};
function trimLine(line) {
  return this.options.noTrim ? line : line.trim();
}
function replaceAnsi(string) {
  return string.replace(re.ansiEscapeSequence, "");
}
function breakWord(word) {
  if (replaceAnsi(word).length > this.options.width) {
    const letters = word.split("");
    let piece;
    const pieces = [];
    while ((piece = letters.splice(0, this.options.width)).length) {
      pieces.push(piece.join(""));
    }
    return pieces;
  } else {
    return word;
  }
}
var wordwrapjs_default = Wordwrap;

// node_modules/@75lb/deep-merge/index.js
init_esm_shims();
var import_lodash = __toESM(require_lodash2(), 1);

// node_modules/@75lb/deep-merge/node_modules/typical/index.js
init_esm_shims();
function isPlainObject2(input) {
  return input !== null && typeof input === "object" && input.constructor === Object;
}
function isDefined2(input) {
  return typeof input !== "undefined";
}

// node_modules/@75lb/deep-merge/index.js
function customiser(previousValue, newValue, key, object, source) {
  if (isPlainObject2(previousValue) && isPlainObject2(newValue)) {
    return (0, import_lodash.default)(previousValue, newValue, customiser);
  } else if (Array.isArray(previousValue) && Array.isArray(newValue) && newValue.length) {
    return newValue;
  } else if (Array.isArray(newValue) && !newValue.length) {
    return previousValue;
  } else if (!isDefined2(previousValue) && Array.isArray(newValue)) {
    return newValue;
  }
}
function deepMerge(...args) {
  return (0, import_lodash.default)(...args, customiser);
}
var deep_merge_default = deepMerge;

// node_modules/table-layout/lib/ansi.js
init_esm_shims();
var ansiEscapeSequence = /\u001b.*?m/g;
function remove(input) {
  return input.replace(ansiEscapeSequence, "");
}
function has(input) {
  return ansiEscapeSequence.test(input);
}

// node_modules/table-layout/lib/util.js
init_esm_shims();
function getLongestArray(arrays) {
  const lengths = arrays.map((array) => array.length);
  return Math.max(...lengths);
}
function padCell(cellValue, padding, width) {
  const ansiLength = cellValue.length - remove(cellValue).length;
  cellValue = cellValue || "";
  return (padding.left || "") + cellValue.padEnd(width - padding.length() + ansiLength) + (padding.right || "");
}
function getLongestWord(line) {
  const words = wordwrapjs_default.getChunks(line);
  return words.reduce((max, word) => Math.max(word.length, max), 0);
}
function removeEmptyColumns(data) {
  const distinctColumnNames = data.reduce((columnNames, row) => {
    for (const key of Object.keys(row)) {
      if (!columnNames.includes(key)) {
        columnNames.push(key);
      }
    }
    return columnNames;
  }, []);
  const emptyColumns = distinctColumnNames.filter((columnName) => {
    const hasValue = data.some((row) => {
      const value = row[columnName];
      return typical_default.isDefined(value) && typeof value !== "string" || typeof value === "string" && /\S+/.test(value);
    });
    return !hasValue;
  });
  return data.map((row) => {
    for (const emptyCol of emptyColumns) {
      delete row[emptyCol];
    }
    return row;
  });
}

// node_modules/table-layout/index.js
var Table = class {
  /**
   * @param {object[]} - input data
   * @param [options] {object} - optional settings
   * @param [options.maxWidth] {number} - maximum width of layout
   * @param [options.noWrap] {boolean} - disable wrapping on all columns
   * @param [options.noTrim] {boolean} - disable line-trimming
   * @param [options.break] {boolean} - enable word-breaking on all columns
   * @param [options.columns] {module:table-layout~columnOption} - array of column-specific options
   * @param [options.ignoreEmptyColumns] {boolean} - If set, empty columns or columns containing only whitespace are not rendered.
   * @param [options.padding] {object} - Padding values to set on each column. Per-column overrides can be set in the `options.columns` array.
   * @param [options.padding.left] {string} - Defaults to a single space.
   * @param [options.padding.right] {string} - Defaults to a single space.
   * @param [options.eol] {string} - EOL character used. Defaults to `\n`.
   * @alias module:table-layout
   */
  constructor(data, options = {}) {
    const defaults = {
      padding: {
        left: " ",
        right: " "
      },
      maxWidth: 80,
      columns: [],
      eol: "\n"
    };
    this.options = deep_merge_default(defaults, options);
    this.rows = null;
    this.columns = null;
    this.load(data);
  }
  /**
  * Set the input data to display. Must be an array of objects.
  * @param data {object[]}
  */
  load(data) {
    const options = this.options;
    if (options.ignoreEmptyColumns) {
      data = removeEmptyColumns(data);
    }
    this.columns = columns_default.getColumns(data);
    this.columns.maxWidth = options.maxWidth;
    for (const column of this.columns.list) {
      column.padding = options.padding;
      column.noWrap = options.noWrap;
      column.break = options.break;
      if (options.break) {
        column.contentWrappable = true;
      }
    }
    for (const optionColumn of options.columns) {
      const column = this.columns.get(optionColumn.name);
      if (column) {
        if (optionColumn.padding) {
          column.padding.left = optionColumn.padding.left;
          column.padding.right = optionColumn.padding.right;
        }
        column.width = optionColumn.width;
        column.maxWidth = optionColumn.maxWidth;
        column.minWidth = optionColumn.minWidth;
        column.noWrap = optionColumn.noWrap;
        column.break = optionColumn.break;
        if (optionColumn.break) {
          column.contentWrappable = true;
        }
        column.get = optionColumn.get;
      }
    }
    for (const row of array_back_default2(data)) {
      for (const columnName in row) {
        const column = this.columns.get(columnName);
        const cell = new cell_default(row[columnName], column);
        let cellValue = cell.value;
        if (has(cellValue)) {
          cellValue = remove(cellValue);
        }
        if (cellValue.length > column.contentWidth) {
          column.contentWidth = cellValue.length;
        }
        const longestWord = getLongestWord(cellValue);
        if (longestWord > column.minContentWidth) {
          column.minContentWidth = longestWord;
        }
        if (!column.contentWrappable) {
          column.contentWrappable = wordwrapjs_default.isWrappable(cellValue);
        }
      }
    }
    this.columns.autoSize();
    this.rows = new rows_default(data, this.columns);
    return this;
  }
  getWrapped() {
    this.columns.autoSize();
    return this.rows.list.map((row) => {
      const line = [];
      for (const [column, cell] of row.entries()) {
        if (column.noWrap) {
          line.push(cell.value.split(/\r\n?|\n/));
        } else {
          line.push(wordwrapjs_default.lines(cell.value, {
            width: column.wrappedContentWidth,
            break: column.break,
            noTrim: this.options.noTrim
          }));
        }
      }
      return line;
    });
  }
  getLines() {
    const wrappedLines = this.getWrapped();
    const lines = [];
    wrappedLines.forEach((wrapped) => {
      const mostLines = getLongestArray(wrapped);
      for (let i = 0; i < mostLines; i++) {
        const line = [];
        wrapped.forEach((cell) => {
          line.push(cell[i] || "");
        });
        lines.push(line);
      }
    });
    return lines;
  }
  /**
   * Identical to `.toString()` with the exception that the result will be an array of lines, rather than a single, multi-line string.
   * @returns {string[]}
   */
  renderLines() {
    const lines = this.getLines();
    return lines.map((line) => {
      return line.reduce((prev, cell, index) => {
        const column = this.columns.list[index];
        return prev + padCell(cell, column.padding, column.generatedWidth);
      }, "");
    });
  }
  /**
   * Returns the input data as a text table.
   * @returns {string}
   */
  toString() {
    return this.renderLines().join(this.options.eol) + this.options.eol;
  }
};
var table_layout_default = Table;

// node_modules/command-line-usage/node_modules/typical/index.js
init_esm_shims();
function isNumber2(n) {
  return !isNaN(parseFloat(n));
}
function isFiniteNumber2(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function isPlainObject3(input) {
  return input !== null && typeof input === "object" && input.constructor === Object;
}
function isArrayLike4(input) {
  return isObject4(input) && typeof input.length === "number";
}
function isObject4(input) {
  return typeof input === "object" && input !== null;
}
function isDefined3(input) {
  return typeof input !== "undefined";
}
function isUndefined2(input) {
  return !isDefined3(input);
}
function isNull2(input) {
  return input === null;
}
function isDefinedValue2(input) {
  return isDefined3(input) && !isNull2(input) && !Number.isNaN(input);
}
function isClass2(input) {
  if (typeof input === "function") {
    return /^class /.test(Function.prototype.toString.call(input));
  } else {
    return false;
  }
}
function isPrimitive2(input) {
  if (input === null)
    return true;
  switch (typeof input) {
    case "string":
    case "number":
    case "symbol":
    case "undefined":
    case "boolean":
      return true;
    default:
      return false;
  }
}
function isPromise2(input) {
  if (input) {
    const isPromise3 = isDefined3(Promise) && input instanceof Promise;
    const isThenable = input.then && typeof input.then === "function";
    return !!(isPromise3 || isThenable);
  } else {
    return false;
  }
}
function isIterable2(input) {
  if (input === null || !isDefined3(input)) {
    return false;
  } else {
    return typeof input[Symbol.iterator] === "function" || typeof input[Symbol.asyncIterator] === "function";
  }
}
function isString2(input) {
  return typeof input === "string";
}
function isFunction2(input) {
  return typeof input === "function";
}
var typical_default2 = {
  isNumber: isNumber2,
  isFiniteNumber: isFiniteNumber2,
  isPlainObject: isPlainObject3,
  isArrayLike: isArrayLike4,
  isObject: isObject4,
  isDefined: isDefined3,
  isUndefined: isUndefined2,
  isNull: isNull2,
  isDefinedValue: isDefinedValue2,
  isClass: isClass2,
  isPrimitive: isPrimitive2,
  isPromise: isPromise2,
  isIterable: isIterable2,
  isString: isString2,
  isFunction: isFunction2
};

// node_modules/command-line-usage/lib/section/option-list.js
var OptionList = class extends section_default {
  constructor(data) {
    super();
    let definitions = array_back_default(data.optionList);
    const hide = array_back_default(data.hide);
    const groups = array_back_default(data.group);
    if (hide.length) {
      definitions = definitions.filter((definition) => {
        return hide.indexOf(definition.name) === -1;
      });
    }
    if (data.header)
      this.header(data.header);
    if (groups.length) {
      definitions = definitions.filter((def) => {
        const noGroupMatch = groups.indexOf("_none") > -1 && !typical_default2.isDefined(def.group);
        const groupMatch = intersect(array_back_default(def.group), groups);
        return noGroupMatch || groupMatch ? def : void 0;
      });
    }
    const rows = definitions.map((def) => {
      return {
        option: getOptionNames(def, data.reverseNameOrder),
        description: chalk_format_default(def.description)
      };
    });
    const tableOptions = data.tableOptions || {
      padding: { left: "  ", right: " " },
      columns: [
        { name: "option", noWrap: true },
        { name: "description", maxWidth: 80 }
      ]
    };
    const table = new table_layout_default(rows, tableOptions);
    this.add(table.renderLines());
    this.add();
  }
};
function getOptionNames(definition, reverseNameOrder) {
  let type = definition.type ? definition.type.name.toLowerCase() : "string";
  const multiple = definition.multiple || definition.lazyMultiple ? "[]" : "";
  if (type) {
    type = type === "boolean" ? "" : `{underline ${type}${multiple}}`;
  }
  type = chalk_format_default(definition.typeLabel || type);
  let result = "";
  if (definition.alias) {
    if (definition.name) {
      if (reverseNameOrder) {
        result = chalk_format_default(`{bold --${definition.name}}, {bold -${definition.alias}} ${type}`);
      } else {
        result = chalk_format_default(`{bold -${definition.alias}}, {bold --${definition.name}} ${type}`);
      }
    } else {
      if (reverseNameOrder) {
        result = chalk_format_default(`{bold -${definition.alias}} ${type}`);
      } else {
        result = chalk_format_default(`{bold -${definition.alias}} ${type}`);
      }
    }
  } else {
    result = chalk_format_default(`{bold --${definition.name}} ${type}`);
  }
  return result;
}
function intersect(arr1, arr2) {
  return arr1.some(function(item1) {
    return arr2.some(function(item2) {
      return item1 === item2;
    });
  });
}
var option_list_default = OptionList;

// node_modules/command-line-usage/lib/section/content.js
init_esm_shims();
var ContentSection = class extends section_default {
  constructor(section) {
    super();
    this.header(section.header);
    if (section.content) {
      if (section.raw) {
        const content = array_back_default(section.content).map((line) => chalk_format_default(line));
        this.add(content);
      } else {
        this.add(getContentLines(section.content));
      }
      this.add();
    }
  }
};
function getContentLines(content) {
  const defaultPadding = { left: "  ", right: " " };
  if (content) {
    if (typical_default2.isString(content)) {
      const table = new table_layout_default({ column: chalk_format_default(content) }, {
        padding: defaultPadding,
        maxWidth: 80
      });
      return table.renderLines();
    } else if (Array.isArray(content) && content.every(typical_default2.isString)) {
      const rows = content.map((string) => ({ column: chalk_format_default(string) }));
      const table = new table_layout_default(rows, {
        padding: defaultPadding,
        maxWidth: 80
      });
      return table.renderLines();
    } else if (Array.isArray(content) && content.every(typical_default2.isPlainObject)) {
      const table = new table_layout_default(content.map((row) => ansiFormatRow(row)), {
        padding: defaultPadding
      });
      return table.renderLines();
    } else if (typical_default2.isPlainObject(content)) {
      if (!content.options || !content.data) {
        throw new Error('must have an "options" or "data" property\n' + JSON.stringify(content));
      }
      const options = Object.assign(
        { padding: defaultPadding },
        content.options
      );
      if (options.columns) {
        options.columns = options.columns.map((column) => {
          if (column.nowrap) {
            column.noWrap = column.nowrap;
            delete column.nowrap;
          }
          return column;
        });
      }
      const table = new table_layout_default(
        content.data.map((row) => ansiFormatRow(row)),
        options
      );
      return table.renderLines();
    } else {
      const message = `invalid input - 'content' must be a string, array of strings, or array of plain objects:

${JSON.stringify(content)}`;
      throw new Error(message);
    }
  }
}
function ansiFormatRow(row) {
  for (const key in row) {
    row[key] = chalk_format_default(row[key]);
  }
  return row;
}
var content_default = ContentSection;

// node_modules/command-line-usage/index.js
function commandLineUsage(sections) {
  sections = array_back_default(sections);
  if (sections.length) {
    const output = sections.map((section) => {
      if (section.optionList) {
        return new option_list_default(section);
      } else {
        return new content_default(section);
      }
    });
    return "\n" + output.join("\n");
  } else {
    return "";
  }
}
var command_line_usage_default = commandLineUsage;

// node_modules/chalk/source/index.js
init_esm_shims();

// node_modules/chalk/source/vendor/ansi-styles/index.js
init_esm_shims();
var ANSI_BACKGROUND_OFFSET = 10;
var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
var styles = {
  modifier: {
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    // Bright color
    blackBright: [90, 39],
    gray: [90, 39],
    // Alias of `blackBright`
    grey: [90, 39],
    // Alias of `blackBright`
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    // Bright color
    bgBlackBright: [100, 49],
    bgGray: [100, 49],
    // Alias of `bgBlackBright`
    bgGrey: [100, 49],
    // Alias of `bgBlackBright`
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
};
var modifierNames = Object.keys(styles.modifier);
var foregroundColorNames = Object.keys(styles.color);
var backgroundColorNames = Object.keys(styles.bgColor);
var colorNames = [...foregroundColorNames, ...backgroundColorNames];
function assembleStyles() {
  const codes = /* @__PURE__ */ new Map();
  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles, "codes", {
    value: codes,
    enumerable: false
  });
  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = wrapAnsi16();
  styles.color.ansi256 = wrapAnsi256();
  styles.color.ansi16m = wrapAnsi16m();
  styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
  Object.defineProperties(styles, {
    rgbToAnsi256: {
      value(red, green, blue) {
        if (red === green && green === blue) {
          if (red < 8) {
            return 16;
          }
          if (red > 248) {
            return 231;
          }
          return Math.round((red - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value(hex) {
        const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let [colorString] = matches;
        if (colorString.length === 3) {
          colorString = [...colorString].map((character) => character + character).join("");
        }
        const integer = Number.parseInt(colorString, 16);
        return [
          /* eslint-disable no-bitwise */
          integer >> 16 & 255,
          integer >> 8 & 255,
          integer & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value(code) {
        if (code < 8) {
          return 30 + code;
        }
        if (code < 16) {
          return 90 + (code - 8);
        }
        let red;
        let green;
        let blue;
        if (code >= 232) {
          red = ((code - 232) * 10 + 8) / 255;
          green = red;
          blue = red;
        } else {
          code -= 16;
          const remainder = code % 36;
          red = Math.floor(code / 36) / 5;
          green = Math.floor(remainder / 6) / 5;
          blue = remainder % 6 / 5;
        }
        const value = Math.max(red, green, blue) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles;
}
var ansiStyles = assembleStyles();
var ansi_styles_default = ansiStyles;

// node_modules/chalk/source/vendor/supports-color/index.js
init_esm_shims();
import process2 from "node:process";
import os2 from "node:os";
import tty from "node:tty";
function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : process2.argv) {
  const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
  const position = argv.indexOf(prefix + flag);
  const terminatorPosition = argv.indexOf("--");
  return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}
var { env } = process2;
var flagForceColor;
if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
  flagForceColor = 0;
} else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
  flagForceColor = 1;
}
function envForceColor() {
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      return 1;
    }
    if (env.FORCE_COLOR === "false") {
      return 0;
    }
    return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
  }
}
function translateLevel(level) {
  if (level === 0) {
    return false;
  }
  return {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}
function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
  const noFlagForceColor = envForceColor();
  if (noFlagForceColor !== void 0) {
    flagForceColor = noFlagForceColor;
  }
  const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
  if (forceColor === 0) {
    return 0;
  }
  if (sniffFlags) {
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
  }
  if ("TF_BUILD" in env && "AGENT_NAME" in env) {
    return 1;
  }
  if (haveStream && !streamIsTTY && forceColor === void 0) {
    return 0;
  }
  const min = forceColor || 0;
  if (env.TERM === "dumb") {
    return min;
  }
  if (process2.platform === "win32") {
    const osRelease = os2.release().split(".");
    if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }
    return 1;
  }
  if ("CI" in env) {
    if ("GITHUB_ACTIONS" in env || "GITEA_ACTIONS" in env) {
      return 3;
    }
    if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
      return 1;
    }
    return min;
  }
  if ("TEAMCITY_VERSION" in env) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
  }
  if (env.COLORTERM === "truecolor") {
    return 3;
  }
  if (env.TERM === "xterm-kitty") {
    return 3;
  }
  if ("TERM_PROGRAM" in env) {
    const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (env.TERM_PROGRAM) {
      case "iTerm.app": {
        return version >= 3 ? 3 : 2;
      }
      case "Apple_Terminal": {
        return 2;
      }
    }
  }
  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }
  if ("COLORTERM" in env) {
    return 1;
  }
  return min;
}
function createSupportsColor(stream, options = {}) {
  const level = _supportsColor(stream, {
    streamIsTTY: stream && stream.isTTY,
    ...options
  });
  return translateLevel(level);
}
var supportsColor = {
  stdout: createSupportsColor({ isTTY: tty.isatty(1) }),
  stderr: createSupportsColor({ isTTY: tty.isatty(2) })
};
var supports_color_default = supportsColor;

// node_modules/chalk/source/utilities.js
init_esm_shims();
function stringReplaceAll(string, substring, replacer) {
  let index = string.indexOf(substring);
  if (index === -1) {
    return string;
  }
  const substringLength = substring.length;
  let endIndex = 0;
  let returnValue = "";
  do {
    returnValue += string.slice(endIndex, index) + substring + replacer;
    endIndex = index + substringLength;
    index = string.indexOf(substring, endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}
function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
  let endIndex = 0;
  let returnValue = "";
  do {
    const gotCR = string[index - 1] === "\r";
    returnValue += string.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
    endIndex = index + 1;
    index = string.indexOf("\n", endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}

// node_modules/chalk/source/index.js
var { stdout: stdoutColor, stderr: stderrColor } = supports_color_default;
var GENERATOR = Symbol("GENERATOR");
var STYLER = Symbol("STYLER");
var IS_EMPTY = Symbol("IS_EMPTY");
var levelMapping = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
];
var styles2 = /* @__PURE__ */ Object.create(null);
var applyOptions = (object, options = {}) => {
  if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
    throw new Error("The `level` option should be an integer from 0 to 3");
  }
  const colorLevel = stdoutColor ? stdoutColor.level : 0;
  object.level = options.level === void 0 ? colorLevel : options.level;
};
var chalkFactory = (options) => {
  const chalk3 = (...strings) => strings.join(" ");
  applyOptions(chalk3, options);
  Object.setPrototypeOf(chalk3, createChalk.prototype);
  return chalk3;
};
function createChalk(options) {
  return chalkFactory(options);
}
Object.setPrototypeOf(createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries(ansi_styles_default)) {
  styles2[styleName] = {
    get() {
      const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
      Object.defineProperty(this, styleName, { value: builder });
      return builder;
    }
  };
}
styles2.visible = {
  get() {
    const builder = createBuilder(this, this[STYLER], true);
    Object.defineProperty(this, "visible", { value: builder });
    return builder;
  }
};
var getModelAnsi = (model, level, type, ...arguments_) => {
  if (model === "rgb") {
    if (level === "ansi16m") {
      return ansi_styles_default[type].ansi16m(...arguments_);
    }
    if (level === "ansi256") {
      return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
    }
    return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
  }
  if (model === "hex") {
    return getModelAnsi("rgb", level, type, ...ansi_styles_default.hexToRgb(...arguments_));
  }
  return ansi_styles_default[type][model](...arguments_);
};
var usedModels = ["rgb", "hex", "ansi256"];
for (const model of usedModels) {
  styles2[model] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
  const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
  styles2[bgModel] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
}
var proto = Object.defineProperties(() => {
}, {
  ...styles2,
  level: {
    enumerable: true,
    get() {
      return this[GENERATOR].level;
    },
    set(level) {
      this[GENERATOR].level = level;
    }
  }
});
var createStyler = (open, close, parent) => {
  let openAll;
  let closeAll;
  if (parent === void 0) {
    openAll = open;
    closeAll = close;
  } else {
    openAll = parent.openAll + open;
    closeAll = close + parent.closeAll;
  }
  return {
    open,
    close,
    openAll,
    closeAll,
    parent
  };
};
var createBuilder = (self2, _styler, _isEmpty) => {
  const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
  Object.setPrototypeOf(builder, proto);
  builder[GENERATOR] = self2;
  builder[STYLER] = _styler;
  builder[IS_EMPTY] = _isEmpty;
  return builder;
};
var applyStyle = (self2, string) => {
  if (self2.level <= 0 || !string) {
    return self2[IS_EMPTY] ? "" : string;
  }
  let styler = self2[STYLER];
  if (styler === void 0) {
    return string;
  }
  const { openAll, closeAll } = styler;
  if (string.includes("\x1B")) {
    while (styler !== void 0) {
      string = stringReplaceAll(string, styler.close, styler.open);
      styler = styler.parent;
    }
  }
  const lfIndex = string.indexOf("\n");
  if (lfIndex !== -1) {
    string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
  }
  return openAll + string + closeAll;
};
Object.defineProperties(createChalk.prototype, styles2);
var chalk2 = createChalk();
var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
var source_default = chalk2;

// src/command-help.ts
init_esm_shims();
var CommandParser = class _CommandParser {
  static TYPE_ALIASES = {
    bool: "boolean",
    int: "number",
    num: "number",
    str: "string"
  };
  static TYPE_CONVERT = {
    boolean: Boolean,
    number: Number,
    string: String
  };
  static parseUsage(text) {
    if (!text)
      return [];
    const lines = _CommandParser.parseText(text);
    _CommandParser.normalizeIndent(lines);
    const paramList = [];
    const params = lines.reduce((result, line) => {
      const param = _CommandParser.extractParam(line.text);
      console.log({ param, result, line });
      if (param) {
        paramList.push({ ...param });
        result[param.name] = param;
        delete param.name;
      }
      return result;
    }, {});
    return paramList;
  }
  static parseHelp(text) {
    if (!text)
      return [];
    const lines = _CommandParser.parseText(text);
    _CommandParser.normalizeIndent(lines);
    const paramList = [];
    const params = lines.reduce((result, line) => {
      const param = _CommandParser.extractParam(line.text);
      if (param) {
        paramList.push({ ...param });
        result[param.name] = param;
        delete param.name;
      }
      return result;
    }, {});
    return paramList;
  }
  static parseText(text) {
    const lines = text.split("\n").map((line) => {
      let indent = 0;
      line.replace(/^\s+/, (m) => indent += m.length);
      return {
        text: line.trim(),
        indent
      };
    });
    while (lines[0] && !lines[0].text) {
      lines.shift();
    }
    while (lines[lines.length - 1] && !lines[lines.length - 1].text) {
      lines.pop();
    }
    return lines;
  }
  static normalizeIndent(lines) {
    const minIndent = lines.reduce((min, line) => Math.min(min, line.indent), 80);
    lines.forEach((line) => line.indent -= minIndent);
    return lines;
  }
  static extractParam(text) {
    if (!text.startsWith("-")) {
      return;
    }
    const [_, name1, name2, type, desc] = text.match(
      /(-[\w.-]+),?\s*(-[\w.-]+)?=?\s*(bool|boolean|int|num|number|str|string)?\s(.*)/i
    ) || [];
    if (!name1) {
      return;
    }
    const param = _CommandParser.separateNameAndAlias(name1, name2);
    if (type) {
      param.type = type.toLowerCase();
      if (_CommandParser.TYPE_ALIASES[param.type])
        param.type = _CommandParser.TYPE_ALIASES[param.type];
      if (_CommandParser.TYPE_CONVERT[param.type])
        param.type = _CommandParser.TYPE_CONVERT[param.type];
    }
    if (desc)
      param.description = desc.trim();
    return param;
  }
  static separateNameAndAlias(rawName1, rawName2) {
    const name1 = rawName1 && rawName1.replace(/^-*/, "");
    const name2 = rawName2 && rawName2.replace(/^-*/, "");
    const dashes1 = rawName1 && rawName1.search(/[^-]/);
    const dashes2 = rawName1 && rawName1.search(/[^-]/);
    const baseObj = { name: void 0, alias: void 0, type: void 0, description: void 0 };
    if (!name2)
      return { ...baseObj, name: name1 };
    if (dashes1 > dashes2)
      return { ...baseObj, name: name1, alias: name2 };
    if (dashes2 > dashes1)
      return { ...baseObj, name: name2, alias: name1 };
    if (name1.length > name2.length)
      return { ...baseObj, name: name1, alias: name2 };
    return { ...baseObj, name: name2, alias: name1 };
  }
  static parseArgString(argStr) {
    const argList = argStr.trim().split(" ");
    const args = [];
    argList.forEach((i) => {
      const [name, type] = i.trim().slice(1, -1).split(":");
      const arg = {
        name,
        subcommand: void 0,
        required: void 0
      };
      if (name === "command")
        arg.subcommand = true;
      if (i.startsWith("<")) {
        arg.required = true;
        args.push(arg);
      } else if (i.startsWith("[")) {
        args.push(arg);
      }
    });
    return args;
  }
  static generateArgString(baseCmds, args) {
    if (Array.isArray(args) === false)
      return "";
    let argStr = `$ ${baseCmds.join(" ")}`;
    args.forEach((arg) => {
      if (arg.required === true) {
        argStr += ` <${arg.name}>`;
      } else {
        argStr += ` [${arg.name}]`;
      }
    });
    argStr += " [OPTIONS]";
    return argStr;
  }
  static generateCommandList(commands) {
    const cmdlist = [];
    Object.values(commands).forEach((el) => {
      if (el?.hidden === true)
        return;
      cmdlist.push({
        name: el.command,
        summary: el.description
      });
    });
    return cmdlist;
  }
};

// src/convert.ts
init_esm_shims();
var rainbow = (string) => {
  const ignoreChars = /[^!-~]/g;
  if (!string || string.length === 0)
    return string;
  const hueStep = 360 / string.replace(ignoreChars, "").length;
  let hue = 0;
  const characters = [];
  for (const character of string) {
    if (character.match(ignoreChars)) {
      characters.push(character);
    } else {
      const [r, g, b] = convertHslToRgb([hue, 100, 50]);
      characters.push(source_default.rgb(r, g, b)(character));
      hue = (hue + hueStep) % 360;
    }
  }
  return characters.join("");
};
var convertHslToRgb = (hsl) => {
  const h = hsl[0] / 360;
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;
  let t2;
  let t3;
  let val;
  if (s === 0) {
    val = l * 255;
    return [val, val, val];
  }
  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  }
  const t1 = 2 * l - t2;
  const rgb = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * -(i - 1);
    if (t3 < 0) {
      t3++;
    }
    if (t3 > 1) {
      t3--;
    }
    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }
    rgb[i] = Math.round(val * 255);
  }
  return rgb;
};

// src/command.ts
var Command = class {
  command;
  title = "";
  description = "";
  version;
  help;
  additionalHelp;
  hidden;
  arguments;
  options = [];
  subcommands = [];
  fun = true;
  _arguments = [];
  _options = [];
  _commandStack = [];
  _subcommands = {};
  _type = "command";
  /**
   * Command constructor
   * 
   * @param {object} cfg  Configuration object 
   * @returns {Command} Command instance (for chainability)
   */
  constructor(cfg) {
    this.init(cfg);
    return this;
  }
  /**
   * Initialization method (called by constructor)
   * 
   * @param {object} cfg  Configuration object 
   * @returns {Command}   Command instance (for chainability)
   */
  init(cfg) {
    Object.entries(cfg).forEach(([key, value]) => {
      this[key] = value;
    });
    this._commandStack.push(cfg.command);
    const usage = CommandParser.parseUsage(cfg.usage);
    const opts = [].concat(usage, cfg.options, [{
      name: "help",
      alias: "h",
      type: Boolean,
      description: "Display help",
      group: "_system"
    }]);
    opts.forEach((o) => this.option(o));
    if (cfg.arguments && cfg.subcommands)
      throw new Error("Commands with subcommands cannot have arguments");
    if (cfg.arguments)
      this.argument(cfg.arguments);
    this.getSubcommands();
    return this;
  }
  /**
   * Parse the command-line arguments
   * 
   * @param {array} argv  Argv stack
   * @returns {Command}   Command instance (for chainability)
   */
  async parse(argv) {
    if (!argv)
      argv = process.argv;
    const argMix = [].concat(this._arguments, this._options);
    const primaryParse = (0, import_command_line_args.default)(argMix, { argv, stopAtFirstUnknown: true, camelCase: true });
    const args = primaryParse._args || {};
    const all = Object.assign({}, primaryParse._all || primaryParse);
    Object.keys(primaryParse._args || []).forEach((e) => delete all[e]);
    const etc = {
      argv: primaryParse._unknown || [],
      opts: primaryParse
    };
    const fnargs = [args, all, etc];
    if (all.help === true)
      return this.generateHelp();
    if (this._arguments.length > 0) {
      if (primaryParse._args.subcommand) {
        const cmd = this._subcommands[primaryParse._args.subcommand];
        cmd.parse(etc.argv);
        return cmd;
      }
    }
    await this.action.apply(this, fnargs);
    return this;
  }
  /**
   * 
   * @param {object} arg  Argument object
   * @returns 
   */
  argument(arg) {
    arg = { ...{
      name: arg.name,
      subcommand: false,
      defaultOption: true,
      multiple: false,
      group: "_args"
    }, ...arg };
    this._arguments.push(arg);
    return this;
  }
  /**
   * Add an option
   * 
   * @param {object} opt  Option object
   * @returns {Command}   Command instance (for chainability)
   */
  option(opt) {
    if (!opt.name)
      throw new Error("Options require name");
    const match = this._options.findIndex(({ name }) => name === opt.name);
    if (match !== -1) {
      this._options[match] = { ...this._options[match], ...opt };
    } else {
      this._options.push(opt);
    }
    return this;
  }
  /**
   * Add a subcommand
   * 
   * @param {Command} command Subcommand instance
   * @returns {Command} Command instance (for chainability)
   */
  subcommand(command) {
    command._commandStack = [].concat(this._commandStack, command._commandStack);
    this._subcommands[command.command] = command;
    return this;
  }
  /**
   * Retrieve the list of commands
   * 
   * @returns {array}   Array of commands in command stack
   */
  getCommandStack() {
    return this._commandStack;
  }
  /**
   * Retrieve the list of available subcommands
   * 
   * @returns {array}   Array of subcommands
   */
  getSubcommands() {
    if (this.subcommands.length === 0)
      return [];
    this.argument({
      name: "subcommand",
      subcommand: true,
      defaultOption: true
    });
    const subcommands = [];
    this.subcommands.forEach((subcommand) => this.subcommand(subcommand));
    return subcommands;
  }
  /**
   * Method to trigger once processed
   * 
   * @param {object} args   Arguments
   * @param {object} opts   Options
   * @param {object} etc    Complete object of parsed data
   */
  async action(args, opts, etc) {
    this.generateHelp();
  }
  /**
   * Generate and output help
   */
  generateHelp() {
    const sections = [];
    let content = this.description;
    const additionalHelp = this.additionalHelp ? "\n\n" + this.additionalHelp : "";
    if (this.help) {
      content += "\n" + this.help + additionalHelp;
      sections.push({ header: this.title || `Command: ${this.command}`, content });
    } else {
      content += additionalHelp;
      sections.push({ header: this.title || `Command: ${this.command}`, content });
      const argStr = CommandParser.generateArgString(this._commandStack, this._arguments);
      sections.push({ header: "Usage", content: argStr });
      if (this._options.length > 0)
        sections.push({ header: "Options", optionList: this._options });
      if (this.subcommands.length > 0)
        sections.push({ header: "Commands", content: CommandParser.generateCommandList(this._subcommands) });
    }
    console.log(command_line_usage_default(sections));
    process.exit();
  }
  style(styles3) {
    let call = source_default;
    if (styles3) {
      if (typeof styles3 === "string")
        styles3 = styles3.split(".");
      styles3.forEach((style) => {
        if (source_default[style])
          call = call[style];
      });
    }
    return call;
  }
  log(msg, opts = {}) {
    const xopts = { styles: null, type: "log", ...opts };
    console[xopts.type](this.style(xopts.styles)(msg));
  }
  out = (msg, opts = {}) => this.log(msg, opts);
  error(err, msg, exit = true) {
    const cfg = { type: "error", styles: ["red"] };
    if (msg)
      this.log(msg, cfg);
    if (err && err.toString)
      this.log(err.toString(), { type: "error" });
    this.spacer();
    if (exit)
      process.exit();
  }
  spacer = () => console.log();
  rainbow = (text) => rainbow(text);
  heading(msg, opts = {}) {
    const xopts = { styles: "bold", ...opts };
    if ((/* @__PURE__ */ new Date()).getMonth() === 5 && this.fun === true)
      msg = this.rainbow(msg);
    msg = this.style(xopts.styles)(msg);
    this.out(`
${msg}
`);
  }
};

// src/command.types.ts
init_esm_shims();
export {
  Command
};
