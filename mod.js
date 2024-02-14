// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){return"number"==typeof e}function r(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function i(e,i,t){var a=!1,n=i-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=t?e+r(n):r(n)+e,a&&(e="-"+e)),e}var t=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function n(r){var n,o,s;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(o=r.arg,s=parseInt(o,10),!isFinite(s)){if(!e(o))throw new Error("invalid integer. Value: "+o);s=0}return s<0&&("u"===r.specifier||10!==n)&&(s=4294967295+s+1),s<0?(o=(-s).toString(n),r.precision&&(o=i(o,r.precision,r.padRight)),o="-"+o):(o=s.toString(n),s||r.precision?r.precision&&(o=i(o,r.precision,r.padRight)):o="",r.sign&&(o=r.sign+o)),16===n&&(r.alternate&&(o="0x"+o),o=r.specifier===a.call(r.specifier)?a.call(o):t.call(o)),8===n&&r.alternate&&"0"!==o.charAt(0)&&(o="0"+o),o}function o(e){return"string"==typeof e}var s=Math.abs,c=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,u=/e\+(\d)$/,f=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function b(r){var i,t,a=parseFloat(r.arg);if(!isFinite(a)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);a=r.arg}switch(r.specifier){case"e":case"E":t=a.toExponential(r.precision);break;case"f":case"F":t=a.toFixed(r.precision);break;case"g":case"G":s(a)<1e-4?((i=r.precision)>0&&(i-=1),t=a.toExponential(i)):t=a.toPrecision(r.precision),r.alternate||(t=l.call(t,v,"$1e"),t=l.call(t,w,"e"),t=l.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,u,"e+0$1"),t=l.call(t,f,"e-0$1"),r.alternate&&(t=l.call(t,g,"$1."),t=l.call(t,d,"$1.e")),a>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):c.call(t)}function y(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function m(e,r,i){var t=r-e.length;return t<0?e:e=i?e+y(t):y(t)+e}var k=String.fromCharCode,x=isNaN,E=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function _(e){var r,t,a,s,c,p,l,u,f;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(o(a=e[u]))p+=a;else{if(r=void 0!==a.precision,!(a=S(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+a+"`.");for(a.mapping&&(l=a.mapping),t=a.flags,f=0;f<t.length;f++)switch(s=t.charAt(f)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=t.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+s)}if("*"===a.width){if(a.width=parseInt(arguments[l],10),l+=1,x(a.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[l],10),l+=1,x(a.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[l],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=n(a);break;case"s":a.maxWidth=r?a.precision:-1;break;case"c":if(!x(a.arg)){if((c=parseInt(a.arg,10))<0||c>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=x(c)?String(a.arg):k(c)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=b(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=i(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=m(a.arg,a.width,a.padRight)),p+=a.arg||"",l+=1}return p}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,i,t,a;for(i=[],a=0,t=$.exec(e);t;)(r=e.slice(a,$.lastIndex-t[0].length)).length&&i.push(r),i.push(V(t)),a=$.lastIndex,t=$.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function I(e){return"string"==typeof e}function T(e){var r,i,t;if(!I(e))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return _.apply(null,i)}var j="function"==typeof Object.defineProperty?Object.defineProperty:null;var C=Object.defineProperty;function A(e){return"number"==typeof e}function R(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function O(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+R(a):R(a)+e,t&&(e="-"+e)),e}var Z=String.prototype.toLowerCase,P=String.prototype.toUpperCase;function W(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!A(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=O(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=O(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===P.call(e.specifier)?P.call(i):Z.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function L(e){return"string"==typeof e}var G=Math.abs,z=String.prototype.toLowerCase,U=String.prototype.toUpperCase,N=String.prototype.replace,X=/e\+(\d)$/,M=/e-(\d)$/,q=/^(\d+)$/,B=/^(\d+)e/,D=/\.0$/,H=/\.0*e/,J=/(\..*[^0])0*e/;function K(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!A(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":G(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=N.call(i,J,"$1e"),i=N.call(i,H,"e"),i=N.call(i,D,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=N.call(i,X,"e+0$1"),i=N.call(i,M,"e-0$1"),e.alternate&&(i=N.call(i,q,"$1."),i=N.call(i,B,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===U.call(e.specifier)?U.call(i):z.call(i)}function Q(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Y(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Q(t):Q(t)+e}var ee=String.fromCharCode,re=isNaN,ie=Array.isArray;function te(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ae(e){var r,i,t,a,n,o,s,c,p;if(!ie(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(L(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=te(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(a=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,re(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,re(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=W(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!re(t.arg)){if((n=parseInt(t.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=re(n)?String(t.arg):ee(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=K(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=O(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Y(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var ne=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function oe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function se(e){var r,i,t,a;for(i=[],a=0,t=ne.exec(e);t;)(r=e.slice(a,ne.lastIndex-t[0].length)).length&&i.push(r),i.push(oe(t)),a=ne.lastIndex,t=ne.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function ce(e){return"string"==typeof e}function pe(e){var r,i;if(!ce(e))throw new TypeError(pe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[se(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return ae.apply(null,r)}var le=Object.prototype,ue=le.toString,fe=le.__defineGetter__,ge=le.__defineSetter__,de=le.__lookupGetter__,he=le.__lookupSetter__;var we=function(){try{return j({},"x",{}),!0}catch(e){return!1}}()?C:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===ue.call(e))throw new TypeError(pe("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===ue.call(i))throw new TypeError(pe("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(de.call(e,r)||he.call(e,r)?(t=e.__proto__,e.__proto__=le,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&fe&&fe.call(e,r,i.get),o&&ge&&ge.call(e,r,i.set),e};function ve(e,r,i){we(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function be(e){return"string"==typeof e}var ye="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function me(){return ye&&"symbol"==typeof Symbol.toStringTag}var ke=Object.prototype.toString;var xe=Object.prototype.hasOwnProperty;var Ee="function"==typeof Symbol?Symbol:void 0,Se="function"==typeof Ee?Ee.toStringTag:"";var _e=me()?function(e){var r,i,t,a,n;if(null==e)return ke.call(e);i=e[Se],n=Se,r=null!=(a=e)&&xe.call(a,n);try{e[Se]=void 0}catch(r){return ke.call(e)}return t=ke.call(e),r?e[Se]=i:delete e[Se],t}:function(e){return ke.call(e)},$e=String.prototype.valueOf;var Ve=me();function Fe(e){return"object"==typeof e&&(e instanceof String||(Ve?function(e){try{return $e.call(e),!0}catch(e){return!1}}(e):"[object String]"===_e(e)))}function Ie(e){return be(e)||Fe(e)}ve(Ie,"isPrimitive",be),ve(Ie,"isObject",Fe);var Te=/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?[^#]*)?(?:#.*)?/,je=/[^a-z0-9:\/?#\[\]@!$&'()*+,;=.\-_~%]/i,Ce=/%[^0-9a-f]/i,Ae=/%[0-9a-f](:?[^0-9a-f]|$)/i,Re=/^\/\//,Oe=/^[a-z][a-z0-9+\-.]*$/;function Ze(e){if(!be(r=e)||je.test(r)||Ce.test(r)||Ae.test(r)||(t=(a=r.match(Te))[1],i=a[2],n=a[3],!(t&&t.length&&Oe.test(t.toLowerCase()))||!i&&Re.test(n)))throw new TypeError(T("invalid argument. Must provide a valid URI. Value: `%s`.",e));var r,i,t,a,n;return window.open(e)}export{Ze as default};
//# sourceMappingURL=mod.js.map
