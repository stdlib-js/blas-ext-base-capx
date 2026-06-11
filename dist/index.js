"use strict";var c=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var p=c(function(I,x){
var w=require('@stdlib/strided-base-reinterpret-complex64/dist'),E=require('@stdlib/complex-float32-real/dist'),M=require('@stdlib/complex-float32-imag/dist'),o=5;function O(a,i,n,s,g){var e,t,u,r,q,f,v;if(a<=0||(t=E(i),u=M(i),t===0&&u===0))return n;if(e=w(n,0),r=g*2,q=s*2,s===1){if(f=a%o,f>0)for(v=0;v<f;v++)e[r]+=t,e[r+1]+=u,r+=q;if(a<o)return n;for(v=f;v<a;v+=o)e[r]+=t,e[r+1]+=u,e[r+2]+=t,e[r+3]+=u,e[r+4]+=t,e[r+5]+=u,e[r+6]+=t,e[r+7]+=u,e[r+8]+=t,e[r+9]+=u,r+=o*2;return n}for(v=0;v<a;v++)e[r]+=t,e[r+1]+=u,r+=q;return n}x.exports=O
});var d=c(function(J,y){
var b=require('@stdlib/strided-base-stride2offset/dist'),k=p();function z(a,i,n,s){return k(a,i,n,s,b(a,s))}y.exports=z
});var R=c(function(K,l){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=d(),B=p();A(j,"ndarray",B);l.exports=j
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=R(),m,_=D(C(__dirname,"./native.js"));F(_)?m=G:m=_;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
