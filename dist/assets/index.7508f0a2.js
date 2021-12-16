import{d as k,o as d,c as g,a as e,b as L,e as C,i as V,g as R,r as q,G as P,f as j,s as B,h as F,t as D,L as T,j as v,n as y,F as I,k as U,l as $,m as h,p,q as G,w as W,u as H,v as z,x as Y,y as x,z as M,A as K,B as J}from"./vendor.6c768f08.js";const Q=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}};Q();const X="modulepreload",N={},Z="/",m=function(o,r){return!r||r.length===0?o():Promise.all(r.map(n=>{if(n=`${Z}${n}`,n in N)return;N[n]=!0;const s=n.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":X,s||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),s)return new Promise((b,u)=>{i.addEventListener("load",b),i.addEventListener("error",u)})})).then(()=>o())};var O=(t,o)=>{const r=t.__vccOpts||t;for(const[n,s]of o)r[n]=s;return r};const ee=k({name:"Home"}),te={class:"home"},oe=e("p",null,"home page lol",-1),se=[oe];function ne(t,o,r,n,s,a){return d(),g("div",te,se)}var ae=O(ee,[["render",ne]]);const A=[{path:"/",name:"Home",component:ae,meta:{reqAuth:!1}},{path:"/about_us",name:"About Us",component:()=>m(()=>import("./AboutUs.d5a2b855.js"),["assets/AboutUs.d5a2b855.js","assets/vendor.6c768f08.js"]),meta:{reqAuth:!1}},{path:"/contact_us",name:"Contact Us",component:()=>m(()=>import("./ContactUs.dbdc75f7.js"),["assets/ContactUs.dbdc75f7.js","assets/vendor.6c768f08.js"]),meta:{reqAuth:!1}},{path:"/newsletters",name:"Newsletters",component:()=>m(()=>import("./Newsletters.8bb45929.js"),["assets/Newsletters.8bb45929.js","assets/vendor.6c768f08.js"]),meta:{reqAuth:!0}},{path:"/newsletter_builder",name:"Newsletter Builder",component:()=>m(()=>import("./NewsletterBuilder.a99d4bfe.js"),["assets/NewsletterBuilder.a99d4bfe.js","assets/NewsletterBuilder.75cf1395.css","assets/vendor.6c768f08.js"]),meta:{reqAuth:!0}}],w=L({history:C("/"),routes:A});w.beforeEach((t,o,r)=>{f.authStateVerified.then(()=>{t.meta.reqAuth&&!f.isSignedIn?f.displayError("You do not have permission to access this page. If you believe this is an error please try logging in or contact Membership and Yearbook for help."):r()})});V({apiKey:"AIzaSyCU5YpnSDueos6WH_yfS44ORPLGNj2FGpo",authDomain:"yearbook-a563c.firebaseapp.com",projectId:"yearbook-a563c",storageBucket:"yearbook-a563c.appspot.com",messagingSenderId:"708237611773",appId:"1:708237611773:web:ce4cbad19fe937767b2494"});const _=R();var E;const c=q({isSignedIn:!!_.currentUser,auth:_,isNavbarVisible:!1,provider:new P,user:(E=_.currentUser)!=null?E:{},routes:A.filter(t=>{var o;return!((o=t.meta)==null?void 0:o.reqAuth)}),selectedRoute:w.currentRoute,authStateVerified:new Promise(t=>{j(_,o=>{t(),c.isSignedIn=!!o,c.user=o!=null?o:{},c.routes=A.filter(r=>{var n;return!!o||!((n=r.meta)==null?void 0:n.reqAuth)})})}),signInWithGoogle:()=>B(c.auth,c.provider),signOut:()=>F(c.auth),signInOut:()=>c.isSignedIn?c.signOut():c.signInWithGoogle(),displayError:t=>D({message:t,type:"is-danger"})}),Ve=T();var f=c;const re=k({setup(){return{authState:f}}}),ie={"aria-label":"main navigation",class:"navbar",role:"navigation"},ce={class:"navbar-brand"},le=e("a",{class:"navbar-item"},[e("img",{height:"28",src:"https://bulma.io/images/bulma-logo.png",width:"112",alt:"Ashby Logo"})],-1),ue=e("span",{"aria-hidden":"true"},null,-1),de=e("span",{"aria-hidden":"true"},null,-1),he=e("span",{"aria-hidden":"true"},null,-1),pe=[ue,de,he],me={class:"navbar-start"},_e={class:"navbar-end"},fe={class:"navbar-item"},be={class:"buttons"},ge=e("br",null,null,-1),ve=e("br",null,null,-1),ye={class:"footer"},Ae={class:"content has-text-centered"},we=e("p",null,[p(" Made by "),e("a",{href:"https://github.com/axriosn"},"Alex R."),p(" for Ashby RC's Membership and Yearbook Committee. The source code and website content is purposefully "),e("a",{href:"https://choosealicense.com/no-permission/"},"not licensed"),p(". All rights reserved. ")],-1),Se={href:"https://twitter.com"},ke={class:"icon is-medium"},Ie={href:"https://instagram.com"},$e={class:"icon is-medium"},Ne={href:"https://facebook.com"},Oe={class:"icon is-medium"};function Ee(t,o,r,n,s,a){const i=v("router-link"),b=v("router-view"),u=v("font-awesome-icon");return d(),g(I,null,[e("nav",ie,[e("div",ce,[le,e("a",{class:y([{"is-active":t.authState.isNavbarVisible},"navbar-burger"]),"aria-controls":"navbar","aria-expanded":"false","aria-label":"menu","data-toggle":"navbar",role:"button",onClick:o[0]||(o[0]=l=>t.authState.isNavbarVisible=!t.authState.isNavbarVisible)},pe,2)]),e("div",{id:"navbar",class:y([{"is-active":t.authState.isNavbarVisible},"navbar-menu"])},[e("div",me,[(d(!0),g(I,null,U(t.authState.routes,l=>{var S;return d(),G(i,{class:y([{"is-primary":((S=t.authState.selectedRoute)==null?void 0:S.name)===l.name},"navbar-item"]),to:l.path},{default:W(()=>[p($(l.name),1)]),_:2},1032,["class","to"])}),256))]),e("div",_e,[e("div",fe,[e("div",be,[e("a",{class:"button is-success",onClick:o[1]||(o[1]=(...l)=>t.authState.signInOut&&t.authState.signInOut(...l))},$(t.authState.isSignedIn?"Sign Out":"Sign In"),1)])])])],2)]),ge,h(b),ve,e("footer",ye,[e("div",Ae,[we,e("a",Se,[e("span",ke,[h(u,{icon:["fab","twitter"]})])]),e("a",Ie,[e("span",$e,[h(u,{icon:["fab","instagram"]})])]),e("a",Ne,[e("span",Oe,[h(u,{icon:["fab","facebook"]})])])])])],64)}var Le=O(re,[["render",Ee]]);H("/service-worker.js",{ready(){console.log(`App is being served from cache by a service worker.
For more details, visit https://goo.gl/AFskqB`)},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});z.add(Y,x,M);K(Le).use(w).component("font-awesome-icon",J).mount("#app");export{O as _,m as a,Ve as d};