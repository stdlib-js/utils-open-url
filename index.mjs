// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-darwin@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uri@esm/index.mjs";function n(e){if(e.__esModule)return e;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(t){var s=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,s.get?s:{enumerable:!0,get:function(){return e[t]}})})),r}var i,o,d=n(Object.freeze({__proto__:null,default:{}})).spawn,a=e,l=t,p=s;r?(o="open",i=[]):a?(o="cmd",i=["/c","start",'""']):(o="xdg-open",i=[]);var u=function(e){var r,t,s;if(!p(e))throw new TypeError(l("invalid input value. Must provide a valid URI. Value: `%s`.",e));for(r=new Array(i.length),s=0;s<i.length;s++)r[s]=i[s];return a&&(e=e.replace(/&/g,"^&")),r.push(e),(t=d(o,r,{})).unref(),t};export{u as default};
//# sourceMappingURL=index.mjs.map
