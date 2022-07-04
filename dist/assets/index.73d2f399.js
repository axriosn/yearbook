const Sv=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};Sv();function wc(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Cv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ov=wc(Cv);function Vh(t){return!!t||t===""}function kc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Fe(i)?Pv(i):kc(i);if(r)for(const o in r)e[o]=r[o]}return e}else{if(Fe(t))return t;if(Se(t))return t}}const Rv=/;(?![^(]*\))/g,Nv=/:(.+)/;function Pv(t){const e={};return t.split(Rv).forEach(n=>{if(n){const i=n.split(Nv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Rr(t){let e="";if(Fe(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const i=Rr(t[n]);i&&(e+=i+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Dv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Hs(t[i],e[i]);return n}function Hs(t,e){if(t===e)return!0;let n=cd(t),i=cd(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Nr(t),i=Nr(e),n||i)return t===e;if(n=G(t),i=G(e),n||i)return n&&i?Dv(t,e):!1;if(n=Se(t),i=Se(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,o=Object.keys(e).length;if(r!==o)return!1;for(const s in t){const a=t.hasOwnProperty(s),l=e.hasOwnProperty(s);if(a&&!l||!a&&l||!Hs(t[s],e[s]))return!1}}return String(t)===String(e)}function Mv(t,e){return t.findIndex(n=>Hs(n,e))}const ld=t=>Fe(t)?t:t==null?"":G(t)||Se(t)&&(t.toString===Gh||!X(t.toString))?JSON.stringify(t,Bh,2):String(t),Bh=(t,e)=>e&&e.__v_isRef?Bh(t,e.value):Ai(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:qs(e)?{[`Set(${e.size})`]:[...e.values()]}:Se(e)&&!G(e)&&!qh(e)?String(e):e,me={},Ti=[],St=()=>{},Lv=()=>!1,Fv=/^on[^a-z]/,Gs=t=>Fv.test(t),xc=t=>t.startsWith("onUpdate:"),Ze=Object.assign,_c=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zv=Object.prototype.hasOwnProperty,ne=(t,e)=>zv.call(t,e),G=Array.isArray,Ai=t=>io(t)==="[object Map]",qs=t=>io(t)==="[object Set]",cd=t=>io(t)==="[object Date]",X=t=>typeof t=="function",Fe=t=>typeof t=="string",Nr=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",Hh=t=>Se(t)&&X(t.then)&&X(t.catch),Gh=Object.prototype.toString,io=t=>Gh.call(t),Uv=t=>io(t).slice(8,-1),qh=t=>io(t)==="[object Object]",Ec=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vo=wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ws=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jv=/-(\w)/g,jt=Ws(t=>t.replace(jv,(e,n)=>n?n.toUpperCase():"")),$v=/\B([A-Z])/g,Wi=Ws(t=>t.replace($v,"-$1").toLowerCase()),Ks=Ws(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fa=Ws(t=>t?`on${Ks(t)}`:""),Pr=(t,e)=>!Object.is(t,e),Bo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},os=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ss=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ud;const Vv=()=>ud||(ud=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Dt;class Bv{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Dt&&(this.parent=Dt,this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Hv(t,e=Dt){e&&e.active&&e.effects.push(t)}const Ic=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Wh=t=>(t.w&Tn)>0,Kh=t=>(t.n&Tn)>0,Gv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Tn},qv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Wh(r)&&!Kh(r)?r.delete(t):e[n++]=r,r.w&=~Tn,r.n&=~Tn}e.length=n}},hl=new WeakMap;let ur=0,Tn=1;const ml=30;let Et;const Yn=Symbol(""),pl=Symbol("");class Tc{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hv(this,i)}run(){if(!this.active)return this.fn();let e=Et,n=vn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Et,Et=this,vn=!0,Tn=1<<++ur,ur<=ml?Gv(this):dd(this),this.fn()}finally{ur<=ml&&qv(this),Tn=1<<--ur,Et=this.parent,vn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Et===this?this.deferStop=!0:this.active&&(dd(this),this.onStop&&this.onStop(),this.active=!1)}}function dd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let vn=!0;const Yh=[];function Ki(){Yh.push(vn),vn=!1}function Yi(){const t=Yh.pop();vn=t===void 0?!0:t}function ht(t,e,n){if(vn&&Et){let i=hl.get(t);i||hl.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Ic()),Xh(r)}}function Xh(t,e){let n=!1;ur<=ml?Kh(t)||(t.n|=Tn,n=!Wh(t)):n=!t.has(Et),n&&(t.add(Et),Et.deps.push(t))}function Qt(t,e,n,i,r,o){const s=hl.get(t);if(!s)return;let a=[];if(e==="clear")a=[...s.values()];else if(n==="length"&&G(t))s.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(s.get(n)),e){case"add":G(t)?Ec(n)&&a.push(s.get("length")):(a.push(s.get(Yn)),Ai(t)&&a.push(s.get(pl)));break;case"delete":G(t)||(a.push(s.get(Yn)),Ai(t)&&a.push(s.get(pl)));break;case"set":Ai(t)&&a.push(s.get(Yn));break}if(a.length===1)a[0]&&gl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);gl(Ic(l))}}function gl(t,e){const n=G(t)?t:[...t];for(const i of n)i.computed&&fd(i);for(const i of n)i.computed||fd(i)}function fd(t,e){(t!==Et||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Wv=wc("__proto__,__v_isRef,__isVue"),Qh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nr)),Kv=Ac(),Yv=Ac(!1,!0),Xv=Ac(!0),hd=Qv();function Qv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=ce(this);for(let o=0,s=this.length;o<s;o++)ht(i,"get",o+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(ce)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ki();const i=ce(this)[e].apply(this,n);return Yi(),i}}),t}function Ac(t=!1,e=!1){return function(i,r,o){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&o===(t?e?h0:nm:e?tm:em).get(i))return i;const s=G(i);if(!t&&s&&ne(hd,r))return Reflect.get(hd,r,o);const a=Reflect.get(i,r,o);return(Nr(r)?Qh.has(r):Wv(r))||(t||ht(i,"get",r),e)?a:Ge(a)?s&&Ec(r)?a:a.value:Se(a)?t?im(a):Xi(a):a}}const Jv=Jh(),Zv=Jh(!0);function Jh(t=!1){return function(n,i,r,o){let s=n[i];if(Dr(s)&&Ge(s)&&!Ge(r))return!1;if(!t&&!Dr(r)&&(bl(r)||(r=ce(r),s=ce(s)),!G(n)&&Ge(s)&&!Ge(r)))return s.value=r,!0;const a=G(n)&&Ec(i)?Number(i)<n.length:ne(n,i),l=Reflect.set(n,i,r,o);return n===ce(o)&&(a?Pr(r,s)&&Qt(n,"set",i,r):Qt(n,"add",i,r)),l}}function e0(t,e){const n=ne(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Qt(t,"delete",e,void 0),i}function t0(t,e){const n=Reflect.has(t,e);return(!Nr(e)||!Qh.has(e))&&ht(t,"has",e),n}function n0(t){return ht(t,"iterate",G(t)?"length":Yn),Reflect.ownKeys(t)}const Zh={get:Kv,set:Jv,deleteProperty:e0,has:t0,ownKeys:n0},i0={get:Xv,set(t,e){return!0},deleteProperty(t,e){return!0}},r0=Ze({},Zh,{get:Yv,set:Zv}),Sc=t=>t,Ys=t=>Reflect.getPrototypeOf(t);function Io(t,e,n=!1,i=!1){t=t.__v_raw;const r=ce(t),o=ce(e);n||(e!==o&&ht(r,"get",e),ht(r,"get",o));const{has:s}=Ys(r),a=i?Sc:n?Rc:Mr;if(s.call(r,e))return a(t.get(e));if(s.call(r,o))return a(t.get(o));t!==r&&t.get(e)}function To(t,e=!1){const n=this.__v_raw,i=ce(n),r=ce(t);return e||(t!==r&&ht(i,"has",t),ht(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ao(t,e=!1){return t=t.__v_raw,!e&&ht(ce(t),"iterate",Yn),Reflect.get(t,"size",t)}function md(t){t=ce(t);const e=ce(this);return Ys(e).has.call(e,t)||(e.add(t),Qt(e,"add",t,t)),this}function pd(t,e){e=ce(e);const n=ce(this),{has:i,get:r}=Ys(n);let o=i.call(n,t);o||(t=ce(t),o=i.call(n,t));const s=r.call(n,t);return n.set(t,e),o?Pr(e,s)&&Qt(n,"set",t,e):Qt(n,"add",t,e),this}function gd(t){const e=ce(this),{has:n,get:i}=Ys(e);let r=n.call(e,t);r||(t=ce(t),r=n.call(e,t)),i&&i.call(e,t);const o=e.delete(t);return r&&Qt(e,"delete",t,void 0),o}function bd(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&Qt(t,"clear",void 0,void 0),n}function So(t,e){return function(i,r){const o=this,s=o.__v_raw,a=ce(s),l=e?Sc:t?Rc:Mr;return!t&&ht(a,"iterate",Yn),s.forEach((c,u)=>i.call(r,l(c),l(u),o))}}function Co(t,e,n){return function(...i){const r=this.__v_raw,o=ce(r),s=Ai(o),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,c=r[t](...i),u=n?Sc:e?Rc:Mr;return!e&&ht(o,"iterate",l?pl:Yn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function an(t){return function(...e){return t==="delete"?!1:this}}function o0(){const t={get(o){return Io(this,o)},get size(){return Ao(this)},has:To,add:md,set:pd,delete:gd,clear:bd,forEach:So(!1,!1)},e={get(o){return Io(this,o,!1,!0)},get size(){return Ao(this)},has:To,add:md,set:pd,delete:gd,clear:bd,forEach:So(!1,!0)},n={get(o){return Io(this,o,!0)},get size(){return Ao(this,!0)},has(o){return To.call(this,o,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:So(!0,!1)},i={get(o){return Io(this,o,!0,!0)},get size(){return Ao(this,!0)},has(o){return To.call(this,o,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:So(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=Co(o,!1,!1),n[o]=Co(o,!0,!1),e[o]=Co(o,!1,!0),i[o]=Co(o,!0,!0)}),[t,n,e,i]}const[s0,a0,l0,c0]=o0();function Cc(t,e){const n=e?t?c0:l0:t?a0:s0;return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ne(n,r)&&r in i?n:i,r,o)}const u0={get:Cc(!1,!1)},d0={get:Cc(!1,!0)},f0={get:Cc(!0,!1)},em=new WeakMap,tm=new WeakMap,nm=new WeakMap,h0=new WeakMap;function m0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function p0(t){return t.__v_skip||!Object.isExtensible(t)?0:m0(Uv(t))}function Xi(t){return Dr(t)?t:Oc(t,!1,Zh,u0,em)}function g0(t){return Oc(t,!1,r0,d0,tm)}function im(t){return Oc(t,!0,i0,f0,nm)}function Oc(t,e,n,i,r){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=r.get(t);if(o)return o;const s=p0(t);if(s===0)return t;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function Si(t){return Dr(t)?Si(t.__v_raw):!!(t&&t.__v_isReactive)}function Dr(t){return!!(t&&t.__v_isReadonly)}function bl(t){return!!(t&&t.__v_isShallow)}function rm(t){return Si(t)||Dr(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function om(t){return os(t,"__v_skip",!0),t}const Mr=t=>Se(t)?Xi(t):t,Rc=t=>Se(t)?im(t):t;function sm(t){vn&&Et&&(t=ce(t),Xh(t.dep||(t.dep=Ic())))}function am(t,e){t=ce(t),t.dep&&gl(t.dep)}function Ge(t){return!!(t&&t.__v_isRef===!0)}function Ho(t){return lm(t,!1)}function b0(t){return lm(t,!0)}function lm(t,e){return Ge(t)?t:new v0(t,e)}class v0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:Mr(e)}get value(){return sm(this),this._value}set value(e){e=this.__v_isShallow?e:ce(e),Pr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Mr(e),am(this))}}function Ci(t){return Ge(t)?t.value:t}const y0={get:(t,e,n)=>Ci(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ge(r)&&!Ge(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function cm(t){return Si(t)?t:new Proxy(t,y0)}class w0{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Tc(e,()=>{this._dirty||(this._dirty=!0,am(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=ce(this);return sm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function k0(t,e,n=!1){let i,r;const o=X(t);return o?(i=t,r=St):(i=t.get,r=t.set),new w0(i,r,o||!r,n)}function yn(t,e,n,i){let r;try{r=i?t(...i):t()}catch(o){ro(o,e,n)}return r}function Ct(t,e,n,i){if(X(t)){const o=yn(t,e,n,i);return o&&Hh(o)&&o.catch(s=>{ro(s,e,n)}),o}const r=[];for(let o=0;o<t.length;o++)r.push(Ct(t[o],e,n,i));return r}function ro(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let o=e.parent;const s=e.proxy,a=n;for(;o;){const c=o.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,s,a)===!1)return}o=o.parent}const l=e.appContext.config.errorHandler;if(l){yn(l,null,10,[t,s,a]);return}}x0(t,n,r,i)}function x0(t,e,n,i=!0){console.error(t)}let as=!1,vl=!1;const dt=[];let qt=0;const mr=[];let dr=null,yi=0;const pr=[];let fn=null,wi=0;const um=Promise.resolve();let Nc=null,yl=null;function dm(t){const e=Nc||um;return t?e.then(this?t.bind(this):t):e}function _0(t){let e=qt+1,n=dt.length;for(;e<n;){const i=e+n>>>1;Lr(dt[i])<t?e=i+1:n=i}return e}function Pc(t){(!dt.length||!dt.includes(t,as&&t.allowRecurse?qt+1:qt))&&t!==yl&&(t.id==null?dt.push(t):dt.splice(_0(t.id),0,t),fm())}function fm(){!as&&!vl&&(vl=!0,Nc=um.then(pm))}function E0(t){const e=dt.indexOf(t);e>qt&&dt.splice(e,1)}function hm(t,e,n,i){G(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?i+1:i))&&n.push(t),fm()}function I0(t){hm(t,dr,mr,yi)}function T0(t){hm(t,fn,pr,wi)}function Xs(t,e=null){if(mr.length){for(yl=e,dr=[...new Set(mr)],mr.length=0,yi=0;yi<dr.length;yi++)dr[yi]();dr=null,yi=0,yl=null,Xs(t,e)}}function mm(t){if(Xs(),pr.length){const e=[...new Set(pr)];if(pr.length=0,fn){fn.push(...e);return}for(fn=e,fn.sort((n,i)=>Lr(n)-Lr(i)),wi=0;wi<fn.length;wi++)fn[wi]();fn=null,wi=0}}const Lr=t=>t.id==null?1/0:t.id;function pm(t){vl=!1,as=!0,Xs(t),dt.sort((n,i)=>Lr(n)-Lr(i));const e=St;try{for(qt=0;qt<dt.length;qt++){const n=dt[qt];n&&n.active!==!1&&yn(n,null,14)}}finally{qt=0,dt.length=0,mm(),as=!1,Nc=null,(dt.length||mr.length||pr.length)&&pm(t)}}function A0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||me;let r=n;const o=e.startsWith("update:"),s=o&&e.slice(7);if(s&&s in i){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:d,trim:f}=i[u]||me;f&&(r=n.map(m=>m.trim())),d&&(r=n.map(ss))}let a,l=i[a=Fa(e)]||i[a=Fa(jt(e))];!l&&o&&(l=i[a=Fa(Wi(e))]),l&&Ct(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ct(c,t,6,r)}}function gm(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let s={},a=!1;if(!X(t)){const l=c=>{const u=gm(c,e,!0);u&&(a=!0,Ze(s,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(i.set(t,null),null):(G(o)?o.forEach(l=>s[l]=null):Ze(s,o),i.set(t,s),s)}function Qs(t,e){return!t||!Gs(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Wi(e))||ne(t,e))}let vt=null,bm=null;function ls(t){const e=vt;return vt=t,bm=t&&t.type.__scopeId||null,e}function vm(t,e=vt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Ad(-1);const o=ls(e),s=t(...r);return ls(o),i._d&&Ad(1),s};return i._n=!0,i._c=!0,i._d=!0,i}function za(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:o,propsOptions:[s],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:m,ctx:g,inheritAttrs:A}=t;let k,b;const y=ls(t);try{if(n.shapeFlag&4){const U=r||i;k=Lt(u.call(U,U,d,o,m,f,g)),b=l}else{const U=e;k=Lt(U.length>1?U(o,{attrs:l,slots:a,emit:c}):U(o,null)),b=e.props?l:S0(l)}}catch(U){gr.length=0,ro(U,t,1),k=Re(Fr)}let N=k;if(b&&A!==!1){const U=Object.keys(b),{shapeFlag:Q}=N;U.length&&Q&7&&(s&&U.some(xc)&&(b=C0(b,s)),N=Mi(N,b))}return n.dirs&&(N=Mi(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),k=N,ls(y),k}const S0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gs(n))&&((e||(e={}))[n]=t[n]);return e},C0=(t,e)=>{const n={};for(const i in t)(!xc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function O0(t,e,n){const{props:i,children:r,component:o}=t,{props:s,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?vd(i,s,c):!!s;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(s[f]!==i[f]&&!Qs(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===s?!1:i?s?vd(i,s,c):!0:!!s;return!1}function vd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==t[o]&&!Qs(n,o))return!0}return!1}function R0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const N0=t=>t.__isSuspense;function P0(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):T0(t)}function Go(t,e){if(De){let n=De.provides;const i=De.parent&&De.parent.provides;i===n&&(n=De.provides=Object.create(i)),n[t]=e}}function wn(t,e,n=!1){const i=De||vt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&X(e)?e.call(i.proxy):e}}function D0(t,e){return Dc(t,null,e)}const yd={};function Oi(t,e,n){return Dc(t,e,n)}function Dc(t,e,{immediate:n,deep:i,flush:r,onTrack:o,onTrigger:s}=me){const a=De;let l,c=!1,u=!1;if(Ge(t)?(l=()=>t.value,c=bl(t)):Si(t)?(l=()=>t,i=!0):G(t)?(u=!0,c=t.some(b=>Si(b)||bl(b)),l=()=>t.map(b=>{if(Ge(b))return b.value;if(Si(b))return Hn(b);if(X(b))return yn(b,a,2)})):X(t)?e?l=()=>yn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),Ct(t,a,3,[f])}:l=St,e&&i){const b=l;l=()=>Hn(b())}let d,f=b=>{d=k.onStop=()=>{yn(b,a,4)}};if(Fi)return f=St,e?n&&Ct(e,a,3,[l(),u?[]:void 0,f]):l(),St;let m=u?[]:yd;const g=()=>{if(!!k.active)if(e){const b=k.run();(i||c||(u?b.some((y,N)=>Pr(y,m[N])):Pr(b,m)))&&(d&&d(),Ct(e,a,3,[b,m===yd?void 0:m,f]),m=b)}else k.run()};g.allowRecurse=!!e;let A;r==="sync"?A=g:r==="post"?A=()=>it(g,a&&a.suspense):A=()=>I0(g);const k=new Tc(l,A);return e?n?g():m=k.run():r==="post"?it(k.run.bind(k),a&&a.suspense):k.run(),()=>{k.stop(),a&&a.scope&&_c(a.scope.effects,k)}}function M0(t,e,n){const i=this.proxy,r=Fe(t)?t.includes(".")?ym(i,t):()=>i[t]:t.bind(i,i);let o;X(e)?o=e:(o=e.handler,n=e);const s=De;Li(this);const a=Dc(r,o.bind(i),n);return s?Li(s):Xn(),a}function ym(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Hn(t,e){if(!Se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ge(t))Hn(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Hn(t[n],e);else if(qs(t)||Ai(t))t.forEach(n=>{Hn(n,e)});else if(qh(t))for(const n in t)Hn(t[n],e);return t}function Dn(t){return X(t)?{setup:t,name:t.name}:t}const qo=t=>!!t.type.__asyncLoader;function dT(t){X(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,timeout:o,suspensible:s=!0,onError:a}=t;let l=null,c,u=0;const d=()=>(u++,l=null,f()),f=()=>{let m;return l||(m=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((A,k)=>{a(g,()=>A(d()),()=>k(g),u+1)});throw g}).then(g=>m!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return Dn({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const m=De;if(c)return()=>Ua(c,m);const g=y=>{l=null,ro(y,m,13,!i)};if(s&&m.suspense||Fi)return f().then(y=>()=>Ua(y,m)).catch(y=>(g(y),()=>i?Re(i,{error:y}):null));const A=Ho(!1),k=Ho(),b=Ho(!!r);return r&&setTimeout(()=>{b.value=!1},r),o!=null&&setTimeout(()=>{if(!A.value&&!k.value){const y=new Error(`Async component timed out after ${o}ms.`);g(y),k.value=y}},o),f().then(()=>{A.value=!0,m.parent&&Mc(m.parent.vnode)&&Pc(m.parent.update)}).catch(y=>{g(y),k.value=y}),()=>{if(A.value&&c)return Ua(c,m);if(k.value&&i)return Re(i,{error:k.value});if(n&&!b.value)return Re(n)}}})}function Ua(t,{vnode:{ref:e,props:n,children:i,shapeFlag:r},parent:o}){const s=Re(t,n,i);return s.ref=e,s}const Mc=t=>t.type.__isKeepAlive;function L0(t,e){wm(t,"a",e)}function F0(t,e){wm(t,"da",e)}function wm(t,e,n=De){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Js(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Mc(r.parent.vnode)&&z0(i,e,n,r),r=r.parent}}function z0(t,e,n,i){const r=Js(e,t,i,!0);km(()=>{_c(i[e],r)},n)}function Js(t,e,n=De,i=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;Ki(),Li(n);const a=Ct(e,n,t,s);return Xn(),Yi(),a});return i?r.unshift(o):r.push(o),o}}const on=t=>(e,n=De)=>(!Fi||t==="sp")&&Js(t,e,n),U0=on("bm"),j0=on("m"),$0=on("bu"),V0=on("u"),B0=on("bum"),km=on("um"),H0=on("sp"),G0=on("rtg"),q0=on("rtc");function W0(t,e=De){Js("ec",t,e)}function fT(t,e){const n=vt;if(n===null)return t;const i=ea(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[s,a,l,c=me]=e[o];X(s)&&(s={mounted:s,updated:s}),s.deep&&Hn(a),r.push({dir:s,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function zn(t,e,n,i){const r=t.dirs,o=e&&e.dirs;for(let s=0;s<r.length;s++){const a=r[s];o&&(a.oldValue=o[s].value);let l=a.dir[i];l&&(Ki(),Ct(l,n,8,[t.el,a,t,e]),Yi())}}const xm="components";function ja(t,e){return Y0(xm,t,!0,e)||t}const K0=Symbol();function Y0(t,e,n=!0,i=!1){const r=vt||De;if(r){const o=r.type;if(t===xm){const a=Ty(o,!1);if(a&&(a===e||a===jt(e)||a===Ks(jt(e))))return o}const s=wd(r[t]||o[t],e)||wd(r.appContext[t],e);return!s&&i?o:s}}function wd(t,e){return t&&(t[e]||t[jt(e)]||t[Ks(jt(e))])}function X0(t,e,n,i){let r;const o=n&&n[i];if(G(t)||Fe(t)){r=new Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=e(t[s],s,void 0,o&&o[s])}else if(typeof t=="number"){r=new Array(t);for(let s=0;s<t;s++)r[s]=e(s+1,s,void 0,o&&o[s])}else if(Se(t))if(t[Symbol.iterator])r=Array.from(t,(s,a)=>e(s,a,void 0,o&&o[a]));else{const s=Object.keys(t);r=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const c=s[a];r[a]=e(t[c],c,a,o&&o[a])}}else r=[];return n&&(n[i]=r),r}const wl=t=>t?Mm(t)?ea(t)||t.proxy:wl(t.parent):null,cs=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wl(t.parent),$root:t=>wl(t.root),$emit:t=>t.emit,$options:t=>Em(t),$forceUpdate:t=>t.f||(t.f=()=>Pc(t.update)),$nextTick:t=>t.n||(t.n=dm.bind(t.proxy)),$watch:t=>M0.bind(t)}),Q0={get({_:t},e){const{ctx:n,setupState:i,data:r,props:o,accessCache:s,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=s[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(i!==me&&ne(i,e))return s[e]=1,i[e];if(r!==me&&ne(r,e))return s[e]=2,r[e];if((c=t.propsOptions[0])&&ne(c,e))return s[e]=3,o[e];if(n!==me&&ne(n,e))return s[e]=4,n[e];kl&&(s[e]=0)}}const u=cs[e];let d,f;if(u)return e==="$attrs"&&ht(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==me&&ne(n,e))return s[e]=4,n[e];if(f=l.config.globalProperties,ne(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return r!==me&&ne(r,e)?(r[e]=n,!0):i!==me&&ne(i,e)?(i[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:o}},s){let a;return!!n[s]||t!==me&&ne(t,s)||e!==me&&ne(e,s)||(a=o[0])&&ne(a,s)||ne(i,s)||ne(cs,s)||ne(r.config.globalProperties,s)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let kl=!0;function J0(t){const e=Em(t),n=t.proxy,i=t.ctx;kl=!1,e.beforeCreate&&kd(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:s,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:g,activated:A,deactivated:k,beforeDestroy:b,beforeUnmount:y,destroyed:N,unmounted:U,render:Q,renderTracked:se,renderTriggered:ye,errorCaptured:tt,serverPrefetch:Te,expose:Ot,inheritAttrs:Bt,components:kt,directives:di,filters:fi}=e;if(c&&Z0(c,i,null,t.appContext.config.unwrapInjectedRef),s)for(const ge in s){const de=s[ge];X(de)&&(i[ge]=de.bind(n))}if(r){const ge=r.call(n,n);Se(ge)&&(t.data=Xi(ge))}if(kl=!0,o)for(const ge in o){const de=o[ge],ct=X(de)?de.bind(n,n):X(de.get)?de.get.bind(n,n):St,mi=!X(de)&&X(de.set)?de.set.bind(n):St,Ht=Ee({get:ct,set:mi});Object.defineProperty(i,ge,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:Rt=>Ht.value=Rt})}if(a)for(const ge in a)_m(a[ge],i,n,ge);if(l){const ge=X(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(de=>{Go(de,ge[de])})}u&&kd(u,t,"c");function Pe(ge,de){G(de)?de.forEach(ct=>ge(ct.bind(n))):de&&ge(de.bind(n))}if(Pe(U0,d),Pe(j0,f),Pe($0,m),Pe(V0,g),Pe(L0,A),Pe(F0,k),Pe(W0,tt),Pe(q0,se),Pe(G0,ye),Pe(B0,y),Pe(km,U),Pe(H0,Te),G(Ot))if(Ot.length){const ge=t.exposed||(t.exposed={});Ot.forEach(de=>{Object.defineProperty(ge,de,{get:()=>n[de],set:ct=>n[de]=ct})})}else t.exposed||(t.exposed={});Q&&t.render===St&&(t.render=Q),Bt!=null&&(t.inheritAttrs=Bt),kt&&(t.components=kt),di&&(t.directives=di)}function Z0(t,e,n=St,i=!1){G(t)&&(t=xl(t));for(const r in t){const o=t[r];let s;Se(o)?"default"in o?s=wn(o.from||r,o.default,!0):s=wn(o.from||r):s=wn(o),Ge(s)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[r]=s}}function kd(t,e,n){Ct(G(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function _m(t,e,n,i){const r=i.includes(".")?ym(n,i):()=>n[i];if(Fe(t)){const o=e[t];X(o)&&Oi(r,o)}else if(X(t))Oi(r,t.bind(n));else if(Se(t))if(G(t))t.forEach(o=>_m(o,e,n,i));else{const o=X(t.handler)?t.handler.bind(n):e[t.handler];X(o)&&Oi(r,o,t)}}function Em(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>us(l,c,s,!0)),us(l,e,s)),o.set(e,l),l}function us(t,e,n,i=!1){const{mixins:r,extends:o}=e;o&&us(t,o,n,!0),r&&r.forEach(s=>us(t,s,n,!0));for(const s in e)if(!(i&&s==="expose")){const a=ey[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const ey={data:xd,props:jn,emits:jn,methods:jn,computed:jn,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:jn,directives:jn,watch:ny,provide:xd,inject:ty};function xd(t,e){return e?t?function(){return Ze(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function ty(t,e){return jn(xl(t),xl(e))}function xl(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function jn(t,e){return t?Ze(Ze(Object.create(null),t),e):e}function ny(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const i in e)n[i]=We(t[i],e[i]);return n}function iy(t,e,n,i=!1){const r={},o={};os(o,Zs,1),t.propsDefaults=Object.create(null),Im(t,e,r,o);for(const s in t.propsOptions[0])s in r||(r[s]=void 0);n?t.props=i?r:g0(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function ry(t,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:s}}=t,a=ce(r),[l]=t.propsOptions;let c=!1;if((i||s>0)&&!(s&16)){if(s&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Qs(t.emitsOptions,f))continue;const m=e[f];if(l)if(ne(o,f))m!==o[f]&&(o[f]=m,c=!0);else{const g=jt(f);r[g]=_l(l,a,g,m,t,!1)}else m!==o[f]&&(o[f]=m,c=!0)}}}else{Im(t,e,r,o)&&(c=!0);let u;for(const d in a)(!e||!ne(e,d)&&((u=Wi(d))===d||!ne(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=_l(l,a,d,void 0,t,!0)):delete r[d]);if(o!==a)for(const d in o)(!e||!ne(e,d)&&!0)&&(delete o[d],c=!0)}c&&Qt(t,"set","$attrs")}function Im(t,e,n,i){const[r,o]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(Vo(l))continue;const c=e[l];let u;r&&ne(r,u=jt(l))?!o||!o.includes(u)?n[u]=c:(a||(a={}))[u]=c:Qs(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,s=!0)}if(o){const l=ce(n),c=a||me;for(let u=0;u<o.length;u++){const d=o[u];n[d]=_l(r,l,d,c[d],t,!ne(c,d))}}return s}function _l(t,e,n,i,r,o){const s=t[n];if(s!=null){const a=ne(s,"default");if(a&&i===void 0){const l=s.default;if(s.type!==Function&&X(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Li(r),i=c[n]=l.call(null,e),Xn())}else i=l}s[0]&&(o&&!a?i=!1:s[1]&&(i===""||i===Wi(n))&&(i=!0))}return i}function Tm(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const o=t.props,s={},a=[];let l=!1;if(!X(t)){const u=d=>{l=!0;const[f,m]=Tm(d,e,!0);Ze(s,f),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!o&&!l)return i.set(t,Ti),Ti;if(G(o))for(let u=0;u<o.length;u++){const d=jt(o[u]);_d(d)&&(s[d]=me)}else if(o)for(const u in o){const d=jt(u);if(_d(d)){const f=o[u],m=s[d]=G(f)||X(f)?{type:f}:f;if(m){const g=Td(Boolean,m.type),A=Td(String,m.type);m[0]=g>-1,m[1]=A<0||g<A,(g>-1||ne(m,"default"))&&a.push(d)}}}const c=[s,a];return i.set(t,c),c}function _d(t){return t[0]!=="$"}function Ed(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Id(t,e){return Ed(t)===Ed(e)}function Td(t,e){return G(e)?e.findIndex(n=>Id(n,t)):X(e)&&Id(e,t)?0:-1}const Am=t=>t[0]==="_"||t==="$stable",Lc=t=>G(t)?t.map(Lt):[Lt(t)],oy=(t,e,n)=>{if(e._n)return e;const i=vm((...r)=>Lc(e(...r)),n);return i._c=!1,i},Sm=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Am(r))continue;const o=t[r];if(X(o))e[r]=oy(r,o,i);else if(o!=null){const s=Lc(o);e[r]=()=>s}}},Cm=(t,e)=>{const n=Lc(e);t.slots.default=()=>n},sy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),os(e,"_",n)):Sm(e,t.slots={})}else t.slots={},e&&Cm(t,e);os(t.slots,Zs,1)},ay=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,s=me;if(i.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:(Ze(r,e),!n&&a===1&&delete r._):(o=!e.$stable,Sm(e,r)),s=e}else e&&(Cm(t,e),s={default:1});if(o)for(const a in r)!Am(a)&&!(a in s)&&delete r[a]};function Om(){return{app:null,config:{isNativeTag:Lv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ly=0;function cy(t,e){return function(i,r=null){X(i)||(i=Object.assign({},i)),r!=null&&!Se(r)&&(r=null);const o=Om(),s=new Set;let a=!1;const l=o.app={_uid:ly++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:Sy,get config(){return o.config},set config(c){},use(c,...u){return s.has(c)||(c&&X(c.install)?(s.add(c),c.install(l,...u)):X(c)&&(s.add(c),c(l,...u))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,u){return u?(o.components[c]=u,l):o.components[c]},directive(c,u){return u?(o.directives[c]=u,l):o.directives[c]},mount(c,u,d){if(!a){const f=Re(i,r);return f.appContext=o,u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,ea(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return o.provides[c]=u,l}};return l}}function El(t,e,n,i,r=!1){if(G(t)){t.forEach((f,m)=>El(f,e&&(G(e)?e[m]:e),n,i,r));return}if(qo(i)&&!r)return;const o=i.shapeFlag&4?ea(i.component)||i.component.proxy:i.el,s=r?null:o,{i:a,r:l}=t,c=e&&e.r,u=a.refs===me?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Fe(c)?(u[c]=null,ne(d,c)&&(d[c]=null)):Ge(c)&&(c.value=null)),X(l))yn(l,a,12,[s,u]);else{const f=Fe(l),m=Ge(l);if(f||m){const g=()=>{if(t.f){const A=f?u[l]:l.value;r?G(A)&&_c(A,o):G(A)?A.includes(o)||A.push(o):f?(u[l]=[o],ne(d,l)&&(d[l]=u[l])):(l.value=[o],t.k&&(u[t.k]=l.value))}else f?(u[l]=s,ne(d,l)&&(d[l]=s)):m&&(l.value=s,t.k&&(u[t.k]=s))};s?(g.id=-1,it(g,n)):g()}}}const it=P0;function uy(t){return dy(t)}function dy(t,e){const n=Vv();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:s,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:m=St,cloneNode:g,insertStaticContent:A}=t,k=(h,p,v,_=null,x=null,C=null,P=!1,S=null,O=!!p.dynamicChildren)=>{if(h===p)return;h&&!or(h,p)&&(_=F(h),bt(h,x,C,!0),h=null),p.patchFlag===-2&&(O=!1,p.dynamicChildren=null);const{type:E,ref:j,shapeFlag:z}=p;switch(E){case Fc:b(h,p,v,_);break;case Fr:y(h,p,v,_);break;case $a:h==null&&N(p,v,_,P);break;case _t:di(h,p,v,_,x,C,P,S,O);break;default:z&1?se(h,p,v,_,x,C,P,S,O):z&6?fi(h,p,v,_,x,C,P,S,O):(z&64||z&128)&&E.process(h,p,v,_,x,C,P,S,O,be)}j!=null&&x&&El(j,h&&h.ref,C,p||h,!p)},b=(h,p,v,_)=>{if(h==null)i(p.el=a(p.children),v,_);else{const x=p.el=h.el;p.children!==h.children&&c(x,p.children)}},y=(h,p,v,_)=>{h==null?i(p.el=l(p.children||""),v,_):p.el=h.el},N=(h,p,v,_)=>{[h.el,h.anchor]=A(h.children,p,v,_,h.el,h.anchor)},U=({el:h,anchor:p},v,_)=>{let x;for(;h&&h!==p;)x=f(h),i(h,v,_),h=x;i(p,v,_)},Q=({el:h,anchor:p})=>{let v;for(;h&&h!==p;)v=f(h),r(h),h=v;r(p)},se=(h,p,v,_,x,C,P,S,O)=>{P=P||p.type==="svg",h==null?ye(p,v,_,x,C,P,S,O):Ot(h,p,x,C,P,S,O)},ye=(h,p,v,_,x,C,P,S)=>{let O,E;const{type:j,props:z,shapeFlag:$,transition:W,patchFlag:ie,dirs:fe}=h;if(h.el&&g!==void 0&&ie===-1)O=h.el=g(h.el);else{if(O=h.el=s(h.type,C,z&&z.is,z),$&8?u(O,h.children):$&16&&Te(h.children,O,null,_,x,C&&j!=="foreignObject",P,S),fe&&zn(h,null,_,"created"),z){for(const we in z)we!=="value"&&!Vo(we)&&o(O,we,null,z[we],C,h.children,_,x,R);"value"in z&&o(O,"value",null,z.value),(E=z.onVnodeBeforeMount)&&Pt(E,_,h)}tt(O,h,h.scopeId,P,_)}fe&&zn(h,null,_,"beforeMount");const he=(!x||x&&!x.pendingBranch)&&W&&!W.persisted;he&&W.beforeEnter(O),i(O,p,v),((E=z&&z.onVnodeMounted)||he||fe)&&it(()=>{E&&Pt(E,_,h),he&&W.enter(O),fe&&zn(h,null,_,"mounted")},x)},tt=(h,p,v,_,x)=>{if(v&&m(h,v),_)for(let C=0;C<_.length;C++)m(h,_[C]);if(x){let C=x.subTree;if(p===C){const P=x.vnode;tt(h,P,P.scopeId,P.slotScopeIds,x.parent)}}},Te=(h,p,v,_,x,C,P,S,O=0)=>{for(let E=O;E<h.length;E++){const j=h[E]=S?hn(h[E]):Lt(h[E]);k(null,j,p,v,_,x,C,P,S)}},Ot=(h,p,v,_,x,C,P)=>{const S=p.el=h.el;let{patchFlag:O,dynamicChildren:E,dirs:j}=p;O|=h.patchFlag&16;const z=h.props||me,$=p.props||me;let W;v&&Un(v,!1),(W=$.onVnodeBeforeUpdate)&&Pt(W,v,p,h),j&&zn(p,h,v,"beforeUpdate"),v&&Un(v,!0);const ie=x&&p.type!=="foreignObject";if(E?Bt(h.dynamicChildren,E,S,v,_,ie,C):P||ct(h,p,S,null,v,_,ie,C,!1),O>0){if(O&16)kt(S,p,z,$,v,_,x);else if(O&2&&z.class!==$.class&&o(S,"class",null,$.class,x),O&4&&o(S,"style",z.style,$.style,x),O&8){const fe=p.dynamicProps;for(let he=0;he<fe.length;he++){const we=fe[he],xt=z[we],pi=$[we];(pi!==xt||we==="value")&&o(S,we,xt,pi,x,h.children,v,_,R)}}O&1&&h.children!==p.children&&u(S,p.children)}else!P&&E==null&&kt(S,p,z,$,v,_,x);((W=$.onVnodeUpdated)||j)&&it(()=>{W&&Pt(W,v,p,h),j&&zn(p,h,v,"updated")},_)},Bt=(h,p,v,_,x,C,P)=>{for(let S=0;S<p.length;S++){const O=h[S],E=p[S],j=O.el&&(O.type===_t||!or(O,E)||O.shapeFlag&70)?d(O.el):v;k(O,E,j,null,_,x,C,P,!0)}},kt=(h,p,v,_,x,C,P)=>{if(v!==_){for(const S in _){if(Vo(S))continue;const O=_[S],E=v[S];O!==E&&S!=="value"&&o(h,S,E,O,P,p.children,x,C,R)}if(v!==me)for(const S in v)!Vo(S)&&!(S in _)&&o(h,S,v[S],null,P,p.children,x,C,R);"value"in _&&o(h,"value",v.value,_.value)}},di=(h,p,v,_,x,C,P,S,O)=>{const E=p.el=h?h.el:a(""),j=p.anchor=h?h.anchor:a("");let{patchFlag:z,dynamicChildren:$,slotScopeIds:W}=p;W&&(S=S?S.concat(W):W),h==null?(i(E,v,_),i(j,v,_),Te(p.children,v,j,x,C,P,S,O)):z>0&&z&64&&$&&h.dynamicChildren?(Bt(h.dynamicChildren,$,v,x,C,P,S),(p.key!=null||x&&p===x.subTree)&&Rm(h,p,!0)):ct(h,p,v,j,x,C,P,S,O)},fi=(h,p,v,_,x,C,P,S,O)=>{p.slotScopeIds=S,h==null?p.shapeFlag&512?x.ctx.activate(p,v,_,P,O):hi(p,v,_,x,C,P,O):Pe(h,p,O)},hi=(h,p,v,_,x,C,P)=>{const S=h.component=ky(h,_,x);if(Mc(h)&&(S.ctx.renderer=be),xy(S),S.asyncDep){if(x&&x.registerDep(S,ge),!h.el){const O=S.subTree=Re(Fr);y(null,O,p,v)}return}ge(S,h,p,v,x,C,P)},Pe=(h,p,v)=>{const _=p.component=h.component;if(O0(h,p,v))if(_.asyncDep&&!_.asyncResolved){de(_,p,v);return}else _.next=p,E0(_.update),_.update();else p.el=h.el,_.vnode=p},ge=(h,p,v,_,x,C,P)=>{const S=()=>{if(h.isMounted){let{next:j,bu:z,u:$,parent:W,vnode:ie}=h,fe=j,he;Un(h,!1),j?(j.el=ie.el,de(h,j,P)):j=ie,z&&Bo(z),(he=j.props&&j.props.onVnodeBeforeUpdate)&&Pt(he,W,j,ie),Un(h,!0);const we=za(h),xt=h.subTree;h.subTree=we,k(xt,we,d(xt.el),F(xt),h,x,C),j.el=we.el,fe===null&&R0(h,we.el),$&&it($,x),(he=j.props&&j.props.onVnodeUpdated)&&it(()=>Pt(he,W,j,ie),x)}else{let j;const{el:z,props:$}=p,{bm:W,m:ie,parent:fe}=h,he=qo(p);if(Un(h,!1),W&&Bo(W),!he&&(j=$&&$.onVnodeBeforeMount)&&Pt(j,fe,p),Un(h,!0),z&&J){const we=()=>{h.subTree=za(h),J(z,h.subTree,h,x,null)};he?p.type.__asyncLoader().then(()=>!h.isUnmounted&&we()):we()}else{const we=h.subTree=za(h);k(null,we,v,_,h,x,C),p.el=we.el}if(ie&&it(ie,x),!he&&(j=$&&$.onVnodeMounted)){const we=p;it(()=>Pt(j,fe,we),x)}(p.shapeFlag&256||fe&&qo(fe.vnode)&&fe.vnode.shapeFlag&256)&&h.a&&it(h.a,x),h.isMounted=!0,p=v=_=null}},O=h.effect=new Tc(S,()=>Pc(E),h.scope),E=h.update=()=>O.run();E.id=h.uid,Un(h,!0),E()},de=(h,p,v)=>{p.component=h;const _=h.vnode.props;h.vnode=p,h.next=null,ry(h,p.props,_,v),ay(h,p.children,v),Ki(),Xs(void 0,h.update),Yi()},ct=(h,p,v,_,x,C,P,S,O=!1)=>{const E=h&&h.children,j=h?h.shapeFlag:0,z=p.children,{patchFlag:$,shapeFlag:W}=p;if($>0){if($&128){Ht(E,z,v,_,x,C,P,S,O);return}else if($&256){mi(E,z,v,_,x,C,P,S,O);return}}W&8?(j&16&&R(E,x,C),z!==E&&u(v,z)):j&16?W&16?Ht(E,z,v,_,x,C,P,S,O):R(E,x,C,!0):(j&8&&u(v,""),W&16&&Te(z,v,_,x,C,P,S,O))},mi=(h,p,v,_,x,C,P,S,O)=>{h=h||Ti,p=p||Ti;const E=h.length,j=p.length,z=Math.min(E,j);let $;for($=0;$<z;$++){const W=p[$]=O?hn(p[$]):Lt(p[$]);k(h[$],W,v,null,x,C,P,S,O)}E>j?R(h,x,C,!0,!1,z):Te(p,v,_,x,C,P,S,O,z)},Ht=(h,p,v,_,x,C,P,S,O)=>{let E=0;const j=p.length;let z=h.length-1,$=j-1;for(;E<=z&&E<=$;){const W=h[E],ie=p[E]=O?hn(p[E]):Lt(p[E]);if(or(W,ie))k(W,ie,v,null,x,C,P,S,O);else break;E++}for(;E<=z&&E<=$;){const W=h[z],ie=p[$]=O?hn(p[$]):Lt(p[$]);if(or(W,ie))k(W,ie,v,null,x,C,P,S,O);else break;z--,$--}if(E>z){if(E<=$){const W=$+1,ie=W<j?p[W].el:_;for(;E<=$;)k(null,p[E]=O?hn(p[E]):Lt(p[E]),v,ie,x,C,P,S,O),E++}}else if(E>$)for(;E<=z;)bt(h[E],x,C,!0),E++;else{const W=E,ie=E,fe=new Map;for(E=ie;E<=$;E++){const ut=p[E]=O?hn(p[E]):Lt(p[E]);ut.key!=null&&fe.set(ut.key,E)}let he,we=0;const xt=$-ie+1;let pi=!1,od=0;const rr=new Array(xt);for(E=0;E<xt;E++)rr[E]=0;for(E=W;E<=z;E++){const ut=h[E];if(we>=xt){bt(ut,x,C,!0);continue}let Nt;if(ut.key!=null)Nt=fe.get(ut.key);else for(he=ie;he<=$;he++)if(rr[he-ie]===0&&or(ut,p[he])){Nt=he;break}Nt===void 0?bt(ut,x,C,!0):(rr[Nt-ie]=E+1,Nt>=od?od=Nt:pi=!0,k(ut,p[Nt],v,null,x,C,P,S,O),we++)}const sd=pi?fy(rr):Ti;for(he=sd.length-1,E=xt-1;E>=0;E--){const ut=ie+E,Nt=p[ut],ad=ut+1<j?p[ut+1].el:_;rr[E]===0?k(null,Nt,v,ad,x,C,P,S,O):pi&&(he<0||E!==sd[he]?Rt(Nt,v,ad,2):he--)}}},Rt=(h,p,v,_,x=null)=>{const{el:C,type:P,transition:S,children:O,shapeFlag:E}=h;if(E&6){Rt(h.component.subTree,p,v,_);return}if(E&128){h.suspense.move(p,v,_);return}if(E&64){P.move(h,p,v,be);return}if(P===_t){i(C,p,v);for(let z=0;z<O.length;z++)Rt(O[z],p,v,_);i(h.anchor,p,v);return}if(P===$a){U(h,p,v);return}if(_!==2&&E&1&&S)if(_===0)S.beforeEnter(C),i(C,p,v),it(()=>S.enter(C),x);else{const{leave:z,delayLeave:$,afterLeave:W}=S,ie=()=>i(C,p,v),fe=()=>{z(C,()=>{ie(),W&&W()})};$?$(C,ie,fe):fe()}else i(C,p,v)},bt=(h,p,v,_=!1,x=!1)=>{const{type:C,props:P,ref:S,children:O,dynamicChildren:E,shapeFlag:j,patchFlag:z,dirs:$}=h;if(S!=null&&El(S,null,v,h,!0),j&256){p.ctx.deactivate(h);return}const W=j&1&&$,ie=!qo(h);let fe;if(ie&&(fe=P&&P.onVnodeBeforeUnmount)&&Pt(fe,p,h),j&6)L(h.component,v,_);else{if(j&128){h.suspense.unmount(v,_);return}W&&zn(h,null,p,"beforeUnmount"),j&64?h.type.remove(h,p,v,x,be,_):E&&(C!==_t||z>0&&z&64)?R(E,p,v,!1,!0):(C===_t&&z&384||!x&&j&16)&&R(O,p,v),_&&ir(h)}(ie&&(fe=P&&P.onVnodeUnmounted)||W)&&it(()=>{fe&&Pt(fe,p,h),W&&zn(h,null,p,"unmounted")},v)},ir=h=>{const{type:p,el:v,anchor:_,transition:x}=h;if(p===_t){w(v,_);return}if(p===$a){Q(h);return}const C=()=>{r(v),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(h.shapeFlag&1&&x&&!x.persisted){const{leave:P,delayLeave:S}=x,O=()=>P(v,C);S?S(h.el,C,O):O()}else C()},w=(h,p)=>{let v;for(;h!==p;)v=f(h),r(h),h=v;r(p)},L=(h,p,v)=>{const{bum:_,scope:x,update:C,subTree:P,um:S}=h;_&&Bo(_),x.stop(),C&&(C.active=!1,bt(P,h,p,v)),S&&it(S,p),it(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},R=(h,p,v,_=!1,x=!1,C=0)=>{for(let P=C;P<h.length;P++)bt(h[P],p,v,_,x)},F=h=>h.shapeFlag&6?F(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),oe=(h,p,v)=>{h==null?p._vnode&&bt(p._vnode,null,null,!0):k(p._vnode||null,h,p,null,null,null,v),mm(),p._vnode=h},be={p:k,um:bt,m:Rt,r:ir,mt:hi,mc:Te,pc:ct,pbc:Bt,n:F,o:t};let Z,J;return e&&([Z,J]=e(be)),{render:oe,hydrate:Z,createApp:cy(oe,Z)}}function Un({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Rm(t,e,n=!1){const i=t.children,r=e.children;if(G(i)&&G(r))for(let o=0;o<i.length;o++){const s=i[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=hn(r[o]),a.el=s.el),n||Rm(s,a))}}function fy(t){const e=t.slice(),n=[0];let i,r,o,s,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=e[s];return n}const hy=t=>t.__isTeleport,_t=Symbol(void 0),Fc=Symbol(void 0),Fr=Symbol(void 0),$a=Symbol(void 0),gr=[];let Tt=null;function Wo(t=!1){gr.push(Tt=t?null:[])}function my(){gr.pop(),Tt=gr[gr.length-1]||null}let zr=1;function Ad(t){zr+=t}function Nm(t){return t.dynamicChildren=zr>0?Tt||Ti:null,my(),zr>0&&Tt&&Tt.push(t),t}function Il(t,e,n,i,r,o){return Nm(le(t,e,n,i,r,o,!0))}function py(t,e,n,i,r){return Nm(Re(t,e,n,i,r,!0))}function Tl(t){return t?t.__v_isVNode===!0:!1}function or(t,e){return t.type===e.type&&t.key===e.key}const Zs="__vInternal",Pm=({key:t})=>t!=null?t:null,Ko=({ref:t,ref_key:e,ref_for:n})=>t!=null?Fe(t)||Ge(t)||X(t)?{i:vt,r:t,k:e,f:!!n}:t:null;function le(t,e=null,n=null,i=0,r=null,o=t===_t?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pm(e),ref:e&&Ko(e),scopeId:bm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(zc(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),zr>0&&!s&&Tt&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Tt.push(l),l}const Re=gy;function gy(t,e=null,n=null,i=0,r=null,o=!1){if((!t||t===K0)&&(t=Fr),Tl(t)){const a=Mi(t,e,!0);return n&&zc(a,n),zr>0&&!o&&Tt&&(a.shapeFlag&6?Tt[Tt.indexOf(t)]=a:Tt.push(a)),a.patchFlag|=-2,a}if(Ay(t)&&(t=t.__vccOpts),e){e=by(e);let{class:a,style:l}=e;a&&!Fe(a)&&(e.class=Rr(a)),Se(l)&&(rm(l)&&!G(l)&&(l=Ze({},l)),e.style=kc(l))}const s=Fe(t)?1:N0(t)?128:hy(t)?64:Se(t)?4:X(t)?2:0;return le(t,e,n,i,r,s,o,!0)}function by(t){return t?rm(t)||Zs in t?Ze({},t):t:null}function Mi(t,e,n=!1){const{props:i,ref:r,patchFlag:o,children:s}=t,a=e?vy(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Pm(a),ref:e&&e.ref?n&&r?G(r)?r.concat(Ko(e)):[r,Ko(e)]:Ko(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mi(t.ssContent),ssFallback:t.ssFallback&&Mi(t.ssFallback),el:t.el,anchor:t.anchor}}function br(t=" ",e=0){return Re(Fc,null,t,e)}function Lt(t){return t==null||typeof t=="boolean"?Re(Fr):G(t)?Re(_t,null,t.slice()):typeof t=="object"?hn(t):Re(Fc,null,String(t))}function hn(t){return t.el===null||t.memo?t:Mi(t)}function zc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),zc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Zs in e)?e._ctx=vt:r===3&&vt&&(vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:vt},n=32):(e=String(e),i&64?(n=16,e=[br(e)]):n=8);t.children=e,t.shapeFlag|=n}function vy(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Rr([e.class,i.class]));else if(r==="style")e.style=kc([e.style,i.style]);else if(Gs(r)){const o=e[r],s=i[r];s&&o!==s&&!(G(o)&&o.includes(s))&&(e[r]=o?[].concat(o,s):s)}else r!==""&&(e[r]=i[r])}return e}function Pt(t,e,n,i=null){Ct(t,e,7,[n,i])}const yy=Om();let wy=0;function ky(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||yy,o={uid:wy++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tm(i,r),emitsOptions:gm(i,r),emit:null,emitted:null,propsDefaults:me,inheritAttrs:i.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=A0.bind(null,o),t.ce&&t.ce(o),o}let De=null;const Dm=()=>De||vt,Li=t=>{De=t,t.scope.on()},Xn=()=>{De&&De.scope.off(),De=null};function Mm(t){return t.vnode.shapeFlag&4}let Fi=!1;function xy(t,e=!1){Fi=e;const{props:n,children:i}=t.vnode,r=Mm(t);iy(t,n,r,e),sy(t,i);const o=r?_y(t,e):void 0;return Fi=!1,o}function _y(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=om(new Proxy(t.ctx,Q0));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?Iy(t):null;Li(t),Ki();const o=yn(i,t,0,[t.props,r]);if(Yi(),Xn(),Hh(o)){if(o.then(Xn,Xn),e)return o.then(s=>{Sd(t,s,e)}).catch(s=>{ro(s,t,0)});t.asyncDep=o}else Sd(t,o,e)}else Lm(t,e)}function Sd(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=cm(e)),Lm(t,n)}let Cd;function Lm(t,e,n){const i=t.type;if(!t.render){if(!e&&Cd&&!i.render){const r=i.template;if(r){const{isCustomElement:o,compilerOptions:s}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ze(Ze({isCustomElement:o,delimiters:a},s),l);i.render=Cd(r,c)}}t.render=i.render||St}Li(t),Ki(),J0(t),Yi(),Xn()}function Ey(t){return new Proxy(t.attrs,{get(e,n){return ht(t,"get","$attrs"),e[n]}})}function Iy(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=Ey(t))},slots:t.slots,emit:t.emit,expose:e}}function ea(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cm(om(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in cs)return cs[n](t)}}))}function Ty(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function Ay(t){return X(t)&&"__vccOpts"in t}const Ee=(t,e)=>k0(t,e,Fi);function ta(t,e,n){const i=arguments.length;return i===2?Se(e)&&!G(e)?Tl(e)?Re(t,null,[e]):Re(t,e):Re(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Tl(n)&&(n=[n]),Re(t,e,n))}const Sy="3.2.37",Cy="http://www.w3.org/2000/svg",Vn=typeof document!="undefined"?document:null,Od=Vn&&Vn.createElement("template"),Oy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Vn.createElementNS(Cy,t):Vn.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Vn.createTextNode(t),createComment:t=>Vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,r,o){const s=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Od.innerHTML=i?`<svg>${t}</svg>`:t;const a=Od.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ry(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ny(t,e,n){const i=t.style,r=Fe(n);if(n&&!r){for(const o in n)Al(i,o,n[o]);if(e&&!Fe(e))for(const o in e)n[o]==null&&Al(i,o,"")}else{const o=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=o)}}const Rd=/\s*!important$/;function Al(t,e,n){if(G(n))n.forEach(i=>Al(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Py(t,e);Rd.test(n)?t.setProperty(Wi(i),n.replace(Rd,""),"important"):t[i]=n}}const Nd=["Webkit","Moz","ms"],Va={};function Py(t,e){const n=Va[e];if(n)return n;let i=jt(e);if(i!=="filter"&&i in t)return Va[e]=i;i=Ks(i);for(let r=0;r<Nd.length;r++){const o=Nd[r]+i;if(o in t)return Va[e]=o}return e}const Pd="http://www.w3.org/1999/xlink";function Dy(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Pd,e.slice(6,e.length)):t.setAttributeNS(Pd,e,n);else{const o=Ov(e);n==null||o&&!Vh(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function My(t,e,n,i,r,o,s){if(e==="innerHTML"||e==="textContent"){i&&s(i,r,o),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Vh(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Fm,Ly]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Sl=0;const Fy=Promise.resolve(),zy=()=>{Sl=0},Uy=()=>Sl||(Fy.then(zy),Sl=Fm());function Bn(t,e,n,i){t.addEventListener(e,n,i)}function jy(t,e,n,i){t.removeEventListener(e,n,i)}function $y(t,e,n,i,r=null){const o=t._vei||(t._vei={}),s=o[e];if(i&&s)s.value=i;else{const[a,l]=Vy(e);if(i){const c=o[e]=By(i,r);Bn(t,a,c,l)}else s&&(jy(t,a,s,l),o[e]=void 0)}}const Dd=/(?:Once|Passive|Capture)$/;function Vy(t){let e;if(Dd.test(t)){e={};let n;for(;n=t.match(Dd);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Wi(t.slice(2)),e]}function By(t,e){const n=i=>{const r=i.timeStamp||Fm();(Ly||r>=n.attached-1)&&Ct(Hy(i,n.value),e,5,[i])};return n.value=t,n.attached=Uy(),n}function Hy(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Md=/^on[a-z]/,Gy=(t,e,n,i,r=!1,o,s,a,l)=>{e==="class"?Ry(t,i,r):e==="style"?Ny(t,n,i):Gs(e)?xc(e)||$y(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qy(t,e,i,r))?My(t,e,i,o,s,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Dy(t,e,i,r))};function qy(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Md.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Md.test(e)&&Fe(n)?!1:e in t}const ds=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Bo(e,n):e};function Wy(t){t.target.composing=!0}function Ld(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const hT={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=ds(r);const o=i||r.props&&r.props.type==="number";Bn(t,e?"change":"input",s=>{if(s.target.composing)return;let a=t.value;n&&(a=a.trim()),o&&(a=ss(a)),t._assign(a)}),n&&Bn(t,"change",()=>{t.value=t.value.trim()}),e||(Bn(t,"compositionstart",Wy),Bn(t,"compositionend",Ld),Bn(t,"change",Ld))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},o){if(t._assign=ds(o),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&ss(t.value)===e))return;const s=e==null?"":e;t.value!==s&&(t.value=s)}},mT={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const r=qs(e);Bn(t,"change",()=>{const o=Array.prototype.filter.call(t.options,s=>s.selected).map(s=>n?ss(fs(s)):fs(s));t._assign(t.multiple?r?new Set(o):o:o[0])}),t._assign=ds(i)},mounted(t,{value:e}){Fd(t,e)},beforeUpdate(t,e,n){t._assign=ds(n)},updated(t,{value:e}){Fd(t,e)}};function Fd(t,e){const n=t.multiple;if(!(n&&!G(e)&&!qs(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],s=fs(o);if(n)G(e)?o.selected=Mv(e,s)>-1:o.selected=e.has(s);else if(Hs(fs(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function fs(t){return"_value"in t?t._value:t.value}const Ky=["ctrl","shift","alt","meta"],Yy={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ky.some(n=>t[`${n}Key`]&&!e.includes(n))},pT=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const o=Yy[e[r]];if(o&&o(n,e))return}return t(n,...i)},Xy=Ze({patchProp:Gy},Oy);let zd;function Qy(){return zd||(zd=uy(Xy))}const Jy=(...t)=>{const e=Qy().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Zy(i);if(!r)return;const o=e._component;!X(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e};function Zy(t){return Fe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ew=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],s=t[n++],a=t[n++],l=((r&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Um={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const o=t[r],s=r+1<t.length,a=s?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=o>>2,d=(o&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;l||(m=64,s||(f=64)),i.push(n[u],n[d],n[f],n[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ew(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||a==null||c==null||d==null)throw Error();const f=o<<2|a>>4;if(i.push(f),c!==64){const m=a<<4&240|c>>2;if(i.push(m),d!==64){const g=c<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},tw=function(t){const e=zm(t);return Um.encodeByteArray(e,!0)},jm=function(t){return tw(t).replace(/\./g,"")},nw=function(t){try{return Um.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $m(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Vm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Bm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rw(){return ze().indexOf("Electron/")>=0}function Hm(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ow(){return ze().indexOf("MSAppHost/")>=0}function sw(){return typeof indexedDB=="object"}function aw(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="FirebaseError";class li extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=lw,Object.setPrototypeOf(this,li.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oo.prototype.create)}}class oo{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],s=o?cw(o,i):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new li(r,a,i)}}function cw(t,e){return t.replace(uw,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const uw=/\{\$([^}]+)}/g;function dw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hs(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const o=t[r],s=e[r];if(Ud(o)&&Ud(s)){if(!hs(o,s))return!1}else if(o!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Ud(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function fw(t,e){const n=new hw(t,e);return n.subscribe.bind(n)}class hw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");mw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Ba),r.error===void 0&&(r.error=Ba),r.complete===void 0&&(r.complete=Ba);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ba(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new iw;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bw(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);i===a&&s.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const s=this.instances.get(r);return s&&e(s,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:gw(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gw(t){return t===$n?void 0:t}function bw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const yw={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},ww=ae.INFO,kw={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},xw=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=kw[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uc{constructor(e){this.name=e,this._logLevel=ww,this._logHandler=xw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const _w=(t,e)=>e.some(n=>t instanceof n);let jd,$d;function Ew(){return jd||(jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Iw(){return $d||($d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gm=new WeakMap,Cl=new WeakMap,qm=new WeakMap,Ha=new WeakMap,jc=new WeakMap;function Tw(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(kn(t.result)),r()},s=()=>{i(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Gm.set(n,t)}).catch(()=>{}),jc.set(e,t),e}function Aw(t){if(Cl.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),r()},s=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Cl.set(t,e)}let Ol={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sw(t){Ol=t(Ol)}function Cw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ga(this),e,...n);return qm.set(i,e.sort?e.sort():[e]),kn(i)}:Iw().includes(t)?function(...e){return t.apply(Ga(this),e),kn(Gm.get(this))}:function(...e){return kn(t.apply(Ga(this),e))}}function Ow(t){return typeof t=="function"?Cw(t):(t instanceof IDBTransaction&&Aw(t),_w(t,Ew())?new Proxy(t,Ol):t)}function kn(t){if(t instanceof IDBRequest)return Tw(t);if(Ha.has(t))return Ha.get(t);const e=Ow(t);return e!==t&&(Ha.set(t,e),jc.set(e,t)),e}const Ga=t=>jc.get(t);function Rw(t,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(t,e),a=kn(s);return i&&s.addEventListener("upgradeneeded",l=>{i(kn(s.result),l.oldVersion,l.newVersion,kn(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Nw=["get","getKey","getAll","getAllKeys","count"],Pw=["put","add","delete","clear"],qa=new Map;function Vd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qa.get(e))return qa.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Pw.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Nw.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return qa.set(e,o),o}Sw(t=>({...t,get:(e,n,i)=>Vd(e,n)||t.get(e,n,i),has:(e,n)=>!!Vd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mw(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Mw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rl="@firebase/app",Bd="0.7.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new Uc("@firebase/app"),Lw="@firebase/app-compat",Fw="@firebase/analytics-compat",zw="@firebase/analytics",Uw="@firebase/app-check-compat",jw="@firebase/app-check",$w="@firebase/auth",Vw="@firebase/auth-compat",Bw="@firebase/database",Hw="@firebase/database-compat",Gw="@firebase/functions",qw="@firebase/functions-compat",Ww="@firebase/installations",Kw="@firebase/installations-compat",Yw="@firebase/messaging",Xw="@firebase/messaging-compat",Qw="@firebase/performance",Jw="@firebase/performance-compat",Zw="@firebase/remote-config",e1="@firebase/remote-config-compat",t1="@firebase/storage",n1="@firebase/storage-compat",i1="@firebase/firestore",r1="@firebase/firestore-compat",o1="firebase",s1="9.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="[DEFAULT]",a1={[Rl]:"fire-core",[Lw]:"fire-core-compat",[zw]:"fire-analytics",[Fw]:"fire-analytics-compat",[jw]:"fire-app-check",[Uw]:"fire-app-check-compat",[$w]:"fire-auth",[Vw]:"fire-auth-compat",[Bw]:"fire-rtdb",[Hw]:"fire-rtdb-compat",[Gw]:"fire-fn",[qw]:"fire-fn-compat",[Ww]:"fire-iid",[Kw]:"fire-iid-compat",[Yw]:"fire-fcm",[Xw]:"fire-fcm-compat",[Qw]:"fire-perf",[Jw]:"fire-perf-compat",[Zw]:"fire-rc",[e1]:"fire-rc-compat",[t1]:"fire-gcs",[n1]:"fire-gcs-compat",[i1]:"fire-fst",[r1]:"fire-fst-compat","fire-js":"fire-js",[o1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Map,Nl=new Map;function l1(t,e){try{t.container.addComponent(e)}catch(n){$c.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zi(t){const e=t.name;if(Nl.has(e))return $c.debug(`There were multiple attempts to register component ${e}.`),!1;Nl.set(e,t);for(const n of ms.values())l1(n,t);return!0}function Vc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Zn=new oo("app","Firebase",c1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=s1;function d1(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Wm,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Zn.create("bad-app-name",{appName:String(i)});const r=ms.get(i);if(r){if(hs(t,r.options)&&hs(n,r.config))return r;throw Zn.create("duplicate-app",{appName:i})}const o=new vw(i);for(const a of Nl.values())o.addComponent(a);const s=new u1(t,n,o);return ms.set(i,s),s}function Km(t=Wm){const e=ms.get(t);if(!e)throw Zn.create("no-app",{appName:t});return e}function xn(t,e,n){var i;let r=(i=a1[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${r}" with version "${e}":`];o&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$c.warn(a.join(" "));return}zi(new Jn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1="firebase-heartbeat-database",h1=1,Ur="firebase-heartbeat-store";let Wa=null;function Ym(){return Wa||(Wa=Rw(f1,h1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ur)}}}).catch(t=>{throw Zn.create("storage-open",{originalErrorMessage:t.message})})),Wa}async function m1(t){var e;try{return(await Ym()).transaction(Ur).objectStore(Ur).get(Xm(t))}catch(n){throw Zn.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Hd(t,e){var n;try{const r=(await Ym()).transaction(Ur,"readwrite");return await r.objectStore(Ur).put(e,Xm(t)),r.done}catch(i){throw Zn.create("storage-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message})}}function Xm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=1024,g1=30*24*60*60*1e3;class b1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new y1(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=g1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gd(),{heartbeatsToSend:n,unsentEntries:i}=v1(this._heartbeatsCache.heartbeats),r=jm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Gd(){return new Date().toISOString().substring(0,10)}function v1(t,e=p1){const n=[];let i=t.slice();for(const r of t){const o=n.find(s=>s.agent===r.agent);if(o){if(o.dates.push(r.date),qd(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),qd(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class y1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sw()?aw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await m1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function qd(t){return jm(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t){zi(new Jn("platform-logger",e=>new Dw(e),"PRIVATE")),zi(new Jn("heartbeat",e=>new b1(e),"PRIVATE")),xn(Rl,Bd,t),xn(Rl,Bd,"esm2017"),xn("fire-js","")}w1("");var k1="firebase",x1="9.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(k1,x1,"app");function Bc(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Qm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _1=Qm,Jm=new oo("auth","Firebase",Qm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=new Uc("@firebase/auth");function Yo(t,...e){Wd.logLevel<=ae.ERROR&&Wd.error(`Auth (${ao}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw Hc(t,...e)}function zt(t,...e){return Hc(t,...e)}function Zm(t,e,n){const i=Object.assign(Object.assign({},_1()),{[e]:n});return new oo("auth","Firebase",i).create(e,{appName:t.name})}function E1(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&$t(t,"argument-error"),Zm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hc(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Jm.create(t,...e)}function K(t,e,...n){if(!t)throw Hc(e,...n)}function Kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yo(e),new Error(e)}function Jt(t,e){t||Kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=new Map;function Yt(t){Jt(t instanceof Function,"Expected a class definition");let e=Kd.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kd.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t,e){const n=Vc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),o=n.getOptions();if(hs(o,e!=null?e:{}))return r;$t(r,"already-initialized")}return n.initialize({options:e})}function T1(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function A1(){return Yd()==="http:"||Yd()==="https:"}function Yd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(A1()||Vm()||"connection"in navigator)?navigator.onLine:!0}function C1(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=$m()||Bm()}get(){return S1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=new lo(3e4,6e4);function N1(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function na(t,e,n,i,r={}){return tp(t,r,async()=>{let o={},s={};i&&(e==="GET"?s=i:o={body:JSON.stringify(i)});const a=so(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ep.fetch()(np(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function tp(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},O1),e);try{const r=new D1(t),o=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Oo(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oo(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Oo(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Oo(t,"user-disabled",s);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Zm(t,u,c);$t(t,u)}}catch(r){if(r instanceof li)throw r;$t(t,"network-request-failed")}}async function P1(t,e,n,i,r={}){const o=await na(t,e,n,i,r);return"mfaPendingCredential"in o&&$t(t,"multi-factor-auth-required",{_serverResponse:o}),o}function np(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Gc(t.config,r):`${t.config.apiScheme}://${r}`}class D1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(zt(this.auth,"network-request-failed")),R1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oo(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=zt(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(t,e){return na(t,"POST","/v1/accounts:delete",e)}async function L1(t,e){return na(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function F1(t,e=!1){const n=et(t),i=await n.getIdToken(e),r=qc(i);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:vr(Ka(r.auth_time)),issuedAtTime:vr(Ka(r.iat)),expirationTime:vr(Ka(r.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ka(t){return Number(t)*1e3}function qc(t){var e;const[n,i,r]=t.split(".");if(n===void 0||i===void 0||r===void 0)return Yo("JWT malformed, contained fewer than 3 sections"),null;try{const o=nw(i);return o?JSON.parse(o):(Yo("Failed to decode base64 JWT payload"),null)}catch(o){return Yo("Caught error parsing JWT payload as JSON",(e=o)===null||e===void 0?void 0:e.toString()),null}}function z1(t){const e=qc(t);return K(e,"internal-error"),K(typeof e.exp!="undefined","internal-error"),K(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof li&&U1(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function U1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vr(this.lastLoginAt),this.creationTime=vr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t){var e;const n=t.auth,i=await t.getIdToken(),r=await jr(t,L1(n,{idToken:i}));K(r==null?void 0:r.users.length,n,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?B1(o.providerUserInfo):[],a=V1(t.providerData,s),l=t.isAnonymous,c=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ip(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function $1(t){const e=et(t);await ps(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function V1(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function B1(t){return t.map(e=>{var{providerId:n}=e,i=Bc(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H1(t,e){const n=await tp(t,{},async()=>{const i=so({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,s=np(t,r,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ep.fetch()(s,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken!="undefined","internal-error"),K(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):z1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:o}=await H1(e,n);this.updateTokensAndExpiration(i,r,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:o}=n,s=new $r;return i&&(K(typeof i=="string","internal-error",{appName:e}),s.refreshToken=i),r&&(K(typeof r=="string","internal-error",{appName:e}),s.accessToken=r),o&&(K(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return Kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,e){K(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Qn{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,o=Bc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new j1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ip(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await jr(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return F1(this,e)}reload(){return $1(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ps(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jr(this,M1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,o,s,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,m=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,g=(s=n.photoURL)!==null&&s!==void 0?s:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:U,isAnonymous:Q,providerData:se,stsTokenManager:ye}=n;K(N&&ye,e,"internal-error");const tt=$r.fromJSON(this.name,ye);K(typeof N=="string",e,"internal-error"),ln(d,e.name),ln(f,e.name),K(typeof U=="boolean",e,"internal-error"),K(typeof Q=="boolean",e,"internal-error"),ln(m,e.name),ln(g,e.name),ln(A,e.name),ln(k,e.name),ln(b,e.name),ln(y,e.name);const Te=new Qn({uid:N,auth:e,email:f,emailVerified:U,displayName:d,isAnonymous:Q,photoURL:g,phoneNumber:m,tenantId:A,stsTokenManager:tt,createdAt:b,lastLoginAt:y});return se&&Array.isArray(se)&&(Te.providerData=se.map(Ot=>Object.assign({},Ot))),k&&(Te._redirectEventId=k),Te}static async _fromIdTokenResponse(e,n,i=!1){const r=new $r;r.updateFromServerResponse(n);const o=new Qn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await ps(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rp.type="NONE";const Xd=rp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ri{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:o}=this.auth;this.fullUserKey=Xo(this.userKey,r.apiKey,o),this.fullPersistenceKey=Xo("persistence",r.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ri(Yt(Xd),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=r[0]||Yt(Xd);const s=Xo(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(s);if(u){const d=Qn._fromJSON(e,u);c!==o&&(a=d),o=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Ri(o,e,i):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new Ri(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ap(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(op(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cp(e))return"Blackberry";if(up(e))return"Webos";if(Wc(e))return"Safari";if((e.includes("chrome/")||sp(e))&&!e.includes("edge/"))return"Chrome";if(lp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function op(t=ze()){return/firefox\//i.test(t)}function Wc(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sp(t=ze()){return/crios\//i.test(t)}function ap(t=ze()){return/iemobile/i.test(t)}function lp(t=ze()){return/android/i.test(t)}function cp(t=ze()){return/blackberry/i.test(t)}function up(t=ze()){return/webos/i.test(t)}function ia(t=ze()){return/iphone|ipad|ipod/i.test(t)}function G1(t=ze()){var e;return ia(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function q1(){return Hm()&&document.documentMode===10}function dp(t=ze()){return ia(t)||lp(t)||up(t)||cp(t)||/windows phone/i.test(t)||ap(t)}function W1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t,e=[]){let n;switch(t){case"Browser":n=Qd(ze());break;case"Worker":n=`${Qd(ze())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ao}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jd(this),this.idTokenSubscription=new Jd(this),this.beforeStateQueue=new K1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Ri.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l==null?void 0:l.user)&&(r=l.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ps(e)}catch(i){if(((n=i)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?et(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oo("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ri.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return K(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function Kc(t){return et(t)}class Jd{constructor(e){this.auth=e,this.observer=null,this.addObserver=fw(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kt("not implemented")}_getIdTokenResponse(e){return Kt("not implemented")}_linkToIdToken(e,n){return Kt("not implemented")}_getReauthenticationResolver(e){return Kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t,e){return P1(t,"POST","/v1/accounts:signInWithIdp",N1(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="http://localhost";class ei extends hp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,o=Bc(n,["providerId","signInMethod"]);if(!i||!r)return null;const s=new ei(i,r);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Ni(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ni(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ni(e,n)}buildRequest(){const e={requestUri:X1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=so(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends Yc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends co{constructor(){super("facebook.com")}static credential(e){return ei._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ei._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Wt.credential(n,i)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends co{constructor(){super("github.com")}static credential(e){return ei._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends co{constructor(){super("twitter.com")}static credential(e,n){return ei._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return bn.credential(n,i)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const o=await Qn._fromIdTokenResponse(e,i,r),s=Zd(i);return new Ui({user:o,providerId:s,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Zd(i);return new Ui({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Zd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends li{constructor(e,n,i,r){var o;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,gs.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new gs(e,n,i,r)}}function mp(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?gs._fromErrorAndOperation(t,o,e,i):o})}async function Q1(t,e,n=!1){const i=await jr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ui._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(t,e,n=!1){var i;const{auth:r}=t,o="reauthenticate";try{const s=await jr(t,mp(r,o,e,t),n);K(s.idToken,r,"internal-error");const a=qc(s.idToken);K(a,r,"internal-error");const{sub:l}=a;return K(t.uid===l,r,"user-mismatch"),Ui._forOperation(t,o,s)}catch(s){throw((i=s)===null||i===void 0?void 0:i.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z1(t,e,n=!1){const i="signIn",r=await mp(t,i,e),o=await Ui._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(o.user),o}function ek(t,e,n,i){return et(t).onAuthStateChanged(e,n,i)}function tk(t){return et(t).signOut()}const bs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bs,"1"),this.storage.removeItem(bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(){const t=ze();return Wc(t)||ia(t)}const ik=1e3,rk=10;class gp extends pp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=nk()&&W1(),this.fallbackToPolling=dp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(i);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const s=this.storage.getItem(i);!n&&this.localCache[i]===s||this.notifyListeners(i,s)},o=this.storage.getItem(i);q1()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,rk):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},ik)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gp.type="LOCAL";const ok=gp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp extends pp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bp.type="SESSION";const vp=bp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new ra(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:o}=n.data,s=this.handlersMap[r];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(s).map(async c=>c(n.origin,o)),l=await sk(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ra.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const c=Xc("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);s={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(f.data.response);break;default:clearTimeout(u),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function lk(t){Ut().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(){return typeof Ut().WorkerGlobalScope!="undefined"&&typeof Ut().importScripts=="function"}async function ck(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dk(){return yp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="firebaseLocalStorageDb",fk=1,vs="firebaseLocalStorage",kp="fbase_key";class uo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oa(t,e){return t.transaction([vs],e?"readwrite":"readonly").objectStore(vs)}function hk(){const t=indexedDB.deleteDatabase(wp);return new uo(t).toPromise()}function Dl(){const t=indexedDB.open(wp,fk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(vs,{keyPath:kp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(vs)?e(i):(i.close(),await hk(),e(await Dl()))})})}async function ef(t,e,n){const i=oa(t,!0).put({[kp]:e,value:n});return new uo(i).toPromise()}async function mk(t,e){const n=oa(t,!1).get(e),i=await new uo(n).toPromise();return i===void 0?null:i.value}function tf(t,e){const n=oa(t,!0).delete(e);return new uo(n).toPromise()}const pk=800,gk=3;class xp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>gk)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ra._getInstance(dk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ck(),!this.activeServiceWorker)return;this.sender=new ak(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dl();return await ef(e,bs,"1"),await tf(e,bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>ef(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>mk(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=oa(r,!1).getAll();return new uo(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:o}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xp.type="LOCAL";const bk=xp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function yk(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const o=zt("internal-error");o.customData=r,n(o)},i.type="text/javascript",i.charset="UTF-8",vk().appendChild(i)})}function wk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new lo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t,e){return e?Yt(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc extends hp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kk(t){return Z1(t.auth,new Qc(t),t.bypassAuthState)}function xk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),J1(n,new Qc(t),t.bypassAuthState)}async function _k(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Q1(n,new Qc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n,i,r,o=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kk;case"linkViaPopup":case"linkViaRedirect":return _k;case"reauthViaPopup":case"reauthViaRedirect":return xk;default:$t(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=new lo(2e3,1e4);class ki extends Ep{constructor(e,n,i,r,o){super(e,n,r,o),this.provider=i,this.authWindow=null,this.pollId=null,ki.currentPopupAction&&ki.currentPopupAction.cancel(),ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=Xc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Ek.get())};e()}}ki.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik="pendingRedirect",Qo=new Map;class Tk extends Ep{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Qo.get(this.auth._key());if(!e){try{const i=await Ak(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Qo.set(this.auth._key(),e)}return this.bypassAuthState||Qo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ak(t,e){const n=Tp(e),i=Ip(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}async function Sk(t,e){return Ip(t)._set(Tp(e),"true")}function Ck(t,e){Qo.set(t._key(),e)}function Ip(t){return Yt(t._redirectPersistence)}function Tp(t){return Xo(Ik,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t,e,n){return Rk(t,e,n)}async function Rk(t,e,n){const i=Kc(t);E1(t,e,Yc);const r=_p(i,n);return await Sk(r,i),r._openRedirect(i,e,"signInViaRedirect")}async function Nk(t,e,n=!1){const i=Kc(t),r=_p(i,e),s=await new Tk(i,r,n).execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=10*60*1e3;class Dk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Ap(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pk&&this.cachedEventUids.clear(),this.cachedEventUids.has(nf(e))}saveEventToCache(e){this.cachedEventUids.add(nf(e)),this.lastProcessedEventTime=Date.now()}}function nf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ap({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Mk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ap(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(t,e={}){return na(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zk=/^https?/;async function Uk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Lk(t);for(const n of e)try{if(jk(n))return}catch{}$t(t,"unauthorized-domain")}function jk(t){const e=Pl(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===i}if(!zk.test(n))return!1;if(Fk.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=new lo(3e4,6e4);function rf(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Vk(t){return new Promise((e,n)=>{var i,r,o;function s(){rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rf(),n(zt(t,"network-request-failed"))},timeout:$k.get()})}if(!((r=(i=Ut().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=Ut().gapi)===null||o===void 0)&&o.load)s();else{const a=wk("iframefcb");return Ut()[a]=()=>{gapi.load?s():n(zt(t,"network-request-failed"))},yk(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Jo=null,e})}let Jo=null;function Bk(t){return Jo=Jo||Vk(t),Jo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=new lo(5e3,15e3),Gk="__/auth/iframe",qk="emulator/auth/iframe",Wk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yk(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gc(e,qk):`https://${t.config.authDomain}/${Gk}`,i={apiKey:e.apiKey,appName:t.name,v:ao},r=Kk.get(t.config.apiHost);r&&(i.eid=r);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${so(i).slice(1)}`}async function Xk(t){const e=await Bk(t),n=Ut().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:Yk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wk,dontclear:!0},i=>new Promise(async(r,o)=>{await i.restyle({setHideOnLeave:!1});const s=zt(t,"network-request-failed"),a=Ut().setTimeout(()=>{o(s)},Hk.get());function l(){Ut().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jk=500,Zk=600,ex="_blank",tx="http://localhost";class of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nx(t,e,n,i=Jk,r=Zk){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Qk),{width:i.toString(),height:r.toString(),top:o,left:s}),c=ze().toLowerCase();n&&(a=sp(c)?ex:n),op(c)&&(e=e||tx,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(G1(c)&&a!=="_self")return ix(e||"",a),new of(null);const d=window.open(e||"",a,u);K(d,t,"popup-blocked");try{d.focus()}catch{}return new of(d)}function ix(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="__/auth/handler",ox="emulator/auth/handler";function sf(t,e,n,i,r,o){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ao,eventId:r};if(e instanceof Yc){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",dw(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(o||{}))s[l]=c}if(e instanceof co){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(s.scopes=l.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${sx(t)}?${so(a).slice(1)}`}function sx({config:t}){return t.emulator?Gc(t,ox):`https://${t.authDomain}/${rx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="webStorageSupport";class ax{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vp,this._completeRedirectFn=Nk,this._overrideRedirectResult=Ck}async _openPopup(e,n,i,r){var o;Jt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=sf(e,n,i,Pl(),r);return nx(e,s,Xc())}async _openRedirect(e,n,i,r){return await this._originValidation(e),lk(sf(e,n,i,Pl(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:o}=this.eventManagers[n];return r?Promise.resolve(r):(Jt(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Xk(e),i=new Dk(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ya,{type:Ya},r=>{var o;const s=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[Ya];s!==void 0&&n(!!s),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Uk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dp()||Wc()||ia()}}const lx=ax;var af="@firebase/auth",lf="0.20.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function dx(t){zi(new Jn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=i.options;return((a,l)=>{K(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),K(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const c={apiKey:o,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fp(t)},u=new Y1(a,l,c);return T1(u,n),u})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),zi(new Jn("auth-internal",e=>{const n=Kc(e.getProvider("auth").getImmediate());return(i=>new cx(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(af,lf,ux(t)),xn(af,lf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(t=Km()){const e=Vc(t,"auth");return e.isInitialized()?e.getImmediate():I1(t,{popupRedirectResolver:lx,persistence:[bk,ok,vp]})}dx("Browser");var hx=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},M,Jc=Jc||{},q=hx||self;function ys(){}function Ml(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function mx(t){return Object.prototype.hasOwnProperty.call(t,Xa)&&t[Xa]||(t[Xa]=++px)}var Xa="closure_uid_"+(1e9*Math.random()>>>0),px=0;function gx(t,e,n){return t.call.apply(t.bind,arguments)}function bx(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function $e(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$e=gx:$e=bx,$e.apply(null,arguments)}function Ro(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,r,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return e.prototype[r].apply(i,s)}}function Mn(){this.s=this.s,this.o=this.o}var vx=0;Mn.prototype.s=!1;Mn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),vx!=0)&&mx(this)};Mn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Sp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Cp=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r=typeof t=="string"?t.split(""):t;for(let o=0;o<i;o++)o in r&&e.call(n,r[o],o,t)};function yx(t){e:{var e=u_;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function cf(t){return Array.prototype.concat.apply([],arguments)}function Zc(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function ws(t){return/^[\s\xa0]*$/.test(t)}var uf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ke(t,e){return t.indexOf(e)!=-1}function Qa(t,e){return t<e?-1:t>e?1:0}var Ye;e:{var df=q.navigator;if(df){var ff=df.userAgent;if(ff){Ye=ff;break e}}Ye=""}function eu(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Op(t){const e={};for(const n in t)e[n]=t[n];return e}var hf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rp(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let o=0;o<hf.length;o++)n=hf[o],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function tu(t){return tu[" "](t),t}tu[" "]=ys;function wx(t){var e=_x;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var kx=Ke(Ye,"Opera"),ji=Ke(Ye,"Trident")||Ke(Ye,"MSIE"),Np=Ke(Ye,"Edge"),Ll=Np||ji,Pp=Ke(Ye,"Gecko")&&!(Ke(Ye.toLowerCase(),"webkit")&&!Ke(Ye,"Edge"))&&!(Ke(Ye,"Trident")||Ke(Ye,"MSIE"))&&!Ke(Ye,"Edge"),xx=Ke(Ye.toLowerCase(),"webkit")&&!Ke(Ye,"Edge");function Dp(){var t=q.document;return t?t.documentMode:void 0}var ks;e:{var Ja="",Za=function(){var t=Ye;if(Pp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Np)return/Edge\/([\d\.]+)/.exec(t);if(ji)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(xx)return/WebKit\/(\S+)/.exec(t);if(kx)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Za&&(Ja=Za?Za[1]:""),ji){var el=Dp();if(el!=null&&el>parseFloat(Ja)){ks=String(el);break e}}ks=Ja}var _x={};function Ex(){return wx(function(){let t=0;const e=uf(String(ks)).split("."),n=uf("9").split("."),i=Math.max(e.length,n.length);for(let s=0;t==0&&s<i;s++){var r=e[s]||"",o=n[s]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],r[0].length==0&&o[0].length==0)break;t=Qa(r[1].length==0?0:parseInt(r[1],10),o[1].length==0?0:parseInt(o[1],10))||Qa(r[2].length==0,o[2].length==0)||Qa(r[2],o[2]),r=r[3],o=o[3]}while(t==0)}return 0<=t})}var Fl;if(q.document&&ji){var mf=Dp();Fl=mf||parseInt(ks,10)||void 0}else Fl=void 0;var Ix=Fl,Tx=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",ys,e),q.removeEventListener("test",ys,e)}catch{}return t}();function qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};function Vr(t,e){if(qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Pp){e:{try{tu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ax[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Vr.Z.h.call(this)}}Be(Vr,qe);var Ax={2:"touch",3:"pen",4:"mouse"};Vr.prototype.h=function(){Vr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ho="closure_listenable_"+(1e6*Math.random()|0),Sx=0;function Cx(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++Sx,this.ca=this.fa=!1}function sa(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function aa(t){this.src=t,this.g={},this.h=0}aa.prototype.add=function(t,e,n,i,r){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=Ul(t,e,i,r);return-1<s?(e=t[s],n||(e.fa=!1)):(e=new Cx(e,this.src,o,!!i,r),e.fa=n,t.push(e)),e};function zl(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=Sp(i,e),o;(o=0<=r)&&Array.prototype.splice.call(i,r,1),o&&(sa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ul(t,e,n,i){for(var r=0;r<t.length;++r){var o=t[r];if(!o.ca&&o.listener==e&&o.capture==!!n&&o.ia==i)return r}return-1}var nu="closure_lm_"+(1e6*Math.random()|0),tl={};function Mp(t,e,n,i,r){if(i&&i.once)return Fp(t,e,n,i,r);if(Array.isArray(e)){for(var o=0;o<e.length;o++)Mp(t,e[o],n,i,r);return null}return n=ou(n),t&&t[ho]?t.N(e,n,fo(i)?!!i.capture:!!i,r):Lp(t,e,n,!1,i,r)}function Lp(t,e,n,i,r,o){if(!e)throw Error("Invalid event type");var s=fo(r)?!!r.capture:!!r,a=ru(t);if(a||(t[nu]=a=new aa(t)),n=a.add(e,n,i,s,o),n.proxy)return n;if(i=Ox(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Tx||(r=s),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Up(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ox(){function t(n){return e.call(t.src,t.listener,n)}var e=Rx;return t}function Fp(t,e,n,i,r){if(Array.isArray(e)){for(var o=0;o<e.length;o++)Fp(t,e[o],n,i,r);return null}return n=ou(n),t&&t[ho]?t.O(e,n,fo(i)?!!i.capture:!!i,r):Lp(t,e,n,!0,i,r)}function zp(t,e,n,i,r){if(Array.isArray(e))for(var o=0;o<e.length;o++)zp(t,e[o],n,i,r);else i=fo(i)?!!i.capture:!!i,n=ou(n),t&&t[ho]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=Ul(o,n,i,r),-1<n&&(sa(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete t.g[e],t.h--)))):t&&(t=ru(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ul(e,n,i,r)),(n=-1<t?e[t]:null)&&iu(n))}function iu(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ho])zl(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Up(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=ru(e))?(zl(n,t),n.h==0&&(n.src=null,e[nu]=null)):sa(t)}}}function Up(t){return t in tl?tl[t]:tl[t]="on"+t}function Rx(t,e){if(t.ca)t=!0;else{e=new Vr(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&iu(t),t=n.call(i,e)}return t}function ru(t){return t=t[nu],t instanceof aa?t:null}var nl="__closure_events_fn_"+(1e9*Math.random()>>>0);function ou(t){return typeof t=="function"?t:(t[nl]||(t[nl]=function(e){return t.handleEvent(e)}),t[nl])}function Ue(){Mn.call(this),this.i=new aa(this),this.P=this,this.I=null}Be(Ue,Mn);Ue.prototype[ho]=!0;Ue.prototype.removeEventListener=function(t,e,n,i){zp(this,t,e,n,i)};function Ve(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new qe(e,t);else if(e instanceof qe)e.target=e.target||t;else{var r=e;e=new qe(i,t),Rp(e,r)}if(r=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];r=No(s,i,!0,e)&&r}if(s=e.g=t,r=No(s,i,!0,e)&&r,r=No(s,i,!1,e)&&r,n)for(o=0;o<n.length;o++)s=e.g=n[o],r=No(s,i,!1,e)&&r}Ue.prototype.M=function(){if(Ue.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)sa(n[i]);delete t.g[e],t.h--}}this.I=null};Ue.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ue.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function No(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,l=s.ia||s.src;s.fa&&zl(t.i,s),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var su=q.JSON.stringify;function Nx(){var t=$p;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Px{constructor(){this.h=this.g=null}add(e,n){const i=jp.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var jp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Dx,t=>t.reset());class Dx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Mx(t){q.setTimeout(()=>{throw t},0)}function au(t,e){jl||Lx(),$l||(jl(),$l=!0),$p.add(t,e)}var jl;function Lx(){var t=q.Promise.resolve(void 0);jl=function(){t.then(Fx)}}var $l=!1,$p=new Px;function Fx(){for(var t;t=Nx();){try{t.h.call(t.g)}catch(n){Mx(n)}var e=jp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$l=!1}function la(t,e){Ue.call(this),this.h=t||1,this.g=e||q,this.j=$e(this.kb,this),this.l=Date.now()}Be(la,Ue);M=la.prototype;M.da=!1;M.S=null;M.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ve(this,"tick"),this.da&&(lu(this),this.start()))}};M.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lu(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}M.M=function(){la.Z.M.call(this),lu(this),delete this.g};function cu(t,e,n){if(typeof t=="function")n&&(t=$e(t,n));else if(t&&typeof t.handleEvent=="function")t=$e(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function Vp(t){t.g=cu(()=>{t.g=null,t.i&&(t.i=!1,Vp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zx extends Mn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Vp(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(t){Mn.call(this),this.h=t,this.g={}}Be(Br,Mn);var pf=[];function Bp(t,e,n,i){Array.isArray(n)||(n&&(pf[0]=n.toString()),n=pf);for(var r=0;r<n.length;r++){var o=Mp(e,n[r],i||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Hp(t){eu(t.g,function(e,n){this.g.hasOwnProperty(n)&&iu(e)},t),t.g={}}Br.prototype.M=function(){Br.Z.M.call(this),Hp(this)};Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ca(){this.g=!0}ca.prototype.Aa=function(){this.g=!1};function Ux(t,e,n,i,r,o){t.info(function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");s=2<=d.length&&d[1]=="type"?s+(u+"="+c+"&"):s+(u+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+s})}function jx(t,e,n,i,r,o,s){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+o+" "+s})}function xi(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Vx(t,n)+(i?" "+i:"")})}function $x(t,e){t.info(function(){return"TIMEOUT: "+e})}ca.prototype.info=function(){};function Vx(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var o=r[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<r.length;s++)r[s]=""}}}}return su(n)}catch{return e}}var ci={},gf=null;function ua(){return gf=gf||new Ue}ci.Ma="serverreachability";function Gp(t){qe.call(this,ci.Ma,t)}Be(Gp,qe);function Hr(t){const e=ua();Ve(e,new Gp(e))}ci.STAT_EVENT="statevent";function qp(t,e){qe.call(this,ci.STAT_EVENT,t),this.stat=e}Be(qp,qe);function Qe(t){const e=ua();Ve(e,new qp(e,t))}ci.Na="timingevent";function Wp(t,e){qe.call(this,ci.Na,t),this.size=e}Be(Wp,qe);function mo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var da={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Kp={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function uu(){}uu.prototype.h=null;function bf(t){return t.h||(t.h=t.i())}function Yp(){}var po={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function du(){qe.call(this,"d")}Be(du,qe);function fu(){qe.call(this,"c")}Be(fu,qe);var Vl;function fa(){}Be(fa,uu);fa.prototype.g=function(){return new XMLHttpRequest};fa.prototype.i=function(){return{}};Vl=new fa;function go(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Br(this),this.P=Bx,t=Ll?125:void 0,this.W=new la(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Xp}function Xp(){this.i=null,this.g="",this.h=!1}var Bx=45e3,Bl={},xs={};M=go.prototype;M.setTimeout=function(t){this.P=t};function Hl(t,e,n){t.K=1,t.v=ma(Zt(e)),t.s=n,t.U=!0,Qp(t,null)}function Qp(t,e){t.F=Date.now(),bo(t),t.A=Zt(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),rg(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Xp,t.g=Eg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new zx($e(t.Ia,t,t.g),t.O)),Bp(t.V,t.g,"readystatechange",t.gb),e=t.H?Op(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Hr(),Ux(t.j,t.u,t.A,t.m,t.X,t.s)}M.gb=function(t){t=t.target;const e=this.L;e&&Xt(t)==3?e.l():this.Ia(t)};M.Ia=function(t){try{if(t==this.g)e:{const u=Xt(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>u)&&(u!=3||Ll||this.g&&(this.h.h||this.g.ga()||kf(this.g)))){this.I||u!=4||e==7||(e==8||0>=d?Hr(3):Hr(2)),ha(this);var n=this.g.ba();this.N=n;t:if(Jp(this)){var i=kf(this.g);t="";var r=i.length,o=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Gn(this),yr(this);var s="";break t}this.h.i=new q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:o&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ga();if(this.i=n==200,jx(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ws(a)){var c=a;break t}}c=null}if(n=c)xi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Gl(this,n);else{this.i=!1,this.o=3,Qe(12),Gn(this),yr(this);break e}}this.U?(Zp(this,u,s),Ll&&this.i&&u==3&&(Bp(this.V,this.W,"tick",this.fb),this.W.start())):(xi(this.j,this.m,s,null),Gl(this,s)),u==4&&Gn(this),this.i&&!this.I&&(u==4?wg(this.l,this):(this.i=!1,bo(this)))}else n==400&&0<s.indexOf("Unknown SID")?(this.o=3,Qe(12)):(this.o=0,Qe(13)),Gn(this),yr(this)}}}catch{}finally{}};function Jp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Zp(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=Hx(t,n),r==xs){e==4&&(t.o=4,Qe(14),i=!1),xi(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Bl){t.o=4,Qe(15),xi(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else xi(t.j,t.m,r,null),Gl(t,r);Jp(t)&&r!=xs&&r!=Bl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Qe(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ku(e),e.L=!0,Qe(11))):(xi(t.j,t.m,n,"[Invalid Chunked Response]"),Gn(t),yr(t))}M.fb=function(){if(this.g){var t=Xt(this.g),e=this.g.ga();this.C<e.length&&(ha(this),Zp(this,t,e),this.i&&t!=4&&bo(this))}};function Hx(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?xs:(n=Number(e.substring(n,i)),isNaN(n)?Bl:(i+=1,i+n>e.length?xs:(e=e.substr(i,n),t.C=i+n,e)))}M.cancel=function(){this.I=!0,Gn(this)};function bo(t){t.Y=Date.now()+t.P,eg(t,t.P)}function eg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=mo($e(t.eb,t),e)}function ha(t){t.B&&(q.clearTimeout(t.B),t.B=null)}M.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?($x(this.j,this.A),this.K!=2&&(Hr(),Qe(17)),Gn(this),this.o=2,yr(this)):eg(this,this.Y-t)};function yr(t){t.l.G==0||t.I||wg(t.l,t)}function Gn(t){ha(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,lu(t.W),Hp(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Gl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ql(n.i,t))){if(n.I=t.N,!t.J&&ql(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ts(n),ba(n);else break e;wu(n),Qe(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=mo($e(n.ab,n),6e3));if(1>=ag(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else qn(n,11)}else if((t.J||n.g==t)&&Ts(n),!ws(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const d=c[4];d!=null&&(n.za=d,n.h.info("SVER="+n.za));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const m=t.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var o=i.i;!o.g&&(Ke(g,"spdy")||Ke(g,"quic")||Ke(g,"h2"))&&(o.j=o.l,o.g=new Set,o.h&&(pu(o,o.h),o.h=null))}if(i.D){const A=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(i.sa=A,xe(i.F,i.D,A))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var s=t;if(i.oa=_g(i,i.H?i.la:null,i.W),s.J){lg(i.i,s);var a=s,l=i.K;l&&a.setTimeout(l),a.B&&(ha(a),bo(a)),i.g=s}else vg(i);0<n.l.length&&va(n)}else c[0]!="stop"&&c[0]!="close"||qn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?qn(n,7):yu(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}Hr(4)}catch{}}function Gx(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Ml(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function hu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ml(t)||typeof t=="string")Cp(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Ml(t)||typeof t=="string"){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=Gx(t),r=i.length;for(var o=0;o<r;o++)e.call(void 0,i[o],n&&n[o],t)}}function Qi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Qi)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}M=Qi.prototype;M.R=function(){mu(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};M.T=function(){return mu(this),this.g.concat()};function mu(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];ti(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],ti(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}M.get=function(t,e){return ti(this.h,t)?this.h[t]:e};M.set=function(t,e){ti(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};M.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],o=this.get(r);t.call(e,o,r,this)}};function ti(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var tg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var o=t[n].substring(0,i);r=t[n].substring(i+1)}else o=t[n];e(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ni(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ni){this.g=e!==void 0?e:t.g,_s(this,t.j),this.s=t.s,Es(this,t.i),Is(this,t.m),this.l=t.l,e=t.h;var n=new Gr;n.i=e.i,e.g&&(n.g=new Qi(e.g),n.h=e.h),vf(this,n),this.o=t.o}else t&&(n=String(t).match(tg))?(this.g=!!e,_s(this,n[1]||"",!0),this.s=wr(n[2]||""),Es(this,n[3]||"",!0),Is(this,n[4]),this.l=wr(n[5]||"",!0),vf(this,n[6]||"",!0),this.o=wr(n[7]||"")):(this.g=!!e,this.h=new Gr(null,this.g))}ni.prototype.toString=function(){var t=[],e=this.j;e&&t.push(fr(e,yf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(fr(e,yf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(fr(n,n.charAt(0)=="/"?Qx:Xx,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",fr(n,Zx)),t.join("")};function Zt(t){return new ni(t)}function _s(t,e,n){t.j=n?wr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Es(t,e,n){t.i=n?wr(e,!0):e}function Is(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vf(t,e,n){e instanceof Gr?(t.h=e,e_(t.h,t.g)):(n||(e=fr(e,Jx)),t.h=new Gr(e,t.g))}function xe(t,e,n){t.h.set(e,n)}function ma(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Wx(t){return t instanceof ni?Zt(t):new ni(t,void 0)}function Kx(t,e,n,i){var r=new ni(null,void 0);return t&&_s(r,t),e&&Es(r,e),n&&Is(r,n),i&&(r.l=i),r}function wr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function fr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Yx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Yx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var yf=/[#\/\?@]/g,Xx=/[#\?:]/g,Qx=/[#\?]/g,Jx=/[#\?@]/g,Zx=/#/g;function Gr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ln(t){t.g||(t.g=new Qi,t.h=0,t.i&&qx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Gr.prototype;M.add=function(t,e){Ln(this),this.i=null,t=Ji(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ng(t,e){Ln(t),e=Ji(t,e),ti(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ti(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&mu(t)))}function ig(t,e){return Ln(t),e=Ji(t,e),ti(t.g.h,e)}M.forEach=function(t,e){Ln(this),this.g.forEach(function(n,i){Cp(n,function(r){t.call(e,r,i,this)},this)},this)};M.T=function(){Ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],o=0;o<r.length;o++)n.push(e[i]);return n};M.R=function(t){Ln(this);var e=[];if(typeof t=="string")ig(this,t)&&(e=cf(e,this.g.get(Ji(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=cf(e,t[n])}return e};M.set=function(t,e){return Ln(this),this.i=null,t=Ji(this,t),ig(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function rg(t,e,n){ng(t,e),0<n.length&&(t.i=null,t.g.set(Ji(t,e),Zc(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var o=0;o<i.length;o++){var s=r;i[o]!==""&&(s+="="+encodeURIComponent(String(i[o]))),t.push(s)}}return this.i=t.join("&")};function Ji(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function e_(t,e){e&&!t.j&&(Ln(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(ng(this,i),rg(this,r,n))},t)),t.j=e}var t_=class{constructor(t,e){this.h=t,this.g=e}};function og(t){this.l=t||n_,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ea&&q.g.Ea()&&q.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var n_=10;function sg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ag(t){return t.h?1:t.g?t.g.size:0}function ql(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function pu(t,e){t.g?t.g.add(e):t.h=e}function lg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}og.prototype.cancel=function(){if(this.i=cg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function cg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Zc(t.i)}function gu(){}gu.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};gu.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function i_(){this.g=new gu}function r_(t,e,n){const i=n||"";try{hu(t,function(r,o){let s=r;fo(r)&&(s=su(r)),e.push(i+o+"="+encodeURIComponent(s))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function o_(t,e){const n=new ca;if(q.Image){const i=new Image;i.onload=Ro(Po,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Ro(Po,n,i,"TestLoadImage: error",!1,e),i.onabort=Ro(Po,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ro(Po,n,i,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Po(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function vo(t){this.l=t.$b||null,this.j=t.ib||!1}Be(vo,uu);vo.prototype.g=function(){return new pa(this.l,this.j)};vo.prototype.i=function(t){return function(){return t}}({});function pa(t,e){Ue.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=bu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(pa,Ue);var bu=0;M=pa.prototype;M.open=function(t,e){if(this.readyState!=bu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qr(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yo(this)),this.readyState=bu};M.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qr(this)),this.g&&(this.readyState=3,qr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof q.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ug(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function ug(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}M.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?yo(this):qr(this),this.readyState==3&&ug(this)}};M.Ua=function(t){this.g&&(this.response=this.responseText=t,yo(this))};M.Ta=function(t){this.g&&(this.response=t,yo(this))};M.ha=function(){this.g&&yo(this)};function yo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qr(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function qr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(pa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var s_=q.JSON.parse;function Ne(t){Ue.call(this),this.headers=new Qi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=dg,this.K=this.L=!1}Be(Ne,Ue);var dg="",a_=/^https?$/i,l_=["POST","PUT"];M=Ne.prototype;M.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Vl.g(),this.C=this.u?bf(this.u):bf(Vl),this.g.onreadystatechange=$e(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){wf(this,o);return}t=n||"";const r=new Qi(this.headers);i&&hu(i,function(o,s){r.set(s,o)}),i=yx(r.T()),n=q.FormData&&t instanceof q.FormData,!(0<=Sp(l_,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(o,s){this.g.setRequestHeader(s,o)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{mg(this),0<this.B&&((this.K=c_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$e(this.pa,this)):this.A=cu(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){wf(this,o)}};function c_(t){return ji&&Ex()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function u_(t){return t.toLowerCase()=="content-type"}M.pa=function(){typeof Jc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ve(this,"timeout"),this.abort(8))};function wf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fg(t),ga(t)}function fg(t){t.D||(t.D=!0,Ve(t,"complete"),Ve(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ve(this,"complete"),Ve(this,"abort"),ga(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ga(this,!0)),Ne.Z.M.call(this)};M.Fa=function(){this.s||(this.F||this.v||this.l?hg(this):this.cb())};M.cb=function(){hg(this)};function hg(t){if(t.h&&typeof Jc!="undefined"&&(!t.C[1]||Xt(t)!=4||t.ba()!=2)){if(t.v&&Xt(t)==4)cu(t.Fa,0,t);else if(Ve(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(tg)[1]||null;if(!r&&q.self&&q.self.location){var o=q.self.location.protocol;r=o.substr(0,o.length-1)}i=!a_.test(r?r.toLowerCase():"")}n=i}if(n)Ve(t,"complete"),Ve(t,"success");else{t.m=6;try{var s=2<Xt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.ba()+"]",fg(t)}}finally{ga(t)}}}}function ga(t,e){if(t.g){mg(t);const n=t.g,i=t.C[0]?ys:null;t.g=null,t.C=null,e||Ve(t,"ready");try{n.onreadystatechange=i}catch{}}}function mg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function Xt(t){return t.g?t.g.readyState:0}M.ba=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};M.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),s_(e)}};function kf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case dg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Da=function(){return this.m};M.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function d_(t){let e="";return eu(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function vu(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=d_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function sr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function pg(t){this.za=0,this.l=[],this.h=new ca,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=sr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=sr("baseRetryDelayMs",5e3,t),this.$a=sr("retryDelaySeedMs",1e4,t),this.Ya=sr("forwardChannelMaxRetries",2,t),this.ra=sr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new og(t&&t.concurrentRequestLimit),this.Ca=new i_,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}M=pg.prototype;M.ma=8;M.G=1;function yu(t){if(gg(t),t.G==3){var e=t.V++,n=Zt(t.F);xe(n,"SID",t.J),xe(n,"RID",e),xe(n,"TYPE","terminate"),wo(t,n),e=new go(t,t.h,e,void 0),e.K=2,e.v=ma(Zt(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=Eg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),bo(e)}xg(t)}M.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ba(t){t.g&&(ku(t),t.g.cancel(),t.g=null)}function gg(t){ba(t),t.u&&(q.clearTimeout(t.u),t.u=null),Ts(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function il(t,e){t.l.push(new t_(t.Za++,e)),t.G==3&&va(t)}function va(t){sg(t.i)||t.m||(t.m=!0,au(t.Ha,t),t.C=0)}function f_(t,e){return ag(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=mo($e(t.Ha,t,e),kg(t,t.C)),t.C++,!0)}M.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new go(this,this.h,t,void 0);let o=this.s;if(this.P&&(o?(o=Op(o),Rp(o,this.P)):o=this.P),this.o===null&&(r.H=o),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=bg(this,r,e),n=Zt(this.F),xe(n,"RID",t),xe(n,"CVER",22),this.D&&xe(n,"X-HTTP-Session-Id",this.D),wo(this,n),this.o&&o&&vu(n,this.o,o),pu(this.i,r),this.Ra&&xe(n,"TYPE","init"),this.ja?(xe(n,"$req",e),xe(n,"SID","null"),r.$=!0,Hl(r,n,null)):Hl(r,n,e),this.G=2}}else this.G==3&&(t?xf(this,t):this.l.length==0||sg(this.i)||xf(this))};function xf(t,e){var n;e?n=e.m:n=t.V++;const i=Zt(t.F);xe(i,"SID",t.J),xe(i,"RID",n),xe(i,"AID",t.U),wo(t,i),t.o&&t.s&&vu(i,t.o,t.s),n=new go(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=bg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),pu(t.i,n),Hl(n,i,e)}function wo(t,e){t.j&&hu({},function(n,i){xe(e,i,n)})}function bg(t,e,n){n=Math.min(t.l.length,n);var i=t.j?$e(t.j.Oa,t.j,t):null;e:{var r=t.l;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=r[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=o,0>c)o=Math.max(0,r[l].h-100),a=!1;else try{r_(u,s,"req"+c+"_")}catch{i&&i(u)}}if(a){i=s.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function vg(t){t.g||t.u||(t.Y=1,au(t.Ga,t),t.A=0)}function wu(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=mo($e(t.Ga,t),kg(t,t.A)),t.A++,!0)}M.Ga=function(){if(this.u=null,yg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=mo($e(this.bb,this),t)}};M.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Qe(10),ba(this),yg(this))};function ku(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function yg(t){t.g=new go(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Zt(t.oa);xe(e,"RID","rpc"),xe(e,"SID",t.J),xe(e,"CI",t.N?"0":"1"),xe(e,"AID",t.U),wo(t,e),xe(e,"TYPE","xmlhttp"),t.o&&t.s&&vu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ma(Zt(e)),n.s=null,n.U=!0,Qp(n,t)}M.ab=function(){this.v!=null&&(this.v=null,ba(this),wu(this),Qe(19))};function Ts(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function wg(t,e){var n=null;if(t.g==e){Ts(t),ku(t),t.g=null;var i=2}else if(ql(t.i,e))n=e.D,lg(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=ua(),Ve(i,new Wp(i,n)),va(t)}else vg(t);else if(r=e.o,r==3||r==0&&0<t.I||!(i==1&&f_(t,e)||i==2&&wu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:qn(t,5);break;case 4:qn(t,10);break;case 3:qn(t,6);break;default:qn(t,2)}}}function kg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function qn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=$e(t.jb,t);n||(n=new ni("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||_s(n,"https"),ma(n)),o_(n.toString(),i)}else Qe(2);t.G=0,t.j&&t.j.va(e),xg(t),gg(t)}M.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Qe(2)):(this.h.info("Failed to ping google.com"),Qe(1))};function xg(t){t.G=0,t.I=-1,t.j&&((cg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Zc(t.l),t.l.length=0),t.j.ua())}function _g(t,e,n){let i=Wx(n);if(i.i!="")e&&Es(i,e+"."+i.i),Is(i,i.m);else{const r=q.location;i=Kx(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&eu(t.aa,function(r,o){xe(i,o,r)}),e=t.D,n=t.sa,e&&n&&xe(i,e,n),xe(i,"VER",t.ma),wo(t,i),i}function Eg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ne(new vo({ib:!0})):new Ne(t.qa),e.L=t.H,e}function Ig(){}M=Ig.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Oa=function(){};function As(){if(ji&&!(10<=Number(Ix)))throw Error("Environmental error: no available transport.")}As.prototype.g=function(t,e){return new mt(t,e)};function mt(t,e){Ue.call(this),this.g=new pg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ws(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ws(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zi(this)}Be(mt,Ue);mt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),au($e(t.hb,t,e))),Qe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=_g(t,null,t.W),va(t)};mt.prototype.close=function(){yu(this.g)};mt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,il(this.g,e)}else this.v?(e={},e.__data__=su(t),il(this.g,e)):il(this.g,t)};mt.prototype.M=function(){this.g.j=null,delete this.j,yu(this.g),delete this.g,mt.Z.M.call(this)};function Tg(t){du.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(Tg,du);function Ag(){fu.call(this),this.status=1}Be(Ag,fu);function Zi(t){this.g=t}Be(Zi,Ig);Zi.prototype.xa=function(){Ve(this.g,"a")};Zi.prototype.wa=function(t){Ve(this.g,new Tg(t))};Zi.prototype.va=function(t){Ve(this.g,new Ag)};Zi.prototype.ua=function(){Ve(this.g,"b")};As.prototype.createWebChannel=As.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;da.NO_ERROR=0;da.TIMEOUT=8;da.HTTP_ERROR=6;Kp.COMPLETE="complete";Yp.EventType=po;po.OPEN="a";po.CLOSE="b";po.ERROR="c";po.MESSAGE="d";Ue.prototype.listen=Ue.prototype.N;Ne.prototype.listenOnce=Ne.prototype.O;Ne.prototype.getLastError=Ne.prototype.La;Ne.prototype.getLastErrorCode=Ne.prototype.Da;Ne.prototype.getStatus=Ne.prototype.ba;Ne.prototype.getResponseJson=Ne.prototype.Qa;Ne.prototype.getResponseText=Ne.prototype.ga;Ne.prototype.send=Ne.prototype.ea;var h_=function(){return new As},m_=function(){return ua()},rl=da,p_=Kp,g_=ci,_f={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},b_=vo,Do=Yp,v_=Ne;const Ef="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er="9.8.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new Uc("@firebase/firestore");function If(){return ii.logLevel}function H(t,...e){if(ii.logLevel<=ae.DEBUG){const n=e.map(xu);ii.debug(`Firestore (${er}): ${t}`,...n)}}function An(t,...e){if(ii.logLevel<=ae.ERROR){const n=e.map(xu);ii.error(`Firestore (${er}): ${t}`,...n)}}function Tf(t,...e){if(ii.logLevel<=ae.WARN){const n=e.map(xu);ii.warn(`Firestore (${er}): ${t}`,...n)}}function xu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${er}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function _e(t,e){t||ee()}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends li{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class w_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class k_{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let o=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new _n,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new _n)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(_e(typeof i.accessToken=="string"),new y_(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new rt(e)}}class x_{constructor(e,n,i){this.type="FirstParty",this.user=rt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class __{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new x_(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class E_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class I_{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const i=o=>{o.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.p;return this.p=o.token,H("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const r=o=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.g.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.g.getImmediate({optional:!0});o?r(o):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.p=n.token,new E_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=T_(40);for(let o=0;o<r.length;++o)i.length<20&&r[o]<n&&(i+=e.charAt(r[o]%e.length))}return i}}function ve(t,e){return t<e?-1:t>e?1:0}function $i(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Me(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new Me(0,0))}static max(){return new Ae(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,i){n===void 0?n=0:n>e.length&&ee(),i===void 0?i=e.length-n:i>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Wr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wr?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const o=e.get(r),s=n.get(r);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Wr{construct(e,n,i){return new Ie(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new B(I.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const A_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Wr{construct(e,n,i){return new He(e,n,i)}static isValidIdentifier(e){return A_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const o=()=>{if(i.length===0)throw new B(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let s=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new B(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(s=!s,r++):a!=="."||s?(i+=a,r++):(o(),r++)}if(o(),s)throw new B(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ie.fromString(e))}static fromName(e){return new Y(Ie.fromString(e).popFirst(5))}static empty(){return new Y(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ie(e.slice()))}}function S_(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=Ae.fromTimestamp(i===1e9?new Me(n+1,0):new Me(n,i));return new Sn(r,Y.empty(),e)}function C_(t){return new Sn(t.readTime,t.key,-1)}class Sn{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Sn(Ae.min(),Y.empty(),-1)}static max(){return new Sn(Ae.max(),Y.empty(),-1)}}function O_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class N_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cg(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==R_)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((i,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,r)},this.catchCallback=o=>{this.wrapFailure(n,o).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,i)=>{n(e)})}static reject(e){return new T((n,i)=>{i(e)})}static waitFor(e){return new T((n,i)=>{let r=0,o=0,s=!1;e.forEach(a=>{++r,a.next(()=>{++o,s&&o===r&&n()},l=>i(l))}),s=!0,o===r&&n()})}static or(e){let n=T.resolve(!1);for(const i of e)n=n.next(r=>r?T.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,o)=>{i.push(n.call(this,r,o))}),this.waitFor(i)}static mapArray(e,n){return new T((i,r)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const c=l;n(e[c]).next(u=>{s[c]=u,++a,a===o&&i(s)},u=>r(u))}})}static doWhile(e,n){return new T((i,r)=>{const o=()=>{e()===!0?n().next(()=>{o()},r):i()};o()})}}function ya(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.it(i),this.rt=i=>n.writeSequenceNumber(i))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Rg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Og.ot=-1;class lt{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new lt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mo(this.root,e,this.comparator,!0)}}class Mo{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?i(e.key,n):1,n&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,i,r,o){this.key=e,this.value=n,this.color=i!=null?i:je.RED,this.left=r!=null?r:je.EMPTY,this.right=o!=null?o:je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,o){return new je(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const o=i(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,n,i),null):o===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return je.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,i,r){return this}insert(t,e,n){return new je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sf(this.data.getIterator())}getIteratorFrom(e){return new Sf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,o=i.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Sf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new yt([])}unionWith(e){let n=new Je(He.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $i(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new en(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new en(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");const P_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cn(t){if(_e(!!t),typeof t=="string"){let e=0;const n=P_.exec(t);if(_e(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vi(t){return typeof t=="string"?en.fromBase64String(t):en.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pg(t){const e=t.mapValue.fields.__previous_value__;return Ng(e)?Pg(e):e}function Kr(t){const e=Cn(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n,i,r,o,s,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Bi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Bi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){return t==null}function Ss(t){return t===0&&1/t==-1/0}function M_(t){return typeof t=="number"&&Number.isInteger(t)&&!Ss(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ri(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ng(t)?4:L_(t)?9007199254740991:10:ee()}function Vt(t,e){if(t===e)return!0;const n=ri(t);if(n!==ri(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Kr(t).isEqual(Kr(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Cn(i.timestampValue),s=Cn(r.timestampValue);return o.seconds===s.seconds&&o.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Vi(i.bytesValue).isEqual(Vi(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Oe(i.geoPointValue.latitude)===Oe(r.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Oe(i.integerValue)===Oe(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Oe(i.doubleValue),s=Oe(r.doubleValue);return o===s?Ss(o)===Ss(s):isNaN(o)&&isNaN(s)}return!1}(t,e);case 9:return $i(t.arrayValue.values||[],e.arrayValue.values||[],Vt);case 10:return function(i,r){const o=i.mapValue.fields||{},s=r.mapValue.fields||{};if(Af(o)!==Af(s))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(s[a]===void 0||!Vt(o[a],s[a])))return!1;return!0}(t,e);default:return ee()}}function Yr(t,e){return(t.values||[]).find(n=>Vt(n,e))!==void 0}function Hi(t,e){if(t===e)return 0;const n=ri(t),i=ri(e);if(n!==i)return ve(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(r,o){const s=Oe(r.integerValue||r.doubleValue),a=Oe(o.integerValue||o.doubleValue);return s<a?-1:s>a?1:s===a?0:isNaN(s)?isNaN(a)?0:-1:1}(t,e);case 3:return Cf(t.timestampValue,e.timestampValue);case 4:return Cf(Kr(t),Kr(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(r,o){const s=Vi(r),a=Vi(o);return s.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const s=r.split("/"),a=o.split("/");for(let l=0;l<s.length&&l<a.length;l++){const c=ve(s[l],a[l]);if(c!==0)return c}return ve(s.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const s=ve(Oe(r.latitude),Oe(o.latitude));return s!==0?s:ve(Oe(r.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const s=r.values||[],a=o.values||[];for(let l=0;l<s.length&&l<a.length;++l){const c=Hi(s[l],a[l]);if(c)return c}return ve(s.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===Lo.mapValue&&o===Lo.mapValue)return 0;if(r===Lo.mapValue)return 1;if(o===Lo.mapValue)return-1;const s=r.fields||{},a=Object.keys(s),l=o.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const d=ve(a[u],c[u]);if(d!==0)return d;const f=Hi(s[a[u]],l[c[u]]);if(f!==0)return f}return ve(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ee()}}function Cf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Cn(t),i=Cn(e),r=ve(n.seconds,i.seconds);return r!==0?r:ve(n.nanos,i.nanos)}function Pi(t){return Wl(t)}function Wl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=Cn(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Vi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Y.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",o=!0;for(const s of i.values||[])o?o=!1:r+=",",r+=Wl(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let o="{",s=!0;for(const a of r)s?s=!1:o+=",",o+=`${a}:${Wl(i.fields[a])}`;return o+"}"}(t.mapValue):ee();var e,n}function Kl(t){return!!t&&"integerValue"in t}function _u(t){return!!t&&"arrayValue"in t}function Zo(t){return!!t&&"mapValue"in t}function kr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ui(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=kr(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=kr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function L_(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Zo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=kr(n)}setAll(e){let n=He.emptyPath(),i={},r=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}s?i[a.lastSegment()]=kr(s):r.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,i,r)}delete(e){const n=this.field(e.popLast());Zo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Zo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){ui(n,(r,o)=>e[r]=o);for(const r of i)delete e[r]}clone(){return new st(kr(this.value))}}function Dg(t){const e=[];return ui(t.fields,(n,i)=>{const r=new He([n]);if(Zo(i)){const o=Dg(i.mapValue).fields;if(o.length===0)e.push(r);else for(const s of o)e.push(r.child(s))}else e.push(r)}),new yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,i,r,o,s){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.data=o,this.documentState=s}static newInvalidDocument(e){return new ot(e,0,Ae.min(),Ae.min(),st.empty(),0)}static newFoundDocument(e,n,i){return new ot(e,1,n,Ae.min(),i,0)}static newNoDocument(e,n){return new ot(e,2,n,Ae.min(),st.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,Ae.min(),st.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n=null,i=[],r=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=o,this.startAt=s,this.endAt=a,this.ut=null}}function Of(t,e=null,n=[],i=[],r=null,o=null,s=null){return new F_(t,e,n,i,r,o,s)}function Eu(t){const e=pe(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>{return(r=i).field.canonicalString()+r.op.toString()+Pi(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),wa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Pi(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Pi(i)).join(",")),e.ut=n}return e.ut}function z_(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${Pi(i.value)}`;var i}).join(", ")}]`),wa(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Pi(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Pi(n)).join(",")),`Target(${e})`}function Iu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!q_(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!Vt(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nf(t.startAt,e.startAt)&&Nf(t.endAt,e.endAt)}class at extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,i):new U_(e,n,i):n==="array-contains"?new V_(e,i):n==="in"?new B_(e,i):n==="not-in"?new H_(e,i):n==="array-contains-any"?new G_(e,i):new at(e,n,i)}static ct(e,n,i){return n==="in"?new j_(e,i):new $_(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Hi(n,this.value)):n!==null&&ri(this.value)===ri(n)&&this.at(Hi(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class U_ extends at{constructor(e,n,i){super(e,n,i),this.key=Y.fromName(i.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.at(n)}}class j_ extends at{constructor(e,n){super(e,"in",n),this.keys=Mg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $_ extends at{constructor(e,n){super(e,"not-in",n),this.keys=Mg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Mg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Y.fromName(i.referenceValue))}class V_ extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _u(n)&&Yr(n.arrayValue,this.value)}}class B_ extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yr(this.value.arrayValue,n)}}class H_ extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yr(this.value.arrayValue,n)}}class G_ extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_u(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Yr(this.value.arrayValue,i))}}class Cs{constructor(e,n){this.position=e,this.inclusive=n}}class xr{constructor(e,n="asc"){this.field=e,this.dir=n}}function q_(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Rf(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const o=e[r],s=t.position[r];if(o.field.isKeyField()?i=Y.comparator(Y.fromName(s.referenceValue),n.key):i=Hi(s,n.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Nf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n=null,i=[],r=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function W_(t,e,n,i,r,o,s,a){return new ka(t,e,n,i,r,o,s,a)}function K_(t){return new ka(t)}function Y_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function X_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Q_(t){for(const e of t.filters)if(e.ht())return e.field;return null}function J_(t){return t.collectionGroup!==null}function Xr(t){const e=pe(t);if(e.lt===null){e.lt=[];const n=Q_(e),i=X_(e);if(n!==null&&i===null)n.isKeyField()||e.lt.push(new xr(n)),e.lt.push(new xr(He.keyField(),"asc"));else{let r=!1;for(const o of e.explicitOrderBy)e.lt.push(o),o.field.isKeyField()&&(r=!0);if(!r){const o=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new xr(He.keyField(),o))}}}return e.lt}function Os(t){const e=pe(t);if(!e.ft)if(e.limitType==="F")e.ft=Of(e.path,e.collectionGroup,Xr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const o of Xr(e)){const s=o.dir==="desc"?"asc":"desc";n.push(new xr(o.field,s))}const i=e.endAt?new Cs(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Cs(e.startAt.position,e.startAt.inclusive):null;e.ft=Of(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.ft}function Z_(t,e,n){return new ka(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lg(t,e){return Iu(Os(t),Os(e))&&t.limitType===e.limitType}function Fg(t){return`${Eu(Os(t))}|lt:${t.limitType}`}function Pf(t){return`Query(target=${z_(Os(t))}; limitType=${t.limitType})`}function zg(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):Y.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(r,o,s){const a=Rf(r,o,s);return r.inclusive?a<=0:a<0}(n.startAt,Xr(n),i)||n.endAt&&!function(r,o,s){const a=Rf(r,o,s);return r.inclusive?a>=0:a>0}(n.endAt,Xr(n),i))}(t,e)}function e3(t){return(e,n)=>{let i=!1;for(const r of Xr(t)){const o=t3(r,e,n);if(o!==0)return o;i=i||r.field.isKeyField()}return 0}}function t3(t,e,n){const i=t.field.isKeyField()?Y.comparator(e.key,n.key):function(r,o,s){const a=o.data.field(r),l=s.data.field(r);return a!==null&&l!==null?Hi(a,l):ee()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ss(e)?"-0":e}}function jg(t){return{integerValue:""+t}}function n3(t,e){return M_(e)?jg(e):Ug(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(){this._=void 0}}function i3(t,e,n){return t instanceof Rs?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Qr?Vg(t,e):t instanceof Jr?Bg(t,e):function(i,r){const o=$g(i,r),s=Df(o)+Df(i._t);return Kl(o)&&Kl(i._t)?jg(s):Ug(i.wt,s)}(t,e)}function r3(t,e,n){return t instanceof Qr?Vg(t,e):t instanceof Jr?Bg(t,e):n}function $g(t,e){return t instanceof Ns?Kl(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Rs extends xa{}class Qr extends xa{constructor(e){super(),this.elements=e}}function Vg(t,e){const n=Hg(e);for(const i of t.elements)n.some(r=>Vt(r,i))||n.push(i);return{arrayValue:{values:n}}}class Jr extends xa{constructor(e){super(),this.elements=e}}function Bg(t,e){let n=Hg(e);for(const i of t.elements)n=n.filter(r=>!Vt(r,i));return{arrayValue:{values:n}}}class Ns extends xa{constructor(e,n){super(),this.wt=e,this._t=n}}function Df(t){return Oe(t.integerValue||t.doubleValue)}function Hg(t){return _u(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function o3(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Qr&&i instanceof Qr||n instanceof Jr&&i instanceof Jr?$i(n.elements,i.elements,Vt):n instanceof Ns&&i instanceof Ns?Vt(n._t,i._t):n instanceof Rs&&i instanceof Rs}(t.transform,e.transform)}class s3{constructor(e,n){this.version=e,this.transformResults=n}}class ft{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ft}static exists(e){return new ft(void 0,e)}static updateTime(e){return new ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function es(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _a{}function Gg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Tu(t.key,ft.none()):new ko(t.key,t.data,ft.none());{const n=t.data,i=st.empty();let r=new Je(He.comparator);for(let o of e.fields)if(!r.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?i.delete(o):i.set(o,s),r=r.add(o)}return new Fn(t.key,i,new yt(r.toArray()),ft.none())}}function a3(t,e,n){t instanceof ko?function(i,r,o){const s=i.value.clone(),a=Lf(i.fieldTransforms,r,o.transformResults);s.setAll(a),r.convertToFoundDocument(o.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Fn?function(i,r,o){if(!es(i.precondition,r))return void r.convertToUnknownDocument(o.version);const s=Lf(i.fieldTransforms,r,o.transformResults),a=r.data;a.setAll(qg(i)),a.setAll(s),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _r(t,e,n,i){return t instanceof ko?function(r,o,s,a){if(!es(r.precondition,o))return s;const l=r.value.clone(),c=Ff(r.fieldTransforms,a,o);return l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof Fn?function(r,o,s,a){if(!es(r.precondition,o))return s;const l=Ff(r.fieldTransforms,a,o),c=o.data;return c.setAll(qg(r)),c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),s===null?null:s.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(r,o,s){return es(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):s}(t,e,n)}function l3(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),o=$g(i.transform,r||null);o!=null&&(n===null&&(n=st.empty()),n.set(i.field,o))}return n||null}function Mf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&$i(n,i,(r,o)=>o3(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ko extends _a{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Fn extends _a{constructor(e,n,i,r,o=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function qg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Lf(t,e,n){const i=new Map;_e(t.length===n.length);for(let r=0;r<n.length;r++){const o=t[r],s=o.transform,a=e.data.field(o.field);i.set(o.field,r3(s,a,n[r]))}return i}function Ff(t,e,n){const i=new Map;for(const r of t){const o=r.transform,s=n.data.field(r.field);i.set(r.field,i3(o,s,e))}return i}class Tu extends _a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wg extends _a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,te;function Kg(t){switch(t){default:return ee();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function c3(t){if(t===void 0)return An("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ce.OK:return I.OK;case Ce.CANCELLED:return I.CANCELLED;case Ce.UNKNOWN:return I.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return I.INTERNAL;case Ce.UNAVAILABLE:return I.UNAVAILABLE;case Ce.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ce.NOT_FOUND:return I.NOT_FOUND;case Ce.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ce.ABORTED:return I.ABORTED;case Ce.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ce.DATA_LOSS:return I.DATA_LOSS;default:return ee()}}(te=Ce||(Ce={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,o]of i)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ui(this.inner,(n,i)=>{for(const[r,o]of i)e(r,o)})}isEmpty(){return Rg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u3=new lt(Y.comparator);function Ps(){return u3}const Yg=new lt(Y.comparator);function Fo(...t){let e=Yg;for(const n of t)e=e.insert(n.key,n);return e}function Xg(t){let e=Yg;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Wn(){return Er()}function Qg(){return Er()}function Er(){return new tr(t=>t.toString(),(t,e)=>t.isEqual(e))}const d3=new lt(Y.comparator),f3=new Je(Y.comparator);function Xe(...t){let e=f3;for(const n of t)e=e.add(n);return e}const h3=new Je(ve);function m3(){return h3}class p3{constructor(e,n){this.databaseId=e,this.dt=n}}function Yl(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function g3(t,e){return t.dt?e.toBase64():e.toUint8Array()}function b3(t,e){return Yl(t,e.toTimestamp())}function En(t){return _e(!!t),Ae.fromTimestamp(function(e){const n=Cn(e);return new Me(n.seconds,n.nanos)}(t))}function Jg(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Zg(t){const e=Ie.fromString(t);return _e(ib(e)),e}function Ds(t,e){return Jg(t.databaseId,e.path)}function zf(t,e){const n=Zg(e);if(n.get(1)!==t.databaseId.projectId)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(eb(n))}function v3(t){const e=Zg(t);return e.length===4?Ie.emptyPath():eb(e)}function Xl(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function eb(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Uf(t,e,n){return{name:Ds(t,e),fields:n.value.mapValue.fields}}function y3(t,e){return"found"in e?function(n,i){_e(!!i.found),i.found.name,i.found.updateTime;const r=zf(n,i.found.name),o=En(i.found.updateTime),s=new st({mapValue:{fields:i.found.fields}});return ot.newFoundDocument(r,o,s)}(t,e):"missing"in e?function(n,i){_e(!!i.missing),_e(!!i.readTime);const r=zf(n,i.missing),o=En(i.readTime);return ot.newNoDocument(r,o)}(t,e):ee()}function tb(t,e){let n;if(e instanceof ko)n={update:Uf(t,e.key,e.value)};else if(e instanceof Tu)n={delete:Ds(t,e.key)};else if(e instanceof Fn)n={update:Uf(t,e.key,e.data),updateMask:E3(e.fieldMask)};else{if(!(e instanceof Wg))return ee();n={verify:Ds(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const s=o.transform;if(s instanceof Rs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(s instanceof Qr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:s.elements}};if(s instanceof Jr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:s.elements}};if(s instanceof Ns)return{fieldPath:o.field.canonicalString(),increment:s._t};throw ee()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:b3(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ee()}(t,e.precondition)),n}function w3(t,e){return t&&t.length>0?(_e(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?En(i.updateTime):En(r);return o.isEqual(Ae.min())&&(o=En(r)),new s3(o,i.transformResults||[])}(n,e))):[]}function k3(t){let e=v3(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){_e(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let o=[];n.where&&(o=nb(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(u=>function(d){return new xr(_i(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,wa(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(u){const d=!!u.before,f=u.values||[];return new Cs(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const d=!u.before,f=u.values||[];return new Cs(f,d)}(n.endAt)),W_(e,r,s,o,a,"F",l,c)}function nb(t){return t?t.unaryFilter!==void 0?[_3(t)]:t.fieldFilter!==void 0?[x3(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>nb(e)).reduce((e,n)=>e.concat(n)):ee():[]}function _i(t){return He.fromServerFormat(t.fieldPath)}function x3(t){return at.create(_i(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(t.fieldFilter.op),t.fieldFilter.value)}function _3(t){switch(t.unaryFilter.op){case"IS_NAN":const e=_i(t.unaryFilter.field);return at.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=_i(t.unaryFilter.field);return at.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_i(t.unaryFilter.field);return at.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=_i(t.unaryFilter.field);return at.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}function E3(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ib(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I3{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(e.key)&&a3(o,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=_r(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=_r(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Qg();return this.mutations.forEach(r=>{const o=e.get(r.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(r.key)?null:a;const l=Gg(s,a);l!==null&&i.set(r.key,l),s.isValidDocument()||s.convertToNoDocument(Ae.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Xe())}isEqual(e){return this.batchId===e.batchId&&$i(this.mutations,e.mutations,(n,i)=>Mf(n,i))&&$i(this.baseMutations,e.baseMutations,(n,i)=>Mf(n,i))}}class Au{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){_e(e.mutations.length===i.length);let r=d3;const o=e.mutations;for(let s=0;s<o.length;s++)r=r.insert(o[s].key,i[s].version);return new Au(e,n,i,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A3{constructor(e){this.ne=e}}function S3(t){const e=k3({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Z_(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C3{constructor(){this.ze=new O3}addToCollectionParentIndex(e,n){return this.ze.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Sn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Sn.min())}updateCollectionGroup(e,n,i){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class O3{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new Je(Ie.comparator),o=!r.has(i);return this.index[n]=r.add(i),o}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new Je(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Gi(0)}static Rn(){return new Gi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R3{constructor(){this.changes=new tr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?T.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N3{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P3{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.getBaseDocument(e,n,i))).next(r=>(i!==null&&_r(i.mutation,r,yt.empty(),Me.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Xe()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Xe()){const r=Wn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(o=>{let s=Fo();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const i=Wn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Xe()))}populateOverlays(e,n,i){const r=[];return i.forEach(o=>{n.has(o)||r.push(o)}),this.documentOverlayCache.getOverlays(e,r).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,i,r){let o=Ps();const s=Er(),a=Er();return n.forEach((l,c)=>{const u=i.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof Fn)?o=o.insert(c.key,c):u!==void 0&&(s.set(c.key,u.mutation.getFieldMask()),_r(u.mutation,c,u.mutation.getFieldMask(),Me.now()))}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((c,u)=>s.set(c,u)),n.forEach((c,u)=>{var d;return a.set(c,new N3(u,(d=s.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Er();let r=new lt((s,a)=>s-a),o=Xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||yt.empty();u=a.applyToLocalView(c,u),i.set(l,u);const d=(r.get(a.batchId)||Xe()).add(l);r=r.insert(a.batchId,d)})}).next(()=>{const s=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,d=Qg();u.forEach(f=>{if(!o.has(f)){const m=Gg(n.get(f),i.get(f));m!==null&&d.set(f,m),o=o.add(f)}}),s.push(this.documentOverlayCache.saveOverlays(e,c,d))}return T.waitFor(s)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return Y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):J_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(o=>{const s=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-o.size):T.resolve(Wn());let a=-1,l=o;return s.next(c=>T.forEach(c,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),o.get(u)?T.resolve():this.getBaseDocument(e,u,d).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,o)).next(()=>this.computeViews(e,l,c,Xe())).next(u=>({batchId:a,changes:Xg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(i=>{let r=Fo();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const r=n.collectionGroup;let o=Fo();return this.indexManager.getCollectionParents(e,r).next(s=>T.forEach(s,a=>{const l=function(c,u){return new ka(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,d)=>{o=o.insert(u,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,i){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,i).next(o=>(r=o,this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId))).next(o=>{o.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,ot.newInvalidDocument(c)))});let s=Fo();return r.forEach((a,l)=>{const c=o.get(a);c!==void 0&&_r(c.mutation,l,yt.empty(),Me.now()),zg(n,l)&&(s=s.insert(a,l))}),s})}getBaseDocument(e,n,i){return i===null||i.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):T.resolve(ot.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return T.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var i;return this.Jn.set(n.id,{id:(i=n).id,version:i.version,createTime:En(i.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(i){return{name:i.name,query:S3(i.bundledQuery),readTime:En(i.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3{constructor(){this.overlays=new lt(Y.comparator),this.Xn=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Wn();return T.forEach(n,r=>this.getOverlay(e,r).next(o=>{o!==null&&i.set(r,o)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,o)=>{this.ie(e,n,o)}),T.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.Xn.get(i);return r!==void 0&&(r.forEach(o=>this.overlays=this.overlays.remove(o)),this.Xn.delete(i)),T.resolve()}getOverlaysForCollection(e,n,i){const r=Wn(),o=n.length+1,s=new Y(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===o&&l.largestBatchId>i&&r.set(l.getKey(),l)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let o=new lt((c,u)=>c-u);const s=this.overlays.getIterator();for(;s.hasNext();){const c=s.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=o.get(c.largestBatchId);u===null&&(u=Wn(),o=o.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Wn(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return T.resolve(a)}ie(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const s=this.Xn.get(r.largestBatchId).delete(i.key);this.Xn.set(r.largestBatchId,s)}this.overlays=this.overlays.insert(i.key,new T3(n,i));let o=this.Xn.get(n);o===void 0&&(o=Xe(),this.Xn.set(n,o)),this.Xn.set(n,o.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.Zn=new Je(Le.ts),this.es=new Je(Le.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const i=new Le(e,n);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.rs(new Le(e,n))}os(e,n){e.forEach(i=>this.removeReference(i,n))}us(e){const n=new Y(new Ie([])),i=new Le(n,e),r=new Le(n,e+1),o=[];return this.es.forEachInRange([i,r],s=>{this.rs(s),o.push(s.key)}),o}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new Y(new Ie([])),i=new Le(n,e),r=new Le(n,e+1);let o=Xe();return this.es.forEachInRange([i,r],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new Le(e,0),i=this.Zn.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Le{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return Y.comparator(e.key,n.key)||ve(e.ls,n.ls)}static ns(e,n){return ve(e.ls,n.ls)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L3{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Je(Le.ts)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const o=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new I3(o,n,i,r);this.mutationQueue.push(s);for(const a of r)this.ds=this.ds.add(new Le(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(s)}lookupMutationBatch(e,n){return T.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.ws(i),o=r<0?0:r;return T.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Le(n,0),r=new Le(n,Number.POSITIVE_INFINITY),o=[];return this.ds.forEachInRange([i,r],s=>{const a=this._s(s.ls);o.push(a)}),T.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Je(ve);return n.forEach(r=>{const o=new Le(r,0),s=new Le(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([o,s],a=>{i=i.add(a.ls)})}),T.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let o=i;Y.isDocumentKey(o)||(o=o.child(""));const s=new Le(new Y(o),0);let a=new Je(ve);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.ls)),!0)},s),T.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(i=>{const r=this._s(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){_e(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.ds;return T.forEach(n.mutations,r=>{const o=new Le(r.key,n.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=i})}In(e){}containsKey(e,n){const i=new Le(n,0),r=this.ds.firstAfterOrEqual(i);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F3{constructor(e){this.ps=e,this.docs=new lt(Y.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),o=r?r.size:0,s=this.ps(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return T.resolve(i?i.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let i=Ps();return n.forEach(r=>{const o=this.docs.get(r);i=i.insert(r,o?o.document.mutableCopy():ot.newInvalidDocument(r))}),T.resolve(i)}getAllFromCollection(e,n,i){let r=Ps();const o=new Y(n.child("")),s=this.docs.getIteratorFrom(o);for(;s.hasNext();){const{key:a,value:{document:l}}=s.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||O_(C_(l),i)<=0||(r=r.insert(l.key,l.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,n,i,r){ee()}Is(e,n){return T.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new z3(this)}getSize(e){return T.resolve(this.size)}}class z3 extends R3{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(e,r)):this.zn.removeEntry(i)}),T.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U3{constructor(e){this.persistence=e,this.Ts=new tr(n=>Eu(n),Iu),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.Es=0,this.As=new Su,this.targetCount=0,this.Rs=Gi.An()}forEachTarget(e,n){return this.Ts.forEach((i,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Es&&(this.Es=n),T.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Gi(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.vn(n),T.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,i){let r=0;const o=[];return this.Ts.forEach((s,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Ts.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(o).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const i=this.Ts.get(n)||null;return T.resolve(i)}addMatchingKeys(e,n,i){return this.As.ss(n,i),T.resolve()}removeMatchingKeys(e,n,i){this.As.os(n,i);const r=this.persistence.referenceDelegate,o=[];return r&&n.forEach(s=>{o.push(r.markPotentiallyOrphaned(e,s))}),T.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),T.resolve()}getMatchingKeysForTargetId(e,n){const i=this.As.hs(n);return T.resolve(i)}containsKey(e,n){return T.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Og(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new U3(this),this.indexManager=new C3,this.remoteDocumentCache=function(i){return new F3(i)}(i=>this.referenceDelegate.Ss(i)),this.wt=new A3(n),this.Ds=new D3(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new M3,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.bs[e.toKey()];return i||(i=new L3(n,this.referenceDelegate),this.bs[e.toKey()]=i),i}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,i){H("MemoryPersistence","Starting transaction:",e);const r=new $3(this.Ps.next());return this.referenceDelegate.Cs(),i(r).next(o=>this.referenceDelegate.xs(r).next(()=>o)).toPromise().then(o=>(r.raiseOnCommittedEvent(),o))}Ns(e,n){return T.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,n)))}}class $3 extends N_{constructor(e){super(),this.currentSequenceNumber=e}}class Cu{constructor(e){this.persistence=e,this.ks=new Su,this.Os=null}static Ms(e){return new Cu(e)}get Fs(){if(this.Os)return this.Os;throw ee()}addReference(e,n,i){return this.ks.addReference(i,n),this.Fs.delete(i.toString()),T.resolve()}removeReference(e,n,i){return this.ks.removeReference(i,n),this.Fs.add(i.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),T.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(o=>this.Fs.add(o.toString()))}).next(()=>i.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Fs,i=>{const r=Y.fromPath(i);return this.$s(e,r).next(o=>{o||n.removeEntry(r,Ae.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(i=>{i?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return T.or([()=>T.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Pi=i,this.vi=r}static Vi(e,n){let i=Xe(),r=Xe();for(const o of n.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new Ou(e,n.fromCache,i,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V3{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,i,r){return this.Ci(e,n).next(o=>o||this.xi(e,n,r,i)).next(o=>o||this.Ni(e,n))}Ci(e,n){return T.resolve(null)}xi(e,n,i,r){return Y_(n)||r.isEqual(Ae.min())?this.Ni(e,n):this.Di.getDocuments(e,i).next(o=>{const s=this.ki(n,o);return this.Oi(n,s,i,r)?this.Ni(e,n):(If()<=ae.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Pf(n)),this.Mi(e,s,n,S_(r,-1)))})}ki(e,n){let i=new Je(e3(e));return n.forEach((r,o)=>{zg(e,o)&&(i=i.add(o))}),i}Oi(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}Ni(e,n){return If()<=ae.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Pf(n)),this.Di.getDocumentsMatchingQuery(e,n,Sn.min())}Mi(e,n,i,r){return this.Di.getDocumentsMatchingQuery(e,i,r).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B3{constructor(e,n,i,r){this.persistence=e,this.Fi=n,this.wt=r,this.$i=new lt(ve),this.Bi=new tr(o=>Eu(o),Iu),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(i)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new P3(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function H3(t,e,n,i){return new B3(t,e,n,i)}async function rb(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(o=>(r=o,n.qi(e),n.mutationQueue.getAllMutationBatches(i))).next(o=>{const s=[],a=[];let l=Xe();for(const c of r){s.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of o){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({Ki:c,removedBatchIds:s,addedBatchIds:a}))})})}function G3(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),o=n.Ui.newChangeBuffer({trackRemovals:!0});return function(s,a,l,c){const u=l.batch,d=u.keys();let f=T.resolve();return d.forEach(m=>{f=f.next(()=>c.getEntry(a,m)).next(g=>{const A=l.docVersions.get(m);_e(A!==null),g.version.compareTo(A)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),f.next(()=>s.mutationQueue.removeMutationBatch(a,u))}(n,i,e,o).next(()=>o.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(s){let a=Xe();for(let l=0;l<s.mutationResults.length;++l)s.mutationResults[l].transformResults.length>0&&(a=a.add(s.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function q3(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function W3(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}class jf{constructor(){this.activeTargetIds=m3()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class K3{constructor(){this.Fr=new jf,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,i){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new jf,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y3{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q3{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J3 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,i,r,o){const s=this.oo(e,n);H("RestConnection","Sending: ",s,i);const a={};return this.uo(a,r,o),this.co(e,s,a,i).then(l=>(H("RestConnection","Received: ",l),l),l=>{throw Tf("RestConnection",`${e} failed with error: `,l,"url: ",s,"request:",i),l})}ao(e,n,i,r,o,s){return this.ro(e,n,i,r,o)}uo(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+er,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,o)=>e[o]=r),i&&i.headers.forEach((r,o)=>e[o]=r)}oo(e,n){const i=X3[e];return`${this.so}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,i,r){return new Promise((o,s)=>{const a=new v_;a.listenOnce(p_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case rl.NO_ERROR:const c=a.getResponseJson();H("Connection","XHR received:",JSON.stringify(c)),o(c);break;case rl.TIMEOUT:H("Connection",'RPC "'+e+'" timed out'),s(new B(I.DEADLINE_EXCEEDED,"Request time out"));break;case rl.HTTP_ERROR:const u=a.getStatus();if(H("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const d=a.getResponseJson().error;if(d&&d.status&&d.message){const f=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(g)>=0?g:I.UNKNOWN}(d.status);s(new B(f,d.message))}else s(new B(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new B(I.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{H("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,i,15)})}ho(e,n,i){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=h_(),s=m_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new b_({})),this.uo(a.initMessageHeaders,n,i),$m()||Bm()||rw()||Hm()||ow()||Vm()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=r.join("");H("Connection","Creating WebChannel: "+l,a);const c=o.createWebChannel(l,a);let u=!1,d=!1;const f=new Q3({jr:g=>{d?H("Connection","Not sending because WebChannel is closed:",g):(u||(H("Connection","Opening WebChannel transport."),c.open(),u=!0),H("Connection","WebChannel sending:",g),c.send(g))},Wr:()=>c.close()}),m=(g,A,k)=>{g.listen(A,b=>{try{k(b)}catch(y){setTimeout(()=>{throw y},0)}})};return m(c,Do.EventType.OPEN,()=>{d||H("Connection","WebChannel transport opened.")}),m(c,Do.EventType.CLOSE,()=>{d||(d=!0,H("Connection","WebChannel transport closed"),f.eo())}),m(c,Do.EventType.ERROR,g=>{d||(d=!0,Tf("Connection","WebChannel transport errored:",g),f.eo(new B(I.UNAVAILABLE,"The operation could not be completed")))}),m(c,Do.EventType.MESSAGE,g=>{var A;if(!d){const k=g.data[0];_e(!!k);const b=k,y=b.error||((A=b[0])===null||A===void 0?void 0:A.error);if(y){H("Connection","WebChannel received error:",y);const N=y.status;let U=function(se){const ye=Ce[se];if(ye!==void 0)return c3(ye)}(N),Q=y.message;U===void 0&&(U=I.INTERNAL,Q="Unknown error status: "+N+" with message "+y.message),d=!0,f.eo(new B(U,Q)),c.close()}else H("Connection","WebChannel received:",k),f.no(k)}}),m(s,g_.STAT_EVENT,g=>{g.stat===_f.PROXY?H("Connection","Detected buffering proxy"):g.stat===_f.NOPROXY&&H("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function ol(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t){return new p3(t,!0)}class Ru{constructor(e,n,i=1e3,r=1.5,o=6e4){this.js=e,this.timerId=n,this.lo=i,this.fo=r,this._o=o,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),i=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-i);r>0&&H("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{constructor(e,n,i,r,o,s,a,l){this.js=e,this.Ao=i,this.Ro=r,this.bo=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Ru(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Po===n&&this.Uo(i,r)},i=>{e(()=>{const r=new B(I.UNKNOWN,"Fetching auth token failed: "+i.message);return this.qo(r)})})}Uo(e,n){const i=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{i(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{i(()=>this.qo(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eE extends Z3{constructor(e,n,i,r,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,s),this.wt=o,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=w3(e.writeResults,e.commitTime),i=En(e.commitTime);return this.listener.Jo(i,n)}return _e(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Xl(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>tb(this.wt,i))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=i,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.bo.ro(e,n,i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(I.UNKNOWN,r.toString())})}ao(e,n,i,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.bo.ao(e,n,i,o,s,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(I.UNKNOWN,o.toString())})}terminate(){this.Zo=!0}}class nE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(An(n),this.su=!1):H("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n,i,r,o){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=o,this.du.Br(s=>{i.enqueueAndForget(async()=>{_o(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=pe(a);l.lu.add(4),await xo(l),l._u.set("Unknown"),l.lu.delete(4),await Ia(l)}(this))})}),this._u=new nE(i,r)}}async function Ia(t){if(_o(t))for(const e of t.fu)await e(!0)}async function xo(t){for(const e of t.fu)await e(!1)}function _o(t){return pe(t).lu.size===0}async function ob(t,e,n){if(!ya(e))throw e;t.lu.add(1),await xo(t),t._u.set("Offline"),n||(n=()=>q3(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Ia(t)})}function sb(t,e){return e().catch(n=>ob(t,n,e))}async function Ta(t){const e=pe(t),n=On(e);let i=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;rE(e);)try{const r=await W3(e.localStore,i);if(r===null){e.au.length===0&&n.ko();break}i=r.batchId,oE(e,r)}catch(r){await ob(e,r)}ab(e)&&lb(e)}function rE(t){return _o(t)&&t.au.length<10}function oE(t,e){t.au.push(e);const n=On(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function ab(t){return _o(t)&&!On(t).Do()&&t.au.length>0}function lb(t){On(t).start()}async function sE(t){On(t).Xo()}async function aE(t){const e=On(t);for(const n of t.au)e.Ho(n.mutations)}async function lE(t,e,n){const i=t.au.shift(),r=Au.from(i,e,n);await sb(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ta(t)}async function cE(t,e){e&&On(t).zo&&await async function(n,i){if(r=i.code,Kg(r)&&r!==I.ABORTED){const o=n.au.shift();On(n).No(),await sb(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ta(n)}var r}(t,e),ab(t)&&lb(t)}async function Vf(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const i=_o(n);n.lu.add(3),await xo(n),i&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Ia(n)}async function uE(t,e){const n=pe(t);e?(n.lu.delete(2),await Ia(n)):e||(n.lu.add(2),await xo(n),n._u.set("Unknown"))}function On(t){return t.gu||(t.gu=function(e,n,i){const r=pe(e);return r.tu(),new eE(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,i)}(t.datastore,t.asyncQueue,{zr:sE.bind(null,t),Jr:cE.bind(null,t),Yo:aE.bind(null,t),Jo:lE.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Ta(t)):(await t.gu.stop(),t.au.length>0&&(H("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,i,r,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=o,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(e,n,i,r,o){const s=Date.now()+i,a=new Nu(e,n,s,r,o);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cb(t,e){if(An("AsyncQueue",`${e}: ${t}`),ya(t))return new B(I.UNAVAILABLE,`${e}: ${t}`);throw t}class dE{constructor(){this.queries=new tr(e=>Fg(e),Lg),this.onlineState="Unknown",this.Tu=new Set}}function fE(t){t.Tu.forEach(e=>{e.next()})}class hE{constructor(e,n,i,r,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Zu={},this.tc=new tr(a=>Fg(a),Lg),this.ec=new Map,this.nc=new Set,this.sc=new lt(Y.comparator),this.ic=new Map,this.rc=new Su,this.oc={},this.uc=new Map,this.cc=Gi.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function mE(t,e,n){const i=vE(t);try{const r=await function(o,s){const a=pe(o),l=Me.now(),c=s.reduce((f,m)=>f.add(m.key),Xe());let u,d;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=Ps(),g=Xe();return a.Ui.getEntries(f,c).next(A=>{m=A,m.forEach((k,b)=>{b.isValidDocument()||(g=g.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,m)).next(A=>{u=A;const k=[];for(const b of s){const y=l3(b,u.get(b.key).overlayedDocument);y!=null&&k.push(new Fn(b.key,y,Dg(y.value.mapValue),ft.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,k,s)}).next(A=>{d=A;const k=A.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(f,A.batchId,k)})}).then(()=>({batchId:d.batchId,changes:Xg(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(o,s,a){let l=o.oc[o.currentUser.toKey()];l||(l=new lt(ve)),l=l.insert(s,a),o.oc[o.currentUser.toKey()]=l}(i,r.batchId,n),await Aa(i,r.changes),await Ta(i.remoteStore)}catch(r){const o=cb(r,"Failed to persist write");n.reject(o)}}function Bf(t,e,n){const i=pe(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.tc.forEach((o,s)=>{const a=s.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(o,s){const a=pe(o);a.onlineState=s;let l=!1;a.queries.forEach((c,u)=>{for(const d of u.listeners)d.Eu(s)&&(l=!0)}),l&&fE(a)}(i.eventManager,e),r.length&&i.Zu.Go(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function pE(t,e){const n=pe(t),i=e.batch.batchId;try{const r=await G3(n.localStore,e);db(n,i,null),ub(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Aa(n,r)}catch(r){await Cg(r)}}async function gE(t,e,n){const i=pe(t);try{const r=await function(o,s){const a=pe(o);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,s).next(u=>(_e(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,s)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);db(i,e,n),ub(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Aa(i,r)}catch(r){await Cg(r)}}function ub(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function db(t,e,n){const i=pe(t);let r=i.oc[i.currentUser.toKey()];if(r){const o=r.get(e);o&&(n?o.reject(n):o.resolve(),r=r.remove(e)),i.oc[i.currentUser.toKey()]=r}}async function Aa(t,e,n){const i=pe(t),r=[],o=[],s=[];i.tc.isEmpty()||(i.tc.forEach((a,l)=>{s.push(i.hc(l,e,n).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),r.push(c);const u=Ou.Vi(l.targetId,c);o.push(u)}}))}),await Promise.all(s),i.Zu.Go(r),await async function(a,l){const c=pe(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(l,d=>T.forEach(d.Pi,f=>c.persistence.referenceDelegate.addReference(u,d.targetId,f)).next(()=>T.forEach(d.vi,f=>c.persistence.referenceDelegate.removeReference(u,d.targetId,f)))))}catch(u){if(!ya(u))throw u;H("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const f=c.$i.get(d),m=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(m);c.$i=c.$i.insert(d,g)}}}(i.localStore,o))}async function bE(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const i=await rb(n.localStore,e);n.currentUser=e,function(r,o){r.uc.forEach(s=>{s.forEach(a=>{a.reject(new B(I.CANCELLED,o))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Aa(n,i.Ki)}}function vE(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gE.bind(null,e),e}class yE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Ea(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return H3(this.persistence,new V3,e.initialUser,this.wt)}_c(e){return new j3(Cu.Ms,this.wt)}dc(e){return new K3}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wE{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Bf(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=bE.bind(null,this.syncEngine),await uE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new dE}createDatastore(e){const n=Ea(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new J3(r));var r;return function(o,s,a,l){return new tE(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,o=a=>Bf(this.syncEngine,a,0),s=$f.V()?new $f:new Y3,new iE(n,i,r,o,s);var n,i,r,o,s}createSyncEngine(e,n){return function(i,r,o,s,a,l,c){const u=new hE(i,r,o,s,a,l);return c&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=pe(e);H("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await xo(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new B(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,r){const o=pe(i),s=Xl(o.wt)+"/documents",a={documents:r.map(d=>Ds(o.wt,d))},l=await o.ao("BatchGetDocuments",s,a,r.length),c=new Map;l.forEach(d=>{const f=y3(o.wt,d);c.set(f.key.toString(),f)});const u=[];return r.forEach(d=>{const f=c.get(d.toString());_e(!!f),u.push(f)}),u}(this.datastore,e);return n.forEach(i=>this.recordVersion(i)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastWriteError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Tu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,i)=>{const r=Y.fromPath(i);this.mutations.push(new Wg(r,this.precondition(r)))}),await async function(n,i){const r=pe(n),o=Xl(r.wt)+"/documents",s={writes:i.map(a=>tb(r.wt,a))};await r.ro("Commit",o,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ee();n=Ae.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!n.isEqual(i))throw new B(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?ft.updateTime(n):ft.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Ae.min()))throw new B(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ft.updateTime(n)}return ft.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,n,i,r,o){this.asyncQueue=e,this.datastore=n,this.options=i,this.updateFunction=r,this.deferred=o,this.Dc=i.maxAttempts,this.So=new Ru(this.asyncQueue,"transaction_retry")}run(){this.Dc-=1,this.Cc()}Cc(){this.So.Io(async()=>{const e=new kE(this.datastore),n=this.xc(e);n&&n.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(r=>{this.Nc(r)}))}).catch(i=>{this.Nc(i)})})}xc(e){try{const n=this.updateFunction(e);return!wa(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Nc(e){this.Dc>0&&this.kc(e)?(this.Dc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Cc(),Promise.resolve()))):this.deferred.reject(e)}kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!Kg(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=rt.UNAUTHENTICATED,this.clientId=Sg.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=cb(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function EE(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await rb(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function IE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TE(t);H("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>Vf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,o)=>Vf(e.remoteStore,o)),t.onlineComponents=e}async function TE(t){return t.offlineComponents||(H("FirestoreClient","Using default OfflineComponentProvider"),await EE(t,new yE)),t.offlineComponents}async function fb(t){return t.onlineComponents||(H("FirestoreClient","Using default OnlineComponentProvider"),await IE(t,new wE)),t.onlineComponents}function AE(t){return fb(t).then(e=>e.syncEngine)}function SE(t,e,n){const i=new _n;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(o){return fb(o).then(s=>s.datastore)}(t);new xE(t.asyncQueue,r,n,e,i).run()}),i.promise}const Hf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(t,e,n){if(!n)throw new B(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CE(t,e,n,i){if(e===!0&&i===!0)throw new B(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gf(t){if(!Y.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qf(t){if(Y.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function mb(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pu(t);throw new B(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,CE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wf({}),this._settingsFrozen=!1,e instanceof Bi?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new B(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bi(r.options.projectId)}(e))}get app(){if(!this._app)throw new B(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new w_;switch(n.type){case"gapi":const i=n.client;return _e(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new __(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new B(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Hf.get(e);n&&(H("ComponentProvider","Removing Datastore"),Hf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new In(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class Mu{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Mu(this.firestore,e,this._query)}}class In extends Mu{constructor(e,n,i){super(e,n,K_(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new Y(e))}withConverter(e){return new In(this.firestore,e,this._path)}}function gT(t,e,...n){if(t=et(t),hb("collection","path",e),t instanceof Du){const i=Ie.fromString(e,...n);return qf(i),new In(t,null,i)}{if(!(t instanceof wt||t instanceof In))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ie.fromString(e,...n));return qf(i),new In(t.firestore,null,i)}}function OE(t,e,...n){if(t=et(t),arguments.length===1&&(e=Sg.I()),hb("doc","path",e),t instanceof Du){const i=Ie.fromString(e,...n);return Gf(i),new wt(t,null,new Y(i))}{if(!(t instanceof wt||t instanceof In))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ie.fromString(e,...n));return Gf(i),new wt(t.firestore,t instanceof In?t.converter:null,new Y(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Ru(this,"async_queue_retry"),this.Kc=()=>{const n=ol();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=ol();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=ol();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new _n;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!ya(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(i=>{this.Bc=i,this.Lc=!1;const r=function(o){let s=o.message||"";return o.stack&&(s=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),s}(i);throw An("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Lc=!1,i))));return this.Oc=n,n}enqueueAfterDelay(e,n,i){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const r=Nu.createAndSchedule(this,e,n,i,o=>this.Wc(o));return this.$c.push(r),r}Gc(){this.Bc&&ee()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Lu extends Du{constructor(e,n,i){super(e,n,i),this.type="firestore",this._queue=new RE,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||gb(this),this._firestoreClient.terminate()}}function NE(t=Km()){return Vc(t,"firestore").getImmediate()}function pb(t){return t._firestoreClient||gb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gb(t){var e;const n=t._freezeSettings(),i=function(r,o,s,a){return new D_(r,o,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _E(t._authCredentials,t._appCheckCredentials,t._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oi(en.fromBase64String(e))}catch(n){throw new B(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new oi(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=/^__.*__$/;class DE{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Fn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ko(e,this.data,n,this.fieldTransforms)}}class bb{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Fn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function vb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Uu{constructor(e,n,i,r,o,s){this.settings=e,this.databaseId=n,this.wt=i,this.ignoreUndefinedProperties=r,o===void 0&&this.Xc(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Uu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:i,na:!1});return r.sa(e),r}ia(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:i,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Ms(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(vb(this.Zc)&&PE.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class ME{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=i||Ea(e)}aa(e,n,i,r=!1){return new Uu({Zc:e,methodName:n,ca:i,path:He.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function yb(t){const e=t._freezeSettings(),n=Ea(t._databaseId);return new ME(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wb(t,e,n,i,r,o={}){const s=t.aa(o.merge||o.mergeFields?2:0,e,n,r);ju("Data must be an object, but it was:",s,i);const a=kb(i,s);let l,c;if(o.merge)l=new yt(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const u=[];for(const d of o.mergeFields){const f=Ql(e,d,n);if(!s.contains(f))throw new B(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);_b(u,f)||u.push(f)}l=new yt(u),c=s.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=s.fieldTransforms;return new DE(new st(a),l,c)}class Ca extends Fu{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ca}}function LE(t,e,n,i){const r=t.aa(1,e,n);ju("Data must be an object, but it was:",r,i);const o=[],s=st.empty();ui(i,(l,c)=>{const u=$u(e,l,n);c=et(c);const d=r.ia(u);if(c instanceof Ca)o.push(u);else{const f=Oa(c,d);f!=null&&(o.push(u),s.set(u,f))}});const a=new yt(o);return new bb(s,a,r.fieldTransforms)}function FE(t,e,n,i,r,o){const s=t.aa(1,e,n),a=[Ql(e,i,n)],l=[r];if(o.length%2!=0)throw new B(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<o.length;f+=2)a.push(Ql(e,o[f])),l.push(o[f+1]);const c=[],u=st.empty();for(let f=a.length-1;f>=0;--f)if(!_b(c,a[f])){const m=a[f];let g=l[f];g=et(g);const A=s.ia(m);if(g instanceof Ca)c.push(m);else{const k=Oa(g,A);k!=null&&(c.push(m),u.set(m,k))}}const d=new yt(c);return new bb(u,d,s.fieldTransforms)}function Oa(t,e){if(xb(t=et(t)))return ju("Unsupported field value:",e,t),kb(t,e);if(t instanceof Fu)return function(n,i){if(!vb(i.Zc))throw i.oa(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,i){const r=[];let o=0;for(const s of n){let a=Oa(s,i.ra(o));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),o++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return n3(i.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Me.fromDate(n);return{timestampValue:Yl(i.wt,r)}}if(n instanceof Me){const r=new Me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Yl(i.wt,r)}}if(n instanceof zu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof oi)return{bytesValue:g3(i.wt,n._byteString)};if(n instanceof wt){const r=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(r))throw i.oa(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Jg(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.oa(`Unsupported field value: ${Pu(n)}`)}(t,e)}function kb(t,e){const n={};return Rg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ui(t,(i,r)=>{const o=Oa(r,e.ea(i));o!=null&&(n[i]=o)}),{mapValue:{fields:n}}}function xb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof zu||t instanceof oi||t instanceof wt||t instanceof Fu)}function ju(t,e,n){if(!xb(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Pu(n);throw i==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+i)}}function Ql(t,e,n){if((e=et(e))instanceof Sa)return e._internalPath;if(typeof e=="string")return $u(t,e);throw Ms("Field path arguments must be of type string or ",t,!1,void 0,n)}const zE=new RegExp("[~\\*/\\[\\]]");function $u(t,e,n){if(e.search(zE)>=0)throw Ms(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Sa(...e.split("."))._internalPath}catch{throw Ms(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ms(t,e,n,i,r){const o=i&&!i.isEmpty(),s=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${i}`),s&&(l+=` in document ${r}`),l+=")"),new B(I.INVALID_ARGUMENT,a+t+l)}function _b(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,i,r,o){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Eb("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UE extends Ls{data(){return super.data()}}function Eb(t,e){return typeof e=="string"?$u(t,e):e instanceof Sa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ib extends Ls{constructor(e,n,i,r,o,s){super(e,n,i,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $E(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Eb("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class $E extends Ib{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{convertValue(e,n="none"){switch(ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){const i={};return ui(e.fields,(r,o)=>{i[r]=this.convertValue(o,n)}),i}convertGeoPoint(e){return new zu(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Pg(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Kr(e));default:return null}}convertTimestamp(e){const n=Cn(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Ie.fromString(e);_e(ib(i));const r=new Bi(i.get(1),i.get(3)),o=new Y(i.popFirst(5));return r.isEqual(n)||An(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class BE extends Tb{constructor(e){super(),this.firestore=e}convertBytes(e){return new oi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function ar(t,e){if((t=et(t)).firestore!==e)throw new B(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}class HE extends Tb{constructor(e){super(),this.firestore=e}convertBytes(e){return new oi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function bT(t,e){const n=mb(t.firestore,Lu),i=OE(t),r=Ab(t.converter,e);return GE(n,[wb(yb(t.firestore),"addDoc",i._key,r,t.converter!==null,{}).toMutation(i._key,ft.exists(!1))]).then(()=>i)}function GE(t,e){return function(n,i){const r=new _n;return n.asyncQueue.enqueueAndForget(async()=>mE(await AE(n),i,r)),r.promise}(pb(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=yb(e)}get(e){const n=ar(e,this._firestore),i=new BE(this._firestore);return this._transaction.lookup([n._key]).then(r=>{if(!r||r.length!==1)return ee();const o=r[0];if(o.isFoundDocument())return new Ls(this._firestore,i,o.key,o,n.converter);if(o.isNoDocument())return new Ls(this._firestore,i,n._key,null,n.converter);throw ee()})}set(e,n,i){const r=ar(e,this._firestore),o=Ab(r.converter,n,i),s=wb(this._dataReader,"Transaction.set",r._key,o,r.converter!==null,i);return this._transaction.set(r._key,s),this}update(e,n,i,...r){const o=ar(e,this._firestore);let s;return s=typeof(n=et(n))=="string"||n instanceof Sa?FE(this._dataReader,"Transaction.update",o._key,n,i,r):LE(this._dataReader,"Transaction.update",o._key,n),this._transaction.update(o._key,s),this}delete(e){const n=ar(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=ar(e,this._firestore),i=new HE(this._firestore);return super.get(e).then(r=>new Ib(this._firestore,i,n._key,r._document,new jE(!1,!1),n.converter))}}function vT(t,e,n){t=mb(t,Lu);const i=Object.assign(Object.assign({},VE),n);return function(r){if(r.maxAttempts<1)throw new B(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),SE(pb(t),r=>e(new qE(t,r)),i)}(function(t,e=!0){(function(n){er=n})(ao),zi(new Jn("firestore",(n,{options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Lu(r,new k_(n.getProvider("auth-internal")),new I_(n.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC")),xn(Ef,"3.4.11",t),xn(Ef,"3.4.11","esm2017")})();const WE="modulepreload",Kf={},KE="/",zo=function(e,n){return!n||n.length===0?e():Promise.all(n.map(i=>{if(i=`${KE}${i}`,i in Kf)return;Kf[i]=!0;const r=i.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":WE,r||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),r)return new Promise((a,l)=>{s.addEventListener("load",a),s.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function YE(){return Sb().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Sb(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const XE=typeof Proxy=="function",QE="devtools-plugin:setup",JE="plugin:settings:set";let gi,Jl;function ZE(){var t;return gi!==void 0||(typeof window!="undefined"&&window.performance?(gi=!0,Jl=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(gi=!0,Jl=global.perf_hooks.performance):gi=!1),gi}function e5(){return ZE()?Jl.now():Date.now()}class t5{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const i={};if(e.settings)for(const s in e.settings){const a=e.settings[s];i[s]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let o=Object.assign({},i);try{const s=localStorage.getItem(r),a=JSON.parse(s);Object.assign(o,a)}catch{}this.fallbacks={getSettings(){return o},setSettings(s){try{localStorage.setItem(r,JSON.stringify(s))}catch{}o=s},now(){return e5()}},n&&n.on(JE,(s,a)=>{s===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(s,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(s,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function n5(t,e){const n=t,i=Sb(),r=YE(),o=XE&&n.enableEarlyProxy;if(r&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!o))r.emit(QE,t,e);else{const s=o?new t5(n,r):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:s}),s&&e(s.proxiedTarget)}}/*!
  * vue-router v4.1.0
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Gt=typeof window!="undefined";function i5(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ue=Object.assign;function sl(t,e){const n={};for(const i in e){const r=e[i];n[i]=pt(r)?r.map(t):t(r)}return n}const Ir=()=>{},pt=Array.isArray;function re(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const r5=/\/$/,o5=t=>t.replace(r5,"");function al(t,e,n="/"){let i,r={},o="",s="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),o=e.slice(l+1,a>-1?a:e.length),r=t(o)),a>-1&&(i=i||e.slice(0,a),s=e.slice(a,e.length)),i=l5(i!=null?i:e,n),{fullPath:i+(o&&"?")+o+s,path:i,query:r,hash:s}}function s5(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Yf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Xf(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Rn(e.matched[i],n.matched[r])&&Cb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Rn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Cb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!a5(t[n],e[n]))return!1;return!0}function a5(t,e){return pt(t)?Qf(t,e):pt(e)?Qf(e,t):t===e}function Qf(t,e){return pt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function l5(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return re(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,o,s;for(o=0;o<i.length;o++)if(s=i[o],s!==".")if(s==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Zr;(function(t){t.pop="pop",t.push="push"})(Zr||(Zr={}));var Tr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Tr||(Tr={}));function c5(t){if(!t)if(Gt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),o5(t)}const u5=/^[^#]+#/;function d5(t,e){return t.replace(u5,"#")+e}function f5(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Ra=()=>({left:window.pageXOffset,top:window.pageYOffset});function h5(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!i||!document.getElementById(t.el.slice(1))))try{const o=document.querySelector(t.el);if(i&&o){re(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{re(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r){re(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=f5(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Jf(t,e){return(history.state?history.state.position-e:-1)+t}const Zl=new Map;function m5(t,e){Zl.set(t,e)}function p5(t){const e=Zl.get(t);return Zl.delete(t),e}let g5=()=>location.protocol+"//"+location.host;function Ob(t,e){const{pathname:n,search:i,hash:r}=e,o=t.indexOf("#");if(o>-1){let a=r.includes(t.slice(o))?t.slice(o).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Yf(l,"")}return Yf(n,t)+i+r}function b5(t,e,n,i){let r=[],o=[],s=null;const a=({state:f})=>{const m=Ob(t,location),g=n.value,A=e.value;let k=0;if(f){if(n.value=m,e.value=f,s&&s===g){s=null;return}k=A?f.position-A.position:0}else i(m);r.forEach(b=>{b(n.value,g,{delta:k,type:Zr.pop,direction:k?k>0?Tr.forward:Tr.back:Tr.unknown})})};function l(){s=n.value}function c(f){r.push(f);const m=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return o.push(m),m}function u(){const{history:f}=window;!f.state||f.replaceState(ue({},f.state,{scroll:Ra()}),"")}function d(){for(const f of o)f();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Zf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Ra():null}}function v5(t){const{history:e,location:n}=window,i={value:Ob(t,n)},r={value:e.state};r.value||o(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:g5()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(m){re("Error with push/replace State",m),n[u?"replace":"assign"](f)}}function s(l,c){const u=ue({},e.state,Zf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});o(l,u,!0),i.value=l}function a(l,c){const u=ue({},r.value,e.state,{forward:l,scroll:Ra()});e.state||re(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),o(u.current,u,!0);const d=ue({},Zf(i.value,l,null),{position:u.position+1},c);o(l,d,!1),i.value=l}return{location:i,state:r,push:a,replace:s}}function y5(t){t=c5(t);const e=v5(t),n=b5(t,e.state,e.location,e.replace);function i(o,s=!0){s||n.pauseListeners(),history.go(o)}const r=ue({location:"",base:t,go:i,createHref:d5.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function w5(t){return typeof t=="string"||t&&typeof t=="object"}function Rb(t){return typeof t=="string"||typeof t=="symbol"}const cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Nb=Symbol("navigation failure");var eh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(eh||(eh={}));const k5={[1]({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},[2]({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${_5(e)}" via a navigation guard.`},[4]({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},[8]({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},[16]({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function qi(t,e){return ue(new Error(k5[t](e)),{type:t,[Nb]:!0},e)}function un(t,e){return t instanceof Error&&Nb in t&&(e==null||!!(t.type&e))}const x5=["params","query","hash"];function _5(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of x5)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const th="[^/]+?",E5={sensitive:!1,strict:!1,start:!0,end:!0},I5=/[.+*?^${}()[\]/\\]/g;function T5(t,e){const n=ue({},E5,e),i=[];let r=n.start?"^":"";const o=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let m=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(I5,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:A,optional:k,regexp:b}=f;o.push({name:g,repeatable:A,optional:k});const y=b||th;if(y!==th){m+=10;try{new RegExp(`(${y})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+U.message)}}let N=A?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;d||(N=k&&c.length<2?`(?:/${N})`:"/"+N),k&&(N+="?"),r+=N,m+=20,k&&(m+=-8),A&&(m+=-20),y===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const s=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(s),d={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",g=o[f-1];d[g.name]=m&&g.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:A,optional:k}=m,b=g in c?c[g]:"";if(pt(b)&&!A)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=pt(b)?b.join("/"):b;if(!y)if(k)f.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u}return{re:s,score:i,keys:o,parse:a,stringify:l}}function A5(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function S5(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const o=A5(i[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-i.length)===1){if(nh(i))return 1;if(nh(r))return-1}return r.length-i.length}function nh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const C5={type:0,value:""},O5=/[a-zA-Z0-9_]/;function R5(t){if(!t)return[[]];if(t==="/")return[[C5]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,i=n;const r=[];let o;function s(){o&&r.push(o),o=[]}let a=0,l,c="",u="";function d(){!c||(n===0?o.push({type:0,value:c}):n===1||n===2||n===3?(o.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),s()):l===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:O5.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),s(),r}function N5(t,e,n){const i=T5(R5(t.path),n);{const o=new Set;for(const s of i.keys)o.has(s.name)&&re(`Found duplicated params with name "${s.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),o.add(s.name)}const r=ue(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function P5(t,e){const n=[],i=new Map;e=rh({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function o(u,d,f){const m=!f,g=M5(u);U5(g,d),g.aliasOf=f&&f.record;const A=rh(e,u),k=[g];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const U of N)k.push(ue({},g,{components:f?f.record.components:g.components,path:U,aliasOf:f?f.record:g}))}let b,y;for(const N of k){const{path:U}=N;if(d&&U[0]!=="/"){const Q=d.record.path,se=Q[Q.length-1]==="/"?"":"/";N.path=d.record.path+(U&&se+U)}if(N.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(b=N5(N,d,A),d&&U[0]==="/"&&j5(b,d),f?(f.alias.push(b),z5(f,b)):(y=y||b,y!==b&&y.alias.push(b),m&&u.name&&!ih(b)&&s(u.name)),"children"in g){const Q=g.children;for(let se=0;se<Q.length;se++)o(Q[se],b,f&&f.children[se])}f=f||b,l(b)}return y?()=>{s(y)}:Ir}function s(u){if(Rb(u)){const d=i.get(u);d&&(i.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(s),u.alias.forEach(s))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&S5(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Pb(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!ih(u)&&i.set(u.record.name,u)}function c(u,d){let f,m={},g,A;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw qi(1,{location:u});A=f.record.name,m=ue(D5(d.params,f.keys.filter(y=>!y.optional).map(y=>y.name)),u.params),g=f.stringify(m)}else if("path"in u)g=u.path,g.startsWith("/")||re(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(y=>y.re.test(g)),f&&(m=f.parse(g),A=f.record.name);else{if(f=d.name?i.get(d.name):n.find(y=>y.re.test(d.path)),!f)throw qi(1,{location:u,currentLocation:d});A=f.record.name,m=ue({},d.params,u.params),g=f.stringify(m)}const k=[];let b=f;for(;b;)k.unshift(b.record),b=b.parent;return{name:A,path:g,params:m,matched:k,meta:F5(k)}}return t.forEach(u=>o(u)),{addRoute:o,resolve:c,removeRoute:s,getRoutes:a,getRecordMatcher:r}}function D5(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function M5(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:L5(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function L5(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function ih(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function F5(t){return t.reduce((e,n)=>ue(e,n.meta),{})}function rh(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function ec(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function z5(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(ec.bind(null,n)))return re(`Alias "${e.record.path}" and the original record: "${t.record.path}" should have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(ec.bind(null,n)))return re(`Alias "${e.record.path}" and the original record: "${t.record.path}" should have the exact same param named "${n.name}"`)}function U5(t,e){e&&e.record.name&&!t.name&&!t.path&&re(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function j5(t,e){for(const n of e.keys)if(!t.keys.find(ec.bind(null,n)))return re(`Absolute path "${t.record.path}" should have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function Pb(t,e){return e.children.some(n=>n===t||Pb(t,n))}const Db=/#/g,$5=/&/g,V5=/\//g,B5=/=/g,H5=/\?/g,Mb=/\+/g,G5=/%5B/g,q5=/%5D/g,Lb=/%5E/g,W5=/%60/g,Fb=/%7B/g,K5=/%7C/g,zb=/%7D/g,Y5=/%20/g;function Vu(t){return encodeURI(""+t).replace(K5,"|").replace(G5,"[").replace(q5,"]")}function X5(t){return Vu(t).replace(Fb,"{").replace(zb,"}").replace(Lb,"^")}function tc(t){return Vu(t).replace(Mb,"%2B").replace(Y5,"+").replace(Db,"%23").replace($5,"%26").replace(W5,"`").replace(Fb,"{").replace(zb,"}").replace(Lb,"^")}function Q5(t){return tc(t).replace(B5,"%3D")}function J5(t){return Vu(t).replace(Db,"%23").replace(H5,"%3F")}function Z5(t){return t==null?"":J5(t).replace(V5,"%2F")}function eo(t){try{return decodeURIComponent(""+t)}catch{re(`Error decoding "${t}". Using original value`)}return""+t}function e6(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const o=i[r].replace(Mb," "),s=o.indexOf("="),a=eo(s<0?o:o.slice(0,s)),l=s<0?null:eo(o.slice(s+1));if(a in e){let c=e[a];pt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function oh(t){let e="";for(let n in t){const i=t[n];if(n=Q5(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(pt(i)?i.map(o=>o&&tc(o)):[i&&tc(i)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function t6(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=pt(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const n6=Symbol("router view location matched"),sh=Symbol("router view depth"),Bu=Symbol("router"),Ub=Symbol("route location"),nc=Symbol("router view location");function lr(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function mn(t,e,n,i,r){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((s,a)=>{const l=d=>{d===!1?a(qi(4,{from:n,to:e})):d instanceof Error?a(d):w5(d)?a(qi(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),s())},c=t.call(i&&i.instances[r],e,n,i6(l,e,n));let u=Promise.resolve(c);if(t.length<3&&(u=u.then(l)),t.length>2){const d=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)u=u.then(f=>l._called?f:(re(d),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!l._called){re(d),a(new Error("Invalid navigation guard"));return}}u.catch(d=>a(d))})}function i6(t,e,n){let i=0;return function(){i++===1&&re(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,i===1&&t.apply(null,arguments)}}function ll(t,e,n,i){const r=[];for(const o of t){!o.components&&!o.children.length&&re(`Record with path "${o.path}" is either missing a "component(s)" or "children" property.`);for(const s in o.components){let a=o.components[s];{if(!a||typeof a!="object"&&typeof a!="function")throw re(`Component "${s}" in record with path "${o.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){re(`Component "${s}" in record with path "${o.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const l=a;a=()=>l}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,re(`Component "${s}" in record with path "${o.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!o.instances[s]))if(r6(a)){const c=(a.__vccOpts||a)[e];c&&r.push(mn(c,n,i,o,s))}else{let l=a();"catch"in l||(re(`Component "${s}" in record with path "${o.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),l=Promise.resolve(l)),r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${o.path}"`));const u=i5(c)?c.default:c;o.components[s]=u;const f=(u.__vccOpts||u)[e];return f&&mn(f,n,i,o,s)()}))}}}return r}function r6(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ah(t){const e=wn(Bu),n=wn(Ub),i=Ee(()=>e.resolve(Ci(t.to))),r=Ee(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Rn.bind(null,u));if(f>-1)return f;const m=lh(l[c-2]);return c>1&&lh(u)===m&&d[d.length-1].path!==m?d.findIndex(Rn.bind(null,l[c-2])):f}),o=Ee(()=>r.value>-1&&l6(n.params,i.value.params)),s=Ee(()=>r.value>-1&&r.value===n.matched.length-1&&Cb(n.params,i.value.params));function a(l={}){return a6(l)?e[Ci(t.replace)?"replace":"push"](Ci(t.to)).catch(Ir):Promise.resolve()}if(Gt){const l=Dm();if(l){const c={route:i.value,isActive:o.value,isExactActive:s.value};l.__vrl_devtools=l.__vrl_devtools||[],l.__vrl_devtools.push(c),D0(()=>{c.route=i.value,c.isActive=o.value,c.isExactActive=s.value},{flush:"post"})}}return{route:i,href:Ee(()=>i.value.href),isActive:o,isExactActive:s,navigate:a}}const o6=Dn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ah,setup(t,{slots:e}){const n=Xi(ah(t)),{options:i}=wn(Bu),r=Ee(()=>({[ch(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[ch(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:ta("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),s6=o6;function a6(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function l6(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!pt(r)||r.length!==i.length||i.some((o,s)=>o!==r[s]))return!1}return!0}function lh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ch=(t,e,n)=>t!=null?t:e!=null?e:n,c6=Dn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){d6();const i=wn(nc),r=Ee(()=>t.route||i.value),o=wn(sh,0),s=Ee(()=>{let c=Ci(o);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Ee(()=>r.value.matched[s.value]);Go(sh,Ee(()=>s.value+1)),Go(n6,a),Go(nc,r);const l=Ho();return Oi(()=>[l.value,a.value,t.name],([c,u,d],[f,m,g])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Rn(u,m)||!f)&&(u.enterCallbacks[d]||[]).forEach(A=>A(c))},{flush:"post"}),()=>{const c=r.value,u=a.value,d=u&&u.components[t.name],f=t.name;if(!d)return uh(n.default,{Component:d,route:c});const m=u.props[t.name],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,k=ta(d,ue({},g,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(u.instances[f]=null)},ref:l}));if(Gt&&k.ref){const b={depth:s.value,name:u.name,path:u.path,meta:u.meta};(pt(k.ref)?k.ref.map(N=>N.i):[k.ref.i]).forEach(N=>{N.__vrv_devtools=b})}return uh(n.default,{Component:k,route:c})||k}}});function uh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const u6=c6;function d6(){const t=Dm(),e=t.parent&&t.parent.type.name;if(e&&(e==="KeepAlive"||e.includes("Transition"))){const n=e==="KeepAlive"?"keep-alive":"transition";re(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function cr(t,e){const n=ue({},t,{matched:t.matched.map(i=>w6(i,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function Uo(t){return{_custom:{display:t}}}let f6=0;function h6(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const i=f6++;n5({id:"org.vuejs.router"+(i?"."+i:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((u,d)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:cr(e.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:u,componentInstance:d})=>{if(d.__vrv_devtools){const f=d.__vrv_devtools;u.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:jb})}pt(d.__vrl_devtools)&&(d.__devtoolsApi=r,d.__vrl_devtools.forEach(f=>{let m=Bb,g="";f.isExactActive?(m=Vb,g="This is exactly active"):f.isActive&&(m=$b,g="This link is active"),u.tags.push({label:f.route.path,textColor:0,tooltip:g,backgroundColor:m})}))}),Oi(e.currentRoute,()=>{l(),r.notifyComponentUpdate(),r.sendInspectorTree(a),r.sendInspectorState(a)});const o="router:navigations:"+i;r.addTimelineLayer({id:o,label:`Router${i?" "+i:""} Navigations`,color:4237508}),e.onError((u,d)=>{r.addTimelineEvent({layerId:o,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:r.now(),data:{error:u},groupId:d.meta.__navigationId}})});let s=0;e.beforeEach((u,d)=>{const f={guard:Uo("beforeEach"),from:cr(d,"Current Location during this navigation"),to:cr(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:s++}),r.addTimelineEvent({layerId:o,event:{time:r.now(),title:"Start of navigation",subtitle:u.fullPath,data:f,groupId:u.meta.__navigationId}})}),e.afterEach((u,d,f)=>{const m={guard:Uo("afterEach")};f?(m.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},m.status=Uo("\u274C")):m.status=Uo("\u2705"),m.from=cr(d,"Current Location during this navigation"),m.to=cr(u,"Target location"),r.addTimelineEvent({layerId:o,event:{title:"End of navigation",subtitle:u.fullPath,time:r.now(),data:m,logType:f?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+i;r.addInspector({id:a,label:"Routes"+(i?" "+i:""),icon:"book",treeFilterPlaceholder:"Search routes"});function l(){if(!c)return;const u=c;let d=n.getRoutes().filter(f=>!f.parent);d.forEach(qb),u.filter&&(d=d.filter(f=>ic(f,u.filter.toLowerCase()))),d.forEach(f=>Gb(f,e.currentRoute.value)),u.rootNodes=d.map(Hb)}let c;r.on.getInspectorTree(u=>{c=u,u.app===t&&u.inspectorId===a&&l()}),r.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const f=n.getRoutes().find(m=>m.record.__vd_id===u.nodeId);f&&(u.state={options:p6(f)})}}),r.sendInspectorTree(a),r.sendInspectorState(a)})}function m6(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function p6(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(i=>`${i.name}${m6(i)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(i=>i.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(i=>i.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const jb=15485081,$b=2450411,Vb=8702998,g6=2282478,Bb=16486972,b6=6710886;function Hb(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:g6}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:Bb}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:jb}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:Vb}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:$b}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:b6});let i=n.__vd_id;return i==null&&(i=String(v6++),n.__vd_id=i),{id:i,label:n.path,tags:e,children:t.children.map(Hb)}}let v6=0;const y6=/^\/(.*)\/([a-z]*)$/;function Gb(t,e){const n=e.matched.length&&Rn(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(i=>Rn(i,t.record))),t.children.forEach(i=>Gb(i,e))}function qb(t){t.__vd_match=!1,t.children.forEach(qb)}function ic(t,e){const n=String(t.re).match(y6);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(s=>ic(s,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const r=t.record.path.toLowerCase(),o=eo(r);return!e.startsWith("/")&&(o.includes(e)||r.includes(e))||o.startsWith(e)||r.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(s=>ic(s,e))}function w6(t,e){const n={};for(const i in t)e.includes(i)||(n[i]=t[i]);return n}function k6(t){const e=P5(t.routes,t),n=t.parseQuery||e6,i=t.stringifyQuery||oh,r=t.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const o=lr(),s=lr(),a=lr(),l=b0(cn);let c=cn;Gt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sl.bind(null,w=>""+w),d=sl.bind(null,Z5),f=sl.bind(null,eo);function m(w,L){let R,F;return Rb(w)?(R=e.getRecordMatcher(w),F=L):F=w,e.addRoute(F,R)}function g(w){const L=e.getRecordMatcher(w);L?e.removeRoute(L):re(`Cannot remove non-existent route "${String(w)}"`)}function A(){return e.getRoutes().map(w=>w.record)}function k(w){return!!e.getRecordMatcher(w)}function b(w,L){if(L=ue({},L||l.value),typeof w=="string"){const J=al(n,w,L.path),h=e.resolve({path:J.path},L),p=r.createHref(J.fullPath);return p.startsWith("//")?re(`Location "${w}" resolved to "${p}". A resolved location cannot start with multiple slashes.`):h.matched.length||re(`No match found for location with path "${w}"`),ue(J,h,{params:f(h.params),hash:eo(J.hash),redirectedFrom:void 0,href:p})}let R;if("path"in w)"params"in w&&!("name"in w)&&Object.keys(w.params).length&&re(`Path "${w.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),R=ue({},w,{path:al(n,w.path,L.path).path});else{const J=ue({},w.params);for(const h in J)J[h]==null&&delete J[h];R=ue({},w,{params:d(w.params)}),L.params=d(L.params)}const F=e.resolve(R,L),oe=w.hash||"";oe&&!oe.startsWith("#")&&re(`A \`hash\` should always start with the character "#". Replace "${oe}" with "#${oe}".`),F.params=u(f(F.params));const be=s5(i,ue({},w,{hash:X5(oe),path:F.path})),Z=r.createHref(be);return Z.startsWith("//")?re(`Location "${w}" resolved to "${Z}". A resolved location cannot start with multiple slashes.`):F.matched.length||re(`No match found for location with path "${"path"in w?w.path:w}"`),ue({fullPath:be,hash:oe,query:i===oh?t6(w.query):w.query||{}},F,{redirectedFrom:void 0,href:Z})}function y(w){return typeof w=="string"?al(n,w,l.value.path):ue({},w)}function N(w,L){if(c!==w)return qi(8,{from:L,to:w})}function U(w){return ye(w)}function Q(w){return U(ue(y(w),{replace:!0}))}function se(w){const L=w.matched[w.matched.length-1];if(L&&L.redirect){const{redirect:R}=L;let F=typeof R=="function"?R(w):R;if(typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=y(F):{path:F},F.params={}),!("path"in F)&&!("name"in F))throw re(`Invalid redirect found:
${JSON.stringify(F,null,2)}
 when navigating to "${w.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ue({query:w.query,hash:w.hash,params:"path"in F?{}:w.params},F)}}function ye(w,L){const R=c=b(w),F=l.value,oe=w.state,be=w.force,Z=w.replace===!0,J=se(R);if(J)return ye(ue(y(J),{state:oe,force:be,replace:Z}),L||R);const h=R;h.redirectedFrom=L;let p;return!be&&Xf(i,F,R)&&(p=qi(16,{to:h,from:F}),mi(F,F,!0,!1)),(p?Promise.resolve(p):Te(h,F)).catch(v=>un(v)?un(v,2)?v:ct(v):ge(v,h,F)).then(v=>{if(v){if(un(v,2))return Xf(i,b(v.to),h)&&L&&(L._count=L._count?L._count+1:1)>10?(re(`Detected an infinite redirection in a navigation guard when going from "${F.fullPath}" to "${h.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):ye(ue(y(v.to),{state:oe,force:be,replace:Z}),L||h)}else v=Bt(h,F,!0,Z,oe);return Ot(h,F,v),v})}function tt(w,L){const R=N(w,L);return R?Promise.reject(R):Promise.resolve()}function Te(w,L){let R;const[F,oe,be]=x6(w,L);R=ll(F.reverse(),"beforeRouteLeave",w,L);for(const J of F)J.leaveGuards.forEach(h=>{R.push(mn(h,w,L))});const Z=tt.bind(null,w,L);return R.push(Z),bi(R).then(()=>{R=[];for(const J of o.list())R.push(mn(J,w,L));return R.push(Z),bi(R)}).then(()=>{R=ll(oe,"beforeRouteUpdate",w,L);for(const J of oe)J.updateGuards.forEach(h=>{R.push(mn(h,w,L))});return R.push(Z),bi(R)}).then(()=>{R=[];for(const J of w.matched)if(J.beforeEnter&&!L.matched.includes(J))if(pt(J.beforeEnter))for(const h of J.beforeEnter)R.push(mn(h,w,L));else R.push(mn(J.beforeEnter,w,L));return R.push(Z),bi(R)}).then(()=>(w.matched.forEach(J=>J.enterCallbacks={}),R=ll(be,"beforeRouteEnter",w,L),R.push(Z),bi(R))).then(()=>{R=[];for(const J of s.list())R.push(mn(J,w,L));return R.push(Z),bi(R)}).catch(J=>un(J,8)?J:Promise.reject(J))}function Ot(w,L,R){for(const F of a.list())F(w,L,R)}function Bt(w,L,R,F,oe){const be=N(w,L);if(be)return be;const Z=L===cn,J=Gt?history.state:{};R&&(F||Z?r.replace(w.fullPath,ue({scroll:Z&&J&&J.scroll},oe)):r.push(w.fullPath,oe)),l.value=w,mi(w,L,R,Z),ct()}let kt;function di(){kt||(kt=r.listen((w,L,R)=>{if(!ir.listening)return;const F=b(w),oe=se(F);if(oe){ye(ue(oe,{replace:!0}),F).catch(Ir);return}c=F;const be=l.value;Gt&&m5(Jf(be.fullPath,R.delta),Ra()),Te(F,be).catch(Z=>un(Z,12)?Z:un(Z,2)?(ye(Z.to,F).then(J=>{un(J,20)&&!R.delta&&R.type===Zr.pop&&r.go(-1,!1)}).catch(Ir),Promise.reject()):(R.delta&&r.go(-R.delta,!1),ge(Z,F,be))).then(Z=>{Z=Z||Bt(F,be,!1),Z&&(R.delta?r.go(-R.delta,!1):R.type===Zr.pop&&un(Z,20)&&r.go(-1,!1)),Ot(F,be,Z)}).catch(Ir)}))}let fi=lr(),hi=lr(),Pe;function ge(w,L,R){ct(w);const F=hi.list();return F.length?F.forEach(oe=>oe(w,L,R)):(re("uncaught error during route navigation:"),console.error(w)),Promise.reject(w)}function de(){return Pe&&l.value!==cn?Promise.resolve():new Promise((w,L)=>{fi.add([w,L])})}function ct(w){return Pe||(Pe=!w,di(),fi.list().forEach(([L,R])=>w?R(w):L()),fi.reset()),w}function mi(w,L,R,F){const{scrollBehavior:oe}=t;if(!Gt||!oe)return Promise.resolve();const be=!R&&p5(Jf(w.fullPath,0))||(F||!R)&&history.state&&history.state.scroll||null;return dm().then(()=>oe(w,L,be)).then(Z=>Z&&h5(Z)).catch(Z=>ge(Z,w,L))}const Ht=w=>r.go(w);let Rt;const bt=new Set,ir={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:k,getRoutes:A,resolve:b,options:t,push:U,replace:Q,go:Ht,back:()=>Ht(-1),forward:()=>Ht(1),beforeEach:o.add,beforeResolve:s.add,afterEach:a.add,onError:hi.add,isReady:de,install(w){const L=this;w.component("RouterLink",s6),w.component("RouterView",u6),w.config.globalProperties.$router=L,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Ci(l)}),Gt&&!Rt&&l.value===cn&&(Rt=!0,U(r.location).catch(oe=>{re("Unexpected error when starting the router:",oe)}));const R={};for(const oe in cn)R[oe]=Ee(()=>l.value[oe]);w.provide(Bu,L),w.provide(Ub,Xi(R)),w.provide(nc,l);const F=w.unmount;bt.add(w),w.unmount=function(){bt.delete(w),bt.size<1&&(c=cn,kt&&kt(),kt=null,l.value=cn,Rt=!1,Pe=!1),F()},Gt&&h6(w,L,e)}};return ir}function bi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function x6(t,e){const n=[],i=[],r=[],o=Math.max(e.matched.length,t.matched.length);for(let s=0;s<o;s++){const a=e.matched[s];a&&(t.matched.find(c=>Rn(c,a))?i.push(a):n.push(a));const l=t.matched[s];l&&(e.matched.find(c=>Rn(c,l))||r.push(l))}return[n,i,r]}var Wb=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n};const _6=Dn({name:"Home"}),E6={class:"home"},I6=le("p",null,"home page lol",-1),T6=[I6];function A6(t,e,n,i,r,o){return Wo(),Il("div",E6,T6)}var S6=Wb(_6,[["render",A6]]);const rc=[{path:"/",name:"Home",component:S6,meta:{reqAuth:!1}},{path:"/about_us",name:"About Us",component:()=>zo(()=>import("./AboutUs.650bb429.js"),[]),meta:{reqAuth:!1}},{path:"/contact_us",name:"Contact Us",component:()=>zo(()=>import("./ContactUs.fdcfec9d.js"),["assets/ContactUs.fdcfec9d.js","assets/ContactUs.2802a4ca.css"]),meta:{reqAuth:!1}},{path:"/newsletters",name:"Newsletters",component:()=>zo(()=>import("./Newsletters.a4e8b6d1.js"),[]),meta:{reqAuth:!0}},{path:"/newsletter_builder",name:"Newsletter Builder",component:()=>zo(()=>import("./NewsletterBuilder.2f73fd42.js"),["assets/NewsletterBuilder.2f73fd42.js","assets/NewsletterBuilder.36567381.css"]),meta:{reqAuth:!0}}],Hu=k6({history:y5("/"),routes:rc});Hu.beforeEach((t,e,n)=>{ts.authStateVerified.then(()=>{t.meta.reqAuth&&!ts.isSignedIn?ts.displayError("You do not have permission to access this page. If you believe this is an error please try logging in or contact Membership and Yearbook for help."):n()})});/*!
 * bulma-toast 2.4.1 
 * (c) 2018-present @rfoel <rafaelfr@outlook.com> 
 * Released under the MIT License.
 */function dh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function oc(t){for(var e,n=1;n<arguments.length;n++)e=arguments[n]==null?{}:arguments[n],n%2?dh(Object(e),!0).forEach(function(i){C6(t,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):dh(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))});return t}function Kb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function fh(t,e){for(var n,i=0;i<e.length;i++)n=e[i],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function Yb(t,e,n){return e&&fh(t.prototype,e),n&&fh(t,n),t}function C6(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O6={duration:2e3,position:"top-right",closeOnClick:!0,opacity:1,single:!1,offsetTop:0,offsetBottom:0,offsetLeft:0,offsetRight:0,extraClasses:""},vi=oc({},O6),Ar={},R6=null,N6="width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;",P6=function(t,e,n,i,r){return t==="top-left"?"left:".concat(i,";top:").concat(e,";text-align:left;align-items:flex-start;"):t==="top-right"?"right:".concat(r,";top:").concat(e,";text-align:right;align-items:flex-end;"):t==="top-center"?"top:".concat(e,";left:0;right:0;text-align:center;align-items:center;"):t==="bottom-left"?"left:".concat(i,";bottom:").concat(n,";text-align:left;align-items:flex-start;"):t==="bottom-right"?"right:".concat(r,";bottom:").concat(n,";text-align:right;align-items:flex-end;"):t==="bottom-center"?"bottom:".concat(n,";left:0;right:0;text-align:center;align-items:center;"):t==="center"?"top:0;left:0;right:0;bottom:0;flex-flow:column;justify-content:center;align-items:center;":void 0};function Fs(){var t;return(t=R6)!==null&&t!==void 0?t:document}function D6(t,e,n,i,r,o){if(Ar.position)return Ar.position;var s=Fs().createElement("div");return s.setAttribute("style",N6+P6(e,n,i,r,o)),t.appendChild(s),Ar.position=s,s}function hh(t){if(!t.message)throw new Error("message is required");var e=oc(oc({},vi),t),n=new M6(e),i=D6(e.appendTo||Fs().body,e.position||vi.position,e.offsetTop||vi.offsetTop,e.offsetBottom||vi.offsetBottom,e.offsetLeft||vi.offsetLeft,e.offsetRight||vi.offsetRight);if(e.single)for(var r=i.lastElementChild;r;)i.removeChild(r),r=i.lastElementChild;i.appendChild(n.element)}var M6=function(){function t(e){var n=this;Kb(this,t),this.element=Fs().createElement("div"),this.opacity=e.opacity,this.type=e.type,this.animate=e.animate,this.dismissible=e.dismissible,this.closeOnClick=e.closeOnClick,this.message=e.message,this.duration=e.duration,this.pauseOnHover=e.pauseOnHover,this.offsetTop=e.offsetTop,this.offsetBottom=e.offsetBottom,this.offsetLeft=e.offsetLeft,this.offsetRight=e.offsetRight,this.extraClasses=e.extraClasses;var i="width:auto;pointer-events:auto;display:inline-flex;white-space:pre-wrap;opacity:".concat(this.opacity,";"),r=["notification",this.extraClasses];if(this.type&&r.push(this.type),this.animate&&this.animate.in){var o="animate__".concat(this.animate.in),s=this.animate.speed?"animate__".concat(this.animate.speed):"animate__faster";r.push("animate__animated ".concat(o," ").concat(s)),this.onAnimationEnd(function(){return n.element.classList.remove(o)})}if(this.element.className=r.join(" "),this.dismissible){var a=Fs().createElement("button");a.className="delete",a.addEventListener("click",function(){n.destroy()}),this.element.insertAdjacentElement("afterbegin",a)}else i+="padding: 1.25rem 1.5rem";this.closeOnClick&&this.element.addEventListener("click",function(){n.destroy()}),this.element.setAttribute("style",i),typeof this.message=="string"?this.element.insertAdjacentHTML("beforeend",this.message):this.element.appendChild(this.message);var l=new L6(function(){n.destroy()},this.duration);this.pauseOnHover&&(this.element.addEventListener("mouseover",function(){l.pause()}),this.element.addEventListener("mouseout",function(){l.resume()}))}return Yb(t,[{key:"destroy",value:function(){var e=this;this.animate&&this.animate.out?(this.element.classList.add("animate__".concat(this.animate.out)),this.onAnimationEnd(function(){e.removeParent(e.element.parentNode),e.element.remove(),delete Ar.position})):(this.removeParent(this.element.parentNode),this.element.remove(),delete Ar.position)}},{key:"removeParent",value:function(e){e&&1>=e.children.length&&e.remove()}},{key:"onAnimationEnd",value:function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:function(){},n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(var i in n)if(this.element.style[i]!==void 0){this.element.addEventListener(n[i],function(){return e()});break}}}]),t}(),L6=function(){function t(e,n){Kb(this,t),this.timer,this.start,this.remaining=n,this.callback=e,this.resume()}return Yb(t,[{key:"pause",value:function(){typeof document=="undefined"||(window.clearTimeout(this.timer),this.remaining-=new Date-this.start)}},{key:"resume",value:function(){typeof document=="undefined"||(this.start=new Date,window.clearTimeout(this.timer),this.timer=window.setTimeout(this.callback,this.remaining))}}]),t}();d1({apiKey:"AIzaSyCU5YpnSDueos6WH_yfS44ORPLGNj2FGpo",authDomain:"yearbook-a563c.firebaseapp.com",projectId:"yearbook-a563c",storageBucket:"yearbook-a563c.appspot.com",messagingSenderId:"708237611773",appId:"1:708237611773:web:ce4cbad19fe937767b2494"});const jo=fx();var $h;const Mt=Xi({isSignedIn:!!jo.currentUser,auth:jo,isNavbarVisible:!1,provider:new Wt,user:($h=jo.currentUser)!=null?$h:{},routes:rc.filter(t=>{var e;return!((e=t.meta)!=null&&e.reqAuth)}),selectedRoute:Hu.currentRoute,authStateVerified:new Promise(t=>{ek(jo,e=>{t(),Mt.isSignedIn=!!e,Mt.user=e!=null?e:{},Mt.routes=rc.filter(n=>{var i;return!!e||!((i=n.meta)!=null&&i.reqAuth)})})}),signInWithGoogle:()=>Ok(Mt.auth,Mt.provider),signOut:()=>tk(Mt.auth),signInOut:()=>Mt.isSignedIn?Mt.signOut():Mt.signInWithGoogle(),displayError:t=>hh({message:t,type:"is-danger"}),displaySuccess:t=>hh({message:t,type:"is-success"})}),yT=NE();var ts=Mt;const F6=Dn({setup(){return{authState:ts}}}),z6={"aria-label":"main navigation",class:"navbar",role:"navigation"},U6={class:"navbar-brand"},j6=le("a",{class:"navbar-item"},[le("img",{height:"28",src:"https://bulma.io/images/bulma-logo.png",width:"112",alt:"Ashby Logo"})],-1),$6=le("span",{"aria-hidden":"true"},null,-1),V6=le("span",{"aria-hidden":"true"},null,-1),B6=le("span",{"aria-hidden":"true"},null,-1),H6=[$6,V6,B6],G6={class:"navbar-start"},q6={class:"navbar-end"},W6={class:"navbar-item"},K6={class:"buttons"},Y6=le("br",null,null,-1),X6=le("br",null,null,-1),Q6={class:"footer"},J6={class:"content has-text-centered"},Z6=le("p",null,[br(" Made by "),le("a",{href:"https://github.com/axriosn"},"Alex R."),br(" for Ashby RC's Membership and Yearbook Committee. The source code and website content is purposefully "),le("a",{href:"https://choosealicense.com/no-permission/"},"not licensed"),br(". All rights reserved. ")],-1),e2={href:"https://twitter.com"},t2={class:"icon is-medium"},n2={href:"https://instagram.com"},i2={class:"icon is-medium"},r2={href:"https://facebook.com"},o2={class:"icon is-medium"};function s2(t,e,n,i,r,o){const s=ja("router-link"),a=ja("router-view"),l=ja("font-awesome-icon");return Wo(),Il(_t,null,[le("nav",z6,[le("div",U6,[j6,le("a",{class:Rr([{"is-active":t.authState.isNavbarVisible},"navbar-burger"]),"aria-controls":"navbar","aria-expanded":"false","aria-label":"menu","data-toggle":"navbar",role:"button",onClick:e[0]||(e[0]=c=>t.authState.isNavbarVisible=!t.authState.isNavbarVisible)},H6,2)]),le("div",{id:"navbar",class:Rr([{"is-active":t.authState.isNavbarVisible},"navbar-menu"])},[le("div",G6,[(Wo(!0),Il(_t,null,X0(t.authState.routes,c=>(Wo(),py(s,{to:c.path,class:"navbar-item"},{default:vm(()=>[br(ld(c.name),1)]),_:2},1032,["to"]))),256))]),le("div",q6,[le("div",W6,[le("div",K6,[le("a",{class:"button is-success",onClick:e[1]||(e[1]=(...c)=>t.authState.signInOut&&t.authState.signInOut(...c))},ld(t.authState.isSignedIn?"Sign Out":"Sign In"),1)])])])],2)]),Y6,Re(a),X6,le("footer",Q6,[le("div",J6,[Z6,le("a",e2,[le("span",t2,[Re(l,{icon:["fab","twitter"]})])]),le("a",n2,[le("span",i2,[Re(l,{icon:["fab","instagram"]})])]),le("a",r2,[le("span",o2,[Re(l,{icon:["fab","facebook"]})])])])])],64)}var a2=Wb(F6,[["render",s2]]),l2=function(){return Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},sc;typeof window!="undefined"&&(typeof Promise!="undefined"?sc=new Promise(function(t){return window.addEventListener("load",t)}):sc={then:function(t){return window.addEventListener("load",t)}});function c2(t,e){e===void 0&&(e={});var n=e.registrationOptions;n===void 0&&(n={}),delete e.registrationOptions;var i=function(r){for(var o=[],s=arguments.length-1;s-- >0;)o[s]=arguments[s+1];e&&e[r]&&e[r].apply(e,o)};"serviceWorker"in navigator&&sc.then(function(){l2()?(u2(t,i,n),navigator.serviceWorker.ready.then(function(r){i("ready",r)}).catch(function(r){return to(i,r)})):(Xb(t,i,n),navigator.serviceWorker.ready.then(function(r){i("ready",r)}).catch(function(r){return to(i,r)}))})}function to(t,e){navigator.onLine||t("offline"),t("error",e)}function Xb(t,e,n){navigator.serviceWorker.register(t,n).then(function(i){if(e("registered",i),i.waiting){e("updated",i);return}i.onupdatefound=function(){e("updatefound",i);var r=i.installing;r.onstatechange=function(){r.state==="installed"&&(navigator.serviceWorker.controller?e("updated",i):e("cached",i))}}}).catch(function(i){return to(e,i)})}function u2(t,e,n){fetch(t).then(function(i){i.status===404?(e("error",new Error("Service worker not found at "+t)),mh()):i.headers.get("content-type").indexOf("javascript")===-1?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+i.headers.get("content-type"))),mh()):Xb(t,e,n)}).catch(function(i){return to(e,i)})}function mh(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}).catch(function(t){return to(emit,t)})}c2("/service-worker.js",{ready(){console.log(`App is being served from cache by a service worker.
For more details, visit https://goo.gl/AFskqB`)},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function ph(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ph(Object(n),!0).forEach(function(i){h2(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ph(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function zs(t){return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zs(t)}function d2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function gh(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f2(t,e,n){return e&&gh(t.prototype,e),n&&gh(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function h2(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Gu(t,e){return p2(t)||b2(t,e)||Qb(t,e)||y2()}function Na(t){return m2(t)||g2(t)||Qb(t)||v2()}function m2(t){if(Array.isArray(t))return ac(t)}function p2(t){if(Array.isArray(t))return t}function g2(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function b2(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,o=!1,s,a;try{for(n=n.call(t);!(r=(s=n.next()).done)&&(i.push(s.value),!(e&&i.length===e));r=!0);}catch(l){o=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw a}}return i}}function Qb(t,e){if(!!t){if(typeof t=="string")return ac(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ac(t,e)}}function ac(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function v2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bh=function(){},qu={},Jb={},Zb=null,ev={mark:bh,measure:bh};try{typeof window!="undefined"&&(qu=window),typeof document!="undefined"&&(Jb=document),typeof MutationObserver!="undefined"&&(Zb=MutationObserver),typeof performance!="undefined"&&(ev=performance)}catch{}var w2=qu.navigator||{},vh=w2.userAgent,yh=vh===void 0?"":vh,Nn=qu,ke=Jb,wh=Zb,$o=ev;Nn.document;var sn=!!ke.documentElement&&!!ke.head&&typeof ke.addEventListener=="function"&&typeof ke.createElement=="function",tv=~yh.indexOf("MSIE")||~yh.indexOf("Trident/"),tn="___FONT_AWESOME___",lc=16,nv="fa",iv="svg-inline--fa",si="data-fa-i2svg",cc="data-fa-pseudo-element",k2="data-fa-pseudo-element-pending",Wu="data-prefix",Ku="data-icon",kh="fontawesome-i2svg",x2="async",_2=["HTML","HEAD","STYLE","SCRIPT"],rv=function(){try{return!0}catch{return!1}}(),Yu={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Us={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ov={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},E2={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},I2=/fa[srltdbk\-\ ]/,sv="fa-layers-text",T2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,A2={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},av=[1,2,3,4,5,6,7,8,9,10],S2=av.concat([11,12,13,14,15,16,17,18,19,20]),C2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Kn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},O2=[].concat(Na(Object.keys(Us)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Kn.GROUP,Kn.SWAP_OPACITY,Kn.PRIMARY,Kn.SECONDARY]).concat(av.map(function(t){return"".concat(t,"x")})).concat(S2.map(function(t){return"w-".concat(t)})),lv=Nn.FontAwesomeConfig||{};function R2(t){var e=ke.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function N2(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ke&&typeof ke.querySelector=="function"){var P2=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];P2.forEach(function(t){var e=Gu(t,2),n=e[0],i=e[1],r=N2(R2(n));r!=null&&(lv[i]=r)})}var D2={familyPrefix:nv,styleDefault:"solid",replacementClass:iv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Sr=D(D({},D2),lv);Sr.autoReplaceSvg||(Sr.observeMutations=!1);var V={};Object.keys(Sr).forEach(function(t){Object.defineProperty(V,t,{enumerable:!0,set:function(n){Sr[t]=n,ns.forEach(function(i){return i(V)})},get:function(){return Sr[t]}})});Nn.FontAwesomeConfig=V;var ns=[];function M2(t){return ns.push(t),function(){ns.splice(ns.indexOf(t),1)}}var dn=lc,Ft={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function L2(t){if(!(!t||!sn)){var e=ke.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ke.head.childNodes,i=null,r=n.length-1;r>-1;r--){var o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=o)}return ke.head.insertBefore(e,i),t}}var F2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function no(){for(var t=12,e="";t-- >0;)e+=F2[Math.random()*62|0];return e}function nr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Xu(t){return t.classList?nr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function cv(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function z2(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(cv(t[n]),'" ')},"").trim()}function Pa(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Qu(t){return t.size!==Ft.size||t.x!==Ft.x||t.y!==Ft.y||t.rotate!==Ft.rotate||t.flipX||t.flipY}function U2(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function j2(t){var e=t.transform,n=t.width,i=n===void 0?lc:n,r=t.height,o=r===void 0?lc:r,s=t.startCentered,a=s===void 0?!1:s,l="";return a&&tv?l+="translate(".concat(e.x/dn-i/2,"em, ").concat(e.y/dn-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/dn,"em), calc(-50% + ").concat(e.y/dn,"em)) "):l+="translate(".concat(e.x/dn,"em, ").concat(e.y/dn,"em) "),l+="scale(".concat(e.size/dn*(e.flipX?-1:1),", ").concat(e.size/dn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var $2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function uv(){var t=nv,e=iv,n=V.familyPrefix,i=V.replacementClass,r=$2;if(n!==t||i!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var xh=!1;function cl(){V.autoAddCss&&!xh&&(L2(uv()),xh=!0)}var V2={mixout:function(){return{dom:{css:uv,insertCss:cl}}},hooks:function(){return{beforeDOMElementCreation:function(){cl()},beforeI2svg:function(){cl()}}}},nn=Nn||{};nn[tn]||(nn[tn]={});nn[tn].styles||(nn[tn].styles={});nn[tn].hooks||(nn[tn].hooks={});nn[tn].shims||(nn[tn].shims=[]);var At=nn[tn],dv=[],B2=function t(){ke.removeEventListener("DOMContentLoaded",t),js=1,dv.map(function(e){return e()})},js=!1;sn&&(js=(ke.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ke.readyState),js||ke.addEventListener("DOMContentLoaded",B2));function H2(t){!sn||(js?setTimeout(t,0):dv.push(t))}function Eo(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?cv(t):"<".concat(e," ").concat(z2(i),">").concat(o.map(Eo).join(""),"</").concat(e,">")}function _h(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var G2=function(e,n){return function(i,r,o,s){return e.call(n,i,r,o,s)}},ul=function(e,n,i,r){var o=Object.keys(e),s=o.length,a=r!==void 0?G2(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[o[0]]):(l=0,u=i);l<s;l++)c=o[l],u=a(u,e[c],c,e);return u};function q2(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function uc(t){var e=q2(t);return e.length===1?e[0].toString(16):null}function W2(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Eh(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function dc(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,o=Eh(e);typeof At.hooks.addPack=="function"&&!r?At.hooks.addPack(t,Eh(e)):At.styles[t]=D(D({},At.styles[t]||{}),o),t==="fas"&&dc("fa",e)}var Cr=At.styles,K2=At.shims,Y2=Object.values(ov),Ju=null,fv={},hv={},mv={},pv={},gv={},X2=Object.keys(Yu);function Q2(t){return~O2.indexOf(t)}function J2(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!Q2(r)?r:null}var bv=function(){var e=function(o){return ul(Cr,function(s,a,l){return s[l]=ul(a,o,{}),s},{})};fv=e(function(r,o,s){if(o[3]&&(r[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){r[l.toString(16)]=s})}return r}),hv=e(function(r,o,s){if(r[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){r[l]=s})}return r}),gv=e(function(r,o,s){var a=o[2];return r[s]=s,a.forEach(function(l){r[l]=s}),r});var n="far"in Cr||V.autoFetchSvg,i=ul(K2,function(r,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(r.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});mv=i.names,pv=i.unicodes,Ju=Da(V.styleDefault)};M2(function(t){Ju=Da(t.styleDefault)});bv();function Zu(t,e){return(fv[t]||{})[e]}function Z2(t,e){return(hv[t]||{})[e]}function Ei(t,e){return(gv[t]||{})[e]}function vv(t){return mv[t]||{prefix:null,iconName:null}}function eI(t){var e=pv[t],n=Zu("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Pn(){return Ju}var ed=function(){return{prefix:null,iconName:null,rest:[]}};function Da(t){var e=Yu[t],n=Us[t]||Us[e],i=t in At.styles?t:null;return n||i||null}function Ma(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,i=n===void 0?!1:n,r=null,o=t.reduce(function(s,a){var l=J2(V.familyPrefix,a);if(Cr[a]?(a=Y2.includes(a)?E2[a]:a,r=a,s.prefix=a):X2.indexOf(a)>-1?(r=a,s.prefix=Da(a)):l?s.iconName=l:a!==V.replacementClass&&s.rest.push(a),!i&&s.prefix&&s.iconName){var c=r==="fa"?vv(s.iconName):{},u=Ei(s.prefix,s.iconName);c.prefix&&(r=null),s.iconName=c.iconName||u||s.iconName,s.prefix=c.prefix||s.prefix,s.prefix==="far"&&!Cr.far&&Cr.fas&&!V.autoFetchSvg&&(s.prefix="fas")}return s},ed());return(o.prefix==="fa"||r==="fa")&&(o.prefix=Pn()||"fas"),o}var tI=function(){function t(){d2(this,t),this.definitions={}}return f2(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),s[a]),dc(a,s[a]);var l=ov[a];l&&dc(l,s[a]),bv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(o){var s=r[o],a=s.prefix,l=s.iconName,c=s.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(n[a][d]=c)}),n[a][l]=c}),n}}]),t}(),Ih=[],Ii={},Di={},nI=Object.keys(Di);function iI(t,e){var n=e.mixoutsTo;return Ih=t,Ii={},Object.keys(Di).forEach(function(i){nI.indexOf(i)===-1&&delete Di[i]}),Ih.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(n[s]=r[s]),zs(r[s])==="object"&&Object.keys(r[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=r[s][a]})}),i.hooks){var o=i.hooks();Object.keys(o).forEach(function(s){Ii[s]||(Ii[s]=[]),Ii[s].push(o[s])})}i.provides&&i.provides(Di)}),n}function fc(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var o=Ii[t]||[];return o.forEach(function(s){e=s.apply(null,[e].concat(i))}),e}function ai(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Ii[t]||[];r.forEach(function(o){o.apply(null,n)})}function rn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Di[t]?Di[t].apply(null,e):void 0}function hc(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Pn();if(!!e)return e=Ei(n,e)||e,_h(yv.definitions,n,e)||_h(At.styles,n,e)}var yv=new tI,rI=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,ai("noAuto")},oI={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return sn?(ai("beforeI2svg",e),rn("pseudoElements2svg",e),rn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,H2(function(){aI({autoReplaceSvgRoot:n}),ai("watch",e)})}},sI={icon:function(e){if(e===null)return null;if(zs(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ei(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Da(e[0]);return{prefix:i,iconName:Ei(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(V.familyPrefix,"-"))>-1||e.match(I2))){var r=Ma(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Pn(),iconName:Ei(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var o=Pn();return{prefix:o,iconName:Ei(o,e)||e}}}},gt={noAuto:rI,config:V,dom:oI,parse:sI,library:yv,findIconDefinition:hc,toHtml:Eo},aI=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?ke:n;(Object.keys(At.styles).length>0||V.autoFetchSvg)&&sn&&V.autoReplaceSvg&&gt.dom.i2svg({node:i})};function La(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Eo(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!sn){var i=ke.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function lI(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,o=t.styles,s=t.transform;if(Qu(s)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};r.style=Pa(D(D({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function cI(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,o=t.symbol,s=o===!0?"".concat(e,"-").concat(V.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},r),{},{id:s}),children:i}]}]}function td(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,o=t.iconName,s=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,d=t.extra,f=t.watchable,m=f===void 0?!1:f,g=i.found?i:n,A=g.width,k=g.height,b=r==="fak",y=[V.replacementClass,o?"".concat(V.familyPrefix,"-").concat(o):""].filter(function(Te){return d.classes.indexOf(Te)===-1}).filter(function(Te){return Te!==""||!!Te}).concat(d.classes).join(" "),N={children:[],attributes:D(D({},d.attributes),{},{"data-prefix":r,"data-icon":o,class:y,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(k)})},U=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(A/k*16*.0625,"em")}:{};m&&(N.attributes[si]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(u||no())},children:[l]}),delete N.attributes.title);var Q=D(D({},N),{},{prefix:r,iconName:o,main:n,mask:i,maskId:c,transform:s,symbol:a,styles:D(D({},U),d.styles)}),se=i.found&&n.found?rn("generateAbstractMask",Q)||{children:[],attributes:{}}:rn("generateAbstractIcon",Q)||{children:[],attributes:{}},ye=se.children,tt=se.attributes;return Q.children=ye,Q.attributes=tt,a?cI(Q):lI(Q)}function Th(t){var e=t.content,n=t.width,i=t.height,r=t.transform,o=t.title,s=t.extra,a=t.watchable,l=a===void 0?!1:a,c=D(D(D({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(c[si]="");var u=D({},s.styles);Qu(r)&&(u.transform=j2({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var d=Pa(u);d.length>0&&(c.style=d);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),o&&f.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),f}function uI(t){var e=t.content,n=t.title,i=t.extra,r=D(D(D({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),o=Pa(i.styles);o.length>0&&(r.style=o);var s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var dl=At.styles;function mc(t){var e=t[0],n=t[1],i=t.slice(4),r=Gu(i,1),o=r[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(V.familyPrefix,"-").concat(Kn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.familyPrefix,"-").concat(Kn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(V.familyPrefix,"-").concat(Kn.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}var dI={found:!1,width:512,height:512};function fI(t,e){!rv&&!V.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function pc(t,e){var n=e;return e==="fa"&&V.styleDefault!==null&&(e=Pn()),new Promise(function(i,r){if(rn("missingIconAbstract"),n==="fa"){var o=vv(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&dl[e]&&dl[e][t]){var s=dl[e][t];return i(mc(s))}fI(t,e),i(D(D({},dI),{},{icon:V.showMissingIcons&&t?rn("missingIconAbstract")||{}:{}}))})}var Ah=function(){},gc=V.measurePerformance&&$o&&$o.mark&&$o.measure?$o:{mark:Ah,measure:Ah},hr='FA "6.1.1"',hI=function(e){return gc.mark("".concat(hr," ").concat(e," begins")),function(){return wv(e)}},wv=function(e){gc.mark("".concat(hr," ").concat(e," ends")),gc.measure("".concat(hr," ").concat(e),"".concat(hr," ").concat(e," begins"),"".concat(hr," ").concat(e," ends"))},nd={begin:hI,end:wv},is=function(){};function Sh(t){var e=t.getAttribute?t.getAttribute(si):null;return typeof e=="string"}function mI(t){var e=t.getAttribute?t.getAttribute(Wu):null,n=t.getAttribute?t.getAttribute(Ku):null;return e&&n}function pI(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(V.replacementClass)}function gI(){if(V.autoReplaceSvg===!0)return rs.replace;var t=rs[V.autoReplaceSvg];return t||rs.replace}function bI(t){return ke.createElementNS("http://www.w3.org/2000/svg",t)}function vI(t){return ke.createElement(t)}function kv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?bI:vI:n;if(typeof t=="string")return ke.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])});var o=t.children||[];return o.forEach(function(s){r.appendChild(kv(s,{ceFn:i}))}),r}function yI(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var rs={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(kv(r),n)}),n.getAttribute(si)===null&&V.keepOriginalSource){var i=ke.createComment(yI(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Xu(n).indexOf(V.replacementClass))return rs.replace(e);var r=new RegExp("".concat(V.familyPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var o=i[0].attributes.class.split(" ").reduce(function(a,l){return l===V.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=i.map(function(a){return Eo(a)}).join(`
`);n.setAttribute(si,""),n.innerHTML=s}};function Ch(t){t()}function xv(t,e){var n=typeof e=="function"?e:is;if(t.length===0)n();else{var i=Ch;V.mutateApproach===x2&&(i=Nn.requestAnimationFrame||Ch),i(function(){var r=gI(),o=nd.begin("mutate");t.map(r),o(),n()})}}var id=!1;function _v(){id=!0}function bc(){id=!1}var $s=null;function Oh(t){if(!!wh&&!!V.observeMutations){var e=t.treeCallback,n=e===void 0?is:e,i=t.nodeCallback,r=i===void 0?is:i,o=t.pseudoElementsCallback,s=o===void 0?is:o,a=t.observeMutationsRoot,l=a===void 0?ke:a;$s=new wh(function(c){if(!id){var u=Pn();nr(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Sh(d.addedNodes[0])&&(V.searchPseudoElements&&s(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&V.searchPseudoElements&&s(d.target.parentNode),d.type==="attributes"&&Sh(d.target)&&~C2.indexOf(d.attributeName))if(d.attributeName==="class"&&mI(d.target)){var f=Ma(Xu(d.target)),m=f.prefix,g=f.iconName;d.target.setAttribute(Wu,m||u),g&&d.target.setAttribute(Ku,g)}else pI(d.target)&&r(d.target)})}}),sn&&$s.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function wI(){!$s||$s.disconnect()}function kI(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var o=r.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(i[s]=a.join(":").trim()),i},{})),n}function xI(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Ma(Xu(t));return r.prefix||(r.prefix=Pn()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||r.prefix&&i.length>0&&(r.iconName=Z2(r.prefix,t.innerText)||Zu(r.prefix,uc(t.innerText))),r}function _I(t){var e=nr(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return V.autoA11y&&(n?e["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(i||no()):(e["aria-hidden"]="true",e.focusable="false")),e}function EI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ft,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Rh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=xI(t),i=n.iconName,r=n.prefix,o=n.rest,s=_I(t),a=fc("parseNodeAttributes",{},t),l=e.styleParser?kI(t):[];return D({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Ft,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var II=At.styles;function Ev(t){var e=V.autoReplaceSvg==="nest"?Rh(t,{styleParser:!1}):Rh(t);return~e.extra.classes.indexOf(sv)?rn("generateLayersText",t,e):rn("generateSvgReplacementMutation",t,e)}function Nh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!sn)return Promise.resolve();var n=ke.documentElement.classList,i=function(d){return n.add("".concat(kh,"-").concat(d))},r=function(d){return n.remove("".concat(kh,"-").concat(d))},o=V.autoFetchSvg?Object.keys(Yu):Object.keys(II),s=[".".concat(sv,":not([").concat(si,"])")].concat(o.map(function(u){return".".concat(u,":not([").concat(si,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=nr(t.querySelectorAll(s))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var l=nd.begin("onTree"),c=a.reduce(function(u,d){try{var f=Ev(d);f&&u.push(f)}catch(m){rv||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,d){Promise.all(c).then(function(f){xv(f,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(f){l(),d(f)})})}function TI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ev(t).then(function(n){n&&xv([n],e)})}function AI(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:hc(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:hc(r||{})),t(i,D(D({},n),{},{mask:r}))}}var SI=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?Ft:i,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,d=n.title,f=d===void 0?null:d,m=n.titleId,g=m===void 0?null:m,A=n.classes,k=A===void 0?[]:A,b=n.attributes,y=b===void 0?{}:b,N=n.styles,U=N===void 0?{}:N;if(!!e){var Q=e.prefix,se=e.iconName,ye=e.icon;return La(D({type:"icon"},e),function(){return ai("beforeDOMElementCreation",{iconDefinition:e,params:n}),V.autoA11y&&(f?y["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(g||no()):(y["aria-hidden"]="true",y.focusable="false")),td({icons:{main:mc(ye),mask:l?mc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Q,iconName:se,transform:D(D({},Ft),r),symbol:s,title:f,maskId:u,titleId:g,extra:{attributes:y,styles:U,classes:k}})})}},CI={mixout:function(){return{icon:AI(SI)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Nh,n.nodeCallback=TI,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?ke:i,o=n.callback,s=o===void 0?function(){}:o;return Nh(r,s)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,o=i.title,s=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,d=i.maskId,f=i.extra;return new Promise(function(m,g){Promise.all([pc(r,a),u.iconName?pc(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var k=Gu(A,2),b=k[0],y=k[1];m([n,td({icons:{main:b,mask:y},prefix:a,iconName:r,transform:l,symbol:c,maskId:d,title:o,titleId:s,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,o=n.main,s=n.transform,a=n.styles,l=Pa(a);l.length>0&&(r.style=l);var c;return Qu(s)&&(c=rn("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),i.push(c||o.icon),{children:i,attributes:r}}}},OI={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,o=r===void 0?[]:r;return La({type:"layer"},function(){ai("beforeDOMElementCreation",{assembler:n,params:i});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(V.familyPrefix,"-layers")].concat(Na(o)).join(" ")},children:s}]})}}}},RI={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,o=r===void 0?null:r,s=i.classes,a=s===void 0?[]:s,l=i.attributes,c=l===void 0?{}:l,u=i.styles,d=u===void 0?{}:u;return La({type:"counter",content:n},function(){return ai("beforeDOMElementCreation",{content:n,params:i}),uI({content:n.toString(),title:o,extra:{attributes:c,styles:d,classes:["".concat(V.familyPrefix,"-layers-counter")].concat(Na(a))}})})}}}},NI={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,o=r===void 0?Ft:r,s=i.title,a=s===void 0?null:s,l=i.classes,c=l===void 0?[]:l,u=i.attributes,d=u===void 0?{}:u,f=i.styles,m=f===void 0?{}:f;return La({type:"text",content:n},function(){return ai("beforeDOMElementCreation",{content:n,params:i}),Th({content:n,transform:D(D({},Ft),o),title:a,extra:{attributes:d,styles:m,classes:["".concat(V.familyPrefix,"-layers-text")].concat(Na(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,o=i.transform,s=i.extra,a=null,l=null;if(tv){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return V.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Th({content:n.innerHTML,width:a,height:l,transform:o,title:r,extra:s,watchable:!0})])}}},PI=new RegExp('"',"ug"),Ph=[1105920,1112319];function DI(t){var e=t.replace(PI,""),n=W2(e,0),i=n>=Ph[0]&&n<=Ph[1],r=e.length===2?e[0]===e[1]:!1;return{value:uc(r?e[0]:e),isSecondary:i||r}}function Dh(t,e){var n="".concat(k2).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var o=nr(t.children),s=o.filter(function(se){return se.getAttribute(cc)===e})[0],a=Nn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(T2),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(s&&!l)return t.removeChild(s),i();if(l&&u!=="none"&&u!==""){var d=a.getPropertyValue("content"),f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Us[l[2].toLowerCase()]:A2[c],m=DI(d),g=m.value,A=m.isSecondary,k=l[0].startsWith("FontAwesome"),b=Zu(f,g),y=b;if(k){var N=eI(g);N.iconName&&N.prefix&&(b=N.iconName,f=N.prefix)}if(b&&!A&&(!s||s.getAttribute(Wu)!==f||s.getAttribute(Ku)!==y)){t.setAttribute(n,y),s&&t.removeChild(s);var U=EI(),Q=U.extra;Q.attributes[cc]=e,pc(b,f).then(function(se){var ye=td(D(D({},U),{},{icons:{main:se,mask:ed()},prefix:f,iconName:y,extra:Q,watchable:!0})),tt=ke.createElement("svg");e==="::before"?t.insertBefore(tt,t.firstChild):t.appendChild(tt),tt.outerHTML=ye.map(function(Te){return Eo(Te)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function MI(t){return Promise.all([Dh(t,"::before"),Dh(t,"::after")])}function LI(t){return t.parentNode!==document.head&&!~_2.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(cc)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Mh(t){if(!!sn)return new Promise(function(e,n){var i=nr(t.querySelectorAll("*")).filter(LI).map(MI),r=nd.begin("searchPseudoElements");_v(),Promise.all(i).then(function(){r(),bc(),e()}).catch(function(){r(),bc(),n()})})}var FI={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Mh,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?ke:i;V.searchPseudoElements&&Mh(r)}}},Lh=!1,zI={mixout:function(){return{dom:{unwatch:function(){_v(),Lh=!0}}}},hooks:function(){return{bootstrap:function(){Oh(fc("mutationObserverCallbacks",{}))},noAuto:function(){wI()},watch:function(n){var i=n.observeMutationsRoot;Lh?bc():Oh(fc("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Fh=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var o=r.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return i.flipX=!0,i;if(s&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(s){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},UI={mixout:function(){return{parse:{transform:function(n){return Fh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Fh(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(s/2*-1," -256)")},m={outer:a,inner:d,path:f};return{tag:"g",attributes:D({},m.outer),children:[{tag:"g",attributes:D({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:D(D({},i.icon.attributes),m.path)}]}]}}}},fl={x:0,y:0,width:"100%",height:"100%"};function zh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function jI(t){return t.tag==="g"?t.children:[t]}var $I={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),o=r?Ma(r.split(" ").map(function(s){return s.trim()})):ed();return o.prefix||(o.prefix=Pn()),n.mask=o,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,c=o.width,u=o.icon,d=s.width,f=s.icon,m=U2({transform:l,containerWidth:d,iconWidth:c}),g={tag:"rect",attributes:D(D({},fl),{},{fill:"white"})},A=u.children?{children:u.children.map(zh)}:{},k={tag:"g",attributes:D({},m.inner),children:[zh(D({tag:u.tag,attributes:D(D({},u.attributes),m.path)},A))]},b={tag:"g",attributes:D({},m.outer),children:[k]},y="mask-".concat(a||no()),N="clip-".concat(a||no()),U={tag:"mask",attributes:D(D({},fl),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,b]},Q={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:jI(f)},U]};return i.push(Q,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(y,")")},fl)}),{children:i,attributes:r}}}},VI={provides:function(e){var n=!1;Nn.matchMedia&&(n=Nn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:D(D({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=D(D({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},s),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:D(D({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:D(D({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},BI={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},HI=[V2,CI,OI,RI,NI,FI,zI,UI,$I,VI,BI];iI(HI,{mixoutsTo:gt});gt.noAuto;var Iv=gt.config,GI=gt.library;gt.dom;var Vs=gt.parse;gt.findIconDefinition;gt.toHtml;var qI=gt.icon;gt.layer;var WI=gt.text;gt.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var KI={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"]},YI={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},XI={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"]};function Uh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function It(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Uh(Object(n),!0).forEach(function(i){nt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Uh(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Bs(t){return Bs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bs(t)}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function QI(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function JI(t,e){if(t==null)return{};var n=QI(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function vc(t){return ZI(t)||eT(t)||tT(t)||nT()}function ZI(t){if(Array.isArray(t))return yc(t)}function eT(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function tT(t,e){if(!!t){if(typeof t=="string")return yc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yc(t,e)}}function yc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function nT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var iT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Tv={exports:{}};(function(t){(function(e){var n=function(b,y,N){if(!c(y)||d(y)||f(y)||m(y)||l(y))return y;var U,Q=0,se=0;if(u(y))for(U=[],se=y.length;Q<se;Q++)U.push(n(b,y[Q],N));else{U={};for(var ye in y)Object.prototype.hasOwnProperty.call(y,ye)&&(U[b(ye,N)]=n(b,y[ye],N))}return U},i=function(b,y){y=y||{};var N=y.separator||"_",U=y.split||/(?=[A-Z])/;return b.split(U).join(N)},r=function(b){return g(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(y,N){return N?N.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},o=function(b){var y=r(b);return y.substr(0,1).toUpperCase()+y.substr(1)},s=function(b,y){return i(b,y).toLowerCase()},a=Object.prototype.toString,l=function(b){return typeof b=="function"},c=function(b){return b===Object(b)},u=function(b){return a.call(b)=="[object Array]"},d=function(b){return a.call(b)=="[object Date]"},f=function(b){return a.call(b)=="[object RegExp]"},m=function(b){return a.call(b)=="[object Boolean]"},g=function(b){return b=b-0,b===b},A=function(b,y){var N=y&&"process"in y?y.process:y;return typeof N!="function"?b:function(U,Q){return N(U,b,Q)}},k={camelize:r,decamelize:s,pascalize:o,depascalize:s,camelizeKeys:function(b,y){return n(A(r,y),b)},decamelizeKeys:function(b,y){return n(A(s,y),b,y)},pascalizeKeys:function(b,y){return n(A(o,y),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=k:e.humps=k})(iT)})(Tv);var rT=Tv.exports,oT=["class","style"];function sT(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=rT.camelize(n.slice(0,i)),o=n.slice(i+1).trim();return e[r]=o,e},{})}function aT(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function rd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return rd(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=aT(u);break;case"style":l.style=sT(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var o=n.style,s=o===void 0?{}:o,a=JI(n,oT);return ta(t.tag,It(It(It({},e),{},{class:r.class,style:It(It({},r.style),s)},r.attrs),a),i)}var Av=!1;try{Av=!0}catch{}function lT(){if(!Av&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Or(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?nt({},t,e):{}}function cT(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},nt(e,"fa-".concat(t.size),t.size!==null),nt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),nt(e,"fa-pull-".concat(t.pull),t.pull!==null),nt(e,"fa-swap-opacity",t.swapOpacity),nt(e,"fa-bounce",t.bounce),nt(e,"fa-shake",t.shake),nt(e,"fa-beat",t.beat),nt(e,"fa-fade",t.fade),nt(e,"fa-beat-fade",t.beatFade),nt(e,"fa-flash",t.flash),nt(e,"fa-spin-pulse",t.spinPulse),nt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function jh(t){if(t&&Bs(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Vs.icon)return Vs.icon(t);if(t===null)return null;if(Bs(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var uT=Dn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=Ee(function(){return jh(e.icon)}),o=Ee(function(){return Or("classes",cT(e))}),s=Ee(function(){return Or("transform",typeof e.transform=="string"?Vs.transform(e.transform):e.transform)}),a=Ee(function(){return Or("mask",jh(e.mask))}),l=Ee(function(){return qI(r.value,It(It(It(It({},o.value),s.value),a.value),{},{symbol:e.symbol,title:e.title}))});Oi(l,function(u){if(!u)return lT("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=Ee(function(){return l.value?rd(l.value.abstract[0],{},i):null});return function(){return c.value}}});Dn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=Iv.familyPrefix,o=Ee(function(){return["".concat(r,"-layers")].concat(vc(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return ta("div",{class:o.value},i.default?i.default():[])}}});Dn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=Iv.familyPrefix,o=Ee(function(){return Or("classes",[].concat(vc(e.counter?["".concat(r,"-layers-counter")]:[]),vc(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),s=Ee(function(){return Or("transform",typeof e.transform=="string"?Vs.transform(e.transform):e.transform)}),a=Ee(function(){var c=WI(e.value.toString(),It(It({},s.value),o.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Ee(function(){return rd(a.value,{},i)});return function(){return l.value}}});GI.add(XI,YI,KI);Jy(a2).use(Hu).component("font-awesome-icon",uT).mount("#app");export{OE as D,_t as F,bT as T,gT as V,Wb as _,le as a,Re as b,Il as c,Dn as d,dT as e,zo as f,Ho as g,j0 as h,ts as i,vT as j,yT as k,py as l,vm as m,Rr as n,Wo as o,br as p,Xi as q,ja as r,pT as s,hT as t,mT as v,fT as w};
