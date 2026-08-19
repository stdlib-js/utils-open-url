"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var p=o(function(R,v){
var u=require("child_process").spawn,n=require('@stdlib/assert-is-windows/dist'),f=require('@stdlib/assert-is-darwin/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),q=require('@stdlib/assert-is-uri/dist'),i,t;f?(t="open",i=[]):n?(t="cmd",i=["/c","start",'""']):(t="xdg-open",i=[]);function I(e){var r,a,s;if(!q(e))throw new TypeError(c('1WRBh',e));for(r=[],s=0;s<i.length;s++)r.push(i[s]);return n&&(e=e.replace(/&/g,"^&")),r.push(e),a=u(t,r,{}),a.unref(),a}v.exports=I
});var d=p();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
