import{S as t,i as o,s as n,x as i,e,t as a,a as c,C as s,b as r,f,g as p,d as l,c as d,D as m,j as h,k as u,E as $,a4 as g,a5 as y,v as b,w as v,G as E,h as C,q as w,n as N}from"./client.eb590d12.js";import{E as T,D as B,P as O}from"./DocsTable.4529a657.js";import"./index.2afee243.js";import x from"./basic.demo.53983e50.js";import k from"./duration.demo.27533fa9.js";import D from"./status.demo.ec5e76eb.js";import S from"./button.demo.cf919d34.js";import I from"./icon.demo.892a969a.js";import R from"./style.demo.5dbe70f8.js";import L from"./placement.demo.3f49ce6f.js";import A from"./update.demo.191afef6.js";function P(t){let o,n;return{c(){o=e("p"),n=a("A basic example of a notification."),this.h()},l(t){o=r(t,"P",{slot:!0});var i=f(o);n=p(i,"A basic example of a notification."),i.forEach(l),this.h()},h(){C(o,"slot","description")},m(t,i){h(t,o,i),u(o,n)},d(t){t&&l(o)}}}function j(t){let o,n,i,c,s;return{c(){o=e("p"),n=a("The "),i=e("code"),c=a("duration"),s=a(" can be used to specify how long the notification stays open. After the duration time elapses, the notification closes automatically. If not specified, the default duration is 4.5 seconds. If the duration is set to 0, the notification box will never close automatically."),this.h()},l(t){o=r(t,"P",{slot:!0});var e=f(o);n=p(e,"The "),i=r(e,"CODE",{});var a=f(i);c=p(a,"duration"),a.forEach(l),s=p(e," can be used to specify how long the notification stays open. After the duration time elapses, the notification closes automatically. If not specified, the default duration is 4.5 seconds. If the duration is set to 0, the notification box will never close automatically."),e.forEach(l),this.h()},h(){C(o,"slot","description")},m(t,e){h(t,o,e),u(o,n),u(o,i),u(i,c),u(o,s)},d(t){t&&l(o)}}}function U(t){let o,n;return{c(){o=e("p"),n=a("A status icon can be included on the left side of the notification."),this.h()},l(t){o=r(t,"P",{slot:!0});var i=f(o);n=p(i,"A status icon can be included on the left side of the notification."),i.forEach(l),this.h()},h(){C(o,"slot","description")},m(t,i){h(t,o,i),u(o,n)},d(t){t&&l(o)}}}function z(t){let o,n,i,c,s;return{c(){o=e("p"),n=a("A custom icon can also be added. Use the "),i=e("code"),c=a("iconColor"),s=a(" option to set it's color. Using status methods (notification.success) will color the icon according to the status color."),this.h()},l(t){o=r(t,"P",{slot:!0});var e=f(o);n=p(e,"A custom icon can also be added. Use the "),i=r(e,"CODE",{});var a=f(i);c=p(a,"iconColor"),a.forEach(l),s=p(e," option to set it's color. Using status methods (notification.success) will color the icon according to the status color."),e.forEach(l),this.h()},h(){C(o,"slot","description")},m(t,e){h(t,o,e),u(o,n),u(o,i),u(i,c),u(o,s)},d(t){t&&l(o)}}}function W(t){let o,n,i,c,s;return{c(){o=e("p"),n=a("A custom button can be added to the notification. It should include an object with the buttons props and a "),i=e("code"),c=a("onClick"),s=a(" function."),this.h()},l(t){o=r(t,"P",{slot:!0});var e=f(o);n=p(e,"A custom button can be added to the notification. It should include an object with the buttons props and a "),i=r(e,"CODE",{});var a=f(i);c=p(a,"onClick"),a.forEach(l),s=p(e," function."),e.forEach(l),this.h()},h(){C(o,"slot","description")},m(t,e){h(t,o,e),u(o,n),u(o,i),u(i,c),u(o,s)},d(t){t&&l(o)}}}function q(t){let o,n,i,c,s,d,m,$;return{c(){o=e("p"),n=a("The Notification has options for "),i=e("code"),c=a("style"),s=a(" and "),d=e("code"),m=a("className"),$=a(" so it's style can be customized."),this.h()},l(t){o=r(t,"P",{slot:!0});var e=f(o);n=p(e,"The Notification has options for "),i=r(e,"CODE",{});var a=f(i);c=p(a,"style"),a.forEach(l),s=p(e," and "),d=r(e,"CODE",{});var h=f(d);m=p(h,"className"),h.forEach(l),$=p(e," so it's style can be customized."),e.forEach(l),this.h()},h(){C(o,"slot","description")},m(t,e){h(t,o,e),u(o,n),u(o,i),u(i,c),u(o,s),u(o,d),u(d,m),u(o,$)},d(t){t&&l(o)}}}function G(t){let o,n,i,c,s,d,m,$,g,y,b,v,E,w;return{c(){o=e("p"),n=a("A notification box can appear from the "),i=e("code"),c=a("topRight"),s=a(", "),d=e("code"),m=a("bottomRight"),$=a(", "),g=e("code"),y=a("bottomLeft"),b=a(" or "),v=e("code"),E=a("topLeft"),w=a(" of the viewport."),this.h()},l(t){o=r(t,"P",{slot:!0});var e=f(o);n=p(e,"A notification box can appear from the "),i=r(e,"CODE",{});var a=f(i);c=p(a,"topRight"),a.forEach(l),s=p(e,", "),d=r(e,"CODE",{});var h=f(d);m=p(h,"bottomRight"),h.forEach(l),$=p(e,", "),g=r(e,"CODE",{});var u=f(g);y=p(u,"bottomLeft"),u.forEach(l),b=p(e," or "),v=r(e,"CODE",{});var C=f(v);E=p(C,"topLeft"),C.forEach(l),w=p(e," of the viewport."),e.forEach(l),this.h()},h(){C(o,"slot","description")},m(t,e){h(t,o,e),u(o,n),u(o,i),u(i,c),u(o,s),u(o,d),u(d,m),u(o,$),u(o,g),u(g,y),u(o,b),u(o,v),u(v,E),u(o,w)},d(t){t&&l(o)}}}function H(t){let o,n,i,c,s;return{c(){o=e("p"),n=a("A notification can be updated by using a unique "),i=e("code"),c=a("key"),s=a("."),this.h()},l(t){o=r(t,"P",{slot:!0});var e=f(o);n=p(e,"A notification can be updated by using a unique "),i=r(e,"CODE",{});var a=f(i);c=p(a,"key"),a.forEach(l),s=p(e,"."),e.forEach(l),this.h()},h(){C(o,"slot","description")},m(t,e){h(t,o,e),u(o,n),u(o,i),u(i,c),u(o,s)},d(t){t&&l(o)}}}function F(t){let o,n,C,w,N,F,_,V,J,K,M,Q,X,Y,Z,tt,ot,nt,it,et,at,ct,st,rt,ft,pt,lt,dt,mt,ht,ut,$t,gt,yt,bt,vt,Et,Ct,wt,Nt,Tt,Bt,Ot,xt,kt,Dt,St,It,Rt,Lt,At,Pt,jt,Ut,zt,Wt,qt,Gt,Ht,Ft,_t,Vt,Jt,Kt,Mt,Qt,Xt,Yt;const Zt=new T({props:{id:"notification-demo-basic",title:"Basic",demoComponent:x,demoCode:'<Button type="primary" on:click="{openNotification}">\n  Open the notification box\n</Button>\n\n<script>\n  import { notification, Button, message } from "svant";\n\n  const openNotification = () => {\n    notification.open({\n      message: "Notification Title",\n      description:\n        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",\n      onClick: () => {\n        message.info("Notification Clicked!");\n      }\n    });\n  };\n<\/script>\n',$$slots:{description:[P]},$$scope:{ctx:t}}}),to=new T({props:{id:"notification-demo-duration",title:"Custom Duration",demoComponent:k,demoCode:'<Button type="primary" on:click="{openTimed}">Will close in 1.5s</Button>\n<Button type="primary" on:click="{openInfinite}">Never closing message</Button>\n\n<script>\n  import { Button, notification } from "svant";\n\n  const openTimed = () => {\n    notification.open({\n      message: "Notification Title",\n      description: "This is a notification that will disappear in 1.5 seconds",\n      duration: 1500\n    });\n  };\n\n  const openInfinite = () => {\n    notification.open({\n      message: "Notification Title",\n      description: "This is a notification that will never close on it\'s own",\n      duration: 0\n    });\n  };\n<\/script>\n',$$slots:{description:[j]},$$scope:{ctx:t}}}),oo=new T({props:{id:"notification-demo-status-icon",title:"Status Icon",demoComponent:D,demoCode:'<Button on:click="{onSuccess}">Success</Button>\n<Button on:click="{onInfo}">Info</Button>\n<Button on:click="{onWarning}">Warning</Button>\n<Button on:click="{onError}">Error</Button>\n\n<script>\n  import { Button, notification } from "svant";\n\n  const defaultOptions = {\n    message: "Notification Title",\n    description:\n      "This is the content of the notification. This is the content of the notification. This is the content of the notification."\n  };\n\n  function onSuccess() {\n    notification.success(defaultOptions);\n  }\n\n  function onInfo() {\n    notification.info(defaultOptions);\n  }\n\n  function onWarning() {\n    notification.warning(defaultOptions);\n  }\n\n  function onError() {\n    notification.error(defaultOptions);\n  }\n<\/script>\n',$$slots:{description:[U]},$$scope:{ctx:t}}}),no=new T({props:{id:"notification-demo-custom-icon",title:"Custom Icon",demoComponent:I,demoCode:'<Button type="primary" on:click="{openNotification}">\n  Open the notification box\n</Button>\n\n<script>\n  import { notification, Button, message } from "svant";\n  import { SmileOutlined } from "svant/icons";\n\n  const openNotification = () => {\n    notification.open({\n      message: "Notification Title",\n      description:\n        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",\n      icon: SmileOutlined,\n      iconColor: "#108ee9"\n    });\n  };\n<\/script>\n',$$slots:{description:[z]},$$scope:{ctx:t}}}),io=new T({props:{id:"notification-demo-button",title:"Custom Button",demoComponent:S,demoCode:'<Button type="primary" on:click="{openNotification}">\n  Open the notification box\n</Button>\n\n<script>\n  import { notification, Button, message } from "svant";\n\n  const openNotification = () => {\n    notification.open({\n      message: "Notification Title",\n      description:\n        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",\n      key: "custom_key",\n      onClose: () => {\n        message.info("Notification closed");\n      },\n      button: {\n        type: "primary",\n        size: "small",\n        text: "Confirm",\n        onClick: () => {\n          message.info("Close button clicked!");\n          notification.close("custom_key");\n        }\n      }\n    });\n  };\n<\/script>\n',$$slots:{description:[W]},$$scope:{ctx:t}}}),eo=new T({props:{id:"notification-demo-custom-style",title:"Customized Styling",demoComponent:R,demoCode:'<Button type="primary" on:click="{openNotification}">\n  Open styled notification box\n</Button>\n\n<script>\n  import { notification, Button, message } from "svant";\n\n  const openNotification = () => {\n    notification.open({\n      message: "Notification Title",\n      description:\n        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",\n      style: {\n        marginLeft: 335 - 600\n      },\n      className: "test-notification-demo-class"\n    });\n  };\n<\/script>\n\n<style>\n  :global("test-notification-demo-class") {\n    width: 600px;\n  }\n</style>\n',$$slots:{description:[q]},$$scope:{ctx:t}}}),ao=new T({props:{id:"notification-demo-placement",title:"Placement",demoComponent:L,demoCode:'<Button type="primary" on:click="{() => openNotification(\'topLeft\')}">\n  <RadiusUpleftOutlined />\n  topLeft\n</Button>\n<Button type="primary" on:click="{() => openNotification(\'topRight\')}">\n  <RadiusUprightOutlined />\n  topRight\n</Button>\n<br />\n<Button type="primary" on:click="{() => openNotification(\'bottomLeft\')}">\n  <RadiusBottomleftOutlined />\n  bottomLeft\n</Button>\n<Button type="primary" on:click="{() => openNotification(\'bottomRight\')}">\n  <RadiusBottomrightOutlined />\n  bottomRight\n</Button>\n\n<script>\n  import { notification, Button } from "svant";\n  import {\n    RadiusUpleftOutlined,\n    RadiusUprightOutlined,\n    RadiusBottomleftOutlined,\n    RadiusBottomrightOutlined\n  } from "svant/icons";\n\n  const openNotification = placement => {\n    notification.info({\n      message: `Notification ${placement}`,\n      description:\n        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",\n      placement\n    });\n  };\n<\/script>\n',$$slots:{description:[G]},$$scope:{ctx:t}}}),co=new T({props:{id:"notification-demo-update",title:"Updating a Notification",demoComponent:A,demoCode:'<Button type="primary" on:click="{openNotification}">\n  Open the notification box\n</Button>\n\n<script>\n  import { notification, Button } from "svant";\n\n  const key = "updatable";\n\n  const openNotification = () => {\n    notification.error({\n      key,\n      message: "Original Notification Title",\n      description: "description."\n    });\n    setTimeout(() => {\n      notification.success({\n        key,\n        message: "New Title",\n        description: "New description.",\n        duration: 3000\n      });\n    }, 1000);\n  };\n<\/script>\n',$$slots:{description:[H]},$$scope:{ctx:t}}}),so=[t[1]];let ro={};for(let t=0;t<so.length;t+=1)ro=i(ro,so[t]);const fo=new B({props:ro}),po=new O({props:{language:"javascript",source:t[0]}}),lo=[t[2]];let mo={};for(let t=0;t<lo.length;t+=1)mo=i(mo,lo[t]);const ho=new B({props:mo});return{c(){o=e("h1"),n=a("Notification"),C=c(),w=e("p"),N=a("Display a notification message globally."),F=c(),_=e("h2"),V=a("Examples"),J=c(),s(Zt.$$.fragment),K=c(),s(to.$$.fragment),M=c(),s(oo.$$.fragment),Q=c(),s(no.$$.fragment),X=c(),s(io.$$.fragment),Y=c(),s(eo.$$.fragment),Z=c(),s(ao.$$.fragment),tt=c(),s(co.$$.fragment),ot=c(),nt=e("h2"),it=a("API"),et=c(),at=e("p"),ct=a("This component provides the following methods:"),st=c(),rt=e("ul"),ft=e("li"),pt=e("code"),lt=a("notification.open(options)"),dt=c(),mt=e("li"),ht=e("code"),ut=a("notification.success(options)"),$t=c(),gt=e("li"),yt=e("code"),bt=a("notification.error(options)"),vt=c(),Et=e("li"),Ct=e("code"),wt=a("notification.info(options)"),Nt=c(),Tt=e("li"),Bt=e("code"),Ot=a("notification.warning(options)"),xt=c(),kt=e("li"),Dt=e("code"),St=a("notification.warn(options) // alias of warning"),It=c(),Rt=e("li"),Lt=e("code"),At=a("notification.close(key: String)"),Pt=c(),jt=e("li"),Ut=e("code"),zt=a("notification.destroyAll()"),Wt=c(),s(fo.$$.fragment),qt=c(),Gt=e("h3"),Ht=a("Global Configuration"),Ft=c(),_t=e("p"),Vt=a("A "),Jt=e("code"),Kt=a("notification.config"),Mt=a(" method is also provided. These can be overridden on an individual basis."),Qt=c(),s(po.$$.fragment),Xt=c(),s(ho.$$.fragment)},l(t){o=r(t,"H1",{});var i=f(o);n=p(i,"Notification"),i.forEach(l),C=d(t),w=r(t,"P",{});var e=f(w);N=p(e,"Display a notification message globally."),e.forEach(l),F=d(t),_=r(t,"H2",{});var a=f(_);V=p(a,"Examples"),a.forEach(l),J=d(t),m(Zt.$$.fragment,t),K=d(t),m(to.$$.fragment,t),M=d(t),m(oo.$$.fragment,t),Q=d(t),m(no.$$.fragment,t),X=d(t),m(io.$$.fragment,t),Y=d(t),m(eo.$$.fragment,t),Z=d(t),m(ao.$$.fragment,t),tt=d(t),m(co.$$.fragment,t),ot=d(t),nt=r(t,"H2",{});var c=f(nt);it=p(c,"API"),c.forEach(l),et=d(t),at=r(t,"P",{});var s=f(at);ct=p(s,"This component provides the following methods:"),s.forEach(l),st=d(t),rt=r(t,"UL",{});var h=f(rt);ft=r(h,"LI",{});var u=f(ft);pt=r(u,"CODE",{});var $=f(pt);lt=p($,"notification.open(options)"),$.forEach(l),u.forEach(l),dt=d(h),mt=r(h,"LI",{});var g=f(mt);ht=r(g,"CODE",{});var y=f(ht);ut=p(y,"notification.success(options)"),y.forEach(l),g.forEach(l),$t=d(h),gt=r(h,"LI",{});var b=f(gt);yt=r(b,"CODE",{});var v=f(yt);bt=p(v,"notification.error(options)"),v.forEach(l),b.forEach(l),vt=d(h),Et=r(h,"LI",{});var E=f(Et);Ct=r(E,"CODE",{});var T=f(Ct);wt=p(T,"notification.info(options)"),T.forEach(l),E.forEach(l),Nt=d(h),Tt=r(h,"LI",{});var B=f(Tt);Bt=r(B,"CODE",{});var O=f(Bt);Ot=p(O,"notification.warning(options)"),O.forEach(l),B.forEach(l),xt=d(h),kt=r(h,"LI",{});var x=f(kt);Dt=r(x,"CODE",{});var k=f(Dt);St=p(k,"notification.warn(options) // alias of warning"),k.forEach(l),x.forEach(l),It=d(h),Rt=r(h,"LI",{});var D=f(Rt);Lt=r(D,"CODE",{});var S=f(Lt);At=p(S,"notification.close(key: String)"),S.forEach(l),D.forEach(l),Pt=d(h),jt=r(h,"LI",{});var I=f(jt);Ut=r(I,"CODE",{});var R=f(Ut);zt=p(R,"notification.destroyAll()"),R.forEach(l),I.forEach(l),h.forEach(l),Wt=d(t),m(fo.$$.fragment,t),qt=d(t),Gt=r(t,"H3",{});var L=f(Gt);Ht=p(L,"Global Configuration"),L.forEach(l),Ft=d(t),_t=r(t,"P",{});var A=f(_t);Vt=p(A,"A "),Jt=r(A,"CODE",{});var P=f(Jt);Kt=p(P,"notification.config"),P.forEach(l),Mt=p(A," method is also provided. These can be overridden on an individual basis."),A.forEach(l),Qt=d(t),m(po.$$.fragment,t),Xt=d(t),m(ho.$$.fragment,t)},m(t,i){h(t,o,i),u(o,n),h(t,C,i),h(t,w,i),u(w,N),h(t,F,i),h(t,_,i),u(_,V),h(t,J,i),$(Zt,t,i),h(t,K,i),$(to,t,i),h(t,M,i),$(oo,t,i),h(t,Q,i),$(no,t,i),h(t,X,i),$(io,t,i),h(t,Y,i),$(eo,t,i),h(t,Z,i),$(ao,t,i),h(t,tt,i),$(co,t,i),h(t,ot,i),h(t,nt,i),u(nt,it),h(t,et,i),h(t,at,i),u(at,ct),h(t,st,i),h(t,rt,i),u(rt,ft),u(ft,pt),u(pt,lt),u(rt,dt),u(rt,mt),u(mt,ht),u(ht,ut),u(rt,$t),u(rt,gt),u(gt,yt),u(yt,bt),u(rt,vt),u(rt,Et),u(Et,Ct),u(Ct,wt),u(rt,Nt),u(rt,Tt),u(Tt,Bt),u(Bt,Ot),u(rt,xt),u(rt,kt),u(kt,Dt),u(Dt,St),u(rt,It),u(rt,Rt),u(Rt,Lt),u(Lt,At),u(rt,Pt),u(rt,jt),u(jt,Ut),u(Ut,zt),h(t,Wt,i),$(fo,t,i),h(t,qt,i),h(t,Gt,i),u(Gt,Ht),h(t,Ft,i),h(t,_t,i),u(_t,Vt),u(_t,Jt),u(Jt,Kt),u(_t,Mt),h(t,Qt,i),$(po,t,i),h(t,Xt,i),$(ho,t,i),Yt=!0},p(t,[o]){const n={};8&o&&(n.$$scope={dirty:o,ctx:t}),Zt.$set(n);const i={};8&o&&(i.$$scope={dirty:o,ctx:t}),to.$set(i);const e={};8&o&&(e.$$scope={dirty:o,ctx:t}),oo.$set(e);const a={};8&o&&(a.$$scope={dirty:o,ctx:t}),no.$set(a);const c={};8&o&&(c.$$scope={dirty:o,ctx:t}),io.$set(c);const s={};8&o&&(s.$$scope={dirty:o,ctx:t}),eo.$set(s);const r={};8&o&&(r.$$scope={dirty:o,ctx:t}),ao.$set(r);const f={};8&o&&(f.$$scope={dirty:o,ctx:t}),co.$set(f);const p=2&o?g(so,[y(t[1])]):{};fo.$set(p);const l=4&o?g(lo,[y(t[2])]):{};ho.$set(l)},i(t){Yt||(b(Zt.$$.fragment,t),b(to.$$.fragment,t),b(oo.$$.fragment,t),b(no.$$.fragment,t),b(io.$$.fragment,t),b(eo.$$.fragment,t),b(ao.$$.fragment,t),b(co.$$.fragment,t),b(fo.$$.fragment,t),b(po.$$.fragment,t),b(ho.$$.fragment,t),Yt=!0)},o(t){v(Zt.$$.fragment,t),v(to.$$.fragment,t),v(oo.$$.fragment,t),v(no.$$.fragment,t),v(io.$$.fragment,t),v(eo.$$.fragment,t),v(ao.$$.fragment,t),v(co.$$.fragment,t),v(fo.$$.fragment,t),v(po.$$.fragment,t),v(ho.$$.fragment,t),Yt=!1},d(t){t&&l(o),t&&l(C),t&&l(w),t&&l(F),t&&l(_),t&&l(J),E(Zt,t),t&&l(K),E(to,t),t&&l(M),E(oo,t),t&&l(Q),E(no,t),t&&l(X),E(io,t),t&&l(Y),E(eo,t),t&&l(Z),E(ao,t),t&&l(tt),E(co,t),t&&l(ot),t&&l(nt),t&&l(et),t&&l(at),t&&l(st),t&&l(rt),t&&l(Wt),E(fo,t),t&&l(qt),t&&l(Gt),t&&l(Ft),t&&l(_t),t&&l(Qt),E(po,t),t&&l(Xt),E(ho,t)}}}function _(t){return["notification.config({\n  placement: 'bottomRight',\n  bottom: 50,\n  duration: 3000,\n  rtl: true,\n});",{title:"Notification Options",columns:["Property","Description","Type","Default"],data:[{property:"message",description:"The title of notification box (required)",type:"String",default:""},{property:"description",description:"The text content of notification box (required)",type:"String",default:""},{property:"className",description:"Customized CSS class",type:"String",default:""},{property:"duration",description:"Time in milliseconds before Notification is closed. When set to 0 or null, it will never be closed automatically",type:"Number",default:""},{property:"button",description:"Object of Button props along with onClick and text options. Will add a button to the bottom of the notification",type:"Object",default:""},{property:"icon",description:"Customized icon",type:"SvelteComponent",default:""},{property:"iconColor",description:"Color for the customized icon",type:"String (CSS color property)",default:""},{property:"closeIcon",description:"Custom close icon",type:"SvelteComponent",default:""},{property:"key",description:"The unique identifier of the Notification",type:"String",default:""},{property:"onClose",description:"Specify a function that will be called when the close button is clicked",type:"Function",default:""},{property:"onClick",description:"Specify a function that will be called when the notification is clicked",type:"Function",default:""},{property:"placement",description:"Position of Notification, can be one of `topLeft` `topRight` `bottomLeft` `bottomRight`",type:"String",default:"`topRight`"},{property:"style",description:"Customized inline style",type:"Object|String",default:""}]},{title:"Global Config Options",columns:["Property","Description","Type","Default"],data:[{property:"bottom",description:"Distance from the bottom of the viewport, when placement is bottomRight or bottomLeft (unit: pixels).",type:"Number",default:"24"},{property:"top",description:"Distance from the top of the viewport, when placement is topRight or topLeft (unit: pixels).",type:"Number",default:"24"},{property:"closeIcon",description:"Global close icon",type:"SvelteComponent",default:""},{property:"duration",description:"Time in milliseconds before Notification is closed. When set to 0 or null, it will never be closed automatically",type:"Number",default:""},{property:"placement",description:"Position of Notification, can be one of `topLeft` `topRight` `bottomLeft` `bottomRight`",type:"String",default:"`topRight`"},{property:"rtl",description:"Whether to enable RTL mode",type:"Boolean",default:"false"}]}]}class V extends t{constructor(t){super(),o(this,t,_,F,n,{})}}function J(t){let o,n,i;const a=new V({});return{c(){o=c(),n=e("div"),s(a.$$.fragment),this.h()},l(t){w('[data-svelte="svelte-l0u2fw"]',document.head).forEach(l),o=d(t),n=r(t,"DIV",{class:!0});var i=f(n);m(a.$$.fragment,i),i.forEach(l),this.h()},h(){document.title="Notification",C(n,"class","markdown api-container")},m(t,e){h(t,o,e),h(t,n,e),$(a,n,null),i=!0},p:N,i(t){i||(b(a.$$.fragment,t),i=!0)},o(t){v(a.$$.fragment,t),i=!1},d(t){t&&l(o),t&&l(n),E(a)}}}export default class extends t{constructor(t){super(),o(this,t,null,J,n,{})}}
