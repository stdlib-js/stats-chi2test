// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import{assign as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-flatten2d-by@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-shape@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind2sub@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsumpw@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-dscal@v0.3.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dapx@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-dmin@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@v0.2.3-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-cdf@v0.2.1-esm/index.mjs";import{isPrimitive as g}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import{isPrimitive as b}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.2.2-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@v0.2.2-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-to-array@v0.2.1-esm/index.mjs";function D(t,e,s,r,i){return this instanceof D?(this._pValue=t,this._alpha=e,this._statistic=s,this._df=r,this._expected=i,this):new D(t,e,s,r,i)}H(D.prototype,"alpha",(function(){return this._alpha})),H(D.prototype,"df",(function(){return this._df})),H(D.prototype,"expected",(function(){return this._expected})),E(D.prototype,"method","Chi-square independence test"),H(D.prototype,"pValue",(function(){return this._pValue})),H(D.prototype,"rejected",(function(){return this._pValue<=this._alpha})),H(D.prototype,"statistic",(function(){return this._statistic})),E(D.prototype,"toString",(function(t){var e,s,r;if(s=4,e=!0,arguments.length>0){if(!y(t))throw new TypeError(v("1H147",t));if(w(t,"digits")){if(!_(t.digits))throw new TypeError(v("1H13P","digits",t.digits));s=t.digits}if(w(t,"decision")){if(!g(t.decision))throw new TypeError(v("1H12o","decision",t.decision));e=t.decision}}return r=[this.method,"","","Null hypothesis: the two variables are independent","","","    pValue: "+T(this._pValue,-s),"    statistic: "+T(this._statistic,-s),"    degrees of freedom: "+this._df,""],e&&(r.push("Test Decision: "+(this.rejected?"Reject":"Fail to reject")+" null in favor of alternative at "+100*this._alpha+"% significance level"),r.push("")),r.join("\n")})),E(D.prototype,"toJSON",(function(){var t=this._expected;return{rejected:this.rejected,alpha:this._alpha,pValue:this._pValue,df:this._df,statistic:this._statistic,expected:V(t.data,t.shape,t.strides,t.offset,t.order),method:this.method}}));var S="throw";function P(e,s){if(!t(e))throw new TypeError(v("1H1DS",s.join(", "),String(e)));return e}function q(t,e,s,r){var n,o,d,a,h,l,m;for(0===r?(h=s,l=e,d=1,a=s):(h=e,l=s,d=s,a=1),o=new i(l),n=0,m=0;m<l;m++)o[m]=p.ndarray(h,t,d,n),n+=a;return o}function N(_,T){var E,H,V,N,R,k,C,F,J,O,Q,U,z;if(e(_)){if(2!==(Q=_.shape).length)throw new TypeError(v("1H1DT",Q.length));J=function(e,s){var r,n,o,p,l,m,c,j;for(n=e.data,o=e.order,p=e.strides,l=e.offset,m=d(s),r=new i(m),j=0;j<m;j++){if(c=n[a(s,p,l,o,j,S)],!t(c))throw new TypeError(v("1H1DS",h(s,p,l,o,j,S),String(c)));r[j]=c}return r}(_,Q)}else{if(!s(_))throw new TypeError(v("1H1DU",_));if(2!==(Q=n(_)).length)throw new TypeError(v("1H1DT",Q.length));J=new i(d(Q)),r(_,Q,!1,J,1,0,P)}if(N={alpha:.05,correct:!0},arguments.length>1&&(C=function(t,e){if(!y(e))return new TypeError(v("1H12V",e));if(w(e,"alpha")){if(t.alpha=e.alpha,!b(t.alpha)||x(t.alpha))return new TypeError(v("1H18P","alpha",t.alpha));if(t.alpha<0||t.alpha>1)return new RangeError(v("1H19Q","alpha",t.alpha))}return w(e,"correct")&&(t.correct=e.correct,!g(t.correct))?new TypeError(v("1H12o","correct",t.simulate)):null}(N,T),C))throw C;return U=Q[0],z=Q[1],F=p(U*z,J,1),V=function(t,e){var s,r,n,o,d,a,h;for(n=t.length,o=e.length,s=new i(n*o),r=0,a=0;a<n;a++)for(d=t[a],h=0;h<o;h++)s[r]=d*e[h],r+=1;return s}(q(J,U,z,0),q(J,U,z,1)),H=function(t,e){var s,r;for(s=new i(t.length),r=0;r<t.length;r++)s[r]=j(t[r]-e[r]);return s}(J,V=l(V.length,1/F,V,1)),2===U&&2===z&&N.correct&&(E=f(.5,c(H.length,H,1)),m(H.length,-E,H,1)),k=function(t,e){var s;for(s=0;s<t.length;s++)t[s]=t[s]*t[s]/e[s];return p(t.length,t,1)}(H,V),R=1-u(k,O=(U-1)*(z-1)),V=new o("float64",V,[U,z],[z,1],0,"row-major",{readonly:!0}),new D(R,N.alpha,k,O,V)}export{N as default};
//# sourceMappingURL=index.mjs.map
