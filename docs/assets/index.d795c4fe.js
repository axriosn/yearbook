const y0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};y0();function Uc(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const w0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",k0=Uc(w0);function Am(t){return!!t||t===""}function jc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=$e(i)?E0(i):jc(i);if(r)for(const o in r)e[o]=r[o]}return e}else{if($e(t))return t;if(Ce(t))return t}}const x0=/;(?![^(]*\))/g,_0=/:(.+)/;function E0(t){const e={};return t.split(x0).forEach(n=>{if(n){const i=n.split(_0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Vr(t){let e="";if($e(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const i=Vr(t[n]);i&&(e+=i+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function I0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=aa(t[i],e[i]);return n}function aa(t,e){if(t===e)return!0;let n=Bd(t),i=Bd(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Br(t),i=Br(e),n||i)return t===e;if(n=G(t),i=G(e),n||i)return n&&i?I0(t,e):!1;if(n=Ce(t),i=Ce(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,o=Object.keys(e).length;if(r!==o)return!1;for(const s in t){const a=t.hasOwnProperty(s),l=e.hasOwnProperty(s);if(a&&!l||!a&&l||!aa(t[s],e[s]))return!1}}return String(t)===String(e)}function T0(t,e){return t.findIndex(n=>aa(n,e))}const Vd=t=>$e(t)?t:t==null?"":G(t)||Ce(t)&&(t.toString===Rm||!J(t.toString))?JSON.stringify(t,Cm,2):String(t),Cm=(t,e)=>e&&e.__v_isRef?Cm(t,e.value):Ni(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:ca(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!G(e)&&!Nm(e)?String(e):e,ye={},Ri=[],Ct=()=>{},S0=()=>!1,A0=/^on[^a-z]/,la=t=>A0.test(t),$c=t=>t.startsWith("onUpdate:"),it=Object.assign,Vc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},C0=Object.prototype.hasOwnProperty,oe=(t,e)=>C0.call(t,e),G=Array.isArray,Ni=t=>go(t)==="[object Map]",ca=t=>go(t)==="[object Set]",Bd=t=>go(t)==="[object Date]",J=t=>typeof t=="function",$e=t=>typeof t=="string",Br=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Om=t=>Ce(t)&&J(t.then)&&J(t.catch),Rm=Object.prototype.toString,go=t=>Rm.call(t),O0=t=>go(t).slice(8,-1),Nm=t=>go(t)==="[object Object]",Bc=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,rs=Uc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ua=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},R0=/-(\w)/g,Vt=ua(t=>t.replace(R0,(e,n)=>n?n.toUpperCase():"")),N0=/\B([A-Z])/g,tr=ua(t=>t.replace(N0,"-$1").toLowerCase()),da=ua(t=>t.charAt(0).toUpperCase()+t.slice(1)),Za=ua(t=>t?`on${da(t)}`:""),qr=(t,e)=>!Object.is(t,e),os=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},xs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},_s=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qd;const P0=()=>qd||(qd=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Lt;class D0{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Lt&&(this.parent=Lt,this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){Lt=this}off(){Lt=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function M0(t,e=Lt){e&&e.active&&e.effects.push(t)}const qc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Pm=t=>(t.w&Sn)>0,Dm=t=>(t.n&Sn)>0,L0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Sn},F0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Pm(r)&&!Dm(r)?r.delete(t):e[n++]=r,r.w&=~Sn,r.n&=~Sn}e.length=n}},Cl=new WeakMap;let yr=0,Sn=1;const Ol=30;let It;const Qn=Symbol(""),Rl=Symbol("");class Hc{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,M0(this,i)}run(){if(!this.active)return this.fn();let e=It,n=kn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=It,It=this,kn=!0,Sn=1<<++yr,yr<=Ol?L0(this):Hd(this),this.fn()}finally{yr<=Ol&&F0(this),Sn=1<<--yr,It=this.parent,kn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){It===this?this.deferStop=!0:this.active&&(Hd(this),this.onStop&&this.onStop(),this.active=!1)}}function Hd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let kn=!0;const Mm=[];function nr(){Mm.push(kn),kn=!1}function ir(){const t=Mm.pop();kn=t===void 0?!0:t}function pt(t,e,n){if(kn&&It){let i=Cl.get(t);i||Cl.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=qc()),Lm(r)}}function Lm(t,e){let n=!1;yr<=Ol?Dm(t)||(t.n|=Sn,n=!Pm(t)):n=!t.has(It),n&&(t.add(It),It.deps.push(t))}function en(t,e,n,i,r,o){const s=Cl.get(t);if(!s)return;let a=[];if(e==="clear")a=[...s.values()];else if(n==="length"&&G(t))s.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(s.get(n)),e){case"add":G(t)?Bc(n)&&a.push(s.get("length")):(a.push(s.get(Qn)),Ni(t)&&a.push(s.get(Rl)));break;case"delete":G(t)||(a.push(s.get(Qn)),Ni(t)&&a.push(s.get(Rl)));break;case"set":Ni(t)&&a.push(s.get(Qn));break}if(a.length===1)a[0]&&Nl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Nl(qc(l))}}function Nl(t,e){const n=G(t)?t:[...t];for(const i of n)i.computed&&Gd(i);for(const i of n)i.computed||Gd(i)}function Gd(t,e){(t!==It||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const z0=Uc("__proto__,__v_isRef,__isVue"),Fm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Br)),U0=Gc(),j0=Gc(!1,!0),$0=Gc(!0),Kd=V0();function V0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=he(this);for(let o=0,s=this.length;o<s;o++)pt(i,"get",o+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(he)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){nr();const i=he(this)[e].apply(this,n);return ir(),i}}),t}function Gc(t=!1,e=!1){return function(i,r,o){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&o===(t?e?ry:Vm:e?$m:jm).get(i))return i;const s=G(i);if(!t&&s&&oe(Kd,r))return Reflect.get(Kd,r,o);const a=Reflect.get(i,r,o);return(Br(r)?Fm.has(r):z0(r))||(t||pt(i,"get",r),e)?a:Qe(a)?s&&Bc(r)?a:a.value:Ce(a)?t?Bm(a):rr(a):a}}const B0=zm(),q0=zm(!0);function zm(t=!1){return function(n,i,r,o){let s=n[i];if(Hr(s)&&Qe(s)&&!Qe(r))return!1;if(!t&&!Hr(r)&&(Pl(r)||(r=he(r),s=he(s)),!G(n)&&Qe(s)&&!Qe(r)))return s.value=r,!0;const a=G(n)&&Bc(i)?Number(i)<n.length:oe(n,i),l=Reflect.set(n,i,r,o);return n===he(o)&&(a?qr(r,s)&&en(n,"set",i,r):en(n,"add",i,r)),l}}function H0(t,e){const n=oe(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&en(t,"delete",e,void 0),i}function G0(t,e){const n=Reflect.has(t,e);return(!Br(e)||!Fm.has(e))&&pt(t,"has",e),n}function K0(t){return pt(t,"iterate",G(t)?"length":Qn),Reflect.ownKeys(t)}const Um={get:U0,set:B0,deleteProperty:H0,has:G0,ownKeys:K0},W0={get:$0,set(t,e){return!0},deleteProperty(t,e){return!0}},Y0=it({},Um,{get:j0,set:q0}),Kc=t=>t,fa=t=>Reflect.getPrototypeOf(t);function Vo(t,e,n=!1,i=!1){t=t.__v_raw;const r=he(t),o=he(e);n||(e!==o&&pt(r,"get",e),pt(r,"get",o));const{has:s}=fa(r),a=i?Kc:n?Qc:Gr;if(s.call(r,e))return a(t.get(e));if(s.call(r,o))return a(t.get(o));t!==r&&t.get(e)}function Bo(t,e=!1){const n=this.__v_raw,i=he(n),r=he(t);return e||(t!==r&&pt(i,"has",t),pt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function qo(t,e=!1){return t=t.__v_raw,!e&&pt(he(t),"iterate",Qn),Reflect.get(t,"size",t)}function Wd(t){t=he(t);const e=he(this);return fa(e).has.call(e,t)||(e.add(t),en(e,"add",t,t)),this}function Yd(t,e){e=he(e);const n=he(this),{has:i,get:r}=fa(n);let o=i.call(n,t);o||(t=he(t),o=i.call(n,t));const s=r.call(n,t);return n.set(t,e),o?qr(e,s)&&en(n,"set",t,e):en(n,"add",t,e),this}function Qd(t){const e=he(this),{has:n,get:i}=fa(e);let r=n.call(e,t);r||(t=he(t),r=n.call(e,t)),i&&i.call(e,t);const o=e.delete(t);return r&&en(e,"delete",t,void 0),o}function Xd(){const t=he(this),e=t.size!==0,n=t.clear();return e&&en(t,"clear",void 0,void 0),n}function Ho(t,e){return function(i,r){const o=this,s=o.__v_raw,a=he(s),l=e?Kc:t?Qc:Gr;return!t&&pt(a,"iterate",Qn),s.forEach((c,u)=>i.call(r,l(c),l(u),o))}}function Go(t,e,n){return function(...i){const r=this.__v_raw,o=he(r),s=Ni(o),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,c=r[t](...i),u=n?Kc:e?Qc:Gr;return!e&&pt(o,"iterate",l?Rl:Qn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function un(t){return function(...e){return t==="delete"?!1:this}}function Q0(){const t={get(o){return Vo(this,o)},get size(){return qo(this)},has:Bo,add:Wd,set:Yd,delete:Qd,clear:Xd,forEach:Ho(!1,!1)},e={get(o){return Vo(this,o,!1,!0)},get size(){return qo(this)},has:Bo,add:Wd,set:Yd,delete:Qd,clear:Xd,forEach:Ho(!1,!0)},n={get(o){return Vo(this,o,!0)},get size(){return qo(this,!0)},has(o){return Bo.call(this,o,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:Ho(!0,!1)},i={get(o){return Vo(this,o,!0,!0)},get size(){return qo(this,!0)},has(o){return Bo.call(this,o,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:Ho(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=Go(o,!1,!1),n[o]=Go(o,!0,!1),e[o]=Go(o,!1,!0),i[o]=Go(o,!0,!0)}),[t,n,e,i]}const[X0,J0,Z0,ey]=Q0();function Wc(t,e){const n=e?t?ey:Z0:t?J0:X0;return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(oe(n,r)&&r in i?n:i,r,o)}const ty={get:Wc(!1,!1)},ny={get:Wc(!1,!0)},iy={get:Wc(!0,!1)},jm=new WeakMap,$m=new WeakMap,Vm=new WeakMap,ry=new WeakMap;function oy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sy(t){return t.__v_skip||!Object.isExtensible(t)?0:oy(O0(t))}function rr(t){return Hr(t)?t:Yc(t,!1,Um,ty,jm)}function ay(t){return Yc(t,!1,Y0,ny,$m)}function Bm(t){return Yc(t,!0,W0,iy,Vm)}function Yc(t,e,n,i,r){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=r.get(t);if(o)return o;const s=sy(t);if(s===0)return t;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function Pi(t){return Hr(t)?Pi(t.__v_raw):!!(t&&t.__v_isReactive)}function Hr(t){return!!(t&&t.__v_isReadonly)}function Pl(t){return!!(t&&t.__v_isShallow)}function qm(t){return Pi(t)||Hr(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function Hm(t){return xs(t,"__v_skip",!0),t}const Gr=t=>Ce(t)?rr(t):t,Qc=t=>Ce(t)?Bm(t):t;function Gm(t){kn&&It&&(t=he(t),Lm(t.dep||(t.dep=qc())))}function Km(t,e){t=he(t),t.dep&&Nl(t.dep)}function Qe(t){return!!(t&&t.__v_isRef===!0)}function ss(t){return Wm(t,!1)}function ly(t){return Wm(t,!0)}function Wm(t,e){return Qe(t)?t:new cy(t,e)}class cy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:Gr(e)}get value(){return Gm(this),this._value}set value(e){e=this.__v_isShallow?e:he(e),qr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Gr(e),Km(this))}}function Di(t){return Qe(t)?t.value:t}const uy={get:(t,e,n)=>Di(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Qe(r)&&!Qe(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Ym(t){return Pi(t)?t:new Proxy(t,uy)}class dy{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Hc(e,()=>{this._dirty||(this._dirty=!0,Km(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=he(this);return Gm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function fy(t,e,n=!1){let i,r;const o=J(t);return o?(i=t,r=Ct):(i=t.get,r=t.set),new dy(i,r,o||!r,n)}function xn(t,e,n,i){let r;try{r=i?t(...i):t()}catch(o){bo(o,e,n)}return r}function Ot(t,e,n,i){if(J(t)){const o=xn(t,e,n,i);return o&&Om(o)&&o.catch(s=>{bo(s,e,n)}),o}const r=[];for(let o=0;o<t.length;o++)r.push(Ot(t[o],e,n,i));return r}function bo(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let o=e.parent;const s=e.proxy,a=n;for(;o;){const c=o.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,s,a)===!1)return}o=o.parent}const l=e.appContext.config.errorHandler;if(l){xn(l,null,10,[t,s,a]);return}}hy(t,n,r,i)}function hy(t,e,n,i=!0){console.error(t)}let Es=!1,Dl=!1;const mt=[];let Wt=0;const Er=[];let wr=null,Ei=0;const Ir=[];let pn=null,Ii=0;const Qm=Promise.resolve();let Xc=null,Ml=null;function Xm(t){const e=Xc||Qm;return t?e.then(this?t.bind(this):t):e}function my(t){let e=Wt+1,n=mt.length;for(;e<n;){const i=e+n>>>1;Kr(mt[i])<t?e=i+1:n=i}return e}function Jc(t){(!mt.length||!mt.includes(t,Es&&t.allowRecurse?Wt+1:Wt))&&t!==Ml&&(t.id==null?mt.push(t):mt.splice(my(t.id),0,t),Jm())}function Jm(){!Es&&!Dl&&(Dl=!0,Xc=Qm.then(tp))}function py(t){const e=mt.indexOf(t);e>Wt&&mt.splice(e,1)}function Zm(t,e,n,i){G(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?i+1:i))&&n.push(t),Jm()}function gy(t){Zm(t,wr,Er,Ei)}function by(t){Zm(t,pn,Ir,Ii)}function ha(t,e=null){if(Er.length){for(Ml=e,wr=[...new Set(Er)],Er.length=0,Ei=0;Ei<wr.length;Ei++)wr[Ei]();wr=null,Ei=0,Ml=null,ha(t,e)}}function ep(t){if(ha(),Ir.length){const e=[...new Set(Ir)];if(Ir.length=0,pn){pn.push(...e);return}for(pn=e,pn.sort((n,i)=>Kr(n)-Kr(i)),Ii=0;Ii<pn.length;Ii++)pn[Ii]();pn=null,Ii=0}}const Kr=t=>t.id==null?1/0:t.id;function tp(t){Dl=!1,Es=!0,ha(t),mt.sort((n,i)=>Kr(n)-Kr(i));const e=Ct;try{for(Wt=0;Wt<mt.length;Wt++){const n=mt[Wt];n&&n.active!==!1&&xn(n,null,14)}}finally{Wt=0,mt.length=0,ep(),Es=!1,Xc=null,(mt.length||Er.length||Ir.length)&&tp(t)}}function vy(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ye;let r=n;const o=e.startsWith("update:"),s=o&&e.slice(7);if(s&&s in i){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:d,trim:f}=i[u]||ye;f&&(r=n.map(m=>m.trim())),d&&(r=n.map(_s))}let a,l=i[a=Za(e)]||i[a=Za(Vt(e))];!l&&o&&(l=i[a=Za(tr(e))]),l&&Ot(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ot(c,t,6,r)}}function np(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let s={},a=!1;if(!J(t)){const l=c=>{const u=np(c,e,!0);u&&(a=!0,it(s,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(i.set(t,null),null):(G(o)?o.forEach(l=>s[l]=null):it(s,o),i.set(t,s),s)}function ma(t,e){return!t||!la(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,tr(e))||oe(t,e))}let wt=null,ip=null;function Is(t){const e=wt;return wt=t,ip=t&&t.type.__scopeId||null,e}function rp(t,e=wt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&lf(-1);const o=Is(e),s=t(...r);return Is(o),i._d&&lf(1),s};return i._n=!0,i._c=!0,i._d=!0,i}function el(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:o,propsOptions:[s],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:m,ctx:g,inheritAttrs:E}=t;let k,b;const y=Is(t);try{if(n.shapeFlag&4){const U=r||i;k=zt(u.call(U,U,d,o,m,f,g)),b=l}else{const U=e;k=zt(U.length>1?U(o,{attrs:l,slots:a,emit:c}):U(o,null)),b=e.props?l:yy(l)}}catch(U){Tr.length=0,bo(U,t,1),k=Ne(Wr)}let N=k;if(b&&E!==!1){const U=Object.keys(b),{shapeFlag:Z}=N;U.length&&Z&7&&(s&&U.some($c)&&(b=wy(b,s)),N=$i(N,b))}return n.dirs&&(N=$i(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),k=N,Is(y),k}const yy=t=>{let e;for(const n in t)(n==="class"||n==="style"||la(n))&&((e||(e={}))[n]=t[n]);return e},wy=(t,e)=>{const n={};for(const i in t)(!$c(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function ky(t,e,n){const{props:i,children:r,component:o}=t,{props:s,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Jd(i,s,c):!!s;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(s[f]!==i[f]&&!ma(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===s?!1:i?s?Jd(i,s,c):!0:!!s;return!1}function Jd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==t[o]&&!ma(n,o))return!0}return!1}function xy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const _y=t=>t.__isSuspense;function Ey(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):by(t)}function as(t,e){if(Le){let n=Le.provides;const i=Le.parent&&Le.parent.provides;i===n&&(n=Le.provides=Object.create(i)),n[t]=e}}function _n(t,e,n=!1){const i=Le||wt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&J(e)?e.call(i.proxy):e}}function Iy(t,e){return Zc(t,null,e)}const Zd={};function Mi(t,e,n){return Zc(t,e,n)}function Zc(t,e,{immediate:n,deep:i,flush:r,onTrack:o,onTrigger:s}=ye){const a=Le;let l,c=!1,u=!1;if(Qe(t)?(l=()=>t.value,c=Pl(t)):Pi(t)?(l=()=>t,i=!0):G(t)?(u=!0,c=t.some(b=>Pi(b)||Pl(b)),l=()=>t.map(b=>{if(Qe(b))return b.value;if(Pi(b))return Hn(b);if(J(b))return xn(b,a,2)})):J(t)?e?l=()=>xn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),Ot(t,a,3,[f])}:l=Ct,e&&i){const b=l;l=()=>Hn(b())}let d,f=b=>{d=k.onStop=()=>{xn(b,a,4)}};if(Bi)return f=Ct,e?n&&Ot(e,a,3,[l(),u?[]:void 0,f]):l(),Ct;let m=u?[]:Zd;const g=()=>{if(!!k.active)if(e){const b=k.run();(i||c||(u?b.some((y,N)=>qr(y,m[N])):qr(b,m)))&&(d&&d(),Ot(e,a,3,[b,m===Zd?void 0:m,f]),m=b)}else k.run()};g.allowRecurse=!!e;let E;r==="sync"?E=g:r==="post"?E=()=>at(g,a&&a.suspense):E=()=>gy(g);const k=new Hc(l,E);return e?n?g():m=k.run():r==="post"?at(k.run.bind(k),a&&a.suspense):k.run(),()=>{k.stop(),a&&a.scope&&Vc(a.scope.effects,k)}}function Ty(t,e,n){const i=this.proxy,r=$e(t)?t.includes(".")?op(i,t):()=>i[t]:t.bind(i,i);let o;J(e)?o=e:(o=e.handler,n=e);const s=Le;Vi(this);const a=Zc(r,o.bind(i),n);return s?Vi(s):Xn(),a}function op(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Hn(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Qe(t))Hn(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Hn(t[n],e);else if(ca(t)||Ni(t))t.forEach(n=>{Hn(n,e)});else if(Nm(t))for(const n in t)Hn(t[n],e);return t}function Mn(t){return J(t)?{setup:t,name:t.name}:t}const ls=t=>!!t.type.__asyncLoader;function OS(t){J(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,timeout:o,suspensible:s=!0,onError:a}=t;let l=null,c,u=0;const d=()=>(u++,l=null,f()),f=()=>{let m;return l||(m=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((E,k)=>{a(g,()=>E(d()),()=>k(g),u+1)});throw g}).then(g=>m!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return Mn({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const m=Le;if(c)return()=>tl(c,m);const g=y=>{l=null,bo(y,m,13,!i)};if(s&&m.suspense||Bi)return f().then(y=>()=>tl(y,m)).catch(y=>(g(y),()=>i?Ne(i,{error:y}):null));const E=ss(!1),k=ss(),b=ss(!!r);return r&&setTimeout(()=>{b.value=!1},r),o!=null&&setTimeout(()=>{if(!E.value&&!k.value){const y=new Error(`Async component timed out after ${o}ms.`);g(y),k.value=y}},o),f().then(()=>{E.value=!0,m.parent&&eu(m.parent.vnode)&&Jc(m.parent.update)}).catch(y=>{g(y),k.value=y}),()=>{if(E.value&&c)return tl(c,m);if(k.value&&i)return Ne(i,{error:k.value});if(n&&!b.value)return Ne(n)}}})}function tl(t,{vnode:{ref:e,props:n,children:i,shapeFlag:r},parent:o}){const s=Ne(t,n,i);return s.ref=e,s}const eu=t=>t.type.__isKeepAlive;function Sy(t,e){sp(t,"a",e)}function Ay(t,e){sp(t,"da",e)}function sp(t,e,n=Le){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(pa(e,i,n),n){let r=n.parent;for(;r&&r.parent;)eu(r.parent.vnode)&&Cy(i,e,n,r),r=r.parent}}function Cy(t,e,n,i){const r=pa(e,t,i,!0);ap(()=>{Vc(i[e],r)},n)}function pa(t,e,n=Le,i=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;nr(),Vi(n);const a=Ot(e,n,t,s);return Xn(),ir(),a});return i?r.unshift(o):r.push(o),o}}const ln=t=>(e,n=Le)=>(!Bi||t==="sp")&&pa(t,e,n),Oy=ln("bm"),Ry=ln("m"),Ny=ln("bu"),Py=ln("u"),Dy=ln("bum"),ap=ln("um"),My=ln("sp"),Ly=ln("rtg"),Fy=ln("rtc");function zy(t,e=Le){pa("ec",t,e)}function RS(t,e){const n=wt;if(n===null)return t;const i=ba(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[s,a,l,c=ye]=e[o];J(s)&&(s={mounted:s,updated:s}),s.deep&&Hn(a),r.push({dir:s,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Un(t,e,n,i){const r=t.dirs,o=e&&e.dirs;for(let s=0;s<r.length;s++){const a=r[s];o&&(a.oldValue=o[s].value);let l=a.dir[i];l&&(nr(),Ot(l,n,8,[t.el,a,t,e]),ir())}}const lp="components";function nl(t,e){return jy(lp,t,!0,e)||t}const Uy=Symbol();function jy(t,e,n=!0,i=!1){const r=wt||Le;if(r){const o=r.type;if(t===lp){const a=bw(o,!1);if(a&&(a===e||a===Vt(e)||a===da(Vt(e))))return o}const s=ef(r[t]||o[t],e)||ef(r.appContext[t],e);return!s&&i?o:s}}function ef(t,e){return t&&(t[e]||t[Vt(e)]||t[da(Vt(e))])}function $y(t,e,n,i){let r;const o=n&&n[i];if(G(t)||$e(t)){r=new Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=e(t[s],s,void 0,o&&o[s])}else if(typeof t=="number"){r=new Array(t);for(let s=0;s<t;s++)r[s]=e(s+1,s,void 0,o&&o[s])}else if(Ce(t))if(t[Symbol.iterator])r=Array.from(t,(s,a)=>e(s,a,void 0,o&&o[a]));else{const s=Object.keys(t);r=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const c=s[a];r[a]=e(t[c],c,a,o&&o[a])}}else r=[];return n&&(n[i]=r),r}const Ll=t=>t?kp(t)?ba(t)||t.proxy:Ll(t.parent):null,Ts=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ll(t.parent),$root:t=>Ll(t.root),$emit:t=>t.emit,$options:t=>up(t),$forceUpdate:t=>t.f||(t.f=()=>Jc(t.update)),$nextTick:t=>t.n||(t.n=Xm.bind(t.proxy)),$watch:t=>Ty.bind(t)}),Vy={get({_:t},e){const{ctx:n,setupState:i,data:r,props:o,accessCache:s,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=s[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(i!==ye&&oe(i,e))return s[e]=1,i[e];if(r!==ye&&oe(r,e))return s[e]=2,r[e];if((c=t.propsOptions[0])&&oe(c,e))return s[e]=3,o[e];if(n!==ye&&oe(n,e))return s[e]=4,n[e];Fl&&(s[e]=0)}}const u=Ts[e];let d,f;if(u)return e==="$attrs"&&pt(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ye&&oe(n,e))return s[e]=4,n[e];if(f=l.config.globalProperties,oe(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return r!==ye&&oe(r,e)?(r[e]=n,!0):i!==ye&&oe(i,e)?(i[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:o}},s){let a;return!!n[s]||t!==ye&&oe(t,s)||e!==ye&&oe(e,s)||(a=o[0])&&oe(a,s)||oe(i,s)||oe(Ts,s)||oe(r.config.globalProperties,s)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Fl=!0;function By(t){const e=up(t),n=t.proxy,i=t.ctx;Fl=!1,e.beforeCreate&&tf(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:s,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:g,activated:E,deactivated:k,beforeDestroy:b,beforeUnmount:y,destroyed:N,unmounted:U,render:Z,renderTracked:ce,renderTriggered:xe,errorCaptured:ot,serverPrefetch:Ae,expose:Nt,inheritAttrs:Ht,components:xt,directives:pi,filters:gi}=e;if(c&&qy(c,i,null,t.appContext.config.unwrapInjectedRef),s)for(const we in s){const ge=s[we];J(ge)&&(i[we]=ge.bind(n))}if(r){const we=r.call(n,n);Ce(we)&&(t.data=rr(we))}if(Fl=!0,o)for(const we in o){const ge=o[we],ft=J(ge)?ge.bind(n,n):J(ge.get)?ge.get.bind(n,n):Ct,vi=!J(ge)&&J(ge.set)?ge.set.bind(n):Ct,Gt=Se({get:ft,set:vi});Object.defineProperty(i,we,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:Pt=>Gt.value=Pt})}if(a)for(const we in a)cp(a[we],i,n,we);if(l){const we=J(l)?l.call(n):l;Reflect.ownKeys(we).forEach(ge=>{as(ge,we[ge])})}u&&tf(u,t,"c");function De(we,ge){G(ge)?ge.forEach(ft=>we(ft.bind(n))):ge&&we(ge.bind(n))}if(De(Oy,d),De(Ry,f),De(Ny,m),De(Py,g),De(Sy,E),De(Ay,k),De(zy,ot),De(Fy,ce),De(Ly,xe),De(Dy,y),De(ap,U),De(My,Ae),G(Nt))if(Nt.length){const we=t.exposed||(t.exposed={});Nt.forEach(ge=>{Object.defineProperty(we,ge,{get:()=>n[ge],set:ft=>n[ge]=ft})})}else t.exposed||(t.exposed={});Z&&t.render===Ct&&(t.render=Z),Ht!=null&&(t.inheritAttrs=Ht),xt&&(t.components=xt),pi&&(t.directives=pi)}function qy(t,e,n=Ct,i=!1){G(t)&&(t=zl(t));for(const r in t){const o=t[r];let s;Ce(o)?"default"in o?s=_n(o.from||r,o.default,!0):s=_n(o.from||r):s=_n(o),Qe(s)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[r]=s}}function tf(t,e,n){Ot(G(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function cp(t,e,n,i){const r=i.includes(".")?op(n,i):()=>n[i];if($e(t)){const o=e[t];J(o)&&Mi(r,o)}else if(J(t))Mi(r,t.bind(n));else if(Ce(t))if(G(t))t.forEach(o=>cp(o,e,n,i));else{const o=J(t.handler)?t.handler.bind(n):e[t.handler];J(o)&&Mi(r,o,t)}}function up(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ss(l,c,s,!0)),Ss(l,e,s)),o.set(e,l),l}function Ss(t,e,n,i=!1){const{mixins:r,extends:o}=e;o&&Ss(t,o,n,!0),r&&r.forEach(s=>Ss(t,s,n,!0));for(const s in e)if(!(i&&s==="expose")){const a=Hy[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const Hy={data:nf,props:$n,emits:$n,methods:$n,computed:$n,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:$n,directives:$n,watch:Ky,provide:nf,inject:Gy};function nf(t,e){return e?t?function(){return it(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function Gy(t,e){return $n(zl(t),zl(e))}function zl(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Je(t,e){return t?[...new Set([].concat(t,e))]:e}function $n(t,e){return t?it(it(Object.create(null),t),e):e}function Ky(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const i in e)n[i]=Je(t[i],e[i]);return n}function Wy(t,e,n,i=!1){const r={},o={};xs(o,ga,1),t.propsDefaults=Object.create(null),dp(t,e,r,o);for(const s in t.propsOptions[0])s in r||(r[s]=void 0);n?t.props=i?r:ay(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function Yy(t,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:s}}=t,a=he(r),[l]=t.propsOptions;let c=!1;if((i||s>0)&&!(s&16)){if(s&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(ma(t.emitsOptions,f))continue;const m=e[f];if(l)if(oe(o,f))m!==o[f]&&(o[f]=m,c=!0);else{const g=Vt(f);r[g]=Ul(l,a,g,m,t,!1)}else m!==o[f]&&(o[f]=m,c=!0)}}}else{dp(t,e,r,o)&&(c=!0);let u;for(const d in a)(!e||!oe(e,d)&&((u=tr(d))===d||!oe(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Ul(l,a,d,void 0,t,!0)):delete r[d]);if(o!==a)for(const d in o)(!e||!oe(e,d)&&!0)&&(delete o[d],c=!0)}c&&en(t,"set","$attrs")}function dp(t,e,n,i){const[r,o]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(rs(l))continue;const c=e[l];let u;r&&oe(r,u=Vt(l))?!o||!o.includes(u)?n[u]=c:(a||(a={}))[u]=c:ma(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,s=!0)}if(o){const l=he(n),c=a||ye;for(let u=0;u<o.length;u++){const d=o[u];n[d]=Ul(r,l,d,c[d],t,!oe(c,d))}}return s}function Ul(t,e,n,i,r,o){const s=t[n];if(s!=null){const a=oe(s,"default");if(a&&i===void 0){const l=s.default;if(s.type!==Function&&J(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Vi(r),i=c[n]=l.call(null,e),Xn())}else i=l}s[0]&&(o&&!a?i=!1:s[1]&&(i===""||i===tr(n))&&(i=!0))}return i}function fp(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const o=t.props,s={},a=[];let l=!1;if(!J(t)){const u=d=>{l=!0;const[f,m]=fp(d,e,!0);it(s,f),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!o&&!l)return i.set(t,Ri),Ri;if(G(o))for(let u=0;u<o.length;u++){const d=Vt(o[u]);rf(d)&&(s[d]=ye)}else if(o)for(const u in o){const d=Vt(u);if(rf(d)){const f=o[u],m=s[d]=G(f)||J(f)?{type:f}:f;if(m){const g=af(Boolean,m.type),E=af(String,m.type);m[0]=g>-1,m[1]=E<0||g<E,(g>-1||oe(m,"default"))&&a.push(d)}}}const c=[s,a];return i.set(t,c),c}function rf(t){return t[0]!=="$"}function of(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function sf(t,e){return of(t)===of(e)}function af(t,e){return G(e)?e.findIndex(n=>sf(n,t)):J(e)&&sf(e,t)?0:-1}const hp=t=>t[0]==="_"||t==="$stable",tu=t=>G(t)?t.map(zt):[zt(t)],Qy=(t,e,n)=>{if(e._n)return e;const i=rp((...r)=>tu(e(...r)),n);return i._c=!1,i},mp=(t,e,n)=>{const i=t._ctx;for(const r in t){if(hp(r))continue;const o=t[r];if(J(o))e[r]=Qy(r,o,i);else if(o!=null){const s=tu(o);e[r]=()=>s}}},pp=(t,e)=>{const n=tu(e);t.slots.default=()=>n},Xy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),xs(e,"_",n)):mp(e,t.slots={})}else t.slots={},e&&pp(t,e);xs(t.slots,ga,1)},Jy=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,s=ye;if(i.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:(it(r,e),!n&&a===1&&delete r._):(o=!e.$stable,mp(e,r)),s=e}else e&&(pp(t,e),s={default:1});if(o)for(const a in r)!hp(a)&&!(a in s)&&delete r[a]};function gp(){return{app:null,config:{isNativeTag:S0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zy=0;function ew(t,e){return function(i,r=null){J(i)||(i=Object.assign({},i)),r!=null&&!Ce(r)&&(r=null);const o=gp(),s=new Set;let a=!1;const l=o.app={_uid:Zy++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:yw,get config(){return o.config},set config(c){},use(c,...u){return s.has(c)||(c&&J(c.install)?(s.add(c),c.install(l,...u)):J(c)&&(s.add(c),c(l,...u))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,u){return u?(o.components[c]=u,l):o.components[c]},directive(c,u){return u?(o.directives[c]=u,l):o.directives[c]},mount(c,u,d){if(!a){const f=Ne(i,r);return f.appContext=o,u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,ba(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return o.provides[c]=u,l}};return l}}function jl(t,e,n,i,r=!1){if(G(t)){t.forEach((f,m)=>jl(f,e&&(G(e)?e[m]:e),n,i,r));return}if(ls(i)&&!r)return;const o=i.shapeFlag&4?ba(i.component)||i.component.proxy:i.el,s=r?null:o,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ye?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&($e(c)?(u[c]=null,oe(d,c)&&(d[c]=null)):Qe(c)&&(c.value=null)),J(l))xn(l,a,12,[s,u]);else{const f=$e(l),m=Qe(l);if(f||m){const g=()=>{if(t.f){const E=f?u[l]:l.value;r?G(E)&&Vc(E,o):G(E)?E.includes(o)||E.push(o):f?(u[l]=[o],oe(d,l)&&(d[l]=u[l])):(l.value=[o],t.k&&(u[t.k]=l.value))}else f?(u[l]=s,oe(d,l)&&(d[l]=s)):m&&(l.value=s,t.k&&(u[t.k]=s))};s?(g.id=-1,at(g,n)):g()}}}const at=Ey;function tw(t){return nw(t)}function nw(t,e){const n=P0();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:s,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:m=Ct,cloneNode:g,insertStaticContent:E}=t,k=(h,p,v,_=null,x=null,C=null,P=!1,A=null,O=!!p.dynamicChildren)=>{if(h===p)return;h&&!mr(h,p)&&(_=F(h),yt(h,x,C,!0),h=null),p.patchFlag===-2&&(O=!1,p.dynamicChildren=null);const{type:T,ref:V,shapeFlag:z}=p;switch(T){case nu:b(h,p,v,_);break;case Wr:y(h,p,v,_);break;case il:h==null&&N(p,v,_,P);break;case Et:pi(h,p,v,_,x,C,P,A,O);break;default:z&1?ce(h,p,v,_,x,C,P,A,O):z&6?gi(h,p,v,_,x,C,P,A,O):(z&64||z&128)&&T.process(h,p,v,_,x,C,P,A,O,ke)}V!=null&&x&&jl(V,h&&h.ref,C,p||h,!p)},b=(h,p,v,_)=>{if(h==null)i(p.el=a(p.children),v,_);else{const x=p.el=h.el;p.children!==h.children&&c(x,p.children)}},y=(h,p,v,_)=>{h==null?i(p.el=l(p.children||""),v,_):p.el=h.el},N=(h,p,v,_)=>{[h.el,h.anchor]=E(h.children,p,v,_,h.el,h.anchor)},U=({el:h,anchor:p},v,_)=>{let x;for(;h&&h!==p;)x=f(h),i(h,v,_),h=x;i(p,v,_)},Z=({el:h,anchor:p})=>{let v;for(;h&&h!==p;)v=f(h),r(h),h=v;r(p)},ce=(h,p,v,_,x,C,P,A,O)=>{P=P||p.type==="svg",h==null?xe(p,v,_,x,C,P,A,O):Nt(h,p,x,C,P,A,O)},xe=(h,p,v,_,x,C,P,A)=>{let O,T;const{type:V,props:z,shapeFlag:B,transition:Y,patchFlag:se,dirs:be}=h;if(h.el&&g!==void 0&&se===-1)O=h.el=g(h.el);else{if(O=h.el=s(h.type,C,z&&z.is,z),B&8?u(O,h.children):B&16&&Ae(h.children,O,null,_,x,C&&V!=="foreignObject",P,A),be&&Un(h,null,_,"created"),z){for(const _e in z)_e!=="value"&&!rs(_e)&&o(O,_e,null,z[_e],C,h.children,_,x,R);"value"in z&&o(O,"value",null,z.value),(T=z.onVnodeBeforeMount)&&Mt(T,_,h)}ot(O,h,h.scopeId,P,_)}be&&Un(h,null,_,"beforeMount");const ve=(!x||x&&!x.pendingBranch)&&Y&&!Y.persisted;ve&&Y.beforeEnter(O),i(O,p,v),((T=z&&z.onVnodeMounted)||ve||be)&&at(()=>{T&&Mt(T,_,h),ve&&Y.enter(O),be&&Un(h,null,_,"mounted")},x)},ot=(h,p,v,_,x)=>{if(v&&m(h,v),_)for(let C=0;C<_.length;C++)m(h,_[C]);if(x){let C=x.subTree;if(p===C){const P=x.vnode;ot(h,P,P.scopeId,P.slotScopeIds,x.parent)}}},Ae=(h,p,v,_,x,C,P,A,O=0)=>{for(let T=O;T<h.length;T++){const V=h[T]=A?gn(h[T]):zt(h[T]);k(null,V,p,v,_,x,C,P,A)}},Nt=(h,p,v,_,x,C,P)=>{const A=p.el=h.el;let{patchFlag:O,dynamicChildren:T,dirs:V}=p;O|=h.patchFlag&16;const z=h.props||ye,B=p.props||ye;let Y;v&&jn(v,!1),(Y=B.onVnodeBeforeUpdate)&&Mt(Y,v,p,h),V&&Un(p,h,v,"beforeUpdate"),v&&jn(v,!0);const se=x&&p.type!=="foreignObject";if(T?Ht(h.dynamicChildren,T,A,v,_,se,C):P||ft(h,p,A,null,v,_,se,C,!1),O>0){if(O&16)xt(A,p,z,B,v,_,x);else if(O&2&&z.class!==B.class&&o(A,"class",null,B.class,x),O&4&&o(A,"style",z.style,B.style,x),O&8){const be=p.dynamicProps;for(let ve=0;ve<be.length;ve++){const _e=be[ve],_t=z[_e],yi=B[_e];(yi!==_t||_e==="value")&&o(A,_e,_t,yi,x,h.children,v,_,R)}}O&1&&h.children!==p.children&&u(A,p.children)}else!P&&T==null&&xt(A,p,z,B,v,_,x);((Y=B.onVnodeUpdated)||V)&&at(()=>{Y&&Mt(Y,v,p,h),V&&Un(p,h,v,"updated")},_)},Ht=(h,p,v,_,x,C,P)=>{for(let A=0;A<p.length;A++){const O=h[A],T=p[A],V=O.el&&(O.type===Et||!mr(O,T)||O.shapeFlag&70)?d(O.el):v;k(O,T,V,null,_,x,C,P,!0)}},xt=(h,p,v,_,x,C,P)=>{if(v!==_){for(const A in _){if(rs(A))continue;const O=_[A],T=v[A];O!==T&&A!=="value"&&o(h,A,T,O,P,p.children,x,C,R)}if(v!==ye)for(const A in v)!rs(A)&&!(A in _)&&o(h,A,v[A],null,P,p.children,x,C,R);"value"in _&&o(h,"value",v.value,_.value)}},pi=(h,p,v,_,x,C,P,A,O)=>{const T=p.el=h?h.el:a(""),V=p.anchor=h?h.anchor:a("");let{patchFlag:z,dynamicChildren:B,slotScopeIds:Y}=p;Y&&(A=A?A.concat(Y):Y),h==null?(i(T,v,_),i(V,v,_),Ae(p.children,v,V,x,C,P,A,O)):z>0&&z&64&&B&&h.dynamicChildren?(Ht(h.dynamicChildren,B,v,x,C,P,A),(p.key!=null||x&&p===x.subTree)&&bp(h,p,!0)):ft(h,p,v,V,x,C,P,A,O)},gi=(h,p,v,_,x,C,P,A,O)=>{p.slotScopeIds=A,h==null?p.shapeFlag&512?x.ctx.activate(p,v,_,P,O):bi(p,v,_,x,C,P,O):De(h,p,O)},bi=(h,p,v,_,x,C,P)=>{const A=h.component=fw(h,_,x);if(eu(h)&&(A.ctx.renderer=ke),hw(A),A.asyncDep){if(x&&x.registerDep(A,we),!h.el){const O=A.subTree=Ne(Wr);y(null,O,p,v)}return}we(A,h,p,v,x,C,P)},De=(h,p,v)=>{const _=p.component=h.component;if(ky(h,p,v))if(_.asyncDep&&!_.asyncResolved){ge(_,p,v);return}else _.next=p,py(_.update),_.update();else p.el=h.el,_.vnode=p},we=(h,p,v,_,x,C,P)=>{const A=()=>{if(h.isMounted){let{next:V,bu:z,u:B,parent:Y,vnode:se}=h,be=V,ve;jn(h,!1),V?(V.el=se.el,ge(h,V,P)):V=se,z&&os(z),(ve=V.props&&V.props.onVnodeBeforeUpdate)&&Mt(ve,Y,V,se),jn(h,!0);const _e=el(h),_t=h.subTree;h.subTree=_e,k(_t,_e,d(_t.el),F(_t),h,x,C),V.el=_e.el,be===null&&xy(h,_e.el),B&&at(B,x),(ve=V.props&&V.props.onVnodeUpdated)&&at(()=>Mt(ve,Y,V,se),x)}else{let V;const{el:z,props:B}=p,{bm:Y,m:se,parent:be}=h,ve=ls(p);if(jn(h,!1),Y&&os(Y),!ve&&(V=B&&B.onVnodeBeforeMount)&&Mt(V,be,p),jn(h,!0),z&&ee){const _e=()=>{h.subTree=el(h),ee(z,h.subTree,h,x,null)};ve?p.type.__asyncLoader().then(()=>!h.isUnmounted&&_e()):_e()}else{const _e=h.subTree=el(h);k(null,_e,v,_,h,x,C),p.el=_e.el}if(se&&at(se,x),!ve&&(V=B&&B.onVnodeMounted)){const _e=p;at(()=>Mt(V,be,_e),x)}(p.shapeFlag&256||be&&ls(be.vnode)&&be.vnode.shapeFlag&256)&&h.a&&at(h.a,x),h.isMounted=!0,p=v=_=null}},O=h.effect=new Hc(A,()=>Jc(T),h.scope),T=h.update=()=>O.run();T.id=h.uid,jn(h,!0),T()},ge=(h,p,v)=>{p.component=h;const _=h.vnode.props;h.vnode=p,h.next=null,Yy(h,p.props,_,v),Jy(h,p.children,v),nr(),ha(void 0,h.update),ir()},ft=(h,p,v,_,x,C,P,A,O=!1)=>{const T=h&&h.children,V=h?h.shapeFlag:0,z=p.children,{patchFlag:B,shapeFlag:Y}=p;if(B>0){if(B&128){Gt(T,z,v,_,x,C,P,A,O);return}else if(B&256){vi(T,z,v,_,x,C,P,A,O);return}}Y&8?(V&16&&R(T,x,C),z!==T&&u(v,z)):V&16?Y&16?Gt(T,z,v,_,x,C,P,A,O):R(T,x,C,!0):(V&8&&u(v,""),Y&16&&Ae(z,v,_,x,C,P,A,O))},vi=(h,p,v,_,x,C,P,A,O)=>{h=h||Ri,p=p||Ri;const T=h.length,V=p.length,z=Math.min(T,V);let B;for(B=0;B<z;B++){const Y=p[B]=O?gn(p[B]):zt(p[B]);k(h[B],Y,v,null,x,C,P,A,O)}T>V?R(h,x,C,!0,!1,z):Ae(p,v,_,x,C,P,A,O,z)},Gt=(h,p,v,_,x,C,P,A,O)=>{let T=0;const V=p.length;let z=h.length-1,B=V-1;for(;T<=z&&T<=B;){const Y=h[T],se=p[T]=O?gn(p[T]):zt(p[T]);if(mr(Y,se))k(Y,se,v,null,x,C,P,A,O);else break;T++}for(;T<=z&&T<=B;){const Y=h[z],se=p[B]=O?gn(p[B]):zt(p[B]);if(mr(Y,se))k(Y,se,v,null,x,C,P,A,O);else break;z--,B--}if(T>z){if(T<=B){const Y=B+1,se=Y<V?p[Y].el:_;for(;T<=B;)k(null,p[T]=O?gn(p[T]):zt(p[T]),v,se,x,C,P,A,O),T++}}else if(T>B)for(;T<=z;)yt(h[T],x,C,!0),T++;else{const Y=T,se=T,be=new Map;for(T=se;T<=B;T++){const ht=p[T]=O?gn(p[T]):zt(p[T]);ht.key!=null&&be.set(ht.key,T)}let ve,_e=0;const _t=B-se+1;let yi=!1,Ud=0;const hr=new Array(_t);for(T=0;T<_t;T++)hr[T]=0;for(T=Y;T<=z;T++){const ht=h[T];if(_e>=_t){yt(ht,x,C,!0);continue}let Dt;if(ht.key!=null)Dt=be.get(ht.key);else for(ve=se;ve<=B;ve++)if(hr[ve-se]===0&&mr(ht,p[ve])){Dt=ve;break}Dt===void 0?yt(ht,x,C,!0):(hr[Dt-se]=T+1,Dt>=Ud?Ud=Dt:yi=!0,k(ht,p[Dt],v,null,x,C,P,A,O),_e++)}const jd=yi?iw(hr):Ri;for(ve=jd.length-1,T=_t-1;T>=0;T--){const ht=se+T,Dt=p[ht],$d=ht+1<V?p[ht+1].el:_;hr[T]===0?k(null,Dt,v,$d,x,C,P,A,O):yi&&(ve<0||T!==jd[ve]?Pt(Dt,v,$d,2):ve--)}}},Pt=(h,p,v,_,x=null)=>{const{el:C,type:P,transition:A,children:O,shapeFlag:T}=h;if(T&6){Pt(h.component.subTree,p,v,_);return}if(T&128){h.suspense.move(p,v,_);return}if(T&64){P.move(h,p,v,ke);return}if(P===Et){i(C,p,v);for(let z=0;z<O.length;z++)Pt(O[z],p,v,_);i(h.anchor,p,v);return}if(P===il){U(h,p,v);return}if(_!==2&&T&1&&A)if(_===0)A.beforeEnter(C),i(C,p,v),at(()=>A.enter(C),x);else{const{leave:z,delayLeave:B,afterLeave:Y}=A,se=()=>i(C,p,v),be=()=>{z(C,()=>{se(),Y&&Y()})};B?B(C,se,be):be()}else i(C,p,v)},yt=(h,p,v,_=!1,x=!1)=>{const{type:C,props:P,ref:A,children:O,dynamicChildren:T,shapeFlag:V,patchFlag:z,dirs:B}=h;if(A!=null&&jl(A,null,v,h,!0),V&256){p.ctx.deactivate(h);return}const Y=V&1&&B,se=!ls(h);let be;if(se&&(be=P&&P.onVnodeBeforeUnmount)&&Mt(be,p,h),V&6)L(h.component,v,_);else{if(V&128){h.suspense.unmount(v,_);return}Y&&Un(h,null,p,"beforeUnmount"),V&64?h.type.remove(h,p,v,x,ke,_):T&&(C!==Et||z>0&&z&64)?R(T,p,v,!1,!0):(C===Et&&z&384||!x&&V&16)&&R(O,p,v),_&&fr(h)}(se&&(be=P&&P.onVnodeUnmounted)||Y)&&at(()=>{be&&Mt(be,p,h),Y&&Un(h,null,p,"unmounted")},v)},fr=h=>{const{type:p,el:v,anchor:_,transition:x}=h;if(p===Et){w(v,_);return}if(p===il){Z(h);return}const C=()=>{r(v),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(h.shapeFlag&1&&x&&!x.persisted){const{leave:P,delayLeave:A}=x,O=()=>P(v,C);A?A(h.el,C,O):O()}else C()},w=(h,p)=>{let v;for(;h!==p;)v=f(h),r(h),h=v;r(p)},L=(h,p,v)=>{const{bum:_,scope:x,update:C,subTree:P,um:A}=h;_&&os(_),x.stop(),C&&(C.active=!1,yt(P,h,p,v)),A&&at(A,p),at(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},R=(h,p,v,_=!1,x=!1,C=0)=>{for(let P=C;P<h.length;P++)yt(h[P],p,v,_,x)},F=h=>h.shapeFlag&6?F(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),le=(h,p,v)=>{h==null?p._vnode&&yt(p._vnode,null,null,!0):k(p._vnode||null,h,p,null,null,null,v),ep(),p._vnode=h},ke={p:k,um:yt,m:Pt,r:fr,mt:bi,mc:Ae,pc:ft,pbc:Ht,n:F,o:t};let ne,ee;return e&&([ne,ee]=e(ke)),{render:le,hydrate:ne,createApp:ew(le,ne)}}function jn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function bp(t,e,n=!1){const i=t.children,r=e.children;if(G(i)&&G(r))for(let o=0;o<i.length;o++){const s=i[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=gn(r[o]),a.el=s.el),n||bp(s,a))}}function iw(t){const e=t.slice(),n=[0];let i,r,o,s,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=e[s];return n}const rw=t=>t.__isTeleport,Et=Symbol(void 0),nu=Symbol(void 0),Wr=Symbol(void 0),il=Symbol(void 0),Tr=[];let St=null;function cs(t=!1){Tr.push(St=t?null:[])}function ow(){Tr.pop(),St=Tr[Tr.length-1]||null}let Yr=1;function lf(t){Yr+=t}function vp(t){return t.dynamicChildren=Yr>0?St||Ri:null,ow(),Yr>0&&St&&St.push(t),t}function $l(t,e,n,i,r,o){return vp(de(t,e,n,i,r,o,!0))}function sw(t,e,n,i,r){return vp(Ne(t,e,n,i,r,!0))}function Vl(t){return t?t.__v_isVNode===!0:!1}function mr(t,e){return t.type===e.type&&t.key===e.key}const ga="__vInternal",yp=({key:t})=>t!=null?t:null,us=({ref:t,ref_key:e,ref_for:n})=>t!=null?$e(t)||Qe(t)||J(t)?{i:wt,r:t,k:e,f:!!n}:t:null;function de(t,e=null,n=null,i=0,r=null,o=t===Et?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yp(e),ref:e&&us(e),scopeId:ip,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(iu(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),Yr>0&&!s&&St&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&St.push(l),l}const Ne=aw;function aw(t,e=null,n=null,i=0,r=null,o=!1){if((!t||t===Uy)&&(t=Wr),Vl(t)){const a=$i(t,e,!0);return n&&iu(a,n),Yr>0&&!o&&St&&(a.shapeFlag&6?St[St.indexOf(t)]=a:St.push(a)),a.patchFlag|=-2,a}if(vw(t)&&(t=t.__vccOpts),e){e=lw(e);let{class:a,style:l}=e;a&&!$e(a)&&(e.class=Vr(a)),Ce(l)&&(qm(l)&&!G(l)&&(l=it({},l)),e.style=jc(l))}const s=$e(t)?1:_y(t)?128:rw(t)?64:Ce(t)?4:J(t)?2:0;return de(t,e,n,i,r,s,o,!0)}function lw(t){return t?qm(t)||ga in t?it({},t):t:null}function $i(t,e,n=!1){const{props:i,ref:r,patchFlag:o,children:s}=t,a=e?cw(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&yp(a),ref:e&&e.ref?n&&r?G(r)?r.concat(us(e)):[r,us(e)]:us(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$i(t.ssContent),ssFallback:t.ssFallback&&$i(t.ssFallback),el:t.el,anchor:t.anchor}}function Sr(t=" ",e=0){return Ne(nu,null,t,e)}function zt(t){return t==null||typeof t=="boolean"?Ne(Wr):G(t)?Ne(Et,null,t.slice()):typeof t=="object"?gn(t):Ne(nu,null,String(t))}function gn(t){return t.el===null||t.memo?t:$i(t)}function iu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),iu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ga in e)?e._ctx=wt:r===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),i&64?(n=16,e=[Sr(e)]):n=8);t.children=e,t.shapeFlag|=n}function cw(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Vr([e.class,i.class]));else if(r==="style")e.style=jc([e.style,i.style]);else if(la(r)){const o=e[r],s=i[r];s&&o!==s&&!(G(o)&&o.includes(s))&&(e[r]=o?[].concat(o,s):s)}else r!==""&&(e[r]=i[r])}return e}function Mt(t,e,n,i=null){Ot(t,e,7,[n,i])}const uw=gp();let dw=0;function fw(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||uw,o={uid:dw++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new D0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fp(i,r),emitsOptions:np(i,r),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:i.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=vy.bind(null,o),t.ce&&t.ce(o),o}let Le=null;const wp=()=>Le||wt,Vi=t=>{Le=t,t.scope.on()},Xn=()=>{Le&&Le.scope.off(),Le=null};function kp(t){return t.vnode.shapeFlag&4}let Bi=!1;function hw(t,e=!1){Bi=e;const{props:n,children:i}=t.vnode,r=kp(t);Wy(t,n,r,e),Xy(t,i);const o=r?mw(t,e):void 0;return Bi=!1,o}function mw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Hm(new Proxy(t.ctx,Vy));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?gw(t):null;Vi(t),nr();const o=xn(i,t,0,[t.props,r]);if(ir(),Xn(),Om(o)){if(o.then(Xn,Xn),e)return o.then(s=>{cf(t,s,e)}).catch(s=>{bo(s,t,0)});t.asyncDep=o}else cf(t,o,e)}else xp(t,e)}function cf(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=Ym(e)),xp(t,n)}let uf;function xp(t,e,n){const i=t.type;if(!t.render){if(!e&&uf&&!i.render){const r=i.template;if(r){const{isCustomElement:o,compilerOptions:s}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=it(it({isCustomElement:o,delimiters:a},s),l);i.render=uf(r,c)}}t.render=i.render||Ct}Vi(t),nr(),By(t),ir(),Xn()}function pw(t){return new Proxy(t.attrs,{get(e,n){return pt(t,"get","$attrs"),e[n]}})}function gw(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=pw(t))},slots:t.slots,emit:t.emit,expose:e}}function ba(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ym(Hm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ts)return Ts[n](t)}}))}function bw(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function vw(t){return J(t)&&"__vccOpts"in t}const Se=(t,e)=>fy(t,e,Bi);function va(t,e,n){const i=arguments.length;return i===2?Ce(e)&&!G(e)?Vl(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Vl(n)&&(n=[n]),Ne(t,e,n))}const yw="3.2.37",ww="http://www.w3.org/2000/svg",Bn=typeof document!="undefined"?document:null,df=Bn&&Bn.createElement("template"),kw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Bn.createElementNS(ww,t):Bn.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Bn.createTextNode(t),createComment:t=>Bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,r,o){const s=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{df.innerHTML=i?`<svg>${t}</svg>`:t;const a=df.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function xw(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function _w(t,e,n){const i=t.style,r=$e(n);if(n&&!r){for(const o in n)Bl(i,o,n[o]);if(e&&!$e(e))for(const o in e)n[o]==null&&Bl(i,o,"")}else{const o=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=o)}}const ff=/\s*!important$/;function Bl(t,e,n){if(G(n))n.forEach(i=>Bl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Ew(t,e);ff.test(n)?t.setProperty(tr(i),n.replace(ff,""),"important"):t[i]=n}}const hf=["Webkit","Moz","ms"],rl={};function Ew(t,e){const n=rl[e];if(n)return n;let i=Vt(e);if(i!=="filter"&&i in t)return rl[e]=i;i=da(i);for(let r=0;r<hf.length;r++){const o=hf[r]+i;if(o in t)return rl[e]=o}return e}const mf="http://www.w3.org/1999/xlink";function Iw(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(mf,e.slice(6,e.length)):t.setAttributeNS(mf,e,n);else{const o=k0(e);n==null||o&&!Am(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function Tw(t,e,n,i,r,o,s){if(e==="innerHTML"||e==="textContent"){i&&s(i,r,o),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Am(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[_p,Sw]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ql=0;const Aw=Promise.resolve(),Cw=()=>{ql=0},Ow=()=>ql||(Aw.then(Cw),ql=_p());function qn(t,e,n,i){t.addEventListener(e,n,i)}function Rw(t,e,n,i){t.removeEventListener(e,n,i)}function Nw(t,e,n,i,r=null){const o=t._vei||(t._vei={}),s=o[e];if(i&&s)s.value=i;else{const[a,l]=Pw(e);if(i){const c=o[e]=Dw(i,r);qn(t,a,c,l)}else s&&(Rw(t,a,s,l),o[e]=void 0)}}const pf=/(?:Once|Passive|Capture)$/;function Pw(t){let e;if(pf.test(t)){e={};let n;for(;n=t.match(pf);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[tr(t.slice(2)),e]}function Dw(t,e){const n=i=>{const r=i.timeStamp||_p();(Sw||r>=n.attached-1)&&Ot(Mw(i,n.value),e,5,[i])};return n.value=t,n.attached=Ow(),n}function Mw(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const gf=/^on[a-z]/,Lw=(t,e,n,i,r=!1,o,s,a,l)=>{e==="class"?xw(t,i,r):e==="style"?_w(t,n,i):la(e)?$c(e)||Nw(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fw(t,e,i,r))?Tw(t,e,i,o,s,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Iw(t,e,i,r))};function Fw(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&gf.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||gf.test(e)&&$e(n)?!1:e in t}const As=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>os(e,n):e};function zw(t){t.target.composing=!0}function bf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const NS={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=As(r);const o=i||r.props&&r.props.type==="number";qn(t,e?"change":"input",s=>{if(s.target.composing)return;let a=t.value;n&&(a=a.trim()),o&&(a=_s(a)),t._assign(a)}),n&&qn(t,"change",()=>{t.value=t.value.trim()}),e||(qn(t,"compositionstart",zw),qn(t,"compositionend",bf),qn(t,"change",bf))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},o){if(t._assign=As(o),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&_s(t.value)===e))return;const s=e==null?"":e;t.value!==s&&(t.value=s)}},PS={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const r=ca(e);qn(t,"change",()=>{const o=Array.prototype.filter.call(t.options,s=>s.selected).map(s=>n?_s(Cs(s)):Cs(s));t._assign(t.multiple?r?new Set(o):o:o[0])}),t._assign=As(i)},mounted(t,{value:e}){vf(t,e)},beforeUpdate(t,e,n){t._assign=As(n)},updated(t,{value:e}){vf(t,e)}};function vf(t,e){const n=t.multiple;if(!(n&&!G(e)&&!ca(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],s=Cs(o);if(n)G(e)?o.selected=T0(e,s)>-1:o.selected=e.has(s);else if(aa(Cs(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Cs(t){return"_value"in t?t._value:t.value}const Uw=["ctrl","shift","alt","meta"],jw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Uw.some(n=>t[`${n}Key`]&&!e.includes(n))},DS=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const o=jw[e[r]];if(o&&o(n,e))return}return t(n,...i)},$w=it({patchProp:Lw},kw);let yf;function Vw(){return yf||(yf=tw($w))}const Bw=(...t)=>{const e=Vw().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=qw(i);if(!r)return;const o=e._component;!J(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e};function qw(t){return $e(t)?document.querySelector(t):t}/**
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
 */const Ep=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Hw=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],s=t[n++],a=t[n++],l=((r&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Ip={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const o=t[r],s=r+1<t.length,a=s?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=o>>2,d=(o&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;l||(m=64,s||(f=64)),i.push(n[u],n[d],n[f],n[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ep(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Hw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||a==null||c==null||d==null)throw Error();const f=o<<2|a>>4;if(i.push(f),c!==64){const m=a<<4&240|c>>2;if(i.push(m),d!==64){const g=c<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Gw=function(t){const e=Ep(t);return Ip.encodeByteArray(e,!0)},Tp=function(t){return Gw(t).replace(/\./g,"")},Kw=function(t){try{return Ip.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Ww{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Ve(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sp(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function Ap(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Cp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yw(){return Ve().indexOf("Electron/")>=0}function Op(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qw(){return Ve().indexOf("MSAppHost/")>=0}function Xw(){return typeof indexedDB=="object"}function Jw(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const Zw="FirebaseError";class di extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Zw,Object.setPrototypeOf(this,di.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vo.prototype.create)}}class vo{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],s=o?e1(o,i):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new di(r,a,i)}}function e1(t,e){return t.replace(t1,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const t1=/\{\$([^}]+)}/g;function n1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Os(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const o=t[r],s=e[r];if(wf(o)&&wf(s)){if(!Os(o,s))return!1}else if(o!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function wf(t){return t!==null&&typeof t=="object"}/**
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
 */function yo(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function i1(t,e){const n=new r1(t,e);return n.subscribe.bind(n)}class r1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");o1(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=ol),r.error===void 0&&(r.error=ol),r.complete===void 0&&(r.complete=ol);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function o1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ol(){}/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class ei{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vn="[DEFAULT]";/**
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
 */class s1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ww;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l1(e))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=Vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vn){return this.instances.has(e)}getOptions(e=Vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);i===a&&s.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const s=this.instances.get(r);return s&&e(s,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:a1(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Vn){return this.component?this.component.multipleInstances?e:Vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a1(t){return t===Vn?void 0:t}function l1(t){return t.instantiationMode==="EAGER"}/**
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
 */class c1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new s1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const u1={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},d1=ue.INFO,f1={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},h1=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=f1[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ru{constructor(e){this.name=e,this._logLevel=d1,this._logHandler=h1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?u1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const m1=(t,e)=>e.some(n=>t instanceof n);let kf,xf;function p1(){return kf||(kf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g1(){return xf||(xf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rp=new WeakMap,Hl=new WeakMap,Np=new WeakMap,sl=new WeakMap,ou=new WeakMap;function b1(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(En(t.result)),r()},s=()=>{i(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Rp.set(n,t)}).catch(()=>{}),ou.set(e,t),e}function v1(t){if(Hl.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),r()},s=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Hl.set(t,e)}let Gl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Np.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function y1(t){Gl=t(Gl)}function w1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(al(this),e,...n);return Np.set(i,e.sort?e.sort():[e]),En(i)}:g1().includes(t)?function(...e){return t.apply(al(this),e),En(Rp.get(this))}:function(...e){return En(t.apply(al(this),e))}}function k1(t){return typeof t=="function"?w1(t):(t instanceof IDBTransaction&&v1(t),m1(t,p1())?new Proxy(t,Gl):t)}function En(t){if(t instanceof IDBRequest)return b1(t);if(sl.has(t))return sl.get(t);const e=k1(t);return e!==t&&(sl.set(t,e),ou.set(e,t)),e}const al=t=>ou.get(t);function x1(t,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(t,e),a=En(s);return i&&s.addEventListener("upgradeneeded",l=>{i(En(s.result),l.oldVersion,l.newVersion,En(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const _1=["get","getKey","getAll","getAllKeys","count"],E1=["put","add","delete","clear"],ll=new Map;function _f(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ll.get(e))return ll.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=E1.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||_1.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return ll.set(e,o),o}y1(t=>({...t,get:(e,n,i)=>_f(e,n)||t.get(e,n,i),has:(e,n)=>!!_f(e,n)||t.has(e,n)}));/**
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
 */class I1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(T1(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function T1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kl="@firebase/app",Ef="0.7.27";/**
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
 */const su=new ru("@firebase/app"),S1="@firebase/app-compat",A1="@firebase/analytics-compat",C1="@firebase/analytics",O1="@firebase/app-check-compat",R1="@firebase/app-check",N1="@firebase/auth",P1="@firebase/auth-compat",D1="@firebase/database",M1="@firebase/database-compat",L1="@firebase/functions",F1="@firebase/functions-compat",z1="@firebase/installations",U1="@firebase/installations-compat",j1="@firebase/messaging",$1="@firebase/messaging-compat",V1="@firebase/performance",B1="@firebase/performance-compat",q1="@firebase/remote-config",H1="@firebase/remote-config-compat",G1="@firebase/storage",K1="@firebase/storage-compat",W1="@firebase/firestore",Y1="@firebase/firestore-compat",Q1="firebase",X1="9.8.4";/**
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
 */const Pp="[DEFAULT]",J1={[Kl]:"fire-core",[S1]:"fire-core-compat",[C1]:"fire-analytics",[A1]:"fire-analytics-compat",[R1]:"fire-app-check",[O1]:"fire-app-check-compat",[N1]:"fire-auth",[P1]:"fire-auth-compat",[D1]:"fire-rtdb",[M1]:"fire-rtdb-compat",[L1]:"fire-fn",[F1]:"fire-fn-compat",[z1]:"fire-iid",[U1]:"fire-iid-compat",[j1]:"fire-fcm",[$1]:"fire-fcm-compat",[V1]:"fire-perf",[B1]:"fire-perf-compat",[q1]:"fire-rc",[H1]:"fire-rc-compat",[G1]:"fire-gcs",[K1]:"fire-gcs-compat",[W1]:"fire-fst",[Y1]:"fire-fst-compat","fire-js":"fire-js",[Q1]:"fire-js-all"};/**
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
 */const Rs=new Map,Wl=new Map;function Z1(t,e){try{t.container.addComponent(e)}catch(n){su.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qi(t){const e=t.name;if(Wl.has(e))return su.debug(`There were multiple attempts to register component ${e}.`),!1;Wl.set(e,t);for(const n of Rs.values())Z1(n,t);return!0}function au(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ek={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ti=new vo("app","Firebase",ek);/**
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
 */class tk{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ti.create("app-deleted",{appName:this._name})}}/**
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
 */const wo=X1;function nk(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Pp,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw ti.create("bad-app-name",{appName:String(i)});const r=Rs.get(i);if(r){if(Os(t,r.options)&&Os(n,r.config))return r;throw ti.create("duplicate-app",{appName:i})}const o=new c1(i);for(const a of Wl.values())o.addComponent(a);const s=new tk(t,n,o);return Rs.set(i,s),s}function Dp(t=Pp){const e=Rs.get(t);if(!e)throw ti.create("no-app",{appName:t});return e}function In(t,e,n){var i;let r=(i=J1[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${r}" with version "${e}":`];o&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),su.warn(a.join(" "));return}qi(new ei(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ik="firebase-heartbeat-database",rk=1,Qr="firebase-heartbeat-store";let cl=null;function Mp(){return cl||(cl=x1(ik,rk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qr)}}}).catch(t=>{throw ti.create("storage-open",{originalErrorMessage:t.message})})),cl}async function ok(t){var e;try{return(await Mp()).transaction(Qr).objectStore(Qr).get(Lp(t))}catch(n){throw ti.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function If(t,e){var n;try{const r=(await Mp()).transaction(Qr,"readwrite");return await r.objectStore(Qr).put(e,Lp(t)),r.done}catch(i){throw ti.create("storage-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message})}}function Lp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sk=1024,ak=30*24*60*60*1e3;class lk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uk(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=ak}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tf(),{heartbeatsToSend:n,unsentEntries:i}=ck(this._heartbeatsCache.heartbeats),r=Tp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Tf(){return new Date().toISOString().substring(0,10)}function ck(t,e=sk){const n=[];let i=t.slice();for(const r of t){const o=n.find(s=>s.agent===r.agent);if(o){if(o.dates.push(r.date),Sf(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Sf(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class uk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xw()?Jw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ok(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return If(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return If(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Sf(t){return Tp(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function dk(t){qi(new ei("platform-logger",e=>new I1(e),"PRIVATE")),qi(new ei("heartbeat",e=>new lk(e),"PRIVATE")),In(Kl,Ef,t),In(Kl,Ef,"esm2017"),In("fire-js","")}dk("");var fk="firebase",hk="9.8.4";/**
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
 */In(fk,hk,"app");function lu(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Fp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mk=Fp,zp=new vo("auth","Firebase",Fp());/**
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
 */const Af=new ru("@firebase/auth");function ds(t,...e){Af.logLevel<=ue.ERROR&&Af.error(`Auth (${wo}): ${t}`,...e)}/**
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
 */function Bt(t,...e){throw cu(t,...e)}function jt(t,...e){return cu(t,...e)}function Up(t,e,n){const i=Object.assign(Object.assign({},mk()),{[e]:n});return new vo("auth","Firebase",i).create(e,{appName:t.name})}function pk(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Bt(t,"argument-error"),Up(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cu(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return zp.create(t,...e)}function X(t,e,...n){if(!t)throw cu(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ds(e),new Error(e)}function tn(t,e){t||Qt(e)}/**
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
 */const Cf=new Map;function Xt(t){tn(t instanceof Function,"Expected a class definition");let e=Cf.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cf.set(t,e),e)}/**
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
 */function gk(t,e){const n=au(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),o=n.getOptions();if(Os(o,e!=null?e:{}))return r;Bt(r,"already-initialized")}return n.initialize({options:e})}function bk(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Yl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vk(){return Of()==="http:"||Of()==="https:"}function Of(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function yk(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vk()||Ap()||"connection"in navigator)?navigator.onLine:!0}function wk(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ko{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=Sp()||Cp()}get(){return yk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function uu(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class jp{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const xk=new ko(3e4,6e4);function _k(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ya(t,e,n,i,r={}){return $p(t,r,async()=>{let o={},s={};i&&(e==="GET"?s=i:o={body:JSON.stringify(i)});const a=yo(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),jp.fetch()(Vp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function $p(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},kk),e);try{const r=new Ik(t),o=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ko(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ko(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ko(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ko(t,"user-disabled",s);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Up(t,u,c);Bt(t,u)}}catch(r){if(r instanceof di)throw r;Bt(t,"network-request-failed")}}async function Ek(t,e,n,i,r={}){const o=await ya(t,e,n,i,r);return"mfaPendingCredential"in o&&Bt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Vp(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?uu(t.config,r):`${t.config.apiScheme}://${r}`}class Ik{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(jt(this.auth,"network-request-failed")),xk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ko(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=jt(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function Tk(t,e){return ya(t,"POST","/v1/accounts:delete",e)}async function Sk(t,e){return ya(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ar(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ak(t,e=!1){const n=rt(t),i=await n.getIdToken(e),r=du(i);X(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:Ar(ul(r.auth_time)),issuedAtTime:Ar(ul(r.iat)),expirationTime:Ar(ul(r.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ul(t){return Number(t)*1e3}function du(t){var e;const[n,i,r]=t.split(".");if(n===void 0||i===void 0||r===void 0)return ds("JWT malformed, contained fewer than 3 sections"),null;try{const o=Kw(i);return o?JSON.parse(o):(ds("Failed to decode base64 JWT payload"),null)}catch(o){return ds("Caught error parsing JWT payload as JSON",(e=o)===null||e===void 0?void 0:e.toString()),null}}function Ck(t){const e=du(t);return X(e,"internal-error"),X(typeof e.exp!="undefined","internal-error"),X(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xr(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof di&&Ok(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Ok({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Rk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ar(this.lastLoginAt),this.creationTime=Ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ns(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Xr(t,Sk(n,{idToken:i}));X(r==null?void 0:r.users.length,n,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Dk(o.providerUserInfo):[],a=Pk(t.providerData,s),l=t.isAnonymous,c=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Bp(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Nk(t){const e=rt(t);await Ns(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Pk(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Dk(t){return t.map(e=>{var{providerId:n}=e,i=lu(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Mk(t,e){const n=await $p(t,{},async()=>{const i=yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,s=Vp(t,r,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jp.fetch()(s,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken!="undefined","internal-error"),X(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Ck(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:o}=await Mk(e,n);this.updateTokensAndExpiration(i,r,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:o}=n,s=new Jr;return i&&(X(typeof i=="string","internal-error",{appName:e}),s.refreshToken=i),r&&(X(typeof r=="string","internal-error",{appName:e}),s.accessToken=r),o&&(X(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
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
 */function dn(t,e){X(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Jn{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,o=lu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Bp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Xr(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ak(this,e)}reload(){return Nk(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ns(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xr(this,Tk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,o,s,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,m=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,g=(s=n.photoURL)!==null&&s!==void 0?s:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:U,isAnonymous:Z,providerData:ce,stsTokenManager:xe}=n;X(N&&xe,e,"internal-error");const ot=Jr.fromJSON(this.name,xe);X(typeof N=="string",e,"internal-error"),dn(d,e.name),dn(f,e.name),X(typeof U=="boolean",e,"internal-error"),X(typeof Z=="boolean",e,"internal-error"),dn(m,e.name),dn(g,e.name),dn(E,e.name),dn(k,e.name),dn(b,e.name),dn(y,e.name);const Ae=new Jn({uid:N,auth:e,email:f,emailVerified:U,displayName:d,isAnonymous:Z,photoURL:g,phoneNumber:m,tenantId:E,stsTokenManager:ot,createdAt:b,lastLoginAt:y});return ce&&Array.isArray(ce)&&(Ae.providerData=ce.map(Nt=>Object.assign({},Nt))),k&&(Ae._redirectEventId=k),Ae}static async _fromIdTokenResponse(e,n,i=!1){const r=new Jr;r.updateFromServerResponse(n);const o=new Jn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ns(o),o}}/**
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
 */class qp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qp.type="NONE";const Rf=qp;/**
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
 */function fs(t,e,n){return`firebase:${t}:${e}:${n}`}class Li{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:o}=this.auth;this.fullUserKey=fs(this.userKey,r.apiKey,o),this.fullPersistenceKey=fs("persistence",r.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Li(Xt(Rf),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=r[0]||Xt(Rf);const s=fs(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(s);if(u){const d=Jn._fromJSON(e,u);c!==o&&(a=d),o=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Li(o,e,i):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new Li(o,e,i))}}/**
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
 */function Nf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yp(e))return"Blackberry";if(Qp(e))return"Webos";if(fu(e))return"Safari";if((e.includes("chrome/")||Gp(e))&&!e.includes("edge/"))return"Chrome";if(Wp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Hp(t=Ve()){return/firefox\//i.test(t)}function fu(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gp(t=Ve()){return/crios\//i.test(t)}function Kp(t=Ve()){return/iemobile/i.test(t)}function Wp(t=Ve()){return/android/i.test(t)}function Yp(t=Ve()){return/blackberry/i.test(t)}function Qp(t=Ve()){return/webos/i.test(t)}function wa(t=Ve()){return/iphone|ipad|ipod/i.test(t)}function Lk(t=Ve()){var e;return wa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Fk(){return Op()&&document.documentMode===10}function Xp(t=Ve()){return wa(t)||Wp(t)||Qp(t)||Yp(t)||/windows phone/i.test(t)||Kp(t)}function zk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Jp(t,e=[]){let n;switch(t){case"Browser":n=Nf(Ve());break;case"Worker":n=`${Nf(Ve())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wo}/${i}`}/**
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
 */class Uk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
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
 */class jk{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pf(this),this.idTokenSubscription=new Pf(this),this.beforeStateQueue=new Uk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Li.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l==null?void 0:l.user)&&(r=l.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ns(e)}catch(i){if(((n=i)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vo("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Li.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return X(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function hu(t){return rt(t)}class Pf{constructor(e){this.auth=e,this.observer=null,this.addObserver=i1(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Zp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}/**
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
 */async function Fi(t,e){return Ek(t,"POST","/v1/accounts:signInWithIdp",_k(t,e))}/**
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
 */const $k="http://localhost";class ni extends Zp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,o=lu(n,["providerId","signInMethod"]);if(!i||!r)return null;const s=new ni(i,r);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Fi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Fi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fi(e,n)}buildRequest(){const e={requestUri:$k,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yo(n)}return e}}/**
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
 */class mu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xo extends mu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vn extends xo{constructor(){super("facebook.com")}static credential(e){return ni._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
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
 */class Yt extends xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ni._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Yt.credential(n,i)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
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
 */class yn extends xo{constructor(){super("github.com")}static credential(e){return ni._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
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
 */class wn extends xo{constructor(){super("twitter.com")}static credential(e,n){return ni._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return wn.credential(n,i)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
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
 */class Hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const o=await Jn._fromIdTokenResponse(e,i,r),s=Df(i);return new Hi({user:o,providerId:s,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Df(i);return new Hi({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Df(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ps extends di{constructor(e,n,i,r){var o;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Ps.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Ps(e,n,i,r)}}function eg(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ps._fromErrorAndOperation(t,o,e,i):o})}async function Vk(t,e,n=!1){const i=await Xr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hi._forOperation(t,"link",i)}/**
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
 */async function Bk(t,e,n=!1){var i;const{auth:r}=t,o="reauthenticate";try{const s=await Xr(t,eg(r,o,e,t),n);X(s.idToken,r,"internal-error");const a=du(s.idToken);X(a,r,"internal-error");const{sub:l}=a;return X(t.uid===l,r,"user-mismatch"),Hi._forOperation(t,o,s)}catch(s){throw((i=s)===null||i===void 0?void 0:i.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),s}}/**
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
 */async function qk(t,e,n=!1){const i="signIn",r=await eg(t,i,e),o=await Hi._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(o.user),o}function Hk(t,e,n,i){return rt(t).onAuthStateChanged(e,n,i)}function Gk(t){return rt(t).signOut()}const Ds="__sak";/**
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
 */class tg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ds,"1"),this.storage.removeItem(Ds),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Kk(){const t=Ve();return fu(t)||wa(t)}const Wk=1e3,Yk=10;class ng extends tg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Kk()&&zk(),this.fallbackToPolling=Xp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(i);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const s=this.storage.getItem(i);!n&&this.localCache[i]===s||this.notifyListeners(i,s)},o=this.storage.getItem(i);Fk()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Yk):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ng.type="LOCAL";const Qk=ng;/**
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
 */class ig extends tg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ig.type="SESSION";const rg=ig;/**
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
 */function Xk(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new ka(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:o}=n.data,s=this.handlersMap[r];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(s).map(async c=>c(n.origin,o)),l=await Xk(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ka.receivers=[];/**
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
 */function pu(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Jk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const c=pu("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);s={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(f.data.response);break;default:clearTimeout(u),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function $t(){return window}function Zk(t){$t().location.href=t}/**
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
 */function og(){return typeof $t().WorkerGlobalScope!="undefined"&&typeof $t().importScripts=="function"}async function ex(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nx(){return og()?self:null}/**
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
 */const sg="firebaseLocalStorageDb",ix=1,Ms="firebaseLocalStorage",ag="fbase_key";class _o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xa(t,e){return t.transaction([Ms],e?"readwrite":"readonly").objectStore(Ms)}function rx(){const t=indexedDB.deleteDatabase(sg);return new _o(t).toPromise()}function Ql(){const t=indexedDB.open(sg,ix);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ms,{keyPath:ag})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ms)?e(i):(i.close(),await rx(),e(await Ql()))})})}async function Mf(t,e,n){const i=xa(t,!0).put({[ag]:e,value:n});return new _o(i).toPromise()}async function ox(t,e){const n=xa(t,!1).get(e),i=await new _o(n).toPromise();return i===void 0?null:i.value}function Lf(t,e){const n=xa(t,!0).delete(e);return new _o(n).toPromise()}const sx=800,ax=3;class lg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ql(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>ax)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return og()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ka._getInstance(nx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ex(),!this.activeServiceWorker)return;this.sender=new Jk(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ql();return await Mf(e,Ds,"1"),await Lf(e,Ds),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Mf(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>ox(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=xa(r,!1).getAll();return new _o(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:o}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lg.type="LOCAL";const lx=lg;/**
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
 */function cx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ux(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const o=jt("internal-error");o.customData=r,n(o)},i.type="text/javascript",i.charset="UTF-8",cx().appendChild(i)})}function dx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ko(3e4,6e4);/**
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
 */function cg(t,e){return e?Xt(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gu extends Zp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fx(t){return qk(t.auth,new gu(t),t.bypassAuthState)}function hx(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Bk(n,new gu(t),t.bypassAuthState)}async function mx(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Vk(n,new gu(t),t.bypassAuthState)}/**
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
 */class ug{constructor(e,n,i,r,o=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fx;case"linkViaPopup":case"linkViaRedirect":return mx;case"reauthViaPopup":case"reauthViaRedirect":return hx;default:Bt(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const px=new ko(2e3,1e4);class Ti extends ug{constructor(e,n,i,r,o){super(e,n,r,o),this.provider=i,this.authWindow=null,this.pollId=null,Ti.currentPopupAction&&Ti.currentPopupAction.cancel(),Ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=pu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,px.get())};e()}}Ti.currentPopupAction=null;/**
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
 */const gx="pendingRedirect",hs=new Map;class bx extends ug{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=hs.get(this.auth._key());if(!e){try{const i=await vx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}hs.set(this.auth._key(),e)}return this.bypassAuthState||hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vx(t,e){const n=fg(e),i=dg(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}async function yx(t,e){return dg(t)._set(fg(e),"true")}function wx(t,e){hs.set(t._key(),e)}function dg(t){return Xt(t._redirectPersistence)}function fg(t){return fs(gx,t.config.apiKey,t.name)}/**
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
 */function kx(t,e,n){return xx(t,e,n)}async function xx(t,e,n){const i=hu(t);pk(t,e,mu);const r=cg(i,n);return await yx(r,i),r._openRedirect(i,e,"signInViaRedirect")}async function _x(t,e,n=!1){const i=hu(t),r=cg(i,e),s=await new bx(i,r,n).execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}/**
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
 */const Ex=10*60*1e3;class Ix{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!hg(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(jt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ex&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ff(e))}saveEventToCache(e){this.cachedEventUids.add(Ff(e)),this.lastProcessedEventTime=Date.now()}}function Ff(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hg(t);default:return!1}}/**
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
 */async function Sx(t,e={}){return ya(t,"GET","/v1/projects",e)}/**
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
 */const Ax=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cx=/^https?/;async function Ox(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Sx(t);for(const n of e)try{if(Rx(n))return}catch{}Bt(t,"unauthorized-domain")}function Rx(t){const e=Yl(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===i}if(!Cx.test(n))return!1;if(Ax.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Nx=new ko(3e4,6e4);function zf(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Px(t){return new Promise((e,n)=>{var i,r,o;function s(){zf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zf(),n(jt(t,"network-request-failed"))},timeout:Nx.get()})}if(!((r=(i=$t().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=$t().gapi)===null||o===void 0)&&o.load)s();else{const a=dx("iframefcb");return $t()[a]=()=>{gapi.load?s():n(jt(t,"network-request-failed"))},ux(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ms=null,e})}let ms=null;function Dx(t){return ms=ms||Px(t),ms}/**
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
 */const Mx=new ko(5e3,15e3),Lx="__/auth/iframe",Fx="emulator/auth/iframe",zx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ux=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jx(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uu(e,Fx):`https://${t.config.authDomain}/${Lx}`,i={apiKey:e.apiKey,appName:t.name,v:wo},r=Ux.get(t.config.apiHost);r&&(i.eid=r);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${yo(i).slice(1)}`}async function $x(t){const e=await Dx(t),n=$t().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:jx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zx,dontclear:!0},i=>new Promise(async(r,o)=>{await i.restyle({setHideOnLeave:!1});const s=jt(t,"network-request-failed"),a=$t().setTimeout(()=>{o(s)},Mx.get());function l(){$t().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const Vx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bx=500,qx=600,Hx="_blank",Gx="http://localhost";class Uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kx(t,e,n,i=Bx,r=qx){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Vx),{width:i.toString(),height:r.toString(),top:o,left:s}),c=Ve().toLowerCase();n&&(a=Gp(c)?Hx:n),Hp(c)&&(e=e||Gx,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(Lk(c)&&a!=="_self")return Wx(e||"",a),new Uf(null);const d=window.open(e||"",a,u);X(d,t,"popup-blocked");try{d.focus()}catch{}return new Uf(d)}function Wx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Yx="__/auth/handler",Qx="emulator/auth/handler";function jf(t,e,n,i,r,o){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:wo,eventId:r};if(e instanceof mu){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",n1(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(o||{}))s[l]=c}if(e instanceof xo){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(s.scopes=l.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Xx(t)}?${yo(a).slice(1)}`}function Xx({config:t}){return t.emulator?uu(t,Qx):`https://${t.authDomain}/${Yx}`}/**
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
 */const dl="webStorageSupport";class Jx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rg,this._completeRedirectFn=_x,this._overrideRedirectResult=wx}async _openPopup(e,n,i,r){var o;tn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=jf(e,n,i,Yl(),r);return Kx(e,s,pu())}async _openRedirect(e,n,i,r){return await this._originValidation(e),Zk(jf(e,n,i,Yl(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:o}=this.eventManagers[n];return r?Promise.resolve(r):(tn(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await $x(e),i=new Ix(e);return n.register("authEvent",r=>(X(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dl,{type:dl},r=>{var o;const s=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[dl];s!==void 0&&n(!!s),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ox(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xp()||fu()||wa()}}const Zx=Jx;var $f="@firebase/auth",Vf="0.20.4";/**
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
 */class e_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function t_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function n_(t){qi(new ei("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=i.options;return((a,l)=>{X(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),X(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const c={apiKey:o,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jp(t)},u=new jk(a,l,c);return bk(u,n),u})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),qi(new ei("auth-internal",e=>{const n=hu(e.getProvider("auth").getImmediate());return(i=>new e_(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In($f,Vf,t_(t)),In($f,Vf,"esm2017")}/**
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
 */function i_(t=Dp()){const e=au(t,"auth");return e.isInitialized()?e.getImmediate():gk(t,{popupRedirectResolver:Zx,persistence:[lx,Qk,rg]})}n_("Browser");var r_=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},M,bu=bu||{},W=r_||self;function Ls(){}function Xl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Eo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function o_(t){return Object.prototype.hasOwnProperty.call(t,fl)&&t[fl]||(t[fl]=++s_)}var fl="closure_uid_"+(1e9*Math.random()>>>0),s_=0;function a_(t,e,n){return t.call.apply(t.bind,arguments)}function l_(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function He(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?He=a_:He=l_,He.apply(null,arguments)}function Wo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function We(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,r,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return e.prototype[r].apply(i,s)}}function Ln(){this.s=this.s,this.o=this.o}var c_=0;Ln.prototype.s=!1;Ln.prototype.na=function(){!this.s&&(this.s=!0,this.M(),c_!=0)&&o_(this)};Ln.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},pg=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r=typeof t=="string"?t.split(""):t;for(let o=0;o<i;o++)o in r&&e.call(n,r[o],o,t)};function u_(t){e:{var e=t3;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Bf(t){return Array.prototype.concat.apply([],arguments)}function vu(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Fs(t){return/^[\s\xa0]*$/.test(t)}var qf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ze(t,e){return t.indexOf(e)!=-1}function hl(t,e){return t<e?-1:t>e?1:0}var et;e:{var Hf=W.navigator;if(Hf){var Gf=Hf.userAgent;if(Gf){et=Gf;break e}}et=""}function yu(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function gg(t){const e={};for(const n in t)e[n]=t[n];return e}var Kf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bg(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let o=0;o<Kf.length;o++)n=Kf[o],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function wu(t){return wu[" "](t),t}wu[" "]=Ls;function d_(t){var e=m_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var f_=Ze(et,"Opera"),Gi=Ze(et,"Trident")||Ze(et,"MSIE"),vg=Ze(et,"Edge"),Jl=vg||Gi,yg=Ze(et,"Gecko")&&!(Ze(et.toLowerCase(),"webkit")&&!Ze(et,"Edge"))&&!(Ze(et,"Trident")||Ze(et,"MSIE"))&&!Ze(et,"Edge"),h_=Ze(et.toLowerCase(),"webkit")&&!Ze(et,"Edge");function wg(){var t=W.document;return t?t.documentMode:void 0}var zs;e:{var ml="",pl=function(){var t=et;if(yg)return/rv:([^\);]+)(\)|;)/.exec(t);if(vg)return/Edge\/([\d\.]+)/.exec(t);if(Gi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(h_)return/WebKit\/(\S+)/.exec(t);if(f_)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(pl&&(ml=pl?pl[1]:""),Gi){var gl=wg();if(gl!=null&&gl>parseFloat(ml)){zs=String(gl);break e}}zs=ml}var m_={};function p_(){return d_(function(){let t=0;const e=qf(String(zs)).split("."),n=qf("9").split("."),i=Math.max(e.length,n.length);for(let s=0;t==0&&s<i;s++){var r=e[s]||"",o=n[s]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],r[0].length==0&&o[0].length==0)break;t=hl(r[1].length==0?0:parseInt(r[1],10),o[1].length==0?0:parseInt(o[1],10))||hl(r[2].length==0,o[2].length==0)||hl(r[2],o[2]),r=r[3],o=o[3]}while(t==0)}return 0<=t})}var Zl;if(W.document&&Gi){var Wf=wg();Zl=Wf||parseInt(zs,10)||void 0}else Zl=void 0;var g_=Zl,b_=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",Ls,e),W.removeEventListener("test",Ls,e)}catch{}return t}();function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};function Zr(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(yg){e:{try{wu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:v_[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Zr.Z.h.call(this)}}We(Zr,Xe);var v_={2:"touch",3:"pen",4:"mouse"};Zr.prototype.h=function(){Zr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Io="closure_listenable_"+(1e6*Math.random()|0),y_=0;function w_(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++y_,this.ca=this.fa=!1}function _a(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ea(t){this.src=t,this.g={},this.h=0}Ea.prototype.add=function(t,e,n,i,r){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=tc(t,e,i,r);return-1<s?(e=t[s],n||(e.fa=!1)):(e=new w_(e,this.src,o,!!i,r),e.fa=n,t.push(e)),e};function ec(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=mg(i,e),o;(o=0<=r)&&Array.prototype.splice.call(i,r,1),o&&(_a(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function tc(t,e,n,i){for(var r=0;r<t.length;++r){var o=t[r];if(!o.ca&&o.listener==e&&o.capture==!!n&&o.ia==i)return r}return-1}var ku="closure_lm_"+(1e6*Math.random()|0),bl={};function kg(t,e,n,i,r){if(i&&i.once)return _g(t,e,n,i,r);if(Array.isArray(e)){for(var o=0;o<e.length;o++)kg(t,e[o],n,i,r);return null}return n=Eu(n),t&&t[Io]?t.N(e,n,Eo(i)?!!i.capture:!!i,r):xg(t,e,n,!1,i,r)}function xg(t,e,n,i,r,o){if(!e)throw Error("Invalid event type");var s=Eo(r)?!!r.capture:!!r,a=_u(t);if(a||(t[ku]=a=new Ea(t)),n=a.add(e,n,i,s,o),n.proxy)return n;if(i=k_(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)b_||(r=s),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Ig(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function k_(){function t(n){return e.call(t.src,t.listener,n)}var e=x_;return t}function _g(t,e,n,i,r){if(Array.isArray(e)){for(var o=0;o<e.length;o++)_g(t,e[o],n,i,r);return null}return n=Eu(n),t&&t[Io]?t.O(e,n,Eo(i)?!!i.capture:!!i,r):xg(t,e,n,!0,i,r)}function Eg(t,e,n,i,r){if(Array.isArray(e))for(var o=0;o<e.length;o++)Eg(t,e[o],n,i,r);else i=Eo(i)?!!i.capture:!!i,n=Eu(n),t&&t[Io]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=tc(o,n,i,r),-1<n&&(_a(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete t.g[e],t.h--)))):t&&(t=_u(t))&&(e=t.g[e.toString()],t=-1,e&&(t=tc(e,n,i,r)),(n=-1<t?e[t]:null)&&xu(n))}function xu(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Io])ec(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Ig(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=_u(e))?(ec(n,t),n.h==0&&(n.src=null,e[ku]=null)):_a(t)}}}function Ig(t){return t in bl?bl[t]:bl[t]="on"+t}function x_(t,e){if(t.ca)t=!0;else{e=new Zr(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&xu(t),t=n.call(i,e)}return t}function _u(t){return t=t[ku],t instanceof Ea?t:null}var vl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eu(t){return typeof t=="function"?t:(t[vl]||(t[vl]=function(e){return t.handleEvent(e)}),t[vl])}function Be(){Ln.call(this),this.i=new Ea(this),this.P=this,this.I=null}We(Be,Ln);Be.prototype[Io]=!0;Be.prototype.removeEventListener=function(t,e,n,i){Eg(this,t,e,n,i)};function Ge(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var r=e;e=new Xe(i,t),bg(e,r)}if(r=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];r=Yo(s,i,!0,e)&&r}if(s=e.g=t,r=Yo(s,i,!0,e)&&r,r=Yo(s,i,!1,e)&&r,n)for(o=0;o<n.length;o++)s=e.g=n[o],r=Yo(s,i,!1,e)&&r}Be.prototype.M=function(){if(Be.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)_a(n[i]);delete t.g[e],t.h--}}this.I=null};Be.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Be.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Yo(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,l=s.ia||s.src;s.fa&&ec(t.i,s),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var Iu=W.JSON.stringify;function __(){var t=Sg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class E_{constructor(){this.h=this.g=null}add(e,n){const i=Tg.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Tg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new I_,t=>t.reset());class I_{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function T_(t){W.setTimeout(()=>{throw t},0)}function Tu(t,e){nc||S_(),ic||(nc(),ic=!0),Sg.add(t,e)}var nc;function S_(){var t=W.Promise.resolve(void 0);nc=function(){t.then(A_)}}var ic=!1,Sg=new E_;function A_(){for(var t;t=__();){try{t.h.call(t.g)}catch(n){T_(n)}var e=Tg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ic=!1}function Ia(t,e){Be.call(this),this.h=t||1,this.g=e||W,this.j=He(this.kb,this),this.l=Date.now()}We(Ia,Be);M=Ia.prototype;M.da=!1;M.S=null;M.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ge(this,"tick"),this.da&&(Su(this),this.start()))}};M.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Su(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}M.M=function(){Ia.Z.M.call(this),Su(this),delete this.g};function Au(t,e,n){if(typeof t=="function")n&&(t=He(t,n));else if(t&&typeof t.handleEvent=="function")t=He(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function Ag(t){t.g=Au(()=>{t.g=null,t.i&&(t.i=!1,Ag(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class C_ extends Ln{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ag(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eo(t){Ln.call(this),this.h=t,this.g={}}We(eo,Ln);var Yf=[];function Cg(t,e,n,i){Array.isArray(n)||(n&&(Yf[0]=n.toString()),n=Yf);for(var r=0;r<n.length;r++){var o=kg(e,n[r],i||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Og(t){yu(t.g,function(e,n){this.g.hasOwnProperty(n)&&xu(e)},t),t.g={}}eo.prototype.M=function(){eo.Z.M.call(this),Og(this)};eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ta(){this.g=!0}Ta.prototype.Aa=function(){this.g=!1};function O_(t,e,n,i,r,o){t.info(function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");s=2<=d.length&&d[1]=="type"?s+(u+"="+c+"&"):s+(u+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+s})}function R_(t,e,n,i,r,o,s){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+o+" "+s})}function Si(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+P_(t,n)+(i?" "+i:"")})}function N_(t,e){t.info(function(){return"TIMEOUT: "+e})}Ta.prototype.info=function(){};function P_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var o=r[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<r.length;s++)r[s]=""}}}}return Iu(n)}catch{return e}}var fi={},Qf=null;function Sa(){return Qf=Qf||new Be}fi.Ma="serverreachability";function Rg(t){Xe.call(this,fi.Ma,t)}We(Rg,Xe);function to(t){const e=Sa();Ge(e,new Rg(e))}fi.STAT_EVENT="statevent";function Ng(t,e){Xe.call(this,fi.STAT_EVENT,t),this.stat=e}We(Ng,Xe);function nt(t){const e=Sa();Ge(e,new Ng(e,t))}fi.Na="timingevent";function Pg(t,e){Xe.call(this,fi.Na,t),this.size=e}We(Pg,Xe);function To(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Aa={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Dg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Cu(){}Cu.prototype.h=null;function Xf(t){return t.h||(t.h=t.i())}function Mg(){}var So={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ou(){Xe.call(this,"d")}We(Ou,Xe);function Ru(){Xe.call(this,"c")}We(Ru,Xe);var rc;function Ca(){}We(Ca,Cu);Ca.prototype.g=function(){return new XMLHttpRequest};Ca.prototype.i=function(){return{}};rc=new Ca;function Ao(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new eo(this),this.P=D_,t=Jl?125:void 0,this.W=new Ia(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Lg}function Lg(){this.i=null,this.g="",this.h=!1}var D_=45e3,oc={},Us={};M=Ao.prototype;M.setTimeout=function(t){this.P=t};function sc(t,e,n){t.K=1,t.v=Ra(nn(e)),t.s=n,t.U=!0,Fg(t,null)}function Fg(t,e){t.F=Date.now(),Co(t),t.A=nn(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),qg(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Lg,t.g=ub(t.l,n?e:null,!t.s),0<t.O&&(t.L=new C_(He(t.Ia,t,t.g),t.O)),Cg(t.V,t.g,"readystatechange",t.gb),e=t.H?gg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),to(),O_(t.j,t.u,t.A,t.m,t.X,t.s)}M.gb=function(t){t=t.target;const e=this.L;e&&Jt(t)==3?e.l():this.Ia(t)};M.Ia=function(t){try{if(t==this.g)e:{const u=Jt(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>u)&&(u!=3||Jl||this.g&&(this.h.h||this.g.ga()||th(this.g)))){this.I||u!=4||e==7||(e==8||0>=d?to(3):to(2)),Oa(this);var n=this.g.ba();this.N=n;t:if(zg(this)){var i=th(this.g);t="";var r=i.length,o=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Gn(this),Cr(this);var s="";break t}this.h.i=new W.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:o&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ga();if(this.i=n==200,R_(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fs(a)){var c=a;break t}}c=null}if(n=c)Si(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ac(this,n);else{this.i=!1,this.o=3,nt(12),Gn(this),Cr(this);break e}}this.U?(Ug(this,u,s),Jl&&this.i&&u==3&&(Cg(this.V,this.W,"tick",this.fb),this.W.start())):(Si(this.j,this.m,s,null),ac(this,s)),u==4&&Gn(this),this.i&&!this.I&&(u==4?sb(this.l,this):(this.i=!1,Co(this)))}else n==400&&0<s.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),Gn(this),Cr(this)}}}catch{}finally{}};function zg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Ug(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=M_(t,n),r==Us){e==4&&(t.o=4,nt(14),i=!1),Si(t.j,t.m,null,"[Incomplete Response]");break}else if(r==oc){t.o=4,nt(15),Si(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Si(t.j,t.m,r,null),ac(t,r);zg(t)&&r!=Us&&r!=oc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,nt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ju(e),e.L=!0,nt(11))):(Si(t.j,t.m,n,"[Invalid Chunked Response]"),Gn(t),Cr(t))}M.fb=function(){if(this.g){var t=Jt(this.g),e=this.g.ga();this.C<e.length&&(Oa(this),Ug(this,t,e),this.i&&t!=4&&Co(this))}};function M_(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Us:(n=Number(e.substring(n,i)),isNaN(n)?oc:(i+=1,i+n>e.length?Us:(e=e.substr(i,n),t.C=i+n,e)))}M.cancel=function(){this.I=!0,Gn(this)};function Co(t){t.Y=Date.now()+t.P,jg(t,t.P)}function jg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=To(He(t.eb,t),e)}function Oa(t){t.B&&(W.clearTimeout(t.B),t.B=null)}M.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(N_(this.j,this.A),this.K!=2&&(to(),nt(17)),Gn(this),this.o=2,Cr(this)):jg(this,this.Y-t)};function Cr(t){t.l.G==0||t.I||sb(t.l,t)}function Gn(t){Oa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Su(t.W),Og(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ac(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||lc(n.i,t))){if(n.I=t.N,!t.J&&lc(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Bs(n),Da(n);else break e;Uu(n),nt(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=To(He(n.ab,n),6e3));if(1>=Kg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Kn(n,11)}else if((t.J||n.g==t)&&Bs(n),!Fs(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const d=c[4];d!=null&&(n.za=d,n.h.info("SVER="+n.za));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const m=t.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var o=i.i;!o.g&&(Ze(g,"spdy")||Ze(g,"quic")||Ze(g,"h2"))&&(o.j=o.l,o.g=new Set,o.h&&(Du(o,o.h),o.h=null))}if(i.D){const E=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(i.sa=E,Ie(i.F,i.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var s=t;if(i.oa=cb(i,i.H?i.la:null,i.W),s.J){Wg(i.i,s);var a=s,l=i.K;l&&a.setTimeout(l),a.B&&(Oa(a),Co(a)),i.g=s}else rb(i);0<n.l.length&&Ma(n)}else c[0]!="stop"&&c[0]!="close"||Kn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Kn(n,7):zu(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}to(4)}catch{}}function L_(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Xl(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Nu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xl(t)||typeof t=="string")pg(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Xl(t)||typeof t=="string"){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=L_(t),r=i.length;for(var o=0;o<r;o++)e.call(void 0,i[o],n&&n[o],t)}}function or(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof or)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}M=or.prototype;M.R=function(){Pu(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};M.T=function(){return Pu(this),this.g.concat()};function Pu(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];ii(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],ii(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}M.get=function(t,e){return ii(this.h,t)?this.h[t]:e};M.set=function(t,e){ii(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};M.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],o=this.get(r);t.call(e,o,r,this)}};function ii(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var $g=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function F_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var o=t[n].substring(0,i);r=t[n].substring(i+1)}else o=t[n];e(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ri(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ri){this.g=e!==void 0?e:t.g,js(this,t.j),this.s=t.s,$s(this,t.i),Vs(this,t.m),this.l=t.l,e=t.h;var n=new no;n.i=e.i,e.g&&(n.g=new or(e.g),n.h=e.h),Jf(this,n),this.o=t.o}else t&&(n=String(t).match($g))?(this.g=!!e,js(this,n[1]||"",!0),this.s=Or(n[2]||""),$s(this,n[3]||"",!0),Vs(this,n[4]),this.l=Or(n[5]||"",!0),Jf(this,n[6]||"",!0),this.o=Or(n[7]||"")):(this.g=!!e,this.h=new no(null,this.g))}ri.prototype.toString=function(){var t=[],e=this.j;e&&t.push(kr(e,Zf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(kr(e,Zf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(kr(n,n.charAt(0)=="/"?V_:$_,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",kr(n,q_)),t.join("")};function nn(t){return new ri(t)}function js(t,e,n){t.j=n?Or(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $s(t,e,n){t.i=n?Or(e,!0):e}function Vs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Jf(t,e,n){e instanceof no?(t.h=e,H_(t.h,t.g)):(n||(e=kr(e,B_)),t.h=new no(e,t.g))}function Ie(t,e,n){t.h.set(e,n)}function Ra(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function z_(t){return t instanceof ri?nn(t):new ri(t,void 0)}function U_(t,e,n,i){var r=new ri(null,void 0);return t&&js(r,t),e&&$s(r,e),n&&Vs(r,n),i&&(r.l=i),r}function Or(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function kr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,j_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function j_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zf=/[#\/\?@]/g,$_=/[#\?:]/g,V_=/[#\?]/g,B_=/[#\?@]/g,q_=/#/g;function no(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fn(t){t.g||(t.g=new or,t.h=0,t.i&&F_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=no.prototype;M.add=function(t,e){Fn(this),this.i=null,t=sr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Vg(t,e){Fn(t),e=sr(t,e),ii(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ii(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Pu(t)))}function Bg(t,e){return Fn(t),e=sr(t,e),ii(t.g.h,e)}M.forEach=function(t,e){Fn(this),this.g.forEach(function(n,i){pg(n,function(r){t.call(e,r,i,this)},this)},this)};M.T=function(){Fn(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],o=0;o<r.length;o++)n.push(e[i]);return n};M.R=function(t){Fn(this);var e=[];if(typeof t=="string")Bg(this,t)&&(e=Bf(e,this.g.get(sr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Bf(e,t[n])}return e};M.set=function(t,e){return Fn(this),this.i=null,t=sr(this,t),Bg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function qg(t,e,n){Vg(t,e),0<n.length&&(t.i=null,t.g.set(sr(t,e),vu(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var o=0;o<i.length;o++){var s=r;i[o]!==""&&(s+="="+encodeURIComponent(String(i[o]))),t.push(s)}}return this.i=t.join("&")};function sr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function H_(t,e){e&&!t.j&&(Fn(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(Vg(this,i),qg(this,r,n))},t)),t.j=e}var G_=class{constructor(t,e){this.h=t,this.g=e}};function Hg(t){this.l=t||K_,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ea&&W.g.Ea()&&W.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var K_=10;function Gg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Kg(t){return t.h?1:t.g?t.g.size:0}function lc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Du(t,e){t.g?t.g.add(e):t.h=e}function Wg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Hg.prototype.cancel=function(){if(this.i=Yg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Yg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return vu(t.i)}function Mu(){}Mu.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};Mu.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function W_(){this.g=new Mu}function Y_(t,e,n){const i=n||"";try{Nu(t,function(r,o){let s=r;Eo(r)&&(s=Iu(r)),e.push(i+o+"="+encodeURIComponent(s))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Q_(t,e){const n=new Ta;if(W.Image){const i=new Image;i.onload=Wo(Qo,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Wo(Qo,n,i,"TestLoadImage: error",!1,e),i.onabort=Wo(Qo,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Wo(Qo,n,i,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Qo(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Oo(t){this.l=t.$b||null,this.j=t.ib||!1}We(Oo,Cu);Oo.prototype.g=function(){return new Na(this.l,this.j)};Oo.prototype.i=function(t){return function(){return t}}({});function Na(t,e){Be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Lu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We(Na,Be);var Lu=0;M=Na.prototype;M.open=function(t,e){if(this.readyState!=Lu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,io(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||W).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ro(this)),this.readyState=Lu};M.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof W.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Qg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}M.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ro(this):io(this),this.readyState==3&&Qg(this)}};M.Ua=function(t){this.g&&(this.response=this.responseText=t,Ro(this))};M.Ta=function(t){this.g&&(this.response=t,Ro(this))};M.ha=function(){this.g&&Ro(this)};function Ro(t){t.readyState=4,t.l=null,t.j=null,t.A=null,io(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function io(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Na.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var X_=W.JSON.parse;function Pe(t){Be.call(this),this.headers=new or,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Xg,this.K=this.L=!1}We(Pe,Be);var Xg="",J_=/^https?$/i,Z_=["POST","PUT"];M=Pe.prototype;M.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():rc.g(),this.C=this.u?Xf(this.u):Xf(rc),this.g.onreadystatechange=He(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){eh(this,o);return}t=n||"";const r=new or(this.headers);i&&Nu(i,function(o,s){r.set(s,o)}),i=u_(r.T()),n=W.FormData&&t instanceof W.FormData,!(0<=mg(Z_,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(o,s){this.g.setRequestHeader(s,o)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{eb(this),0<this.B&&((this.K=e3(this.g))?(this.g.timeout=this.B,this.g.ontimeout=He(this.pa,this)):this.A=Au(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){eh(this,o)}};function e3(t){return Gi&&p_()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function t3(t){return t.toLowerCase()=="content-type"}M.pa=function(){typeof bu!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function eh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Jg(t),Pa(t)}function Jg(t){t.D||(t.D=!0,Ge(t,"complete"),Ge(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),Pa(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pa(this,!0)),Pe.Z.M.call(this)};M.Fa=function(){this.s||(this.F||this.v||this.l?Zg(this):this.cb())};M.cb=function(){Zg(this)};function Zg(t){if(t.h&&typeof bu!="undefined"&&(!t.C[1]||Jt(t)!=4||t.ba()!=2)){if(t.v&&Jt(t)==4)Au(t.Fa,0,t);else if(Ge(t,"readystatechange"),Jt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match($g)[1]||null;if(!r&&W.self&&W.self.location){var o=W.self.location.protocol;r=o.substr(0,o.length-1)}i=!J_.test(r?r.toLowerCase():"")}n=i}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var s=2<Jt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.ba()+"]",Jg(t)}}finally{Pa(t)}}}}function Pa(t,e){if(t.g){eb(t);const n=t.g,i=t.C[0]?Ls:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=i}catch{}}}function eb(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function Jt(t){return t.g?t.g.readyState:0}M.ba=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}};M.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),X_(e)}};function th(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Xg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Da=function(){return this.m};M.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function n3(t){let e="";return yu(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Fu(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=n3(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function pr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function tb(t){this.za=0,this.l=[],this.h=new Ta,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=pr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=pr("baseRetryDelayMs",5e3,t),this.$a=pr("retryDelaySeedMs",1e4,t),this.Ya=pr("forwardChannelMaxRetries",2,t),this.ra=pr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Hg(t&&t.concurrentRequestLimit),this.Ca=new W_,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}M=tb.prototype;M.ma=8;M.G=1;function zu(t){if(nb(t),t.G==3){var e=t.V++,n=nn(t.F);Ie(n,"SID",t.J),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),No(t,n),e=new Ao(t,t.h,e,void 0),e.K=2,e.v=Ra(nn(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=ub(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Co(e)}lb(t)}M.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Da(t){t.g&&(ju(t),t.g.cancel(),t.g=null)}function nb(t){Da(t),t.u&&(W.clearTimeout(t.u),t.u=null),Bs(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function yl(t,e){t.l.push(new G_(t.Za++,e)),t.G==3&&Ma(t)}function Ma(t){Gg(t.i)||t.m||(t.m=!0,Tu(t.Ha,t),t.C=0)}function i3(t,e){return Kg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=To(He(t.Ha,t,e),ab(t,t.C)),t.C++,!0)}M.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Ao(this,this.h,t,void 0);let o=this.s;if(this.P&&(o?(o=gg(o),bg(o,this.P)):o=this.P),this.o===null&&(r.H=o),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ib(this,r,e),n=nn(this.F),Ie(n,"RID",t),Ie(n,"CVER",22),this.D&&Ie(n,"X-HTTP-Session-Id",this.D),No(this,n),this.o&&o&&Fu(n,this.o,o),Du(this.i,r),this.Ra&&Ie(n,"TYPE","init"),this.ja?(Ie(n,"$req",e),Ie(n,"SID","null"),r.$=!0,sc(r,n,null)):sc(r,n,e),this.G=2}}else this.G==3&&(t?nh(this,t):this.l.length==0||Gg(this.i)||nh(this))};function nh(t,e){var n;e?n=e.m:n=t.V++;const i=nn(t.F);Ie(i,"SID",t.J),Ie(i,"RID",n),Ie(i,"AID",t.U),No(t,i),t.o&&t.s&&Fu(i,t.o,t.s),n=new Ao(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ib(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Du(t.i,n),sc(n,i,e)}function No(t,e){t.j&&Nu({},function(n,i){Ie(e,i,n)})}function ib(t,e,n){n=Math.min(t.l.length,n);var i=t.j?He(t.j.Oa,t.j,t):null;e:{var r=t.l;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=r[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=o,0>c)o=Math.max(0,r[l].h-100),a=!1;else try{Y_(u,s,"req"+c+"_")}catch{i&&i(u)}}if(a){i=s.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function rb(t){t.g||t.u||(t.Y=1,Tu(t.Ga,t),t.A=0)}function Uu(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=To(He(t.Ga,t),ab(t,t.A)),t.A++,!0)}M.Ga=function(){if(this.u=null,ob(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=To(He(this.bb,this),t)}};M.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,nt(10),Da(this),ob(this))};function ju(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function ob(t){t.g=new Ao(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=nn(t.oa);Ie(e,"RID","rpc"),Ie(e,"SID",t.J),Ie(e,"CI",t.N?"0":"1"),Ie(e,"AID",t.U),No(t,e),Ie(e,"TYPE","xmlhttp"),t.o&&t.s&&Fu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ra(nn(e)),n.s=null,n.U=!0,Fg(n,t)}M.ab=function(){this.v!=null&&(this.v=null,Da(this),Uu(this),nt(19))};function Bs(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function sb(t,e){var n=null;if(t.g==e){Bs(t),ju(t),t.g=null;var i=2}else if(lc(t.i,e))n=e.D,Wg(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=Sa(),Ge(i,new Pg(i,n)),Ma(t)}else rb(t);else if(r=e.o,r==3||r==0&&0<t.I||!(i==1&&i3(t,e)||i==2&&Uu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Kn(t,5);break;case 4:Kn(t,10);break;case 3:Kn(t,6);break;default:Kn(t,2)}}}function ab(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Kn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=He(t.jb,t);n||(n=new ri("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||js(n,"https"),Ra(n)),Q_(n.toString(),i)}else nt(2);t.G=0,t.j&&t.j.va(e),lb(t),nb(t)}M.jb=function(t){t?(this.h.info("Successfully pinged google.com"),nt(2)):(this.h.info("Failed to ping google.com"),nt(1))};function lb(t){t.G=0,t.I=-1,t.j&&((Yg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,vu(t.l),t.l.length=0),t.j.ua())}function cb(t,e,n){let i=z_(n);if(i.i!="")e&&$s(i,e+"."+i.i),Vs(i,i.m);else{const r=W.location;i=U_(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&yu(t.aa,function(r,o){Ie(i,o,r)}),e=t.D,n=t.sa,e&&n&&Ie(i,e,n),Ie(i,"VER",t.ma),No(t,i),i}function ub(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Pe(new Oo({ib:!0})):new Pe(t.qa),e.L=t.H,e}function db(){}M=db.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Oa=function(){};function qs(){if(Gi&&!(10<=Number(g_)))throw Error("Environmental error: no available transport.")}qs.prototype.g=function(t,e){return new gt(t,e)};function gt(t,e){Be.call(this),this.g=new tb(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Fs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fs(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ar(this)}We(gt,Be);gt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Tu(He(t.hb,t,e))),nt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=cb(t,null,t.W),Ma(t)};gt.prototype.close=function(){zu(this.g)};gt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,yl(this.g,e)}else this.v?(e={},e.__data__=Iu(t),yl(this.g,e)):yl(this.g,t)};gt.prototype.M=function(){this.g.j=null,delete this.j,zu(this.g),delete this.g,gt.Z.M.call(this)};function fb(t){Ou.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}We(fb,Ou);function hb(){Ru.call(this),this.status=1}We(hb,Ru);function ar(t){this.g=t}We(ar,db);ar.prototype.xa=function(){Ge(this.g,"a")};ar.prototype.wa=function(t){Ge(this.g,new fb(t))};ar.prototype.va=function(t){Ge(this.g,new hb)};ar.prototype.ua=function(){Ge(this.g,"b")};qs.prototype.createWebChannel=qs.prototype.g;gt.prototype.send=gt.prototype.u;gt.prototype.open=gt.prototype.m;gt.prototype.close=gt.prototype.close;Aa.NO_ERROR=0;Aa.TIMEOUT=8;Aa.HTTP_ERROR=6;Dg.COMPLETE="complete";Mg.EventType=So;So.OPEN="a";So.CLOSE="b";So.ERROR="c";So.MESSAGE="d";Be.prototype.listen=Be.prototype.N;Pe.prototype.listenOnce=Pe.prototype.O;Pe.prototype.getLastError=Pe.prototype.La;Pe.prototype.getLastErrorCode=Pe.prototype.Da;Pe.prototype.getStatus=Pe.prototype.ba;Pe.prototype.getResponseJson=Pe.prototype.Qa;Pe.prototype.getResponseText=Pe.prototype.ga;Pe.prototype.send=Pe.prototype.ea;var r3=function(){return new qs},o3=function(){return Sa()},wl=Aa,s3=Dg,a3=fi,ih={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},l3=Oo,Xo=Mg,c3=Pe;const rh="@firebase/firestore";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let lr="9.8.4";/**
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
 */const oi=new ru("@firebase/firestore");function oh(){return oi.logLevel}function j(t,...e){if(oi.logLevel<=ue.DEBUG){const n=e.map($u);oi.debug(`Firestore (${lr}): ${t}`,...n)}}function An(t,...e){if(oi.logLevel<=ue.ERROR){const n=e.map($u);oi.error(`Firestore (${lr}): ${t}`,...n)}}function sh(t,...e){if(oi.logLevel<=ue.WARN){const n=e.map($u);oi.warn(`Firestore (${lr}): ${t}`,...n)}}function $u(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function me(t,e){t||K()}function Q(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends di{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class u3{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class d3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class f3{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let o=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Zt,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Zt)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(me(typeof i.accessToken=="string"),new u3(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new lt(e)}}class h3{constructor(e,n,i){this.type="FirstParty",this.user=lt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class m3{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new h3(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class p3{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class g3{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const i=o=>{o.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.p;return this.p=o.token,j("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const r=o=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.g.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.g.getImmediate({optional:!0});o?r(o):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.p=n.token,new p3(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function b3(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class mb{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=b3(40);for(let o=0;o<r.length;++o)i.length<20&&r[o]<n&&(i+=e.charAt(r[o]%e.length))}return i}}function fe(t,e){return t<e?-1:t>e?1:0}function Ki(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
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
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Fe(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Fe(0,0))}static max(){return new te(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ro{constructor(e,n,i){n===void 0?n=0:n>e.length&&K(),i===void 0?i=e.length-n:i>e.length-n&&K(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return ro.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ro?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const o=e.get(r),s=n.get(r);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends ro{construct(e,n,i){return new Te(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new $(I.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const v3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends ro{construct(e,n,i){return new Ye(e,n,i)}static isValidIdentifier(e){return v3.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const o=()=>{if(i.length===0)throw new $(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let s=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new $(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(s=!s,r++):a!=="."||s?(i+=a,r++):(o(),r++)}if(o(),s)throw new $(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Te.fromString(e))}static fromName(e){return new q(Te.fromString(e).popFirst(5))}static empty(){return new q(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Te(e.slice()))}}function y3(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=te.fromTimestamp(i===1e9?new Fe(n+1,0):new Fe(n,i));return new Cn(r,q.empty(),e)}function w3(t){return new Cn(t.readTime,t.key,-1)}class Cn{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Cn(te.min(),q.empty(),-1)}static max(){return new Cn(te.max(),q.empty(),-1)}}function k3(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const x3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Po(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==x3)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((i,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,r)},this.catchCallback=o=>{this.wrapFailure(n,o).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,i)=>{n(e)})}static reject(e){return new S((n,i)=>{i(e)})}static waitFor(e){return new S((n,i)=>{let r=0,o=0,s=!1;e.forEach(a=>{++r,a.next(()=>{++o,s&&o===r&&n()},l=>i(l))}),s=!0,o===r&&n()})}static or(e){let n=S.resolve(!1);for(const i of e)n=n.next(r=>r?S.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,o)=>{i.push(n.call(this,r,o))}),this.waitFor(i)}static mapArray(e,n){return new S((i,r)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const c=l;n(e[c]).next(u=>{s[c]=u,++a,a===o&&i(s)},u=>r(u))}})}static doWhile(e,n){return new S((i,r)=>{const o=()=>{e()===!0?n().next(()=>{o()},r):i()};o()})}}function Do(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Vu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.it(i),this.rt=i=>n.writeSequenceNumber(i))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function ah(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Vu.ot=-1;class Ue{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jo(this.root,e,this.comparator,!0)}}class Jo{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?i(e.key,n):1,n&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,i,r,o){this.key=e,this.value=n,this.color=i!=null?i:qe.RED,this.left=r!=null?r:qe.EMPTY,this.right=o!=null?o:qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,o){return new qe(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const o=i(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,n,i),null):o===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,i,r){return this}insert(t,e,n){return new qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lh(this.data.getIterator())}getIteratorFrom(e){return new lh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,o=i.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class lh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new kt([])}unionWith(e){let n=new ze(Ye.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ki(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const E3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(t){if(me(!!t),typeof t=="string"){let e=0;const n=E3.exec(t);if(me(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wi(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */function gb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bb(t){const e=t.mapValue.fields.__previous_value__;return gb(e)?bb(e):e}function oo(t){const e=On(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
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
 */class I3{constructor(e,n,i,r,o,s,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Yi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Mo(t){return t==null}function Hs(t){return t===0&&1/t==-1/0}function T3(t){return typeof t=="number"&&Number.isInteger(t)&&!Hs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Zo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function si(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gb(t)?4:S3(t)?9007199254740991:10:K()}function qt(t,e){if(t===e)return!0;const n=si(t);if(n!==si(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oo(t).isEqual(oo(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=On(i.timestampValue),s=On(r.timestampValue);return o.seconds===s.seconds&&o.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Wi(i.bytesValue).isEqual(Wi(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Re(i.geoPointValue.latitude)===Re(r.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Re(i.integerValue)===Re(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Re(i.doubleValue),s=Re(r.doubleValue);return o===s?Hs(o)===Hs(s):isNaN(o)&&isNaN(s)}return!1}(t,e);case 9:return Ki(t.arrayValue.values||[],e.arrayValue.values||[],qt);case 10:return function(i,r){const o=i.mapValue.fields||{},s=r.mapValue.fields||{};if(ah(o)!==ah(s))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(s[a]===void 0||!qt(o[a],s[a])))return!1;return!0}(t,e);default:return K()}}function so(t,e){return(t.values||[]).find(n=>qt(n,e))!==void 0}function Qi(t,e){if(t===e)return 0;const n=si(t),i=si(e);if(n!==i)return fe(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(r,o){const s=Re(r.integerValue||r.doubleValue),a=Re(o.integerValue||o.doubleValue);return s<a?-1:s>a?1:s===a?0:isNaN(s)?isNaN(a)?0:-1:1}(t,e);case 3:return ch(t.timestampValue,e.timestampValue);case 4:return ch(oo(t),oo(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(r,o){const s=Wi(r),a=Wi(o);return s.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const s=r.split("/"),a=o.split("/");for(let l=0;l<s.length&&l<a.length;l++){const c=fe(s[l],a[l]);if(c!==0)return c}return fe(s.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const s=fe(Re(r.latitude),Re(o.latitude));return s!==0?s:fe(Re(r.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const s=r.values||[],a=o.values||[];for(let l=0;l<s.length&&l<a.length;++l){const c=Qi(s[l],a[l]);if(c)return c}return fe(s.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===Zo.mapValue&&o===Zo.mapValue)return 0;if(r===Zo.mapValue)return 1;if(o===Zo.mapValue)return-1;const s=r.fields||{},a=Object.keys(s),l=o.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const d=fe(a[u],c[u]);if(d!==0)return d;const f=Qi(s[a[u]],l[c[u]]);if(f!==0)return f}return fe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw K()}}function ch(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=On(t),i=On(e),r=fe(n.seconds,i.seconds);return r!==0?r:fe(n.nanos,i.nanos)}function zi(t){return cc(t)}function cc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=On(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Wi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",o=!0;for(const s of i.values||[])o?o=!1:r+=",",r+=cc(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let o="{",s=!0;for(const a of r)s?s=!1:o+=",",o+=`${a}:${cc(i.fields[a])}`;return o+"}"}(t.mapValue):K();var e,n}function uc(t){return!!t&&"integerValue"in t}function Bu(t){return!!t&&"arrayValue"in t}function uh(t){return!!t&&"nullValue"in t}function dh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ps(t){return!!t&&"mapValue"in t}function Rr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hi(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Rr(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Rr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function S3(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!ps(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rr(n)}setAll(e){let n=Ye.emptyPath(),i={},r=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}s?i[a.lastSegment()]=Rr(s):r.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,i,r)}delete(e){const n=this.field(e.popLast());ps(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];ps(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){hi(n,(r,o)=>e[r]=o);for(const r of i)delete e[r]}clone(){return new tt(Rr(this.value))}}function vb(t){const e=[];return hi(t.fields,(n,i)=>{const r=new Ye([n]);if(ps(i)){const o=vb(i.mapValue).fields;if(o.length===0)e.push(r);else for(const s of o)e.push(r.child(s))}else e.push(r)}),new kt(e)}/**
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
 */class Me{constructor(e,n,i,r,o,s){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.data=o,this.documentState=s}static newInvalidDocument(e){return new Me(e,0,te.min(),te.min(),tt.empty(),0)}static newFoundDocument(e,n,i){return new Me(e,1,n,te.min(),i,0)}static newNoDocument(e,n){return new Me(e,2,n,te.min(),tt.empty(),0)}static newUnknownDocument(e,n){return new Me(e,3,n,te.min(),tt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class A3{constructor(e,n=null,i=[],r=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=o,this.startAt=s,this.endAt=a,this.ut=null}}function fh(t,e=null,n=[],i=[],r=null,o=null,s=null){return new A3(t,e,n,i,r,o,s)}function qu(t){const e=Q(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>{return(r=i).field.canonicalString()+r.op.toString()+zi(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Mo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>zi(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>zi(i)).join(",")),e.ut=n}return e.ut}function C3(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${zi(i.value)}`;var i}).join(", ")}]`),Mo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>zi(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>zi(n)).join(",")),`Target(${e})`}function Hu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!F3(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!qt(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mh(t.startAt,e.startAt)&&mh(t.endAt,e.endAt)}function dc(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ct extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,i):new O3(e,n,i):n==="array-contains"?new P3(e,i):n==="in"?new D3(e,i):n==="not-in"?new M3(e,i):n==="array-contains-any"?new L3(e,i):new ct(e,n,i)}static ct(e,n,i){return n==="in"?new R3(e,i):new N3(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Qi(n,this.value)):n!==null&&si(this.value)===si(n)&&this.at(Qi(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class O3 extends ct{constructor(e,n,i){super(e,n,i),this.key=q.fromName(i.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.at(n)}}class R3 extends ct{constructor(e,n){super(e,"in",n),this.keys=yb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class N3 extends ct{constructor(e,n){super(e,"not-in",n),this.keys=yb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>q.fromName(i.referenceValue))}class P3 extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bu(n)&&so(n.arrayValue,this.value)}}class D3 extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&so(this.value.arrayValue,n)}}class M3 extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(so(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!so(this.value.arrayValue,n)}}class L3 extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>so(this.value.arrayValue,i))}}class Gs{constructor(e,n){this.position=e,this.inclusive=n}}class Nr{constructor(e,n="asc"){this.field=e,this.dir=n}}function F3(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function hh(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const o=e[r],s=t.position[r];if(o.field.isKeyField()?i=q.comparator(q.fromName(s.referenceValue),n.key):i=Qi(s,n.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function mh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class La{constructor(e,n=null,i=[],r=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function z3(t,e,n,i,r,o,s,a){return new La(t,e,n,i,r,o,s,a)}function Gu(t){return new La(t)}function U3(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function j3(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $3(t){for(const e of t.filters)if(e.ht())return e.field;return null}function V3(t){return t.collectionGroup!==null}function ao(t){const e=Q(t);if(e.lt===null){e.lt=[];const n=$3(e),i=j3(e);if(n!==null&&i===null)n.isKeyField()||e.lt.push(new Nr(n)),e.lt.push(new Nr(Ye.keyField(),"asc"));else{let r=!1;for(const o of e.explicitOrderBy)e.lt.push(o),o.field.isKeyField()&&(r=!0);if(!r){const o=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Nr(Ye.keyField(),o))}}}return e.lt}function ai(t){const e=Q(t);if(!e.ft)if(e.limitType==="F")e.ft=fh(e.path,e.collectionGroup,ao(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const o of ao(e)){const s=o.dir==="desc"?"asc":"desc";n.push(new Nr(o.field,s))}const i=e.endAt?new Gs(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Gs(e.startAt.position,e.startAt.inclusive):null;e.ft=fh(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.ft}function B3(t,e,n){return new La(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fa(t,e){return Hu(ai(t),ai(e))&&t.limitType===e.limitType}function wb(t){return`${qu(ai(t))}|lt:${t.limitType}`}function fc(t){return`Query(target=${C3(ai(t))}; limitType=${t.limitType})`}function Ku(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):q.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(r,o,s){const a=hh(r,o,s);return r.inclusive?a<=0:a<0}(n.startAt,ao(n),i)||n.endAt&&!function(r,o,s){const a=hh(r,o,s);return r.inclusive?a>=0:a>0}(n.endAt,ao(n),i))}(t,e)}function q3(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kb(t){return(e,n)=>{let i=!1;for(const r of ao(t)){const o=H3(r,e,n);if(o!==0)return o;i=i||r.field.isKeyField()}return 0}}function H3(t,e,n){const i=t.field.isKeyField()?q.comparator(e.key,n.key):function(r,o,s){const a=o.data.field(r),l=s.data.field(r);return a!==null&&l!==null?Qi(a,l):K()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return K()}}/**
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
 */function xb(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hs(e)?"-0":e}}function _b(t){return{integerValue:""+t}}function G3(t,e){return T3(e)?_b(e):xb(t,e)}/**
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
 */class za{constructor(){this._=void 0}}function K3(t,e,n){return t instanceof Ks?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof lo?Ib(t,e):t instanceof co?Tb(t,e):function(i,r){const o=Eb(i,r),s=ph(o)+ph(i._t);return uc(o)&&uc(i._t)?_b(s):xb(i.wt,s)}(t,e)}function W3(t,e,n){return t instanceof lo?Ib(t,e):t instanceof co?Tb(t,e):n}function Eb(t,e){return t instanceof Ws?uc(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Ks extends za{}class lo extends za{constructor(e){super(),this.elements=e}}function Ib(t,e){const n=Sb(e);for(const i of t.elements)n.some(r=>qt(r,i))||n.push(i);return{arrayValue:{values:n}}}class co extends za{constructor(e){super(),this.elements=e}}function Tb(t,e){let n=Sb(e);for(const i of t.elements)n=n.filter(r=>!qt(r,i));return{arrayValue:{values:n}}}class Ws extends za{constructor(e,n){super(),this.wt=e,this._t=n}}function ph(t){return Re(t.integerValue||t.doubleValue)}function Sb(t){return Bu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Y3(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof lo&&i instanceof lo||n instanceof co&&i instanceof co?Ki(n.elements,i.elements,qt):n instanceof Ws&&i instanceof Ws?qt(n._t,i._t):n instanceof Ks&&i instanceof Ks}(t.transform,e.transform)}class Q3{constructor(e,n){this.version=e,this.transformResults=n}}class ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ut}static exists(e){return new ut(void 0,e)}static updateTime(e){return new ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ua{}function Ab(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wu(t.key,ut.none()):new Lo(t.key,t.data,ut.none());{const n=t.data,i=tt.empty();let r=new ze(Ye.comparator);for(let o of e.fields)if(!r.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?i.delete(o):i.set(o,s),r=r.add(o)}return new zn(t.key,i,new kt(r.toArray()),ut.none())}}function X3(t,e,n){t instanceof Lo?function(i,r,o){const s=i.value.clone(),a=bh(i.fieldTransforms,r,o.transformResults);s.setAll(a),r.convertToFoundDocument(o.version,s).setHasCommittedMutations()}(t,e,n):t instanceof zn?function(i,r,o){if(!gs(i.precondition,r))return void r.convertToUnknownDocument(o.version);const s=bh(i.fieldTransforms,r,o.transformResults),a=r.data;a.setAll(Cb(i)),a.setAll(s),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Pr(t,e,n,i){return t instanceof Lo?function(r,o,s,a){if(!gs(r.precondition,o))return s;const l=r.value.clone(),c=vh(r.fieldTransforms,a,o);return l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof zn?function(r,o,s,a){if(!gs(r.precondition,o))return s;const l=vh(r.fieldTransforms,a,o),c=o.data;return c.setAll(Cb(r)),c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),s===null?null:s.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(r,o,s){return gs(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):s}(t,e,n)}function J3(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),o=Eb(i.transform,r||null);o!=null&&(n===null&&(n=tt.empty()),n.set(i.field,o))}return n||null}function gh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ki(n,i,(r,o)=>Y3(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Lo extends Ua{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class zn extends Ua{constructor(e,n,i,r,o=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Cb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function bh(t,e,n){const i=new Map;me(t.length===n.length);for(let r=0;r<n.length;r++){const o=t[r],s=o.transform,a=e.data.field(o.field);i.set(o.field,W3(s,a,n[r]))}return i}function vh(t,e,n){const i=new Map;for(const r of t){const o=r.transform,s=n.data.field(r.field);i.set(r.field,K3(o,s,e))}return i}class Wu extends Ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ob extends Ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Z3{constructor(e){this.count=e}}/**
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
 */var Oe,re;function Rb(t){switch(t){default:return K();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Nb(t){if(t===void 0)return An("GRPC error has no .code"),I.UNKNOWN;switch(t){case Oe.OK:return I.OK;case Oe.CANCELLED:return I.CANCELLED;case Oe.UNKNOWN:return I.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return I.INTERNAL;case Oe.UNAVAILABLE:return I.UNAVAILABLE;case Oe.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Oe.NOT_FOUND:return I.NOT_FOUND;case Oe.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Oe.ABORTED:return I.ABORTED;case Oe.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Oe.DATA_LOSS:return I.DATA_LOSS;default:return K()}}(re=Oe||(Oe={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class cr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,o]of i)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(n,i)=>{for(const[r,o]of i)e(r,o)})}isEmpty(){return pb(this.inner)}size(){return this.innerSize}}/**
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
 */const eE=new Ue(q.comparator);function rn(){return eE}const Pb=new Ue(q.comparator);function xr(...t){let e=Pb;for(const n of t)e=e.insert(n.key,n);return e}function Db(t){let e=Pb;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Wn(){return Dr()}function Mb(){return Dr()}function Dr(){return new cr(t=>t.toString(),(t,e)=>t.isEqual(e))}const tE=new Ue(q.comparator),nE=new ze(q.comparator);function ie(...t){let e=nE;for(const n of t)e=e.add(n);return e}const iE=new ze(fe);function Lb(){return iE}/**
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
 */class ja{constructor(e,n,i,r,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,Fo.createSynthesizedTargetChangeForCurrentChange(e,n)),new ja(te.min(),i,Lb(),rn(),ie())}}class Fo{constructor(e,n,i,r,o){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Fo(Ke.EMPTY_BYTE_STRING,n,ie(),ie(),ie())}}/**
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
 */class bs{constructor(e,n,i,r){this.gt=e,this.removedTargetIds=n,this.key=i,this.yt=r}}class Fb{constructor(e,n){this.targetId=e,this.It=n}}class zb{constructor(e,n,i=Ke.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class yh{constructor(){this.Tt=0,this.Et=kh(),this.At=Ke.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=ie(),n=ie(),i=ie();return this.Et.forEach((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:K()}}),new Fo(this.At,this.Rt,e,n,i)}Dt(){this.bt=!1,this.Et=kh()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class rE{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=rn(),this.Bt=wh(),this.Lt=new ze(fe)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const i=this.Qt(n);switch(e.state){case 0:this.jt(n)&&i.Vt(e.resumeToken);break;case 1:i.kt(),i.Pt||i.Dt(),i.Vt(e.resumeToken);break;case 2:i.kt(),i.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(i.Ot(),i.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),i.Vt(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((i,r)=>{this.jt(r)&&n(r)})}zt(e){const n=e.targetId,i=e.It.count,r=this.Ht(n);if(r){const o=r.target;if(dc(o))if(i===0){const s=new q(o.path);this.Kt(n,s,Me.newNoDocument(s,te.min()))}else me(i===1);else this.Jt(n)!==i&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((o,s)=>{const a=this.Ht(s);if(a){if(o.current&&dc(a.target)){const l=new q(a.target.path);this.$t.get(l)!==null||this.Xt(s,l)||this.Kt(s,l,Me.newNoDocument(l,e))}o.vt&&(n.set(s,o.St()),o.Dt())}});let i=ie();this.Bt.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const c=this.Ht(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(o))}),this.$t.forEach((o,s)=>s.setReadTime(e));const r=new ja(e,n,this.Lt,this.$t,i);return this.$t=rn(),this.Bt=wh(),this.Lt=new ze(fe),r}qt(e,n){if(!this.jt(e))return;const i=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,i),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,i){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),i&&(this.$t=this.$t.insert(n,i))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new yh,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new ze(fe),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new yh),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function wh(){return new Ue(q.comparator)}function kh(){return new Ue(q.comparator)}/**
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
 */const oE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class aE{constructor(e,n){this.databaseId=e,this.dt=n}}function Ys(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ub(t,e){return t.dt?e.toBase64():e.toUint8Array()}function lE(t,e){return Ys(t,e.toTimestamp())}function Rt(t){return me(!!t),te.fromTimestamp(function(e){const n=On(e);return new Fe(n.seconds,n.nanos)}(t))}function Yu(t,e){return function(n){return new Te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function jb(t){const e=Te.fromString(t);return me(qb(e)),e}function Qs(t,e){return Yu(t.databaseId,e.path)}function Mr(t,e){const n=jb(e);if(n.get(1)!==t.databaseId.projectId)throw new $(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q($b(n))}function hc(t,e){return Yu(t.databaseId,e)}function cE(t){const e=jb(t);return e.length===4?Te.emptyPath():$b(e)}function uo(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $b(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xh(t,e,n){return{name:Qs(t,e),fields:n.value.mapValue.fields}}function uE(t,e){return"found"in e?function(n,i){me(!!i.found),i.found.name,i.found.updateTime;const r=Mr(n,i.found.name),o=Rt(i.found.updateTime),s=new tt({mapValue:{fields:i.found.fields}});return Me.newFoundDocument(r,o,s)}(t,e):"missing"in e?function(n,i){me(!!i.missing),me(!!i.readTime);const r=Mr(n,i.missing),o=Rt(i.readTime);return Me.newNoDocument(r,o)}(t,e):K()}function dE(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],o=function(l,c){return l.dt?(me(c===void 0||typeof c=="string"),Ke.fromBase64String(c||"")):(me(c===void 0||c instanceof Uint8Array),Ke.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(l){const c=l.code===void 0?I.UNKNOWN:Nb(l.code);return new $(c,l.message||"")}(s);n=new zb(i,r,o,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Mr(t,i.document.name),o=Rt(i.document.updateTime),s=new tt({mapValue:{fields:i.document.fields}}),a=Me.newFoundDocument(r,o,s),l=i.targetIds||[],c=i.removedTargetIds||[];n=new bs(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Mr(t,i.document),o=i.readTime?Rt(i.readTime):te.min(),s=Me.newNoDocument(r,o),a=i.removedTargetIds||[];n=new bs([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Mr(t,i.document),o=i.removedTargetIds||[];n=new bs([],o,r,null)}else{if(!("filter"in e))return K();{e.filter;const i=e.filter;i.targetId;const r=i.count||0,o=new Z3(r),s=i.targetId;n=new Fb(s,o)}}return n}function Vb(t,e){let n;if(e instanceof Lo)n={update:xh(t,e.key,e.value)};else if(e instanceof Wu)n={delete:Qs(t,e.key)};else if(e instanceof zn)n={update:xh(t,e.key,e.data),updateMask:kE(e.fieldMask)};else{if(!(e instanceof Ob))return K();n={verify:Qs(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const s=o.transform;if(s instanceof Ks)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(s instanceof lo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:s.elements}};if(s instanceof co)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:s.elements}};if(s instanceof Ws)return{fieldPath:o.field.canonicalString(),increment:s._t};throw K()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:lE(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K()}(t,e.precondition)),n}function fE(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?Rt(i.updateTime):Rt(r);return o.isEqual(te.min())&&(o=Rt(r)),new Q3(o,i.transformResults||[])}(n,e))):[]}function hE(t,e){return{documents:[hc(t,e.path)]}}function mE(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=hc(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=hc(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(l){if(l.length===0)return;const c=l.map(u=>function(d){if(d.op==="=="){if(dh(d.value))return{unaryFilter:{field:wi(d.field),op:"IS_NAN"}};if(uh(d.value))return{unaryFilter:{field:wi(d.field),op:"IS_NULL"}}}else if(d.op==="!="){if(dh(d.value))return{unaryFilter:{field:wi(d.field),op:"IS_NOT_NAN"}};if(uh(d.value))return{unaryFilter:{field:wi(d.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wi(d.field),op:vE(d.op),value:d.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);r&&(n.structuredQuery.where=r);const o=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:wi(u.field),direction:bE(u.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(l,c){return l.dt||Mo(c)?c:{value:c}}(t,e.limit);var a;return s!==null&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function pE(t){let e=cE(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){me(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let o=[];n.where&&(o=Bb(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(u=>function(d){return new Nr(Ai(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,Mo(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(u){const d=!!u.before,f=u.values||[];return new Gs(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const d=!u.before,f=u.values||[];return new Gs(f,d)}(n.endAt)),z3(e,r,s,o,a,"F",l,c)}function gE(t,e){const n=function(i,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bb(t){return t?t.unaryFilter!==void 0?[wE(t)]:t.fieldFilter!==void 0?[yE(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Bb(e)).reduce((e,n)=>e.concat(n)):K():[]}function bE(t){return oE[t]}function vE(t){return sE[t]}function wi(t){return{fieldPath:t.canonicalString()}}function Ai(t){return Ye.fromServerFormat(t.fieldPath)}function yE(t){return ct.create(Ai(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}function wE(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ai(t.unaryFilter.field);return ct.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ai(t.unaryFilter.field);return ct.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ai(t.unaryFilter.field);return ct.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ai(t.unaryFilter.field);return ct.create(r,"!=",{nullValue:"NULL_VALUE"});default:return K()}}function kE(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function qb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class xE{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(e.key)&&X3(o,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Pr(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Pr(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Mb();return this.mutations.forEach(r=>{const o=e.get(r.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(r.key)?null:a;const l=Ab(s,a);l!==null&&i.set(r.key,l),s.isValidDocument()||s.convertToNoDocument(te.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Ki(this.mutations,e.mutations,(n,i)=>gh(n,i))&&Ki(this.baseMutations,e.baseMutations,(n,i)=>gh(n,i))}}class Qu{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){me(e.mutations.length===i.length);let r=tE;const o=e.mutations;for(let s=0;s<o.length;s++)r=r.insert(o[s].key,i[s].version);return new Qu(e,n,i,r)}}/**
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
 */class _E{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Zn{constructor(e,n,i,r,o=te.min(),s=te.min(),a=Ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class EE{constructor(e){this.ne=e}}function IE(t){const e=pE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?B3(e,e.limit,"L"):e}/**
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
 */class TE{constructor(){this.ze=new SE}addToCollectionParentIndex(e,n){return this.ze.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Cn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Cn.min())}updateCollectionGroup(e,n,i){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class SE{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new ze(Te.comparator),o=!r.has(i);return this.index[n]=r.add(i),o}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new ze(Te.comparator)).toArray()}}/**
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
 */class Xi{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Xi(0)}static Rn(){return new Xi(-1)}}/**
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
 */class AE{constructor(){this.changes=new cr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?S.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class CE{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class OE{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.getBaseDocument(e,n,i))).next(r=>(i!==null&&Pr(i.mutation,r,kt.empty(),Fe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,ie()).next(()=>i))}getLocalViewOfDocuments(e,n,i=ie()){const r=Wn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(o=>{let s=xr();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const i=Wn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,ie()))}populateOverlays(e,n,i){const r=[];return i.forEach(o=>{n.has(o)||r.push(o)}),this.documentOverlayCache.getOverlays(e,r).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,i,r){let o=rn();const s=Dr(),a=Dr();return n.forEach((l,c)=>{const u=i.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof zn)?o=o.insert(c.key,c):u!==void 0&&(s.set(c.key,u.mutation.getFieldMask()),Pr(u.mutation,c,u.mutation.getFieldMask(),Fe.now()))}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((c,u)=>s.set(c,u)),n.forEach((c,u)=>{var d;return a.set(c,new CE(u,(d=s.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Dr();let r=new Ue((s,a)=>s-a),o=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||kt.empty();u=a.applyToLocalView(c,u),i.set(l,u);const d=(r.get(a.batchId)||ie()).add(l);r=r.insert(a.batchId,d)})}).next(()=>{const s=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,d=Mb();u.forEach(f=>{if(!o.has(f)){const m=Ab(n.get(f),i.get(f));m!==null&&d.set(f,m),o=o.add(f)}}),s.push(this.documentOverlayCache.saveOverlays(e,c,d))}return S.waitFor(s)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):V3(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(o=>{const s=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-o.size):S.resolve(Wn());let a=-1,l=o;return s.next(c=>S.forEach(c,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),o.get(u)?S.resolve():this.getBaseDocument(e,u,d).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,o)).next(()=>this.computeViews(e,l,c,ie())).next(u=>({batchId:a,changes:Db(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(i=>{let r=xr();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const r=n.collectionGroup;let o=xr();return this.indexManager.getCollectionParents(e,r).next(s=>S.forEach(s,a=>{const l=function(c,u){return new La(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,d)=>{o=o.insert(u,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,i){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,i).next(o=>(r=o,this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId))).next(o=>{o.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Me.newInvalidDocument(c)))});let s=xr();return r.forEach((a,l)=>{const c=o.get(a);c!==void 0&&Pr(c.mutation,l,kt.empty(),Fe.now()),Ku(n,l)&&(s=s.insert(a,l))}),s})}getBaseDocument(e,n,i){return i===null||i.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):S.resolve(Me.newInvalidDocument(n))}}/**
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
 */class RE{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return S.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var i;return this.Jn.set(n.id,{id:(i=n).id,version:i.version,createTime:Rt(i.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(i){return{name:i.name,query:IE(i.bundledQuery),readTime:Rt(i.readTime)}}(n)),S.resolve()}}/**
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
 */class NE{constructor(){this.overlays=new Ue(q.comparator),this.Xn=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Wn();return S.forEach(n,r=>this.getOverlay(e,r).next(o=>{o!==null&&i.set(r,o)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,o)=>{this.ie(e,n,o)}),S.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.Xn.get(i);return r!==void 0&&(r.forEach(o=>this.overlays=this.overlays.remove(o)),this.Xn.delete(i)),S.resolve()}getOverlaysForCollection(e,n,i){const r=Wn(),o=n.length+1,s=new q(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===o&&l.largestBatchId>i&&r.set(l.getKey(),l)}return S.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let o=new Ue((c,u)=>c-u);const s=this.overlays.getIterator();for(;s.hasNext();){const c=s.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=o.get(c.largestBatchId);u===null&&(u=Wn(),o=o.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Wn(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return S.resolve(a)}ie(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const s=this.Xn.get(r.largestBatchId).delete(i.key);this.Xn.set(r.largestBatchId,s)}this.overlays=this.overlays.insert(i.key,new _E(n,i));let o=this.Xn.get(n);o===void 0&&(o=ie(),this.Xn.set(n,o)),this.Xn.set(n,o.add(i.key))}}/**
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
 */class Xu{constructor(){this.Zn=new ze(je.ts),this.es=new ze(je.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const i=new je(e,n);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.rs(new je(e,n))}os(e,n){e.forEach(i=>this.removeReference(i,n))}us(e){const n=new q(new Te([])),i=new je(n,e),r=new je(n,e+1),o=[];return this.es.forEachInRange([i,r],s=>{this.rs(s),o.push(s.key)}),o}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new q(new Te([])),i=new je(n,e),r=new je(n,e+1);let o=ie();return this.es.forEachInRange([i,r],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new je(e,0),i=this.Zn.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class je{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return q.comparator(e.key,n.key)||fe(e.ls,n.ls)}static ns(e,n){return fe(e.ls,n.ls)||q.comparator(e.key,n.key)}}/**
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
 */class PE{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new ze(je.ts)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const o=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new xE(o,n,i,r);this.mutationQueue.push(s);for(const a of r)this.ds=this.ds.add(new je(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(s)}lookupMutationBatch(e,n){return S.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.ws(i),o=r<0?0:r;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new je(n,0),r=new je(n,Number.POSITIVE_INFINITY),o=[];return this.ds.forEachInRange([i,r],s=>{const a=this._s(s.ls);o.push(a)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new ze(fe);return n.forEach(r=>{const o=new je(r,0),s=new je(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([o,s],a=>{i=i.add(a.ls)})}),S.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let o=i;q.isDocumentKey(o)||(o=o.child(""));const s=new je(new q(o),0);let a=new ze(fe);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.ls)),!0)},s),S.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(i=>{const r=this._s(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){me(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.ds;return S.forEach(n.mutations,r=>{const o=new je(r.key,n.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=i})}In(e){}containsKey(e,n){const i=new je(n,0),r=this.ds.firstAfterOrEqual(i);return S.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class DE{constructor(e){this.ps=e,this.docs=new Ue(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),o=r?r.size:0,s=this.ps(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return S.resolve(i?i.document.mutableCopy():Me.newInvalidDocument(n))}getEntries(e,n){let i=rn();return n.forEach(r=>{const o=this.docs.get(r);i=i.insert(r,o?o.document.mutableCopy():Me.newInvalidDocument(r))}),S.resolve(i)}getAllFromCollection(e,n,i){let r=rn();const o=new q(n.child("")),s=this.docs.getIteratorFrom(o);for(;s.hasNext();){const{key:a,value:{document:l}}=s.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||k3(w3(l),i)<=0||(r=r.insert(l.key,l.mutableCopy()))}return S.resolve(r)}getAllFromCollectionGroup(e,n,i,r){K()}Is(e,n){return S.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new ME(this)}getSize(e){return S.resolve(this.size)}}class ME extends AE{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(e,r)):this.zn.removeEntry(i)}),S.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
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
 */class LE{constructor(e){this.persistence=e,this.Ts=new cr(n=>qu(n),Hu),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Es=0,this.As=new Xu,this.targetCount=0,this.Rs=Xi.An()}forEachTarget(e,n){return this.Ts.forEach((i,r)=>n(r)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Es&&(this.Es=n),S.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Xi(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.vn(n),S.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,i){let r=0;const o=[];return this.Ts.forEach((s,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Ts.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),S.waitFor(o).next(()=>r)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const i=this.Ts.get(n)||null;return S.resolve(i)}addMatchingKeys(e,n,i){return this.As.ss(n,i),S.resolve()}removeMatchingKeys(e,n,i){this.As.os(n,i);const r=this.persistence.referenceDelegate,o=[];return r&&n.forEach(s=>{o.push(r.markPotentiallyOrphaned(e,s))}),S.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),S.resolve()}getMatchingKeysForTargetId(e,n){const i=this.As.hs(n);return S.resolve(i)}containsKey(e,n){return S.resolve(this.As.containsKey(n))}}/**
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
 */class FE{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Vu(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new LE(this),this.indexManager=new TE,this.remoteDocumentCache=function(i){return new DE(i)}(i=>this.referenceDelegate.Ss(i)),this.wt=new EE(n),this.Ds=new RE(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NE,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.bs[e.toKey()];return i||(i=new PE(n,this.referenceDelegate),this.bs[e.toKey()]=i),i}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,i){j("MemoryPersistence","Starting transaction:",e);const r=new zE(this.Ps.next());return this.referenceDelegate.Cs(),i(r).next(o=>this.referenceDelegate.xs(r).next(()=>o)).toPromise().then(o=>(r.raiseOnCommittedEvent(),o))}Ns(e,n){return S.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,n)))}}class zE extends _3{constructor(e){super(),this.currentSequenceNumber=e}}class Ju{constructor(e){this.persistence=e,this.ks=new Xu,this.Os=null}static Ms(e){return new Ju(e)}get Fs(){if(this.Os)return this.Os;throw K()}addReference(e,n,i){return this.ks.addReference(i,n),this.Fs.delete(i.toString()),S.resolve()}removeReference(e,n,i){return this.ks.removeReference(i,n),this.Fs.add(i.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),S.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(o=>this.Fs.add(o.toString()))}).next(()=>i.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Fs,i=>{const r=q.fromPath(i);return this.$s(e,r).next(o=>{o||n.removeEntry(r,te.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(i=>{i?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return S.or([()=>S.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
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
 */class Zu{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Pi=i,this.vi=r}static Vi(e,n){let i=ie(),r=ie();for(const o of n.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new Zu(e,n.fromCache,i,r)}}/**
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
 */class UE{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,i,r){return this.Ci(e,n).next(o=>o||this.xi(e,n,r,i)).next(o=>o||this.Ni(e,n))}Ci(e,n){return S.resolve(null)}xi(e,n,i,r){return U3(n)||r.isEqual(te.min())?this.Ni(e,n):this.Di.getDocuments(e,i).next(o=>{const s=this.ki(n,o);return this.Oi(n,s,i,r)?this.Ni(e,n):(oh()<=ue.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),fc(n)),this.Mi(e,s,n,y3(r,-1)))})}ki(e,n){let i=new ze(kb(e));return n.forEach((r,o)=>{Ku(e,o)&&(i=i.add(o))}),i}Oi(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}Ni(e,n){return oh()<=ue.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",fc(n)),this.Di.getDocumentsMatchingQuery(e,n,Cn.min())}Mi(e,n,i,r){return this.Di.getDocumentsMatchingQuery(e,i,r).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
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
 */class jE{constructor(e,n,i,r){this.persistence=e,this.Fi=n,this.wt=r,this.$i=new Ue(fe),this.Bi=new cr(o=>qu(o),Hu),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(i)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OE(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function $E(t,e,n,i){return new jE(t,e,n,i)}async function Hb(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(o=>(r=o,n.qi(e),n.mutationQueue.getAllMutationBatches(i))).next(o=>{const s=[],a=[];let l=ie();for(const c of r){s.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of o){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({Ki:c,removedBatchIds:s,addedBatchIds:a}))})})}function VE(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),o=n.Ui.newChangeBuffer({trackRemovals:!0});return function(s,a,l,c){const u=l.batch,d=u.keys();let f=S.resolve();return d.forEach(m=>{f=f.next(()=>c.getEntry(a,m)).next(g=>{const E=l.docVersions.get(m);me(E!==null),g.version.compareTo(E)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),f.next(()=>s.mutationQueue.removeMutationBatch(a,u))}(n,i,e,o).next(()=>o.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(s){let a=ie();for(let l=0;l<s.mutationResults.length;++l)s.mutationResults[l].transformResults.length>0&&(a=a.add(s.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function Gb(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function BE(t,e){const n=Q(t),i=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];e.targetChanges.forEach((u,d)=>{const f=r.get(d);if(!f)return;a.push(n.Vs.removeMatchingKeys(o,u.removedDocuments,d).next(()=>n.Vs.addMatchingKeys(o,u.addedDocuments,d)));let m=f.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.has(d)?m=m.withResumeToken(Ke.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,i)),r=r.insert(d,m),function(g,E,k){return g.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(f,m,u)&&a.push(n.Vs.updateTargetData(o,m))});let l=rn(),c=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,u))}),a.push(qE(o,s,e.documentUpdates).next(u=>{l=u.Gi,c=u.Qi})),!i.isEqual(te.min())){const u=n.Vs.getLastRemoteSnapshotVersion(o).next(d=>n.Vs.setTargetsMetadata(o,o.currentSequenceNumber,i));a.push(u)}return S.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,c)).next(()=>l)}).then(o=>(n.$i=r,o))}function qE(t,e,n){let i=ie(),r=ie();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let s=rn();return n.forEach((a,l)=>{const c=o.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Gi:s,Qi:r}})}function HE(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function GE(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Vs.getTargetData(i,e).next(o=>o?(r=o,S.resolve(r)):n.Vs.allocateTargetId(i).next(s=>(r=new Zn(e,s,0,i.currentSequenceNumber),n.Vs.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.$i.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(i.targetId,i),n.Bi.set(e,i.targetId)),i})}async function mc(t,e,n){const i=Q(t),r=i.$i.get(e),o=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",o,s=>i.persistence.referenceDelegate.removeTarget(s,r))}catch(s){if(!Do(s))throw s;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}i.$i=i.$i.remove(e),i.Bi.delete(r.target)}function _h(t,e,n){const i=Q(t);let r=te.min(),o=ie();return i.persistence.runTransaction("Execute query","readonly",s=>function(a,l,c){const u=Q(a),d=u.Bi.get(c);return d!==void 0?S.resolve(u.$i.get(d)):u.Vs.getTargetData(l,c)}(i,s,ai(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Vs.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>i.Fi.getDocumentsMatchingQuery(s,e,n?r:te.min(),n?o:ie())).next(a=>(KE(i,q3(e),a),{documents:a,ji:o})))}function KE(t,e,n){let i=te.min();n.forEach((r,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)}),t.Li.set(e,i)}class Eh{constructor(){this.activeTargetIds=Lb()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WE{constructor(){this.Fr=new Eh,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,i){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Eh,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class YE{Br(e){}shutdown(){}}/**
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
 */class Ih{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const QE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class XE{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class JE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,i,r,o){const s=this.oo(e,n);j("RestConnection","Sending: ",s,i);const a={};return this.uo(a,r,o),this.co(e,s,a,i).then(l=>(j("RestConnection","Received: ",l),l),l=>{throw sh("RestConnection",`${e} failed with error: `,l,"url: ",s,"request:",i),l})}ao(e,n,i,r,o,s){return this.ro(e,n,i,r,o)}uo(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+lr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,o)=>e[o]=r),i&&i.headers.forEach((r,o)=>e[o]=r)}oo(e,n){const i=QE[e];return`${this.so}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,i,r){return new Promise((o,s)=>{const a=new c3;a.listenOnce(s3.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case wl.NO_ERROR:const c=a.getResponseJson();j("Connection","XHR received:",JSON.stringify(c)),o(c);break;case wl.TIMEOUT:j("Connection",'RPC "'+e+'" timed out'),s(new $(I.DEADLINE_EXCEEDED,"Request time out"));break;case wl.HTTP_ERROR:const u=a.getStatus();if(j("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const d=a.getResponseJson().error;if(d&&d.status&&d.message){const f=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(g)>=0?g:I.UNKNOWN}(d.status);s(new $(f,d.message))}else s(new $(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new $(I.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{j("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,i,15)})}ho(e,n,i){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=r3(),s=o3(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new l3({})),this.uo(a.initMessageHeaders,n,i),Sp()||Cp()||Yw()||Op()||Qw()||Ap()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=r.join("");j("Connection","Creating WebChannel: "+l,a);const c=o.createWebChannel(l,a);let u=!1,d=!1;const f=new XE({jr:g=>{d?j("Connection","Not sending because WebChannel is closed:",g):(u||(j("Connection","Opening WebChannel transport."),c.open(),u=!0),j("Connection","WebChannel sending:",g),c.send(g))},Wr:()=>c.close()}),m=(g,E,k)=>{g.listen(E,b=>{try{k(b)}catch(y){setTimeout(()=>{throw y},0)}})};return m(c,Xo.EventType.OPEN,()=>{d||j("Connection","WebChannel transport opened.")}),m(c,Xo.EventType.CLOSE,()=>{d||(d=!0,j("Connection","WebChannel transport closed"),f.eo())}),m(c,Xo.EventType.ERROR,g=>{d||(d=!0,sh("Connection","WebChannel transport errored:",g),f.eo(new $(I.UNAVAILABLE,"The operation could not be completed")))}),m(c,Xo.EventType.MESSAGE,g=>{var E;if(!d){const k=g.data[0];me(!!k);const b=k,y=b.error||((E=b[0])===null||E===void 0?void 0:E.error);if(y){j("Connection","WebChannel received error:",y);const N=y.status;let U=function(ce){const xe=Oe[ce];if(xe!==void 0)return Nb(xe)}(N),Z=y.message;U===void 0&&(U=I.INTERNAL,Z="Unknown error status: "+N+" with message "+y.message),d=!0,f.eo(new $(U,Z)),c.close()}else j("Connection","WebChannel received:",k),f.no(k)}}),m(s,a3.STAT_EVENT,g=>{g.stat===ih.PROXY?j("Connection","Detected buffering proxy"):g.stat===ih.NOPROXY&&j("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function kl(){return typeof document!="undefined"?document:null}/**
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
 */function $a(t){return new aE(t,!0)}class ed{constructor(e,n,i=1e3,r=1.5,o=6e4){this.js=e,this.timerId=n,this.lo=i,this.fo=r,this._o=o,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),i=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-i);r>0&&j("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class Kb{constructor(e,n,i,r,o,s,a,l){this.js=e,this.Ao=i,this.Ro=r,this.bo=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new ed(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Po===n&&this.Uo(i,r)},i=>{e(()=>{const r=new $(I.UNKNOWN,"Fetching auth token failed: "+i.message);return this.qo(r)})})}Uo(e,n){const i=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{i(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{i(()=>this.qo(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZE extends Kb{constructor(e,n,i,r,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,s),this.wt=o}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=dE(this.wt,e),i=function(r){if(!("targetChange"in r))return te.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Rt(o.readTime):te.min()}(e);return this.listener.Go(n,i)}Qo(e){const n={};n.database=uo(this.wt),n.addTarget=function(r,o){let s;const a=o.target;return s=dc(a)?{documents:hE(r,a)}:{query:mE(r,a)},s.targetId=o.targetId,o.resumeToken.approximateByteSize()>0?s.resumeToken=Ub(r,o.resumeToken):o.snapshotVersion.compareTo(te.min())>0&&(s.readTime=Ys(r,o.snapshotVersion.toTimestamp())),s}(this.wt,e);const i=gE(this.wt,e);i&&(n.labels=i),this.Mo(n)}jo(e){const n={};n.database=uo(this.wt),n.removeTarget=e,this.Mo(n)}}class e5 extends Kb{constructor(e,n,i,r,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,s),this.wt=o,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=fE(e.writeResults,e.commitTime),i=Rt(e.commitTime);return this.listener.Jo(i,n)}return me(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=uo(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>Vb(this.wt,i))};this.Mo(n)}}/**
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
 */class t5 extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=i,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new $(I.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.bo.ro(e,n,i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(I.UNKNOWN,r.toString())})}ao(e,n,i,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.bo.ao(e,n,i,o,s,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(I.UNKNOWN,o.toString())})}terminate(){this.Zo=!0}}class n5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(An(n),this.su=!1):j("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class i5{constructor(e,n,i,r,o){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=o,this.du.Br(s=>{i.enqueueAndForget(async()=>{mi(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Q(a);l.lu.add(4),await zo(l),l._u.set("Unknown"),l.lu.delete(4),await Va(l)}(this))})}),this._u=new n5(i,r)}}async function Va(t){if(mi(t))for(const e of t.fu)await e(!0)}async function zo(t){for(const e of t.fu)await e(!1)}function Wb(t,e){const n=Q(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),id(n)?nd(n):ur(n).Co()&&td(n,e))}function Yb(t,e){const n=Q(t),i=ur(n);n.hu.delete(e),i.Co()&&Qb(n,e),n.hu.size===0&&(i.Co()?i.ko():mi(n)&&n._u.set("Unknown"))}function td(t,e){t.wu.Nt(e.targetId),ur(t).Qo(e)}function Qb(t,e){t.wu.Nt(e),ur(t).jo(e)}function nd(t){t.wu=new rE({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),ur(t).start(),t._u.iu()}function id(t){return mi(t)&&!ur(t).Do()&&t.hu.size>0}function mi(t){return Q(t).lu.size===0}function Xb(t){t.wu=void 0}async function r5(t){t.hu.forEach((e,n)=>{td(t,e)})}async function o5(t,e){Xb(t),id(t)?(t._u.uu(e),nd(t)):t._u.set("Unknown")}async function s5(t,e,n){if(t._u.set("Online"),e instanceof zb&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const s of r.targetIds)i.hu.has(s)&&(await i.remoteSyncer.rejectListen(s,o),i.hu.delete(s),i.wu.removeTarget(s))}(t,e)}catch(i){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Xs(t,i)}else if(e instanceof bs?t.wu.Ut(e):e instanceof Fb?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(te.min()))try{const i=await Gb(t.localStore);n.compareTo(i)>=0&&await function(r,o){const s=r.wu.Yt(o);return s.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.hu.get(l);c&&r.hu.set(l,c.withResumeToken(a.resumeToken,o))}}),s.targetMismatches.forEach(a=>{const l=r.hu.get(a);if(!l)return;r.hu.set(a,l.withResumeToken(Ke.EMPTY_BYTE_STRING,l.snapshotVersion)),Qb(r,a);const c=new Zn(l.target,a,1,l.sequenceNumber);td(r,c)}),r.remoteSyncer.applyRemoteEvent(s)}(t,n)}catch(i){j("RemoteStore","Failed to raise snapshot:",i),await Xs(t,i)}}async function Xs(t,e,n){if(!Do(e))throw e;t.lu.add(1),await zo(t),t._u.set("Offline"),n||(n=()=>Gb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Va(t)})}function Jb(t,e){return e().catch(n=>Xs(t,n,e))}async function Ba(t){const e=Q(t),n=Rn(e);let i=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;a5(e);)try{const r=await HE(e.localStore,i);if(r===null){e.au.length===0&&n.ko();break}i=r.batchId,l5(e,r)}catch(r){await Xs(e,r)}Zb(e)&&ev(e)}function a5(t){return mi(t)&&t.au.length<10}function l5(t,e){t.au.push(e);const n=Rn(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Zb(t){return mi(t)&&!Rn(t).Do()&&t.au.length>0}function ev(t){Rn(t).start()}async function c5(t){Rn(t).Xo()}async function u5(t){const e=Rn(t);for(const n of t.au)e.Ho(n.mutations)}async function d5(t,e,n){const i=t.au.shift(),r=Qu.from(i,e,n);await Jb(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ba(t)}async function f5(t,e){e&&Rn(t).zo&&await async function(n,i){if(r=i.code,Rb(r)&&r!==I.ABORTED){const o=n.au.shift();Rn(n).No(),await Jb(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ba(n)}var r}(t,e),Zb(t)&&ev(t)}async function Th(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const i=mi(n);n.lu.add(3),await zo(n),i&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Va(n)}async function h5(t,e){const n=Q(t);e?(n.lu.delete(2),await Va(n)):e||(n.lu.add(2),await zo(n),n._u.set("Unknown"))}function ur(t){return t.mu||(t.mu=function(e,n,i){const r=Q(e);return r.tu(),new ZE(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,i)}(t.datastore,t.asyncQueue,{zr:r5.bind(null,t),Jr:o5.bind(null,t),Go:s5.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),id(t)?nd(t):t._u.set("Unknown")):(await t.mu.stop(),Xb(t))})),t.mu}function Rn(t){return t.gu||(t.gu=function(e,n,i){const r=Q(e);return r.tu(),new e5(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,i)}(t.datastore,t.asyncQueue,{zr:c5.bind(null,t),Jr:f5.bind(null,t),Yo:u5.bind(null,t),Jo:d5.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Ba(t)):(await t.gu.stop(),t.au.length>0&&(j("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
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
 */class rd{constructor(e,n,i,r,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=o,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(e,n,i,r,o){const s=Date.now()+i,a=new rd(e,n,s,r,o);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function od(t,e){if(An("AsyncQueue",`${e}: ${t}`),Do(t))return new $(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ui{constructor(e){this.comparator=e?(n,i)=>e(n,i)||q.comparator(n.key,i.key):(n,i)=>q.comparator(n.key,i.key),this.keyedMap=xr(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new Ui(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ui)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,o=i.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Ui;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
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
 */class Sh{constructor(){this.yu=new Ue(q.comparator)}track(e){const n=e.doc.key,i=this.yu.get(n);i?e.type!==0&&i.type===3?this.yu=this.yu.insert(n,e):e.type===3&&i.type!==1?this.yu=this.yu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.yu=this.yu.remove(n):e.type===1&&i.type===2?this.yu=this.yu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):K():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,i)=>{e.push(i)}),e}}class Ji{constructor(e,n,i,r,o,s,a,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,i,r){const o=[];return n.forEach(s=>{o.push({type:0,doc:s})}),new Ji(e,n,Ui.emptySet(n),o,i,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class m5{constructor(){this.Iu=void 0,this.listeners=[]}}class p5{constructor(){this.queries=new cr(e=>wb(e),Fa),this.onlineState="Unknown",this.Tu=new Set}}async function g5(t,e){const n=Q(t),i=e.query;let r=!1,o=n.queries.get(i);if(o||(r=!0,o=new m5),r)try{o.Iu=await n.onListen(i)}catch(s){const a=od(s,`Initialization of query '${fc(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.listeners.push(e),e.Eu(n.onlineState),o.Iu&&e.Au(o.Iu)&&sd(n)}async function b5(t,e){const n=Q(t),i=e.query;let r=!1;const o=n.queries.get(i);if(o){const s=o.listeners.indexOf(e);s>=0&&(o.listeners.splice(s,1),r=o.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function v5(t,e){const n=Q(t);let i=!1;for(const r of e){const o=r.query,s=n.queries.get(o);if(s){for(const a of s.listeners)a.Au(r)&&(i=!0);s.Iu=r}}i&&sd(n)}function y5(t,e,n){const i=Q(t),r=i.queries.get(e);if(r)for(const o of r.listeners)o.onError(n);i.queries.delete(e)}function sd(t){t.Tu.forEach(e=>{e.next()})}class w5{constructor(e,n,i){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=i||{}}Au(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new Ji(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.Du||!i)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Ji.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class tv{constructor(e){this.key=e}}class nv{constructor(e){this.key=e}}class k5{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=ie(),this.mutatedKeys=ie(),this.Lu=kb(e),this.Uu=new Ui(this.Lu)}get qu(){return this.Fu}Ku(e,n){const i=n?n.Gu:new Sh,r=n?n.Uu:this.Uu;let o=n?n.mutatedKeys:this.mutatedKeys,s=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,d)=>{const f=r.get(u),m=Ku(this.query,d)?d:null,g=!!f&&this.mutatedKeys.has(f.key),E=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let k=!1;f&&m?f.data.isEqual(m.data)?g!==E&&(i.track({type:3,doc:m}),k=!0):this.Qu(f,m)||(i.track({type:2,doc:m}),k=!0,(l&&this.Lu(m,l)>0||c&&this.Lu(m,c)<0)&&(a=!0)):!f&&m?(i.track({type:0,doc:m}),k=!0):f&&!m&&(i.track({type:1,doc:f}),k=!0,(l||c)&&(a=!0)),k&&(m?(s=s.add(m),o=E?o.add(u):o.delete(u)):(s=s.delete(u),o=o.delete(u)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const u=this.query.limitType==="F"?s.last():s.first();s=s.delete(u.key),o=o.delete(u.key),i.track({type:1,doc:u})}return{Uu:s,Gu:i,Oi:a,mutatedKeys:o}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const o=e.Gu.pu();o.sort((c,u)=>function(d,f){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return m(d)-m(f)}(c.type,u.type)||this.Lu(c.doc,u.doc)),this.ju(i);const s=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,l=a!==this.$u;return this.$u=a,o.length!==0||l?{snapshot:new Ji(this.query,e.Uu,r,o,e.mutatedKeys,a===0,l,!1),zu:s}:{zu:s}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Sh,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=ie(),this.Uu.forEach(i=>{this.Hu(i.key)&&(this.Bu=this.Bu.add(i.key))});const n=[];return e.forEach(i=>{this.Bu.has(i)||n.push(new nv(i))}),this.Bu.forEach(i=>{e.has(i)||n.push(new tv(i))}),n}Ju(e){this.Fu=e.ji,this.Bu=ie();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Ji.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class x5{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class _5{constructor(e){this.key=e,this.Xu=!1}}class E5{constructor(e,n,i,r,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Zu={},this.tc=new cr(a=>wb(a),Fa),this.ec=new Map,this.nc=new Set,this.sc=new Ue(q.comparator),this.ic=new Map,this.rc=new Xu,this.oc={},this.uc=new Map,this.cc=Xi.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function I5(t,e){const n=M5(t);let i,r;const o=n.tc.get(e);if(o)i=o.targetId,n.sharedClientState.addLocalQueryTarget(i),r=o.view.Yu();else{const s=await GE(n.localStore,ai(e));n.isPrimaryClient&&Wb(n.remoteStore,s);const a=n.sharedClientState.addLocalQueryTarget(s.targetId);i=s.targetId,r=await T5(n,e,i,a==="current")}return r}async function T5(t,e,n,i){t.hc=(u,d,f)=>async function(m,g,E,k){let b=g.view.Ku(E);b.Oi&&(b=await _h(m.localStore,g.query,!1).then(({documents:U})=>g.view.Ku(U,b)));const y=k&&k.targetChanges.get(g.targetId),N=g.view.applyChanges(b,m.isPrimaryClient,y);return Ch(m,g.targetId,N.zu),N.snapshot}(t,u,d,f);const r=await _h(t.localStore,e,!0),o=new k5(e,r.ji),s=o.Ku(r.documents),a=Fo.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),l=o.applyChanges(s,t.isPrimaryClient,a);Ch(t,n,l.zu);const c=new x5(e,n,o);return t.tc.set(e,c),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),l.snapshot}async function S5(t,e){const n=Q(t),i=n.tc.get(e),r=n.ec.get(i.targetId);if(r.length>1)return n.ec.set(i.targetId,r.filter(o=>!Fa(o,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await mc(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Yb(n.remoteStore,i.targetId),pc(n,i.targetId)}).catch(Po)):(pc(n,i.targetId),await mc(n.localStore,i.targetId,!0))}async function A5(t,e,n){const i=L5(t);try{const r=await function(o,s){const a=Q(o),l=Fe.now(),c=s.reduce((f,m)=>f.add(m.key),ie());let u,d;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=rn(),g=ie();return a.Ui.getEntries(f,c).next(E=>{m=E,m.forEach((k,b)=>{b.isValidDocument()||(g=g.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,m)).next(E=>{u=E;const k=[];for(const b of s){const y=J3(b,u.get(b.key).overlayedDocument);y!=null&&k.push(new zn(b.key,y,vb(y.value.mapValue),ut.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,k,s)}).next(E=>{d=E;const k=E.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(f,E.batchId,k)})}).then(()=>({batchId:d.batchId,changes:Db(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(o,s,a){let l=o.oc[o.currentUser.toKey()];l||(l=new Ue(fe)),l=l.insert(s,a),o.oc[o.currentUser.toKey()]=l}(i,r.batchId,n),await Uo(i,r.changes),await Ba(i.remoteStore)}catch(r){const o=od(r,"Failed to persist write");n.reject(o)}}async function iv(t,e){const n=Q(t);try{const i=await BE(n.localStore,e);e.targetChanges.forEach((r,o)=>{const s=n.ic.get(o);s&&(me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?s.Xu=!0:r.modifiedDocuments.size>0?me(s.Xu):r.removedDocuments.size>0&&(me(s.Xu),s.Xu=!1))}),await Uo(n,i,e)}catch(i){await Po(i)}}function Ah(t,e,n){const i=Q(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.tc.forEach((o,s)=>{const a=s.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(o,s){const a=Q(o);a.onlineState=s;let l=!1;a.queries.forEach((c,u)=>{for(const d of u.listeners)d.Eu(s)&&(l=!0)}),l&&sd(a)}(i.eventManager,e),r.length&&i.Zu.Go(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function C5(t,e,n){const i=Q(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.ic.get(e),o=r&&r.key;if(o){let s=new Ue(q.comparator);s=s.insert(o,Me.newNoDocument(o,te.min()));const a=ie().add(o),l=new ja(te.min(),new Map,new ze(fe),s,a);await iv(i,l),i.sc=i.sc.remove(o),i.ic.delete(e),ad(i)}else await mc(i.localStore,e,!1).then(()=>pc(i,e,n)).catch(Po)}async function O5(t,e){const n=Q(t),i=e.batch.batchId;try{const r=await VE(n.localStore,e);ov(n,i,null),rv(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Uo(n,r)}catch(r){await Po(r)}}async function R5(t,e,n){const i=Q(t);try{const r=await function(o,s){const a=Q(o);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,s).next(u=>(me(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,s)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);ov(i,e,n),rv(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Uo(i,r)}catch(r){await Po(r)}}function rv(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function ov(t,e,n){const i=Q(t);let r=i.oc[i.currentUser.toKey()];if(r){const o=r.get(e);o&&(n?o.reject(n):o.resolve(),r=r.remove(e)),i.oc[i.currentUser.toKey()]=r}}function pc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ec.get(e))t.tc.delete(i),n&&t.Zu.lc(i,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(i=>{t.rc.containsKey(i)||sv(t,i)})}function sv(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Yb(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),ad(t))}function Ch(t,e,n){for(const i of n)i instanceof tv?(t.rc.addReference(i.key,e),N5(t,i)):i instanceof nv?(j("SyncEngine","Document no longer in limbo: "+i.key),t.rc.removeReference(i.key,e),t.rc.containsKey(i.key)||sv(t,i.key)):K()}function N5(t,e){const n=e.key,i=n.path.canonicalString();t.sc.get(n)||t.nc.has(i)||(j("SyncEngine","New document in limbo: "+n),t.nc.add(i),ad(t))}function ad(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new q(Te.fromString(e)),i=t.cc.next();t.ic.set(i,new _5(n)),t.sc=t.sc.insert(n,i),Wb(t.remoteStore,new Zn(ai(Gu(n.path)),i,2,Vu.ot))}}async function Uo(t,e,n){const i=Q(t),r=[],o=[],s=[];i.tc.isEmpty()||(i.tc.forEach((a,l)=>{s.push(i.hc(l,e,n).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),r.push(c);const u=Zu.Vi(l.targetId,c);o.push(u)}}))}),await Promise.all(s),i.Zu.Go(r),await async function(a,l){const c=Q(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(l,d=>S.forEach(d.Pi,f=>c.persistence.referenceDelegate.addReference(u,d.targetId,f)).next(()=>S.forEach(d.vi,f=>c.persistence.referenceDelegate.removeReference(u,d.targetId,f)))))}catch(u){if(!Do(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const f=c.$i.get(d),m=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(m);c.$i=c.$i.insert(d,g)}}}(i.localStore,o))}async function P5(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const i=await Hb(n.localStore,e);n.currentUser=e,function(r,o){r.uc.forEach(s=>{s.forEach(a=>{a.reject(new $(I.CANCELLED,o))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Uo(n,i.Ki)}}function D5(t,e){const n=Q(t),i=n.ic.get(e);if(i&&i.Xu)return ie().add(i.key);{let r=ie();const o=n.ec.get(e);if(!o)return r;for(const s of o){const a=n.tc.get(s);r=r.unionWith(a.view.qu)}return r}}function M5(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=D5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=C5.bind(null,e),e.Zu.Go=v5.bind(null,e.eventManager),e.Zu.lc=y5.bind(null,e.eventManager),e}function L5(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=O5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=R5.bind(null,e),e}class F5{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=$a(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return $E(this.persistence,new UE,e.initialUser,this.wt)}_c(e){return new FE(Ju.Ms,this.wt)}dc(e){return new WE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class z5{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ah(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=P5.bind(null,this.syncEngine),await h5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new p5}createDatastore(e){const n=$a(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new JE(r));var r;return function(o,s,a,l){return new t5(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,o=a=>Ah(this.syncEngine,a,0),s=Ih.V()?new Ih:new YE,new i5(n,i,r,o,s);var n,i,r,o,s}createSyncEngine(e,n){return function(i,r,o,s,a,l,c){const u=new E5(i,r,o,s,a,l);return c&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);j("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await zo(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class U5{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class j5{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new $(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,r){const o=Q(i),s=uo(o.wt)+"/documents",a={documents:r.map(d=>Qs(o.wt,d))},l=await o.ao("BatchGetDocuments",s,a,r.length),c=new Map;l.forEach(d=>{const f=uE(o.wt,d);c.set(f.key.toString(),f)});const u=[];return r.forEach(d=>{const f=c.get(d.toString());me(!!f),u.push(f)}),u}(this.datastore,e);return n.forEach(i=>this.recordVersion(i)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastWriteError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Wu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,i)=>{const r=q.fromPath(i);this.mutations.push(new Ob(r,this.precondition(r)))}),await async function(n,i){const r=Q(n),o=uo(r.wt)+"/documents",s={writes:i.map(a=>Vb(r.wt,a))};await r.ro("Commit",o,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw K();n=te.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!n.isEqual(i))throw new $(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?ut.updateTime(n):ut.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(te.min()))throw new $(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ut.updateTime(n)}return ut.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class $5{constructor(e,n,i,r,o){this.asyncQueue=e,this.datastore=n,this.options=i,this.updateFunction=r,this.deferred=o,this.Dc=i.maxAttempts,this.So=new ed(this.asyncQueue,"transaction_retry")}run(){this.Dc-=1,this.Cc()}Cc(){this.So.Io(async()=>{const e=new j5(this.datastore),n=this.xc(e);n&&n.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(r=>{this.Nc(r)}))}).catch(i=>{this.Nc(i)})})}xc(e){try{const n=this.updateFunction(e);return!Mo(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Nc(e){this.Dc>0&&this.kc(e)?(this.Dc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Cc(),Promise.resolve()))):this.deferred.reject(e)}kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!Rb(n)}return!1}}/**
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
 */class V5{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=lt.UNAUTHENTICATED,this.clientId=mb.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async o=>{j("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(j("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=od(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function B5(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await Hb(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function q5(t,e){t.asyncQueue.verifyOperationInProgress();const n=await H5(t);j("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>Th(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,o)=>Th(e.remoteStore,o)),t.onlineComponents=e}async function H5(t){return t.offlineComponents||(j("FirestoreClient","Using default OfflineComponentProvider"),await B5(t,new F5)),t.offlineComponents}async function ld(t){return t.onlineComponents||(j("FirestoreClient","Using default OnlineComponentProvider"),await q5(t,new z5)),t.onlineComponents}function G5(t){return ld(t).then(e=>e.syncEngine)}async function K5(t){const e=await ld(t),n=e.eventManager;return n.onListen=I5.bind(null,e.syncEngine),n.onUnlisten=S5.bind(null,e.syncEngine),n}function W5(t,e,n={}){const i=new Zt;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,s,a,l){const c=new U5({next:d=>{o.enqueueAndForget(()=>b5(r,u));const f=d.docs.has(s);!f&&d.fromCache?l.reject(new $(I.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&a&&a.source==="server"?l.reject(new $(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),u=new w5(Gu(s.path),c,{includeMetadataChanges:!0,Du:!0});return g5(r,u)}(await K5(t),t.asyncQueue,e,n,i)),i.promise}function Y5(t,e,n){const i=new Zt;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(o){return ld(o).then(s=>s.datastore)}(t);new $5(t.asyncQueue,r,n,e,i).run()}),i.promise}const Oh=new Map;/**
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
 */function av(t,e,n){if(!n)throw new $(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Q5(t,e,n,i){if(e===!0&&i===!0)throw new $(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rh(t){if(!q.isDocumentKey(t))throw new $(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nh(t){if(q.isDocumentKey(t))throw new $(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Zi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cd(t);throw new $(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ph{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Q5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ud{constructor(e,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ph({}),this._settingsFrozen=!1,e instanceof Yi?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new $(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yi(r.options.projectId)}(e))}get app(){if(!this._app)throw new $(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ph(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new d3;switch(n.type){case"gapi":const i=n.client;return me(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new m3(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new $(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Oh.get(e);n&&(j("ComponentProvider","Removing Datastore"),Oh.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class dt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}}class dd{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new dd(this.firestore,e,this._query)}}class Tn extends dd{constructor(e,n,i){super(e,n,Gu(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new q(e))}withConverter(e){return new Tn(this.firestore,e,this._path)}}function MS(t,e,...n){if(t=rt(t),av("collection","path",e),t instanceof ud){const i=Te.fromString(e,...n);return Nh(i),new Tn(t,null,i)}{if(!(t instanceof dt||t instanceof Tn))throw new $(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Te.fromString(e,...n));return Nh(i),new Tn(t.firestore,null,i)}}function X5(t,e,...n){if(t=rt(t),arguments.length===1&&(e=mb.I()),av("doc","path",e),t instanceof ud){const i=Te.fromString(e,...n);return Rh(i),new dt(t,null,new q(i))}{if(!(t instanceof dt||t instanceof Tn))throw new $(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Te.fromString(e,...n));return Rh(i),new dt(t.firestore,t instanceof Tn?t.converter:null,new q(i))}}/**
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
 */class J5{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new ed(this,"async_queue_retry"),this.Kc=()=>{const n=kl();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=kl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=kl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Zt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!Do(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(i=>{this.Bc=i,this.Lc=!1;const r=function(o){let s=o.message||"";return o.stack&&(s=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),s}(i);throw An("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Lc=!1,i))));return this.Oc=n,n}enqueueAfterDelay(e,n,i){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const r=rd.createAndSchedule(this,e,n,i,o=>this.Wc(o));return this.$c.push(r),r}Gc(){this.Bc&&K()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class jo extends ud{constructor(e,n,i){super(e,n,i),this.type="firestore",this._queue=new J5,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||lv(this),this._firestoreClient.terminate()}}function Z5(t=Dp()){return au(t,"firestore").getImmediate()}function fd(t){return t._firestoreClient||lv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function lv(t){var e;const n=t._freezeSettings(),i=function(r,o,s,a){return new I3(r,o,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new V5(t._authCredentials,t._appCheckCredentials,t._queue,i)}/**
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
 */class qa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class li{constructor(e){this._byteString=e}static fromBase64String(e){try{return new li(Ke.fromBase64String(e))}catch(n){throw new $(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new li(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hd{constructor(e){this._methodName=e}}/**
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
 */class md{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
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
 */const e6=/^__.*__$/;class t6{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new zn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Lo(e,this.data,n,this.fieldTransforms)}}class cv{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new zn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class pd{constructor(e,n,i,r,o,s){this.settings=e,this.databaseId=n,this.wt=i,this.ignoreUndefinedProperties=r,o===void 0&&this.Xc(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new pd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:i,na:!1});return r.sa(e),r}ia(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:i,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Js(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(uv(this.Zc)&&e6.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class n6{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=i||$a(e)}aa(e,n,i,r=!1){return new pd({Zc:e,methodName:n,ca:i,path:Ye.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function gd(t){const e=t._freezeSettings(),n=$a(t._databaseId);return new n6(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bd(t,e,n,i,r,o={}){const s=t.aa(o.merge||o.mergeFields?2:0,e,n,r);vd("Data must be an object, but it was:",s,i);const a=dv(i,s);let l,c;if(o.merge)l=new kt(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const u=[];for(const d of o.mergeFields){const f=gc(e,d,n);if(!s.contains(f))throw new $(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);hv(u,f)||u.push(f)}l=new kt(u),c=s.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=s.fieldTransforms;return new t6(new tt(a),l,c)}class Ha extends hd{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ha}}function i6(t,e,n,i){const r=t.aa(1,e,n);vd("Data must be an object, but it was:",r,i);const o=[],s=tt.empty();hi(i,(l,c)=>{const u=yd(e,l,n);c=rt(c);const d=r.ia(u);if(c instanceof Ha)o.push(u);else{const f=Ga(c,d);f!=null&&(o.push(u),s.set(u,f))}});const a=new kt(o);return new cv(s,a,r.fieldTransforms)}function r6(t,e,n,i,r,o){const s=t.aa(1,e,n),a=[gc(e,i,n)],l=[r];if(o.length%2!=0)throw new $(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<o.length;f+=2)a.push(gc(e,o[f])),l.push(o[f+1]);const c=[],u=tt.empty();for(let f=a.length-1;f>=0;--f)if(!hv(c,a[f])){const m=a[f];let g=l[f];g=rt(g);const E=s.ia(m);if(g instanceof Ha)c.push(m);else{const k=Ga(g,E);k!=null&&(c.push(m),u.set(m,k))}}const d=new kt(c);return new cv(u,d,s.fieldTransforms)}function Ga(t,e){if(fv(t=rt(t)))return vd("Unsupported field value:",e,t),dv(t,e);if(t instanceof hd)return function(n,i){if(!uv(i.Zc))throw i.oa(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,i){const r=[];let o=0;for(const s of n){let a=Ga(s,i.ra(o));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),o++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return G3(i.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Fe.fromDate(n);return{timestampValue:Ys(i.wt,r)}}if(n instanceof Fe){const r=new Fe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ys(i.wt,r)}}if(n instanceof md)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof li)return{bytesValue:Ub(i.wt,n._byteString)};if(n instanceof dt){const r=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(r))throw i.oa(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Yu(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.oa(`Unsupported field value: ${cd(n)}`)}(t,e)}function dv(t,e){const n={};return pb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hi(t,(i,r)=>{const o=Ga(r,e.ea(i));o!=null&&(n[i]=o)}),{mapValue:{fields:n}}}function fv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof md||t instanceof li||t instanceof dt||t instanceof hd)}function vd(t,e,n){if(!fv(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=cd(n);throw i==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+i)}}function gc(t,e,n){if((e=rt(e))instanceof qa)return e._internalPath;if(typeof e=="string")return yd(t,e);throw Js("Field path arguments must be of type string or ",t,!1,void 0,n)}const o6=new RegExp("[~\\*/\\[\\]]");function yd(t,e,n){if(e.search(o6)>=0)throw Js(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qa(...e.split("."))._internalPath}catch{throw Js(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Js(t,e,n,i,r){const o=i&&!i.isEmpty(),s=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${i}`),s&&(l+=` in document ${r}`),l+=")"),new $(I.INVALID_ARGUMENT,a+t+l)}function hv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Zs{constructor(e,n,i,r,o){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new s6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class s6 extends Zs{data(){return super.data()}}function mv(t,e){return typeof e=="string"?yd(t,e):e instanceof qa?e._internalPath:e._delegate._internalPath}/**
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
 */class pv{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wd extends Zs{constructor(e,n,i,r,o,s){super(e,n,i,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new a6(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(mv("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class a6 extends wd{data(e={}){return super.data(e)}}/**
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
 */const l6={maxAttempts:5};/**
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
 */class gv{convertValue(e,n="none"){switch(si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const i={};return hi(e.fields,(r,o)=>{i[r]=this.convertValue(o,n)}),i}convertGeoPoint(e){return new md(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=bb(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(oo(e));default:return null}}convertTimestamp(e){const n=On(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Te.fromString(e);me(qb(i));const r=new Yi(i.get(1),i.get(3)),o=new q(i.popFirst(5));return r.isEqual(n)||An(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */function kd(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class c6 extends gv{constructor(e){super(),this.firestore=e}convertBytes(e){return new li(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function gr(t,e){if((t=rt(t)).firestore!==e)throw new $(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function LS(t){t=Zi(t,dt);const e=Zi(t.firestore,jo);return W5(fd(e),t._key).then(n=>u6(e,t,n))}class bv extends gv{constructor(e){super(),this.firestore=e}convertBytes(e){return new li(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function FS(t,e,n){t=Zi(t,dt);const i=Zi(t.firestore,jo),r=kd(t.converter,e,n);return vv(i,[bd(gd(i),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,ut.none())])}function zS(t,e){const n=Zi(t.firestore,jo),i=X5(t),r=kd(t.converter,e);return vv(n,[bd(gd(t.firestore),"addDoc",i._key,r,t.converter!==null,{}).toMutation(i._key,ut.exists(!1))]).then(()=>i)}function vv(t,e){return function(n,i){const r=new Zt;return n.asyncQueue.enqueueAndForget(async()=>A5(await G5(n),i,r)),r.promise}(fd(t),e)}function u6(t,e,n){const i=n.docs.get(e._key),r=new bv(t);return new wd(t,r,e._key,i,new pv(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class d6 extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=gd(e)}get(e){const n=gr(e,this._firestore),i=new c6(this._firestore);return this._transaction.lookup([n._key]).then(r=>{if(!r||r.length!==1)return K();const o=r[0];if(o.isFoundDocument())return new Zs(this._firestore,i,o.key,o,n.converter);if(o.isNoDocument())return new Zs(this._firestore,i,n._key,null,n.converter);throw K()})}set(e,n,i){const r=gr(e,this._firestore),o=kd(r.converter,n,i),s=bd(this._dataReader,"Transaction.set",r._key,o,r.converter!==null,i);return this._transaction.set(r._key,s),this}update(e,n,i,...r){const o=gr(e,this._firestore);let s;return s=typeof(n=rt(n))=="string"||n instanceof qa?r6(this._dataReader,"Transaction.update",o._key,n,i,r):i6(this._dataReader,"Transaction.update",o._key,n),this._transaction.update(o._key,s),this}delete(e){const n=gr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=gr(e,this._firestore),i=new bv(this._firestore);return super.get(e).then(r=>new wd(this._firestore,i,n._key,r._document,new pv(!1,!1),n.converter))}}function US(t,e,n){t=Zi(t,jo);const i=Object.assign(Object.assign({},l6),n);return function(r){if(r.maxAttempts<1)throw new $(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),Y5(fd(t),r=>e(new d6(t,r)),i)}(function(t,e=!0){(function(n){lr=n})(wo),qi(new ei("firestore",(n,{options:i})=>{const r=n.getProvider("app").getImmediate(),o=new jo(r,new f3(n.getProvider("auth-internal")),new g3(n.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC")),In(rh,"3.4.11",t),In(rh,"3.4.11","esm2017")})();const f6="modulepreload",Dh={},h6="./",es=function(e,n){return!n||n.length===0?e():Promise.all(n.map(i=>{if(i=`${h6}${i}`,i in Dh)return;Dh[i]=!0;const r=i.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":f6,r||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),r)return new Promise((a,l)=>{s.addEventListener("load",a),s.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function m6(){return yv().__VUE_DEVTOOLS_GLOBAL_HOOK__}function yv(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const p6=typeof Proxy=="function",g6="devtools-plugin:setup",b6="plugin:settings:set";let ki,bc;function v6(){var t;return ki!==void 0||(typeof window!="undefined"&&window.performance?(ki=!0,bc=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(ki=!0,bc=global.perf_hooks.performance):ki=!1),ki}function y6(){return v6()?bc.now():Date.now()}class w6{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const i={};if(e.settings)for(const s in e.settings){const a=e.settings[s];i[s]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let o=Object.assign({},i);try{const s=localStorage.getItem(r),a=JSON.parse(s);Object.assign(o,a)}catch{}this.fallbacks={getSettings(){return o},setSettings(s){try{localStorage.setItem(r,JSON.stringify(s))}catch{}o=s},now(){return y6()}},n&&n.on(b6,(s,a)=>{s===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(s,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(s,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function k6(t,e){const n=t,i=yv(),r=m6(),o=p6&&n.enableEarlyProxy;if(r&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!o))r.emit(g6,t,e);else{const s=o?new w6(n,r):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:s}),s&&e(s.proxiedTarget)}}/*!
  * vue-router v4.1.0
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kt=typeof window!="undefined";function x6(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function xl(t,e){const n={};for(const i in e){const r=e[i];n[i]=bt(r)?r.map(t):t(r)}return n}const Lr=()=>{},bt=Array.isArray;function ae(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const _6=/\/$/,E6=t=>t.replace(_6,"");function _l(t,e,n="/"){let i,r={},o="",s="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),o=e.slice(l+1,a>-1?a:e.length),r=t(o)),a>-1&&(i=i||e.slice(0,a),s=e.slice(a,e.length)),i=S6(i!=null?i:e,n),{fullPath:i+(o&&"?")+o+s,path:i,query:r,hash:s}}function I6(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Mh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Lh(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Nn(e.matched[i],n.matched[r])&&wv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Nn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!T6(t[n],e[n]))return!1;return!0}function T6(t,e){return bt(t)?Fh(t,e):bt(e)?Fh(e,t):t===e}function Fh(t,e){return bt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function S6(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return ae(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,o,s;for(o=0;o<i.length;o++)if(s=i[o],s!==".")if(s==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var fo;(function(t){t.pop="pop",t.push="push"})(fo||(fo={}));var Fr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fr||(Fr={}));function A6(t){if(!t)if(Kt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),E6(t)}const C6=/^[^#]+#/;function O6(t,e){return t.replace(C6,"#")+e}function R6(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Ka=()=>({left:window.pageXOffset,top:window.pageYOffset});function N6(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!i||!document.getElementById(t.el.slice(1))))try{const o=document.querySelector(t.el);if(i&&o){ae(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{ae(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r){ae(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=R6(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zh(t,e){return(history.state?history.state.position-e:-1)+t}const vc=new Map;function P6(t,e){vc.set(t,e)}function D6(t){const e=vc.get(t);return vc.delete(t),e}let M6=()=>location.protocol+"//"+location.host;function kv(t,e){const{pathname:n,search:i,hash:r}=e,o=t.indexOf("#");if(o>-1){let a=r.includes(t.slice(o))?t.slice(o).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Mh(l,"")}return Mh(n,t)+i+r}function L6(t,e,n,i){let r=[],o=[],s=null;const a=({state:f})=>{const m=kv(t,location),g=n.value,E=e.value;let k=0;if(f){if(n.value=m,e.value=f,s&&s===g){s=null;return}k=E?f.position-E.position:0}else i(m);r.forEach(b=>{b(n.value,g,{delta:k,type:fo.pop,direction:k?k>0?Fr.forward:Fr.back:Fr.unknown})})};function l(){s=n.value}function c(f){r.push(f);const m=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return o.push(m),m}function u(){const{history:f}=window;!f.state||f.replaceState(pe({},f.state,{scroll:Ka()}),"")}function d(){for(const f of o)f();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Uh(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Ka():null}}function F6(t){const{history:e,location:n}=window,i={value:kv(t,n)},r={value:e.state};r.value||o(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:M6()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(m){ae("Error with push/replace State",m),n[u?"replace":"assign"](f)}}function s(l,c){const u=pe({},e.state,Uh(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});o(l,u,!0),i.value=l}function a(l,c){const u=pe({},r.value,e.state,{forward:l,scroll:Ka()});e.state||ae(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),o(u.current,u,!0);const d=pe({},Uh(i.value,l,null),{position:u.position+1},c);o(l,d,!1),i.value=l}return{location:i,state:r,push:a,replace:s}}function z6(t){t=A6(t);const e=F6(t),n=L6(t,e.state,e.location,e.replace);function i(o,s=!0){s||n.pauseListeners(),history.go(o)}const r=pe({location:"",base:t,go:i,createHref:O6.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function U6(t){return typeof t=="string"||t&&typeof t=="object"}function xv(t){return typeof t=="string"||typeof t=="symbol"}const fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_v=Symbol("navigation failure");var jh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(jh||(jh={}));const j6={[1]({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},[2]({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${V6(e)}" via a navigation guard.`},[4]({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},[8]({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},[16]({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function er(t,e){return pe(new Error(j6[t](e)),{type:t,[_v]:!0},e)}function hn(t,e){return t instanceof Error&&_v in t&&(e==null||!!(t.type&e))}const $6=["params","query","hash"];function V6(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of $6)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const $h="[^/]+?",B6={sensitive:!1,strict:!1,start:!0,end:!0},q6=/[.+*?^${}()[\]/\\]/g;function H6(t,e){const n=pe({},B6,e),i=[];let r=n.start?"^":"";const o=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let m=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(q6,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:E,optional:k,regexp:b}=f;o.push({name:g,repeatable:E,optional:k});const y=b||$h;if(y!==$h){m+=10;try{new RegExp(`(${y})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+U.message)}}let N=E?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;d||(N=k&&c.length<2?`(?:/${N})`:"/"+N),k&&(N+="?"),r+=N,m+=20,k&&(m+=-8),E&&(m+=-20),y===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const s=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(s),d={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",g=o[f-1];d[g.name]=m&&g.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:E,optional:k}=m,b=g in c?c[g]:"";if(bt(b)&&!E)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=bt(b)?b.join("/"):b;if(!y)if(k)f.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u}return{re:s,score:i,keys:o,parse:a,stringify:l}}function G6(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function K6(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const o=G6(i[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-i.length)===1){if(Vh(i))return 1;if(Vh(r))return-1}return r.length-i.length}function Vh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const W6={type:0,value:""},Y6=/[a-zA-Z0-9_]/;function Q6(t){if(!t)return[[]];if(t==="/")return[[W6]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,i=n;const r=[];let o;function s(){o&&r.push(o),o=[]}let a=0,l,c="",u="";function d(){!c||(n===0?o.push({type:0,value:c}):n===1||n===2||n===3?(o.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),s()):l===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:Y6.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),s(),r}function X6(t,e,n){const i=H6(Q6(t.path),n);{const o=new Set;for(const s of i.keys)o.has(s.name)&&ae(`Found duplicated params with name "${s.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),o.add(s.name)}const r=pe(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function J6(t,e){const n=[],i=new Map;e=qh({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function o(u,d,f){const m=!f,g=e2(u);r2(g,d),g.aliasOf=f&&f.record;const E=qh(e,u),k=[g];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const U of N)k.push(pe({},g,{components:f?f.record.components:g.components,path:U,aliasOf:f?f.record:g}))}let b,y;for(const N of k){const{path:U}=N;if(d&&U[0]!=="/"){const Z=d.record.path,ce=Z[Z.length-1]==="/"?"":"/";N.path=d.record.path+(U&&ce+U)}if(N.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(b=X6(N,d,E),d&&U[0]==="/"&&o2(b,d),f?(f.alias.push(b),i2(f,b)):(y=y||b,y!==b&&y.alias.push(b),m&&u.name&&!Bh(b)&&s(u.name)),"children"in g){const Z=g.children;for(let ce=0;ce<Z.length;ce++)o(Z[ce],b,f&&f.children[ce])}f=f||b,l(b)}return y?()=>{s(y)}:Lr}function s(u){if(xv(u)){const d=i.get(u);d&&(i.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(s),u.alias.forEach(s))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&K6(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Ev(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Bh(u)&&i.set(u.record.name,u)}function c(u,d){let f,m={},g,E;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw er(1,{location:u});E=f.record.name,m=pe(Z6(d.params,f.keys.filter(y=>!y.optional).map(y=>y.name)),u.params),g=f.stringify(m)}else if("path"in u)g=u.path,g.startsWith("/")||ae(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(y=>y.re.test(g)),f&&(m=f.parse(g),E=f.record.name);else{if(f=d.name?i.get(d.name):n.find(y=>y.re.test(d.path)),!f)throw er(1,{location:u,currentLocation:d});E=f.record.name,m=pe({},d.params,u.params),g=f.stringify(m)}const k=[];let b=f;for(;b;)k.unshift(b.record),b=b.parent;return{name:E,path:g,params:m,matched:k,meta:n2(k)}}return t.forEach(u=>o(u)),{addRoute:o,resolve:c,removeRoute:s,getRoutes:a,getRecordMatcher:r}}function Z6(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function e2(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:t2(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function t2(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function Bh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function n2(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function qh(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function yc(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function i2(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(yc.bind(null,n)))return ae(`Alias "${e.record.path}" and the original record: "${t.record.path}" should have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(yc.bind(null,n)))return ae(`Alias "${e.record.path}" and the original record: "${t.record.path}" should have the exact same param named "${n.name}"`)}function r2(t,e){e&&e.record.name&&!t.name&&!t.path&&ae(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function o2(t,e){for(const n of e.keys)if(!t.keys.find(yc.bind(null,n)))return ae(`Absolute path "${t.record.path}" should have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function Ev(t,e){return e.children.some(n=>n===t||Ev(t,n))}const Iv=/#/g,s2=/&/g,a2=/\//g,l2=/=/g,c2=/\?/g,Tv=/\+/g,u2=/%5B/g,d2=/%5D/g,Sv=/%5E/g,f2=/%60/g,Av=/%7B/g,h2=/%7C/g,Cv=/%7D/g,m2=/%20/g;function xd(t){return encodeURI(""+t).replace(h2,"|").replace(u2,"[").replace(d2,"]")}function p2(t){return xd(t).replace(Av,"{").replace(Cv,"}").replace(Sv,"^")}function wc(t){return xd(t).replace(Tv,"%2B").replace(m2,"+").replace(Iv,"%23").replace(s2,"%26").replace(f2,"`").replace(Av,"{").replace(Cv,"}").replace(Sv,"^")}function g2(t){return wc(t).replace(l2,"%3D")}function b2(t){return xd(t).replace(Iv,"%23").replace(c2,"%3F")}function v2(t){return t==null?"":b2(t).replace(a2,"%2F")}function ho(t){try{return decodeURIComponent(""+t)}catch{ae(`Error decoding "${t}". Using original value`)}return""+t}function y2(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const o=i[r].replace(Tv," "),s=o.indexOf("="),a=ho(s<0?o:o.slice(0,s)),l=s<0?null:ho(o.slice(s+1));if(a in e){let c=e[a];bt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Hh(t){let e="";for(let n in t){const i=t[n];if(n=g2(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(bt(i)?i.map(o=>o&&wc(o)):[i&&wc(i)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function w2(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=bt(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const k2=Symbol("router view location matched"),Gh=Symbol("router view depth"),_d=Symbol("router"),Ov=Symbol("route location"),kc=Symbol("router view location");function br(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function bn(t,e,n,i,r){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((s,a)=>{const l=d=>{d===!1?a(er(4,{from:n,to:e})):d instanceof Error?a(d):U6(d)?a(er(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),s())},c=t.call(i&&i.instances[r],e,n,x2(l,e,n));let u=Promise.resolve(c);if(t.length<3&&(u=u.then(l)),t.length>2){const d=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)u=u.then(f=>l._called?f:(ae(d),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!l._called){ae(d),a(new Error("Invalid navigation guard"));return}}u.catch(d=>a(d))})}function x2(t,e,n){let i=0;return function(){i++===1&&ae(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,i===1&&t.apply(null,arguments)}}function El(t,e,n,i){const r=[];for(const o of t){!o.components&&!o.children.length&&ae(`Record with path "${o.path}" is either missing a "component(s)" or "children" property.`);for(const s in o.components){let a=o.components[s];{if(!a||typeof a!="object"&&typeof a!="function")throw ae(`Component "${s}" in record with path "${o.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){ae(`Component "${s}" in record with path "${o.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const l=a;a=()=>l}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,ae(`Component "${s}" in record with path "${o.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!o.instances[s]))if(_2(a)){const c=(a.__vccOpts||a)[e];c&&r.push(bn(c,n,i,o,s))}else{let l=a();"catch"in l||(ae(`Component "${s}" in record with path "${o.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),l=Promise.resolve(l)),r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${o.path}"`));const u=x6(c)?c.default:c;o.components[s]=u;const f=(u.__vccOpts||u)[e];return f&&bn(f,n,i,o,s)()}))}}}return r}function _2(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Kh(t){const e=_n(_d),n=_n(Ov),i=Se(()=>e.resolve(Di(t.to))),r=Se(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Nn.bind(null,u));if(f>-1)return f;const m=Wh(l[c-2]);return c>1&&Wh(u)===m&&d[d.length-1].path!==m?d.findIndex(Nn.bind(null,l[c-2])):f}),o=Se(()=>r.value>-1&&S2(n.params,i.value.params)),s=Se(()=>r.value>-1&&r.value===n.matched.length-1&&wv(n.params,i.value.params));function a(l={}){return T2(l)?e[Di(t.replace)?"replace":"push"](Di(t.to)).catch(Lr):Promise.resolve()}if(Kt){const l=wp();if(l){const c={route:i.value,isActive:o.value,isExactActive:s.value};l.__vrl_devtools=l.__vrl_devtools||[],l.__vrl_devtools.push(c),Iy(()=>{c.route=i.value,c.isActive=o.value,c.isExactActive=s.value},{flush:"post"})}}return{route:i,href:Se(()=>i.value.href),isActive:o,isExactActive:s,navigate:a}}const E2=Mn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kh,setup(t,{slots:e}){const n=rr(Kh(t)),{options:i}=_n(_d),r=Se(()=>({[Yh(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Yh(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:va("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),I2=E2;function T2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function S2(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!bt(r)||r.length!==i.length||i.some((o,s)=>o!==r[s]))return!1}return!0}function Wh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yh=(t,e,n)=>t!=null?t:e!=null?e:n,A2=Mn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){O2();const i=_n(kc),r=Se(()=>t.route||i.value),o=_n(Gh,0),s=Se(()=>{let c=Di(o);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Se(()=>r.value.matched[s.value]);as(Gh,Se(()=>s.value+1)),as(k2,a),as(kc,r);const l=ss();return Mi(()=>[l.value,a.value,t.name],([c,u,d],[f,m,g])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Nn(u,m)||!f)&&(u.enterCallbacks[d]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=r.value,u=a.value,d=u&&u.components[t.name],f=t.name;if(!d)return Qh(n.default,{Component:d,route:c});const m=u.props[t.name],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,k=va(d,pe({},g,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(u.instances[f]=null)},ref:l}));if(Kt&&k.ref){const b={depth:s.value,name:u.name,path:u.path,meta:u.meta};(bt(k.ref)?k.ref.map(N=>N.i):[k.ref.i]).forEach(N=>{N.__vrv_devtools=b})}return Qh(n.default,{Component:k,route:c})||k}}});function Qh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const C2=A2;function O2(){const t=wp(),e=t.parent&&t.parent.type.name;if(e&&(e==="KeepAlive"||e.includes("Transition"))){const n=e==="KeepAlive"?"keep-alive":"transition";ae(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function vr(t,e){const n=pe({},t,{matched:t.matched.map(i=>U2(i,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function ts(t){return{_custom:{display:t}}}let R2=0;function N2(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const i=R2++;k6({id:"org.vuejs.router"+(i?"."+i:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((u,d)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:vr(e.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:u,componentInstance:d})=>{if(d.__vrv_devtools){const f=d.__vrv_devtools;u.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Rv})}bt(d.__vrl_devtools)&&(d.__devtoolsApi=r,d.__vrl_devtools.forEach(f=>{let m=Dv,g="";f.isExactActive?(m=Pv,g="This is exactly active"):f.isActive&&(m=Nv,g="This link is active"),u.tags.push({label:f.route.path,textColor:0,tooltip:g,backgroundColor:m})}))}),Mi(e.currentRoute,()=>{l(),r.notifyComponentUpdate(),r.sendInspectorTree(a),r.sendInspectorState(a)});const o="router:navigations:"+i;r.addTimelineLayer({id:o,label:`Router${i?" "+i:""} Navigations`,color:4237508}),e.onError((u,d)=>{r.addTimelineEvent({layerId:o,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:r.now(),data:{error:u},groupId:d.meta.__navigationId}})});let s=0;e.beforeEach((u,d)=>{const f={guard:ts("beforeEach"),from:vr(d,"Current Location during this navigation"),to:vr(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:s++}),r.addTimelineEvent({layerId:o,event:{time:r.now(),title:"Start of navigation",subtitle:u.fullPath,data:f,groupId:u.meta.__navigationId}})}),e.afterEach((u,d,f)=>{const m={guard:ts("afterEach")};f?(m.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},m.status=ts("\u274C")):m.status=ts("\u2705"),m.from=vr(d,"Current Location during this navigation"),m.to=vr(u,"Target location"),r.addTimelineEvent({layerId:o,event:{title:"End of navigation",subtitle:u.fullPath,time:r.now(),data:m,logType:f?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+i;r.addInspector({id:a,label:"Routes"+(i?" "+i:""),icon:"book",treeFilterPlaceholder:"Search routes"});function l(){if(!c)return;const u=c;let d=n.getRoutes().filter(f=>!f.parent);d.forEach(Fv),u.filter&&(d=d.filter(f=>xc(f,u.filter.toLowerCase()))),d.forEach(f=>Lv(f,e.currentRoute.value)),u.rootNodes=d.map(Mv)}let c;r.on.getInspectorTree(u=>{c=u,u.app===t&&u.inspectorId===a&&l()}),r.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const f=n.getRoutes().find(m=>m.record.__vd_id===u.nodeId);f&&(u.state={options:D2(f)})}}),r.sendInspectorTree(a),r.sendInspectorState(a)})}function P2(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function D2(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(i=>`${i.name}${P2(i)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(i=>i.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(i=>i.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const Rv=15485081,Nv=2450411,Pv=8702998,M2=2282478,Dv=16486972,L2=6710886;function Mv(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:M2}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:Dv}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:Rv}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:Pv}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:Nv}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:L2});let i=n.__vd_id;return i==null&&(i=String(F2++),n.__vd_id=i),{id:i,label:n.path,tags:e,children:t.children.map(Mv)}}let F2=0;const z2=/^\/(.*)\/([a-z]*)$/;function Lv(t,e){const n=e.matched.length&&Nn(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(i=>Nn(i,t.record))),t.children.forEach(i=>Lv(i,e))}function Fv(t){t.__vd_match=!1,t.children.forEach(Fv)}function xc(t,e){const n=String(t.re).match(z2);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(s=>xc(s,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const r=t.record.path.toLowerCase(),o=ho(r);return!e.startsWith("/")&&(o.includes(e)||r.includes(e))||o.startsWith(e)||r.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(s=>xc(s,e))}function U2(t,e){const n={};for(const i in t)e.includes(i)||(n[i]=t[i]);return n}function j2(t){const e=J6(t.routes,t),n=t.parseQuery||y2,i=t.stringifyQuery||Hh,r=t.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const o=br(),s=br(),a=br(),l=ly(fn);let c=fn;Kt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xl.bind(null,w=>""+w),d=xl.bind(null,v2),f=xl.bind(null,ho);function m(w,L){let R,F;return xv(w)?(R=e.getRecordMatcher(w),F=L):F=w,e.addRoute(F,R)}function g(w){const L=e.getRecordMatcher(w);L?e.removeRoute(L):ae(`Cannot remove non-existent route "${String(w)}"`)}function E(){return e.getRoutes().map(w=>w.record)}function k(w){return!!e.getRecordMatcher(w)}function b(w,L){if(L=pe({},L||l.value),typeof w=="string"){const ee=_l(n,w,L.path),h=e.resolve({path:ee.path},L),p=r.createHref(ee.fullPath);return p.startsWith("//")?ae(`Location "${w}" resolved to "${p}". A resolved location cannot start with multiple slashes.`):h.matched.length||ae(`No match found for location with path "${w}"`),pe(ee,h,{params:f(h.params),hash:ho(ee.hash),redirectedFrom:void 0,href:p})}let R;if("path"in w)"params"in w&&!("name"in w)&&Object.keys(w.params).length&&ae(`Path "${w.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),R=pe({},w,{path:_l(n,w.path,L.path).path});else{const ee=pe({},w.params);for(const h in ee)ee[h]==null&&delete ee[h];R=pe({},w,{params:d(w.params)}),L.params=d(L.params)}const F=e.resolve(R,L),le=w.hash||"";le&&!le.startsWith("#")&&ae(`A \`hash\` should always start with the character "#". Replace "${le}" with "#${le}".`),F.params=u(f(F.params));const ke=I6(i,pe({},w,{hash:p2(le),path:F.path})),ne=r.createHref(ke);return ne.startsWith("//")?ae(`Location "${w}" resolved to "${ne}". A resolved location cannot start with multiple slashes.`):F.matched.length||ae(`No match found for location with path "${"path"in w?w.path:w}"`),pe({fullPath:ke,hash:le,query:i===Hh?w2(w.query):w.query||{}},F,{redirectedFrom:void 0,href:ne})}function y(w){return typeof w=="string"?_l(n,w,l.value.path):pe({},w)}function N(w,L){if(c!==w)return er(8,{from:L,to:w})}function U(w){return xe(w)}function Z(w){return U(pe(y(w),{replace:!0}))}function ce(w){const L=w.matched[w.matched.length-1];if(L&&L.redirect){const{redirect:R}=L;let F=typeof R=="function"?R(w):R;if(typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=y(F):{path:F},F.params={}),!("path"in F)&&!("name"in F))throw ae(`Invalid redirect found:
${JSON.stringify(F,null,2)}
 when navigating to "${w.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return pe({query:w.query,hash:w.hash,params:"path"in F?{}:w.params},F)}}function xe(w,L){const R=c=b(w),F=l.value,le=w.state,ke=w.force,ne=w.replace===!0,ee=ce(R);if(ee)return xe(pe(y(ee),{state:le,force:ke,replace:ne}),L||R);const h=R;h.redirectedFrom=L;let p;return!ke&&Lh(i,F,R)&&(p=er(16,{to:h,from:F}),vi(F,F,!0,!1)),(p?Promise.resolve(p):Ae(h,F)).catch(v=>hn(v)?hn(v,2)?v:ft(v):we(v,h,F)).then(v=>{if(v){if(hn(v,2))return Lh(i,b(v.to),h)&&L&&(L._count=L._count?L._count+1:1)>10?(ae(`Detected an infinite redirection in a navigation guard when going from "${F.fullPath}" to "${h.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):xe(pe(y(v.to),{state:le,force:ke,replace:ne}),L||h)}else v=Ht(h,F,!0,ne,le);return Nt(h,F,v),v})}function ot(w,L){const R=N(w,L);return R?Promise.reject(R):Promise.resolve()}function Ae(w,L){let R;const[F,le,ke]=$2(w,L);R=El(F.reverse(),"beforeRouteLeave",w,L);for(const ee of F)ee.leaveGuards.forEach(h=>{R.push(bn(h,w,L))});const ne=ot.bind(null,w,L);return R.push(ne),xi(R).then(()=>{R=[];for(const ee of o.list())R.push(bn(ee,w,L));return R.push(ne),xi(R)}).then(()=>{R=El(le,"beforeRouteUpdate",w,L);for(const ee of le)ee.updateGuards.forEach(h=>{R.push(bn(h,w,L))});return R.push(ne),xi(R)}).then(()=>{R=[];for(const ee of w.matched)if(ee.beforeEnter&&!L.matched.includes(ee))if(bt(ee.beforeEnter))for(const h of ee.beforeEnter)R.push(bn(h,w,L));else R.push(bn(ee.beforeEnter,w,L));return R.push(ne),xi(R)}).then(()=>(w.matched.forEach(ee=>ee.enterCallbacks={}),R=El(ke,"beforeRouteEnter",w,L),R.push(ne),xi(R))).then(()=>{R=[];for(const ee of s.list())R.push(bn(ee,w,L));return R.push(ne),xi(R)}).catch(ee=>hn(ee,8)?ee:Promise.reject(ee))}function Nt(w,L,R){for(const F of a.list())F(w,L,R)}function Ht(w,L,R,F,le){const ke=N(w,L);if(ke)return ke;const ne=L===fn,ee=Kt?history.state:{};R&&(F||ne?r.replace(w.fullPath,pe({scroll:ne&&ee&&ee.scroll},le)):r.push(w.fullPath,le)),l.value=w,vi(w,L,R,ne),ft()}let xt;function pi(){xt||(xt=r.listen((w,L,R)=>{if(!fr.listening)return;const F=b(w),le=ce(F);if(le){xe(pe(le,{replace:!0}),F).catch(Lr);return}c=F;const ke=l.value;Kt&&P6(zh(ke.fullPath,R.delta),Ka()),Ae(F,ke).catch(ne=>hn(ne,12)?ne:hn(ne,2)?(xe(ne.to,F).then(ee=>{hn(ee,20)&&!R.delta&&R.type===fo.pop&&r.go(-1,!1)}).catch(Lr),Promise.reject()):(R.delta&&r.go(-R.delta,!1),we(ne,F,ke))).then(ne=>{ne=ne||Ht(F,ke,!1),ne&&(R.delta?r.go(-R.delta,!1):R.type===fo.pop&&hn(ne,20)&&r.go(-1,!1)),Nt(F,ke,ne)}).catch(Lr)}))}let gi=br(),bi=br(),De;function we(w,L,R){ft(w);const F=bi.list();return F.length?F.forEach(le=>le(w,L,R)):(ae("uncaught error during route navigation:"),console.error(w)),Promise.reject(w)}function ge(){return De&&l.value!==fn?Promise.resolve():new Promise((w,L)=>{gi.add([w,L])})}function ft(w){return De||(De=!w,pi(),gi.list().forEach(([L,R])=>w?R(w):L()),gi.reset()),w}function vi(w,L,R,F){const{scrollBehavior:le}=t;if(!Kt||!le)return Promise.resolve();const ke=!R&&D6(zh(w.fullPath,0))||(F||!R)&&history.state&&history.state.scroll||null;return Xm().then(()=>le(w,L,ke)).then(ne=>ne&&N6(ne)).catch(ne=>we(ne,w,L))}const Gt=w=>r.go(w);let Pt;const yt=new Set,fr={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:k,getRoutes:E,resolve:b,options:t,push:U,replace:Z,go:Gt,back:()=>Gt(-1),forward:()=>Gt(1),beforeEach:o.add,beforeResolve:s.add,afterEach:a.add,onError:bi.add,isReady:ge,install(w){const L=this;w.component("RouterLink",I2),w.component("RouterView",C2),w.config.globalProperties.$router=L,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Di(l)}),Kt&&!Pt&&l.value===fn&&(Pt=!0,U(r.location).catch(le=>{ae("Unexpected error when starting the router:",le)}));const R={};for(const le in fn)R[le]=Se(()=>l.value[le]);w.provide(_d,L),w.provide(Ov,rr(R)),w.provide(kc,l);const F=w.unmount;yt.add(w),w.unmount=function(){yt.delete(w),yt.size<1&&(c=fn,xt&&xt(),xt=null,l.value=fn,Pt=!1,De=!1),F()},Kt&&N2(w,L,e)}};return fr}function xi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function $2(t,e){const n=[],i=[],r=[],o=Math.max(e.matched.length,t.matched.length);for(let s=0;s<o;s++){const a=e.matched[s];a&&(t.matched.find(c=>Nn(c,a))?i.push(a):n.push(a));const l=t.matched[s];l&&(e.matched.find(c=>Nn(c,l))||r.push(l))}return[n,i,r]}var zv=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n};const V2=Mn({name:"Home"}),B2={class:"home"},q2=de("p",null,"home page lol",-1),H2=[q2];function G2(t,e,n,i,r,o){return cs(),$l("div",B2,H2)}var K2=zv(V2,[["render",G2]]);const _c=[{path:"/",name:"Home",component:K2,meta:{reqAuth:!1}},{path:"/about_us",name:"About Us",component:()=>es(()=>import("./AboutUs.be8ea86e.js"),[]),meta:{reqAuth:!1}},{path:"/contact_us",name:"Contact Us",component:()=>es(()=>import("./ContactUs.5b150bf6.js"),["assets/ContactUs.5b150bf6.js","assets/ContactUs.2802a4ca.css"]),meta:{reqAuth:!1}},{path:"/newsletters",name:"Newsletters",component:()=>es(()=>import("./Newsletters.34a614fe.js"),[]),meta:{reqAuth:!0}},{path:"/newsletter_builder",name:"Newsletter Builder",component:()=>es(()=>import("./NewsletterBuilder.064f3b6f.js"),["assets/NewsletterBuilder.064f3b6f.js","assets/NewsletterBuilder.fb9181f8.css"]),meta:{reqAuth:!0}}],Ed=j2({history:z6("./"),routes:_c});Ed.beforeEach((t,e,n)=>{vs.authStateVerified.then(()=>{t.meta.reqAuth&&!vs.isSignedIn?vs.displayError("You do not have permission to access this page. If you believe this is an error please try logging in or contact Membership and Yearbook for help."):n()})});/*!
 * bulma-toast 2.4.1 
 * (c) 2018-present @rfoel <rafaelfr@outlook.com> 
 * Released under the MIT License.
 */function Xh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Ec(t){for(var e,n=1;n<arguments.length;n++)e=arguments[n]==null?{}:arguments[n],n%2?Xh(Object(e),!0).forEach(function(i){W2(t,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Xh(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))});return t}function Uv(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Jh(t,e){for(var n,i=0;i<e.length;i++)n=e[i],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function jv(t,e,n){return e&&Jh(t.prototype,e),n&&Jh(t,n),t}function W2(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Y2={duration:2e3,position:"top-right",closeOnClick:!0,opacity:1,single:!1,offsetTop:0,offsetBottom:0,offsetLeft:0,offsetRight:0,extraClasses:""},_i=Ec({},Y2),zr={},Q2=null,X2="width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;",J2=function(t,e,n,i,r){return t==="top-left"?"left:".concat(i,";top:").concat(e,";text-align:left;align-items:flex-start;"):t==="top-right"?"right:".concat(r,";top:").concat(e,";text-align:right;align-items:flex-end;"):t==="top-center"?"top:".concat(e,";left:0;right:0;text-align:center;align-items:center;"):t==="bottom-left"?"left:".concat(i,";bottom:").concat(n,";text-align:left;align-items:flex-start;"):t==="bottom-right"?"right:".concat(r,";bottom:").concat(n,";text-align:right;align-items:flex-end;"):t==="bottom-center"?"bottom:".concat(n,";left:0;right:0;text-align:center;align-items:center;"):t==="center"?"top:0;left:0;right:0;bottom:0;flex-flow:column;justify-content:center;align-items:center;":void 0};function ea(){var t;return(t=Q2)!==null&&t!==void 0?t:document}function Z2(t,e,n,i,r,o){if(zr.position)return zr.position;var s=ea().createElement("div");return s.setAttribute("style",X2+J2(e,n,i,r,o)),t.appendChild(s),zr.position=s,s}function Zh(t){if(!t.message)throw new Error("message is required");var e=Ec(Ec({},_i),t),n=new eI(e),i=Z2(e.appendTo||ea().body,e.position||_i.position,e.offsetTop||_i.offsetTop,e.offsetBottom||_i.offsetBottom,e.offsetLeft||_i.offsetLeft,e.offsetRight||_i.offsetRight);if(e.single)for(var r=i.lastElementChild;r;)i.removeChild(r),r=i.lastElementChild;i.appendChild(n.element)}var eI=function(){function t(e){var n=this;Uv(this,t),this.element=ea().createElement("div"),this.opacity=e.opacity,this.type=e.type,this.animate=e.animate,this.dismissible=e.dismissible,this.closeOnClick=e.closeOnClick,this.message=e.message,this.duration=e.duration,this.pauseOnHover=e.pauseOnHover,this.offsetTop=e.offsetTop,this.offsetBottom=e.offsetBottom,this.offsetLeft=e.offsetLeft,this.offsetRight=e.offsetRight,this.extraClasses=e.extraClasses;var i="width:auto;pointer-events:auto;display:inline-flex;white-space:pre-wrap;opacity:".concat(this.opacity,";"),r=["notification",this.extraClasses];if(this.type&&r.push(this.type),this.animate&&this.animate.in){var o="animate__".concat(this.animate.in),s=this.animate.speed?"animate__".concat(this.animate.speed):"animate__faster";r.push("animate__animated ".concat(o," ").concat(s)),this.onAnimationEnd(function(){return n.element.classList.remove(o)})}if(this.element.className=r.join(" "),this.dismissible){var a=ea().createElement("button");a.className="delete",a.addEventListener("click",function(){n.destroy()}),this.element.insertAdjacentElement("afterbegin",a)}else i+="padding: 1.25rem 1.5rem";this.closeOnClick&&this.element.addEventListener("click",function(){n.destroy()}),this.element.setAttribute("style",i),typeof this.message=="string"?this.element.insertAdjacentHTML("beforeend",this.message):this.element.appendChild(this.message);var l=new tI(function(){n.destroy()},this.duration);this.pauseOnHover&&(this.element.addEventListener("mouseover",function(){l.pause()}),this.element.addEventListener("mouseout",function(){l.resume()}))}return jv(t,[{key:"destroy",value:function(){var e=this;this.animate&&this.animate.out?(this.element.classList.add("animate__".concat(this.animate.out)),this.onAnimationEnd(function(){e.removeParent(e.element.parentNode),e.element.remove(),delete zr.position})):(this.removeParent(this.element.parentNode),this.element.remove(),delete zr.position)}},{key:"removeParent",value:function(e){e&&1>=e.children.length&&e.remove()}},{key:"onAnimationEnd",value:function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:function(){},n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(var i in n)if(this.element.style[i]!==void 0){this.element.addEventListener(n[i],function(){return e()});break}}}]),t}(),tI=function(){function t(e,n){Uv(this,t),this.timer,this.start,this.remaining=n,this.callback=e,this.resume()}return jv(t,[{key:"pause",value:function(){typeof document=="undefined"||(window.clearTimeout(this.timer),this.remaining-=new Date-this.start)}},{key:"resume",value:function(){typeof document=="undefined"||(this.start=new Date,window.clearTimeout(this.timer),this.timer=window.setTimeout(this.callback,this.remaining))}}]),t}();nk({apiKey:"AIzaSyCU5YpnSDueos6WH_yfS44ORPLGNj2FGpo",authDomain:"yearbook-a563c.firebaseapp.com",projectId:"yearbook-a563c",storageBucket:"yearbook-a563c.appspot.com",messagingSenderId:"708237611773",appId:"1:708237611773:web:ce4cbad19fe937767b2494"});const ns=i_();var Sm;const Ft=rr({isSignedIn:!!ns.currentUser,auth:ns,isNavbarVisible:!1,provider:new Yt,user:(Sm=ns.currentUser)!=null?Sm:{},routes:_c.filter(t=>{var e;return!((e=t.meta)!=null&&e.reqAuth)}),selectedRoute:Ed.currentRoute,authStateVerified:new Promise(t=>{Hk(ns,e=>{t(),Ft.isSignedIn=!!e,Ft.user=e!=null?e:{},Ft.routes=_c.filter(n=>{var i;return!!e||!((i=n.meta)!=null&&i.reqAuth)})})}),signInWithGoogle:()=>kx(Ft.auth,Ft.provider),signOut:()=>Gk(Ft.auth),signInOut:()=>Ft.isSignedIn?Ft.signOut():Ft.signInWithGoogle(),displayError:t=>Zh({message:t,type:"is-danger"}),displaySuccess:t=>Zh({message:t,type:"is-success"})}),jS=Z5();var vs=Ft;const nI=Mn({setup(){return{authState:vs}}}),iI={"aria-label":"main navigation",class:"navbar",role:"navigation"},rI={class:"navbar-brand"},oI=de("a",{class:"navbar-item"},[de("img",{height:"28",src:"https://bulma.io/images/bulma-logo.png",width:"112",alt:"Ashby Logo"})],-1),sI=de("span",{"aria-hidden":"true"},null,-1),aI=de("span",{"aria-hidden":"true"},null,-1),lI=de("span",{"aria-hidden":"true"},null,-1),cI=[sI,aI,lI],uI={class:"navbar-start"},dI={class:"navbar-end"},fI={class:"navbar-item"},hI={class:"buttons"},mI=de("br",null,null,-1),pI=de("br",null,null,-1),gI={class:"footer"},bI={class:"content has-text-centered"},vI=de("p",null,[Sr(" Made by "),de("a",{href:"https://github.com/axriosn"},"Alex R."),Sr(" for Ashby RC's Membership and Yearbook Committee. The source code and website content is purposefully "),de("a",{href:"https://choosealicense.com/no-permission/"},"not licensed"),Sr(". All rights reserved. ")],-1),yI={href:"https://twitter.com"},wI={class:"icon is-medium"},kI={href:"https://instagram.com"},xI={class:"icon is-medium"},_I={href:"https://facebook.com"},EI={class:"icon is-medium"};function II(t,e,n,i,r,o){const s=nl("router-link"),a=nl("router-view"),l=nl("font-awesome-icon");return cs(),$l(Et,null,[de("nav",iI,[de("div",rI,[oI,de("a",{class:Vr([{"is-active":t.authState.isNavbarVisible},"navbar-burger"]),"aria-controls":"navbar","aria-expanded":"false","aria-label":"menu","data-toggle":"navbar",role:"button",onClick:e[0]||(e[0]=c=>t.authState.isNavbarVisible=!t.authState.isNavbarVisible)},cI,2)]),de("div",{id:"navbar",class:Vr([{"is-active":t.authState.isNavbarVisible},"navbar-menu"])},[de("div",uI,[(cs(!0),$l(Et,null,$y(t.authState.routes,c=>(cs(),sw(s,{to:c.path,class:"navbar-item"},{default:rp(()=>[Sr(Vd(c.name),1)]),_:2},1032,["to"]))),256))]),de("div",dI,[de("div",fI,[de("div",hI,[de("a",{class:"button is-success",onClick:e[1]||(e[1]=(...c)=>t.authState.signInOut&&t.authState.signInOut(...c))},Vd(t.authState.isSignedIn?"Sign Out":"Sign In"),1)])])])],2)]),mI,Ne(a),pI,de("footer",gI,[de("div",bI,[vI,de("a",yI,[de("span",wI,[Ne(l,{icon:["fab","twitter"]})])]),de("a",kI,[de("span",xI,[Ne(l,{icon:["fab","instagram"]})])]),de("a",_I,[de("span",EI,[Ne(l,{icon:["fab","facebook"]})])])])])],64)}var TI=zv(nI,[["render",II]]),SI=function(){return Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},Ic;typeof window!="undefined"&&(typeof Promise!="undefined"?Ic=new Promise(function(t){return window.addEventListener("load",t)}):Ic={then:function(t){return window.addEventListener("load",t)}});function AI(t,e){e===void 0&&(e={});var n=e.registrationOptions;n===void 0&&(n={}),delete e.registrationOptions;var i=function(r){for(var o=[],s=arguments.length-1;s-- >0;)o[s]=arguments[s+1];e&&e[r]&&e[r].apply(e,o)};"serviceWorker"in navigator&&Ic.then(function(){SI()?(CI(t,i,n),navigator.serviceWorker.ready.then(function(r){i("ready",r)}).catch(function(r){return mo(i,r)})):($v(t,i,n),navigator.serviceWorker.ready.then(function(r){i("ready",r)}).catch(function(r){return mo(i,r)}))})}function mo(t,e){navigator.onLine||t("offline"),t("error",e)}function $v(t,e,n){navigator.serviceWorker.register(t,n).then(function(i){if(e("registered",i),i.waiting){e("updated",i);return}i.onupdatefound=function(){e("updatefound",i);var r=i.installing;r.onstatechange=function(){r.state==="installed"&&(navigator.serviceWorker.controller?e("updated",i):e("cached",i))}}}).catch(function(i){return mo(e,i)})}function CI(t,e,n){fetch(t).then(function(i){i.status===404?(e("error",new Error("Service worker not found at "+t)),em()):i.headers.get("content-type").indexOf("javascript")===-1?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+i.headers.get("content-type"))),em()):$v(t,e,n)}).catch(function(i){return mo(e,i)})}function em(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}).catch(function(t){return mo(emit,t)})}AI("./service-worker.js",{ready(){console.log(`App is being served from cache by a service worker.
For more details, visit https://goo.gl/AFskqB`)},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function tm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?tm(Object(n),!0).forEach(function(i){NI(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tm(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function ta(t){return ta=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ta(t)}function OI(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function nm(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function RI(t,e,n){return e&&nm(t.prototype,e),n&&nm(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function NI(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Id(t,e){return DI(t)||LI(t,e)||Vv(t,e)||zI()}function Wa(t){return PI(t)||MI(t)||Vv(t)||FI()}function PI(t){if(Array.isArray(t))return Tc(t)}function DI(t){if(Array.isArray(t))return t}function MI(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function LI(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,o=!1,s,a;try{for(n=n.call(t);!(r=(s=n.next()).done)&&(i.push(s.value),!(e&&i.length===e));r=!0);}catch(l){o=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw a}}return i}}function Vv(t,e){if(!!t){if(typeof t=="string")return Tc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tc(t,e)}}function Tc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function FI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var im=function(){},Td={},Bv={},qv=null,Hv={mark:im,measure:im};try{typeof window!="undefined"&&(Td=window),typeof document!="undefined"&&(Bv=document),typeof MutationObserver!="undefined"&&(qv=MutationObserver),typeof performance!="undefined"&&(Hv=performance)}catch{}var UI=Td.navigator||{},rm=UI.userAgent,om=rm===void 0?"":rm,Pn=Td,Ee=Bv,sm=qv,is=Hv;Pn.document;var cn=!!Ee.documentElement&&!!Ee.head&&typeof Ee.addEventListener=="function"&&typeof Ee.createElement=="function",Gv=~om.indexOf("MSIE")||~om.indexOf("Trident/"),on="___FONT_AWESOME___",Sc=16,Kv="fa",Wv="svg-inline--fa",ci="data-fa-i2svg",Ac="data-fa-pseudo-element",jI="data-fa-pseudo-element-pending",Sd="data-prefix",Ad="data-icon",am="fontawesome-i2svg",$I="async",VI=["HTML","HEAD","STYLE","SCRIPT"],Yv=function(){try{return!0}catch{return!1}}(),Cd={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},na={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Qv={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},BI={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},qI=/fa[srltdbk\-\ ]/,Xv="fa-layers-text",HI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,GI={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Jv=[1,2,3,4,5,6,7,8,9,10],KI=Jv.concat([11,12,13,14,15,16,17,18,19,20]),WI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},YI=[].concat(Wa(Object.keys(na)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Yn.GROUP,Yn.SWAP_OPACITY,Yn.PRIMARY,Yn.SECONDARY]).concat(Jv.map(function(t){return"".concat(t,"x")})).concat(KI.map(function(t){return"w-".concat(t)})),Zv=Pn.FontAwesomeConfig||{};function QI(t){var e=Ee.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function XI(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ee&&typeof Ee.querySelector=="function"){var JI=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];JI.forEach(function(t){var e=Id(t,2),n=e[0],i=e[1],r=XI(QI(n));r!=null&&(Zv[i]=r)})}var ZI={familyPrefix:Kv,styleDefault:"solid",replacementClass:Wv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ur=D(D({},ZI),Zv);Ur.autoReplaceSvg||(Ur.observeMutations=!1);var H={};Object.keys(Ur).forEach(function(t){Object.defineProperty(H,t,{enumerable:!0,set:function(n){Ur[t]=n,ys.forEach(function(i){return i(H)})},get:function(){return Ur[t]}})});Pn.FontAwesomeConfig=H;var ys=[];function eT(t){return ys.push(t),function(){ys.splice(ys.indexOf(t),1)}}var mn=Sc,Ut={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tT(t){if(!(!t||!cn)){var e=Ee.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ee.head.childNodes,i=null,r=n.length-1;r>-1;r--){var o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=o)}return Ee.head.insertBefore(e,i),t}}var nT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function po(){for(var t=12,e="";t-- >0;)e+=nT[Math.random()*62|0];return e}function dr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Od(t){return t.classList?dr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function e0(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function iT(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(e0(t[n]),'" ')},"").trim()}function Ya(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Rd(t){return t.size!==Ut.size||t.x!==Ut.x||t.y!==Ut.y||t.rotate!==Ut.rotate||t.flipX||t.flipY}function rT(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function oT(t){var e=t.transform,n=t.width,i=n===void 0?Sc:n,r=t.height,o=r===void 0?Sc:r,s=t.startCentered,a=s===void 0?!1:s,l="";return a&&Gv?l+="translate(".concat(e.x/mn-i/2,"em, ").concat(e.y/mn-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/mn,"em), calc(-50% + ").concat(e.y/mn,"em)) "):l+="translate(".concat(e.x/mn,"em, ").concat(e.y/mn,"em) "),l+="scale(".concat(e.size/mn*(e.flipX?-1:1),", ").concat(e.size/mn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var sT=`:root, :host {
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
}`;function t0(){var t=Kv,e=Wv,n=H.familyPrefix,i=H.replacementClass,r=sT;if(n!==t||i!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var lm=!1;function Il(){H.autoAddCss&&!lm&&(tT(t0()),lm=!0)}var aT={mixout:function(){return{dom:{css:t0,insertCss:Il}}},hooks:function(){return{beforeDOMElementCreation:function(){Il()},beforeI2svg:function(){Il()}}}},sn=Pn||{};sn[on]||(sn[on]={});sn[on].styles||(sn[on].styles={});sn[on].hooks||(sn[on].hooks={});sn[on].shims||(sn[on].shims=[]);var At=sn[on],n0=[],lT=function t(){Ee.removeEventListener("DOMContentLoaded",t),ia=1,n0.map(function(e){return e()})},ia=!1;cn&&(ia=(Ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ee.readyState),ia||Ee.addEventListener("DOMContentLoaded",lT));function cT(t){!cn||(ia?setTimeout(t,0):n0.push(t))}function $o(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?e0(t):"<".concat(e," ").concat(iT(i),">").concat(o.map($o).join(""),"</").concat(e,">")}function cm(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var uT=function(e,n){return function(i,r,o,s){return e.call(n,i,r,o,s)}},Tl=function(e,n,i,r){var o=Object.keys(e),s=o.length,a=r!==void 0?uT(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[o[0]]):(l=0,u=i);l<s;l++)c=o[l],u=a(u,e[c],c,e);return u};function dT(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Cc(t){var e=dT(t);return e.length===1?e[0].toString(16):null}function fT(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function um(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function Oc(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,o=um(e);typeof At.hooks.addPack=="function"&&!r?At.hooks.addPack(t,um(e)):At.styles[t]=D(D({},At.styles[t]||{}),o),t==="fas"&&Oc("fa",e)}var jr=At.styles,hT=At.shims,mT=Object.values(Qv),Nd=null,i0={},r0={},o0={},s0={},a0={},pT=Object.keys(Cd);function gT(t){return~YI.indexOf(t)}function bT(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!gT(r)?r:null}var l0=function(){var e=function(o){return Tl(jr,function(s,a,l){return s[l]=Tl(a,o,{}),s},{})};i0=e(function(r,o,s){if(o[3]&&(r[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){r[l.toString(16)]=s})}return r}),r0=e(function(r,o,s){if(r[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){r[l]=s})}return r}),a0=e(function(r,o,s){var a=o[2];return r[s]=s,a.forEach(function(l){r[l]=s}),r});var n="far"in jr||H.autoFetchSvg,i=Tl(hT,function(r,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(r.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});o0=i.names,s0=i.unicodes,Nd=Qa(H.styleDefault)};eT(function(t){Nd=Qa(t.styleDefault)});l0();function Pd(t,e){return(i0[t]||{})[e]}function vT(t,e){return(r0[t]||{})[e]}function Ci(t,e){return(a0[t]||{})[e]}function c0(t){return o0[t]||{prefix:null,iconName:null}}function yT(t){var e=s0[t],n=Pd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Dn(){return Nd}var Dd=function(){return{prefix:null,iconName:null,rest:[]}};function Qa(t){var e=Cd[t],n=na[t]||na[e],i=t in At.styles?t:null;return n||i||null}function Xa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,i=n===void 0?!1:n,r=null,o=t.reduce(function(s,a){var l=bT(H.familyPrefix,a);if(jr[a]?(a=mT.includes(a)?BI[a]:a,r=a,s.prefix=a):pT.indexOf(a)>-1?(r=a,s.prefix=Qa(a)):l?s.iconName=l:a!==H.replacementClass&&s.rest.push(a),!i&&s.prefix&&s.iconName){var c=r==="fa"?c0(s.iconName):{},u=Ci(s.prefix,s.iconName);c.prefix&&(r=null),s.iconName=c.iconName||u||s.iconName,s.prefix=c.prefix||s.prefix,s.prefix==="far"&&!jr.far&&jr.fas&&!H.autoFetchSvg&&(s.prefix="fas")}return s},Dd());return(o.prefix==="fa"||r==="fa")&&(o.prefix=Dn()||"fas"),o}var wT=function(){function t(){OI(this,t),this.definitions={}}return RI(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),s[a]),Oc(a,s[a]);var l=Qv[a];l&&Oc(l,s[a]),l0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(o){var s=r[o],a=s.prefix,l=s.iconName,c=s.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(n[a][d]=c)}),n[a][l]=c}),n}}]),t}(),dm=[],Oi={},ji={},kT=Object.keys(ji);function xT(t,e){var n=e.mixoutsTo;return dm=t,Oi={},Object.keys(ji).forEach(function(i){kT.indexOf(i)===-1&&delete ji[i]}),dm.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(n[s]=r[s]),ta(r[s])==="object"&&Object.keys(r[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=r[s][a]})}),i.hooks){var o=i.hooks();Object.keys(o).forEach(function(s){Oi[s]||(Oi[s]=[]),Oi[s].push(o[s])})}i.provides&&i.provides(ji)}),n}function Rc(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var o=Oi[t]||[];return o.forEach(function(s){e=s.apply(null,[e].concat(i))}),e}function ui(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Oi[t]||[];r.forEach(function(o){o.apply(null,n)})}function an(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ji[t]?ji[t].apply(null,e):void 0}function Nc(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Dn();if(!!e)return e=Ci(n,e)||e,cm(u0.definitions,n,e)||cm(At.styles,n,e)}var u0=new wT,_T=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,ui("noAuto")},ET={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return cn?(ui("beforeI2svg",e),an("pseudoElements2svg",e),an("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,cT(function(){TT({autoReplaceSvgRoot:n}),ui("watch",e)})}},IT={icon:function(e){if(e===null)return null;if(ta(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ci(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Qa(e[0]);return{prefix:i,iconName:Ci(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(H.familyPrefix,"-"))>-1||e.match(qI))){var r=Xa(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Dn(),iconName:Ci(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var o=Dn();return{prefix:o,iconName:Ci(o,e)||e}}}},vt={noAuto:_T,config:H,dom:ET,parse:IT,library:u0,findIconDefinition:Nc,toHtml:$o},TT=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?Ee:n;(Object.keys(At.styles).length>0||H.autoFetchSvg)&&cn&&H.autoReplaceSvg&&vt.dom.i2svg({node:i})};function Ja(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return $o(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!cn){var i=Ee.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function ST(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,o=t.styles,s=t.transform;if(Rd(s)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};r.style=Ya(D(D({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function AT(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,o=t.symbol,s=o===!0?"".concat(e,"-").concat(H.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},r),{},{id:s}),children:i}]}]}function Md(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,o=t.iconName,s=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,d=t.extra,f=t.watchable,m=f===void 0?!1:f,g=i.found?i:n,E=g.width,k=g.height,b=r==="fak",y=[H.replacementClass,o?"".concat(H.familyPrefix,"-").concat(o):""].filter(function(Ae){return d.classes.indexOf(Ae)===-1}).filter(function(Ae){return Ae!==""||!!Ae}).concat(d.classes).join(" "),N={children:[],attributes:D(D({},d.attributes),{},{"data-prefix":r,"data-icon":o,class:y,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(k)})},U=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(E/k*16*.0625,"em")}:{};m&&(N.attributes[ci]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(u||po())},children:[l]}),delete N.attributes.title);var Z=D(D({},N),{},{prefix:r,iconName:o,main:n,mask:i,maskId:c,transform:s,symbol:a,styles:D(D({},U),d.styles)}),ce=i.found&&n.found?an("generateAbstractMask",Z)||{children:[],attributes:{}}:an("generateAbstractIcon",Z)||{children:[],attributes:{}},xe=ce.children,ot=ce.attributes;return Z.children=xe,Z.attributes=ot,a?AT(Z):ST(Z)}function fm(t){var e=t.content,n=t.width,i=t.height,r=t.transform,o=t.title,s=t.extra,a=t.watchable,l=a===void 0?!1:a,c=D(D(D({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(c[ci]="");var u=D({},s.styles);Rd(r)&&(u.transform=oT({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var d=Ya(u);d.length>0&&(c.style=d);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),o&&f.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),f}function CT(t){var e=t.content,n=t.title,i=t.extra,r=D(D(D({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),o=Ya(i.styles);o.length>0&&(r.style=o);var s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Sl=At.styles;function Pc(t){var e=t[0],n=t[1],i=t.slice(4),r=Id(i,1),o=r[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(H.familyPrefix,"-").concat(Yn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.familyPrefix,"-").concat(Yn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(H.familyPrefix,"-").concat(Yn.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}var OT={found:!1,width:512,height:512};function RT(t,e){!Yv&&!H.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Dc(t,e){var n=e;return e==="fa"&&H.styleDefault!==null&&(e=Dn()),new Promise(function(i,r){if(an("missingIconAbstract"),n==="fa"){var o=c0(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Sl[e]&&Sl[e][t]){var s=Sl[e][t];return i(Pc(s))}RT(t,e),i(D(D({},OT),{},{icon:H.showMissingIcons&&t?an("missingIconAbstract")||{}:{}}))})}var hm=function(){},Mc=H.measurePerformance&&is&&is.mark&&is.measure?is:{mark:hm,measure:hm},_r='FA "6.1.1"',NT=function(e){return Mc.mark("".concat(_r," ").concat(e," begins")),function(){return d0(e)}},d0=function(e){Mc.mark("".concat(_r," ").concat(e," ends")),Mc.measure("".concat(_r," ").concat(e),"".concat(_r," ").concat(e," begins"),"".concat(_r," ").concat(e," ends"))},Ld={begin:NT,end:d0},ws=function(){};function mm(t){var e=t.getAttribute?t.getAttribute(ci):null;return typeof e=="string"}function PT(t){var e=t.getAttribute?t.getAttribute(Sd):null,n=t.getAttribute?t.getAttribute(Ad):null;return e&&n}function DT(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(H.replacementClass)}function MT(){if(H.autoReplaceSvg===!0)return ks.replace;var t=ks[H.autoReplaceSvg];return t||ks.replace}function LT(t){return Ee.createElementNS("http://www.w3.org/2000/svg",t)}function FT(t){return Ee.createElement(t)}function f0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?LT:FT:n;if(typeof t=="string")return Ee.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])});var o=t.children||[];return o.forEach(function(s){r.appendChild(f0(s,{ceFn:i}))}),r}function zT(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ks={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(f0(r),n)}),n.getAttribute(ci)===null&&H.keepOriginalSource){var i=Ee.createComment(zT(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Od(n).indexOf(H.replacementClass))return ks.replace(e);var r=new RegExp("".concat(H.familyPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var o=i[0].attributes.class.split(" ").reduce(function(a,l){return l===H.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=i.map(function(a){return $o(a)}).join(`
`);n.setAttribute(ci,""),n.innerHTML=s}};function pm(t){t()}function h0(t,e){var n=typeof e=="function"?e:ws;if(t.length===0)n();else{var i=pm;H.mutateApproach===$I&&(i=Pn.requestAnimationFrame||pm),i(function(){var r=MT(),o=Ld.begin("mutate");t.map(r),o(),n()})}}var Fd=!1;function m0(){Fd=!0}function Lc(){Fd=!1}var ra=null;function gm(t){if(!!sm&&!!H.observeMutations){var e=t.treeCallback,n=e===void 0?ws:e,i=t.nodeCallback,r=i===void 0?ws:i,o=t.pseudoElementsCallback,s=o===void 0?ws:o,a=t.observeMutationsRoot,l=a===void 0?Ee:a;ra=new sm(function(c){if(!Fd){var u=Dn();dr(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!mm(d.addedNodes[0])&&(H.searchPseudoElements&&s(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&H.searchPseudoElements&&s(d.target.parentNode),d.type==="attributes"&&mm(d.target)&&~WI.indexOf(d.attributeName))if(d.attributeName==="class"&&PT(d.target)){var f=Xa(Od(d.target)),m=f.prefix,g=f.iconName;d.target.setAttribute(Sd,m||u),g&&d.target.setAttribute(Ad,g)}else DT(d.target)&&r(d.target)})}}),cn&&ra.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function UT(){!ra||ra.disconnect()}function jT(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var o=r.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(i[s]=a.join(":").trim()),i},{})),n}function $T(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Xa(Od(t));return r.prefix||(r.prefix=Dn()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||r.prefix&&i.length>0&&(r.iconName=vT(r.prefix,t.innerText)||Pd(r.prefix,Cc(t.innerText))),r}function VT(t){var e=dr(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return H.autoA11y&&(n?e["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(i||po()):(e["aria-hidden"]="true",e.focusable="false")),e}function BT(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ut,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=$T(t),i=n.iconName,r=n.prefix,o=n.rest,s=VT(t),a=Rc("parseNodeAttributes",{},t),l=e.styleParser?jT(t):[];return D({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Ut,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var qT=At.styles;function p0(t){var e=H.autoReplaceSvg==="nest"?bm(t,{styleParser:!1}):bm(t);return~e.extra.classes.indexOf(Xv)?an("generateLayersText",t,e):an("generateSvgReplacementMutation",t,e)}function vm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!cn)return Promise.resolve();var n=Ee.documentElement.classList,i=function(d){return n.add("".concat(am,"-").concat(d))},r=function(d){return n.remove("".concat(am,"-").concat(d))},o=H.autoFetchSvg?Object.keys(Cd):Object.keys(qT),s=[".".concat(Xv,":not([").concat(ci,"])")].concat(o.map(function(u){return".".concat(u,":not([").concat(ci,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=dr(t.querySelectorAll(s))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var l=Ld.begin("onTree"),c=a.reduce(function(u,d){try{var f=p0(d);f&&u.push(f)}catch(m){Yv||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,d){Promise.all(c).then(function(f){h0(f,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(f){l(),d(f)})})}function HT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;p0(t).then(function(n){n&&h0([n],e)})}function GT(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Nc(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Nc(r||{})),t(i,D(D({},n),{},{mask:r}))}}var KT=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?Ut:i,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,d=n.title,f=d===void 0?null:d,m=n.titleId,g=m===void 0?null:m,E=n.classes,k=E===void 0?[]:E,b=n.attributes,y=b===void 0?{}:b,N=n.styles,U=N===void 0?{}:N;if(!!e){var Z=e.prefix,ce=e.iconName,xe=e.icon;return Ja(D({type:"icon"},e),function(){return ui("beforeDOMElementCreation",{iconDefinition:e,params:n}),H.autoA11y&&(f?y["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(g||po()):(y["aria-hidden"]="true",y.focusable="false")),Md({icons:{main:Pc(xe),mask:l?Pc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Z,iconName:ce,transform:D(D({},Ut),r),symbol:s,title:f,maskId:u,titleId:g,extra:{attributes:y,styles:U,classes:k}})})}},WT={mixout:function(){return{icon:GT(KT)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vm,n.nodeCallback=HT,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?Ee:i,o=n.callback,s=o===void 0?function(){}:o;return vm(r,s)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,o=i.title,s=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,d=i.maskId,f=i.extra;return new Promise(function(m,g){Promise.all([Dc(r,a),u.iconName?Dc(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var k=Id(E,2),b=k[0],y=k[1];m([n,Md({icons:{main:b,mask:y},prefix:a,iconName:r,transform:l,symbol:c,maskId:d,title:o,titleId:s,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,o=n.main,s=n.transform,a=n.styles,l=Ya(a);l.length>0&&(r.style=l);var c;return Rd(s)&&(c=an("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),i.push(c||o.icon),{children:i,attributes:r}}}},YT={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,o=r===void 0?[]:r;return Ja({type:"layer"},function(){ui("beforeDOMElementCreation",{assembler:n,params:i});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(H.familyPrefix,"-layers")].concat(Wa(o)).join(" ")},children:s}]})}}}},QT={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,o=r===void 0?null:r,s=i.classes,a=s===void 0?[]:s,l=i.attributes,c=l===void 0?{}:l,u=i.styles,d=u===void 0?{}:u;return Ja({type:"counter",content:n},function(){return ui("beforeDOMElementCreation",{content:n,params:i}),CT({content:n.toString(),title:o,extra:{attributes:c,styles:d,classes:["".concat(H.familyPrefix,"-layers-counter")].concat(Wa(a))}})})}}}},XT={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,o=r===void 0?Ut:r,s=i.title,a=s===void 0?null:s,l=i.classes,c=l===void 0?[]:l,u=i.attributes,d=u===void 0?{}:u,f=i.styles,m=f===void 0?{}:f;return Ja({type:"text",content:n},function(){return ui("beforeDOMElementCreation",{content:n,params:i}),fm({content:n,transform:D(D({},Ut),o),title:a,extra:{attributes:d,styles:m,classes:["".concat(H.familyPrefix,"-layers-text")].concat(Wa(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,o=i.transform,s=i.extra,a=null,l=null;if(Gv){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return H.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,fm({content:n.innerHTML,width:a,height:l,transform:o,title:r,extra:s,watchable:!0})])}}},JT=new RegExp('"',"ug"),ym=[1105920,1112319];function ZT(t){var e=t.replace(JT,""),n=fT(e,0),i=n>=ym[0]&&n<=ym[1],r=e.length===2?e[0]===e[1]:!1;return{value:Cc(r?e[0]:e),isSecondary:i||r}}function wm(t,e){var n="".concat(jI).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var o=dr(t.children),s=o.filter(function(ce){return ce.getAttribute(Ac)===e})[0],a=Pn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(HI),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(s&&!l)return t.removeChild(s),i();if(l&&u!=="none"&&u!==""){var d=a.getPropertyValue("content"),f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?na[l[2].toLowerCase()]:GI[c],m=ZT(d),g=m.value,E=m.isSecondary,k=l[0].startsWith("FontAwesome"),b=Pd(f,g),y=b;if(k){var N=yT(g);N.iconName&&N.prefix&&(b=N.iconName,f=N.prefix)}if(b&&!E&&(!s||s.getAttribute(Sd)!==f||s.getAttribute(Ad)!==y)){t.setAttribute(n,y),s&&t.removeChild(s);var U=BT(),Z=U.extra;Z.attributes[Ac]=e,Dc(b,f).then(function(ce){var xe=Md(D(D({},U),{},{icons:{main:ce,mask:Dd()},prefix:f,iconName:y,extra:Z,watchable:!0})),ot=Ee.createElement("svg");e==="::before"?t.insertBefore(ot,t.firstChild):t.appendChild(ot),ot.outerHTML=xe.map(function(Ae){return $o(Ae)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function eS(t){return Promise.all([wm(t,"::before"),wm(t,"::after")])}function tS(t){return t.parentNode!==document.head&&!~VI.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ac)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function km(t){if(!!cn)return new Promise(function(e,n){var i=dr(t.querySelectorAll("*")).filter(tS).map(eS),r=Ld.begin("searchPseudoElements");m0(),Promise.all(i).then(function(){r(),Lc(),e()}).catch(function(){r(),Lc(),n()})})}var nS={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=km,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?Ee:i;H.searchPseudoElements&&km(r)}}},xm=!1,iS={mixout:function(){return{dom:{unwatch:function(){m0(),xm=!0}}}},hooks:function(){return{bootstrap:function(){gm(Rc("mutationObserverCallbacks",{}))},noAuto:function(){UT()},watch:function(n){var i=n.observeMutationsRoot;xm?Lc():gm(Rc("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},_m=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var o=r.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return i.flipX=!0,i;if(s&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(s){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},rS={mixout:function(){return{parse:{transform:function(n){return _m(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=_m(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(s/2*-1," -256)")},m={outer:a,inner:d,path:f};return{tag:"g",attributes:D({},m.outer),children:[{tag:"g",attributes:D({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:D(D({},i.icon.attributes),m.path)}]}]}}}},Al={x:0,y:0,width:"100%",height:"100%"};function Em(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function oS(t){return t.tag==="g"?t.children:[t]}var sS={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),o=r?Xa(r.split(" ").map(function(s){return s.trim()})):Dd();return o.prefix||(o.prefix=Dn()),n.mask=o,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,c=o.width,u=o.icon,d=s.width,f=s.icon,m=rT({transform:l,containerWidth:d,iconWidth:c}),g={tag:"rect",attributes:D(D({},Al),{},{fill:"white"})},E=u.children?{children:u.children.map(Em)}:{},k={tag:"g",attributes:D({},m.inner),children:[Em(D({tag:u.tag,attributes:D(D({},u.attributes),m.path)},E))]},b={tag:"g",attributes:D({},m.outer),children:[k]},y="mask-".concat(a||po()),N="clip-".concat(a||po()),U={tag:"mask",attributes:D(D({},Al),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,b]},Z={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:oS(f)},U]};return i.push(Z,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(y,")")},Al)}),{children:i,attributes:r}}}},aS={provides:function(e){var n=!1;Pn.matchMedia&&(n=Pn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:D(D({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=D(D({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},s),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:D(D({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:D(D({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},lS={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},cS=[aT,WT,YT,QT,XT,nS,iS,rS,sS,aS,lS];xT(cS,{mixoutsTo:vt});vt.noAuto;var g0=vt.config,uS=vt.library;vt.dom;var oa=vt.parse;vt.findIconDefinition;vt.toHtml;var dS=vt.icon;vt.layer;var fS=vt.text;vt.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var hS={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"]},mS={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},pS={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"]};function Im(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Tt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Im(Object(n),!0).forEach(function(i){st(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Im(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function sa(t){return sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sa(t)}function st(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function gS(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function bS(t,e){if(t==null)return{};var n=gS(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function Fc(t){return vS(t)||yS(t)||wS(t)||kS()}function vS(t){if(Array.isArray(t))return zc(t)}function yS(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wS(t,e){if(!!t){if(typeof t=="string")return zc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zc(t,e)}}function zc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function kS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xS=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},b0={exports:{}};(function(t){(function(e){var n=function(b,y,N){if(!c(y)||d(y)||f(y)||m(y)||l(y))return y;var U,Z=0,ce=0;if(u(y))for(U=[],ce=y.length;Z<ce;Z++)U.push(n(b,y[Z],N));else{U={};for(var xe in y)Object.prototype.hasOwnProperty.call(y,xe)&&(U[b(xe,N)]=n(b,y[xe],N))}return U},i=function(b,y){y=y||{};var N=y.separator||"_",U=y.split||/(?=[A-Z])/;return b.split(U).join(N)},r=function(b){return g(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(y,N){return N?N.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},o=function(b){var y=r(b);return y.substr(0,1).toUpperCase()+y.substr(1)},s=function(b,y){return i(b,y).toLowerCase()},a=Object.prototype.toString,l=function(b){return typeof b=="function"},c=function(b){return b===Object(b)},u=function(b){return a.call(b)=="[object Array]"},d=function(b){return a.call(b)=="[object Date]"},f=function(b){return a.call(b)=="[object RegExp]"},m=function(b){return a.call(b)=="[object Boolean]"},g=function(b){return b=b-0,b===b},E=function(b,y){var N=y&&"process"in y?y.process:y;return typeof N!="function"?b:function(U,Z){return N(U,b,Z)}},k={camelize:r,decamelize:s,pascalize:o,depascalize:s,camelizeKeys:function(b,y){return n(E(r,y),b)},decamelizeKeys:function(b,y){return n(E(s,y),b,y)},pascalizeKeys:function(b,y){return n(E(o,y),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=k:e.humps=k})(xS)})(b0);var _S=b0.exports,ES=["class","style"];function IS(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=_S.camelize(n.slice(0,i)),o=n.slice(i+1).trim();return e[r]=o,e},{})}function TS(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function zd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return zd(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=TS(u);break;case"style":l.style=IS(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var o=n.style,s=o===void 0?{}:o,a=bS(n,ES);return va(t.tag,Tt(Tt(Tt({},e),{},{class:r.class,style:Tt(Tt({},r.style),s)},r.attrs),a),i)}var v0=!1;try{v0=!0}catch{}function SS(){if(!v0&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function $r(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?st({},t,e):{}}function AS(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},st(e,"fa-".concat(t.size),t.size!==null),st(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),st(e,"fa-pull-".concat(t.pull),t.pull!==null),st(e,"fa-swap-opacity",t.swapOpacity),st(e,"fa-bounce",t.bounce),st(e,"fa-shake",t.shake),st(e,"fa-beat",t.beat),st(e,"fa-fade",t.fade),st(e,"fa-beat-fade",t.beatFade),st(e,"fa-flash",t.flash),st(e,"fa-spin-pulse",t.spinPulse),st(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Tm(t){if(t&&sa(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(oa.icon)return oa.icon(t);if(t===null)return null;if(sa(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var CS=Mn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=Se(function(){return Tm(e.icon)}),o=Se(function(){return $r("classes",AS(e))}),s=Se(function(){return $r("transform",typeof e.transform=="string"?oa.transform(e.transform):e.transform)}),a=Se(function(){return $r("mask",Tm(e.mask))}),l=Se(function(){return dS(r.value,Tt(Tt(Tt(Tt({},o.value),s.value),a.value),{},{symbol:e.symbol,title:e.title}))});Mi(l,function(u){if(!u)return SS("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=Se(function(){return l.value?zd(l.value.abstract[0],{},i):null});return function(){return c.value}}});Mn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=g0.familyPrefix,o=Se(function(){return["".concat(r,"-layers")].concat(Fc(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return va("div",{class:o.value},i.default?i.default():[])}}});Mn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=g0.familyPrefix,o=Se(function(){return $r("classes",[].concat(Fc(e.counter?["".concat(r,"-layers-counter")]:[]),Fc(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),s=Se(function(){return $r("transform",typeof e.transform=="string"?oa.transform(e.transform):e.transform)}),a=Se(function(){var c=fS(e.value.toString(),Tt(Tt({},s.value),o.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Se(function(){return zd(a.value,{},i)});return function(){return l.value}}});uS.add(pS,mS,hS);Bw(TI).use(Ed).component("font-awesome-icon",CS).mount("#app");export{X5 as D,Et as F,zS as T,MS as V,zv as _,de as a,Ne as b,$l as c,Mn as d,OS as e,es as f,jS as g,ss as h,Ry as i,vs as j,US as k,LS as l,sw as m,Vr as n,cs as o,rp as p,Sr as q,nl as r,rr as s,DS as t,NS as u,PS as v,RS as w,FS as y};
