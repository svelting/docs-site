import{S as s,i as a,s as t,C as e,D as n,E as r,v as i,w as o,G as c,t as $,g as f,j as m,d as p}from"./client.744f746f.js";import{d as l,m as d}from"./index.51d28f0a.js";function u(s){let a;return{c(){a=$("Display message")},l(s){a=f(s,"Display message")},m(s,t){m(s,a,t)},d(s){s&&p(a)}}}function g(s){let a;const t=new l({props:{type:"primary",$$slots:{default:[u]},$$scope:{ctx:s}}});return t.$on("click",s[0]),{c(){e(t.$$.fragment)},l(s){n(t.$$.fragment,s)},m(s,e){r(t,s,e),a=!0},p(s,[a]){const e={};2&a&&(e.$$scope={dirty:a,ctx:s}),t.$set(e)},i(s){a||(i(t.$$.fragment,s),a=!0)},o(s){o(t.$$.fragment,s),a=!1},d(s){c(t,s)}}}function x(s){return[()=>{d.info("This is a basic message")}]}export default class extends s{constructor(s){super(),a(this,s,x,g,t,{})}}
