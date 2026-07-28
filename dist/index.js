"use strict";var c=function(a,i){return function(){try{return i||a((i={exports:{}}).exports,i),i.exports}catch(t){throw (i=0, t)}};};var p=c(function(I,x){
var w=require('@stdlib/strided-base-reinterpret-complex64/dist'),E=require('@stdlib/complex-float32-real/dist'),M=require('@stdlib/complex-float32-imag/dist'),o=5;function O(a,i,t,s,g){var e,u,v,r,q,f,n;if(a<=0||(u=E(i),v=M(i),u===0&&v===0))return t;if(e=w(t,0),r=g*2,q=s*2,s===1){if(f=a%o,f>0)for(n=0;n<f;n++)e[r]+=u,e[r+1]+=v,r+=q;if(a<o)return t;for(n=f;n<a;n+=o)e[r]+=u,e[r+1]+=v,e[r+2]+=u,e[r+3]+=v,e[r+4]+=u,e[r+5]+=v,e[r+6]+=u,e[r+7]+=v,e[r+8]+=u,e[r+9]+=v,r+=o*2;return t}for(n=0;n<a;n++)e[r]+=u,e[r+1]+=v,r+=q;return t}x.exports=O
});var d=c(function(J,y){
var b=require('@stdlib/strided-base-stride2offset/dist'),k=p();function z(a,i,t,s){return k(a,i,t,s,b(a,s))}y.exports=z
});var R=c(function(K,l){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=d(),B=p();A(j,"ndarray",B);l.exports=j
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=R(),m,_=D(C(__dirname,"./native.js"));F(_)?m=G:m=_;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
