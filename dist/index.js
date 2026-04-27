"use strict";var p=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=p(function(w,v){
var u=require("child_process").spawn,t=require('@stdlib/assert-is-windows/dist'),f=require('@stdlib/assert-is-darwin/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),g=require('@stdlib/assert-is-uri/dist'),a,n;f?(n="open",a=[]):t?(n="cmd",a=["/c","start",'""']):(n="xdg-open",a=[]);function q(e){var r,s,i;if(!g(e))throw new TypeError(c('1WRBh',e));for(r=new Array(a.length),i=0;i<a.length;i++)r[i]=a[i];return t&&(e=e.replace(/&/g,"^&")),r.push(e),s=u(n,r,{}),s.unref(),s}v.exports=q
});var I=o();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
