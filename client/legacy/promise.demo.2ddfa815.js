import{_ as n,a as t,i as e,s as r,b as i,S as s,J as a,K as o,L as c,x as u,A as f,B as l,N as d,o as p,p as $,t as m,j as h,l as g,d as y,aU as v}from"./client.1e9a23e7.js";import{d as x,m as R}from"./index.a6bcab88.js";function D(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function b(n){var t;return{c:function(){t=m("Display sequential messages")},l:function(n){t=h(n,"Display sequential messages")},m:function(n,e){g(n,t,e)},d:function(n){n&&y(t)}}}function j(n){var t,e=new x({props:{$$slots:{default:[b]},$$scope:{ctx:n}}});return e.$on("click",n[0]),{c:function(){a(e.$$.fragment)},l:function(n){o(e.$$.fragment,n)},m:function(n,r){c(e,n,r),t=!0},p:function(n,t){var r=u(t,1)[0],i={};2&r&&(i.$$scope={dirty:r,ctx:n}),e.$set(i)},i:function(n){t||(f(e.$$.fragment,n),t=!0)},o:function(n){l(e.$$.fragment,n),t=!1},d:function(n){d(e,n)}}}function L(n){return[function(){R.loading({content:"Action in progress..",duration:1500}).then((function(){return R.success({content:"Loading finished",duration:800})})).then((function(){return R.error({content:"Loading finished is finished",duration:1500,icon:v})}))}]}var q=function(a){n(u,s);var o,c=(o=u,function(){var n,t=p(o);if(D()){var e=p(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return $(this,n)});function u(n){var s;return t(this,u),s=c.call(this),e(i(s),n,L,j,r,{}),s}return u}();export default q;
