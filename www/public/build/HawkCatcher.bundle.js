var HawkCatcher =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/app/js/modules/hawk.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@hawk.so/javascript/dist/hawk.js":
/*!*******************************************************!*\
  !*** ./node_modules/@hawk.so/javascript/dist/hawk.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Hawk JS Catcher.js
 * 
 * @version 3.0.0
 * 
 * @licence Apache-2.0
 * @author CodeX <https://codex.so>
 * 
 * @see https://hawk.so
 * @see https://github.com/codex-team/hawk.javascript
 */
!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){var r,o,i;!function(s,a){"use strict";o=[n(2)],void 0===(i="function"==typeof(r=function(t){var e=/(^|@)\S+:\d+/,n=/^\s*at .*(\S+:\d+|\(native\))/m,r=/^(eval@)?(\[native code])?$/;return{parse:function(t){if(void 0!==t.stacktrace||void 0!==t["opera#sourceloc"])return this.parseOpera(t);if(t.stack&&t.stack.match(n))return this.parseV8OrIE(t);if(t.stack)return this.parseFFOrSafari(t);throw new Error("Cannot parse given Error object")},extractLocation:function(t){if(-1===t.indexOf(":"))return[t];var e=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t.replace(/[()]/g,""));return[e[1],e[2]||void 0,e[3]||void 0]},parseV8OrIE:function(e){return e.stack.split("\n").filter((function(t){return!!t.match(n)}),this).map((function(e){e.indexOf("(eval ")>-1&&(e=e.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(\),.*$)/g,""));var n=e.replace(/^\s+/,"").replace(/\(eval code/g,"("),r=n.match(/ (\((.+):(\d+):(\d+)\)$)/),o=(n=r?n.replace(r[0],""):n).split(/\s+/).slice(1),i=this.extractLocation(r?r[1]:o.pop()),s=o.join(" ")||void 0,a=["eval","<anonymous>"].indexOf(i[0])>-1?void 0:i[0];return new t({functionName:s,fileName:a,lineNumber:i[1],columnNumber:i[2],source:e})}),this)},parseFFOrSafari:function(e){return e.stack.split("\n").filter((function(t){return!t.match(r)}),this).map((function(e){if(e.indexOf(" > eval")>-1&&(e=e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),-1===e.indexOf("@")&&-1===e.indexOf(":"))return new t({functionName:e});var n=/((.*".+"[^@]*)?[^@]*)(?:@)/,r=e.match(n),o=r&&r[1]?r[1]:void 0,i=this.extractLocation(e.replace(n,""));return new t({functionName:o,fileName:i[0],lineNumber:i[1],columnNumber:i[2],source:e})}),this)},parseOpera:function(t){return!t.stacktrace||t.message.indexOf("\n")>-1&&t.message.split("\n").length>t.stacktrace.split("\n").length?this.parseOpera9(t):t.stack?this.parseOpera11(t):this.parseOpera10(t)},parseOpera9:function(e){for(var n=/Line (\d+).*script (?:in )?(\S+)/i,r=e.message.split("\n"),o=[],i=2,s=r.length;i<s;i+=2){var a=n.exec(r[i]);a&&o.push(new t({fileName:a[2],lineNumber:a[1],source:r[i]}))}return o},parseOpera10:function(e){for(var n=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,r=e.stacktrace.split("\n"),o=[],i=0,s=r.length;i<s;i+=2){var a=n.exec(r[i]);a&&o.push(new t({functionName:a[3]||void 0,fileName:a[2],lineNumber:a[1],source:r[i]}))}return o},parseOpera11:function(n){return n.stack.split("\n").filter((function(t){return!!t.match(e)&&!t.match(/^Error created at/)}),this).map((function(e){var n,r=e.split("@"),o=this.extractLocation(r.pop()),i=r.shift()||"",s=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^)]*\)/g,"")||void 0;i.match(/\(([^)]*)\)/)&&(n=i.replace(/^[^(]+\(([^)]*)\)$/,"$1"));var a=void 0===n||"[arguments not available]"===n?void 0:n.split(",");return new t({functionName:s,args:a,fileName:o[0],lineNumber:o[1],columnNumber:o[2],source:e})}),this)}}})?r.apply(e,o):r)||(t.exports=i)}()},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function a(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),s=new O(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var a=w(s,n);if(a){if(a===u)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=c(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,s),i}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var u={};function l(){}function h(){}function f(){}var p={};p[o]=function(){return this};var d=Object.getPrototypeOf,g=d&&d(d(E([])));g&&g!==e&&n.call(g,o)&&(p=g);var m=f.prototype=l.prototype=Object.create(p);function v(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var r;this._invoke=function(o,i){function s(){return new e((function(r,s){!function r(o,i,s,a){var u=c(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,s,a)}),(function(t){r("throw",t,s,a)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,a)}))}a(u.arg)}(o,i,r,s)}))}return r=r?r.then(s,s):s()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=c(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,u;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=m.constructor=f,f.constructor=h,f[s]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},v(y.prototype),y.prototype[i]=function(){return this},t.AsyncIterator=y,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var s=new y(a(e,n,r,o),i);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},v(m),m[s]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){var r,o,i;!function(n,s){"use strict";o=[],void 0===(i="function"==typeof(r=function(){function t(t){return t.charAt(0).toUpperCase()+t.substring(1)}function e(t){return function(){return this[t]}}var n=["isConstructor","isEval","isNative","isToplevel"],r=["columnNumber","lineNumber"],o=["fileName","functionName","source"],i=n.concat(r,o,["args"]);function s(e){if(e)for(var n=0;n<i.length;n++)void 0!==e[i[n]]&&this["set"+t(i[n])](e[i[n]])}s.prototype={getArgs:function(){return this.args},setArgs:function(t){if("[object Array]"!==Object.prototype.toString.call(t))throw new TypeError("Args must be an Array");this.args=t},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(t){if(t instanceof s)this.evalOrigin=t;else{if(!(t instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin=new s(t)}},toString:function(){var t=this.getFileName()||"",e=this.getLineNumber()||"",n=this.getColumnNumber()||"",r=this.getFunctionName()||"";return this.getIsEval()?t?"[eval] ("+t+":"+e+":"+n+")":"[eval]:"+e+":"+n:r?r+" ("+t+":"+e+":"+n+")":t+":"+e+":"+n}},s.fromString=function(t){var e=t.indexOf("("),n=t.lastIndexOf(")"),r=t.substring(0,e),o=t.substring(e+1,n).split(","),i=t.substring(n+1);if(0===i.indexOf("@"))var a=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i,""),c=a[1],u=a[2],l=a[3];return new s({functionName:r,args:o||void 0,fileName:c,lineNumber:u||void 0,columnNumber:l||void 0})};for(var a=0;a<n.length;a++)s.prototype["get"+t(n[a])]=e(n[a]),s.prototype["set"+t(n[a])]=function(t){return function(e){this[t]=Boolean(e)}}(n[a]);for(var c=0;c<r.length;c++)s.prototype["get"+t(r[c])]=e(r[c]),s.prototype["set"+t(r[c])]=function(t){return function(e){if(n=e,isNaN(parseFloat(n))||!isFinite(n))throw new TypeError(t+" must be a Number");var n;this[t]=Number(e)}}(r[c]);for(var u=0;u<o.length;u++)s.prototype["get"+t(o[u])]=e(o[u]),s.prototype["set"+t(o[u])]=function(t){return function(e){this[t]=String(e)}}(o[u]);return s})?r.apply(e,o):r)||(t.exports=i)}()},function(t,e,n){"use strict";n.r(e);n(1);function r(t,e="log",n,r="color: inherit"){if(!("console"in window)||!window.console[e])return;const o="line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";try{["time","timeEnd"].includes(e)?console[e]("( Hawk JavaScript.js 3.0.0 ) "+t):n?console[e](`%cHawk JavaScript.js 3.0.0%c ${t} %o`,o,r,n):console[e]("%cHawk JavaScript.js 3.0.0%c "+t,o,r)}catch(t){}}var o=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};class i{constructor({collectorEndpoint:t,onMessage:e=(t=>{}),onClose:n=(()=>{}),onOpen:o=(()=>{}),reconnectionAttempts:i=5,reconnectionTimeout:s=1e4}){this.url=t,this.onMessage=e,this.onClose=n,this.onOpen=o,this.reconnectionTimeout=s,this.reconnectionAttempts=i,this.eventsQueue=[],this.ws=null,this.init().then(()=>{this.sendQueue()}).catch(t=>{r("WebSocket error","error",t)})}send(t){return o(this,void 0,void 0,(function*(){if(null===this.ws)return this.eventsQueue.push(t),this.init();switch(this.ws.readyState){case WebSocket.OPEN:return this.ws.send(JSON.stringify(t));case WebSocket.CLOSED:return this.eventsQueue.push(t),this.reconnect();case WebSocket.CONNECTING:case WebSocket.CLOSING:this.eventsQueue.push(t)}}))}init(){return new Promise((t,e)=>{this.ws=new WebSocket(this.url),"function"==typeof this.onMessage&&(this.ws.onmessage=this.onMessage),this.ws.onclose=t=>{"function"==typeof this.onClose&&this.onClose(t)},this.ws.onerror=t=>{e(t)},this.ws.onopen=e=>{"function"==typeof this.onOpen&&this.onOpen(e),t()}})}reconnect(t=!1){return o(this,void 0,void 0,(function*(){if(!this.reconnectionTimer||t){this.reconnectionTimer=null;try{yield this.init(),r("Successfully reconnected.","info")}catch(t){if(this.reconnectionAttempts--,0===this.reconnectionAttempts)return;this.reconnectionTimer=setTimeout(()=>{this.reconnect(!0)},this.reconnectionTimeout)}}}))}sendQueue(){for(;this.eventsQueue.length;)this.send(this.eventsQueue.shift()).catch(t=>{r("WebSocket sending error","error",t)})}}class s{static sanitize(t){return s.isArray(t)?this.sanitizeArray(t):s.isElement(t)?s.formatElement(t):s.isClassPrototype(t)?s.formatClassPrototype(t):s.isClassInstance(t)?s.formatClassInstance(t):s.isObject(t)?s.isBigObject(t)?s.formatBigObject(t):s.sanitizeObject(t):s.isString(t)?s.trimString(t):t}static sanitizeArray(t){return t.map(t=>s.sanitize(t))}static sanitizeObject(t){for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(t[e]=s.sanitize(t[e]));return t}static isObject(t){return"object"===s.typeOf(t)}static isArray(t){return Array.isArray(t)}static isClassPrototype(t){if(!t||!t.constructor)return!1;const e=t.constructor.toString();return e.includes("[native code]")&&e.includes("Function")}static isClassInstance(t){return t&&t.constructor&&/^class \S+ {/.test(t.constructor.toString())}static isString(t){return"string"==typeof t}static typeOf(t){return Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}static isElement(t){return t instanceof Element}static isBigObject(t){return JSON.stringify(t).length>this.maxObjectLen}static getClassNameByPrototype(t){return t.name}static getClassNameByInstance(t){return s.getClassNameByPrototype(t.constructor)}static trimString(t){return t.length>s.maxStringLen?t.substr(0,s.maxStringLen)+"…":t}static formatElement(t){return t.innerHTML?t.outerHTML.replace(t.innerHTML,"…"):t.outerHTML}static formatClassPrototype(t){return`<instance of ${s.getClassNameByPrototype(t)}>`}static formatClassInstance(t){return`<class ${s.getClassNameByInstance(t)}>`}static formatBigObject(t){return"<big object>"}}s.maxStringLen=200,s.maxObjectLen=500;var a=n(0),c=n.n(a);var u=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};class l{constructor(){this.sourceFilesCache={}}parse(t){return u(this,void 0,void 0,(function*(){const e=c.a.parse(t);return Promise.all(e.map(t=>u(this,void 0,void 0,(function*(){return{file:t.fileName,line:t.lineNumber,column:t.columnNumber,sourceCode:yield this.extractSourceCode(t),function:t.functionName,arguments:t.args}}))))}))}extractSourceCode(t){return u(this,void 0,void 0,(function*(){try{if(!this.isValidUrl(t.fileName))return null;if(t.columnNumber>200)return null;const e=yield this.loadSourceFile(t.fileName);if(!e)return null;const n=e.split("\n"),r=t.lineNumber-1,o=5,i=Math.max(0,r-o),s=Math.min(n.length-1,r+o+1);return n.slice(i,s).map((t,e)=>({line:i+e+1,content:t}))}catch(t){return null}}))}isValidUrl(t){try{return!!new URL(t)}catch(t){return!1}}loadSourceFile(t){return u(this,void 0,void 0,(function*(){if(this.sourceFilesCache[t])return this.sourceFilesCache[t];try{if(this.sourceFilesCache[t]=function(t,e){const n=new AbortController,o=n.signal,i=fetch(t,{signal:o}),s=setTimeout(()=>{n.abort(),r("Request is too long, aborting...","log",t)},e);return i.then(t=>(clearTimeout(s),t))}(t,2e3).then(t=>t.text()),Object.keys(this.sourceFilesCache).length>10){const e=this.sourceFilesCache[t];this.sourceFilesCache={},this.sourceFilesCache[t]=e}return yield this.sourceFilesCache[t]}catch(t){return r("Can not load source file. Skipping..."),null}}))}}class h{constructor(t,e){this.vue=t,this.existedHandler=t.config.errorHandler,this.callback=e,this.setupHandler()}setupHandler(){this.vue.config.errorHandler=(t,e,n)=>{"function"==typeof this.existedHandler&&this.existedHandler.call(this.vue,t,e,n);const r=this.spoilAddons(e,n);this.callback(t,r),this.printError(t,n,r.component)}}spoilAddons(t,e){const n={lifecycle:e,component:null};return t.$root===t?n.component=t.$el.outerHTML.replace(/>.*/,">")+" (root)":n.component="<"+(t._isVue?t.$options.name||t.$options._componentTag:t.name)+">",t.$options&&t.$options.propsData&&(n.props=s.sanitize(t.$options.propsData)),t._data&&(n.data={},Object.entries(t._data).forEach(([t,e])=>{n.data[t]=s.sanitize(e)})),t._computedWatchers&&(n.computed={},Object.entries(t._computedWatchers).forEach(([t,e])=>{n.computed[t]=s.sanitize(e.value)})),n}printError(t,e,n){console.error(`${n} @ ${e}`,t)}}var f=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};class p{constructor(t){this.version="3.0.0",this.type="errors/javascript",this.stackParser=new l,"string"==typeof t&&(t={token:t}),this.token=t.token,this.debug=t.debug||!1,this.release=t.release,this.user=t.user||p.getGeneratedUser(),this.context=t.context||void 0,this.beforeSend=t.beforeSend,this.token?(this.transport=new i({collectorEndpoint:t.collectorEndpoint||`wss://${this.getIntegrationId()}.k1.hawk.so:443/ws`,reconnectionAttempts:t.reconnectionAttempts,reconnectionTimeout:t.reconnectionTimeout,onClose(){r("Connection lost. Connection will be restored when new errors occurred","info")}}),t.disableGlobalErrorsHandling||this.initGlobalHandlers(),t.vue&&this.connectVue(t.vue)):r("Integration Token is missed. You can get it on https://hawk.so at Project Settings.","warn")}static getGeneratedUser(){let t;const e=localStorage.getItem("hawk-user-id");return e?t=e:(t=function(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e=new Uint8Array(40);return window.crypto.getRandomValues(e),e=e.map(e=>t.charCodeAt(e%t.length)),String.fromCharCode.apply(null,e)}(),localStorage.setItem("hawk-user-id",t)),{id:t}}test(){const t=new Error("Hawk JavaScript Catcher test message.");this.send(t)}send(t,e){this.formatAndSend(t,void 0,e)}connectVue(t){new h(t,(t,e)=>{this.formatAndSend(t,{vue:e})})}initGlobalHandlers(){window.addEventListener("error",t=>this.handleEvent(t)),window.addEventListener("unhandledrejection",t=>this.handleEvent(t))}handleEvent(t){return f(this,void 0,void 0,(function*(){let e=t.error||t.reason;t instanceof ErrorEvent&&void 0===e&&(e=t.message),this.formatAndSend(e)}))}formatAndSend(t,e,n){return f(this,void 0,void 0,(function*(){try{const r=yield this.prepareErrorFormatted(t,n);e&&this.appendIntegrationAddons(r,e),this.sendErrorFormatted(r)}catch(t){r("Internal error ლ(´ڡ`ლ)","error",t)}}))}sendErrorFormatted(t){console.log("send",t),this.transport.send(t).catch(t=>{r("WebSocket sending error","error",t)})}prepareErrorFormatted(t,e){return f(this,void 0,void 0,(function*(){let n={title:this.getTitle(t),type:this.getType(t),release:this.getRelease(),context:this.getContext(e),user:this.getUser(),addons:this.getAddons(t),backtrace:yield this.getBacktrace(t)};return"function"==typeof this.beforeSend&&(n=this.beforeSend(n)),{token:this.token,catcherType:this.type,payload:n}}))}getTitle(t){return!(t instanceof Error)?t.toString():t.message}getType(t){return!(t instanceof Error)?null:t.name}getRelease(){return this.release||null}getIntegrationId(){const t=JSON.parse(atob(this.token)).integrationId;if(!t||""===t)throw new Error("Invalid integration token. There is no integration ID.");return t}getContext(t){const e={};return void 0!==this.context&&Object.assign(e,this.context),void 0!==t&&Object.assign(e,t),s.sanitize(e)}getUser(){return this.user||null}getGetParams(){const t=window.location.search.substr(1);return t?t.split("&").reduce((t,e)=>{const[n,r]=e.split("=");return t[n]=r,t},{}):null}getBacktrace(t){return f(this,void 0,void 0,(function*(){if(!(t instanceof Error))return null;try{return yield this.stackParser.parse(t)}catch(t){return r("Can not parse stack:","warn",t),null}}))}getAddons(t){const{innerWidth:e,innerHeight:n}=window,r=window.navigator.userAgent,o=window.location.href,i=this.getGetParams(),s={window:{innerWidth:e,innerHeight:n},userAgent:r,url:o};return i&&(s.get=i),this.debug&&(s.RAW_EVENT_DATA=this.getRawData(t)),s}getRawData(t){let e=null;return t instanceof Error&&(e={name:t.name,message:t.message,stack:t.stack}),e}appendIntegrationAddons(t,e){Object.assign(t.payload.addons,e)}}e.default=p}]).default}));

/***/ }),

/***/ "./public/app/js/modules/hawk.js":
/*!***************************************!*\
  !*** ./public/app/js/modules/hawk.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! @hawk.so/javascript */ "./node_modules/@hawk.so/javascript/dist/hawk.js");

/***/ })

/******/ });