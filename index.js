// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,o=r.toString,n=r.__defineGetter__,i=r.__defineSetter__,a=r.__lookupGetter__,l=r.__lookupSetter__,u=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,u){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof u||null===u||"[object Array]"===o.call(u))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+u+"`.");if((f="value"in u)&&(a.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=u.value,t.__proto__=c):t[e]=u.value),p="get"in u,y="set"in u,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&n&&n.call(t,e,u.get),y&&i&&i.call(t,e,u.set),t};function c(t,e,r){u(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"string"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,b=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",_=y()?function(t){var e,r,o,n,i;if(null==t)return s.call(t);r=t[d],i=d,e=null!=(n=t)&&b.call(n,i);try{t[d]=void 0}catch(e){return s.call(t)}return o=s.call(t),e?t[d]=r:delete t[d],o}:function(t){return s.call(t)},g=String.prototype.valueOf,v=y();function m(t){return"object"==typeof t&&(t instanceof String||(v?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object String]"===_(t)))}function h(t){return f(t)||m(t)}c(h,"isPrimitive",f),c(h,"isObject",m);var j=/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?[^#]*)?(?:#.*)?/,w=/[^a-z0-9:\/?#\[\]@!$&'()*+,;=.\-_~%]/i,S=/%[^0-9a-f]/i,O=/%[0-9a-f](:?[^0-9a-f]|$)/i,T=/^\/\//,P=/^[a-z][a-z0-9+\-.]*$/;return function(t){if(!f(e=t)||w.test(e)||S.test(e)||O.test(e)||(o=(n=e.match(j))[1],r=n[2],i=n[3],!(o&&o.length&&P.test(o.toLowerCase()))||!r&&T.test(i)))throw new TypeError(function(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}("invalid argument. Must provide a valid URI. Value: `%s`.",t));var e,r,o,n,i;return window.open(t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).openURL=e();
//# sourceMappingURL=index.js.map
