"use strict";var p=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var o=p(function(w,v){
var u=require("child_process").spawn,t=require('@stdlib/assert-is-windows/dist'),f=require('@stdlib/assert-is-darwin/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),g=require('@stdlib/assert-is-uri/dist'),a,s;f?(s="open",a=[]):t?(s="cmd",a=["/c","start",'""']):(s="xdg-open",a=[]);function q(e){var r,i,n;if(!g(e))throw new TypeError(c('1WRBh',e));for(r=new Array(a.length),n=0;n<a.length;n++)r[n]=a[n];return t&&(e=e.replace(/&/g,"^&")),r.push(e),i=u(s,r,{}),i.unref(),i}v.exports=q
});var I=o();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
