import{S as e,i as t,s,C as a,a as n,e as c,D as $,c as l,b as o,E as r,j as d,v as i,w as f,G as u,d as m,t as p,g,z as b,ay as h,az as x}from"./client.eb590d12.js";import{i as k,B as y}from"./index.2afee243.js";function D(e){let t;return{c(){t=p("Disabled")},l(e){t=g(e,"Disabled")},m(e,s){d(e,t,s)},d(e){e&&m(t)}}}function w(e){let t;return{c(){t=p("Disabled")},l(e){t=g(e,"Disabled")},m(e,s){d(e,t,s)},d(e){e&&m(t)}}}function j(e){let t;return{c(){t=p("Toggle disabled")},l(e){t=g(e,"Toggle disabled")},m(e,s){d(e,t,s)},d(e){e&&m(t)}}}function v(e){let t,s,p,g,v,T,z;function B(t){e[4].call(null,t)}let C={disabled:e[0],$$slots:{default:[D]},$$scope:{ctx:e}};void 0!==e[1]&&(C.checked=e[1]);const E=new k({props:C});function G(t){e[5].call(null,t)}b.push(()=>h(E,"checked",B));let R={disabled:e[0],$$slots:{default:[w]},$$scope:{ctx:e}};void 0!==e[2]&&(R.checked=e[2]);const S=new k({props:R});b.push(()=>h(S,"checked",G));const q=new y({props:{type:"primary",style:{marginTop:20},$$slots:{default:[j]},$$scope:{ctx:e}}});return q.$on("click",e[3]),{c(){a(E.$$.fragment),s=n(),p=c("br"),g=n(),a(S.$$.fragment),T=n(),a(q.$$.fragment)},l(e){$(E.$$.fragment,e),s=l(e),p=o(e,"BR",{}),g=l(e),$(S.$$.fragment,e),T=l(e),$(q.$$.fragment,e)},m(e,t){r(E,e,t),d(e,s,t),d(e,p,t),d(e,g,t),r(S,e,t),d(e,T,t),r(q,e,t),z=!0},p(e,[s]){const a={};1&s&&(a.disabled=e[0]),64&s&&(a.$$scope={dirty:s,ctx:e}),!t&&2&s&&(t=!0,a.checked=e[1],x(()=>t=!1)),E.$set(a);const n={};1&s&&(n.disabled=e[0]),64&s&&(n.$$scope={dirty:s,ctx:e}),!v&&4&s&&(v=!0,n.checked=e[2],x(()=>v=!1)),S.$set(n);const c={};64&s&&(c.$$scope={dirty:s,ctx:e}),q.$set(c)},i(e){z||(i(E.$$.fragment,e),i(S.$$.fragment,e),i(q.$$.fragment,e),z=!0)},o(e){f(E.$$.fragment,e),f(S.$$.fragment,e),f(q.$$.fragment,e),z=!1},d(e){u(E,e),e&&m(s),e&&m(p),e&&m(g),u(S,e),e&&m(T),u(q,e)}}}function T(e,t,s){let a=!0,n=!1,c=!0;return[a,n,c,function(){s(0,a=!a)},function(e){n=e,s(1,n)},function(e){c=e,s(2,c)}]}export default class extends e{constructor(e){super(),t(this,e,T,v,s,{})}}
